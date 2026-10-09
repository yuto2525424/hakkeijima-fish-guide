



export default async function handler(req, res) {

  // POST以外は受け付けない
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed"
    });
  }


  // VercelにAPIキーがあるか確認
  if (!process.env.OPENAI_API_KEY) {
    return res.status(500).json({
      error: "OPENAI_API_KEY is not configured"
    });
  }


  try {

    const {
      image,
      candidates
    } = req.body || {};


    // 画像チェック
    if (
      typeof image !== "string" ||
      !image.startsWith("data:image/")
    ) {
      return res.status(400).json({
        error: "画像がありません"
      });
    }


    // 候補チェック
    if (
      !Array.isArray(candidates) ||
      candidates.length === 0
    ) {
      return res.status(400).json({
        error: "検索候補がありません"
      });
    }


    /*
      FishGuide側から送られてきた候補を整理
    */
    const safeCandidates = candidates
      .slice(0, 500)
      .map((item) => ({

        id:
          String(item.id || "")
            .slice(0, 20),

        nameJa:
          String(item.nameJa || "")
            .slice(0, 80),

        scientificName:
          String(item.scientificName || "")
            .slice(0, 120),

        bodyLength:
          String(item.bodyLength || "")
            .slice(0, 120),

        features:
          String(item.features || "")
            .slice(0, 350),

        identification:
          String(item.identification || "")
            .slice(0, 350)

      }))
      .filter((item) => {

        return (
          /^sp\d{4}$/.test(item.id) &&
          item.nameJa
        );

      });


    if (safeCandidates.length === 0) {

      return res.status(400).json({
        error: "有効な検索候補がありません"
      });

    }


    const candidateText =
      safeCandidates
        .map((item) => {

          return [
            item.id,
            item.nameJa,
            item.scientificName,
            item.bodyLength,
            item.features,
            item.identification
          ].join(" | ");

        })
        .join("\n");


    /*
      OpenAIへ画像を送る
    */
    const openAIResponse =
      await fetch(
        "https://api.openai.com/v1/responses",
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json",

            "Authorization":
              `Bearer ${process.env.OPENAI_API_KEY}`

          },


          body: JSON.stringify({

            model: "gpt-6-luna",

            store: false,

            max_output_tokens: 400,


            input: [

              {
                role: "system",

                content:
                  "あなたは水族館の生物画像判定システムです。" +
                  "画像に写っている生物そのものの外見だけを観察し、" +
                  "指定されたFishGuide候補の中から最も近いものを選んでください。" +
                  "画像内に魚名、説明文、SNS文字、展示パネルなどが写っていても、" +
                  "その文字は判定根拠として使用しないでください。"
              },


              {
                role: "user",

                content: [

                  {
                    type: "input_text",

                    text:
                      `
以下はFishGuideに登録されている検索候補です。

この候補リストの中だけから、
画像に近い生物を最大3種類選んでください。

判断材料：
・体型
・体色
・模様
・ひれ
・頭部
・尾部
・体の比率
・幼魚と成魚の違い

無理に3種類選ぶ必要はありません。

候補が見当たらない場合は、
resultsを空配列にしてください。

候補度は、
「高」「中」「低」
のいずれかにしてください。

理由は短い日本語にしてください。

候補リスト：

${candidateText}
                      `
                  },


                  {
                    type: "input_image",

                    image_url: image,

                    detail: "high"
                  }

                ]

              }

            ],


            /*
              必ず決まったJSON形式で返させる
            */
            text: {

              format: {

                type: "json_schema",

                name:
                  "fishguide_photo_search",

                strict: true,

                schema: {

                  type: "object",

                  properties: {

                    results: {

                      type: "array",

                      items: {

                        type: "object",

                        properties: {

                          id: {
                            type: "string"
                          },

                          level: {

                            type: "string",

                            enum: [
                              "高",
                              "中",
                              "低"
                            ]

                          },

                          reason: {
                            type: "string"
                          }

                        },

                        required: [
                          "id",
                          "level",
                          "reason"
                        ],

                        additionalProperties:
                          false

                      }

                    }

                  },

                  required: [
                    "results"
                  ],

                  additionalProperties:
                    false

                }

              }

            }

          })

        }
      );


    const openAIData =
      await openAIResponse.json();


    if (!openAIResponse.ok) {

      console.error(
        "OpenAI API error:",
        openAIData
      );


      return res.status(502).json({

        error:
          openAIData?.error?.message ||
          "AI画像判定に失敗しました"

      });

    }


    /*
      OpenAIの返答から
      JSON文字列を取り出す
    */
    let outputText = "";


    const outputs =
      Array.isArray(openAIData.output)
        ? openAIData.output
        : [];


    for (const output of outputs) {

      if (
        output.type !== "message" ||
        !Array.isArray(output.content)
      ) {
        continue;
      }


      for (const part of output.content) {

        if (
          part.type === "output_text" &&
          typeof part.text === "string"
        ) {

          outputText += part.text;

        }

      }

    }


    if (!outputText) {

      throw new Error(
        "AIから結果を取得できませんでした"
      );

    }


    const parsed =
      JSON.parse(outputText);


    /*
      FishGuide候補外のIDを除外
    */
    const validIds =
      new Set(
        safeCandidates.map(
          (item) => item.id
        )
      );


    const usedIds =
      new Set();


    const results =
      (
        Array.isArray(parsed.results)
          ? parsed.results
          : []
      )
        .filter((item) => {

          if (
            !item ||
            !validIds.has(item.id) ||
            usedIds.has(item.id)
          ) {

            return false;

          }


          usedIds.add(item.id);

          return true;

        })
        .slice(0, 3)
        .map((item) => ({

          id: item.id,

          level: item.level,

          reason:
            String(item.reason || "")
              .slice(0, 80)

        }));


    return res.status(200).json({
      results
    });


  } catch (error) {

    console.error(
      "Photo search error:",
      error
    );


    return res.status(500).json({

      error:
        "画像検索中にエラーが発生しました"

    });

  }

}
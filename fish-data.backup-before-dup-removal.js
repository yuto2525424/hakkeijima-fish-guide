// ========================================
// 八景島 Fish Guide
// 魚データ
// ========================================

const fishData = [

  {
    id: "sp0001",

    areaIds: [
      "labo5"
    ],

    nameJa: "マアジ",

    scientificName:
      "Trachurus japonicus",

    englishName:
      "Japanese jack mackerel",

    classification: [
      "スズキ目",
      "アジ科",
      "マアジ属"
    ],

    category: "魚類",

    image: "images/sp0001.jpg",

    trivia: [

      {
        title:
          "「ぜいご」は特殊なウロコ",

        text:
          "尾の近くにある硬い部分は、骨ではなく特殊なウロコです。"
      },

      {
        title:
          "大きな群れを作る",

        text:
          "海では群れで泳ぐことが多く、体に光が反射すると銀色に輝いて見えます。"
      }

    ],

    bodyLength:
      "全長約40cm",

    distribution:
      "日本各地の沿岸など",

    habitat:
      "沿岸から沖合",

    diet:
      "動物プランクトン、小魚、甲殻類など",

    features:
      "体は細長く、尾の近くにぜいごと呼ばれる硬いウロコがあります。",

    behavior:
      "群れを作って泳ぐことが多い魚です。",

    reproduction:
      "春から夏を中心に産卵します。",

    identification:
      "体側の側線に沿って並ぶぜいごが特徴です。",

    nameOrigin:
      "『味が良いからアジ』という説などがあります。",

    humanRelation:
      "刺身、干物、フライなど幅広い料理に利用されます。",

    observationPoint:
      "尾に近い部分にある『ぜいご』や、群れで泳ぐ様子に注目してみてください。",

    references: [
      "テスト用データ"
    ]


  },  // ========================================
  // sp0002 アオスジテンジクダイ
  // LABO1
  // ========================================

  {
    id: "sp0002",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "アオスジテンジクダイ",

    scientificName: "Ostorhinchus aureus",

    englishName: "Ring-tailed cardinalfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "テンジクダイ目",
      "テンジクダイ科",
      "スジイシモチ属"
    ],

    category: "魚類",

    image: "images/sp0002.jpg",

    trivia: [
      {
        title: "オスが口の中で卵を守る",
        text: "アオスジテンジクダイのオスは、受精した卵を口の中に入れて孵化まで守る「口内保育」を行います。卵を守っている個体では、口元が大きくふくらんで見えることがあります。"
      },
      {
        title: "昼は隠れ、暗くなると活発になる",
        text: "昼間は岩穴や岩棚の下などに集まっていることが多く、夜になると餌を求めて活動する夜行性の性質を持つ魚です。"
      }
    ],

    bodyLength: "最大で全長約14.5cm。水槽内では10cm前後の個体も多く見られます。",

    distribution: "インド洋から西太平洋に広く分布します。紅海・東アフリカからパプアニューギニア、オーストラリア、ニューカレドニア、日本では三宅島付近まで記録されています。",


   
     habitat: "浅いサンゴ礁や岩礁の、光の弱い場所に生息します。",

    diet: "動物プランクトンや小型甲殻類などを食べます。",

    features: "赤銅色の体で、眼の青い線と尾の黒帯が目立ちます。",

    behavior: "昼は岩陰に集まり、暗くなると活発になります。",

    reproduction: "オスが卵を口に入れ、孵化まで守ります。",

    identification: "眼の青い線と尾の付け根の黒帯が目印です。",

    nameOrigin: "「アオスジ」は、眼の周りの青い筋に由来すると考えられます。",

    humanRelation: "美しい体色や口内保育を観察できる魚です。",

    observationPoint: "口元がふくらんだ個体がいないか注目してみてください。",

    references: [
      "FishBase: Ostorhinchus aureus",
      "Fishes of Australia: Ostorhinchus aureus",
      "World Register of Marine Species (WoRMS): Ostorhinchus aureus"
    ]
  },


  // ========================================
  // sp0003 アオバスズメダイ
  // LABO1
  // ========================================

  {
    id: "sp0003",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "アオバスズメダイ",

    scientificName: "Chromis atripectoralis",

    englishName: "Black-axil chromis",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "スズメダイ科",
      "スズメダイ属"
    ],

    category: "魚類",

    image: "images/sp0003.jpg",

    trivia: [
      {
        title: "よく似た魚との違いは胸びれの付け根",
        text: "胸びれの付け根にある黒い斑点で見分けられます。"
      },
      {
        title: "卵を守るのはオス",
        text: "産みつけられた卵は、オスが守りながら水を送ります。"
      }
    ],

    bodyLength: "最大で全長約12cmです。",

    distribution: "インド太平洋に広く分布し、日本では琉球列島付近で見られます。",

    habitat: "礁湖やサンゴ礁に生息し、枝状サンゴの周辺でよく見られます。",

    diet: "主に動物プランクトンを食べます。",

    features: "青緑色の体と、胸びれの付け根の黒斑が特徴です。",

    behavior: "群れで泳ぎ、危険を感じるとサンゴの隙間へ逃げ込みます。",

    reproduction: "岩などに卵を産み、オスが卵を守ります。",

    identification: "胸びれの付け根にある黒い斑点が目印です。",

    nameOrigin: "青緑色の美しい体色から名付けられたと考えられます。",

    humanRelation: "鮮やかな体色から、観賞魚として知られています。",

    observationPoint: "胸びれの付け根に黒い斑点があるか見てみてください。",

    references: [
      "FishBase: Chromis atripectoralis",
      "FishBase Common Names: Aoba-suzumedai / Black-axil chromis"
    ]
  },


  // ========================================
  // sp0004 アカネハナゴイ
  // LABO1
  // ========================================

  {
    id: "sp0004",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "アカネハナゴイ",

    scientificName: "Nemanthias dispar",

    englishName: "Peach fairy basslet",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "スズキ目",
      "ハナダイ科",
      "アカネハナゴイ属"
    ],

    category: "魚類",

    image: "images/sp0004.jpg",

    trivia: [
      {
        title: "メスからオスへ性転換する",
        text: "群れのオスがいなくなると、大きなメスがオスへ変わることがあります。"
      },
      {
        title: "オスとメスで姿がかなり違う",
        text: "オスは赤い背びれが目立ち、メスは橙色をしています。"
      }
    ],

    bodyLength: "最大で全長約9.5cmです。",

    distribution: "熱帯の太平洋を中心に分布し、日本では八重山諸島周辺で見られます。",

    habitat: "潮通しのよいサンゴ礁外縁部などに生息します。",

    diet: "主に動物プランクトンを食べます。",

    features: "橙色から桃色の体で、オスは赤い背びれが目立ちます。",

    behavior: "群れで流れに向かって泳ぎながら餌を取ります。",

    reproduction: "メスとして成熟し、オスへ性転換することがあります。",

    identification: "オスの赤い背びれと長い腹びれが目印です。",

    nameOrigin: "茜色を思わせる体色から名付けられたと考えられます。",

    humanRelation: "美しい体色から、海水観賞魚として知られています。",

    observationPoint: "赤い背びれを持つオスを探してみてください。",

    references: [
      "FishBase: Nemanthias dispar",
      "Gill, A.C. 2022. Revised definitions of Mirolabrichthys and Nemanthias. Zootaxa 5092",
      "新潟市水族館 マリンピア日本海：アカネハナゴイ"
    ]
  },


  // ========================================
  // sp0005 アカハチハゼ
  // LABO1
  // ========================================

  {
    id: "sp0005",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "アカハチハゼ",

    scientificName: "Valenciennea strigata",

    englishName: "Blueband goby",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ハゼ目",
      "ハゼ科",
      "クロイトハゼ属"
    ],

    category: "魚類",

    image: "images/sp0005.jpg",

    trivia: [
      {
        title: "砂を口いっぱいに入れて餌を探す",
        text: "砂を口に入れ、中の小さな生物を食べて砂だけを出します。"
      },
      {
        title: "ペアで巣穴のそばに暮らす",
        text: "ペアで同じ巣穴の周辺に暮らすことがあります。"
      }
    ],

    bodyLength: "最大で全長約18cmです。",

    distribution: "インド太平洋に広く分布し、日本では琉球列島で見られます。",

    habitat: "礁湖やサンゴ礁の砂地などに生息します。",

    diet: "砂の中にいる小型の底生動物などを食べます。",

    features: "黄色い頭と、眼の下にある青い帯が特徴です。",

    behavior: "砂を何度も口に入れながら餌を探します。",

    reproduction: "ペアを作り、巣穴内の卵をオスが守ります。",

    identification: "黄色い頭と眼の下の青い帯が目印です。",

    nameOrigin: "和名の詳しい由来は、主要資料では確認できません。",

    humanRelation: "独特の摂餌行動から、観賞魚として飼育されます。",

    observationPoint: "砂を口に入れ、砂だけを出す動きに注目してみてください。",

    references: [
      "FishBase: Valenciennea strigata",
      "Hoese, D.F. & Larson, H.K. 1994. Revision of the Indo-Pacific gobiid fish genus Valenciennea",
      "Reavis, R.H. 1997. Behavior, mate fidelity and reproductive success of Valenciennea strigata"
    ]
  },
  // ========================================
  // sp0006 インドヒメジ
  // LABO1
  // ========================================

  {
    id: "sp0006",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "インドヒメジ",

    scientificName: "Parupeneus indicus",

    englishName: "Indian goatfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ヒメジ科",
      "ウミヒゴイ属"
    ],

    category: "魚類",

    image: "images/sp0006.jpg",

    trivia: [
      {
        title: "あごの下に2本の「ひげ」を持つ",
        text: "あごの下の2本のひげで、砂の中の餌を探します。"
      },
      {
        title: "ひげは飾りではなく餌探しのセンサー",
        text: "ひげは、餌を探すための感覚器として働きます。"
      }
    ],

    bodyLength: "最大で全長約45cmです。",

    distribution: "インド太平洋に広く分布し、日本では南日本で見られます。",

    habitat: "砂底や砂泥底、海草藻場などに生息します。",

    diet: "カニやエビ、ゴカイなどの底生動物を食べます。",

    features: "あごの2本のひげと、体の黄斑・黒斑が特徴です。",

    behavior: "ひげを砂に触れさせながら餌を探します。",

    reproduction: "本種の詳しい産卵行動は、主要資料では不明です。",

    identification: "2本のひげと、体の黄色い斑紋と黒斑が目印です。",

    nameOrigin: "和名の詳しい由来は不明で、種小名はインドを意味します。",

    humanRelation: "地域によって漁獲され、食用になることがあります。",

    observationPoint: "2本のひげで砂を探る様子に注目してみてください。",

    references: [
      "FishBase: Parupeneus indicus",
      "Fishes of Australia: Parupeneus indicus",
      "Randall, J.E. 2004. Revision of the goatfish genus Parupeneus"
    ]
  },


  // ========================================
  // sp0007 エイブルズエンゼルフィッシュ
  // LABO1
  // ========================================

  {
    id: "sp0007",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "エイブルズエンゼルフィッシュ",

    scientificName: "Centropyge eibli",

    englishName: "Eibl's angelfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "キンチャクダイ科",
      "アブラヤッコ属"
    ],

    category: "魚類",

    image: "images/sp0007.jpg",

    trivia: [
      {
        title: "別の魚が姿をまねる",
        text: "別の科の魚の幼魚が、本種によく似た姿になります。"
      },
      {
        title: "小さなハーレムを作る",
        text: "1匹のオスと複数のメスで暮らすことがあります。"
      }
    ],

    bodyLength: "最大で全長約15cmです。",

    distribution: "東部インド洋を中心に分布します。",

    habitat: "サンゴ礁や礁湖などに生息します。",

    diet: "主に糸状藻類などをついばんで食べます。",

    features: "灰白色の体に橙褐色の縦帯が入り、尾びれは黒色です。",

    behavior: "岩面の藻類などをついばみながら泳ぎます。",

    reproduction: "優位なメスがオスへ性転換することがあります。",

    identification: "橙褐色の縦帯と黒い尾びれが目印です。",

    nameOrigin: "種小名は、生物学者への献名です。",

    humanRelation: "美しい模様から、海水観賞魚として流通します。",

    observationPoint: "黒い尾びれと、その縁の青白い線に注目してください。",

    references: [
      "FishBase: Centropyge eibli",
      "Fishes of Australia: Centropyge eibli",
      "DiBattista et al. 2016 / pygmy angelfish taxonomy and hybridisation studies"
    ]
  },


  // ========================================
  // sp0008 ルリスズメダイ
  // 展示名：オレンジテールデビル
  // LABO1
  // ========================================

  {
    id: "sp0008",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "ルリスズメダイ（オレンジテールデビル）",

    scientificName: "Chrysiptera cyanea",

    englishName: "Sapphire devil",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "スズメダイ科",
      "ルリスズメダイ属"
    ],

    category: "魚類",

    image: "images/sp0008.jpg",

    trivia: [
      {
        title: "オレンジテールデビルは独立した種ではない",
        text: "オレンジテールデビルは別種ではなく、ルリスズメダイの色彩型です。"
      },
      {
        title: "オスとメスで色が違うことがある",
        text: "地域によって、オスの尾などが黄色から橙色になります。"
      }
    ],

    bodyLength: "最大で全長約8.5cmです。",

    distribution: "東部インド洋から西太平洋に分布し、琉球列島でも見られます。",

    habitat: "浅い礁湖やサンゴ礁などに生息します。",

    diet: "藻類や小型甲殻類などを食べます。",

    features: "鮮やかな青色で、地域や性別によって尾の色が変わります。",

    behavior: "昼に活動し、サンゴや岩礁の周辺に縄張りを作ります。",

    reproduction: "岩などに卵を産み、オスが守ります。",

    identification: "鮮やかな青い体と、橙色になる尾が特徴です。",

    nameOrigin: "和名は青い体色、流通名は橙色の尾に由来します。",

    humanRelation: "鮮やかな体色から、海水観賞魚として知られています。",

    observationPoint: "尾びれの色に注目して観察してみてください。",

    references: [
      "FishBase: Chrysiptera cyanea",
      "Fishes of Australia: Chrysiptera cyanea",
      "水族館魚図鑑：オレンジテールデビル",
      "サカナト：ルリスズメダイの地域変異"
    ]
  },


  // ========================================
  // sp0009 カクレクマノミ
  // LABO1
  // ========================================

  {
    id: "sp0009",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "カクレクマノミ",

    scientificName: "Amphiprion ocellaris",

    englishName: "Clown anemonefish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "スズメダイ科",
      "クマノミ属"
    ],

    category: "魚類",

    image: "images/sp0009.jpg",

    trivia: [
      {
        title: "大きな個体がメスになる",
        text: "最初はオスとして成熟し、群れで最大の個体がメスになります。"
      },
      {
        title: "毒を持つイソギンチャクの中で暮らす",
        text: "毒を持つイソギンチャクと共生して暮らします。"
      }
    ],

    bodyLength: "最大で全長約11cmです。",

    distribution: "東部インド洋から西太平洋に分布し、琉球列島でも見られます。",

    habitat: "浅いサンゴ礁や礁湖で、イソギンチャクと共生します。",

    diet: "動物プランクトンや小型甲殻類、藻類などを食べます。",

    features: "橙色の体に3本の白い横帯があります。",

    behavior: "イソギンチャクの周辺を中心に生活します。",

    reproduction: "オスからメスへ性転換し、主にオスが卵を守ります。",

    identification: "橙色の体と3本の白い帯が特徴です。",

    nameOrigin: "和名の詳しい由来は、主要資料では確認できません。",

    humanRelation: "世界的に有名な海水観賞魚です。",

    observationPoint: "イソギンチャクの触手を出入りする動きに注目してください。",

    references: [
      "FishBase: Amphiprion ocellaris",
      "Fishes of Australia: Amphiprion ocellaris",
      "FishBase Ecology and Reproduction: Amphiprion ocellaris"
    ]
  },


  // ========================================
  // sp0010 クダゴンベ
  // LABO1
  // ========================================

  {
    id: "sp0010",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "クダゴンベ",

    scientificName: "Oxycirrhites typus",

    englishName: "Longnose hawkfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ゴンベ科",
      "クダゴンベ属"
    ],

    category: "魚類",

    image: "images/sp0010.jpg",

    trivia: [
      {
        title: "サンゴの枝の上に「止まる」",
        text: "ヤギ類などの枝に体を乗せて、餌を待ち伏せします。"
      },
      {
        title: "産卵は一瞬",
        text: "ペアの産卵は、わずか1〜2秒ほどで行われます。"
      }
    ],

    bodyLength: "最大で全長約13cmです。",

    distribution: "インド太平洋から東部太平洋まで広く分布します。",

    habitat: "サンゴ礁外縁部の、ヤギ類などの枝の間に生息します。",

    diet: "小型の甲殻類などを食べます。",

    features: "長く尖った吻と、白地の赤い格子模様が特徴です。",

    behavior: "枝に体を乗せ、周囲の餌を待ち伏せします。",

    reproduction: "夕方以降、ペアで上昇しながら放卵・放精します。",

    identification: "長い吻と赤い格子模様が目印です。",

    nameOrigin: "筒のように長い吻を持つことが和名の由来です。",

    humanRelation: "独特な姿から、海水観賞魚として知られています。",

    observationPoint: "枝の上に体を乗せている姿を探してみてください。",

    references: [
      "FishBase: Oxycirrhites typus",
      "Fishes of Australia: Oxycirrhites typus",
      "Donaldson & Colin 1989. Pelagic spawning of the hawkfish Oxycirrhites typus"
    ]
  },


  // ========================================
  // sp0011 クロナマコ
  // LABO1
  // ========================================

  {
    id: "sp0011",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "クロナマコ",

    scientificName: "Holothuria atra",

    englishName: "Lollyfish",

    classification: [
      "棘皮動物門",
      "ナマコ綱",
      "クロナマコ科",
      "クロナマコ属"
    ],

    category: "棘皮動物",

    image: "images/sp0011.jpg",

    trivia: [
      {
        title: "体に砂を付けることがある",
        text: "体の表面に砂粒を付けていることがあります。"
      },
      {
        title: "体を2つに分けて増えることもある",
        text: "体が2つに分かれ、それぞれ再生して増えることがあります。"
      }
    ],

    bodyLength: "通常は20cm前後で、最大50〜60cmほどになります。",

    distribution: "熱帯インド太平洋に広く分布し、琉球列島などでも見られます。",

    habitat: "浅いサンゴ礁や砂泥底などに生息します。",

    diet: "砂の中の有機物や微細藻類などを利用します。",

    features: "黒い円筒形の体で、表面に砂を付けることがあります。",

    behavior: "砂を取り込み、利用した後に砂を排出します。",

    reproduction: "放卵・放精のほか、体を分裂させて増える個体群もあります。",

    identification: "黒く、比較的滑らかな円筒形の体が特徴です。",

    nameOrigin: "黒い体色が和名の由来です。",

    humanRelation: "一部地域では、水産資源として利用されます。",

    observationPoint: "砂を取り込み、後方から出す様子に注目してください。",

    references: [
      "World Register of Marine Species: Holothuria atra",
      "SeaLifeBase: Holothuria atra",
      "Plantivaux et al. / Holothuria atra ecology",
      "Plantivauxではなく石垣島個体群研究：Plankton and Benthos Research 16(3)"
    ]
  },


  // ========================================
  // sp0012 クロユリハゼ
  // LABO1
  // ========================================

  {
    id: "sp0012",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "クロユリハゼ",

    scientificName: "Ptereleotris evides",

    englishName: "Blackfin dartfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "クロユリハゼ科",
      "クロユリハゼ属"
    ],

    category: "魚類",

    image: "images/sp0012.jpg",

    trivia: [
      {
        title: "成魚はペアで泳ぐことが多い",
        text: "成魚は、ペアで泳いでいることがあります。"
      },
      {
        title: "底から少し浮いて餌を待つ",
        text: "海底から少し浮き、流れてくるプランクトンを食べます。"
      }
    ],

    bodyLength: "最大で全長約14cmです。",

    distribution: "インド太平洋に広く分布し、日本各地でも記録されています。",

    habitat: "サンゴ礁外縁部や礁湖、内湾などに生息します。",

    diet: "水中を流れてくる動物プランクトンを食べます。",

    features: "体の前半は淡い青灰色で、後半ほど黒くなります。",

    behavior: "底から少し浮いて泳ぎ、成魚はペアになることがあります。",

    reproduction: "一夫一妻型のペアを作ることが知られています。",

    identification: "前半が淡色、後半が黒くなる体色が特徴です。",

    nameOrigin: "和名の詳しい由来は、主要資料では確認できません。",

    humanRelation: "美しい色合いから、観賞魚として扱われます。",

    observationPoint: "頭から尾へ変わる体色に注目してみてください。",

    references: [
      "FishBase: Ptereleotris evides",
      "BiSMAL: Ptereleotris evides クロユリハゼ",
      "Fishes of Australia: Ptereleotris evides",
      "和歌山県立自然博物館：クロユリハゼ"
    ]
  },


  // ========================================
  // sp0013 キイロハギ
  // LABO1
  // ========================================

  {
    id: "sp0013",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "キイロハギ",

    scientificName: "Zebrasoma flavescens",

    englishName: "Yellow tang",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ニザダイ科",
      "ヒレナガハギ属"
    ],

    category: "魚類",

    image: "images/sp0013.jpg",

    trivia: [
      {
        title: "尾の付け根に鋭い棘がある",
        text: "尾の付け根には、左右1本ずつ鋭い棘があります。"
      },
      {
        title: "満月前後と繁殖が関係する",
        text: "産卵活動は、満月前後に活発になることがあります。"
      }
    ],

    bodyLength: "最大で全長約20cmです。",

    distribution: "太平洋に分布し、琉球列島やハワイ諸島などで見られます。",

    habitat: "礁湖やサンゴ礁外縁部に生息します。",

    diet: "主に岩やサンゴ表面の糸状藻類を食べます。",

    features: "全身が鮮やかな黄色で、尾の付け根に棘があります。",

    behavior: "サンゴ礁を泳ぎながら藻類をついばみます。",

    reproduction: "ペアや集団で産卵し、満月前後に活発になります。",

    identification: "全身が鮮やかな黄色なのが特徴です。",

    nameOrigin: "鮮やかな黄色い体色が和名の由来です。",

    humanRelation: "世界的に人気の高い海水観賞魚です。",

    observationPoint: "尾の付け根にある白い部分と棘に注目してください。",

    references: [
      "FishBase: Zebrasoma flavescens",
      "FishBase Reproduction: Zebrasoma flavescens",
      "NCBI Taxonomy: Zebrasoma flavescens"
    ]
  },


  // ========================================
  // sp0014 シリキルリスズメダイ
  // LABO1
  // ========================================

  {
    id: "sp0014",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "シリキルリスズメダイ",

    scientificName: "Chrysiptera parasema",

    englishName: "Goldtail demoiselle",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "スズメダイ科",
      "ルリスズメダイ属"
    ],

    category: "魚類",

    image: "images/sp0014.jpg",

    trivia: [
      {
        title: "名前通り「青い体＋黄色い尾」",
        text: "青い体に、はっきりとした黄色い尾びれを持ちます。"
      },
      {
        title: "オスが卵を守る",
        text: "岩などに産んだ卵は、オスが守ります。"
      }
    ],

    bodyLength: "最大で全長約7cmです。",

    distribution: "西太平洋に分布し、琉球列島などでも見られます。",

    habitat: "穏やかな礁湖や沿岸のサンゴ礁に生息します。",

    diet: "動物プランクトンや小型甲殻類、藻類などを食べます。",

    features: "鮮やかな青い体と黄色い尾びれが特徴です。",

    behavior: "昼に活動し、危険を感じるとサンゴの隙間へ隠れます。",

    reproduction: "岩などに卵を産み、オスが守ります。",

    identification: "青い体に対して、黄色い尾びれが目立ちます。",

    nameOrigin: "青い体と、黄色い体の後方部を表した名前と考えられます。",

    humanRelation: "鮮やかな色彩から、海水観賞魚として流通します。",

    observationPoint: "ほかの青い魚と、黄色い尾を見比べてみてください。",

    references: [
      "FishBase: Chrysiptera parasema",
      "BiSMAL: Chrysiptera parasema シリキルリスズメダイ",
      "鳥羽水族館 生きもの図鑑：シリキルリスズメダイ",
      "新潟市水族館 マリンピア日本海：シリキルリスズメダイ"
    ]
  },


  // ========================================
  // sp0015 スジイシモチ
  // LABO1
  // ========================================

  {
    id: "sp0015",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "スジイシモチ",

    scientificName: "Ostorhinchus cookii",

    englishName: "Cook's cardinalfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "テンジクダイ科",
      "スジイシモチ属"
    ],

    category: "魚類",

    image: "images/sp0015.jpg",

    trivia: [
      {
        title: "夜になると活動的になる",
        text: "昼は岩陰などで過ごし、夜になると活動します。"
      },
      {
        title: "口の中で卵を守る",
        text: "親魚が卵を口に入れ、孵化まで守ります。"
      }
    ],

    bodyLength: "最大で全長約10cmです。",

    distribution: "紅海からインド太平洋に広く分布し、日本では千葉県以南で見られます。",

    habitat: "浅い岩礁やサンゴ礁に生息します。",

    diet: "小型甲殻類や動物プランクトンなどを食べます。",

    features: "白っぽい体に縦帯があり、尾の付け根に黒斑があります。",

    behavior: "昼は岩陰に隠れ、夜に餌を探します。",

    reproduction: "産卵後、親魚が卵を口の中で守ります。",

    identification: "体側の縦帯と尾の付け根の黒斑が目印です。",

    nameOrigin: "体側の筋状模様が和名の由来です。",

    humanRelation: "夜行性や口内保育を観察できる魚です。",

    observationPoint: "口がふくらんだ個体がいないか見てみてください。",

    references: [
      "BiSMAL: Ostorhinchus cookii スジイシモチ",
      "FishBase: Ostorhinchus cookii",
      "World Register of Marine Species: Ostorhinchus cookii",
      "WEB魚図鑑：スジイシモチ"
    ]
  },
  // ========================================
  // sp0016 ススキムレヤギ
  // LABO1
  // ========================================

  {
    id: "sp0016",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "ススキムレヤギ",

    scientificName: "Rumphella aggregata",

    englishName: "Bushy sea rod",

    classification: [
      "刺胞動物門",
      "八放サンゴ類",
      "Malacalcyonacea",
      "トクササンゴ科",
      "ムレヤギ属"
    ],

    category: "刺胞動物",

    image: "images/sp0016.jpg",

    trivia: [
      {
        title: "1匹ではなく「群体」で暮らす",
        text: "多数の小さなポリプが集まり、1つの群体を作ります。"
      },
      {
        title: "光と餌の両方を利用する",
        text: "光合成の栄養と、水中の餌の両方を利用します。"
      }
    ],

    bodyLength: "枝分かれした群体を作り、標準的な最大値は不明です。",

    distribution: "中西部太平洋から記録されています。",

    habitat: "暖かい海のサンゴ礁で、岩などに固着して暮らします。",

    diet: "プランクトンなどを捕らえ、共生藻の栄養も利用します。",

    features: "枝状の群体を作り、表面に多数のポリプがあります。",

    behavior: "岩に固着し、ポリプを伸ばして餌を取ります。",

    reproduction: "本種の詳しい繁殖生態は、主要資料では不明です。",

    identification: "外見だけでの正確な種同定は難しい仲間です。",

    nameOrigin: "主要資料では、2つの和名が掲載されています。",

    humanRelation: "小型生物の生活場所にもなる底生動物です。",

    observationPoint: "枝の表面にある小さなポリプを観察してみてください。",

    references: [
      "BiSMAL: Rumphella aggregata ムレヤギ／ススキムレヤギ",
      "World Register of Marine Species: Rumphella aggregata",
      "Ocean Biodiversity Information System: Rumphella aggregata",
      "Coral Trait Database: Rumphella aggregata"
    ]
  },


  // ========================================
  // sp0017 タテジマヤッコ
  // LABO1
  // ========================================

  {
    id: "sp0017",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "タテジマヤッコ",

    scientificName: "Genicanthus lamarck",

    englishName: "Blackstriped angelfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ニザダイ目",
      "キンチャクダイ科",
      "タテジマヤッコ属"
    ],

    category: "魚類",

    image: "images/sp0017.jpg",

    trivia: [
      {
        title: "メスからオスへ性転換する",
        text: "群れのオスがいなくなると、メスがオスへ変わることがあります。"
      },
      {
        title: "オスとメスを外見で見分けられる",
        text: "オスは腹びれが黒く、メスは白いので見分けられます。"
      }
    ],

    bodyLength: "最大で全長約25cmです。",

    distribution: "インド・西太平洋に分布し、日本では南日本で見られます。",

    habitat: "サンゴ礁や岩礁の外縁などに生息します。",

    diet: "主に動物プランクトンを食べます。",

    features: "灰白色の体に黒い縦帯があり、雌雄で色が異なります。",

    behavior: "中層で群れを作り、プランクトンを食べます。",

    reproduction: "メスからオスへ性転換する魚です。",

    identification: "オスは腹びれが黒く、メスは白いのが特徴です。",

    nameOrigin: "魚の縞を数える向きから「タテジマ」と呼ばれます。",

    humanRelation: "性転換や雌雄差を観察できる魚です。",

    observationPoint: "複数個体の腹びれの色を見比べてみてください。",

    references: [
      "FishBase: Genicanthus lamarck",
      "BiSMAL: Genicanthus lamarck タテジマヤッコ",
      "東京動物園協会：タテジマヤッコの性転換",
      "小学館の図鑑NEO 魚：タテジマヤッコ"
    ]
  },


  // ========================================
  // sp0018 チンアナゴ
  // LABO1
  // ========================================

  {
    id: "sp0018",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "チンアナゴ",

    scientificName: "Heteroconger hassi",

    englishName: "Spotted garden eel",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ウナギ目",
      "アナゴ科",
      "チンアナゴ属"
    ],

    category: "魚類",

    image: "images/sp0018.jpg",

    trivia: [
      {
        title: "見えている部分は体の一部だけ",
        text: "見えているのは体の一部で、大部分は砂の中にあります。"
      },
      {
        title: "流れに向かって並ぶ理由は餌",
        text: "流れてくる餌を食べるため、多くの個体が同じ方向を向きます。"
      }
    ],

    bodyLength: "最大で全長約45cmです。",

    distribution: "インド太平洋に広く分布し、琉球列島や小笠原諸島でも見られます。",

    habitat: "潮通しのよいサンゴ礁周辺の砂底に生息します。",

    diet: "水流に乗ってくる動物プランクトンを食べます。",

    features: "細長い白っぽい体に、黒い点と大きな黒斑があります。",

    behavior: "巣穴から上半身を出し、危険を感じると砂へ隠れます。",

    reproduction: "水族館では、繁殖行動や幼生が確認されています。",

    identification: "白っぽい体にある黒い点と黒斑が特徴です。",

    nameOrigin: "顔つきが犬の「狆」に似ることが由来とされています。",

    humanRelation: "独特の姿から、水族館で人気の高い魚です。",

    observationPoint: "餌の時間に、群れが向いている方向を見てみてください。",

    references: [
      "FishBase: Heteroconger hassi",
      "World Register of Marine Species: Heteroconger hassi",
      "沖縄美ら海水族館：チンアナゴ飼育・繁殖記録",
      "名古屋港水族館：チンアナゴ",
      "マクセル アクアパーク品川：チンアナゴ"
    ]
  },


  // ========================================
  // sp0019 トミニエンシスタン
  // トミニサージョンフィッシュ
  // LABO1
  // ========================================

  {
    id: "sp0019",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "トミニエンシスタン（トミニサージョンフィッシュ）",

    scientificName: "Ctenochaetus tominiensis",

    englishName: "Tomini surgeonfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ニザダイ目",
      "ニザダイ科",
      "サザナミハギ属"
    ],

    category: "魚類",

    image: "images/sp0019.jpg",

    trivia: [
      {
        title: "日本ではまだ自然分布が確認されていない",
        text: "西中部太平洋の魚で、日本では自然分布がまだ確認されていません。"
      },
      {
        title: "藻そのものだけを食べるわけではない",
        text: "藻類だけでなく、その間にいる微小な生物も食べます。"
      }
    ],

    bodyLength: "最大で標準体長約16cmです。",

    distribution: "西中部太平洋に分布します。",

    habitat: "サンゴが多い沿岸の急斜面などに生息します。",

    diet: "岩面の藻類と、その間にいる微小動物を食べます。",

    features: "茶褐色の体で、白い尾と橙色のひれが目立ちます。",

    behavior: "岩面を細かくついばみながら餌を探します。",

    reproduction: "本種の詳しい繁殖行動は、主要資料では不明です。",

    identification: "白い尾びれと、背びれ・尻びれの橙色が目印です。",

    nameOrigin: "日本では「トミニサージョンフィッシュ」の名称も使われます。",

    humanRelation: "比較的小型のニザダイ類として観賞・展示されます。",

    observationPoint: "白い尾びれと、ひれの橙色に注目してください。",

    references: [
      "FishBase: Ctenochaetus tominiensis",
      "日本動物園水族館協会：トミニサージョンフィッシュ",
      "鳥羽水族館：トミニサージョンフィッシュ",
      "Randall & Clements 2001. Revision of the surgeonfish genus Ctenochaetus"
    ]
  },


  // ========================================
  // sp0020 ナンヨウハギ
  // LABO1
  // ========================================

  {
    id: "sp0020",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "ナンヨウハギ",

    scientificName: "Paracanthurus hepatus",

    englishName: "Palette surgeonfish",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ニザダイ目",
      "ニザダイ科",
      "ナンヨウハギ属"
    ],

    category: "魚類",

    image: "images/sp0020.jpg",

    trivia: [
      {
        title: "主食は必ずしも藻類ではない",
        text: "ニザダイ科ですが、主に動物プランクトンを食べます。"
      },
      {
        title: "尾の付け根には防御用の棘",
        text: "尾の付け根には、収納できる鋭い棘があります。"
      }
    ],

    bodyLength: "最大で全長約31cmです。",

    distribution: "インド太平洋に広く分布し、日本では南日本で見られます。",

    habitat: "潮通しのよいサンゴ礁外縁部などに生息します。",

    diet: "主に動物プランクトンを食べ、藻類も利用します。",

    features: "青い体に黒い模様が入り、尾びれは黄色です。",

    behavior: "緩い群れで泳ぎ、幼魚はサンゴ周辺に集まります。",

    reproduction: "水中へ上昇しながら放卵・放精します。",

    identification: "青い体、黒い模様、黄色い尾が特徴です。",

    nameOrigin: "英名は、黒い模様が絵の具のパレットに見えることに由来します。",

    humanRelation: "世界的に人気の高い観賞魚です。",

    observationPoint: "黒い模様と、尾の付け根の棘に注目してください。",

    references: [
      "FishBase: Paracanthurus hepatus",
      "NCBI Taxonomy: Paracanthurus hepatus",
      "Myers 1991. Micronesian Reef Fishes"
    ]
  },


  // ========================================
  // sp0021 ニシキアナゴ
  // LABO1
  // ========================================

  {
    id: "sp0021",

    areaIds: [
      "labo1"
    ],

    observedDate: "2026-09-12",
    updatedDate: "2026-09-14",

    nameJa: "ニシキアナゴ",

    scientificName: "Gorgasia preclara",

    englishName: "Splendid garden eel",

    classification: [
      "脊索動物門",
      "条鰭綱",
      "ウナギ目",
      "アナゴ科",
      "シンジュアナゴ属"
    ],

    category: "魚類",

    image: "images/sp0021.jpg",

    trivia: [
      {
        title: "チンアナゴとは別の属",
        text: "チンアナゴと似ていますが、分類上は別の属です。"
      },
      {
        title: "体を全部出さずに食事する",
        text: "巣穴から体の前半だけを出して餌を食べます。"
      }
    ],

    bodyLength: "最大で全長約40cmです。",

    distribution: "インド・西太平洋に分布し、琉球列島でも見られます。",

    habitat: "サンゴ礁周辺の砂底に巣穴を作って暮らします。",

    diet: "水流に乗ってくる動物プランクトンを食べます。",

    features: "細長い体に、黄色から橙色と白色の縞があります。",

    behavior: "巣穴から体を出し、危険を感じるとすぐに隠れます。",

    reproduction: "本種の詳しい繁殖行動は、主要資料では不明です。",

    identification: "黄色から橙色と白色の縞模様が特徴です。",

    nameOrigin: "鮮やかな模様が「錦」を思わせることが由来です。",

    humanRelation: "独特の姿から、水族館で人気の高い魚です。",

    observationPoint: "チンアナゴと、体色や顔つきを見比べてみてください。",

    references: [
      "FishBase: Gorgasia preclara",
      "神奈川県立生命の星・地球博物館 魚類写真資料データベース",
      "Castle & Randall 1999. Revision of Indo-Pacific garden eels",
      "すみだ水族館：チンアナゴ・ニシキアナゴ解説"
    ]
  },





// ========================================
// sp0022 ハシナガチョウチョウウオ
// LABO1
// ========================================

{
  id: "sp0022",

  areaIds: [
    "labo1",
    "labo10"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハシナガチョウチョウウオ",

  scientificName: "Chelmon rostratus",

  englishName: "Copperband butterflyfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "Acanthuriformes",
    "チョウチョウウオ科",
    "ハシナガチョウチョウウオ属"
  ],

  category: "魚類",

  image: "images/sp0022.jpg",

  trivia: [
    {
      title: "背びれに大きな『偽物の目』",
      text: "背びれ後方に大きな眼状斑があり、本当の眼の位置を分かりにくくする効果が考えられています。"
    },
    {
      title: "長い口は成長してから発達する",
      text: "若い個体では短い吻が、成長してサンゴ礁などへ定着した後に長く伸びていきます。"
    }
  ],

  bodyLength: "最大で全長約20cm。",

  distribution: "アンダマン海から東南アジア、琉球列島、オーストラリア周辺まで分布します。",

  habitat: "水深1〜25mほどの岩礁やサンゴ礁に生息し、汽水の影響を受ける場所でも見られます。",

  diet: "長い吻を岩やサンゴの隙間へ差し込み、小型の底生無脊椎動物を捕食します。",

  features: "銀白色の体に橙色の横帯が入り、非常に長い吻と背びれ後方の大きな眼状斑が特徴です。",

  behavior: "単独またはペアで泳ぎ、長い吻を岩やサンゴの隙間へ差し込んで餌を探します。",

  reproduction: "卵生で、繁殖時にはペアを形成することが知られています。",

  identification: "長い吻、橙色の横帯、大きな眼状斑が見分けるポイントです。LABO10のフエヤッコダイとは体色や模様が大きく異なります。",

  nameOrigin: "細長く前方へ伸びた吻を持つことから「ハシナガチョウチョウウオ」と呼ばれます。",

  humanRelation: "特徴的な体色と長い吻から、海水観賞魚として流通しています。",

  observationPoint: "背びれ後方の眼状斑と本当の眼を見比べ、長い吻で隙間を探る様子にも注目してください。",

  references: [
    "日本産魚類全種目録：Chelmon rostratus ハシナガチョウチョウウオ",
    "BISMaL: Chelmon rostratus ハシナガチョウチョウウオ",
    "FishBase: Chelmon rostratus",
    "Australian Museum: Beaked Coralfish, Chelmon rostratus",
    "鳥羽水族館：ハシナガチョウチョウウオ"
  ]
},


// ========================================
// sp0023 ハナビラクマノミ
// LABO1
// ========================================

{
  id: "sp0023",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハナビラクマノミ",

  scientificName: "Amphiprion perideraion",

  englishName: "Pink anemonefish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズメダイ科",
    "クマノミ属"
  ],

  category: "魚類",

  image: "images/sp0023.jpg",

  trivia: [
    {
      title: "背中に白い一本線がある",
      text: "眼の後ろの白帯に加え、背中を通って尾まで続く白い線があります。"
    },
    {
      title: "オスからメスへ性転換する",
      text: "群れの最大個体がメスになり、メスがいなくなると繁殖オスがメスへ性転換します。"
    }
  ],

  bodyLength: "最大で全長約10cm。",

  distribution: "西太平洋を中心に、琉球列島からサモア、トンガ、グレートバリアリーフ周辺まで分布します。",

  habitat: "サンゴ礁に生息し、大型のイソギンチャクと共生します。",

  diet: "動物プランクトンなどの小型生物や藻類を食べる雑食性です。",

  features: "淡い桃色の体に、眼の後ろの白帯と背中を通る白い線があります。",

  behavior: "イソギンチャクの触手を隠れ場所として利用し、群れの中には社会的な順位があります。",

  reproduction: "オスからメスへ性転換し、繁殖オスが卵を守りながら孵化まで世話をします。",

  identification: "眼の後ろの白帯と、背中から尾まで続く白い線が特徴です。",

  nameOrigin: "淡い桃色の体色が花びらを思わせることから、ハナビラクマノミと呼ばれています。",

  humanRelation: "イソギンチャクとの共生や性転換を観察でき、海水観賞魚としても流通しています。",

  observationPoint: "背中の白線と眼の後ろの白帯を確認し、イソギンチャクとの関わりにも注目してください。",

  references: [
    "FishBase: Amphiprion perideraion",
    "Fishes of Australia: Amphiprion perideraion",
    "Australian Museum: Pink Anemonefish",
    "Moyer & Nakazono 1978. Protandrous hermaphroditism in Amphiprion"
  ]
},


// ========================================
// sp0024 ハナハゼ
// LABO1
// ========================================

{
  id: "sp0024",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハナハゼ",

  scientificName: "Ptereleotris hanae",

  englishName: "Blue hana goby",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ハゼ目",
    "クロユリハゼ科",
    "クロユリハゼ属"
  ],

  category: "魚類",

  image: "images/sp0024.jpg",

  trivia: [
    {
      title: "成魚の尾びれが長く伸びる",
      text: "成長すると尾びれなどが糸状に長く伸び、淡い青色の体とともに優雅な姿になります。"
    },
    {
      title: "学名の『hanae』には人の名前が残っている",
      text: "種小名 hanae は、動物学者・箕作佳吉の娘Hanaにちなむ名称とされています。"
    }
  ],

  bodyLength: "最大で全長約12cm。",

  distribution: "西太平洋に分布し、南日本からフィリピン、オーストラリア周辺まで見られます。",

  habitat: "サンゴ礁や岩礁に近い砂礫底で見られ、水深3〜50mほどから記録されています。",

  diet: "水中を漂う動物プランクトンなどの小型生物を捕食すると考えられています。",

  features: "淡い青色の細長い体を持ち、鰓蓋には青い模様があり、成魚では尾びれなどが長く伸びます。",

  behavior: "砂礫底の上を浮くように泳ぎ、危険を感じると近くの穴や隙間へ逃げ込みます。",

  reproduction: "本種固有の詳しい産卵行動については、今回確認した資料では十分な情報がありません。",

  identification: "淡い青色の細長い体、鰓蓋の青い線、長く伸びる尾びれが特徴です。",

  nameOrigin: "種小名 hanae はHanaという人名への献名ですが、和名の詳しい由来は確認できませんでした。",

  humanRelation: "一般的な食用魚ではなく、美しい体色と長いひれから観察対象として人気があります。",

  observationPoint: "長く伸びた尾びれの動きと、鰓蓋にある鮮やかな青い線に注目してください。",

  references: [
    "FishBase: Ptereleotris hanae",
    "World Register of Marine Species: Ptereleotris hanae",
    "BiSMAL: Ptereleotris hanae",
    "Kagoshima University Museum: Fishes of Yakushima"
  ]
},


// ========================================
// sp0025 パウダーブルータン
// LABO1
// ========================================

{
  id: "sp0025",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "パウダーブルータン",

  scientificName: "Acanthurus leucosternon",

  englishName: "Powderblue surgeonfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ニザダイ目",
    "ニザダイ科",
    "クロハギ属"
  ],

  category: "魚類",

  image: "images/sp0025.jpg",

  trivia: [
    {
      title: "学名は「白い胸」を表している",
      text: "種小名 leucosternon は「白い胸」を意味し、目立つ白色の胸部を表しています。"
    },
    {
      title: "大きな群れで餌を食べることもある",
      text: "単独だけでなく、多数の個体が集まって岩面の藻類を食べることもあります。"
    }
  ],

  bodyLength: "一般的な体長は約19cmで、最大約54cmの記録があります。",

  distribution: "主にインド洋に分布し、東アフリカからアンダマン海、インドネシア周辺まで見られます。",

  habitat: "透明度の高い浅いサンゴ礁に生息し、水深0〜25mほどから記録されています。",

  diet: "岩やサンゴ表面に生える藻類を食べる草食性です。",

  features: "鮮やかな青い体、黒い頭、白い胸、黄色い背びれが特徴です。",

  behavior: "単独または群れでサンゴ礁を泳ぎ、岩面の藻類をついばみます。",

  reproduction: "ペアで産卵し、卵と精子を水中へ放出して体外受精します。",

  identification: "青い体、黒い頭、白い胸、黄色い背びれの配色が特徴で、尾の付け根には鋭い棘があります。",

  nameOrigin: "英名は淡く鮮やかな青色に由来し、学名 leucosternon は「白い胸」を意味します。",

  humanRelation: "海水観賞魚として世界的に流通し、一部地域では漁業対象にもなります。",

  observationPoint: "鮮やかな体色だけでなく、白い胸と尾の付け根にある棘にも注目してください。",

  references: [
    "FishBase: Acanthurus leucosternon",
    "World Register of Marine Species: Acanthurus leucosternon",
    "Fishes of Australia: Acanthurus leucosternon",
    "Randall 1956. A revision of the surgeonfish genus Acanthurus"
  ]
},

// ========================================
// sp0026 パープルクイーン
// パープルクイーンアンティアスと同一種
// LABO1
// ========================================

{
  id: "sp0026",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "パープルクイーン（パープルクイーンアンティアス）",

  scientificName: "Mirolabrichthys tuka",

  englishName: "Yellowstriped fairy basslet",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ハナダイ科",
    "Mirolabrichthys属"
  ],

  category: "魚類",

  image: "images/sp0026.jpg",

  trivia: [
    {
      title: "オスとメスで模様がかなり違う",
      text: "オスは紫色が強く、メスでは背中から尾びれへ続く黄色い帯が目立ちます。"
    },
    {
      title: "群れの中で性転換する",
      text: "群れの中で大きく優位な個体が、メスからオスへ性転換します。"
    }
  ],

  bodyLength: "最大で全長約12cm。",

  distribution: "インド洋から西太平洋に分布し、南日本からも記録されています。",

  habitat: "海水の流れがあるサンゴ礁の斜面などに群れで生息します。",

  diet: "主に小型の甲殻類などの動物プランクトンを食べます。",

  features: "オスは鮮やかな紫色で、メスには黄色い模様が入り、雌雄で外見が大きく異なります。",

  behavior: "サンゴ礁の斜面で群れを作り、流れてくるプランクトンを捕食します。",

  reproduction: "メスからオスへ性転換し、群れの中で大きく優位な個体がオスになります。",

  identification: "オスの紫色の体と黄色い口元、メスの背中から尾へ続く黄色い帯が特徴です。",

  nameOrigin: "鮮やかな紫色の体から「パープルクイーン」と呼ばれています。",

  humanRelation: "鮮やかな体色から海水観賞魚として流通し、水族館でも群泳や性転換を観察できます。",

  observationPoint: "複数の個体を見比べ、紫色の強い個体と黄色い帯のある個体を探してみてください。",

  references: [
    "FishBase: Mirolabrichthys tuka",
    "World Register of Marine Species: Mirolabrichthys tuka",
    "海遊館 生きもの図鑑：パープルクイーン",
    "DMMかりゆし水族館：パープルクイーンアンティアス"
  ]
},


// ========================================
// sp0027 ヒフキアイゴ
// LABO1
// ========================================

{
  id: "sp0027",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒフキアイゴ",

  scientificName: "Siganus unimaculatus",

  englishName: "Blotched foxface",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "アイゴ科",
    "アイゴ属"
  ],

  category: "魚類",

  image: "images/sp0027.jpg",

  trivia: [
    {
      title: "背びれなどの棘には毒がある",
      text: "背びれ・腹びれ・尻びれの鋭い棘には毒があり、外敵から身を守る武器になります。"
    },
    {
      title: "よく似た魚との違いは黒い斑点",
      text: "体の後方上部にある大きな黒い斑点が、よく似た魚との見分け方です。"
    }
  ],

  bodyLength: "最大で標準体長約20cm。",

  distribution: "西太平洋に分布し、琉球列島やフィリピン、西オーストラリア北部などで見られます。",

  habitat: "浅いサンゴ礁などに生息し、水深30mほどまで記録されています。",

  diet: "主に海藻や、岩・サンゴの表面に生える藻類を食べます。",

  features: "黄色い体と細長く突き出た口、体の後方上部にある大きな黒い斑点が特徴です。",

  behavior: "幼魚は群れを作ることがあり、成長するとペアで行動することが多くなります。",

  reproduction: "本種固有の詳しい産卵行動については、今回確認した資料では十分な情報がありません。",

  identification: "黄色い体、細長い口、体の後方にある大きな黒い斑点が見分けるポイントです。",

  nameOrigin: "和名の詳しい由来は確認できませんでしたが、種小名 unimaculatus は「1つの斑点を持つ」という意味です。",

  humanRelation: "観賞魚や水産物として利用されますが、ひれの棘には毒があるため注意が必要です。",

  observationPoint: "体の後ろにある黒い斑点と細長い口に注目し、藻類をついばむ様子も探してみてください。",

  references: [
    "BiSMAL: Siganus unimaculatus ヒフキアイゴ",
    "FishBase: Siganus unimaculatus",
    "沖縄美ら海水族館：Blotched foxface",
    "新潟市水族館 マリンピア日本海：ヒフキアイゴ",
    "Fishes of Australia: Siganus unimaculatus"
  ]
},


// ========================================
// sp0028 ヒラテンジクダイ
// LABO1
// ========================================

{
  id: "sp0028",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒラテンジクダイ",

  scientificName: "Zoramia fragilis",

  englishName: "Fragile cardinalfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "テンジクダイ科",
    "Zoramia属"
  ],

  category: "魚類",

  image: "images/sp0028.jpg",

  trivia: [
    {
      title: "昼間は大きな群れになる",
      text: "昼間は枝状サンゴの周りに多数の個体が集まり、ほかのテンジクダイ類と群れることもあります。"
    },
    {
      title: "卵を口の中で育てる",
      text: "オスが卵を口の中に入れ、孵化するまで守る口内保育を行います。"
    }
  ],

  bodyLength: "最大で全長約5.5cm。",

  distribution: "インド洋から西太平洋に広く分布し、八重山諸島からグレートバリアリーフ周辺まで見られます。",

  habitat: "波の穏やかな浅い海で、枝状サンゴの周囲や隙間に群れで生息します。",

  diet: "夜になると、小型甲殻類や動物プランクトンなどを捕食します。",

  features: "半透明から白っぽい体を持ち、尾の付け根には黒い斑点があります。",

  behavior: "昼はサンゴの周りで群れ、夜になると広がって餌を探します。",

  reproduction: "繁殖時にはペアを作り、オスが卵を口の中で守ります。",

  identification: "半透明の小さな体と、尾の付け根にある黒い斑点が特徴です。",

  nameOrigin: "和名の詳しい由来は確認できませんでしたが、種小名 fragilis には「繊細な」などの意味があります。",

  humanRelation: "サンゴ礁で大きな群れを作る小型魚として、水族館の展示にも利用されます。",

  observationPoint: "1匹だけでなく群れ全体を見て、尾の付け根にある黒い斑点も探してみてください。",

  references: [
    "FishBase: Zoramia fragilis",
    "World Register of Marine Species: Zoramia fragilis",
    "Eschmeyer's Catalog of Fishes: Zoramia fragilis",
    "Barnett et al. 2012. To feed or to breed: morphological constraints of mouthbrooding in coral reef cardinalfishes"
  ]
},


// ========================================
// sp0029 ヒレナガハギ
// LABO1
// ========================================

{
  id: "sp0029",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒレナガハギ",

  scientificName: "Zebrasoma velifer",

  englishName: "Sailfin tang",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ニザダイ科",
    "ヒレナガハギ属"
  ],

  category: "魚類",

  image: "images/sp0029.jpg",

  trivia: [
    {
      title: "ひれを広げると体が一気に大きく見える",
      text: "大きな背びれと尻びれを広げると、帆のような大きなシルエットになります。"
    },
    {
      title: "幼魚と成魚で見た目が変わる",
      text: "幼魚では黄色と黒色の帯が目立ちますが、成長すると茶色や灰色が強くなります。"
    }
  ],

  bodyLength: "最大で標準体長約40cm。",

  distribution: "東部インド洋から太平洋に広く分布し、日本やハワイ、オーストラリアなどでも見られます。",

  habitat: "浅いサンゴ礁から外側の斜面まで生息し、幼魚は浅く穏やかな場所でよく見られます。",

  diet: "主に海藻などの植物質を食べます。",

  features: "大きく高い背びれと尻びれ、体の縦縞、尾の付け根にある鋭い棘が特徴です。",

  behavior: "昼間にサンゴ礁を泳ぎ回りながら、海藻をついばんで食べます。",

  reproduction: "ペアで産卵することが確認されています。",

  identification: "非常に大きな背びれと尻びれが最大の特徴で、体の縞模様も目立ちます。",

  nameOrigin: "大きく長い背びれと尻びれから「ヒレナガハギ」と呼ばれます。",

  humanRelation: "大きなひれと特徴的な模様から、観賞魚として流通しています。",

  observationPoint: "普段の姿とひれを大きく広げた姿を見比べ、見た目の大きさの変化に注目してください。",

  references: [
    "FishBase: Zebrasoma velifer",
    "World Register of Marine Species: Zebrasoma velifer",
    "Eschmeyer's Catalog of Fishes: Zebrasoma velifer",
    "BiSMAL: ヒレナガハギ（Zebrasoma veliferumとして掲載）"
  ]
},


// ========================================
// sp0030 フチドリカワハギ
// LABO1
// ========================================

{
  id: "sp0030",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フチドリカワハギ",

  scientificName: "Acreichthys tomentosus",

  englishName: "Bristle-tail filefish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "フグ目",
    "カワハギ科",
    "Acreichthys属"
  ],

  category: "魚類",

  image: "images/sp0030.jpg",

  trivia: [
    {
      title: "周囲に合わせて姿を目立ちにくくする",
      text: "緑色や茶色の複雑な模様で、海草やサンゴの周囲に溶け込むのが得意です。"
    },
    {
      title: "オスの尾の近くには毛のような突起",
      text: "成熟したオスの尾の付け根には、毛のように見える細かな突起があります。"
    }
  ],

  bodyLength: "最大で約12〜14cmほどになります。",

  distribution: "インド洋から西太平洋に分布し、南日本からインドネシアなどで見られます。",

  habitat: "浅いサンゴ礁や海草が生える場所、岩やサンゴ片の多い場所に生息します。",

  diet: "小型の甲殻類やゴカイ、貝類などの小さな無脊椎動物を食べます。",

  features: "緑色から茶色の複雑な模様と、体表の小さな突起が特徴です。",

  behavior: "単独でゆっくり泳ぐことが多く、周囲に溶け込むため見つけにくい魚です。",

  reproduction: "卵生ですが、詳しい求愛行動や卵保護については十分な情報がありません。",

  identification: "複雑な緑褐色の模様、体表の突起、頭の上に立つ第1背びれの棘が特徴です。",

  nameOrigin: "和名の詳しい由来は確認できませんでしたが、種小名 tomentosus は「毛が密生した」という意味です。",

  humanRelation: "海水観賞魚として流通し、カモフラージュを観察できる魚としても知られています。",

  observationPoint: "海草や岩と体色を見比べ、どれほど周囲に溶け込んでいるか観察してみてください。",

  references: [
    "FishBase: Acreichthys tomentosus",
    "World Register of Marine Species: Acreichthys tomentosus",
    "Fishes of Australia: Acreichthys tomentosus",
    "Gumanao, Bos & Randall 2018. Acreichthys tomentosus, a master of camouflage"
  ]
},


// ========================================
// sp0031 フレームエンゼル
// LABO1
// ========================================

{
  id: "sp0031",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フレームエンゼル",

  scientificName: "Centropyge loriculus",

  englishName: "Flame angelfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "キンチャクダイ科",
    "アブラヤッコ属"
  ],

  category: "魚類",

  image: "images/sp0031.jpg",

  trivia: [
    {
      title: "炎のような赤い体",
      text: "鮮やかな赤橙色の体に黒い縦帯が入り、炎を思わせる姿をしています。"
    },
    {
      title: "1匹のオスと複数のメスで暮らす",
      text: "自然界では、1匹のオスと複数のメスからなる小さなグループを作ることがあります。"
    }
  ],

  bodyLength: "最大で全長約15cm。",

  distribution: "熱帯の太平洋に分布し、ハワイやミクロネシア、ソロモン諸島などで見られます。",

  habitat: "サンゴ礁に生息し、岩やサンゴの隙間を隠れ場所として利用します。",

  diet: "主に岩などの表面に生える藻類を食べます。",

  features: "鮮やかな赤橙色の体に黒い縦帯が入り、ひれの後方には青紫色の模様があります。",

  behavior: "岩やサンゴの隙間の近くで暮らし、自然界では小さなハーレムを作ります。",

  reproduction: "メスからオスへ性転換することが知られ、群れの社会的な順位と性が関係します。",

  identification: "赤橙色の体に並ぶ黒い縦帯と、ひれの青紫色の模様が特徴です。",

  nameOrigin: "英名 Flame angelfish は、炎を思わせる鮮やかな赤橙色の体色に由来します。",

  humanRelation: "鮮やかな色彩から、世界的に人気の高い海水観賞魚です。",

  observationPoint: "赤い体だけでなく、黒い縦帯や背びれ・尻びれに入る青紫色の模様にも注目してください。",

  references: [
    "FishBase: Centropyge loriculus",
    "Fishes of Australia: Centropyge loriculus",
    "Australian Museum: Flame Angelfish",
    "Randall, Allen & Steene 1990. Fishes of the Great Barrier Reef and Coral Sea"
  ]
},

// ========================================
// sp0032 ヘコアユ
// LABO1
// ========================================

{
  id: "sp0032",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヘコアユ",

  scientificName: "Aeoliscus strigatus",

  englishName: "Jointed razorfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "トゲウオ目",
    "ヘコアユ科",
    "ヘコアユ属"
  ],

  category: "魚類",

  image: "images/sp0032.jpg",

  trivia: [
    {
      title: "頭を下にして泳ぐ",
      text: "体をほぼ縦にして、頭を下へ向けた独特な姿勢で泳ぎます。"
    },
    {
      title: "尾に見える部分は背びれの棘",
      text: "体の後ろに長く伸びる部分は尾ではなく、背びれの第1棘が変化したものです。"
    }
  ],

  bodyLength: "最大で全長約15cm。",

  distribution: "インド・西太平洋に広く分布し、南日本からオーストラリア周辺などで見られます。",

  habitat: "波の穏やかなサンゴ礁や海草の生える場所、岩礁などに生息します。",

  diet: "動物プランクトンに含まれる小型甲殻類などを、細長い口で吸い込むように食べます。",

  features: "非常に薄く平たい体を持ち、体表は骨質の板で覆われています。",

  behavior: "頭を下にした姿勢で群れを作り、ガンガゼの棘の間などで泳ぐことがあります。",

  reproduction: "本種固有の詳しい産卵行動については、今回確認した資料では十分な情報がありません。",

  identification: "頭を下へ向けて泳ぐ姿と、薄い体、後方へ伸びる長い背びれの棘が特徴です。",

  nameOrigin: "和名の詳しい由来は確認できませんでしたが、英名は刃物のように薄い体形を表しています。",

  humanRelation: "独特の泳ぎ方と体形から、水族館や観賞魚としてよく知られています。",

  observationPoint: "まず頭を下にして泳ぐ姿を見て、その後に尾のように見える長い棘にも注目してください。",

  references: [
    "FishBase: Aeoliscus strigatus",
    "吉野熊野ネイチャー図鑑：ヘコアユ",
    "Myers 1991. Micronesian Reef Fishes",
    "Kuiter & Tonozuka 2001. Pictorial Guide to Indonesian Reef Fishes"
  ]
},


// ========================================
// sp0033 ホンソメワケベラ
// LABO1
// ========================================

{
  id: "sp0033",

  areaIds: [
    "labo1",
    "labo10"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ホンソメワケベラ",

  scientificName: "Labroides dimidiatus",

  englishName: "Bluestreak cleaner wrasse",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "ベラ科",
    "ソメワケベラ属"
  ],

  category: "魚類",

  image: "images/sp0033.jpg",

  trivia: [
    {
      title: "ほかの魚を「掃除」する",
      text: "ほかの魚の体や口、鰓についた寄生生物などを食べる「クリーニング」を行います。"
    },
    {
      title: "性別が変わる",
      text: "基本的にはメスからオスへ性転換し、条件によっては逆方向の性転換も確認されています。"
    }
  ],

  bodyLength: "最大で全長約14cm。",

  distribution: "紅海から太平洋までの熱帯・亜熱帯に広く分布し、南日本でも見られます。",

  habitat: "サンゴ礁や岩礁に生息し、通常は水深1〜30mほどでよく見られます。",

  diet: "ほかの魚についた寄生性甲殻類などを主に食べ、魚の粘液を食べることもあります。",

  features: "細長い体に、頭から尾まで続く黒い帯が入ります。",

  behavior: "一定の場所でクリーニングを行い、掃除を受けに来た魚へ近づきます。",

  reproduction: "主にメスからオスへ性転換し、繁殖時にはペアで産卵します。",

  identification: "頭から尾まで続く黒い帯と細長い体が特徴です。",

  nameOrigin: "「ホソソメワケベラ」と呼ばれていたものが、後に「ホンソメワケベラ」になったとする資料があります。",

  humanRelation: "魚同士のクリーニング関係を代表する魚として、生態や認知能力の研究にも利用されています。",

  observationPoint: "周囲の大きな魚にも注目し、ホンソメワケベラに体や口を掃除させる様子を探してみてください。",

  references: [
    "FishBase: Labroides dimidiatus",
    "BiSMAL: Labroides dimidiatus ホンソメワケベラ",
    "Sakai, Kohda & Kuwamura 2001. Effect of changing harem on timing of sex change",
    "Randall, Allen & Steene 1990. Fishes of the Great Barrier Reef and Coral Sea"
  ]
},


// ========================================
// sp0034 マルチカラーピグミーエンゼル
// LABO1
// ========================================

{
  id: "sp0034",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "マルチカラーピグミーエンゼル",

  scientificName: "Centropyge multicolor",

  englishName: "Multicolor angelfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "キンチャクダイ科",
    "アブラヤッコ属"
  ],

  category: "魚類",

  image: "images/sp0034.jpg",

  trivia: [
    {
      title: "名前通り、たくさんの色を持つ",
      text: "白・茶・黒・黄・橙・青・紫など、多くの色を持つことから multicolor と名付けられました。"
    },
    {
      title: "比較的深いサンゴ礁で暮らす",
      text: "水深20〜115mから記録され、比較的深い場所でも暮らします。"
    }
  ],

  bodyLength: "最大で全長約9cm。",

  distribution: "中部太平洋を中心に、パラオやミクロネシア、フィジーなどに分布します。",

  habitat: "サンゴ礁の深い斜面や岩棚の下などを隠れ場所として利用します。",

  diet: "主に岩面などに生える藻類を食べます。",

  features: "白い体上部、黄色から橙色の腹部、頭部の黒と青の模様など、多彩な体色が特徴です。",

  behavior: "岩やサンゴの隙間を利用し、自然界では1匹のオスと複数のメスで群れを作ります。",

  reproduction: "最初はメスとして成熟し、一部の個体がオスへ性転換します。",

  identification: "白い上半身、黄色から橙色の腹部、額付近の黒と青の模様が特徴です。",

  nameOrigin: "種小名 multicolor は「多くの色」を意味します。",

  humanRelation: "美しい体色から海水観賞魚として流通し、人工繁殖された個体も見られます。",

  observationPoint: "白・黄・橙・黒・青など、体の中に何色あるか数えながら見てみてください。",

  references: [
    "FishBase: Centropyge multicolor",
    "Fishes of Australia: Centropyge multicolor",
    "Randall & Wass 1974. Two new pomacanthid fishes of the genus Centropyge from Oceania",
    "Gaither et al. 2014. Evolution of pygmy angelfishes"
  ]
},


// ========================================
// sp0035 マンジュウイシモチ
// LABO1
// ========================================

{
  id: "sp0035",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "マンジュウイシモチ",

  scientificName: "Sphaeramia nematoptera",

  englishName: "Pajama cardinalfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "テンジクダイ科",
    "マンジュウイシモチ属"
  ],

  category: "魚類",

  image: "images/sp0035.jpg",

  trivia: [
    {
      title: "体の前と後ろで模様がまるで違う",
      text: "黄色い頭、中央の黒い帯、後半の紫色の水玉模様と、体の場所によって模様が大きく変わります。"
    },
    {
      title: "卵を口の中で守る",
      text: "繁殖時には卵を口の中に入れ、孵化するまで守る口内保育を行います。"
    }
  ],

  bodyLength: "最大で全長約8.5cm。",

  distribution: "インド太平洋に分布し、琉球列島からフィジー、グレートバリアリーフ周辺まで見られます。",

  habitat: "波の穏やかな浅い海に生息し、昼間は枝状サンゴの周囲などで群れを作ります。",

  diet: "小型の甲殻類や動物プランクトンなどを食べます。",

  features: "黄色い頭、中央の太い黒帯、後半の紫色の水玉模様が特徴です。",

  behavior: "昼間は群れで過ごし、夜になると広がって餌を探します。",

  reproduction: "繁殖時にはペアを作り、卵を口の中で守ります。",

  identification: "黄色い頭、目を通る赤い線、黒い帯、紫色の水玉模様の組み合わせが特徴です。",

  nameOrigin: "和名の詳しい由来は確認できませんでした。英名は独特な模様をパジャマに例えています。",

  humanRelation: "特徴的な模様から海水観賞魚として人気があり、人工繁殖にも成功しています。",

  observationPoint: "体を前・中央・後ろに分けて見て、模様が大きく変わる様子を観察してみてください。",

  references: [
    "FishBase: Sphaeramia nematoptera",
    "Fishes of Australia: Sphaeramia nematoptera",
    "FAO Species Identification Guide: Sphaeramia nematoptera",
    "Hayashi & Kishimoto: Japanese cardinalfishes",
    "Nakamura et al. 2003. Feeding ecology of fishes in an Okinawan seagrass bed"
  ]
},


// ========================================
// sp0036 ミズタマハゼ
// LABO1
// ========================================

{
  id: "sp0036",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ミズタマハゼ",

  scientificName: "Valenciennea sexguttata",

  englishName: "Sixspot goby",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ハゼ目",
    "ハゼ科",
    "クロイトハゼ属"
  ],

  category: "魚類",

  image: "images/sp0036.jpg",

  trivia: [
    {
      title: "砂を食べているように見える",
      text: "砂を口に含んで小さな生物を食べ、残った砂を鰓の周辺から外へ出します。"
    },
    {
      title: "多くの場合ペアで暮らす",
      text: "成魚はペアで行動し、岩やサンゴ片の下にある巣穴を利用します。"
    }
  ],

  bodyLength: "最大で全長約14cm。",

  distribution: "紅海からインド太平洋に広く分布し、八重山諸島やオーストラリアなどでも見られます。",

  habitat: "サンゴ礁に囲まれた湾や礁湖などの砂底に生息します。",

  diet: "砂を口に含み、その中にいるカイアシ類などの小さな底生動物を食べます。",

  features: "淡い体色と頬にある青白い斑点、第1背びれ先端の黒色部が特徴です。",

  behavior: "砂地の上を低く泳ぎ、砂を口へ入れながら餌を探します。",

  reproduction: "一夫一妻的なペアを作ることが知られていますが、詳しい繁殖行動の情報は限られています。",

  identification: "淡い体色、頬の青白い斑点、第1背びれ先端の黒色部が見分けるポイントです。",

  nameOrigin: "和名の詳しい由来は確認できませんでしたが、種小名 sexguttata は「6つの斑点を持つ」という意味です。",

  humanRelation: "砂をこす独特の行動から海水観賞魚として流通しています。",

  observationPoint: "砂を口に入れ、鰓の周辺から細かな砂を出す様子と、頬の青い斑点に注目してください。",

  references: [
    "FishBase: Valenciennea sexguttata",
    "BiSMAL: Valenciennea sexguttata",
    "新潟市水族館 マリンピア日本海：ミズタマハゼ",
    "Brodnicke et al. 2022. Functional impact and trophic morphology of small, sand-sifting fishes on coral reefs",
    "Hoese & Larson 1994. Revision of the Indo-Pacific gobiid fish genus Valenciennea"
  ]
},


// ========================================
// sp0037 ヤエヤマギンポ
// LABO1
// ========================================

{
  id: "sp0037",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヤエヤマギンポ",

  scientificName: "Salarias fasciatus",

  englishName: "Jewelled blenny",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ギンポ目",
    "イソギンポ科",
    "ヤエヤマギンポ属"
  ],

  category: "魚類",

  image: "images/sp0037.jpg",

  trivia: [
    {
      title: "目の上に『まつ毛』のような突起",
      text: "目の上には枝分かれした皮膚の突起があり、まつ毛や角のように見えます。"
    },
    {
      title: "水槽では『コケ取り係』としても活躍",
      text: "岩やサンゴ表面の藻類を削り取って食べるため、水槽の「コケ取り係」としても利用されます。"
    }
  ],

  bodyLength: "最大で全長約14cm。",

  distribution: "紅海・東アフリカからサモアまで広く分布し、琉球列島でも見られます。",

  habitat: "浅いサンゴ礁や礁湖、岩やサンゴ片の多い場所に生息します。",

  diet: "岩やサンゴ表面の藻類や、藻類の間にたまった細かな有機物を食べます。",

  features: "茶褐色の複雑な模様と、目の上にある枝分かれした突起が特徴です。",

  behavior: "海底近くで暮らし、岩やサンゴの上でじっと休んでいることがあります。",

  reproduction: "卵生で、卵は海底などに付着し、孵化した幼生は水中を漂います。",

  identification: "茶褐色の模様と目の上の突起が特徴で、岩の上にじっとしていることも多い魚です。",

  nameOrigin: "和名の正式な命名由来については、今回確認した資料では明確に確認できませんでした。",

  humanRelation: "海水観賞魚として飼育され、藻類を食べる「掃除屋」として利用されることもあります。",

  observationPoint: "岩やサンゴの上を探し、目の上の突起や、岩を口で削るように餌を食べる様子を見てください。",

  references: [
    "FishBase: Salarias fasciatus",
    "BiSMAL: Salarias fasciatus ヤエヤマギンポ",
    "Fishes of Australia: Salarias fasciatus",
    "沖縄美ら海水族館：ヤエヤマギンポ",
    "新潟市水族館 マリンピア日本海：ヤエヤマギンポ",
    "新江ノ島水族館：大事なパートナー"
  ]
},


// ========================================
// sp0038 ロイヤルグラマ
// LABO1
// ========================================

{
  id: "sp0038",

  areaIds: [
    "labo1"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ロイヤルグラマ",

  scientificName: "Gramma loreto",

  englishName: "Royal gramma",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "グラマ科",
    "グラマ属"
  ],

  category: "魚類",

  image: "images/sp0038.jpg",

  trivia: [
    {
      title: "岩棚の下では逆さまに泳ぐ",
      text: "腹側を岩の方向へ向けて泳ぐため、岩棚の下では逆さまに泳いでいるように見えます。"
    },
    {
      title: "卵を守るのは巣を作ったオス",
      text: "オスが岩の隙間に巣を作り、メスが産んだ卵を孵化まで守ります。"
    }
  ],

  bodyLength: "最大で全長約8cm。",

  distribution: "カリブ海などの西部大西洋に分布し、日本には自然分布しません。",

  habitat: "サンゴ礁の岩棚の下や岩の隙間、洞窟の入口などの暗い場所を好みます。",

  diet: "小型甲殻類などを食べるほか、ほかの魚の寄生生物を食べることもあります。",

  features: "体の前半は紫色、後半は黄色で、背びれ前方には黒い斑点があります。",

  behavior: "岩やサンゴの近くで暮らし、腹側を岩面へ向ける独特な姿勢で泳ぎます。",

  reproduction: "オスが巣を作り、メスが産んだ卵を孵化するまで守ります。",

  identification: "紫色の前半部と黄色い後半部、背びれ前方の黒い斑点が特徴です。",

  nameOrigin: "英名・流通名の Royal gramma が、日本でもそのまま使われています。",

  humanRelation: "鮮やかな紫色と黄色の体色から人気の高い観賞魚で、人工繁殖個体も流通しています。",

  observationPoint: "岩棚の下で体の向きを見て、逆さまのように泳ぐ姿や背びれの黒い斑点を探してください。",

  references: [
    "FishBase: Gramma loreto",
    "日本動物園水族館協会：ロイヤルグラマ",
    "Smithsonian Tropical Research Institute: Gramma loreto",
    "Asoh & Yoshikawa 1996. Nesting behavior, male parental care, and embryonic development in the fairy basslet, Gramma loreto",
    "Asoh & Shapiro 1997. Bisexual juvenile gonad and gonochorism in the fairy basslet, Gramma loreto"
  ]
},


// ========================================
// sp0039 アイゴ
// LABO2
// ========================================

{
  id: "sp0039",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アイゴ",

  scientificName: "Siganus fuscescens",

  englishName: "Mottled spinefoot",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "アイゴ科",
    "アイゴ属"
  ],

  category: "魚類",

  image: "images/sp0039.jpg",

  trivia: [
    {
      title: "ひれの棘には毒がある",
      text: "背びれ・腹びれ・尻びれの鋭い棘には毒があり、死んだ個体でも注意が必要です。"
    },
    {
      title: "成長すると食べ物が変わる",
      text: "稚魚は動物プランクトンなどを食べますが、成長すると海藻を中心に食べるようになります。"
    }
  ],

  bodyLength: "通常は全長30cm前後で、最大約40cmに達する記録があります。",

  distribution: "西太平洋に広く分布し、日本から東南アジア、オーストラリアなどで見られます。",

  habitat: "沿岸の岩礁や藻場、サンゴ礁周辺に生息し、汽水域へ入ることもあります。",

  diet: "成魚は主に海藻を食べ、稚魚では動物プランクトンを利用する割合が高くなります。",

  features: "褐色からオリーブ色の体にまだら模様があり、ひれには毒を持つ鋭い棘があります。",

  behavior: "岩礁や藻場を泳ぎながら海藻を食べ、警戒すると体色が暗くなることがあります。",

  reproduction: "日本では主に初夏から夏に産卵し、地域によって産卵時期に違いがあります。",

  identification: "褐色からオリーブ色のまだら模様と、長く連続する背びれが特徴です。",

  nameOrigin: "「アイゴ」という和名の詳しい由来には複数の説があり、確実な由来は確認できませんでした。",

  humanRelation: "食用になる地域もありますが、毒のある棘に注意が必要です。磯焼けとの関係でも研究されています。",

  observationPoint: "背びれの鋭い棘と、岩や海藻を口でついばむ様子に注目してください。",

  references: [
    "FishBase: Siganus fuscescens",
    "新潟市水族館 マリンピア日本海：アイゴ",
    "Akiyama et al. 2009. Annual Life Cycle of Rabbitfish Siganus fuscescens in Tateyama Bay",
    "水産工学：響灘蓋井島の秋季と春季における成魚期のアイゴの食性"
  ]
},


// ========================================
// sp0040 アカササノハベラ
// LABO2
// ========================================

{
  id: "sp0040",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アカササノハベラ",

  scientificName: "Pseudolabrus eoethinus",

  englishName: "Red naped wrasse",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "ベラ科",
    "ササノハベラ属"
  ],

  category: "魚類",

  image: "images/sp0040.jpg",

  trivia: [
    {
      title: "昔は別の魚と同じ種類だと思われていた",
      text: "以前はホシササノハベラと同じ「ササノハベラ」とされていましたが、1997年に別種として整理されました。"
    },
    {
      title: "オスは自分の産卵場所を持つ",
      text: "繁殖期のオスは縄張りを持ち、そこへ来たメスとペアで産卵します。"
    }
  ],

  bodyLength: "最大で標準体長約20cm。",

  distribution: "北西太平洋に分布し、日本では千葉県から九州、沖縄などで見られます。",

  habitat: "沿岸からやや沖合の岩礁域に生息し、波当たりのある場所でも見られます。",

  diet: "海底にいる小型の甲殻類などの底生動物を主に食べます。",

  features: "赤褐色の体を持ち、頭部には複数の暗色線があります。",

  behavior: "岩礁の海底近くを泳ぎながら餌を探し、繁殖期のオスは縄張りを持ちます。",

  reproduction: "繁殖期にはオスが縄張りを作り、メスとペアで放卵・放精します。",

  identification: "眼の下から胸びれ方向へ伸びる暗色線が、近縁のホシササノハベラとの見分け方の一つです。",

  nameOrigin: "赤みを帯びた体色が和名に関係すると考えられますが、正式な由来は確認できませんでした。",

  humanRelation: "釣りで見られるベラ類の一つで、地域によっては食用にもされます。",

  observationPoint: "体色だけでなく、眼の下から胸びれ方向へ伸びる顔の模様に注目してください。",

  references: [
    "FishBase: Pseudolabrus eoethinus",
    "World Register of Marine Species: Pseudolabrus eoethinus",
    "桂浜水族館：日本産ササノハベラ属",
    "高知大学理工学部 海洋生物学研究室：アカササノハベラ",
    "Matsumoto et al. 1997. Spawning behavior and reproductive isolation of two species of Pseudolabrus"
  ]
},
// ========================================
// sp0041 アカニシ
// LABO2
// ========================================

{
  id: "sp0041",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アカニシ",

  scientificName: "Rapana venosa",

  englishName: "Veined rapa whelk",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足目",
    "アッキガイ科",
    "アカニシ属"
  ],

  category: "軟体動物",

  image: "images/sp0041.jpg",

  trivia: [
    {
      title: "貝殻の内側が赤橙色になる",
      text: "成長すると殻の入口の内側が赤色から橙色になります。"
    },
    {
      title: "海外では侵略的外来種になっている",
      text: "本来は北西太平洋の貝ですが、黒海や地中海、北米などでは外来種として定着しています。"
    }
  ],

  bodyLength: "殻高は10cm前後が一般的で、大型個体では17cm以上になることがあります。",

  distribution: "日本を含む北西太平洋に分布し、現在では黒海や地中海、北米などにも定着しています。",

  habitat: "内湾などの浅い砂底や砂泥底に生息し、砂の中へ潜ることがあります。",

  diet: "カキやムール貝、アサリなどの二枚貝を主に捕食します。",

  features: "厚く頑丈な殻を持ち、表面にはこぶや筋があり、成長すると殻口の内側が赤橙色になります。",

  behavior: "海底を這って移動し、砂に潜ったり二枚貝を捕食したりします。",

  reproduction: "雌雄は別で、メスは硬い場所に多数の細長い卵嚢を産み付けます。",

  identification: "厚い殻、表面のこぶ、赤橙色になる殻口の内側が特徴です。",

  nameOrigin: "殻口の内側が赤色から橙色になることが「アカニシ」という名前に関係しています。",

  humanRelation: "日本では食用になりますが、海外では二枚貝を捕食する外来種として問題になる地域もあります。",

  observationPoint: "殻の入口の内側にある赤橙色と、表面のこぶや筋に注目してください。",

  references: [
    "BiSMAL: Rapana venosa アカニシ",
    "新潟市水族館 マリンピア日本海：アカニシ",
    "西宮市貝類館：Rapana venosa",
    "Smithsonian NEMESIS: Rapana venosa",
    "Scientific Reports 2020: Rapana venosa egg capsules"
  ]
},


// ========================================
// sp0042 アカヒトデ
// LABO2
// ========================================

{
  id: "sp0042",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アカヒトデ",

  scientificName: "Certonardoa semiregularis",

  englishName: "Red starfish",

  classification: [
    "棘皮動物門",
    "ヒトデ綱",
    "アカヒトデ目",
    "ホウキボシ科",
    "アカヒトデ属"
  ],

  category: "棘皮動物",

  image: "images/sp0042.jpg",

  trivia: [
    {
      title: "鮮やかな赤色が名前そのもの",
      text: "名前の通り朱色から赤色の体を持ち、細長い腕も特徴です。"
    },
    {
      title: "裏側にはたくさんの『管足』",
      text: "腕の裏にある多数の管足を使って、海底を移動したり物につかまったりします。"
    }
  ],

  bodyLength: "10cmほどの個体が見られますが、さらに大型になることもあります。",

  distribution: "日本や東シナ海周辺に分布し、日本では本州北部以南で見られます。",

  habitat: "潮間帯から浅い海の岩礁や、小石の多い海底などに生息します。",

  diet: "詳しい自然下での食性は不明な点が多く、水槽では残り餌などを食べることがあります。",

  features: "通常5本の細長い腕を持ち、背面は朱色から赤色をしています。",

  behavior: "腕の裏側にある管足を使い、岩や海底をゆっくり移動します。",

  reproduction: "本種固有の詳しい繁殖時期や行動については、十分な情報が確認できませんでした。",

  identification: "鮮やかな赤色と、細長い5本の腕が大きな特徴です。",

  nameOrigin: "全身が赤色をしていることから「アカヒトデ」と呼ばれます。",

  humanRelation: "一般的な食用生物ではなく、ヒトデ類の体の構造などを調べる研究対象になることがあります。",

  observationPoint: "赤い体だけでなく、腕の裏側にある小さな管足にも注目してください。",

  references: [
    "新潟大学佐渡自然共生科学センター：アカヒトデ",
    "新潟市水族館 マリンピア日本海：アカヒトデ",
    "水産無脊椎動物研究所：アカヒトデ",
    "World Register of Marine Species: Certonardoa semiregularis"
  ]
},


// ========================================
// sp0043 アカホシカニダマシ
// LABO2
// ========================================

{
  id: "sp0043",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アカホシカニダマシ",

  scientificName: "Neopetrolisthes maculatus",

  englishName: "Dotted anemone crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "カニダマシ科",
    "Neopetrolisthes属"
  ],

  category: "甲殻類",

  image: "images/sp0043.jpg",

  trivia: [
    {
      title: "名前はカニでも、本当のカニではない",
      text: "カニのような姿ですが、ヤドカリやコシオリエビなどに近い仲間です。"
    },
    {
      title: "大きなイソギンチャクと一緒に暮らす",
      text: "大型のイソギンチャクの触手の間で暮らし、ペアで見られることもあります。"
    }
  ],

  bodyLength: "甲幅は約1cmほどの非常に小さな甲殻類です。",

  distribution: "インド太平洋に広く分布し、日本では沖縄など南日本で見られます。",

  habitat: "浅いサンゴ礁に生息し、大型のイソギンチャクを生活場所として利用します。",

  diet: "羽毛状の口器を使い、水中を漂う細かな有機物やプランクトンを食べます。",

  features: "乳白色の体に、赤色から紫赤色の丸い斑点が多数あります。",

  behavior: "イソギンチャクの触手の間に隠れながら、口元の付属肢で水中の餌を集めます。",

  reproduction: "本種固有の詳しい繁殖行動については、今回確認した資料では十分な情報がありません。",

  identification: "白い体と赤紫色の丸い斑点、イソギンチャクの中で暮らすことが特徴です。",

  nameOrigin: "体に赤い星のような斑点があることが、和名の特徴を表しています。",

  humanRelation: "食用ではありませんが、美しい姿からダイビングや水族館、観賞用として知られています。",

  observationPoint: "イソギンチャクの触手の間を探し、白い体の赤い斑点や口元の動きに注目してください。",

  references: [
    "World Register of Marine Species: Neopetrolisthes maculatus",
    "SeaLifeBase: Neopetrolisthes maculatus",
    "水産無脊椎動物研究所：アカホシカニダマシ",
    "ブリタニカ国際大百科事典：アカホシカニダマシ"
  ]
},


// ========================================
// sp0044 アカメバル
// LABO2
// ========================================

{
  id: "sp0044",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アカメバル",

  scientificName: "Sebastes inermis",

  englishName: "Dark-banded rockfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "メバル科",
    "メバル属"
  ],

  category: "魚類",

  image: "images/sp0044.jpg",

  trivia: [
    {
      title: "昔の『メバル』は実は3種類だった",
      text: "かつて1種とされたメバルは、現在ではアカメバル・クロメバル・シロメバルの3種に分けられています。"
    },
    {
      title: "卵ではなく仔魚を産む",
      text: "体内で受精・発生させ、泳ぐことのできる仔魚を海中へ産みます。"
    }
  ],

  bodyLength: "15cm前後の個体がよく見られますが、最大約35.9cmの記録があります。",

  distribution: "北西太平洋に分布し、日本では北海道南部から九州まで見られます。",

  habitat: "沿岸の岩礁や藻場に生息し、海藻の多い場所で群れることがあります。",

  diet: "主にエビなどの甲殻類を食べ、幼魚では動物プランクトンも利用します。",

  features: "赤色から橙色の体に濃い赤色の帯があり、胸びれが比較的長いのが特徴です。",

  behavior: "岩礁や海藻の周辺で暮らし、幼魚は流れ藻について生活することもあります。",

  reproduction: "体内受精を行い、メスの体内で発生した仔魚を海中へ産みます。",

  identification: "赤い体色が目立ちますが、確実な識別には胸びれの軟条数など複数の特徴を確認します。",

  nameOrigin: "赤色から橙色を帯びる体色が「アカメバル」という名前に表れています。",

  humanRelation: "釣りや沿岸漁業の対象となり、食用として利用されています。",

  observationPoint: "体側の赤い帯や胸びれの長さを見て、ほかのメバル類と比べてみてください。",

  references: [
    "FishBase: Sebastes inermis",
    "日本動物園水族館協会：アカメバル",
    "新潟市水族館 マリンピア日本海：アカメバル",
    "水産増殖：若狭湾西部海域におけるメバル複合種群の食性比較"
  ]
},


// ========================================
// sp0045 アカウニ
// LABO2
// ========================================

{
  id: "sp0045",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アカウニ",

  scientificName: "Pseudocentrotus depressus",

  englishName: "Japanese red sea urchin",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "ホンウニ目",
    "オオバフンウニ科",
    "アカウニ属"
  ],

  category: "棘皮動物",

  image: "images/sp0045.jpg",

  trivia: [
    {
      title: "名前は赤いけれど、紫色っぽく見える個体もいる",
      text: "棘は赤色から赤紫色で、個体や照明によって紫色が強く見えることもあります。"
    },
    {
      title: "高級食材として利用される",
      text: "生殖巣が食用となり、西日本を中心に重要な水産資源として利用されています。"
    }
  ],

  bodyLength: "殻の直径は6〜7cmほどで、8cmを超える個体もあります。",

  distribution: "日本沿岸に分布し、北海道南部から鹿児島県周辺まで見られます。",

  habitat: "沿岸の岩礁や小石の多い海底、岩の隙間などに生息します。",

  diet: "主に海藻を食べ、若い個体では微細な藻類も利用します。",

  features: "比較的平たい殻を持ち、赤色から赤紫色の短い棘が密生しています。",

  behavior: "管足と棘を使ってゆっくり移動し、海藻を削り取るように食べます。",

  reproduction: "卵と精子を海中へ放出して体外受精し、産卵期は地域によって異なります。",

  identification: "赤色から赤紫色の棘と、比較的平たい殻が特徴です。",

  nameOrigin: "体表や棘が赤色から赤紫色になることから「アカウニ」と呼ばれます。",

  humanRelation: "生殖巣が食用となる重要な水産資源で、養殖や種苗放流の研究も行われています。",

  observationPoint: "棘の色だけでなく、棘の間から伸びる細い管足やゆっくりした動きにも注目してください。",

  references: [
    "水産庁：アカウニの生物学的特性",
    "大阪市立自然史博物館：アカウニ",
    "鳥羽水族館：アカウニ",
    "J-STAGE：長崎県平戸島におけるアカウニの生殖周期と初成熟",
    "J-STAGE：三浦半島におけるアカウニの生息環境"
  ]
},


// ========================================
// sp0046 アカオビシマハゼ
// LABO2
// ========================================

{
  id: "sp0046",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アカオビシマハゼ",

  scientificName: "Tridentiger trigonocephalus",

  englishName: "Chameleon goby",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ハゼ目",
    "ハゼ科",
    "チチブ属"
  ],

  category: "魚類",

  image: "images/sp0046.jpg",

  trivia: [
    {
      title: "名前の赤帯が見えない個体もいる",
      text: "尻びれに赤褐色の帯が出ることがありますが、個体や状態によって見えない場合もあります。"
    },
    {
      title: "オスが卵を守る",
      text: "カキ殻や岩の隙間に産み付けられた卵を、オスが孵化まで守ります。"
    }
  ],

  bodyLength: "最大で全長約11cm。",

  distribution: "日本などの北西太平洋に分布し、北米やオーストラリアでは外来種として定着した地域もあります。",

  habitat: "内湾や河口の汽水域を中心に、砂泥底やカキ殻、護岸などで見られます。",

  diet: "小型甲殻類やゴカイなど、さまざまな小型動物を食べます。",

  features: "体側に暗色の縞模様があり、尻びれには赤褐色の帯が現れることがあります。",

  behavior: "海底付近で暮らし、カキ殻や岩の隙間などを隠れ場所として利用します。",

  reproduction: "カキ殻や岩の隙間に産卵し、オスが卵を守ります。",

  identification: "体側の縞や顔の模様、尻びれに現れる赤い帯が見分けるポイントです。",

  nameOrigin: "尻びれの赤褐色の帯と体側の縞模様から「アカオビシマハゼ」と呼ばれます。",

  humanRelation: "日本では身近な汽水魚ですが、海外では外来魚として定着した地域もあります。",

  observationPoint: "尻びれの赤い帯だけでなく、体側の縞や顔の模様も合わせて見てください。",

  references: [
    "BiSMAL: Tridentiger trigonocephalus アカオビシマハゼ",
    "FishBase: Tridentiger trigonocephalus",
    "和歌山県立自然博物館：アカオビシマハゼ",
    "京都府レッドデータブック：アカオビシマハゼ",
    "USGS NAS: Chameleon Goby"
  ]
},


// ========================================
// sp0047 イトマキヒトデ
// LABO2
// ========================================

{
  id: "sp0047",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イトマキヒトデ",

  scientificName: "Patiria pectinifera",

  englishName: "Blue bat star",

  classification: [
    "棘皮動物門",
    "ヒトデ綱",
    "アカヒトデ目",
    "イトマキヒトデ科",
    "Patiria属"
  ],

  category: "棘皮動物",

  image: "images/sp0047.jpg",

  trivia: [
    {
      title: "胃を体の外へ出して食べることがある",
      text: "大きな餌を食べるときは、胃を口から外へ出して餌を包み、その場で消化することがあります。"
    },
    {
      title: "発生研究でよく使われる",
      text: "卵を得やすいため、受精や初期発生を研究するモデル生物として利用されています。"
    }
  ],

  bodyLength: "腕を含めた幅は10cm前後になる個体が多く見られます。",

  distribution: "北西太平洋に分布し、日本各地の浅い海でも比較的普通に見られます。",

  habitat: "潮間帯から水深40mほどまでの岩や小石のある海底に生息します。",

  diet: "藻類や海草、細かな有機物、小型の無脊椎動物などさまざまな餌を食べます。",

  features: "短く幅広い5本の腕を持ち、青緑色の体に赤や橙色のまだら模様があります。",

  behavior: "管足を使ってゆっくり移動し、餌によっては胃を体の外へ出して消化します。",

  reproduction: "卵と精子を海中へ放出して体外受精し、幼生期には水中を漂います。",

  identification: "短く幅広い5本の腕と、青緑色に赤いまだら模様が入る体が特徴です。",

  nameOrigin: "丸みのある星形が糸巻き道具に似ていると考えられますが、詳しい命名由来は確認できませんでした。",

  humanRelation: "一般的な食用生物ではありませんが、受精や発生の研究に利用されています。",

  observationPoint: "アカヒトデと腕の形を比べ、移動中には裏側の管足にも注目してください。",

  references: [
    "新潟市水族館 マリンピア日本海：イトマキヒトデ",
    "いおワールドかごしま水族館：イトマキヒトデ",
    "Smithsonian Marine Invasions Laboratory: Patiria pectinifera",
    "World Register of Marine Species: Patiria pectinifera"
  ]
},


// ========================================
// sp0048 イシコ
// LABO2
// ========================================

{
  id: "sp0048",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イシコ",

  scientificName: "Eupentacta quinquesemita",

  englishName: "Pentamerous sea cucumber",

  classification: [
    "棘皮動物門",
    "ナマコ綱",
    "樹手目",
    "スクレロダクティラ科",
    "イシコ属"
  ],

  category: "棘皮動物",

  image: "images/sp0048.jpg",

  trivia: [
    {
      title: "ナマコなのに、餌を砂から拾わない",
      text: "枝分かれした触手を水中へ広げ、流れてくる細かな餌を捕まえて食べます。"
    },
    {
      title: "触手は10本あるが全部同じ大きさではない",
      text: "口の周りには10本の触手があり、8本は大きく、2本は小さくなっています。"
    }
  ],

  bodyLength: "体長は約5〜10cmの小型のナマコ類です。",

  distribution: "北太平洋に分布し、日本沿岸からも記録されています。",

  habitat: "岩礁や岩の隙間などに生息し、触手だけを水中へ出すこともあります。",

  diet: "枝分かれした触手で、水中を漂う微細な有機物やプランクトンを捕らえて食べます。",

  features: "白色からクリーム色の体を持ち、口の周囲には大小10本の枝分かれした触手があります。",

  behavior: "岩の隙間などに体を固定し、触手を広げて餌を集め、順番に口へ運びます。",

  reproduction: "卵と精子を海中へ放出して体外受精しますが、繁殖時期は地域によって異なります。",

  identification: "5列の管足と大小10本の触手が特徴ですが、確実な種同定には専門的な確認が必要な場合があります。",

  nameOrigin: "和名の詳しい由来は確認できませんでした。種小名 quinquesemita は「5本の道」を意味します。",

  humanRelation: "一般的な食用ナマコではなく、体の構造などを調べる研究材料として利用されることがあります。",

  observationPoint: "口から伸びる枝状の触手を探し、触手を1本ずつ口へ運ぶ様子に注目してください。",

  references: [
    "JAMBIO沿岸生物データベース：イシコ Eupentacta quinquesemita",
    "World Register of Marine Species: Eupentacta quinquesemita",
    "University of Puget Sound Museum of Natural History: White Sea Cucumber",
    "E-Fauna BC: Eupentacta quinquesemita",
    "PMC 2023: Mutable collagenous tissues in dendrochirotid holothuroids"
  ]
},


// ========================================
// sp0049 イシダイ
// LABO2
// ========================================

{
  id: "sp0049",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イシダイ",

  scientificName: "Oplegnathus fasciatus",

  englishName: "Barred knifejaw",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "イシダイ科",
    "イシダイ属"
  ],

  category: "魚類",

  image: "images/sp0049.jpg",

  trivia: [
    {
      title: "子どもと大人で模様が変わる",
      text: "幼魚では黒い縦帯が目立ちますが、成長すると薄くなり、大型のオスでは口元が黒くなることがあります。"
    },
    {
      title: "子どもの頃は流れ藻と一緒に旅をする",
      text: "稚魚は流れ藻について海を移動し、成長すると沿岸の岩礁で暮らすようになります。"
    }
  ],

  bodyLength: "最大で全長約80cmに達する記録があります。",

  distribution: "日本、朝鮮半島、台湾などの北西太平洋に分布します。",

  habitat: "成魚は沿岸の岩礁で暮らし、幼魚は流れ藻の周辺で見られることがあります。",

  diet: "丈夫な顎と歯を使い、貝類や甲殻類などの硬い無脊椎動物を食べます。",

  features: "幼魚では白銀色の体に黒い縦帯が入り、成長すると縞が薄くなります。",

  behavior: "幼魚は流れ藻の周囲で暮らし、成長すると岩礁で貝類などを探します。",

  reproduction: "日本では主に春から夏に産卵し、産卵期には複数回産卵します。",

  identification: "幼魚の黒い縦帯が特徴で、黒い斑点を持つイシガキダイとの違いになります。",

  nameOrigin: "詳しい命名由来は確認できませんでしたが、岩礁域に暮らす魚として古くから知られています。",

  humanRelation: "釣りの対象として人気が高く、食用や養殖にも利用されています。",

  observationPoint: "黒い縦帯に注目し、大型個体では縞が薄くなっているか、口元が黒いかも見てください。",

  references: [
    "FishBase: Oplegnathus fasciatus",
    "World Register of Marine Species: Oplegnathus fasciatus",
    "鳥羽水族館：イシダイ",
    "神奈川県水産技術センター：イシダイ",
    "水産庁：イシダイの繁殖生態"
  ]
},


// ========================================
// sp0050 イシダタミ
// 展示名：イシダタミガイ
// LABO2
// ========================================

{
  id: "sp0050",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イシダタミ（イシダタミガイ）",

  scientificName: "Monodonta confusa",

  englishName: "Lipped periwinkle",

  classification: [
    "軟体動物門",
    "腹足綱",
    "古腹足類",
    "ニシキウズガイ科",
    "イシダタミ属"
  ],

  category: "軟体動物",

  image: "images/sp0050.jpg",

  trivia: [
    {
      title: "貝殻が本当に「石畳」のよう",
      text: "殻の表面には縦横の細かな溝があり、小さな四角形が並ぶ石畳のように見えます。"
    },
    {
      title: "昼間は石の下に隠れていることが多い",
      text: "昼は石の下などに隠れ、夜になると岩の表面を移動して餌を食べます。"
    }
  ],

  bodyLength: "殻高は約2〜2.5cmの小型の巻貝です。",

  distribution: "日本では北海道から九州まで広く見られ、東アジア沿岸にも分布します。",

  habitat: "潮間帯の岩礁や護岸に生息し、石の下や岩の隙間でも見られます。",

  diet: "岩の表面についた微細な藻類を、歯舌で削り取って食べます。",

  features: "丸みのある円錐形の殻を持ち、表面には石畳のような細かな凹凸が並びます。",

  behavior: "昼間は石の下などに隠れ、夜になると岩面を這って藻類を食べます。",

  reproduction: "雌雄は別々ですが、繁殖時期は地域によって異なります。",

  identification: "殻表面の縦横の溝によって作られる、石畳のような模様が特徴です。",

  nameOrigin: "殻表面の細かな模様が石畳のように見えることから名付けられました。",

  humanRelation: "重要な漁業対象ではありませんが、日本の磯で身近な巻貝の一つです。",

  observationPoint: "殻の表面をよく見て、規則的に並ぶ石畳のような細かな凹凸を探してください。",

  references: [
    "BiSMAL: Monodonta confusa イシダタミ",
    "国立科学博物館 Science Museum Net: Monodonta confusa",
    "新潟大学佐渡自然共生科学センター：イシダタミ",
    "西宮市貝類館：イシダタミ",
    "World Register of Marine Species: Monodonta confusa"
  ]
},

// ========================================
// sp0051 イシダタミヤドカリ
// LABO2
// ========================================

{
  id: "sp0051",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イシダタミヤドカリ",

  scientificName: "Dardanus crassimanus",

  englishName: "Mauve-eyed hermit crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ヤドカリ科",
    "オニヤドカリ属"
  ],

  category: "甲殻類",

  image: "images/sp0051.jpg",

  trivia: [
    {
      title: "脚に『石畳』のような模様がある",
      text: "歩脚の表面には細かな凹凸が並び、石畳のように見えます。"
    },
    {
      title: "大きな巻貝の殻を家にする",
      text: "大型になるため、サザエ類など比較的大きな巻貝の殻を利用します。"
    }
  ],

  bodyLength: "大型になるヤドカリで、甲長は数cmに達します。",

  distribution: "日本では東京湾から九州などで見られ、台湾やベトナム、インド洋方面にも分布します。",

  habitat: "沿岸の岩礁やサンゴ礁に生息し、浅場から水深100mを超える場所まで記録されています。",

  diet: "自然界での詳しい食性は不明な点が多く、海底のさまざまな有機物を利用すると考えられています。",

  features: "大型で頑丈な脚とはさみを持ち、歩脚には石畳のような凹凸があります。",

  behavior: "巻貝の殻を背負って海底を歩き、成長するとより大きな貝殻へ移ります。",

  reproduction: "本種固有の詳しい繁殖時期や行動については、十分な情報が確認できませんでした。",

  identification: "大型の体と毛の多い脚、歩脚にある石畳状の凹凸が特徴です。",

  nameOrigin: "歩脚の表面にある石畳のような模様が和名の由来です。",

  humanRelation: "一般的な食用種ではなく、水族館や磯の生物展示などで観察されます。",

  observationPoint: "背負った貝殻だけでなく、外へ出ている脚の凹凸や毛にも注目してください。",

  references: [
    "World Register of Marine Species: Dardanus crassimanus",
    "日本動物園水族館協会：イシダタミヤドカリ",
    "新潟市水族館 マリンピア日本海：イシダタミヤドカリ",
    "水産無脊椎動物研究所：イシダタミヤドカリ"
  ]
},


// ========================================
// sp0052 イセエビ
// LABO2
// ========================================

{
  id: "sp0052",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イセエビ",

  scientificName: "Panulirus japonicus",

  englishName: "Japanese spiny lobster",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "イセエビ科",
    "イセエビ属"
  ],

  category: "甲殻類",

  image: "images/sp0052.jpg",

  trivia: [
    {
      title: "幼生時代を約1年も海で漂う",
      text: "孵化後は平たいフィロソーマ幼生となり、約300日もの長い浮遊生活を送ります。"
    },
    {
      title: "大きなはさみを持たない",
      text: "巨大なはさみ脚はなく、その代わりに非常に長い触角と硬い棘を持っています。"
    }
  ],

  bodyLength: "最大で全長約30cm。",

  distribution: "西太平洋に分布し、日本では主に暖かい太平洋沿岸で見られます。",

  habitat: "浅い岩礁に生息し、昼は岩穴などに隠れ、夜になると外へ出ます。",

  diet: "小型の甲殻類や貝類など、海底にいる無脊椎動物を食べます。",

  features: "赤褐色の硬い体に多数の棘があり、非常に長く頑丈な触角が目立ちます。",

  behavior: "夜行性で、昼は岩穴に隠れ、夜になると海底を歩いて餌を探します。",

  reproduction: "日本では主に5〜8月ごろに産卵し、メスが腹部に卵を抱えて保護します。",

  identification: "赤褐色の体、非常に長い触角、頭胸部に並ぶ多数の棘が特徴です。",

  nameOrigin: "伊勢地方で多く漁獲されたことが名称の由来とする説があります。",

  humanRelation: "日本を代表する高級水産物で、資源を守るため禁漁期などの漁業管理が行われています。",

  observationPoint: "長い触角の動きや、昼間に複数個体が岩穴へ集まる様子に注目してください。",

  references: [
    "BiSMAL: Panulirus japonicus イセエビ",
    "World Register of Marine Species: Panulirus japonicus",
    "SeaLifeBase: Panulirus japonicus",
    "水産研究・教育機構：イセエビの幼生期初期から中期における分布生態",
    "三重県水産研究所：イセエビの生態・資源管理",
    "新潟市水族館 マリンピア日本海：イセエビ"
  ]
},


// ========================================
// sp0053 イソカサゴ
// LABO2
// ========================================

{
  id: "sp0053",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イソカサゴ",

  scientificName: "Scorpaenodes evides",

  englishName: "Cheekspot scorpionfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "フサカサゴ科",
    "イソカサゴ属"
  ],

  category: "魚類",

  image: "images/sp0053.jpg",

  trivia: [
    {
      title: "昔使われていた学名が現在は変わっている",
      text: "以前は別の学名でも扱われていましたが、現在は Scorpaenodes evides が受理されています。"
    },
    {
      title: "岩に紛れてじっとしている",
      text: "赤褐色のまだら模様で岩に溶け込み、海底でじっと獲物を待ちます。"
    }
  ],

  bodyLength: "最大で全長約10.5cm。",

  distribution: "インド太平洋に広く分布し、日本では本州中部以南などで見られます。",

  habitat: "浅いサンゴ礁や岩礁、岩穴などに生息し、潮だまりで見られることもあります。",

  diet: "小型の甲殻類など、海底付近の小動物を捕食します。",

  features: "赤褐色のまだら模様を持ち、頬付近には特徴的な暗色斑があります。",

  behavior: "岩の上などでじっとし、周囲に溶け込みながら獲物を待ちます。",

  reproduction: "本種固有の詳しい産卵時期や繁殖行動については、十分な情報が確認できませんでした。",

  identification: "小型の赤褐色の体と、頬付近にある暗色斑が特徴です。",

  nameOrigin: "磯や沿岸の岩礁で見られるカサゴ類であることに由来すると考えられます。",

  humanRelation: "一般的な食用魚ではなく、背びれの棘には注意が必要とされています。",

  observationPoint: "岩の模様の中にじっとしている魚がいないか、動かない魚を探すつもりで見てください。",

  references: [
    "BiSMAL: Scorpaenodes evides イソカサゴ",
    "FishBase: Scorpaenodes evides",
    "神奈川県立生命の星・地球博物館 魚類写真資料データベース",
    "Motomura et al. 2010. Taxonomic revision involving Scorpaenodes evides",
    "伊豆下田地区教育旅行ガイド：危険生物 イソカサゴ"
  ]
},


// ========================================
// sp0054 イソギンポ
// LABO2
// ========================================

{
  id: "sp0054",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イソギンポ",

  scientificName: "Parablennius yatabei",

  englishName: "Yatabe blenny",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ギンポ目",
    "イソギンポ科",
    "Parablennius属"
  ],

  category: "魚類",

  image: "images/sp0054.jpg",

  trivia: [
    {
      title: "目の上に『眉毛』のような突起",
      text: "眼の上に枝分かれした皮膚の突起があり、眉毛や角のように見えます。"
    },
    {
      title: "周囲に合わせて体色が変わる",
      text: "茶色や緑色などへ体色を変え、岩や海藻に溶け込みます。"
    }
  ],

  bodyLength: "最大で全長約9cm。",

  distribution: "北西太平洋に分布し、日本沿岸や朝鮮半島南部などで見られます。",

  habitat: "沿岸の岩礁や潮だまりなどの浅い場所に生息します。",

  diet: "主に藻類や細かな有機物を、岩の表面からついばんで食べます。",

  features: "鱗がなく、眼の上には枝分かれした皮弁があり、体色を大きく変えることができます。",

  behavior: "岩の上などにとどまり、危険を感じると素早く岩穴や隙間へ逃げ込みます。",

  reproduction: "卵生で、夏に産卵し、卵は海底の基質などへ付着します。",

  identification: "眼の上にある枝状の皮弁が特徴で、体色だけでは見分けにくい魚です。",

  nameOrigin: "磯に暮らすギンポ類であることから「イソギンポ」と呼ばれます。",

  humanRelation: "一般的な食用魚ではなく、磯や潮だまりで観察しやすい魚です。",

  observationPoint: "眼の上にある枝分かれした突起と、周囲の岩に似た体色に注目してください。",

  references: [
    "FishBase: Parablennius yatabei",
    "南三陸ネイチャーセンター魚類標本データベース：イソギンポ",
    "小学館 日本大百科全書：イソギンポ",
    "Masuda et al. 1984. The Fishes of the Japanese Archipelago"
  ]
},


// ========================================
// sp0055 イソスジエビ
// LABO2
// ========================================

{
  id: "sp0055",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イソスジエビ",

  scientificName: "Palaemon pacificus",

  englishName: "Pacific grass shrimp",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "テナガエビ科",
    "スジエビ属"
  ],

  category: "甲殻類",

  image: "images/sp0055.jpg",

  trivia: [
    {
      title: "透明な体なのに黒い縞がくっきり",
      text: "ほぼ透明な体に黒褐色の細い横縞が多数入り、背景に溶け込むと見つけにくくなります。"
    },
    {
      title: "寿命はおよそ1年",
      text: "館山湾の研究では、寿命は約12〜15か月と推定されています。"
    }
  ],

  bodyLength: "全長約5cm。",

  distribution: "日本を含む西太平洋から東南アジア、ハワイなどに分布します。",

  habitat: "外洋に面した岩礁海岸の潮だまりなどに多く生息します。",

  diet: "小型の動物や細かな有機物など、さまざまな餌を利用します。",

  features: "ほぼ透明な体に黒褐色の細い横縞が多数あり、長い額角を持ちます。",

  behavior: "潮だまりの岩陰などで暮らし、人が近づくと素早く移動します。",

  reproduction: "館山湾では5〜11月に繁殖し、抱卵期間は約10〜20日と報告されています。",

  identification: "透明な体の黒い横縞と、やや上向きに曲がる額角が特徴です。",

  nameOrigin: "磯に暮らし、体に筋状の模様を持つことが和名に表れています。",

  humanRelation: "大型の食用エビではありませんが、磯で身近に観察できる生物です。",

  observationPoint: "透明な体そのものより黒い横縞を探し、頭から伸びる長い額角にも注目してください。",

  references: [
    "World Register of Marine Species: Palaemon pacificus",
    "宇久井ビジターセンター：イソスジエビ",
    "日本大百科全書：イソスジエビ",
    "伊藤・渡邊・村野 1991：イソスジエビとスジエビモドキの成長と繁殖"
  ]
},


// ========================================
// sp0056 イワガニ
// LABO2
// ========================================

{
  id: "sp0056",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "イワガニ",

  scientificName: "Pachygrapsus crassipes",

  englishName: "Striped shore crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "イワガニ科",
    "イワガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0056.jpg",

  trivia: [
    {
      title: "海のカニなのに陸上を走り回る",
      text: "水面より上の岩場を素早く走り、危険を感じると岩の隙間へ逃げ込みます。"
    },
    {
      title: "かなりの雑食性",
      text: "海藻だけでなく、小型甲殻類や小魚、動物の死骸なども食べます。"
    }
  ],

  bodyLength: "甲幅は約3〜4cm。",

  distribution: "日本や朝鮮半島などに分布し、北米西岸にも個体群が見られます。",

  habitat: "岩礁海岸や護岸、潮間帯などに生息し、水面より上の岩にも出てきます。",

  diet: "海藻、小型甲殻類、小魚、動物の死骸などを食べる雑食性です。",

  features: "四角く平たい甲羅を持ち、表面には多数の細い横線があります。",

  behavior: "非常に素早く、危険を感じると横方向へ走って岩の隙間へ逃げ込みます。",

  reproduction: "メスが腹部に卵を抱えて守りますが、詳しい産卵時期については十分な情報がありません。",

  identification: "四角く平たい甲羅と、表面に並ぶ細かな横線が特徴です。",

  nameOrigin: "岩礁海岸の岩の上でよく見られることから「イワガニ」と呼ばれます。",

  humanRelation: "重要な食用種ではありませんが、磯で非常によく見られる身近なカニです。",

  observationPoint: "甲羅の細かな横線と、岩場を素早く走る動きに注目してください。",

  references: [
    "BiSMAL: Pachygrapsus crassipes イワガニ",
    "World Register of Marine Species: Pachygrapsus crassipes",
    "福井県海浜自然センター：イワガニ",
    "福岡市生物多様性ウェブセンター：イワガニ",
    "新潟大学佐渡自然共生科学センター：Pachygrapsus crassipes"
  ]
},


// ========================================
// sp0057 ウバウオ
// LABO2
// ========================================

{
  id: "sp0057",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ウバウオ",

  scientificName: "Aspasma ubauo",

  englishName: "Clingfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ウバウオ科",
    "ウバウオ属"
  ],

  category: "魚類",

  image: "images/sp0057.jpg",

  trivia: [
    {
      title: "お腹が『吸盤』になっている",
      text: "腹びれなどが大きな吸盤に変化し、岩や海藻へ強くくっつくことができます。"
    },
    {
      title: "実は2019年に新種として名前が付いた",
      text: "日本のウバウオは再調査によって別種と分かり、2019年に Aspasma ubauo として新種記載されました。"
    }
  ],

  bodyLength: "全長約6cmほどの小型魚です。",

  distribution: "日本沿岸に分布し、現在も新しい分布記録が報告されています。",

  habitat: "浅い岩礁や藻場に生息し、海藻などへ吸盤でくっついて暮らします。",

  diet: "小型の甲殻類などの小動物を捕食します。",

  features: "鱗がなく、腹側には大きな吸盤があり、体色は黄色や緑色、褐色などに変化します。",

  behavior: "海藻や岩へ吸着して暮らし、移動するときだけ短く泳いで別の場所へ移ります。",

  reproduction: "春から初夏に繁殖するとの報告がありますが、分類整理以前の研究のため再確認も必要です。",

  identification: "腹側にある大きな吸盤が最大の特徴です。",

  nameOrigin: "種小名 ubauo は、日本の標準和名「ウバウオ」をそのままラテン文字化したものです。",

  humanRelation: "食用にはほとんど利用されませんが、腹びれが吸盤へ変化した特殊な体を観察できます。",

  observationPoint: "何にくっついているかを見て、腹側の吸盤を使う様子に注目してください。",

  references: [
    "Fujiwara & Motomura 2019. Description of Aspasma ubauo",
    "日本魚類学会 Ichthyological Research 67: 50–67",
    "東京大学総合研究博物館 魚類標本データベース：Aspasma ubauo",
    "Aquatic Animals 2026：島根県初記録となる隠岐諸島産ウバウオ",
    "鹿児島大学総合研究博物館：新種魚類 Aspasma ubauo"
  ]
},


// ========================================
// sp0058 ウニレイシ
// LABO2
// ========================================

{
  id: "sp0058",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ウニレイシ",

  scientificName: "Mancinella echinata",

  englishName: "Prickly rock shell",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足類",
    "アッキガイ科",
    "Mancinella属"
  ],

  category: "軟体動物",

  image: "images/sp0058.jpg",

  trivia: [
    {
      title: "貝殻にトゲのような突起がある",
      text: "殻の表面にはこぶや棘状の突起があり、ウニを思わせる姿をしています。"
    },
    {
      title: "古い図鑑では違う属名で出てくる",
      text: "以前は別の属名で扱われたこともありますが、現在は Mancinella echinata が受理名です。"
    }
  ],

  bodyLength: "殻高は3cm前後で、5cm近くになる個体もあります。",

  distribution: "日本では房総半島以南に分布し、中国やフィリピン、オーストラリアなどでも見られます。",

  habitat: "潮間帯から浅い海の岩礁に生息します。",

  diet: "本種固有の詳しい食性については、今回確認した資料では十分な情報がありません。",

  features: "厚く丈夫な殻を持ち、表面には多数のこぶや棘状の突起があります。",

  behavior: "岩礁の上を這って生活しますが、詳しい活動時間などは十分に分かっていません。",

  reproduction: "本種固有の詳しい繁殖時期や産卵方法については、十分な情報が確認できませんでした。",

  identification: "殻表面にある大きなこぶや棘状の突起が特徴です。",

  nameOrigin: "殻の突起がウニの棘を思わせることが名称に関係しています。",

  humanRelation: "主要な水産物ではなく、特徴的な貝殻を持つ磯の巻貝として観察されます。",

  observationPoint: "殻の表面にあるこぶや棘が、どのように並んでいるかを見てください。",

  references: [
    "BiSMAL: Mancinella echinata ウニレイシ",
    "World Register of Marine Species: Mancinella echinata",
    "MolluscaBase: Mancinella echinata",
    "鳥羽水族館 貝類コレクション：ウニレイシ",
    "Invertebrate Fauna of Korea: Mancinella echinata"
  ]
},


// ========================================
// sp0059 オオアカハラ
// LABO2
// ========================================

{
  id: "sp0059",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オオアカハラ",

  scientificName: "Petrolisthes coccineus",

  englishName: "Red porcelain crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "カニダマシ科",
    "イソカニダマシ属"
  ],

  category: "甲殻類",

  image: "images/sp0059.jpg",

  trivia: [
    {
      title: "カニの姿でも、本当のカニではない",
      text: "カニのように見えますが、ヤドカリに近いカニダマシ類の仲間です。"
    },
    {
      title: "口元の毛で水中の餌を集める",
      text: "羽毛状の付属肢を水中へ広げ、プランクトンや細かな有機物を集めます。"
    }
  ],

  bodyLength: "甲幅は約3cmほどです。",

  distribution: "日本では房総半島以南で見られ、インド太平洋にも分布します。",

  habitat: "沿岸の岩礁や潮間帯に生息し、石の下や岩の隙間を利用します。",

  diet: "羽毛状の口器で、水中のプランクトンや細かな有機物をこし取って食べます。",

  features: "赤褐色から濃い赤色の平たい体と、左右の大きなはさみが特徴です。",

  behavior: "石の下などに隠れ、餌を取るときには口元の羽毛状の器官を繰り返し動かします。",

  reproduction: "本種固有の詳しい繁殖時期や行動については、十分な情報が確認できませんでした。",

  identification: "赤みの強い体と比較的大きなはさみが特徴です。",

  nameOrigin: "和名の詳しい命名由来については、今回確認した資料では明確に分かっていません。",

  humanRelation: "一般的な食用生物ではなく、磯で見られるカニダマシ類の一種です。",

  observationPoint: "口元にある羽毛状の器官を広げて、餌を集める動きに注目してください。",

  references: [
    "ITIS: Petrolisthes coccineus",
    "BiSMAL: Petrolisthes coccineus オオアカハラ",
    "千葉県立中央博物館：磯の生きもの観察資料",
    "World Register of Marine Species: Petrolisthes coccineus"
  ]
},


// ========================================
// sp0060 オオナルトボラ
// LABO2
// ========================================

{
  id: "sp0060",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オオナルトボラ",

  scientificName: "Tutufa bufo",

  englishName: "Red-mouth frog shell",

  classification: [
    "軟体動物門",
    "腹足綱",
    "オキニシ科",
    "Tutufa属"
  ],

  category: "軟体動物",

  image: "images/sp0060.jpg",

  trivia: [
    {
      title: "殻の入口が鮮やかな赤色",
      text: "大きくごつごつした殻を持ち、殻口の内側が鮮やかな赤色になります。"
    },
    {
      title: "毒が検出された例がある",
      text: "中腸腺からテトロドトキシンが検出された例があり、食用目的で安易に扱うべきではありません。"
    }
  ],

  bodyLength: "殻長約14〜20cmになる大型の巻貝です。",

  distribution: "日本では房総半島などより南に分布し、熱帯のインド・西太平洋にも広く見られます。",

  habitat: "潮間帯より少し深い岩礁域などに生息します。",

  diet: "肉食性で、ゴカイ類など海底の無脊椎動物を捕食します。",

  features: "大型で厚い殻を持ち、表面には大きなこぶがあり、殻口の内側は鮮やかな赤色です。",

  behavior: "岩礁の上を這って生活する底生性の巻貝です。",

  reproduction: "本種固有の詳しい産卵時期や繁殖行動については、十分な情報が確認できませんでした。",

  identification: "大きくごつごつした殻と、殻口の内側の鮮やかな赤色が特徴です。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "中腸腺からテトロドトキシンが検出された例があり、自然毒情報の対象となっています。",

  observationPoint: "殻の外側だけでなく、入口の内側にある鮮やかな赤色にも注目してください。",

  references: [
    "厚生労働省：自然毒のリスクプロファイル オオナルトボラ",
    "World Register of Marine Species: Tutufa bufo",
    "SeaLifeBase: Tutufa bufo",
    "日本近海産貝類図鑑：オオナルトボラ"
  ]
},
// ========================================
// sp0061 オオヘビガイ
// LABO2
// ========================================

{
  id: "sp0061",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オオヘビガイ",

  scientificName: "Thylacodes adamsii",

  englishName: "Worm shell",

  classification: [
    "軟体動物門",
    "腹足綱",
    "ムカデガイ科",
    "Thylacodes属"
  ],

  category: "軟体動物",

  image: "images/sp0061.jpg",

  trivia: [
    {
      title: "巻貝なのに岩から動かない",
      text: "幼い時期に岩へ付着すると、その後はそこから動かずに生活します。"
    },
    {
      title: "粘液のネットで餌を取る",
      text: "粘液を網のように広げ、水中のプランクトンや細かな有機物を捕まえて食べます。"
    }
  ],

  bodyLength: "殻は5cm前後になることがあり、不規則に曲がりながら成長します。",

  distribution: "日本では北海道南部から九州にかけての沿岸などで見られます。",

  habitat: "潮間帯や浅い岩礁で、岩などの硬い場所へ殻を固着させて暮らします。",

  diet: "粘液を水中へ広げ、プランクトンや細かな有機物を捕らえて食べます。",

  features: "細長い管状の殻が不規則に曲がりながら、岩の表面へ張り付いています。",

  behavior: "成長後はほとんど移動せず、粘液を伸ばして餌を集めます。",

  reproduction: "オスが精子を含むカプセルを放出し、メスが粘液を使って捕らえることで受精します。",

  identification: "岩に固着した、不規則に曲がる管状の殻が大きな特徴です。",

  nameOrigin: "細長く曲がりくねった殻がヘビのように見えることから「ヘビガイ」と呼ばれます。",

  humanRelation: "一般的な食用貝ではなく、動かない巻貝や独特な摂餌方法を観察できる生物です。",

  observationPoint: "殻の入口周辺を見て、餌を集めるための粘液を伸ばしていないか探してみてください。",

  references: [
    "BiSMAL: Thylacodes adamsii オオヘビガイ",
    "World Register of Marine Species: Thylacodes adamsii",
    "新潟大学佐渡自然共生科学センター：オオヘビガイ",
    "東京ズーネット：オオヘビガイ"
  ]
},


// ========================================
// sp0062 オトヒメエビ
// LABO2
// ========================================

{
  id: "sp0062",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オトヒメエビ",

  scientificName: "Stenopus hispidus",

  englishName: "Banded coral shrimp",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "オトヒメエビ科",
    "オトヒメエビ属"
  ],

  category: "甲殻類",

  image: "images/sp0062.jpg",

  trivia: [
    {
      title: "魚を掃除する『クリーナー』",
      text: "魚の体についた寄生生物や食べ残しなどを食べるクリーニング行動が知られています。"
    },
    {
      title: "非常に長い白い触角で存在を知らせる",
      text: "体よりずっと長い白い触角が目立ち、魚に存在を知らせる手掛かりにもなります。"
    }
  ],

  bodyLength: "体長は最大約6cmで、長い触角を含めるとさらに大きく見えます。",

  distribution: "紅海からインド洋、太平洋、西部大西洋まで広く分布します。",

  habitat: "サンゴ礁や岩礁の岩穴、洞窟などに生息します。",

  diet: "小型の甲殻類のほか、魚の体表についた寄生生物や食べ残しなども食べます。",

  features: "赤と白の帯模様と、非常に長い白い触角が特徴です。",

  behavior: "岩穴などで暮らし、近づいてきた魚の体表や口の周りを掃除することがあります。",

  reproduction: "雌雄でペアを作ることがあり、メスは腹部に卵を抱えて守ります。",

  identification: "赤白の帯模様、長い白い触角、大きなはさみ脚が見分けるポイントです。",

  nameOrigin: "和名の正確な由来は今回確認できなかったため、由来については断定できません。",

  humanRelation: "海水観賞で人気があり、水族館では魚とのクリーニング関係を紹介する生物としても知られています。",

  observationPoint: "長い触角だけでなく、魚の体表を歩くようなクリーニング行動にも注目してください。",

  references: [
    "SeaLifeBase: Stenopus hispidus",
    "World Register of Marine Species: Stenopus hispidus",
    "東京都小笠原支庁：オトヒメエビ",
    "Stenopus hispidus cleaning behaviour and reproduction studies"
  ]
},


// ========================================
// sp0063 オニイソメ
// LABO2
// ========================================

{
  id: "sp0063",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オニイソメ",

  scientificName: "Eunice aphroditois",

  englishName: "Bobbit worm",

  classification: [
    "環形動物門",
    "多毛綱",
    "イソメ目",
    "イソメ科",
    "Eunice属"
  ],

  category: "環形動物",

  image: "images/sp0063.jpg",

  trivia: [
    {
      title: "1mを超える巨大な個体もいる",
      text: "非常に大型になるイソメの仲間で、全長1.5mほどに達する個体も知られています。"
    },
    {
      title: "虹色に光ることがある",
      text: "暗褐色の体は、光の当たり方によって虹色のような光沢を見せることがあります。"
    }
  ],

  bodyLength: "大型個体では全長約1.5mに達することがあります。",

  distribution: "日本では本州中部以南などで見られ、インド太平洋にも広く分布します。",

  habitat: "岩礁やサンゴ礁、砂や小石が混じる海底の巣穴などで暮らします。",

  diet: "強い顎を使って小型の無脊椎動物などを捕食し、腐肉を利用することもあります。",

  features: "細長い体に多数の体節があり、頭部には5本の触手と強い顎があります。",

  behavior: "体の多くを岩や砂の中に隠し、頭部を出して獲物を探します。",

  reproduction: "本種特有の繁殖行動については、今回確認した資料では十分な情報がありません。",

  identification: "大型の細長い体、5本の触手、光沢のある暗褐色の体、強い顎が特徴です。",

  nameOrigin: "正式な命名由来は今回確認できなかったため、「オニ」の由来は断定できません。",

  humanRelation: "一般的な食用生物ではなく、大型で強い顎を持つ特徴的な多毛類として知られています。",

  observationPoint: "岩穴から出ている頭部を探し、5本の触手や光沢のある体表に注目してください。",

  references: [
    "BiSMAL: Eunice aphroditois オニイソメ",
    "World Register of Marine Species: Eunice aphroditois",
    "日本大百科全書：オニイソメ",
    "水産無脊椎動物研究所：オニイソメ"
  ]
},


// ========================================
// sp0064 オニクモヒトデ
// LABO2
// ========================================

{
  id: "sp0064",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オニクモヒトデ",

  scientificName: "Ophiomastix janualis",

  englishName: "Gatekeeper brittle star",

  classification: [
    "棘皮動物門",
    "クモヒトデ綱",
    "フサクモヒトデ科",
    "Ophiomastix属"
  ],

  category: "棘皮動物",

  image: "images/sp0064.jpg",

  trivia: [
    {
      title: "腕のトゲは目立つが、人を刺すものではない",
      text: "腕には太いトゲが並びますが、人を刺すものではないと紹介されています。"
    },
    {
      title: "体より腕だけが見えていることが多い",
      text: "中央の体をサンゴの隙間へ隠し、細長い腕だけを外へ伸ばすことがあります。"
    }
  ],

  bodyLength: "中央の盤は直径約2cmで、腕は18cmほどに達することがあります。",

  distribution: "インド・西太平洋の熱帯域に分布し、琉球列島などでも見られます。",

  habitat: "サンゴ礁に生息し、枝状サンゴや岩の隙間などを隠れ場所にします。",

  diet: "本種固有の詳しい食性については、今回確認した資料では十分な情報がありません。",

  features: "小さな円盤状の体から5本の細長い腕が伸び、腕には多数の棘があります。",

  behavior: "中央部を隙間へ隠し、腕だけを外へ伸ばしたり、腕を使って這うように移動します。",

  reproduction: "本種固有の詳しい繁殖時期や産卵行動については、十分な情報が確認できませんでした。",

  identification: "細長い腕と、腕に並ぶ大きな棘が特徴です。",

  nameOrigin: "大きな棘を持つクモヒトデですが、正式な命名由来については確認できませんでした。",

  humanRelation: "一般的な食用生物ではなく、サンゴ礁の生物多様性を観察できる生物です。",

  observationPoint: "サンゴの隙間を見て、本体ではなくトゲの多い細長い腕を探してみてください。",

  references: [
    "沖縄美ら海水族館：オニクモヒトデ",
    "World Register of Marine Species: Ophiomastix janualis",
    "BiSMAL: Ophiomastix janualis",
    "SeaLifeBase: Ophiomastix janualis"
  ]
},


// ========================================
// sp0065 オミナエシダカラ
// LABO2
// ========================================

{
  id: "sp0065",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オミナエシダカラ",

  scientificName: "Naria boivinii",

  englishName: "Boivin's cowry",

  classification: [
    "軟体動物門",
    "腹足綱",
    "タカラガイ科",
    "Naria属"
  ],

  category: "軟体動物",

  image: "images/sp0065.jpg",

  trivia: [
    {
      title: "古い資料とは属名が変わっている",
      text: "以前は Erosaria boivinii とされることもありましたが、現在は Naria boivinii が受理名です。"
    },
    {
      title: "殻は自然に磨かれたような光沢を持つ",
      text: "殻は非常になめらかで、外套膜が表面を覆うことが美しい光沢の維持にも関係します。"
    }
  ],

  bodyLength: "殻長は約4cm前後。",

  distribution: "日本では房総半島・山口県以南などで見られ、インド・西太平洋にも分布します。",

  habitat: "潮間帯からやや深い海のサンゴ礁や砂底、岩礁周辺などに生息します。",

  diet: "本種固有の詳しい食性については、今回確認した資料では十分な情報がありません。",

  features: "丸みのある卵形の殻を持ち、表面はなめらかで光沢があります。",

  behavior: "海底を這って移動し、生きているときには外套膜を殻の表面へ広げることがあります。",

  reproduction: "本種固有の詳しい繁殖時期や卵保護については、十分な情報が確認できませんでした。",

  identification: "なめらかな殻表面と灰褐色の模様が特徴です。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では明確に分かっていません。",

  humanRelation: "光沢のある殻から、貝類観察や貝殻収集で知られています。",

  observationPoint: "生きた個体では、殻の表面を外套膜が覆っていないか注目してください。",

  references: [
    "World Register of Marine Species: Naria boivinii",
    "MolluscaBase: Naria boivinii",
    "BiSMAL: Erosaria boivinii オミナエシダカラ",
    "日本近海産貝類図鑑：オミナエシダカラ"
  ]
},


// ========================================
// sp0066 オヨギピンノ
// LABO2
// ========================================

{
  id: "sp0066",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オヨギピンノ",

  scientificName: "Tritodynamia horvathi",

  englishName: "Swimming pea crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "短尾下目",
    "ヨコナガピンノ属"
  ],

  category: "甲殻類",

  image: "images/sp0066.jpg",

  trivia: [
    {
      title: "カニなのに水中を泳げる",
      text: "脚に生えた長い毛をオールのように使い、水中を泳ぐことができます。"
    },
    {
      title: "大量に海面を泳ぐことがある",
      text: "多数の個体が集団で泳ぐことがあり、餌を取るための遊泳も行うと考えられています。"
    }
  ],

  bodyLength: "甲幅は約1〜1.5cmの小型のカニです。",

  distribution: "日本では東京湾から有明海などで見られ、中国や朝鮮半島沿岸にも分布します。",

  habitat: "内湾の海底などに生息し、二枚貝の内部やゴカイ類の棲管から見つかることもあります。",

  diet: "小型のプランクトンなどを食べ、泳ぎながら餌を取ることもあります。",

  features: "横長の甲羅と、歩脚に密生する非常に長い毛が特徴です。",

  behavior: "海底だけでなく水中を活発に泳ぎ、多数で集団遊泳することもあります。",

  reproduction: "抱卵したメスが確認されていますが、集団遊泳がすべて繁殖目的とは限りません。",

  identification: "小さく横長の甲羅と、歩脚に生える長い毛が特徴です。",

  nameOrigin: "水中を活発に泳ぐことから「オヨギピンノ」と呼ばれます。",

  humanRelation: "一般的な食用種ではなく、カニとしては珍しい遊泳能力の研究対象にもなっています。",

  observationPoint: "水中へ泳ぎ出す瞬間を見て、脚の長い毛で水をかく様子に注目してください。",

  references: [
    "World Register of Marine Species: Tritodynamia horvathi",
    "BiSMAL: Tritodynamia horvathi オヨギピンノ",
    "東京大学総合研究博物館：オヨギピンノ標本",
    "長崎ペンギン水族館：オヨギピンノ",
    "Studies on swimming and feeding behaviour of Tritodynamia horvathi"
  ]
},


// ========================================
// sp0067 オヤビッチャ
// LABO2
// ※LABO6でも確認済み
// ========================================

{
  id: "sp0067",

  areaIds: [
    "labo2",
    "labo6",
    "dolphin-arch"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オヤビッチャ",

  scientificName: "Abudefduf vaigiensis",

  englishName: "Indo-Pacific sergeant",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズメダイ科",
    "オヤビッチャ属"
  ],

  category: "魚類",

  image: "images/sp0067.jpg",

  trivia: [
    {
      title: "体には5本の黒い帯",
      text: "銀白色の体に5本の太い黒帯が入り、背中側は黄色味を帯びることがあります。"
    },
    {
      title: "卵を守るのはオス",
      text: "岩などに産み付けられた卵をオスが守り、ひれで新鮮な水を送ります。"
    }
  ],

  bodyLength: "最大で全長約20cm。",

  distribution: "インド太平洋に広く分布し、南日本からオーストラリアまで見られます。",

  habitat: "浅いサンゴ礁や岩礁に生息し、幼魚は流れ藻につくこともあります。",

  diet: "動物プランクトンや藻類、小型の無脊椎動物などを食べる雑食性です。",

  features: "銀白色の体に5本の黒い縦帯が入り、背中側が黄色くなることがあります。",

  behavior: "群れで泳ぐことが多く、中層でプランクトンを食べたり岩の藻類をついばんだりします。",

  reproduction: "岩などに卵を産み、産卵後はオスが卵を守ります。",

  identification: "銀白色の体に5本の黒帯があり、尾びれには明瞭な黒帯がありません。",

  nameOrigin: "独特な和名ですが、確実な命名由来については今回確認した資料では断定できません。",

  humanRelation: "南日本の磯やサンゴ礁で身近に見られ、観賞魚や地域によっては食用にもなります。",

  observationPoint: "黒い帯を数え、尾びれに黒い帯があるかも確認してみてください。",

  references: [
    "FishBase: Abudefduf vaigiensis",
    "World Register of Marine Species: Abudefduf vaigiensis",
    "BiSMAL: Abudefduf vaigiensis オヤビッチャ",
    "Allen 1991. Damselfishes of the World"
  ]
},


// ========================================
// sp0068 カイカムリ
// LABO2
// ========================================

{
  id: "sp0068",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "カイカムリ",

  scientificName: "Lauridromia dehaani",

  englishName: "Sponge crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "カイカムリ科",
    "Lauridromia属"
  ],

  category: "甲殻類",

  image: "images/sp0068.jpg",

  trivia: [
    {
      title: "カイメンなどを背中にかぶる",
      text: "後ろの脚でカイメンや群体ボヤなどをつかみ、背中に背負って身を隠します。"
    },
    {
      title: "背負う物を自分の体に合わせて加工する",
      text: "大きすぎるカイメンなどは、はさみで切って自分の体に合う大きさへ整えることがあります。"
    }
  ],

  bodyLength: "甲幅は最大約10cm。",

  distribution: "日本を含む西太平洋からインド太平洋の暖かい海に分布します。",

  habitat: "岩や砂、小石などのある海底に生息し、水深100mを超える場所でも記録されています。",

  diet: "雑食性で、海底にいる小型動物などさまざまな餌を利用します。",

  features: "丸みのある毛深い甲羅と、背中方向へ曲がった後ろ2対の脚が特徴です。",

  behavior: "カイメンや貝殻などを背負い、大きすぎる場合は自分に合う大きさへ加工します。",

  reproduction: "メスは腹部に卵を抱えて守りますが、自然界での詳しい繁殖時期は分かっていません。",

  identification: "毛に覆われた丸い甲羅と、背中方向へ向いた後ろ2対の脚が特徴です。",

  nameOrigin: "カイメンなどを背中に「かぶる」ような姿が名前を連想させますが、正式な由来は確認できませんでした。",

  humanRelation: "一般的な食用ガニではなく、物を加工して背負う行動でも注目されています。",

  observationPoint: "背負っている物だけでなく、その下でカイメンなどをつかむ後ろ脚にも注目してください。",

  references: [
    "World Register of Marine Species: Lauridromia dehaani",
    "東京大学総合研究博物館：Lauridromia dehaani",
    "鳥羽水族館：カイカムリ",
    "京都大学瀬戸臨海実験所：カイカムリ",
    "NIFREL：カイカムリ"
  ]
},


// ========================================
// sp0069 カゴカキダイ
// LABO2・LABO6
// ========================================

{
  id: "sp0069",

  areaIds: [
    "labo2",
    "labo6",
    "dolphin-arch"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "カゴカキダイ",

  scientificName: "Microcanthus strigatus",

  englishName: "Stripey",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "カゴカキダイ科",
    "カゴカキダイ属"
  ],

  category: "魚類",

  image: "images/sp0069.jpg",

  trivia: [
    {
      title: "黄色と黒の縞がとても目立つ",
      text: "黄色い体に太い黒い斜めの帯が入り、非常に目立つ模様をしています。"
    },
    {
      title: "大人になると群れで泳ぐことが多い",
      text: "成魚は岩礁域で多数集まり、大きな群れを作ることがあります。"
    }
  ],

  bodyLength: "最大で全長約20cm。",

  distribution: "日本では青森県から九州南岸、琉球列島などで見られます。",

  habitat: "沿岸の岩礁や港湾、礁湖などに生息します。",

  diet: "小型甲殻類や藻類などを利用する雑食性です。",

  features: "黄色から黄白色の体に黒い斜めの帯が入り、体高の高い平たい体をしています。",

  behavior: "成魚は群れで泳ぐことが多く、岩棚や洞窟周辺へ集まることもあります。",

  reproduction: "日本では春を中心に産卵すると考えられますが、詳しい産卵行動は十分に分かっていません。",

  identification: "黄色い体と、複数の太い黒い斜め帯が最大の特徴です。",

  nameOrigin: "和名の確実な由来については複数の説があり、今回確認した資料では断定できません。",

  humanRelation: "釣りや食用、観賞魚として利用されることがあります。",

  observationPoint: "黒い帯の本数や、帯が斜めに走っていること、群れで泳ぐ様子に注目してください。",

  references: [
    "FishBase: Microcanthus strigatus",
    "World Register of Marine Species: Microcanthus strigatus",
    "Honda釣り倶楽部：カゴカキダイ",
    "公益財団法人 黒潮生物研究所：カゴカキダイ",
    "Tea & Gill 2020. Systematic reappraisal of Microcanthus"
  ]
},


// ========================================
// sp0070 カコボラ
// LABO2
// ========================================

{
  id: "sp0070",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "カコボラ",

  scientificName: "Monoplex parthenopeus",

  englishName: "Giant triton",

  classification: [
    "軟体動物門",
    "腹足綱",
    "フジツガイ科",
    "Monoplex属"
  ],

  category: "軟体動物",

  image: "images/sp0070.jpg",

  trivia: [
    {
      title: "かなり大型になる巻貝",
      text: "殻は最大約18cmになり、日本の磯で見られる巻貝の中では大型です。"
    },
    {
      title: "見た目に反して肉食性",
      text: "二枚貝や巻貝、棘皮動物などを捕食します。"
    }
  ],

  bodyLength: "殻長は最大約18cm。",

  distribution: "インド太平洋だけでなく、大西洋や地中海にも広く分布し、日本沿岸でも見られます。",

  habitat: "潮間帯から水深75mほどまでの岩礁や岩の多い海底に生息します。",

  diet: "二枚貝や巻貝、棘皮動物などを捕食する肉食性です。",

  features: "大型で丸みのある殻を持ち、表面には太い筋やこぶがあります。",

  behavior: "海底を這って獲物を探し、夜間に活動する例が多く見られます。",

  reproduction: "本種固有の詳しい繁殖時期や産卵行動については、十分な情報が確認できませんでした。",

  identification: "大型で膨らんだ殻と、太い螺旋状の模様、褐色の殻皮が特徴です。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "一般的な主要食用貝ではありませんが、大型の巻貝として知られています。",

  observationPoint: "殻の大きさだけでなく、表面の太い筋やこぶ、褐色の殻皮にも注目してください。",

  references: [
    "World Register of Marine Species: Monoplex parthenopeus",
    "BiSMAL: Monoplex parthenopeus",
    "SeaLifeBase: Monoplex parthenopeus",
    "水産無脊椎動物研究所：カコボラ",
    "DORIS: Monoplex parthenopeus"
  ]
},

// ========================================
// sp0071 カサゴ
// LABO2・LABO6
// ========================================

{
  id: "sp0071",

  areaIds: [
    "labo2",
    "labo6"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "カサゴ",

  scientificName: "Sebastiscus marmoratus",

  englishName: "Marbled rockfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "メバル科",
    "カサゴ属"
  ],

  category: "魚類",

  image: "images/sp0071.jpg",

  trivia: [
    {
      title: "卵ではなく仔魚を産む",
      text: "体内で受精・発生し、泳げる状態の仔魚を海中へ産みます。"
    },
    {
      title: "大きくなるほど魚を食べる割合が増える",
      text: "若い個体は甲殻類を多く食べますが、成長すると魚を食べる割合が増えます。"
    }
  ],

  bodyLength: "最大で全長約36cmで、20cm前後の個体がよく見られます。",

  distribution: "日本の北海道南部から南日本、朝鮮半島、中国沿岸などに分布します。",

  habitat: "沿岸の岩礁に生息し、岩の隙間や海底付近で暮らします。",

  diet: "エビやカニなどの甲殻類、小魚などを捕食します。",

  features: "大きな頭と、赤褐色や黒色のまだら模様、背びれの鋭い棘が特徴です。",

  behavior: "岩や海底でじっとし、近づいてきた小魚や甲殻類を待ち伏せします。",

  reproduction: "体内受精を行い、メスの体内で発生した仔魚を海中へ産みます。",

  identification: "大きな頭と口、赤褐色のまだら模様が特徴です。",

  nameOrigin: "「カサゴ」の語源には複数の説があり、確実な由来は確認できませんでした。",

  humanRelation: "釣りや漁業の対象となり、刺身や煮付けなどで食用にされます。",

  observationPoint: "岩と体の模様を見比べ、どれほど背景に溶け込んでいるか観察してみてください。",

  references: [
    "FishBase: Sebastiscus marmoratus",
    "World Register of Marine Species: Sebastiscus marmoratus",
    "公益財団法人 黒潮生物研究所：カサゴ",
    "全国海水養魚協会：カサゴ",
    "Hashimoto & Iwamoto 2023. Feeding habits of adult marbled rockfish",
    "Lee et al. 2012. Feeding Habits of Sebastiscus marmoratus"
  ]
},


// ========================================
// sp0072 ガンガゼ
// LABO2
// ========================================

{
  id: "sp0072",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ガンガゼ",

  scientificName: "Diadema setosum",

  englishName: "Long-spined sea urchin",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "ガンガゼ目",
    "ガンガゼ科",
    "ガンガゼ属"
  ],

  category: "棘皮動物",

  image: "images/sp0072.jpg",

  trivia: [
    {
      title: "棘は30cmにもなる",
      text: "非常に細長い棘は、30cmほどまで伸びることがあります。"
    },
    {
      title: "上にある黄色い『目』は目ではない",
      text: "体の上部中央にある黄色や橙色の部分は眼ではなく、肛門のある部分です。"
    }
  ],

  bodyLength: "殻径は約5〜9cmで、棘は30cmほどに達することがあります。",

  distribution: "日本では房総半島・相模湾以南などに見られ、インド太平洋にも広く分布します。",

  habitat: "岩礁やサンゴ礁、砂や小石の混じる浅い海底などに生息します。",

  diet: "主に海藻を食べますが、動物質を利用することもあると考えられています。",

  features: "黒色から暗紫色の体から、非常に長い棘が放射状に伸びています。",

  behavior: "昼は岩陰などに隠れ、暗くなると外へ出て餌を探すことがあります。",

  reproduction: "卵と精子を海中へ放出して体外受精します。",

  identification: "非常に長い黒い棘と、体の上部中央にある黄色から橙色の部分が特徴です。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "棘は折れやすく毒性もあり、刺さると強い痛みを生じるため注意が必要です。",

  observationPoint: "長い棘だけでなく、中心部にある黄色や橙色の部分にも注目してください。",

  references: [
    "BiSMAL: Diadema setosum",
    "鳥羽水族館：ガンガゼ",
    "公益財団法人 黒潮生物研究所：ガンガゼ",
    "八丈ビジターセンター：ガンガゼ",
    "早川・張 2020. ガンガゼの天然餌料の検討"
  ]
},


// ========================================
// sp0073 ガンゼキボラ
// 現地記録：ガンセキボラ
// LABO2
// ========================================

{
  id: "sp0073",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ガンゼキボラ",

  scientificName: "Chicoreus brunneus",

  englishName: "Adusta murex",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足目",
    "アッキガイ科",
    "テングガイ属"
  ],

  category: "軟体動物",

  image: "images/sp0073.jpg",

  trivia: [
    {
      title: "名前の通り岩のような殻",
      text: "厚くごつごつした殻に枝分かれした棘が並び、小さな岩のように見えます。"
    },
    {
      title: "標準和名は『ガンゼキボラ』",
      text: "「ガンセキボラ」と書かれることもありますが、標準和名はガンゼキボラです。"
    }
  ],

  bodyLength: "殻高は通常約7cmで、大型個体では11cmを超えることがあります。",

  distribution: "日本では房総半島以南に分布し、インド・西太平洋にも広く見られます。",

  habitat: "潮間帯から浅い海の岩礁、サンゴ礁、砂底などに生息します。",

  diet: "肉食性で、ほかの巻貝などを捕食します。",

  features: "厚く頑丈な殻に、太いこぶや枝分かれした棘が多数あります。",

  behavior: "海底を這いながら獲物を探します。",

  reproduction: "日本での詳しい産卵時期や繁殖行動については、十分な情報がありません。",

  identification: "ごつごつした厚い殻と、枝分かれした多数の棘が特徴です。",

  nameOrigin: "岩石のようなごつごつした殻から「岩石法螺」と呼ばれたとされています。",

  humanRelation: "地域によって食用や、貝殻の装飾利用が行われることがあります。",

  observationPoint: "殻の棘をよく見て、枝分かれした複雑な形を探してみてください。",

  references: [
    "BiSMAL: Chicoreus brunneus ガンゼキボラ",
    "World Register of Marine Species: Chicoreus brunneus",
    "SeaLifeBase: Chicoreus brunneus",
    "京都大学総合博物館：ガンゼキボラ",
    "FAO Species Identification Guide: Chicoreus brunneus"
  ]
},


// ========================================
// sp0074 ギマ
// LABO2・LABO6
// ========================================

{
  id: "sp0074",

  areaIds: [
    "labo2",
    "labo6"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ギマ",

  scientificName: "Triacanthus biaculeatus",

  englishName: "Short-nosed tripodfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "フグ目",
    "ギマ科",
    "ギマ属"
  ],

  category: "魚類",

  image: "images/sp0074.jpg",

  trivia: [
    {
      title: "3本の長い棘で『三脚』のよう",
      text: "背びれ1本と腹びれ2本の長い棘があり、英名では三脚を意味する Tripodfish と呼ばれます。"
    },
    {
      title: "体から大量の粘液を出す",
      text: "ざらざらした体表から大量の粘液を出すことがあります。"
    }
  ],

  bodyLength: "全長約25〜30cm。",

  distribution: "日本では房総半島以南などで見られ、インド・西太平洋にも広く分布します。",

  habitat: "沿岸や河口付近の浅い砂底・泥底に生息します。",

  diet: "ゴカイや甲殻類など、海底にいる小型の無脊椎動物を食べます。",

  features: "銀白色の平たい体を持ち、背びれと腹びれに非常に長い3本の棘があります。",

  behavior: "浅い砂泥底を群れで泳ぎながら、海底の小動物を探します。",

  reproduction: "本種固有の詳しい産卵時期や繁殖行動については、十分な情報がありません。",

  identification: "細長い顔、銀色の体、背びれと腹びれの長い3本の棘が特徴です。",

  nameOrigin: "和名の由来には複数の説があり、確定していません。",

  humanRelation: "地域によって釣りや食用の対象になりますが、棘と大量の粘液が特徴です。",

  observationPoint: "背中の1本だけでなく、腹側にも2本の長い棘があることを確認してみてください。",

  references: [
    "World Register of Marine Species: Triacanthus biaculeatus",
    "鳥羽水族館：ギマ",
    "新潟市水族館 マリンピア日本海：ギマ",
    "市立しものせき水族館 海響館：ギマ",
    "鴨川シーワールド：ギマ"
  ]
},


// ========================================
// sp0075 キヌハダウミウシ
// LABO2
// ========================================

{
  id: "sp0075",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "キヌハダウミウシ",

  scientificName: "Gymnodoris inornata",

  englishName: "Unadorned gymnodoris",

  classification: [
    "軟体動物門",
    "腹足綱",
    "裸鰓目",
    "フジタウミウシ科",
    "Gymnodoris属"
  ],

  category: "軟体動物",

  image: "images/sp0075.jpg",

  trivia: [
    {
      title: "ほかのウミウシを食べる",
      text: "肉食性で、ほかの種類のウミウシを捕食します。"
    },
    {
      title: "獲物の内臓から食べることもある",
      text: "獲物の体へ口器を差し込み、内臓から食べる行動も確認されています。"
    }
  ],

  bodyLength: "大型個体では体長5cm前後になることがあります。",

  distribution: "日本を含むインド太平洋の広い海域に分布します。",

  habitat: "岩礁やサンゴ礁、砂が混じる浅い海などに生息します。",

  diet: "肉食性で、主にほかのウミウシ類を捕食します。",

  features: "橙色から黄橙色の滑らかな体を持ち、背中の後方には枝分かれした鰓があります。",

  behavior: "海底を這ってほかのウミウシを探し、大きな口器を使って捕食します。",

  reproduction: "雌雄同体ですが、通常は別個体と交尾して受精します。",

  identification: "橙色の滑らかな体が特徴ですが、正確な種同定には専門的な確認が必要な場合があります。",

  nameOrigin: "絹のような滑らかな体表を連想させますが、正式な由来は確認できませんでした。",

  humanRelation: "食用ではなく、ウミウシ同士の捕食を観察できる興味深い生物です。",

  observationPoint: "近くにほかのウミウシがいないか探し、接近する様子にも注目してください。",

  references: [
    "BiSMAL: Gymnodoris inornata キヌハダウミウシ",
    "World Register of Marine Species: Gymnodoris inornata",
    "De Souza-Canal & Valdés 2025. The genus Gymnodoris",
    "Hughes 1985. Feeding in Gymnodoris inornata and Gymnodoris alba",
    "Nakano et al. Field observations on the feeding of Gymnodoris spp. in Japan"
  ]
},


// ========================================
// sp0076 ケアシホンヤドカリ
// LABO2
// ========================================

{
  id: "sp0076",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ケアシホンヤドカリ",

  scientificName: "Pagurus lanuginosus",

  englishName: "Hairy hermit crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ホンヤドカリ科",
    "ホンヤドカリ属"
  ],

  category: "甲殻類",

  image: "images/sp0076.jpg",

  trivia: [
    {
      title: "名前の通り脚が毛だらけ",
      text: "はさみ脚と歩脚には長い毛が密生し、黒い斑点や赤い触角も目立ちます。"
    },
    {
      title: "右のはさみが大きい",
      text: "右側のはさみ脚が、左側より大きく発達します。"
    }
  ],

  bodyLength: "甲長は最大約1cmで、貝殻を含めるとさらに大きく見えます。",

  distribution: "北海道から九州までの日本沿岸や、朝鮮半島などに分布します。",

  habitat: "沿岸の岩礁や潮だまりなどに生息します。",

  diet: "藻類や細かな有機物、動物質などを食べる雑食性です。",

  features: "脚に長い毛が密生し、黒い斑点と赤色から橙色の触角があります。",

  behavior: "巻貝の空殻を利用し、危険を感じると殻の中へ引っ込みます。",

  reproduction: "房総半島では、抱卵したメスが主に12〜5月に確認されています。",

  identification: "毛の多い脚、黒い斑点、赤い触角、右側の大きなはさみが特徴です。",

  nameOrigin: "脚に長い毛が多く生えることから「ケアシホンヤドカリ」と呼ばれます。",

  humanRelation: "一般的な食用生物ではなく、日本の磯で身近に見られるヤドカリです。",

  observationPoint: "貝殻ではなく脚を見て、長い毛や赤い触角、左右のはさみの大きさを比べてください。",

  references: [
    "BiSMAL: Pagurus lanuginosus ケアシホンヤドカリ",
    "三重県総合博物館：ケアシホンヤドカリ",
    "鶴岡市立加茂水族館：ケアシホンヤドカリ",
    "Wada et al. 1994. Distribution, reproduction and shell utilization patterns in intertidal hermit crabs"
  ]
},


// ========================================
// sp0077 ケブカヒメヨコバサミ
// LABO2
// ========================================

{
  id: "sp0077",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ケブカヒメヨコバサミ",

  scientificName: "Paguristes ortmanni",

  englishName: "Ortmann's hermit crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ヤドカリ科",
    "ヒメヨコバサミ属"
  ],

  category: "甲殻類",

  image: "images/sp0077.jpg",

  trivia: [
    {
      title: "左右のはさみがほぼ同じ大きさ",
      text: "左右のはさみ脚が、ほぼ同じ大きさなのが特徴です。"
    },
    {
      title: "脚が名前通り『毛深い』",
      text: "はさみ脚と歩脚には長い毛が密生しています。"
    }
  ],

  bodyLength: "体長は約3〜4cm程度です。",

  distribution: "日本では北海道南部から九州まで見られ、朝鮮半島やロシア沿海州周辺にも分布します。",

  habitat: "浅い岩礁や石、小石の多い海底などに生息します。",

  diet: "詳しい食性は不明な点が多く、さまざまな有機物を利用すると考えられています。",

  features: "脚には長い毛が密生し、左右のはさみがほぼ同じ大きさです。",

  behavior: "巻貝の空殻を背負って歩き、危険を感じると殻の中へ引っ込みます。",

  reproduction: "日本沿岸では7月や9月に抱卵したメスが記録されています。",

  identification: "毛の多い脚と、左右ほぼ同じ大きさのはさみが特徴です。",

  nameOrigin: "毛深い小型のヒメヨコバサミ類であることが和名に表れています。",

  humanRelation: "一般的な食用生物ではなく、磯のヤドカリ類の多様性を観察できる種類です。",

  observationPoint: "左右のはさみを見比べ、ほぼ同じ大きさになっているか確認してみてください。",

  references: [
    "新潟大学佐渡自然共生科学センター：ケブカヒメヨコバサミ",
    "水産無脊椎動物研究所：ケブカヒメヨコバサミ",
    "SeaLifeBase: Paguristes ortmanni",
    "Petryashov & Kornienko 2006. Paguristes ortmanni in the Russian region"
  ]
},


// ========================================
// sp0078 コケギンポ
// LABO2
// ========================================

{
  id: "sp0078",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "コケギンポ",

  scientificName: "Neoclinus bryope",

  englishName: "Moss fringed blenny",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "コケギンポ科",
    "コケギンポ属"
  ],

  category: "魚類",

  image: "images/sp0078.jpg",

  trivia: [
    {
      title: "穴から顔だけ出して暮らす",
      text: "岩穴や管などへ体を入れ、頭だけを外へ出していることがあります。"
    },
    {
      title: "オスが巣と卵を守る",
      text: "繁殖期のオスは巣穴を縄張りにし、メスが産んだ卵を孵化まで守ります。"
    }
  ],

  bodyLength: "最大で全長約8cm。",

  distribution: "日本や朝鮮半島などの北西太平洋で知られています。",

  habitat: "潮だまりから浅い岩礁に生息し、岩穴や管状の空間を利用します。",

  diet: "小型甲殻類などの小さな底生動物を捕食します。",

  features: "大きめの頭と、眼の上や吻周辺にある枝分かれした皮膚の突起が特徴です。",

  behavior: "穴から頭を出して待ち、餌が近づくと飛び出して捕食します。",

  reproduction: "メスが巣穴に卵を産み、オスが孵化するまで守ります。",

  identification: "眼の上の枝分かれした突起と、穴から頭だけを出す姿が特徴です。",

  nameOrigin: "苔のように見える頭部の突起が名前に関係すると考えられますが、正式な由来は確認できませんでした。",

  humanRelation: "食用にはほとんど利用されませんが、穴から顔を出す姿からダイバーにも人気があります。",

  observationPoint: "水槽の小さな穴を探し、顔だけを出した個体と眼の上の『ふさふさ』に注目してください。",

  references: [
    "FishBase: Neoclinus bryope",
    "World Register of Marine Species: Neoclinus bryope",
    "BiSMAL: Neoclinus bryope コケギンポ",
    "神奈川県立生命の星・地球博物館：Neoclinus bryope",
    "塩垣・道津 1972. コケギンポの生活史",
    "Murase et al. Interspecific territoriality in males of Neoclinus bryope"
  ]
},


// ========================================
// sp0079 コショウダイ
// LABO2
// ========================================

{
  id: "sp0079",

  areaIds: [
    "labo2",
    "ocean-labo-a",
    "ocean-labo-b",
    "ocean-labo-c",
    "ocean-labo-d",
    "ocean-labo-e",
    "fishermans-oasis",
    "marine-biotop"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "コショウダイ",

  scientificName: "Plectorhinchus cinctus",

  englishName: "Crescent sweetlips",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "イサキ科",
    "コショウダイ属"
  ],

  category: "魚類",

  image: "images/sp0079.jpg",

  trivia: [
    {
      title: "名前の由来は「胡椒」のような黒い点",
      text: "成魚の体後半には黒い点が散らばり、胡椒の粒に見立てたという説があります。"
    },
    {
      title: "子どもと大人で見た目がかなり変わる",
      text: "幼魚は黒っぽい姿ですが、成長すると銀灰色の体に太い帯と細かな黒斑が現れます。"
    }
  ],

  bodyLength: "最大で全長約60cm。",

  distribution: "日本では相模湾から九州南岸などで見られ、東アジアからアラビア海方面まで分布します。",

  habitat: "沿岸の岩礁やその周辺の砂底などに生息します。",

  diet: "甲殻類やゴカイなどを食べ、大型個体では小魚を捕食することもあります。",

  features: "銀灰色の体に太い斜めの暗色帯が入り、後半には細かな黒斑があります。",

  behavior: "岩礁と砂地の境目などを泳ぎながら、海底の餌を探します。",

  reproduction: "卵生で、日本では5〜6月ごろに産卵するとされています。",

  identification: "体側の太い斜めの黒帯と、体後半に散らばる細かな黒斑が特徴です。",

  nameOrigin: "黒斑を胡椒の粒に見立てた説など、複数の由来があります。",

  humanRelation: "釣りや漁業の対象となり、刺身や塩焼きなどで食用になります。",

  observationPoint: "太い黒帯だけでなく、背中から尾にかけて散らばる小さな黒点も探してみてください。",

  references: [
    "FishBase: Plectorhinchus cinctus",
    "World Register of Marine Species: Plectorhinchus cinctus",
    "神奈川県水産技術センター：コショウダイ",
    "鳥羽水族館：コショウダイ",
    "桂浜水族館：コショウダイ"
  ]
},


// ========================================
// sp0080 コブカラッパ
// LABO2
// ========================================

{
  id: "sp0080",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "コブカラッパ",

  scientificName: "Calappa gallus",

  englishName: "Rough box crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "カラッパ科",
    "カラッパ属"
  ],

  category: "甲殻類",

  image: "images/sp0080.jpg",

  trivia: [
    {
      title: "大きなはさみで顔を隠す",
      text: "大きなはさみを体の前で合わせると、顔を隠すような姿になります。"
    },
    {
      title: "砂の中へ潜る",
      text: "砂底では体を砂の中へ埋めて、外敵から身を隠します。"
    }
  ],

  bodyLength: "甲幅は約8cm、甲長は最大約6cmほどになります。",

  distribution: "インド太平洋から大西洋の熱帯域まで広く分布します。",

  habitat: "砂底や砂泥底、サンゴ礁などに生息し、砂へ潜ることがあります。",

  diet: "肉食性で、巻貝など硬い殻を持つ動物を捕食します。",

  features: "横に広い甲羅に大きなこぶがあり、非常に大きなはさみ脚を持ちます。",

  behavior: "砂へ体を潜らせて隠れ、獲物を捕らえるときには強力なはさみを使います。",

  reproduction: "本種固有の詳しい産卵時期や求愛行動については、十分な情報がありません。",

  identification: "甲羅表面の大きなこぶと、体の前を覆うほど大きなはさみが特徴です。",

  nameOrigin: "甲羅に大きなこぶがあることから「コブカラッパ」と呼ばれます。",

  humanRelation: "日本で一般的な食用ガニではなく、大きなはさみや砂へ潜る行動が特徴的です。",

  observationPoint: "はさみで体の前を隠す姿や、砂へ少しずつ潜る様子に注目してください。",

  references: [
    "World Register of Marine Species: Calappa gallus",
    "SeaLifeBase: Calappa gallus",
    "東京大学総合研究博物館：Calappa gallus コブカラッパ",
    "神奈川県立生命の星・地球博物館：相模湾産カニ類"
  ]
},


// ========================================
// sp0081 コブヨコバサミ
// LABO2
// ========================================

{
  id: "sp0081",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "コブヨコバサミ",

  scientificName: "Clibanarius infraspinatus",

  englishName: "Orange-striped hermit crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ヤドカリ科",
    "ヨコバサミ属"
  ],

  category: "甲殻類",

  image: "images/sp0081.jpg",

  trivia: [
    {
      title: "左右のはさみがほぼ同じ大きさ",
      text: "左右のはさみ脚の大きさが、比較的よく似ています。"
    },
    {
      title: "河口近くでも暮らせる",
      text: "河口の砂泥底やマングローブなど、塩分が変化しやすい場所にも生息します。"
    }
  ],

  bodyLength: "体は数cmほどで、背負う貝殻によって見た目の大きさが変わります。",

  distribution: "日本を含むインド・西太平洋に広く分布します。",

  habitat: "浅い海や河口付近の砂泥底、マングローブ周辺などに生息します。",

  diet: "藻類や細かな有機物、動物質などを食べる雑食性です。",

  features: "比較的長い歩脚に黄橙色などの縞模様があり、左右のはさみは近い大きさです。",

  behavior: "巻貝の空殻を利用し、成長するとより大きな殻へ引っ越します。",

  reproduction: "メスは腹部に卵を抱えて守りますが、日本での詳しい繁殖時期は分かっていません。",

  identification: "脚の縞模様や左右のはさみの大きさが見分けるポイントです。",

  nameOrigin: "「コブ」の詳しい命名理由については、今回確認した資料では分かっていません。",

  humanRelation: "一般的な食用種ではなく、河口や砂泥底で見られるヤドカリです。",

  observationPoint: "貝殻ではなく外へ出ている脚を見て、縞模様や左右のはさみを比べてください。",

  references: [
    "BiSMAL: Clibanarius infraspinatus コブヨコバサミ",
    "SeaLifeBase: Clibanarius infraspinatus",
    "日本動物園水族館協会：コブヨコバサミ",
    "NPO法人OWS 江奈湾干潟生きもの図鑑：コブヨコバサミ"
  ]
},


// ========================================
// sp0082 コマチガニ
// LABO2
// ========================================

{
  id: "sp0082",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "コマチガニ",

  scientificName: "Harrovia elegans",

  englishName: "Crinoid crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ケブカガニ科",
    "コマチガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0082.jpg",

  trivia: [
    {
      title: "ウミシダの上で暮らす小さなカニ",
      text: "ウミシダの腕や根元付近で暮らし、体色も宿主に似て見えることがあります。"
    },
    {
      title: "甲幅はわずか1〜2cmほど",
      text: "非常に小さいため、ウミシダの腕の間をよく見ないと見逃してしまいます。"
    }
  ],

  bodyLength: "甲幅約1.5〜2cmの小型のカニです。",

  distribution: "日本では東京湾・相模湾から九州などで見られ、インド洋から東南アジアにも分布します。",

  habitat: "主にウミシダの体や腕の付け根などで生活します。",

  diet: "本種固有の詳しい食性については、今回確認した資料では十分な情報がありません。",

  features: "横にやや広い小さな甲羅を持ち、体色や模様には個体差があります。",

  behavior: "ウミシダから大きく離れず、その腕や根元を隠れ場所として利用します。",

  reproduction: "抱卵したメスが知られていますが、詳しい繁殖時期は分かっていません。",

  identification: "似た種類が多いため、正確な種同定には甲羅などの細かな形態確認が必要です。",

  nameOrigin: "ウミシダ類の「コマチ」に共生することが和名に関係しています。",

  humanRelation: "食用ではなく、ウミシダと甲殻類の共生を観察できる生物です。",

  observationPoint: "まずウミシダを探し、その腕の間や中心部に小さなカニがいないか見てください。",

  references: [
    "World Register of Marine Species: Harrovia elegans",
    "神奈川県立生命の星・地球博物館：相模湾産カニ類",
    "新潟大学佐渡自然共生科学センター：Harrovia elegans",
    "Journal of Fisheries: Crinoid-associated Harrovia elegans"
  ]
},


// ========================================
// sp0083 クサフグ
// LABO2
// ========================================

{
  id: "sp0083",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "クサフグ",

  scientificName: "Takifugu alboplumbeus",

  englishName: "Grass puffer",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "フグ目",
    "フグ科",
    "トラフグ属"
  ],

  category: "魚類",

  image: "images/sp0083.jpg",

  trivia: [
    {
      title: "波打ち際へ大群で押し寄せて産卵する",
      text: "初夏の大潮前後には、大群で波打ち際へ集まり一斉に産卵することがあります。"
    },
    {
      title: "危険を感じると体を膨らませる",
      text: "水や空気を胃へ取り込み、体を大きく膨らませて外敵から身を守ります。"
    }
  ],

  bodyLength: "一般には全長15cm前後の小型のフグです。",

  distribution: "日本各地を含む東アジアからインド・西太平洋に分布します。",

  habitat: "浅い海や砂底、岩礁、河口付近などに生息し、砂へ潜ることもあります。",

  diet: "甲殻類や貝類、ゴカイ類などの小型動物を食べます。",

  features: "暗緑色の背中に白い小斑点があり、胸びれの後ろには大きな黒斑があります。",

  behavior: "浅い海底で餌を探し、危険を感じると体を大きく膨らませます。",

  reproduction: "神奈川県では5〜7月ごろ、大群で波打ち際へ集まり一斉に産卵します。",

  identification: "背中の白い小斑点と、胸びれ後方の大きな黒斑が特徴です。",

  nameOrigin: "和名の詳しい由来には複数の説があり、確実な由来は確認できませんでした。",

  humanRelation: "テトロドトキシンを持つ有毒魚で、一般の人が自己判断で食用にしてはいけません。",

  observationPoint: "背中の白い斑点と胸びれ後ろの黒斑を探し、砂へ潜っている個体にも注目してください。",

  references: [
    "FishBase: Takifugu alboplumbeus",
    "World Register of Marine Species: Takifugu alboplumbeus",
    "神奈川県水産技術センター：クサフグ",
    "厚生労働省：自然毒のリスクプロファイル フグ毒"
  ]
},

// ========================================
// sp0084 クロシタナシウミウシ
// LABO2
// ========================================

{
  id: "sp0084",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "クロシタナシウミウシ",

  scientificName: "Dendrodoris arborescens",

  englishName: "Dendrodoris sea slug",

  classification: [
    "軟体動物門",
    "腹足綱",
    "裸鰓目",
    "クロシタナシウミウシ科",
    "Dendrodoris属"
  ],

  category: "軟体動物",

  image: "images/sp0084.jpg",

  trivia: [
    {
      title: "ウミウシなのに『歯』を持たない",
      text: "多くのウミウシが持つ歯舌がなく、この特徴が「シタナシ」という名前につながっています。"
    },
    {
      title: "カイメンを吸い込むように食べる",
      text: "特殊な口を使い、カイメンの組織を吸い込むように食べます。"
    }
  ],

  bodyLength: "体長約5cmほどになる個体が見られます。",

  distribution: "日本を含む西太平洋・インド太平洋域に分布します。",

  habitat: "浅い岩礁や潮だまり、岩の表面などで見られます。",

  diet: "カイメン類を、特殊な口で吸い込むようにして食べます。",

  features: "黒色から暗褐色の体を持ち、背中の後方には枝のように広がる二次鰓があります。",

  behavior: "岩の上などをゆっくり這い、餌となるカイメンの近くで見られることがあります。",

  reproduction: "雌雄同体で、通常は別個体と交尾した後に卵塊を産みます。",

  identification: "黒っぽい体だけでなく、体の縁の色や触角、二次鰓も見分けるポイントです。",

  nameOrigin: "歯舌を持たないことから「シタナシ」という名前が付けられています。",

  humanRelation: "一般的な食用生物ではなく、特殊な食べ方をするウミウシとして知られています。",

  observationPoint: "背中後方の枝状の二次鰓と、頭側にある2本の触角に注目してください。",

  references: [
    "新潟大学佐渡自然共生科学センター：クロシタナシウミウシ",
    "水産無脊椎動物研究所：Dendrodoris arborescens",
    "日本動物園水族館協会：クロシタナシウミウシ",
    "Dendrodoris arborescens larval and feeding studies"
  ]
},


// ========================================
// sp0085 クロダイ
// LABO2
// ========================================

{
  id: "sp0085",

  areaIds: [
    "labo2",
    "ocean-labo-a",
    "ocean-labo-b",
    "ocean-labo-c",
    "ocean-labo-d",
    "ocean-labo-e",
    "fishermans-oasis",
    "marine-biotop"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "クロダイ",

  scientificName: "Acanthopagrus schlegelii",

  englishName: "Black porgy",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "タイ科",
    "クロダイ属"
  ],

  category: "魚類",

  image: "images/sp0085.jpg",

  trivia: [
    {
      title: "若い個体ではオスが多く、成長するとメスが増える",
      text: "若い時期はオスが多く、成長すると一部の個体がメスへ性転換します。"
    },
    {
      title: "海だけでなく川にも入る",
      text: "塩分の変化に強く、河口や塩分の低い場所まで入り込むことがあります。"
    }
  ],

  bodyLength: "最大で標準体長約50cmで、全長60cm前後になる個体もいます。",

  distribution: "日本では北海道南部から九州まで広く見られ、中国や朝鮮半島などにも分布します。",

  habitat: "内湾や岩礁、砂泥底、河口の汽水域など幅広い環境に生息します。",

  diet: "貝類やゴカイ、甲殻類などを食べる雑食性です。",

  features: "銀灰色から黒っぽい体を持ち、体高が高く左右に平たい魚です。",

  behavior: "沿岸の浅い場所を泳ぎながら海底の餌を探し、港や河口でも見られます。",

  reproduction: "春から初夏に産卵し、成長すると一部の個体がオスからメスへ性転換します。",

  identification: "銀灰色から黒色の体と、体高の高いタイらしい体形が特徴です。",

  nameOrigin: "黒みを帯びた体色から「クロダイ」と呼ばれ、関西では「チヌ」とも呼ばれます。",

  humanRelation: "釣りや食用、養殖に利用される一方、養殖カキなどを食べることもあります。",

  observationPoint: "丈夫な口元や、個体によって異なる体色の濃さを見比べてみてください。",

  references: [
    "FishBase: Acanthopagrus schlegelii",
    "World Register of Marine Species: Acanthopagrus schlegelii",
    "新潟市水族館 マリンピア日本海：クロダイ",
    "日本産魚類図鑑関連資料：Acanthopagrus schlegelii"
  ]
},


// ========================================
// sp0086 サザエ
// LABO2
// ========================================

{
  id: "sp0086",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "サザエ",

  scientificName: "Turbo sazae",

  englishName: "Japanese horned turban",

  classification: [
    "軟体動物門",
    "腹足綱",
    "古腹足類",
    "Trochida",
    "リュウテンサザエ科",
    "リュウテンサザエ属"
  ],

  category: "軟体動物",

  image: "images/sp0086.jpg",

  trivia: [
    {
      title: "日本のサザエに正式な学名が付いたのは2017年",
      text: "分類の再検討によって日本のサザエは別種と分かり、2017年に Turbo sazae と命名されました。"
    },
    {
      title: "棘がある個体とない個体がいる",
      text: "殻の棘には大きな個体差があり、長い棘を持つものからほとんどないものまでいます。"
    }
  ],

  bodyLength: "殻高は7〜10cmほどになります。",

  distribution: "日本と朝鮮半島周辺に分布し、日本各地の暖流の影響を受ける沿岸で見られます。",

  habitat: "潮間帯から水深20〜30mほどの、海藻が豊富な岩礁に生息します。",

  diet: "カジメやアラメなどの海藻を、歯舌で削り取るように食べます。",

  features: "厚く頑丈な殻と石灰質のふたを持ち、個体によっては長い棘が発達します。",

  behavior: "岩の上を這って海藻を食べ、危険を感じると殻に入り硬いふたを閉じます。",

  reproduction: "雌雄は別で、神奈川県では6〜8月ごろに卵と精子を海中へ放出します。",

  identification: "厚い大型の殻と硬いふたが特徴で、棘がほとんどない個体もいます。",

  nameOrigin: "和名の語源には諸説がありますが、学名 sazae は日本語の「サザエ」に由来します。",

  humanRelation: "日本を代表する食用巻貝で、漁獲だけでなく種苗放流も行われています。",

  observationPoint: "複数の個体を見比べ、殻の棘の長さや数の違いに注目してください。",

  references: [
    "World Register of Marine Species: Turbo sazae",
    "新潟大学佐渡自然共生科学センター：サザエ",
    "神奈川県：おさかな図鑑 サザエ",
    "東京都栽培漁業センター：サザエ",
    "Fukuda 2017. Nomenclature of the horned turbans"
  ]
},


// ========================================
// sp0087 サラサウミウシ
// LABO2
// ========================================

{
  id: "sp0087",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "サラサウミウシ",

  scientificName: "Goniobranchus tinctorius",

  englishName: "Red-netted nudibranch",

  classification: [
    "軟体動物門",
    "腹足綱",
    "裸鰓目",
    "イロウミウシ科",
    "Goniobranchus属"
  ],

  category: "軟体動物",

  image: "images/sp0087.jpg",

  trivia: [
    {
      title: "赤い模様は個体ごとにかなり違う",
      text: "白い体の赤い網目や斑点は、個体によって模様や面積が大きく異なります。"
    },
    {
      title: "カイメンを食べる",
      text: "美しい姿ですが肉食性で、海底に付着するカイメン類を食べます。"
    }
  ],

  bodyLength: "通常4cm前後で、約7cmになる個体も知られています。",

  distribution: "日本を含むインド太平洋などの暖かい海に広く分布します。",

  habitat: "岩礁やサンゴ礁など、餌となるカイメンがある場所で見られます。",

  diet: "主にカイメン類を食べます。",

  features: "白い体に赤い網目模様があり、体の縁には黄色い線が入ります。",

  behavior: "岩の上をゆっくり這い、歯舌でカイメンを削り取って食べます。",

  reproduction: "雌雄同体で、別個体と交尾した後にリボン状の卵塊を産みます。",

  identification: "白地の赤い網目模様と、体の縁を走る黄色い線が特徴です。",

  nameOrigin: "赤い模様が染め物の「更紗模様」を思わせることから名付けられました。",

  humanRelation: "食用ではありませんが、美しい模様からダイバーや水族館で人気があります。",

  observationPoint: "赤い模様だけでなく、体の縁の黄色い線や花のような二次鰓にも注目してください。",

  references: [
    "World Register of Marine Species: Goniobranchus tinctorius",
    "新潟大学佐渡自然共生科学センター：サラサウミウシ",
    "DORIS: Goniobranchus tinctorius",
    "Solitary Islands Underwater Research Group: Goniobranchus tinctorius"
  ]
},


// ========================================
// sp0088 サンゴタツ
// LABO2
// ========================================

{
  id: "sp0088",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "サンゴタツ",

  scientificName: "Hippocampus mohnikei",

  englishName: "Japanese seahorse",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ヨウジウオ目",
    "ヨウジウオ科",
    "タツノオトシゴ属"
  ],

  category: "魚類",

  image: "images/sp0088.jpg",

  trivia: [
    {
      title: "子どもを産むのはオス",
      text: "メスがオスの育児嚢へ卵を渡し、オスが育てた稚魚を外へ送り出します。"
    },
    {
      title: "尾を海草に巻き付ける",
      text: "細長い尾を海草などへ巻き付け、流されないよう体を固定します。"
    }
  ],

  bodyLength: "最大約9cmで、成魚では5〜8cmほどの個体が多く見られます。",

  distribution: "日本、中国、朝鮮半島から東南アジア、インド方面まで分布します。",

  habitat: "浅い海のアマモ場や河口、砂泥底などに生息します。",

  diet: "ヨコエビやワレカラ、カイアシ類などの小さな甲殻類を吸い込んで食べます。",

  features: "馬のような頭と細長い口を持ち、尾を物へ巻き付けることができます。",

  behavior: "尾を海草などへ巻き付け、近づいた獲物を細長い口で吸い込みます。",

  reproduction: "メスがオスの育児嚢へ卵を渡し、オスが卵を保護して稚魚を産みます。",

  identification: "小型で棘や頭頂部の突起が低く、細長い尾を持つタツノオトシゴ類です。",

  nameOrigin: "和名の詳しい由来は確認できませんでした。種小名 mohnikei は人名に由来します。",

  humanRelation: "国際取引が管理されているタツノオトシゴ属の一種です。",

  observationPoint: "尾を海草などへ巻き付ける姿と、細長い口で餌を吸い込む様子に注目してください。",

  references: [
    "FishBase: Hippocampus mohnikei",
    "BiSMAL: Hippocampus mohnikei サンゴタツ",
    "Lourie, Pollom & Foster 2016. Global revision of seahorses",
    "Kwak et al. 2008. Feeding Habits of Hippocampus mohnikei",
    "東海大学海洋科学博物館：サンゴタツの繁殖習性と稚魚の形態変化"
  ]
},


// ========================================
// sp0089 サンショウウニ
// LABO2
// ========================================

{
  id: "sp0089",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "サンショウウニ",

  scientificName: "Temnopleurus toreumaticus",

  englishName: "Temnopleurus sea urchin",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "Camarodonta",
    "サンショウウニ科",
    "サンショウウニ属"
  ],

  category: "棘皮動物",

  image: "images/sp0089.jpg",

  trivia: [
    {
      title: "名前の由来はトゲではなく殻",
      text: "棘を外した殻の凹凸が、サンショウの木の表面に似ることが名前の由来です。"
    },
    {
      title: "体の上に物を乗せる",
      text: "海藻や小石などを管足と棘で体の上に乗せ、身を隠すことがあります。"
    }
  ],

  bodyLength: "殻の直径は数cmほどになる中型のウニです。",

  distribution: "日本では相模湾から九州などで見られ、インド・西太平洋にも広く分布します。",

  habitat: "潮間帯から浅い海の岩礁、砂地、小石の多い場所などに生息します。",

  diet: "主に海藻や海草などを食べます。",

  features: "丸い殻を短い棘が覆い、棘を外した殻には深い溝や細かな模様があります。",

  behavior: "管足と棘で移動し、海藻や石などを体の上へ乗せることがあります。",

  reproduction: "卵と精子を海中へ放出して体外受精します。",

  identification: "棘だけでなく、殻表面の深い溝や細かな模様が特徴です。",

  nameOrigin: "殻の表面がサンショウの木肌に似ることから名付けられたとされています。",

  humanRelation: "一般的な食用ウニではなく、発生や生殖などの研究に利用されることがあります。",

  observationPoint: "体の上に海藻や小石を乗せていないか探してみてください。",

  references: [
    "BiSMAL: Temnopleurus toreumaticus サンショウウニ",
    "鳥羽水族館：サンショウウニ",
    "SeaLifeBase: Temnopleurus toreumaticus",
    "CMFRI 2022: Feeding preference of Temnopleurus toreumaticus"
  ]
},


// ========================================
// sp0090 シノマキガイ
// LABO2
// ========================================

{
  id: "sp0090",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "シノマキガイ",

  scientificName: "Monoplex pilearis",

  englishName: "Common hairy triton",

  classification: [
    "軟体動物門",
    "腹足綱",
    "タマキビ形類",
    "フジツガイ類",
    "Monoplex属"
  ],

  category: "軟体動物",

  image: "images/sp0090.jpg",

  trivia: [
    {
      title: "生きていると殻が『毛むくじゃら』",
      text: "生きた個体では殻が褐色の毛のような殻皮で覆われています。"
    },
    {
      title: "見た目に反して肉食性",
      text: "ほかの貝や棘皮動物などを捕食する肉食性の巻貝です。"
    }
  ],

  bodyLength: "殻高は約10cmほどまで成長します。",

  distribution: "インド洋から西太平洋の暖かい海に広く分布し、日本でも見られます。",

  habitat: "浅い岩礁やサンゴ礁、その周辺の海底などに生息します。",

  diet: "巻貝や二枚貝、ウニ、ヒトデなどの小動物を捕食します。",

  features: "殻には大きな隆起と細かな筋があり、生きた個体では毛状の殻皮に覆われます。",

  behavior: "海底を這いながら獲物を探し、長い吻を伸ばして捕食します。",

  reproduction: "本種固有の詳しい産卵時期や繁殖行動については、十分な情報がありません。",

  identification: "殻の大きな隆起と、生きた個体を覆う毛状の殻皮が特徴です。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "重要な水産物ではありませんが、特徴的な殻を持つ巻貝として観察されます。",

  observationPoint: "殻の表面を覆う毛のような殻皮に注目してください。",

  references: [
    "BiSMAL: Monoplex pilearis シノマキガイ",
    "World Register of Marine Species: Monoplex pilearis",
    "MolluscaBase: Monoplex pilearis",
    "Beu 1998. Indo-West Pacific Ranellidae, Bursidae and Personidae"
  ]
},


// ========================================
// sp0091 シラヒゲウニ
// LABO2
// ========================================

{
  id: "sp0091",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "シラヒゲウニ",

  scientificName: "Tripneustes gratilla",

  englishName: "Collector urchin",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "Camarodonta",
    "ラッパウニ科",
    "シラヒゲウニ属"
  ],

  category: "棘皮動物",

  image: "images/sp0091.jpg",

  trivia: [
    {
      title: "海藻や貝殻を自分の上へ乗せる",
      text: "海藻や貝殻などを体の上へ乗せ、強い光から体を守ることがあります。"
    },
    {
      title: "沖縄では重要な食用ウニ",
      text: "生殖腺が食用になり、沖縄では種苗生産や放流も行われています。"
    }
  ],

  bodyLength: "殻径10cm前後になる比較的大型のウニです。",

  distribution: "日本では相模湾以南に見られ、インド・西太平洋にも広く分布します。",

  habitat: "浅いサンゴ礁や海草藻場、砂地などに生息します。",

  diet: "主に海藻や海草を食べます。",

  features: "丸い殻を持ち、白色や橙色などの比較的短い棘が生えています。",

  behavior: "管足と棘で移動し、海藻や貝殻、石などを体の上へ運びます。",

  reproduction: "卵と精子を海中へ放出して体外受精します。",

  identification: "比較的大型で、白色や橙色の棘を持ち、体に物を乗せていることがあります。",

  nameOrigin: "白っぽい棘が名前を連想させますが、正式な命名由来は確認できませんでした。",

  humanRelation: "食用ウニとして利用されますが、叉棘には毒があり注意が必要です。",

  observationPoint: "棘の色だけでなく、海藻や貝殻など何を体の上に乗せているか見てください。",

  references: [
    "BiSMAL: Tripneustes gratilla シラヒゲウニ",
    "沖縄県栽培漁業センター：シラヒゲウニ",
    "NCBI Taxonomy: Tripneustes gratilla",
    "Ziegenhorn 2016. Best Dressed Test: covering behavior of Tripneustes gratilla"
  ]
},


// ========================================
// sp0092 シラライロウミウシ
// LABO2
// ========================================

{
  id: "sp0092",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "シラライロウミウシ",

  scientificName: "Goniobranchus tumuliferus",

  englishName: "Freckled rainbow dorid",

  classification: [
    "軟体動物門",
    "腹足綱",
    "裸鰓目",
    "イロウミウシ科",
    "Goniobranchus属"
  ],

  category: "軟体動物",

  image: "images/sp0092.jpg",

  trivia: [
    {
      title: "シロウミウシとそっくり",
      text: "シロウミウシに似ていますが、本種の斑点は黒ではなく赤紫色から紫色です。"
    },
    {
      title: "触角と鰓も見分けるポイント",
      text: "2本の触角と花のような二次鰓があり、本種では白っぽく見えます。"
    }
  ],

  bodyLength: "体長約1〜4cm。",

  distribution: "日本、香港、タイ、フィリピン、オーストラリアなどに分布します。",

  habitat: "浅い岩礁や、砂・小石が混じる海底などで見られます。",

  diet: "カイメン類を利用しますが、詳しい餌の種類については十分に分かっていません。",

  features: "白い体に紫色の小斑点が多数あり、体の縁近くには黄色い帯があります。",

  behavior: "岩の上などをゆっくり這い、触角で周囲を探ります。",

  reproduction: "雌雄同体で、別個体と交尾した後にリボン状の卵塊を産みます。",

  identification: "白い体の斑点が黒ではなく、赤紫色から紫色であることが特徴です。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では明確に分かっていません。",

  humanRelation: "食用ではありませんが、美しい色彩からダイバーや水族館で人気があります。",

  observationPoint: "斑点の色に注目し、よく似たシロウミウシとの違いを比べてみてください。",

  references: [
    "World Register of Marine Species: Goniobranchus tumuliferus",
    "BiSMAL: Goniobranchus tumuliferus",
    "新潟大学佐渡自然共生科学センター：シラライロウミウシ",
    "SEASLUG.WORLD：シラライロウミウシ"
  ]
},


// ========================================
// sp0093 シロボヤ
// LABO2
// ========================================

{
  id: "sp0093",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "シロボヤ",

  scientificName: "Styela plicata",

  englishName: "Pleated sea squirt",

  classification: [
    "脊索動物門",
    "尾索動物亜門",
    "ホヤ綱",
    "マボヤ目",
    "シロボヤ科",
    "シロボヤ属"
  ],

  category: "尾索動物",

  image: "images/sp0093.jpg",

  trivia: [
    {
      title: "実は魚と同じ『脊索動物』",
      text: "袋のような姿ですが脊索動物で、幼生はオタマジャクシのような姿をしています。"
    },
    {
      title: "体の中へ海水を通して餌を取る",
      text: "海水を体内へ取り込み、プランクトンなどをこし取って食べます。"
    }
  ],

  bodyLength: "体長約5〜7cm。",

  distribution: "日本の本州・四国・九州などで見られ、世界各地の港湾にも広がっています。",

  habitat: "岩や護岸、桟橋、船底、養殖いかだなどの硬い場所に付着します。",

  diet: "海水中のプランクトンや細かな有機物をこし取って食べます。",

  features: "白から灰白色の卵形の体を持ち、表面には深いしわがあります。",

  behavior: "成体は移動せず、海水を体内へ通して餌をこし取ります。",

  reproduction: "雌雄同体で、受精した卵から泳ぐ幼生が生まれ、やがて基質へ付着します。",

  identification: "白っぽい体と深いしわ、上部にある2つの水の出入口が特徴です。",

  nameOrigin: "白色から黄白色の体をしていることからシロボヤと呼ばれます。",

  humanRelation: "養殖施設などへ大量に付着し、作業の邪魔になることがあります。",

  observationPoint: "体の上にある2つの穴を探し、海水を出し入れする様子に注目してください。",

  references: [
    "BiSMAL: Styela plicata シロボヤ",
    "水産無脊椎動物研究所：シロボヤ",
    "環境省：沿岸生物調査 Styela plicata",
    "Crean et al. 2011. Reproductive biology of Styela plicata"
  ]
},


// ========================================
// sp0094 ジャノメガザミ
// LABO2
// ========================================

{
  id: "sp0094",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ジャノメガザミ",

  scientificName: "Portunus sanguinolentus",

  englishName: "Three-spot swimming crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ガザミ科",
    "ガザミ属"
  ],

  category: "甲殻類",

  image: "images/sp0094.jpg",

  trivia: [
    {
      title: "甲羅に3つの『目玉模様』",
      text: "甲羅の後ろに白く縁取られた赤紫色の丸い模様が3個並びます。"
    },
    {
      title: "最後の脚が泳ぐための『パドル』",
      text: "最後の脚が平たい形になっており、オールのように使って泳ぎます。"
    }
  ],

  bodyLength: "甲幅約15cmほどまで成長します。",

  distribution: "日本を含むインド・西太平洋に広く分布します。",

  habitat: "沿岸の砂底や砂泥底などに生息します。",

  diet: "小型甲殻類や貝類、魚などを食べます。",

  features: "横長の甲羅に3個の丸い模様があり、一番後ろの脚は平たい形をしています。",

  behavior: "砂底を歩くだけでなく、後ろ脚を使って泳いだり砂へ潜ったりします。",

  reproduction: "メスは腹部に卵を抱えて守り、繁殖時期は地域によって異なります。",

  identification: "甲羅の後方に横一列で並ぶ3つの赤紫色の丸い模様が特徴です。",

  nameOrigin: "3つの丸い模様が「蛇の目」に見えることから名付けられました。",

  humanRelation: "地域によって漁獲され、食用になります。",

  observationPoint: "甲羅の3つの模様と、後ろ脚が平たい『泳ぐための脚』になっている点を見てください。",

  references: [
    "BiSMAL: Portunus sanguinolentus ジャノメガザミ",
    "World Register of Marine Species: Portunus sanguinolentus",
    "三重県漁業協同組合連合会：ジャノメガザミ",
    "有山啓之 1996：大阪湾におけるジャノメガザミの生活史"
  ]
},


// ========================================
// sp0095 ショウジンガニ
// LABO2
// ========================================

{
  id: "sp0095",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ショウジンガニ",

  scientificName: "Guinusia dentipes",

  englishName: "Front-clefted shore crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ショウジンガニ科",
    "ショウジンガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0095.jpg",

  trivia: [
    {
      title: "磯をものすごい速さで走る",
      text: "危険を感じると岩の上を非常に速く走り、隙間へ逃げ込みます。"
    },
    {
      title: "昔とは属名が変わった",
      text: "以前は Plagusia dentipes とされていましたが、現在は Guinusia dentipes とされています。"
    }
  ],

  bodyLength: "甲幅約4.5〜5cm。",

  distribution: "日本では東北地方以南から九州・琉球列島などで見られます。",

  habitat: "外洋に面した岩礁海岸の潮間帯や浅い海に生息します。",

  diet: "海藻や小型動物などを食べる雑食性です。",

  features: "赤褐色の平たい甲羅を持ち、甲羅や歩脚には棘状の突起があります。",

  behavior: "波の当たる岩礁を素早く移動し、危険を感じると隙間へ逃げ込みます。",

  reproduction: "メスが腹部に卵を抱えて保護します。",

  identification: "赤褐色の平たい甲羅と、長く頑丈な歩脚が特徴です。",

  nameOrigin: "和名の詳しい由来には複数の説があり、確実には分かっていません。",

  humanRelation: "地域によっては茹でたり味噌汁にしたりして食用にされます。",

  observationPoint: "模様だけでなく、岩の上を非常に速く走る動きにも注目してください。",

  references: [
    "BiSMAL: Guinusia dentipes ショウジンガニ",
    "World Register of Marine Species: Guinusia dentipes",
    "江奈湾干潟生きもの図鑑：ショウジンガニ",
    "Schubart & Cuesta 2010. Phylogenetic relationships of Plagusiidae"
  ]
},


// ========================================
// sp0096 スベスベマンジュウガニ
// LABO2
// ========================================

{
  id: "sp0096",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "スベスベマンジュウガニ",

  scientificName: "Atergatis floridus",

  englishName: "Floral egg crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "オウギガニ科",
    "マンジュウガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0096.jpg",

  trivia: [
    {
      title: "かわいい名前でも猛毒を持つ",
      text: "強い神経毒を持つ個体が確認されており、食用にはできません。"
    },
    {
      title: "触っただけで毒に当たるカニではない",
      text: "毒は主に体内にあり、普通に触れただけで皮膚から毒が入るタイプではありません。"
    }
  ],

  bodyLength: "甲幅は約7〜10cmほどに達します。",

  distribution: "日本の暖かい沿岸を含むインド・西太平洋に広く分布します。",

  habitat: "浅い岩礁やサンゴ礁に生息し、岩の隙間などに隠れます。",

  diet: "小型の底生生物や死骸、植物質などを利用する雑食性です。",

  features: "丸く盛り上がった滑らかな甲羅に、白や黄色などの複雑な模様があります。",

  behavior: "岩の隙間などで暮らし、夜間に活動することが多いとされています。",

  reproduction: "メスは腹部に受精卵を抱えて保護します。",

  identification: "丸く盛り上がった非常に滑らかな甲羅が特徴です。",

  nameOrigin: "饅頭のような丸い甲羅と滑らかな表面から名付けられました。",

  humanRelation: "強い毒を持つため食べてはいけないカニです。",

  observationPoint: "名前通りの丸く滑らかな甲羅と、美しい模様に注目してください。",

  references: [
    "BiSMAL: Atergatis floridus スベスベマンジュウガニ",
    "東京大学総合研究博物館：Atergatis floridus",
    "浦添市：スベスベマンジュウガニ",
    "Noguchi et al. 1983. Occurrence of tetrodotoxin in Atergatis floridus",
    "Noguchi et al. 1984. Toxic components of Atergatis floridus"
  ]
},


// ========================================
// sp0097 ゾウリエビ
// LABO2
// ========================================

{
  id: "sp0097",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ゾウリエビ",

  scientificName: "Parribacus japonicus",

  englishName: "Japanese mitten lobster",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "セミエビ科",
    "ゾウリエビ属"
  ],

  category: "甲殻類",

  image: "images/sp0097.jpg",

  trivia: [
    {
      title: "本当に草履のように平たい",
      text: "体は非常に平たく幅広く、その姿が草履に似ています。"
    },
    {
      title: "触角が大きな板になっている",
      text: "長い触角ではなく、第2触角が大きく平たい板状になっています。"
    }
  ],

  bodyLength: "通常は体長約15cmで、大型個体では約20cmになります。",

  distribution: "日本沿岸を中心とした西太平洋に分布します。",

  habitat: "外洋の影響を受ける岩礁域に生息します。",

  diet: "詳しい食性については、今回確認した資料では十分な情報がありません。",

  features: "非常に平たく幅広い体と、板状に変化した大きな触角が特徴です。",

  behavior: "岩礁の海底を歩き、平たい体を利用して狭い隙間にも入り込みます。",

  reproduction: "メスは腹部に卵を抱えて守り、孵化した幼生は海中を漂います。",

  identification: "幅広く平たい体と、大きな板状の触角が特徴です。",

  nameOrigin: "平たく幅広い体が日本の履物「草履」に似ることから名付けられました。",

  humanRelation: "食用になる美味なエビですが、漁獲量は多くありません。",

  observationPoint: "イセエビと比べ、長い触角ではなく大きな板状の触角を持つ点に注目してください。",

  references: [
    "World Register of Marine Species: Parribacus japonicus",
    "FAO Marine Lobsters of the World: Parribacus japonicus",
    "日本大百科全書：ゾウリエビ",
    "沖縄県：漁業権対象種 ゾウリエビ"
  ]
},


// ========================================
// sp0098 タテジマイソギンチャク
// LABO2
// ※LABO2内の重複はこのIDへ統合
// ========================================

{
  id: "sp0098",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "タテジマイソギンチャク",

  scientificName: "Diadumene lineata",

  englishName: "Orange-striped sea anemone",

  classification: [
    "刺胞動物門",
    "花虫綱",
    "六放サンゴ亜綱",
    "イソギンチャク目",
    "タテジマイソギンチャク科",
    "Diadumene属"
  ],

  category: "刺胞動物",

  image: "images/sp0098.jpg",

  trivia: [
    {
      title: "小さくても世界中へ広がったイソギンチャク",
      text: "北西太平洋が原産と考えられ、船舶などによって世界各地へ広がりました。"
    },
    {
      title: "体をちぎって増えることができる",
      text: "体の一部が分かれ、その断片から新しい個体を作る無性生殖も行います。"
    }
  ],

  bodyLength: "直径1cm未満の個体が多く、大きな個体では数cmになることもあります。",

  distribution: "北西太平洋が原産と考えられ、現在では世界各地へ移入されています。",

  habitat: "内湾や河口、港などの岩、護岸、杭などに付着して生活します。",

  diet: "触手で小型動物やプランクトンなどを捕らえて食べます。",

  features: "緑褐色の体に橙色や黄色の縦線が入り、口の周囲には多数の細い触手があります。",

  behavior: "岩などへ付着し、刺激を受けると触手を縮めることがあります。",

  reproduction: "有性生殖だけでなく、体の一部から新しい個体を作る無性生殖も行います。",

  identification: "オリーブ色の体に入る橙色の縦縞が大きな特徴です。",

  nameOrigin: "体の側面に橙色や黄色の縦縞が入ることから名付けられました。",

  humanRelation: "海外では外来種として研究され、日本では内湾で身近に見られるイソギンチャクです。",

  observationPoint: "非常に小さいため、まず体に入るオレンジ色の縦線を探してください。",

  references: [
    "World Register of Marine Species: Diadumene lineata",
    "NCBI Taxonomy: Diadumene lineata",
    "宇久井ビジターセンター：タテジマイソギンチャク",
    "理化学研究所：タテジマイソギンチャクの体の相称性",
    "Gimenez et al. 2017. Taxonomy and distribution of Diadumene lineata"
  ]
},


// ========================================
// sp0099 トゲモミジガイ
// LABO2
// ========================================

{
  id: "sp0099",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "トゲモミジガイ",

  scientificName: "Astropecten polyacanthus",

  englishName: "Sand-sifting starfish",

  classification: [
    "棘皮動物門",
    "ヒトデ綱",
    "モミジガイ目",
    "モミジガイ科",
    "モミジガイ属"
  ],

  category: "棘皮動物",

  image: "images/sp0099.jpg",

  trivia: [
    {
      title: "砂の中へ潜って生活する",
      text: "腕の縁の棘を使って砂へ潜り、昼間は砂の中に隠れることがあります。"
    },
    {
      title: "貝を丸ごと食べることがある",
      text: "二枚貝や小型の巻貝などを捕食し、小さな獲物は丸ごと食べることがあります。"
    }
  ],

  bodyLength: "腕の中心から先端まで約7cmほどになる個体が知られています。",

  distribution: "日本では房総半島以南に見られ、インド・西太平洋にも広く分布します。",

  habitat: "浅い海の砂底や砂泥底に生息し、砂の中へ潜ることがあります。",

  diet: "二枚貝や巻貝、ゴカイなどの小型無脊椎動物を捕食します。",

  features: "平たい星形の体を持ち、5本の腕の縁には多数の棘が並びます。",

  behavior: "砂の上を移動し、棘を使って体を砂の中へ潜らせます。",

  reproduction: "卵と精子を海中へ放出して体外受精し、幼生期には水中を漂います。",

  identification: "腕の縁に多数並ぶ棘が重要な特徴です。",

  nameOrigin: "モミジガイの仲間で、腕の縁に目立つ棘を持つことから名付けられました。",

  humanRelation: "一般的な食用生物ではなく、テトロドトキシンが検出された研究例もあります。",

  observationPoint: "腕の縁に櫛のように並ぶ棘と、砂へ潜る様子に注目してください。",

  references: [
    "BiSMAL: Astropecten polyacanthus トゲモミジガイ",
    "日本動物園水族館協会：トゲモミジガイ",
    "DORIS: Astropecten polyacanthus",
    "Narita et al. 1984. Tetrodotoxin in Astropecten polyacanthus"
  ]
},

// ========================================
// sp0100 トックリガンガゼモドキ
// LABO2
// ========================================

{
  id: "sp0100",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "トックリガンガゼモドキ",

  scientificName: "Echinothrix calamaris",

  englishName: "Black banded sea urchin",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "ガンガゼ目",
    "ガンガゼ科",
    "ガンガゼモドキ属"
  ],

  category: "棘皮動物",

  image: "images/sp0100.jpg",

  trivia: [
    {
      title: "太い棘と細い棘の2種類を持つ",
      text: "太い棘の間には毒を持つ細い棘があり、刺さると痛みを生じます。"
    },
    {
      title: "名前の『トックリ』は体の上にある部分",
      text: "体の上側にある肛門周辺が徳利のような形に伸びています。"
    }
  ],

  bodyLength: "殻径は10cm以上になり、最大約15cmになることがあります。",

  distribution: "インド洋から西太平洋に広く分布し、日本でも見られます。",

  habitat: "浅いサンゴ礁や転石、サンゴの隙間などに生息します。",

  diet: "主に岩やサンゴ表面に生える藻類を食べます。",

  features: "太い棘と細い棘の2種類を持ち、細い棘には毒があります。",

  behavior: "岩やサンゴの隙間に入り、棘を広げて身を守ります。",

  reproduction: "卵と精子を海中へ放出して体外受精します。",

  identification: "太い棘と細い棘が混ざっていることが特徴です。",

  nameOrigin: "肛門付近が徳利のような形になることから名付けられました。",

  humanRelation: "細い棘には毒があり、刺さると痛むため素手で触らないよう注意が必要です。",

  observationPoint: "太い棘と、その間にある細い棘を見比べてみてください。",

  references: [
    "沖縄美ら海水族館：トックリガンガゼモドキ",
    "八丈ビジターセンター：トックリガンガゼモドキ",
    "浦添市環境マップ：トックリガンガゼモドキ",
    "SeaLifeBase: Echinothrix calamaris"
  ]
},


// ========================================
// sp0101 トラフカラッパ
// LABO2
// ========================================

{
  id: "sp0101",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "トラフカラッパ",

  scientificName: "Calappa lophos",

  englishName: "Common box crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "カラッパ科",
    "カラッパ属"
  ],

  category: "甲殻類",

  image: "images/sp0101.jpg",

  trivia: [
    {
      title: "大きなはさみで顔を隠せる",
      text: "大きなはさみを前へ折りたたみ、顔や体の前面を隠すことができます。"
    },
    {
      title: "強力なはさみで貝を食べる",
      text: "強いはさみで巻貝などの硬い殻を壊して食べます。"
    }
  ],

  bodyLength: "甲幅は10cm前後になります。",

  distribution: "日本を含むインド・西太平洋の暖かい海に広く分布します。",

  habitat: "主に砂底や砂泥底に生息します。",

  diet: "巻貝や二枚貝などを捕食する肉食性です。",

  features: "丸みのある甲羅と、非常に大きく平たいはさみが特徴です。",

  behavior: "砂へ潜って隠れ、危険を感じるとはさみで体の前を覆います。",

  reproduction: "メスは受精した卵を腹部に抱えて守ります。",

  identification: "甲羅後方の張り出しと、赤褐色の模様が特徴です。",

  nameOrigin: "甲羅の虎斑のような模様が「トラフ」という名前に関係しています。",

  humanRelation: "地域によって利用されますが、日本では主要な食用ガニではありません。",

  observationPoint: "大きなはさみを閉じたとき、顔をどれほど隠せるか見てみてください。",

  references: [
    "BiSMAL: Calappa lophos トラフカラッパ",
    "World Register of Marine Species: Calappa lophos",
    "FAO・甲殻類関連資料：Calappa lophos",
    "Fisheries Survey of India: Common box crab"
  ]
},


// ========================================
// sp0102 ニクハゼ
// LABO2
// ========================================

{
  id: "sp0102",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ニクハゼ",

  scientificName: "Gymnogobius heptacanthus",

  englishName: "No widely established English common name",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ハゼ目",
    "ハゼ科",
    "ウキゴリ属"
  ],

  category: "魚類",

  image: "images/sp0102.jpg",

  trivia: [
    {
      title: "海底に張り付かず、少し浮いて泳ぐ",
      text: "海底から少し離れた場所を、群れで泳ぐことがあります。"
    },
    {
      title: "子どもの主食は小さなプランクトン",
      text: "仔魚や稚魚は動物プランクトンを多く食べ、成長すると餌の種類が増えます。"
    }
  ],

  bodyLength: "最大で全長約7cmで、一般には5cm前後です。",

  distribution: "北海道から九州までの日本沿岸や、朝鮮半島、中国沿岸などに分布します。",

  habitat: "内湾やアマモ場、河口、干潟などに生息します。",

  diet: "若い個体は動物プランクトンを食べ、成長すると多毛類なども利用します。",

  features: "細長い体と比較的大きな口を持ち、若い個体は淡い桃色に見えることがあります。",

  behavior: "内湾の海底近くを群れで泳ぐことがあります。",

  reproduction: "本種固有の詳しい繁殖行動については、十分な情報がありません。",

  identification: "細長い体と大きな口が特徴ですが、正確な識別にはひれや模様の確認も必要です。",

  nameOrigin: "若い個体の淡い桃色が肉のように見えることが名前に関係するとされています。",

  humanRelation: "食用魚ではなく、干潟やアマモ場の生態を調べる研究対象にもなっています。",

  observationPoint: "水槽の底だけでなく、少し上を群れで泳いでいないか探してみてください。",

  references: [
    "FishBase: Gymnogobius heptacanthus",
    "World Register of Marine Species: Gymnogobius heptacanthus",
    "神奈川県水産技術センター：ニクハゼ",
    "東京海洋大学：千葉県新浜湖の干潟域におけるニクハゼの初期生活史",
    "Kim et al. 2016. Feeding habits of juvenile Gymnogobius heptacanthus"
  ]
},


// ========================================
// sp0103 ニセモミジガイ
// LABO2
// ========================================

{
  id: "sp0103",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ニセモミジガイ",

  scientificName: "Ctenopleura fisheri",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ヒトデ綱",
    "モミジガイ目",
    "モミジガイ科",
    "ニセモミジガイ属"
  ],

  category: "棘皮動物",

  image: "images/sp0103.jpg",

  trivia: [
    {
      title: "名前は似ていてもモミジガイとは別の属",
      text: "モミジガイとは外見が似ていますが、分類上は別の属です。"
    },
    {
      title: "巻貝を食べていた個体が見つかっている",
      text: "巻貝を捕食していた個体が実際に報告されています。"
    }
  ],

  bodyLength: "大きさには個体差があり、確実な最大サイズは確認できませんでした。",

  distribution: "日本周辺を含む北西太平洋から記録されています。",

  habitat: "海底で暮らし、水深100m前後から見つかった例もあります。",

  diet: "肉食性で、巻貝を捕食した記録があります。",

  features: "平たい体に通常5本の腕があり、腕は先端へ向かって細くなります。",

  behavior: "管足を使って海底を移動します。",

  reproduction: "繁殖方法の詳しい情報は少なく、自然下での産卵時期は分かっていません。",

  identification: "モミジガイ類に似ていますが、正確な識別には体表などの細かな確認が必要です。",

  nameOrigin: "モミジガイに似た別属のヒトデであることから名付けられました。",

  humanRelation: "一般的な食用生物ではなく、分類や捕食行動の研究対象になっています。",

  observationPoint: "ほかのモミジガイ類と、腕の形や体表の違いを見比べてみてください。",

  references: [
    "日本動物園水族館協会：ニセモミジガイ Ctenopleura fisheri",
    "BiSMAL: Ctenopleura ニセモミジガイ属",
    "ITIS: Ctenopleura fisheri",
    "J-GLOBAL：紀伊水道で採れたニセモミジガイによる捕食事例",
    "小松・加野 1979：ニセモミジガイの発生"
  ]
},


// ========================================
// sp0104 ニシキウミウシ
// LABO2
// ========================================

{
  id: "sp0104",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ニシキウミウシ",

  scientificName: "Ceratosoma trilobatum",

  englishName: "Three-lobed ceratosoma",

  classification: [
    "軟体動物門",
    "腹足綱",
    "裸鰓目",
    "イロウミウシ科",
    "Ceratosoma属"
  ],

  category: "軟体動物",

  image: "images/sp0104.jpg",

  trivia: [
    {
      title: "背中の後ろに大きな突起がある",
      text: "二次鰓の後ろには大きな突起があり、防御に役立つ物質が集められると考えられています。"
    },
    {
      title: "色の個体差が非常に大きい",
      text: "黄色、橙色、赤色、紫色など、個体によって体色や模様が大きく異なります。"
    }
  ],

  bodyLength: "大型個体では体長約15cmに達することがあります。",

  distribution: "日本を含むインド・西太平洋の暖かい海に広く分布します。",

  habitat: "サンゴ礁や岩礁など、餌となるカイメンがある場所に生息します。",

  diet: "肉食性で、主にカイメン類を食べます。",

  features: "大型で厚みのある体を持ち、背中後方には二次鰓と大きな突起があります。",

  behavior: "岩やサンゴの上をゆっくり這いながら餌を探します。",

  reproduction: "雌雄同体で、通常は別個体と交尾してリボン状の卵塊を産みます。",

  identification: "体色だけでなく、二次鰓の後ろにある大きな突起も重要な特徴です。",

  nameOrigin: "鮮やかで複雑な体色が美しい「錦」を思わせることから名付けられました。",

  humanRelation: "食用ではありませんが、大型で美しいことからダイバーに人気があります。",

  observationPoint: "花のような二次鰓と、その後ろにある大きな突起を見比べてください。",

  references: [
    "BiSMAL: Ceratosoma trilobatum ニシキウミウシ",
    "World Register of Marine Species: Ceratosoma trilobatum",
    "Australian Museum Sea Slug Forum: Ceratosoma trilobatum",
    "Museum Victoria: Ceratosoma trilobatum"
  ]
},


// ========================================
// sp0105 ニッポンコシダカウニ
// LABO2
// ========================================

{
  id: "sp0105",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ニッポンコシダカウニ",

  scientificName: "Mespilia levituberculatus",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "カマロドント目",
    "サンショウウニ科",
    "Mespilia属"
  ],

  category: "棘皮動物",

  image: "images/sp0105.jpg",

  trivia: [
    {
      title: "最近まで『コシダカウニ』と混同されていた",
      text: "日本本土の個体は長くコシダカウニとされていましたが、現在は別種として扱われています。"
    },
    {
      title: "体の上に物を乗せる",
      text: "管足を使って海藻などを体の上へ乗せることがあります。"
    }
  ],

  bodyLength: "殻径は約3〜5cmの比較的小型のウニです。",

  distribution: "日本では九州南部から相模湾、新潟県周辺まで確認されています。",

  habitat: "浅い岩礁や石の下、砂泥底などに生息します。",

  diet: "主に海藻などを食べると考えられています。",

  features: "丸みの強い小型の殻を持ち、棘のある部分と少ない部分が帯状に並びます。",

  behavior: "管足と棘で移動し、海藻などを体の上に乗せることがあります。",

  reproduction: "卵と精子を海中へ放出して体外受精すると考えられています。",

  identification: "コシダカウニによく似るため、正確な種同定には分類上の確認が重要です。",

  nameOrigin: "日本本土のコシダカウニ類が別種と分かったことで、この標準和名が使われています。",

  humanRelation: "一般的な食用ウニではなく、日本沿岸のウニ類の多様性を知るうえで興味深い種類です。",

  observationPoint: "丸みのある殻と、体の上に海藻などを乗せていないか注目してください。",

  references: [
    "京都大学瀬戸臨海実験所：ニッポンコシダカウニ",
    "江奈湾干潟生きもの図鑑：Mespilia levituberculatus",
    "田中ほか：日本産Mespilia属の分類学的再検討",
    "大阪湾環境保全調査：ニッポンコシダカウニ"
  ]
},


// ========================================
// sp0106 ニホンクモヒトデ
// LABO2
// ========================================

{
  id: "sp0106",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ニホンクモヒトデ",

  scientificName: "Ophioplocus japonicus",

  englishName: "Japanese smooth brittle star",

  classification: [
    "棘皮動物門",
    "クモヒトデ綱",
    "ハナビラクモヒトデ目",
    "ハナクモヒトデ科",
    "Ophioplocus属"
  ],

  category: "棘皮動物",

  image: "images/sp0106.jpg",

  trivia: [
    {
      title: "ヒトデよりも腕の動きが速い",
      text: "5本の細長い腕を大きく動かし、普通のヒトデより素早く移動できます。"
    },
    {
      title: "最初は日本固有種だと思われていた",
      text: "日本で記載されましたが、その後は韓国や中国南部でも確認されています。"
    }
  ],

  bodyLength: "中央の盤は直径約2cmで、腕を含めると全体で約10cmになることがあります。",

  distribution: "日本沿岸のほか、韓国や中国南部でも確認されています。",

  habitat: "岩礁の潮間帯などに生息し、石の下に隠れていることがあります。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "丸い中央部から5本の細長い腕が伸び、腕には濃淡の横縞があります。",

  behavior: "細長い腕を大きく動かして、海底を素早く這います。",

  reproduction: "卵と精子を海中へ放出して体外受精します。",

  identification: "暗褐色の体と、細長い腕に入る横縞が特徴です。",

  nameOrigin: "日本で記載された代表的なクモヒトデの一種として、この名前が付けられています。",

  humanRelation: "食用ではなく、日本の磯で観察できる身近なクモヒトデの一つです。",

  observationPoint: "腕の横縞と、ヒトデとは異なる素早い動きに注目してください。",

  references: [
    "国立科学博物館：ニホンクモヒトデ",
    "BiSMAL: Ophioplocus japonicus ニホンクモヒトデ",
    "World Register of Marine Species: Ophioplocus japonicus",
    "新潟大学佐渡自然共生科学センター：ニホンクモヒトデ"
  ]
},


// ========================================
// sp0107 ナガニシ
// LABO2
// ========================================

{
  id: "sp0107",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ナガニシ",

  scientificName: "Fusinus perplexus",

  englishName: "Spindle whelk",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足目",
    "イトマキボラ科",
    "ナガニシ属"
  ],

  category: "軟体動物",

  image: "images/sp0107.jpg",

  trivia: [
    {
      title: "卵の袋は『サカサホオズキ』",
      text: "軍配のような形の卵嚢は「サカサホオズキ」と呼ばれ、昔は玩具にも使われました。"
    },
    {
      title: "殻が非常に細長い",
      text: "殻は名前の通り非常に細長く、紡錘のような形をしています。"
    }
  ],

  bodyLength: "殻高は最大約14cmになります。",

  distribution: "北海道南部から九州までの日本沿岸に分布します。",

  habitat: "水深10〜50mほどの砂底や砂泥底に生息します。",

  diet: "動物の死骸などの有機物を利用する雑食性です。",

  features: "細長い紡錘形の殻と、下方へ伸びる長い水管部分が特徴です。",

  behavior: "砂泥底をゆっくり移動しながら餌を探します。",

  reproduction: "主に夏に、軍配形の卵嚢をまとめて産み付けます。",

  identification: "高く伸びた螺塔と、細長い水管部分が特徴です。",

  nameOrigin: "非常に細長い殻を持つことから「ナガニシ」と呼ばれます。",

  humanRelation: "卵嚢は昔「海ほおずき」として玩具に利用されました。",

  observationPoint: "普通の巻貝と比べ、殻と水管部分がどれほど細長いか見てください。",

  references: [
    "BiSMAL: Fusinus perplexus ナガニシ",
    "世界大百科事典：ナガニシ",
    "日本大百科全書：ナガニシ",
    "日本大百科全書：ウミホオズキ"
  ]
},


// ========================================
// sp0108 ナベカ
// LABO2
// ========================================

{
  id: "sp0108",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ナベカ",

  scientificName: "Omobranchus elegans",

  englishName: "Elegant blenny",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ギンポ目",
    "イソギンポ科",
    "ナベカ属"
  ],

  category: "魚類",

  image: "images/sp0108.jpg",

  trivia: [
    {
      title: "空になった貝殻を産卵場所に使う",
      text: "空になった貝殻などへメスが卵を産み、オスがその場所を守ります。"
    },
    {
      title: "オスが卵へ水を送る",
      text: "オスは尾びれなどを動かし、卵へ新鮮な海水を送ります。"
    }
  ],

  bodyLength: "最大で全長約6cm。",

  distribution: "日本南部から朝鮮半島、中国沿岸などに分布します。",

  habitat: "浅い岩礁や潮だまり、岩の隙間などに生息します。",

  diet: "岩の表面に付着する藻類や細かな有機物を食べます。",

  features: "細長い体を持ち、前半には暗色の模様、後半には黄色味が見られます。",

  behavior: "岩穴や隙間の周囲で暮らし、繁殖期のオスは巣を守ります。",

  reproduction: "メスが穴や貝殻に卵を産み、オスが守りながら水を送ります。",

  identification: "黄色味を帯びた細長い体と、体に入る模様が特徴です。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "食用魚ではありませんが、オスによる卵保護を観察できる魚です。",

  observationPoint: "小さな穴や貝殻を探し、そこから顔を出す個体がいないか見てください。",

  references: [
    "FishBase: Omobranchus elegans",
    "BiSMAL: Omobranchus elegans ナベカ",
    "新潟大学佐渡自然共生科学センター：ナベカ",
    "東京大学大気海洋研究所：イソギンポ科ナベカの繁殖行動"
  ]
},


// ========================================
// sp0109 ヌノメイトマキヒトデ
// LABO2
// ========================================

{
  id: "sp0109",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヌノメイトマキヒトデ",

  scientificName: "Aquilonastra batheri",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ヒトデ綱",
    "アカヒトデ目",
    "イトマキヒトデ科",
    "Aquilonastra属"
  ],

  category: "棘皮動物",

  image: "images/sp0109.jpg",

  trivia: [
    {
      title: "学名の属が変更されている",
      text: "古い資料では Asterina batheri とされますが、現在は Aquilonastra batheri が受理名です。"
    },
    {
      title: "小さなヒトデ",
      text: "数cmほどの小型種で、浅い岩礁や石の周辺で見られます。"
    }
  ],

  bodyLength: "腕を含めて約3〜5cmほどの小型のヒトデです。",

  distribution: "日本沿岸から記録されています。",

  habitat: "浅い岩礁や石の多い海底、干潟などに生息します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "平たい体と短い腕を持ち、全体的になだらかな星形をしています。",

  behavior: "管足を使い、岩や石の表面や裏側をゆっくり移動します。",

  reproduction: "本種固有の詳しい繁殖方法や時期については、十分な情報がありません。",

  identification: "小型のイトマキヒトデ類で、正確な種同定には細かな形態確認が必要です。",

  nameOrigin: "「ヌノメ」の詳しい命名由来については、今回確認した資料では分かっていません。",

  humanRelation: "一般的な食用生物ではなく、磯の生物観察で見られる小型のヒトデです。",

  observationPoint: "石や岩の隙間を探し、イトマキヒトデとの大きさの違いも比べてみてください。",

  references: [
    "JAMBIO沿岸生物データベース：Aquilonastra batheri",
    "BiSMAL：Aquilonastra batheri ヌノメイトマキヒトデ",
    "World Register of Marine Species：Aquilonastra batheri",
    "新潟大学佐渡自然共生科学センター：Aquilonastra batheri"
  ]
},


// ========================================
// sp0110 ハオコゼ
// LABO2
// ========================================

{
  id: "sp0110",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハオコゼ",

  scientificName: "Hypodytes rubripinnis",

  englishName: "Redfin waspfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズキ目",
    "ハオコゼ科",
    "ハオコゼ属"
  ],

  category: "魚類",

  image: "images/sp0110.jpg",

  trivia: [
    {
      title: "小さくても毒のある魚",
      text: "背びれの鋭い棘には毒があり、刺されると強い痛みを生じます。"
    },
    {
      title: "夕方に2匹で泳ぎ上がって産卵する",
      text: "繁殖時にはオスとメスが中層へ泳ぎ上がり、卵と精子を放出します。"
    }
  ],

  bodyLength: "最大で全長約10cm。",

  distribution: "日本では青森県周辺から九州南岸まで広く見られます。",

  habitat: "浅い海のアマモ場や岩礁、潮だまりなどに生息します。",

  diet: "小型の甲殻類などを捕食します。",

  features: "赤褐色などの平たい体を持ち、背びれの鋭い棘には毒があります。",

  behavior: "昼は海藻や岩陰でじっとし、夜になると活動します。",

  reproduction: "日本では主に6〜8月ごろ、ペアで中層へ泳ぎ上がって産卵します。",

  identification: "小型で体高があり、頭の近くから続く大きな背びれが特徴です。",

  nameOrigin: "和名の詳しい由来には複数の説があり、確実には分かっていません。",

  humanRelation: "食用魚ではなく、背びれの毒棘による刺傷に注意が必要です。",

  observationPoint: "水槽の底や海藻の陰を探し、長く続く背びれの棘にも注目してください。",

  references: [
    "NCBI Taxonomy：Hypodytes rubripinnis",
    "Honda釣魚図鑑：ハオコゼ",
    "北海道大学総合博物館：Hypodytes rubripinnis",
    "日本大百科全書：ハオコゼ"
  ]
},


// ========================================
// sp0111 ハクセンスズメダイ
// LABO2
// ========================================

{
  id: "sp0111",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハクセンスズメダイ",

  scientificName: "Plectroglyphidodon leucozonus",

  englishName: "Singlebar devil",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズメダイ科",
    "イシガキスズメダイ属"
  ],

  category: "魚類",

  image: "images/sp0111.jpg",

  trivia: [
    {
      title: "名前通り白い一本線がある",
      text: "茶褐色の体の中央に、一本の白っぽい帯があります。"
    },
    {
      title: "卵を守るのはオス",
      text: "岩などに産み付けられた卵を、オスが孵化まで守ります。"
    }
  ],

  bodyLength: "最大で全長約12cm。",

  distribution: "インド太平洋に広く分布し、日本からオーストラリアまで見られます。",

  habitat: "波当たりの強い浅い岩礁やサンゴ礁に生息します。",

  diet: "主に岩の表面に生える藻類を食べます。",

  features: "茶褐色の体中央に一本の白帯があり、幼魚では黒い眼状斑も目立ちます。",

  behavior: "浅い岩礁で藻類を食べ、縄張りへ入った魚を追い払うことがあります。",

  reproduction: "岩などに卵を産み、オスが守りながら水を送ります。",

  identification: "体の中央にある一本の白い帯が大きな特徴です。",

  nameOrigin: "体側に一本の白い帯があることから「ハクセンスズメダイ」と呼ばれます。",

  humanRelation: "食用として重要ではありませんが、観賞魚として飼育されることがあります。",

  observationPoint: "白い帯を探し、小さな個体ではその後ろの黒い模様にも注目してください。",

  references: [
    "FishBase：Plectroglyphidodon leucozonus",
    "BiSMAL：Plectroglyphidodon leucozonus ハクセンスズメダイ",
    "宇久井ビジターセンター：ハクセンスズメダイ",
    "神奈川県立生命の星・地球博物館 魚類写真資料データベース"
  ]
},


// ========================================
// sp0112 ハナマルユキ
// LABO2
// ※LABO2内の重複はこのIDへ統合
// ========================================

{
  id: "sp0112",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハナマルユキ",

  scientificName: "Monetaria caputserpentis",

  englishName: "Serpent's-head cowry",

  classification: [
    "軟体動物門",
    "腹足綱",
    "タカラガイ上科",
    "タカラガイ科",
    "Monetaria属"
  ],

  category: "軟体動物",

  image: "images/sp0112.jpg",

  trivia: [
    {
      title: "殻は磨いていないのにピカピカ",
      text: "生きているときは外套膜が殻を覆い、なめらかな光沢を保っています。"
    },
    {
      title: "白い点が雪のように見える",
      text: "濃い褐色の殻に白い斑点が散らばり、雪のように見えます。"
    }
  ],

  bodyLength: "殻長は約3〜4cm。",

  distribution: "南日本を含むインド・太平洋の暖かい海に広く分布します。",

  habitat: "潮間帯から浅い岩礁やサンゴ礁などに生息します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "丸みのある光沢の強い殻を持ち、濃い褐色の表面には白い斑点があります。",

  behavior: "岩のくぼみなどに隠れ、海水に覆われると移動することがあります。",

  reproduction: "本種固有の詳しい繁殖時期や卵保護については、十分な情報がありません。",

  identification: "濃い褐色の殻に多数の白い小斑点があることが特徴です。",

  nameOrigin: "褐色の殻に散らばる白い模様が雪を思わせることから名付けられたとされています。",

  humanRelation: "美しい殻から、古くから貝殻収集などに利用されてきました。",

  observationPoint: "生きた個体では、光沢のある殻を外套膜が覆っていないか見てください。",

  references: [
    "World Register of Marine Species：Monetaria caputserpentis",
    "BiSMAL：Monetaria caputserpentis ハナマルユキ",
    "Marine Mollusks in Japan：Cypraeidae",
    "市場魚貝類図鑑：ハナマルユキ"
  ]
},


// ========================================
// sp0113 ハツユキダカラ
// LABO2
// ========================================

{
  id: "sp0113",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハツユキダカラ",

  scientificName: "Naria miliaris",

  englishName: "Millet cowry",

  classification: [
    "軟体動物門",
    "腹足綱",
    "タカラガイ上科",
    "タカラガイ科",
    "Naria属"
  ],

  category: "軟体動物",

  image: "images/sp0113.jpg",

  trivia: [
    {
      title: "現在はNaria属",
      text: "古い資料では別の属名も使われますが、現在は Naria miliaris が受理名です。"
    },
    {
      title: "名前の由来は『初雪』",
      text: "黄褐色の殻に散らばる白い点が、初雪のように見えることから名付けられました。"
    }
  ],

  bodyLength: "殻長は約4〜4.5cmで、5cmを超えることもあります。",

  distribution: "日本では房総半島以南などで見られ、インド・西太平洋にも広く分布します。",

  habitat: "潮間帯から浅い岩礁に生息し、石の下などを利用します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "黄褐色の光沢ある殻に多数の白い斑点があります。",

  behavior: "岩や石の下に隠れ、生きた個体では外套膜が殻を覆うことがあります。",

  reproduction: "本種固有の詳しい産卵期や繁殖行動については、十分な情報がありません。",

  identification: "黄褐色の殻に散らばる白い斑点が特徴です。",

  nameOrigin: "殻の白い模様を「初雪」に見立てて名付けられたとされています。",

  humanRelation: "主要な食用貝ではなく、美しい殻から貝殻収集の対象になります。",

  observationPoint: "ハナマルユキと見比べ、殻の地色や白い斑点の違いに注目してください。",

  references: [
    "World Register of Marine Species：Naria miliaris",
    "BiSMAL：ハツユキダカラ",
    "千葉県立中央博物館分館海の博物館：巻貝の仲間",
    "市場魚貝類図鑑：ハツユキダカラ"
  ]
},


// ========================================
// sp0114 ハリサザエ
// LABO2
// ========================================

{
  id: "sp0114",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハリサザエ",

  scientificName: "Bolma modesta",

  englishName: "Modest bolma",

  classification: [
    "軟体動物門",
    "腹足綱",
    "ニシキウズガイ目",
    "リュウテンサザエ科",
    "Bolma属"
  ],

  category: "軟体動物",

  image: "images/sp0114.jpg",

  trivia: [
    {
      title: "殻に何列もの棘が並ぶ",
      text: "殻の周囲には細長い棘が何列も並び、普通のサザエとは大きく異なる姿をしています。"
    },
    {
      title: "昔とは属名が変わっている",
      text: "古い資料では別の属名も使われますが、現在は Bolma modesta が受理名です。"
    }
  ],

  bodyLength: "殻高約5cm、殻径約5.5cm。",

  distribution: "日本では房総半島から九州に分布し、中国沿岸などでも見られます。",

  habitat: "主に水深30〜100mほどの岩や小石が多い海底に生息します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "低い円錐形の殻を持ち、周囲には細長い棘が複数列並びます。",

  behavior: "海底を足で這って生活します。",

  reproduction: "本種固有の繁殖時期や産卵行動については、十分な情報がありません。",

  identification: "低い殻と、その周囲に並ぶ複数列の細長い棘が特徴です。",

  nameOrigin: "殻に針のような棘を多数持つことから「ハリサザエ」と呼ばれます。",

  humanRelation: "漁で混獲されることがあり、美しい殻は収集の対象にもなります。",

  observationPoint: "殻を横から見て、細長い棘が何列並んでいるか観察してみてください。",

  references: [
    "World Register of Marine Species：Bolma modesta",
    "BiSMAL：Bolma modesta ハリサザエ",
    "日本大百科全書：ハリサザエ",
    "サイエンスミュージアムネット：Bolma modesta"
  ]
},


// ========================================
// sp0115 バイ
// LABO2
// ========================================

{
  id: "sp0115",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "バイ",

  scientificName: "Babylonia japonica",

  englishName: "Japanese babylon",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足目",
    "バイ科",
    "Babylonia属"
  ],

  category: "軟体動物",

  image: "images/sp0115.jpg",

  trivia: [
    {
      title: "魚のにおいを利用して漁獲する",
      text: "死んだ魚などへ集まる習性を利用し、餌を入れた「バイ籠」で漁獲されます。"
    },
    {
      title: "卵の袋には名前がある",
      text: "四角い卵嚢を多数産み、その集まりは「アワホオズキ」と呼ばれます。"
    }
  ],

  bodyLength: "殻高約6〜7cm。",

  distribution: "北海道南部から本州・四国・九州、朝鮮半島などに分布します。",

  habitat: "沿岸の砂底や砂泥底に生息し、砂の中へ潜ることがあります。",

  diet: "死んだ魚や貝などの動物質を食べる肉食・腐肉食性です。",

  features: "白から淡い紫色の殻に、紫褐色の斑紋があります。",

  behavior: "昼は砂に潜り、夜になると外へ出て餌を探すことがあります。",

  reproduction: "日本では主に5〜8月ごろ、四角い卵嚢を多数産み付けます。",

  identification: "白っぽい長卵形の殻と、規則的な紫褐色の斑紋が特徴です。",

  nameOrigin: "「バイ」という名称の詳しい由来には複数の説があり、確実には分かっていません。",

  humanRelation: "古くから食用にされ、煮付けなどに利用されてきました。",

  observationPoint: "砂の中へ潜っていないか探し、移動時に殻の下から伸びる足にも注目してください。",

  references: [
    "BiSMAL：Babylonia japonica バイ",
    "NCBI Taxonomy：Babylonia japonica",
    "新潟大学佐渡自然共生科学センター：バイ",
    "和歌山県レッドデータブック：バイ",
    "世界大百科事典：バイ"
  ]
},


// ========================================
// sp0116 バフンウニ
// LABO2
// ========================================

{
  id: "sp0116",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "バフンウニ",

  scientificName: "Hemicentrotus pulcherrimus",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "Camarodonta",
    "オオバフンウニ科",
    "バフンウニ属"
  ],

  category: "棘皮動物",

  image: "images/sp0116.jpg",

  trivia: [
    {
      title: "名前とは違って高級食材になる",
      text: "生殖巣は食用になり、福井県の「越前うに」などにも利用されています。"
    },
    {
      title: "多くのウニとは違い冬に産卵する",
      text: "本州では冬を中心に産卵する地域が多くあります。"
    }
  ],

  bodyLength: "殻径は4cm前後になる個体が多く見られます。",

  distribution: "日本では九州から北海道まで分布し、朝鮮半島や中国沿岸にも見られます。",

  habitat: "潮間帯から浅い岩礁や、石の多い海底などに生息します。",

  diet: "主にさまざまな海藻を食べます。",

  features: "やや平たい殻を持ち、短く密集した棘に覆われています。",

  behavior: "管足と棘で移動し、海藻を削り取るように食べます。",

  reproduction: "卵と精子を海中へ放出して体外受精し、産卵期は地域によって異なります。",

  identification: "短く密集した棘と、比較的平たい殻が特徴です。",

  nameOrigin: "短い棘に覆われた丸い姿が馬糞を連想させることが名前の由来とされています。",

  humanRelation: "食用になる重要なウニの一つで、加工品にも利用されます。",

  observationPoint: "ほかのウニと比べ、棘が短く密集している点に注目してください。",

  references: [
    "BiSMAL：Hemicentrotus pulcherrimus バフンウニ",
    "World Register of Marine Species：Hemicentrotus pulcherrimus",
    "Agatsuma 2001：Ecology of Hemicentrotus pulcherrimus",
    "Agatsuma 1992：Annual reproductive cycle of Hemicentrotus pulcherrimus"
  ]
},


// ========================================
// sp0117 ヒオウギガイ
// LABO2
// ========================================

{
  id: "sp0117",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒオウギガイ",

  scientificName: "Mimachlamys crassicostata",

  englishName: "Noble scallop",

  classification: [
    "軟体動物門",
    "二枚貝綱",
    "イタヤガイ目",
    "イタヤガイ科",
    "Mimachlamys属"
  ],

  category: "軟体動物",

  image: "images/sp0117.jpg",

  trivia: [
    {
      title: "赤・黄・紫など色がとても豊富",
      text: "橙色、黄色、赤色、紫色など多彩な殻を持ち、天然では褐色の個体も見られます。"
    },
    {
      title: "学名が整理されている",
      text: "以前は Mimachlamys nobilis とされましたが、現在は Mimachlamys crassicostata が受理名です。"
    }
  ],

  bodyLength: "殻長は約10cm前後で、10cmを超える個体もあります。",

  distribution: "日本では房総半島・男鹿半島以南から沖縄などで見られ、西太平洋にも分布します。",

  habitat: "潮間帯下部から水深20〜30mほどの岩礁などに生息します。",

  diet: "植物プランクトンや細かな有機物を、鰓でこし取って食べます。",

  features: "扇形の殻に太い放射状の筋があり、殻の色には大きな個体差があります。",

  behavior: "足糸で岩などへ付着し、強く刺激されると殻を開閉して移動することがあります。",

  reproduction: "有性生殖を行い、産卵時期は地域や環境によって異なります。",

  identification: "扇形の殻と太い放射状の筋が特徴で、殻の色だけでは種を判断できません。",

  nameOrigin: "扇形の殻が、昔の扇「檜扇」に似ることから名付けられました。",

  humanRelation: "食用の二枚貝で、三重県や愛媛県、大分県などで養殖されています。",

  observationPoint: "複数個体の殻の色を見比べ、どれほど色に違いがあるか観察してみてください。",

  references: [
    "World Register of Marine Species：Mimachlamys crassicostata",
    "岡山県版レッドリスト2025：ヒオウギ Mimachlamys crassicostata",
    "神奈川県立生命の星・地球博物館：ヒオウギ",
    "水産無脊椎動物研究所：ヒオウギ",
    "千葉県産貝類目録：Mimachlamys nobilis"
  ]
},


// ========================================
// sp0118 ヒラアワツブガニ
// LABO2
// ========================================

{
  id: "sp0118",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒラアワツブガニ",

  scientificName: "Forestiana granulata",

  englishName: "No widely established English common name",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "オウギガニ科",
    "ヒラアワツブガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0118.jpg",

  trivia: [
    {
      title: "分類名が何度も変わっている",
      text: "古い資料では別の学名も使われますが、現在は Forestiana granulata とされています。"
    },
    {
      title: "甲羅は意外と大きくなる",
      text: "小型種に見えますが、甲幅約3.9cmの個体も記録されています。"
    }
  ],

  bodyLength: "甲幅は数cmほどで、約3.9cmの個体も記録されています。",

  distribution: "日本を含むインド・西太平洋に分布し、相模湾や沖縄などでも確認されています。",

  habitat: "浅い岩礁や、石・サンゴ片の周辺などに生息します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "横に広く平たい甲羅を持ち、表面には細かな粒状の凹凸があります。",

  behavior: "岩や石の周辺で暮らす底生性のカニです。",

  reproduction: "本種固有の詳しい繁殖時期や行動については、十分な情報がありません。",

  identification: "甲羅表面の細かな粒や隆起した部分が特徴ですが、正確な識別には詳しい形態確認が必要です。",

  nameOrigin: "平たい甲羅を持つアワツブガニ類であることが名前に表れています。",

  humanRelation: "一般的な食用種ではなく、カニ類の分類の多様さを知ることができる種類です。",

  observationPoint: "甲羅を上から見て、表面にある細かな粒や隆起した部分に注目してください。",

  references: [
    "WoRMS：Forestiana granulata",
    "Nature of Kagoshima Vol.48：Forestiana granulata",
    "琉球大学：沖縄島中城湾の浅海性短尾類",
    "神奈川県立生命の星・地球博物館：相模湾産蟹類"
  ]
},


// ========================================
// sp0119 ヒライソガニ
// LABO2
// ========================================

{
  id: "sp0119",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒライソガニ",

  scientificName: "Gaetice depressus",

  englishName: "No widely established English common name",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "モクズガニ科",
    "ヒライソガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0119.jpg",

  trivia: [
    {
      title: "海藻だけでなく、水中の餌もこし取る",
      text: "はさみで餌を食べるほか、口元の器官を使って水中の細かな餌を集めることもできます。"
    },
    {
      title: "同じ種類でも色がかなり違う",
      text: "白色、緑褐色、赤褐色など、個体によって体色が大きく異なります。"
    }
  ],

  bodyLength: "甲幅は約2.5〜3cm。",

  distribution: "日本では北海道から九州・沖縄まで広く見られ、中国沿岸などにも分布します。",

  habitat: "岩礁海岸の潮間帯に多く、石の下や岩の隙間などで見られます。",

  diet: "海藻を中心に、微細藻類やプランクトン、動物質なども食べる雑食性です。",

  features: "平たい四角形の甲羅を持ち、体色には非常に大きな個体差があります。",

  behavior: "石の下などに隠れ、はさみや口元の器官を使って餌を取ります。",

  reproduction: "千葉県では4〜10月に抱卵したメスが確認されています。",

  identification: "平たい四角形の甲羅が特徴で、色だけでなく甲羅の形も確認します。",

  nameOrigin: "平たい体をした磯のカニであることが名前に表れています。",

  humanRelation: "食用として重要ではありませんが、日本の磯で身近に見られるカニです。",

  observationPoint: "複数個体の体色を見比べ、口元を細かく動かしていないかも観察してください。",

  references: [
    "BiSMAL: Gaetice depressus ヒライソガニ",
    "新潟大学佐渡自然共生科学センター：ヒライソガニ",
    "Takeda et al. 2024. Feeding behaviour of juveniles of Gaetice depressus",
    "Kanaya et al. 2013. Stable isotope and pigment biomarker evidence of diet sources of Gaetice depressus",
    "飯尾ほか 2008. 千葉県勝浦の潮間帯におけるヒライソガニの体サイズと抱卵期"
  ]
},


// ========================================
// sp0120 ヒメゴンベ
// LABO2
// ========================================

{
  id: "sp0120",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒメゴンベ",

  scientificName: "Cirrhitichthys oxycephalus",

  englishName: "Pixy hawkfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ゴンベ科",
    "Cirrhitichthys属"
  ],

  category: "魚類",

  image: "images/sp0120.jpg",

  trivia: [
    {
      title: "サンゴの上に『座る』ように止まる",
      text: "サンゴや岩の上に体を乗せてじっとし、獲物が近づくと素早く飛び出します。"
    },
    {
      title: "オスは複数のメスと生活する",
      text: "オスは縄張りを持ち、複数のメスと生活することがあります。"
    }
  ],

  bodyLength: "最大で標準体長約15cm。",

  distribution: "インド太平洋に広く分布し、日本では南日本や琉球列島などで見られます。",

  habitat: "サンゴ礁や岩礁に生息し、サンゴの上などを利用します。",

  diet: "小型の甲殻類や小魚を捕食する肉食性です。",

  features: "白から淡い桃色の体に赤い斑紋があり、背びれの棘には糸状の突起があります。",

  behavior: "サンゴや岩の上で獲物を待ち伏せし、近づくと素早く飛び出します。",

  reproduction: "雌雄が水中へ上昇しながら、卵と精子を放出して産卵します。",

  identification: "赤い斑紋と背びれの糸状突起が特徴で、尾びれにも赤い小斑点があります。",

  nameOrigin: "「ヒメ」を含む和名の詳しい由来については、確認できませんでした。",

  humanRelation: "食用にはほとんど利用されませんが、海水観賞魚として流通します。",

  observationPoint: "泳いでいる魚だけでなく、サンゴや岩の上でじっとしている個体を探してみてください。",

  references: [
    "FishBase: Cirrhitichthys oxycephalus",
    "World Register of Marine Species: Cirrhitichthys oxycephalus",
    "宇久井ビジターセンター：ヒメゴンベ",
    "Randall, Allen & Steene 1990. Fishes of the Great Barrier Reef and Coral Sea"
  ]
},


// ========================================
// sp0121 ヒメセミエビ
// LABO2
// ========================================

{
  id: "sp0121",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒメセミエビ",

  scientificName: "Chelarctus cultrifer",

  englishName: "No widely established English common name",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "セミエビ科",
    "Chelarctus属"
  ],

  category: "甲殻類",

  image: "images/sp0121.jpg",

  trivia: [
    {
      title: "昔はScyllarus属だった",
      text: "古い資料では Scyllarus cultrifer とされますが、現在は Chelarctus cultrifer が受理名です。"
    },
    {
      title: "子どもの姿は親と全く違う",
      text: "幼生は透明で平たい姿をしており、変態すると親に近い形になります。"
    }
  ],

  bodyLength: "体長約6cm前後の小型のセミエビ類です。",

  distribution: "日本を含む北西太平洋から西太平洋に分布します。",

  habitat: "岩礁の岩陰や洞窟、転石の下などに生息します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "平たい体と、幅広い板状になった第2触角が特徴です。",

  behavior: "昼間は岩の隙間などに隠れ、夜になると活動します。",

  reproduction: "幼生は透明で平たいフィロソーマ幼生として海中を漂います。",

  identification: "小型で平たい体と、頭の前にある板状の触角が特徴です。",

  nameOrigin: "セミエビ類の中では比較的小型であることが「ヒメ」という名前に関係しています。",

  humanRelation: "大型のセミエビほど水産利用されず、幼生や分類の研究対象になっています。",

  observationPoint: "長い触角ではなく、頭の前にある平たい板状の触角に注目してください。",

  references: [
    "BiSMAL: Chelarctus cultrifer ヒメセミエビ",
    "World Register of Marine Species: Chelarctus cultrifer",
    "八丈ビジターセンター：ヒメセミエビ",
    "Higa & Shokita 2004. Late-stage phyllosoma larvae and metamorphosis of Chelarctus cultrifer"
  ]
},


// ========================================
// sp0122 フタミゾテッポウエビ
// 現地メモ：フタミゾテッポウウオ
// LABO2
// ========================================

{
  id: "sp0122",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フタミゾテッポウエビ",

  scientificName: "Alpheus bisincisus",

  englishName: "Snapping shrimp",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "テッポウエビ科",
    "テッポウエビ属"
  ],

  category: "甲殻類",

  image: "images/sp0122.jpg",

  trivia: [
    {
      title: "大きなはさみで『パチン』と音を出す",
      text: "大きなはさみを素早く閉じ、強い水流と気泡を発生させて大きな音を出します。"
    },
    {
      title: "巣穴がほかの魚にも利用される",
      text: "本種が作った巣穴を、ハゼ類が利用する可能性も報告されています。"
    }
  ],

  bodyLength: "全長約3cmで、大きなはさみは体長の半分近くになることもあります。",

  distribution: "日本を含むインド・西太平洋に広く分布します。",

  habitat: "干潟や浅い岩礁、砂や小石の海底に巣穴を作って暮らします。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "左右のはさみの大きさが大きく異なり、片方が非常に大きくなります。",

  behavior: "巣穴で生活し、大きなはさみを閉じて特徴的な音を出します。",

  reproduction: "メスは受精卵を腹部に抱えて保護します。",

  identification: "片方だけ非常に大きく発達したはさみが特徴です。",

  nameOrigin: "「二溝」は頭部前方の溝に関係する名称とされています。",

  humanRelation: "食用として重要ではありませんが、音を生み出す仕組みや巣穴行動の研究対象になります。",

  observationPoint: "左右のはさみの大きさを比べ、静かなときには「パチン」という音にも注目してください。",

  references: [
    "BiSMAL: Alpheus bisincisus フタミゾテッポウエビ",
    "World Register of Marine Species: Alpheus bisincisus",
    "海の環境NPO法人OWS：フタミゾテッポウエビ",
    "京谷 2026. フタミゾテッポウエビの石川県における初記録"
  ]
},


// ========================================
// sp0123 フトユビシャコモドキ
// LABO2
// ========================================

{
  id: "sp0123",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フトユビシャコモドキ",

  scientificName: "Gonodactylaceus falcatus",

  englishName: "Mantis shrimp",

  classification: [
    "節足動物門",
    "軟甲綱",
    "口脚目",
    "フトユビシャコ科",
    "Gonodactylaceus属"
  ],

  category: "甲殻類",

  image: "images/sp0123.jpg",

  trivia: [
    {
      title: "獲物を『殴って』壊す",
      text: "棍棒状の捕脚を高速で打ち付け、貝や甲殻類の硬い殻を壊します。"
    },
    {
      title: "昔は複数の種類だと思われていた",
      text: "以前は別種とされた名前の一部も、現在では本種の異名として整理されています。"
    }
  ],

  bodyLength: "全長約8cmで、10cm近くになる個体もあります。",

  distribution: "インド太平洋に広く分布し、日本では南日本や小笠原諸島などで見られます。",

  habitat: "浅い岩礁やサンゴ礁に生息し、岩穴や割れ目を巣にします。",

  diet: "貝類や小型甲殻類などを捕食する肉食性です。",

  features: "前方に強力な棍棒状の捕脚を持ち、緑色を帯びる個体が多く見られます。",

  behavior: "岩穴を拠点にし、獲物へ非常に速い打撃を与えます。",

  reproduction: "詳しい繁殖期は不明ですが、シャコ類ではメスが卵を抱えて守ります。",

  identification: "体色だけでなく、捕脚や尾節などの形を確認して識別します。",

  nameOrigin: "和名の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "一般的な食用種ではなく、高速の打撃や視覚などの研究対象になります。",

  observationPoint: "岩穴から出ている前方の捕脚を探し、獲物を取る瞬間の素早い動きに注目してください。",

  references: [
    "東京大学総合研究博物館 シャコ類標本データベース：Gonodactylaceus falcatus",
    "World Register of Marine Species: Gonodactylaceus falcatus",
    "NCBI Taxonomy: Gonodactylaceus falcatus",
    "Teitelbaum 2022. Gonodactylaceus falcatus predation of pearl oyster"
  ]
},


// ========================================
// sp0124 フシザオウニ
// LABO2
// ========================================

{
  id: "sp0124",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フシザオウニ",

  scientificName: "Plococidaris verticillata",

  englishName: "Cidaroid sea urchin",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "オウサマウニ目",
    "オウサマウニ科",
    "フシザオウニ属"
  ],

  category: "棘皮動物",

  image: "images/sp0124.jpg",

  trivia: [
    {
      title: "太い棘に『節』が並ぶ",
      text: "非常に太い棘に輪状の突起が何段も並び、節のある棒のように見えます。"
    },
    {
      title: "殻より棘の方が圧倒的に目立つ",
      text: "殻は直径2〜3cmほどですが、太く長い棘によってかなり大きく見えます。"
    }
  ],

  bodyLength: "殻径は約2〜3cmで、太い棘を含めるとさらに大きく見えます。",

  distribution: "南日本からインド・西太平洋の広い海域に分布します。",

  habitat: "岩礁や転石の下、岩の隙間などに生息します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "数は少ないものの非常に太い棘を持ち、その表面には輪状の突起があります。",

  behavior: "岩の隙間や転石の下などで生活します。",

  reproduction: "卵と精子を海中へ放出して体外受精すると考えられています。",

  identification: "太い棘に何段もの輪状の突起があることが最大の特徴です。",

  nameOrigin: "太い棘に節のような輪状構造があることから名付けられました。",

  humanRelation: "一般的な食用ウニではなく、独特な棘の形を観察できる種類です。",

  observationPoint: "棘を根元から先端まで見て、何段も並ぶ輪状の突起を探してください。",

  references: [
    "BiSMAL: Plococidaris フシザオウニ属",
    "日本動物園水族館協会：フシザオウニ",
    "八丈ビジターセンター：フシザオウニ",
    "WoRMS: Plococidaris verticillata",
    "Schultz: Sea Urchins, Plococidaris verticillata"
  ]
},


// ========================================
// sp0125 ブドウガイ
// LABO2
// ========================================

{
  id: "sp0125",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ブドウガイ",

  scientificName: "Haminoea japonica",

  englishName: "Japanese bubble snail",

  classification: [
    "軟体動物門",
    "腹足綱",
    "頭楯目",
    "ブドウガイ科",
    "Haminoea属"
  ],

  category: "軟体動物",

  image: "images/sp0125.jpg",

  trivia: [
    {
      title: "ウミウシのようでも、薄い貝殻を持つ",
      text: "ウミウシのように見えますが、非常に薄く透明感のある貝殻を持っています。"
    },
    {
      title: "水面へ浮かんで移動することがある",
      text: "水面に浮かび、表面張力や流れを利用して移動することがあります。"
    }
  ],

  bodyLength: "殻長は約1cm。",

  distribution: "北海道南部から九州までの日本沿岸に分布します。",

  habitat: "潮間帯から水深50mほどまでの海藻上などに生息します。",

  diet: "アオサ類などの海藻を食べる藻食性です。",

  features: "黄褐色の軟らかい体に黒い斑点があり、薄い楕円形の殻を持ちます。",

  behavior: "海藻の上を這って餌を食べ、水面へ浮かんで移動することもあります。",

  reproduction: "雌雄同体で、相模湾では6〜7月に採集された個体から卵塊が確認されています。",

  identification: "黄色味のある体の黒点と、非常に薄い貝殻が特徴です。",

  nameOrigin: "丸みのある姿がブドウの実を思わせることが名前に関係すると考えられています。",

  humanRelation: "食用には利用されず、発生や水面を利用した移動行動の研究対象になっています。",

  observationPoint: "ウミウシのように見えたら、背中側に薄い貝殻がないか探してみてください。",

  references: [
    "BiSMAL: Haminoea japonica ブドウガイ",
    "新潟市水族館 マリンピア日本海：ブドウガイ",
    "倉持・倉持 2010. 相模湾産ブドウガイにおいて観察された孵化形態の多型",
    "倉持・倉持 2015. 野外で観察されたブドウガイのフローティング行動"
  ]
},


// ========================================
// sp0126 フナムシ
// LABO2
// ========================================

{
  id: "sp0126",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フナムシ",

  scientificName: "Ligia exotica",

  englishName: "Sea slater",

  classification: [
    "節足動物門",
    "軟甲綱",
    "等脚目",
    "フナムシ科",
    "フナムシ属"
  ],

  category: "甲殻類",

  image: "images/sp0126.jpg",

  trivia: [
    {
      title: "名前は『虫』でも甲殻類",
      text: "昆虫ではなく、ダンゴムシやワラジムシに近い甲殻類です。"
    },
    {
      title: "海辺にいるのに水中生活は苦手",
      text: "海岸の陸上で暮らし、泳ぐことはできますが長時間の水中生活には向きません。"
    }
  ],

  bodyLength: "体長3〜4cmほどで、大型個体では5〜6cmになることがあります。",

  distribution: "日本の本州以南を中心に、世界各地の暖かい海岸にも分布します。",

  habitat: "海岸の岩場や消波ブロック、漁港、護岸などで生活します。",

  diet: "海藻や動物質、海岸にたまった有機物などを食べる雑食性です。",

  features: "平たい体に7対の歩脚があり、大きな眼と長い触角、尾肢が特徴です。",

  behavior: "非常に素早く走り、危険を感じると岩の隙間へ逃げ込みます。",

  reproduction: "メスは腹側の育房で卵を守り、成体に近い姿の幼体を外へ出します。",

  identification: "大きな眼、長い触角、体の後ろに伸びる尾肢が特徴です。",

  nameOrigin: "船着き場や海岸でよく見られることが「船虫」という名前に関係すると考えられています。",

  humanRelation: "釣り餌に利用されることがあり、陸上生活へ適応した甲殻類として研究もされています。",

  observationPoint: "昆虫とは違い、歩くための脚が7対あることを確認してみてください。",

  references: [
    "BiSMAL: Ligia exotica フナムシ",
    "国立科学博物館 標本・資料統合データベース：Ligia exotica",
    "日本大百科全書：フナムシ",
    "瀬戸臨海実験所水族館におけるフナムシの継代飼育展示"
  ]
},


// ========================================
// sp0127 ベッコウイモ
// LABO2
// ========================================

{
  id: "sp0127",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ベッコウイモ",

  scientificName: "Conus fulmen",

  englishName: "Thunderbolt cone",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足目",
    "イモガイ科",
    "イモガイ属"
  ],

  category: "軟体動物",

  image: "images/sp0127.jpg",

  trivia: [
    {
      title: "魚を毒の『銛』で捕まえる",
      text: "銛のように変化した歯舌から毒を注入し、小魚を捕食します。"
    },
    {
      title: "きれいな貝でも素手で触らない",
      text: "毒を持つため、生きた個体を見つけても素手で触らないよう注意が必要です。"
    }
  ],

  bodyLength: "殻高は約6.5cmに達します。",

  distribution: "日本では房総半島以南や瀬戸内海などで見られ、台湾などにも分布します。",

  habitat: "小石の多い砂泥底や、海藻のある岩礁などに生息します。",

  diet: "毒を持つ歯舌を使い、小魚などを捕食します。",

  features: "硬い逆円錐形の殻を持ち、褐色系の模様があります。",

  behavior: "砂や小石の間に隠れ、獲物へ毒のある歯舌を打ち込みます。",

  reproduction: "卵生ですが、自然下での詳しい産卵時期は分かっていません。",

  identification: "よく似たイモガイ類が多く、殻の模様だけでは確実に判断できない場合があります。",

  nameOrigin: "べっ甲のような褐色の殻模様が名前に関係すると考えられています。",

  humanRelation: "毒を持つため、生きた個体の取り扱いには注意が必要です。",

  observationPoint: "殻の模様を観察するだけにして、触らないようにしてください。",

  references: [
    "環境省：ベッコウイモ Conus fulmen",
    "和歌山県レッドデータブック：ベッコウイモ",
    "京都大学総合博物館：ベッコウイモ",
    "日本財団 自然観察指導者養成講座：危険な海岸生物 ベッコウイモ"
  ]
},


// ========================================
// sp0128 ベニクダウミヒドラ
// LABO2
// ========================================

{
  id: "sp0128",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ベニクダウミヒドラ",

  scientificName: "Ectopleura crocea",

  englishName: "Pink-hearted hydroid",

  classification: [
    "刺胞動物門",
    "ヒドロ虫綱",
    "花クラゲ目",
    "クダウミヒドラ科",
    "Ectopleura属"
  ],

  category: "刺胞動物",

  image: "images/sp0128.jpg",

  trivia: [
    {
      title: "1匹に見えて、実はたくさんの個体の集まり",
      text: "小さなポリプが多数集まり、ふさ状の群体を作っています。"
    },
    {
      title: "自由に泳ぐクラゲにならない",
      text: "ヒドロ虫の仲間ですが、一般的なクラゲのような自由遊泳する世代を持ちません。"
    }
  ],

  bodyLength: "群体は高さ10cm前後になることがあります。",

  distribution: "世界各地の温帯海域で見られ、日本からも記録されています。",

  habitat: "岩や貝殻、桟橋、杭などの硬い場所へ付着します。",

  diet: "触手で動物プランクトンなどを捕らえて食べます。",

  features: "細長い茎の先に赤色から桃色の小さなポリプがあり、多数集まって群体を作ります。",

  behavior: "硬い場所へ付着し、多数のポリプが触手を広げて餌を捕らえます。",

  reproduction: "自由遊泳するクラゲ世代を持たず、幼生が基質へ付着して新しい群体を作ります。",

  identification: "細長い茎と、先端にある赤色から桃色の花のようなポリプが特徴です。",

  nameOrigin: "赤色を帯びたポリプを持つクダウミヒドラ類であることが名前に表れています。",

  humanRelation: "桟橋などへ大量に付着することがあり、ヒドロ虫の生活史研究にも利用されます。",

  observationPoint: "群体全体ではなく、一本一本の茎の先にある小さなポリプを見てください。",

  references: [
    "BiSMAL: Ectopleura crocea ベニクダウミヒドラ",
    "World Register of Marine Species: Ectopleura crocea",
    "Animal Diversity Web: Ectopleura crocea",
    "Di Camillo et al. 2013. Seasonal patterns in the abundance of Ectopleura crocea",
    "Smithsonian NEMESIS: Ectopleura crocea"
  ]
},


// ========================================
// sp0129 ベニヒモイソギンチャク
// LABO2
// ========================================

{
  id: "sp0129",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ベニヒモイソギンチャク",

  scientificName: "Calliactis polypus",

  englishName: "No widely established English common name",

  classification: [
    "刺胞動物門",
    "花虫綱",
    "イソギンチャク目",
    "クビカザリイソギンチャク科",
    "Calliactis属"
  ],

  category: "刺胞動物",

  image: "images/sp0129.jpg",

  trivia: [
    {
      title: "ヤドカリの貝殻の上で暮らす",
      text: "ヤドカリが背負う貝殻に付着し、ヤドカリと一緒に移動することがあります。"
    },
    {
      title: "ヤドカリ自身がイソギンチャクを移すこともある",
      text: "ヤドカリがイソギンチャクを外し、自分の貝殻へ付け替えることもあります。"
    }
  ],

  bodyLength: "伸びた状態では高さ数cmで、大型個体では約8cmに達します。",

  distribution: "日本の暖かい沿岸を含むインド・太平洋域などに分布します。",

  habitat: "浅い岩礁やサンゴ礁で、ヤドカリが利用する貝殻の上などに生息します。",

  diet: "触手で小型動物や有機物などを捕らえて食べます。",

  features: "貝殻へ広い基部で付着し、口の周囲には多数の細い触手があります。",

  behavior: "ヤドカリの貝殻に付着することで、ヤドカリと一緒に移動できます。",

  reproduction: "本種固有の詳しい繁殖時期については、十分な情報がありません。",

  identification: "ヤドカリが背負う貝殻に付着していることが重要な手掛かりです。",

  nameOrigin: "「ベニヒモ」という名前の詳しい由来については、確認できませんでした。",

  humanRelation: "食用ではなく、ヤドカリとの共生関係を観察できる代表的な生物です。",

  observationPoint: "イソギンチャクだけでなく、その下の貝殻とヤドカリにも注目してください。",

  references: [
    "日本動物園水族館協会：Calliactis polypus ベニヒモイソギンチャク",
    "宇久井ビジターセンター：ベニヒモイソギンチャク",
    "World Register of Marine Species: Calliactis polypus",
    "Ross 1975. Studies on the behaviour of Calliactis polypus and hermit crabs",
    "Mercurio et al. 2024. The partnerships between hermit crabs and sea anemones"
  ]
},


// ========================================
// sp0130 ベンテンウニ
// LABO2
// ※LABO2内の重複はこのIDへ統合
// ========================================

{
  id: "sp0130",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ベンテンウニ",

  scientificName: "Coelopleurus maculatus",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "アスナロウニ目",
    "アスナロウニ科",
    "ベンテンウニ属"
  ],

  category: "棘皮動物",

  image: "images/sp0130.jpg",

  trivia: [
    {
      title: "ウニとは思えないほどカラフル",
      text: "棘には黄緑色と赤色の横縞が入り、殻にも鮮やかな色や模様があります。"
    },
    {
      title: "本来は少し深い海に多い",
      text: "通常は水深70〜360mほどで見られますが、浅い場所から見つかった例もあります。"
    }
  ],

  bodyLength: "殻の直径は約2〜4cmで、棘を含めるとさらに大きく見えます。",

  distribution: "日本では相模湾から九州、福井県沿岸、富山湾などで確認されています。",

  habitat: "主にやや深い海底に生息しますが、浅い岩礁で見つかることもあります。",

  diet: "藻類や細かな有機物などを利用する雑食性とされています。",

  features: "長い棘には淡い黄緑色と赤色の横帯があり、殻にも鮮やかな模様があります。",

  behavior: "管足と棘を使って海底を移動します。",

  reproduction: "卵と精子を海中へ放出して体外受精すると考えられています。",

  identification: "長い棘に赤色と淡色の横縞が入ることが大きな特徴です。",

  nameOrigin: "美しい姿が弁天を連想させる名称ですが、正式な由来は確認できませんでした。",

  humanRelation: "一般的な食用ウニではなく、美しい色彩から水族館展示や分類研究で注目されます。",

  observationPoint: "棘を一本ずつ見て、赤と淡い黄緑色の横縞を探してみてください。",

  references: [
    "World Register of Marine Species: Coelopleurus maculatus",
    "BiSMAL: Coelopleurus maculatus ベンテンウニ",
    "鳥羽水族館：ベンテンウニ",
    "四国産棘皮動物図鑑：ベンテンウニ",
    "National Museum of Natural Science: Coelopleurus maculatus"
  ]
},
// ========================================
// sp0131 ホシギンポ
// LABO2
// ========================================

{
  id: "sp0131",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ホシギンポ",

  scientificName: "Entomacrodus stellifer",

  englishName: "Stellar rockskipper",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ギンポ目",
    "イソギンポ科",
    "スジギンポ属"
  ],

  category: "魚類",

  image: "images/sp0131.jpg",

  trivia: [
    {
      title: "波の強い磯で暮らす",
      text: "波当たりの強い浅い岩礁や潮だまりで暮らします。"
    },
    {
      title: "海藻だけでなく小動物も食べる",
      text: "藻類だけでなく、小型甲殻類なども食べる雑食性です。"
    }
  ],

  bodyLength: "最大で標準体長約11cm。",

  distribution: "北西太平洋に分布し、日本や沖縄、サイパンなどで見られます。",

  habitat: "波当たりの強い岩礁海岸や潮間帯、潮だまりなどに生息します。",

  diet: "藻類や細かな有機物、小型甲殻類などを食べる雑食性です。",

  features: "細長い体を持ち、頭部には皮膚の突起があり、体に小さな白斑が見られることがあります。",

  behavior: "岩の表面や穴の周辺で暮らし、危険を感じると素早く隙間へ逃げ込みます。",

  reproduction: "岩などに卵を産み付け、孵化した仔魚は水中を漂います。",

  identification: "頭部の皮膚突起と、細長い体に散らばる小さな白点が特徴です。",

  nameOrigin: "体の白い点を星に見立てた説がありますが、詳しい由来は明確ではありません。",

  humanRelation: "食用には利用されませんが、磯の環境へ適応した魚として研究されています。",

  observationPoint: "岩の穴から頭を出している個体を探し、頭部の小さな突起にも注目してください。",

  references: [
    "FishBase: Entomacrodus stellifer",
    "BiSMAL: Entomacrodus stellifer ホシギンポ",
    "Scientific Reports 2022: Gut microbiota analysis of Entomacrodus stellifer",
    "Butler et al. 2012. Diet of combtooth blennies in Kochi and Okinawa, Japan"
  ]
},


// ========================================
// sp0132 ホシキヌタ
// LABO2
// ========================================

{
  id: "sp0132",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ホシキヌタ",

  scientificName: "Lyncina vitellus",

  englishName: "Pacific deer cowrie",

  classification: [
    "軟体動物門",
    "腹足綱",
    "タカラガイ上科",
    "タカラガイ科",
    "Lyncina属"
  ],

  category: "軟体動物",

  image: "images/sp0132.jpg",

  trivia: [
    {
      title: "殻には白い『星』が散らばる",
      text: "光沢のある褐色の殻に、多数の白い丸い斑点があります。"
    },
    {
      title: "生きていると殻が見えなくなることもある",
      text: "外套膜を殻全体へ広げ、美しい殻がほとんど見えなくなることがあります。"
    }
  ],

  bodyLength: "殻長は5cm前後で、大型では7〜8cmほどになります。",

  distribution: "日本では房総半島などより南で見られ、インド・太平洋にも広く分布します。",

  habitat: "潮間帯から水深150mほどまでの岩礁やサンゴ礁などに生息します。",

  diet: "藻類やカイメンなどの付着生物を利用する記録があります。",

  features: "膨らんだ卵形の褐色の殻に、多数の白い斑点があります。",

  behavior: "夜に活動することが多く、昼は岩やサンゴの隙間などに隠れます。",

  reproduction: "本種固有の詳しい繁殖時期や卵保護については、十分な情報がありません。",

  identification: "大きく膨らんだ褐色の殻と、多数の白い斑点が特徴です。",

  nameOrigin: "「ホシ」は白い斑点、「キヌタ」は昔の布を打つ道具の砧に由来するとされています。",

  humanRelation: "一般的な食用貝ではありませんが、美しい殻から貝殻収集の対象になります。",

  observationPoint: "白い斑点だけでなく、生きた個体では殻を覆う外套膜にも注目してください。",

  references: [
    "World Register of Marine Species: Lyncina vitellus",
    "BiSMAL: Lyncina vitellus ホシキヌタ",
    "千葉県立中央博物館分館海の博物館：ホシキヌタ",
    "水産無脊椎動物研究所：ホシキヌタ"
  ]
},


// ========================================
// sp0133 ホンドオニヤドカリ
// LABO2
// ========================================

{
  id: "sp0133",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ホンドオニヤドカリ",

  scientificName: "Aniculus miyakei",

  englishName: "No widely established English common name",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ヤドカリ科",
    "オニヤドカリ属"
  ],

  category: "甲殻類",

  image: "images/sp0133.jpg",

  trivia: [
    {
      title: "かなり大型になるヤドカリ",
      text: "甲長は最大約5cmになり、大きな巻貝の殻を利用します。"
    },
    {
      title: "大きすぎる貝殻を使うこともある",
      text: "体に対して非常に大きく重い貝殻を利用していた個体も報告されています。"
    }
  ],

  bodyLength: "甲長は最大約5cmになる大型のヤドカリです。",

  distribution: "日本では房総半島・新潟県以南から九州まで見られ、台湾にも分布します。",

  habitat: "浅い岩礁を中心に、水深5〜90mほどで見られます。",

  diet: "雑食性と考えられ、海底のさまざまな動植物質を利用します。",

  features: "大型で毛が多く、歩脚には赤褐色や黄色の帯模様があります。",

  behavior: "大きな巻貝の殻を背負い、成長するとより適した殻へ引っ越します。",

  reproduction: "本種固有の詳しい繁殖時期や行動については、十分な情報がありません。",

  identification: "大型で毛が多く、脚に赤褐色などの横帯があることが特徴です。",

  nameOrigin: "日本本土側に生息するオニヤドカリ類であることが「ホンド」という名前に表れています。",

  humanRelation: "一般的な食用種ではなく、大型の巻貝との関係を観察できるヤドカリです。",

  observationPoint: "貝殻だけでなく、外へ出ている脚の長い毛と帯模様に注目してください。",

  references: [
    "World Register of Marine Species: Aniculus miyakei",
    "BiSMAL: Aniculus miyakei ホンドオニヤドカリ",
    "水産無脊椎動物研究所：ホンドオニヤドカリ",
    "久保田 2015. 大形で重い貝殻を背負ったホンドオニヤドカリ"
  ]
},


// ========================================
// sp0134 ホンヤドカリ
// LABO2
// ========================================

{
  id: "sp0134",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ホンヤドカリ",

  scientificName: "Pagurus filholi",

  englishName: "Hermit crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ホンヤドカリ科",
    "ホンヤドカリ属"
  ],

  category: "甲殻類",

  image: "images/sp0134.jpg",

  trivia: [
    {
      title: "右のはさみが大きい",
      text: "右側のはさみが左側より大きく、種類を見分ける手掛かりになります。"
    },
    {
      title: "オスがメスの貝殻を何日もつかんで守る",
      text: "繁殖期のオスはメスの貝殻をつかみ、数日間連れ歩くことがあります。"
    }
  ],

  bodyLength: "体は約2cmで、貝殻を含めるとさらに大きく見えます。",

  distribution: "北海道以南の日本各地の沿岸で広く見られます。",

  habitat: "潮間帯の岩礁や潮だまり、石の多い場所などに生息します。",

  diet: "海藻や細かな有機物、動物質などを食べる雑食性です。",

  features: "右のはさみが大きく、歩脚先端の黒色と白色、触角の白黒模様が特徴です。",

  behavior: "巻貝の空殻を背負い、成長するとより適した殻へ交換します。",

  reproduction: "繁殖期にはオスがメスの殻をつかんで交尾前ガードを行います。",

  identification: "大きな右のはさみ、触角の白黒模様、歩脚先端付近の白色部が特徴です。",

  nameOrigin: "詳しい命名由来については、今回確認した資料では分かっていません。",

  humanRelation: "日本の磯で身近に見られ、殻選びや繁殖行動などの研究にも利用されています。",

  observationPoint: "左右のはさみを比べ、歩脚の黒と白の模様にも注目してください。",

  references: [
    "World Register of Marine Species: Pagurus filholi",
    "BiSMAL: Pagurus filholi ホンヤドカリ",
    "新潟大学佐渡自然共生科学センター：ホンヤドカリ",
    "Wada et al. 2005. Reproductive phenology of sympatric hermit crabs in temperate Japan",
    "Goshima et al. 1998. Mate choice by males of the hermit crab Pagurus filholi"
  ]
},


// ========================================
// sp0135 ボウシュウボラ
// LABO2
// ========================================

{
  id: "sp0135",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ボウシュウボラ",

  scientificName: "Charonia lampas",

  englishName: "Trumpet shell",

  classification: [
    "軟体動物門",
    "腹足綱",
    "タマキビ形類",
    "フジツガイ科",
    "Charonia属"
  ],

  category: "軟体動物",

  image: "images/sp0135.jpg",

  trivia: [
    {
      title: "ヒトデを食べる大型の巻貝",
      text: "長い吻を使い、イトマキヒトデなどのヒトデ類を捕食します。"
    },
    {
      title: "卵の袋は『トックリホオズキ』",
      text: "徳利のような卵嚢を多数産み、これは「トックリホオズキ」と呼ばれます。"
    }
  ],

  bodyLength: "日本では殻長20〜25cm前後になる個体が見られます。",

  distribution: "日本では房総半島・山口県以南などの暖かい海で見られます。",

  habitat: "潮間帯から水深50mほどまでの岩礁に生息します。",

  diet: "肉食性で、主にヒトデ類などを捕食します。",

  features: "大型で厚い殻を持ち、表面には大きなこぶと褐色の模様があります。",

  behavior: "海底を這ってヒトデなどを探し、産卵後に卵嚢の近くへとどまることもあります。",

  reproduction: "徳利形の卵嚢を多数産み付け、親がしばらく周囲にいることがあります。",

  identification: "大型でごつごつした殻と、褐色の模様が特徴です。",

  nameOrigin: "「房州」と呼ばれた現在の千葉県南部との関係から付けられた和名です。",

  humanRelation: "中腸腺からテトロドトキシンによる中毒例があり、食用には注意が必要です。",

  observationPoint: "ヒトデが近くにいれば、長い吻を伸ばして捕食していないか観察してください。",

  references: [
    "World Register of Marine Species: Charonia lampas",
    "BiSMAL: Charonia lampas / Charonia lampas sauliae",
    "厚生労働省：自然毒のリスクプロファイル ボウシュウボラ",
    "東京動物園協会：ヒトデを食べるホラガイ",
    "鳥羽水族館 貝類コレクション：ボウシュウボラ"
  ]
},


// ========================================
// sp0136 マガキ
// LABO2
// ========================================

{
  id: "sp0136",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "マガキ",

  scientificName: "Magallana gigas",

  englishName: "Pacific oyster",

  classification: [
    "軟体動物門",
    "二枚貝綱",
    "カキ目",
    "イタボガキ科",
    "Magallana属"
  ],

  category: "軟体動物",

  image: "images/sp0136.jpg",

  trivia: [
    {
      title: "一生ほぼ同じ場所で暮らす",
      text: "幼生は泳ぎますが、岩などへ付着した後はほとんど移動せずに暮らします。"
    },
    {
      title: "水をこして植物プランクトンを食べる",
      text: "海水を鰓へ通し、植物プランクトンや細かな有機物をこし取って食べます。"
    }
  ],

  bodyLength: "標準的な殻高は約15cmで、環境によって大きさや形が変わります。",

  distribution: "日本を含む東アジア原産で、養殖によって現在は世界各地にも広がっています。",

  habitat: "内湾や河口、潮間帯などで岩やほかのカキに付着して暮らします。",

  diet: "植物プランクトンや細かな有機物を鰓でこし取って食べます。",

  features: "左右で形の異なる粗い殻を持ち、周囲の環境に合わせて不規則な形に成長します。",

  behavior: "成体は移動せず、殻を開いて海水を取り込みながら呼吸と摂餌を行います。",

  reproduction: "主に初夏から夏に産卵し、幼生は水中を漂った後に岩などへ付着します。",

  identification: "殻の形には大きな個体差があり、環境によって姿が大きく変わります。",

  nameOrigin: "「真牡蠣」と書き、日本で代表的なカキとして古くから利用されてきた名称です。",

  humanRelation: "日本を代表する養殖二枚貝の一つで、生食や焼きガキ、フライなどに利用されます。",

  observationPoint: "複数個体の殻を見比べ、同じ種類でも形が大きく違う点に注目してください。",

  references: [
    "BiSMAL: Magallana gigas",
    "World Register of Marine Species: Magallana gigas",
    "環境省 せとうちネット：カキ",
    "国土交通省：マガキ",
    "宮城県水産技術総合センター：マガキ"
  ]
},


// ========================================
// sp0137 マツカサウニ
// LABO2
// ========================================

{
  id: "sp0137",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "マツカサウニ",

  scientificName: "Eucidaris metularia",

  englishName: "Ten-lined urchin",

  classification: [
    "棘皮動物門",
    "ウニ綱",
    "オウサマウニ目",
    "オウサマウニ科",
    "マツカサウニ属"
  ],

  category: "棘皮動物",

  image: "images/sp0137.jpg",

  trivia: [
    {
      title: "普通のウニとは全く違う太い棘",
      text: "細い針ではなく、鉛筆のように太く先端の丸い棘を持ちます。"
    },
    {
      title: "とても古いタイプのウニの仲間",
      text: "オウサマウニ目は、現生ウニの中でも古い特徴を多く残すグループです。"
    }
  ],

  bodyLength: "殻の直径は最大約3cmで、太い棘を含めるとさらに大きく見えます。",

  distribution: "インド・西太平洋の暖かい海に広く分布し、日本でも見られます。",

  habitat: "浅いサンゴ礁や岩礁、岩の隙間などに生息します。",

  diet: "藻類や細かな有機物、付着生物などを利用します。",

  features: "太く円筒形の棘を持ち、棘には淡色と赤褐色などの横帯があります。",

  behavior: "太い棘と管足を使い、岩礁の上をゆっくり移動します。",

  reproduction: "卵と精子を海中へ放出して体外受精し、幼生は水中を漂います。",

  identification: "非常に太く、先端が丸い主棘が最大の特徴です。",

  nameOrigin: "太い棘を持つ姿が松かさを思わせますが、正式な由来は確認できませんでした。",

  humanRelation: "一般的な食用ウニではなく、ウニの進化や体の構造を知るうえで興味深い種類です。",

  observationPoint: "ほかのウニと棘を比べ、針ではなく太い棒のような形に注目してください。",

  references: [
    "World Register of Marine Species: Eucidaris metularia",
    "BiSMAL: Eucidaris マツカサウニ属",
    "四国産棘皮動物図鑑：マツカサウニ",
    "Lessios et al. 1999. Phylogeography of the pantropical sea urchin Eucidaris",
    "World Echinoidea Database: Eucidaris metularia"
  ]
},


// ========================================
// sp0138 マダラウミウシ
// LABO2
// ========================================

{
  id: "sp0138",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "マダラウミウシ",

  scientificName: "Dendrodoris fumata",

  englishName: "Smoky sucking dorid",

  classification: [
    "軟体動物門",
    "腹足綱",
    "裸鰓目",
    "クロシタナシウミウシ科",
    "Dendrodoris属"
  ],

  category: "軟体動物",

  image: "images/sp0138.jpg",

  trivia: [
    {
      title: "同じ種類とは思えないほど色が変わる",
      text: "黄白色から赤褐色、ほぼ黒色まで、個体によって体色が大きく異なります。"
    },
    {
      title: "歯で削らず、カイメンを吸って食べる",
      text: "歯舌を持たず、特殊な口でカイメンの組織を吸い込むように食べます。"
    }
  ],

  bodyLength: "大型個体では体長約10cmになり、通常は3〜4cmほどです。",

  distribution: "日本を含むインド洋や太平洋の非常に広い海域に分布します。",

  habitat: "浅い岩礁や干潟周辺、砂や小石が混じる海底などに生息します。",

  diet: "主にカイメン類を、特殊な口で吸い込むようにして食べます。",

  features: "体色の個体差が大きく、背中にはまだら模様と大きな枝状の二次鰓があります。",

  behavior: "海底や岩の表面をゆっくり這いながら、餌となるカイメンを探します。",

  reproduction: "雌雄同体で、交尾後にリボン状の卵塊を産みます。",

  identification: "体色だけでなく、不規則な斑紋や触角、二次鰓も合わせて確認します。",

  nameOrigin: "体に不規則なまだら模様があることから「マダラウミウシ」と呼ばれます。",

  humanRelation: "一般的な食用生物ではなく、色彩変異や特殊な食べ方の研究対象にもなっています。",

  observationPoint: "色だけで判断せず、背中後方の大きな二次鰓とまだら模様にも注目してください。",

  references: [
    "World Register of Marine Species: Dendrodoris fumata",
    "BiSMAL: Dendrodoris fumata",
    "水産無脊椎動物研究所：マダラウミウシ",
    "SEASLUG.WORLD：Dendrodoris fumata",
    "CIESM Atlas: Dendrodoris fumata"
  ]
},


// ========================================
// sp0139 マンリョウウミウシ
// LABO2
// ========================================

{
  id: "sp0139",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "マンリョウウミウシ",

  scientificName: "Carminodoris armata",

  englishName: "No widely established English common name",

  classification: [
    "軟体動物門",
    "腹足綱",
    "裸鰓目",
    "ツヅレウミウシ科",
    "Carminodoris属"
  ],

  category: "軟体動物",

  image: "images/sp0139.jpg",

  trivia: [
    {
      title: "背中が『健康サンダル』のよう",
      text: "背中に丸い突起が多数あり、伊豆では「健康サンダル」と呼ばれることもあります。"
    },
    {
      title: "学名が何度か整理されている",
      text: "別の属に分類された時期もありますが、現在は Carminodoris armata が受理名です。"
    }
  ],

  bodyLength: "体長15cmほどに達する大型のウミウシです。",

  distribution: "日本の本州や八丈島、韓国などから記録されています。",

  habitat: "砂や小石が混じる水深10〜20mほどの海底などで見られます。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "幅広い褐色の体を持ち、背中には大小の丸い突起が多数あります。",

  behavior: "大きな腹足を使って、海底をゆっくり這って移動します。",

  reproduction: "雌雄同体で、春ごろに交接して橙色の卵塊を産む例があります。",

  identification: "大型で幅広い体と、背中を覆う多数のこぶ状突起が特徴です。",

  nameOrigin: "「マンリョウ」という和名の詳しい由来については、確認できませんでした。",

  humanRelation: "食用ではありませんが、大型で独特な姿からダイバーにも注目されます。",

  observationPoint: "背中の突起をよく見て、形や大きさの違いに注目してください。",

  references: [
    "SEASLUG.WORLD: Carminodoris armata",
    "Zoological Journal of the Linnean Society 2025: Discodorididae systematics",
    "竹野スノーケルセンター：マンリョウウミウシ",
    "Baba 1993. Two new species of Carminodoris from Japan"
  ]
},


// ========================================
// sp0140 ミガキボラ
// LABO2
// ========================================

{
  id: "sp0140",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ミガキボラ",

  scientificName: "Kelletia lischkei",

  englishName: "Lischke's whelk",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足目",
    "ミガキボラ属"
  ],

  category: "軟体動物",

  image: "images/sp0140.jpg",

  trivia: [
    {
      title: "卵の袋には名前がある",
      text: "半球形の卵嚢を産み、この卵嚢は「マンジュウホオズキ」と呼ばれます。"
    },
    {
      title: "名前の通り表面が比較的なめらか",
      text: "厚い白っぽい殻を持ち、全体的に磨いたような印象があります。"
    }
  ],

  bodyLength: "殻高は通常10cm前後で、大型では約14cmになります。",

  distribution: "日本では陸奥湾以南で見られ、朝鮮半島周辺にも分布します。",

  habitat: "岩礁から砂や泥の混じる海底まで、幅広い環境に生息します。",

  diet: "小動物や動物の死骸などを利用する肉食・腐肉食性です。",

  features: "細長く厚い白色の殻を持ち、表面には低いこぶが並びます。",

  behavior: "海底を這いながら餌を探し、死んだ動物などのにおいに集まることがあります。",

  reproduction: "半球形の卵嚢を岩などへ産み付けます。",

  identification: "大型で重厚な白い殻と、表面に並ぶ低いこぶが特徴です。",

  nameOrigin: "殻表面が磨いたようになめらかに見えることが名前に関係するとされています。",

  humanRelation: "主要な水産物ではありませんが、食用にされることがあります。",

  observationPoint: "殻表面の低いこぶと細かな筋に注目し、卵嚢がないかも探してみてください。",

  references: [
    "World Register of Marine Species: Kelletia lischkei",
    "京都大学総合博物館：ミガキボラ",
    "新潟大学佐渡自然共生科学センター：Kelletia lischkei",
    "日本大百科全書：ミガキボラ",
    "Frontiers in Marine Science 2021: trophic structure including Kelletia lischkei"
  ]
},


// ========================================
// sp0141 ミドリイソギンチャク
// LABO2
// ========================================

{
  id: "sp0141",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ミドリイソギンチャク",

  scientificName: "Anthopleura fuscoviridis",

  englishName: "No widely established English common name",

  classification: [
    "刺胞動物門",
    "花虫綱",
    "六放サンゴ亜綱",
    "イソギンチャク目",
    "ウメボシイソギンチャク科",
    "Anthopleura属"
  ],

  category: "刺胞動物",

  image: "images/sp0141.jpg",

  trivia: [
    {
      title: "緑色なのは触手とは限らない",
      text: "触手の色はさまざまですが、体の側面には鮮やかな緑色の吸着イボがあります。"
    },
    {
      title: "触手は約96本",
      text: "口の周囲には多数の触手があり、約96本と紹介されています。"
    }
  ],

  bodyLength: "口盤は数cmほどで、直径10cmほどになる個体もあります。",

  distribution: "北海道南西部以南の日本沿岸で見られます。",

  habitat: "潮間帯から浅い岩礁の岩の割れ目などに生息します。",

  diet: "触手の刺胞を使い、小型動物やプランクトンなどを捕らえて食べます。",

  features: "暗色の体側に鮮やかな緑色の吸着イボが並び、触手の色には個体差があります。",

  behavior: "岩へ付着して暮らし、刺激を受けると触手や体を縮めます。",

  reproduction: "本種固有の詳しい繁殖時期や方法については、十分な情報がありません。",

  identification: "体の側面に並ぶ鮮やかな緑色の吸着イボが特徴です。",

  nameOrigin: "体側にある鮮やかな緑色の吸着イボが名前に表れています。",

  humanRelation: "一般的な食用生物ではなく、日本の磯で見られる身近なイソギンチャクです。",

  observationPoint: "上からだけでなく横から見て、体の側面に並ぶ緑色のイボを探してください。",

  references: [
    "World Register of Marine Species: Anthopleura fuscoviridis",
    "BiSMAL: Anthopleura fuscoviridis",
    "新潟大学佐渡自然共生科学センター：ミドリイソギンチャク",
    "新潟市水族館 マリンピア日本海：ミドリイソギンチャク",
    "生物多様性ふくおかウェブセンター：ミドリイソギンチャク"
  ]
},


// ========================================
// sp0142 メダカラ
// LABO2
// ========================================

{
  id: "sp0142",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "メダカラ",

  scientificName: "Purpuradusta gracilis",

  englishName: "Graceful cowrie",

  classification: [
    "軟体動物門",
    "腹足綱",
    "タカラガイ上科",
    "タカラガイ科",
    "Purpuradusta属"
  ],

  category: "軟体動物",

  image: "images/sp0142.jpg",

  trivia: [
    {
      title: "昔の学名ではCypraeaだった",
      text: "古い資料では Cypraea gracilis とされますが、現在は Purpuradusta gracilis が受理名です。"
    },
    {
      title: "生きていると殻を体で覆う",
      text: "生きた個体では、朱色に近い外套膜が殻を覆うことがあります。"
    }
  ],

  bodyLength: "殻高は約2cmの小型のタカラガイです。",

  distribution: "日本では陸奥湾以南から沖縄などまで見られます。",

  habitat: "浅い沿岸の岩礁や石の周辺などに生息します。",

  diet: "本種固有の詳しい食性については、十分な情報がありません。",

  features: "小さく滑らかな灰褐色の殻を持ち、褐色の不規則な模様があります。",

  behavior: "海底を這って移動し、外套膜を殻の表面へ広げることがあります。",

  reproduction: "本種固有の詳しい繁殖時期や卵保護については、十分な情報がありません。",

  identification: "約2cmの小型の殻と、灰褐色の地に入る褐色模様が特徴です。",

  nameOrigin: "「メダカラ」の詳しい和名由来については、確認できませんでした。",

  humanRelation: "主要な食用貝ではなく、磯で観察できる小型のタカラガイです。",

  observationPoint: "生きた個体では、殻を覆う朱色に近い外套膜にも注目してください。",

  references: [
    "World Register of Marine Species: Purpuradusta gracilis",
    "BiSMAL: Purpuradusta gracilis メダカラ",
    "石川県レッドデータブック：メダカラ",
    "水産無脊椎動物研究所：メダカラ"
  ]
},


// ========================================
// sp0143 モクズガニ
// LABO2
// ========================================

{
  id: "sp0143",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "モクズガニ",

  scientificName: "Eriocheir japonica",

  englishName: "Japanese mitten crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "モクズガニ科",
    "モクズガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0143.jpg",

  trivia: [
    {
      title: "川で育つのに、繁殖は海へ下る",
      text: "主に川で成長しますが、成熟すると河口や海へ下って繁殖します。"
    },
    {
      title: "はさみが本当に『藻くず』のよう",
      text: "成体のはさみには長い毛が密生し、藻のくずのように見えます。"
    }
  ],

  bodyLength: "大型個体では甲幅7〜8cmほどになります。",

  distribution: "日本各地や朝鮮半島、中国沿岸、台湾などに分布します。",

  habitat: "河口から河川の上流まで幅広く暮らし、成熟すると海へ下ります。",

  diet: "小動物や動物の死骸、植物質などを食べる雑食性です。",

  features: "暗褐色の甲羅を持ち、成体のはさみには長く柔らかな毛が密生します。",

  behavior: "主に夜に活動し、繁殖期になると川を下って海へ向かいます。",

  reproduction: "河口や海で繁殖し、幼生は海で成長した後に川へ戻ります。",

  identification: "はさみに密生する長い毛が最大の特徴です。",

  nameOrigin: "はさみの毛が「藻くず」のように見えることから名付けられました。",

  humanRelation: "日本各地で食用になり、「ズガニ」「ツガニ」などの地方名でも知られます。",

  observationPoint: "まずはさみを見て、ふさふさした長い毛を探してください。",

  references: [
    "World Register of Marine Species: Eriocheir japonica",
    "BiSMAL: Eriocheir japonica モクズガニ",
    "神奈川県：淡水魚類図鑑 モクズガニ",
    "岡山県水産研究所：モクズガニ",
    "小林哲 1999. モクズガニの繁殖生態"
  ]
},


// ========================================
// sp0144 モクズショイ
// LABO2
// ========================================

{
  id: "sp0144",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "モクズショイ",

  scientificName: "Camposcia retusa",

  englishName: "Decorator crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "クモガニ科",
    "モクズショイ属"
  ],

  category: "甲殻類",

  image: "images/sp0144.jpg",

  trivia: [
    {
      title: "海藻やカイメンを自分で体に貼り付ける",
      text: "海藻やカイメンなどを自分の体へ取り付け、周囲に溶け込みます。"
    },
    {
      title: "隠れ場所が少ないほど飾り付けが増える",
      text: "隠れ場所が少ない環境ほど、体へ多くの物を付けることが確認されています。"
    }
  ],

  bodyLength: "甲羅は最大約3cmで、脚を広げると10cm前後になることがあります。",

  distribution: "紅海からインド洋、西太平洋まで広く分布し、日本でも見られます。",

  habitat: "浅いサンゴ礁や岩礁、海草藻場などに生息します。",

  diet: "詳しい食性は不明ですが、小動物や有機物などを利用すると考えられています。",

  features: "細長い脚に鉤状の毛があり、そこへ海藻やカイメンなどを取り付けます。",

  behavior: "周囲の物をはさみで切り取り、自分の体へ付けてカモフラージュします。",

  reproduction: "本種固有の詳しい繁殖時期については、十分な情報がありません。",

  identification: "体を海藻やカイメンなどで覆っていることが大きな特徴です。",

  nameOrigin: "海藻のくずなどを体に「背負う」姿からモクズショイと呼ばれます。",

  humanRelation: "食用にはほとんど利用されず、カモフラージュ行動の研究対象にもなっています。",

  observationPoint: "カニそのものではなく、動いている海藻やカイメンを探してみてください。",

  references: [
    "World Register of Marine Species: Camposcia retusa",
    "BiSMAL: Camposcia retusa モクズショイ",
    "Western Australian Museum: Camposcia retusa",
    "Brooker et al. 2018. Shelter availability mediates decorating in Camposcia retusa",
    "八丈ビジターセンター：モクズショイ"
  ]
},


// ========================================
// sp0145 モミジガイ
// LABO2
// ========================================

{
  id: "sp0145",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "モミジガイ",

  scientificName: "Astropecten scoparius",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ヒトデ綱",
    "モミジガイ目",
    "モミジガイ科",
    "モミジガイ属"
  ],

  category: "棘皮動物",

  image: "images/sp0145.jpg",

  trivia: [
    {
      title: "管足に吸盤がない",
      text: "管足には吸盤がなく、砂の上や砂の中を移動する生活に適しています。"
    },
    {
      title: "小さな貝を丸ごと食べる",
      text: "小型の巻貝や二枚貝などを捕食します。"
    }
  ],

  bodyLength: "腕の長さは約5〜6cm。",

  distribution: "日本では北海道南西部以南で見られ、東アジアからインド洋方面にも分布します。",

  habitat: "干潟から水深数十mほどまでの砂底や砂泥底に生息します。",

  diet: "小型の巻貝や二枚貝などを捕食する肉食性です。",

  features: "平たい体に5本の腕があり、腕の縁には板状の構造と細い棘があります。",

  behavior: "砂の表面を移動し、体を浅く砂の中へ埋めることもあります。",

  reproduction: "卵と精子を海中へ放出し、幼生期を経て稚ヒトデへ変態します。",

  identification: "トゲモミジガイより腕の縁の大きな棘が目立たないことが特徴です。",

  nameOrigin: "5本の腕を広げた姿がモミジの葉に似ることから名付けられました。",

  humanRelation: "食用には利用されず、二枚貝の稚貝を食べるため害敵になることがあります。",

  observationPoint: "砂へ少し潜った個体を探し、腕の縁にある棘にも注目してください。",

  references: [
    "World Register of Marine Species: Astropecten scoparius",
    "BiSMAL: Astropecten scoparius モミジガイ",
    "水産無脊椎動物研究所：モミジガイ",
    "Fujita et al. 2003. Feeding habits of Astropecten scoparius in Ise Bay",
    "Oguro et al. 1976. Development and metamorphosis of Astropecten scoparius"
  ]
},


// ========================================
// sp0146 ヤツデヒトデ
// LABO2
// ========================================

{
  id: "sp0146",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヤツデヒトデ",

  scientificName: "Coscinasterias acutispina",

  englishName: "Multiarmed sea star",

  classification: [
    "棘皮動物門",
    "ヒトデ綱",
    "マヒトデ目",
    "マヒトデ科",
    "ヤツデヒトデ属"
  ],

  category: "棘皮動物",

  image: "images/sp0146.jpg",

  trivia: [
    {
      title: "名前は八手でも、腕は8本とは限らない",
      text: "腕は通常6〜10本ほどあり、同じ種類でも本数が異なります。"
    },
    {
      title: "自分の体を二つに分けて増える",
      text: "体を二つに分裂させ、それぞれが足りない腕を再生して増えることができます。"
    }
  ],

  bodyLength: "腕の長さは約6cmで、腕の本数や再生状態によって大きさが変わります。",

  distribution: "日本では本州中部以南などで見られ、奄美大島などにも分布します。",

  habitat: "潮間帯から浅い岩礁や転石の多い場所などに生息します。",

  diet: "小型の貝類などを捕食し、アワビの稚貝を食べることもあります。",

  features: "6〜10本ほどの細長い腕を持ち、褐色の体に青や白の斑点が入ることがあります。",

  behavior: "岩や石の裏などで暮らし、餌を見つけると管足を使って近づきます。",

  reproduction: "有性生殖のほか、体を二つに分裂させて増える無性生殖も行います。",

  identification: "腕が5本ではなく、6〜10本ほどあることが分かりやすい特徴です。",

  nameOrigin: "多数の腕を「八つ手」に見立てた名前ですが、必ず8本という意味ではありません。",

  humanRelation: "アワビの稚貝を食べるため、地域によっては漁業上の害敵になることがあります。",

  observationPoint: "腕を実際に数え、長さが不揃いな再生途中の腕がないかも見てください。",

  references: [
    "World Register of Marine Species: Coscinasterias acutispina",
    "新潟大学佐渡自然共生科学センター：ヤツデヒトデ",
    "京都府：丹後の海の生き物 ヤツデヒトデ",
    "Mladenov et al. 2008. Patterns of asexual reproduction in Coscinasterias acutispina",
    "Life cycle of Coscinasterias acutispina in laboratory culture"
  ]
},


// ========================================
// sp0147 ヤマトホンヤドカリ
// LABO2
// ========================================

{
  id: "sp0147",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヤマトホンヤドカリ",

  scientificName: "Pagurus japonicus",

  englishName: "Japanese hermit crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ホンヤドカリ科",
    "ホンヤドカリ属"
  ],

  category: "甲殻類",

  image: "images/sp0147.jpg",

  trivia: [
    {
      title: "大きくなるとサザエの殻も使う",
      text: "大型個体ではサザエの空殻を利用することもあります。"
    },
    {
      title: "昔の『ケブカホンヤドカリ』は同じ種",
      text: "以前別種とされた「ケブカホンヤドカリ」は、現在では本種の異名として整理されています。"
    }
  ],

  bodyLength: "大型個体では甲長約2.5cmで、貝殻や脚を含めるとさらに大きく見えます。",

  distribution: "日本各地の沿岸のほか、中国北部、韓国、台湾北東部にも分布します。",

  habitat: "潮間帯から水深30mほどまでの岩礁や砂泥底に生息します。",

  diet: "海底の細かな有機物や動植物質などを利用する雑食性と考えられています。",

  features: "右のはさみが大きく、眼柄の中央が赤色で、歩脚先端には白色部があります。",

  behavior: "巻貝の空殻を背負い、大型になるとサザエなどの殻も利用します。",

  reproduction: "メスは受精卵を腹部に抱えて保護します。",

  identification: "大きな右のはさみ、赤色の眼柄中央部、歩脚先端の白色部が特徴です。",

  nameOrigin: "「ヤマト」の詳しい命名経緯については、今回確認した資料では分かっていません。",

  humanRelation: "一般的な食用種ではなく、ヤドカリと巻貝の空殻との関係を観察できます。",

  observationPoint: "左右のはさみを比べ、どんな種類の貝殻を利用しているかにも注目してください。",

  references: [
    "BiSMAL: Pagurus japonicus ヤマトホンヤドカリ",
    "World Register of Marine Species: Pagurus japonicus",
    "新潟大学佐渡自然共生科学センター：ヤマトホンヤドカリ",
    "Komai 2003. Identities of Pagurus japonicus, P. similis and P. barbatus",
    "島根大学：山陰地方の異尾類目録"
  ]
},


// ========================================
// sp0148 ユウレイボヤ
// LABO2
// ========================================

{
  id: "sp0148",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ユウレイボヤ",

  scientificName: "Ciona savignyi",

  englishName: "Pacific transparent sea squirt",

  classification: [
    "脊索動物門",
    "尾索動物亜門",
    "ホヤ綱",
    "ユウレイボヤ科",
    "ユウレイボヤ属"
  ],

  category: "尾索動物",

  image: "images/sp0148.jpg",

  trivia: [
    {
      title: "名前通り体がかなり透明",
      text: "透明な体を持ち、内部の器官が外から透けて見えることがあります。"
    },
    {
      title: "大人は動かないのに、子どもは泳ぐ",
      text: "成体は岩などへ付着しますが、幼生はオタマジャクシのような姿で泳ぎます。"
    }
  ],

  bodyLength: "体長約10cmまで成長します。",

  distribution: "日本沿岸に自然分布し、国外では外来種として広がった地域もあります。",

  habitat: "岩や岸壁、桟橋、ロープなど、さまざまな場所へ付着します。",

  diet: "植物プランクトンや細かな有機物を、体内の鰓でこし取って食べます。",

  features: "透明な円筒形の体を持ち、内部の消化管などが透けて見えることがあります。",

  behavior: "成体は移動せず、海水を体内へ通して餌をこし取ります。",

  reproduction: "雌雄同体で、卵と精子を水中へ放出して繁殖します。",

  identification: "透明な円筒形の体が特徴ですが、近縁種との識別には内部構造なども確認します。",

  nameOrigin: "透明な体が幽霊を思わせることが名前に関係すると考えられています。",

  humanRelation: "発生生物学や遺伝学の研究に広く利用されています。",

  observationPoint: "透明な体をよく見て、水の出入口や内部の器官を探してみてください。",

  references: [
    "World Register of Marine Species: Ciona savignyi",
    "BiSMAL: Ciona savignyi ユウレイボヤ",
    "新潟市水族館 マリンピア日本海：ユウレイボヤ",
    "Jiang & Smith 2005. Self- and Cross-Fertilization in Ciona savignyi",
    "Ciona Genetics",
    "Metamorphosis of the invasive ascidian Ciona savignyi"
  ]
},

// ========================================
// sp0149 ユビナガホンヤドカリ
// LABO2
// ========================================

{
  id: "sp0149",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ユビナガホンヤドカリ",

  scientificName: "Pagurus minutus",

  englishName: "No widely established English common name",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "ホンヤドカリ科",
    "ホンヤドカリ属"
  ],

  category: "甲殻類",

  image: "images/sp0149.jpg",

  trivia: [
    {
      title: "干潟や河口にも暮らせるヤドカリ",
      text: "海だけでなく、塩分が低くなる河口や干潟でも暮らすことができます。"
    },
    {
      title: "古い学名はPagurus dubius",
      text: "古い資料では Pagurus dubius とされますが、現在は Pagurus minutus の異名です。"
    }
  ],

  bodyLength: "甲長1cm前後の小型のヤドカリです。",

  distribution: "日本沿岸を含む北西太平洋に分布します。",

  habitat: "内湾や河口、干潟、浅い砂泥底などに生息します。",

  diet: "藻類や細かな有機物、動物質などを食べる雑食性です。",

  features: "右のはさみが大きく、比較的細長い歩脚を持ちます。",

  behavior: "巻貝の空殻を背負い、成長するとより大きな殻へ引っ越します。",

  reproduction: "土佐湾では主に冬に抱卵したメスが見られ、複数回産卵することもあります。",

  identification: "小型で右のはさみが大きく、細長い歩脚が特徴です。",

  nameOrigin: "歩脚が細長いことが「ユビナガ」という名前に関係しています。",

  humanRelation: "食用にはほとんど利用されず、干潟や河口の生態研究にも使われています。",

  observationPoint: "貝殻だけでなく、細長い脚と左右のはさみの大きさを見比べてください。",

  references: [
    "BiSMAL: Pagurus minutus ユビナガホンヤドカリ",
    "日本動物園水族館協会：ユビナガホンヤドカリ",
    "OWS 江奈湾干潟生きもの図鑑：ユビナガホンヤドカリ",
    "Koga & Fukuda 2008. Distribution, Sex Ratio and Body Size of Three Hermit Crab Species",
    "Wada et al. 2005. Reproductive phenology of sympatric hermit crabs in temperate Japan"
  ]
},


// ========================================
// sp0150 リッテルボヤ
// LABO2
// ========================================

{
  id: "sp0150",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "リッテルボヤ",

  scientificName: "Halocynthia ritteri",

  englishName: "No widely established English common name",

  classification: [
    "脊索動物門",
    "尾索動物亜門",
    "ホヤ綱",
    "マボヤ目",
    "マボヤ科",
    "マボヤ属"
  ],

  category: "尾索動物",

  image: "images/sp0150.jpg",

  trivia: [
    {
      title: "魚が体の中に卵を産むことがある",
      text: "アナハゼ類などの魚が、体内の空間を産卵場所として利用することがあります。"
    },
    {
      title: "現在も分類上の扱いに違いがある",
      text: "Halocynthia ritteri とする資料と、別種の異名とする資料があります。"
    }
  ],

  bodyLength: "体長約8cm。",

  distribution: "日本海沿岸など日本周辺から記録されています。",

  habitat: "浅い岩礁や漁港の岸壁など、硬い場所へ付着して暮らします。",

  diet: "植物プランクトンや細かな有機物を、海水と一緒に取り込んで食べます。",

  features: "袋状の体を持ち、水の出入口の周囲には多数の棘状突起があります。",

  behavior: "成体は移動せず、海水を取り込んで餌をこし取ります。",

  reproduction: "幼生は泳ぐことができますが、詳しい産卵時期については十分な情報がありません。",

  identification: "入水孔と出水孔の周囲にある多数の棘状突起が特徴です。",

  nameOrigin: "種小名 ritteri という人名に由来する和名です。",

  humanRelation: "一般的な食用種ではなく、魚が産卵場所として利用することもある興味深いホヤです。",

  observationPoint: "体の上にある2つの穴と、その周囲のトゲ状突起を探してください。",

  references: [
    "BiSMAL: Halocynthia ritteri",
    "新潟大学佐渡自然共生科学センター：リッテルボヤ",
    "Nishikawa 2017. Taxonomy of Ascidians in Japan",
    "World Register of Marine Species: Halocynthia ritteri / Halocynthia igaboja"
  ]
},


// ========================================
// sp0151 レイシガイ
// LABO2
// ========================================

{
  id: "sp0151",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "レイシガイ",

  scientificName: "Reishia bronni",

  englishName: "Rock shell",

  classification: [
    "軟体動物門",
    "腹足綱",
    "新腹足目",
    "アッキガイ科",
    "Reishia属"
  ],

  category: "軟体動物",

  image: "images/sp0151.jpg",

  trivia: [
    {
      title: "フジツボや二枚貝を襲う肉食貝",
      text: "フジツボや二枚貝などを捕食する肉食性の巻貝です。"
    },
    {
      title: "イボニシとは殻口の色で見分けられる",
      text: "レイシガイでは殻の入口の内側が黄色から黄橙色になります。"
    }
  ],

  bodyLength: "殻高は通常4〜5cmで、大型では約6cmになります。",

  distribution: "日本では房総半島・男鹿半島以南から台湾付近まで分布します。",

  habitat: "潮間帯から水深20mほどまでの岩礁に生息します。",

  diet: "フジツボや二枚貝などを捕食する肉食性です。",

  features: "厚い殻に大きなこぶがあり、殻口の内側は黄色から黄橙色です。",

  behavior: "岩礁上を這って獲物を探し、暖かい時期に活動が活発になります。",

  reproduction: "夏を中心に集まり、岩の裏側などへ多数の卵嚢を産み付けます。",

  identification: "大きなこぶと、黄色から黄橙色の殻口が特徴です。",

  nameOrigin: "殻の大きなこぶが植物のレイシの実に似ることから名付けられました。",

  humanRelation: "主要な食用貝ではなく、沿岸の付着生物を捕食する生物です。",

  observationPoint: "殻の入口を見て、内側が黄色っぽいか確認してみてください。",

  references: [
    "BiSMAL: Reishia bronni レイシガイ",
    "新潟大学佐渡自然共生科学センター：レイシガイ",
    "水産無脊椎動物研究所：レイシガイ",
    "Smithsonian NEMESIS: Reishia bronni",
    "日本大百科全書：レイシガイ"
  ]
},


// ========================================
// sp0152 アコヤガイ
// LABO2
// ========================================

{
  id: "sp0152",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アコヤガイ",

  scientificName: "Pinctada fucata",

  englishName: "Akoya pearl oyster",

  classification: [
    "軟体動物門",
    "二枚貝綱",
    "ウグイスガイ目",
    "ウグイスガイ科",
    "Pinctada属"
  ],

  category: "軟体動物",

  image: "images/sp0152.jpg",

  trivia: [
    {
      title: "日本の真珠養殖を支える貝",
      text: "日本のアコヤ真珠は、この貝が作る真珠層によって形成されます。"
    },
    {
      title: "昔の学名とは扱いが変わっている",
      text: "以前は別の学名も使われましたが、現在は Pinctada fucata に統合されています。"
    }
  ],

  bodyLength: "殻長・殻高は約8〜10cmになります。",

  distribution: "日本では本州中部以南などで見られ、インド・西太平洋にも広く分布します。",

  habitat: "浅い岩礁などで、足糸を使って岩へ付着します。",

  diet: "植物プランクトンや細かな有機物を鰓でこし取って食べます。",

  features: "薄い殻の内側には、虹色に輝く強い真珠光沢があります。",

  behavior: "足糸で岩などへ付着し、殻を開いて海水をこしながら生活します。",

  reproduction: "主に暖かい季節に成熟して産卵しますが、時期は地域によって異なります。",

  identification: "殻の内側にある強い真珠光沢が特徴です。",

  nameOrigin: "「アコヤ」の詳しい由来には複数の説があります。",

  humanRelation: "日本の真珠養殖で非常に重要な二枚貝です。",

  observationPoint: "殻の内側に光を当て、虹色に輝く真珠層を見てください。",

  references: [
    "World Register of Marine Species: Pinctada fucata",
    "BiSMAL: Pinctada fucata / Pinctada martensii",
    "奈良国立博物館：アコヤガイ",
    "Food sources of the pearl oyster in coastal ecosystems of Japan",
    "FAO: Pearl Oyster Farming and Pearl Culture"
  ]
},


// ========================================
// sp0153 オオウミシダ
// LABO2
// ========================================

{
  id: "sp0153",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オオウミシダ",

  scientificName: "Tropiometra macrodiscus",

  englishName: "Large feather star",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "オオウミシダ科",
    "Tropiometra属"
  ],

  category: "棘皮動物",

  image: "images/sp0153.jpg",

  trivia: [
    {
      title: "腕は10本だけなのに、とても大きい",
      text: "基本的に10本の太い腕を持ち、1本が30cm以上になる大型種です。"
    },
    {
      title: "昔はアフリカの種と同じ扱いだった",
      text: "以前は亜種とされましたが、現在は Tropiometra macrodiscus という独立種です。"
    }
  ],

  bodyLength: "腕長は30〜40cmほどに達します。",

  distribution: "日本の相模湾や小笠原諸島から、韓国、中国、香港周辺まで分布します。",

  habitat: "浅い岩礁に生息し、岩陰から腕だけを広げることがあります。",

  diet: "腕でプランクトンや細かな有機物を捕らえて食べます。",

  features: "基本的に10本の太く頑丈な腕を持ち、黒褐色や黄色などの体色があります。",

  behavior: "巻枝で岩へつかまり、腕を水流へ広げて餌を捕らえます。",

  reproduction: "本種固有の詳しい繁殖時期については、十分な情報がありません。",

  identification: "基本的に10本の太く頑丈な腕を持つことが特徴です。",

  nameOrigin: "非常に大型になるウミシダであることから名付けられました。",

  humanRelation: "食用ではなく、ウミシダ類の独特な摂食方法を観察できます。",

  observationPoint: "多数に見える部分の中から、大きな腕が基本10本あることを確認してみてください。",

  references: [
    "World Register of Marine Species / OBIS: Tropiometra macrodiscus",
    "水産無脊椎動物研究所：オオウミシダ",
    "千葉県立中央博物館分館海の博物館：オオウミシダ",
    "Kim et al. 2022. New record of Tropiometra macrodiscus from Korea",
    "小渕 2016. 足摺宇和海のウミシダ類"
  ]
},


// ========================================
// sp0154 オガサワラコアシウミシダ
// LABO2
// ========================================

{
  id: "sp0154",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オガサワラコアシウミシダ",

  scientificName: "Comanthus delicatus",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "Comatulidae",
    "コアシウミシダ属"
  ],

  category: "棘皮動物",

  image: "images/sp0154.jpg",

  trivia: [
    {
      title: "昔は別の属に入れられていた",
      text: "古い資料では別の属名も使われますが、現在は Comanthus delicatus とされています。"
    },
    {
      title: "ヤギ類などにつかまって生活する",
      text: "巻枝を使い、ヤギ類などの枝へしっかりつかまって暮らします。"
    }
  ],

  bodyLength: "小型から中型ですが、最大サイズの確かな統一値は確認できません。",

  distribution: "日本を含む西太平洋に分布します。",

  habitat: "岩礁に生息し、ヤギ類などへ巻枝を絡ませて暮らすことがあります。",

  diet: "腕を広げ、プランクトンや細かな有機物を捕らえて食べます。",

  features: "多数の腕と羽枝を持ち、裏側には体を固定する巻枝があります。",

  behavior: "巻枝でヤギ類などへつかまり、腕を水流へ広げて餌を捕らえます。",

  reproduction: "本種固有の詳しい繁殖時期については、十分な情報がありません。",

  identification: "正確な識別には、腕や羽枝、巻枝などの細かな形を確認します。",

  nameOrigin: "詳しい和名の由来については、今回確認した資料では分かっていません。",

  humanRelation: "食用ではなく、ウミシダ類の分類や生息環境を学ぶ対象になります。",

  observationPoint: "腕だけでなく、体をヤギなどへ固定している巻枝にも注目してください。",

  references: [
    "BiSMAL: Comanthus delicatus オガサワラコアシウミシダ",
    "World Register of Marine Species: Comanthus delicatus",
    "鳥羽水族館年報：Comanthus delicatus",
    "Kogo & Fujita 2014. The Feather Stars of Sagami Bay"
  ]
},


// ========================================
// sp0155 カエルウオ
// LABO2
// ========================================

{
  id: "sp0155",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "カエルウオ",

  scientificName: "Istiblennius enosimae",

  englishName: "Mottled blenny",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ギンポ目",
    "イソギンポ科",
    "カエルウオ属"
  ],

  category: "魚類",

  image: "images/sp0155.jpg",

  trivia: [
    {
      title: "岩の上を跳ねるように移動する",
      text: "泳ぐだけでなく、岩の上を跳ねるように移動することがあります。"
    },
    {
      title: "卵を守るのはオス",
      text: "オスは岩の隙間などに産み付けられた卵を、孵化するまで守ります。"
    }
  ],

  bodyLength: "全長約12〜15cm。",

  distribution: "本州中部以南から九州、朝鮮半島南岸などに分布します。",

  habitat: "岩礁海岸の潮間帯や潮だまりに生息します。",

  diet: "主に岩の表面に生える藻類を削り取って食べます。",

  features: "細長い褐色の体に暗色の横帯があり、眼の上には糸状の突起があります。",

  behavior: "岩の表面で暮らし、危険を感じると泳いだり跳ねたりして逃げます。",

  reproduction: "繁殖期にはオスが巣を持ち、メスが産んだ卵を孵化まで守ります。",

  identification: "眼の上の細い突起と、体に入る暗色の横帯が特徴です。",

  nameOrigin: "岩の上を跳ねる姿がカエルを思わせることが名前に関係するとされています。",

  humanRelation: "一般的な食用魚ではなく、潮間帯への適応や繁殖行動の研究対象になります。",

  observationPoint: "眼の上の糸状の突起と、岩を口で削るように藻類を食べる姿に注目してください。",

  references: [
    "国立科学博物館 FishPix: Istiblennius enosimae",
    "八丈ビジターセンター：カエルウオ",
    "宇久井ビジターセンター：カエルウオ",
    "Sunobe et al. 1995. Mating system and spawning cycle in Istiblennius enosimae"
  ]
},


// ========================================
// sp0156 クマノミ
// LABO2
// ========================================

{
  id: "sp0156",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "クマノミ",

  scientificName: "Amphiprion clarkii",

  englishName: "Yellowtail clownfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "スズメダイ科",
    "クマノミ属"
  ],

  category: "魚類",

  image: "images/sp0156.jpg",

  trivia: [
    {
      title: "オスからメスへ性転換する",
      text: "グループのメスがいなくなると、オスがメスへ性転換することがあります。"
    },
    {
      title: "毒のあるイソギンチャクの中で暮らせる",
      text: "イソギンチャクの触手の間を、外敵から身を守る場所として利用します。"
    }
  ],

  bodyLength: "最大で全長約15cm。",

  distribution: "インド洋から西太平洋に広く分布し、南日本でも見られます。",

  habitat: "サンゴ礁や岩礁で、大型のイソギンチャクと一緒に暮らします。",

  diet: "動物プランクトンや小型甲殻類、藻類などを食べる雑食性です。",

  features: "黒色から褐色の体に2本の白帯があり、尾びれの色には個体差があります。",

  behavior: "イソギンチャクの近くで生活し、ペアや小さなグループを作ります。",

  reproduction: "岩などに卵を産み、主にオスが守りながらひれで水を送ります。",

  identification: "体に2本の白い横帯があることが特徴です。",

  nameOrigin: "「クマノミ」の詳しい語源には複数の説があります。",

  humanRelation: "観賞魚として知られ、イソギンチャクとの共生や性転換の研究にも使われています。",

  observationPoint: "魚だけでなく、イソギンチャクからどのくらい離れて泳ぐかにも注目してください。",

  references: [
    "FishBase: Amphiprion clarkii",
    "BiSMAL: Amphiprion clarkii クマノミ",
    "Hattori 1994. Sex change and social structure of Amphiprion clarkii",
    "Moyer & Bell 1976. Reproductive Behavior of Amphiprion clarkii",
    "Nakamura et al. 2015. Sex change in Amphiprion clarkii"
  ]
},


// ========================================
// sp0157 ギスレンウミシダ
// LABO2
// ========================================

{
  id: "sp0157",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ギスレンウミシダ",

  scientificName: "Comanthus gisleni",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "Comatulidae",
    "コアシウミシダ属"
  ],

  category: "棘皮動物",

  image: "images/sp0157.jpg",

  trivia: [
    {
      title: "長い腕と短い腕が混ざる",
      text: "腕の長さがそろわず、長い腕は15cmほどになることがあります。"
    },
    {
      title: "体を隠して腕だけ伸ばす",
      text: "体を岩などの隙間へ隠し、長い腕だけを外へ伸ばして餌を捕らえます。"
    }
  ],

  bodyLength: "長い腕は約15cmで、通常20〜30本ほどの腕を持ちます。",

  distribution: "日本南部を含む西太平洋に分布します。",

  habitat: "浅いサンゴ礁や岩礁の隙間などに生息します。",

  diet: "腕で動物プランクトンや細かな有機物を捕らえて食べます。",

  features: "20〜30本ほどの腕を持ち、長い腕と短い腕の差が目立ちます。",

  behavior: "体を岩の隙間へ隠し、長い腕だけを外へ伸ばすことがあります。",

  reproduction: "本種固有の詳しい繁殖時期については、十分な情報がありません。",

  identification: "黒っぽい体と、長さの異なる腕が特徴ですが、正確な識別には細部の確認が必要です。",

  nameOrigin: "種小名 gisleni という研究者の人名に由来します。",

  humanRelation: "食用ではなく、ウミシダ類の分類や共生生物の研究対象になります。",

  observationPoint: "腕の長さを見比べ、羽枝の先端が黄色や白色になっていないか探してください。",

  references: [
    "BiSMAL: Comanthus gisleni ギスレンウミシダ",
    "World Register of Marine Species: Comanthus gisleni",
    "Rowe et al. 1986. Revision of comasterid genera",
    "小郷・藤田 2014. 相模湾のウミシダ類",
    "小渕 2016. 足摺宇和海のウミシダ類"
  ]
},


// ========================================
// sp0158 シモフリウミシダ
// LABO2
// ========================================

{
  id: "sp0158",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "シモフリウミシダ",

  scientificName: "Iconometra japonica",

  englishName: "No widely established English common name",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "イボアシウミシダ科",
    "シモフリウミシダ属"
  ],

  category: "棘皮動物",

  image: "images/sp0158.jpg",

  trivia: [
    {
      title: "腕は基本10本",
      text: "腕は通常10本で、多くても12本ほどです。"
    },
    {
      title: "ヤギなどの枝につかまって暮らす",
      text: "丈夫な巻枝でヤギ類などへつかまり、腕を広げて餌を捕らえます。"
    }
  ],

  bodyLength: "腕長は最大約10cm。",

  distribution: "日本沿岸など北西太平洋に分布します。",

  habitat: "岩礁で海藻やヤギ類などへつかまって生活します。",

  diet: "プランクトンや細かな有機物を腕で捕らえて食べます。",

  features: "通常10本の腕を持ち、白い斑点や縞模様が入ることがあります。",

  behavior: "短く丈夫な巻枝で体を固定し、腕を扇状に広げて餌を捕らえます。",

  reproduction: "本種固有の詳しい繁殖時期については、十分な情報がありません。",

  identification: "通常10本の腕と、白い霜降り状の模様が特徴です。",

  nameOrigin: "腕の白い斑紋が霜降り模様に見えることから名付けられました。",

  humanRelation: "食用ではなく、ウミシダの濾過摂食を観察できる種類です。",

  observationPoint: "腕の白い模様だけでなく、根元の短い巻枝にも注目してください。",

  references: [
    "BiSMAL: Iconometra japonica シモフリウミシダ",
    "World Register of Marine Species: Iconometra japonica",
    "新潟大学佐渡自然共生科学センター：シモフリウミシダ",
    "千葉県立中央博物館分館海の博物館：シモフリウミシダ",
    "小渕 2016. 足摺宇和海のウミシダ類"
  ]
},


// ========================================
// sp0159 ツヤウミシダ
// LABO2
// 旧・国内資料：Liparometra grandis
// ========================================

{
  id: "sp0159",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ツヤウミシダ",

  scientificName: "Dichrometra grandis",

  englishName: "Feather star",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "トゲウミシダ科",
    "Dichrometra属"
  ],

  category: "棘皮動物",

  image: "images/sp0159.jpg",

  trivia: [
    {
      title: "国内資料とは属名が変わっている",
      text: "国内では別の属名も使われますが、現在は Dichrometra grandis が受理名です。"
    },
    {
      title: "植物ではなく動物",
      text: "シダのような姿ですが、ヒトデやウニと同じ棘皮動物です。"
    }
  ],

  bodyLength: "腕長は約6〜12cmで、40本前後の腕を持つ個体もいます。",

  distribution: "日本では相模湾や伊豆半島、琉球列島などで見られます。",

  habitat: "岩礁で岩やサンゴなどへ巻枝を使ってつかまります。",

  diet: "プランクトンや細かな有機物を腕で捕らえて食べます。",

  features: "中心から多数の羽毛状の腕が伸び、裏側には巻枝があります。",

  behavior: "巻枝で岩へつかまり、腕を水流へ広げて餌を捕らえます。",

  reproduction: "卵や精子を海中へ放出しますが、詳しい繁殖時期は分かっていません。",

  identification: "腕数や巻枝、羽枝などの細かな形が識別のポイントです。",

  nameOrigin: "「ツヤウミシダ」の詳しい命名由来については、確認できませんでした。",

  humanRelation: "食用ではなく、伊豆などではダイビング中にも観察できます。",

  observationPoint: "腕だけでなく、岩へつかまる体の裏側の巻枝にも注目してください。",

  references: [
    "World Register of Marine Species: Dichrometra grandis",
    "日本動物園水族館協会：ツヤウミシダ Liparometra grandis",
    "Kogo 1998. Crinoids from Japan and its adjacent waters",
    "Kogo 2002. Report on the crinoids collected from the Nansei Islands"
  ]
},


// ========================================
// sp0160 トゲワレカラ
// LABO2
// ========================================

{
  id: "sp0160",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "トゲワレカラ",

  scientificName: "Caprella scaura",

  englishName: "Skeleton shrimp",

  classification: [
    "節足動物門",
    "軟甲綱",
    "端脚目",
    "ワレカラ科",
    "ワレカラ属"
  ],

  category: "甲殻類",

  image: "images/sp0160.jpg",

  trivia: [
    {
      title: "エビのように見えなくても甲殻類",
      text: "棒のような細長い姿ですが、ヨコエビ類に近い甲殻類です。"
    },
    {
      title: "海藻などへ後ろ脚でつかまる",
      text: "後ろ脚で海藻などへつかまり、体を立てるような姿勢で暮らします。"
    }
  ],

  bodyLength: "大型個体では体長約2cmを超えます。",

  distribution: "日本を含む各地の海に分布し、人の活動によって広がった地域もあります。",

  habitat: "海藻やヒドロ虫、コケムシ、浮桟橋などに付着して暮らします。",

  diet: "水中の細かな有機物やプランクトンなどを利用します。",

  features: "非常に細長い体を持ち、前方には大きな第2咬脚があります。",

  behavior: "後ろ脚で基質へつかまり、体を振るように動かしながら餌を取ります。",

  reproduction: "メスは腹側の育児嚢で卵と幼体を守ります。",

  identification: "細長い体と、頭部前方にある棘状の突起が特徴の一つです。",

  nameOrigin: "体に棘状の突起があることからトゲワレカラと呼ばれます。",

  humanRelation: "食用ではなく、付着生物や外来種の研究対象になっています。",

  observationPoint: "海藻から突き出して動いている、細い棒のような体を探してください。",

  references: [
    "BiSMAL: Caprella scaura トゲワレカラ",
    "World Register of Marine Species: Caprella scaura",
    "環境省：藻場調査 ワレカラ類",
    "Smithsonian NEMESIS: Caprella scaura"
  ]
},


// ========================================
// sp0161 ニッポンウミシダ
// LABO2
// ========================================

{
  id: "sp0161",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ニッポンウミシダ",

  scientificName: "Anneissia japonica",

  englishName: "Japanese feather star",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "Comatulidae",
    "Anneissia属"
  ],

  category: "棘皮動物",

  image: "images/sp0161.jpg",

  trivia: [
    {
      title: "腕は40本以上になる",
      text: "40本を超える腕を持つことがある大型のウミシダです。"
    },
    {
      title: "昔とは属名が大きく変わった",
      text: "以前は別の属名が使われましたが、現在は Anneissia japonica です。"
    }
  ],

  bodyLength: "腕長は約15cmで、全体では20cmほどになります。",

  distribution: "日本では房総半島・佐渡島以南に分布します。",

  habitat: "浅い海から水深数十mほどの岩礁に生息します。",

  diet: "プランクトンや細かな有機物を腕で捕らえて食べます。",

  features: "40本を超える多数の腕を持つことがあり、体色には大きな個体差があります。",

  behavior: "巻枝で岩へつかまりながら腕を広げ、必要に応じて移動することもあります。",

  reproduction: "雌雄は別で、腕の羽枝から卵や精子を海中へ放出します。",

  identification: "多数の腕を持つ大型種ですが、正確な識別には細かな形態確認が必要です。",

  nameOrigin: "日本から古く知られる種で、種小名 japonica も「日本の」を意味します。",

  humanRelation: "食用ではなく、日本の温帯岩礁を代表する大型ウミシダの一つです。",

  observationPoint: "腕の本数や体色を見て、複数個体がいれば違いを比べてみてください。",

  references: [
    "BiSMAL: Anneissia japonica ニッポンウミシダ",
    "鳥羽水族館：ニッポンウミシダ",
    "新潟大学佐渡自然共生科学センター：ニッポンウミシダ",
    "World Register of Marine Species: Anneissia japonica"
  ]
},


// ========================================
// sp0162 バンダコウイカ
// 現地メモ：パンダコウイカ
// LABO2
// ========================================

{
  id: "sp0162",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "バンダコウイカ",

  scientificName: "Ascarosepion bandense",

  englishName: "Stumpy cuttlefish",

  classification: [
    "軟体動物門",
    "頭足綱",
    "コウイカ目",
    "コウイカ科",
    "Ascarosepion属"
  ],

  category: "頭足類",

  image: "images/sp0162.jpg",

  trivia: [
    {
      title: "とても小さなコウイカ",
      text: "外套長は最大でも約7cmほどの小型のコウイカです。"
    },
    {
      title: "海底を『歩く』ことがある",
      text: "腕などを使い、海底を歩くように移動することがあります。"
    }
  ],

  bodyLength: "最大外套長約7cm。",

  distribution: "フィリピンやマレーシア、インドネシアなどの熱帯域に分布します。",

  habitat: "浅いサンゴ礁や、その周辺の砂底・泥底に生息します。",

  diet: "小型のエビ類や小魚などを捕食します。",

  features: "小型で丸みのある胴を持ち、体色や模様を素早く変化させます。",

  behavior: "夜に活発になり、体色を変えたり砂を付けたりして身を隠します。",

  reproduction: "オスが精包をメスへ渡し、受精したメスが卵を産みます。",

  identification: "非常に小型のコウイカで、現在は Ascarosepion bandense が受理名です。",

  nameOrigin: "種小名 bandense は、模式産地のインドネシア・バンダ海に由来します。",

  humanRelation: "飼育繁殖が可能で、水族館や神経科学・行動学の研究にも利用されています。",

  observationPoint: "体色や模様の変化と、海底を歩くような動きに注目してください。",

  references: [
    "World Register of Marine Species: Ascarosepion bandense",
    "日本動物園水族館協会：バンダコウイカ Sepia bandensis",
    "FAO Cephalopods of the World: Sepia bandensis",
    "Gibbons et al. 2025. Natural Habitat and Wild Behaviors of the Dwarf Cuttlefish, Ascarosepion bandense",
    "Lupše et al. 2023. Cuttlefishes: the bare bones"
  ]
},


// ========================================
// sp0163 ヒガサウミシダ
// LABO2
// 国内資料：Lamprometra palmata
// ========================================

{
  id: "sp0163",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒガサウミシダ",

  scientificName: "Dichrometra palmata",

  englishName: "Feather star",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "トゲウミシダ科",
    "Dichrometra属"
  ],

  category: "棘皮動物",

  image: "images/sp0163.jpg",

  trivia: [
    {
      title: "夜になると『日傘』を広げる",
      text: "夜になると岩の上へ出て、多数の腕を日傘のように大きく広げます。"
    },
    {
      title: "40〜50本もの腕を持つ",
      text: "40〜50本ほどの腕を持ち、腕長は約15cmになります。"
    }
  ],

  bodyLength: "腕長最大約15cmで、腕は40〜50本ほどあります。",

  distribution: "日本では佐渡島以南で見られ、インド洋から西太平洋まで広く分布します。",

  habitat: "浅い岩礁やサンゴ礁に生息し、昼は岩陰などへ隠れます。",

  diet: "プランクトンや細かな有機物を腕で捕らえて食べます。",

  features: "多数の太い腕を持ち、赤褐色の体に白色や紫色の模様が入ることがあります。",

  behavior: "夜になると腕を扇状に広げ、水流から餌を捕らえます。",

  reproduction: "雌雄は別ですが、本種の詳しい繁殖時期については十分な情報がありません。",

  identification: "現在は Dichrometra palmata が受理名ですが、国内では旧属名も広く使われています。",

  nameOrigin: "多数の腕を広げた姿が日傘のように見えることから名付けられました。",

  humanRelation: "食用ではなく、夜間の濾過摂食を観察できるウミシダです。",

  observationPoint: "昼と夜で、腕を閉じているか大きく広げているか見比べてください。",

  references: [
    "World Register of Marine Species: Dichrometra palmata",
    "BiSMAL: Lamprometra palmata ヒガサウミシダ",
    "宇久井ビジターセンター：ヒガサウミシダ",
    "小渕 2016. 足摺宇和海のウミシダ類"
  ]
},


// ========================================
// sp0164 ヒゲクシウミシダ
// LABO2
// 国内専門資料：Clarkcomanthus exilis
// ========================================

{
  id: "sp0164",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒゲクシウミシダ",

  scientificName: "Clarkcomanthus comanthipinna",

  englishName: "Feather star",

  classification: [
    "棘皮動物門",
    "ウミユリ綱",
    "ウミシダ目",
    "Comatulidae",
    "Clarkcomanthus属"
  ],

  category: "棘皮動物",

  image: "images/sp0164.jpg",

  trivia: [
    {
      title: "日本の図鑑と最新分類で扱いが違う",
      text: "日本では別種とされた型も、現在は Clarkcomanthus comanthipinna に統合されています。"
    },
    {
      title: "昼間は隠れ、夜に腕を伸ばす",
      text: "昼は石の下などへ隠れ、夜になると腕を伸ばして活動します。"
    }
  ],

  bodyLength: "日本でヒゲクシウミシダとされた型では、腕長約10cm、腕数20〜30本ほどです。",

  distribution: "日本でヒゲクシウミシダとされた型は、相模湾以南の西太平洋に分布します。",

  habitat: "浅い岩礁やサンゴ礁で、昼は石の下や岩の隙間に隠れます。",

  diet: "腕でプランクトンや細かな有機物を捕らえて食べます。",

  features: "赤色の腕に白い横帯が入り、広げると同心円状に見えることがあります。",

  behavior: "夜になると隠れ場所から腕を伸ばして餌を捕らえます。",

  reproduction: "有性生殖を行いますが、日本での詳しい繁殖時期は分かっていません。",

  identification: "現在は近縁種と分類上統合されているため、見た目だけでの断定には注意が必要です。",

  nameOrigin: "和名の詳しい命名由来については、今回確認した資料では断定できません。",

  humanRelation: "食用ではなく、ウミシダ類の分類研究でも興味深い種類です。",

  observationPoint: "赤い腕に白い横帯が入っているか観察してください。",

  references: [
    "World Register of Marine Species: Clarkcomanthus comanthipinna",
    "小渕 2016. 足摺宇和海のウミシダ類：Clarkcomanthus exilis ヒゲクシウミシダ",
    "Summers et al. 2017. The genera and species of Comatulidae",
    "Kohtsuka & Okanishi 2021. Morphological changes associated with growth of Clarkcomanthus exilis"
  ]
},


// ========================================
// sp0165 マダコ
// LABO2
// 旧国内表記：Octopus vulgaris
// ========================================

{
  id: "sp0165",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "マダコ",

  scientificName: "Octopus sinensis",

  englishName: "East Asian common octopus",

  classification: [
    "軟体動物門",
    "頭足綱",
    "八腕形目",
    "マダコ科",
    "マダコ属"
  ],

  category: "頭足類",

  image: "images/sp0165.jpg",

  trivia: [
    {
      title: "日本のマダコはOctopus vulgarisではない",
      text: "日本など東アジアのマダコは、現在 Octopus sinensis として扱われています。"
    },
    {
      title: "吸盤で触りながら味も感じる",
      text: "吸盤は物に触れるだけでなく、化学物質を感じ取ることもできます。"
    }
  ],

  bodyLength: "大型では全長50〜60cm、体重2kg前後になることがあります。",

  distribution: "日本、中国、朝鮮半島周辺など東アジアの沿岸に分布します。",

  habitat: "浅い岩礁や砂泥底などに生息し、岩穴を巣にします。",

  diet: "カニやエビ、貝類、小魚などを捕食します。",

  features: "8本の腕に2列の吸盤があり、骨格がほとんどないため狭い隙間にも入れます。",

  behavior: "岩穴を巣にし、体色や皮膚の凹凸を変えて周囲に溶け込みます。",

  reproduction: "メスは岩穴などに多数の卵を産み、孵化まで水を送りながら守ります。",

  identification: "日本産のマダコは、現在 Octopus sinensis が有効名として使われています。",

  nameOrigin: "「真蛸」と書き、日本を代表するタコとして古くから使われる名称です。",

  humanRelation: "日本を代表する水産物で、刺身や寿司、たこ焼きなどに利用されます。",

  observationPoint: "体色だけでなく、皮膚表面の凹凸まで変化する様子に注目してください。",

  references: [
    "World Register of Marine Species: Octopus sinensis",
    "BiSMAL：日本のマダコとOctopus sinensisの分類解説",
    "Gleadall 2016. Octopus sinensis: valid species name for the commercially valuable East Asian common octopus",
    "水産研究・教育機構：マダコの養殖・量産化研究",
    "Yamamoto et al. 2025. Spawning characteristics of Octopus sinensis in the Seto Inland Sea"
  ]
},


// ========================================
// sp0166 ケヤリムシ
// LABO2
// ========================================

{
  id: "sp0166",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ケヤリムシ",

  scientificName: "Sabellastarte japonica",

  englishName: "Feather duster worm",

  classification: [
    "環形動物門",
    "多毛綱",
    "ケヤリムシ目",
    "ケヤリムシ科",
    "Sabellastarte属"
  ],

  category: "環形動物",

  image: "images/sp0166.jpg",

  trivia: [
    {
      title: "花のような部分は『鰓』",
      text: "花のような鰓冠は、呼吸だけでなく餌を集める役割もあります。"
    },
    {
      title: "危険を感じると一瞬で管へ消える",
      text: "刺激を感じると、広げた鰓冠を一瞬で管の中へ引っ込めます。"
    }
  ],

  bodyLength: "体長約10〜15cmで、鰓冠を広げるとさらに大きく見えます。",

  distribution: "日本沿岸を中心に、西太平洋の一部に分布します。",

  habitat: "浅い岩礁などで、細長い棲管の中に暮らします。",

  diet: "植物プランクトンや細かな有機物を鰓冠で捕らえて食べます。",

  features: "体は管の中に隠れ、入口から花のような大きな鰓冠を広げます。",

  behavior: "鰓冠を広げて餌を取り、刺激を受けると素早く管内へ引っ込みます。",

  reproduction: "有性生殖を行いますが、日本での詳しい産卵時期は分かっていません。",

  identification: "多数の鰓糸が集まり、ぼんぼりのような大きな鰓冠を作ります。",

  nameOrigin: "鰓冠が昔の「毛槍」に似ることから名付けられました。",

  humanRelation: "食用ではなく、美しい鰓冠から水族館や海水飼育でも観察されます。",

  observationPoint: "一瞬で鰓冠を引っ込めても、静かに待つと再び広げることがあります。",

  references: [
    "BiSMAL: Sabellastarte japonica ケヤリムシ",
    "World Register of Marine Species: Sabellastarte japonica",
    "宇久井ビジターセンター：ケヤリムシ",
    "京都大学瀬戸臨海実験所：白浜の海岸生物 ケヤリムシ",
    "Capa et al. 2010. Species boundaries in Sabellastarte"
  ]
},


// ========================================
// sp0167 コウイカ
// LABO2
// 旧名：Sepia esculenta
// ========================================

{
  id: "sp0167",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "コウイカ",

  scientificName: "Acanthosepion esculentum",

  englishName: "Golden cuttlefish",

  classification: [
    "軟体動物門",
    "頭足綱",
    "コウイカ目",
    "コウイカ科",
    "Acanthosepion属"
  ],

  category: "頭足類",

  image: "images/sp0167.jpg",

  trivia: [
    {
      title: "体の中に『甲』を持つ",
      text: "背中側に石灰質の甲を持ち、浮力調整にも利用します。"
    },
    {
      title: "2023年以降、属名が変更された",
      text: "長く Sepia esculenta とされましたが、現在は Acanthosepion esculentum が受理名です。"
    }
  ],

  bodyLength: "最大外套長約18cm、体重約600g。",

  distribution: "日本では関東以西に見られ、朝鮮半島や中国沿岸にも分布します。",

  habitat: "沿岸から水深100mほどまでの砂泥底などに生息します。",

  diet: "エビやカニなどの甲殻類、小魚などを捕食します。",

  features: "幅広い胴の縁に細いひれがあり、体色や模様を変えることができます。",

  behavior: "背景に合わせて体色を変え、砂の中へ体を埋めることもあります。",

  reproduction: "春を中心に浅い海へ移動し、メスは海藻などへ卵を産み付けます。",

  identification: "幅広い胴と体内にある甲が特徴です。",

  nameOrigin: "体内に硬い「甲」を持つことから「甲烏賊」と呼ばれます。",

  humanRelation: "日本や東アジアで重要な食用イカです。",

  observationPoint: "体色の変化と、胴の左右にあるひれが波打つように動く様子を見てください。",

  references: [
    "World Register of Marine Species: Acanthosepion esculentum",
    "生物多様性ふくおかウェブセンター：コウイカ Acanthosepion esculentum",
    "FAO Cephalopods of the World: Sepia esculenta",
    "Lupše et al. 2023. Cuttlefishes: the bare bones",
    "鳥羽水族館：コウイカ"
  ]
},


// ========================================
// sp0168 ウミケムシ
// LABO2
// ========================================

{
  id: "sp0168",

  areaIds: [
    "labo2"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ウミケムシ",

  scientificName: "Chloeia flava",

  englishName: "Fireworm",

  classification: [
    "環形動物門",
    "多毛綱",
    "ウミケムシ目",
    "ウミケムシ科",
    "Chloeia属"
  ],

  category: "環形動物",

  image: "images/sp0168.jpg",

  trivia: [
    {
      title: "白い毛には毒がある",
      text: "白い剛毛が皮膚へ刺さると、強い痛みや炎症を起こすことがあります。"
    },
    {
      title: "背中には紫色の模様が並ぶ",
      text: "背中の中央には暗紫色の丸い斑紋が一列に並びます。"
    }
  ],

  bodyLength: "通常7〜8cmで、大型では15cmほどになります。",

  distribution: "日本では本州中部以南などで見られ、インド・西太平洋にも分布します。",

  habitat: "浅い海の砂底や砂泥底などに生息します。",

  diet: "小型動物や動物の死骸などを利用する肉食・腐肉食性です。",

  features: "体の両側に白い剛毛があり、背中中央には暗紫色の斑紋が並びます。",

  behavior: "砂泥底を這って餌を探し、刺激を受けると剛毛が目立ちます。",

  reproduction: "日本沿岸での詳しい産卵時期については、十分な情報がありません。",

  identification: "白い剛毛と、背中中央に並ぶ紫色の斑紋が特徴です。",

  nameOrigin: "白い剛毛が陸上の毛虫の毛のように見えることから名付けられました。",

  humanRelation: "剛毛が刺さると痛むため、見つけても素手で触らないよう注意が必要です。",

  observationPoint: "触らずに、背中の紫色の斑点と両側の白い剛毛を観察してください。",

  references: [
    "BiSMAL / 水産無脊椎動物研究所：Chloeia flava ウミケムシ",
    "新潟大学佐渡自然共生科学センター：ウミケムシ",
    "岡山県野生生物目録：Chloeia flava",
    "World Register of Marine Species: Chloeia flava"
  ]
},


// ========================================
// sp0169 ハダカカメガイ（クリオネ）
// LABO3
// ========================================

{
  id: "sp0169",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハダカカメガイ（クリオネ）",

  scientificName: "Clione elegantissima",

  englishName: "Sea angel",

  classification: [
    "軟体動物門",
    "腹足綱",
    "ハダカカメガイ科",
    "ハダカカメガイ属"
  ],

  category: "軟体動物",

  image: "images/sp0169.jpg",

  trivia: [
    {
      title: "『天使』の正体は貝の仲間",
      text: "魚やクラゲではなく貝の仲間で、翼のような「翼足」を動かして泳ぎます。"
    },
    {
      title: "食事の時は頭から6本の器官が出る",
      text: "獲物を食べるとき、頭から6本のバッカルコーンを伸ばして捕まえます。"
    }
  ],

  bodyLength: "日本周辺では体長1〜2cmほどです。",

  distribution: "北太平洋の寒冷な海に分布し、日本では北海道周辺などで見られます。",

  habitat: "冷たい海の水中を漂って暮らす浮遊性の軟体動物です。",

  diet: "主にミジンウキマイマイを捕食します。",

  features: "透明な体に赤橙色の器官が透け、左右には翼のような翼足があります。",

  behavior: "翼足を羽ばたかせるように動かしながら、水中を漂います。",

  reproduction: "雌雄同体ですが、日本周辺での詳しい繁殖時期については十分な情報がありません。",

  identification: "日本で「クリオネ」として知られる北太平洋産種は Clione elegantissima です。",

  nameOrigin: "成体で貝殻を持たないカメガイ類であることから「ハダカカメガイ」と呼ばれます。",

  humanRelation: "透明な姿から水族館で人気がありますが、特殊な餌が必要で長期飼育は簡単ではありません。",

  observationPoint: "翼足の動きを見て、運がよければ食事のときに開く頭部にも注目してください。",

  references: [
    "アクアマリンふくしま：ハダカカメガイ（Clione elegantissima）",
    "海遊館：クリオネ",
    "BiSMAL：Clione elegantissima",
    "東京大学大気海洋研究所：ハダカカメガイ類の生態研究"
  ]
},

// ========================================
// sp0170 ケガニ
// LABO3
// ========================================

{
  id: "sp0170",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ケガニ",

  scientificName: "Erimacrus isenbeckii",

  englishName: "Horsehair crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "クリガニ科",
    "ケガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0170.jpg",

  trivia: [
    {
      title: "名前の通り、全身が細かな毛だらけ",
      text: "甲羅や脚には短い毛が密生し、ビロードのように見えることがあります。"
    },
    {
      title: "暖かい海が苦手",
      text: "冷たい海を好み、北海道のオホーツク海では水温10℃以下の環境にも生息します。"
    }
  ],

  bodyLength: "大型個体では甲長約15cmになります。",

  distribution: "北海道周辺からオホーツク海、ベーリング海など北太平洋の寒冷域に分布します。",

  habitat: "水深数十〜200mほどの砂底や砂泥底などに生息します。",

  diet: "ゴカイや貝、甲殻類などを食べる動物食性の強い雑食性です。",

  features: "丸みのある甲羅と太い脚を持ち、体全体が短い毛に覆われています。",

  behavior: "海底を歩いて餌を探し、成長するときには脱皮します。",

  reproduction: "メスは腹部に卵を抱えて長期間守り、孵化まで約1年かかることもあります。",

  identification: "大型で丸い甲羅と、全身を覆う密な毛が特徴です。",

  nameOrigin: "甲羅や脚に毛が密生していることから「毛蟹」と呼ばれます。",

  humanRelation: "北海道を代表する水産物で、資源保護のため漁期や大きさなどが管理されています。",

  observationPoint: "甲羅だけでなく脚も見て、表面にびっしり生えた細かな毛を探してください。",

  references: [
    "北海道立総合研究機構 稚内水産試験場：ケガニ",
    "北海道立総合研究機構：かにかご漁業 ケガニ",
    "World Register of Marine Species：Erimacrus isenbeckii",
    "新潟市水族館 マリンピア日本海：ケガニ"
  ]
},


// ========================================
// sp0171 コンペイトウ
// LABO3
// 旧学名：Eumicrotremus birulai
// ========================================

{
  id: "sp0171",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "コンペイトウ",

  scientificName: "Eumicrotremus asperrimus",

  englishName: "Siberian lumpsucker",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ダンゴウオ科",
    "Eumicrotremus属"
  ],

  category: "魚類",

  image: "images/sp0171.jpg",

  trivia: [
    {
      title: "成長したオスは『コンペイトウらしくなくなる』",
      text: "若魚やメスでは目立つ体表の突起が、成熟したオスでは小さくなることがあります。"
    },
    {
      title: "腹びれが吸盤に変化している",
      text: "腹側の吸盤を使い、岩や貝殻などへ体を固定できます。"
    }
  ],

  bodyLength: "最大約15cmで、多くは5〜10cmほどです。",

  distribution: "日本北部からオホーツク海、ベーリング海、ロシア沿海州などに分布します。",

  habitat: "比較的深い冷たい海に生息し、季節によって深さを変えることがあります。",

  diet: "主に動物プランクトンを食べます。",

  features: "丸い体を持ち、メスや若い個体には金平糖のような硬い突起があります。",

  behavior: "腹側の吸盤で岩や貝殻へ付着し、オスが産卵場所を確保することもあります。",

  reproduction: "メスが巻貝の空殻などに卵を産み、オスが孵化まで守ります。",

  identification: "現在は Eumicrotremus asperrimus が有効名で、旧学名 E. birulai は異名です。",

  nameOrigin: "体表の突起が砂糖菓子の「金平糖」に似ることから名付けられました。",

  humanRelation: "食用にはほとんど利用されませんが、特徴的な姿から水族館で人気があります。",

  observationPoint: "体表の突起とお腹の吸盤を探し、突起が少ない個体にも注目してください。",

  references: [
    "World Register of Marine Species：Eumicrotremus asperrimus",
    "FishBase：Eumicrotremus asperrimus",
    "北海道大学北方生物圏フィールド科学センター：コンペイトウ",
    "Panchenko & Balanov 2020：Eumicrotremus asperrimusの繁殖",
    "Antonenko et al. 2009：Eumicrotremus asperrimusの食性"
  ]
},


// ========================================
// sp0172 ダンゴウオ
// LABO3
// 旧学名：Lethotremus awae
// ========================================

{
  id: "sp0172",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ダンゴウオ",

  scientificName: "Eumicrotremus awae",

  englishName: "Japanese lumpsucker",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ダンゴウオ科",
    "Eumicrotremus属"
  ],

  category: "魚類",

  image: "images/sp0172.jpg",

  trivia: [
    {
      title: "赤ちゃんには『天使の輪』がある",
      text: "孵化直後の稚魚には頭の周りに白い輪があり、成長すると消えていきます。"
    },
    {
      title: "小さいけれど立派な吸盤を持つ",
      text: "腹びれが変化した吸盤で、海藻や岩へしっかりくっつきます。"
    }
  ],

  bodyLength: "最大標準体長約2cmの非常に小さな魚です。",

  distribution: "現在の分類では、主に千葉県から三重県にかけての太平洋側に分布します。",

  habitat: "水深0〜20mほどの浅い岩礁で、海藻や岩へ吸盤で付着して暮らします。",

  diet: "小型の甲殻類などを捕食します。",

  features: "丸く小さな体を持ち、赤・緑・褐色など体色には大きな個体差があります。",

  behavior: "泳ぎ続けるより、吸盤を使って海藻や岩へ付着していることが多い魚です。",

  reproduction: "冬に繁殖し、オスが貝殻や岩穴などに産み付けられた卵を守ります。",

  identification: "旧学名は Lethotremus awae ですが、現在は Eumicrotremus awae とされています。",

  nameOrigin: "丸く小さな体が食べ物の「団子」に似ることから名付けられました。",

  humanRelation: "小さく丸い姿から、ダイバーや水族館で人気があります。",

  observationPoint: "お腹の吸盤と、小さな個体では頭の周りに残る「天使の輪」を探してください。",

  references: [
    "FishBase：Eumicrotremus awae",
    "Lee et al. 2017：Eumicrotremus小型種の分類学的再検討",
    "横浜・八景島シーパラダイス：ダンゴウオ繁殖・成長展示 2026",
    "Abe & Sato 2009：ダンゴウオの繁殖行動"
  ]
},


// ========================================
// sp0173 タラバガニ
// LABO3
// ========================================

{
  id: "sp0173",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "タラバガニ",

  scientificName: "Paralithodes camtschaticus",

  englishName: "Red king crab",

  classification: [
    "節足動物門",
    "軟甲綱",
    "十脚目",
    "異尾下目",
    "タラバガニ科",
    "タラバガニ属"
  ],

  category: "甲殻類",

  image: "images/sp0173.jpg",

  trivia: [
    {
      title: "名前はカニでも、ヤドカリに近い",
      text: "一般的なカニではなく、分類上はヤドカリ類に近い仲間です。"
    },
    {
      title: "見えている歩脚は3対だけ",
      text: "最後の1対の脚は小さく、甲羅の下に隠れています。"
    }
  ],

  bodyLength: "大型個体では脚を広げた幅が1mを超えます。",

  distribution: "北海道周辺からオホーツク海、ベーリング海、アラスカ沿岸などに分布します。",

  habitat: "冷たい海の海底に生息し、成長するとより深い場所へ移動します。",

  diet: "ゴカイや貝、甲殻類、小魚、ヒトデなどさまざまな生物を食べます。",

  features: "硬い甲羅と鋭い棘に覆われ、大きなはさみと長い歩脚を持ちます。",

  behavior: "長い脚で海底を歩きながら餌を探し、若い個体は群れを作ることもあります。",

  reproduction: "メスは多数の卵を腹部に抱え、孵化した幼生はしばらく水中を漂います。",

  identification: "外から見える歩脚が3対で、一般的なカニより1対少なく見えます。",

  nameOrigin: "タラが漁獲される漁場で一緒に捕れることから「鱈場蟹」と呼ばれます。",

  humanRelation: "高級水産物として人気があり、北太平洋の重要な漁業対象です。",

  observationPoint: "脚を数えて、一般的なカニとの違いを確かめてみてください。",

  references: [
    "World Register of Marine Species：Paralithodes camtschaticus",
    "NOAA Fisheries：Red King Crab",
    "アクアマリンふくしま：タラバガニ",
    "NOAA Alaska Fisheries Science Center：Red King Crab biology"
  ]
},


// ========================================
// sp0174 ハイイロアザラシ
// LABO3
// ========================================

{
  id: "sp0174",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ハイイロアザラシ",

  scientificName: "Halichoerus grypus",

  englishName: "Grey seal",

  classification: [
    "脊索動物門",
    "哺乳綱",
    "食肉目",
    "アザラシ科",
    "ハイイロアザラシ属"
  ],

  category: "哺乳類",

  image: "images/sp0174.jpg",

  trivia: [
    {
      title: "オスとメスでかなり大きさが違う",
      text: "成獣ではオスの方が大きく、体長2mを超えることがあります。"
    },
    {
      title: "1時間近く潜れることがある",
      text: "高い潜水能力を持ち、約1時間潜った記録もあります。"
    }
  ],

  bodyLength: "オスは体長約195〜230cm、メスは約165〜195cm。",

  distribution: "北大西洋やバルト海に分布し、日本周辺には自然分布しません。",

  habitat: "沿岸の海で暮らし、休息や繁殖のため岩礁や島、砂州などへ上陸します。",

  diet: "魚を中心に、甲殻類やイカ、タコなども食べます。",

  features: "外耳がなく、成獣オスでは長く盛り上がった鼻先が目立ちます。",

  behavior: "海中で餌を探し、休息や繁殖、換毛のため陸上へ上がります。",

  reproduction: "メスは通常1頭の子を産み、約3週間授乳します。",

  identification: "特にオスでは、長く盛り上がった鼻先が特徴です。",

  nameOrigin: "灰色を基調とする体色から「ハイイロアザラシ」と呼ばれます。",

  humanRelation: "北大西洋沿岸を代表する大型アザラシで、各地で保護や管理の対象になっています。",

  observationPoint: "横から顔を見て鼻先の形を確認し、泳ぐときの後肢にも注目してください。",

  references: [
    "国立科学博物館 海棲哺乳類データベース：ハイイロアザラシ",
    "NOAA Fisheries：Gray Seal",
    "IUCN Red List：Halichoerus grypus"
  ]
},


// ========================================
// sp0175 フウセンウオ
// LABO3
// ========================================

{
  id: "sp0175",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フウセンウオ",

  scientificName: "Eumicrotremus pacificus",

  englishName: "Balloon lumpfish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "ダンゴウオ科",
    "Eumicrotremus属"
  ],

  category: "魚類",

  image: "images/sp0175.jpg",

  trivia: [
    {
      title: "腹びれが吸盤になっている",
      text: "腹びれが一つの吸盤に変化し、岩などへ体を固定できます。"
    },
    {
      title: "飼育下では水温4.2℃で産卵した例がある",
      text: "飼育下では低水温の4.2℃で産卵した例があります。"
    }
  ],

  bodyLength: "最大で全長約20cm。",

  distribution: "オホーツク海や北海道周辺、日本海、東シナ海などに分布します。",

  habitat: "冷たい海の海底付近に生息し、水深232mまで記録されています。",

  diet: "野生での詳しい食性については、十分な情報がありません。",

  features: "風船のように丸い体と、腹側にある吸盤が特徴です。",

  behavior: "泳ぎ続けるより、吸盤を使って岩などへ付着していることがあります。",

  reproduction: "飼育下では低水温期に産卵し、オスが体を震わせて求愛した例があります。",

  identification: "丸く膨らんだ体と腹側の吸盤が特徴です。",

  nameOrigin: "丸く膨らんだ体が風船のように見えることから名付けられました。",

  humanRelation: "食用として重要ではありませんが、丸い姿から水族館で人気があります。",

  observationPoint: "お腹の吸盤と、コンペイトウやダンゴウオとの体形の違いを比べてください。",

  references: [
    "FishBase：Eumicrotremus pacificus",
    "BiSMAL：Eumicrotremus pacificus フウセンウオ",
    "日本動物園水族館協会：フウセンウオの繁殖について",
    "NCBI Taxonomy：Eumicrotremus pacificus"
  ]
},


// ========================================
// sp0176 フサギンポ
// LABO3
// ========================================

{
  id: "sp0176",

  areaIds: [
    "labo3"
  ],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "フサギンポ",

  scientificName: "Chirolophis japonicus",

  englishName: "Japanese decorated warbonnet",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "タウエガジ科",
    "フサギンポ属"
  ],

  category: "魚類",

  image: "images/sp0176.jpg",

  trivia: [
    {
      title: "頭の『ふさふさ』は海藻ではない",
      text: "頭部には多数の房状の突起があり、海藻に紛れるのに役立ちます。"
    },
    {
      title: "ナマコをかじって食べる",
      text: "ナマコや巻貝などを、鋭い歯でかじって食べます。"
    }
  ],

  bodyLength: "全長50cmほどになる大型の魚です。",

  distribution: "北海道など北西太平洋の冷たい海に分布します。",

  habitat: "浅い岩礁で、海藻の間や岩の割れ目などを隠れ場所にします。",

  diet: "ナマコや大型の巻貝、イソギンチャクなどを食べる肉食性です。",

  features: "細長い大型の体と、頭部にある多数の房状の突起が特徴です。",

  behavior: "岩の隙間や海藻の中へ隠れる性質が強く、大型でも見つけにくい魚です。",

  reproduction: "冬に産卵し、水槽ではメスが卵塊を守った例があります。",

  identification: "頭部の房状の突起と、大型で細長い体が特徴です。",

  nameOrigin: "頭部に「房」のような突起が多数あることから名付けられました。",

  humanRelation: "主要な食用魚ではなく、北方系の岩礁魚として水族館で展示されます。",

  observationPoint: "頭の周りを見て、海藻のように見える房状の突起を探してください。",

  references: [
    "新潟市水族館 マリンピア日本海：フサギンポ",
    "FishBase：Chirolophis japonicus",
    "Shiogaki 1983. On the Life History of the Stichaeid Fish Chirolophis japonicus",
    "BiSMAL：Chirolophis japonicus"
  ]
},


// ========================================
// sp0177 アデリーペンギン / LABO4
// ========================================
{
  id: "sp0177",

  areaIds: ["labo4"],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "アデリーペンギン",

  scientificName: "Pygoscelis adeliae",

  englishName: "Adélie penguin",

  classification: [
    "脊索動物門",
    "鳥綱",
    "ペンギン目",
    "ペンギン科",
    "アデリーペンギン属"
  ],

  category: "鳥類",

  image: "images/sp0177.jpg",

  trivia: [
    {
      title: "小石を集めて巣をつくる",
      text: "小石を集めて巣を作り、卵やひなを雪解け水から守ります。"
    },
    {
      title: "雪の上ではお腹で滑る",
      text: "歩くだけでなく、お腹を雪につけて滑りながら移動することもあります。"
    }
  ],

  bodyLength: "立った高さ約70cm、体重約3〜6kg。",

  distribution: "南極大陸の沿岸と周辺の島々に分布します。",

  habitat: "海で餌を取り、繁殖には岩や小石が露出した陸地を利用します。",

  diet: "オキアミ類や魚、小型の甲殻類などを食べます。",

  features: "黒い頭と背中、白い腹を持ち、成鳥では目の周りに白い輪があります。",

  behavior: "海で採餌し、繁殖地では大きな集団を作ります。",

  reproduction: "通常2個の卵を産み、オスとメスが交代で温めます。",

  identification: "黒い顔と、目を囲む白い輪が特徴です。",

  nameOrigin: "フランスの探検家デュモン・デュルヴィルの妻アデールにちなみます。",

  humanRelation: "南極の海洋生態系を調べるため、繁殖や採餌行動が長期調査されています。",

  observationPoint: "目の周囲の白い輪を探し、ほかのペンギンとの顔の違いを比べてください。",

  references: [
    "Australian Antarctic Program：Adélie penguin（生態・体格・名前） https://www.antarctica.gov.au/about-antarctica/animals/penguins/adelie-penguin/",
    "横浜・八景島シーパラダイス：LABO4『氷の海にくらす動物たち』（展示場所） https://www.seaparadise.co.jp/aquaresorts/aquamuseum/facility/labo4.html"
  ]
},


// ========================================
// sp0178 オウサマペンギン / LABO4
// ========================================
{
  id: "sp0178",

  areaIds: ["labo4"],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "オウサマペンギン",

  scientificName: "Aptenodytes patagonicus",

  englishName: "King penguin",

  classification: [
    "脊索動物門",
    "鳥綱",
    "ペンギン目",
    "ペンギン科",
    "オウサマペンギン属"
  ],

  category: "鳥類",

  image: "images/sp0178.jpg",

  trivia: [
    {
      title: "足の上で卵を温める",
      text: "巣を作らず、卵を足の上に載せて温めます。"
    },
    {
      title: "『王様』でも大きさは2番目",
      text: "現生のペンギンでは、コウテイペンギンに次いで2番目に大きい種類です。"
    }
  ],

  bodyLength: "立った高さ約85〜95cm、体重はおよそ10〜15kg。",

  distribution: "サウスジョージア島など亜南極の島々で繁殖します。",

  habitat: "海で餌を取り、雪や氷の少ない海岸や平地で繁殖します。",

  diet: "主に魚を食べ、イカ類も利用します。",

  features: "大型で、黒い頭の両側から胸にかけて鮮やかな橙黄色があります。",

  behavior: "大きな繁殖集団を作り、親は海と繁殖地を往復してひなへ餌を運びます。",

  reproduction: "卵を約54日温め、繁殖周期は13〜16か月ほどかかることがあります。",

  identification: "大きな体と、頭の両側から胸にある鮮やかな橙色が特徴です。",

  nameOrigin: "かつて最大のペンギンと考えられたことが英名 King penguin の背景にあります。",

  humanRelation: "過去には油を得るため大量に捕獲され、個体数が減少した地域もあります。",

  observationPoint: "体の大きさと、頭の両側にある鮮やかな橙色に注目してください。",

  references: [
    "Australian Antarctic Program：King penguin（学名・生態・体格・歴史） https://www.antarctica.gov.au/about-antarctica/animals/penguins/king-penguin/",
    "横浜・八景島シーパラダイス：LABO4『氷の海にくらす動物たち』（展示場所） https://www.seaparadise.co.jp/aquaresorts/aquamuseum/facility/labo4.html"
  ]
},


// ========================================
// sp0179 ジェンツーペンギン / LABO4
// ========================================
{
  id: "sp0179",

  areaIds: ["labo4"],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ジェンツーペンギン",

  scientificName: "Pygoscelis papua",

  englishName: "Gentoo penguin",

  classification: [
    "脊索動物門",
    "鳥綱",
    "ペンギン目",
    "ペンギン科",
    "アデリーペンギン属"
  ],

  category: "鳥類",

  image: "images/sp0179.jpg",

  trivia: [
    {
      title: "頭の白い模様が目印",
      text: "左右の目の上にある白い部分が、頭頂部で帯のようにつながります。"
    },
    {
      title: "場所によって献立が変わる",
      text: "魚や甲殻類、イカなどを食べ、地域や季節によって餌が変わります。"
    }
  ],

  bodyLength: "立った高さ約76cm、体重約5〜8kg。",

  distribution: "亜南極の島々や南極半島などに分布します。",

  habitat: "沿岸で餌を取り、雪のない地面や草地などで繁殖します。",

  diet: "甲殻類や小魚、イカなどを食べます。",

  features: "頭頂部の白い帯と、赤橙色のくちばしが目立ちます。",

  behavior: "繁殖地周辺で暮らし、巣の近くでは縄張りを守ることがあります。",

  reproduction: "小石などで巣を作り、通常2個の卵を産みます。",

  identification: "頭頂部の白い帯と赤橙色のくちばしが特徴です。",

  nameOrigin: "和名は英名 Gentoo penguin に由来しますが、Gentoo自体の詳しい由来は不明です。",

  humanRelation: "繁殖地では人の活動などが巣へ影響する地域があります。",

  observationPoint: "頭の白い帯と、ほかのペンギンとのくちばしの色の違いを比べてください。",

  references: [
    "Australian Antarctic Program：Gentoo penguin（生態・体重） https://www.antarctica.gov.au/about-antarctica/animals/penguins/gentoo-penguin/",
    "University of Michigan, Animal Diversity Web：Pygoscelis papua（分類・体格・頭部の模様・営巣） https://animaldiversity.org/accounts/Pygoscelis_papua/",
    "横浜・八景島シーパラダイス：LABO4『氷の海にくらす動物たち』（展示場所） https://www.seaparadise.co.jp/aquaresorts/aquamuseum/facility/labo4.html"
  ]
},


// ========================================
// sp0180 セイウチ / LABO4
// ========================================
{
  id: "sp0180",

  areaIds: ["labo4"],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "セイウチ",

  scientificName: "Odobenus rosmarus",

  englishName: "Walrus",

  classification: [
    "脊索動物門",
    "哺乳綱",
    "食肉目",
    "セイウチ科",
    "セイウチ属"
  ],

  category: "哺乳類",

  image: "images/sp0180.jpg",

  trivia: [
    {
      title: "キバは大きく伸びた犬歯",
      text: "2本のキバは上あごの犬歯が伸びたもので、オスにもメスにもあります。"
    },
    {
      title: "貝の身を吸い出して食べる",
      text: "ひげで餌を探し、強い吸引力で貝の軟らかい部分を吸い出します。"
    }
  ],

  bodyLength: "体長約2.5mが目安で、大型のオスは1tを超えることがあります。",

  distribution: "北極圏を中心とする寒冷な海に分布します。",

  habitat: "比較的浅い海で餌を取り、海氷や海岸を休息場所として利用します。",

  diet: "二枚貝や巻貝、ゴカイ、ナマコなど海底の動物を食べます。",

  features: "大きな体、長い2本のキバ、口の周囲に密生する太いひげが特徴です。",

  behavior: "群れで休息し、海へ潜って餌を探します。",

  reproduction: "通常1頭の子を産み、子は約2年間母親と一緒に過ごします。",

  identification: "長いキバと、口元に密生する太いひげが特徴です。",

  nameOrigin: "和名の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "北極圏の人々にとって伝統的に重要な食料で、海氷の減少も生息に影響します。",

  observationPoint: "キバだけでなく、口元のひげや唇の動きにも注目してください。",

  references: [
    "横浜・八景島シーパラダイス：セイウチ（和名・種学名・科・体長の目安・展示） https://www.seaparadise.co.jp/aquaresorts/creature/seiuchi.html",
    "Alaska Department of Fish and Game：Pacific Walrus（太平洋個体の体格・採餌・繁殖） https://www.adfg.alaska.gov/index.cfm?adfg=walrus.main",
    "Marine Mammal Commission：Pacific Walrus（海氷との関係・キバ・個体群） https://www.mmc.gov/priority-topics/species-of-concern/pacific-walrus/",
    "U.S. Fish and Wildlife Service：Pacific Walrus（種と亜種の区別） https://www.fws.gov/species/pacific-walrus-odobenus-rosmarus-divergens"
  ]
},


// ========================================
// sp0181 ヒゲペンギン / LABO4
// ========================================
{
  id: "sp0181",

  areaIds: ["labo4"],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ヒゲペンギン",

  scientificName: "Pygoscelis antarcticus",

  englishName: "Chinstrap penguin",

  classification: [
    "脊索動物門",
    "鳥綱",
    "ペンギン目",
    "ペンギン科",
    "アデリーペンギン属"
  ],

  category: "鳥類",

  image: "images/sp0181.jpg",

  trivia: [
    {
      title: "『ヒゲ』の正体は羽毛の模様",
      text: "あごの下に黒い羽毛が細い帯のように並び、ひげのように見えます。"
    },
    {
      title: "両親で卵を温める",
      text: "オスとメスが交代で卵を温め、通常2羽のひなを育てます。"
    }
  ],

  bodyLength: "体長約70cm、体重約4〜6kg。",

  distribution: "南極半島や周辺の島々を中心に分布します。",

  habitat: "南極・亜南極の海で餌を取り、沿岸の陸地で集団繁殖します。",

  diet: "主にオキアミ類を食べ、魚も捕食します。",

  features: "白い顔と、あごの下を横切る細い黒帯が特徴です。",

  behavior: "翼を使って水中を進み、繁殖地の近くで餌を探すことが多い種類です。",

  reproduction: "通常2個の卵を産み、オスとメスが交代で約33〜36日温めます。",

  identification: "白い顔と、あごの下にある黒い線が目印です。",

  nameOrigin: "あごの黒い模様がひげに見えることから名付けられました。",

  humanRelation: "八景島では2024年11月から展示されています。",

  observationPoint: "顔を横から見て、あごの下を通る黒い線を探してください。",

  references: [
    "横浜・八景島シーパラダイス：『ヒゲペンギン』が仲間入り（名称・学名・体格・展示開始） https://www.seaparadise.co.jp/event/higepenguine2024/index.html",
    "BirdLife International：Chinstrap Penguin Pygoscelis antarcticus（採用学名・分布） https://datazone.birdlife.org/species/factsheet/chinstrap-penguin-pygoscelis-antarcticus",
    "Australian Antarctic Program：Chinstrap penguin（生態・繁殖。学名はantarctica表記） https://www.antarctica.gov.au/about-antarctica/animals/penguins/chinstrap-penguin/"
  ]
},


// ========================================
// sp0182 ホッキョクグマ / LABO4
// ========================================
{
  id: "sp0182",

  areaIds: ["labo4"],

  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",

  nameJa: "ホッキョクグマ",

  scientificName: "Ursus maritimus",

  englishName: "Polar bear",

  classification: [
    "脊索動物門",
    "哺乳綱",
    "食肉目",
    "クマ科",
    "クマ属"
  ],

  category: "哺乳類",

  image: "images/sp0182.jpg",

  trivia: [
    {
      title: "白く見える毛の下は黒い皮膚",
      text: "体毛自体は透明で、その下には黒い皮膚があります。"
    },
    {
      title: "泳ぐときは前足で水をかく",
      text: "大きな前足で水をかき、後ろ足で進む方向を調整します。"
    }
  ],

  bodyLength: "頭胴長は約1.8〜2.7mで、オスの方が大型です。",

  distribution: "北極圏とその周辺に分布します。",

  habitat: "海氷や沿岸を利用し、海氷はアザラシを捕らえる重要な足場になります。",

  diet: "主にアザラシ類を食べ、クジラの死体なども利用します。",

  features: "白く見える密な体毛と厚い脂肪、幅広い足を持つ大型のクマです。",

  behavior: "単独で行動することが多く、海氷上でアザラシを待ち伏せします。",

  reproduction: "通常1〜3頭の子を雪の巣穴で産み、母親が授乳して育てます。",

  identification: "白く見える毛と黒い鼻、大きな体が特徴です。",

  nameOrigin: "北極域に暮らすクマという意味で、学名は「海のクマ」を意味します。",

  humanRelation: "海氷の減少による採餌環境の変化が、保全上の課題となっています。",

  observationPoint: "泳ぐときの前足と後ろ足の使い方や、大きな足に注目してください。",

  references: [
    "San Diego Zoo Wildlife Alliance：Polar Bear（頭胴長・遊泳・食性・繁殖・海氷） https://animals.sandiegozoo.org/animals/polar-bear",
    "横浜・八景島シーパラダイス：ホッキョクグマ（学名・科・体毛と皮膚・展示。本文の直立時の高さと体長は混同しない） https://www.seaparadise.co.jp/aquaresorts/creature/kuma.html"
  ]
},


{
  id: "sp0183",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカシュモクザメ",
  scientificName: "Sphyrna lewini",
  englishName: "Scalloped hammerhead",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "シュモクザメ科", "シュモクザメ属"],
  category: "魚類",
  image: "images/sp0183.jpg",

  trivia: [
    {
      title: "頭の前縁が見分ける手がかり",
      text: "頭の前縁中央にくぼみがあり、ほかのシュモクザメ類を見分ける手掛かりになります。"
    },
    {
      title: "群れをつくる大型のサメ",
      text: "単独だけでなく群れを作ることがあり、幼魚は浅い沿岸を成長場所として利用します。"
    }
  ],

  bodyLength: "全長3mを超え、大型個体では約4mになります。",

  distribution: "世界の熱帯から暖温帯の海に広く分布し、日本近海にも生息します。",

  habitat: "沿岸から沖合まで広く利用し、幼魚は比較的浅い海で見られます。",

  diet: "魚やイカ、甲殻類、小型のサメやエイなどを食べます。",

  features: "左右に大きく広がった頭と、その両端にある目が特徴です。",

  behavior: "沿岸と沖合を移動しながら餌を探し、単独でも群れでも行動します。",

  reproduction: "胎生で、母体内で子を育てて複数の子を出産します。",

  identification: "頭の前縁中央にあるくぼみが、種類を見分ける重要な特徴です。",

  nameOrigin: "「シュモク」は鐘を打つ撞木に似た頭の形に由来します。",

  humanRelation: "漁獲や混獲の影響を受け、幼魚が育つ沿岸環境の保全も重要です。",

  observationPoint: "正面から頭の中央のくぼみと、両端にある目の位置を見てください。",

  references: [
    "Florida Museum：Scalloped Hammerhead（形態・識別・生態） https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/scalloped-hammerhead/",
    "FishBase：Sphyrna lewini（分布・食性・繁殖） https://fishbase.se/summary/Sphyrna_lewini.html",
    "東京都島しょ農林水産総合センター：アカシュモクザメ https://www.ifarc.metro.tokyo.lg.jp/archive/27,1120,55,227.html"
  ]
},

{
  id: "sp0184",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "エイラクブカ",
  scientificName: "Hemitriakis japanica",
  englishName: "Japanese topeshark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "ドチザメ科", "エイラクブカ属"],
  category: "魚類",
  image: "images/sp0184.jpg",

  trivia: [
    {
      title: "呼吸の方法を使い分ける",
      text: "泳いで水を取り込む方法と、口や噴水孔を動かして水を送る方法の両方で呼吸できます。"
    },
    {
      title: "胃の中身から分かる食生活",
      text: "胃内容物の調査から、魚やイカ・タコなどを食べることが分かっています。"
    }
  ],

  bodyLength: "全長1m前後になり、メスでは最大約1.2mの記録があります。",

  distribution: "日本、朝鮮半島、中国、台湾周辺など北西太平洋に分布します。",

  habitat: "沿岸から沖合の海底近くに生息し、比較的深い場所でも見られます。",

  diet: "魚類やイカ・タコなどの頭足類を食べます。",

  features: "細長い体と2基の背びれを持ち、目の後ろには呼吸に使う噴水孔があります。",

  behavior: "泳ぎながら呼吸するほか、口や噴水孔を動かして水を取り込むこともあります。",

  reproduction: "無胎盤性の胎生で、1回に8〜22尾を産み、生まれた子は全長約20〜21cmです。",

  identification: "細長い体や頭部、背びれの形などを、ほかのドチザメ科のサメと見比べます。",

  nameOrigin: "標準和名の詳しい語源は不明ですが、種小名 japanica は日本にちなみます。",

  humanRelation: "漁業で漁獲されることがあり、食性や分布などの研究対象にもなっています。",

  observationPoint: "目の後ろの噴水孔と、体側に並ぶ5対の鰓孔を探してください。",

  references: [
    "FishBase：Hemitriakis japanica（受理名・分布・大きさ・繁殖） https://www.fishbase.se/summary/Hemitriakis-japanica.html",
    "海遊館：サメやエイの呼吸（エイラクブカの観察） https://www.kaiyukan.com/connect/notes/post-212.html",
    "Kamura & Hashimoto（2004）：瀬戸内海中央部における板鰓類4種の食性、Fisheries Science 70（6） https://www.jstage.jst.go.jp/article/fishsci1994/70/6/70_6_1019/_article/-char/ja/"
  ]
},

{
  id: "sp0185",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "カマストガリザメ",
  scientificName: "Carcharhinus limbatus",
  englishName: "Blacktip shark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "メジロザメ科", "メジロザメ属"],
  category: "魚類",
  image: "images/sp0185.jpg",

  trivia: [
    {
      title: "黒いひれ先にも違いがある",
      text: "複数のひれ先が黒くなりますが、尻びれは通常黒くなりません。"
    },
    {
      title: "海面から跳び出すことも",
      text: "魚の群れを追い、回転しながら海面から跳び出すことがあります。"
    }
  ],

  bodyLength: "全長約1.5mが一般的で、大型では2mを超え、最大約2.9mの記録があります。",

  distribution: "世界の熱帯・亜熱帯から暖温帯の海に分布し、日本周辺にも生息します。",

  habitat: "浅い沿岸や湾、河口、サンゴ礁周辺などに生息します。",

  diet: "小魚を中心に、イカや甲殻類、小型の軟骨魚類なども食べます。",

  features: "とがった吻を持ち、背びれや胸びれなどの先端が黒くなります。",

  behavior: "活発に泳いで魚群を追い、単独だけでなく群れになることもあります。",

  reproduction: "胎盤を持つ胎生で、妊娠期間は約11〜12か月です。",

  identification: "黒いひれ先だけでなく、とがった吻や尻びれの色も確認します。",

  nameOrigin: "英名 Blacktip shark は、ひれ先の黒色部分に由来します。",

  humanRelation: "肉やひれが利用される漁業対象種で、幼魚が育つ浅い沿岸も重要な生息場所です。",

  observationPoint: "ひれの先を見比べ、特に尻びれが黒くないことを確認してみてください。",

  references: [
    "Florida Museum：Blacktip Shark（識別・行動・繁殖） https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/blacktip-shark/",
    "FishBase：Carcharhinus limbatus（大きさ・分布・食性） https://www.fishbase.se/summary/Carcharhinus-limbatus.html"
  ]
},

{
  id: "sp0186",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロヘリメジロザメ",
  scientificName: "Carcharhinus brachyurus",
  englishName: "Copper shark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "メジロザメ科", "メジロザメ属"],
  category: "魚類",
  image: "images/sp0186.jpg",

  trivia: [
    {
      title: "英語では銅色のサメ",
      text: "背中が銅色や青銅色に見えることから、Copper shark や Bronze whaler と呼ばれます。"
    },
    {
      title: "魚の大群を追うサメの一つ",
      text: "南アフリカでは、イワシの大群を追うサーディン・ランに現れることがあります。"
    }
  ],

  bodyLength: "全長3mほどになる大型のサメです。",

  distribution: "世界の温帯から亜熱帯の海に分布し、日本周辺でも見られます。",

  habitat: "沿岸の湾や河口から、沖合の大陸棚まで利用します。",

  diet: "イワシやボラなどの魚、イカ、小型のサメやエイなどを食べます。",

  features: "灰褐色から銅色の背面を持ち、吻は比較的長くとがっています。",

  behavior: "餌となる魚を追って移動し、群れを作ることもあります。",

  reproduction: "胎盤を持つ胎生で、繁殖できるようになるまで10年以上かかる地域もあります。",

  identification: "吻の形や背びれ間の隆起線がないことなどを、ほかの大型サメと見比べます。",

  nameOrigin: "英名の Copper や Bronze は、銅色や青銅色に見える体色に由来します。",

  humanRelation: "漁業対象になりますが、成熟が遅いため個体数の回復には時間がかかります。",

  observationPoint: "吻の長さや胸びれの形を見て、ドタブカとの違いを探してください。",

  references: [
    "新潟市水族館マリンピア日本海：クロヘリメジロザメ（和名・大きさ・分布） https://www.marinepia.or.jp/picturebook/fish/entry-11297.html",
    "Florida Museum：Bronze Whaler Shark（形態・識別・生態） https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/bronze-whaler-shark/",
    "FishBase：Carcharhinus brachyurus（分布・移動・食性） https://www.fishbase.se/summary/carcharhinus-brachyurus"
  ]
},

{
  id: "sp0187",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コブダイ",
  scientificName: "Bodianus reticulatus",
  englishName: "Asian sheepshead wrasse",
  classification: ["脊索動物門", "条鰭綱", "ベラ科", "タキベラ属"],
  category: "魚類",
  image: "images/sp0187.jpg",

  trivia: [
    {
      title: "タイではなくベラの仲間",
      text: "名前に「タイ」と付きますが、タイ科ではなくベラ科の魚です。"
    },
    {
      title: "成長に伴って顔も性も変わる",
      text: "メスからオスへ性転換し、大型のオスでは額と下あごが大きく張り出します。"
    }
  ],

  bodyLength: "大型個体では全長1mを超えます。",

  distribution: "日本では東北地方から九州にかけての沿岸などに分布します。",

  habitat: "沿岸の岩礁域に生息し、岩の周辺や海底で餌を探します。",

  diet: "貝類や甲殻類、ウニ類など硬い殻を持つ生物も食べます。",

  features: "厚い唇と大きな頭を持ち、大型のオスでは額のこぶと下あごが目立ちます。",

  behavior: "岩礁周辺で餌を探し、大型のオスは縄張りを持つことがあります。",

  reproduction: "卵生で、成長するとメスからオスへ性転換する個体がいます。",

  identification: "大型のオスでは額のこぶと張り出した下あごが大きな特徴です。",

  nameOrigin: "額に発達する大きなこぶが名前の由来です。",

  humanRelation: "食用にされるほか、性転換や成長による姿の変化を観察できる魚です。",

  observationPoint: "額だけでなく、下あごや厚い唇にも注目してください。",

  references: [
    "WoRMS：Semicossyphus reticulatusをBodianus reticulatusとして受理 https://www.marinespecies.org/aphia.php?p=taxlist&tName=Semicossyphus",
    "男鹿水族館GAO：コブダイ（分布・体格・性転換・食用） https://www.gao-aqua.jp/animal/43001.html",
    "四国水族館：コブダイ（食性・縄張り） https://shikoku-aquarium.jp/kannai/exhibition/creature/151.html",
    "鴨川シーワールド：コブダイの繁殖・育成報告 https://www.kamogawa-seaworld.jp/animal/aquarium_info/1214/"
  ]
},

{
  id: "sp0188",
  areaIds: ["labo5",
"dolphin-cylinder"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タカベ",
  scientificName: "Labracoglossa argenteiventris",
  englishName: "Yellowstriped butterfish",
  classification: ["脊索動物門", "条鰭綱", "タカベ科", "タカベ属"],
  category: "魚類",
  image: "images/sp0188.jpg",

  trivia: [
    {
      title: "黄色い帯は尾まで続く",
      text: "青い体の背中側に鮮やかな黄色い帯が走り、尾も黄色く見えます。"
    },
    {
      title: "小さな口でプランクトンを食べる",
      text: "岩礁を群れで泳ぎながら、主に動物プランクトンを食べます。"
    }
  ],

  bodyLength: "全長約25cm。",

  distribution: "日本沿岸に分布し、房総半島から九州の太平洋側や伊豆諸島などで見られます。",

  habitat: "沿岸の岩礁域の中層で群れを作ります。",

  diet: "主に動物プランクトンを食べます。",

  features: "青い背面と銀白色の腹面を持ち、背中側には黄色い帯があります。",

  behavior: "岩礁の周囲を大きな群れで泳ぎます。",

  reproduction: "卵生で、伊豆諸島では秋に産卵するとされています。",

  identification: "青い背面、黄色い帯と尾、小さな口が特徴です。",

  nameOrigin: "標準和名の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "伊豆諸島などで重要な水産物となり、塩焼きや煮魚などで食べられます。",

  observationPoint: "群れが方向転換するときに、黄色い帯と尾がそろって動く様子を見てください。",

  references: [
    "FishBase：Labracoglossa argenteiventris（受理表記・分類・食性） https://www.fishbase.se/summary/Labracoglossa-argenteiventris.html",
    "東京都島しょ農林水産総合センター：タカベ（形態・伊豆諸島の生態・漁業） https://www.ifarc.metro.tokyo.lg.jp/archive/27,1037,55,227.html",
    "新潟市水族館マリンピア日本海：タカベ（体格・分布） https://www.marinepia.or.jp/picturebook/fish/entry-11502.html"
  ]
},

{
  id: "sp0189",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ツバクロエイ",
  scientificName: "Gymnura japonica",
  englishName: "Japanese butterflyray",
  classification: ["脊索動物門", "軟骨魚綱", "トビエイ目", "ツバクロエイ科", "ツバクロエイ属"],
  category: "魚類",
  image: "images/sp0189.jpg",

  trivia: [
    {
      title: "横幅の広さが際立つエイ",
      text: "胸びれが左右へ大きく広がり、前後の長さより横幅の方が大きな体形です。"
    },
    {
      title: "ツバメにちなむ名前",
      text: "「ツバクロ」はツバメの別名で、翼を広げたような姿に由来します。"
    }
  ],

  bodyLength: "体盤幅が1mを超える大型個体も知られています。",

  distribution: "日本周辺から東アジアの沿岸に分布します。",

  habitat: "浅い海の砂底や泥底に生息します。",

  diet: "海底にいるさまざまな動物を食べます。",

  features: "横に大きく広がった平たい体盤と、比較的短い尾が特徴です。",

  behavior: "海底近くで暮らし、広い胸びれを動かして泳ぎます。",

  reproduction: "無胎盤性の胎生で、母体内で子を育ててから出産します。",

  identification: "極端に横長の体盤と短い尾が特徴です。",

  nameOrigin: "ツバメの別名「ツバクロ」にちなみます。",

  humanRelation: "漁業で漁獲され、肉やかまぼこの原料として利用されることがあります。",

  observationPoint: "体の横幅と前後の長さを比べ、短い尾も探してください。",

  references: [
    "鳥羽水族館：ツバクロエイ（分布・名前・体形） https://aquarium.co.jp/picturebook/gymnura-japonica.html",
    "FishBase：Gymnura japonica（生息環境・繁殖・利用） https://www.fishbase.se/summary/Gymnura-japonica.html",
    "日本動物園水族館協会：文献資料（ツバクロエイの体盤幅140cmの記録） https://www.jaza.jp/literatures/26"
  ]
},

{
  id: "sp0190",
  areaIds: ["labo5",
"dolphin-cylinder"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "トビエイ",
  scientificName: "Myliobatis tobijei",
  englishName: "Japanese eagle ray",
  classification: ["脊索動物門", "軟骨魚綱", "トビエイ目", "トビエイ科", "トビエイ属"],
  category: "魚類",
  image: "images/sp0190.jpg",

  trivia: [
    {
      title: "翼を羽ばたかせるように泳ぐ",
      text: "左右の胸びれを大きく上下させ、水中を飛ぶように泳ぎます。"
    },
    {
      title: "口の中には餌を砕く歯の列",
      text: "板状の歯が並び、貝など硬い餌を砕くのに適しています。"
    }
  ],

  bodyLength: "体盤幅約66.5cm、尾を含む全長では約1.5mの記録があります。",

  distribution: "日本、朝鮮半島、中国沿岸など北西太平洋に分布します。",

  habitat: "沿岸の海で暮らし、海底付近やその上を泳ぎます。",

  diet: "海底にいる動物を食べ、板状の歯で貝類などを砕きます。",

  features: "前へ張り出した頭と翼のような胸びれ、細長い尾を持ちます。",

  behavior: "胸びれを羽ばたかせるように泳ぎながら、海底の餌を探します。",

  reproduction: "無胎盤性の胎生で、母体内で育った子を出産します。",

  identification: "前へ突き出た頭、翼状の胸びれ、長い尾が特徴です。",

  nameOrigin: "水中を飛ぶように泳ぐ姿が名前の由来です。",

  humanRelation: "漁業で漁獲されることがあり、尾には毒を伴う棘があります。",

  observationPoint: "胸びれの上下運動と、前へ張り出した頭に注目してください。",

  references: [
    "鳥羽水族館：トビエイ（分布・泳ぎ方・尾棘） https://aquarium.co.jp/picturebook/myliobatis-tobijei.html",
    "FishBase：Myliobatis tobijei（Whiteら2015年の再記載に基づく形態・体盤幅、繁殖） https://www.fishbase.se/summary/Myliobatis-tobijei.html"
  ]
},

{
  id: "sp0191",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ドタブカ",
  scientificName: "Carcharhinus obscurus",
  englishName: "Dusky shark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "メジロザメ科", "メジロザメ属"],
  category: "魚類",
  image: "images/sp0191.jpg",

  trivia: [
    {
      title: "背中の細い線が識別の手がかり",
      text: "第1背びれと第2背びれの間に、低い隆起線があります。"
    },
    {
      title: "繁殖までに長い年月が必要",
      text: "繁殖できるまで十数年から20年以上かかる地域もあります。"
    }
  ],

  bodyLength: "全長2〜3m級で、大型個体では約4mになります。",

  distribution: "世界の暖温帯から熱帯の海に広く分布し、日本周辺でも見られます。",

  habitat: "沿岸から沖合の大陸棚まで利用し、成長するとより深い場所にも現れます。",

  diet: "魚類や小型のサメ・エイ、イカ、甲殻類などを食べます。",

  features: "灰色の体と幅広く丸みのある吻を持ち、背びれの間には低い隆起線があります。",

  behavior: "季節によって長距離を移動し、成長に伴って利用する海域も変化します。",

  reproduction: "胎盤を持つ胎生で、妊娠は1年以上続くことがあります。",

  identification: "丸みのある吻、胸びれの形、背びれ間の隆起線などを組み合わせて見分けます。",

  nameOrigin: "英名 Dusky と種小名 obscurus は、暗い・くすんだ色合いを意味します。",

  humanRelation: "漁業で利用されますが、成熟が遅いため個体数の減少が問題になります。",

  observationPoint: "クロヘリメジロザメと、吻の丸みや胸びれの形を比べてみてください。",

  references: [
    "Florida Museum：Dusky Shark（識別・成熟・繁殖） https://www.floridamuseum.ufl.edu/discover-fish/species-profiles/dusky-shark/",
    "FishBase：Carcharhinus obscurus（分布・食性・大きさ・学名語源） https://www.fishbase.se/summary/Carcharhinus-obscurus.html",
    "神奈川県立生命の星・地球博物館：魚類標本目録（和名と学名の対応） https://nh.kanagawa-museum.jp/uploads/CCKPMNH_12.pdf"
  ]
},

{
  id: "sp0192",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ネコザメ",
  scientificName: "Heterodontus japonicus",
  englishName: "Japanese bullhead shark",
  classification: ["脊索動物門", "軟骨魚綱", "ネコザメ目", "ネコザメ科", "ネコザメ属"],
  category: "魚類",
  image: "images/sp0192.jpg",

  trivia: [
    {
      title: "サザエ割りと呼ばれるサメ",
      text: "奥歯で貝などの硬い殻を砕くことから「サザエ割り」とも呼ばれます。"
    },
    {
      title: "卵のケースがらせん形",
      text: "卵はらせん状のひだを持つ特徴的な卵殻に包まれています。"
    }
  ],

  bodyLength: "全長60〜80cmほどで、大型では1mを超え、最大約1.2mの記録があります。",

  distribution: "日本、朝鮮半島、中国、台湾周辺など北西太平洋に分布します。",

  habitat: "沿岸の岩礁や海藻のある海底で暮らします。",

  diet: "貝類や甲殻類、ウニ、小魚などを食べます。",

  features: "丸みのある頭と目の上の張り出し、暗色の帯、背びれ前方の棘が特徴です。",

  behavior: "昼は岩陰などで休み、夜になると餌を探して活動します。",

  reproduction: "卵生で、らせん状の卵殻を産み、孵化まで約1年かかる例もあります。",

  identification: "目の上の張り出しや暗色帯、背びれ前方の棘が特徴です。",

  nameOrigin: "属名 Heterodontus は「異なる歯」を意味し、前方と奥で歯の形が異なります。",

  humanRelation: "漁獲されることがあり、水族館では特徴的な卵も展示されることがあります。",

  observationPoint: "目の上の張り出しと、背びれの前にある棘を探してください。",

  references: [
    "男鹿水族館GAO：ネコザメ（形態・歯・卵殻） https://www.gao-aqua.jp/animal/30165.html",
    "鳥羽水族館：ネコザメの飼育日記（サザエ割り・大きさ・卵） https://aquarium.co.jp/diary/2019/06/42356",
    "FishBase：Heterodontus japonicus（分布・食性・繁殖・学名） https://www.fishbase.se/summary/Heterodontus-japonicus.html",
    "海遊館：サメやエイの呼吸（底生性のサメの呼吸） https://www.kaiyukan.com/connect/notes/post-212.html"
  ]
},

{
  id: "sp0193",
  areaIds: ["labo5",
"dolphin-arch"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ニザダイ",
  scientificName: "Prionurus scalprum",
  englishName: "Scalpel sawtail",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ニザダイ科", "ニザダイ属"],
  category: "魚類",
  image: "images/sp0193.jpg",

  trivia: [
    {
      title: "尾の付け根に何枚もの硬い板",
      text: "尾の付け根には、4〜5枚ほどの硬い骨質板が並びます。"
    },
    {
      title: "浅い岩礁で群れになる",
      text: "浅い岩礁域で、複数の個体が群れを作ることがあります。"
    }
  ],

  bodyLength: "最大で全長約50cmで、成魚は40cm前後になることが多い魚です。",

  distribution: "北西太平洋に分布し、日本では宮城県付近以南から台湾周辺まで見られます。",

  habitat: "沿岸の浅い岩礁域に生息します。",

  diet: "藻類を中心に、小型の底生動物なども食べる雑食性です。",

  features: "左右に平たい体を持ち、尾の付け根には複数の硬い骨質板があります。",

  behavior: "浅い岩礁を泳ぎ回り、岩の表面をついばみながら餌を取ります。",

  reproduction: "本種固有の詳しい産卵時期や行動については、十分な情報がありません。",

  identification: "尾の付け根に4〜5枚ほど並ぶ硬い骨質板が特徴です。",

  nameOrigin: "和名の詳しい語源は不明ですが、英名は尾柄の刃物のような硬い板に由来します。",

  humanRelation: "漁獲され食用になるほか、水族館でも日本沿岸の岩礁魚として展示されます。",

  observationPoint: "尾の付け根を見て、並んでいる硬い板を探してください。",

  references: [
    "BISMaL: Prionurus scalprum ニザダイ",
    "FishBase: Prionurus scalprum",
    "新潟市水族館 マリンピア日本海：ニザダイ"
  ]
},

{
  id: "sp0194",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒゲダイ",
  scientificName: "Hapalogenys sennin",
  englishName: "Long barbeled grunter",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "イサキ科", "ヒゲダイ属"],
  category: "魚類",
  image: "images/sp0194.jpg",

  trivia: [
    {
      title: "あごの下に白い「ひげ」が密生",
      text: "下唇からあごの周辺に、白いひげ状の突起が密集しています。"
    },
    {
      title: "ヒゲソリダイとは別種",
      text: "ヒゲソリダイとは別種で、ヒゲダイは Hapalogenys sennin です。"
    }
  ],

  bodyLength: "大型では全長40cmを超え、約48cmになることもあります。",

  distribution: "主に南日本の温帯域で知られています。",

  habitat: "河口周辺から水深50mほどまでの岩礁や砂底に生息します。",

  diet: "海底付近の小型動物などを食べますが、詳しい食性は十分に分かっていません。",

  features: "暗褐色の体を持ち、下唇からあごには白いひげ状の突起が密生します。",

  behavior: "岩穴や岩の張り出しの下などを利用し、単独で見られることがあります。",

  reproduction: "詳しい産卵時期や繁殖行動については、十分な情報が確認されていません。",

  identification: "あごの下に密生する長い白いひげが特徴です。",

  nameOrigin: "和名は目立つひげ状突起に由来し、種小名 sennin は「仙人」にちなみます。",

  humanRelation: "漁業で混獲され食用になることがあり、水族館では独特なひげを観察できます。",

  observationPoint: "口の下を見て、密集した白いひげ状の突起を探してください。",

  references: [
    "BISMaL: Hapalogenys sennin ヒゲダイ",
    "FishBase: Hapalogenys sennin",
    "新潟市水族館 マリンピア日本海：ヒゲダイ",
    "Iwatsuki & Nakabo 2005: Hapalogenys senninの原記載"
  ]
},

{
  id: "sp0195",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ホシエイ",
  scientificName: "Bathytoshia brevicaudata",
  englishName: "Short-tail stingray",
  classification: ["脊索動物門", "軟骨魚綱", "トビエイ目", "アカエイ科"],
  category: "魚類",
  image: "images/sp0195.jpg",

  trivia: [
    {
      title: "白い「星」は感覚器の入口",
      text: "背中の白い点の一部は、微弱な電気を感じるロレンチーニ瓶の開口部です。"
    },
    {
      title: "約1年かけて子を育てた飼育例",
      text: "飼育下では、受精から約1年後に3個体を出産した例があります。"
    }
  ],

  bodyLength: "体盤幅約1.8mに達し、尾を含む全長4mを超える記録もあります。",

  distribution: "日本周辺を含むインド・西太平洋の温帯域などに分布します。",

  habitat: "沿岸の湾や砂底、岩礁周辺から沖合の大陸棚まで利用します。",

  diet: "魚類や二枚貝、イカ、甲殻類などを食べます。",

  features: "幅広い体盤と暗色の背面を持ち、白い点が並び、尾は比較的短めです。",

  behavior: "海底近くを泳ぎ、砂底や岩礁周辺を移動します。",

  reproduction: "無胎盤性の胎生で、母体内で子を育ててから出産します。",

  identification: "大型で幅広い体盤、背中の白い点、比較的短い尾が特徴です。",

  nameOrigin: "背中の白い点が星のように見えることから「ホシエイ」と呼ばれます。",

  humanRelation: "漁業で混獲されることがあり、尾の毒棘には注意が必要です。",

  observationPoint: "背中の白い点を近くで見て、中央に小さな穴がないか探してください。",

  references: [
    "FishBase: Bathytoshia brevicaudata",
    "新潟市水族館 マリンピア日本海：ホシエイ",
    "新潟市水族館 マリンピア日本海：ホシエイが誕生しました"
  ]
},

{
  id: "sp0196",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ホシザメ",
  scientificName: "Mustelus manazo",
  englishName: "Starspotted smooth-hound",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "ドチザメ科", "ホシザメ属"],
  category: "魚類",
  image: "images/sp0196.jpg",

  trivia: [
    {
      title: "背中の白い点が名前の目印",
      text: "灰色から褐色の背中に、小さな白い点が星のように並びます。"
    },
    {
      title: "鋭く切るより「つぶす」歯",
      text: "硬い甲殻類などをつぶして食べるのに適した歯を持っています。"
    }
  ],

  bodyLength: "通常は1m前後で、約1.25mになる個体も知られています。",

  distribution: "日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",

  habitat: "沿岸の砂底や泥底から沖合まで生息し、水深360mほどまで記録されています。",

  diet: "カニやエビなどの甲殻類を中心に、小魚なども食べます。",

  features: "細長い体を持ち、背中から体側に小さな白い点が並びます。",

  behavior: "砂泥底など海底近くを泳ぎながら餌を探します。",

  reproduction: "無胎盤性の胎生で、妊娠期間は約10〜12か月、1回に1〜22尾を産む記録があります。",

  identification: "背中から体側に並ぶ白い点と、細長い体形が特徴です。",

  nameOrigin: "体に並ぶ白い点を星に見立てた名前です。",

  humanRelation: "漁業で漁獲され、食用になることがあります。",

  observationPoint: "背中の白い点を探し、大型のメジロザメ類との体つきの違いも比べてください。",

  references: [
    "FishBase: Mustelus manazo",
    "新潟市水族館 マリンピア日本海：ホシザメ",
    "FishBase Reproduction: Mustelus manazo"
  ]
},

{
  id: "sp0197",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ボラ",
  scientificName: "Mugil cephalus cephalus",
  englishName: "Flathead grey mullet",
  classification: ["脊索動物門", "条鰭綱", "ボラ目", "ボラ科", "ボラ属"],
  category: "魚類",
  image: "images/sp0197.jpg",

  trivia: [
    {
      title: "海の魚なのに川にも入る",
      text: "沿岸だけでなく河口や汽水域、川の下流まで入り込むことがあります。"
    },
    {
      title: "卵巣は「からすみ」になる",
      text: "成熟したメスの卵巣は、珍味として知られる「からすみ」の原料になります。"
    }
  ],

  bodyLength: "全長50〜80cmほどが多く、大型では1m近くになることがあります。",

  distribution: "日本では北海道から琉球列島まで広く分布します。",

  habitat: "沿岸の浅海や内湾、河口、汽水域、河川下流など幅広い場所に生息します。",

  diet: "成魚はデトリタスや微細藻類、底生生物などを食べ、幼魚は動物プランクトンも多く利用します。",

  features: "銀色の細長い体を持ち、目の周囲には透明な脂瞼が発達します。",

  behavior: "群れで沿岸や河口を泳ぎ、繁殖期には海の産卵場へ移動する個体群があります。",

  reproduction: "海で産卵し、成長した仔稚魚は沿岸や河口へ戻ります。",

  identification: "銀色の太めの体、離れた2基の背びれ、目を覆う脂瞼が特徴です。",

  nameOrigin: "「ボラ」の詳しい語源には複数の説があり、成長段階で名前が変わる出世魚としても知られます。",

  humanRelation: "刺身や焼き物などで食べられ、卵巣はからすみの原料になります。",

  observationPoint: "目をよく見て、透明な脂瞼が眼球の周りを覆っているか確認してください。",

  references: [
    "国立科学博物館 日本産淡水魚類標本データベース：Mugil cephalus cephalus ボラ",
    "鹿児島大学総合研究博物館：ボラ Mugil cephalus cephalus",
    "FishBase: Mugil cephalus"
  ]
},

{
  id: "sp0198",
  areaIds: ["labo5",
"dolphin-cylinder"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マイワシ",
  scientificName: "Sardinops melanostictus",
  englishName: "Japanese pilchard",
  classification: ["脊索動物門", "条鰭綱", "ニシン目", "ニシン科", "マイワシ属"],
  category: "魚類",
  image: "images/sp0198.jpg",

  trivia: [
    {
      title: "体側に並ぶ黒い点",
      text: "銀色の体側には、黒い斑点が1〜3列並びます。"
    },
    {
      title: "えらを使ってプランクトンをこし取る",
      text: "鰓耙を使い、水中の動物プランクトンや珪藻などをこし取って食べます。"
    }
  ],

  bodyLength: "標準体長20cm前後で、全長では25cm程度になる個体もいます。",

  distribution: "北西太平洋に分布し、日本では北海道から種子島付近まで広く見られます。",

  habitat: "沿岸から沖合の海面近くを中心に、大きな群れで泳ぎます。",

  diet: "動物プランクトンや珪藻類などの植物プランクトンを食べます。",

  features: "細長い銀白色の体を持ち、体側には1〜3列の黒い斑点があります。",

  behavior: "多数の個体が密集した群れを作り、同じ方向へ泳ぎながら移動します。",

  reproduction: "海中へ多数の卵を放出し、産卵場所や時期は海域や年代によって変化します。",

  identification: "銀色の細長い体と、体側に列になって並ぶ黒い斑点が特徴です。",

  nameOrigin: "詳しい語源は明確ではありませんが、黒点から「七つ星」などと呼ばれる地域もあります。",

  humanRelation: "日本を代表する水産資源で、鮮魚や干物、缶詰など幅広く利用されます。",

  observationPoint: "群れの中の1匹を追い、銀色の体側に並ぶ黒い点を探してください。",

  references: [
    "新潟市水族館 マリンピア日本海：マイワシ",
    "鹿児島大学総合研究博物館：Sardinops melanostictus マイワシ",
    "FishBase: Sardinops melanostictus / Sardinops sagax の分類情報"
  ]
},

{
  id: "sp0199",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マサバ",
  scientificName: "Scomber japonicus",
  englishName: "Chub mackerel",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "サバ科", "サバ属"],
  category: "魚類",
  image: "images/sp0199.jpg",

  trivia: [
    {
      title: "尾の前に小さなひれが並ぶ",
      text: "背びれと尻びれの後ろには、小離鰭という小さなひれが並びます。"
    },
    {
      title: "小さいうちから同じ大きさで群れる",
      text: "幼魚のころから、同じくらいの大きさの個体で群れを作ります。"
    }
  ],

  bodyLength: "一般的には全長30〜50cmほどで、最大64cmの記録があります。",

  distribution: "日本周辺を含む太平洋の温帯・亜熱帯域などに広く分布します。",

  habitat: "沿岸から大陸棚周辺の表層・中層を群れで泳ぎ、水深300mほどまで記録されています。",

  diet: "甲殻類や小魚、イカ類などを食べます。",

  features: "背中には波状の暗色模様があり、腹側は銀白色で、尾の前には小離鰭が並びます。",

  behavior: "同じ大きさの個体を中心に群れを作り、昼夜で泳ぐ深さを変えることがあります。",

  reproduction: "複数回に分けて産卵し、卵と仔魚は海中を浮遊します。",

  identification: "背中の波状模様と、腹側に目立つ黒点が少ないことが特徴です。",

  nameOrigin: "種小名 japonicus は「日本の」を意味しますが、和名の詳しい語源は不明です。",

  humanRelation: "日本を代表する食用魚で、焼き魚やしめさば、缶詰などに利用されます。",

  observationPoint: "尾の直前を見て、上下に並ぶ小さな小離鰭を探してください。",

  references: [
    "FishBase: Scomber japonicus",
    "BISMaL: Scomber japonicus マサバ",
    "FAO Scombrids of the World: Scomber japonicus"
  ]
},

{
  id: "sp0200",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "メイチダイ",
  scientificName: "Gymnocranius griseus",
  englishName: "Grey large-eye bream",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエフキダイ科", "メイチダイ属"],
  category: "魚類",
  image: "images/sp0200.jpg",

  trivia: [
    {
      title: "幼魚の目を通る黒い帯",
      text: "幼魚では目を横切る黒褐色の帯が目立ち、名前の由来ともされています。"
    },
    {
      title: "成長すると模様が変わる",
      text: "幼魚の暗い帯模様は、成長すると目立たなくなります。"
    }
  ],

  bodyLength: "全長35〜40cmほどになります。",

  distribution: "南日本から東南アジアを中心としたインド・西太平洋に分布します。",

  habitat: "砂泥底や砂礫底、岩礁・サンゴ礁周辺などに生息します。",

  diet: "海底にすむ小型の無脊椎動物を中心に食べます。",

  features: "体高が高く大きな目を持ち、幼魚では目を通る暗色帯が目立ちます。",

  behavior: "海底近くをゆっくり泳ぎ、単独や小さな群れで見られます。",

  reproduction: "標準体長15〜17cmほどで成熟するとされますが、詳しい産卵行動は十分に分かっていません。",

  identification: "幼魚では目を通る暗色帯が特徴で、成魚では大きな目や体形も確認します。",

  nameOrigin: "目を通る暗色の帯が「メイチダイ」という名前の由来とされています。",

  humanRelation: "刺身や塩焼きなどで利用される食用魚です。",

  observationPoint: "幼魚がいれば目を横切る帯を探し、成魚との模様の違いも比べてください。",

  references: [
    "BISMaL: Gymnocranius griseus メイチダイ",
    "FishBase: Gymnocranius griseus",
    "沖縄美ら海水族館：メイチダイ",
    "鳥羽水族館：メイチダイ"
  ]
},

{
  id: "sp0201",
  areaIds: ["labo5"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "メジロザメ",
  scientificName: "Carcharhinus plumbeus",
  englishName: "Sandbar shark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "メジロザメ科", "メジロザメ属"],
  category: "魚類",
  image: "images/sp0201.jpg",

  trivia: [
    {
      title: "第一背びれがとても大きい",
      text: "メジロザメ類の中でも、第一背びれが高く大きいことが特徴です。"
    },
    {
      title: "子は胎盤を通して育つ",
      text: "胎盤を通して母親から栄養を受け、1回に1〜14尾ほどを産む記録があります。"
    }
  ],

  bodyLength: "全長2m前後になり、2.5mを超える個体も知られています。",

  distribution: "世界の温帯から熱帯の沿岸域に広く分布し、日本周辺でも見られます。",

  habitat: "沿岸の砂泥底や湾、河口周辺から沖合まで利用します。",

  diet: "魚類やエイ、小型のサメ、イカ、甲殻類、巻貝などを食べます。",

  features: "がっしりした体と高く大きな第一背びれを持ち、背びれの間には隆起線があります。",

  behavior: "沿岸から沖合を移動し、年齢や大きさによって利用する場所が変わることがあります。",

  reproduction: "胎盤を持つ胎生で、妊娠期間は約12か月、1回に1〜14尾を産みます。",

  identification: "高く大きな第一背びれと、背びれの間にある隆起線が特徴です。",

  nameOrigin: "和名の詳しい語源は不明ですが、種小名 plumbeus は「鉛色の」を意味します。",

  humanRelation: "漁業で漁獲されますが、成長が遅く繁殖数も多くないため漁獲の影響を受けやすい種類です。",

  observationPoint: "横から第一背びれの高さを見て、ほかのメジロザメ類と比べてください。",

  references: [
    "FishBase: Carcharhinus plumbeus",
    "World Register of Marine Species: Carcharhinus plumbeus",
    "FAO Sharks of the World: Carcharhinus plumbeus"
  ]
},

{
  id: "sp0202",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒラタエイ",
  scientificName: "Urolophus aurantiacus",
  englishName: "Sepia stingray",
  classification: ["脊索動物門", "軟骨魚綱", "トビエイ目", "ヒラタエイ科", "ヒラタエイ属"],
  category: "魚類",
  image: "images/sp0202.jpg",

  trivia: [
    {
      title: "短い尾の先に小さな尾びれ",
      text: "太く短い尾の先に、小さな丸い尾びれがあります。"
    },
    {
      title: "尾びれの手前には毒棘",
      text: "尾には毒を伴う鋭い棘があるため、野外では触らないよう注意が必要です。"
    }
  ],

  bodyLength: "全長40〜50cmほどで、体盤幅は30cm前後になることがあります。",

  distribution: "南日本から朝鮮半島、東シナ海周辺に分布します。",

  habitat: "内湾や大陸棚の砂底・砂泥底に生息し、水深200m前後まで記録されています。",

  diet: "小魚や甲殻類、ゴカイ類など海底の小型動物を食べます。",

  features: "丸みのある体盤と太く短い尾を持ち、尾の先には小さな尾びれがあります。",

  behavior: "砂泥底で暮らし、泳ぐときは左右の胸びれを波打たせます。",

  reproduction: "無胎盤性の胎生で、1回に2〜4尾ほどの子を産む記録があります。",

  identification: "短く太い尾と、その先にある小さな尾びれが特徴です。",

  nameOrigin: "詳しい命名由来は明確ではありませんが、平たく丸みのある体形をしています。",

  humanRelation: "漁獲され利用されることがあり、尾の毒棘には注意が必要です。",

  observationPoint: "尾を見て、短い尾の先に小さな尾びれがあるか確認してください。",

  references: [
    "FishBase: Urolophus aurantiacus",
    "吉野熊野ネイチャー図鑑：ヒラタエイ",
    "小学館の図鑑NEO 魚：ヒラタエイ"
  ]
},

{
  id: "sp0203",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカエイ",
  scientificName: "Hemitrygon akajei",
  englishName: "Whip stingray",
  classification: ["脊索動物門", "軟骨魚綱", "トビエイ目", "アカエイ科", "アカエイ属"],
  category: "魚類",
  image: "images/sp0203.jpg",

  trivia: [
    {
      title: "2025年にそっくりな別種が正式記載",
      text: "長く混同されていたアリアケアカエイが、2025年に別種として正式記載されました。"
    },
    {
      title: "赤みは腹側に現れる",
      text: "腹面の外縁などに、黄橙色から赤橙色が現れます。"
    }
  ],

  bodyLength: "全長1m前後が多く、最大約2mの記録があります。",

  distribution: "北西太平洋に分布し、日本を中心にロシア極東から中国沿岸まで見られます。",

  habitat: "浅い砂底・泥底や内湾、河口などに生息します。",

  diet: "小魚やエビ・カニなどの甲殻類、底生動物を食べます。",

  features: "菱形の体盤と長いむち状の尾を持ち、腹面の外縁には赤橙色が見られることがあります。",

  behavior: "海底近くで暮らし、砂泥底へ体を寄せて休むことがあります。",

  reproduction: "無胎盤性の胎生で、母体内で育った子を出産します。",

  identification: "アリアケアカエイと非常によく似るため、外見だけでの確実な識別は難しい種類です。",

  nameOrigin: "腹側の赤橙色が和名に関係し、種小名 akajei も日本語の「アカエイ」に由来します。",

  humanRelation: "食用になりますが、尾には毒棘があり、浅場で誤って踏むと危険です。",

  observationPoint: "長い尾と体盤の形を見て、腹側が見えたら外縁の赤橙色にも注目してください。",

  references: [
    "BISMaL: Hemitrygon akajei アカエイ",
    "FishBase: Hemitrygon akajei",
    "Furumitsu & Yamaguchi 2025: Hemitrygon akajei再記載・Hemitrygon ariakensis新種記載",
    "長崎大学：アカエイとアリアケアカエイの分類研究"
  ]
},

{
  id: "sp0204",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ホウボウ",
  scientificName: "Chelidonichthys spinosus",
  englishName: "Spiny red gurnard",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ホウボウ科", "ホウボウ属"],
  category: "魚類",
  image: "images/sp0204.jpg",

  trivia: [
    {
      title: "胸びれの3本で海底を「歩く」",
      text: "胸びれから離れた3本の軟条を脚のように動かし、海底を探ります。"
    },
    {
      title: "脚のような部分には味を感じる器官",
      text: "3本の軟条には味を感じる器官があり、砂の中の餌探しに役立ちます。"
    }
  ],

  bodyLength: "通常は全長30cm前後で、最大約40cmになります。",

  distribution: "北西太平洋に分布し、日本では北海道南部以南から南シナ海まで見られます。",

  habitat: "沿岸から沖合の砂底・砂泥底に生息します。",

  diet: "エビやカニなどの甲殻類、小魚などを食べます。",

  features: "赤い体と大きな胸びれを持ち、胸びれの下側には3本の遊離した軟条があります。",

  behavior: "3本の軟条を脚のように動かして海底を歩きながら餌を探します。",

  reproduction: "冬から春に産卵する地域があり、卵は海中を浮遊します。",

  identification: "赤い体、大きな青緑色の胸びれ、3本の遊離軟条が特徴です。",

  nameOrigin: "鳴き声や、海底を方々へ歩くような姿に由来する説があります。",

  humanRelation: "刺身や焼き物、鍋などに利用され、地域によっては高級魚として扱われます。",

  observationPoint: "胸びれの下を見て、3本の細い軟条を脚のように動かす様子を探してください。",

  references: [
    "World Register of Marine Species: Chelidonichthys spinosus",
    "FishBase: Chelidonichthys spinosus",
    "新潟市水族館 マリンピア日本海：ホウボウ"
  ]
},

{
  id: "sp0205",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ハタタテダイ",
  scientificName: "Heniochus acuminatus",
  englishName: "Pennant coralfish",
  classification: ["脊索動物門", "条鰭綱", "チョウチョウウオ科", "ハタタテダイ属"],
  category: "魚類",
  image: "images/sp0205.jpg",

  trivia: [
    {
      title: "背びれが旗のように長く伸びる",
      text: "背びれの一部が白く細長く伸び、旗を立てているように見えます。"
    },
    {
      title: "幼魚が他の魚を掃除することも",
      text: "幼魚では、ほかの魚の体表についた寄生生物をついばむことがあります。"
    }
  ],

  bodyLength: "最大で全長約25cm。",

  distribution: "インド太平洋に広く分布し、日本やオーストラリアなどでも見られます。",

  habitat: "サンゴ礁の礁湖や水路、外礁斜面などに生息します。",

  diet: "主に動物プランクトンを食べ、幼魚では他の魚をクリーニングすることもあります。",

  features: "白い体に2本の黒帯が入り、背びれの一部が白く非常に長く伸びます。",

  behavior: "幼魚は単独、成魚はペアで行動することがあります。",

  reproduction: "卵生で、繁殖時にはペアを作り、卵を海中へ放出します。",

  identification: "白黒の太い帯と黄色い後半部、長く伸びる白い背びれが特徴です。",

  nameOrigin: "長い背びれが旗を立てているように見えることから名付けられました。",

  humanRelation: "海水観賞魚として知られ、水族館でもサンゴ礁の魚として展示されます。",

  observationPoint: "長い背びれだけでなく、2匹で並んで泳いでいないかも見てください。",

  references: [
    "FishBase: Heniochus acuminatus",
    "FishBase Field Guide: Heniochus acuminatus"
  ]
},

{
  id: "sp0206",
  areaIds: ["labo6",
"ocean-labo-a",
  "ocean-labo-b",
  "ocean-labo-c",
  "ocean-labo-d",
  "ocean-labo-e",
  "fishermans-oasis",
  "marine-biotop"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スズメダイ",
  scientificName: "Chromis notata",
  englishName: "Pearl-spot chromis",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "スズメダイ科", "スズメダイ属"],
  category: "魚類",
  image: "images/sp0206.jpg",

  trivia: [
    {
      title: "卵を守るのはオス",
      text: "岩などに産み付けられた卵をオスが守り、ひれで水を送ります。"
    },
    {
      title: "胸びれの付け根に黒い部分",
      text: "胸びれの付け根上部にある黒い斑点が、見分けるポイントです。"
    }
  ],

  bodyLength: "最大で全長約17cm。",

  distribution: "北西太平洋に分布し、日本、朝鮮半島南部、中国、台湾などで見られます。",

  habitat: "沿岸の岩礁やサンゴ礁周辺の浅い海に生息します。",

  diet: "主に動物プランクトンなどの小型生物を食べます。",

  features: "灰褐色から青褐色の体を持ち、胸びれの付け根上部には黒斑があります。",

  behavior: "岩礁周辺で群れを作り、水中へ少し浮き上がってプランクトンを食べます。",

  reproduction: "基質に粘着性の卵を産み、オスが卵を守ります。",

  identification: "胸びれの付け根にある黒斑と、深く二叉した尾びれが特徴です。",

  nameOrigin: "「スズメダイ」の詳しい語源には複数の説があり、断定できません。",

  humanRelation: "地域によって食用にされ、日本沿岸の身近な岩礁魚として水族館でも展示されます。",

  observationPoint: "1匹の胸びれの付け根を見て、黒い斑点を探してください。",

  references: [
    "FishBase: Chromis notata",
    "BISMaL: Chromis notata スズメダイ"
  ]
},

{
  id: "sp0207",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ソラスズメダイ",
  scientificName: "Pomacentrus coelestis",
  englishName: "Neon damselfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "スズメダイ科", "ソラスズメダイ属"],
  category: "魚類",
  image: "images/sp0207.jpg",

  trivia: [
    {
      title: "青い体と黄色い尾が目印",
      text: "鮮やかな青い体と、黄色い尾びれの組み合わせが特徴です。"
    },
    {
      title: "オスが卵の世話をする",
      text: "岩などに産み付けられた卵をオスが守り、ひれで水を送ります。"
    }
  ],

  bodyLength: "最大で全長約9cm。",

  distribution: "東部インド洋から西・中部太平洋に広く分布し、日本でも見られます。",

  habitat: "水深1〜20mほどのサンゴ礁や岩礁、礁湖に生息します。",

  diet: "主に動物プランクトンを食べ、底生藻類も利用します。",

  features: "体の大部分は鮮やかな青色で、尾びれ周辺は黄色になります。",

  behavior: "群れを作ることがあり、危険を感じると岩やサンゴの近くへ逃げ込みます。",

  reproduction: "基質へ卵を産み、オスが卵を守って水を送ります。",

  identification: "鮮やかな青い体と黄色い尾部が特徴です。",

  nameOrigin: "空を思わせる鮮やかな青色が名前の由来です。",

  humanRelation: "ダイビングなどでよく観察され、海水観賞魚としても知られています。",

  observationPoint: "青い体と黄色い尾の境界や、光による青色の見え方の変化に注目してください。",

  references: [
    "BISMaL: Pomacentrus coelestis ソラスズメダイ",
    "FishBase: Pomacentrus coelestis"
  ]
},

{
  id: "sp0208",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "チョウチョウウオ",
  scientificName: "Chaetodon auripes",
  englishName: "Oriental butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0208.jpg",

  trivia: [
    {
      title: "本州の海でも見られるチョウチョウウオ",
      text: "熱帯魚の印象がありますが、伊豆など日本の温帯域でも見られます。"
    },
    {
      title: "繁殖時にはペアになる",
      text: "繁殖時には2匹でペアを作ります。"
    }
  ],

  bodyLength: "最大で全長約20cm。",

  distribution: "西太平洋の日本から台湾周辺を中心に分布します。",

  habitat: "水深1〜30mほどの岩礁や、藻類・サンゴのある沿岸域に生息します。",

  diet: "海底の小型無脊椎動物などを、細長い口でついばんで食べます。",

  features: "黄褐色の平たい体に、目を通る黒帯とその後ろの白帯があります。",

  behavior: "単独やペア、小さな群れで岩礁を泳ぎながら餌を探します。",

  reproduction: "卵生で、繁殖時にはペアを作り、卵を海中へ放出します。",

  identification: "目を通る黒帯とその後ろの白帯、黄褐色の体が特徴です。",

  nameOrigin: "平たい体と鮮やかな模様をチョウに見立てた名前とされています。",

  humanRelation: "海水観賞魚として知られ、ダイビングやシュノーケリングでも人気があります。",

  observationPoint: "細長い口を岩の隙間へ向けて、餌をついばむ様子を見てください。",

  references: [
    "BISMaL: Chaetodon auripes チョウチョウウオ",
    "FishBase: Chaetodon auripes"
  ]
},

{
  id: "sp0209",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ニシキベラ",
  scientificName: "Thalassoma cupido",
  englishName: "Cupid wrasse",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "ニシキベラ属"],
  category: "魚類",
  image: "images/sp0209.jpg",

  trivia: [
    {
      title: "名前通りの「錦」のような色",
      text: "緑、青、赤、橙色などが入り混じる非常に鮮やかな魚です。"
    },
    {
      title: "集団での産卵も観察されている",
      text: "複数個体が集まり、水中へ上昇しながら産卵する行動が知られています。"
    }
  ],

  bodyLength: "最大で全長約20cmで、一般には14cm前後の個体も多く見られます。",

  distribution: "北西太平洋に分布し、日本から台湾周辺まで見られます。",

  habitat: "沿岸の浅い岩礁やサンゴ礁周辺に生息します。",

  diet: "小型甲殻類など、海底の小動物を中心に食べます。",

  features: "細長い体に緑、青、赤などの鮮やかな模様が入ります。",

  behavior: "昼間に岩礁周辺を活発に泳ぎ回りながら餌を探します。",

  reproduction: "卵を海中へ放出し、集団で産卵することもあります。",

  identification: "体全体に入る複雑で鮮やかな色彩が特徴です。",

  nameOrigin: "鮮やかな模様を美しい織物の「錦」にたとえた名前です。",

  humanRelation: "沿岸で漁獲されるほか、鮮やかな体色から観賞魚として扱われることもあります。",

  observationPoint: "頭部の細かな色の線や、光による色の見え方の変化を観察してください。",

  references: [
    "BISMaL: Thalassoma cupido ニシキベラ",
    "FishBase: Thalassoma cupido",
    "Moyer 1974. Reproductive behavior of Thalassoma cupido"
  ]
},

{
  id: "sp0210",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キュウセン",
  scientificName: "Parajulis poecilepterus",
  englishName: "Multicolorfin rainbowfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "キュウセン属"],
  category: "魚類",
  image: "images/sp0210.jpg",

  trivia: [
    {
      title: "メスからオスへ性転換する",
      text: "メスから大型のオスへ性転換する個体がおり、オスは「アオベラ」、メスなどは「アカベラ」と呼ばれることがあります。"
    },
    {
      title: "夜は砂の中で眠る",
      text: "夜や低水温の時期には、砂の中へ潜って休みます。"
    }
  ],

  bodyLength: "最大で全長約34cmで、大型になる個体はオスであることが多くなります。",

  distribution: "北西太平洋に分布し、日本、朝鮮半島、中国、台湾などで見られます。",

  habitat: "浅い岩礁と砂地が混じる場所に生息します。",

  diet: "小型甲殻類や貝類、ゴカイ類などを食べます。",

  features: "メスや若魚は赤褐色、大型のオスは緑色が強くなります。",

  behavior: "昼間は活発に泳ぎ、夜や低水温期には砂へ潜ります。",

  reproduction: "メスからオスへ性転換しますが、最初からオスとして成熟する個体もいます。",

  identification: "大型の緑色個体と、赤褐色で縦線のある個体では体色が大きく異なります。",

  nameOrigin: "「九線」と書かれ、体に見える複数の縦線が由来とされています。",

  humanRelation: "西日本を中心に食用や釣りの対象になります。",

  observationPoint: "複数個体がいれば、緑色と赤褐色の体色の違いを比べてください。",

  references: [
    "Catalog of Fishes 2026: Parajulis poecilepterus",
    "WoRMS/OBIS: Parajulis poecilepterus",
    "BISMaL: Parajulis poecileptera（表記差あり）",
    "Todd et al. 2019. Socially-induced female-male sex change in wrasses"
  ]
},

{
  id: "sp0211",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クジメ",
  scientificName: "Hexagrammos agrammus",
  englishName: "Spotty-bellied greenling",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "アイナメ科", "アイナメ属"],
  category: "魚類",
  image: "images/sp0211.jpg",

  trivia: [
    {
      title: "アイナメとの違いは側線",
      text: "よく似たアイナメには複数の側線がありますが、クジメは基本的に1本です。"
    },
    {
      title: "海藻が多い浅場で暮らす",
      text: "沿岸の海藻が茂る岩礁に多く、幼魚は流れ藻につくこともあります。"
    }
  ],

  bodyLength: "最大で標準体長約30cmで、一般にはアイナメより小型です。",

  distribution: "北西太平洋に分布し、日本、朝鮮半島、黄海、ロシア極東沿岸などで見られます。",

  habitat: "沿岸の浅い岩礁や海藻藻場に生息します。",

  diet: "甲殻類やゴカイ、小魚など海底付近の小動物を食べます。",

  features: "細長い褐色や緑褐色の体を持ち、体側の側線は基本的に1本です。",

  behavior: "岩や海藻の周辺で暮らし、海底近くで餌を探します。",

  reproduction: "本種固有の詳しい繁殖情報は限られており、近縁種の生態をそのまま当てはめることはできません。",

  identification: "アイナメと比べると、体側の側線が基本的に1本であることが特徴です。",

  nameOrigin: "「クジメ」の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "沿岸で釣られ、食用にも利用されます。",

  observationPoint: "体側を頭から尾まで追い、側線がどのように走っているか確認してください。",

  references: [
    "FishBase: Hexagrammos agrammus",
    "BISMaL: Hexagrammos agrammus クジメ"
  ]
},

{
  id: "sp0212",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ムラサキウニ",
  scientificName: "Heliocidaris crassispina",
  englishName: "Purple sea urchin",
  classification: ["棘皮動物門", "ウニ綱", "ホンウニ目", "ナガウニ科", "Heliocidaris属"],
  category: "棘皮動物",
  image: "images/sp0212.jpg",

  trivia: [
    {
      title: "昔の学名が今も資料に残る",
      text: "古い資料では Anthocidaris crassispina とされますが、現在BISMaLでは Heliocidaris crassispina が受理名です。"
    },
    {
      title: "食べている「ウニ」は生殖巣",
      text: "食用にしている黄色や橙色の部分は生殖巣で、本種も日本で食用になります。"
    }
  ],

  bodyLength: "殻径5〜7cmほどで、長い棘を含めるとさらに大きく見えます。",

  distribution: "東アジアの温帯から亜熱帯に分布し、海水温の変化による北方への分布拡大も研究されています。",

  habitat: "沿岸の浅い岩礁や転石帯、海藻が生える場所などに生息します。",

  diet: "海藻を中心に、付着生物や有機物なども食べます。",

  features: "暗紫色から黒紫色の細長い棘が密生し、棘の間には管足があります。",

  behavior: "管足と棘で岩の上を移動しながら藻類などを食べ、岩の隙間に入ることもあります。",

  reproduction: "卵と精子を海中へ放出し、男鹿半島では夏から初秋に産卵が確認されています。",

  identification: "暗紫色の長い棘が特徴で、短い棘を持つバフンウニとは見た目が大きく異なります。",

  nameOrigin: "紫色から黒紫色に見える棘が「ムラサキウニ」という名前の由来です。",

  humanRelation: "生殖巣が食用になり、海藻を大量に食べる「磯焼け」との関係でも研究されています。",

  observationPoint: "棘の間から伸びる細い管足を探し、移動に使っている様子を見てください。",

  references: [
    "BISMaL: Heliocidaris crassispina ムラサキウニ",
    "Urriago et al. 2016. Reproduction of Heliocidaris crassispina",
    "Wang et al. 2025. Natural diets and gonad development of Heliocidaris crassispina"
  ]
},

{
  id: "sp0213",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "セミエビ",
  scientificName: "Scyllarides squammosus",
  englishName: "Blunt slipper lobster",
  classification: ["節足動物門", "軟甲綱", "十脚目", "セミエビ科", "セミエビ属"],
  category: "甲殻類",
  image: "images/sp0213.jpg",

  trivia: [
    {
      title: "イセエビのような長い触角がない",
      text: "大きく平たい第2触角が板のように広がり、イセエビとは正面の姿が大きく異なります。"
    },
    {
      title: "貝をこじ開けて食べることも",
      text: "歩脚を二枚貝の隙間へ差し込み、殻をこじ開けて食べることがあります。"
    }
  ],

  bodyLength: "最大で全長約40cmになる大型のセミエビ類です。",

  distribution: "インド・西太平洋に広く分布しますが、一部の記録には未記載種が含まれる可能性があります。",

  habitat: "浅い岩礁やサンゴ礁の岩穴などに生息し、水深80mほどまで、特に20〜50mで知られます。",

  diet: "貝類などの底生無脊椎動物を捕食します。",

  features: "上下に平たい幅広い体と、板状に広がった大きな第2触角が特徴です。",

  behavior: "夜行性で、昼は岩穴などに隠れ、暗くなると外へ出て餌を探します。",

  reproduction: "メスは受精卵を腹部に抱えて守りますが、産卵期は地域によって異なります。",

  identification: "大きな板状の触角と幅広く平たい体が特徴です。",

  nameOrigin: "幅広く平たい姿が昆虫のセミを思わせることから名付けられました。",

  humanRelation: "大型で食用価値が高く、美味な甲殻類として漁獲されます。",

  observationPoint: "正面から見て、長い触角ではなく左右へ広がる板状の触角に注目してください。",

  references: [
    "BISMaL: Scyllarides squammosus セミエビ",
    "SeaLifeBase: Scyllarides squammosus",
    "Chow et al. 2024. Cryptic diversity of the slipper lobster genus Scyllarides"
  ]
},

{
  id: "sp0214",
  areaIds: ["labo6",
  "dolphin-cylinder"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ギンユゴイ",
  scientificName: "Kuhlia mugil",
  englishName: "Barred flagtail",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ユゴイ科", "ユゴイ属"],
  category: "魚類",
  image: "images/sp0214.jpg",

  trivia: [
    {
      title: "尾びれの白黒模様が目立つ",
      text: "尾びれには白と黒の帯があり、泳いでいても非常によく目立ちます。"
    },
    {
      title: "幼魚はタイドプールにも入る",
      text: "若い個体は潮だまりや河口でも見られます。"
    }
  ],

  bodyLength: "最大標準体長約40cmで、20cm前後の個体もよく見られます。",

  distribution: "インド太平洋から東部太平洋まで広く分布し、北は南日本まで見られます。",

  habitat: "波当たりのある岩礁の表層近くで群れを作り、幼魚は潮だまりや河口も利用します。",

  diet: "主に夜間、遊泳性の甲殻類や小魚を捕食します。",

  features: "銀色の体と深く二叉した尾びれを持ち、尾には白黒の帯があります。",

  behavior: "波打ち際近くで群れを作り、水面近くを素早く泳ぎます。",

  reproduction: "詳しい産卵場所や繁殖行動については、今回確認した資料では十分に分かっていません。",

  identification: "銀色の体と、白黒の帯が入った尾びれが特徴です。",

  nameOrigin: "和名の詳しい由来は不明ですが、英名は帯模様のある尾に由来します。",

  humanRelation: "一部地域では食用や釣り餌に利用され、神奈川県の磯でも観察できます。",

  observationPoint: "群れが方向転換するとき、白黒模様の尾びれが一斉に動く様子を見てください。",

  references: [
    "FishBase: Kuhlia mugil",
    "神奈川県水産技術センター：ギンユゴイ"
  ]
},

{
  id: "sp0215",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コロダイ",
  scientificName: "Diagramma pictum",
  englishName: "Painted sweetlips",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "イサキ科", "コロダイ属"],
  category: "魚類",
  image: "images/sp0215.jpg",

  trivia: [
    {
      title: "幼魚と成魚で別の魚のように変わる",
      text: "幼魚は白・黄・黒の帯模様ですが、成長すると銀灰色の体に橙褐色の斑点が現れます。"
    },
    {
      title: "最大1m級になる",
      text: "大型では尾叉長約1mに達します。"
    }
  ],

  bodyLength: "大型では尾叉長約1mに達します。",

  distribution: "東アフリカから日本、ニューカレドニアなどインド・西太平洋に広く分布します。",

  habitat: "沿岸の岩礁やサンゴ礁、砂泥底、湾内などに生息し、通常は水深50mほどまでで見られます。",

  diet: "海底の無脊椎動物や魚などを捕食します。",

  features: "幼魚は白・黄・黒の帯模様、成魚では銀灰色の体に橙褐色の斑点が見られます。",

  behavior: "単独や群れで海底近くを泳ぎながら餌を探します。",

  reproduction: "詳しい産卵時期や繁殖行動については、今回確認した資料では十分に分かっていません。",

  identification: "成長による模様の変化が大きく、成魚では厚い唇と橙褐色の斑点も特徴です。",

  nameOrigin: "「コロダイ」の詳しい由来には複数の説があり、断定できません。",

  humanRelation: "食用や釣りの対象になりますが、海外の一部海域ではシガテラ毒の報告があります。",

  observationPoint: "幼魚の写真と見比べ、成長によって模様が大きく変わる点に注目してください。",

  references: [
    "BISMaL: Diagramma pictum コロダイ属分類",
    "FishBase: Diagramma pictum"
  ]
},

{
  id: "sp0216",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロウミウマ",
  scientificName: "Hippocampus kuda",
  englishName: "Spotted seahorse",
  classification: ["脊索動物門", "条鰭綱", "ヨウジウオ目", "ヨウジウオ科", "タツノオトシゴ属"],
  category: "魚類",
  image: "images/sp0216.jpg",

  trivia: [
    {
      title: "オスが妊娠する",
      text: "メスがオスの育児嚢へ卵を渡し、オスが育てた稚魚を産み出します。"
    },
    {
      title: "「クロ」でも黒いとは限らない",
      text: "体色は黒だけでなく、黄色や褐色など大きく変化します。"
    }
  ],

  bodyLength: "最大で全長約30cm。",

  distribution: "アフリカ東岸から日本、東南アジア、オーストラリアなどインド太平洋に広く分布します。",

  habitat: "浅い海草藻場や海藻帯、河口、サンゴ礁周辺などに生息します。",

  diet: "動物プランクトンや小型甲殻類を、細長い吻で吸い込んで食べます。",

  features: "馬のような頭と巻き付けられる尾を持ち、体色は黒・褐色・黄色などさまざまです。",

  behavior: "尾を海草などへ巻き付け、背びれを細かく動かして移動します。",

  reproduction: "オスが育児嚢で卵を育て、育児期間は20〜28日ほどとされています。",

  identification: "色だけでは判断せず、頭頂部や体輪、棘などを確認する必要があります。",

  nameOrigin: "「クロ」という名前でも体色には変異があり、種小名 kuda は「馬」を意味します。",

  humanRelation: "観賞魚や伝統薬として取引され、タツノオトシゴ類はCITES附属書IIの対象です。",

  observationPoint: "尾を見て、海藻や展示物へ巻き付けている様子を探してください。",

  references: [
    "BISMaL: Hippocampus kuda クロウミウマ",
    "FishBase: Hippocampus kuda",
    "Lourie et al. 2016. Global revision of the seahorses"
  ]
},

{
  id: "sp0217",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ポットベリーシーホース",
  scientificName: "Hippocampus abdominalis",
  englishName: "Pot-bellied seahorse",
  classification: ["脊索動物門", "条鰭綱", "ヨウジウオ目", "ヨウジウオ科", "タツノオトシゴ属"],
  category: "魚類",
  image: "images/sp0217.jpg",

  trivia: [
    {
      title: "世界最大級のタツノオトシゴ",
      text: "30cmを超えることもある、世界最大級のタツノオトシゴです。"
    },
    {
      title: "オスの妊娠を詳しく研究されている",
      text: "大きな育児嚢で胚を育てるため、雄性妊娠の研究にも利用されています。"
    }
  ],

  bodyLength: "大型個体では全長30cmを超え、約33cmに達する例があります。",

  distribution: "ニュージーランドとオーストラリア南東部周辺の温帯海域に分布します。",

  habitat: "浅い岩礁や海草藻場、海藻の多い沿岸域に生息します。",

  diet: "ヨコエビや小型のエビなどを、細長い吻で吸い込んで食べます。",

  features: "非常に大きな体と深く膨らんだ腹部が特徴で、成熟したオスでは育児嚢が目立ちます。",

  behavior: "尾を海草などへ巻き付け、周囲に合わせて体色を変えることもあります。",

  reproduction: "オスが育児嚢で卵を育て、父親から発生中の胚へ栄養が供給されることも示されています。",

  identification: "非常に大きな体と深く膨らんだ腹部が特徴です。",

  nameOrigin: "英名 Pot-bellied seahorse は、大きく膨らんだ腹部に由来します。",

  humanRelation: "水族館や観賞魚として知られ、雄性妊娠の研究にも利用されています。",

  observationPoint: "クロウミウマと体の大きさや腹部を比べ、オスでは大きな育児嚢にも注目してください。",

  references: [
    "BISMaL: Hippocampus abdominalis",
    "The Florida Aquarium: Pot-Bellied Seahorse",
    "Kawaguchi et al. 2017. Morphology of brood pouch formation in Hippocampus abdominalis",
    "Whittington et al. 2022. Seahorse brood pouch morphology and male parturition",
    "Skalkos et al. 2024. Paternal protein provisioning during male seahorse pregnancy"
  ]
},

{
  id: "sp0218",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロソイ",
  scientificName: "Sebastes schlegelii",
  englishName: "Korean rockfish",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "メバル科", "メバル属"],
  category: "魚類",
  image: "images/sp0218.jpg",

  trivia: [
    {
      title: "卵ではなく小さな魚を産む",
      text: "メスの体内で卵を発生させ、孵化した仔魚を海中へ産み出します。"
    },
    {
      title: "幼魚は流れ藻を利用する",
      text: "幼魚は流れ藻の周辺で暮らし、成長すると沿岸の岩礁へ移ります。"
    }
  ],

  bodyLength: "最大で全長約65cmになり、50cm前後でも大型個体です。",

  distribution: "日本、朝鮮半島、中国沿岸など北西太平洋に分布します。",

  habitat: "沿岸の岩礁を中心に、水深数mから100mほどまでに生息します。",

  diet: "魚やエビ、カニなどの甲殻類を捕食します。",

  features: "黒褐色から灰黒色の大型魚で、頭部の涙骨には複数の棘があります。",

  behavior: "岩礁や人工構造物の周囲で暮らし、魚や甲殻類を待ち伏せて捕食します。",

  reproduction: "メスの体内で卵を発生させ、三重県では冬に仔魚を産むとされています。",

  identification: "黒い体色だけでなく、頭部の棘や体形、ひれも合わせて確認します。",

  nameOrigin: "黒みの強い体色を持つソイ類であることが名前に表れています。",

  humanRelation: "刺身や煮付けなどに利用され、種苗生産や放流、養殖も行われています。",

  observationPoint: "ほかのメバル類と比べ、大きな口とがっしりした体つきに注目してください。",

  references: [
    "BISMaL: Sebastes schlegelii クロソイ",
    "FishBase: Sebastes schlegelii",
    "三重県 おさかな図鑑：クロソイ"
  ]
},

{
  id: "sp0219",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロメバル",
  scientificName: "Sebastes ventricosus",
  englishName: "Darkbanded rockfish",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "メバル科", "メバル属"],
  category: "魚類",
  image: "images/sp0219.jpg",

  trivia: [
    {
      title: "昔は「メバル」1種だと思われていた",
      text: "かつて1種とされたメバルは、現在アカメバル・クロメバル・シロメバルの3種に分けられています。"
    },
    {
      title: "水中では青黒く光って見える",
      text: "水中では金属的な青緑色から青黒色に見えることがあります。"
    }
  ],

  bodyLength: "全長30cmほどになる魚です。",

  distribution: "日本沿岸を中心に分布し、朝鮮半島南部でも知られています。",

  habitat: "外海に面した岩礁や漁礁などに生息し、海底から少し浮いていることもあります。",

  diet: "小魚やエビなどの甲殻類を捕食します。",

  features: "黒色から青黒色の体を持ち、胸びれ軟条は16本の個体が多いとされています。",

  behavior: "岩礁や漁礁の周囲で単独や群れで見られます。",

  reproduction: "卵胎生で、メスの体内で卵を発生させて仔魚を産みます。",

  identification: "体色だけでなく、胸びれ軟条数やひれの色なども確認します。",

  nameOrigin: "沿岸性メバル3種の中で、黒みの強い体色を持つことから名付けられました。",

  humanRelation: "釣りや漁業の対象となり、煮付けや塩焼きなどで食べられます。",

  observationPoint: "照明が当たった背中を見て、青緑色や金属的な色が見えるか観察してください。",

  references: [
    "BISMaL: Sebastes ventricosus クロメバル",
    "新潟大学佐渡自然共生科学センター：クロメバル",
    "水産研究・教育機構：メバル3種の分類"
  ]
},

{
  id: "sp0220",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ウスメバル",
  scientificName: "Sebastes thompsoni",
  englishName: "Goldeye rockfish",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "メバル科", "メバル属"],
  category: "魚類",
  image: "images/sp0220.jpg",

  trivia: [
    {
      title: "子どもの頃は流れ藻と旅をする",
      text: "幼魚は流れ藻などを利用し、成長すると沖合の深い岩礁へ移ります。"
    },
    {
      title: "卵ではなく仔魚を産む",
      text: "メスの体内で卵が孵化し、数mmまで育った仔魚を海中へ産みます。"
    }
  ],

  bodyLength: "成魚は全長30cmを超えることがあり、FishBaseでは最大標準体長約30cmとされています。",

  distribution: "日本海側では北海道石狩湾付近から対馬、太平洋側では北海道南部から関東沖まで見られます。",

  habitat: "幼魚は表層や流れ藻を利用し、成魚は水深80〜150mほどの沖合岩礁に多く生息します。",

  diet: "甲殻類や小魚などを捕食します。",

  features: "橙色から赤褐色の体を持ち、上半部には濃褐色の不規則な帯があります。",

  behavior: "成長に伴い、表層や流れ藻から深い岩礁域へ生活場所を変えます。",

  reproduction: "青森県では12月ごろに交尾し、翌年4〜5月ごろに仔魚を産むとされています。",

  identification: "体上部の濃褐色の不規則な帯と大きな眼が特徴です。",

  nameOrigin: "詳しい命名由来については、今回確認した資料では分かっていません。",

  humanRelation: "日本海側を中心に重要な水産資源で、刺身や煮付け、塩焼きなどに利用されます。",

  observationPoint: "体の上半分の褐色帯と、大きな眼に注目してください。",

  references: [
    "青森県産業技術センター：ウスメバル",
    "FishBase: Sebastes thompsoni"
  ]
},

{
  id: "sp0221",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヨロイメバル",
  scientificName: "Sebastes hubbsi",
  englishName: "Armorclad rockfish",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "メバル科", "メバル属"],
  category: "魚類",
  image: "images/sp0221.jpg",

  trivia: [
    {
      title: "小型のメバル属",
      text: "メバル属では比較的小型で、大きくても全長20cmほどです。"
    },
    {
      title: "体の色はかなり変化する",
      text: "赤褐色や褐色など個体差が大きく、体色だけでは種類を判断できません。"
    }
  ],

  bodyLength: "最大で全長20cmほどで、15cm前後の個体もよく見られます。",

  distribution: "本州沿岸を中心に九州北部や朝鮮半島南部などに分布します。",

  habitat: "浅い岩礁や藻場の海底付近に生息し、幼魚は潮だまりで見つかることもあります。",

  diet: "小型の甲殻類や多毛類などを捕食します。",

  features: "淡赤褐色と暗褐色の模様があり、背びれには14本の棘があります。",

  behavior: "岩の隙間や海藻の周囲など、複雑な海底環境を利用します。",

  reproduction: "卵胎生で、メスの体内で卵を発生させて仔魚を産むとされています。",

  identification: "尾びれに明瞭な白帯がなく、腹びれの小斑点や背びれの14本の棘も特徴です。",

  nameOrigin: "「ヨロイ」という名前の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "漁獲され、煮付けや塩焼き、汁物などに利用されます。",

  observationPoint: "体側や腹びれを見て、細かな斑点や複雑な模様を探してください。",

  references: [
    "BISMaL: Sebastes hubbsi ヨロイメバル",
    "新潟大学佐渡自然共生科学センター：ヨロイメバル",
    "三重県 おさかな図鑑：ヨロイメバル"
  ]
},

{
  id: "sp0222",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タケノコメバル",
  scientificName: "Sebastes oblongus",
  englishName: "Oblong rockfish",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "メバル科", "メバル属"],
  category: "魚類",
  image: "images/sp0222.jpg",

  trivia: [
    {
      title: "タケノコの皮そっくり？",
      text: "褐色の複雑な模様がタケノコの皮に似ることなどが、名前の由来として紹介されています。"
    },
    {
      title: "卵を外へ産みつけない",
      text: "メスの体内で卵を発生させ、仔魚として産み出す卵胎生の魚です。"
    }
  ],

  bodyLength: "最大標準体長約35cmで、全長40cmを超える個体も知られています。",

  distribution: "北海道南部から九州までの日本沿岸や、朝鮮半島周辺などに分布します。",

  habitat: "沿岸の岩礁や堤防、藻場など、隠れ場所の多い環境に生息します。",

  diet: "エビやカニなどの甲殻類、小魚などを捕食します。",

  features: "黄褐色から黒褐色の複雑な斑紋があり、尾びれの後縁は丸みを帯びます。",

  behavior: "岩穴などに身を寄せ、近くを通る小魚や甲殻類を捕食します。",

  reproduction: "卵胎生で、資料では秋から初冬に仔魚を産むとされています。",

  identification: "眼を通る暗色線や丸みのある尾びれ、頭部の棘などが識別の手掛かりです。",

  nameOrigin: "模様がタケノコの皮に似ることや、タケノコの時期によく獲れることが由来とされています。",

  humanRelation: "刺網や定置網、釣りで漁獲され、刺身や煮付け、塩焼きなどに利用されます。",

  observationPoint: "体のまだら模様と、丸みを帯びた尾びれに注目してください。",

  references: [
    "BISMaL: Sebastes oblongus タケノコメバル",
    "FishBase: Sebastes oblongus",
    "鶴岡市立加茂水族館：タケノコメバル",
    "三重県 おさかな図鑑：タケノコメバル"
  ]
},
{
  id: "sp0223",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アイナメ",
  scientificName: "Hexagrammos otakii",
  englishName: "Fat greenling",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "アイナメ科", "アイナメ属"],
  category: "魚類",
  image: "images/sp0223.jpg",

  trivia: [
    {
      title: "普通の魚より側線が多い",
      text: "アイナメは体の片側に5本の側線を持ち、水流や振動を感じ取ります。"
    },
    {
      title: "オスが黄金色になって卵を守る",
      text: "繁殖期のオスは黄橙色になり、複数のメスが産んだ卵を孵化まで守ります。"
    }
  ],

  bodyLength: "一般に全長40cm前後で、大型では50cmを超え、最大57cmほどの記録があります。",

  distribution: "日本沿岸、朝鮮半島、中国沿岸など北西太平洋に分布します。",

  habitat: "沿岸の浅い岩礁や岸壁、藻場などの海底近くに生息します。",

  diet: "甲殻類、小魚、貝類などの底生動物を捕食します。",

  features: "黄色、褐色、緑褐色など体色の変化が大きく、体側には5本の側線があります。",

  behavior: "岩礁周辺で縄張りを持つことがあり、繁殖期のオスは産卵場所を守ります。",

  reproduction: "晩秋から冬に繁殖し、メスが産んだ粘着性の卵を黄橙色になったオスが孵化まで守ります。",

  identification: "よく似たクジメとは、体の片側に5本の側線があることで見分けられます。",

  nameOrigin: "「アユのように縄張りを持つ魚」という意味の「鮎並（あゆなみ）」が変化したという説があります。",

  humanRelation: "刺身や煮付け、唐揚げなどに利用され、釣りの対象としても人気があります。",

  observationPoint: "体側にある複数の側線を探し、繁殖期には黄色いオスにも注目してください。",

  references: [
    "BISMaL: Hexagrammos otakii アイナメ",
    "東京大学大気海洋研究所：アイナメ",
    "宮城県：南三陸のさかな図鑑 アイナメ",
    "新潟大学佐渡自然共生科学センター：アイナメ"
  ]
},

{
  id: "sp0224",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アマモ",
  scientificName: "Zostera marina",
  englishName: "Eelgrass",
  classification: ["被子植物", "単子葉類", "オモダカ目", "アマモ科", "アマモ属"],
  category: "海草",
  image: "images/sp0224.jpg",

  trivia: [
    {
      title: "海藻ではなく「花が咲く植物」",
      text: "アマモは海藻ではなく被子植物で、海中で花を咲かせて種子を作ります。"
    },
    {
      title: "アマモ場は小さな生き物の重要な生活場所",
      text: "アマモ場は小魚や甲殻類など多くの生き物の生活・成長場所になります。"
    }
  ],

  bodyLength: "草丈は数十cmから1mを超え、宮古湾では約20cmから130cmを超える株も確認されています。",

  distribution: "北半球の温帯から亜寒帯に広く分布し、日本沿岸にも広く生育します。",

  habitat: "波の穏やかな浅い砂泥底に地下茎を伸ばし、「アマモ場」を形成します。",

  diet: "光合成によって、光・二酸化炭素・水・無機栄養塩などを利用して成長します。",

  features: "細長いリボン状の葉を持ち、海底の地下茎から多数の葉を伸ばします。",

  behavior: "地下茎を伸ばして株を増やし、季節によって葉の長さや密度が変化します。",

  reproduction: "花と種子による有性生殖と、地下茎による栄養繁殖の両方を行います。",

  identification: "海底から細長い緑色の葉が束になって伸び、草原のような群落を作ります。",

  nameOrigin: "「アマモ」の詳しい語源には諸説があるため、この図鑑では断定しません。",

  humanRelation: "アマモ場は多くの生物の生息・育成場所となり、各地で再生や保全も行われています。",

  observationPoint: "葉の間を探し、小魚や小型甲殻類が利用していないか観察してください。",

  references: [
    "日本水産学会誌：アマモ Zostera marina の群落構造と季節変化",
    "環境省：アマモ場調査資料",
    "北海道大学：日本産アマモ属"
  ]
},

{
  id: "sp0225",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロイシモチ",
  scientificName: "Apogonichthyoides niger",
  englishName: "Black cardinalfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "テンジクダイ科", "カクレテンジクダイ属"],
  category: "魚類",
  image: "images/sp0225.jpg",

  trivia: [
    {
      title: "黒くないクロイシモチもいる",
      text: "黒褐色だけでなく、黄色や白っぽい個体も知られています。"
    },
    {
      title: "オスが口の中で卵を育てる",
      text: "オスは卵を口にくわえ、孵化するまで守る口内保育を行います。"
    }
  ],

  bodyLength: "最大で全長約10cm。",

  distribution: "南日本から台湾・南シナ海周辺に分布し、神奈川県周辺でも記録されています。",

  habitat: "内湾や漁港などの浅い砂泥底で、石や人工物の陰を利用します。",

  diet: "小魚や小型甲殻類などを捕食します。",

  features: "短く体高のある体と大きな頭を持ち、黒褐色から黄色、白色まで体色に変異があります。",

  behavior: "昼は単独やペアで物陰に隠れ、暗くなると活動します。",

  reproduction: "夏を中心に、オスが受精卵を口に入れて孵化まで守ります。",

  identification: "短く体高のある体と大きな頭が特徴で、体色だけでは判断できません。",

  nameOrigin: "黒っぽい個体が多いテンジクダイ類であることから「クロイシモチ」と呼ばれます。",

  humanRelation: "主要な水産種ではありませんが、口内保育を観察できる魚として興味深い種類です。",

  observationPoint: "繁殖期には口がふくらんだオスがいないか探してください。",

  references: [
    "BISMaL: Apogonichthyoides niger クロイシモチ",
    "鹿児島大学総合研究博物館：クロイシモチ",
    "小学館 図鑑NEO 魚：クロイシモチ"
  ]
},

{
  id: "sp0226",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マナマコ",
  scientificName: "Apostichopus japonicus",
  englishName: "Japanese sea cucumber",
  classification: ["棘皮動物門", "ナマコ綱", "Synallactida", "シカクナマコ科", "マナマコ属"],
  category: "棘皮動物",
  image: "images/sp0226.jpg",

  trivia: [
    {
      title: "暑い時期に「夏眠」する",
      text: "水温が高くなると岩陰などへ入り、移動や摂餌を止めて夏眠することがあります。"
    },
    {
      title: "赤・青・黒のように色が違う",
      text: "赤色型・青緑色型・黒色型など、体色の異なる個体が知られています。"
    }
  ],

  bodyLength: "最大で全長約30cmですが、体が伸び縮みするため見かけの長さは変化します。",

  distribution: "北海道から九州、中国、朝鮮半島、ロシア極東など北西太平洋に分布します。",

  habitat: "潮間帯から水深100mを超える海底まで、砂泥底や礫底、岩礁周辺などに生息します。",

  diet: "砂や泥を取り込み、その中の有機物や微細藻類、デトリタスなどを食べます。",

  features: "太い円筒形の体にいぼ状突起があり、腹側には多数の管足があります。",

  behavior: "海底の堆積物を食べながら移動し、高水温期には夏眠することがあります。",

  reproduction: "卵と精子を海中へ放出し、幼生は海中を漂った後に海底へ着底します。",

  identification: "体表のいぼ状突起と腹側の管足が特徴で、体色だけでは種類を判断できません。",

  nameOrigin: "「マナマコ」の詳しい語源には複数の説があるため、この図鑑では断定しません。",

  humanRelation: "重要な食用ナマコで、漁獲や養殖が行われ、乾燥ナマコは高級食材として利用されます。",

  observationPoint: "腹側の管足や、海底の砂を取り込んで食べる様子に注目してください。",

  references: [
    "SeaLifeBase: Apostichopus japonicus",
    "BISMaL: Apostichopus japonicus",
    "日本ベントス学会誌：北海道噴火湾におけるマナマコの夏眠"
  ]
},

{
  id: "sp0227",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アミメハギ",
  scientificName: "Rudarius ercodes",
  englishName: "Whitespotted pygmy filefish",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "カワハギ科", "アミメハギ属"],
  category: "魚類",
  image: "images/sp0227.jpg",

  trivia: [
    {
      title: "寝るとき海藻を口でくわえる",
      text: "夜は海藻などを口でくわえ、流されにくい状態で休むことがあります。"
    },
    {
      title: "卵を守るのはメス",
      text: "メスは海藻へ粘着卵を産み付け、孵化するまで近くで守ります。"
    }
  ],

  bodyLength: "最大で全長約7.5〜8cmの小型のカワハギ類です。",

  distribution: "本州中部から九州、朝鮮半島南部、台湾周辺などに分布します。",

  habitat: "沿岸のアマモ場や海藻の多い岩礁域などに生息します。",

  diet: "ヨコエビや多毛類、カイアシ類などの小動物に加え、アマモなどの植物質も食べます。",

  features: "小型で左右に平たい体を持ち、体表には網目状の細かな模様があります。",

  behavior: "海藻の間を隠れ場所にし、夜には海藻を口でくわえて休むことがあります。",

  reproduction: "メスが海藻などへ粘着卵を産み付け、孵化まで守ります。",

  identification: "網目模様のある小型のカワハギ類で、成魚でも10cmに達しません。",

  nameOrigin: "体表の細かな模様が網目のように見えることから名付けられました。",

  humanRelation: "主要な食用魚ではなく、アマモ場や藻場の生態を知る魚として研究・展示されます。",

  observationPoint: "海藻の近くで体色が背景に溶け込んでいないか、口で植物をくわえていないか見てください。",

  references: [
    "FishBase: Rudarius ercodes",
    "鶴岡市立加茂水族館：アミメハギ",
    "アクアマリンふくしま：アミメハギ"
  ]
},

{
  id: "sp0228",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ムスメウシノシタ",
  scientificName: "Parachirus sp. 1",
  englishName: "Undescribed sole",
  classification: ["脊索動物門", "条鰭綱", "カレイ目", "ササウシノシタ科", "オトメウシノシタ属（暫定）"],
  category: "魚類",
  image: "images/sp0228.jpg",

  trivia: [
    {
      title: "実は学名がまだ確定していない",
      text: "正式な学名は未確定で、国立科学博物館では Parachirus sp. 1 として扱われています。"
    },
    {
      title: "国内資料でも属の扱いが違う",
      text: "Aseraggodes sp. とする資料もあり、この図鑑では分類が未確定であることをそのまま示します。"
    }
  ],

  bodyLength: "10cm前後の小型魚で、標準体長9.7cmの標本があります。",

  distribution: "相模湾・伊豆半島以南などから記録されていますが、種同定が未確定なため分布範囲も変わる可能性があります。",

  habitat: "浅い岩礁の砂地や砂泥底、岩の表面や隙間付近で見られます。",

  diet: "本種だけを対象とした詳しい食性資料が少ないため、特定の餌は断定できません。",

  features: "非常に薄く左右に平たい体を持ち、眼は片側へ寄り、有眼側には黒褐色の斑紋があります。",

  behavior: "海底へ体を密着させ、砂や岩の色に溶け込み、ときには砂へ隠れます。",

  reproduction: "分類自体が未確定で、本種固有の繁殖生態についても十分に分かっていません。",

  identification: "薄い楕円形の体と黒褐色斑が特徴ですが、属の扱いも資料によって異なります。",

  nameOrigin: "標準和名の詳しい由来については、主要資料から確定できません。",

  humanRelation: "一般的な食用魚ではなく、分類学的に未解決な部分を残す浅海の底生魚です。",

  observationPoint: "海底へ薄い体を密着させ、背景に溶け込んでいる姿を探してください。",

  references: [
    "国立科学博物館 魚類写真資料データベース：ムスメウシノシタ Parachirus sp. 1",
    "鹿児島大学総合研究博物館：ムスメウシノシタ Aseraggodes sp.",
    "神奈川県立生命の星・地球博物館：ムスメウシノシタ"
  ]
},

{
  id: "sp0229",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミズヒキゴカイ",
  scientificName: "Cirriformia tentaculata",
  englishName: "Tentacled cirratulid worm",
  classification: ["環形動物門", "多毛綱", "スピオ目", "ミズヒキゴカイ科", "ミズヒキゴカイ属"],
  category: "環形動物",
  image: "images/sp0229.jpg",

  trivia: [
    {
      title: "赤い糸のような部分が何本も伸びる",
      text: "泥の中の本体から、餌を集める触手や呼吸に使う細長い鰓を多数伸ばします。"
    },
    {
      title: "実は日本の『ミズヒキゴカイ』は1種ではなかった",
      text: "2024年の研究で従来1種とされた日本の個体群は12系統に分かれ、10種が新種として記載されました。"
    }
  ],

  bodyLength: "本体は伸び縮みが大きく長い鰓や触手も持つため、一律の最大長は断定できません。",

  distribution: "日本各地から記録されてきましたが、2024年の再検討で旧記録には複数種が含まれることが分かりました。",

  habitat: "沿岸の砂泥底や泥底などに潜って生活します。",

  diet: "海底の堆積物に含まれる微細な有機物を、細長い触手で集めて食べます。",

  features: "細長い体から多数の非常に細い鰓や触手を伸ばします。",

  behavior: "本体を砂泥中へ隠し、海底上へ触手や鰓を伸ばして餌を集めます。",

  reproduction: "本種固有の繁殖時期や行動については、今回確認した資料では十分に分かっていません。",

  identification: "日本産Cirriformia属は外見だけでの種同定が難しく、厳密には形態や遺伝解析が必要な場合があります。",

  nameOrigin: "赤色系の細長い鰓や触手が、水引の糸を思わせることに由来すると考えられます。",

  humanRelation: "有機汚濁の指標とされたことがありますが、複数種が混同されていたため一括した利用には注意が必要です。",

  observationPoint: "海底から伸びる細い糸状の鰓や触手を探してください。",

  references: [
    "BISMaL: Cirriformia tentaculata ミズヒキゴカイ",
    "Jimi, Fujiwara & Kajihara 2024. Evaluation of Cirriformia tentaculata from Japan"
  ]
},

{
  id: "sp0230",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キヌバリ",
  scientificName: "Pterogobius elapoides",
  englishName: "Kinu-bari goby",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハゼ科", "キヌバリ属"],
  category: "魚類",
  image: "images/sp0230.jpg",

  trivia: [
    {
      title: "太平洋側と日本海側で縞の数が違う",
      text: "太平洋側では6本、日本海側では7本の横帯を持つことが紹介されています。"
    },
    {
      title: "海底にべったりではなく浮いて泳ぐ",
      text: "ハゼの仲間ですが、岩礁や海藻の周囲を海底から少し浮いて泳ぎます。"
    }
  ],

  bodyLength: "最大標準体長約9cmで、全長では10cm前後になります。",

  distribution: "北海道南部・青森県付近から九州、朝鮮半島から香港周辺まで分布します。",

  habitat: "海藻の多い内湾や岩礁海岸に生息し、幼魚は潮だまりでも見られます。",

  diet: "小型甲殻類や動物プランクトンなどを食べると考えられますが、詳しい資料は限られます。",

  features: "体側に太い暗色の横帯が並び、頭部にも眼を通る帯があります。",

  behavior: "岩礁や海藻の周囲を海底から少し浮いて泳ぎ、複数個体が集まることもあります。",

  reproduction: "詳しい産卵場所や卵保護については、今回確認した資料では十分に分かっていません。",

  identification: "体側の横帯は地域により6本または7本で、帯の本数だけでは別種とは判断できません。",

  nameOrigin: "標準和名の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "主要な食用魚ではありませんが、磯や潮だまりで観察できるハゼです。",

  observationPoint: "体の横帯を数え、海底から少し浮いて泳ぐ姿にも注目してください。",

  references: [
    "FishBase: Pterogobius elapoides",
    "鳥羽水族館：キヌバリ"
  ]
},

{
  id: "sp0231",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヨソギ",
  scientificName: "Paramonacanthus oblongus",
  englishName: "Hair-finned filefish",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "カワハギ科", "ヨソギ属"],
  category: "魚類",
  image: "images/sp0231.jpg",

  trivia: [
    {
      title: "オスの尾びれは長く伸びる",
      text: "成熟したオスでは尾びれの一部が糸状に伸び、メスより細長く見えます。"
    },
    {
      title: "学名には長い混乱がある",
      text: "古い資料では別学名も使われますが、2026年版Catalog of Fishesでは Paramonacanthus oblongus が有効名です。"
    }
  ],

  bodyLength: "日本の図鑑では全長15cm前後、資料によっては20cmほどに達するとされています。",

  distribution: "日本では相模湾以南を中心に見られ、インド・西太平洋の暖海域に広く分布します。",

  habitat: "浅い砂底や砂泥底を中心に、岩礁や人工構造物の周辺でも見られます。",

  diet: "ゴカイ、甲殻類、貝類などの小型底生動物を食べます。",

  features: "左右に平たい体を持ち、成熟したオスでは尾びれの一部が糸状に長く伸びます。",

  behavior: "砂泥底付近を泳ぎながら餌を探し、複数個体が集まることもあります。",

  reproduction: "夏から秋に繁殖し、オスが縄張りを作り、メスは砂底へ卵を産み付けます。",

  identification: "成熟したオスでは、尾びれの一部が糸状に長く伸びることが特徴です。",

  nameOrigin: "標準和名の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "日本では主要な食用魚ではありませんが、東南アジアなどでは食用になる場合があります。",

  observationPoint: "尾びれを見て、糸状に長く伸びた部分があるか確認してください。",

  references: [
    "Catalog of Fishes 2026: Paramonacanthus oblongus",
    "Gill & Hutchins 2002: Paramonacanthus oblongus",
    "Honda釣り倶楽部：ヨソギ"
  ]
},

{
  id: "sp0232",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒメジ",
  scientificName: "Upeneus japonicus",
  englishName: "Japanese goatfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ヒメジ科", "ヒメジ属"],
  category: "魚類",
  image: "images/sp0232.jpg",

  trivia: [
    {
      title: "あごの下の2本のひげで餌を探す",
      text: "下あごの2本の黄色いひげは感覚器で、砂の中の餌を探すために使います。"
    },
    {
      title: "昼と夜で体色が変わる",
      text: "淡い赤色だけでなく横帯やまだら模様が現れ、昼夜や状態によって体色が変化します。"
    }
  ],

  bodyLength: "成魚は全長20cm前後が多く、最大標準体長28cmの記録があります。",

  distribution: "北海道以南から朝鮮半島、中国、台湾、フィリピン周辺などに分布します。",

  habitat: "水深数mから100m以上の砂底や砂礫底に生息します。",

  diet: "小型甲殻類やゴカイなど、砂底の小動物を捕食します。",

  features: "淡い赤色の細長い体を持ち、下あごには2本の黄色いひげがあります。",

  behavior: "2本のひげを砂へ触れさせながら餌を探します。",

  reproduction: "日本では夏に産卵し、秋には数cmほどの稚魚が浅場で見られます。",

  identification: "下あごの2本の黄色いひげと、赤みを帯びた細長い体が特徴です。",

  nameOrigin: "標準和名の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "天ぷらや塩焼き、刺身などで食べられ、練り製品の原料になることもあります。",

  observationPoint: "海底で2本のひげを細かく動かしながら砂を探る様子を見てください。",

  references: [
    "BISMaL: Upeneus japonicus ヒメジ",
    "FishBase: Upeneus japonicus",
    "Honda釣り倶楽部：ヒメジ"
  ]
},

{
  id: "sp0233",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サビハゼ",
  scientificName: "Sagamia geneionema",
  englishName: "Sabihaze",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハゼ科", "サビハゼ属"],
  category: "魚類",
  image: "images/sp0233.jpg",

  trivia: [
    {
      title: "日本沿岸の砂地に暮らす小型ハゼ",
      text: "全長10cm未満の小型のハゼで、浅い砂底や砂泥底に暮らします。"
    },
    {
      title: "サビハゼ属を代表する魚",
      text: "Sagamia属の魚で、属名は相模湾にちなむとされています。"
    }
  ],

  bodyLength: "最大標準体長約7.1cmで、全長でも10cm未満の小型魚です。",

  distribution: "日本中部周辺から朝鮮半島に分布します。",

  habitat: "海岸近くの浅い砂底や砂泥底に生息します。",

  diet: "小型甲殻類や多毛類などを食べると考えられます。",

  features: "細長い灰褐色から褐色の体に暗色斑があり、砂底へ溶け込みやすい色をしています。",

  behavior: "海底付近で短い距離を移動しながら餌を探します。",

  reproduction: "産卵期や卵保護については、今回確認した資料では十分に分かっていません。",

  identification: "小型で細長い体と、砂底に溶け込む灰褐色の模様が特徴です。",

  nameOrigin: "さび色を思わせる褐色系の体色や斑紋に由来すると考えられます。",

  humanRelation: "水産上の重要性は高くありませんが、浅海の砂底に暮らす小型魚です。",

  observationPoint: "水槽の底を探し、砂の色に溶け込む模様に注目してください。",

  references: [
    "FishBase: Sagamia geneionema",
    "NCBI Taxonomy: Sagamia geneionema"
  ]
},

{
  id: "sp0234",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スジハゼ",
  scientificName: "Acentrogobius virgatulus",
  englishName: "Sujihaze goby",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハゼ科", "キララハゼ属"],
  category: "魚類",
  image: "images/sp0234.jpg",

  trivia: [
    {
      title: "かなり浅い場所にも暮らす",
      text: "水深10cmほどの場所からも記録があり、非常に浅い海にも生息します。"
    },
    {
      title: "砂泥底に溶け込む模様",
      text: "暗色斑や筋状の模様によって、砂や泥の上では見つけにくくなります。"
    }
  ],

  bodyLength: "10cm前後までの小型のハゼです。",

  distribution: "日本沿岸を含む北西太平洋に分布します。",

  habitat: "内湾や河口、干潟などの浅い砂泥底に生息し、水深0.1〜6mほどから多く記録されています。",

  diet: "小型甲殻類やゴカイなどの底生動物を食べます。",

  features: "細長い体に暗褐色の斑紋が並び、体側では筋状に見えることがあります。",

  behavior: "砂泥底で、短く泳いでは海底に止まる動きを繰り返します。",

  reproduction: "詳しい産卵期や卵保護については、今回確認した資料では十分に分かっていません。",

  identification: "体側の暗色斑や筋状模様に加え、頭部やひれの形も確認します。",

  nameOrigin: "体側に見える筋状の模様が「スジハゼ」という名前につながっています。",

  humanRelation: "食用としての重要性は高くありませんが、干潟や内湾に暮らす身近なハゼです。",

  observationPoint: "砂泥底と体色を見比べ、背景へ溶け込む模様を観察してください。",

  references: [
    "BISMaL: Acentrogobius virgatulus スジハゼ"
  ]
},

{
  id: "sp0235",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ニジギンポ",
  scientificName: "Petroscirtes breviceps",
  englishName: "Striped poison-fang blenny mimic",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "イソギンポ科", "ニジギンポ属"],
  category: "魚類",
  image: "images/sp0235.jpg",

  trivia: [
    {
      title: "毒を持つギンポに姿を似せる",
      text: "地域によって毒牙を持つミナミギンポ属の魚に似た姿になり、捕食者をだます擬態として知られます。"
    },
    {
      title: "空き缶を巣にすることもある",
      text: "貝殻や古い棲管だけでなく、小さな空き缶などを産卵場所に使うことがあります。"
    }
  ],

  bodyLength: "最大で標準体長約11cm。",

  distribution: "東アフリカから西太平洋まで広く分布し、日本では北海道付近から南日本まで記録されています。",

  habitat: "浅い岩礁や藻場、内湾、河口周辺などの水深1〜15mほどに生息します。",

  diet: "小型甲殻類や珪藻、海藻に付着する小さな生物などを食べる雑食性です。",

  features: "細長い体に吻から尾側へ伸びる幅広い暗色帯があり、下あごには大きな犬歯があります。",

  behavior: "海藻やロープ、貝殻、人工物の隙間を隠れ場所として利用します。",

  reproduction: "付着性の卵を産み、オスは貝殻や人工物の空洞を巣として利用します。",

  identification: "吻から尾へ伸びる暗色帯と細長い体が特徴で、下あごには大きな犬歯があります。",

  nameOrigin: "標準和名の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "観賞魚として扱われることがあり、空き缶などの人工物を巣に利用することもあります。",

  observationPoint: "岩穴や人工物の隙間から頭を出していないか探し、口元の犬歯にも注目してください。",

  references: [
    "FishBase: Petroscirtes breviceps",
    "神奈川県立生命の星・地球博物館：ニジギンポ",
    "小学館 図鑑NEO 魚：ニジギンポ"
  ]
},

{
  id: "sp0236",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ホンベラ",
  scientificName: "Hemiulis bleekeri",
  englishName: "Mottlestripe wrasse",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "ホンベラ属"],
  category: "魚類",
  image: "images/sp0236.jpg",

  trivia: [
    {
      title: "2026年に学名が大きく変わった",
      text: "長く別学名が使われましたが、日本魚類学会は2026年に Hemiulis bleekeri へ変更しました。"
    },
    {
      title: "メスからオスへ性転換する",
      text: "メスから大型のオスへ性転換する個体のほか、最初からオスとして成熟する一次オスもいます。"
    }
  ],

  bodyLength: "全長15cm前後になる小型のベラです。",

  distribution: "日本では青森県付近から九州、伊豆諸島、瀬戸内海、種子島などに分布し、朝鮮半島や台湾でも見られます。",

  habitat: "浅い岩礁や藻場などに生息します。",

  diet: "岩礁表面などにいる小型甲殻類などを捕食します。",

  features: "メスや一次オスは赤褐色系ですが、性転換した大型オスでは青緑色や赤色の模様が発達します。",

  behavior: "昼間に岩礁周辺を泳いで餌を探し、性や社会的状態によって体色や行動が異なります。",

  reproduction: "夏を中心に産卵し、雌雄が水中へ上昇して放卵・放精し、一次オスによる集団産卵も見られます。",

  identification: "性によって色彩が大きく異なり、古い図鑑では別の学名で掲載されていることがあります。",

  nameOrigin: "標準和名の詳しい命名由来については、今回確認した資料では分かっていません。",

  humanRelation: "沿岸で普通に見られ、2026年の分類変更を知るうえでも興味深い魚です。",

  observationPoint: "複数個体の体色を比べ、赤褐色の個体と青緑色の大型個体の違いを見てください。",

  references: [
    "日本魚類学会 2026：ホンベラ Hemiulis bleekeri の学名変更",
    "Near et al. 2025. Phylogenetic Taxonomy of Wrasses and Parrotfishes",
    "鳥羽水族館：ホンベラ（旧学名表記）"
  ]
},

{
  id: "sp0237",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "イトベラ",
  scientificName: "Suezichthys gracilis",
  englishName: "Slender wrasse",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "イトベラ属"],
  category: "魚類",
  image: "images/sp0237.jpg",

  trivia: [
    {
      title: "名前の通り細長いベラ",
      text: "ベラ科の中でも非常に細長く、体長が体高の4倍以上になることがあります。"
    },
    {
      title: "ヒメジと一緒にいることもある",
      text: "砂地の転石周辺で、単独だけでなくヒメジ類などと一緒に見られることがあります。"
    }
  ],

  bodyLength: "全長15〜20cmほどで、FishBaseでは最大全長16cmの記録があります。",

  distribution: "日本、朝鮮半島、台湾、ベトナム、ニューカレドニア、オーストラリアなど西太平洋に分布します。",

  habitat: "穏やかな内湾の砂地や、砂地に点在する岩・サンゴ周辺に生息します。",

  diet: "ヨコエビ類などの小型甲殻類やゴカイ類を捕食します。",

  features: "白っぽい細長い体に眼を通る赤褐色の縦線があり、尾柄付近には黒斑があります。",

  behavior: "砂地を泳ぎながら小動物を探し、岩や転石周辺を利用します。",

  reproduction: "詳しい産卵期や性転換については、今回確認した資料では十分に分かっていません。",

  identification: "細長い体、眼を通る縦線、尾柄付近の黒斑が特徴です。",

  nameOrigin: "糸のように細長い体を持つベラであることから「イトベラ」と呼ばれると考えられます。",

  humanRelation: "主要な水産対象種ではありませんが、砂地に暮らすベラ類の多様性を観察できる魚です。",

  observationPoint: "ほかのベラと体高を比べ、非常に細長い体形に注目してください。",

  references: [
    "BISMaL: Suezichthys gracilis イトベラ",
    "FishBase: Suezichthys gracilis",
    "鹿児島大学総合研究博物館：イトベラ記録",
    "宇久井ビジターセンター：イトベラ"
  ]
},

{
  id: "sp0238",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "シロギス",
  scientificName: "Sillago japonica",
  englishName: "Japanese sillago",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キス科", "キス属"],
  category: "魚類",
  image: "images/sp0238.jpg",

  trivia: [
    {
      title: "砂浜のすぐ近くにもいる",
      text: "湾内の浅い砂地を好み、砂浜沿岸にも生息する身近な釣り魚です。"
    },
    {
      title: "砂の中の小さな動物を食べる",
      text: "砂底を泳ぎながら、ゴカイや小型甲殻類などを探して食べます。"
    }
  ],

  bodyLength: "最大で全長約30cmで、一般には15〜25cmほどの個体が多く見られます。",

  distribution: "日本、朝鮮半島、中国、台湾など北西太平洋に分布し、日本では北海道南部から九州・沖縄まで見られます。",

  habitat: "湾内や沿岸の浅い砂底に生息し、水深0〜30mほどでよく見られます。",

  diet: "ゴカイ類やエビ類などの小型甲殻類、底生無脊椎動物を食べます。",

  features: "細長い銀白色の体と前へ伸びた吻を持ち、2基の背びれは離れています。",

  behavior: "砂底近くを小さな群れで泳ぎながら餌を探し、季節によって深さを変えます。",

  reproduction: "卵生で海中へ産卵し、産卵時期には地域差があります。",

  identification: "細長い銀白色の体と、砂底近くを泳ぐ姿が特徴です。",

  nameOrigin: "銀白色の美しい体色が「シロギス」という名前に表れています。",

  humanRelation: "天ぷらや塩焼き、刺身などで食べられ、投げ釣りの代表的な対象魚です。",

  observationPoint: "砂底すれすれを泳ぎながら餌を探す姿に注目してください。",

  references: [
    "BISMaL: Sillago japonica シロギス",
    "FishBase: Sillago japonica"
  ]
},

{
  id: "sp0239",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒイラギ",
  scientificName: "Nuchequula nuchalis",
  englishName: "Spotnape ponyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ヒイラギ科", "ヒイラギ属"],
  category: "魚類",
  image: "images/sp0239.jpg",

  trivia: [
    {
      title: "体の中に『発光バクテリア』を飼っている",
      text: "体内の発光器で発光細菌と共生し、その細菌が作る光を利用します。"
    },
    {
      title: "口を前下方へ大きく伸ばせる",
      text: "小さな口を前下方へ大きく伸ばし、砂泥底の小動物を捕らえます。"
    }
  ],

  bodyLength: "最大で全長約25cmの記録がありますが、日本沿岸ではより小型の個体が多く見られます。",

  distribution: "本州中部以南から台湾、中国南部、ベトナム周辺まで分布します。",

  habitat: "内湾や河口周辺の砂泥底に生息し、汽水域へ入ることもあります。",

  diet: "小型甲殻類やゴカイ類など、砂泥底の小動物を食べます。",

  features: "銀白色で強く左右に平たい体を持ち、後頭部付近には黒褐色斑があります。",

  behavior: "群れで砂泥底付近を泳ぎ、伸ばせる口を使って海底の餌を取ります。",

  reproduction: "詳しい産卵時期や卵保護については、今回確認した資料では十分に分かっていません。",

  identification: "銀色で平たい体、頭の後方の黒褐色斑、前下方へ伸びる口が特徴です。",

  nameOrigin: "鋭いひれの棘が植物のヒイラギの葉のように痛いことが名前に関係するとされています。",

  humanRelation: "地域によって干物などに利用され、発光細菌との共生研究の対象にもなっています。",

  observationPoint: "口を大きく伸ばす瞬間と、銀色の体が光を反射する様子に注目してください。",

  references: [
    "BISMaL: Nuchequula nuchalis",
    "神奈川県：ヒイラギ",
    "Dunlap et al. 2008. Bioluminescent symbiosis in Nuchequula nuchalis"
  ]
},

{
  id: "sp0240",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ゴンズイ",
  scientificName: "Plotosus japonicus",
  englishName: "Japanese eel catfish",
  classification: ["脊索動物門", "条鰭綱", "ナマズ目", "ゴンズイ科", "ゴンズイ属"],
  category: "魚類",
  image: "images/sp0240.jpg",

  trivia: [
    {
      title: "子どもは『ゴンズイ玉』を作る",
      text: "幼魚は多数で密集し、丸い塊のような「ゴンズイ玉」を作ります。"
    },
    {
      title: "背びれと胸びれの棘に毒がある",
      text: "第一背びれと胸びれの棘には毒があり、死んだ個体でも刺されると強く痛むため注意が必要です。"
    }
  ],

  bodyLength: "全長20〜30cmほどになります。",

  distribution: "日本では本州中部以南から九州・南日本の沿岸に分布します。",

  habitat: "浅い岩礁や藻場、港、河口周辺などに生息し、幼魚は特に浅場で見られます。",

  diet: "ゴカイ、小型甲殻類、貝類など海底の小動物を食べます。",

  features: "細長い黒褐色の体に2本の淡色縦帯があり、口の周囲には8本のひげがあります。",

  behavior: "幼魚は密集した群れを作り、一斉に方向転換します。",

  reproduction: "鹿児島大学の資料では、産卵期は6〜8月と紹介されています。",

  identification: "2本の淡色縦帯、8本のひげ、細長い体が特徴で、ひれの毒棘には注意が必要です。",

  nameOrigin: "標準和名の詳しい語源には複数の説があり、この図鑑では断定しません。",

  humanRelation: "毒棘を持つため磯遊びや釣りでは注意が必要ですが、「ゴンズイ玉」は特徴的な展示になります。",

  observationPoint: "幼魚の群れが間隔を保ったまま一斉に方向転換する様子を見てください。",

  references: [
    "BISMaL: Plotosus japonicus ゴンズイ",
    "Yoshino & Kishimoto 2008. Plotosus japonicus",
    "鹿児島大学総合研究博物館：ゴンズイ"
  ]
},

{
  id: "sp0241",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ウツボ",
  scientificName: "Gymnothorax kidako",
  englishName: "Kidako moray",
  classification: ["脊索動物門", "条鰭綱", "ウナギ目", "ウツボ科", "ウツボ属"],
  category: "魚類",
  image: "images/sp0241.jpg",

  trivia: [
    {
      title: "口を開けているのは怒っているからとは限らない",
      text: "口を繰り返し開閉して鰓へ水を送り呼吸するため、常に威嚇しているわけではありません。"
    },
    {
      title: "胸びれがない",
      text: "胸びれと腹びれを持たず、細長い体で岩の隙間へ入り込むのに適しています。"
    }
  ],

  bodyLength: "大型では全長1m前後になり、標準体長91.5cmの記録があります。",

  distribution: "日本、台湾、小笠原諸島、ハワイ、ソシエテ諸島など西・中部太平洋に分布します。",

  habitat: "沿岸の岩礁やサンゴ礁の岩穴・割れ目に生息します。",

  diet: "魚やタコ、甲殻類などを捕食します。",

  features: "非常に細長い褐色の体に不規則な暗色模様があり、胸びれと腹びれはありません。",

  behavior: "岩穴に体を隠して頭だけを出し、口を開閉しながら呼吸します。",

  reproduction: "詳しい産卵行動や繁殖期については、今回確認した資料では十分に分かっていません。",

  identification: "褐色のまだら模様、太く細長い体、大きな口が特徴です。",

  nameOrigin: "「ウツボ」の詳しい語源には複数の説があるため、この図鑑では断定しません。",

  humanRelation: "地域によって食用にされますが、鋭い歯を持つため野外では岩穴へ手を入れないことが重要です。",

  observationPoint: "一定のリズムで口を開閉している呼吸の動きに注目してください。",

  references: [
    "BISMaL: Gymnothorax kidako ウツボ",
    "FishBase: Gymnothorax kidako"
  ]
},

{
  id: "sp0242",
  areaIds: ["labo6",
  "dolphin-arch"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカハタ",
  scientificName: "Epinephelus fasciatus",
  englishName: "Blacktip grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "マハタ属"],
  category: "魚類",
  image: "images/sp0242.jpg",

  trivia: [
    {
      title: "メスからオスへ性転換する",
      text: "若い個体は主にメスで、成長した一部の個体がオスへ性転換します。"
    },
    {
      title: "繁殖のピークは夏",
      text: "三重県志摩沖では6〜8月が繁殖盛期で、性転換は標準体長約19cmから始まると推定されています。"
    }
  ],

  bodyLength: "最大で全長約52cmで、20〜30cm前後の個体も多く見られます。",

  distribution: "紅海・東アフリカから日本、韓国、太平洋島嶼域までインド太平洋に広く分布します。",

  habitat: "岩礁やサンゴ礁の水深4〜160mほどに生息し、20〜45mほどでよく見られます。",

  diet: "魚やエビ、カニなどを捕食します。",

  features: "赤色から赤褐色の体を持ち、背びれの棘の間にある膜の先端が黒くなります。",

  behavior: "岩陰や割れ目周辺にとどまり、近づいた獲物を待ち伏せします。",

  reproduction: "メスからオスへ性転換し、志摩沖では6〜8月が繁殖盛期、標準体長約19cmから性転換が始まるとされています。",

  identification: "赤い体と、背びれ棘間の膜の先端が黒いことが特徴です。",

  nameOrigin: "赤みの強い体色を持つハタ類であることが「アカハタ」という名前に表れています。",

  humanRelation: "食用価値が高く、刺身や煮付けなどに利用され、釣りの対象にもなります。",

  observationPoint: "背びれを見て、棘の間の膜の先端が黒くなっている部分を探してください。",

  references: [
    "BISMaL: Epinephelus fasciatus アカハタ",
    "FishBase: Epinephelus fasciatus",
    "三重県志摩沖におけるアカハタの成熟と性転換"
  ]
},

{
  id: "sp0243",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アオハタ",
  scientificName: "Epinephelus awoara",
  englishName: "Yellow grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "マハタ属"],
  category: "魚類",
  image: "images/sp0243.jpg",

  trivia: [
    {
      title: "黄色い斑点が体中にある",
      text: "灰褐色の体に多数の黄色い小斑点があり、背びれや尾びれにも黄色い縁取りがあります。"
    },
    {
      title: "メスからオスへ変わる",
      text: "最初はメスとして成熟し、その後一部の個体がオスへ性転換します。"
    }
  ],

  bodyLength: "最大で全長約60cm。",

  distribution: "日本、朝鮮半島、中国、台湾、ベトナムなど北西太平洋に分布します。",

  habitat: "岩礁や砂泥底の水深10〜50mほどに生息し、幼魚は潮だまりでも見られます。",

  diet: "小魚やエビ、カニなどを捕食します。",

  features: "灰褐色の体に黄色い小斑点が多数あり、体上部には幅広い暗色帯があります。",

  behavior: "海底付近の岩陰や砂泥底周辺から獲物を狙います。",

  reproduction: "メスとして成熟した後、一部の個体がオスへ性転換します。",

  identification: "黄色い小斑点、暗色帯、ひれの黄色い縁取りが特徴です。",

  nameOrigin: "標準和名の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "食用魚として漁獲され、地域によっては養殖も行われています。",

  observationPoint: "体側の黄色い点と、背びれ・尾びれの黄色い縁取りに注目してください。",

  references: [
    "BISMaL: Epinephelus awoara アオハタ",
    "FishBase: Epinephelus awoara",
    "Liu et al. 2016: sexual development of Epinephelus awoara"
  ]
},

{
  id: "sp0244",
  areaIds: ["labo6",
  "dolphin-arch"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キジハタ",
  scientificName: "Epinephelus akaara",
  englishName: "Hong Kong grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "マハタ属"],
  category: "魚類",
  image: "images/sp0244.jpg",

  trivia: [
    {
      title: "赤やオレンジの点が全身に広がる",
      text: "灰褐色の体に赤色から橙色の小斑点が多数あり、背びれの縁も黄橙色になります。"
    },
    {
      title: "性転換は一方向だけとは限らない",
      text: "基本はメスからオスへ変わりますが、飼育下ではオスからメスへ戻る性転換も確認されています。"
    }
  ],

  bodyLength: "最大で全長約58cm。",

  distribution: "南日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",

  habitat: "沿岸の岩礁域の水深1〜55mほどに生息し、幼魚は水深10mより浅い場所でも見られます。",

  diet: "魚類や甲殻類などを捕食します。",

  features: "灰褐色の体に赤・橙・金色の小斑点が多数あり、尾びれは丸みを帯びます。",

  behavior: "岩穴や岩礁周辺に定着し、近くを通る魚や甲殻類を捕食します。",

  reproduction: "主にメスからオスへ性転換しますが、飼育下では双方向の性転換も確認されています。",

  identification: "全身に散る赤橙色の小斑点と、背びれ基部付近の暗色斑が特徴です。",

  nameOrigin: "標準和名の詳しい命名由来については、今回確認した資料では分かっていません。",

  humanRelation: "高級食用魚として知られ、漁獲のほか種苗生産や養殖研究も行われています。",

  observationPoint: "アカハタやアオハタと、斑点の色や大きさ、体の地色を比べてください。",

  references: [
    "BISMaL: Epinephelus akaara キジハタ",
    "FishBase: Epinephelus akaara",
    "Kim et al. 2015: gonadal differentiation of Epinephelus akaara",
    "Liu et al. 2016: bidirectional sex change in groupers"
  ]
},

{
  id: "sp0245",
  areaIds: ["labo6",
  "dolphin-arch"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "メジナ",
  scientificName: "Girella punctata",
  englishName: "Largescale blackfish",
  classification: ["脊索動物門", "条鰭綱", "Centrarchiformes", "メジナ科", "メジナ属"],
  category: "魚類",
  image: "images/sp0245.jpg",

  trivia: [
    {
      title: "幼魚は流れ藻と一緒に移動する",
      text: "幼魚は流れ藻を利用することがあり、成長すると沿岸の岩礁で暮らします。"
    },
    {
      title: "海藻をよく食べる魚",
      text: "成魚は海藻を多く食べますが、甲殻類やゴカイなども食べる雑食性です。"
    }
  ],

  bodyLength: "最大で全長約50cm。",

  distribution: "北海道南部から本州・四国・九州、台湾、東シナ海周辺などに分布します。",

  habitat: "沿岸の岩礁域に生息し、浅い磯から水深30mほどまで記録されています。",

  diet: "海藻を中心に、甲殻類やゴカイ類なども食べる雑食性です。",

  features: "体高のある青灰色から黒緑色の体を持ち、大きめの鱗が規則的に並びます。",

  behavior: "岩礁周辺を群れで泳ぎ、岩面の藻類をついばみます。",

  reproduction: "関東・伊豆周辺では春が主な産卵期で、北部伊豆諸島では4〜5月ごろとされています。",

  identification: "クロメジナと似るため、鰓蓋後縁の色や鱗、尾びれの形なども確認します。",

  nameOrigin: "標準和名の詳しい語源には複数の説があるため、この図鑑では断定しません。",

  humanRelation: "磯釣りの代表的な対象魚で、刺身や塩焼きなどでも食べられます。",

  observationPoint: "口元を見て、岩面の藻類をついばむ様子に注目してください。",

  references: [
    "Eschmeyer's Catalog of Fishes: Girella punctata",
    "FishBase: Girella punctata",
    "BISMaL: Girella punctata メジナ",
    "Fisheries Science 2018: Girella punctata juvenile distribution and spawning"
  ]
},

{
  id: "sp0246",
  areaIds: ["labo6",
  "dolphin-arch"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タカノハダイ",
  scientificName: "Goniistius zonatus",
  englishName: "Spottedtail morwong",
  classification: ["脊索動物門", "条鰭綱", "Centrarchiformes", "タカノハダイ科", "タカノハダイ属"],
  category: "魚類",
  image: "images/sp0246.jpg",

  trivia: [
    {
      title: "学名の扱いがデータベースで違う",
      text: "Catalog of FishesとWoRMSでは Goniistius zonatus、BISMaLでは Cheilodactylus zonatus とされ、資料間で扱いが異なります。"
    },
    {
      title: "小さな甲殻類をかなり食べる",
      text: "ヨコエビやカニ、ゴカイ、等脚類など、さまざまな海底の小動物を食べます。"
    }
  ],

  bodyLength: "最大で全長約45cm。",

  distribution: "本州中部以南から朝鮮半島、中国南部、台湾、ベトナム北部周辺まで分布します。",

  habitat: "沿岸の岩礁域を中心に、砂底や泥底も利用します。",

  diet: "ヨコエビ、カニ、ゴカイ、等脚類、貝類などの底生動物を食べます。",

  features: "淡い体に斜めの暗色帯が並び、尾びれには特徴的な斑紋があります。",

  behavior: "海底近くをゆっくり泳ぎ、岩や砂底周辺の小動物を探します。",

  reproduction: "詳しい産卵期や産卵行動については、今回確認した資料では十分に分かっていません。",

  identification: "斜めに走る暗色帯と尾びれの模様が特徴です。",

  nameOrigin: "斜めの帯模様が鷹の羽を思わせることが名前に関係するとされています。",

  humanRelation: "食用になることがありますが、地域や季節によって独特のにおいがあるとされています。",

  observationPoint: "斜めの帯と尾びれの模様を見て、ミギマキとの違いも比べてください。",

  references: [
    "Eschmeyer's Catalog of Fishes 2026: Goniistius zonatus",
    "WoRMS: Goniistius zonatus",
    "BISMaL: Cheilodactylus zonatus タカノハダイ",
    "FishBase: Goniistius zonatus"
  ]
},

{
  id: "sp0247",
  areaIds: ["labo6",
  "dolphin-arch"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オキゴンベ",
  scientificName: "Cirrhitichthys aureus",
  englishName: "Yellow hawkfish",
  classification: ["脊索動物門", "条鰭綱", "Centrarchiformes", "ゴンベ科", "オキゴンベ属"],
  category: "魚類",
  image: "images/sp0247.jpg",

  trivia: [
    {
      title: "オスからメスにも戻れる",
      text: "飼育下ではメスからオスだけでなく、オスからメスへの双方向の性転換も確認されています。"
    },
    {
      title: "岩の上に止まって周囲を見る",
      text: "胸びれで岩やサンゴの上に体を支え、周囲を見渡すように止まります。"
    }
  ],

  bodyLength: "最大で全長約14cm。",

  distribution: "インドから中国、日本の相模湾付近までのインド・西太平洋に分布します。",

  habitat: "岩礁や岩壁、湾内の水深5〜20mほどに生息します。",

  diet: "小型甲殻類や小魚などを捕食します。",

  features: "黄色から橙色の体を持ち、背びれ棘の先には房状の皮弁があります。",

  behavior: "岩やサンゴの上に胸びれで体を支えるように止まり、獲物を待ちます。",

  reproduction: "飼育下ではオスからメス、メスからオスの両方向の性転換が確認されています。",

  identification: "鮮やかな黄橙色の体と、背びれ棘先端の房状突起が特徴です。",

  nameOrigin: "標準和名の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "鮮やかな体色と独特の行動から、海水観賞魚として扱われます。",

  observationPoint: "岩の上に胸びれで体を支えて止まる瞬間を探してください。",

  references: [
    "FishBase: Cirrhitichthys aureus",
    "BISMaL: Cirrhitichthys属",
    "Sex change studies of Cirrhitichthys aureus"
  ]
},

{
  id: "sp0248",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ノミノクチ",
  scientificName: "Epinephelus trimaculatus",
  englishName: "Threespot grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "マハタ属"],
  category: "魚類",
  image: "images/sp0248.jpg",

  trivia: [
    {
      title: "北西太平洋に分布するハタ",
      text: "南日本や朝鮮半島、台湾、中国沿岸に分布し、過去のインド洋記録は誤同定の可能性が高いとされています。"
    },
    {
      title: "体には赤褐色の細かな点",
      text: "淡褐色の体とひれに、赤色から赤褐色の小斑点が多数あります。"
    }
  ],

  bodyLength: "最大で全長約50cm。",

  distribution: "南日本、朝鮮半島、台湾、中国沿岸など北西太平洋に分布します。",

  habitat: "浅い岩礁域の水深0〜30mほどに生息します。",

  diet: "小魚や甲殻類などを捕食します。",

  features: "淡褐色の体に多数の赤褐色斑があり、背側には暗色斑が見られます。",

  behavior: "岩陰や岩礁周辺の海底近くにとどまり、近づいた獲物を捕食します。",

  reproduction: "性転換や産卵期については、今回確認した資料では十分に分かっていません。",

  identification: "体全体の赤褐色斑と、背側にある暗色斑が特徴です。",

  nameOrigin: "標準和名の詳しい命名由来については、今回確認した資料では分かっていません。",

  humanRelation: "食用魚として漁獲されるハタ類です。",

  observationPoint: "背中側の暗色斑と、全身に散る細かな赤褐色斑に注目してください。",

  references: [
    "BISMaL: Epinephelus trimaculatus ノミノクチ",
    "FishBase: Epinephelus trimaculatus"
  ]
},

{
  id: "sp0249",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒガンフグ",
  scientificName: "Takifugu pardalis",
  englishName: "Panther puffer",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "フグ科", "トラフグ属"],
  category: "魚類",
  image: "images/sp0249.jpg",

  trivia: [
    {
      title: "皮には小さなイボ状の突起",
      text: "体表には小さなイボ状突起と多数の黒褐色斑があり、背面と腹面には目立つ小棘がありません。"
    },
    {
      title: "食べられる部位は厳しく決められている",
      text: "厚生労働省では原則として筋肉のみが可食部位で、肝臓・卵巣・精巣・皮・腸は食用不可です。"
    }
  ],

  bodyLength: "厚生労働省では全長35cmほどになる中型種として紹介されています。",

  distribution: "日本沿岸から黄海、東シナ海まで北西太平洋に分布します。",

  habitat: "沿岸の岩礁域や海底付近に生息します。",

  diet: "甲殻類、貝類、ゴカイなど海底の小動物を食べます。",

  features: "赤みを帯びた褐色の背面に多数の黒褐色斑があり、体表には小さな丸い突起があります。",

  behavior: "海底付近で餌を探し、危険を感じると体を膨らませることがあります。",

  reproduction: "詳しい産卵場所や産卵行動については、今回確認した資料では十分に分かっていません。",

  identification: "赤褐色の背面、多数の黒色斑、小さなイボ状突起が特徴です。",

  nameOrigin: "彼岸の時期との関係を示す説がありますが、確定的な由来としては断定しません。",

  humanRelation: "テトロドトキシンを持ち、原則として筋肉のみが可食部位で、専門的な処理が必要です。",

  observationPoint: "普段の体表を見て、細かなイボ状突起と黒褐色斑を探してください。",

  references: [
    "BISMaL: Takifugu pardalis ヒガンフグ",
    "FishBase: Takifugu pardalis",
    "厚生労働省：自然毒のリスクプロファイル フグ毒"
  ]
},

{
  id: "sp0250",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コブセミエビ",
  scientificName: "Scyllarides haanii",
  englishName: "Aesop slipper lobster",
  classification: ["節足動物門", "軟甲綱", "十脚目", "セミエビ科", "セミエビ属"],
  category: "甲殻類",
  image: "images/sp0250.jpg",

  trivia: [
    {
      title: "セミエビ類でも最大級",
      text: "大型では全長約50cmに達する、非常に大型のセミエビ類です。"
    },
    {
      title: "幼生の詳しい姿が記載されたのは2024年",
      text: "DNAで同定された後期フィロソーマ幼生の詳しい形態が、2024年に初めて報告されました。"
    }
  ],

  bodyLength: "大型では全長約50cmで、甲長は最大17cmほどの記録があります。",

  distribution: "インド洋から日本、韓国、中国、東南アジア、オーストラリア、ハワイなどに広く分布します。",

  habitat: "水深10〜135mほどの岩礁底などに生息します。",

  diet: "貝類など海底の無脊椎動物を食べます。",

  features: "幅広く頑丈な体と板状の第2触角を持ち、背面にはこぶ状の隆起があります。",

  behavior: "岩礁の海底を歩くように移動し、岩穴や岩陰を隠れ場所にします。",

  reproduction: "メスは腹部に卵を抱え、孵化した幼生は平たく透明なフィロソーマ幼生として長期間漂います。",

  identification: "大型の体、板状の触角、背中の隆起した構造が特徴です。",

  nameOrigin: "背面に目立つこぶ状の隆起があることが名前に表れています。",

  humanRelation: "食用になる大型甲殻類で、地域によって漁獲・流通します。",

  observationPoint: "板状の触角と背中の凹凸を、セミエビやゾウリエビと比べてください。",

  references: [
    "BISMaL: Scyllarides haanii コブセミエビ",
    "WoRMS: Scyllarides haanii",
    "FAO Marine Lobsters of the World",
    "Konishi et al. 2024: first larval description of Scyllarides haanii"
  ]
},

{
  id: "sp0251",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オニオコゼ",
  scientificName: "Inimicus japonicus",
  englishName: "Devil stinger",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "オニオコゼ科", "オニオコゼ属"],
  category: "魚類",
  image: "images/sp0251.jpg",

  trivia: [
    {
      title: "背びれの棘には毒がある",
      text: "背びれの棘には強い毒があり、刺されると激しく痛むため、野外では触らないことが重要です。"
    },
    {
      title: "夏に繰り返し産卵する",
      text: "新潟県では6〜8月が産卵期、7月が盛期で、1シーズンに複数回産卵すると考えられています。"
    }
  ],

  bodyLength: "最大で全長約29cm。",

  distribution: "日本から東シナ海・中国沿岸周辺に分布します。",

  habitat: "水深10〜200mほどの砂底や砂泥底などに生息します。",

  diet: "小魚やエビ、カニなどを待ち伏せして捕食します。",

  features: "大きな頭と凹凸の多い体表を持ち、褐色系の体色で海底へよく溶け込みます。",

  behavior: "砂底へ体を埋めて獲物を待ち伏せし、胸びれ周辺の軟条で歩くように移動することもあります。",

  reproduction: "新潟県沿岸では6〜8月が産卵期、7月が盛期で、複数回産卵すると考えられています。",

  identification: "平たい大きな頭と凹凸の多い体表が特徴で、背びれの棘には毒があります。",

  nameOrigin: "鬼を思わせるごつごつした頭部と、オコゼ類の姿から「オニオコゼ」と呼ばれます。",

  humanRelation: "毒棘を持つ一方で高級食用魚として扱われ、養殖も行われています。",

  observationPoint: "海底をよく見て、砂や岩の色へどれほど溶け込んでいるか観察してください。",

  references: [
    "BISMaL: Inimicus japonicus オニオコゼ",
    "FishBase: Inimicus japonicus",
    "渡辺 2006・2012：オニオコゼの成熟と繁殖"
  ]
},

{
  id: "sp0252",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スズキ",
  scientificName: "Lateolabrax japonicus",
  englishName: "Japanese seabass",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "スズキ科", "スズキ属"],
  category: "魚類",
  image: "images/sp0252.jpg",

  trivia: [
    {
      title: "海の魚なのに川へ入る",
      text: "特に若い個体は、河口や汽水域だけでなく河川へ遡上することがあります。"
    },
    {
      title: "成長すると名前が変わる出世魚",
      text: "地域差はありますが、成長するとセイゴ、フッコ、スズキなどと呼び名が変わる出世魚です。"
    }
  ],

  bodyLength: "最大で全長約102cmになり、大型個体では1mを超えます。",

  distribution: "日本から朝鮮半島、中国沿岸、南シナ海周辺まで西太平洋に分布します。",

  habitat: "沿岸、内湾、河口、汽水域、河川下流など幅広い環境を利用します。",

  diet: "幼魚は動物プランクトンやアミ類、成長すると小魚やエビ類などを主に食べます。",

  features: "銀白色の細長い体と大きな口を持ち、下あごはやや前へ突き出します。",

  behavior: "若魚は河口や河川へ入り、成長すると沿岸を広く移動します。",

  reproduction: "主に冬に沿岸のやや深い場所などで産卵し、仔稚魚は成長すると河口や汽水域へ入ります。",

  identification: "大きな口、細長い銀色の体、前へ出た下あごが特徴です。",

  nameOrigin: "「スズキ」の語源には複数の説があるため、この図鑑では断定しません。",

  humanRelation: "刺身や洗い、焼き物などに利用され、ルアーフィッシングでは「シーバス」として人気があります。",

  observationPoint: "小魚を丸ごと捕食できる大きな口と、細長い体に注目してください。",

  references: [
    "BISMaL: Lateolabrax japonicus スズキ",
    "FishBase: Lateolabrax japonicus"
  ]
},

{
  id: "sp0253",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "イラ",
  scientificName: "Choerodon azurio",
  englishName: "Azurio tuskfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "イラ属"],
  category: "魚類",
  image: "images/sp0253.jpg",

  trivia: [
    {
      title: "ベラの仲間でもかなり頑丈な歯",
      text: "丈夫な犬歯を持ち、甲殻類や貝類など硬い餌を食べるのに適しています。"
    },
    {
      title: "繁殖時はペアになる",
      text: "卵生で、繁殖時には雌雄が明瞭なペアを作って産卵します。"
    }
  ],

  bodyLength: "最大で全長約40cm。",

  distribution: "南日本、朝鮮半島、台湾、中国沿岸など西太平洋北西部に分布します。",

  habitat: "沿岸の岩礁底を中心に生息します。",

  diet: "甲殻類や貝類など、海底のさまざまな底生動物を食べます。",

  features: "成魚では体を斜めに走る暗色帯が目立ち、丸みのある頭と丈夫な犬歯を持ちます。",

  behavior: "岩礁の海底近くを泳ぎながら餌を探します。",

  reproduction: "卵生で、繁殖時には雌雄がペアになり海中へ卵を放出します。",

  identification: "体を斜めに横切る暗色帯、厚みのある頭、大きな犬歯が特徴です。",

  nameOrigin: "「イラ」の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "漁獲され食用になり、釣りの対象になることもあります。",

  observationPoint: "口元を見て、ベラの仲間とは思えないほど頑丈な犬歯に注目してください。",

  references: [
    "BISMaL: Choerodon azurio イラ",
    "FishBase: Choerodon azurio"
  ]
},

{
  id: "sp0254",
  areaIds: ["labo6",
  "dolphin-arch",
  "ocean-labo-a",
  "ocean-labo-b",
  "ocean-labo-c",
  "ocean-labo-d",
  "ocean-labo-e",
  "fishermans-oasis",
  "marine-biotop"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "イサキ",
  scientificName: "Parapristipoma trilineatum",
  englishName: "Chicken grunt",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "イサキ科", "イサキ属"],
  category: "魚類",
  image: "images/sp0254.jpg",

  trivia: [
    {
      title: "体側の3本線が学名にも表れている",
      text: "成魚では体側に3本の黄褐色の縦線があり、種小名 trilineatum も「3本の線」を表します。"
    },
    {
      title: "季節によって浅場と沖合を移動する",
      text: "季節によって浅場と沖合の深い場所を移動することがあります。"
    }
  ],

  bodyLength: "最大で標準体長約40cmで、一般には20〜35cmほどです。",

  distribution: "南日本、東シナ海、台湾周辺など北西太平洋に分布します。",

  habitat: "暖かく塩分の高い海を好み、沿岸の岩礁域やその周辺に生息します。",

  diet: "甲殻類やゴカイ類などの小型動物を中心に食べます。",

  features: "灰褐色から銀灰色の体側に3本の黄褐色の縦線があり、幼魚ではより明瞭です。",

  behavior: "岩礁周辺で群れを作り、夜間に活発に餌を取ることがあります。",

  reproduction: "卵生で、雌雄が水中を素早く上昇しながら放卵・放精します。",

  identification: "体側の3本の縦線と、比較的体高のある体形が特徴です。",

  nameOrigin: "「イサキ」の詳しい語源には複数の説があるため、この図鑑では断定しません。",

  humanRelation: "日本の重要な食用魚で、刺身や塩焼き、煮付けなどに利用され、養殖や種苗放流も行われています。",

  observationPoint: "体側の3本線を数え、群れで同じ方向へ泳ぐ様子にも注目してください。",

  references: [
    "BISMaL: Parapristipoma trilineatum イサキ",
    "FishBase: Parapristipoma trilineatum",
    "木村清志 1987：イサキの資源生物学的研究",
    "全国海水養魚協会：イサキ"
  ]
},

{
  id: "sp0255",
  areaIds: ["labo6", "dolphin-arch"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クエ",
  scientificName: "Epinephelus bruneus",
  englishName: "Longtooth grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "マハタ属"],
  category: "魚類",
  image: "images/sp0255.jpg",

  trivia: [
    {
      title: "大きな個体はメスからオスへ変わる",
      text: "まずメスとして成熟し、成長した一部の大型個体がオスへ性転換します。"
    },
    {
      title: "養殖研究が長く続けられている高級魚",
      text: "近畿大学では1980年代から養殖研究が続き、人工種苗生産技術も発達しています。"
    }
  ],

  bodyLength: "最大で全長約136cm、体重33kgの記録があります。",

  distribution: "日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",

  habitat: "成魚は主に水深20〜200mほどの岩礁域などに生息し、幼魚はより浅い場所にも現れます。",

  diet: "魚類や甲殻類などを捕食します。",

  features: "がっしりした大きな体と口を持ち、体側には6本ほどの太く不規則な暗色帯があります。",

  behavior: "岩穴や岩陰を利用し、近づいた魚や甲殻類を捕食します。",

  reproduction: "メスとして成熟した後、一部の大型個体がオスへ性転換します。",

  identification: "大型で厚みのある体、幅広い暗色帯、大きな口が特徴です。",

  nameOrigin: "「クエ」の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "高級食用魚として珍重され、養殖や種苗生産研究も行われています。",

  observationPoint: "大きな口と太い体を見て、待ち伏せ型の大型捕食魚らしい体つきに注目してください。",

  references: [
    "FishBase: Epinephelus bruneus",
    "近畿大学水産研究所：クエ養殖",
    "水産学会誌：クエの性転換研究"
  ]
},

{
  id: "sp0256",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ホウキハタ",
  scientificName: "Epinephelus morrhua",
  englishName: "Comet grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "マハタ属"],
  category: "魚類",
  image: "images/sp0256.jpg",

  trivia: [
    {
      title: "昔は別の学名が使われていた",
      text: "以前は Epinephelus cometae も使われましたが、現在は E. morrhua の異名とされています。"
    },
    {
      title: "帯のつながり方が識別ポイント",
      text: "体側の暗色帯が複雑につながる模様が、近縁種との重要な識別点です。"
    }
  ],

  bodyLength: "全長80〜90cmほどになる大型のハタです。",

  distribution: "相模湾以南、小笠原諸島、琉球列島のほか、インド太平洋に広く分布します。",

  habitat: "沿岸から沖合の岩礁域に生息し、水深10〜370mほどから記録されています。",

  diet: "魚類や甲殻類などを捕食します。",

  features: "褐色から灰褐色の体に太い暗色帯が斜めに走り、頭部にも細い暗色帯があります。",

  behavior: "岩礁周辺の海底近くで獲物を待ち伏せします。",

  reproduction: "体長40〜45cmほどで性転換するとする資料がありますが、地域差や個体差も考えられます。",

  identification: "複数の暗色帯がどのようにつながるかが重要な識別点です。",

  nameOrigin: "「ホウキハタ」の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "釣りや延縄、刺網などで漁獲され、刺身や寿司などに利用されます。",

  observationPoint: "体側の帯を1本ずつ追い、途中で別の帯とつながる模様を探してください。",

  references: [
    "BISMaL: Epinephelus morrhua ホウキハタ",
    "WoRMS: Epinephelus morrhua",
    "FishBase: Epinephelus morrhua",
    "日本大百科全書：ホウキハタ"
  ]
},

{
  id: "sp0257",
  areaIds: ["labo6",
  "ocean-labo-a",
  "ocean-labo-b",
  "ocean-labo-c",
  "ocean-labo-d",
  "ocean-labo-e",
  "fishermans-oasis",
  "marine-biotop"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マダイ",
  scientificName: "Pagrus major",
  englishName: "Red seabream",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "タイ科", "マダイ属"],
  category: "魚類",
  image: "images/sp0257.jpg",

  trivia: [
    {
      title: "赤い体には青い点もある",
      text: "生きた個体では、赤い体に多数の小さな青色斑点があります。"
    },
    {
      title: "日本のお祝いと深く結びついた魚",
      text: "赤い体色や「めでたい」という語呂から、祝い事で古くから利用されています。"
    }
  ],

  bodyLength: "最大で標準体長約1m、体重約9.7kgの記録があります。",

  distribution: "日本を中心に、朝鮮半島、中国沿岸、東シナ海周辺など北西太平洋に分布します。",

  habitat: "沿岸から水深200mほどまでの岩礁、砂礫底、砂泥底などに生息します。",

  diet: "甲殻類、貝類、ゴカイ、ウニ、小魚などを食べます。",

  features: "赤色から桃色の体に青い小斑点があり、尾びれ後縁は黒く、下縁には白色部分があります。",

  behavior: "成長に伴って浅場から沖合まで利用し、繁殖期には比較的浅い場所へ移動します。",

  reproduction: "晩春から夏に浅い場所へ移動して産卵し、卵と仔魚は海中を漂います。",

  identification: "赤い体、青い小斑点、尾びれ後縁の黒色部分が特徴です。",

  nameOrigin: "「マダイ」の詳しい語源には複数の説があるため、この図鑑では断定しません。",

  humanRelation: "日本を代表する高級食用魚で、天然漁獲だけでなく養殖も盛んです。",

  observationPoint: "生きた個体ならではの、体側に散る青い小斑点を探してください。",

  references: [
    "BISMaL: Pagrus major マダイ",
    "FishBase: Pagrus major"
  ]
},

{
  id: "sp0258",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ユウダチタカノハ",
  scientificName: "Goniistius quadricornis",
  englishName: "Blackbarred morwong",
  classification: ["脊索動物門", "条鰭綱", "Centrarchiformes", "タカノハダイ科", "タカノハダイ属"],
  category: "魚類",
  image: "images/sp0258.jpg",

  trivia: [
    {
      title: "尾びれにほとんど模様がない",
      text: "タカノハダイやミギマキに似ますが、尾びれに目立つ模様がないことが特徴です。"
    },
    {
      title: "タカノハダイより深い場所にも現れる",
      text: "沿岸の岩礁だけでなく、比較的深い場所でも見られます。"
    }
  ],

  bodyLength: "最大で全長約40cm。",

  distribution: "日本では青森県・新潟県付近以南に見られ、朝鮮半島から南シナ海周辺まで分布します。",

  habitat: "沿岸の岩礁や周辺の砂地に生息し、比較的深い場所でも見られます。",

  diet: "小型甲殻類やゴカイ類などを利用すると考えられますが、詳しい食性資料は限られています。",

  features: "体側に太い暗色帯が斜めに並び、厚い唇と発達した胸びれ下部の軟条を持ちます。",

  behavior: "岩礁周辺の海底近くをゆっくり移動しながら餌を探します。",

  reproduction: "詳しい産卵期や繁殖行動については、今回確認した資料では十分に分かっていません。",

  identification: "尾びれに目立つ模様がないことや、顔周辺の帯模様が特徴です。",

  nameOrigin: "「ユウダチタカノハ」の詳しい命名由来については、今回確認した資料では分かっていません。",

  humanRelation: "漁獲され食用になることがあり、近縁のタカノハダイ類との比較にも向いています。",

  observationPoint: "まず尾びれを見て、タカノハダイやミギマキとの違いを比べてください。",

  references: [
    "Eschmeyer's Catalog of Fishes: Goniistius quadricornis",
    "FishBase: Goniistius quadricornis",
    "小学館 図鑑NEO：ユウダチタカノハ"
  ]
},

{
  id: "sp0259",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミギマキ",
  scientificName: "Goniistius zebra",
  englishName: "Redlip morwong",
  classification: ["脊索動物門", "条鰭綱", "Centrarchiformes", "タカノハダイ科", "タカノハダイ属"],
  category: "魚類",
  image: "images/sp0259.jpg",

  trivia: [
    {
      title: "真っ赤な唇が目立つ",
      text: "成魚では赤色の厚い唇が非常によく目立ちます。"
    },
    {
      title: "尾びれは上下で色が違う",
      text: "尾びれは上側が白っぽく、下側が黒くなります。"
    }
  ],

  bodyLength: "最大で全長約35cm。",

  distribution: "日本から台湾周辺までの北西太平洋に分布し、日本では相模湾以南などで見られます。",

  habitat: "沿岸の岩礁域に生息し、比較的浅い海から水深30mほどで見られます。",

  diet: "甲殻類やゴカイ類など、岩礁周辺の底生無脊椎動物を食べます。",

  features: "淡灰褐色の体に黒褐色の斜め帯があり、唇は赤く、尾びれは上半分が白く下半分が黒色です。",

  behavior: "海底近くをゆっくり泳ぎながら餌を探します。",

  reproduction: "詳しい産卵期や繁殖行動については、今回確認した資料では十分に分かっていません。",

  identification: "赤い唇と、上下で白黒に分かれる尾びれが特徴です。",

  nameOrigin: "「ミギマキ」の詳しい由来については、今回確認した資料では分かっていません。",

  humanRelation: "漁獲され食用になり、独特な赤い唇と縞模様からダイビングでも目立ちます。",

  observationPoint: "赤い唇、体の斜線、白黒の尾びれの順に観察してください。",

  references: [
    "Eschmeyer's Catalog of Fishes 2026: Goniistius zebra",
    "FishBase: Goniistius zebra",
    "Taiwan Fish Database: Goniistius zebra"
  ]
},

{
  id: "sp0260",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヘダイ",
  scientificName: "Rhabdosargus sarba",
  englishName: "Goldlined seabream",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "タイ科", "ヘダイ属"],
  category: "魚類",
  image: "images/sp0260.jpg",

  trivia: [
    {
      title: "海の魚なのに河口にも入る",
      text: "若い個体は河口や汽水域を成育場所として利用し、成長するとより深い場所へ移動します。"
    },
    {
      title: "性の仕組みが地域によって違う",
      text: "アジアではオスからメスへの性転換が報告される一方、オーストラリアでは雌雄が分かれる個体群が確認されています。"
    }
  ],

  bodyLength: "最大で全長約80cmで、一般には45cm前後までの個体が多く見られます。",

  distribution: "紅海・東アフリカから日本、中国、オーストラリアまでインド・西太平洋に広く分布します。",

  habitat: "沿岸の浅場、岩礁、砂底、河口、汽水域など幅広い環境を利用します。",

  diet: "貝類などの底生無脊椎動物を中心に、海草なども食べます。",

  features: "銀白色の体に黄色味を帯びた細い縦線があり、腹びれ基部の上には鮮やかな黄色部があります。",

  behavior: "若魚は河口や浅場で群れを作り、成長するとより深い沿岸域へ移動します。",

  reproduction: "アジアでは雄性先熟が報告される一方、オーストラリアでは雌雄が別々に成熟します。",

  identification: "銀色の体と、腹びれ付け根付近の黄色い部分が特徴です。",

  nameOrigin: "「ヘダイ」の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "食用・釣魚として利用され、地域によって養殖も行われています。",

  observationPoint: "腹びれの付け根周辺にある鮮やかな黄色を探してください。",

  references: [
    "FishBase: Rhabdosargus sarba",
    "FAO: Rhabdosargus sarba"
  ]
},

{
  id: "sp0261",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ウマヅラハギ",
  scientificName: "Thamnaconus modestus",
  englishName: "Black scraper",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "カワハギ科", "ウマヅラハギ属"],
  category: "魚類",
  image: "images/sp0261.jpg",

  trivia: [
    {
      title: "幼魚は流れ藻に付いて生活する",
      text: "幼魚は流れ藻の周辺を、隠れ場所や餌場として利用します。"
    },
    {
      title: "日本では養殖も行われる",
      text: "天然で漁獲されるだけでなく、日本では養殖も行われています。"
    }
  ],

  bodyLength: "最大で全長約37cmで、一般には20〜30cm前後です。",

  distribution: "北海道から琉球列島、東シナ海、南シナ海周辺まで北西太平洋に分布します。",

  habitat: "成魚は水深50〜110mほどの沖合の岩礁周辺などに多く、幼魚は流れ藻を利用します。",

  diet: "動物プランクトンなどを食べ、成長段階や環境によって餌は変化します。",

  features: "左右に平たい体と馬のように長い吻を持ち、第一背びれには強い棘があります。",

  behavior: "幼魚は流れ藻とともに移動し、成魚は沖合の海底付近で暮らします。",

  reproduction: "詳しい産卵行動については、今回確認した資料では十分に分かっていません。",

  identification: "カワハギより吻が長く、細長い顔と第一背びれの棘が特徴です。",

  nameOrigin: "細長い顔が馬の顔を思わせることから「ウマヅラハギ」と呼ばれます。",

  humanRelation: "食用魚で、刺身や鍋物、干物などに利用され、養殖も行われています。",

  observationPoint: "横から見て、馬のように長く伸びた顔に注目してください。",

  references: [
    "BISMaL: Thamnaconus modestus ウマヅラハギ",
    "FishBase: Thamnaconus modestus"
  ]
},

{
  id: "sp0262",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカメフグ",
  scientificName: "Takifugu chrysops",
  englishName: "Red-eyed puffer",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "フグ科", "トラフグ属"],
  category: "魚類",
  image: "images/sp0262.jpg",

  trivia: [
    {
      title: "名前通り眼が赤橙色",
      text: "眼が赤色から赤橙色になり、桃色から赤褐色の体色も特徴です。"
    },
    {
      title: "日本周辺に限られるフグ",
      text: "日本特産種とされ、房総半島から高知沖までの本州太平洋側を中心に分布します。"
    }
  ],

  bodyLength: "全長約25cmになる小型のフグです。",

  distribution: "日本の本州中部太平洋側を中心に、房総半島から高知沖まで分布します。",

  habitat: "沿岸の海底付近に生息します。",

  diet: "甲殻類や貝類などを食べると考えられますが、詳しい食性資料は限られています。",

  features: "桃黄色から橙褐色の体に黒褐色斑が散在し、眼は赤橙色で、背面と腹面に小棘はありません。",

  behavior: "海底付近で餌を探し、危険を感じると体を膨らませることがあります。",

  reproduction: "人工授精による発生研究がありますが、野生での詳しい産卵行動は十分に分かっていません。",

  identification: "赤橙色の眼、赤褐色系の体の黒斑、背面と腹面に小棘がないことが特徴です。",

  nameOrigin: "赤色から赤橙色に見える眼が「アカメフグ」の名前の由来です。",

  humanRelation: "フグ毒を持ち、厚生労働省では筋肉と精巣が可食部位ですが、専門的な処理が必要です。",

  observationPoint: "まず赤橙色の眼を見て、その後に滑らかな体表と黒褐色斑を確認してください。",

  references: [
    "BISMaL: Takifugu chrysops アカメフグ",
    "FishBase: Takifugu chrysops",
    "厚生労働省：自然毒のリスクプロファイル アカメフグ",
    "藤田・篠原 1986：アカメフグの卵発生と仔稚魚"
  ]
},

{
  id: "sp0263",
  areaIds: ["labo6"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マハタ",
  scientificName: "Hyporthodus septemfasciatus",
  englishName: "Sevenband grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "Hyporthodus属"],
  category: "魚類",
  image: "images/sp0263.jpg",

  trivia: [
    {
      title: "現在はEpinephelus属ではない",
      text: "古い資料では Epinephelus septemfasciatus とされますが、現在は Hyporthodus septemfasciatus が受理名です。"
    },
    {
      title: "最大1.5m級になる",
      text: "最大全長155cm、体重63kgの記録がある大型のハタです。"
    }
  ],

  bodyLength: "最大で全長約155cm、体重63kgの記録があります。",

  distribution: "日本、朝鮮半島、中国周辺など北西太平洋に分布します。",

  habitat: "沿岸の浅い岩礁域を中心に、水深5〜30mほどで記録されています。",

  diet: "魚類や甲殻類などを捕食します。",

  features: "淡い褐色の体に7〜8本の太い暗色帯があり、尾柄にも暗色帯があります。",

  behavior: "岩礁や沿岸域の海底近くで、魚や甲殻類を捕食します。",

  reproduction: "雌性先熟型の性転換を行う魚として、養殖や繁殖研究の対象になっています。",

  identification: "7〜8本の暗色帯、尾柄の帯、大型でがっしりした体が特徴です。",

  nameOrigin: "「マハタ」の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "高級食用魚として扱われ、日本では養殖も行われています。",

  observationPoint: "クエと見比べ、体側に規則的に並ぶ7〜8本の暗色帯を確認してください。",

  references: [
    "FishBase: Hyporthodus septemfasciatus",
    "WoRMS: Hyporthodus septemfasciatus",
    "環境省 MiFish資料：マハタ",
    "NCBI Taxonomy: Hyporthodus septemfasciatus"
  ]
},

{
  id: "sp0264",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マツカサウオ",
  scientificName: "Monocentris japonica",
  englishName: "Japanese pineconefish",
  classification: ["脊索動物門", "条鰭綱", "Trachichthyiformes", "マツカサウオ科", "マツカサウオ属"],
  category: "魚類",
  image: "images/sp0264.jpg",

  trivia: [
    {
      title: "自分ではなく細菌の力で光る",
      text: "下あご付近の発光器に共生する発光細菌が光を作ります。"
    },
    {
      title: "松ぼっくりのような天然のよろい",
      text: "黄色い体を大きく硬い鱗が覆い、黒い縁取りによって松かさのように見えます。"
    }
  ],

  bodyLength: "最大で全長約17cmで、一般には10〜15cmほどです。",

  distribution: "紅海・東アフリカから日本、台湾、中国、オーストラリア、ニューカレドニアなどに広く分布します。",

  habitat: "岩礁の洞窟や岩陰など暗い場所を好み、成魚は主に水深20〜200mで見られます。",

  diet: "小型甲殻類などの小動物を捕食します。",

  features: "黄色い体を黒く縁取られた硬い大型鱗が覆い、背側には太い棘、下あご付近には発光器があります。",

  behavior: "昼は岩穴や洞窟などに集まり、暗くなると活動性が高まります。",

  reproduction: "詳しい産卵期や産卵行動については、今回確認した資料では十分に分かっていません。",

  identification: "黄色い体、黒く縁取られた硬い鱗、背側の太い棘が特徴です。",

  nameOrigin: "硬い鱗が重なった姿が松ぼっくりに似ることから「マツカサウオ」と呼ばれます。",

  humanRelation: "独特の姿と発光能力から水族館で人気があり、発光細菌との共生研究でも重要です。",

  observationPoint: "硬い鱗を見た後、暗い環境では下あご付近の発光器にも注目してください。",

  references: [
    "BISMaL: Monocentris japonica マツカサウオ",
    "FishBase: Monocentris japonica",
    "Ruby & Nealson 1976. Symbiotic association of Photobacterium fischeri with Monocentris japonica",
    "沖縄美ら海水族館：マツカサウオの発光"
  ]
},

{
  id: "sp0265",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サクラダイ",
  scientificName: "Sacura margaritacea",
  englishName: "Cherry anthias",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハナダイ科", "サクラダイ属"],
  category: "魚類",
  image: "images/sp0265.jpg",

  trivia: [
    {
      title: "メスからオスへ性転換する",
      text: "最初はメスとして成熟し、一部の大型個体がオスへ性転換します。"
    },
    {
      title: "オスは複数のメスと繁殖グループを作る",
      text: "繁殖期には1匹のオスと複数のメスでグループを作り、水中へ泳ぎ上がって産卵します。"
    }
  ],

  bodyLength: "全長ではオス約20cm、メス約17cmほどになります。",

  distribution: "日本、朝鮮半島、台湾など西太平洋に分布し、日本では相模湾以南を中心に見られます。",

  habitat: "水深15〜110mほどの沿岸岩礁域に群れで生息します。",

  diet: "動物プランクトンや小型甲殻類などを捕食します。",

  features: "メスは赤色から橙赤色、オスでは赤い体に白色斑が目立ちます。",

  behavior: "岩礁から少し離れた中層で群れを作り、流れてくるプランクトンを捕食します。",

  reproduction: "雌性先熟型で、国内資料では8〜11月ごろに繁殖します。",

  identification: "オスとメスで色が大きく異なり、成熟オスでは白い斑紋が目立ちます。",

  nameOrigin: "成熟オスの白い斑点を桜の花びらに見立てたことが名前に関係するとされています。",

  humanRelation: "主要な食用魚ではありませんが、鮮やかな体色から水族館やダイビングで人気があります。",

  observationPoint: "赤橙色のメスと、白い斑点が目立つオスの体色を比べてください。",

  references: [
    "WoRMS: Sacura margaritacea",
    "FishBase: Sacura margaritacea",
    "Honda釣り倶楽部：サクラダイ"
  ]
},

{
  id: "sp0266",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ナガハナダイ",
  scientificName: "Pseudanthias elongatus",
  englishName: "Elongate anthias",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハナダイ科", "ナガハナダイ属"],
  category: "魚類",
  image: "images/sp0266.jpg",

  trivia: [
    {
      title: "オスとメスで見た目がかなり違う",
      text: "オスは赤や紫の複雑な色彩、メスは赤橙色を基調とした比較的単純な模様です。"
    },
    {
      title: "深めの岩礁で見られるハナダイ",
      text: "相模湾などでは水深30〜40mを超える場所でよく観察されます。"
    }
  ],

  bodyLength: "オスは体長約14cm、メスは約10cmほどになります。",

  distribution: "相模湾、伊豆諸島、南日本太平洋岸、山口県日本海岸、朝鮮半島南部などに分布します。",

  habitat: "水深16〜65mほどの岩礁域に生息し、特に30m以深で群れを作ることがあります。",

  diet: "動物プランクトンや小型甲殻類などを捕食します。",

  features: "オスは体前半が赤橙色、後半が紫赤色で、メスはより小型で体側鱗の暗色部が目立ちます。",

  behavior: "岩礁上の中層へ泳ぎ出し、流れてくる小動物を捕食します。",

  reproduction: "性転換様式や地域ごとの産卵期については、今回確認した資料では十分に分かっていません。",

  identification: "オスでは前後で体色が変わり、メスでは背びれ第3棘が伸びることなどが特徴です。",

  nameOrigin: "ハナダイ類の中で比較的細長い体形を持つことが名前に関係します。",

  humanRelation: "観賞魚として扱われ、伊豆などでは深場のダイビング被写体として人気があります。",

  observationPoint: "オスとメスの体色を比べ、特にオスの赤・紫・白の色彩に注目してください。",

  references: [
    "BISMaL: Pseudanthias elongatus",
    "国立科学博物館・東京大学魚類資料：Pseudanthias elongatus",
    "新潟市水族館：ナガハナダイ"
  ]
},

{
  id: "sp0267",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キンチャクダイ",
  scientificName: "Chaetodontoplus septentrionalis",
  englishName: "Bluelined angelfish",
  classification: ["脊索動物門", "条鰭綱", "ニザダイ目", "キンチャクダイ科", "キンチャクダイ属"],
  category: "魚類",
  image: "images/sp0267.jpg",

  trivia: [
    {
      title: "幼魚と成魚では別の魚のよう",
      text: "幼魚は黒色に黄色い模様ですが、成魚は黄褐色の体に鮮やかな青色の横線が入ります。"
    },
    {
      title: "メスからオスへ性転換する",
      text: "メスからオスへ性転換し、複数のメスと大型のオスで繁殖グループを作ります。"
    }
  ],

  bodyLength: "最大で全長約22〜25cm。",

  distribution: "南日本、朝鮮半島南部、台湾、中国沿岸など西太平洋北西部を中心に分布します。",

  habitat: "水深5〜30mほどの沿岸岩礁に生息し、幼魚は岩の割れ目や転石周辺をよく利用します。",

  diet: "カイメン類やホヤ類などの付着生物を中心に食べます。",

  features: "成魚では黄褐色の体に複数の鮮やかな青色縦線があり、鰓蓋には強い棘があります。",

  behavior: "岩礁を泳ぎながら付着生物をついばみ、幼魚は成魚より隠れ場所をよく利用します。",

  reproduction: "雌性先熟型で大型個体がオスになり、本州南岸では春から夏が繁殖期とされます。",

  identification: "成魚では青い横方向の線、幼魚では黒い体と黄色い模様が特徴です。",

  nameOrigin: "横から見た体形が巾着を思わせることが名前に関係するとされています。",

  humanRelation: "海水観賞魚として知られ、水族館でも日本沿岸のキンチャクダイ類として展示されます。",

  observationPoint: "青い線だけでなく、鰓蓋後方にあるキンチャクダイ科特有の棘も探してください。",

  references: [
    "WoRMS: Chaetodontoplus septentrionalis",
    "FishBase: Chaetodontoplus septentrionalis",
    "Honda釣り倶楽部：キンチャクダイ"
  ]
},

{
  id: "sp0268",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オキトラギス",
  scientificName: "Parapercis multifasciata",
  englishName: "Gold-birdled sandsmelt",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "トラギス科", "トラギス属"],
  category: "魚類",
  image: "images/sp0268.jpg",

  trivia: [
    {
      title: "体側には約8本の帯",
      text: "体側には約8本の横帯があり、上半分は褐色、下半分は黄色味を帯びます。"
    },
    {
      title: "名前の通り沖合の深場に暮らす",
      text: "水深100m前後の砂泥底などでよく見られる、深場に暮らすトラギスです。"
    }
  ],

  bodyLength: "最大で全長約17cm。",

  distribution: "新潟県・茨城県付近から九州南岸、東シナ海大陸棚周辺などに分布します。",

  habitat: "水深100m前後を中心とした大陸棚の砂泥底に生息します。",

  diet: "エビ・カニ類などの甲殻類やゴカイ類を捕食します。",

  features: "細長い体に複数の横帯があり、唇は赤く、尾びれ基部上側には暗色斑があります。",

  behavior: "砂泥底の海底近くを移動しながら、小型動物を探して捕食します。",

  reproduction: "国内資料では春に産卵し、仔稚魚は中層から採集されることがあります。",

  identification: "約8本の体側帯、赤い唇、尾びれ基部上側の暗色斑が特徴です。",

  nameOrigin: "浅場のトラギスより沖合の深場で見られることから「沖のトラギス」という意味で名付けられました。",

  humanRelation: "アマダイ釣りなどで混獲されることがあり、小型ですが白身で食用になります。",

  observationPoint: "体側の帯を数え、赤い唇にも注目してください。",

  references: [
    "BISMaL: Parapercis multifasciata オキトラギス",
    "Honda釣り倶楽部：オキトラギス"
  ]
},

{
  id: "sp0269",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "フトヤギ",
  scientificName: "Euplexaura crassa",
  englishName: "Gorgonian octocoral",
  classification: ["刺胞動物門", "花虫綱", "八放サンゴ亜綱", "Malacalcyonacea", "Euplexauridae", "フトヤギ属"],
  category: "刺胞動物",
  image: "images/sp0269.jpg",

  trivia: [
    {
      title: "2022年以降に分類体系が大きく変わった",
      text: "八放サンゴ類の分類が再編され、現在BISMaLでは Malacalcyonacea・Euplexauridae に分類されています。"
    },
    {
      title: "1匹ではなく多数の個虫からできている",
      text: "枝状の群体は多数の小さなポリプからなり、それぞれ8本の羽状触手を持ちます。"
    }
  ],

  bodyLength: "生育環境によって異なりますが、群体は数十cm規模に成長します。",

  distribution: "日本沿岸の温帯域に分布し、相模湾などから記録されています。",

  habitat: "岩礁に固着し、海水の流れがある場所で枝状の群体を広げます。",

  diet: "ポリプの触手で動物プランクトンや有機物粒子などを捕らえます。",

  features: "太く枝分かれした群体を作り、中心の軸を多数のポリプを含む組織が覆います。",

  behavior: "岩に固着し、流れに応じてポリプを開いて餌を捕らえます。",

  reproduction: "八放サンゴ類では有性生殖と無性的増殖が知られますが、本種固有の繁殖時期は十分に分かっていません。",

  identification: "太い枝状の群体が特徴ですが、正確な種同定には骨片などの観察が必要です。",

  nameOrigin: "ほかのヤギ類より枝が太く見えることが「フトヤギ」という名前に表れています。",

  humanRelation: "相模湾など日本沿岸の八放サンゴ相を研究するうえで重要な種です。",

  observationPoint: "枝の表面を見て、多数並ぶ小さなポリプを探してください。",

  references: [
    "BISMaL: Euplexaura crassa フトヤギ",
    "Imahara, Iwase & Namikawa 2014. The Octocorals of Sagami Bay",
    "McFadden et al. 2022. Revisionary systematics of Octocorallia"
  ]
},

{
  id: "sp0270",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカヤギ",
  scientificName: "Menella rigida",
  englishName: "Red gorgonian",
  classification: ["刺胞動物門", "花虫綱", "八放サンゴ亜綱", "Malacalcyonacea", "Paramuriceidae（フタヤギ科）", "アカヤギ属"],
  category: "刺胞動物",
  image: "images/sp0270.jpg",

  trivia: [
    {
      title: "古い学名はEchinogorgia rigida",
      text: "古い資料では Echinogorgia rigida とされますが、現在WoRMSでは Menella rigida が受理名です。"
    },
    {
      title: "八景島の個体資料でもMenella rigida",
      text: "八景島シーパラダイスの個体も Menella rigida として記録されています。"
    }
  ],

  bodyLength: "群体は高さ30〜50cmほどまで成長することがあります。",

  distribution: "相模湾以南の日本沿岸からオーストラリア周辺まで知られています。",

  habitat: "浅い海の岩礁に付着して生活します。",

  diet: "ポリプで小型プランクトンや有機物粒子を捕らえます。",

  features: "鮮やかな赤色の扇状群体を作り、枝は黒褐色で弾力のある軸に支えられます。",

  behavior: "岩へ固着し、流れがあると多数のポリプを広げて餌を捕らえます。",

  reproduction: "本種固有の繁殖時期や幼生生態については、十分な情報がありません。",

  identification: "鮮やかな赤色の扇状群体が特徴ですが、厳密な同定には骨片などの観察が必要です。",

  nameOrigin: "群体全体が鮮やかな赤色になることから「アカヤギ」と呼ばれます。",

  humanRelation: "観賞的に美しく、日本沿岸のヤギ類の分類研究でも扱われます。",

  observationPoint: "扇状の群体を見た後、枝の表面に並ぶ小さなポリプを探してください。",

  references: [
    "WoRMS: Menella rigida",
    "水産無脊椎動物研究所：アカヤギ Menella rigida（八景島シーパラダイス）",
    "環境省：Menella rigida",
    "旧名 Echinogorgia rigida"
  ]
},

{
  id: "sp0271",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "イボヤギ",
  scientificName: "Tubastraea coccinea",
  englishName: "Orange cup coral",
  classification: ["刺胞動物門", "花虫綱", "六放サンゴ亜綱", "イシサンゴ目", "キサンゴ科", "イボヤギ属"],
  category: "刺胞動物",
  image: "images/sp0271.jpg",

  trivia: [
    {
      title: "光が少ない場所でも暮らせる",
      text: "褐虫藻の光合成へ強く依存しないため、岩陰や洞窟など暗い場所にも生息できます。"
    },
    {
      title: "世界各地で外来種にもなっている",
      text: "人為的に運ばれた地域では急速に増え、ブラジルなどで侵入サンゴとして研究されています。"
    }
  ],

  bodyLength: "群体の大きさは一定ではなく、個々の莢は直径約6〜10mmです。",

  distribution: "日本では相模湾以南に見られ、インド・太平洋に広く分布し、大西洋などにも人為的に定着しています。",

  habitat: "岩礁壁や洞窟、人工構造物などに付着し、日本では水深0〜10mほどでも見られます。",

  diet: "ポリプの触手で動物プランクトンや有機物を捕食します。",

  features: "橙色の共肉から黄〜橙色のポリプが突出し、小さなカップが集まったように見えます。",

  behavior: "触手を広げて餌を捕らえ、明暗や餌の有無によってポリプを開閉します。",

  reproduction: "有性生殖と無性的増殖の両方を行い、幼生によって広く分散します。",

  identification: "橙色の群体と黄色系の触手が特徴ですが、厳密な同定には骨格形態も確認します。",

  nameOrigin: "小さなサンゴ個体がこぶのように突き出す姿が名前に関係します。",

  humanRelation: "日本では自然分布しますが、海外の一部地域では侵略的外来種として駆除・研究されています。",

  observationPoint: "ポリプが閉じている時と、触手を広げた時の違いを比べてください。",

  references: [
    "BISMaL: Tubastraea coccinea",
    "新潟市水族館：イボヤギ",
    "WoRMS: Tubastraea coccinea",
    "Life-history traits of Tubastraea coccinea 2020"
  ]
},

{
  id: "sp0272",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オウムガイ",
  scientificName: "Nautilus pompilius",
  englishName: "Chambered nautilus",
  classification: ["軟体動物門", "頭足綱", "オウムガイ目", "オウムガイ科", "オウムガイ属"],
  category: "頭足類",
  image: "images/sp0272.jpg",

  trivia: [
    {
      title: "殻の中はたくさんの部屋に分かれている",
      text: "成長すると新しい部屋を作り、古い部屋のガスや液体を使って浮力を調節します。"
    },
    {
      title: "タコやイカとは違い吸盤がない",
      text: "60〜90本ほどの細い触手を持ちますが吸盤はなく、粘着性のある触手で餌や岩につかまります。"
    }
  ],

  bodyLength: "成熟個体の殻径は約13〜23cm。",

  distribution: "インド洋から西太平洋の熱帯域に分布します。",

  habitat: "サンゴ礁の外側斜面など、水深100〜600mほどを中心に生活します。",

  diet: "甲殻類などの小動物や動物の死骸を利用する肉食・腐肉食性です。",

  features: "白色と赤褐色の縞がある螺旋状の外殻を持ち、内部は多数の部屋に分かれています。",

  behavior: "漏斗から水を噴き出して泳ぎ、触手で岩などにつかまり、昼夜で深さを変えることもあります。",

  reproduction: "雌雄は別で大きな卵を産み、発生に長い時間がかかるため増殖速度は遅い種類です。",

  identification: "発達した螺旋状の外殻と、多数の細い触手が特徴です。",

  nameOrigin: "殻の模様や形が鳥のオウムのくちばしを思わせることが名前の由来とされています。",

  humanRelation: "殻が装飾品として取引され、オウムガイ科はCITES附属書IIに掲載されています。",

  observationPoint: "LABO7では標本展示です。螺旋状の殻や赤褐色の縞、内部が見える場合は多数の部屋に注目してください。",

  references: [
    "鳥羽水族館：オウムガイ Nautilus pompilius",
    "NOAA Fisheries: Chambered Nautilus",
    "SeaLifeBase: Nautilus pompilius"
  ]
},

{
  id: "sp0273",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "カイロウドウケツ",
  scientificName: "Euplectella aspergillum",
  englishName: "Venus' flower basket",
  classification: ["海綿動物門", "六放海綿綱", "リサキナ目", "カイロウドウケツ科", "カイロウドウケツ属"],
  category: "海綿動物",
  image: "images/sp0273.jpg",

  trivia: [
    {
      title: "ガラスと同じ成分で骨格を作る",
      text: "二酸化ケイ素からなる細いガラス質の骨針が、軽くて丈夫な格子構造を作ります。"
    },
    {
      title: "名前は『夫婦で同じ穴に暮らす』話から",
      text: "内部で雌雄のドウケツエビ類が暮らす姿を夫婦になぞらえ、「偕老同穴」と名付けられました。"
    }
  ],

  bodyLength: "個体差がありますが、筒状・かご状の骨格は数十cm規模になります。",

  distribution: "日本では相模湾以南の深海などから知られ、西太平洋の深海域にも分布します。",

  habitat: "深海の海底に固着して生活します。",

  diet: "体内へ海水を通し、微細な有機物や微生物などを濾し取ります。",

  features: "白色半透明のガラス質骨針が精密な格子を作り、美しい筒状の骨格になります。",

  behavior: "海底に固定され、体内へ海水を取り込んで濾過摂食します。",

  reproduction: "六放海綿類は有性生殖を行いますが、本種固有の繁殖周期は十分に分かっていません。",

  identification: "白いガラス繊維を編んだような籠状骨格が特徴です。",

  nameOrigin: "内部で雌雄のドウケツエビ類が暮らす姿を、夫婦が共に老いる意味の「偕老同穴」に重ねた名前です。",

  humanRelation: "美しい標本として知られ、軽く丈夫な格子構造は材料科学や生体模倣研究でも注目されています。",

  observationPoint: "LABO7では標本展示です。籠状の全体形と、ガラス質骨格が交差する構造を見てください。",

  references: [
    "東京大学総合研究博物館：Euplectella aspergillum カイロウドウケツ",
    "鳥羽水族館：カイロウドウケツ",
    "Nature 2021: Euplectella aspergillum skeletal structure"
  ]
},

{
  id: "sp0274",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ダイナンウミヘビ",
  scientificName: "Ophisurus macrorhynchos",
  englishName: "Long-snouted snake eel",
  classification: ["脊索動物門", "条鰭綱", "ウナギ目", "ウミヘビ科", "ダイナンウミヘビ属"],
  category: "魚類",
  image: "images/sp0274.jpg",

  trivia: [
    {
      title: "名前にウミヘビとあるが魚",
      text: "爬虫類ではなくウナギ目の魚で、鰓で呼吸します。"
    },
    {
      title: "2mを超える記録がある",
      text: "最大で全長207cmの記録がある、非常に細長い魚です。"
    }
  ],

  bodyLength: "最大で全長約207cmで、一般的には60cm前後の個体も多く見られます。",

  distribution: "日本を含むインド・西太平洋を中心に分布します。",

  habitat: "砂泥底や岩礁周辺など海底付近に生息し、日本近海では水深100mを超える記録もあります。",

  diet: "魚類や甲殻類などを捕食します。",

  features: "非常に細長いウナギ型の体と、前方へ長く伸びた吻が特徴です。",

  behavior: "海底付近で長い体をくねらせて泳ぎ、底生生活に適応しています。",

  reproduction: "透明で葉状のレプトケファルス幼生期を経ますが、詳しい産卵場所は分かっていません。",

  identification: "鰓孔を持つ魚で、非常に長い吻と細長い体が特徴です。",

  nameOrigin: "蛇のように長い体を持つ海産魚であることから「ウミヘビ」と呼ばれます。",

  humanRelation: "地域によって漁獲されますが、一般的な主要食用魚ではありません。",

  observationPoint: "顔を横から見て、前方へ長く伸びた吻に注目してください。",

  references: [
    "BISMaL: Ophisurus macrorhynchos",
    "FishBase: Ophisurus macrorhynchos"
  ]
},

{
  id: "sp0275",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "チカメキントキ",
  scientificName: "Cookeolus japonicus",
  englishName: "Longfin bigeye",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キントキダイ科", "チカメキントキ属"],
  category: "魚類",
  image: "images/sp0275.jpg",

  trivia: [
    {
      title: "名前通り目が非常に大きい",
      text: "暗い環境でも光を集めやすい、非常に大きな眼を持っています。"
    },
    {
      title: "若い個体と成魚で暮らす深さが違う",
      text: "若魚は比較的浅い場所にも現れますが、成魚は水深数百mの深場も利用します。"
    }
  ],

  bodyLength: "最大で全長約60cm。",

  distribution: "日本を含む世界の温帯から熱帯海域に広く分布します。",

  habitat: "岩礁性の海底付近に生息し、成魚は水深300m付近でも見られ、若魚はより浅場に現れます。",

  diet: "エビ・カニ類、イカ・タコ類、小魚などを捕食します。",

  features: "鮮やかな赤い体と大きな眼、非常に大きな腹びれを持ち、体は強く左右に平たい形です。",

  behavior: "暗い時間帯に活動性が高まり、海底近くで小動物を捕食します。",

  reproduction: "詳しい産卵時期については、今回確認した資料では十分に分かっていません。",

  identification: "赤い体、大きな眼、非常に大きな腹びれが特徴です。",

  nameOrigin: "非常に大きく目立つ眼を持つことに関係した和名とされています。",

  humanRelation: "食用や釣魚として利用され、深場の魚を紹介する水族館展示にも向いています。",

  observationPoint: "眼の大きさを頭全体と比べ、深場への適応を観察してください。",

  references: [
    "BISMaL: Cookeolus japonicus チカメキントキ",
    "小学館図鑑NEO：チカメキントキ"
  ]
},

{
  id: "sp0276",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカイサキ",
  scientificName: "Caprodon schlegelii",
  englishName: "Sunrise perch",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハナダイ科", "アカイサキ属"],
  category: "魚類",
  image: "images/sp0276.jpg",

  trivia: [
    {
      title: "成長するとメスからオスへ変わる",
      text: "小型個体は主にメスとして成熟し、成長した一部がオスへ性転換します。"
    },
    {
      title: "性別で体色が大きく違う",
      text: "メスは赤色が強く、オスは黄色味が増して黄色い虫食い状模様が現れます。"
    }
  ],

  bodyLength: "国内資料ではオスは全長約45cm、メスは約30cmまでになります。",

  distribution: "日本、朝鮮半島、台湾のほか、オーストラリアやニューカレドニア周辺にも分布します。",

  habitat: "水深40〜300mほどの岩礁や大陸棚縁辺部に生息します。",

  diet: "小型甲殻類などの動物性の餌を捕食します。",

  features: "メスは赤色で背側に暗色斑があり、オスは黄色味が強く背びれ基部に黒色斑があります。",

  behavior: "潮通しのよい外洋性岩礁で小規模な群れを作ります。",

  reproduction: "30cm前後までメスとして成長し、一部がオスへ性転換します。",

  identification: "赤いメスと黄色味の強い大型オスで、体色が大きく異なります。",

  nameOrigin: "赤い体を持ち、イサキに似た姿であることが名前に表れています。",

  humanRelation: "釣りで漁獲され食用になり、ハナダイ類としては大型になる種類です。",

  observationPoint: "複数個体がいれば、メスと大型オスの体色の違いを比べてください。",

  references: [
    "WoRMS: Caprodon schlegelii",
    "FishBase: Caprodon schlegelii",
    "Honda釣り倶楽部：アカイサキ",
    "Eschmeyer's Catalog of Fishes 2026"
  ]
},

{
  id: "sp0277",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キツネダイ",
  scientificName: "Bodianus oxycephalus",
  englishName: "Banded pigfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "タキベラ属"],
  category: "魚類",
  image: "images/sp0277.jpg",

  trivia: [
    {
      title: "種小名も『尖った頭』という意味",
      text: "種小名 oxycephalus は「尖った頭」を意味し、特徴的な頭部を表しています。"
    },
    {
      title: "繁殖時はペアになる",
      text: "卵生で、繁殖時には雌雄が明瞭なペアを作ります。"
    }
  ],

  bodyLength: "最大で標準体長約29cmで、全長40cm近くになる個体も知られています。",

  distribution: "相模湾付近から南日本、朝鮮半島、台湾北東部周辺までの北西太平洋に分布します。",

  habitat: "沿岸からやや深い岩礁域に生息します。",

  diet: "甲殻類や貝類などの底生無脊椎動物を捕食します。",

  features: "前方へ尖った頭部と厚い唇を持ち、体色や模様は成長によって変化します。",

  behavior: "岩礁周辺を泳ぎ回りながら小動物を探して捕食します。",

  reproduction: "卵生で、繁殖時には雌雄がペアを形成します。",

  identification: "細長く尖った頭部が大きな特徴で、体色だけでなく吻の形も確認します。",

  nameOrigin: "尖った顔つきをキツネの顔に見立てたことが名前の由来です。",

  humanRelation: "漁獲され食用になるほか、ダイビングでも観察されます。",

  observationPoint: "横から顔を見て、キツネのように前へ尖った吻に注目してください。",

  references: [
    "BISMaL: Bodianus oxycephalus キツネダイ",
    "FishBase: Bodianus oxycephalus"
  ]
},

{
  id: "sp0278",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカアマダイ",
  scientificName: "Branchiostegus japonicus",
  englishName: "Horsehead tilefish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キツネアマダイ科", "アマダイ属"],
  category: "魚類",
  image: "images/sp0278.jpg",

  trivia: [
    {
      title: "自分で巣穴を作って暮らす",
      text: "砂泥底に巣穴を掘って暮らし、危険を感じると素早く逃げ込みます。"
    },
    {
      title: "鱗まで料理になる高級魚",
      text: "鱗を立たせて焼く・揚げる「松笠焼き」「松笠揚げ」などでも知られます。"
    }
  ],

  bodyLength: "最大で全長約46cmで、一般には35cm前後です。",

  distribution: "本州中部以南から東シナ海、南シナ海周辺まで分布します。",

  habitat: "水深30〜200mほどの砂泥底に生息します。",

  diet: "甲殻類やゴカイ類など海底の小型動物を捕食します。",

  features: "桃色から赤色の細長い体と傾斜した頭部を持ち、眼の後方は白く、体側中央には黄色い模様があります。",

  behavior: "自ら掘った巣穴の周辺で活動し、危険を感じると穴へ逃げ込みます。",

  reproduction: "卵生ですが、繁殖生態には地域差があるため特定の産卵月は一律に扱いません。",

  identification: "赤桃色の体、眼後方の白色部、体側の黄色い模様が特徴です。",

  nameOrigin: "赤い体を持つアマダイ類であることから「アカアマダイ」と呼ばれます。",

  humanRelation: "高級食用魚で、京都では「ぐじ」と呼ばれ、ブランド魚として扱われる例もあります。",

  observationPoint: "海底との関係を見て、巣穴の周辺で行動していないか観察してください。",

  references: [
    "BISMaL: Branchiostegus japonicus アカアマダイ",
    "FishBase: Branchiostegus japonicus",
    "黒潮生物研究所：アカアマダイ"
  ]
},

{
  id: "sp0279",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アラ",
  scientificName: "Niphon spinosus",
  englishName: "Saw-edged perch",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "アラ属"],
  category: "魚類",
  image: "images/sp0279.jpg",

  trivia: [
    {
      title: "九州で『アラ』と呼ぶクエとは別の魚",
      text: "九州で地方名「アラ」と呼ばれるクエとは別種で、標準和名アラは Niphon spinosus です。"
    },
    {
      title: "成長すると深い海へ移る",
      text: "若魚は比較的浅場にも現れますが、成長すると水深100〜300m前後の深場へ移動します。"
    }
  ],

  bodyLength: "最大では全長1mを超える大型魚です。",

  distribution: "北海道太平洋岸、本州、四国、九州、東シナ海、中国・朝鮮半島・台湾周辺などに分布します。",

  habitat: "水深70〜360mほどの岩礁や貝殻混じりの砂底などに生息します。",

  diet: "魚類やイカ類などを捕食します。",

  features: "スズキに似た細長い体を持ち、頭部や鰓蓋周辺には強い棘があり、若魚には白い縦線があります。",

  behavior: "海底から少し上を泳いで魚やイカを捕食し、成長するとより深い場所を利用します。",

  reproduction: "国内資料では夏から秋に産卵し、この時期にはやや浅い場所へ集まる傾向があります。",

  identification: "クエとは異なる細長い体と、鰓蓋周辺の強い棘が特徴です。",

  nameOrigin: "標準和名「アラ」の詳しい語源については、今回確認した資料では分かっていません。",

  humanRelation: "非常に美味な高級魚として知られ、大型個体は希少で、鍋物や刺身などに利用されます。",

  observationPoint: "クエとの違いを意識し、細長い体と頭部の棘を見てください。",

  references: [
    "BISMaL: Niphon spinosus アラ",
    "Honda釣り倶楽部：アラ",
    "DAIWA釣魚図鑑：アラ"
  ]
},

{
  id: "sp0280",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ガンゾウビラメ",
  scientificName: "Pseudorhombus cinnamoneus",
  englishName: "Cinnamon flounder",
  classification: ["脊索動物門", "条鰭綱", "カレイ目", "ヒラメ科", "ガンゾウビラメ属"],
  category: "魚類",
  image: "images/sp0280.jpg",

  trivia: [
    {
      title: "ヒラメと同じく目は左側",
      text: "成長すると両眼が体の左側へ移動し、海底へ横倒しになった姿で暮らします。"
    },
    {
      title: "春に産卵する",
      text: "国内資料では春が主な産卵期とされています。"
    }
  ],

  bodyLength: "最大で全長約50cm。",

  distribution: "本州中部以南から黄海、東シナ海、南シナ海周辺まで分布します。",

  habitat: "主に水深30m以浅の砂泥底に生息します。",

  diet: "甲殻類、ゴカイ類、小魚などを捕食します。",

  features: "有眼側は緑褐色から茶褐色で丸い斑紋があり、大きな口を持つヒラメ型の魚です。",

  behavior: "海底へ体を密着させ、ときには砂へ一部を埋めて獲物を待ち伏せします。",

  reproduction: "卵生で、国内では春が主な産卵期とされています。",

  identification: "有眼側の眼状斑や体形が重要で、近縁種とは斑紋の位置や形を比べます。",

  nameOrigin: "詳しい命名由来には諸説があるため、この図鑑では断定しません。",

  humanRelation: "漁獲され、刺身や塩焼きなどで食べられる白身魚です。",

  observationPoint: "海底と体の境界を探し、底質へ溶け込む姿に注目してください。",

  references: [
    "Honda釣り倶楽部：ガンゾウビラメ",
    "日本大百科全書：Pseudorhombus cinnamoneus"
  ]
},

{
  id: "sp0281",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ツマリカスベ",
  scientificName: "Okamejei schmidti",
  englishName: "Browneye skate",
  classification: ["脊索動物門", "軟骨魚綱", "ガンギエイ目", "ガンギエイ科", "コモンカスベ属"],
  category: "魚類",
  image: "images/sp0281.jpg",

  trivia: [
    {
      title: "卵は四隅に角があるケースに包まれる",
      text: "卵は硬い卵殻に包まれ、長さ約5.6〜6.0cm、幅約3cmです。"
    },
    {
      title: "日本周辺に分布する小型カスベ",
      text: "日本周辺に分布し、水深30〜60mほどの海底に生息します。"
    }
  ],

  bodyLength: "今回確認した資料では、信頼できる最大全長を確定できませんでした。",

  distribution: "日本周辺の北西太平洋に分布します。",

  habitat: "水深30〜60mほどの砂泥底などに生息します。",

  diet: "小型甲殻類などの底生動物を食べると考えられますが、詳しい食性資料は限られています。",

  features: "平たい円盤状の体を持ち、吻は比較的短く、尾は細長く伸びます。",

  behavior: "海底に体を密着させて暮らす底生性のエイです。",

  reproduction: "卵生で、硬い卵殻に包まれた卵を産み、胚は卵黄を栄養に成長します。",

  identification: "吻の形や体盤の比率、棘や斑紋などを組み合わせて識別します。",

  nameOrigin: "比較的短い吻が「詰まった」ように見えることが名前に関係すると考えられます。",

  humanRelation: "FishBaseのIUCN情報ではVulnerableとされ、保全上も注目されています。",

  observationPoint: "体盤の前端にある短い吻と、細長く伸びる尾に注目してください。",

  references: [
    "BISMaL: Okamejei schmidti",
    "北海道大学総合博物館：ツマリカスベ標本",
    "FishBase: Okamejei schmidti",
    "神奈川県立生命の星・地球博物館：相模湾産魚類目録"
  ]
},

{
  id: "sp0282",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "エビスダイ",
  scientificName: "Ostichthys japonicus",
  englishName: "Japanese soldierfish",
  classification: ["脊索動物門", "条鰭綱", "イットウダイ目", "イットウダイ科", "エビスダイ属"],
  category: "魚類",
  image: "images/sp0282.jpg",

  trivia: [
    {
      title: "非常に硬く大きな鱗を持つ",
      text: "鮮やかな赤い体を、大きく硬い鱗が覆っています。"
    },
    {
      title: "2018年に近縁種が整理された",
      text: "2018年に近縁種との違いが詳しく整理されました。"
    }
  ],

  bodyLength: "最大で全長約45cmで、一般には35cmほどまでです。",

  distribution: "南日本を含むインド・太平洋に分布します。",

  habitat: "水深20〜270mほどの岩礁やその周辺に生息します。",

  diet: "小魚や甲殻類などを捕食すると考えられています。",

  features: "鮮やかな赤い体と大きく硬い鱗を持ち、胸びれ基部上部には暗赤色斑があります。",

  behavior: "岩礁の海底近くなど、比較的暗い深場で暮らします。",

  reproduction: "本種固有の繁殖期や産卵行動については、十分な情報がありません。",

  identification: "大きく硬い鱗、赤い体、胸びれ基部上方の暗赤色斑が特徴です。",

  nameOrigin: "鮮やかな赤色や姿を七福神の恵比寿に重ねたとされますが、資料によって説明が異なります。",

  humanRelation: "食用になりますが、深場に暮らすため一般市場ではあまり見かけません。",

  observationPoint: "体表を見て、普通の魚より大きく硬そうな鱗に注目してください。",

  references: [
    "BISMaL: Ostichthys japonicus エビスダイ",
    "WoRMS: Ostichthys japonicus",
    "FishBase: Ostichthys japonicus",
    "Matsunuma, Fukui & Motomura 2018. Review of the Ostichthys japonicus complex"
  ]
},

{
  id: "sp0283",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クルマダイ",
  scientificName: "Pristigenys niphonia",
  englishName: "Japanese bigeye",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キントキダイ科", "クルマダイ属"],
  category: "魚類",
  image: "images/sp0283.jpg",

  trivia: [
    {
      title: "丸い体が車輪のよう",
      text: "非常に体高が高く平たい体を持ち、丸い輪郭が車輪のように見えます。"
    },
    {
      title: "幼魚の方が縞模様が目立つ",
      text: "幼魚では約5本の淡い横帯が目立ちますが、成長すると薄くなります。"
    }
  ],

  bodyLength: "最大標準体長約27.4cmで、全長では30cm前後になります。",

  distribution: "日本から東南アジア、オーストラリアなどに分布します。",

  habitat: "水深1〜250mで記録され、成魚は80〜100m以深、幼魚は5〜30mほどの浅場にも現れます。",

  diet: "小型魚や甲殻類などを捕食します。",

  features: "非常に体高が高く大きな眼を持ち、幼魚では淡い横帯が目立ちます。",

  behavior: "岩礁周辺の暗い場所を利用し、大きな眼で少ない光を捉えます。",

  reproduction: "卵生で、直径約0.75mmの球形の浮遊卵が記録されています。",

  identification: "車輪のような高い体高と、非常に大きな眼が特徴です。",

  nameOrigin: "丸く体高の高い輪郭を車輪に見立てたことから名付けられました。",

  humanRelation: "食用になるほか、深場のキントキダイ類として水族館でも展示されます。",

  observationPoint: "チカメキントキと見比べ、特に丸く体高の高い体形に注目してください。",

  references: [
    "BISMaL: Pristigenys niphonia クルマダイ",
    "FishBase: Pristigenys niphonia",
    "新潟市水族館：クルマダイ",
    "Iwatsuki et al. 2012. Redescription of Pristigenys niphonia"
  ]
},

{
  id: "sp0284",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒメ",
  scientificName: "Hime japonica",
  englishName: "Japanese thread-sail fish",
  classification: ["脊索動物門", "条鰭綱", "ヒメ目", "ヒメ科", "ヒメ属"],
  category: "魚類",
  image: "images/sp0284.jpg",

  trivia: [
    {
      title: "学名そのものが「Hime」",
      text: "属名 Hime は和名「ヒメ」に由来し、古い学名 Aulopus japonicus から変更されています。"
    },
    {
      title: "現在のヒメは北西太平洋の種",
      text: "分類の再検討により、現在は日本から台湾付近を中心とする北西太平洋の種として扱われます。"
    }
  ],

  bodyLength: "最大標準体長約22.3cmで、一般には15cm前後です。",

  distribution: "日本、朝鮮半島、東シナ海から台湾付近までに分布します。",

  habitat: "水深85〜510mほどの海底近くに生息します。",

  diet: "甲殻類や多毛類などの小型動物を捕食します。",

  features: "細長い体と比較的大きな頭を持ち、性別や成長によってひれの形や色が変わります。",

  behavior: "砂泥底など海底近くで小型動物を探して捕食します。",

  reproduction: "本種固有の産卵時期や繁殖行動については、十分な情報がありません。",

  identification: "体形だけでなく、ひれの形や体の比率、鰭条数などで識別します。",

  nameOrigin: "属名 Hime は和名「ヒメ」、種小名 japonica は日本に由来し、タイプ産地は横浜です。",

  humanRelation: "底びき網などで漁獲されることがありますが、主要な食用魚ではありません。",

  observationPoint: "細長い体だけでなく、発達した背びれの形にも注目してください。",

  references: [
    "Eschmeyer's Catalog of Fishes 2026: Hime japonica",
    "FishBase: Hime japonica",
    "NCBI Taxonomy: Hime japonica"
  ]
},

{
  id: "sp0285",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サガミモガニ",
  scientificName: "Tunepugettia sagamiensis",
  englishName: "Sagami spider crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "モガニ科", "Tunepugettia属"],
  category: "甲殻類",
  image: "images/sp0285.jpg",

  trivia: [
    {
      title: "昔の学名から属そのものが変わった",
      text: "2017年に本種のための Tunepugettia 属が新設され、現在の学名になりました。"
    },
    {
      title: "名前は相模湾に由来",
      text: "種小名 sagamiensis は相模湾に由来し、神奈川県と関係の深い名前です。"
    }
  ],

  bodyLength: "甲幅は数cmほどで、5cmを超える個体も知られています。",

  distribution: "日本では房総半島から土佐湾周辺まで知られています。",

  habitat: "比較的深い海底に生息し、底びき網などで採集されることがあります。",

  diet: "本種だけを対象とした詳しい食性資料が少なく、特定の餌は分かっていません。",

  features: "やや角張った甲に多数の隆起や突起があり、長い歩脚を持ちます。",

  behavior: "深場の海底で暮らしますが、詳しい行動は十分に分かっていません。",

  reproduction: "メスは腹部に卵を抱えますが、繁殖期や抱卵数は十分に分かっていません。",

  identification: "甲の輪郭や隆起、突起、脚の形などを詳しく確認して識別します。",

  nameOrigin: "相模湾にちなむ種小名 sagamiensis を持つことが和名に表れています。",

  humanRelation: "一般的な食用種ではなく、日本の深海性カニ類の分類研究で重要な種類です。",

  observationPoint: "甲の表面を見て、多数の凹凸や突起を探してください。",

  references: [
    "Ng, Komai & Sato 2017. Establishment of Tunepugettia for Pugettia sagamiensis",
    "WoRMS: Tunepugettia sagamiensis",
    "鳥羽水族館：サガミモガニ"
  ]
},

{
  id: "sp0286",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "セノテヅルモヅル",
  scientificName: "Astrocladus coniferus",
  englishName: "Basket star",
  classification: ["棘皮動物門", "クモヒトデ綱", "ツルクモヒトデ目", "テヅルモヅル科", "Astrocladus属"],
  category: "棘皮動物",
  image: "images/sp0286.jpg",

  trivia: [
    {
      title: "5本の腕が何度も枝分かれ",
      text: "5本の腕が何度も枝分かれし、細かな網のような姿になります。"
    },
    {
      title: "夜になると腕を大きく広げる",
      text: "夜に枝分かれした腕を大きく広げ、流れてくるプランクトンを捕らえます。"
    }
  ],

  bodyLength: "大型個体では、腕を広げると数十cm規模になります。",

  distribution: "日本では相模湾以南の太平洋岸などに分布し、朝鮮半島南部周辺でも知られています。",

  habitat: "水深40〜880mほどの岩礁や海底で、ヤギ類などにつかまって暮らすことがあります。",

  diet: "枝分かれした腕で動物プランクトンや浮遊する有機物を捕らえます。",

  features: "中央盤から5本の腕が伸び、それぞれが何度も二叉状に枝分かれします。",

  behavior: "昼は腕を縮めることが多く、夜になると大きく広げて餌を取ります。",

  reproduction: "本種固有の産卵期や幼生生態については、十分な情報がありません。",

  identification: "正確な識別には、腕の棘や中央盤などの細かな形を確認します。",

  nameOrigin: "多数に枝分かれする腕を持つテヅルモヅル類の一種です。",

  humanRelation: "深場に暮らす特徴的な棘皮動物として、水族館展示や分類研究の対象になります。",

  observationPoint: "中央の5本の腕を見つけ、先端へ向かって何回枝分かれするか追ってみてください。",

  references: [
    "JAZA：Astrocladus coniferus セノテヅルモヅル",
    "Okanishi & Fujita 2020: Revision of Japanese Astrocladus",
    "神戸須磨シーワールド関連資料：セノテヅルモヅル"
  ]
},

{
  id: "sp0287",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サギフエ",
  scientificName: "Macroramphosus scolopax",
  englishName: "Longspine snipefish",
  classification: ["脊索動物門", "条鰭綱", "ヨウジウオ目", "ヘコアユ科", "サギフエ属"],
  category: "魚類",
  image: "images/sp0287.jpg",

  trivia: [
    {
      title: "口が細長い管のよう",
      text: "長い吻の先に小さな口があり、小さな餌を吸い込むように食べます。"
    },
    {
      title: "背中に長い1本の棘",
      text: "第2背びれの棘が非常に長く、後方へ伸びています。"
    }
  ],

  bodyLength: "最大で全長約20cm。",

  distribution: "日本を含む世界の温帯・亜熱帯海域に広く分布します。",

  habitat: "水深25〜600mほどで記録され、成魚は大陸棚から大陸棚斜面の海底付近に生息します。",

  diet: "幼魚はカイアシ類など、成魚は底生性の小型無脊椎動物も食べます。",

  features: "左右に平たい体、非常に長い管状の吻、長く伸びる背びれ棘が特徴です。",

  behavior: "幼魚は表層付近を漂い、成長すると深い海底近くへ移り、群れを作ることもあります。",

  reproduction: "卵生ですが、詳しい産卵期や産卵行動については十分に分かっていません。",

  identification: "管状に長い吻と、背中から後方へ伸びる長い棘が特徴です。",

  nameOrigin: "細く長い吻を笛に見立てたと考えられますが、詳しい命名経緯は不明です。",

  humanRelation: "底びき網などで漁獲されることがありますが、日本では主要な食用魚ではありません。",

  observationPoint: "長い吻の先端にある、とても小さな口を探してください。",

  references: [
    "BISMaL: Macroramphosus scolopax",
    "WoRMS: Macroramphosus scolopax",
    "FishBase: Macroramphosus scolopax"
  ]
},

{
  id: "sp0288",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒラホモラ",
  scientificName: "Homolomannia sibogae",
  englishName: "Siboga homolid crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "ホモラ科", "Homolomannia属"],
  category: "甲殻類",
  image: "images/sp0288.jpg",

  trivia: [
    {
      title: "現地メモの『ヒラホムラ』は誤記",
      text: "正式な標準和名は「ヒラホモラ」で、学名は Homolomannia sibogae です。"
    },
    {
      title: "深い海に暮らすホモラの仲間",
      text: "日本から東南アジア、ニューカレドニアなど西太平洋の深場に暮らします。"
    }
  ],

  bodyLength: "信頼できる統一された最大サイズを確認できないため、数値は記載しません。",

  distribution: "日本、台湾、フィリピン、インドネシア、ニューカレドニアなどに分布します。",

  habitat: "比較的深い海底に生息し、フィリピンでは水深180〜200mほどから採集されています。",

  diet: "本種だけを対象とした詳しい食性資料がなく、特定の餌は分かっていません。",

  features: "比較的平たく四角形に近い甲と、長い歩脚を持つ深海性のカニです。",

  behavior: "海底で暮らしますが、本種固有の詳しい行動は十分に分かっていません。",

  reproduction: "メスは腹部に卵を抱えますが、繁殖期や抱卵数は十分に分かっていません。",

  identification: "甲の形や突起、歩脚などの細かな形態で近縁種と識別します。",

  nameOrigin: "ホモラ科の中でも平たい甲を持つことが「ヒラホモラ」という名前に関係します。",

  humanRelation: "一般的な食用種ではなく、深海性甲殻類の分類・生物相研究で扱われます。",

  observationPoint: "甲を上から見て、比較的平たく角張った輪郭に注目してください。",

  references: [
    "鳥羽水族館：ヒラホモラ Homolomannia sibogae",
    "OBIS: Homolomannia sibogae",
    "西太平洋産ホモラ科分類資料"
  ]
},

{
  id: "sp0289",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オキナマコ",
  scientificName: "Apostichopus nigripunctatus",
  englishName: "Black-spotted sea cucumber",
  classification: ["棘皮動物門", "ナマコ綱", "Synallactida", "シカクナマコ科", "マナマコ属"],
  category: "棘皮動物",
  image: "images/sp0289.jpg",

  trivia: [
    {
      title: "古い学名とは属が変わっている",
      text: "古い資料では別の属名も使われますが、現在の受理名は Apostichopus nigripunctatus です。"
    },
    {
      title: "危険時に内臓を出すことがある",
      text: "強い刺激を受けると内臓を放出することがあり、その後再生できます。"
    }
  ],

  bodyLength: "大型個体では体長約40cmになります。",

  distribution: "日本近海を中心とする北西太平洋から知られています。",

  habitat: "沿岸から深海まで生息し、水深20〜600mほどから記録されています。",

  diet: "砂泥や堆積物を取り込み、中の有機物や微生物を食べます。",

  features: "太い円筒形の暗褐色から黒褐色の体を持ち、表面には黒色斑や突起があります。",

  behavior: "海底をゆっくり移動して堆積物を食べ、強い刺激では内臓を放出することがあります。",

  reproduction: "卵と精子を海中へ放出しますが、地域ごとの繁殖期は一律ではありません。",

  identification: "暗色の大型ナマコで、正確な識別には体表の突起や骨片なども確認します。",

  nameOrigin: "沖合や比較的深い場所から得られることが名前に関係すると考えられます。",

  humanRelation: "食用になることがありますが、マナマコほど一般的な流通種ではありません。",

  observationPoint: "体表全体を見て、突起や黒い模様を探してください。",

  references: [
    "WoRMS: Apostichopus nigripunctatus",
    "鶴岡市立加茂水族館：オキナマコ",
    "旧名 Stichopus nigripunctatus / Parastichopus nigripunctatus"
  ]
},

{
  id: "sp0290",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "セイタカカワリギンチャク",
  scientificName: "Synhalcurias elegans",
  englishName: "Sea anemone",
  classification: ["刺胞動物門", "花虫綱", "六放サンゴ亜綱", "イソギンチャク目", "Isactinernidae", "Synhalcurias属"],
  category: "刺胞動物",
  image: "images/sp0290.jpg",

  trivia: [
    {
      title: "2023年に科の分類が変わった",
      text: "2023年の分類研究で、新設された Isactinernidae に移されました。"
    },
    {
      title: "日本周辺に分布する珍しいイソギンチャク",
      text: "相模湾や紀伊半島、小笠原諸島など日本近海の深場から知られています。"
    }
  ],

  bodyLength: "大型では15cm前後になりますが、伸縮によって見かけの大きさは変化します。",

  distribution: "相模湾、紀伊半島、五島列島、小笠原諸島など日本周辺から記録されています。",

  habitat: "水深70〜400mほどの海底に生息します。",

  diet: "触手の刺胞で小型動物や有機物を捕らえます。",

  features: "細長く立ち上がる体柱と、その上端に並ぶ多数の触手を持ちます。",

  behavior: "海底へ付着して触手を広げ、刺激を受けると触手や体柱を縮めます。",

  reproduction: "本種固有の繁殖時期や幼生生態については、十分な情報がありません。",

  identification: "正確な識別には、触手数や内部形態などの詳しい観察が必要です。",

  nameOrigin: "体柱を長く伸ばすと背が高く見えることが「セイタカ」の由来です。",

  humanRelation: "日本産深海性イソギンチャク類の分類や進化研究で重要な種です。",

  observationPoint: "触手だけでなく、その下へ長く伸びる体柱にも注目してください。",

  references: [
    "Izumi et al. 2023. Comprehensive revision of Japanese Actinernoidea",
    "Aquamarine Fukushima：セイタカカワリギンチャク",
    "Synhalcurias elegans"
  ]
},

{
  id: "sp0291",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "トラザメ",
  scientificName: "Scyliorhinus torazame",
  englishName: "Cloudy catshark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "トラザメ科", "トラザメ属"],
  category: "魚類",
  image: "images/sp0291.jpg",

  trivia: [
    {
      title: "卵で生まれるサメ",
      text: "硬い卵殻に包まれた卵を産み、四隅の糸状部分で海藻や岩などへ絡みつきます。"
    },
    {
      title: "人にはほとんど危険のない小型サメ",
      text: "最大でも1m未満の小型種で、人を積極的に襲うサメではありません。"
    }
  ],

  bodyLength: "最大で全長約78cm。",

  distribution: "日本、朝鮮半島、台湾周辺など北西太平洋に分布します。",

  habitat: "沿岸から水深300mほどまでの砂泥底や岩礁周辺に生息します。",

  diet: "小魚、エビ・カニ類、頭足類などを捕食します。",

  features: "細長い体に暗色の鞍状斑や斑点があり、猫のような細長い眼を持ちます。",

  behavior: "海底近くをゆっくり泳ぎ、岩陰や海底で休むこともあります。",

  reproduction: "卵生で、角のある硬い卵殻に包まれた卵を産みます。",

  identification: "小型で細長い体、褐色系の不規則な斑紋、細長い眼が特徴です。",

  nameOrigin: "体表のまだら模様を虎の模様に見立てたことが名前に関係します。",

  humanRelation: "底びき網などで混獲されるほか、水族館では卵や孵化も展示されます。",

  observationPoint: "卵があれば、卵殻の中に見える胚や卵黄にも注目してください。",

  references: [
    "BISMaL: Scyliorhinus torazame",
    "FishBase: Scyliorhinus torazame"
  ]
},

{
  id: "sp0292",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヌタウナギ",
  scientificName: "Eptatretus burgeri",
  englishName: "Inshore hagfish",
  classification: ["脊索動物門", "ヌタウナギ綱", "ヌタウナギ目", "ヌタウナギ科", "ヌタウナギ属"],
  category: "無顎類",
  image: "images/sp0292.jpg",

  trivia: [
    {
      title: "大量の粘液を一瞬で出す",
      text: "刺激を受けると大量の粘液を出し、海水中で急速に広げて身を守ります。"
    },
    {
      title: "魚に似ているが顎がない",
      text: "上下の顎を持たず、口の中には角質の歯状構造があります。"
    }
  ],

  bodyLength: "最大で全長約60cm。",

  distribution: "日本海、日本の太平洋岸から台湾周辺まで分布します。",

  habitat: "水深10〜270mほどの泥底に生息し、泥へ体を潜らせます。",

  diet: "動物の死骸や弱った魚などの肉を削り取るように食べます。",

  features: "細長い体を持ち、顎や対になったひれはなく、鰓孔は左右に6対あります。",

  behavior: "泥へ潜り、刺激を受けると大量の粘液を出し、季節によって深場へ移動することがあります。",

  reproduction: "卵生で大きな卵を少数産み、日本近海では季節的な生殖周期が研究されています。",

  identification: "顎がなく、眼が退化し、体側に粘液孔と6対の鰓孔が並びます。",

  nameOrigin: "刺激時に出す大量のぬるぬるした粘液「ぬた」が名前の由来です。",

  humanRelation: "日本や韓国などで食用になり、皮が革製品に利用されることもあります。",

  observationPoint: "胸びれや腹びれがないことと、体側に並ぶ小さな鰓孔を探してください。",

  references: [
    "BISMaL: Eptatretus burgeri ヌタウナギ",
    "WoRMS: Eptatretus burgeri",
    "FishBase: Eptatretus burgeri"
  ]
},

{
  id: "sp0293",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スミツキハナダイ",
  scientificName: "Selenanthias analis",
  englishName: "Pearl-spotted fairy basslet",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハナダイ科", "スミツキハナダイ属"],
  category: "魚類",
  image: "images/sp0293.jpg",

  trivia: [
    {
      title: "深場にすむ小型ハナダイ",
      text: "体長10cm前後の小型種で、水深100mを超える深場を中心に暮らします。"
    },
    {
      title: "名前の『スミツキ』は黒斑",
      text: "成熟個体ではひれなどに特徴的な黒斑が見られます。"
    }
  ],

  bodyLength: "最大で標準体長約13cm。",

  distribution: "南日本から台湾、西オーストラリア周辺など西太平洋から知られています。",

  habitat: "水深129〜204mほどの沖合の岩礁など深場から記録されています。",

  diet: "詳しい食性資料は限られますが、小型甲殻類などを食べると考えられています。",

  features: "赤色から桃色の体に明るい斑点が並び、成熟個体では性別による色彩差もあります。",

  behavior: "深場の岩礁付近で暮らしますが、詳しい群れ構造は分かっていません。",

  reproduction: "雌雄による形態差は知られますが、繁殖時期は十分に分かっていません。",

  identification: "体側の明色斑と、成熟個体のひれに見られる黒斑が特徴です。",

  nameOrigin: "体やひれの黒斑を「墨付き」に見立てた名前です。",

  humanRelation: "深場性で目にする機会が少なく、水族館で観察できる貴重なハナダイです。",

  observationPoint: "赤い体だけでなく、ひれの暗色斑と体側の明るい点を探してください。",

  references: [
    "FishBase: Selenanthias analis",
    "Eschmeyer's Catalog of Fishes: Selenanthias analis",
    "Japanese Journal of Ichthyology / Ichthyological Research: Selenanthias analis"
  ]
},

{
  id: "sp0294",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スソウミヘビ",
  scientificName: "Ophichthus urolophus",
  englishName: "Snake eel",
  classification: ["脊索動物門", "条鰭綱", "ウナギ目", "ウミヘビ科", "ウミヘビ属"],
  category: "魚類",
  image: "images/sp0294.jpg",

  trivia: [
    {
      title: "ウミヘビでも爬虫類ではない",
      text: "名前にウミヘビとありますが、爬虫類ではなく鰓で呼吸する魚です。"
    },
    {
      title: "全身には130個以上の椎骨",
      text: "非常に細長い体を持ち、椎骨は134〜139個あります。"
    }
  ],

  bodyLength: "最大で全長約61.5cm。",

  distribution: "日本を含むインド・西太平洋に分布します。",

  habitat: "砂泥底など海底付近に生息します。",

  diet: "本種固有の詳しい食性資料が少なく、特定の餌は分かっていません。",

  features: "非常に細長い体を持ち、背側は黄褐色から褐色、腹側は淡色で、尾端は硬く尖ります。",

  behavior: "海底付近で生活し、砂泥へ体を潜らせるのに適した体形をしています。",

  reproduction: "卵生でレプトケファルス幼生期を経ますが、繁殖場所や産卵期は十分に分かっていません。",

  identification: "細長い体や大きな眼、背びれの始まりの位置、134〜139個の椎骨などで識別します。",

  nameOrigin: "細長い体が海の蛇のように見えることからウミヘビと呼ばれますが、「スソ」の詳しい由来は不明です。",

  humanRelation: "主要な漁業対象ではありませんが、底びき網などで採集されることがあります。",

  observationPoint: "尾の先を見て、一般的なウナギとは違う硬く尖った形に注目してください。",

  references: [
    "BISMaL: Ophichthus urolophus",
    "WoRMS: Ophichthus urolophus",
    "FishBase: Ophichthus urolophus"
  ]
},

{
  id: "sp0295",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "トリノアシ",
  scientificName: "Metacrinus rotundus",
  englishName: "Stalked crinoid",
  classification: ["棘皮動物門", "ウミユリ綱", "ウミユリ目", "ウミユリ科", "トリノアシ属"],
  category: "棘皮動物",
  image: "images/sp0295.jpg",

  trivia: [
    {
      title: "植物のように見えて動物",
      text: "茎の上に羽毛状の腕を広げますが、ヒトデやウニと同じ棘皮動物です。"
    },
    {
      title: "茎があっても移動できる",
      text: "完全に固定されているわけではなく、茎や腕を使ってゆっくり移動できます。"
    }
  ],

  bodyLength: "茎を含めると数十cm規模になります。",

  distribution: "日本近海、とくに相模湾や駿河湾などからよく知られています。",

  habitat: "比較的深い岩礁性の海底に生息し、駿河湾では水深130〜200mほどで研究されています。",

  diet: "羽毛状の腕でプランクトンや微細な有機物を濾し取ります。",

  features: "長い節のある茎と、その上の萼から伸びる多数の羽毛状の腕を持ちます。",

  behavior: "腕を広げて餌を取り、刺激や環境変化に応じてゆっくり移動することもあります。",

  reproduction: "卵や精子を海中へ放出しますが、地域ごとの繁殖期は十分に分かっていません。",

  identification: "日本近海には似た種類がいるため、茎節や腕などの形で識別します。",

  nameOrigin: "細長い茎と上部の姿を鳥の脚に見立てたことから「トリノアシ」と呼ばれます。",

  humanRelation: "古生代から続くウミユリ類の姿を残す動物として、進化や深海生物研究で重要です。",

  observationPoint: "植物の茎のような部分を見て、細かな節が連続していることを確認してください。",

  references: [
    "BISMaL: Metacrinus rotundus トリノアシ",
    "Metacrinus rotundus locomotion studies",
    "Suruga Bay stalked crinoid research"
  ]
},

{
  id: "sp0296",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカザエビ",
  scientificName: "Metanephrops japonicus",
  englishName: "Japanese lobster",
  classification: ["節足動物門", "軟甲綱", "十脚目", "アカザエビ科", "アカザエビ属"],
  category: "甲殻類",
  image: "images/sp0296.jpg",

  trivia: [
    {
      title: "泥底に穴を掘って暮らす",
      text: "深い海の泥底に巣穴を作り、その周辺を生活場所にします。"
    },
    {
      title: "日本を代表する高級深海エビ",
      text: "大型で甘みがあり、高級食材として利用される深海性のエビです。"
    }
  ],

  bodyLength: "全長20cm前後まで成長し、20cmを超える個体も記録されています。",

  distribution: "日本近海に分布し、銚子沖から日向灘周辺など太平洋岸を中心に知られています。",

  habitat: "主に水深200〜400mほどの泥底に巣穴を作って暮らします。",

  diet: "小型甲殻類、多毛類、軟体動物などを捕食すると考えられています。",

  features: "赤橙色の体と細長い大型のはさみを持ち、はさみの先端は白っぽくなります。",

  behavior: "泥底の巣穴を拠点とし、単独で行動することが多いとされています。",

  reproduction: "メスは腹肢に受精卵を付けて抱卵し、成熟や繁殖時期には地域差があります。",

  identification: "赤い体、細長い大型のはさみ、白っぽいはさみの先端が特徴です。",

  nameOrigin: "鮮やかな赤色の体を持つ大型エビであることが名前に表れています。",

  humanRelation: "刺身、寿司、焼き物などに利用される高級食用エビです。",

  observationPoint: "体より長く見える第1胸脚と、その先にある細長いはさみに注目してください。",

  references: [
    "BISMaL: Metanephrops japonicus",
    "名古屋港水族館：アカザエビ",
    "静岡県水産・海洋技術研究所：アカザエビ"
  ]
},

{
  id: "sp0281",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ツマリカスベ",
  scientificName: "Okamejei schmidti",
  englishName: "Browneye skate",
  classification: ["脊索動物門", "軟骨魚綱", "ガンギエイ目", "ガンギエイ科", "コモンカスベ属"],
  category: "魚類",
  image: "images/sp0281.jpg",
  trivia: [
    {
      title: "卵は四隅に角があるケースに包まれる",
      text: "卵は硬い卵殻に包まれ、卵殻は長さ約5.6〜6.0cm、幅約3cmです。"
    },
    {
      title: "日本周辺に分布する小型カスベ",
      text: "日本周辺に分布し、水深30〜60mほどの海底に生息します。"
    }
  ],
  bodyLength: "今回確認した主要データベースでは、信頼できる最大全長を確定できませんでした。",
  distribution: "日本周辺の北西太平洋に分布します。",
  habitat: "水深30〜60mほどを中心とする砂泥底などに生息します。",
  diet: "小型甲殻類などの底生動物を食べると考えられますが、詳しい食性資料は限られています。",
  features: "体は強く平たく円盤状で、吻は比較的短く、尾は細長く伸びます。",
  behavior: "海底に体を密着させて暮らす底生性のエイです。",
  reproduction: "卵生で硬い卵殻に包まれた卵を産み、胚は卵黄を栄養に成長します。",
  identification: "吻の形や体盤の比率、棘、斑紋などを組み合わせて識別します。",
  nameOrigin: "比較的短い吻が「詰まった」ように見えることが和名に関係すると考えられます。",
  humanRelation: "FishBaseのIUCN情報ではVulnerableとされ、資源管理や保全でも注目されます。",
  observationPoint: "体盤の前端にある短い吻と、そこから細長い尾へ続く体形に注目してください。",
  references: [
    "BISMaL: Okamejei schmidti",
    "北海道大学総合博物館：ツマリカスベ標本",
    "FishBase: Okamejei schmidti",
    "神奈川県立生命の星・地球博物館：相模湾産魚類目録"
  ]
},

{
  id: "sp0282",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "エビスダイ",
  scientificName: "Ostichthys japonicus",
  englishName: "Japanese soldierfish",
  classification: ["脊索動物門", "条鰭綱", "イットウダイ目", "イットウダイ科", "エビスダイ属"],
  category: "魚類",
  image: "images/sp0282.jpg",
  trivia: [
    {
      title: "非常に硬く大きな鱗を持つ",
      text: "赤い体を大きく硬い鱗が覆い、属名 Ostichthys も「骨」を意味する語に由来します。"
    },
    {
      title: "2018年に近縁種が整理された",
      text: "2018年にOstichthys japonicus種群が再検討され、似た種類との違いが整理されました。"
    }
  ],
  bodyLength: "最大で全長約45cmで、一般には35cmほどまでです。",
  distribution: "南日本を含むインド・太平洋に分布し、フィリピン、オーストラリア、ニューカレドニア、フィジーなどでも見られます。",
  habitat: "水深20〜270mほどの岩礁やその周辺に生息します。",
  diet: "小魚や甲殻類などを捕食すると考えられています。",
  features: "鮮やかな赤い体と大きく硬い鱗を持ち、胸びれ基部上部には暗赤色斑があります。",
  behavior: "岩礁の海底近くなど、比較的暗い深場で暮らします。",
  reproduction: "本種固有の繁殖期や産卵行動については、十分な情報がありません。",
  identification: "大きく硬い鱗、赤い体、胸びれ基部上方の暗赤色斑が特徴です。",
  nameOrigin: "鮮やかな赤色や姿を七福神の恵比寿に重ねたとされますが、命名由来には資料差があります。",
  humanRelation: "食用になりますが、深場に暮らすため一般市場ではあまり見かけません。",
  observationPoint: "体表を見て、普通の魚より大きく硬そうな鱗に注目してください。",
  references: [
    "BISMaL: Ostichthys japonicus エビスダイ",
    "WoRMS: Ostichthys japonicus",
    "FishBase: Ostichthys japonicus",
    "Matsunuma, Fukui & Motomura 2018. Review of the Ostichthys japonicus complex"
  ]
},

{
  id: "sp0283",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クルマダイ",
  scientificName: "Pristigenys niphonia",
  englishName: "Japanese bigeye",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キントキダイ科", "クルマダイ属"],
  category: "魚類",
  image: "images/sp0283.jpg",
  trivia: [
    {
      title: "丸い体が車輪のよう",
      text: "非常に体高が高く平たい体を持ち、丸い輪郭が車輪のように見えます。"
    },
    {
      title: "幼魚の方が縞模様が目立つ",
      text: "幼魚では約5本の淡い横帯が目立ちますが、成長すると不明瞭になります。"
    }
  ],
  bodyLength: "最大標準体長約27.4cmで、全長では30cm前後になります。",
  distribution: "日本、東シナ海、台湾、中国南部、ベトナム、インドネシア、オーストラリアなどに分布します。",
  habitat: "水深1〜250mで記録され、成魚は80〜100m以深、幼魚は5〜30mほどの浅場にも現れます。",
  diet: "小型魚や甲殻類などを捕食します。",
  features: "非常に体高が高く大きな眼を持ち、幼魚では体側の淡い横帯が目立ちます。",
  behavior: "岩礁周辺の暗い場所を利用し、大きな眼は少ない光を捉えるのに適しています。",
  reproduction: "卵生で、直径約0.75mmの小さな球形の浮遊卵が記録されています。",
  identification: "車輪のような高い体高と、頭部に対して非常に大きな眼が特徴です。",
  nameOrigin: "丸く体高の高い輪郭を車輪に見立てたことから「クルマダイ」と呼ばれます。",
  humanRelation: "食用になるほか、深場のキントキダイ類として水族館でも展示されます。",
  observationPoint: "LABO7のチカメキントキと見比べ、特に丸く体高の高い体形に注目してください。",
  references: [
    "BISMaL: Pristigenys niphonia クルマダイ",
    "FishBase: Pristigenys niphonia",
    "新潟市水族館：クルマダイ",
    "Iwatsuki et al. 2012. Redescription of Pristigenys niphonia"
  ]
},

{
  id: "sp0284",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒメ",
  scientificName: "Hime japonica",
  englishName: "Japanese thread-sail fish",
  classification: ["脊索動物門", "条鰭綱", "ヒメ目", "ヒメ科", "ヒメ属"],
  category: "魚類",
  image: "images/sp0284.jpg",
  trivia: [
    {
      title: "学名そのものが「Hime」",
      text: "属名 Hime は和名「ヒメ」に由来し、古い資料の Aulopus japonicus から現在は Hime japonica に変更されています。"
    },
    {
      title: "現在のヒメは北西太平洋の種",
      text: "以前はオーストラリアなどの個体も同種とされましたが、再検討で別種が含まれることが分かり、現在は日本から台湾付近を中心とする種です。"
    }
  ],
  bodyLength: "最大標準体長約22.3cmで、一般には15cm前後です。",
  distribution: "日本、朝鮮半島、東シナ海から台湾付近までの北西太平洋に分布します。",
  habitat: "水深85〜510mほどの海底近くに生息します。",
  diet: "甲殻類や多毛類など、海底付近の小型動物を捕食します。",
  features: "細長い体と比較的大きな頭を持ち、性別や成長によってひれの色や形が変わります。",
  behavior: "砂泥底など海底近くで底生動物を探して捕食します。",
  reproduction: "本種固有の産卵時期や繁殖行動については、十分な情報がありません。",
  identification: "体形だけでなく、ひれの形、体の比率、鰭条数などを使って識別します。",
  nameOrigin: "属名 Hime は和名「ヒメ」、種小名 japonica は日本に由来し、タイプ産地は横浜です。",
  humanRelation: "底びき網などで漁獲されることがありますが、主要な食用魚ではありません。",
  observationPoint: "細長い体だけでなく、発達した背びれの形や色にも注目してください。",
  references: [
    "Eschmeyer's Catalog of Fishes 2026: Hime japonica",
    "FishBase: Hime japonica",
    "NCBI Taxonomy: Hime japonica"
  ]
},

{
  id: "sp0285",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サガミモガニ",
  scientificName: "Tunepugettia sagamiensis",
  englishName: "Sagami spider crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "モガニ科", "Tunepugettia属"],
  category: "甲殻類",
  image: "images/sp0285.jpg",
  trivia: [
    {
      title: "昔の学名から属そのものが変わった",
      text: "以前は Pugettia sagamiensis や Goniopugettia sagamiensis とされましたが、2017年に Tunepugettia 属が新設されました。"
    },
    {
      title: "名前は相模湾に由来",
      text: "種小名 sagamiensis は相模湾に由来し、八景島のある神奈川県とも関係の深い名前です。"
    }
  ],
  bodyLength: "甲幅は数cmほどで、5cmを超える個体も知られています。",
  distribution: "日本では房総半島から土佐湾周辺まで知られています。",
  habitat: "比較的深い海底に生息し、底びき網などで採集されることがあります。",
  diet: "本種だけを対象とした詳しい食性資料が少なく、特定の餌は分かっていません。",
  features: "やや角張った甲に多数の隆起や突起があり、長い歩脚を持ちます。",
  behavior: "深場の海底で暮らしますが、詳しい行動は十分に分かっていません。",
  reproduction: "メスは腹部に受精卵を抱えますが、繁殖期や抱卵数は十分に分かっていません。",
  identification: "甲の輪郭や隆起、突起、脚の形などを詳しく確認して識別します。",
  nameOrigin: "相模湾にちなむ種小名 sagamiensis を持つことが和名に表れています。",
  humanRelation: "一般的な食用種ではなく、日本の深海性カニ類の分類研究で重要な種類です。",
  observationPoint: "甲の表面を見て、多数の凹凸や突起を探してください。",
  references: [
    "Ng, Komai & Sato 2017. Establishment of Tunepugettia for Pugettia sagamiensis",
    "WoRMS: Tunepugettia sagamiensis",
    "鳥羽水族館：サガミモガニ"
  ]
},

{
  id: "sp0286",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "セノテヅルモヅル",
  scientificName: "Astrocladus coniferus",
  englishName: "Basket star",
  classification: ["棘皮動物門", "クモヒトデ綱", "ツルクモヒトデ目", "テヅルモヅル科", "Astrocladus属"],
  category: "棘皮動物",
  image: "images/sp0286.jpg",
  trivia: [
    {
      title: "5本の腕が何度も枝分かれ",
      text: "中央の5本の腕が何度も枝分かれし、細かな網のような姿になります。"
    },
    {
      title: "夜になると腕を大きく広げる",
      text: "夜に腕を大きく広げ、流れてくるプランクトンなどを捕らえます。"
    }
  ],
  bodyLength: "大型個体では、腕を広げると数十cm規模になります。",
  distribution: "日本では相模湾以南の太平洋岸などに分布し、朝鮮半島南部周辺でも知られています。",
  habitat: "水深40〜880mほどの岩礁や海底で、ヤギ類などにつかまって暮らすことがあります。",
  diet: "枝分かれした腕で動物プランクトンや浮遊する有機物を捕らえます。",
  features: "中央盤から5本の腕が伸び、それぞれが何度も二叉状に枝分かれし、縮めると複雑な塊のようになります。",
  behavior: "昼は腕を縮めることが多く、夜になると大きく広げて餌を取ります。",
  reproduction: "本種固有の産卵期や幼生生態については、十分な情報がありません。",
  identification: "正確な識別には、腕の棘や中央盤などの細かな形を確認します。",
  nameOrigin: "多数に枝分かれする腕が、鶴が舞うような複雑な姿に見えるテヅルモヅル類です。",
  humanRelation: "深場に暮らす特徴的な棘皮動物として、水族館展示や分類研究の対象になります。",
  observationPoint: "中央の5本の腕を見つけ、先端へ向かって何度枝分かれするか追ってみてください。",
  references: [
    "JAZA：Astrocladus coniferus セノテヅルモヅル",
    "Okanishi & Fujita 2020: Revision of Japanese Astrocladus",
    "神戸須磨シーワールド関連資料：セノテヅルモヅル"
  ]
},

{
  id: "sp0287",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サギフエ",
  scientificName: "Macroramphosus scolopax",
  englishName: "Longspine snipefish",
  classification: ["脊索動物門", "条鰭綱", "ヨウジウオ目", "ヘコアユ科", "サギフエ属"],
  category: "魚類",
  image: "images/sp0287.jpg",
  trivia: [
    {
      title: "口が細長い管のよう",
      text: "長い吻の先に小さな口があり、小さな餌を吸い込むように捕食します。"
    },
    {
      title: "背中に長い1本の棘",
      text: "第2背びれの棘が非常に長く発達し、後方へ伸びています。"
    }
  ],
  bodyLength: "最大で全長約20cm。",
  distribution: "日本を含む世界の温帯・亜熱帯海域に広く分布します。",
  habitat: "水深25〜600mほどで記録され、成魚は主に大陸棚から大陸棚斜面の砂泥底付近で暮らします。",
  diet: "幼魚はカイアシ類など、成魚は底生性の小型無脊椎動物も食べます。",
  features: "平たい体、非常に長い管状の吻、長く伸びる背びれ棘が特徴で、体は桃色から赤色です。",
  behavior: "幼魚は表層付近を漂い、成長すると深い海底近くへ移り、群れを作ることもあります。",
  reproduction: "卵生ですが、地域ごとの産卵期や詳しい産卵行動は十分に分かっていません。",
  identification: "管状に長い吻と、背中から後方へ伸びる長い棘が特徴です。",
  nameOrigin: "細く長い吻を笛に見立てたと考えられますが、詳しい命名経緯は不明です。",
  humanRelation: "底びき網などで漁獲されることがありますが、日本では主要な食用魚ではありません。",
  observationPoint: "長い吻の先端にある、とても小さな口を探してください。",
  references: [
    "BISMaL: Macroramphosus scolopax",
    "WoRMS: Macroramphosus scolopax",
    "FishBase: Macroramphosus scolopax"
  ]
},

{
  id: "sp0288",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒラホモラ",
  scientificName: "Homolomannia sibogae",
  englishName: "Siboga homolid crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "ホモラ科", "Homolomannia属"],
  category: "甲殻類",
  image: "images/sp0288.jpg",
  trivia: [
    {
      title: "現地メモの『ヒラホムラ』は誤記",
      text: "正式な標準和名は「ヒラホモラ」で、学名は Homolomannia sibogae です。"
    },
    {
      title: "深い海に暮らすホモラの仲間",
      text: "日本からフィリピン、インドネシア、ニューカレドニアなど西太平洋の深場に暮らします。"
    }
  ],
  bodyLength: "信頼できる統一された最大サイズを確認できないため、数値は記載しません。",
  distribution: "日本、台湾、フィリピン、インドネシア、ニューカレドニアなど西太平洋から知られています。",
  habitat: "大陸棚から大陸斜面の深場に生息し、フィリピンでは水深180〜200mほどから採集されています。",
  diet: "本種だけを対象とした詳しい食性資料がなく、特定の餌は分かっていません。",
  features: "比較的平たく四角形に近い甲を持ち、鰓域の側縁は比較的直線的で、歩脚は長く伸びます。",
  behavior: "海底で暮らしますが、本種固有の詳しい行動は十分に分かっていません。",
  reproduction: "メスは腹部に卵を抱えますが、繁殖期や抱卵数は十分に分かっていません。",
  identification: "甲の形や突起、歩脚などの細かな形態で近縁種と識別します。",
  nameOrigin: "ホモラ科の中でも平たい甲を持つことが「ヒラホモラ」という名前に関係します。",
  humanRelation: "一般的な食用種ではなく、深海性甲殻類の分類・生物相研究で扱われます。",
  observationPoint: "甲を上から見て、比較的平たく角張った輪郭に注目してください。",
  references: [
    "鳥羽水族館：ヒラホモラ Homolomannia sibogae",
    "OBIS: Homolomannia sibogae",
    "西太平洋産ホモラ科分類資料"
  ]
},

{
  id: "sp0289",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オキナマコ",
  scientificName: "Apostichopus nigripunctatus",
  englishName: "Black-spotted sea cucumber",
  classification: ["棘皮動物門", "ナマコ綱", "Synallactida", "シカクナマコ科", "マナマコ属"],
  category: "棘皮動物",
  image: "images/sp0289.jpg",
  trivia: [
    {
      title: "古い学名とは属が変わっている",
      text: "古い資料では Stichopus nigripunctatus や Parastichopus nigripunctatus とされますが、現在は Apostichopus nigripunctatus です。"
    },
    {
      title: "危険時に内臓を出すことがある",
      text: "強い刺激を受けると消化管などを体外へ出すことがあり、失った組織は再生できます。"
    }
  ],
  bodyLength: "大型個体では体長約40cmになります。",
  distribution: "日本近海を中心とする北西太平洋から知られています。",
  habitat: "沿岸から深海まで生息し、水深20〜600mほどから記録されています。",
  diet: "砂泥や堆積物を取り込み、その中の有機物や微生物を食べます。",
  features: "太い円筒形の暗褐色から黒褐色の体を持ち、表面には黒色斑や突起があります。",
  behavior: "海底をゆっくり移動して堆積物を食べ、強い刺激では内臓を放出することがあります。",
  reproduction: "卵と精子を海中へ放出しますが、地域ごとの繁殖期は一律には分かっていません。",
  identification: "暗色の大型ナマコで、正確な識別には体表の突起や骨片なども確認します。",
  nameOrigin: "沖合や比較的深い場所から得られることが名前に関係すると考えられます。",
  humanRelation: "食用になることがありますが、マナマコほど一般的な流通種ではありません。",
  observationPoint: "体の前から後ろまで見て、体表の突起や黒い模様を探してください。",
  references: [
    "WoRMS: Apostichopus nigripunctatus",
    "鶴岡市立加茂水族館：オキナマコ",
    "旧名 Stichopus nigripunctatus / Parastichopus nigripunctatus"
  ]
},

{
  id: "sp0290",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "セイタカカワリギンチャク",
  scientificName: "Synhalcurias elegans",
  englishName: "Sea anemone",
  classification: ["刺胞動物門", "花虫綱", "六放サンゴ亜綱", "イソギンチャク目", "Isactinernidae", "Synhalcurias属"],
  category: "刺胞動物",
  image: "images/sp0290.jpg",
  trivia: [
    {
      title: "2023年に科の分類が変わった",
      text: "以前は Actinernidae とされましたが、2023年の研究で新設された Isactinernidae へ移されました。"
    },
    {
      title: "日本周辺に分布する珍しいイソギンチャク",
      text: "相模湾、紀伊半島、五島列島、小笠原諸島など日本近海の深場から知られています。"
    }
  ],
  bodyLength: "大型個体では15cm前後になりますが、伸縮によって見かけの大きさは大きく変わります。",
  distribution: "相模湾、紀伊半島、五島列島、小笠原諸島など日本周辺から記録されています。",
  habitat: "水深70〜400mほどの海底に生息します。",
  diet: "触手の刺胞で、水中を漂う小型動物や有機物を捕らえます。",
  features: "細長く立ち上がる体柱と、その上端に並ぶ多数の触手を持ちます。",
  behavior: "海底へ付着して触手を広げ、刺激を受けると触手や体柱を縮めます。",
  reproduction: "本種固有の繁殖時期や幼生生態については、十分な情報がありません。",
  identification: "正確な識別には、触手数や内部形態などの詳しい観察が必要です。",
  nameOrigin: "体柱を長く伸ばすと背が高く見えることが「セイタカ」の由来です。",
  humanRelation: "日本産深海性イソギンチャク類の分類や進化研究で重要な種です。",
  observationPoint: "触手だけでなく、その下へ長く伸びる体柱にも注目してください。",
  references: [
    "Izumi et al. 2023. Comprehensive revision of Japanese Actinernoidea",
    "Aquamarine Fukushima：セイタカカワリギンチャク",
    "Synhalcurias elegans"
  ]
},

{
  id: "sp0291",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "トラザメ",
  scientificName: "Scyliorhinus torazame",
  englishName: "Cloudy catshark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "トラザメ科", "トラザメ属"],
  category: "魚類",
  image: "images/sp0291.jpg",
  trivia: [
    {
      title: "卵で生まれるサメ",
      text: "硬い卵殻に包まれた卵を産み、四隅の糸状部分で海藻や岩などへ絡みつきます。"
    },
    {
      title: "人にはほとんど危険のない小型サメ",
      text: "最大でも1m未満の小型種で、人を積極的に襲うサメではありません。"
    }
  ],
  bodyLength: "最大で全長約78cm。",
  distribution: "日本、朝鮮半島、台湾周辺など北西太平洋に分布します。",
  habitat: "沿岸から水深300mほどまでの砂泥底や岩礁周辺に生息します。",
  diet: "小魚、エビ・カニ類、頭足類などを捕食します。",
  features: "細長い体に暗色の鞍状斑や斑点があり、猫のような細長い眼を持ちます。",
  behavior: "海底近くをゆっくり泳ぎ、岩陰や海底で休むこともあります。",
  reproduction: "卵生で、角のある硬い卵殻に包まれた卵を産みます。",
  identification: "小型で細長い体、褐色系の不規則な斑紋、細長い眼が特徴です。",
  nameOrigin: "体表のまだら模様を虎の模様に見立てたことが名前に関係します。",
  humanRelation: "底びき網などで混獲されるほか、水族館では卵や孵化も観察されます。",
  observationPoint: "卵があれば、卵殻の中に見える胚や卵黄にも注目してください。",
  references: [
    "BISMaL: Scyliorhinus torazame",
    "FishBase: Scyliorhinus torazame"
  ]
},

{
  id: "sp0292",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヌタウナギ",
  scientificName: "Eptatretus burgeri",
  englishName: "Inshore hagfish",
  classification: ["脊索動物門", "ヌタウナギ綱", "ヌタウナギ目", "ヌタウナギ科", "ヌタウナギ属"],
  category: "無顎類",
  image: "images/sp0292.jpg",
  trivia: [
    {
      title: "大量の粘液を一瞬で出す",
      text: "刺激を受けると大量の粘液を出し、海水中で急速に広げて身を守ります。"
    },
    {
      title: "魚に似ているが顎がない",
      text: "上下の顎を持たず、円形の口の中には角質の歯状構造があります。"
    }
  ],
  bodyLength: "最大で全長約60cm。",
  distribution: "日本海、日本の太平洋岸から台湾周辺まで北西太平洋に分布します。",
  habitat: "水深10〜270mほどの泥底に生息し、泥へ体を潜らせます。",
  diet: "動物の死骸や弱った魚などの肉を削り取るように食べます。",
  features: "細長い体を持ち、顎や対になったひれはなく、鰓孔は左右に6対あります。",
  behavior: "泥へ潜り、刺激を受けると大量の粘液を出し、季節によって繁殖のため深場へ移動することがあります。",
  reproduction: "卵生で大きな卵を少数産み、日本近海では季節的な生殖周期が研究されています。",
  identification: "顎がなく眼が非常に退化し、体側には粘液孔と6対の鰓孔が並びます。",
  nameOrigin: "刺激時に出す大量のぬるぬるした粘液「ぬた」が名前の由来です。",
  humanRelation: "日本や韓国などで食用になり、皮が革製品に利用されることもあります。",
  observationPoint: "胸びれや腹びれがないことと、体側に並ぶ小さな鰓孔を探してください。",
  references: [
    "BISMaL: Eptatretus burgeri ヌタウナギ",
    "WoRMS: Eptatretus burgeri",
    "FishBase: Eptatretus burgeri"
  ]
},

{
  id: "sp0293",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スミツキハナダイ",
  scientificName: "Selenanthias analis",
  englishName: "Pearl-spotted fairy basslet",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハナダイ科", "スミツキハナダイ属"],
  category: "魚類",
  image: "images/sp0293.jpg",
  trivia: [
    {
      title: "深場にすむ小型ハナダイ",
      text: "体長10cm前後の小型種ですが、水深100mを超える深場を中心に暮らします。"
    },
    {
      title: "名前の『スミツキ』は黒斑",
      text: "成熟個体ではひれなどに特徴的な黒い斑紋が見られます。"
    }
  ],
  bodyLength: "最大で標準体長約13cm。",
  distribution: "南日本から台湾、西オーストラリア周辺など西太平洋から知られています。",
  habitat: "水深129〜204mほどの沖合の岩礁など、深場から記録されています。",
  diet: "詳しい食性資料は限られますが、小型甲殻類などを食べると考えられています。",
  features: "赤色から桃色の体に明るい斑点が並び、成熟個体では性別による色彩差もあります。",
  behavior: "深場の岩礁付近で暮らしますが、詳しい群れ構造は分かっていません。",
  reproduction: "雌雄による形態差は知られていますが、繁殖時期は十分に分かっていません。",
  identification: "体側の明色斑と、成熟個体のひれに見られる黒斑を組み合わせて識別します。",
  nameOrigin: "体やひれの黒斑を「墨付き」に見立てた名前です。",
  humanRelation: "深場性で目にする機会が少なく、水族館で観察できる貴重なハナダイです。",
  observationPoint: "赤い体だけでなく、ひれの暗色斑と体側の明るい点を探してください。",
  references: [
    "FishBase: Selenanthias analis",
    "Eschmeyer's Catalog of Fishes: Selenanthias analis",
    "Japanese Journal of Ichthyology / Ichthyological Research: Selenanthias analis"
  ]
},

{
  id: "sp0294",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スソウミヘビ",
  scientificName: "Ophichthus urolophus",
  englishName: "Snake eel",
  classification: ["脊索動物門", "条鰭綱", "ウナギ目", "ウミヘビ科", "ウミヘビ属"],
  category: "魚類",
  image: "images/sp0294.jpg",
  trivia: [
    {
      title: "ウミヘビでも爬虫類ではない",
      text: "名前にウミヘビとありますが、爬虫類ではなく鰓で呼吸するウナギ目の魚です。"
    },
    {
      title: "全身には130個以上の椎骨",
      text: "非常に細長い体を持ち、椎骨は134〜139個あります。"
    }
  ],
  bodyLength: "最大で全長約61.5cm。",
  distribution: "日本を含むインド・西太平洋に分布します。",
  habitat: "砂泥底など海底付近に生息します。",
  diet: "本種固有の詳しい食性資料が少なく、特定の餌は分かっていません。",
  features: "非常に細長い体を持ち、背側は黄褐色から褐色、腹側は淡色で、尾端は硬く尖ります。",
  behavior: "海底付近で生活し、砂泥へ体を潜らせるのに適した体形をしています。",
  reproduction: "卵生でレプトケファルス幼生期を経ますが、繁殖場所や産卵期は十分に分かっていません。",
  identification: "細長い体、大きな眼、背びれの始まりの位置、134〜139個の椎骨などで識別します。",
  nameOrigin: "細長い体が海の蛇のように見えることからウミヘビと呼ばれますが、「スソ」の詳しい由来は不明です。",
  humanRelation: "主要な漁業対象ではありませんが、底びき網などで採集されることがあります。",
  observationPoint: "尾の先を見て、一般的なウナギとは違う硬く尖った形に注目してください。",
  references: [
    "BISMaL: Ophichthus urolophus",
    "WoRMS: Ophichthus urolophus",
    "FishBase: Ophichthus urolophus"
  ]
},

{
  id: "sp0295",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "トリノアシ",
  scientificName: "Metacrinus rotundus",
  englishName: "Stalked crinoid",
  classification: ["棘皮動物門", "ウミユリ綱", "ウミユリ目", "ウミユリ科", "トリノアシ属"],
  category: "棘皮動物",
  image: "images/sp0295.jpg",
  trivia: [
    {
      title: "植物のように見えて動物",
      text: "長い茎の上に羽毛状の腕を広げますが、ヒトデやウニと同じ棘皮動物です。"
    },
    {
      title: "茎があっても移動できる",
      text: "完全に固定されているわけではなく、茎や腕を使ってゆっくり移動できます。"
    }
  ],
  bodyLength: "茎を含めると数十cm規模になります。",
  distribution: "日本近海、とくに相模湾や駿河湾などからよく知られています。",
  habitat: "比較的深い岩礁性の海底に生息し、駿河湾では水深130〜200mほどで研究されています。",
  diet: "羽毛状の腕でプランクトンや微細な有機物を濾し取ります。",
  features: "長い節のある茎と、その上の萼から伸びる多数の羽毛状の腕を持ちます。",
  behavior: "腕を広げて餌を取り、刺激や環境変化に応じて海底をゆっくり移動することもあります。",
  reproduction: "卵や精子を海中へ放出しますが、地域ごとの繁殖期は十分に分かっていません。",
  identification: "日本近海には似た種類がいるため、茎節や腕などの形で識別します。",
  nameOrigin: "細長い茎と上部の姿を鳥の脚に見立てたことから「トリノアシ」と呼ばれます。",
  humanRelation: "古生代から続くウミユリ類の姿を現代に残す動物として、進化や深海生物研究で重要です。",
  observationPoint: "植物の茎のような部分を見て、細かな節が連続していることを確認してください。",
  references: [
    "BISMaL: Metacrinus rotundus トリノアシ",
    "Metacrinus rotundus locomotion studies",
    "Suruga Bay stalked crinoid research"
  ]
},

{
  id: "sp0296",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカザエビ",
  scientificName: "Metanephrops japonicus",
  englishName: "Japanese lobster",
  classification: ["節足動物門", "軟甲綱", "十脚目", "アカザエビ科", "アカザエビ属"],
  category: "甲殻類",
  image: "images/sp0296.jpg",
  trivia: [
    {
      title: "泥底に穴を掘って暮らす",
      text: "深い海の泥底に巣穴を作り、その周辺を生活場所にします。"
    },
    {
      title: "日本を代表する高級深海エビ",
      text: "大型で身に甘みがあり、底びき網などで漁獲される高級食材です。"
    }
  ],
  bodyLength: "全長20cm前後まで成長し、20cmを超える個体も記録されています。",
  distribution: "日本近海に分布し、銚子沖から日向灘周辺など太平洋岸を中心に知られています。",
  habitat: "主に水深200〜400mほどの泥底に巣穴を作って暮らします。",
  diet: "小型甲殻類、多毛類、軟体動物などを捕食すると考えられています。",
  features: "赤橙色の体と細長く発達した第1胸脚のはさみを持ち、はさみの先端は白っぽくなります。",
  behavior: "泥底の巣穴を拠点とし、単独で行動することが多いとされています。",
  reproduction: "メスは腹肢に受精卵を付けて抱卵し、成熟や繁殖時期には地域差があります。",
  identification: "赤い体、細長い大型のはさみ、白っぽいはさみの先端が特徴です。",
  nameOrigin: "鮮やかな赤色の体を持つ大型エビであることが名前に表れています。",
  humanRelation: "刺身、寿司、焼き物などに利用される高級食用エビです。",
  observationPoint: "体より長く見える第1胸脚と、その先にある細長いはさみに注目してください。",
  references: [
    "BISMaL: Metanephrops japonicus",
    "名古屋港水族館：アカザエビ",
    "静岡県水産・海洋技術研究所：アカザエビ"
  ]
},

{
  id: "sp0297",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロゲンゲ",
  scientificName: "Lycodes nakamurae",
  englishName: "Nakamura's eelpout",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ゲンゲ科", "マユガジ属"],
  category: "魚類",
  image: "images/sp0297.jpg",
  trivia: [
    {
      title: "古い資料では学名の綴りが違うことがある",
      text: "古い資料では Lycodes nakamurai とする例がありますが、現在の受理名は Lycodes nakamurae です。"
    },
    {
      title: "水深700mを超える場所にも",
      text: "水深140〜765mから記録され、冷たい深場に暮らします。"
    }
  ],
  bodyLength: "最大で標準体長約27.5cm。",
  distribution: "日本海、オホーツク海など北西太平洋の冷水域から知られています。",
  habitat: "水深140〜765mほどの海底付近に生息します。",
  diet: "本種だけを対象とした詳しい食性資料が限られているため、特定の餌は分かっていません。",
  features: "暗褐色から黒褐色の細長い体を持ち、背びれと尻びれは尾部まで長く続きます。",
  behavior: "深海の海底付近で暮らしますが、本種固有の詳しい行動は十分に分かっていません。",
  reproduction: "本種固有の繁殖様式や産卵時期については、十分な情報がありません。",
  identification: "頭部の形や体の比率、鰭条、脊椎骨数などを組み合わせて近縁種と識別します。",
  nameOrigin: "暗色から黒褐色の体を持つゲンゲ類であることが名前に表れています。",
  humanRelation: "底びき網で採集されることがありますが、主要な食用魚ではありません。",
  observationPoint: "背びれ・尾びれ・尻びれの境界が分かりにくいほど連続した細長い体形に注目してください。",
  references: [
    "BISMaL: Lycodes nakamurae クロゲンゲ",
    "FishBase: Lycodes nakamurae",
    "Eschmeyer's Catalog of Fishes"
  ]
},

{
  id: "sp0298",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オオグソクムシ",
  scientificName: "Bathynomus doederleini",
  englishName: "Giant isopod",
  classification: ["節足動物門", "軟甲綱", "等脚目", "スナホリムシ科", "オオグソクムシ属"],
  category: "甲殻類",
  image: "images/sp0298.jpg",
  trivia: [
    {
      title: "ダンゴムシと同じ等脚目",
      text: "深海に暮らす大型種ですが、ダンゴムシやフナムシと同じ等脚目の甲殻類です。"
    },
    {
      title: "深海の『掃除屋』",
      text: "海底へ沈んだ魚などの死骸を食べ、深海底の有機物を処理する役割があります。"
    }
  ],
  bodyLength: "一般に体長10〜15cmほどになります。",
  distribution: "日本では駿河湾以南などの深い海から知られています。",
  habitat: "主に水深200〜650mほどの砂泥底に生息し、さらに深い場所からの記録もあります。",
  diet: "魚などの死骸をよく食べますが、ほかの動物質も利用する雑食性です。",
  features: "やや平たい体を硬い背板が覆い、7対の歩脚と大きな複眼を持ちます。",
  behavior: "海底を歩いて餌を探し、死骸などへ集まる、餌の少ない深海に適応した動物です。",
  reproduction: "メスは卵を腹側の育児嚢で守り、等脚類としては大型の卵を産みます。",
  identification: "近縁のダイオウグソクムシ類より小型で、日本近海で一般に展示されるオオグソクムシは Bathynomus doederleini です。",
  nameOrigin: "陸上のグソクムシ類に似ながら大型になることから「オオグソクムシ」と呼ばれます。",
  humanRelation: "深海生物として知名度が高く、水族館でも人気のある甲殻類です。",
  observationPoint: "背中の硬い体節だけでなく、腹側に並ぶ7対の歩脚にも注目してください。",
  references: [
    "BISMaL: Bathynomus doederleini",
    "アクアマリンふくしま：オオグソクムシ",
    "Bathynomus taxonomic studies"
  ]
},

{
  id: "sp0299",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キホウボウ",
  scientificName: "Peristedion orientale",
  englishName: "Armoured gurnard",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キホウボウ科", "キホウボウ属"],
  category: "魚類",
  image: "images/sp0299.jpg",
  trivia: [
    {
      title: "全身が硬い骨板のよろい",
      text: "普通の鱗ではなく、体全体を硬い骨質板が覆っています。"
    },
    {
      title: "胸びれの一部で海底を探る",
      text: "胸びれの下には指のような独立した鰭条があり、海底に触れながら餌を探します。"
    }
  ],
  bodyLength: "最大で全長約19cm。",
  distribution: "南日本、東シナ海、黄海など北西太平洋に分布します。",
  habitat: "水深120〜500mほどの大陸棚から大陸斜面の海底に生息します。",
  diet: "海底の小型動物を食べますが、本種だけの詳しい食性資料は限られています。",
  features: "体全体が骨板で覆われ、頭部には前方へ伸びる突起があり、胸びれ下側には独立した鰭条があります。",
  behavior: "海底近くを移動し、胸びれ下部の遊離鰭条を底へ触れさせながら餌を探します。",
  reproduction: "本種固有の産卵時期や繁殖行動については、十分な情報がありません。",
  identification: "硬い骨板、頭部の突起、独立した胸びれ鰭条が特徴です。",
  nameOrigin: "ホウボウ類に似た姿を持つ魚ですが、詳しい和名の由来は分かっていません。",
  humanRelation: "底びき網などで採集されることがありますが、主要な食用魚ではありません。",
  observationPoint: "胸びれの下を見て、ひれから分かれた指のような鰭条を探してください。",
  references: [
    "BISMaL: Peristedion orientale キホウボウ",
    "FishBase: Peristedion orientale",
    "Eschmeyer's Catalog of Fishes"
  ]
},

{
  id: "sp0300",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ドブカスベ",
  scientificName: "Bathyraja smirnovi",
  englishName: "Golden skate",
  classification: ["脊索動物門", "軟骨魚綱", "ガンギエイ目", "ソコガンギエイ科", "ソコガンギエイ属"],
  category: "魚類",
  image: "images/sp0300.jpg",
  trivia: [
    {
      title: "1000mの深さまで記録",
      text: "水深100〜1000mから記録される、冷たい深場に暮らすカスベです。"
    },
    {
      title: "大きな卵殻を産む",
      text: "四隅に角状突起のある硬い卵殻を産み、卵殻は長さ12cmを超えることがあります。"
    }
  ],
  bodyLength: "最大で全長1mを超え、資料によっては約116cmの記録があります。",
  distribution: "日本海、オホーツク海、千島列島周辺など北西太平洋に分布します。",
  habitat: "水深100〜1000mほどの海底に生息します。",
  diet: "ヨコエビ類、エビ・カニ類、魚、オキアミ、イカなどを捕食します。",
  features: "ひし形に近い体盤と細長い尾を持ち、背側は黄褐色から褐色になります。",
  behavior: "深い海底に体を密着させ、底生動物や魚を捕食します。",
  reproduction: "卵生で、四隅に角状突起を持つ硬い卵殻を産みます。",
  identification: "体盤の形、吻、棘、腹面の特徴などを組み合わせて近縁種と識別します。",
  nameOrigin: "「カスベ」はエイ類の地方名ですが、「ドブ」の確実な由来は分かっていません。",
  humanRelation: "地域によって底びき網などで漁獲されます。",
  observationPoint: "体盤の形だけでなく、細長い尾や背側に並ぶ棘にも注目してください。",
  references: [
    "FishBase: Bathyraja smirnovi",
    "BISMaL: Bathyraja smirnovi",
    "Misawa et al. 2020: Bathyraja smirnovi"
  ]
},

{
  id: "sp0301",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タカアシガニ",
  scientificName: "Macrocheira kaempferi",
  englishName: "Japanese spider crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "Macrocheiridae", "タカアシガニ属"],
  category: "甲殻類",
  image: "images/sp0301.jpg",
  trivia: [
    {
      title: "脚を広げた幅は世界最大級",
      text: "大型のオスでは脚を広げた幅が3mを大きく超え、現生節足動物で最大級です。"
    },
    {
      title: "国内資料と最新分類で科が違う",
      text: "BISMaLなどではクモガニ科Inachidaeですが、国際的な分類ではMacrocheiridaeとする体系もあり、この図鑑では後者を採用しています。"
    }
  ],
  bodyLength: "甲幅は大型個体で30cmを超え、脚を左右へ広げると3m以上になることがあります。",
  distribution: "日本近海に分布し、相模湾、駿河湾、紀伊半島沖などからよく知られています。",
  habitat: "主に水深50〜600mほどに生息し、繁殖期には比較的浅い場所へ移動することがあります。",
  diet: "貝類、甲殻類、海底の動物や死骸などを食べる雑食性です。",
  features: "小さめの甲に対して非常に長い歩脚を持ち、大型オスでは鉗脚も著しく長くなります。",
  behavior: "長い脚で海底をゆっくり歩いて餌を探し、季節によって利用する水深が変わります。",
  reproduction: "メスは多数の卵を腹部に抱え、孵化した幼生は浮遊生活の後に海底生活へ移ります。",
  identification: "非常に長い脚と丸みのある甲が特徴で、成体は他種と見間違えにくい姿です。",
  nameOrigin: "非常に長く高く伸びる脚から「高脚蟹＝タカアシガニ」と呼ばれます。",
  humanRelation: "一部地域では食用になり、世界最大級の節足動物として水族館でも人気があります。",
  observationPoint: "脚の長さを甲の大きさと比べ、体の大部分を脚が占めることに注目してください。",
  references: [
    "WoRMS / DecaNet: Macrocheira kaempferi",
    "BISMaL: Macrocheira kaempferi タカアシガニ",
    "タカアシガニ生態・漁業資料"
  ]
},

{
  id: "sp0302",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ナヌカザメ",
  scientificName: "Cephaloscyllium umbratile",
  englishName: "Blotchy swell shark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "トラザメ科", "ナヌカザメ属"],
  category: "魚類",
  image: "images/sp0302.jpg",
  trivia: [
    {
      title: "危険を感じると風船のように膨らむ",
      text: "胃に大量の海水や空気を取り込み、体を膨らませて岩の隙間から引き出されにくくします。"
    },
    {
      title: "卵がふ化するまで約1年",
      text: "2個の卵殻を一度に産むことがあり、孵化まで約1年、孵化仔は全長約16〜22cmです。"
    }
  ],
  bodyLength: "最大で全長約120cm。",
  distribution: "日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",
  habitat: "水深20〜500mほどの岩礁や砂泥底に生息します。",
  diet: "サバ、イワシ、カワハギ類などの魚、小型のサメ・エイ、イカ類などを捕食します。",
  features: "太い胴体と幅広い頭を持ち、背側には褐色の鞍状斑や不規則な斑点があります。",
  behavior: "海底付近で暮らし、危険を感じると胃へ水を取り込んで体を大きく膨らませます。",
  reproduction: "卵生で糸状突起を持つ卵殻を産み、2個を同時に産むことがあります。",
  identification: "3つの幅広い暗色鞍状斑や不規則な斑点、幅広い頭が特徴です。",
  nameOrigin: "「七日鮫」と書かれることがありますが、確実な由来には諸説があります。",
  humanRelation: "人への危険性は低く、水族館では卵からの発生や繁殖も観察されています。",
  observationPoint: "太い胴体に注目してください。展示個体を膨らませるために意図的に刺激してはいけません。",
  references: [
    "FishBase: Cephaloscyllium umbratile",
    "Nakaya et al. 2013. Review of Cephaloscyllium",
    "BISMaL: Cephaloscyllium umbratile"
  ]
},

{
  id: "sp0303",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オオクチイシナギ",
  scientificName: "Stereolepis doederleini",
  englishName: "Striped giant seabass",
  classification: ["脊索動物門", "条鰭綱", "Acropomatiformes", "Stereolepididae", "イシナギ属"],
  category: "魚類",
  image: "images/sp0303.jpg",
  trivia: [
    {
      title: "2m・80kgを超える巨大魚",
      text: "最大全長200cm、最大体重約85kgの記録がある、日本近海の巨大魚です。"
    },
    {
      title: "肝臓は絶対に食べてはいけない",
      text: "肝臓には高濃度のビタミンAが含まれ、中毒の危険があるため、日本では1960年から食用禁止です。"
    }
  ],
  bodyLength: "最大で全長約200cm、体重約85kgの記録があります。",
  distribution: "北海道から南日本、朝鮮半島、ロシア極東、台湾周辺など北西太平洋に分布します。",
  habitat: "大型成魚は主に深い岩礁域に生息し、水深400〜600mが示されていますが、より浅い記録もあります。",
  diet: "大型の肉食魚ですが、本種固有の詳しい食性資料は限られています。",
  features: "非常に大型で頑丈な体と大きな口を持ち、若魚では体側の淡色の縞が目立ちます。",
  behavior: "深い岩礁周辺で暮らし、産卵期には通常より浅い場所へ移動することがあります。",
  reproduction: "卵生で、産卵期には比較的浅い場所へ移動しますが、詳しい繁殖行動には不明な点があります。",
  identification: "巨大な体と大きな口、若魚の淡色縞が特徴で、コクチイシナギとは口や体形なども比べます。",
  nameOrigin: "非常に大きな口を持つイシナギ類であることから「オオクチイシナギ」と呼ばれます。",
  humanRelation: "身は食用ですが、肝臓はビタミンA中毒の危険があるため日本では食用禁止です。",
  observationPoint: "口の大きさを頭全体と比べ、若い個体では体側の縞模様にも注目してください。",
  references: [
    "Eschmeyer's Catalog of Fishes 2026: Stereolepis doederleini",
    "FishBase: Stereolepis doederleini",
    "厚生労働省：自然毒のリスクプロファイル 魚類・ビタミンA"
  ]
},

{
  id: "sp0304",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オロシザメ",
  scientificName: "Oxynotus japonicus",
  englishName: "Japanese roughshark",
  classification: ["脊索動物門", "軟骨魚綱", "ツノザメ目", "オロシザメ科", "オロシザメ属"],
  category: "魚類",
  image: "images/sp0304.jpg",
  trivia: [
    {
      title: "現地メモの「オシロザメ」は「オロシザメ」",
      text: "八景島保管の相模湾・江の島沖産標本も2024年にオロシザメと再確認され、この図鑑では現地メモの誤記を正式和名へ修正しています。"
    },
    {
      title: "体はサメとは思えないほど背が高い",
      text: "胴体が非常に高く太く、2基の大きな帆状の背びれを持ちます。"
    }
  ],
  bodyLength: "確認されている大型個体は全長約64.5cmで、2024年に調べられた相模湾・駿河湾産7個体は約51〜63cmでした。",
  distribution: "日本から台湾周辺に分布し、相模湾と駿河湾では複数の確実な記録があります。",
  habitat: "主に水深150〜400mの急傾斜した深海底付近に生息します。",
  diet: "本種の詳しい野外食性資料は限られているため、近縁種の食性をそのまま当てはめません。",
  features: "非常に体高の高い暗褐色の体と棘のある2基の大きな背びれを持ち、皮膚は大きな楯鱗でざらつき、臀びれはありません。",
  behavior: "深海底近くをゆっくり泳ぐ底生性のサメです。",
  reproduction: "胎生で胚は卵黄を利用して成長しますが、妊娠期間など詳しい生活史は分かっていません。",
  identification: "極端に高い体高、大きな2基の背びれ、非常にざらついた皮膚が特徴です。",
  nameOrigin: "ざらざらした体表がおろし金を思わせることが和名に関係すると考えられています。",
  humanRelation: "記録の少ない深海ザメで、IUCNではVulnerableとされ、底びき網などの混獲が懸念されています。",
  observationPoint: "LABO7では標本展示です。普通のサメと比べた体高と、2基の大きな背びれに注目してください。",
  references: [
    "加登岡・瀬能 2024：相模湾・駿河湾産オロシザメの記録",
    "神奈川県立生命の星・地球博物館：オロシザメ",
    "FishBase: Oxynotus japonicus"
  ]
},

{
  id: "sp0305",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヨロイザメ",
  scientificName: "Dalatias licha",
  englishName: "Kitefin shark",
  classification: ["脊索動物門", "軟骨魚綱", "ツノザメ目", "ヨロイザメ科", "ヨロイザメ属"],
  category: "魚類",
  image: "images/sp0305.jpg",
  trivia: [
    {
      title: "世界最大級の発光する脊椎動物",
      text: "腹側の小さな発光器から青緑色に光り、1mを超える個体も発光する世界最大級の発光脊椎動物です。"
    },
    {
      title: "深海1,000mより下まで潜る",
      text: "水深37〜1800mから記録され、通常は数百mの大陸棚斜面などで見られます。"
    }
  ],
  bodyLength: "最大で全長約182cm。",
  distribution: "大西洋・インド洋・太平洋・地中海など、世界の温帯から熱帯海域に広く分布します。",
  habitat: "大陸棚外縁から大陸斜面に生息し、水深37〜1800mから記録されています。",
  diet: "魚、小型のサメ、甲殻類、頭足類などを捕食します。",
  features: "太く暗褐色の体を持ち、2基の背びれに棘はなく、下あごには大きな三角形の歯が並びます。",
  behavior: "深海を泳ぎながら捕食し、腹側の発光は下方から見た影を消すカウンターイルミネーションに関係すると考えられています。",
  reproduction: "無胎盤性の胎生で、胚は卵黄を利用して成長し、複数の子を母体内で育てます。",
  identification: "暗色で太い体、ほぼ同程度の2基の背びれ、大きな下あごの歯が特徴です。",
  nameOrigin: "「ヨロイザメ」の詳しい命名由来は、今回確認した資料では分かっていません。",
  humanRelation: "一部地域では肝油や肉が利用され、深海漁業で混獲されることがあり、IUCNではVulnerableです。",
  observationPoint: "LABO7では標本展示です。大きな下あごの歯と、背びれに目立つ棘がない点を見てください。",
  references: [
    "FishBase: Dalatias licha",
    "WoRMS: Dalatias licha",
    "Claes et al. 2021: Bioluminescence of deep-sea sharks"
  ]
},

{
  id: "sp0306",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "エドアブラザメ",
  scientificName: "Heptranchias perlo",
  englishName: "Sharpnose sevengill shark",
  classification: ["脊索動物門", "軟骨魚綱", "カグラザメ目", "カグラザメ科", "エドアブラザメ属"],
  category: "魚類",
  image: "images/sp0306.jpg",
  trivia: [
    {
      title: "普通のサメより鰓孔が2つ多い",
      text: "多くのサメは5対ですが、エドアブラザメは7対の鰓孔を持ちます。"
    },
    {
      title: "背びれは1つだけ",
      text: "一般的なサメと違って背びれは1基だけで、7対の鰓孔とともに特徴的です。"
    }
  ],
  bodyLength: "最大で全長約137〜140cmで、一般的には1m前後です。",
  distribution: "北東太平洋を除く世界の温帯・熱帯海域に広く分布し、日本近海にも生息します。",
  habitat: "通常は水深180〜450mほどに生息しますが、浅場から水深1000mまで記録されています。",
  diet: "小型のサメ・エイ、硬骨魚、エビ・カニ類、イカ・コウイカ類などを捕食します。",
  features: "細長い体、大きな眼、尖った吻、7対の鰓孔を持ち、背びれは体の後方に1基だけあります。",
  behavior: "深海性ですが比較的活発に泳ぎ、魚や頭足類などを捕食します。",
  reproduction: "胎生で、1回に約9〜20尾を産み、出生時は全長約25cmです。",
  identification: "7対の鰓孔と背びれ1基の組み合わせで、一般的なサメと見分けられます。",
  nameOrigin: "標準和名の詳しい由来は、今回確認した資料では分かっていません。",
  humanRelation: "一部で漁獲され肝油などに利用され、IUCNではNear Threatenedとされています。",
  observationPoint: "LABO7では標本展示です。頭の横に並ぶ鰓孔を実際に7つ数えてみてください。",
  references: [
    "FishBase: Heptranchias perlo",
    "BISMaL: Heptranchias perlo",
    "FAO Sharks of the World"
  ]
},

{
  id: "sp0307",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミツクリザメ",
  scientificName: "Mitsukurina owstoni",
  englishName: "Goblin shark",
  classification: ["脊索動物門", "軟骨魚綱", "ネズミザメ目", "ミツクリザメ科", "ミツクリザメ属"],
  category: "魚類",
  image: "images/sp0307.jpg",
  trivia: [
    {
      title: "あごが一瞬で前へ飛び出す",
      text: "普段は頭の下にある上下のあごを高速で前へ突き出し、獲物を捕らえます。"
    },
    {
      title: "学名には日本と横浜の歴史が残る",
      text: "Mitsukurina は箕作佳吉、owstoni は横浜在住の標本収集家Alan Owstonに由来します。"
    }
  ],
  bodyLength: "一般には全長2〜3mほどですが、FishBaseには最大617cmの記録があります。",
  distribution: "世界各地から散発的に記録され、日本では特に相模湾周辺から多く報告されています。",
  habitat: "水深30〜1300mから記録され、通常は大陸棚外縁から大陸斜面の数百mの深場で見られます。",
  diet: "魚、イカ・タコ類、甲殻類などを捕食します。",
  features: "長く平たい吻、小さな眼、大きく突き出せる顎を持ち、生きている時は血管が透けて淡い桃色に見えます。",
  behavior: "深海を比較的ゆっくり泳ぎ、獲物が近づくと顎を急激に突出させて捕らえます。",
  reproduction: "胎生とされ、近縁種のように母体内で未受精卵を栄養にする可能性がありますが、直接観察例は非常に少ないです。",
  identification: "長く平たい吻と、前方へ大きく飛び出せる顎が特徴です。",
  nameOrigin: "属名と標準和名は、日本の動物学者・箕作佳吉に由来します。",
  humanRelation: "人との接触はほとんどなく、珍しい外見から世界的に有名な深海ザメです。",
  observationPoint: "LABO7では標本展示です。長い吻だけでなく、顎が前へ飛び出せる構造にも注目してください。",
  references: [
    "FishBase: Mitsukurina owstoni",
    "BISMaL: Mitsukurina owstoni",
    "Nakaya et al.: Feeding mechanism of the goblin shark"
  ]
},

{
  id: "sp0308",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ラブカ",
  scientificName: "Chlamydoselachus anguineus",
  englishName: "Frilled shark",
  classification: ["脊索動物門", "軟骨魚綱", "カグラザメ目", "ラブカ科", "ラブカ属"],
  category: "魚類",
  image: "images/sp0308.jpg",
  trivia: [
    {
      title: "鰓孔が6対ある",
      text: "一般的なサメの5対ではなく6対の鰓孔を持ち、最前部の鰓膜は喉の下でつながります。"
    },
    {
      title: "『生きた化石』と呼ばれることもある",
      text: "独特な体形から「生きた化石」と紹介されますが、現生種が古代から全く変化していないという意味ではありません。"
    }
  ],
  bodyLength: "最大で全長約200cm。",
  distribution: "世界各地に点在し、日本、ニュージーランド、東太平洋、東大西洋などで記録されています。",
  habitat: "深海性で、通常は水深120〜1280mほどに生息します。",
  diet: "イカ類を中心に、魚や小型のサメなども捕食します。",
  features: "ウナギ状の細長い体、6対の鰓孔、三叉する細長い歯を持ち、背びれは体の後方に1基あります。",
  behavior: "深海を泳ぎ、柔軟な体と多数の鋭い歯でイカなどを捕らえます。",
  reproduction: "無胎盤性の胎生で胚は卵黄を利用し、妊娠期間は非常に長い可能性がありますが正確な期間は不明です。",
  identification: "ウナギ状の体と6対の鰓孔が特徴です。",
  nameOrigin: "「ラブカ」の正確な語源には諸説があるため、この図鑑では断定しません。",
  humanRelation: "通常は深海に暮らすため人への危険性はほとんどなく、代表的な深海ザメとして研究・展示されます。",
  observationPoint: "LABO7では標本展示です。6対の鰓孔と、1本が三つ叉状になった歯を観察してください。",
  references: [
    "FishBase: Chlamydoselachus anguineus",
    "BISMaL: Chlamydoselachus anguineus"
  ]
},

{
  id: "sp0309",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "チゴダラ",
  scientificName: "Physiculus japonicus",
  englishName: "Japanese codling",
  classification: ["脊索動物門", "条鰭綱", "タラ目", "チゴダラ科", "チゴダラ属"],
  category: "魚類",
  image: "images/sp0309.jpg",
  trivia: [
    {
      title: "お腹に発光器がある",
      text: "腹側には発光器があり、左右の腹びれの付け根を結ぶ位置より後ろにあります。"
    },
    {
      title: "昔の学名表記も残っている",
      text: "古い資料には Physiculus japonica や、エゾイソアイナメとして扱われた Physiculus maximowiczi も見られますが、現在は Physiculus japonicus が受理名です。"
    }
  ],
  bodyLength: "最大で全長約35cm。",
  distribution: "日本の太平洋岸・日本海、東シナ海などから知られています。",
  habitat: "大陸棚から大陸棚斜面上部の、水深150〜880mほどに生息します。",
  diet: "小型甲殻類や魚など、海底付近の動物を捕食します。",
  features: "細長い体、下あごの1本のひげ、腹側の発光器が特徴で、背びれは2基あります。",
  behavior: "深い海底近くで暮らし、小動物を探して捕食します。",
  reproduction: "本種固有の産卵時期や繁殖行動については、十分な情報がありません。",
  identification: "下あごのひげと、腹部にある発光器の位置が重要な識別点です。",
  nameOrigin: "標準和名の詳しい由来は、今回確認した資料では分かっていません。",
  humanRelation: "底びき網などで漁獲され、地域によって食用になります。",
  observationPoint: "下あごのひげを見つけた後、腹側にある発光器にも注目してください。",
  references: [
    "BISMaL: Physiculus japonicus チゴダラ",
    "FishBase: Physiculus japonicus"
  ]
},

{
  id: "sp0310",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キダイ",
  scientificName: "Dentex hypselosomus",
  englishName: "Yellowback sea-bream",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "タイ科", "キダイ属"],
  category: "魚類",
  image: "images/sp0310.jpg",
  trivia: [
    {
      title: "昔のDentex tumifronsは現在は異名",
      text: "古い図鑑では Dentex tumifrons が使われましたが、現在は Dentex hypselosomus が受理名です。"
    },
    {
      title: "市場では『レンコダイ』でもおなじみ",
      text: "市場や釣りではレンコダイとも呼ばれ、祝い事や焼き物などに利用されます。"
    }
  ],
  bodyLength: "最大標準体長約30.8cmで、全長では30cmを超えることがあります。",
  distribution: "南日本、朝鮮半島南部、中国沿岸、台湾西岸など北西太平洋に分布します。",
  habitat: "主に水深50〜200mの海底近くに生息します。",
  diet: "甲殻類やゴカイ類など、海底の小型動物を食べます。",
  features: "背側は赤く、吻や背側には鮮やかな黄色・金色の斑紋があります。",
  behavior: "海底近くで群れを作ることがあり、小型の底生動物を探して移動します。",
  reproduction: "繁殖時期には資料差があるため、特定の月には限定できません。",
  identification: "赤い体に加え、吻や背びれ付近の鮮やかな黄色斑が特徴です。",
  nameOrigin: "体に黄色味の強い部分を持つタイ類であることが名前に表れています。",
  humanRelation: "レンコダイの名でも流通し、塩焼き、干物、酢締めなどに利用されます。",
  observationPoint: "赤い体だけでなく、吻や背中の黄色い部分を探してください。",
  references: [
    "BISMaL: Dentex hypselosomus キダイ",
    "WoRMS: Dentex hypselosomus",
    "FishBase: Dentex hypselosomus"
  ]
},

{
  id: "sp0311",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ムツ",
  scientificName: "Scombrops boops",
  englishName: "Gnomefish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ムツ科", "ムツ属"],
  category: "魚類",
  image: "images/sp0311.jpg",
  trivia: [
    {
      title: "子どもと大人で暮らす深さが違う",
      text: "若魚は沿岸の浅場に現れますが、成長すると深い岩礁へ移動します。"
    },
    {
      title: "成魚は黒く、幼魚は銀色",
      text: "若魚は銀色が強く、成魚になると全体が黒褐色になり、見た目が大きく変わります。"
    }
  ],
  bodyLength: "大型では全長1mを超え、最大約150cmの記録があります。",
  distribution: "日本、朝鮮半島、中国周辺など北西太平洋に分布します。",
  habitat: "幼魚は浅場、成魚は沖合の深い岩礁を利用し、日本周辺では水深20〜600mを超える記録があります。",
  diet: "魚、甲殻類、イカ類などを捕食します。",
  features: "成魚は黒褐色で大きな眼と口を持ち、尾びれは深く二叉しています。",
  behavior: "成長すると深場の岩礁周辺で暮らし、魚やイカを追って捕食します。",
  reproduction: "FishBaseでは10月から3月ごろに産卵することが記録されています。",
  identification: "黒っぽい体、大きな眼と口、深く二叉した尾びれが特徴です。",
  nameOrigin: "「ムツ」の詳しい語源には複数の説があるため、この図鑑では断定しません。",
  humanRelation: "脂のある白身を持つ高級食用魚で、煮付け、刺身、焼き物などに利用されます。",
  observationPoint: "大きな眼と口を見て、深場で獲物を捕らえる肉食魚らしい顔つきに注目してください。",
  references: [
    "BISMaL: Scombrops boops ムツ",
    "FishBase: Scombrops boops"
  ]
},

{
  id: "sp0312",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "イズカサゴ",
  scientificName: "Scorpaena neglecta",
  englishName: "Izu scorpionfish",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "フサカサゴ科", "フサカサゴ属"],
  category: "魚類",
  image: "images/sp0312.jpg",
  trivia: [
    {
      title: "釣りでは『オニカサゴ』と呼ばれることも",
      text: "釣りや市場ではオニカサゴとも呼ばれますが、標準和名「オニカサゴ」は別種です。"
    },
    {
      title: "海底に溶け込む待ち伏せ型",
      text: "赤褐色の模様と皮弁で海底へ溶け込み、近づいた小魚や甲殻類を待ち伏せします。"
    }
  ],
  bodyLength: "最大で全長約40cm。",
  distribution: "本州中部から九州、東シナ海などに分布します。",
  habitat: "比較的深い砂礫底や岩礁周辺に生息し、水深80m前後から数百mの記録があります。",
  diet: "小魚や甲殻類などを捕食します。",
  features: "大きな頭と赤色から赤褐色の体を持ち、複雑な斑紋や皮弁があり、背びれなどには鋭い棘があります。",
  behavior: "海底でほとんど動かず、体色を利用して獲物を待ち伏せします。",
  reproduction: "本種固有の繁殖期については、十分な情報がありません。",
  identification: "胸びれ腋部の皮弁、胸びれ軟条数、頭部の棘などで近縁種と識別します。",
  nameOrigin: "伊豆を含む本州中部周辺で知られたカサゴ類ですが、詳しい命名経緯は分かっていません。",
  humanRelation: "高級食用魚として刺身、鍋、煮付けなどに利用されますが、野外では鋭い棘に注意が必要です。",
  observationPoint: "海底の色と魚の模様を見比べ、どれほど背景に溶け込んでいるか観察してください。",
  references: [
    "神奈川県立生命の星・地球博物館：Scorpaena neglecta",
    "FishPix: Scorpaena neglecta",
    "日本大百科全書：イズカサゴ"
  ]
},

{
  id: "sp0313",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ユメカサゴ",
  scientificName: "Helicolenus hilgendorfii",
  englishName: "Hilgendorf's rosefish",
  classification: ["脊索動物門", "条鰭綱", "カサゴ目", "メバル科", "ユメカサゴ属"],
  category: "魚類",
  image: "images/sp0313.jpg",
  trivia: [
    {
      title: "『卵胎生』だと思われていたが覆った",
      text: "以前は卵胎生と考えられましたが、2014年にゼラチン質に包まれた卵塊を産むことが確認されました。"
    },
    {
      title: "大きくなるまで10年以上",
      text: "25cmを超えるまで10年以上かかると考えられる、成長の遅い深海魚です。"
    }
  ],
  bodyLength: "大型では全長約60cmになる記録があります。",
  distribution: "日本海、東シナ海、日本の太平洋沿岸、伊豆諸島などに分布します。",
  habitat: "水深約130〜980mの砂泥底などに生息し、150〜200mほどでよく見られます。",
  diet: "甲殻類、ゴカイ、小型のイカ、魚などを食べ、大型個体ほど魚を多く利用する傾向があります。",
  features: "赤色から橙赤色の体と大きな眼を持ち、口の中が黒く見えるためノドグロカサゴとも呼ばれます。",
  behavior: "深い海底近くで暮らし、小型動物や魚を捕食します。",
  reproduction: "冬を中心にゼラチン質の卵塊を産み、孵化した仔魚は40日以上浮遊した後に海底生活へ移ります。",
  identification: "赤い体、大きな眼、黒く見える口の中が特徴です。",
  nameOrigin: "標準和名の詳しい由来は、今回確認した資料では分かっていません。",
  humanRelation: "底びき網や釣りで漁獲され、煮付けや塩焼きなどに利用されます。",
  observationPoint: "口が開いたとき、赤い体とは対照的な口の中の黒色に注目してください。",
  references: [
    "BISMaL: Helicolenus hilgendorfii ユメカサゴ",
    "Honda釣り倶楽部：ユメカサゴ"
  ]
},

{
  id: "sp0314",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "メダイ",
  scientificName: "Hyperoglyphe japonica",
  englishName: "Pacific barrelfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "イボダイ科", "メダイ属"],
  category: "魚類",
  image: "images/sp0314.jpg",
  trivia: [
    {
      title: "幼魚は流れ藻や浮遊物につく",
      text: "幼魚は流れ藻など海面近くの浮遊物を利用し、成長すると水深100m以上の深場へ移ります。"
    },
    {
      title: "成魚は夜に浅い場所まで上がる",
      text: "成魚は通常深場にいますが、夜には餌を求めて上層や浅場へ移動することがあります。"
    }
  ],
  bodyLength: "最大で全長約90cm。",
  distribution: "北海道南部から東シナ海までの北西太平洋に分布します。",
  habitat: "成魚は主に水深150〜400mほどの深場を利用します。",
  diet: "幼魚は動物プランクトンを食べ、成魚は魚やイカなどを捕食します。",
  features: "成魚は灰黒色から黒褐色で、体高と厚みがあり、大きな眼と粘液の多い体表を持ちます。",
  behavior: "成長とともに表層から深場へ移り、成魚は昼夜で利用する水深を変えることがあります。",
  reproduction: "本種固有の詳しい産卵行動については、十分な情報がありません。",
  identification: "大きな眼、暗色で厚みのある体、背びれ前方の棘が特徴です。",
  nameOrigin: "大きく目立つ眼が標準和名に関係すると考えられます。",
  humanRelation: "日本では重要な食用魚で、刺身、西京焼き、煮付けなどに利用されます。",
  observationPoint: "幼魚と成魚で暮らす場所が大きく変わる魚です。大きな眼と厚みのある体に注目してください。",
  references: [
    "BISMaL: Hyperoglyphe japonica メダイ",
    "水産研究・教育機構 JAMARC：メダイ",
    "FishBase: Hyperoglyphe japonica"
  ]
},
{
  id: "sp0315",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ツボダイ",
  scientificName: "Pentaceros japonicus",
  englishName: "Japanese armorhead",
  classification: ["脊索動物門", "条鰭綱", "Acropomatiformes", "ツボダイ科", "ツボダイ属"],
  category: "魚類",
  image: "images/sp0315.jpg",
  trivia: [
    {
      title: "幼魚は海中を漂い、成魚は海底へ",
      text: "幼魚は外洋を漂って暮らし、成長すると海底付近へ生活場所を移します。"
    },
    {
      title: "『鎧魚』の仲間",
      text: "英名Japanese armorheadの通り、頭部の骨や鱗が硬く頑丈な体をしています。"
    }
  ],
  bodyLength: "最大で全長約25cm。",
  distribution: "南日本からオーストラリア、ニュージーランド周辺まで西太平洋に分布します。",
  habitat: "成魚は水深100〜830mほどの海底付近に生息します。",
  diet: "本種固有の詳しい食性資料は限られているため、特定の餌には限定できません。",
  features: "体高が高く左右に平たい体と、硬い頭部、強い背びれ棘を持ちます。",
  behavior: "幼魚は海中を漂い、成長すると深い海底付近へ移ります。",
  reproduction: "本種固有の繁殖時期や産卵生態については、十分な情報がありません。",
  identification: "非常に体高の高い体、硬い頭部、強く発達した背びれ棘が特徴です。",
  nameOrigin: "標準和名「ツボダイ」の詳しい由来は、今回確認した資料では分かっていません。",
  humanRelation: "脂の乗った白身を持ち、干物や焼き魚などに利用される食用魚です。",
  observationPoint: "頭部と背びれの棘を見て、英名armorheadの通り頑丈な体つきに注目してください。",
  references: [
    "FishBase: Pentaceros japonicus",
    "BISMaL: Pentaceros japonicus"
  ]
},

{
  id: "sp0316",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ハシキンメ",
  scientificName: "Gephyroberyx japonicus",
  englishName: "Big roughy",
  classification: ["脊索動物門", "条鰭綱", "Trachichthyiformes", "ヒウチダイ科", "ハシキンメ属"],
  category: "魚類",
  image: "images/sp0316.jpg",
  trivia: [
    {
      title: "昔はTrachichthys japonicus",
      text: "原記載ではTrachichthys japonicusでしたが、現在WoRMSではGephyroberyx japonicusが受理名です。"
    },
    {
      title: "体の大きさに対して口が大きい",
      text: "深海で餌を逃さず捕らえられるよう、大きく開く口を持ちます。"
    }
  ],
  bodyLength: "FishBaseでは最大標準体長約20cmで、全長30cm前後になる個体も知られています。",
  distribution: "主に日本周辺の北西太平洋から知られています。",
  habitat: "深海性で、水深320〜660mから記録されています。",
  diet: "深海の小魚や甲殻類などを捕食すると考えられています。",
  features: "赤色系の体、大きな眼と口、硬くざらついた鱗を持ちます。",
  behavior: "深い海底近くで暮らす底生・底層性の魚です。",
  reproduction: "本種固有の詳しい繁殖生態については、十分な情報がありません。",
  identification: "大きな眼と口、赤い体、ざらざらした体表が特徴です。",
  nameOrigin: "標準和名の詳しい由来は、今回確認した資料では分かっていません。",
  humanRelation: "底びき網などで混獲されることがありますが、主要な水産対象魚ではありません。",
  observationPoint: "眼と口を頭全体と比べ、どちらも大きく発達していることに注目してください。",
  references: [
    "WoRMS: Gephyroberyx japonicus",
    "FishBase: Gephyroberyx japonicus"
  ]
},

{
  id: "sp0317",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒゲツノザメ",
  scientificName: "Cirrhigaleus barbifer",
  englishName: "Mandarin dogfish",
  classification: ["脊索動物門", "軟骨魚綱", "ツノザメ目", "ツノザメ科", "ヒゲツノザメ属"],
  category: "魚類",
  image: "images/sp0317.jpg",
  trivia: [
    {
      title: "鼻から巨大な『ひげ』が伸びる",
      text: "左右の鼻孔から非常に長い皮弁が伸び、本種を見分ける大きな特徴です。"
    },
    {
      title: "肝臓にはスクアレンが多い",
      text: "商業利用は多くありませんが、肝臓にはスクアレンを比較的多く含むことが報告されています。"
    }
  ],
  bodyLength: "最大で全長約126cm。",
  distribution: "西太平洋に分布し、日本の本州南東部、オーストラリア、ニュージーランド、バヌアツ周辺などから知られています。",
  habitat: "水深140〜650mほどの大陸棚外縁・大陸斜面上部に生息します。",
  diet: "海底付近の魚類や無脊椎動物などを捕食します。",
  features: "鼻孔から伸びる長いひげ状皮弁と、2基の背びれ前方の棘が特徴で、臀びれはありません。",
  behavior: "深い海底付近を泳ぎながら魚類や底生動物を探します。",
  reproduction: "胎生で、1腹10尾ほどの仔を産んだ記録があります。",
  identification: "鼻先から伸びる非常に長いひげ状皮弁が、最も分かりやすい特徴です。",
  nameOrigin: "鼻先に大きなひげ状構造を持つツノザメであることが、そのまま和名に表れています。",
  humanRelation: "漁業対象としての重要性は低いですが、独特な鼻ひげを持つ深海ザメとして研究されています。",
  observationPoint: "LABO7では標本展示です。鼻先を見て、左右から伸びる長いひげ状の皮弁を探してください。",
  references: [
    "WoRMS: Cirrhigaleus barbifer",
    "FishBase: Cirrhigaleus barbifer",
    "Taiwan Fish Database: Cirrhigaleus barbifer"
  ]
},

{
  id: "sp0318",
  areaIds: ["labo7"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "フトツノザメ",
  scientificName: "Squalus mitsukurii",
  englishName: "Shortspine spurdog",
  classification: ["脊索動物門", "軟骨魚綱", "ツノザメ目", "ツノザメ科", "ツノザメ属"],
  category: "魚類",
  image: "images/sp0318.jpg",
  trivia: [
    {
      title: "背びれの前に2本の毒棘状の棘",
      text: "2基の背びれそれぞれの前に強い棘があり、ツノザメ類らしい特徴になっています。"
    },
    {
      title: "『世界中にいる』記録には注意が必要",
      text: "世界各地から記録されていますが、複数種を含むspecies complexの可能性があり、広域の記録には注意が必要です。"
    }
  ],
  bodyLength: "最大でオス約89.8cm、メス約94.3cm。",
  distribution: "日本・朝鮮半島・中国など北西太平洋を含む世界各地から報告されていますが、広域の記録には近縁種が混在する可能性があります。",
  habitat: "水深29〜600mほどの海底付近に生息します。",
  diet: "魚類、イカなどの頭足類、甲殻類を捕食します。",
  features: "比較的太い体を持ち、2基の背びれの前方に棘があり、臀びれはありません。",
  behavior: "海底近くを泳ぎながら魚類や頭足類を捕食します。",
  reproduction: "胎生で、1腹4〜9尾ほどの仔を産む記録があります。",
  identification: "背びれ棘の長さや体形、ひれの位置などで識別し、体色だけでは判断しません。",
  nameOrigin: "比較的太い体形を持つツノザメ類であることが和名に表れています。",
  humanRelation: "深海漁業で混獲され、日本では準絶滅危惧、IUCNではEndangeredと評価されています。",
  observationPoint: "LABO7では標本展示です。2基の背びれそれぞれの前に棘があることを確認してください。",
  references: [
    "BISMaL: Squalus mitsukurii フトツノザメ",
    "FishBase: Squalus mitsukurii"
  ]
},

{
  id: "sp0319",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キンメモドキ",
  scientificName: "Parapriacanthus ransonneti",
  englishName: "Golden sweeper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタンポ科", "キンメモドキ属"],
  category: "魚類",
  image: "images/sp0319.jpg",
  trivia: [
    {
      title: "光るためのタンパク質を『餌から盗む』",
      text: "発光するウミホタル類などからルシフェラーゼを取り込んで再利用し、2026年には全ゲノム解析からこの「盗タンパク質」を支持する研究も公表されました。"
    },
    {
      title: "洞窟で数万匹の巨大な群れになる",
      text: "昼は洞窟や岩陰に密集し、ときには数万匹の群れを作り、夜になると外へ出て餌を食べます。"
    }
  ],
  bodyLength: "最大で全長約12cmで、水族館では6〜7cm前後の個体もよく見られます。",
  distribution: "日本を含む西太平洋の暖海域に分布します。",
  habitat: "水深3〜30mほどのサンゴ礁・岩礁に生息し、昼は洞窟や岩棚の下に大群で集まります。",
  diet: "夜に甲殻類幼生やゴカイ類の幼生など、動物プランクトンを捕食します。",
  features: "透明感のある銀色から金色の小型魚で、大きな眼と腹側の発光に利用する器官を持ちます。",
  behavior: "夜行性で、昼は岩陰で密集し、夜になると広がってプランクトンを捕食します。",
  reproduction: "本種固有の詳しい繁殖期や産卵行動については、十分な情報がありません。",
  identification: "透明感のある銀色の体、大きな眼、非常に密集した群れが特徴です。",
  nameOrigin: "金色・銀色に輝く大きな眼を持ちますが、詳しい和名の由来は分かっていません。",
  humanRelation: "2026年に餌由来の発光タンパク質を利用する仕組みがゲノム研究でも示され、生物発光研究で注目されています。",
  observationPoint: "まず群れ全体を見て、その後1匹の腹側に弱い発光が見られないか観察してください。",
  references: [
    "BISMaL: Parapriacanthus ransonneti キンメモドキ",
    "FishBase: Parapriacanthus ransonneti",
    "沖縄美ら海水族館 2026：盗んだタンパク質で光るキンメモドキ"
  ]
},

{
  id: "sp0320",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "テングダイ",
  scientificName: "Evistias acutirostris",
  englishName: "Striped boarfish",
  classification: ["脊索動物門", "条鰭綱", "Acropomatiformes", "ツボダイ科", "テングダイ属"],
  category: "魚類",
  image: "images/sp0320.jpg",
  trivia: [
    {
      title: "あごの下に小さなひげがある",
      text: "下あごには短いひげ状構造があり、海底の小動物を探すときに使います。"
    },
    {
      title: "最大90cmになる",
      text: "水族館では50cm前後の個体も見られますが、最大では全長90cmになります。"
    }
  ],
  bodyLength: "最大で全長約90cm。",
  distribution: "日本太平洋岸、ハワイ諸島、オーストラリア、ニュージーランド周辺など太平洋に分布します。",
  habitat: "岩礁や砂地周辺に生息し、水深18〜193mほどから記録されています。",
  diet: "クモヒトデ類など、海底の小型無脊椎動物を食べます。",
  features: "非常に体高が高く、白っぽい体に太い黒色帯が入り、ひれは黄色く、吻は前方へ尖ります。",
  behavior: "単独、ペア、小さな群れで泳ぎ、海底へ吻を近づけて餌を探します。",
  reproduction: "本種固有の繁殖時期や産卵行動については、十分な情報がありません。",
  identification: "高い体高、太い黒色帯、黄色いひれ、尖った吻が特徴です。",
  nameOrigin: "前方へ突き出した吻を、天狗の長い鼻に見立てた名前です。",
  humanRelation: "大型で特徴的な縞模様を持ち、水族館やダイビングで人気があります。",
  observationPoint: "大きな縞模様を見た後、下あごにある短いひげ状構造も探してください。",
  references: [
    "WoRMS: Evistias acutirostris",
    "FishBase: Evistias acutirostris",
    "東京ズーネット：テングダイ"
  ]
},

{
  id: "sp0321",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロホシイシモチ",
  scientificName: "Ostorhinchus notatus",
  englishName: "Spotnape cardinalfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "テンジクダイ科", "Ostorhinchus属"],
  category: "魚類",
  image: "images/sp0321.jpg",
  trivia: [
    {
      title: "卵を守るのはオスの口の中",
      text: "オスが卵塊を口にくわえて孵化まで守り、日本では主に6〜9月が繁殖期です。"
    },
    {
      title: "オスはときどき卵を食べる",
      text: "口内保育中のオスが一部の卵を食べ、卵量の調節や自身のエネルギー補給を行うと考えられています。"
    }
  ],
  bodyLength: "最大で全長約10cm前後。",
  distribution: "日本を含む西太平洋の温帯から暖海域に分布します。",
  habitat: "沿岸の岩礁やサンゴ礁周辺で群れを作ります。",
  diet: "動物プランクトンや小型甲殻類などを捕食します。",
  features: "吻から眼へ伸びる黒帯、後頭部の黒斑、尾びれ基部の黒斑が特徴です。",
  behavior: "昼は岩礁周辺で大きな群れを作り、夜になると餌を求めて活動します。",
  reproduction: "日本では6〜9月ごろが繁殖期で、ペアで産卵し、受精卵をオスが口内保育します。",
  identification: "後頭部と尾びれ基部の黒斑、眼を通る黒帯が特徴です。",
  nameOrigin: "体に目立つ黒い斑点を持つイシモチ類であることが名前に表れています。",
  humanRelation: "主要な食用魚ではありませんが、大きな群れとオスの口内保育を観察できます。",
  observationPoint: "繁殖期には口元を見て、卵を保育して口がふくらんだオスがいないか探してください。",
  references: [
    "BISMaL: Ostorhinchus notatus クロホシイシモチ",
    "FishBase: Ostorhinchus notatus",
    "Kume et al.: Mouthbrooding and egg cannibalism in Ostorhinchus notatus"
  ]
},

{
  id: "sp0322",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "シラコダイ",
  scientificName: "Chaetodon nippon",
  englishName: "Japanese butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "ニザダイ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0322.jpg",
  trivia: [
    {
      title: "幼魚だけに眼状斑がある",
      text: "幼魚では背びれ後方に黒い眼状斑がありますが、成長すると消えます。"
    },
    {
      title: "複数のオスと1匹のメスで産卵することも",
      text: "水槽では、夜に1匹のメスを複数のオスが追い、水中へ泳ぎ上がって産卵する行動が観察されています。"
    }
  ],
  bodyLength: "最大で全長約15cm。",
  distribution: "日本、朝鮮半島、台湾、フィリピン周辺など北西太平洋に分布します。",
  habitat: "沿岸の岩礁やサンゴ礁に生息し、主に水深5〜30mほどで見られます。",
  diet: "岩礁周辺の小型無脊椎動物などをついばんで食べます。",
  features: "淡い黄褐色の体の後半に幅広い暗色帯があり、幼魚では背びれ後部付近に眼状斑があります。",
  behavior: "単独、ペア、小群で岩礁を泳ぎ、日本沿岸の比較的温帯の海にも生息します。",
  reproduction: "水槽では水温23℃以上の夜に産卵し、1匹のメスと複数オスで放卵・放精します。卵は直径約0.7mmの浮遊卵です。",
  identification: "淡い黄褐色の体と後半の太い暗色帯が特徴で、幼魚では背びれ付近の眼状斑も確認します。",
  nameOrigin: "標準和名「シラコダイ」の詳しい由来は、今回確認した資料では分かっていません。",
  humanRelation: "日本沿岸で比較的観察しやすいチョウチョウウオで、水族館やダイビングでも親しまれます。",
  observationPoint: "若い個体では背びれ後方を見て、黒い眼状斑があるか確認してください。",
  references: [
    "BISMaL: Chaetodon nippon シラコダイ",
    "FishBase: Chaetodon nippon",
    "Suzuki et al. 1980: Spawning behavior, eggs and larvae of Chaetodon nippon"
  ]
},

{
  id: "sp0323",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サラワクスウェルシャーク",
  scientificName: "Cephaloscyllium sarawakensis",
  englishName: "Sarawak swellshark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "トラザメ科", "ナヌカザメ属"],
  category: "魚類",
  image: "images/sp0323.jpg",
  trivia: [
    {
      title: "卵の殻がガラスのように透明",
      text: "卵殻が非常に透明で、八景島でも2026年に産卵された透明な卵がLABO8で展示されました。"
    },
    {
      title: "サメで新しく発見された繁殖方法",
      text: "左右の輸卵管に卵を1個ずつ長く保持して胚を成長させてから産む「持続的単卵生（sustained single oviparity）」が2020年に報告されました。"
    }
  ],
  bodyLength: "最大で全長約40cmで、ナヌカザメ属では小型の種類です。",
  distribution: "南シナ海周辺に分布し、マレーシア、ブルネイ、台湾周辺などから知られています。",
  habitat: "主に水深100〜200m前後の大陸棚外縁に生息し、研究標本では118〜165mから記録されています。",
  diet: "本種単独の詳しい食性研究は限られているため、特定の餌は分かっていません。",
  features: "小型でずんぐりした体に暗色の鞍状斑があり、危険時には胃へ水や空気を入れて腹部を膨らませます。",
  behavior: "外敵に襲われると体を膨らませ、岩の隙間から引き出されにくくします。",
  reproduction: "卵生ですが、卵を母体内へ長期間保持し、発達した胚が入った大型の透明卵殻を産みます。",
  identification: "小型のナヌカザメ類で、暗色斑の配置や体形を確認し、正確な同定には近縁種との比較が必要です。",
  nameOrigin: "サラワク地域にちなむ名称と、体を膨らませるswellsharkという英名を組み合わせた展示名です。",
  humanRelation: "八景島では2026年に産卵・孵化が確認され、珍しい繁殖生態を直接観察できる展示となっています。",
  observationPoint: "卵が展示されていれば、透明な卵殻越しに胚や大きな卵黄を観察してみてください。",
  references: [
    "横浜・八景島シーパラダイス 2026：サラワクスウェルシャークの卵 展示開始",
    "Nakaya et al. 2020. Discovery of a new mode of oviparous reproduction in sharks",
    "Shark-References: Cephaloscyllium sarawakensis"
  ]
},

{
  id: "sp0324",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ドチザメ",
  scientificName: "Triakis scyllium",
  englishName: "Banded houndshark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "ドチザメ科", "ドチザメ属"],
  category: "魚類",
  image: "images/sp0324.jpg",
  trivia: [
    {
      title: "浅い湾やアマモ場にも入る",
      text: "内湾、河口、砂地、アマモ場など、人の身近な浅い海もよく利用します。"
    },
    {
      title: "卵ではなく赤ちゃんを産む",
      text: "無胎盤性の胎生で、胚は卵黄を栄養に育ち、1回に10〜20尾ほどを産む記録があります。"
    }
  ],
  bodyLength: "最大で全長約150cm。",
  distribution: "ロシア極東、日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",
  habitat: "沿岸の浅い砂底・岩礁・湾内・河口・アマモ場などを利用します。",
  diet: "小魚やエビ・カニなどの甲殻類、その他の底生動物を捕食します。",
  features: "細長い灰褐色の体を持ち、若魚には暗色帯があり、腹側の口には中央と両側に尖った部分を持つ歯があります。",
  behavior: "海底付近をゆっくり泳ぎ、複数個体が同じ場所で休むこともあります。",
  reproduction: "無胎盤性の胎生で、胚は卵黄を使って成長し、1腹10〜20尾とされています。",
  identification: "細長い体、若魚の帯模様、2基の背びれの位置などを確認します。",
  nameOrigin: "標準和名の詳しい語源は、今回確認した資料では分かっていません。",
  humanRelation: "沿岸漁業で漁獲されることがありますが、一般に人へ積極的に危害を加えるサメではありません。",
  observationPoint: "海底近くを泳ぐとき、体の腹側にある口の位置に注目してください。",
  references: [
    "BISMaL: Triakis scyllium",
    "FishBase: Triakis scyllium"
  ]
},

{
  id: "sp0325",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "カスザメ",
  scientificName: "Squatina japonica",
  englishName: "Japanese angelshark",
  classification: ["脊索動物門", "軟骨魚綱", "カスザメ目", "カスザメ科", "カスザメ属"],
  category: "魚類",
  image: "images/sp0325.jpg",
  trivia: [
    {
      title: "エイのように見えて実はサメ",
      text: "平たい体と大きな胸びれでエイのように見えますが、鰓孔が頭の側面に開くサメです。"
    },
    {
      title: "砂の中から一気に襲う",
      text: "砂へ体を隠し、近くを通る魚などへ一気に飛びつく待ち伏せ型の捕食者です。"
    }
  ],
  bodyLength: "最大で全長約200cm。",
  distribution: "日本、朝鮮半島、中国沿岸など北西太平洋に分布します。",
  habitat: "沿岸から大陸棚の砂底・砂泥底に生息します。",
  diet: "魚類や甲殻類など、海底付近の動物を捕食します。",
  features: "頭と胴が強く平たく、大きな胸びれが左右へ広がり、背側には海底へ溶け込む褐色の斑紋があります。",
  behavior: "砂へ体を埋めて眼と呼吸孔だけを出し、獲物が近づくと大きな口で素早く捕食します。",
  reproduction: "無胎盤性の胎生で、母体内の胚は卵黄を利用して成長します。",
  identification: "エイのような姿ですが、胸びれと頭部が完全にはつながらず、鰓孔が頭の側面にあります。",
  nameOrigin: "標準和名の詳しい語源は、今回確認した資料では分かっていません。",
  humanRelation: "食用になることがありますが、FishBase掲載のIUCN評価ではCritically Endangeredとされています。",
  observationPoint: "平たい体を正面から見た後、エイとの違いである頭部側面の鰓孔を探してください。",
  references: [
    "WoRMS: Squatina japonica",
    "FishBase: Squatina japonica"
  ]
},

{
  id: "sp0326",
  areaIds: ["labo8"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "シロワニ",
  scientificName: "Carcharias taurus",
  englishName: "Sand tiger shark",
  classification: ["脊索動物門", "軟骨魚綱", "ネズミザメ目", "オオワニザメ科", "シロワニ属"],
  category: "魚類",
  image: "images/sp0326.jpg",
  trivia: [
    {
      title: "お腹の中で兄弟を食べる",
      text: "最も早く成長した胚が同じ子宮内の小さな胚を食べる「子宮内共食い」を行い、通常は左右の子宮から1尾ずつ、計2尾ほどが生まれます。"
    },
    {
      title: "見た目ほど攻撃的ではない",
      text: "鋭い歯が常に見えますが、通常はゆっくり泳ぐサメです。ただし大型の野生動物なので不用意に近づくべきではありません。"
    }
  ],
  bodyLength: "最大で全長約330cm。",
  distribution: "大西洋、インド洋、西太平洋などの温帯から亜熱帯に分布し、日本では小笠原諸島などで知られます。",
  habitat: "沿岸の砂底、岩礁、洞窟、沈船周辺などに生息します。",
  diet: "魚類、エイ類、小型のサメ、イカ類、甲殻類などを捕食します。",
  features: "太い体と大きな口を持ち、口を閉じても細長い歯が外へ突き出し、2基の背びれは大きさが比較的近くなります。",
  behavior: "海底付近をゆっくり泳ぎ、洞窟や岩礁周辺に集まることがあります。",
  reproduction: "無胎盤性胎生で卵食と子宮内共食いを行い、生まれる仔が少ないため繁殖力は非常に低い種類です。",
  identification: "口から常に見える細長い歯と、大きさが比較的近い2基の背びれが特徴です。",
  nameOrigin: "「ワニ」は大型で鋭い歯を持つ姿に関係すると考えられますが、詳しい命名経緯は分かっていません。",
  humanRelation: "繁殖力が低く個体数減少が深刻で、日本では環境省レッドリストで絶滅危惧種として扱われています。",
  observationPoint: "鋭い歯だけでなく、その印象とは対照的なゆっくりとした泳ぎ方にも注目してください。",
  references: [
    "BISMaL: Carcharias taurus シロワニ",
    "FishBase: Carcharias taurus"
  ]
},

{
  id: "sp0327",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "カンパナウリクラゲ",
  scientificName: "Beroe campana",
  englishName: "Campana beroid comb jelly",
  classification: ["有櫛動物門", "無触手綱", "ウリクラゲ目", "ウリクラゲ科", "ウリクラゲ属"],
  category: "有櫛動物",
  image: "images/sp0327.jpg",
  trivia: [
    {
      title: "刺す『クラゲ』ではない",
      text: "刺胞を持たないクシクラゲの仲間で、体表の8列の櫛板を動かして泳ぎます。"
    },
    {
      title: "ほかのクシクラゲを丸のみ",
      text: "触手を持たず、大きな口を開いてカブトクラゲなど他のクシクラゲを飲み込みます。"
    }
  ],
  bodyLength: "数cmほどになり、柔らかな体は伸縮するため大きさが変化します。",
  distribution: "日本沿岸から知られ、高知県宿毛湾では冬から春に観察されています。",
  habitat: "沿岸から外洋の海中を漂って生活します。",
  diet: "主に他のクシクラゲ類を捕食します。",
  features: "押しつぶした瓜のような半透明の体に8列の櫛板があり、触手はありません。",
  behavior: "櫛板を順番に動かして泳ぎ、獲物のクシクラゲへ近づくと大きな口で飲み込みます。",
  reproduction: "配偶子を水中へ放出して繁殖しますが、地域ごとの詳しい繁殖期は分かっていません。",
  identification: "カブトクラゲと違って大きな葉状突起や触手がなく、袋・瓜状の体をしています。",
  nameOrigin: "種小名campanaは「鐘」を意味し、独特の体形に関係します。",
  humanRelation: "刺胞動物とは異なるクシクラゲの体の仕組みを観察できる展示生物です。",
  observationPoint: "虹色に見える8列の櫛板を探してください。これは発光ではなく、光の回折で見える色です。",
  references: [
    "黒潮生物研究所：Beroe campana カンパナウリクラゲ",
    "WoRMS: Beroe campana"
  ]
},

{
  id: "sp0328",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "カブトクラゲ",
  scientificName: "Bolinopsis mikado",
  englishName: "Mikado comb jelly",
  classification: ["有櫛動物門", "有触手綱", "カブトクラゲ目", "カブトクラゲ科", "カブトクラゲ属"],
  category: "有櫛動物",
  image: "images/sp0328.jpg",
  trivia: [
    {
      title: "虹色でも発光しているわけではない",
      text: "8列の櫛板に光が当たって回折することで虹色に見え、自ら虹色に発光しているわけではありません。"
    },
    {
      title: "刺胞を持たない",
      text: "刺胞動物ではないため刺胞を持たず、小さな時期には粘着性の細胞を持つ触手を使います。"
    }
  ],
  bodyLength: "体長5〜10cmほど。",
  distribution: "日本沿岸に広く見られます。",
  habitat: "沿岸の表層から水中を漂い、海況によって大量に見られることがあります。",
  diet: "動物プランクトンや小型の浮遊生物を食べます。",
  features: "兜のような丸みのある透明な体と、左右へ張り出す大きな葉状部分を持ち、8列の櫛板が虹色に見えます。",
  behavior: "櫛板の繊毛を波打つように動かしてゆっくり泳ぎます。",
  reproduction: "雌雄同体で卵と精子を海中へ放出し、水族館でも繁殖飼育されています。",
  identification: "兜のような体形と大きな葉状突起が特徴で、ウリクラゲ類とは体形が大きく異なります。",
  nameOrigin: "体の輪郭が武士の兜を思わせることからカブトクラゲと呼ばれます。",
  humanRelation: "飼育・繁殖が比較的行いやすく、水族館で代表的なクシクラゲです。",
  observationPoint: "櫛板を見て、虹色の光が移動するように見える様子を観察してください。",
  references: [
    "BISMaL: Bolinopsis mikado カブトクラゲ",
    "黒潮生物研究所：カブトクラゲ",
    "すみだ水族館：カブトクラゲ"
  ]
},

{
  id: "sp0329",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タコクラゲ",
  scientificName: "Mastigias papua",
  englishName: "Spotted jellyfish",
  classification: ["刺胞動物門", "鉢虫綱", "根口クラゲ目", "タコクラゲ科", "タコクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0329.jpg",
  trivia: [
    {
      title: "体の中で藻類と共同生活",
      text: "体内に褐虫藻を共生させ、その光合成産物の一部を利用するため、明るい場所で過ごすことが重要です。"
    },
    {
      title: "タコのように8本",
      text: "傘の下に8本の太い口腕があり、タコの脚のように見えることが和名の由来です。"
    }
  ],
  bodyLength: "傘径5〜20cmほどになります。",
  distribution: "日本を含むインド・西太平洋の暖海域に分布します。",
  habitat: "暖かい沿岸の表層や湾、礁湖などに生息します。",
  diet: "動物プランクトンを捕食するほか、共生する褐虫藻の光合成産物も利用します。",
  features: "丸く厚い傘に白い斑点があり、その下には8本の太い口腕と棒状の付属器があります。",
  behavior: "傘を一定のリズムで動かして泳ぎ、共生藻が光合成できる明るい水中を利用します。",
  reproduction: "成体が配偶子を放出し、プラヌラ、ポリプを経て、ポリプからエフィラが放出されクラゲへ成長します。",
  identification: "丸い傘の白色斑点と、タコの脚のような8本の太い口腕が特徴です。",
  nameOrigin: "8本の太い口腕をタコの脚に見立てた名前です。",
  humanRelation: "色彩と泳ぎ方が美しく、水族館で人気の高いクラゲです。",
  observationPoint: "口腕だけでなく体色にも注目し、褐虫藻の量などによる褐色の濃さを見てください。",
  references: [
    "BISMaL: Mastigias papua タコクラゲ",
    "長崎ペンギン水族館：タコクラゲ"
  ]
},

{
  id: "sp0330",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカクラゲ",
  scientificName: "Chrysaora pacifica",
  englishName: "Japanese sea nettle",
  classification: ["刺胞動物門", "鉢虫綱", "旗口クラゲ目", "オキクラゲ科", "ヤナギクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0330.jpg",
  trivia: [
    {
      title: "傘には16本の赤褐色線",
      text: "半透明の傘に16本の赤褐色の放射状模様があり、多数の長い触手が伸びます。"
    },
    {
      title: "乾燥しても刺胞は残る",
      text: "刺胞毒が強く、乾燥した個体にも刺胞が残ることがあり、粉末化した残骸が刺激になるため「ハクションクラゲ」と呼ばれることもあります。"
    }
  ],
  bodyLength: "傘径10〜20cmほどで、触手は2mを超えることがあります。",
  distribution: "北海道以南の日本近海など北西太平洋に分布します。",
  habitat: "沿岸から沖合の表中層を漂い、春から夏に多く見られます。",
  diet: "動物プランクトン、小魚、甲殻類のほか、ミズクラゲなど他のクラゲも捕食します。",
  features: "傘に16本の赤褐色線が放射状に走り、傘の縁から多数の長い触手が伸びます。",
  behavior: "傘を拍動させながら漂い、長い触手で獲物を捕らえます。",
  reproduction: "受精卵からプラヌラ、ポリプ、ストロビラ、エフィラを経て成体クラゲになります。",
  identification: "16本の赤褐色線と非常に長い触手が特徴です。",
  nameOrigin: "赤色から赤褐色の体色と傘の縞模様からアカクラゲと呼ばれます。",
  humanRelation: "刺胞毒が強く、海水浴などでは注意が必要ですが、美しい姿から水族館でも人気があります。",
  observationPoint: "傘の赤い線を数えた後、細く長い触手がどこまで伸びているか観察してください。",
  references: [
    "BISMaL: Chrysaora pacifica アカクラゲ",
    "黒潮生物研究所：アカクラゲ"
  ]
},

{
  id: "sp0331",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "インドネシアンシーネットル",
  scientificName: "Chrysaora chinensis",
  englishName: "Indonesian sea nettle",
  classification: ["刺胞動物門", "鉢虫綱", "旗口クラゲ目", "オキクラゲ科", "ヤナギクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0331.jpg",
  trivia: [
    {
      title: "名前にインドネシアとあるが中国周辺にも",
      text: "中国から東南アジア、東部インド洋・西太平洋に分布し、「マレーシアンシーネットル」と呼ばれることもあります。"
    },
    {
      title: "失った口腕を再生できる",
      text: "捕食者などに口腕を失っても、比較的速く再生できることが知られています。"
    }
  ],
  bodyLength: "傘径は平均10cm前後で、大型では20cmを超え、長い口腕・触手を含めるとさらに大きく見えます。",
  distribution: "中国沿岸から東南アジア、東部インド洋・西太平洋の熱帯域に分布します。",
  habitat: "温暖な沿岸の浅い海を中心に生息します。",
  diet: "動物プランクトン、甲殻類、他のクラゲ類などを捕食します。",
  features: "半透明の傘から非常に長く薄い口腕と触手が伸び、白、黄色、桃色など体色には個体差があります。",
  behavior: "長い触手を広げながら漂い、触れた小動物を刺胞で捕らえます。",
  reproduction: "プラヌラ、ポリプ、エフィラを経てクラゲへ成長します。",
  identification: "非常に長い繊細な口腕と多数の触手が特徴で、近縁種とは触手数や傘の形も比べます。",
  nameOrigin: "英名Indonesian sea nettleをカタカナ化した展示名で、Sea nettleは「海のイラクサ」を意味します。",
  humanRelation: "刺胞毒は強く、刺されると強い痛みを生じることがあります。",
  observationPoint: "傘だけでなく、その何倍もの長さに伸びる薄い口腕を追ってみてください。",
  references: [
    "男鹿水族館GAO：インドネシアシーネットル Chrysaora chinensis",
    "Aquarium of the Pacific: Indonesian Sea Nettle",
    "Aungtonya et al. 2022: Chrysaora chinensis"
  ]
},


{
  id: "sp0332",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キタユウレイクラゲ",
  scientificName: "Cyanea capillata",
  englishName: "Lion's mane jellyfish",
  classification: ["刺胞動物門", "鉢虫綱", "旗口クラゲ目", "ユウレイクラゲ科", "ユウレイクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0332.jpg",
  trivia: [
    {
      title: "世界最大級のクラゲ",
      text: "通常でも傘径40〜70cmほどになり、例外的には傘径1.8m以上、触手30m以上の記録があります。"
    },
    {
      title: "英名は『ライオンのたてがみ』",
      text: "大量の細長い触手が束になって伸びる姿がライオンのたてがみに似るため、Lion's mane jellyfishと呼ばれます。"
    }
  ],
  bodyLength: "一般には傘径30〜80cmほどで、非常に大型の個体では1.8mを超える記録があります。",
  distribution: "北太平洋・北大西洋など、北半球の冷たい海域を中心に分布します。",
  habitat: "冷水域の沿岸から外洋の表中層に生息します。",
  diet: "動物プランクトン、魚類の仔稚魚、他のクラゲなどを長い触手で捕食します。",
  features: "黄褐色・赤褐色系の大型の傘と、傘下に密集する多数の細長い触手が特徴です。",
  behavior: "大量の触手を広げ、広い範囲の獲物を捕らえながら漂います。",
  reproduction: "受精卵からプラヌラ、ポリプ、ストロビラ、エフィラを経て成体になります。",
  identification: "ユウレイクラゲより北方・冷水性で、成体は褐色・赤色が強く、非常に大型になります。",
  nameOrigin: "ユウレイクラゲ属の中でも北方の冷水域を中心に分布することが和名に表れています。",
  humanRelation: "長い触手には刺胞があり、刺されると痛みや皮膚症状を生じます。",
  observationPoint: "傘だけでなく、その下に集まる触手の束を見て、ユウレイクラゲとの色の違いも比べてください。",
  references: [
    "BISMaL: Cyanea capillata キタユウレイクラゲ",
    "京都水族館：キタユウレイクラゲ",
    "Smithsonian Ocean: Lion's Mane Jellyfish"
  ]
},

{
  id: "sp0333",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヤナギクラゲ",
  scientificName: "Chrysaora helvola",
  englishName: "Brown sea nettle",
  classification: ["刺胞動物門", "鉢虫綱", "旗口クラゲ目", "オキクラゲ科", "ヤナギクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0333.jpg",
  trivia: [
    {
      title: "細長い触手が柳の枝のよう",
      text: "長く垂れる触手や口腕が水中で揺れる姿が、柳の枝を思わせます。"
    },
    {
      title: "アカクラゲと同じ属",
      text: "アカクラゲやインドネシアンシーネットルと同じChrysaora属で、長い刺胞触手で獲物を捕らえます。"
    }
  ],
  bodyLength: "傘径数cm〜10cm前後になる中小型のクラゲです。",
  distribution: "西太平洋を中心に記録されています。",
  habitat: "沿岸から沖合の海中を漂って生活します。",
  diet: "動物プランクトン、小型甲殻類、その他のゼラチン質プランクトンなどを捕食します。",
  features: "半透明から黄褐色の傘を持ち、傘縁から多数の細長い触手が伸びます。",
  behavior: "長い触手を広げて漂い、刺胞で小動物を捕らえます。",
  reproduction: "プラヌラ、ポリプ、ストロビラ、エフィラを経て成体クラゲになります。",
  identification: "Chrysaora属の他種とは、傘の模様、触手数、傘縁の形などで識別します。",
  nameOrigin: "細長い触手や口腕が柳の枝のように垂れる姿が和名に関係します。",
  humanRelation: "刺胞を持つため、野外では触れないことが重要です。",
  observationPoint: "流れによって触手が柳の枝のように揺れる様子を観察してください。",
  references: [
    "BISMaL: Chrysaora helvola ヤナギクラゲ"
  ]
},

{
  id: "sp0334",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アマクサクラゲ",
  scientificName: "Sanderia malayensis",
  englishName: "Malay jellyfish",
  classification: ["刺胞動物門", "鉢虫綱", "旗口クラゲ目", "オキクラゲ科", "アマクサクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0334.jpg",
  trivia: [
    {
      title: "触手と感覚器が交互に並ぶ",
      text: "傘縁には16本の長い触手と16個の感覚器が交互に並び、全体は32枚の葉状部分に分かれます。"
    },
    {
      title: "天草で多く見られたことが名前に",
      text: "本州中部以南に現れ、九州の天草付近で夏に多く見られることからアマクサクラゲと呼ばれます。"
    }
  ],
  bodyLength: "傘径は通常数cm〜9cmほどです。",
  distribution: "日本を含むインド・西太平洋の熱帯・亜熱帯域に分布します。",
  habitat: "暖海の沿岸から沖合の表中層に生息します。",
  diet: "動物プランクトンや小型動物を刺胞で捕食します。",
  features: "淡い赤紫色から黄褐色の傘を持ち、16本の長い触手と複雑にひだ状になった口腕があります。",
  behavior: "長い触手を広げながら漂い、小動物を捕らえます。",
  reproduction: "受精卵からプラヌラ・ポリプを経てクラゲになり、ポリプでは無性的にも増殖します。",
  identification: "16本の長い触手と、傘縁にある32枚の葉状部分が特徴です。",
  nameOrigin: "熊本県天草周辺でよく知られたことが標準和名の由来です。",
  humanRelation: "刺胞毒が強く、触手に触れると強い痛みを生じることがあります。",
  observationPoint: "傘縁を追い、長い触手と感覚器が交互に並ぶ構造を見てください。",
  references: [
    "BISMaL: Sanderia malayensis アマクサクラゲ",
    "SeaLifeBase: Sanderia malayensis"
  ]
},

{
  id: "sp0335",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ユウレイクラゲ",
  scientificName: "Cyanea nozakii",
  englishName: "Ghost jellyfish",
  classification: ["刺胞動物門", "鉢虫綱", "旗口クラゲ目", "ユウレイクラゲ科", "ユウレイクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0335.jpg",
  trivia: [
    {
      title: "白く巨大な姿が『幽霊』のよう",
      text: "半透明から白色の大きな傘と多数の長い触手・口腕を持ち、漂う姿が幽霊を思わせます。"
    },
    {
      title: "クラゲも食べる大型捕食者",
      text: "動物プランクトンだけでなく、魚の仔稚魚や他のクラゲも捕食します。"
    }
  ],
  bodyLength: "傘径20〜30cmほどが多く、50cm以上になる個体もあります。",
  distribution: "本州中部以南の日本、中国沿岸など北西太平洋に分布します。",
  habitat: "沿岸から沖合の表中層に生息し、日本では夏から秋を中心に見られます。",
  diet: "動物プランクトン、魚類の仔稚魚、他のクラゲなどを捕食します。",
  features: "白色から淡黄色の扁平な大型の傘を持ち、傘縁から多数の糸状触手が伸びます。",
  behavior: "広げた触手で広い範囲の餌を捕らえながら漂います。",
  reproduction: "プラヌラ、ポリプ、ストロビラ、エフィラを経て大型クラゲへ成長します。",
  identification: "キタユウレイクラゲより白・淡色の傘が目立ち、大型では傘径50cmを超えることがあります。",
  nameOrigin: "白く半透明で、長い触手をたなびかせる姿を幽霊に見立てた名前です。",
  humanRelation: "刺胞毒が強く、刺されると強い痛みを生じることがあります。",
  observationPoint: "キタユウレイクラゲもいれば傘の色を比べ、より白っぽい体色に注目してください。",
  references: [
    "BISMaL: Cyanea nozakii ユウレイクラゲ",
    "秋田県水産振興センター：ユウレイクラゲ",
    "鶴岡市立加茂水族館：ユウレイクラゲ"
  ]
},

{
  id: "sp0336",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミズクラゲ",
  scientificName: "Aurelia coerulea",
  englishName: "Moon jelly",
  classification: ["刺胞動物門", "鉢虫綱", "旗口クラゲ目", "ミズクラゲ科", "ミズクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0336.jpg",
  trivia: [
    {
      title: "日本のミズクラゲはAurelia auritaではない",
      text: "以前はAurelia auritaとされましたが、再検討により日本沿岸の一般的なミズクラゲはAurelia coeruleaとされています。"
    },
    {
      title: "四つ葉模様は目ではない",
      text: "傘中央の4つの馬蹄形・四つ葉状の部分は眼ではなく、生殖腺などが透けて見えています。"
    }
  ],
  bodyLength: "一般には傘径10〜30cmほどです。",
  distribution: "日本各地を含む温帯・暖海域に広く分布します。",
  habitat: "湾内・港・沿岸の表層などに生息し、条件がそろうと大量発生します。",
  diet: "動物プランクトン、魚卵や仔魚などの小型生物を触手と口腕で捕らえます。",
  features: "ほぼ透明な円盤状の傘を持ち、中央に4個の馬蹄形の生殖腺が透けて見えます。",
  behavior: "傘をゆっくり拍動させながら漂い、傘縁の短い触手で餌を捕らえます。",
  reproduction: "有性生殖後、プラヌラが海底へ付着してポリプになり、ストロビレーションでエフィラを放出します。",
  identification: "4個の馬蹄形生殖腺と、透明な円形の傘が最大の特徴です。",
  nameOrigin: "水のように透明な体を持つことが和名に関係するとされています。",
  humanRelation: "水族館を代表するクラゲですが、大量発生すると漁業や発電所の取水設備へ影響することがあります。",
  observationPoint: "傘中央の四つ葉状模様を見て、生殖腺の色や形の個体差も比べてください。",
  references: [
    "Scorrano et al.: Revision of Aurelia species",
    "すみだ水族館：Aurelia coerulea ミズクラゲ",
    "鶴岡市立加茂水族館：日本沿岸のミズクラゲの学名再検討"
  ]
},

{
  id: "sp0337",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ギヤマンクラゲ",
  scientificName: "Tima formosa",
  englishName: "Small fringed jellyfish",
  classification: ["刺胞動物門", "ヒドロ虫綱", "軟クラゲ目", "マツバクラゲ科", "ギヤマンクラゲ属"],
  category: "ヒドロ虫類",
  image: "images/sp0337.jpg",
  trivia: [
    {
      title: "ガラス細工のような透明感",
      text: "ほぼ無色透明で、傘の内部に放射管や生殖腺が見える姿がガラス細工を思わせます。"
    },
    {
      title: "湘南でも見られる春のクラゲ",
      text: "神奈川県江の島周辺でも春に記録され、相模湾を代表するヒドロクラゲの一つです。"
    }
  ],
  bodyLength: "傘径5cm前後が多く、文献では10cmほどに達する記録もあります。",
  distribution: "北太平洋・北大西洋の温帯から冷水域に分布し、日本では主に関東以北などで見られます。",
  habitat: "沿岸の表中層を漂い、日本では冬から春を中心に出現します。",
  diet: "動物プランクトンなどの小型生物を触手で捕らえます。",
  features: "非常に透明な傘と長い触手を持ち、体内の放射管や生殖腺まで透けて見えます。",
  behavior: "傘を拍動させながらゆっくり泳ぎます。",
  reproduction: "付着生活するポリプ世代と、自由遊泳するクラゲ世代を持ちます。",
  identification: "透明な傘、中央から放射状に伸びる管、生殖腺、多数の細い触手を確認します。",
  nameOrigin: "「ギヤマン」はガラス製品を指す古い言葉で、透明な姿から名付けられました。",
  humanRelation: "透明感のある美しい姿から水族館で人気があり、神奈川県沿岸でも観察されます。",
  observationPoint: "背景が透けるほど透明な傘を見て、内部の管や生殖腺まで観察してください。",
  references: [
    "BISMaL: Tima formosa ギヤマンクラゲ",
    "名古屋港水族館：ギヤマンクラゲ",
    "神奈川県立生命の星・地球博物館：湘南港周辺のクラゲ相"
  ]
},

{
  id: "sp0338",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒトモシクラゲ",
  scientificName: "Aequorea macrodactyla",
  englishName: "Large-handed aequorea",
  classification: ["刺胞動物門", "ヒドロ虫綱", "軟クラゲ目", "オワンクラゲ科", "オワンクラゲ属"],
  category: "ヒドロ虫類",
  image: "images/sp0338.jpg",
  trivia: [
    {
      title: "紫外線を当てると緑色に光る",
      text: "緑色蛍光タンパク質を持ち、紫外線を当てると傘縁などに緑色の蛍光が見られます。"
    },
    {
      title: "クラゲのまま分裂して増えることも",
      text: "野外ではクラゲ体の分裂による増殖が観察され、栄養状態によって無性生殖と有性生殖を使い分ける可能性があります。"
    }
  ],
  bodyLength: "傘径8cmほどまでになります。",
  distribution: "日本を含む太平洋などの暖温帯海域から知られています。",
  habitat: "沿岸から沖合の表中層を漂って生活します。",
  diet: "小型の動物プランクトンなどを触手で捕らえます。",
  features: "透明な皿状の傘に多数の放射管が伸び、放射管数に対して触手数が少ないことが特徴です。",
  behavior: "傘をゆっくり拍動させながら水中を漂います。",
  reproduction: "有性生殖に加え、クラゲ体の分裂による無性的増殖も観察されています。",
  identification: "多数の放射管に対して触手数が比較的少ないことが、オワンクラゲなどとの識別点です。",
  nameOrigin: "緑色の光を灯しているように見えることが「火灯し」という和名に関係します。",
  humanRelation: "オワンクラゲ類はGFP研究で有名で、本種でも蛍光タンパク質を観察できます。",
  observationPoint: "紫外線照明が使われていれば、傘縁に見える緑色の蛍光に注目してください。",
  references: [
    "BISMaL: Aequorea macrodactyla ヒトモシクラゲ",
    "黒潮生物研究所：ヒトモシクラゲ"
  ]
},

{
  id: "sp0339",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サカサクラゲ",
  scientificName: "Cassiopea ornata",
  englishName: "Upside-down jellyfish",
  classification: ["刺胞動物門", "鉢虫綱", "根口クラゲ目", "サカサクラゲ科", "サカサクラゲ属"],
  category: "鉢虫類",
  image: "images/sp0339.jpg",
  trivia: [
    {
      title: "上下逆さまで暮らす",
      text: "普通のクラゲとは逆に、傘を海底へつけて口腕を上へ向けて生活します。"
    },
    {
      title: "逆さまなのは日光を受けるため",
      text: "体内の褐虫藻が光合成しやすいよう、口腕を太陽光の方向へ向けます。"
    }
  ],
  bodyLength: "傘径10〜20cmほどになる個体が多く見られます。",
  distribution: "日本では九州・琉球列島など暖かい海域を中心に分布します。",
  habitat: "浅い礁湖、マングローブ周辺、砂泥底など、日光の届く穏やかな場所に生息します。",
  diet: "動物プランクトンを捕食するほか、共生する褐虫藻から光合成産物を得ます。",
  features: "平たい傘を海底へ向け、枝分かれした口腕を上へ広げます。",
  behavior: "海底で逆さまの姿勢を保ち、傘を拍動させて周囲へ海水を流します。",
  reproduction: "有性生殖に加え、ポリプ世代では無性的に増殖し、エフィラを形成して成体へ成長します。",
  identification: "海底で傘を下にして逆さまになっている姿が特徴です。",
  nameOrigin: "普通のクラゲとは上下が逆の姿勢で暮らすことからサカサクラゲと呼ばれます。",
  humanRelation: "褐虫藻との共生や独特な姿勢を観察しやすく、水族館でよく展示されます。",
  observationPoint: "口腕を上へ向けている理由を考えながら、照明方向との関係を見てください。",
  references: [
    "BISMaL: Cassiopea ornata サカサクラゲ",
    "KURAGES：サカサクラゲ"
  ]
},

{
  id: "sp0340",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "シロクラゲ",
  scientificName: "Eutonina indicans",
  englishName: "Umbrella jellyfish",
  classification: ["刺胞動物門", "ヒドロ虫綱", "軟クラゲ目", "マツバクラゲ科", "シロクラゲ属"],
  category: "ヒドロ虫類",
  image: "images/sp0340.jpg",
  trivia: [
    {
      title: "4本の白い線が目立つ",
      text: "成熟すると傘中央から4本の白い生殖腺が放射状に伸び、透明な傘の中で目立ちます。"
    },
    {
      title: "光の方向へ一斉に泳ぐ",
      text: "非常に強い正の走光性があり、照明を付けると光の方向へ一斉に泳ぐことがあります。"
    }
  ],
  bodyLength: "傘径1〜4cmほどで、成熟個体では3cm前後になることがあります。",
  distribution: "日本では東北地方以北など、冷たい海域を中心に見られます。",
  habitat: "冷水域の沿岸の表中層に生息し、春に大量発生することがあります。",
  diet: "小型の動物プランクトンを触手で捕食します。",
  features: "透明な丸い傘を持ち、成熟個体では4本の白い生殖腺が放射状に伸びます。",
  behavior: "強い正の走光性があり、多数の個体が光の方向へ泳ぐことがあります。",
  reproduction: "付着生活するポリプを持ち、低水温ではポリプから多数のクラゲが遊離することが飼育下で確認されています。",
  identification: "透明な傘の中央から外側へ伸びる4本の白い生殖腺が最大の特徴です。",
  nameOrigin: "成熟すると目立つ白い生殖腺を持つことが和名に関係します。",
  humanRelation: "小型ですが透明で美しく、水族館では春の冷水性クラゲとして展示されます。",
  observationPoint: "4本の白い線を探し、照明方向が変わる場合は泳ぐ方向にも注目してください。",
  references: [
    "WoRMS: Eutonina indicans",
    "鶴岡市立加茂水族館：シロクラゲ",
    "水産無脊椎動物研究所：Eutonina indicans"
  ]
},

{
  id: "sp0341",
  areaIds: ["labo9"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ベニクラゲ",
  scientificName: "Turritopsis pacifica",
  englishName: "Pacific immortal jellyfish",
  classification: ["刺胞動物門", "ヒドロ虫綱", "花クラゲ目", "ベニクラゲモドキ科", "ベニクラゲ属"],
  category: "ヒドロ虫類",
  image: "images/sp0341.jpg",
  trivia: [
    {
      title: "『若返り』できるクラゲ",
      text: "成熟したクラゲが刺激や老化などをきっかけに組織へ変化し、再びポリプになる「生活環の逆転」を起こすことがあります。"
    },
    {
      title: "昔のTurritopsis nutriculaは日本産には不適切",
      text: "日本産は長くTurritopsis nutriculaとされましたが、再検討で複数種に分かれ、北日本などの「ベニクラゲ」にはTurritopsis pacificaが用いられます。"
    }
  ],
  bodyLength: "傘径・傘高は1cm前後の非常に小型のクラゲです。",
  distribution: "日本では北日本を中心に浅海域から知られています。",
  habitat: "沿岸の浅い海を漂い、ポリプ世代は岩や人工物などへ付着します。",
  diet: "小型の動物プランクトンなどを捕食します。",
  features: "透明な小さな傘を持ち、中央の口柄や生殖腺が赤色を帯びます。",
  behavior: "通常は遊泳しますが、傷害・老化などの条件でクラゲ体が退縮し、ポリプへ戻ることがあります。",
  reproduction: "プラヌラからポリプとなり、ポリプからクラゲが形成されます。さらにクラゲからポリプへ戻る現象も知られます。",
  identification: "日本にはニホンベニクラゲTurritopsis sp.やチチュウカイベニクラゲT. dohrniiも確認され、厳密な識別には形態と遺伝情報が必要です。",
  nameOrigin: "口柄や生殖腺などが紅色に見えることからベニクラゲと呼ばれます。",
  humanRelation: "「不老不死」と呼ばれますが普通に死亡することもあり、正確には特定条件でポリプ段階へ戻れるクラゲです。",
  observationPoint: "中央の赤い部分を探し、ポリプも展示されていればクラゲとの姿の違いを比べてください。",
  references: [
    "黒潮生物研究所：Turritopsis pacifica ベニクラゲ",
    "Miglietta et al. 2007. Molecular evaluation of Turritopsis",
    "井村ほか 2025：相模湾のニホンベニクラゲTurritopsis sp.との分類比較"
  ]
},

{
  id: "sp0342",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "チョウハン",
  scientificName: "Chaetodon lunula",
  englishName: "Raccoon butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0342.jpg",
  trivia: [
    {
      title: "顔の黒い模様がアライグマのよう",
      text: "眼を通る黒帯に加えて額にも黒い模様があり、英名ではRaccoon butterflyfishと呼ばれます。"
    },
    {
      title: "数十匹の群れになることもある",
      text: "ペアだけでなく、場所によっては数十匹ほどの群れで行動することもあります。"
    }
  ],
  bodyLength: "最大で全長約20cm。",
  distribution: "八丈島、小笠原諸島、南日本、琉球列島からインド・太平洋の熱帯・亜熱帯域に広く分布します。",
  habitat: "浅いサンゴ礁や岩礁、礁湖などに生息します。",
  diet: "小型の底生無脊椎動物、サンゴのポリプ、付着藻類などを食べる雑食性です。",
  features: "黄色い体に眼を通る黒帯、額の黒色部、胸びれ上方から背側へ広がる大きな暗色斜帯があります。",
  behavior: "昼に岩礁やサンゴ礁を泳ぎ、表面を細かくついばみます。ペアや小群で見られます。",
  reproduction: "浮遊卵を海中へ放出し、チョウチョウウオ類では繁殖期にペアで産卵する例が知られています。",
  identification: "眼を通る黒帯と、頭部後方から背側へ広がる幅広い黒色帯が特徴です。",
  nameOrigin: "標準和名の詳しい語源は、今回確認した資料では分かっていません。",
  humanRelation: "鮮やかな模様から観賞魚や水族館で人気があり、サンゴ礁を代表する魚の一つです。",
  observationPoint: "横から顔を見て、眼が黒帯に隠れて分かりにくくなっている様子を観察してください。",
  references: [
    "新潟市水族館マリンピア日本海：チョウハン",
    "鳥羽水族館：チョウハン",
    "FishBase: Chaetodon lunula"
  ]
},

{
  id: "sp0343",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "フウライチョウチョウウオ",
  scientificName: "Chaetodon vagabundus",
  englishName: "Vagabond butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0343.jpg",
  trivia: [
    {
      title: "『風来坊』は学名にも関係する",
      text: "種小名vagabundusは「放浪する」を意味し、広く泳ぎ回る姿から和名の「フウライ」にもつながったとされています。"
    },
    {
      title: "幼魚は本州の潮だまりにも現れる",
      text: "夏から秋には黒潮などに乗った幼魚が本州沿岸まで運ばれ、潮だまりで見つかることがあります。"
    }
  ],
  bodyLength: "最大で全長約23cm。",
  distribution: "南日本からインド・西太平洋のサンゴ礁域に広く分布します。",
  habitat: "浅いサンゴ礁、岩礁、礁湖などに生息します。",
  diet: "藻類、サンゴのポリプ、小型甲殻類などを食べる雑食性です。",
  features: "白い体側に2方向の細い黒い斜線が走り、背びれ・尻びれ・尾部には黄色と黒色が入ります。",
  behavior: "成魚はペアで広く泳ぎ回ることが多く、岩礁表面をついばみながら餌を探します。",
  reproduction: "雌雄がペアになって卵と精子を海中へ放出し、卵は浮遊します。",
  identification: "体側で方向が変わる細い斜線と、尾部周辺の黄色・黒色模様が特徴です。",
  nameOrigin: "種小名vagabundusの「放浪する」という意味から、風来坊を連想した和名とされています。",
  humanRelation: "水族館や観賞魚として知られ、南日本では季節来遊魚として磯でも観察されます。",
  observationPoint: "体側の線を追い、前半と後半で斜線の方向が変わることを確認してください。",
  references: [
    "BISMaL: Chaetodon vagabundus",
    "鳥羽水族館：フウライチョウチョウウオ",
    "宇久井ビジターセンター：フウライチョウチョウウオ"
  ]
},

{
  id: "sp0344",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "トゲチョウチョウウオ",
  scientificName: "Chaetodon auriga",
  englishName: "Threadfin butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0344.jpg",
  trivia: [
    {
      title: "成魚は背びれが糸のように伸びる",
      text: "成長すると背びれ後方が糸状に長く伸び、英名Threadfin butterflyfishの由来にもなっています。"
    },
    {
      title: "背びれの黒斑は大人でも残る",
      text: "多くのチョウチョウウオと違い、背びれ後方の黒斑が成魚でも明瞭に残ります。"
    }
  ],
  bodyLength: "最大で全長約23〜25cm。",
  distribution: "南日本からインド・太平洋の熱帯域に非常に広く分布します。",
  habitat: "浅いサンゴ礁、岩礁、礁湖などに生息します。",
  diet: "小型底生動物、サンゴのポリプ、付着藻類などを食べる雑食性です。",
  features: "白い体に多数の斜線が入り、後半は黄色で、背びれ後部には黒斑があり、成魚では背びれ後端が糸状に伸びます。",
  behavior: "単独またはペアでサンゴ礁を泳ぎ、成魚のペアが長期間一緒に行動することもあります。",
  reproduction: "ペアで卵と精子を海中へ放出する浮遊卵型です。",
  identification: "背びれ後方の黒斑、糸状に伸びる背びれ、体側の斜線が特徴です。",
  nameOrigin: "成魚の背びれが細い棘のように長く伸びる姿が和名に表れています。",
  humanRelation: "サンゴ礁性チョウチョウウオとして、水族館や観賞魚市場でよく知られています。",
  observationPoint: "背びれの最後部を見て、成長した個体ほど長くなる糸状部分に注目してください。",
  references: [
    "BISMaL: Chaetodon auriga",
    "鳥羽水族館：トゲチョウチョウウオ",
    "新潟市水族館：トゲチョウチョウウオ"
  ]
},

{
  id: "sp0345",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒレナガヤッコ",
  scientificName: "Genicanthus watanabei",
  englishName: "Watanabe's angelfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キンチャクダイ科", "タテジマヤッコ属"],
  category: "魚類",
  image: "images/sp0345.jpg",
  trivia: [
    {
      title: "オスとメスで模様が大きく違う",
      text: "オスは青色と黒色の横帯、メスは青灰色の体と眼を通る黒帯が目立ち、雌雄で模様が大きく異なります。"
    },
    {
      title: "岩をついばまず中層で餌を食べる",
      text: "多くのキンチャクダイ類と違い、タテジマヤッコ属は中層の動物プランクトンを主に食べます。"
    }
  ],
  bodyLength: "全長15〜18cmほど。",
  distribution: "八丈島、小笠原諸島、屋久島、琉球列島から中・西部太平洋に分布します。",
  habitat: "潮通しの良いやや深い岩礁・サンゴ礁域に生息します。",
  diet: "主に動物プランクトンを捕食します。",
  features: "オスは青色の体に黒い横線、メスは青灰色の体と顔周辺の黒帯が特徴です。",
  behavior: "海底に密着せず、岩礁上の中層を泳ぎながら流れてくるプランクトンを食べます。",
  reproduction: "タテジマヤッコ属では雌性先熟型の性転換が知られ、社会構造の変化で大型メスがオスになることがあります。",
  identification: "オスとメスで模様が大きく異なり、尾びれ上下葉や背びれ・尻びれの模様も識別点です。",
  nameOrigin: "成魚のひれが長く伸びることが標準和名に表れています。",
  humanRelation: "深場性で美しい色彩を持ち、海水観賞魚として人気があります。",
  observationPoint: "複数個体がいれば、オスとメスの模様を比べてください。",
  references: [
    "東京大学総合研究博物館：Genicanthus watanabei",
    "粟国アーカイブス：ヒレナガヤッコ",
    "FishBase: Genicanthus watanabei"
  ]
},

{
  id: "sp0346",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タテジマキンチャクダイ",
  scientificName: "Pomacanthus imperator",
  englishName: "Emperor angelfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キンチャクダイ科", "サザナミヤッコ属"],
  category: "魚類",
  image: "images/sp0346.jpg",
  trivia: [
    {
      title: "子どもと大人で模様が完全に変わる",
      text: "幼魚は濃紺地に白と青の同心円模様、成魚は黄色と青色の横縞となり、見た目が大きく変わります。"
    },
    {
      title: "名前は『縦縞』でも魚では横方向",
      text: "魚では頭から尾へ走る線を「縦縞」と呼ぶため、成魚の黄色と青の線がタテジマと表現されます。"
    }
  ],
  bodyLength: "最大で全長約40cm。",
  distribution: "南日本からインド・太平洋の熱帯サンゴ礁域に広く分布します。",
  habitat: "サンゴ礁や岩礁の洞窟・割れ目が多い場所に生息します。",
  diet: "カイメン類、ホヤ類などの付着性無脊椎動物を中心に食べます。",
  features: "成魚は黄色と青色の細い縞、眼を通る黒帯、青く縁取られた黒い鰓蓋部が特徴で、幼魚は同心円模様です。",
  behavior: "成魚は一定の岩礁域を利用し、岩面をついばみながら餌を取ります。",
  reproduction: "繁殖時には雌雄が水中へ上昇しながら放卵・放精し、浮遊卵を産みます。",
  identification: "幼魚と成魚で模様が完全に異なるため、成長段階ごとの模様が重要です。",
  nameOrigin: "成魚の体側に多数並ぶ縦方向の縞模様から名付けられています。",
  humanRelation: "世界的に人気の高い大型海水観賞魚で、水族館でも代表的なサンゴ礁魚です。",
  observationPoint: "若い個体がいれば成魚と比べ、成長途中で円模様と縞模様が混ざる様子にも注目してください。",
  references: [
    "黒潮生物研究所：タテジマキンチャクダイ",
    "BISMaL: Pomacanthus imperator",
    "FishBase: Pomacanthus imperator"
  ]
},

{
  id: "sp0347",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サザナミヤッコ",
  scientificName: "Pomacanthus semicirculatus",
  englishName: "Semicircle angelfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "キンチャクダイ科", "サザナミヤッコ属"],
  category: "魚類",
  image: "images/sp0347.jpg",
  trivia: [
    {
      title: "幼魚の波模様が名前の由来",
      text: "幼魚は濃紺の体に白と青の湾曲した線が入り、さざ波のように見えます。"
    },
    {
      title: "成魚は水玉模様になる",
      text: "成魚では黄緑色から黄褐色の体に多数の青色斑が入り、幼魚とは別種のような姿になります。"
    }
  ],
  bodyLength: "最大で全長約40cm。",
  distribution: "南日本からインド・西太平洋の熱帯域に広く分布します。",
  habitat: "サンゴ礁や岩礁、礁湖などに生息します。",
  diet: "カイメン類、ホヤ類、藻類などを食べます。",
  features: "幼魚は濃紺地に白・青の弧状線、成魚は黄緑色の体に多数の青色斑を持ちます。",
  behavior: "岩礁表面を泳ぎながら付着生物をついばみ、成魚は単独またはペアで行動することがあります。",
  reproduction: "卵生で、繁殖時には雌雄が海中へ放卵・放精します。",
  identification: "成魚では多数の青い小斑点、幼魚では波のような曲線模様が特徴です。",
  nameOrigin: "幼魚の波状模様を「さざ波」に見立てた和名です。",
  humanRelation: "観賞魚として人気が高く、成長による色彩変化を観察できる魚です。",
  observationPoint: "成長段階が違う個体がいれば、模様がどのように変化していくか比べてください。",
  references: [
    "新潟市水族館：サザナミヤッコ",
    "BISMaL: Pomacanthus semicirculatus",
    "FishBase: Pomacanthus semicirculatus"
  ]
},

{
  id: "sp0348",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "デバスズメダイ",
  scientificName: "Chromis viridis",
  englishName: "Blue-green chromis",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "スズメダイ科", "スズメダイ属"],
  category: "魚類",
  image: "images/sp0348.jpg",
  trivia: [
    {
      title: "枝状サンゴへ一斉に逃げ込む",
      text: "普段はサンゴの上で群れ、危険を感じると群れ全体で枝状サンゴの隙間へ逃げ込みます。"
    },
    {
      title: "卵を守るのはオス",
      text: "オスが岩やサンゴ上の卵を守り、ひれで新鮮な水を送ります。"
    }
  ],
  bodyLength: "最大で全長約10cm。",
  distribution: "琉球列島など南日本からインド・西太平洋のサンゴ礁域に広く分布します。",
  habitat: "浅いサンゴ礁、とくに枝状サンゴの上や周辺に群れで生息します。",
  diet: "主に動物プランクトンを捕食します。",
  features: "青緑色の小型魚で、光の角度によって水色・緑色・青色に見え、尾びれは深く二叉します。",
  behavior: "大群でサンゴの上を泳いでプランクトンを食べ、危険時にはサンゴ内へ隠れます。",
  reproduction: "卵生で、オスが産卵場所を準備し、メスの産んだ付着卵を保護します。",
  identification: "淡い青緑色の体、深く二叉した尾びれ、枝状サンゴ上での群泳が特徴です。",
  nameOrigin: "前方へ突出する歯を持つことが「出歯」の名前に関係するとされています。",
  humanRelation: "サンゴ礁水槽を代表する群泳魚で、海水観賞魚としても人気があります。",
  observationPoint: "別の魚が群れへ近づいたとき、一斉にサンゴへ隠れる行動に注目してください。",
  references: [
    "BISMaL: Chromis viridis デバスズメダイ",
    "FishBase: Chromis viridis"
  ]
},

{
  id: "sp0349",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ゴマチョウチョウウオ",
  scientificName: "Chaetodon citrinellus",
  englishName: "Speckled butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0349.jpg",
  trivia: [
    {
      title: "体中に『ゴマ』のような小点",
      text: "淡黄色の体に小さな暗色点が規則的に並び、ゴマを散らしたように見えます。"
    },
    {
      title: "幅広い餌を利用できる",
      text: "サンゴのポリプだけでなく、小型無脊椎動物や藻類も食べるため、幅広い環境を利用できます。"
    }
  ],
  bodyLength: "最大で全長約13cm。",
  distribution: "南日本からインド・太平洋の熱帯海域に広く分布します。",
  habitat: "サンゴ礁、礁湖、岩礁などの浅場に生息します。",
  diet: "サンゴのポリプ、小型底生無脊椎動物、藻類などを食べます。",
  features: "黄白色の体全体に小さな暗色点が並び、眼には黒帯が通ります。",
  behavior: "単独またはペアで浅いサンゴ礁を泳ぎ、岩やサンゴをついばみます。",
  reproduction: "繁殖時にはペアを形成し、浮遊卵を海中へ放出します。",
  identification: "体側全体に並ぶ細かな黒点が最も分かりやすい特徴です。",
  nameOrigin: "体に散らばる黒い小斑点をゴマに見立てた名前です。",
  humanRelation: "小型で鮮やかなチョウチョウウオとして、観賞魚や水族館展示で知られます。",
  observationPoint: "近くで見て、黒点がランダムではなく鱗に沿って並んでいることを確認してください。",
  references: [
    "FishBase: Chaetodon citrinellus",
    "Eschmeyer's Catalog of Fishes: Chaetodon citrinellus"
  ]
},

{
  id: "sp0350",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "セグロチョウチョウウオ",
  scientificName: "Chaetodon ephippium",
  englishName: "Saddle butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0350.jpg",
  trivia: [
    {
      title: "背中に巨大な黒い『鞍』",
      text: "体の後上部に大きな黒色域があり、英名のSaddle＝「鞍」もこの模様を表します。"
    },
    {
      title: "成魚では背びれが長く伸びる",
      text: "成熟すると背びれ後方の軟条が糸状に伸びます。"
    }
  ],
  bodyLength: "最大で全長約30cm。",
  distribution: "南日本からインド・太平洋の熱帯サンゴ礁域に広く分布します。",
  habitat: "浅いサンゴ礁や岩礁、礁湖に生息します。",
  diet: "小型底生動物、サンゴのポリプ、藻類などを食べる雑食性です。",
  features: "黄白色の体の後上部に大きな黒色斑があり、尾部は黄色、腹側には青色線も見られます。",
  behavior: "単独またはペアで岩礁を泳ぎ、岩面をついばみながら餌を探します。",
  reproduction: "繁殖時にはペアを形成し、浮遊卵を海中へ放出します。",
  identification: "体後上部にある非常に大きな黒色斑が特徴です。",
  nameOrigin: "背中の大きな黒色部分から「背黒」チョウチョウウオと呼ばれます。",
  humanRelation: "大型で色彩の美しいチョウチョウウオとして水族館で展示されます。",
  observationPoint: "大きな黒斑だけでなく、成魚では背びれ後方から伸びる細長い部分も見てください。",
  references: [
    "BISMaL: Chaetodon ephippium",
    "鳥羽水族館：セグロチョウチョウウオ",
    "FishBase: Chaetodon ephippium"
  ]
},

{
  id: "sp0351",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アケボノチョウチョウウオ",
  scientificName: "Chaetodon melannotus",
  englishName: "Blackback butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0351.jpg",
  trivia: [
    {
      title: "夜になると模様が変わる",
      text: "夜には体全体が暗くなり、背側に白い斑が現れるなど昼とは大きく違う体色になります。"
    },
    {
      title: "幼魚の背びれには眼状斑がない",
      text: "似た種類の幼魚と違い、本種では背びれに大きな黒い眼状斑が現れません。"
    }
  ],
  bodyLength: "最大で全長約18〜20cm。",
  distribution: "南日本からインド・西太平洋のサンゴ礁域に広く分布します。",
  habitat: "浅いサンゴ礁や岩礁に生息します。",
  diet: "サンゴのポリプ、小型付着生物、藻類などを利用します。",
  features: "白色から淡黄色の体側に多数の斜めの黒線が並び、背側は黄色から黒色を帯び、眼には黒帯があります。",
  behavior: "昼はサンゴ礁で餌を探し、夜になると休息時の暗い体色へ変化します。",
  reproduction: "卵生で、繁殖時には雌雄が海中へ放卵・放精します。",
  identification: "体側の斜線と、幼魚でも背びれに大きな黒い眼状斑がないことが特徴です。",
  nameOrigin: "黄色や黒色のグラデーションを夜明けの空に見立てたという説明がありますが、確定的な語源ではありません。",
  humanRelation: "ダイビングや水族館で観察される代表的なチョウチョウウオ類です。",
  observationPoint: "昼の模様を覚えておくと、消灯前後の体色変化を比較できます。",
  references: [
    "BISMaL: Chaetodon melannotus",
    "宇久井ビジターセンター：アケボノチョウチョウウオ",
    "新潟市水族館：アケボノチョウチョウウオ"
  ]
},

{
  id: "sp0352",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アミチョウチョウウオ",
  scientificName: "Chaetodon rafflesii",
  englishName: "Latticed butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0352.jpg",
  trivia: [
    {
      title: "古い綴りrafflesiは現在は異名",
      text: "古い資料ではChaetodon rafflesiも使われますが、現在の受理名はiが2つのChaetodon rafflesiiです。"
    },
    {
      title: "体全体が網目模様",
      text: "黄色い体の鱗に沿って暗色線が並び、細かな網目模様を作ります。"
    }
  ],
  bodyLength: "最大で全長約15cm。",
  distribution: "琉球列島など南日本から東南アジアを中心とするインド・西太平洋に分布します。",
  habitat: "サンゴ礁、礁湖、岩礁域に生息します。",
  diet: "サンゴのポリプや小型底生無脊椎動物などを食べます。",
  features: "鮮やかな黄色の体に暗色の網目模様があり、眼を通る黒帯と背びれ後方の暗色部が目立ちます。",
  behavior: "ペアまたは単独でサンゴ礁を泳ぎ、岩やサンゴ表面から餌を取ります。",
  reproduction: "繁殖時にはペアで浮遊卵を海中へ放出します。",
  identification: "体全体の細かな網目状模様が最大の特徴です。",
  nameOrigin: "鱗に沿った暗色線が網目のように見えることから名付けられました。",
  humanRelation: "鮮やかな色彩を持ち、海水観賞魚や水族館展示で知られています。",
  observationPoint: "少し離れると黄色一色に見えますが、近くでは細かな網目模様を確認できます。",
  references: [
    "BISMaL: Chaetodon rafflesii",
    "Eschmeyer's Catalog of Fishes: Chaetodon rafflesii",
    "FishBase: Chaetodon rafflesii"
  ]
},

{
  id: "sp0353",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミゾレチョウチョウウオ",
  scientificName: "Chaetodon kleinii",
  englishName: "Klein's butterflyfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "チョウチョウウオ科", "チョウチョウウオ属"],
  category: "魚類",
  image: "images/sp0353.jpg",
  trivia: [
    {
      title: "チョウチョウウオの中では食べ物の幅が広い",
      text: "サンゴのポリプだけでなく、小型底生動物、藻類、プランクトンなども利用できます。"
    },
    {
      title: "大きな群れになることがある",
      text: "単独やペアだけでなく、多数の個体が集まって中層を泳ぐこともあります。"
    }
  ],
  bodyLength: "最大で全長約15cm。",
  distribution: "南日本からインド・太平洋の熱帯・亜熱帯海域に広く分布します。",
  habitat: "サンゴ礁、岩礁、礁湖などに生息します。",
  diet: "サンゴのポリプ、小型底生動物、藻類、動物プランクトンなどを利用します。",
  features: "淡黄色の体を持ち、前半は白っぽく、眼には暗色帯が通ります。",
  behavior: "単独、ペア、群れなどさまざまな形で行動し、サンゴ礁上を活発に泳ぎます。",
  reproduction: "卵生で、繁殖時には雌雄が放卵・放精します。",
  identification: "白っぽい体前半、黄色い後半部、眼を通る帯が特徴です。",
  nameOrigin: "白っぽい細かな色彩がみぞれを思わせることが和名に関係すると考えられます。",
  humanRelation: "比較的丈夫なチョウチョウウオとして、水族館や観賞魚飼育でも知られています。",
  observationPoint: "LABO10の他のチョウチョウウオと比べ、比較的シンプルな模様に注目してください。",
  references: [
    "BISMaL: Chaetodon kleinii",
    "新潟市水族館：ミゾレチョウチョウウオ",
    "FishBase: Chaetodon kleinii"
  ]
},

{
  id: "sp0354",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヤマブキスズメダイ",
  scientificName: "Amblyglyphidodon aureus",
  englishName: "Golden damselfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "スズメダイ科", "クラカオスズメダイ属"],
  category: "魚類",
  image: "images/sp0354.jpg",
  trivia: [
    {
      title: "全身が鮮やかな山吹色",
      text: "成魚は名前通り黄色から山吹色で、サンゴ礁の中でもよく目立ちます。"
    },
    {
      title: "オスが卵を守る",
      text: "付着卵を産み、産卵後はオスが卵の近くに残って保護します。"
    }
  ],
  bodyLength: "最大で全長約13cm。",
  distribution: "琉球列島を含む南日本からインド・西太平洋に分布します。",
  habitat: "サンゴ礁や礁斜面、とくにヤギ類や枝状生物がある場所の周辺で見られます。",
  diet: "主に動物プランクトンを捕食します。",
  features: "成魚はほぼ全身が鮮やかな黄色で、体高がやや高く左右に平たい体を持ちます。",
  behavior: "海底から少し離れた中層を泳ぎ、流れてくるプランクトンを捕食します。",
  reproduction: "基質へ粘着性の卵を産み、オスが卵を保護・管理します。",
  identification: "ほぼ全身が均一な黄色になることが大きな特徴です。",
  nameOrigin: "日本の伝統色「山吹色」のような鮮やかな黄色い体色に由来します。",
  humanRelation: "サンゴ礁水槽を彩る魚として、水族館や観賞魚で人気があります。",
  observationPoint: "黄色い体だけでなく、海底より少し上の中層を泳いでいる点にも注目してください。",
  references: [
    "BISMaL: Amblyglyphidodon aureus ヤマブキスズメダイ",
    "FishBase: Amblyglyphidodon aureus"
  ]
},

{
  id: "sp0355",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タカサゴ",
  scientificName: "Pterocaesio digramma",
  englishName: "Double-lined fusilier",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエダイ科", "タカサゴ亜科", "クマササハナムロ属"],
  category: "魚類",
  image: "images/sp0355.jpg",
  trivia: [
    {
      title: "昔のタカサゴ科は現在フエダイ科へ",
      text: "従来はタカサゴ科Caesionidaeでしたが、現在の系統分類ではフエダイ科Lutjanidaeのタカサゴ亜科Caesioninaeとする体系があります。"
    },
    {
      title: "沖縄の『グルクン』",
      text: "沖縄ではタカサゴ類をグルクンと呼び、唐揚げなどで親しまれる身近な食用魚です。"
    }
  ],
  bodyLength: "最大で全長約30cm。",
  distribution: "南日本から中・西部太平洋の熱帯域に分布します。",
  habitat: "サンゴ礁の外縁や潮通しの良い場所の中層で大きな群れを作ります。",
  diet: "主に動物プランクトンを捕食します。",
  features: "青緑色の細長い体に2本の黄色い縦線が入り、尾びれ上下葉の先端は黒くなります。",
  behavior: "高速でまとまった群れを作り、サンゴ礁上の中層でプランクトンを捕食します。",
  reproduction: "浮遊卵を産み、卵や仔魚は海中を漂って成長します。",
  identification: "2本の黄色線と尾びれ先端の黒色部が特徴で、ニセタカサゴとは黄色線と側線の位置関係で見分けます。",
  nameOrigin: "標準和名の詳しい語源は、今回確認した資料では分かっていません。",
  humanRelation: "沖縄県を代表する食用魚の一つで、グルクンの名で親しまれています。",
  observationPoint: "1匹ではなく群れ全体を見て、一斉に方向転換する姿に注目してください。",
  references: [
    "BISMaL: Pterocaesio digramma タカサゴ",
    "NCBI Taxonomy: Pterocaesio digramma",
    "Eschmeyer's Catalog of Fishes"
  ]
},

{
  id: "sp0356",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ユメウメイロ",
  scientificName: "Caesio cuning",
  englishName: "Redbelly yellowtail fusilier",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエダイ科", "タカサゴ亜科", "ユメウメイロ属"],
  category: "魚類",
  image: "images/sp0356.jpg",
  trivia: [
    {
      title: "尾びれは鮮やかな黄色",
      text: "体は青灰色から桃色ですが、尾柄・尾びれと背側の一部は鮮やかな黄色になります。"
    },
    {
      title: "大きな群れで泳ぐプランクトン食者",
      text: "サンゴ礁上の中層を大群で泳ぎ、流れてくる動物プランクトンを捕食します。"
    }
  ],
  bodyLength: "最大で全長約60cmとされますが、一般には30cm前後の個体が多く見られます。",
  distribution: "琉球列島・小笠原諸島からインド・西太平洋の熱帯域に広く分布します。",
  habitat: "サンゴ礁や岩礁外縁の中層に群れで生息します。",
  diet: "主に動物プランクトンを捕食します。",
  features: "青灰色から桃色の体を持ち、尾柄・尾びれと背側の一部が鮮やかな黄色になります。",
  behavior: "大群で中層を泳ぎ、潮流に運ばれるプランクトンを捕食します。",
  reproduction: "浮遊卵を海中へ放出し、仔魚は浮遊生活を送ります。",
  identification: "黄色い尾部と、体の下側に出る赤みが特徴です。",
  nameOrigin: "標準和名の詳しい由来には諸説があるため、この図鑑では断定しません。",
  humanRelation: "南西諸島で漁獲され、食用魚として利用されます。",
  observationPoint: "タカサゴと並べて、尾の色や体側の線の違いを比べてください。",
  references: [
    "Eschmeyer's Catalog of Fishes 2026: Caesio cuning",
    "日本大百科全書：ユメウメイロ",
    "FishBase: Caesio cuning"
  ]
},

{
  id: "sp0357",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "イロブダイ",
  scientificName: "Cetoscarus ocellatus",
  englishName: "Spotted parrotfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "ブダイ亜科", "イロブダイ属"],
  category: "魚類",
  image: "images/sp0357.jpg",
  trivia: [
    {
      title: "昔のCetoscarus bicolorとは別種",
      text: "以前はCetoscarus bicolorとされましたが、現在C. bicolorは紅海周辺の種で、日本を含むインド・西太平洋産はC. ocellatusとされています。"
    },
    {
      title: "幼魚・メス・オスで全部違う色",
      text: "幼魚は白と橙色、雌型は赤褐色、雄型は鮮やかな青緑色となり、成長と性で大きく姿が変わります。"
    }
  ],
  bodyLength: "最大で全長約80cm。",
  distribution: "伊豆諸島、紀伊半島以南からインド・中西部太平洋に分布します。",
  habitat: "浅いサンゴ礁や岩礁に生息します。",
  diet: "主に死サンゴや岩の表面に生える藻類を歯板で削り取って食べます。",
  features: "歯が融合した鳥のくちばし状の歯板を持ち、雄は青緑色、雌は赤褐色、幼魚は白と橙色です。",
  behavior: "サンゴ礁を泳ぎ、歯板で岩や死サンゴの表面を削りながら藻類を食べます。",
  reproduction: "雌性先熟型を含む複雑な性構造を持ち、繁殖時には雌雄が中層へ泳ぎ上がって放卵・放精します。",
  identification: "幼魚は白い体と橙色の頭部、背びれの黒斑が特徴で、成魚では性による色彩差が非常に大きくなります。",
  nameOrigin: "成長や性によって非常に多彩な色になることが「イロブダイ」という名前に関係します。",
  humanRelation: "サンゴ礁の藻類を食べ、藻類の過剰繁茂を抑える重要な植食魚です。",
  observationPoint: "幼魚・雌・雄がいれば、同じ種とは思えないほど異なる体色を比べてください。",
  references: [
    "Eschmeyer's Catalog of Fishes 2026: Cetoscarus ocellatus",
    "小学館 図鑑NEO：イロブダイ",
    "鹿児島大学総合研究博物館：奄美群島の魚類"
  ]
},

{
  id: "sp0358",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒブダイ",
  scientificName: "Scarus ghobban",
  englishName: "Blue-barred parrotfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "ブダイ亜科", "アオブダイ属"],
  category: "魚類",
  image: "images/sp0358.jpg",
  trivia: [
    {
      title: "オスとメスで色が大きく違う",
      text: "雌型は黄色を基調に青い帯が入り、雄型は青緑色と桃色の鮮やかな模様になります。"
    },
    {
      title: "サンゴ礁の表面を削って食べる",
      text: "くちばし状の歯板で岩やサンゴ表面の藻類を削り取り、砕かれた石灰質を砂として排出することもあります。"
    }
  ],
  bodyLength: "大型では全長80〜90cmほどになります。",
  distribution: "駿河湾以南の日本からインド・太平洋に広く分布します。",
  habitat: "サンゴ礁、岩礁、海草藻場などに生息します。",
  diet: "主に付着藻類などの植物質を食べます。",
  features: "歯が融合した強い歯板を持ち、雌型は黄色味、雄型は青緑色が強く、性によって模様が変わります。",
  behavior: "昼にサンゴ礁を広く泳ぎ、岩面の藻類を削り取ります。",
  reproduction: "浮遊卵を放出し、性や色彩には複雑な変化があり、大型の雄型個体が繁殖に参加します。",
  identification: "黄色と青色の雌型、青緑色の雄型という色彩差と、くちばし状の歯が特徴です。",
  nameOrigin: "雄型の鮮やかな緋色・青緑色を含む色彩が名前に関係するとされています。",
  humanRelation: "食用になるほか、サンゴ礁の藻類量を調整する植食魚として重要です。",
  observationPoint: "口元を見て、普通の魚と違って歯がつながり板状になっていることを確認してください。",
  references: [
    "Eschmeyer's Catalog of Fishes: Scarus ghobban",
    "日本大百科全書：ヒブダイ",
    "FishBase: Scarus ghobban"
  ]
},

{
  id: "sp0359",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ホウライヒメジ",
  scientificName: "Parupeneus ciliatus",
  englishName: "Whitesaddle goatfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ヒメジ科", "ウミヒゴイ属"],
  category: "魚類",
  image: "images/sp0359.jpg",
  trivia: [
    {
      title: "2本のひげは高性能な感覚器",
      text: "下あごの2本のひげには味覚などの感覚器があり、砂や岩の隙間の餌を探すために使います。"
    },
    {
      title: "オキナヒメジとそっくり",
      text: "オキナヒメジに似ますが、本種では尾柄の黒い鞍状斑が側線より下まで広がることが重要な識別点です。"
    }
  ],
  bodyLength: "最大で全長約40cm。",
  distribution: "千葉県以南を中心とする日本沿岸からインド・太平洋に広く分布します。",
  habitat: "浅い岩礁、サンゴ礁、砂礫底などに生息し、大型個体はやや深い場所でも見られます。",
  diet: "ゴカイ類やエビ・カニなどの甲殻類を中心に食べます。",
  features: "桃色から褐色の体を持ち、尾柄には白色部と黒色の鞍状斑があり、下あごには2本の長いひげがあります。",
  behavior: "ひげを海底へ触れさせて餌を探し、岩の上などで群れたまま休むこともあります。",
  reproduction: "卵生で浮遊卵を産み、本種固有の詳しい産卵期は一律には断定できません。",
  identification: "尾柄の黒色斑が側線より下まで広がることが、オキナヒメジとの識別点です。",
  nameOrigin: "標準和名の詳しい語源は、今回確認した資料では分かっていません。",
  humanRelation: "釣りや沿岸漁業で漁獲され、食用にも利用されます。",
  observationPoint: "海底へ近づいたとき、2本のひげが左右別々に動く様子を見てください。",
  references: [
    "BISMaL: Parupeneus ciliatus ホウライヒメジ",
    "宇久井ビジターセンター：ホウライヒメジ",
    "新潟市水族館：ホウライヒメジ"
  ]
},

{
  id: "sp0360",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカヒメジ",
  scientificName: "Mulloidichthys vanicolensis",
  englishName: "Yellowfin goatfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ヒメジ科", "アカヒメジ属"],
  category: "魚類",
  image: "images/sp0360.jpg",
  trivia: [
    {
      title: "生きていると赤くない",
      text: "生時は白色から淡黄色で黄色い線とひれを持ち、死後に赤みが強くなることが和名につながったとされています。"
    },
    {
      title: "昼は大群で休む",
      text: "昼はサンゴ礁付近で大群を作って休み、餌を取るときは海底で2本のひげを使います。"
    }
  ],
  bodyLength: "最大で全長約38〜40cm。",
  distribution: "房総半島以南の日本からインド・太平洋の熱帯域に広く分布します。",
  habitat: "サンゴ礁、礁湖、砂地、サンゴ礁外縁などに生息します。",
  diet: "エビ・カニなどの甲殻類、ゴカイ類などの底生無脊椎動物を食べます。",
  features: "生時は白色から淡黄色で、体側に黄色い縦線が入り、尾びれ・背びれも黄色く、下あごには2本のひげがあります。",
  behavior: "日中は群れで休み、餌を取るときは海底近くでひげを使って探します。",
  reproduction: "卵生で、海中へ放出された卵は浮遊します。",
  identification: "黄色いひれ、体側の黄色い縦線、下あごの2本のひげが特徴です。",
  nameOrigin: "生きている時より死後に赤色が強く現れることからアカヒメジと呼ばれるとされています。",
  humanRelation: "各地で食用にされ、大群を作るためサンゴ礁水槽でも存在感のある魚です。",
  observationPoint: "「アカ」という名前でも、生きている個体が実際には何色に見えるか確認してください。",
  references: [
    "BISMaL: Mulloidichthys vanicolensis アカヒメジ",
    "鳥羽水族館：アカヒメジ",
    "FishBase: Mulloidichthys vanicolensis"
  ]
},

{
  id: "sp0361",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キンギョハナダイ",
  scientificName: "Pseudanthias cheirospilos",
  englishName: "Pacific lyretail anthias",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハナダイ科", "ナガハナダイ属"],
  category: "魚類",
  image: "images/sp0361.jpg",
  trivia: [
    {
      title: "2020年代に学名の扱いが変わった",
      text: "日本では長くPseudanthias squamipinnisとされましたが、2026年版Catalog of Fishesでは西太平洋個体群をP. cheirospilosとして独立させ、日本も分布域に含めています。"
    },
    {
      title: "群れからオスが消えるとメスがオスへ",
      text: "雌性先熟型で、1匹のオスと複数のメスで群れを作り、オスがいなくなると大型メスがオスへ性転換します。"
    }
  ],
  bodyLength: "最大で全長約15cm。",
  distribution: "2026年版Catalog of Fishesでは、西インドネシアから西太平洋、南韓国・日本中部付近まで分布するとされています。",
  habitat: "サンゴ礁や岩礁の潮通しの良い斜面で、海底から少し離れた中層に大群を作ります。",
  diet: "主に動物プランクトンを捕食します。",
  features: "メスは鮮やかな橙色で、オスは大型で赤紫色が強くなり、性によって模様やひれの形も変化します。",
  behavior: "多数のメスと少数のオスで群れを作り、岩礁上へ泳ぎ出してプランクトンを捕食します。",
  reproduction: "雌性先熟型で大型メスがオスへ性転換し、夕方などに雌雄が中層へ上昇して放卵・放精します。",
  identification: "雌雄の色彩差が大きく、最新分類では日本・西太平洋産をP. cheirospilosとする一方、WoRMS・BISMaL・国内図鑑にはP. squamipinnis表記も広く残ります。",
  nameOrigin: "鮮やかな橙色の小型のメスが、水中を泳ぐ金魚を思わせることが和名に関係します。",
  humanRelation: "伊豆などのダイビングで人気の高い群泳魚で、水族館や観賞魚としても知られます。",
  observationPoint: "群れで最も大きく色の違う個体を探し、オスと多数のメスからなる社会構造を観察してください。",
  references: [
    "Eschmeyer's Catalog of Fishes 2026: Pseudanthias cheirospilos",
    "WoRMS: Pseudanthias squamipinnis（別分類体系）",
    "黒潮生物研究所：キンギョハナダイ（Pseudanthias squamipinnis表記）",
    "神奈川県立生命の星・地球博物館：キンギョハナダイ"
  ]
},

{
  id: "sp0362",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミヤコテングハギ",
  scientificName: "Naso lituratus",
  englishName: "Orangespine unicornfish",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "ニザダイ科", "テングハギ属"],
  category: "魚類",
  image: "images/sp0362.jpg",
  trivia: [
    {
      title: "テングハギなのに角がない",
      text: "テングハギ属ですが、成魚になっても額に長い角状突起を作りません。"
    },
    {
      title: "尾の付け根には鋭い『メス』",
      text: "尾柄の左右には2枚ずつ鋭い骨質板があり、黄〜橙色に目立ちます。ニザダイ類がsurgeonfishと呼ばれる理由にもつながる構造です。"
    }
  ],
  bodyLength: "最大で標準体長約46cm。",
  distribution: "日本の本州南部からオーストラリア、ニューカレドニア、ハワイ、フランス領ポリネシアなど太平洋の熱帯・亜熱帯域に広く分布します。",
  habitat: "サンゴ礁や岩礁、礁湖、礁斜面などに生息します。",
  diet: "ホンダワラ類やDictyota属などの大型褐藻を中心に食べる植食性です。",
  features: "灰褐色から青灰色の体で口周辺に橙色・黄色が入り、尾柄の左右には橙黄色の鋭い骨質板があります。",
  behavior: "成魚は単独または小群で岩礁域を泳ぎ、岩面や海藻をついばみ、大群になることもあります。",
  reproduction: "雌雄がペアで海中へ上昇し、放卵・放精する行動が観察されています。",
  identification: "額に角がないこと、口周辺の橙色、尾柄の橙黄色の骨質板が特徴です。",
  nameOrigin: "標準和名の詳しい命名由来は、今回確認した資料では分かっていません。",
  humanRelation: "観賞魚として人気があり、岩礁の藻類を食べる大型植食魚として生態系上も重要です。",
  observationPoint: "尾の付け根を見て、黄色い部分にある鋭い骨質板を探してください。",
  references: [
    "BISMaL: Naso lituratus ミヤコテングハギ",
    "FishBase: Naso lituratus",
    "WoRMS: Naso lituratus"
  ]
},

{
  id: "sp0363",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカモンガラ",
  scientificName: "Odonus niger",
  englishName: "Red-toothed triggerfish",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "モンガラカワハギ科", "アカモンガラ属"],
  category: "魚類",
  image: "images/sp0363.jpg",
  trivia: [
    {
      title: "赤いのは体ではなく歯",
      text: "体は青紫色から紺色ですが、成魚の歯は赤く、英名もRed-toothed triggerfishです。"
    },
    {
      title: "モンガラカワハギなのに中層を群泳する",
      text: "本種は潮通しのよい礁斜面の中層で大きな群れを作ります。"
    }
  ],
  bodyLength: "最大で全長約50cmで、一般には30cm前後です。",
  distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋までインド・太平洋に広く分布します。",
  habitat: "潮流の強いサンゴ礁外縁や礁斜面に生息し、水深5〜110mほどから記録されています。",
  diet: "主に動物プランクトンを捕食し、カイメン類などを食べることもあります。",
  features: "青色から青紫色の体、深く二叉した尾びれ、赤色の歯が特徴です。",
  behavior: "礁斜面の中層で大群を作り、潮に流れてくるプランクトンを活発に捕食します。",
  reproduction: "卵生ですが、本種固有の詳しい繁殖行動は今回確認した資料では十分に分かっていません。",
  identification: "青紫色の体、長く二叉した尾びれ、成魚の赤い歯が特徴です。",
  nameOrigin: "赤く見える歯が標準和名に関係すると考えられます。",
  humanRelation: "観賞魚として流通するほか、地域によって食用にも利用されます。",
  observationPoint: "群れ全体を見た後、近くを通る個体の口元を見て赤い歯を探してください。",
  references: [
    "BISMaL: Odonus niger アカモンガラ",
    "FishBase: Odonus niger",
    "WoRMS: Odonus niger"
  ]
},

{
  id: "sp0364",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ハリセンボン",
  scientificName: "Diodon holocanthus",
  englishName: "Longspined porcupinefish",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "ハリセンボン科", "ハリセンボン属"],
  category: "魚類",
  image: "images/sp0364.jpg",
  trivia: [
    {
      title: "針は普段は寝ている",
      text: "長い棘は普段は体に沿って寝ていますが、水を飲んで体を膨らませると外側へ立ち上がります。"
    },
    {
      title: "針は本当に1000本ではない",
      text: "「千本」は非常に多いことを表す名前で、実際に1000本の棘があるわけではありません。"
    }
  ],
  bodyLength: "最大で全長約50cm。",
  distribution: "世界の熱帯・亜熱帯海域に広く分布し、日本でも本州中部以南などで見られます。",
  habitat: "サンゴ礁、岩礁、砂地、海草藻場など沿岸の浅い海に生息します。",
  diet: "貝類、甲殻類、ウニ類など硬い殻を持つ底生動物を、強い歯板で砕いて食べます。",
  features: "丸みのある体を長い棘が覆い、上下の顎には強い歯板があり、体には褐色斑が入ります。",
  behavior: "普段はゆっくり泳ぎ、危険を感じると水を大量に飲み込んで球状に膨らみます。",
  reproduction: "卵生で卵を海中へ放出し、仔魚は浮遊生活を送ります。",
  identification: "非常に長い可動性の棘と、眼周辺や体側の褐色斑が特徴です。",
  nameOrigin: "全身に非常に多くの針状の棘を持つことから「ハリセンボン」と呼ばれます。",
  humanRelation: "沖縄などでは食用になりますが、フグ類・ハリセンボン類は種類や部位で毒性が異なるため、自己判断で調理してはいけません。",
  observationPoint: "無理に膨らませず、普段の棘がどの方向へ寝ているか観察してください。",
  references: [
    "BISMaL: Diodon holocanthus ハリセンボン",
    "FishBase: Diodon holocanthus",
    "WoRMS: Diodon holocanthus"
  ]
},

{
  id: "sp0365",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ハマクマノミ",
  scientificName: "Amphiprion frenatus",
  englishName: "Tomato clownfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "スズメダイ科", "クマノミ属"],
  category: "魚類",
  image: "images/sp0365.jpg",
  trivia: [
    {
      title: "全員最初はオスになれる体で生まれる",
      text: "雄性先熟型で、最大個体がメス、次に大きい個体が繁殖可能なオスになり、メスがいなくなるとオスがメスへ性転換します。"
    },
    {
      title: "主な相手はタマイタダキイソギンチャク",
      text: "特にタマイタダキイソギンチャク Entacmaea quadricolor との共生で知られます。"
    }
  ],
  bodyLength: "最大で全長約14cm。",
  distribution: "タイ湾から南日本、パラオ、インドネシアのジャワ島周辺まで西太平洋に分布します。",
  habitat: "浅いサンゴ礁や内湾で、宿主となるイソギンチャクの周辺に生活します。",
  diet: "動物プランクトン、小型甲殻類、藻類などを食べる雑食性です。",
  features: "赤橙色の体に頭の後方を通る1本の白色横帯があり、大型個体では体側が黒褐色になることがあります。",
  behavior: "宿主イソギンチャクから大きく離れず、縄張りへ近づく魚を追い払うことがあります。",
  reproduction: "雄性先熟型で、イソギンチャク近くの岩などへ産卵し、オスが卵を守ってひれで水を送ります。",
  identification: "成魚では頭の後ろに1本だけある白帯が分かりやすい特徴です。",
  nameOrigin: "標準和名の詳しい命名原典は、今回確認した資料では確定できません。",
  humanRelation: "水族館や観賞魚で人気があり、性転換やイソギンチャクとの共生を説明する代表種です。",
  observationPoint: "イソギンチャクからどの程度離れて泳ぐかを見て、危険時に触手の中へ戻る行動を観察してください。",
  references: [
    "BISMaL: Amphiprion frenatus ハマクマノミ",
    "FishBase: Amphiprion frenatus",
    "WoRMS: Amphiprion frenatus"
  ]
},

{
  id: "sp0366",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ユビワサンゴヤドカリ",
  scientificName: "Calcinus elegans",
  englishName: "Elegant hermit crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "ヤドカリ科", "サンゴヤドカリ属"],
  category: "甲殻類",
  image: "images/sp0366.jpg",
  trivia: [
    {
      title: "脚が鮮やかな青色",
      text: "歩脚は鮮やかな青色に黒い帯が入り、サンゴ礁のヤドカリの中でもよく目立ちます。"
    },
    {
      title: "自分で殻を作ることはできない",
      text: "巻貝の空き殻を利用し、成長して狭くなるとより大きな殻へ引っ越します。"
    }
  ],
  bodyLength: "本体は数cm程度で、利用する巻貝の殻によって見かけの大きさは変わります。",
  distribution: "インド・太平洋の熱帯域に広く分布し、日本では琉球列島、小笠原諸島などから記録されています。",
  habitat: "潮間帯から水深10m程度の岩礁、サンゴ礁、転石帯などに生息します。",
  diet: "藻類、デトリタス、小さな有機物などを利用する雑食性です。",
  features: "青い歩脚に黒い帯が入り、触角や脚先も鮮やかで、ヤドカリ科らしく左のはさみが比較的大きくなります。",
  behavior: "昼は岩陰などに隠れ、夜に活発に餌を探すことがあります。",
  reproduction: "雌雄は別個体で、メスは受精卵を腹部に抱え、ふ化した幼生は浮遊生活を送ります。",
  identification: "青い脚と黒い輪状帯が非常に特徴的です。",
  nameOrigin: "歩脚の輪状模様を指輪に見立てたことが標準和名に関係します。",
  humanRelation: "美しい体色から海水観賞用のヤドカリとして流通します。",
  observationPoint: "宿貝だけでなく、殻から出ている脚の青と黒の模様を見てください。",
  references: [
    "BISMaL: Calcinus elegans ユビワサンゴヤドカリ",
    "WoRMS: Calcinus elegans",
    "SeaLifeBase: Calcinus elegans"
  ]
},

{
  id: "sp0367",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オオイカリナマコ",
  scientificName: "Synapta maculata",
  englishName: "Maculated synaptid",
  classification: ["棘皮動物門", "ナマコ綱", "無足目", "イカリナマコ科", "オオイカリナマコ属"],
  category: "棘皮動物",
  image: "images/sp0367.jpg",
  trivia: [
    {
      title: "2mにもなる細長いナマコ",
      text: "非常に細長く、SeaLifeBaseでは最大全長約2mが記録されています。"
    },
    {
      title: "普通のナマコにある管足がない",
      text: "発達した管足を持たず、体壁の錨形の微小骨片を使って海底や物体へ引っ掛かります。"
    }
  ],
  bodyLength: "最大で全長約200cm。",
  distribution: "ハワイ諸島を除くインド・西太平洋の熱帯浅海域に広く分布します。",
  habitat: "浅い砂地、海草藻場、サンゴ礁の転石下などに生息します。",
  diet: "口周囲の触手で、海底表面の有機物や堆積物を集めて食べます。",
  features: "非常に細長く柔らかい体と枝分かれした口周囲の触手を持ち、管足はありません。",
  behavior: "海底を這いながら触手で有機物を集め、体を非常に長く伸ばすことができます。",
  reproduction: "本種固有の詳しい繁殖周期は資料が十分でないため、一律の時期は記載しません。",
  identification: "極端に細長い体、管足がないこと、口周囲の大きな触手が特徴です。",
  nameOrigin: "錨形の微小骨片を持つイカリナマコ類の大型種であることが和名に表れています。",
  humanRelation: "一般的な食用ナマコではなく、無足目ナマコ特有の体構造を観察できる種類です。",
  observationPoint: "口周辺の触手が1本ずつ海底へ触れ、餌を口へ運ぶ動きに注目してください。",
  references: [
    "BISMaL: Synapta maculata",
    "WoRMS: Synapta maculata",
    "SeaLifeBase: Synapta maculata"
  ]
},

{
  id: "sp0368",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クビレズタ",
  scientificName: "Caulerpa lentillifera",
  englishName: "Sea grapes",
  classification: ["緑色植物門", "アオサ藻綱", "ハネモ目", "イワヅタ科", "イワズタ属"],
  category: "海藻",
  image: "images/sp0368.jpg",
  trivia: [
    {
      title: "沖縄の『海ぶどう』の正体",
      text: "「海ぶどう」として流通する海藻で、球形の小枝がブドウの房のように並びます。"
    },
    {
      title: "体全体が巨大な1つの細胞",
      text: "イワズタ属は細胞を区切る壁がほとんどない多核体で、複雑な体の大部分が1つの巨大な細胞としてつながっています。"
    }
  ],
  bodyLength: "直立する枝は数cm〜十数cmほどで、海底を這う匍匐枝は広い範囲へ伸びます。",
  distribution: "日本では主に沖縄など南西諸島に分布し、インド・西太平洋の熱帯域に広く見られます。",
  habitat: "水深1〜15m程度の浅い砂地やサンゴ礁周辺で、海底を這うように生育します。",
  diet: "餌は食べず、光合成で有機物を作り、海水中の窒素・リンなどの栄養塩も利用します。",
  features: "細い匍匐枝から直立枝が伸び、その表面に小さな球状の小枝が多数並びます。",
  behavior: "緑藻で、匍匐枝を伸ばして海底へ広がり、切れた断片から増えることもあります。",
  reproduction: "栄養繁殖と有性生殖を行い、養殖では主に藻体を分けて増殖させます。",
  identification: "ブドウの房のように小さな緑色の球体が並ぶことが特徴です。",
  nameOrigin: "直立枝の軸が小枝の間でくびれて見えることからクビレズタと呼ばれます。",
  humanRelation: "沖縄を代表する養殖海藻の一つで、「海ぶどう」として生食されます。",
  observationPoint: "一粒ずつが独立した実ではなく、すべてつながった藻体の一部であることに注目してください。",
  references: [
    "BISMaL: Caulerpa lentillifera クビレズタ",
    "日本産海藻類資料：Caulerpa lentillifera"
  ]
},

{
  id: "sp0369",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "フエヤッコダイ",
  scientificName: "Forcipiger flavissimus",
  englishName: "Forcepsfish",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "チョウチョウウオ科", "フエヤッコダイ属"],
  category: "魚類",
  image: "images/sp0369.jpg",
  trivia: [
    {
      title: "ハシナガチョウチョウウオとは別種",
      text: "よく似ますが、フエヤッコダイは Forcipiger flavissimus、ハシナガチョウチョウウオは F. longirostris です。"
    },
    {
      title: "ウニの管足まで食べる",
      text: "長い吻で岩の隙間を探り、小型甲殻類やゴカイのほか、ウニの管足や叉棘なども食べます。"
    }
  ],
  bodyLength: "最大で全長約22cm。",
  distribution: "紅海・東アフリカから南日本、ハワイ、イースター島、東部太平洋まで熱帯インド・太平洋に広く分布します。",
  habitat: "サンゴ礁外縁や礁湖などに生息し、水深0〜145m程度まで記録されています。",
  diet: "ヒドロ虫、魚卵、小型甲殻類、ゴカイの触手、ウニの管足や叉棘などを食べます。",
  features: "黄色い体、白い頭部下側、黒い頭頂部、細長い吻を持ち、尻びれ付近には黒斑があります。",
  behavior: "単独や小群でも見られますが、成魚はペアで行動することが多く、岩やサンゴの隙間から餌を取ります。",
  reproduction: "卵生で繁殖時にはペアを形成し、一夫一妻的なペア関係が知られています。",
  identification: "ハシナガチョウチョウウオより吻が短く口が大きく、背びれ棘は12〜13本で、胸部に小黒点列はありません。",
  nameOrigin: "細長い吻が笛のように見えることが標準和名に関係します。",
  humanRelation: "観賞魚として広く流通するチョウチョウウオ類です。",
  observationPoint: "同じLABO10のハシナガチョウチョウウオと、吻の長さや胸部の模様を比べてください。",
  references: [
    "FishBase: Forcipiger flavissimus",
    "WoRMS: Forcipiger flavissimus",
    "Australian Museum: Forcipiger longirostrisとの識別"
  ]
},

{
  id: "sp0370",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミスジリュウキュウスズメダイ",
  scientificName: "Dascyllus aruanus",
  englishName: "Whitetail dascyllus",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "スズメダイ科", "ミスジリュウキュウスズメダイ属"],
  category: "魚類",
  image: "images/sp0370.jpg",
  trivia: [
    {
      title: "名前通り黒い線が3本",
      text: "白い体に頭部・体中央・尾柄付近を通る3本の黒帯が入り、小型でもよく目立ちます。"
    },
    {
      title: "枝サンゴが天然のシェルター",
      text: "枝状サンゴ上に群れを作り、危険を感じると一斉に細い枝の隙間へ逃げ込みます。"
    }
  ],
  bodyLength: "最大で全長約10cm。",
  distribution: "南日本から中央太平洋まで、西・中部太平洋の熱帯サンゴ礁域に分布します。",
  habitat: "浅い礁湖や礁原で、枝状ミドリイシ類などのサンゴ周辺に群れで生息します。",
  diet: "動物プランクトン、底生無脊椎動物、藻類などを食べます。",
  features: "白い体を3本の黒い帯が縦断し、腹びれは黒色です。",
  behavior: "群れでサンゴ上を泳ぎ、危険時には一斉に隠れ、縄張り性もあります。",
  reproduction: "卵生で、オスがメスを産卵場所へ誘い、基質上の卵をふ化まで守ります。卵は約3〜5日でふ化する記録があります。",
  identification: "白地に3本の太い黒帯という明瞭な模様で識別できます。",
  nameOrigin: "3本の黒い筋を持つリュウキュウスズメダイ類であることが和名に表れています。",
  humanRelation: "サンゴ礁水槽でよく飼育され、魚と枝状サンゴの関係を観察しやすい種類です。",
  observationPoint: "他の魚が群れへ近づいた瞬間、一斉にサンゴへ隠れる行動に注目してください。",
  references: [
    "BISMaL: Dascyllus aruanus",
    "WoRMS: Dascyllus aruanus",
    "FishBase: Dascyllus aruanus"
  ]
},

{
  id: "sp0371",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オオウミキノコ",
  scientificName: "Sarcophyton glaucum",
  englishName: "Leather coral",
  classification: ["刺胞動物門", "花虫綱", "八放サンゴ亜綱", "Malacalcyonacea", "Sarcophytidae", "ウミキノコ属"],
  category: "刺胞動物",
  image: "images/sp0371.jpg",
  trivia: [
    {
      title: "2022年以降、八放サンゴの分類が大きく変わった",
      text: "古い資料ではウミトサカ目Alcyonaceaですが、現在BISMaLではMalacalcyonacea・Sarcophytidaeに分類されています。"
    },
    {
      title: "大きな群体でも多数の小さな個体の集合",
      text: "キノコ状の大きな体は1匹ではなく、表面の多数の小さなポリプが作る群体です。"
    }
  ],
  bodyLength: "群体サイズは環境や年齢で大きく変わり、数十cm規模になります。",
  distribution: "日本の暖海域を含むインド・西太平洋のサンゴ礁域に広く分布します。",
  habitat: "浅いサンゴ礁や岩礁に固着して生活します。",
  diet: "ポリプでプランクトンや有機物を捕らえ、共生する褐虫藻の光合成産物も利用します。",
  features: "太い柄の先に幅広い傘状部があり、表面には多数のポリプが並び、革のような質感から英語ではleather coralと呼ばれます。",
  behavior: "岩へ固着してポリプを開き、刺激や環境変化では全ポリプを一斉に縮めることがあります。",
  reproduction: "雌雄別体で、紅海の研究では年1回の非常に同期した放卵・放精が見られ、卵形成には約2年かかるとされています。",
  identification: "キノコ状の大きな群体と、その表面を覆う多数の小さなポリプが特徴です。",
  nameOrigin: "キノコの傘のような群体形からウミキノコと呼ばれ、その中でも大型になる種類です。",
  humanRelation: "海水水槽で広く飼育されるソフトコーラルの一つです。",
  observationPoint: "遠くから全体のキノコ形を見た後、表面に並ぶ1個ずつのポリプを探してください。",
  references: [
    "BISMaL: Sarcophyton glaucum オオウミキノコ",
    "WoRMS: Sarcophyton glaucum",
    "Benayahu & Loya 1986: Sexual reproduction of Sarcophyton glaucum"
  ]
},

{
  id: "sp0372",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ニシキテグリ",
  scientificName: "Synchiropus splendidus",
  englishName: "Mandarinfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ネズッポ科", "コウワンテグリ属"],
  category: "魚類",
  image: "images/sp0372.jpg",
  trivia: [
    {
      title: "サイケデリックな模様は自然の色",
      text: "青・緑・橙色の複雑な模様を持つ、体長数cmほどの非常に鮮やかな魚です。"
    },
    {
      title: "夕方にペアで『空中ダンス』",
      text: "繁殖時には雌雄が体を寄せて水面方向へ上昇し、途中で卵と精子を放出します。"
    }
  ],
  bodyLength: "最大で全長約7cm。",
  distribution: "琉球列島からオーストラリアなど西太平洋に分布します。",
  habitat: "水深1〜18m程度の穏やかな礁湖や内湾で、サンゴ礫・砂泥が混じる場所に生息します。",
  diet: "カイアシ類、ヨコエビ類など非常に小さな底生甲殻類を中心に食べます。",
  features: "青色から緑色の体に橙色の曲線模様が入り、オスでは第一背びれが長く伸びます。",
  behavior: "海底近くをゆっくり移動し、サンゴ礫の間の小動物をついばみます。",
  reproduction: "夕方を中心に雌雄がペアとなり、体を密着させて上昇しながら放卵・放精します。",
  identification: "青・緑・橙色の複雑な模様が特徴で、オスでは第一背びれが長く伸びます。",
  nameOrigin: "錦の織物のような鮮やかな色彩と、テグリ類の体形から名付けられています。",
  humanRelation: "世界的に人気の海水観賞魚ですが、自然下では非常に小さな餌を継続的に食べます。",
  observationPoint: "水槽内を泳ぎ回る魚ではなく、サンゴ礫の隙間をゆっくり移動する個体を探してください。",
  references: [
    "FishBase: Synchiropus splendidus",
    "Eschmeyer's Catalog of Fishes: Synchiropus splendidus"
  ]
},

{
  id: "sp0373",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キンチャクガニ",
  scientificName: "Lybia tessellata",
  englishName: "Boxer crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "オウギガニ科", "キンチャクガニ属"],
  category: "甲殻類",
  image: "images/sp0373.jpg",
  trivia: [
    {
      title: "両手にイソギンチャクを持つ",
      text: "左右の小さなはさみにイソギンチャクを持ち、ボクサーがグローブを構えるような姿になります。"
    },
    {
      title: "イソギンチャクを武器にも食事にも利用",
      text: "危険時には刺胞を持つイソギンチャクを相手へ向け、そのイソギンチャクが捕らえた餌を利用することもあります。"
    }
  ],
  bodyLength: "甲幅1〜2cm程度の非常に小型のカニです。",
  distribution: "南日本を含むインド・太平洋の熱帯サンゴ礁域に分布します。",
  habitat: "浅いサンゴ礁や岩礁の石の下、サンゴ片の間などに生息します。",
  diet: "小型の有機物や動物質を食べ、保持するイソギンチャクが捕らえた餌を利用することもあります。",
  features: "小型の甲に細長い脚を持ち、左右のはさみには小型イソギンチャクを保持します。",
  behavior: "両方のはさみを持ち上げ、イソギンチャクを振るような行動をします。",
  reproduction: "メスは受精卵を腹部に抱えて保護し、ふ化後の幼生は海中を漂います。",
  identification: "左右のはさみにイソギンチャクを持つ姿が最大の特徴です。",
  nameOrigin: "左右のイソギンチャクが小さな巾着袋のように見えることが和名に関係します。",
  humanRelation: "特徴的な共生行動から、水族館やダイビングで人気の小型甲殻類です。",
  observationPoint: "イソギンチャクだけでなく、カニが左右のはさみを別々に動かす様子にも注目してください。",
  references: [
    "BISMaL: Lybia tessellata キンチャクガニ",
    "WoRMS: Lybia tessellata",
    "Lybia属とイソギンチャクの共生研究"
  ]
},

{
  id: "sp0374",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クサビライシ",
  scientificName: "Fungia fungites",
  englishName: "Mushroom coral",
  classification: ["刺胞動物門", "花虫綱", "六放サンゴ亜綱", "イシサンゴ目", "クサビライシ科", "クサビライシ属"],
  category: "刺胞動物",
  image: "images/sp0374.jpg",
  trivia: [
    {
      title: "大人になると岩から離れて生活する",
      text: "幼い時期は柄で岩などへ付着しますが、成長すると離れて海底で自由生活します。"
    },
    {
      title: "1枚の円盤が基本的に1個体",
      text: "多くのサンゴが群体なのに対し、クサビライシの成体は基本的に大型の1ポリプです。"
    }
  ],
  bodyLength: "直径10〜30cm程度の円盤状になります。",
  distribution: "南日本を含むインド・西太平洋のサンゴ礁域に広く分布します。",
  habitat: "浅いサンゴ礁の砂礫底や礁原などで自由生活します。",
  diet: "共生する褐虫藻の光合成産物を利用し、触手でプランクトンや有機物も捕らえます。",
  features: "円形から楕円形の硬い骨格を持ち、中央に細長い口があり、骨格表面には多数の隔壁が放射状に並びます。",
  behavior: "固定されておらず、膨張や収縮で少し移動したり、砂に埋もれた状態から抜け出したりできます。",
  reproduction: "有性生殖と無性的な出芽を行い、幼体は柄で基質へ付着した後、成長すると離れます。",
  identification: "海底に単独で置かれた円盤状の硬いサンゴで、中央に1本の長い口があります。",
  nameOrigin: "キノコの傘のような円盤形から、英名でもmushroom coralと呼ばれます。",
  humanRelation: "群体ではなく単体で自由生活する、サンゴとしては特殊な生活様式を観察できます。",
  observationPoint: "中央の口から外側へ放射状に伸びる骨格模様を見てください。",
  references: [
    "WoRMS: Fungia fungites",
    "Hoeksema & Yeemin 2011: free-living Fungia fungites"
  ]
},

{
  id: "sp0375",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "フタイロカエルウオ",
  scientificName: "Ecsenius bicolor",
  englishName: "Bicolor blenny",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "イソギンポ科", "ニラミギンポ属"],
  category: "魚類",
  image: "images/sp0375.jpg",
  trivia: [
    {
      title: "名前通り前後で色が違う",
      text: "典型的な色彩型では前半が濃褐色から黒色、後半が黄色から橙色になります。"
    },
    {
      title: "穴から顔だけ出していることが多い",
      text: "サンゴや岩の小穴を隠れ家にし、頭だけ出して周囲を見る姿がよく見られます。"
    }
  ],
  bodyLength: "最大で全長約11cm。",
  distribution: "南日本からインド・西太平洋のサンゴ礁域に広く分布します。",
  habitat: "浅いサンゴ礁・岩礁の穴や割れ目周辺に生息します。",
  diet: "岩やサンゴ表面の藻類を中心に食べます。",
  features: "細長い体で、代表的な色彩型では前半が黒褐色、後半が黄橙色ですが、色彩変異があります。",
  behavior: "小穴を縄張りや隠れ家に使い、危険時には尾側から素早く穴へ入ります。",
  reproduction: "卵生で、イソギンポ科では基質の隙間などへ付着卵を産み、オスが守る種類が多く知られます。",
  identification: "前後で色が大きく変わる典型型が分かりやすいですが、色彩変異があるため頭部や体形も確認します。",
  nameOrigin: "体が明瞭な2色に分かれて見えることからフタイロカエルウオと呼ばれます。",
  humanRelation: "小型で特徴的な色彩から海水観賞魚として人気があります。",
  observationPoint: "水槽を泳ぐ魚だけでなく、小さな穴から顔を出す個体も探してください。",
  references: [
    "BISMaL: Ecsenius bicolor フタイロカエルウオ",
    "WoRMS: Ecsenius bicolor",
    "FishBase: Ecsenius bicolor"
  ]
},

{
  id: "sp0376",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オトメハゼ",
  scientificName: "Valenciennea puellaris",
  englishName: "Maiden goby",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハゼ科", "クロイトハゼ属"],
  category: "魚類",
  image: "images/sp0376.jpg",
  trivia: [
    {
      title: "砂を口いっぱいに食べて選別する",
      text: "砂ごと口へ取り込み、小型生物や有機物を選び取った後、不要な砂を鰓付近から排出します。"
    },
    {
      title: "夫婦で同じ巣穴を使う",
      text: "成魚はペアで暮らし、砂地に作った浅い巣穴を共同で利用します。"
    }
  ],
  bodyLength: "最大で標準体長約20cm。",
  distribution: "紅海からサモア、北は南日本、南はグレートバリアリーフ・ニューカレドニアまでインド・太平洋に広く分布します。",
  habitat: "透明度の高い礁湖やサンゴ礁外縁の砂地に生息し、水深2〜84m程度から記録されています。",
  diet: "砂中の小型甲殻類、多毛類、有機物などを、砂ごと口へ入れて選別して食べます。",
  features: "淡い灰色の体に大きな橙色斑が一列に並び、頭部には青白色の線や斑点があります。",
  behavior: "ペアで砂地を利用し、砂を繰り返し口へ入れて餌を探し、危険時には瓦礫の下などの巣穴へ逃げます。",
  reproduction: "一夫一妻的なペア関係を繁殖時も維持しますが、今回確認した資料では産卵周期などの詳細は断定できません。",
  identification: "淡色の体側に並ぶ大きな橙色斑と、頭部の青色系の模様が特徴です。",
  nameOrigin: "標準和名の詳しい命名由来は、今回確認した資料では確定できません。",
  humanRelation: "砂を攪拌する行動から観賞魚として知られ、自然下では砂底の小動物を食べる底生魚です。",
  observationPoint: "砂を口へ入れた後、どこから排出するか観察してください。",
  references: [
    "BISMaL: Valenciennea puellaris オトメハゼ",
    "FishBase: Valenciennea puellaris"
  ]
},

{
  id: "sp0377",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "エダミドリイシ",
  scientificName: "Acropora pruinosa",
  englishName: "Branching Acropora coral",
  classification: ["刺胞動物門", "花虫綱", "六放サンゴ亜綱", "イシサンゴ目", "ミドリイシ科", "ミドリイシ属"],
  category: "刺胞動物",
  image: "images/sp0377.jpg",
  trivia: [
    {
      title: "日本の温帯域を代表する枝状サンゴ",
      text: "本州中部など比較的高緯度にも生息し、枝状群体は多くの小動物や魚の隠れ場所になります。"
    },
    {
      title: "1本の枝も多数の個体の集合",
      text: "1本の枝も1匹ではなく、多数のポリプが骨格を共有して作る群体です。"
    }
  ],
  bodyLength: "群体は数十cm以上になり、枝の太さや群体サイズは水流・光・成長段階で大きく変わります。",
  distribution: "日本沿岸を中心とする北西太平洋に分布し、本州中部以南などから知られています。",
  habitat: "光の届く浅い岩礁域に固着し、比較的水流のある場所で枝状群体を作ります。",
  diet: "共生する褐虫藻の光合成産物を利用し、ポリプの触手でプランクトンや有機物粒子も捕らえます。",
  features: "樹枝状の石灰質骨格を作り、枝の先端には軸ポリプ、その周囲には多数の放射ポリプがあります。",
  behavior: "岩へ固着して動きませんが、ポリプは触手を伸縮して餌を捕らえ、環境によって群体形状も変化します。",
  reproduction: "卵・精子を海中へ放出するほか、折れた枝が別の場所へ定着する断片化でも無性的に増えます。",
  identification: "Acropora属は似た種が多いため枝の形だけで判断せず、骨格形態やポリプ配置などを総合して識別します。",
  nameOrigin: "枝状に成長するミドリイシ類であることからエダミドリイシと呼ばれます。",
  humanRelation: "日本沿岸のサンゴ群集を構成する重要種で、高水温による白化など環境変化の影響を受けます。",
  observationPoint: "枝の先端と側面を比べ、軸ポリプと放射ポリプの配置の違いに注目してください。",
  references: [
    "BISMaL: Acropora pruinosa エダミドリイシ",
    "WoRMS: Acropora pruinosa",
    "日本産ミドリイシ類分類資料"
  ]
},

{
  id: "sp0378",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アオウミガメ",
  scientificName: "Chelonia mydas",
  englishName: "Green sea turtle",
  classification: ["脊索動物門", "爬虫綱", "カメ目", "ウミガメ科", "アオウミガメ属"],
  category: "爬虫類",
  image: "images/sp0378.jpg",
  trivia: [
    {
      title: "『アオ』は甲羅の色ではない",
      text: "甲羅は褐色やオリーブ色ですが、体内の脂肪が緑色を帯びることが名前に関係するとされています。"
    },
    {
      title: "2025年に世界評価が改善",
      text: "IUCNは2025年10月に世界評価をEndangeredからLeast Concernへ変更し、1970年代以降に世界個体群が約28％増えたとしていますが、地域によっては大きな脅威が残ります。"
    }
  ],
  bodyLength: "甲長1m前後になる大型のウミガメで、体重100kgを超える個体も珍しくありません。",
  distribution: "世界の熱帯・亜熱帯海域に広く分布し、日本では南日本を中心に回遊・摂餌します。",
  habitat: "幼体は外洋も利用し、成長すると沿岸の海草藻場、岩礁、サンゴ礁などを重要な餌場にします。",
  diet: "幼若期には動物質も利用しますが、成長すると海草や大型藻類を多く食べます。",
  features: "丸みのある甲羅と比較的小さな頭を持ち、長いフリッパー状の前肢で泳ぎます。",
  behavior: "産卵場と餌場の間を数百〜数千km移動することがあり、肺呼吸のため定期的に水面へ浮上します。",
  reproduction: "メスは砂浜へ上陸して後肢で穴を掘り、多数の卵を産み、同じ繁殖期に複数回産卵することがあります。",
  identification: "頭部の前額板が通常1対であることなどが、アカウミガメとの識別に使われます。",
  nameOrigin: "緑色を帯びる脂肪などに由来すると考えられ、英名もGreen sea turtleです。",
  humanRelation: "CITES附属書Iの保全対象で、2025年に世界評価は改善しましたが、混獲、海洋ごみ、沿岸開発、気候変動などの脅威は残ります。",
  observationPoint: "前肢を大きく羽ばたかせ、後肢を主に方向調整へ使う泳ぎ方に注目してください。",
  references: [
    "IUCN 2025: Chelonia mydas Least Concern",
    "環境省：アオウミガメ",
    "BISMaL: Chelonia mydas"
  ]
},

{
  id: "sp0379",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ツマグロ",
  scientificName: "Carcharhinus melanopterus",
  englishName: "Blacktip reef shark",
  classification: ["脊索動物門", "軟骨魚綱", "メジロザメ目", "メジロザメ科", "メジロザメ属"],
  category: "魚類",
  image: "images/sp0379.jpg",
  trivia: [
    {
      title: "名前通りひれの先が黒い",
      text: "第一背びれや尾びれなどの先端に明瞭な黒色部があり、英名Blacktip reef sharkもこの特徴を表します。"
    },
    {
      title: "かなり浅いサンゴ礁にも入る",
      text: "成魚も幼魚も浅い礁湖や砂地を利用し、背びれが水面から出るほど浅い場所を泳ぐこともあります。"
    }
  ],
  bodyLength: "最大で全長約200cmで、一般には1〜1.5m程度の個体が多く見られます。",
  distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋までインド・太平洋に広く分布します。",
  habitat: "サンゴ礁、礁湖、浅い砂地、礁原などに生息します。",
  diet: "魚類を中心に、甲殻類や頭足類なども捕食します。",
  features: "灰褐色の流線型の体を持ち、各ひれ先端が黒く、特に第一背びれの黒色部が明瞭です。",
  behavior: "比較的狭い行動圏を持つ個体もいて、サンゴ礁周辺を繰り返し巡回します。",
  reproduction: "胎盤を形成する胎生で、母体から栄養を受けた仔を出産し、1回の出産数は数尾程度です。",
  identification: "ひれ先の黒色だけでなく、第一背びれの位置や吻の形も組み合わせて確認します。",
  nameOrigin: "ひれの端、つまり「つま」が黒いことからツマグロと呼ばれます。",
  humanRelation: "サンゴ礁域で人と遭遇しますが、通常は人を積極的に襲う種類ではありません。",
  observationPoint: "第一背びれ、胸びれ、尾びれを順に見て、黒色部分の位置を比べてください。",
  references: [
    "FishBase: Carcharhinus melanopterus",
    "WoRMS: Carcharhinus melanopterus"
  ]
},

{
  id: "sp0380",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タマカイ",
  scientificName: "Epinephelus lanceolatus",
  englishName: "Giant grouper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ハタ科", "マハタ属"],
  category: "魚類",
  image: "images/sp0380.jpg",
  trivia: [
    {
      title: "世界最大級のハタ",
      text: "大型では全長2.5mを超え、体重数百kgになる、サンゴ礁性硬骨魚の中でも最大級の魚です。"
    },
    {
      title: "幼魚と成魚で模様が変わる",
      text: "幼魚は黄色と黒色の明瞭なまだら模様ですが、成長すると暗灰色から褐色になり、模様も不明瞭になります。"
    }
  ],
  bodyLength: "最大で全長約270cm、体重400kg級の記録があります。",
  distribution: "紅海・インド洋から南日本、オーストラリア、中西部太平洋まで広く分布します。",
  habitat: "サンゴ礁、岩礁、洞窟、沈船、河口周辺などに生息します。",
  diet: "魚類、甲殻類、エイ類、小型のウミガメなど大型の動物まで捕食することがあります。",
  features: "非常に大きな頭と口、太く頑丈な体を持ち、若魚には明瞭な斑紋があります。",
  behavior: "大型個体は岩礁や洞窟周辺に定着し、待ち伏せ型の捕食を行います。",
  reproduction: "卵と精子を海中へ放出し、大型ハタ類は繁殖力や成熟までの時間の長さから漁獲圧の影響を受けやすい傾向があります。",
  identification: "圧倒的な体格、大きな口、丸みのある尾びれが特徴です。",
  nameOrigin: "標準和名の詳しい語源は、今回確認した資料では確定できません。",
  humanRelation: "高級食用魚として漁獲・養殖されますが、大型ハタ類は過剰漁獲の影響を受けやすく、資源管理が重要です。",
  observationPoint: "人の体と比べるつもりで頭と口の大きさを見ると、大型ハタならではの迫力が分かります。",
  references: [
    "FishBase: Epinephelus lanceolatus",
    "Eschmeyer's Catalog of Fishes: Epinephelus lanceolatus"
  ]
},

{
  id: "sp0381",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "メガネモチノウオ",
  scientificName: "Cheilinus undulatus",
  englishName: "Humphead wrasse",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "モチノウオ属"],
  category: "魚類",
  image: "images/sp0381.jpg",
  trivia: [
    {
      title: "巨大なオスには額のこぶ",
      text: "大型成魚、特に雄型個体では額が大きく盛り上がり、英名Humphead wrasseの由来になります。"
    },
    {
      title: "世界的な保全対象",
      text: "大型で成長が遅く乱獲の影響を受けやすいため、CITES附属書IIに掲載され国際取引が規制されています。"
    }
  ],
  bodyLength: "最大で全長約230cm、体重190kgを超える記録があります。",
  distribution: "紅海・東アフリカから南日本、ニューカレドニア、中央太平洋までインド・太平洋に広く分布します。",
  habitat: "サンゴ礁外縁、礁斜面、礁湖などに生息します。",
  diet: "貝類、甲殻類、ウニ類、魚類などを食べ、オニヒトデを捕食することもあります。",
  features: "大型成魚では額が盛り上がって唇が厚く、眼の周囲には眼鏡のような黒い線があります。",
  behavior: "昼はサンゴ礁を広く泳ぎ回り、夜は洞窟などで休みます。",
  reproduction: "雌性先熟型で、メスとして成熟した一部の個体が成長後にオスへ性転換します。",
  identification: "眼の周囲の模様、厚い唇、大型個体の額の隆起が重要です。",
  nameOrigin: "眼の周囲の線を眼鏡に見立てたことが標準和名の由来です。",
  humanRelation: "高級な活魚として取引されてきましたが、乱獲の影響から国際的な保護対象となっています。",
  observationPoint: "額だけでなく眼の周囲を見て、名前の由来となった眼鏡状の模様を探してください。",
  references: [
    "IUCN Grouper and Wrasse Specialist Group: Cheilinus undulatus",
    "CITES: Cheilinus undulatus Appendix II",
    "FishBase: Cheilinus undulatus"
  ]
},

{
  id: "sp0382",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コバンザメ",
  scientificName: "Echeneis naucrates",
  englishName: "Live sharksucker",
  classification: ["脊索動物門", "条鰭綱", "Carangiformes", "コバンザメ科", "コバンザメ属"],
  category: "魚類",
  image: "images/sp0382.jpg",
  trivia: [
    {
      title: "サメではない",
      text: "名前にサメとありますが硬骨魚で、分類上はアジ類に近いグループです。"
    },
    {
      title: "吸盤は背びれが変化したもの",
      text: "頭上の小判型吸着盤は第一背びれが特殊化したもので、多数の板状構造を立てて大型動物へ付着します。"
    }
  ],
  bodyLength: "最大で全長約110cm。",
  distribution: "世界の熱帯・亜熱帯海域に広く分布します。",
  habitat: "外洋から沿岸まで見られ、サメ、エイ、ウミガメ、大型魚などに付着して移動します。",
  diet: "宿主の食べ残し、小魚、甲殻類などを食べ、宿主表面の寄生生物を利用する場合もあります。",
  features: "細長い体と、頭頂部にある楕円形の吸着盤が最大の特徴です。",
  behavior: "大型動物へ吸着して移動し、遊泳エネルギーを節約しながら新しい餌場へ移れます。",
  reproduction: "卵生で浮遊卵を産み、幼魚は吸着盤が発達すると大型動物への付着を始めます。",
  identification: "頭上の大きな吸着盤があるため、他の魚と容易に区別できます。",
  nameOrigin: "頭の吸着盤が江戸時代の小判に似ることからコバンザメと呼ばれます。",
  humanRelation: "大型水槽ではサメやエイへ付着する姿を観察でき、共生関係を説明する代表的な魚です。",
  observationPoint: "どの魚に付いているかだけでなく、吸着盤の板が何列ほど並んでいるかも見てください。",
  references: [
    "WoRMS: Echeneis naucrates",
    "FishBase: Echeneis naucrates"
  ]
},

{
  id: "sp0383",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ドクウツボ",
  scientificName: "Gymnothorax javanicus",
  englishName: "Giant moray",
  classification: ["脊索動物門", "条鰭綱", "ウナギ目", "ウツボ科", "ウツボ属"],
  category: "魚類",
  image: "images/sp0383.jpg",
  trivia: [
    {
      title: "ウツボ類最大級",
      text: "全長3mに達する可能性がある世界最大級のウツボで、大型個体では頭部だけでも非常に大きくなります。"
    },
    {
      title: "『毒』は毒牙ではない",
      text: "毒牙はありませんが、食物連鎖でシガテラ毒を蓄積する個体があり、食用時に中毒の危険があります。"
    }
  ],
  bodyLength: "最大で全長約300cm。",
  distribution: "南日本からインド・太平洋の熱帯サンゴ礁域に広く分布します。",
  habitat: "礁湖や外礁斜面の洞窟・岩穴などに生息し、水深50m程度までよく見られます。",
  diet: "主に魚類を捕食し、甲殻類なども食べます。",
  features: "非常に太く大型の体を持ち、褐色系の体に黒色斑点が密に入ります。",
  behavior: "昼は岩穴から頭を出していることが多く、夜に活動して魚を捕食します。",
  reproduction: "卵生で、ふ化後は透明な葉状のレプトケファルス幼生として浮遊生活を送ります。",
  identification: "巨大な体格と、細かな黒色斑が全身に密集する模様が特徴です。",
  nameOrigin: "食用による中毒が知られることが「ドクウツボ」という名称に関係すると考えられます。",
  humanRelation: "大型で鋭い歯を持つため野外では不用意に近づかず、食用ではシガテラ中毒の危険があります。",
  observationPoint: "口の開閉に注目してください。ウツボ類は呼吸のために口を繰り返し開閉します。",
  references: [
    "WoRMS: Gymnothorax javanicus",
    "FishBase: Gymnothorax javanicus"
  ]
},

{
  id: "sp0384",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ニセゴイシウツボ",
  scientificName: "Gymnothorax isingteena",
  englishName: "Spotted moray",
  classification: ["脊索動物門", "条鰭綱", "ウナギ目", "ウツボ科", "ウツボ属"],
  category: "魚類",
  image: "images/sp0384.jpg",
  trivia: [
    {
      title: "名前通り『ゴイシ』模様",
      text: "淡色の体に大きな黒褐色斑が多数あり、碁石を散らしたように見えます。"
    },
    {
      title: "昔はいくつもの別学名で呼ばれた",
      text: "Gymnothorax melanospilosなど複数の名称が使われましたが、現在WoRMSではGymnothorax isingteenaが受理名です。"
    }
  ],
  bodyLength: "大型では全長150cm以上になります。",
  distribution: "日本、中国、台湾、東南アジアなどインド・西太平洋に分布します。",
  habitat: "沿岸の岩礁やサンゴ礁の穴・割れ目などに生息します。",
  diet: "魚類、甲殻類などを捕食します。",
  features: "淡色から黄褐色の体に、不規則な大きい黒褐色斑が多数散在します。",
  behavior: "岩穴を拠点に暮らし、頭だけを外へ出して周囲を警戒することがあります。",
  reproduction: "卵生で、幼生期には透明なレプトケファルス幼生になります。",
  identification: "黒色斑の大きさ・配置や頭部模様を確認し、似たゴイシウツボ類がいるため模様だけでは判断しません。",
  nameOrigin: "ゴイシウツボに似た碁石状模様を持つ別種であることからニセゴイシウツボと呼ばれます。",
  humanRelation: "大型のウツボ類で、ダイビングや水族館で観察されます。",
  observationPoint: "ドクウツボと比べ、黒い模様が細かな点なのか大きな斑点なのか見てください。",
  references: [
    "WoRMS: Gymnothorax isingteena",
    "FishBase: Gymnothorax isingteena"
  ]
},

{
  id: "sp0385",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ギンガメアジ",
  scientificName: "Caranx sexfasciatus",
  englishName: "Bigeye trevally",
  classification: ["脊索動物門", "条鰭綱", "Carangiformes", "アジ科", "ギンガメアジ属"],
  category: "魚類",
  image: "images/sp0385.jpg",
  trivia: [
    {
      title: "昼と夜で行動が変わる",
      text: "昼は大きな群れでまとまり、夜になると群れが散らばって活発に獲物を捕食します。"
    },
    {
      title: "ダイバー憧れの巨大な群れ",
      text: "数百匹の群れが渦を巻く「ギンガメアジトルネード」は、南西諸島などのダイビングで人気があります。"
    }
  ],
  bodyLength: "最大で全長約120cm。",
  distribution: "世界の熱帯・亜熱帯海域に広く分布し、日本では南日本を中心に見られます。",
  habitat: "サンゴ礁、岩礁、外洋性の島などに生息し、幼魚は河口域も利用します。",
  diet: "魚類、エビ・カニ、頭足類などを捕食します。",
  features: "銀色の体、大きな眼、鰓蓋上部付近の黒斑が特徴で、尾びれは強く二叉します。",
  behavior: "昼は密集した群れを作り、夜は活発な捕食者になります。",
  reproduction: "卵生で、海中へ浮遊卵を放出します。",
  identification: "大きな眼と、鰓蓋上方の暗色斑が特徴です。",
  nameOrigin: "銀色に輝く大型のアジであることが名称に表れています。",
  humanRelation: "釣魚・食用魚として利用され、大群を作るためダイビング観光でも重要です。",
  observationPoint: "1匹より群れ全体を見て、ほぼ同時に方向転換する動きに注目してください。",
  references: [
    "FishBase: Caranx sexfasciatus",
    "WoRMS: Caranx sexfasciatus"
  ]
},

{
  id: "sp0386",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コバンアジ",
  scientificName: "Trachinotus baillonii",
  englishName: "Smallspotted dart",
  classification: ["脊索動物門", "条鰭綱", "Carangiformes", "アジ科", "コバンアジ属"],
  category: "魚類",
  image: "images/sp0386.jpg",
  trivia: [
    {
      title: "体側に黒い小さな点",
      text: "銀色の体側上部に数個の小さな黒点が並び、英名Smallspotted dartの由来になっています。"
    },
    {
      title: "砂浜沿岸を高速で泳ぐ",
      text: "薄く流線型の体と強く二叉した尾びれで、浅い沿岸を高速で泳ぎます。"
    }
  ],
  bodyLength: "最大で全長約60cm。",
  distribution: "南日本からインド・太平洋の熱帯・亜熱帯域に広く分布します。",
  habitat: "砂浜沿岸、サンゴ礁、外礁周辺などの浅海に生息します。",
  diet: "小魚、甲殻類、その他の小型動物を捕食します。",
  features: "強く側扁した銀色の体、鎌状の背びれ・尻びれ、深く二叉した尾びれを持ち、体側上部には黒点があります。",
  behavior: "沿岸の中層を高速で泳ぎ、単独または小群で餌を追います。",
  reproduction: "卵生で、浮遊卵を海中へ放出します。",
  identification: "銀色の薄い体、鎌状のひれ、体側上部に並ぶ小黒点が特徴です。",
  nameOrigin: "体形が小判のように平たく見えることが名称に関係するとされています。",
  humanRelation: "釣魚・食用魚として利用されます。",
  observationPoint: "横から体の薄さを見て、体側上部の黒点も数えてみてください。",
  references: [
    "WoRMS: Trachinotus baillonii",
    "FishBase: Trachinotus baillonii"
  ]
},

{
  id: "sp0387",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロヒラアジ",
  scientificName: "Ferdauia ferdau",
  englishName: "Blue trevally",
  classification: ["脊索動物門", "条鰭綱", "Carangiformes", "アジ科", "Ferdauia属"],
  category: "魚類",
  image: "images/sp0387.jpg",
  trivia: [
    {
      title: "2020年代の分類では属名が変更",
      text: "長くCarangoides ferdauとされましたが、現在WoRMSやFishBaseではFerdauia ferdauが受理名です。"
    },
    {
      title: "大型では70cm",
      text: "体高のある大型のアジで、全長約70cmまで成長します。"
    }
  ],
  bodyLength: "最大で全長約70cm。",
  distribution: "東アフリカから日本、ハワイなどインド・太平洋に広く分布します。",
  habitat: "サンゴ礁、岩礁、礁湖、外礁斜面などに生息します。",
  diet: "小魚、甲殻類などを捕食します。",
  features: "銀色から青灰色の体に青色系の縞や斑紋が現れ、胸びれは鎌状です。",
  behavior: "単独または小群で礁周辺を泳ぎながら獲物を探します。",
  reproduction: "卵生で浮遊卵を放出しますが、詳しい地域別産卵期は一律には記載しません。",
  identification: "体側の青色系の縞、体高、ひれの形などを総合して確認します。",
  nameOrigin: "黒みを帯びて見える体色と、平たいアジ型の体が名称に関係すると考えられます。",
  humanRelation: "漁獲され食用になり、大型アジ類として釣りの対象にもなります。",
  observationPoint: "同じ水槽の他のアジ類と比べ、体高のある体形に注目してください。",
  references: [
    "WoRMS: Ferdauia ferdau",
    "FishBase: Ferdauia ferdau",
    "旧名 Carangoides ferdau"
  ]
},

{
  id: "sp0388",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "シマアジ",
  scientificName: "Pseudocaranx dentex",
  englishName: "White trevally",
  classification: ["脊索動物門", "条鰭綱", "Carangiformes", "アジ科", "シマアジ属"],
  category: "魚類",
  image: "images/sp0388.jpg",
  trivia: [
    {
      title: "高級魚として養殖も盛ん",
      text: "天然物は高級魚として知られ、日本では安定供給のため養殖も行われています。"
    },
    {
      title: "若魚の体には黄色い線",
      text: "若魚では銀色の体側に黄色い縦線が目立ち、成長すると次第に不明瞭になります。"
    }
  ],
  bodyLength: "最大で全長1mを超え、WoRMSではPseudocaranx dentexが現在の受理名です。",
  distribution: "日本を含む世界の温帯から亜熱帯海域に広く分布します。",
  habitat: "沿岸の岩礁、砂地、沖合の島周辺などに生息します。",
  diet: "小魚、甲殻類、イカ類などを捕食します。",
  features: "銀白色で体高があり、黄色味を帯びる縦線と尾柄の硬い稜鱗が特徴です。",
  behavior: "群れを作って活発に泳ぎ、小魚などを追います。",
  reproduction: "卵生で浮遊卵を放出し、養殖では人工種苗生産も行われています。",
  identification: "尾柄の稜鱗、体側の黄色い線、体高を確認します。",
  nameOrigin: "若魚に見られる縞状模様が標準和名に関係するとされています。",
  humanRelation: "刺身・寿司などで非常に評価が高く、日本では重要な養殖魚でもあります。",
  observationPoint: "マアジより体高があり、尾の付け根が強く締まっていることを比べてください。",
  references: [
    "WoRMS: Pseudocaranx dentex",
    "FishBase: Pseudocaranx dentex"
  ]
},

{
  id: "sp0389",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ニセカンランハギ",
  scientificName: "Acanthurus dussumieri",
  englishName: "Eyestripe surgeonfish",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "ニザダイ科", "クロハギ属"],
  category: "魚類",
  image: "images/sp0389.jpg",
  trivia: [
    {
      title: "30年生きる記録がある",
      text: "FishBaseでは最高齢30年が記録されており、サンゴ礁魚の中でも比較的長寿です。"
    },
    {
      title: "尾の付け根に本物の『メス』",
      text: "尾柄の左右に前向きの鋭い骨質棘があり、防御に使われるためニザダイ科はsurgeonfishと呼ばれます。"
    }
  ],
  bodyLength: "最大で全長約54cm。",
  distribution: "東アフリカから南日本、ハワイ、オーストラリアなどインド・太平洋に広く分布します。",
  habitat: "主に外洋に面したサンゴ礁斜面や深めの礁壁に生息し、水深4〜131mから記録されています。",
  diet: "砂や岩の表面に付く微細藻類、珪藻、藍藻、デトリタスなどを食べます。",
  features: "淡褐色の体に細かな線が入り、眼の周囲には橙色から黄色の線があり、尾柄の棘周辺は暗色です。",
  behavior: "単独または群れで行動し、昼に海底表面をついばんで食べます。",
  reproduction: "雌雄がペアで産卵することが知られ、卵は浮遊性です。",
  identification: "眼周辺の線、体側の細かな模様、尾柄棘周辺の色を確認します。",
  nameOrigin: "カンランハギに似ることからニセカンランハギと呼ばれます。",
  humanRelation: "地域によって食用になり、観賞魚として扱われることもあります。",
  observationPoint: "眼の周囲と尾の付け根を順番に見ると、識別点を確認できます。",
  references: [
    "WoRMS: Acanthurus dussumieri",
    "BISMaL: Acanthurus dussumieri",
    "FishBase: Acanthurus dussumieri"
  ]
},

{
  id: "sp0390",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クロモンツキ",
  scientificName: "Acanthurus nigricauda",
  englishName: "Epaulette surgeonfish",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "ニザダイ科", "クロハギ属"],
  category: "魚類",
  image: "images/sp0390.jpg",
  trivia: [
    {
      title: "肩に黒い帯がある",
      text: "成魚では鰓蓋後方から体上部へ黒帯が伸び、英名Epaulette surgeonfishでは「肩章」に例えられています。"
    },
    {
      title: "サンゴの上より砂地を好む",
      text: "多くのニザダイ類と比べ、湾や礁湖の砂地周辺を好む傾向があります。"
    }
  ],
  bodyLength: "最大で尾叉長約45.3cm。",
  distribution: "東アフリカから琉球列島、オーストラリア、ツアモツ諸島までインド・太平洋に分布します。",
  habitat: "透明度の高い礁湖や湾内、砂底とサンゴが混じる浅場に生息し、水深0〜30m程度で見られます。",
  diet: "藻類やデトリタスなどを海底表面から食べます。",
  features: "暗褐色から紫灰色の体で、成魚では鰓蓋後方に黒帯があり、尾柄には白色帯と鋭い棘があります。",
  behavior: "単独または小群で砂地・礁湖を泳ぎながら海底表面をついばみます。",
  reproduction: "卵生で、海中へ浮遊卵を放出します。",
  identification: "鰓蓋後方の黒帯と尾柄基部の白色帯が重要で、幼魚では黒帯が目立たない場合があります。",
  nameOrigin: "体側に目立つ黒い斑・帯を持つことが標準和名に関係します。",
  humanRelation: "観賞魚や地域的な食用魚として利用されます。",
  observationPoint: "黒帯だけでなく、尾柄にある白い帯と棘も確認してください。",
  references: [
    "WoRMS: Acanthurus nigricauda",
    "BISMaL: Acanthurus nigricauda",
    "FishBase: Acanthurus nigricauda"
  ]
},

{
  id: "sp0391",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "テングハギ",
  scientificName: "Naso unicornis",
  englishName: "Bluespine unicornfish",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "ニザダイ科", "テングハギ属"],
  category: "魚類",
  image: "images/sp0391.jpg",
  trivia: [
    {
      title: "成長すると額から角が伸びる",
      text: "幼魚にはほとんどありませんが、成長すると眼より前方の額から角状突起が伸び、英名unicornfishの由来になります。"
    },
    {
      title: "尾には青い刃",
      text: "尾柄の左右に2個ずつ非常に鋭い青色の骨質板があり、防御に使われます。"
    }
  ],
  bodyLength: "最大で全長約70cm。",
  distribution: "紅海・東アフリカから日本、ハワイ、中央太平洋までインド・太平洋に広く分布します。",
  habitat: "サンゴ礁や岩礁、とくに波当たりや潮通しのよい場所に生息します。",
  diet: "主に大型褐藻などを食べる植食性です。",
  features: "成魚では額に角状突起が発達し、尾柄には青色の骨質板があります。",
  behavior: "昼に岩礁を泳いで大型藻類を食べ、単独や群れで見られます。",
  reproduction: "卵生で、雌雄が中層へ上昇しながら放卵・放精することがあります。",
  identification: "額の角と尾柄の青色板が非常に特徴的です。",
  nameOrigin: "額の角状突起を天狗の長い鼻に見立てた標準和名です。",
  humanRelation: "食用・観賞魚として利用され、サンゴ礁の大型植食魚として重要です。",
  observationPoint: "角だけでなく尾の付け根も見て、青色の鋭い骨質板を探してください。",
  references: [
    "WoRMS: Naso unicornis",
    "FishBase: Naso unicornis"
  ]
},

{
  id: "sp0392",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヨスジフエダイ",
  scientificName: "Lutjanus kasmira",
  englishName: "Common bluestripe snapper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエダイ科", "フエダイ属"],
  category: "魚類",
  image: "images/sp0392.jpg",
  trivia: [
    {
      title: "名前通り青い線が4本",
      text: "鮮やかな黄色い体側上部に4本の青色縦線が走り、群れになると非常に目立ちます。"
    },
    {
      title: "昼は大群で集まる",
      text: "昼はサンゴ、洞窟、沈船周辺などで大群を作り、夜になると餌を求めて分散することがあります。"
    }
  ],
  bodyLength: "最大で全長約40cm。",
  distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋まで広く分布します。",
  habitat: "礁湖から外礁斜面までサンゴ礁周辺に生息し、水深3〜265mから記録されています。",
  diet: "魚類、エビ、カニ、シャコ、頭足類、プランクトン性甲殻類など幅広く食べます。",
  features: "体上部が黄色、腹側が白色で、体側に4本の青い縦線があり、ひれも黄色です。",
  behavior: "昼は非常に大きな群れを作り、夜は活動範囲を広げます。",
  reproduction: "卵生で、浮遊卵を産みます。",
  identification: "黄色い体と4本の明瞭な青線を数えると識別しやすい種類です。",
  nameOrigin: "4本の筋を持つフエダイであることがそのまま和名になっています。",
  humanRelation: "各地で食用に利用され、水族館では大群展示に向く魚です。",
  observationPoint: "4本の線を数えた後、群れが同じ方向へ動く様子も観察してください。",
  references: [
    "WoRMS: Lutjanus kasmira",
    "FishBase: Lutjanus kasmira"
  ]
},

{
  id: "sp0393",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "フエダイ",
  scientificName: "Lutjanus stellatus",
  englishName: "Star snapper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエダイ科", "フエダイ属"],
  category: "魚類",
  image: "images/sp0393.jpg",
  trivia: [
    {
      title: "日本で記載された比較的新しい学名",
      text: "Lutjanus stellatusは1983年に南日本から新種として記載されました。"
    },
    {
      title: "体には白い星のような斑点",
      text: "側線の上、背びれ軟条部の下付近に白色斑があり、種小名stellatus＝「星のある」にもつながります。"
    }
  ],
  bodyLength: "最大で全長約55cmで、一般には35cm前後です。",
  distribution: "南日本から香港周辺までの北西太平洋に分布します。",
  habitat: "沿岸のサンゴ礁・岩礁周辺に生息します。",
  diet: "魚類や甲殻類などを捕食する肉食魚です。",
  features: "褐色から紫褐色の体を持ち、吻から鰓蓋に青色線があり、体側上部には特徴的な白色斑があります。",
  behavior: "単独または小群で岩礁周辺を泳ぎ、魚や甲殻類を捕食します。",
  reproduction: "卵生で浮遊卵を産み、詳しい産卵期は地域差があるため一律には記載しません。",
  identification: "吻から鰓蓋へ伸びる青線と、側線上方の白色斑が特徴です。",
  nameOrigin: "標準和名はフエダイ属を代表する魚として付けられています。",
  humanRelation: "食用魚として漁獲され、刺身や焼き物などに利用されます。",
  observationPoint: "褐色の体の中にある白色斑を探してください。目立つ識別点です。",
  references: [
    "WoRMS: Lutjanus stellatus",
    "FishBase: Lutjanus stellatus",
    "Akazaki 1983: original description"
  ]
},

{
  id: "sp0394",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ニセクロホシフエダイ",
  scientificName: "Lutjanus fulviflamma",
  englishName: "Blackspot snapper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエダイ科", "フエダイ属"],
  category: "魚類",
  image: "images/sp0394.jpg",
  trivia: [
    {
      title: "体側の黒斑が最大の目印",
      text: "側線付近の背側に大きな黒色斑があり、黄色系の体側線と組み合わさります。"
    },
    {
      title: "河口にも入る",
      text: "若魚はサンゴ礁だけでなく、マングローブや河口などの汽水域も利用します。"
    }
  ],
  bodyLength: "最大で全長約50cm。",
  distribution: "紅海・東アフリカから琉球列島、オーストラリア、サモアまでインド・太平洋に広く分布します。",
  habitat: "サンゴ礁、岩礁、海草藻場、河口、マングローブ周辺などに生息します。",
  diet: "魚類、エビ・カニなどの甲殻類、小型無脊椎動物を捕食します。",
  features: "黄褐色から黄色の体側に細い黄色線が複数入り、体側上部には大きな黒斑があります。",
  behavior: "単独または群れで行動し、夜に活発に餌を食べることがあります。",
  reproduction: "卵生で、浮遊卵を産みます。",
  identification: "体側の黒斑と黄色系の縦線を組み合わせて確認し、クロホシフエダイなどとの混同に注意します。",
  nameOrigin: "クロホシフエダイに似た別種であることから「ニセ」が付いています。",
  humanRelation: "食用魚として広く利用されます。",
  observationPoint: "黒斑だけでなく、その周囲を通る黄色い線も一緒に見てください。",
  references: [
    "WoRMS: Lutjanus fulviflamma",
    "FishBase: Lutjanus fulviflamma"
  ]
},

{
  id: "sp0395",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アミメフエダイ",
  scientificName: "Lutjanus decussatus",
  englishName: "Checkered snapper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエダイ科", "フエダイ属"],
  category: "魚類",
  image: "images/sp0395.jpg",
  trivia: [
    {
      title: "体の模様が本当に網目状",
      text: "体上半部では縦・横の褐色線が交差し、四角い白い窓が並ぶようなチェック模様になります。"
    },
    {
      title: "尾の付け根には大きな黒斑",
      text: "尾柄には大きな黒色斑があり、網目模様と合わせて識別しやすい種類です。"
    }
  ],
  bodyLength: "最大で全長約35cm。",
  distribution: "インド、スリランカから琉球列島、ニューギニア周辺までインド・西太平洋に分布します。",
  habitat: "沿岸・沖合のサンゴ礁に生息し、幼魚は浅く保護された礁原も利用します。",
  diet: "魚類、甲殻類などの小動物を捕食します。",
  features: "白っぽい体に縦横の褐色線が入り、上半身はチェック模様になります。尾びれ基部には大きな黒斑があります。",
  behavior: "単独または群れでサンゴ礁周辺を泳ぎます。",
  reproduction: "卵生で浮遊卵を産みますが、本種固有の産卵期は地域差があるため断定しません。",
  identification: "上半身の網目・チェック模様と尾柄の黒斑が最大の特徴です。",
  nameOrigin: "体側の線が網目のように見えることからアミメフエダイと呼ばれます。",
  humanRelation: "食用魚として漁獲され、幼魚は観賞魚として流通することもあります。",
  observationPoint: "体上半分を近くで見て、縦線と横線が交差する四角い模様を探してください。",
  references: [
    "WoRMS: Lutjanus decussatus",
    "FishBase: Lutjanus decussatus"
  ]
},

{
  id: "sp0396",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ハマフエフキ",
  scientificName: "Lethrinus nebulosus",
  englishName: "Spangled emperor",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエフキダイ科", "フエフキダイ属"],
  category: "魚類",
  image: "images/sp0396.jpg",
  trivia: [
    {
      title: "全身に青い斑点",
      text: "成魚では頬や体側に細かな青い斑点や線が現れ、体色は環境や興奮状態でも大きく変化します。"
    },
    {
      title: "大型では80cm近くになる",
      text: "フエフキダイ類でも大型で、FishBaseでは最大全長87cmが記録されています。"
    }
  ],
  bodyLength: "最大で全長約87cmで、一般には40〜60cm程度です。",
  distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋までインド・太平洋に広く分布します。",
  habitat: "サンゴ礁、岩礁、砂礫底、海草藻場など沿岸の浅海域に生息します。",
  diet: "甲殻類、軟体動物、ウニ類、小魚など海底の動物を幅広く捕食します。",
  features: "比較的長い吻と厚い唇を持ち、体側や頭部には青色の斑点・線があります。",
  behavior: "昼に礁周辺や砂地で餌を探し、単独から小群で見られます。",
  reproduction: "卵生で海中へ放卵・放精し、繁殖時期は地域差があるため一律の月は記載しません。",
  identification: "青い斑点・線、長めの吻、大型になる体格を組み合わせて識別します。",
  nameOrigin: "浜に近い浅海域でも見られるフエフキダイ類であることが名称に関係すると考えられます。",
  humanRelation: "重要な食用魚で、釣りや沿岸漁業の対象になります。",
  observationPoint: "顔の周辺を見ると、細かな青い線や斑点を確認できます。",
  references: [
    "BISMaL: Lethrinus nebulosus ハマフエフキ",
    "FishBase: Lethrinus nebulosus"
  ]
},

{
  id: "sp0397",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヒメアイゴ",
  scientificName: "Siganus virgatus",
  englishName: "Barhead spinefoot",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "アイゴ科", "アイゴ属"],
  category: "魚類",
  image: "images/sp0397.jpg",
  trivia: [
    {
      title: "頭に2本の黒い帯",
      text: "眼を通る帯と、背びれ付近から胸びれ方向へ伸びる帯の2本が頭部に目立ちます。"
    },
    {
      title: "棘には毒がある",
      text: "背びれ・腹びれ・尻びれの強い棘には毒腺があり、刺されると強い痛みを生じます。"
    }
  ],
  bodyLength: "最大で全長約30cmで、一般には20cm前後です。",
  distribution: "南日本、台湾、中国南部、東南アジア、オーストラリア北部などインド・西太平洋に分布します。",
  habitat: "浅いサンゴ礁、砂地、岩礁、河口、マングローブ周辺などに生息します。",
  diet: "主に海藻や付着藻類を食べる植食性です。",
  features: "黄色味のある体に頭部を横切る2本の暗色帯があり、背びれなどには鋭い毒棘があります。",
  behavior: "成魚はペアで見られることが多く、岩やサンゴ表面の藻類をついばみます。",
  reproduction: "卵生で、海中へ放卵・放精します。",
  identification: "頭部の2本の太い暗色帯と黄色い体色が重要です。",
  nameOrigin: "アイゴ類の中で比較的小型・細身に見えることが和名に関係すると考えられます。",
  humanRelation: "地域によって食用になりますが、ひれの毒棘には注意が必要です。",
  observationPoint: "頭部の2本の帯を探し、その後に背びれの棘も見てください。",
  references: [
    "BISMaL: Siganus virgatus ヒメアイゴ",
    "FishBase: Siganus virgatus"
  ]
},

{
  id: "sp0398",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ゴマアイゴ",
  scientificName: "Siganus guttatus",
  englishName: "Orange-spotted spinefoot",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "アイゴ科", "アイゴ属"],
  category: "魚類",
  image: "images/sp0398.jpg",
  trivia: [
    {
      title: "全身にゴマのような斑点",
      text: "体や頭部に多数の細かな斑点があり、和名の「ゴマ」を思わせます。"
    },
    {
      title: "アイゴ類では珍しく夜にも活発",
      text: "FishBaseでは夜行性が報告されており、他の多くのアイゴ類とは少し違う行動をします。"
    }
  ],
  bodyLength: "最大で全長約42cmで、一般には25cm前後です。",
  distribution: "琉球列島、中国南部、台湾、東南アジア、フィリピン、パラオなどに分布します。",
  habitat: "濁りのある沿岸礁、マングローブ、河口、海草藻場など、塩分が変化する環境にも生息します。",
  diet: "主に海底の付着藻類を食べます。",
  features: "青灰色から黄褐色の体に多数の斑点があり、背びれ後方付近には鮮黄色の斑紋があります。",
  behavior: "一生を通して群れを作る傾向があり、成魚では10〜15匹ほどの群れも見られます。",
  reproduction: "卵生で、FishBaseでは主に真夜中に産卵すると報告されています。",
  identification: "全身の細かな斑点と、背びれ後部付近の黄色い斑紋が特徴です。",
  nameOrigin: "体表の多数の小さな斑点をゴマ粒に見立てた名称です。",
  humanRelation: "食用・養殖・観賞魚として利用されます。ひれの棘には毒があります。",
  observationPoint: "体側だけでなく、顔にも斑点があることを確認してください。",
  references: [
    "BISMaL: Siganus guttatus ゴマアイゴ",
    "FishBase: Siganus guttatus"
  ]
},

{
  id: "sp0399",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オニハタタテダイ",
  scientificName: "Heniochus monoceros",
  englishName: "Masked bannerfish",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "チョウチョウウオ科", "ハタタテダイ属"],
  category: "魚類",
  image: "images/sp0399.jpg",
  trivia: [
    {
      title: "頭に小さな角がある",
      text: "成魚では眼の上から額付近に小さな突起が発達し、種小名monocerosも「一角」を意味します。"
    },
    {
      title: "ハタタテダイより顔つきがごつい",
      text: "額の突起と眼上部の隆起により、近縁のハタタテダイより複雑で力強い顔つきになります。"
    }
  ],
  bodyLength: "最大で全長約24cm。",
  distribution: "東アフリカから南日本、オーストラリア、ツアモツ諸島までインド・太平洋に分布します。",
  habitat: "サンゴ礁や岩礁の浅場、水深2〜30m程度に生息します。",
  diet: "底生無脊椎動物やサンゴ周辺の小動物などを食べます。",
  features: "白・黒・黄色の大きな帯模様、長く伸びる背びれ、額周辺の小突起が特徴です。",
  behavior: "単独、ペア、小群などで岩礁周辺を泳ぎます。",
  reproduction: "卵生で、繁殖時には雌雄が海中へ放卵・放精します。",
  identification: "額の突起と眼付近の隆起を確認すると、ハタタテダイとの識別に役立ちます。",
  nameOrigin: "頭部の突起など、通常のハタタテダイより荒々しく見える姿が「オニ」の名に関係すると考えられます。",
  humanRelation: "観賞魚や水族館展示で知られます。",
  observationPoint: "長い背びれだけでなく額を見て、小さな角状突起を探してください。",
  references: [
    "BISMaL: Heniochus monoceros オニハタタテダイ",
    "FishBase: Heniochus monoceros"
  ]
},

{
  id: "sp0400",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "センネンダイ",
  scientificName: "Lutjanus sebae",
  englishName: "Emperor red snapper",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "フエダイ科", "フエダイ属"],
  category: "魚類",
  image: "images/sp0400.jpg",
  trivia: [
    {
      title: "子どもは3本の赤い帯",
      text: "幼魚や若魚では白っぽい体に3本の太い赤褐色帯が入り、成長すると全身が赤色へ変化します。"
    },
    {
      title: "40年以上生きる記録",
      text: "FishBaseでは最高齢40年が記録されている、大型で長寿なフエダイです。"
    }
  ],
  bodyLength: "最大で全長1mを超え、FishBaseでは116cmの記録があります。",
  distribution: "紅海南部・東アフリカから南日本、ニューカレドニア、オーストラリアまでインド・西太平洋に分布します。",
  habitat: "サンゴ礁、岩礁、砂泥底など水深5〜180m程度に生息します。",
  diet: "魚類、甲殻類、頭足類などを捕食します。",
  features: "幼若魚には3本の幅広い赤色帯があり、大型成魚では全体が赤色になります。",
  behavior: "成魚は岩礁周辺で単独または群れで生活します。",
  reproduction: "卵生で海中へ浮遊卵を放出します。",
  identification: "若魚の3本の赤帯が非常に特徴的で、大型成魚では帯が薄れます。",
  nameOrigin: "標準和名の詳しい命名由来は主要資料から確定できないため断定しません。",
  humanRelation: "大型の重要食用魚として漁獲されます。",
  observationPoint: "若い個体と成魚がいれば、模様の変化を比べてください。",
  references: [
    "BISMaL: Lutjanus sebae センネンダイ",
    "FishBase: Lutjanus sebae"
  ]
},

{
  id: "sp0401",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "チョウチョウコショウダイ",
  scientificName: "Plectorhinchus chaetodonoides",
  englishName: "Harlequin sweetlips",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "イサキ科", "コショウダイ属"],
  category: "魚類",
  image: "images/sp0401.jpg",
  trivia: [
    {
      title: "幼魚は全身をくねくね",
      text: "幼魚は白と褐色の大きな模様を持ち、頭を下げながら全身を激しくくねらせて泳ぎます。"
    },
    {
      title: "大人は水玉模様へ",
      text: "成魚になると模様が大きく変わり、淡色の体に黒褐色の丸い斑点が多数入ります。"
    }
  ],
  bodyLength: "最大で全長約72cm。",
  distribution: "インド洋から琉球列島、フィジー、ニューカレドニアなどインド・西太平洋に分布します。",
  habitat: "透明度の高いサンゴ礁・礁湖・外礁斜面に生息します。",
  diet: "夜に甲殻類、貝類、魚類などを捕食します。",
  features: "幼魚と成魚で模様が大きく変わり、成魚では白っぽい体に多数の黒褐色斑があります。",
  behavior: "成魚は昼に洞窟や岩棚の下などで休み、夜に活動して餌を探します。",
  reproduction: "卵生で、繁殖時にペアを形成することが知られています。",
  identification: "幼魚では大きな白黒斑とくねる泳ぎ、成魚では全身の丸い斑点が特徴です。",
  nameOrigin: "幼魚の模様がチョウチョウウオ類を思わせることが和名に関係します。",
  humanRelation: "幼魚の独特な泳ぎから観賞魚として非常に人気があります。",
  observationPoint: "幼魚がいれば、通常の魚とは大きく違う全身をくねらせる泳ぎ方に注目してください。",
  references: [
    "BISMaL: Plectorhinchus chaetodonoides",
    "FishBase: Plectorhinchus chaetodonoides"
  ]
},

{
  id: "sp0402",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ツバメウオ",
  scientificName: "Platax teira",
  englishName: "Longfin batfish",
  classification: ["脊索動物門", "条鰭綱", "Acanthuriformes", "マンジュウダイ科", "ツバメウオ属"],
  category: "魚類",
  image: "images/sp0402.jpg",
  trivia: [
    {
      title: "幼魚は枯れ葉のよう",
      text: "幼魚は背びれと尻びれが非常に長く、褐色を帯びるため、水中を漂う枯れ葉のように見えます。"
    },
    {
      title: "大人になると丸い魚へ",
      text: "成長するとひれが相対的に短くなり、銀色で体高の高い大型魚へ変化します。"
    }
  ],
  bodyLength: "最大で全長約70cm。",
  distribution: "紅海・東アフリカから南日本、オーストラリア、中西部太平洋に分布します。",
  habitat: "サンゴ礁、岩礁、沈船、港湾などの中層に生息します。",
  diet: "藻類、クラゲ類、小型無脊椎動物などを食べる雑食性です。",
  features: "非常に体高の高い円盤状の体と、幼魚で長く伸びる背びれ・尻びれが特徴です。",
  behavior: "成魚は小群から大きな群れを作ることがあります。",
  reproduction: "卵生で、浮遊卵を産みます。",
  identification: "成魚では胸びれ付近の黒斑と非常に高い体高が特徴です。",
  nameOrigin: "長いひれを持つ幼魚の輪郭を、飛ぶツバメに見立てたとされています。",
  humanRelation: "水族館・観賞魚として人気があり、食用にも利用されます。",
  observationPoint: "若魚がいれば、成魚と体形を比べてください。",
  references: [
    "BISMaL: Platax teira ツバメウオ",
    "FishBase: Platax teira"
  ]
},

// ホンソメワケベラは既存 sp0033
// LABO1 + LABO10 として後で一括修正

{
  id: "sp0403",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "カンムリベラ",
  scientificName: "Coris aygula",
  englishName: "Clown coris",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "カンムリベラ属"],
  category: "魚類",
  image: "images/sp0403.jpg",
  trivia: [
    {
      title: "子どもと大人が別種のよう",
      text: "幼魚は白い体に黒色や橙色の模様を持ち、大型成魚は青緑色を基調とした全く違う姿になります。"
    },
    {
      title: "大型オスは額が盛り上がる",
      text: "大型の雄型個体では頭部前方が大きく隆起し、「カンムリ」を思わせる姿になります。"
    }
  ],
  bodyLength: "最大で全長約120cm。",
  distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋まで広く分布します。",
  habitat: "サンゴ礁・岩礁の砂地周辺に生息します。",
  diet: "貝類、甲殻類、ウニ類など硬い底生動物を強い歯で捕食します。",
  features: "大型で強い歯を持ち、成長と性による色彩変化が非常に大きいベラです。",
  behavior: "昼に海底を泳いで餌を探し、夜や危険時には砂へ潜ることがあります。",
  reproduction: "ベラ類らしく性転換を行うと考えられ、大型の雄型個体が繁殖に参加します。",
  identification: "幼魚・若魚・成魚で見た目が大きく変わるため、成長段階を考えて判定します。",
  nameOrigin: "大型雄の盛り上がった額を冠に見立てた名称です。",
  humanRelation: "大型ベラとしてダイビングや水族館で人気があります。",
  observationPoint: "口元にある大きな犬歯状の歯にも注目してください。",
  references: [
    "BISMaL: Coris aygula カンムリベラ",
    "FishBase: Coris aygula"
  ]
},

{
  id: "sp0404",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アオブダイ",
  scientificName: "Scarus ovifrons",
  englishName: "Knobsnout parrotfish",
  classification: ["脊索動物門", "条鰭綱", "スズキ目", "ベラ科", "ブダイ亜科", "アオブダイ属"],
  category: "魚類",
  image: "images/sp0404.jpg",
  trivia: [
    {
      title: "歯が一枚の板のよう",
      text: "多数の歯が融合し、オウムのくちばしのような強い歯板になっています。"
    },
    {
      title: "食べるのは危険な場合がある",
      text: "厚生労働省はパリトキシン様毒による食中毒の原因魚として挙げており、筋肉や肝臓などを食べた死亡例もあるため、自己判断での調理・喫食は避けるべき魚です。"
    }
  ],
  bodyLength: "最大で全長約90cm。",
  distribution: "日本近海を中心とする北西太平洋に分布します。",
  habitat: "沿岸の岩礁やサンゴ礁周辺に生息します。",
  diet: "岩礁表面の藻類や付着生物などを、強い歯板で削り取って食べます。",
  features: "大型個体では青緑色を帯び、頭部が丸く盛り上がります。歯は融合して強い歯板になります。",
  behavior: "昼に岩礁を泳ぎ回り、岩面をかじるように餌を食べます。",
  reproduction: "卵生です。ブダイ類では性転換が広く知られますが、本種固有の性システムは資料を限定して断定しません。",
  identification: "大型で丸みのある頭、青緑色の体、強大な歯板が特徴です。",
  nameOrigin: "大型個体が青色から青緑色を帯びることからアオブダイと呼ばれます。",
  humanRelation: "過去には食用とされましたが、パリトキシン様毒による重篤・死亡中毒例があります。",
  observationPoint: "歯を見て、個々に分かれず大きな板のようにつながっていることを確認してください。",
  references: [
    "BISMaL: Scarus ovifrons アオブダイ",
    "厚生労働省：自然毒のリスクプロファイル パリトキシン様毒"
  ]
},


{
  id: "sp0405",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サザナミフグ",
  scientificName: "Arothron hispidus",
  englishName: "White-spotted puffer",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "フグ科", "モヨウフグ属"],
  category: "魚類",
  image: "images/sp0405.jpg",
  trivia: [
    {
      title: "白い点が全身にびっしり",
      text: "暗色から褐色の体全体に多数の白色斑があり、腹側には細かな縞模様も見られます。"
    },
    {
      title: "危険時には大きく膨らむ",
      text: "大量の海水を胃へ取り込み、体を球状に膨らませて捕食されにくくします。"
    }
  ],
  bodyLength: "最大で全長約50cm。",
  distribution: "紅海・東アフリカから南日本、ハワイなどインド・太平洋に広く分布します。",
  habitat: "サンゴ礁、岩礁、礁湖、砂地、海草藻場などに生息します。",
  diet: "甲殻類、軟体動物、棘皮動物、付着生物などを食べます。",
  features: "褐色の体に多数の白斑があり、体表には細かな棘があります。",
  behavior: "普段はゆっくり泳ぎ、海底の餌を強い歯板でかじります。",
  reproduction: "卵生ですが、詳しい野外繁殖生態には未解明な部分があります。",
  identification: "全身の多数の白斑と腹側の線状模様が特徴です。",
  nameOrigin: "腹側などの細かな波状模様を「さざ波」に見立てた名称です。",
  humanRelation: "フグ類は種類や部位によって毒性があるため、自己判断で調理・喫食してはいけません。",
  observationPoint: "白い斑点だけでなく、腹側の模様にも注目してください。",
  references: [
    "BISMaL: Arothron hispidus サザナミフグ",
    "FishBase: Arothron hispidus"
  ]
},

{
  id: "sp0406",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "モヨウフグ",
  scientificName: "Arothron stellatus",
  englishName: "Stellate puffer",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "フグ科", "モヨウフグ属"],
  category: "魚類",
  image: "images/sp0406.jpg",
  trivia: [
    {
      title: "フグ類最大級",
      text: "FishBaseでは最大全長120cmが記録され、モヨウフグ属でも非常に大型になります。"
    },
    {
      title: "子どもは縞、大人は点",
      text: "幼魚では腹側を中心に暗い縞がありますが、成長すると多数の黒い点模様へ変化します。"
    }
  ],
  bodyLength: "最大で全長約120cmで、一般には50cm前後です。",
  distribution: "紅海・東アフリカから南日本、ツアモツ諸島、ロードハウ島までインド・太平洋に分布します。",
  habitat: "サンゴ礁、礁湖、砂地、河口周辺などに生息します。",
  diet: "甲殻類、軟体動物、サンゴ類、棘皮動物などを食べます。",
  features: "成魚は淡灰色から白色の大きな体に、多数の黒い小斑点があります。",
  behavior: "大型成魚は礁斜面などをゆっくり泳ぎ、危険時には体を膨らませます。",
  reproduction: "卵生です。",
  identification: "大型で、全身に非常に多くの細かな黒点が散在することが特徴です。",
  nameOrigin: "全身の複雑な斑点・模様からモヨウフグと呼ばれます。",
  humanRelation: "FishBaseでは食用毒性ありとされ、自己判断での喫食は避けるべき魚です。",
  observationPoint: "幼魚と成魚がいれば、模様の変化を比べてください。",
  references: [
    "BISMaL: Arothron stellatus モヨウフグ",
    "FishBase: Arothron stellatus"
  ]
},

{
  id: "sp0407",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "イシガキフグ",
  scientificName: "Chilomycterus reticulatus",
  englishName: "Spotfin burrfish",
  classification: ["脊索動物門", "条鰭綱", "フグ目", "ハリセンボン科", "イシガキフグ属"],
  category: "魚類",
  image: "images/sp0407.jpg",
  trivia: [
    {
      title: "棘は立ち上がらない",
      text: "ハリセンボンと違い棘は短く固定され、体を膨らませても大きく立ち上がりません。"
    },
    {
      title: "世界中の暖かい海にいる",
      text: "大西洋・インド洋・太平洋に広く分布する、分布域の広いハリセンボン科魚類です。"
    }
  ],
  bodyLength: "最大で約70cm、一般には30cm前後です。",
  distribution: "熱帯・亜熱帯の世界各地の海に広く分布します。",
  habitat: "岩礁、サンゴ礁、砂礫底などに生息します。",
  diet: "貝類、甲殻類、ウニ類など硬い動物を歯板で砕いて食べます。",
  features: "丸い体に短く太い固定棘が多数あり、体には黒色斑があります。",
  behavior: "普段はゆっくり泳ぎ、危険時には水を飲み込んで体を膨らませます。",
  reproduction: "卵生で、仔稚魚は表層を漂って生活します。",
  identification: "ハリセンボンより棘が短く、棘が倒れず固定されていることが特徴です。",
  nameOrigin: "体表の模様や硬い棘が石垣を思わせることが名称に関係するとされています。",
  humanRelation: "水族館で人気があります。食用利用には地域差があるため、自己判断で扱わないことが安全です。",
  observationPoint: "ハリセンボンと棘の長さを比べてください。",
  references: [
    "BISMaL: Chilomycterus reticulatus イシガキフグ",
    "FishBase: Chilomycterus reticulatus"
  ]
},

{
  id: "sp0408",
  areaIds: ["labo10"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ヤシガニ",
  scientificName: "Birgus latro",
  englishName: "Coconut crab",
  classification: ["節足動物門", "軟甲綱", "十脚目", "ヤドカリ下目", "オカヤドカリ科", "ヤシガニ属"],
  category: "甲殻類",
  image: "images/sp0408.jpg",
  trivia: [
    {
      title: "世界最大の陸生節足動物",
      text: "大型個体では体重4kgを超え、脚を広げると1m近くになることがあります。"
    },
    {
      title: "子どもの頃だけ貝殻を使う",
      text: "幼い頃は巻貝の殻を利用しますが、成長すると腹部の外皮が硬くなり、殻を使わなくなります。"
    }
  ],
  bodyLength: "大型個体では体重4kg以上、脚を広げた幅は1m近くになることがあります。",
  distribution: "インド洋から西太平洋の熱帯島嶼に分布し、日本では南西諸島、小笠原諸島などで見られます。",
  habitat: "海岸近くの森林、岩場、洞窟など陸上で生活します。",
  diet: "果実、種子、植物質、動物の死骸などを食べる雑食性です。",
  features: "巨大なはさみと頑丈な歩脚を持ち、成体では腹部も硬くなります。",
  behavior: "主に夜行性で、昼は岩穴などで休み、木へ登ることもあります。",
  reproduction: "交尾後、メスは腹部に卵を抱え、ふ化時期に海岸へ移動して海中へ幼生を放します。幼生期は海中で生活します。",
  identification: "巨大な体格と、巻貝の殻を背負わない成体の姿が特徴です。",
  nameOrigin: "ヤシの実などを食べる姿からヤシガニと呼ばれます。",
  humanRelation: "地域によって食用になりますが、乱獲や生息地減少の影響を受けやすく、日本でも保全対象となる地域があります。",
  observationPoint: "はさみだけでなく腹部を見て、成体が殻を使わないことにも注目してください。",
  references: [
    "WoRMS: Birgus latro",
    "Animal Diversity Web: Birgus latro"
  ]
},

{
  id: "sp0409",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コツメカワウソ",
  scientificName: "Lutra cinerea",
  englishName: "Asian small-clawed otter",
  classification: ["脊索動物門", "哺乳綱", "食肉目", "イタチ科", "カワウソ亜科", "カワウソ属"],
  category: "哺乳類",
  image: "images/sp0409.jpg",
  trivia: [
    {
      title: "最新分類ではLutra cinerea",
      text: "長くAonyx cinereusまたはAonyx cinereaとされましたが、2022年の系統ゲノム研究を受け、最新のMammal Diversity DatabaseではLutra cinereaが有効名です。"
    },
    {
      title: "名前通り爪がとても小さい",
      text: "爪が小さく水かきも完全ではないため、前足の指を器用に使って餌を探せます。"
    }
  ],
  bodyLength: "頭胴長約40〜60cm、尾長約25〜35cm、体重は約3〜6kgです。",
  distribution: "インドから東南アジア、中国南部、台湾、インドネシア、フィリピンなどに分布します。",
  habitat: "河川、湿地、水田、マングローブ、海岸周辺など水辺に生息します。",
  diet: "カニ、貝類、魚類、カエルなどを食べます。",
  features: "カワウソ類では小型で、爪が非常に小さく、前足を器用に使えます。",
  behavior: "社会性が高く家族群で生活し、多彩な鳴き声でコミュニケーションを取ります。",
  reproduction: "雌雄のペアを中心とした家族群で繁殖し、1回に複数の仔を産みます。",
  identification: "小型の体と短い爪、比較的丸い顔が特徴です。",
  nameOrigin: "指先の爪が非常に小さいことからコツメカワウソと呼ばれます。",
  humanRelation: "水族館・動物園で人気がありますが、野生個体は違法なペット取引や生息地減少の影響を受けています。",
  observationPoint: "餌を食べるときの前足を見て、指先を器用に使う様子に注目してください。",
  references: [
    "Mammal Diversity Database 2026: Lutra cinerea",
    "de Ferran et al. 2022. Phylogenomics of the world's otters",
    "旧学名 Aonyx cinerea / Aonyx cinereus"
  ]
},

{
  id: "sp0410",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アメリカビーバー",
  scientificName: "Castor canadensis",
  englishName: "North American beaver",
  classification: ["脊索動物門", "哺乳綱", "齧歯目", "ビーバー科", "ビーバー属"],
  category: "哺乳類",
  image: "images/sp0410.jpg",
  trivia: [
    {
      title: "ダムを作って環境そのものを変える",
      text: "木や泥でダムを作って池を生み出し、多くの水生生物が利用できる湿地環境を作ります。"
    },
    {
      title: "歯は一生伸び続ける",
      text: "前歯は一生伸び続け、硬い木をかじることで適切な長さに摩耗します。"
    }
  ],
  bodyLength: "頭胴長約70〜100cm、尾長約25〜35cmで、大型個体では体重30kgを超えることがあります。",
  distribution: "北アメリカの広い範囲に自然分布し、他地域へ移入された例もあります。",
  habitat: "河川、湖沼、湿地など淡水域に生息します。",
  diet: "樹皮、枝、水草など植物質を食べます。",
  features: "大きなオレンジ色の前歯、平たく幅広い尾、水かきの発達した後肢を持ちます。",
  behavior: "木を倒し、枝や泥でダムや巣を作り、主に夜間から薄明時に活動します。",
  reproduction: "通常は一夫一妻のペアを形成して家族群で生活し、仔は巣内で育てられます。",
  identification: "幅広く平たい尾と巨大な前歯が最大の特徴です。",
  nameOrigin: "北アメリカに分布するビーバーであることからアメリカビーバーと呼ばれます。",
  humanRelation: "生態系を大きく変える「生態系エンジニア」として非常に重要です。",
  observationPoint: "泳ぐときに尾と後脚をどのように使うか観察してください。",
  references: [
    "Mammal Diversity Database: Castor canadensis",
    "Animal Diversity Web: Castor canadensis"
  ]
},

{
  id: "sp0411",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ピラニア・ナッテリー",
  scientificName: "Pygocentrus nattereri",
  englishName: "Red piranha",
  classification: ["脊索動物門", "条鰭綱", "カラシン目", "セルラサルムス科", "ピゴケントルス属"],
  category: "魚類",
  image: "images/sp0411.jpg",
  trivia: [
    {
      title: "いつでも集団で襲う魚ではない",
      text: "群れを作りますが、常に大型動物へ集団で襲いかかる魚ではなく、群れには防御の役割もあります。"
    },
    {
      title: "左右の歯を交互に交換",
      text: "三角形の歯は左右の顎で交互に交換され、すべての歯を一度に失わず噛む力を維持できます。"
    }
  ],
  bodyLength: "最大で標準体長約50cmで、一般には20〜30cm程度です。",
  distribution: "アマゾン川、パラグアイ・パラナ川流域、ブラジル北東部の河川など南米に分布します。",
  habitat: "河川、入り江、氾濫原の池など淡水域に生息します。",
  diet: "魚類、昆虫、ゴカイ類、甲殻類などを食べます。",
  features: "体高のある銀灰色の体を持ち、成魚では腹部が赤色から橙赤色を帯びます。顎には鋭い三角形の歯が並びます。",
  behavior: "小群から群れを作り、夕方や明け方を中心に活動します。",
  reproduction: "水草や水中の木の根などへ卵を産み、親が卵を守る行動が知られています。",
  identification: "赤い腹部、体高の高い体、強力な三角形の歯が特徴です。",
  nameOrigin: "種小名nattereriはオーストリアの博物学者Johann Nattererにちなみます。",
  humanRelation: "観賞魚として知られますが、鋭い歯を持つため取り扱いには注意が必要です。",
  observationPoint: "口が開いたとき、上下の歯がぴったりかみ合う構造に注目してください。",
  references: [
    "FishBase: Pygocentrus nattereri"
  ]
},

{
  id: "sp0412",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オキシドラス",
  scientificName: "Oxydoras niger",
  englishName: "Ripsaw catfish",
  classification: ["脊索動物門", "条鰭綱", "ナマズ目", "ドラス科", "Oxydoras属"],
  category: "魚類",
  image: "images/sp0412.jpg",
  trivia: [
    {
      title: "体側にノコギリのような骨板",
      text: "体側には硬く尖った骨質板が一列に並び、英名Ripsaw catfishの由来になっています。"
    },
    {
      title: "1mになる巨大ナマズ",
      text: "FishBaseでは最大標準体長100cm、体重13kg級の記録があります。"
    }
  ],
  bodyLength: "最大で標準体長約100cm、体重約13kg。",
  distribution: "南米のアマゾン川、サンフランシスコ川、エセキボ川流域などに分布します。",
  habitat: "河川や湖の泥底周辺に生息します。",
  diet: "デトリタス、昆虫の幼生、甲殻類などを食べます。",
  features: "大型で黒褐色の体を持ち、体側にノコギリ状の硬い骨板が並び、口周辺にはひげがあります。",
  behavior: "底層を群れで行動することがあり、泥底で餌を探します。",
  reproduction: "野外での詳しい繁殖生態は、今回確認した主要資料では情報が十分でないため断定しません。",
  identification: "体側に一列に並ぶ非常に硬い骨板が特徴です。",
  nameOrigin: "属名Oxydorasは「鋭い皮膚」に関係する語源を持ち、体側の硬い骨板を表しています。",
  humanRelation: "南米では食用になるほか、大型観賞魚として飼育されることもあります。",
  observationPoint: "横腹を見て、鱗とは違う大きな骨板が一列に並ぶ様子に注目してください。",
  references: [
    "FishBase: Oxydoras niger",
    "NCBI Taxonomy: Oxydoras niger"
  ]
},

{
  id: "sp0413",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ドラード",
  scientificName: "Salminus brasiliensis",
  englishName: "Dorado",
  classification: ["脊索動物門", "条鰭綱", "カラシン目", "Bryconidae", "Salminus属"],
  category: "魚類",
  image: "images/sp0413.jpg",
  trivia: [
    {
      title: "名前は『黄金』",
      text: "Doradoはスペイン語・ポルトガル語圏で「黄金色」を意味し、成魚の金色に輝く体色に由来します。"
    },
    {
      title: "南米を代表する大型肉食魚",
      text: "最大1m級になり、魚を高速で追って捕食する強力な遊泳魚で、スポーツフィッシングでも有名です。"
    }
  ],
  bodyLength: "最大で標準体長約100cm、体重30kgを超える記録があります。",
  distribution: "南米のパラナ川、パラグアイ川、ウルグアイ川などの流域に分布します。",
  habitat: "大河川、支流、湖沼などの淡水域に生息します。",
  diet: "主に魚類を捕食し、甲殻類なども食べます。",
  features: "流線型で筋肉質な体を持ち、成魚は金黄色に輝きます。尾びれは強く二叉します。",
  behavior: "強い遊泳力で魚を追い、繁殖などに伴って河川内を移動します。",
  reproduction: "河川を移動して繁殖する回遊性淡水魚で、繁殖期には上流方向へ移動します。",
  identification: "金色の体、尾びれ中央部の黒色、大きな口が特徴です。",
  nameOrigin: "Doradoはスペイン語で「黄金の」を意味します。",
  humanRelation: "南米を代表するゲームフィッシュで、食用にも利用されます。",
  observationPoint: "金色の体だけでなく、尾びれと筋肉質な胴体にも注目してください。",
  references: [
    "FishBase: Salminus brasiliensis"
  ]
},

{
  id: "sp0414",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ピラルク",
  scientificName: "Arapaima gigas",
  englishName: "Arapaima",
  classification: ["脊索動物門", "条鰭綱", "アロワナ目", "ピラルク科", "ピラルク属"],
  category: "魚類",
  image: "images/sp0414.jpg",
  trivia: [
    {
      title: "水面で空気を吸わないと生きられない",
      text: "血管の発達した鰾を肺のように使う義務的空気呼吸魚で、定期的に水面へ浮上して空気を飲み込みます。"
    },
    {
      title: "世界最大級の淡水魚",
      text: "FishBaseには最大4.5mという歴史的記録があり、一般的な大型個体でも2m前後になります。"
    }
  ],
  bodyLength: "一般的には全長2m前後で、FishBaseには最大4.5m、200kgという記録があります。",
  distribution: "南米アマゾン川流域に分布します。",
  habitat: "河川、湖、氾濫原、酸素の少ない止水域などに生息します。",
  diet: "主に魚類を捕食し、甲殻類や小型動物を利用することもあります。",
  features: "非常に大きく細長い体、巨大な鱗、体後半に集まる背びれ・尻びれを持ち、大型個体では後半の鱗が赤色を帯びます。",
  behavior: "数分から十数分おきに水面へ浮上して空気を吸い、低酸素環境でも生存できます。",
  reproduction: "砂底に巣を作って産卵し、親が卵や仔魚を守り、繁殖期には親子で行動することがあります。",
  identification: "巨大な鱗と細長い大型の体、体後半に集まるひれが特徴です。",
  nameOrigin: "ピラルクという名称は南米先住民の言語に由来するとされます。",
  humanRelation: "アマゾン地域の重要な食用魚で養殖も行われ、国際取引はCITES附属書IIで管理されています。",
  observationPoint: "水面を見ていると、定期的に浮上して口から空気を吸う瞬間を観察できます。",
  references: [
    "FishBase: Arapaima gigas",
    "CITES: Arapaima gigas Appendix II"
  ]
},

{
  id: "sp0415",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "スッポンモドキ",
  scientificName: "Carettochelys insculpta",
  englishName: "Pig-nosed turtle",
  classification: ["脊索動物門", "爬虫綱", "カメ目", "スッポンモドキ科", "スッポンモドキ属"],
  category: "爬虫類",
  image: "images/sp0415.jpg",
  trivia: [
    {
      title: "ブタのような鼻を持つ",
      text: "鼻先が細長く突き出して鼻孔が前を向き、「ブタバナガメ」とも呼ばれ、水面から鼻先だけを出して呼吸できます。"
    },
    {
      title: "卵は雨を待ってふ化する",
      text: "胚が十分に成長してもすぐにはふ化せず、増水で巣が水に浸かることがふ化のきっかけになる場合があります。"
    }
  ],
  bodyLength: "背甲長50cm前後になり、資料によっては70cm近い大型個体も知られています。",
  distribution: "ニューギニア島南部とオーストラリア北部に自然分布します。",
  habitat: "大河川、湖、湿地などの淡水域を中心に生活し、汽水域を利用することもあります。",
  diet: "果実や水生植物などの植物質に加え、貝類、甲殻類、昆虫なども食べる雑食性です。",
  features: "甲羅に一般的なカメのような硬い鱗板がなく表面は滑らかで、四肢はウミガメのようなヒレ状です。",
  behavior: "ほとんどの時間を水中で過ごし、産卵時のメス以外は陸へ上がる機会が少ないとされています。",
  reproduction: "メスは乾季などに砂地へ産卵し、胚は発生を一時停止でき、水位上昇がふ化の引き金になることがあります。",
  identification: "ブタの鼻のような吻、滑らかな甲羅、ヒレ状の四肢で他の淡水ガメと容易に区別できます。",
  nameOrigin: "スッポンに似た滑らかな甲羅を持ちながら別系統のカメであることからスッポンモドキと呼ばれます。",
  humanRelation: "ペット取引、卵の採取、生息地改変などの影響を受け、国際取引はCITES附属書IIで管理されています。",
  observationPoint: "鼻先と前肢を見て、淡水ガメなのにウミガメのようなヒレ状の前肢を持つ点に注目してください。",
  references: [
    "Turtles of the World: Carettochelys insculpta",
    "埼玉県こども動物自然公園：スッポンモドキ",
    "CITES: Carettochelys insculpta Appendix II"
  ]
},

{
  id: "sp0416",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "レッドテールキャットフィッシュ",
  scientificName: "Phractocephalus hemioliopterus",
  englishName: "Redtail catfish",
  classification: ["脊索動物門", "条鰭綱", "ナマズ目", "ピメロドゥス科", "Phractocephalus属"],
  category: "魚類",
  image: "images/sp0416.jpg",
  trivia: [
    {
      title: "名前通り尾びれが真っ赤",
      text: "黒褐色の背中と白い腹部に対し、尾びれが鮮やかな橙赤色になる大型ナマズです。"
    },
    {
      title: "魚だけでなく果実も食べる",
      text: "魚やカニなどの動物だけでなく、野外では水中へ落ちた果実も食べます。"
    }
  ],
  bodyLength: "最大で全長約135cmで、最大公表体重は40kgを超えます。",
  distribution: "南米のアマゾン川水系とオリノコ川水系に分布します。",
  habitat: "大河川本流、支流、深みなど淡水域の底層を中心に生活します。",
  diet: "魚類、カニ類、その他の水生動物に加え、果実なども食べます。",
  features: "幅広い頭と大きな口、非常に長いひげ、黒褐色の背面、白い腹部、赤橙色の尾びれが特徴です。",
  behavior: "主に底層を泳いでさまざまな餌を捕食し、河川内を移動する回遊性もあります。",
  reproduction: "雌雄異体で体外受精し、野外では季節的な繁殖ピークが知られますが、詳しい繁殖行動には未解明な部分があります。",
  identification: "赤い尾びれ、白い腹部、巨大な頭部という特徴的な色彩と体形で識別できます。",
  nameOrigin: "英名・流通名ともに、鮮やかな赤い尾びれに由来します。",
  humanRelation: "南米では食用・釣魚として利用され、大型観賞魚としても飼育されますが、終生飼育には大きな設備が必要です。",
  observationPoint: "尾だけでなく、大きな口と長いひげにも注目してください。",
  references: [
    "FishBase: Phractocephalus hemioliopterus",
    "Lundberg & Littmann 2003: Pimelodidae"
  ]
},

{
  id: "sp0417",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "シルバーアロワナ",
  scientificName: "Osteoglossum bicirrhosum",
  englishName: "Silver arowana",
  classification: ["脊索動物門", "条鰭綱", "アロワナ目", "アロワナ科", "Osteoglossum属"],
  category: "魚類",
  image: "images/sp0417.jpg",
  trivia: [
    {
      title: "水面の虫へジャンプ",
      text: "上向きの大きな口で水面付近の餌を捕らえ、水上の昆虫を狙って水面から飛び出すこともあります。"
    },
    {
      title: "卵を守るのはオスの口",
      text: "オスが受精卵からふ化後の仔魚まで口内で守り、口内保育は約6週間続くことがあります。"
    }
  ],
  bodyLength: "FishBaseでは最大全長約90cmで、大型個体では1m近くになります。",
  distribution: "南米のアマゾン川流域、ルプヌニ川、オヤポック川などに分布します。",
  habitat: "河川、氾濫原、湖沼などの水面近くをよく利用します。",
  diet: "魚類、甲殻類、昆虫などを食べる、雑食性で肉食傾向の強い魚です。",
  features: "銀白色の大きな鱗、非常に長い背びれと尻びれ、下あご先端の2本のひげが特徴です。",
  behavior: "水面近くをゆっくり泳いで上方の獲物を狙い、驚くと非常に高く跳ねることがあります。",
  reproduction: "オスが卵・仔魚を口内保育し、仔魚がある程度成長するまで口へ戻して守ることもあります。",
  identification: "非常に大きな銀色の鱗、上向きの口、下あごの2本のひげが特徴です。",
  nameOrigin: "銀色に輝く体を持つアロワナであることからシルバーアロワナと呼ばれます。",
  humanRelation: "大型観賞魚として世界的に人気があり、南米では食用にも利用されます。",
  observationPoint: "水槽の上部を泳ぐことが多いので、口がどの方向へ開いているか観察してください。",
  references: [
    "FishBase: Osteoglossum bicirrhosum",
    "Ferraris 2003: Osteoglossidae"
  ]
},


{
  id: "sp0418",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "レッサーパンダ",
  scientificName: "Ailurus fulgens",
  englishName: "Red panda",
  classification: ["脊索動物門", "哺乳綱", "食肉目", "レッサーパンダ科", "レッサーパンダ属"],
  category: "哺乳類",
  image: "images/sp0418.jpg",
  trivia: [
    {
      title: "竹をつかめる『第6の指』",
      text: "手首の骨が発達した「偽の親指」を持ち、竹などを前足でつかむのに役立ちます。"
    },
    {
      title: "足の裏まで毛が生えている",
      text: "寒い山地で暮らすため足裏にも密な毛があり、八景島公式でも紹介されています。"
    }
  ],
  bodyLength: "頭胴長約50〜65cm、尾長約30〜50cm、体重は約3〜6kgです。",
  distribution: "八景島公式では、インド北東部、ネパール、ブータン、ミャンマー北部、中国などに分布すると紹介されています。",
  habitat: "標高の高い温帯林・山地林で、竹が豊富な森林を主な生活場所とします。",
  diet: "竹の葉や新芽を中心に、果実、昆虫、小動物なども食べます。",
  features: "赤褐色の毛、白い顔の模様、長く太い縞模様の尾が特徴です。",
  behavior: "木登りが得意で木の上で休むことも多く、通常は単独で行動する傾向があります。",
  reproduction: "メスは通常1〜数頭の仔を産み、樹洞などを巣として利用します。",
  identification: "赤褐色の体、白い顔、長い縞模様の尾が特徴です。",
  nameOrigin: "英語red pandaに対応する動物で、ジャイアントパンダとは別のレッサーパンダ科に属します。",
  humanRelation: "生息地の減少や密猟などが問題となっており、国際的な保全対象です。",
  observationPoint: "木を登るときの足と、餌を持つ前足の使い方に注目してください。",
  references: [
    "横浜・八景島シーパラダイス：レッサーパンダ Ailurus fulgens",
    "IUCN: Ailurus fulgens"
  ]
},

{
  id: "sp0419",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "トランスルーセントグラスキャットフィッシュ",
  scientificName: "Kryptopterus vitreolus",
  englishName: "Glass catfish",
  classification: ["脊索動物門", "条鰭綱", "ナマズ目", "ナマズ科", "Kryptopterus属"],
  category: "魚類",
  image: "images/sp0419.jpg",
  trivia: [
    {
      title: "骨まで透けて見える",
      text: "生きた状態でも体が非常に透明で、脊椎や内部構造まで外から見えます。"
    },
    {
      title: "2013年に正式に別種として整理された",
      text: "長年Kryptopterus bicirrhisとして流通しましたが、透明な小型種は2013年にKryptopterus vitreolusとして記載されました。"
    }
  ],
  bodyLength: "最大で標準体長約6.5cm。",
  distribution: "タイ半島部・タイ南東部の河川から知られ、マレーシア・ペナン島からの記録は確認が必要とされています。",
  habitat: "流れの緩い河川や、褐色から黒色を帯びる止水・緩流環境に生息します。",
  diet: "小型の水生無脊椎動物や動物プランクトンなどを食べます。",
  features: "筋肉や色素が少なく非常に透明で、銀色の内臓部分と背骨が目立ち、長いひげも持ちます。",
  behavior: "群れで中層を泳ぎ、同じ方向を向いて静止するように泳ぐ姿も見られます。",
  reproduction: "野外での詳しい繁殖生態は、今回確認した主要資料では情報が十分でないため断定しません。",
  identification: "生きた状態で非常に透明なのが最大の特徴で、大型で半透明なK. bicirrhisとは別種です。",
  nameOrigin: "Translucent／glassという名前は、ガラスのように透明な体に由来します。",
  humanRelation: "世界的に人気の観賞魚で、八景島公式でもフォレストガーデンの代表生物として紹介されています。",
  observationPoint: "体表の色ではなく体の中を見て、背骨や内臓の位置を確認してください。",
  references: [
    "Ng & Kottelat 2013: Kryptopterus vitreolus",
    "FishBase: Kryptopterus vitreolus",
    "横浜・八景島シーパラダイス：フォレストガーデン"
  ]
},

{
  id: "sp0420",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サイアミーズフライングフォックス",
  scientificName: "Crossocheilus oblongus",
  englishName: "Siamese algae eater",
  classification: ["脊索動物門", "条鰭綱", "コイ目", "コイ科", "Crossocheilus属"],
  category: "魚類",
  image: "images/sp0420.jpg",
  trivia: [
    {
      title: "黒い線は尾びれの中まで続く",
      text: "体側の黒い帯は尾柄で終わらず、尾びれ中央部まで続く重要な識別点です。"
    },
    {
      title: "『コケ取り魚』として有名",
      text: "岩や流木の付着藻類を食べるため、水草水槽では藻類除去を目的に飼育されます。"
    }
  ],
  bodyLength: "最大で標準体長約16cm。",
  distribution: "タイからインドネシアなど東南アジアに分布します。",
  habitat: "透明で流れの速い渓流や河川、急流付近の底層に生息します。",
  diet: "付着藻類やデトリタス、小型の水生生物などを利用します。",
  features: "細長い体の中央を太い黒帯が走り、その帯は尾びれ中央まで続きます。",
  behavior: "河床近くを活発に泳ぎ、岩や植物の表面をついばみます。",
  reproduction: "野外での詳しい繁殖生態は資料が限られるため断定しません。",
  identification: "黒帯が尾びれまで続くことや、体側・口周辺の形を確認します。",
  nameOrigin: "Siameseはタイの旧称Siamに由来します。",
  humanRelation: "水草水槽の「コケ取り魚」として有名ですが、流通では近縁のCrossocheilus属も同名で扱われることがあり、個体の確定には展示ラベルの学名確認が理想です。",
  observationPoint: "黒い横線を頭から尾まで追い、尾びれの中まで続くか確認してください。",
  references: [
    "FishBase: Crossocheilus oblongus",
    "Aqua Design Amano: Crossocheilus oblongus",
    "観賞魚流通では近縁種混在に注意"
  ]
},

{
  id: "sp0421",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "クーリーローチ",
  scientificName: "Pangio kuhlii",
  englishName: "Kuhli loach",
  classification: ["脊索動物門", "条鰭綱", "コイ目", "ドジョウ科", "Pangio属"],
  category: "魚類",
  image: "images/sp0421.jpg",
  trivia: [
    {
      title: "小さなウナギのようなドジョウ",
      text: "非常に細長い体を持ち、黄褐色の体に黒褐色の帯が6〜10本ほど入ります。"
    },
    {
      title: "空気呼吸もできる",
      text: "FishBaseでは補助的な空気呼吸を行う魚とされ、酸素の少ない環境への適応の一つです。"
    }
  ],
  bodyLength: "最大で全長約12cm。",
  distribution: "東南アジアに分布します。",
  habitat: "森林内の小河川、低地の水路、泥底や落ち葉がたまる泥炭湿地などに生息します。",
  diet: "小型の底生無脊椎動物や有機物などを底から探して食べます。",
  features: "非常に細長い体と、黄色から橙褐色の地に入る不規則な黒色帯が特徴です。",
  behavior: "底生性で落ち葉や砂・泥へ潜ることがあり、暗い時間帯に活動性が高まります。",
  reproduction: "卵生で、繁殖時には明瞭なペアを形成することが知られています。",
  identification: "細長い体と6〜10本ほどの帯が特徴ですが、Pangio属には酷似種が多く、流通では別種がクーリーローチ名で扱われる場合があります。",
  nameOrigin: "種小名kuhliiはドイツの博物学者Heinrich Kuhlにちなみます。",
  humanRelation: "温和な小型底生魚として観賞魚で広く飼育されています。",
  observationPoint: "流木や落ち葉の下も探すと、体を半分だけ隠した姿が見られることがあります。",
  references: [
    "FishBase: Pangio kuhlii"
  ]
},

{
  id: "sp0422",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ラスポラヘテロモルファ",
  scientificName: "Trigonostigma heteromorpha",
  englishName: "Harlequin rasbora",
  classification: ["脊索動物門", "条鰭綱", "コイ目", "ダニオ科", "Trigonostigma属"],
  category: "魚類",
  image: "images/sp0422.jpg",
  trivia: [
    {
      title: "昔の学名はRasbora heteromorpha",
      text: "観賞魚では今も「ラスポラ」と呼ばれますが、1999年の分類再検討以降はTrigonostigma属に移されています。"
    },
    {
      title: "卵を葉の裏へ産む",
      text: "一般的な小型コイ科魚類と少し異なり、幅広い水草の葉の裏などへ卵を産み付けます。"
    }
  ],
  bodyLength: "最大で全長約5cm。",
  distribution: "マレー半島、マレーシア、シンガポール、インドネシアなどに分布します。",
  habitat: "森林内の小河川や泥炭湿地など、弱酸性で植物が多い淡水域に生息します。",
  diet: "昆虫、小型甲殻類、ゴカイ類など小さな動物を食べます。",
  features: "赤橙色の体後半に、大きな黒色の三角形・斧状模様があります。",
  behavior: "数十匹から100匹を超える群れになることがあります。",
  reproduction: "メスは幅広い葉の裏側へ卵を産み付け、オスが受精させます。",
  identification: "体後半の黒い三角形模様が最大の特徴です。",
  nameOrigin: "heteromorphaは「異なる形」を意味し、流通名には旧属名Rasboraが現在も残っています。",
  humanRelation: "世界的に非常に人気の高い小型観賞魚です。",
  observationPoint: "群れを見ると、黒い三角形模様が同じ方向へ一斉に動く様子が目立ちます。",
  references: [
    "FishBase: Trigonostigma heteromorpha"
  ]
},

{
  id: "sp0423",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ロックシュリンプ",
  scientificName: "Atyopsis moluccensis",
  englishName: "Asian fan shrimp",
  classification: ["節足動物門", "軟甲綱", "十脚目", "ヌマエビ科", "オニヌマエビ属"],
  category: "甲殻類",
  image: "images/sp0423.jpg",
  trivia: [
    {
      title: "手が小さな扇になっている",
      text: "第1・第2胸脚の先端に細かな毛が密生し、扇のように広げて流れてくる微小な餌を捕らえます。"
    },
    {
      title: "流れに向かってじっと構える",
      text: "水流の強い場所で上流を向き、扇状の脚を広げて流れてくる餌を濾し取ります。"
    }
  ],
  bodyLength: "全長8〜10cm程度になります。",
  distribution: "東南アジアの河川に分布します。",
  habitat: "水流のある淡水河川で、岩や流木の上など流れを受けやすい場所を利用します。",
  diet: "水中を漂う微小な有機物、プランクトン、細かな餌粒などを濾し取って食べます。",
  features: "比較的大型で頑丈な体を持ち、前方の脚の先端が扇状です。体色は褐色や赤褐色など個体差があります。",
  behavior: "流れの方向へ体を向け、左右の扇状脚を交互に広げて餌を集めます。",
  reproduction: "メスは卵を腹部に抱えて守ります。自然下の幼生は複雑な生活史を持つと考えられますが、今回のデータでは詳細を断定しません。",
  identification: "はさみではなく、大きな扇状の毛を持つ前脚が最大の特徴です。",
  nameOrigin: "観賞魚市場でロックシュリンプ、アジアロックシュリンプなどの名前で流通します。",
  humanRelation: "濾過摂食という珍しい食べ方から人気の淡水観賞エビです。",
  observationPoint: "水流の出口付近を探し、扇を開閉する動きを観察してください。",
  references: [
    "WoRMS: Atyopsis moluccensis",
    "ITIS: Atyopsis moluccensis",
    "Chace 1983: Atyopsis"
  ]
},

{
  id: "sp0424",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ボルネオプレコ",
  scientificName: "Gastromyzon punctulatus",
  englishName: "Hillstream loach",
  classification: ["脊索動物門", "条鰭綱", "コイ目", "Gastromyzontidae", "Gastromyzon属"],
  category: "魚類",
  image: "images/sp0424.jpg",
  trivia: [
    {
      title: "名前にプレコとあるがプレコではない",
      text: "ナマズ目のプレコ類ではなくコイ目の急流性魚類で、外見が似るためこの流通名が使われています。"
    },
    {
      title: "体全体が吸盤のよう",
      text: "胸びれ・腹びれを大きく広げ、平たい腹面と合わせて岩へ密着し、急流でも流されにくくなっています。"
    }
  ],
  bodyLength: "最大で標準体長約6.5cm。",
  distribution: "ボルネオ島固有です。",
  habitat: "酸素が豊富で流れの強い渓流・急流の岩場に生息します。",
  diet: "岩の表面に付着する藻類や微小な有機物などを食べます。",
  features: "上下に強く平たい体と、大きく横へ広がった胸びれ・腹びれを持ちます。",
  behavior: "岩へ腹部を密着させ、強い水流の中で表面の餌を削り取ります。",
  reproduction: "本種の詳しい繁殖生態は、十分な資料がないため断定しません。",
  identification: "プレコのように見えますが、口やひげではなく大きな胸びれ・腹びれで岩へ密着します。",
  nameOrigin: "ボルネオ島産で、外見がプレコ類を思わせることからこの流通名があります。",
  humanRelation: "急流環境を再現する観賞魚として人気があります。",
  observationPoint: "ガラスや石に張り付いた腹側を見ると、吸盤状の体形が分かります。",
  references: [
    "FishBase: Gastromyzon punctulatus",
    "なかがわ水遊園：ボルネオプレコ"
  ]
},

{
  id: "sp0425",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "サカサナマズ",
  scientificName: "Synodontis nigriventris",
  englishName: "Upside-down catfish",
  classification: ["脊索動物門", "条鰭綱", "ナマズ目", "サカサナマズ科", "Synodontis属"],
  category: "魚類",
  image: "images/sp0425.jpg",
  trivia: [
    {
      title: "本当に腹を上にして泳ぐ",
      text: "水面や流木の裏から餌を取るとき、腹側を上へ向けて泳ぐのが日常的です。"
    },
    {
      title: "色も普通の魚と逆",
      text: "多くの魚と逆に腹側の方が暗く、逆さまの姿勢に合った体色になっています。"
    }
  ],
  bodyLength: "最大で全長約9.6cm。",
  distribution: "アフリカのコンゴ川中流域などに分布します。",
  habitat: "河川や支流の岩・流木が多い場所に生息します。",
  diet: "主に夜間に昆虫、甲殻類、植物質などを食べます。",
  features: "ナマズらしいひげを持ち、腹側が背側より暗い逆カウンターシェーディングが特徴です。",
  behavior: "流木や水草の下側を逆さまに泳ぎ、表面に付着した餌などを食べます。",
  reproduction: "卵生ですが、本種の詳しい繁殖行動については情報が限られます。",
  identification: "普段から腹側を上へ向けて泳ぐ行動が最大の特徴です。",
  nameOrigin: "逆さまになって泳ぐナマズであることからサカサナマズと呼ばれます。",
  humanRelation: "独特な泳ぎ方から世界的に人気の観賞魚です。",
  observationPoint: "逆さまに泳ぐのは正常な行動です。どの場所で逆さまになるか観察してください。",
  references: [
    "FishBase: Synodontis nigriventris"
  ]
},

{
  id: "sp0426",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ポリプテルスデルヘッツイ",
  scientificName: "Polypterus delhezi",
  englishName: "Barred bichir",
  classification: ["脊索動物門", "条鰭綱", "ポリプテルス目", "ポリプテルス科", "ポリプテルス属"],
  category: "魚類",
  image: "images/sp0426.jpg",
  trivia: [
    {
      title: "背びれが1枚ではない",
      text: "普通の魚のような1枚の背びれではなく、10〜13個ほどの小さな背びれが一列に並びます。"
    },
    {
      title: "空気を吸える",
      text: "鰾が肺のような役割を持ち、水面から空気を飲み込んで呼吸できます。"
    }
  ],
  bodyLength: "最大で全長約44cm。",
  distribution: "アフリカのコンゴ川中流域に分布します。",
  habitat: "河川、湖、氾濫原など淡水の底層に生息します。",
  diet: "肉食性で、魚類や小型水生動物を捕食します。",
  features: "灰色からオリーブ色の体に7〜8本ほどの黒い横帯があり、背中には10〜13個の独立した小背びれがあります。",
  behavior: "底層をゆっくり移動し、胸びれで歩くように進むこともあります。酸素不足時には水面へ浮上します。",
  reproduction: "雨季に繁殖・産卵することが報告されています。",
  identification: "太い黒色横帯と、多数の独立した小さな背びれが特徴です。",
  nameOrigin: "種小名delheziは最初の標本を採集したDelhezにちなみます。",
  humanRelation: "原始的な特徴を残す条鰭類として研究上興味深く、大型観賞魚としても人気があります。",
  observationPoint: "背中を頭側から尾側まで追い、独立した背びれを数えてみてください。",
  references: [
    "FishBase: Polypterus delhezi"
  ]
},

{
  id: "sp0427",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ポリプテルスセネガルス",
  scientificName: "Polypterus senegalus",
  englishName: "Senegal bichir",
  classification: ["脊索動物門", "条鰭綱", "ポリプテルス目", "ポリプテルス科", "ポリプテルス属"],
  category: "魚類",
  image: "images/sp0427.jpg",
  trivia: [
    {
      title: "幼魚には外鰓がある",
      text: "若い時期にはウーパールーパーのような外鰓があり、成長すると失われます。"
    },
    {
      title: "鰾を肺のように使う",
      text: "水面から空気を吸い、発達した鰾でガス交換できるため、酸素の少ない湿地でも生活できます。"
    }
  ],
  bodyLength: "最大で標準体長約70cm。",
  distribution: "西アフリカからナイル川水系、チャド湖水系、コンゴ川水系の一部などに分布します。",
  habitat: "湿地、河川沿岸、淡水ラグーン、泥底など穏やかな水域を利用します。",
  diet: "魚、昆虫、甲殻類、貝類、カエルなどを食べます。",
  features: "細長い円筒形の体と複数の独立した背びれ、硬いガノイン鱗を持ちます。",
  behavior: "底近くを蛇のように泳ぎ、胸びれも使って移動します。水面へ上がって空気呼吸も行います。",
  reproduction: "卵生で、水草などがある浅い環境で繁殖します。幼魚には外鰓があります。",
  identification: "デルヘッツイのような太い横帯がなく、比較的単色で滑らかな体色です。",
  nameOrigin: "種名senegalusはセネガルに由来します。",
  humanRelation: "ポリプテルス類の中でも古くから観賞魚として飼育されてきた種類です。",
  observationPoint: "デルヘッツイと並べ、横帯の有無、背びれ数、体色を比べてください。",
  references: [
    "FishBase: Polypterus senegalus"
  ]
},

{
  id: "sp0428",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コンゴテトラ",
  scientificName: "Phenacogrammus interruptus",
  englishName: "Congo tetra",
  classification: ["脊索動物門", "条鰭綱", "カラシン目", "アレステス科", "Phenacogrammus属"],
  category: "魚類",
  image: "images/sp0428.jpg",
  trivia: [
    {
      title: "オスのひれが大きく伸びる",
      text: "成熟したオスは背びれや尾びれが長く伸び、メスより派手な姿になります。"
    },
    {
      title: "鱗が虹色に光る",
      text: "銀色の体は光の角度によって青、緑、黄色、紫などさまざまな色に輝きます。"
    }
  ],
  bodyLength: "全長8〜10cm程度になります。",
  distribution: "アフリカのコンゴ川流域に分布します。",
  habitat: "流れのある河川や支流の中層に群れで生活します。",
  diet: "昆虫、甲殻類、小型水生動物、植物質などを利用します。",
  features: "銀色から虹色に輝く体と発達したひれが特徴で、特にオスは尾びれ中央部が伸びます。",
  behavior: "群れを作って中層を活発に泳ぎます。",
  reproduction: "卵生で、水草などの間へ多数の卵をばらまきます。",
  identification: "大型のテトラ類で、虹色の体とオスの長いひれが特徴です。",
  nameOrigin: "コンゴ川流域に分布するテトラ類であることが名前の由来です。",
  humanRelation: "世界的に人気の観賞魚で、八景島公式でもフォレストガーデンの代表生物として紹介されています。",
  observationPoint: "照明の角度によって鱗の色がどう変わるか観察してください。",
  references: [
    "FishBase: Phenacogrammus interruptus",
    "横浜・八景島シーパラダイス：フォレストガーデン"
  ]
},

{
  id: "sp0429",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "インドホシガメ",
  scientificName: "Geochelone elegans",
  englishName: "Indian star tortoise",
  classification: ["脊索動物門", "爬虫綱", "カメ目", "リクガメ科", "Geochelone属"],
  category: "爬虫類",
  image: "images/sp0429.jpg",
  trivia: [
    {
      title: "甲羅の模様が星のよう",
      text: "黒褐色の甲板から黄色い線が放射状に伸び、星が並んだような模様になります。"
    },
    {
      title: "国際取引規制が最も厳しい附属書I",
      text: "違法なペット取引が問題となり、2019年にCITES附属書IIから附属書Iへ移されました。"
    }
  ],
  bodyLength: "通常、オスは甲長20〜25cm程度、メスは30cm前後で、メスの方が大型です。",
  distribution: "インド、パキスタン、スリランカなどインド亜大陸に分布します。",
  habitat: "乾燥した草原、低木林、農地周辺などに生息します。",
  diet: "草、葉、花、果実などを食べる植物食性です。",
  features: "丸みのある高い甲羅と、各甲板から放射状に伸びる黄色い星形模様が特徴です。",
  behavior: "雨季には活動性が高まり、乾燥・高温時には日陰などで休みます。",
  reproduction: "卵生で、メスは地面に穴を掘って卵を産みます。",
  identification: "黒色地に黄色い放射線が入る星形の甲羅模様が特徴です。",
  nameOrigin: "甲羅に並ぶ星形の模様からホシガメと呼ばれます。",
  humanRelation: "ペット目的の密猟・違法取引が大きな脅威で、CITES附属書Iに掲載されています。",
  observationPoint: "甲羅全体だけでなく、1枚の甲板から伸びる黄色い線も見てください。",
  references: [
    "Tortoise and Freshwater Turtle Specialist Group: Geochelone elegans",
    "CITES: Geochelone elegans Appendix I"
  ]
},

{
  id: "sp0430",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ミヤコタナゴ",
  scientificName: "Pseudorhodeus tanago",
  englishName: "Tokyo bitterling",
  classification: ["脊索動物門", "条鰭綱", "コイ目", "タナゴ科", "Pseudorhodeus属"],
  category: "魚類",
  image: "images/sp0430.jpg",
  trivia: [
    {
      title: "2026年Catalogでは属名が変更",
      text: "環境省などではTanakia tanagoも使われますが、2026年7月版Eschmeyer's Catalog of FishesではPseudorhodeus tanagoが有効名です。"
    },
    {
      title: "卵を二枚貝の中へ産む",
      text: "メスは長い産卵管でマツカサガイなどの鰓へ卵を産み、仔魚は貝の中で成長してから外へ出ます。"
    }
  ],
  bodyLength: "環境省では体長30〜40mm程度、神奈川県資料では5〜6cm程度までになるとされています。",
  distribution: "日本固有種で、現在の自然分布は栃木県・千葉県のごく限られた水域に残るとされています。",
  habitat: "湧水を水源とする水路や池など、流れの緩やかな淡水環境に生息します。",
  diet: "小型水生動物、付着藻類などを食べます。",
  features: "小型のタナゴで、繁殖期のオスは鮮やかになり、尻びれ先端が黒くなります。",
  behavior: "浅い水路や池で生活し、繁殖期のオスは縄張り的な行動を示します。",
  reproduction: "産卵期は主に春から夏で、メスは淡水二枚貝の鰓内へ産卵します。",
  identification: "小型の体、繁殖期オスの婚姻色、尻びれの黒色部などを確認します。",
  nameOrigin: "東京・小石川の東京帝国大学附属植物園で発見され、「都＝東京」の名が付いたとされています。",
  humanRelation: "国の天然記念物かつ国内希少野生動植物種で、環境省レッドリストでは絶滅危惧IA類です。",
  observationPoint: "繁殖期のオスがいれば、鮮やかな体色と尻びれに注目してください。",
  references: [
    "Eschmeyer's Catalog of Fishes 2026: Pseudorhodeus tanago",
    "環境省：ミヤコタナゴ Tanakia tanago",
    "神奈川県：ミヤコタナゴ"
  ]
},

{
  id: "sp0431",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "キオビヤドクガエル",
  scientificName: "Dendrobates leucomelas",
  englishName: "Yellow-banded poison dart frog",
  classification: ["脊索動物門", "両生綱", "無尾目", "ヤドクガエル科", "Dendrobates属"],
  category: "両生類",
  image: "images/sp0431.jpg",
  trivia: [
    {
      title: "黄色と黒は警告色",
      text: "鮮やかな黄色と黒の模様は、捕食者へ毒を持つことを知らせる警告色として働きます。"
    },
    {
      title: "毒は食べ物から作られる",
      text: "野生個体の皮膚アルカロイドは餌の小型節足動物から取り込むと考えられ、飼育下繁殖個体では毒性が大きく低下します。"
    }
  ],
  bodyLength: "体長3〜5cm程度。",
  distribution: "南米北部のベネズエラ、ガイアナ周辺などに分布します。",
  habitat: "熱帯林の林床、岩場、落ち葉の多い湿った環境に生息します。",
  diet: "アリ、ダニなど非常に小さな節足動物を食べます。",
  features: "黒い体に太い黄色の帯・斑紋が入り、個体によって模様に変異があります。",
  behavior: "昼行性で地表付近を歩いて小型昆虫を探し、繁殖期のオスは鳴いてメスへアピールします。",
  reproduction: "湿った陸上へ少数の卵を産み、ふ化したオタマジャクシを親が水場へ運びます。",
  identification: "黄色い太い帯と黒い地色の組み合わせが特徴です。",
  nameOrigin: "黄色い帯を持つヤドクガエルであることからキオビヤドクガエルと呼ばれます。",
  humanRelation: "鮮やかな警告色から展示で人気がありますが、野生個体には皮膚毒があるため触れないことが重要です。",
  observationPoint: "模様だけでなく、木や葉へつかまるための吸盤状の指先も見てください。",
  references: [
    "Amphibian Species of the World: Dendrobates leucomelas",
    "ITIS: Dendrobates leucomelas"
  ]
},

{
  id: "sp0432",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マダラヤドクガエル",
  scientificName: "Dendrobates auratus",
  englishName: "Green-and-black poison dart frog",
  classification: ["脊索動物門", "両生綱", "無尾目", "ヤドクガエル科", "Dendrobates属"],
  category: "両生類",
  image: "images/sp0432.jpg",
  trivia: [
    {
      title: "模様の色には大きな地域差",
      text: "緑と黒が有名ですが、地域個体群によって青、水色、黄色など色彩が大きく異なります。"
    },
    {
      title: "父親がオタマジャクシを運ぶ",
      text: "ふ化したオタマジャクシを親、特にオスが背中へ乗せ、安全な水場まで運びます。"
    }
  ],
  bodyLength: "体長3〜5cm程度。",
  distribution: "中米のニカラグア、コスタリカ、パナマから南米北西部などに分布します。",
  habitat: "湿潤な熱帯林の林床、渓流周辺などに生息します。",
  diet: "アリ、ダニ、非常に小さな昆虫などを捕食します。",
  features: "黒色を基調として緑色・青色などの不規則な斑紋が広がります。",
  behavior: "昼間に活動し、林床の落ち葉や植物上を移動して餌を探します。",
  reproduction: "湿った陸上へ卵を産んで親が管理し、ふ化した幼生は親の背中で小さな水場へ運ばれます。",
  identification: "黒色地に不規則な緑・青色斑が入りますが、色彩変異が非常に大きい種です。",
  nameOrigin: "全身にまだら状の斑紋を持つことが和名の由来です。",
  humanRelation: "観賞・展示で人気があり、飼育下個体は野生個体ほど強い毒性を持たないことが一般的です。",
  observationPoint: "キオビヤドクガエルと比べ、帯ではなく不規則なまだら模様に注目してください。",
  references: [
    "Amphibian Species of the World: Dendrobates auratus",
    "ITIS: Dendrobates auratus"
  ]
},

{
  id: "sp0433",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "チャグロサソリ",
  scientificName: "Heterometrus longimanus",
  englishName: "Asian forest scorpion",
  classification: ["節足動物門", "クモ形綱", "サソリ目", "サソリ科", "Heterometrus属"],
  category: "クモ形類",
  image: "images/sp0433.jpg",
  trivia: [
    {
      title: "JAZA登録でもHeterometrus longimanus",
      text: "日本動物園水族館協会の飼育動物検索でも、チャグロサソリにHeterometrus longimanusが対応しています。"
    },
    {
      title: "赤ちゃんは母親の背中へ",
      text: "卵を外へ産まず仔を産み、生まれた仔は最初の脱皮まで母親の背中で生活します。"
    }
  ],
  bodyLength: "全長10cm前後になる大型のサソリです。",
  distribution: "東南アジアの熱帯地域に分布します。",
  habitat: "湿度の高い熱帯林の林床、倒木や石の下、地面の穴などを利用します。",
  diet: "昆虫やその他の小型節足動物を捕食します。",
  features: "暗褐色から黒色の大型の体と太く発達したはさみを持ち、尾の先端には毒針があります。",
  behavior: "主に夜行性で、日中は倒木や石の下などに隠れます。",
  reproduction: "胎生でメスは多数の仔を産み、生まれた仔は母親の背中へ乗ります。",
  identification: "大型の黒褐色の体と太いはさみが特徴ですが、Heterometrus属には酷似種が多く、厳密な同定には注意が必要です。",
  nameOrigin: "茶色から黒褐色の体色を持つサソリであることが和名に表れています。",
  humanRelation: "毒針を持つため展示個体には触れられず、飼育・取り扱いには専門的な管理が必要です。",
  observationPoint: "尾の毒針だけでなく、大きなはさみの形と歩脚も観察してください。",
  references: [
    "日本動物園水族館協会：チャグロサソリ Heterometrus longimanus",
    "NCBI Taxonomy: Heterometrus longimanus"
  ]
},

{
  id: "sp0434",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "マクラギヤスデ",
  scientificName: "Niponia nodulosa",
  englishName: "Japanese flat-backed millipede",
  classification: ["節足動物門", "ヤスデ綱", "オビヤスデ目", "シロハダヤスデ科", "マクラギヤスデ属"],
  category: "多足類",
  image: "images/sp0434.jpg",
  trivia: [
    {
      title: "現地メモ『マクラギヤステ』は誤記",
      text: "八景島公式では「マクラギヤスデ」で、学名はNiponia nodulosa。巨大なアフリカ産ヤスデではなく、日本にも普通に生息する小型種です。"
    },
    {
      title: "脱皮するたび体節と脚が増える",
      text: "幼体は体節が少なく、脱皮ごとに体節と脚が増え、成体では通常20胴節になります。"
    }
  ],
  bodyLength: "体長約15〜20mm。",
  distribution: "本州の関東地方以南、九州、南西諸島など日本の広い範囲から記録されています。",
  habitat: "森林や公園の落ち葉、腐葉土、石の下、朽木の樹皮下など湿った林床に生息します。",
  diet: "落ち葉、腐植質、朽木などの分解途中の植物質を食べます。",
  features: "扁平なくすんだ褐色の体で背板の間に隙間があり、成体では20胴節を持ちます。",
  behavior: "林床をゆっくり歩き、乾燥を避けて落ち葉や朽木の中へ隠れ、集団で見つかることもあります。",
  reproduction: "幼体は少ない体節でふ化し、脱皮ごとに新しい体節を増やす「増節変態」で成長します。",
  identification: "円筒形ではなく幅広く扁平な体と、枕木のように並ぶ背板が特徴です。",
  nameOrigin: "背板が間隔を空けて並ぶ姿を、鉄道の線路に並ぶ枕木に見立てた名前です。",
  humanRelation: "身近な林床で落ち葉を分解する土壌動物で、発生・体節形成の研究材料にも利用されています。",
  observationPoint: "非常に小さいので背中を近くで見て、枕木のように並ぶ幅広い背板を観察してください。",
  references: [
    "横浜・八景島シーパラダイス：フォレストガーデン マクラギヤスデ",
    "環境省いきものログ：Niponia nodulosa",
    "奈良教育大学：マクラギヤスデ",
    "マクラギヤスデの増節変態研究"
  ]
},
{
  id: "sp0435",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "タイオオムカデ",
  scientificName: "Scolopendra dehaani",
  englishName: "Thai giant centipede",
  classification: ["節足動物門", "唇脚綱", "オオムカデ目", "オオムカデ科", "オオムカデ属"],
  category: "多足類",
  image: "images/sp0435.jpg",
  trivia: [
    {
      title: "20cmを超える大型ムカデ",
      text: "20cmを超える大型種で、2016年の東南アジア産Scolopendra属の分類再検討でも独立種Scolopendra dehaaniとして扱われています。"
    },
    {
      title: "昆虫だけでなく脊椎動物も襲う",
      text: "昆虫やクモを主に食べますが、野外ではカエルやヘビなど小型脊椎動物の捕食記録もあります。"
    }
  ],
  bodyLength: "大型個体では体長20cmを超え、分類研究でも20cmを超える個体が確認されています。",
  distribution: "タイを含む東南アジアを中心に分布し、ベトナムなど周辺地域からも記録されています。",
  habitat: "高温多湿な森林の林床で、落ち葉、石、倒木の下や地中など湿った場所を利用します。",
  diet: "昆虫やクモなどを中心に、小型の爬虫類・両生類など自分より小さい脊椎動物も捕食します。",
  features: "多数の体節からなる細長い体を持ち、各胴節に1対の歩脚、頭部直後には毒腺につながる顎肢があります。",
  behavior: "主に地表や落ち葉の下で活動し、夜間活動が多い一方、タイでは昼間の採餌や樹上活動も記録されています。",
  reproduction: "メスは卵塊を体で巻くように抱えてふ化まで守り、S. dehaaniでもこの行動が記録されています。",
  identification: "大型のScolopendra属で体色変異が大きいため、色だけで近縁種を識別するのは危険です。",
  nameOrigin: "タイ産の大型オオムカデとして、展示・流通上「タイオオムカデ」と呼ばれています。",
  humanRelation: "顎肢から毒を注入でき、咬まれると強い痛みや腫れを生じる可能性があるため、直接触れないことが重要です。",
  observationPoint: "脚だけでなく、頭部直後にある太い顎肢を観察してください。",
  references: [
    "Siriwut et al. 2016: Taxonomic review of Scolopendra in mainland Southeast Asia",
    "GBIF: Scolopendra dehaani",
    "Hodges & Goodyear 2021: Novel foraging behaviors of Scolopendra dehaani"
  ]
},

{
  id: "sp0436",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "オグロプレーリードッグ",
  scientificName: "Cynomys ludovicianus",
  englishName: "Black-tailed prairie dog",
  classification: ["脊索動物門", "哺乳綱", "齧歯目", "リス科", "プレーリードッグ属"],
  category: "哺乳類",
  image: "images/sp0436.jpg",
  trivia: [
    {
      title: "地下には巨大な『町』",
      text: "複雑な地下トンネルを作り、家族群が集まって大きなコロニーを形成します。"
    },
    {
      title: "『ドッグ』は鳴き声から",
      text: "犬ではなくリス科の齧歯類で、危険時に犬のような警戒声を出すことが名前の由来です。"
    }
  ],
  bodyLength: "全長約35〜42cm、体重約0.7〜1.7kgで、オスの方が大型になる傾向があります。",
  distribution: "北アメリカ中央部の大平原地域に自然分布します。",
  habitat: "乾燥した短草草原など、見通しの良いプレーリーに巣穴を掘って生活します。",
  diet: "食物の98％以上が植物質で、草の葉・茎・根などを主に食べ、昆虫を食べることもあります。",
  features: "ずんぐりした体と短い耳を持ち、尾の先端が黒色です。",
  behavior: "昼行性で家族群を作り、見張り役が捕食者を見つけると警戒声で仲間へ知らせます。",
  reproduction: "通常は年1回繁殖し、妊娠期間は約33〜38日です。1回に複数の仔を産み、地下の巣穴で育てます。",
  identification: "尾の先端が黒いことが、他のプレーリードッグ類との分かりやすい違いです。",
  nameOrigin: "プレーリーに暮らし、犬のような警戒声を出すことからプレーリードッグと呼ばれます。",
  humanRelation: "巣穴掘りや採食で草原環境を変化させ、多くの動植物に影響を与える重要な草原生態系の構成種です。",
  observationPoint: "立ち上がって周囲を見る姿や、仲間同士で触れ合う行動に注目してください。",
  references: [
    "日本動物園水族館協会：Cynomys ludovicianus",
    "Animal Diversity Web: Cynomys ludovicianus",
    "川崎市夢見ヶ崎動物公園：オグロプレーリードッグ"
  ]
},

{
  id: "sp0437",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "ベニイロフラミンゴ",
  scientificName: "Phoenicopterus ruber",
  englishName: "American flamingo",
  classification: ["脊索動物門", "鳥綱", "フラミンゴ目", "フラミンゴ科", "フラミンゴ属"],
  category: "鳥類",
  image: "images/sp0437.jpg",
  trivia: [
    {
      title: "ピンク色は食べ物から作られる",
      text: "藻類や甲殻類のカロテノイド色素を取り込んで羽毛が紅色になり、色素が不足すると体色は薄くなります。"
    },
    {
      title: "親は『フラミンゴミルク』を作る",
      text: "オスとメスの両方が消化管から栄養価の高い赤色の分泌物を出し、ヒナへ与えます。"
    }
  ],
  bodyLength: "全長約120〜145cm、体重約2.1〜4.1kgで、フラミンゴ類では最大級です。",
  distribution: "カリブ海地域、中央アメリカ周辺、南アメリカ北部、ガラパゴス諸島などに分布します。",
  habitat: "塩湖、塩性ラグーン、干潟など浅い水域に大群で生息します。",
  diet: "藻類、微小な甲殻類、水生昆虫、プランクトンなどを食べます。",
  features: "長い首と脚、下向きに曲がったくちばし、鮮やかな紅色の羽毛を持ち、翼を開くと黒い風切羽が見えます。",
  behavior: "くちばしを逆さまに水へ入れ、舌をポンプのように動かして、内部のラメラで小さな餌を濾し取ります。",
  reproduction: "泥で円錐状の巣を作り通常1個の卵を産み、雌雄が交代で抱卵し、ふ化後も両親で育てます。",
  identification: "ヨーロッパフラミンゴなどより全身の紅色が濃く、脚も鮮やかな桃色です。",
  nameOrigin: "非常に鮮やかな紅色の羽毛を持つことからベニイロフラミンゴと呼ばれます。",
  humanRelation: "世界各地の動物園で飼育される代表的なフラミンゴで、IUCNではLeast Concernです。",
  observationPoint: "餌を食べるときのくちばしを見て、頭を逆さまにして水を濾す様子を観察してください。",
  references: [
    "日本動物園水族館協会：Phoenicopterus ruber",
    "恩賜上野動物園：ベニイロフラミンゴ",
    "東山動植物園：ベニイロフラミンゴ"
  ]
},

// コツメカワウソは既存 sp0409
// LABO11内の重複なので新しいIDは作らない

{
  id: "sp0438",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "アカツクシガモ",
  scientificName: "Tadorna ferruginea",
  englishName: "Ruddy shelduck",
  classification: ["脊索動物門", "鳥綱", "カモ目", "カモ科", "ツクシガモ属"],
  category: "鳥類",
  image: "images/sp0438.jpg",
  trivia: [
    {
      title: "繁殖期のオスだけ黒い首輪",
      text: "雌雄はよく似ていますが、繁殖期のオスでは首に細い黒色のリングが現れます。"
    },
    {
      title: "日本にもまれに飛んでくる",
      text: "ユーラシア大陸を中心に分布し、日本にも数少ない冬鳥・迷鳥として飛来することがあります。"
    }
  ],
  bodyLength: "全長約58〜70cm、体重約1〜1.5kg。",
  distribution: "ユーラシア大陸中部などで繁殖し、冬季には北アフリカ、南アジア、中国などへ移動します。",
  habitat: "湖沼、河川、湿地、草原に近い水辺などを利用します。",
  diet: "水草・若芽・種子などの植物質に加え、昆虫、甲殻類、貝類なども食べる雑食性です。",
  features: "全身が鮮やかな橙褐色で頭部はやや淡く、翼を広げると白い雨覆羽と黒い風切羽が目立ちます。",
  behavior: "日中は水上で休むことも多く、朝夕を中心に陸上や浅い水辺で餌を探します。",
  reproduction: "岩穴、崖の穴、樹洞などを利用して営巣し、複数の卵を産みます。",
  identification: "橙褐色の大型のカモで、繁殖期のオスでは首の黒輪が目立ち、メスは顔がやや白っぽく見えます。",
  nameOrigin: "赤褐色の体を持つツクシガモ類であることからアカツクシガモと呼ばれます。",
  humanRelation: "IUCNではLeast Concernですが、日本では飛来数の少ない鳥として観察されます。",
  observationPoint: "首を見て、黒い首輪があれば繁殖羽のオスを見分ける手掛かりになります。",
  references: [
    "日本動物園水族館協会：Tadorna ferruginea",
    "千葉市動物公園：アカツクシガモ",
    "那須どうぶつ王国：アカツクシガモ"
  ]
},

{
  id: "sp0439",
  areaIds: ["labo11"],
  observedDate: "2026-09-12",
  updatedDate: "2026-09-14",
  nameJa: "コールダック",
  scientificName: "Anas platyrhynchos domesticus",
  englishName: "Call duck",
  classification: ["脊索動物門", "鳥綱", "カモ目", "カモ科", "マガモ属"],
  category: "鳥類",
  image: "images/sp0439.jpg",
  trivia: [
    {
      title: "独立した野生種ではなくアヒルの品種",
      text: "野生の別種ではなく、マガモを家畜化したアヒルをさらに小型化した家禽品種です。"
    },
    {
      title: "大きな声が名前の由来",
      text: "小さな体でも大声で鳴き、もともとは鳴き声で野生のカモを呼び寄せるおとり用アヒルとして利用されました。"
    }
  ],
  bodyLength: "全長約30cm、体重約600〜1000gで、一般的なアヒルよりかなり小型です。",
  distribution: "家禽品種のため自然分布域はなく、世界各地で観賞・ペット用などとして飼育されています。",
  habitat: "人の飼育環境で生活し水場を好みますが、野生種として特定の自然生息地はありません。",
  diet: "穀類、植物質、水生小動物などを食べる雑食性で、飼育下では家禽用配合飼料なども使われます。",
  features: "非常に小型で丸い体、大きな頭、短いくちばしが特徴で、白色、灰色、マガモ型など複数の羽色があります。",
  behavior: "群れで生活して水浴びや採餌を行い、小型でも飛翔能力の高い個体がいます。特にメスは大声でよく鳴きます。",
  reproduction: "卵生で他の家禽アヒルと同様に産卵・抱卵し、品種改良された家禽のため繁殖特性には系統差があります。",
  identification: "一般的なアヒルより非常に小さく、丸い頭と短いくちばしが特徴です。",
  nameOrigin: "鳴き声で野生のカモを「call＝呼ぶ」おとりとして利用されたことからCall Duckと呼ばれます。",
  humanRelation: "現在は観賞用・ペットとして飼育され、JAZAでは「アヒル（家禽）コールダック」として管理されています。",
  observationPoint: "普通のアヒルと体格・くちばしの長さを比べ、鳴き声にも注目してください。",
  references: [
    "日本動物園水族館協会：Anas platyrhynchos domestic call duck",
    "京都市動物園：アヒル（コールダック）",
    "岡崎市東公園動物園：コールダック",
    "NatureServe: Anas platyrhynchos domesticus"
  ]
},

// ========================================
// sp0441 バンドウイルカ
// 2026-09-19
// ========================================

{
  id: "sp0441",

  areaIds: [
    "dolphin-arch",
    "whale-ocean"
  ],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "バンドウイルカ",
  scientificName: "Tursiops truncatus",
  englishName: "Common bottlenose dolphin",

  classification: [
    "脊索動物門",
    "哺乳綱",
    "鯨偶蹄目",
    "マイルカ科",
    "ハンドウイルカ属"
  ],

  category: "哺乳類",

  image: "images/sp0441.jpg",

  trivia: [
    {
      title: "音で周囲の様子を調べる",
      text: "クリック音の反響を聞くエコーロケーションで、水中の餌や物体の位置を把握します。"
    },
    {
      title: "遊び行動がとても豊富",
      text: "波乗り、ジャンプ、物を使った遊びなどを行い、八景島でも自分で遊び方を考えるイルカとして紹介されています。"
    }
  ],

  bodyLength:
    "全長約2〜4m。八景島では体長約3mと紹介されています。",

  distribution:
    "世界各地の熱帯から温帯の海に広く分布し、沿岸だけでなく沖合を利用する個体群もあります。",

  habitat:
    "湾、河口、沿岸域から大陸棚、外洋まで幅広い海域を利用します。",

  diet:
    "魚類、イカ類、甲殻類などを食べ、複数個体で魚群を追い込むこともあります。",

  features:
    "灰色の流線型の体と太く比較的短い吻を持ち、背びれは大きな鎌形で、頭頂部には噴気孔があります。",

  behavior:
    "社会性が高く群れを作り、鳴音でコミュニケーションし、エコーロケーションで周囲や餌を探ります。",

  reproduction:
    "胎生で通常1頭を出産し、妊娠期間は約12か月です。子は母乳を飲みながら数年間母親と行動します。",

  identification:
    "太く短い吻、大きな鎌形の背びれ、がっしりした体型が特徴ですが、近縁種との識別には詳細な形態や遺伝情報が必要な場合があります。",

  nameOrigin:
    "英名Bottlenoseは太く突き出した吻を瓶の口に見立てた名称で、日本では「ハンドウイルカ」という名称も使われます。",

  humanRelation:
    "世界各地の水族館で飼育され、認知能力、社会行動、音響コミュニケーションなどの研究対象にもなっています。",

  observationPoint:
    "アーチ水槽では頭上を泳ぐときに、噴気孔、胸びれ、背びれ、尾びれを順に見て、体の動かし方も観察してください。",

  references: [
    "横浜・八景島シーパラダイス：バンドウイルカ",
    "NOAA Fisheries: Common Bottlenose Dolphin",
    "Mammal Diversity Database: Tursiops truncatus"
  ]
},


// ========================================
// sp0442 カワハギ
// 2026-09-19
// うみファーム内の詳細場所は後で一括修正
// ========================================

{
  id: "sp0442",

  areaIds: [
    "ocean-labo-a",
    "ocean-labo-b",
    "ocean-labo-c",
    "ocean-labo-d",
    "ocean-labo-e",
    "fishermans-oasis",
    "marine-biotop"],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "カワハギ",
  scientificName: "Stephanolepis cirrhifer",
  englishName: "Threadsail filefish",

  classification: [
    "脊索動物門",
    "条鰭綱",
    "フグ目",
    "カワハギ科",
    "カワハギ属"
  ],

  category: "魚類",

  image: "images/sp0442.jpg",

  trivia: [
    {
      title: "名前の通り皮をはぎやすい",
      text: "丈夫でざらついた皮を比較的簡単にはがせることが、和名の由来とされています。"
    },
    {
      title: "幼魚は流れ藻を利用する",
      text: "幼魚は海面を漂う流れ藻の周辺で見られ、隠れ場所や餌場として利用します。"
    }
  ],

  bodyLength:
    "最大で全長約30cm。",

  distribution:
    "西部太平洋に分布し、日本周辺では北海道から東シナ海まで見られます。",

  habitat:
    "沿岸の岩礁、砂底、砂礫底、藻場などの海底付近に生息します。",

  diet:
    "ゴカイ類、小型甲殻類、貝類などを、小さな口と丈夫な歯でついばんで食べます。",

  features:
    "左右に強く平たい体と厚くざらついた皮膚を持ち、頭上には強い第1背びれ棘があり、口は小さく前へ突き出します。",

  behavior:
    "海底付近をゆっくり泳いで餌を探し、危険を感じると第1背びれ棘を立てることがあります。",

  reproduction:
    "卵生で沿岸域で繁殖し、繁殖時期は地域や水温によって異なります。",

  identification:
    "左右に平たい体、小さな口、頭部の太く長い第1背びれ棘が特徴です。",

  nameOrigin:
    "丈夫な皮を簡単にはぎ取れることから、「皮を剥ぐ魚」という意味でカワハギと呼ばれるようになったとされています。",

  humanRelation:
    "日本の重要な食用魚で、刺身、煮付け、鍋などに利用され、特に肝が高く評価されています。養殖も行われています。",

  observationPoint:
    "頭上の長い第1背びれ棘と、小さな口で底や岩をついばむ行動に注目してください。",

  references: [
    "FishBase: Stephanolepis cirrhifer",
    "World Register of Marine Species: Stephanolepis cirrhifer"
  ]
},


// ========================================
// sp0443 アフリカワシミミズク
// 2026-09-19
// ========================================

{
  id: "sp0443",

  areaIds: [
    "welcome-port"
  ],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "アフリカワシミミズク",
  scientificName: "Bubo africanus",
  englishName: "Spotted eagle-owl",

  classification: [
    "脊索動物門",
    "鳥綱",
    "フクロウ目",
    "フクロウ科",
    "ワシミミズク属"
  ],

  category: "鳥類",

  image: "images/sp0443.jpg",

  trivia: [
    {
      title: "頭の『耳』は本当の耳ではない",
      text: "頭の左右に伸びる羽毛は「羽角」で、本当の耳の穴は頭部の羽毛に隠れています。"
    },
    {
      title: "夜の狩りに適応している",
      text: "大きな眼だけでなく聴覚も発達し、暗い場所でも小動物の位置を探せます。"
    }
  ],

  bodyLength:
    "全長約40〜50cmほどの中型のワシミミズクです。",

  distribution:
    "サハラ砂漠以南のアフリカに広く分布します。",

  habitat:
    "サバンナ、草原、低木地、岩場、開けた森林などさまざまな環境を利用します。",

  diet:
    "小型哺乳類、鳥類、爬虫類、昆虫などを捕食します。",

  features:
    "褐色から灰褐色の羽毛に細かな斑紋が入り、黄色い眼と頭部の羽角が目立ちます。",

  behavior:
    "主に夜に活動し、昼は木の枝や岩陰で休みます。特殊な羽毛によって飛行音を小さくできます。",

  reproduction:
    "岩棚、地面、建物などを営巣場所に利用し、主にメスが抱卵し、オスが餌を運ぶことがあります。",

  identification:
    "黄色い眼、頭部の羽角、全身の細かな斑点模様が特徴です。",

  nameOrigin:
    "アフリカに分布するワシミミズク類であることが和名に表れ、英名Spottedは斑点模様を意味します。",

  humanRelation:
    "動物園などで飼育され、フクロウ類の夜行性や飛行、捕食行動を学ぶ教育展示にも利用されています。",

  observationPoint:
    "黄色い眼と羽角を見てください。羽角を立てた時と寝かせた時では顔の印象が大きく変わります。",

  references: [
    "横浜・八景島シーパラダイス：アフリカワシミミズク",
    "横浜・八景島シーパラダイス：ウエルカムポート"
  ]
},


// ========================================
// sp0444 ルリコンゴウインコ
// 2026-09-19
// ========================================

{
  id: "sp0444",

  areaIds: [
    "welcome-port"
  ],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "ルリコンゴウインコ",
  scientificName: "Ara ararauna",
  englishName: "Blue-and-yellow macaw",

  classification: [
    "脊索動物門",
    "鳥綱",
    "オウム目",
    "インコ科",
    "コンゴウインコ属"
  ],

  category: "鳥類",

  image: "images/sp0444.jpg",

  trivia: [
    {
      title: "足を手のように使う",
      text: "前向き2本・後ろ向き2本の指で、枝や食べ物をしっかりつかめます。"
    },
    {
      title: "くちばしは非常に強力",
      text: "大きなくちばしで硬い木の実や種子を割り、木を登るときの支えにも使います。"
    }
  ],

  bodyLength:
    "全長約80cm前後。長い尾羽を持つ大型のインコです。",

  distribution:
    "南アメリカ北部から中部に広く分布します。",

  habitat:
    "熱帯林、川沿いの森林、湿地林、ヤシ林などに生息します。",

  diet:
    "果実、種子、木の実など植物質を中心に食べます。",

  features:
    "背中と翼は鮮やかな青色、胸から腹部は黄色で、額は緑色を帯び、顔には白い皮膚が露出します。",

  behavior:
    "ペアや群れで行動し、大声で鳴き合いながら移動します。ペア同士で羽繕いする姿も見られます。",

  reproduction:
    "樹洞などを巣に利用し、親鳥がヒナへ餌を与えて育てます。",

  identification:
    "鮮やかな青い翼と黄色い腹部、大きな黒色のくちばし、白い顔が特徴です。",

  nameOrigin:
    "瑠璃色を思わせる鮮やかな青い羽を持つ大型のコンゴウインコであることが和名の由来です。",

  humanRelation:
    "美しい羽色と高い知能から、世界各地の動物園などで飼育されています。",

  observationPoint:
    "白い顔に並ぶ細かな黒い羽毛や、枝を移動するときに足とくちばしを使う様子に注目してください。",

  references: [
    "横浜・八景島シーパラダイス：ルリコンゴウインコ",
    "横浜・八景島シーパラダイス：ウエルカムポート"
  ]
},


// ========================================
// sp0445 ハリスホーク
// 2026-09-19
// ========================================

{
  id: "sp0445",

  areaIds: [
    "welcome-port"
  ],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "ハリスホーク",
  scientificName: "Parabuteo unicinctus",
  englishName: "Harris's hawk",

  classification: [
    "脊索動物門",
    "鳥綱",
    "タカ目",
    "タカ科",
    "モモアカノスリ属"
  ],

  category: "鳥類",

  image: "images/sp0445.jpg",

  trivia: [
    {
      title: "仲間と協力して狩りをする",
      text: "猛禽類では珍しく社会性が高く、複数個体で協力して獲物を追い込むことがあります。"
    },
    {
      title: "猛禽類の教育展示でも活躍",
      text: "社会性が高く人との関係を築きやすいため、鷹狩や動物園の教育プログラムでも飼育されています。"
    }
  ],

  bodyLength:
    "全長約45〜60cm。一般にメスの方がオスより大型です。",

  distribution:
    "アメリカ合衆国南西部から中央アメリカ、南アメリカに分布します。",

  habitat:
    "砂漠、低木地、半乾燥地、開けた森林などに生息します。",

  diet:
    "ウサギなどの小型哺乳類、鳥類、爬虫類などを捕食します。",

  features:
    "濃褐色の体を持ち、肩や腿は赤褐色で、長い黄色の脚と尾の白色部分も特徴です。",

  behavior:
    "家族を中心とした群れを作ることがあり、複数個体で獲物を囲み、交代で追うなど協力して狩りをします。",

  reproduction:
    "木や大型のサボテンなどに巣を作り、繁殖ペア以外の個体が子育てを手伝うこともあります。",

  identification:
    "濃褐色の体、赤褐色の肩、黄色い脚、尾の白色部分が特徴で、飛翔時には尾の白色がよく目立ちます。",

  nameOrigin:
    "英名Harris's Hawkは博物学者Edward Harrisにちなみ、日本でも英名由来のハリスホークという呼び名が広く使われます。",

  humanRelation:
    "社会性が高く訓練しやすいため、鷹狩や猛禽類の教育展示などで飼育されています。",

  observationPoint:
    "濃褐色の体、赤褐色の肩、黄色い脚に注目し、飛翔時には尾の白色部分も見てください。",

  references: [
    "横浜・八景島シーパラダイス：ウエルカムポート",
    "Cornell Lab of Ornithology: Harris's Hawk"
  ]
},


// ========================================
// sp0446 シロイルカ
// 2026-09-19
// ========================================

{
  id: "sp0446",

  areaIds: [
    "whale-ocean"
  ],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "シロイルカ",
  scientificName: "Delphinapterus leucas",
  englishName: "Beluga whale",

  classification: [
    "脊索動物門",
    "哺乳綱",
    "鯨偶蹄目",
    "イッカク科",
    "シロイルカ属"
  ],

  category: "哺乳類",

  image: "images/sp0446.jpg",

  trivia: [
    {
      title: "子どもの頃は白くない",
      text: "生まれた直後は灰色で、成長とともに体色が薄くなり、成熟すると白色になります。"
    },
    {
      title: "首を左右へ動かせる",
      text: "多くのクジラ類と違って頸椎が完全には癒合しておらず、頭を上下左右へ比較的自由に動かせます。"
    }
  ],

  bodyLength:
    "全長約3〜5m。八景島では体重約0.5〜1.5tと紹介されています。",

  distribution:
    "北極海と周辺の亜寒帯海域に分布し、カナダ、アラスカ、ロシア、グリーンランド周辺などで見られます。",

  habitat:
    "寒冷な沿岸域、湾、河口、入り江などを利用し、季節によって海氷のある海域も利用します。",

  diet:
    "魚類のほか、イカ、タコ、エビ、カニ、貝類などさまざまな動物を食べます。",

  features:
    "成熟すると全身が白くなり、背びれを持たず、丸く大きな額を持ちます。",

  behavior:
    "社会性が高く群れで生活し、多彩な鳴き声から「海のカナリア」とも呼ばれ、エコーロケーションも使います。",

  reproduction:
    "胎生で通常1頭を出産し、妊娠期間は約15か月です。子は少なくとも約2年間母乳を飲むことがあります。",

  identification:
    "成体の白い体、大きく丸い額、背びれがないことが特徴です。",

  nameOrigin:
    "成熟すると全身が白くなることが和名の由来で、英名Belugaも白色に関係する語に由来します。",

  humanRelation:
    "水族館で飼育され、発声、エコーロケーション、認知能力などの研究対象にもなっています。",

  observationPoint:
    "背びれがないことに加え、頭を左右へ動かす様子や、柔らかい額の形が変化する様子にも注目してください。",

  references: [
    "横浜・八景島シーパラダイス：シロイルカ",
    "NOAA Fisheries: Beluga Whale"
  ]
},


// ========================================
// sp0447 ケープペンギン
// 2026-09-19
// ========================================

{
  id: "sp0447",

  areaIds: [
    "hireashi-beach",
    "friendly-circle"
  ],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "ケープペンギン",
  scientificName: "Spheniscus demersus",
  englishName: "African penguin",

  classification: [
    "脊索動物門",
    "鳥綱",
    "ペンギン目",
    "ペンギン科",
    "ケープペンギン属"
  ],

  category: "鳥類",

  image: "images/sp0447.jpg",

  trivia: [
    {
      title: "お腹の黒い斑点は個体ごとに違う",
      text: "白い腹部の黒色斑は個体ごとに配置が異なり、個体識別の手掛かりになります。"
    },
    {
      title: "野生では深刻な絶滅危機",
      text: "野生個体数が大きく減少し、2024年にIUCNレッドリストでCritically Endangeredへ引き上げられました。"
    }
  ],

  bodyLength:
    "全長約60〜70cm。",

  distribution:
    "アフリカ南部沿岸に分布し、南アフリカ共和国やナミビア周辺などで繁殖します。",

  habitat:
    "岩礁海岸、沿岸の島、砂浜などを繁殖地とし、海へ出て餌を探します。",

  diet:
    "イワシ類やカタクチイワシ類などの小型魚を中心に、イカ類なども食べます。",

  features:
    "背中は黒、腹面は白で胸に黒帯があり、眼の上にはピンク色の裸出部、腹部には黒色斑があります。",

  behavior:
    "海中では翼が変化したフリッパーで高速遊泳し、陸上では群れで繁殖や休息を行います。",

  reproduction:
    "地面の穴、岩の隙間、人工巣などを利用し、通常2個ほどの卵を産んで雌雄が交代で抱卵します。",

  identification:
    "胸の1本の黒帯、眼の上のピンク色の皮膚、腹部の黒い斑点が特徴です。",

  nameOrigin:
    "南アフリカのケープ地方を含むアフリカ南部に生息することから、ケープペンギンと呼ばれます。",

  humanRelation:
    "動物園や水族館で飼育される一方、野生では餌魚の減少、漁業との競合、気候変動などで急速に個体数が減っています。",

  observationPoint:
    "お腹の黒い斑点を個体ごとに比べ、同じ種類でも模様が異なることを観察してください。",

  references: [
    "横浜・八景島シーパラダイス：ケープペンギン",
    "BirdLife International: African Penguin"
  ]
},


// ========================================
// sp0448 オタリア
// 2026-09-19
// ========================================

{
  id: "sp0448",

  areaIds: [
    "hireashi-beach",
    "friendly-circle"
  ],

  observedDate: "2026-09-19",
  updatedDate: "2026-09-21",

  nameJa: "オタリア",
  scientificName: "Otaria flavescens",
  englishName: "South American sea lion",

  classification: [
    "脊索動物門",
    "哺乳綱",
    "食肉目",
    "アシカ科",
    "オタリア属"
  ],

  category: "哺乳類",

  image: "images/sp0448.jpg",

  trivia: [
    {
      title: "オスは『海のライオン』のようになる",
      text: "成熟したオスは首・胸・後頭部周辺の毛が発達し、ライオンのたてがみのように見えます。"
    },
    {
      title: "アザラシより陸上を移動しやすい",
      text: "後肢を体の前方へ回して体を支えられるため、陸上では四肢を使うように歩けます。"
    }
  ],

  bodyLength:
    "全長約200〜280cm。オスはメスより大型になります。",

  distribution:
    "南アメリカ中部以南の太平洋岸と大西洋岸などに分布します。",

  habitat:
    "岩礁海岸、砂浜、沿岸の島などを休息・繁殖場所に利用し、海へ出て餌を探します。",

  diet:
    "魚類、イカやタコなどの頭足類、甲殻類などを捕食します。",

  features:
    "大型でがっしりした体を持ち、成熟オスは頭と首が太くなり、後頭部や胸の毛がたてがみ状に発達します。",

  behavior:
    "海中では大きな前肢のフリッパーで泳ぎ、陸上では前肢と後肢で体を支えて比較的機敏に移動します。",

  reproduction:
    "繁殖期には大型オスが繁殖場所を確保して複数のメスと繁殖し、通常1頭の子を出産します。",

  identification:
    "外から見える小さな耳介、長い前肢、後肢を前方へ回して陸上を歩けることがアザラシ類との大きな違いです。",

  nameOrigin:
    "属名Otariaに由来し、英名South American sea lionは南アメリカに生息し、成熟オスがライオンのようなたてがみを持つことを表します。",

  humanRelation:
    "水族館では高い運動能力や学習能力を生かした行動展示が行われています。",

  observationPoint:
    "小さな耳介と大きな前肢を探し、陸上では後肢を体の下へ入れて歩く様子にも注目してください。",

  references: [
    "横浜・八景島シーパラダイス：オタリア",
    "Mammal Diversity Database: Otaria flavescens"
  ]
},

];












































































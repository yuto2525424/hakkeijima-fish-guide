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
        text: "背びれ後方には白く縁取られた黒い眼状斑があります。本当の眼は頭部を通る橙色の帯の中にあり、捕食者から頭の位置を分かりにくくする効果が考えられます。"
      },
      {
        title: "長い口は成長してから発達する",
        text: "成魚は非常に細長い吻を持ちますが、幼生やごく若い個体ではこの長い吻はまだ発達しておらず、サンゴ礁などへ定着した後に伸びていきます。"
      }
    ],

    bodyLength: "最大で全長約20cm。",

    distribution: "アンダマン海から東南アジア、琉球列島、オーストラリア周辺までのインド・西太平洋に分布します。",

    habitat: "水深1〜25m程度の岩礁やサンゴ礁に生息します。濁りのある内湾の礁や河口など、汽水の影響を受ける場所でも見られます。",

    diet: "主に海底や岩・サンゴの隙間にいる小型の底生無脊椎動物を捕食します。細長い吻を狭い隙間へ差し込んで餌を取ります。",

    features: "銀白色の強く側扁した体を持ち、眼を通る帯を含む複数の橙色の横帯があります。吻は非常に長く細く、背びれ後方には大きな黒色の眼状斑があります。",

    behavior: "単独またはペアで岩礁やサンゴ礁を泳ぎ、長い吻を隙間へ差し込んで餌を探します。縄張り性も知られています。",

    reproduction: "卵生です。成熟個体は繁殖時に明瞭なペアを形成し、一夫一妻的なペア関係が知られています。",

    identification: "非常に長い吻、銀白色の体に入る橙色の横帯、背びれ後方の大きな眼状斑が重要な識別点です。LABO10にいるフエヤッコダイForcipiger flavissimusとは別属・別種で、フエヤッコダイは体の大部分が黄色く、模様も大きく異なります。",

    nameOrigin: "非常に細長く前方へ伸びた吻を持つチョウチョウウオであることから『ハシナガチョウチョウウオ』と呼ばれます。",

    humanRelation: "特徴的な体色と長い吻から海水観賞魚として世界的に流通しています。人に危害を加える魚ではありません。",

    observationPoint: "まず背びれ後方にある大きな黒い眼状斑を探し、その後で本当の眼の位置を確認してください。長い吻を岩やサンゴの隙間へ入れて餌を探す動きも見どころです。",

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
        text: "頭の後ろの細い白帯に加えて、吻付近から尾の付け根まで背中を通る白い線があります。似たクマノミ類を見分ける重要な特徴です。"
      },
      {
        title: "オスからメスへ性転換する",
        text: "クマノミ類は雄性先熟型で、群れの最大個体がメスになります。メスがいなくなると、繁殖オスがメスへ性転換します。"
      }
    ],

    bodyLength: "最大で全長約10cm。",

    distribution: "西太平洋を中心に、タイ湾、東部インド洋からサモア・トンガ、北は琉球列島、南はグレートバリアリーフやニューカレドニアまで分布します。",

    habitat: "サンゴ礁の礁湖や外縁部に生息し、大型のイソギンチャクと共生します。水深1〜38m程度から記録されています。",

    diet: "動物プランクトンなどの小型生物や藻類などを利用する雑食性です。",

    features: "体は淡い桃色から橙桃色で、眼の後方に細い白い横帯があります。さらに頭部から尾柄まで背中に沿って白い縦線が伸びます。尾びれも白っぽくなります。",

    behavior: "共生するイソギンチャクから大きく離れず、その触手の間を隠れ場所として利用します。群れには明確な社会順位があり、優位な2個体が繁殖ペアになります。",

    reproduction: "雄性先熟型です。優位なメスが岩などに卵を産み、繁殖オスが主に卵を守りながらひれで水を送り、孵化まで世話をします。",

    identification: "眼の後ろの白い横帯に加え、背中を通って尾まで続く白い線が重要です。よく似るセジロクマノミでは眼の後ろの白い横帯がありません。",

    nameOrigin: "淡い桃色を帯びた美しい体色が花びらを思わせることから、ハナビラクマノミと呼ばれています。",

    humanRelation: "イソギンチャクとの共生や性転換を観察できることから、水族館で非常に解説しやすい魚です。海水観賞魚としても流通します。",

    observationPoint: "まず背中を通る白線と眼の後ろの白帯を確認してください。その後、イソギンチャクからどの程度離れて泳ぐのかを見ると、共生関係がよく分かります。",

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
        text: "成長すると尾びれの上下などが糸状に長く伸び、淡い青色の体と合わせて非常に優雅な姿になります。"
      },
      {
        title: "学名の『hanae』には人の名前が残っている",
        text: "種小名 hanae は、模式標本の採集に関係した動物学者・箕作佳吉の娘Hanaにちなむ名称とされています。"
      }
    ],

    bodyLength: "最大で全長約12cm。",

    distribution: "西太平洋に分布し、フィリピンからライン諸島、北は南日本、南はオーストラリア北西部やニューサウスウェールズまで記録されています。",

    habitat: "サンゴ礁や岩礁に近い砂礫底の上で見られます。FishBaseでは水深3〜50m、通常は6〜30m程度とされています。",

    diet: "水中を漂う動物プランクトンなどの小型生物を捕食すると考えられます。底に密着するよりも、水中へ出て餌を取るクロユリハゼ類です。",

    features: "体は淡い青色から青灰色で細長く、鰓蓋には鮮やかな青い曲線状の模様があります。成魚では第2背びれの一部や尾びれが長く伸びます。",

    behavior: "砂礫底の上を浮くように泳ぎます。危険を感じると近くの穴や隙間へ逃げ込みます。細長いひれを使いながら水中を漂うように泳ぐ姿が特徴的です。",

    reproduction: "本種固有の産卵行動や卵保護について、今回確認した主要資料では十分な情報が得られなかったため断定的な記述は避けます。",

    identification: "淡い青色の細長い体、鰓蓋の青い線、成魚で長く伸びる尾びれが特徴です。クロユリハゼなど近縁種とは体色や尾びれの形が大きく異なります。",

    nameOrigin: "学名の種小名 hanae はHanaという人名への献名です。和名『ハナハゼ』の詳しい命名経緯については主要資料で明確な根拠を確認できなかったため断定しません。",

    humanRelation: "一般的な食用魚ではありません。淡い青色と長く伸びるひれが美しく、ダイビングや水族館観察でも見栄えのする魚です。",

    observationPoint: "尾びれをよく見てください。成魚では細長く伸びた部分が水中をなびくように動きます。また、鰓蓋の青い線も近くで観察すると非常に鮮やかです。",

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
        text: "種小名 leucosternon は、白を意味する語と胸を意味する語に由来し、本種の目立つ白い胸部を表しています。"
      },
      {
        title: "大きな群れで餌を食べることもある",
        text: "単独で生活する個体だけでなく、多数の個体が集まって岩面の藻類を食べる採餌集団を形成することもあります。"
      }
    ],

    bodyLength: "最大で全長約54cmという記録がありますが、FishBaseで示される一般的な体長は約19cmです。",

    distribution: "主にインド洋に分布し、東アフリカからアンダマン海、クリスマス島、インドネシア南西部などで見られます。バリ島周辺まで分布が確認されています。",

    habitat: "透明度の高い浅いサンゴ礁に生息し、特に礁原や外洋側の上部斜面などで見られます。水深0〜25m程度から記録されています。",

    diet: "主に岩やサンゴ表面に生える底生藻類を食べる草食性です。細かな藻類を繰り返しついばみます。",

    features: "体側は鮮やかな青色で、頭部は黒く、胸部は白色です。背びれは黄色く、尻びれと腹びれは白色で、強い色のコントラストがあります。",

    behavior: "単独で行動することもありますが、大きな採餌集団を作ることもあります。サンゴ礁を泳ぎ回りながら岩面の藻類を何度もついばみます。",

    reproduction: "ペアでの産卵が知られています。一夫一妻的なペア関係も報告されており、雌雄が卵と精子を水中へ放出して体外受精します。",

    identification: "青い体、黒い頭、白い胸、黄色い背びれという非常に特徴的な配色を持ちます。尾の付け根にはニザダイ科特有の鋭い棘があります。",

    nameOrigin: "英名Powderblue surgeonfishは粉をまぶしたような淡く鮮やかな青色に由来します。学名 leucosternon は『白い胸』を意味し、胸部の白色を表しています。",

    humanRelation: "海水観賞魚として世界的に流通するほか、一部地域では小規模な漁業対象にもなります。尾柄の鋭い棘があるため、取り扱いには注意が必要です。",

    observationPoint: "体全体の鮮やかな色だけでなく、胸の白い部分と尾の付け根を見てください。白い胸は学名にも使われている重要な特徴です。",

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
        text: "オスは紫色が強く、成熟した個体では口の周辺が黄色くなることがあります。メスでは背中から尾びれ上部へ続く黄色い帯が目立ちます。"
      },
      {
        title: "群れの中で性転換する",
        text: "群れで生活し、大きく優位な個体がオスへ性転換することが知られています。色や模様の違いは、性別を見分ける手掛かりにもなります。"
      }
    ],

    bodyLength: "最大で全長約12cm。",

    distribution: "インド洋から西太平洋に分布します。モーリシャス周辺からフィリピン、インドネシア、ソロモン諸島、グレートバリアリーフなどで見られ、南日本からも記録されています。",

    habitat: "サンゴ礁の外側の斜面など、海水の流れがある場所に群れで生息します。水深2〜40m程度から記録されています。",

    diet: "主に水中を漂う小型の甲殻類などの動物プランクトンを食べます。魚の卵を食べることも記録されています。",

    features: "細長く左右に平たい体を持つ小型のハナダイ類です。成熟したオスは全体的に鮮やかな紫色になり、背びれ後方に濃い紫色の部分があります。メスでは体に黄色が入り、オスとはかなり異なる外見になります。",

    behavior: "サンゴ礁の斜面上で多数の個体が集まり、水中を流れてくるプランクトンを捕食します。流れに向かって同じ方向を向きながら群泳する様子が見られます。",

    reproduction: "雌性先熟型の性転換を行うことが知られています。群れの中で大きく優位になった個体がオスへ変化します。本種固有の産卵の細かな時間帯や卵数については、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "オスでは鮮やかな紫色の体と黄色味を帯びる口元、メスでは背中から尾びれへ続く黄色い帯が重要な特徴です。よく似たハナゴイ類とは、特にオスの口元とメスの黄色い模様を比較します。",

    nameOrigin: "紫色の非常に鮮やかな体色から、観賞魚・水族館では「パープルクイーン」の名称で呼ばれます。「パープルクイーンアンティアス」も同じ種を指す名称です。",

    humanRelation: "鮮やかな紫色から海水観賞魚として流通します。群泳や性転換、雌雄で異なる体色を観察できるため、水族館でも生態を紹介しやすい魚です。",

    observationPoint: "複数個体の色を比べてみてください。紫色の強い個体と、黄色い帯が目立つ個体がいれば、雌雄による外見の違いを実際に観察できます。",

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
        text: "背びれ・腹びれ・尻びれには鋭い棘があり、毒腺を備えています。自然界では外敵から身を守るための重要な武器になります。"
      },
      {
        title: "よく似た魚との違いは黒い斑点",
        text: "フォックスフェイスラビットフィッシュと非常によく似ていますが、ヒフキアイゴには体の後方上部に大きな黒い斑点があります。"
      }
    ],

    bodyLength: "最大で標準体長約20cm。標準体長とは尾びれを除いた体の長さです。",

    distribution: "西太平洋に分布し、琉球列島、フィリピン、西オーストラリア北部などから記録されています。",

    habitat: "サンゴが発達した浅い海や、サンゴ礁の外側などに生息します。枝状サンゴの周辺でもよく見られ、水深30mほどまで記録されています。",

    diet: "主に海藻を食べる植物食性です。岩やサンゴの表面に生えている藻類をついばみます。",

    features: "黄色い体に、目を通る黒い帯と白色部分があります。口先は筒のように細長く突き出しています。体の後方上部にある大きな黒色斑が本種を見分ける重要な特徴です。",

    behavior: "小さな幼魚では数百匹規模の群れを作ることがありますが、成長するとペアで行動することが多くなります。サンゴ礁を泳ぎ回りながら藻類を食べます。",

    reproduction: "本種だけに限定した詳しい産卵行動については、今回確認した主要資料では十分な情報が得られませんでした。そのため、他のアイゴ類の繁殖情報を本種の事実として記載することは避けます。",

    identification: "黄色い体、突き出した細長い吻、頭部の白黒模様に加え、体の後方上部にある大きな黒斑を確認します。この黒斑が、よく似た Siganus vulpinus との重要な違いです。",

    nameOrigin: "和名「ヒフキアイゴ」の詳しい由来は今回確認した主要な魚類資料では明確に確認できませんでした。種小名 unimaculatus は「1つの斑点を持つ」という意味で、体側の黒斑を表しています。",

    humanRelation: "観賞魚として飼育されるほか、地域によっては水産利用されます。棘には毒があるため、採集や取り扱いの際には注意が必要な魚です。",

    observationPoint: "一番分かりやすいのは体の後ろにある黒い斑点です。次に細長く突き出た口を見て、どのように岩の表面の藻類をついばんでいるか観察してみてください。",

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
        text: "枝状のサンゴの周囲で、非常に多くの個体が集まることがあります。他のテンジクダイ類と一緒に群れを作ることもあります。"
      },
      {
        title: "卵を口の中で育てる",
        text: "テンジクダイ類らしく口内保育を行います。本種ではオスが卵を口に入れて保護することが研究でも確認されています。"
      }
    ],

    bodyLength: "最大で全長約5.5cm。比較的小型のテンジクダイ類です。",

    distribution: "インド洋から西太平洋に広く分布し、東アフリカからサモア、北は八重山諸島、南はグレートバリアリーフまで確認されています。",

    habitat: "波の穏やかな湾や、サンゴ礁に囲まれた浅い海に生息します。特に枝状サンゴの上やサンゴの隙間で群れを作り、水深1〜15m程度から記録されています。",

    diet: "夜になると中層などへ出て、小型甲殻類や動物プランクトンなどの小さな動物を捕食します。",

    features: "体は半透明から白っぽく、側面は銀色に見えます。鰓ぶたや胸びれの後ろに青色の点が見られることがあり、尾の付け根には黒い斑点があります。",

    behavior: "昼間は枝状サンゴの周囲に大きな群れを作り、夜になると群れから広がって餌を取ります。昼と夜で行動が大きく変化する夜行性の魚です。",

    reproduction: "繁殖時にはペアを形成し、口内保育を行います。研究では卵を保育しているオスが確認されており、口の中で卵を守ることは摂餌や呼吸にも影響を与えると考えられています。",

    identification: "半透明の小さな体、銀色の体側、尾の付け根にある黒い斑点が主な特徴です。多数で枝状サンゴの周囲に集まっていることも、本種を見つける手掛かりになります。",

    nameOrigin: "和名「ヒラテンジクダイ」の詳しい命名由来について、今回確認した主要資料では明確な説明を確認できなかったため断定しません。種小名 fragilis はラテン語で「壊れやすい・繊細な」といった意味を持ちます。",

    humanRelation: "大型の食用魚ではありませんが、サンゴ礁で大群を作る小型魚として水族館のサンゴ礁展示などで利用されます。",

    observationPoint: "1匹だけを見るより、群れ全体に注目してみてください。多数の個体がほぼ同じ位置に集まる姿と、尾の付け根にある黒い斑点を確認するのがおすすめです。",

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
        text: "背びれと尻びれが非常に大きく、広げると帆のようなシルエットになります。英名の Sailfin tang もこの特徴に由来します。"
      },
      {
        title: "幼魚と成魚で見た目が変わる",
        text: "小さな幼魚では黄色と黒色の帯が目立ちますが、成長すると全体的に茶色や灰色が強くなります。"
      }
    ],

    bodyLength: "最大で標準体長約40cm。大型になるヒレナガハギ属の魚です。",

    distribution: "東部インド洋から太平洋に広く分布し、インドネシア、南シナ海、ハワイ、日本、小笠原諸島、オーストラリアなどで確認されています。",

    habitat: "浅いサンゴ礁からサンゴ礁の外側まで生息します。通常は水深2〜30m程度で見られ、幼魚は浅く穏やかな場所の岩やサンゴの周囲で生活します。",

    diet: "主に大型の海藻などを食べる植物食性です。岩などの表面に生えている植物質をついばみます。",

    features: "左右に平たい体に、非常に高く伸びる背びれと尻びれを持ちます。体には複数の縦方向の帯が入り、尾の付け根にはニザダイ科特有の鋭い棘があります。",

    behavior: "昼間に活動し、サンゴ礁を泳ぎ回りながら海藻を食べます。幼魚は単独でサンゴや岩の近くにいることが多く、成長に伴って利用する場所も変化します。",

    reproduction: "ペアで産卵することが確認されています。求愛・産卵は朝から午後に行われ、潮が引いていく時間帯に行われることも報告されています。",

    identification: "非常に大きく高い背びれと尻びれが最大の特徴です。ひれを完全に広げたときの体高は非常に大きく見えます。体の縞模様と尾の付け根の棘も確認できます。",

    nameOrigin: "背びれと尻びれが長く大きく発達することから「ヒレナガハギ」と呼ばれます。英名 Sailfin tang も「帆のようなひれを持つニザダイ」という意味です。",

    humanRelation: "美しい幼魚や大きなひれを持つことから観賞魚として流通します。一般的な重要食用魚ではありません。",

    observationPoint: "泳いでいるときと、ひれを大きく広げた瞬間を比較してみてください。体の見た目の大きさが大きく変化することが分かります。",

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
        text: "海草やサンゴ礁の周囲で暮らし、緑色や茶色を基調とした複雑な模様で周囲に溶け込みます。カモフラージュ能力の高いカワハギ類です。"
      },
      {
        title: "オスの尾の近くには毛のような突起",
        text: "成熟したオスでは尾の付け根に、細かな毛のように見える突起が集まった部分があります。英名の Bristle-tail もこの特徴を表しています。"
      }
    ],

    bodyLength: "資料によって最大値に差があり、FishBaseでは最大標準体長14cm、Fishes of Australiaでは最大全長11.5cmとされています。",

    distribution: "インド洋から西太平洋に分布し、スリランカからインドネシア、ニューカレドニア、南日本などで見られます。",

    habitat: "浅いサンゴ礁、海草が生えている場所、岩やサンゴの破片が多い場所などに生息します。特に海草の中で見られることが多く、水深15m程度まで確認されています。",

    diet: "小型の甲殻類、ゴカイ類、貝類など、海底にいる小さな無脊椎動物を食べます。",

    features: "体は緑色から茶色で、不規則な濃淡模様や白っぽい帯があります。体表には小さな皮膚の突起があり、成熟したオスでは尾の付け根に細かな棘状の突起が集まります。",

    behavior: "単独で生活することが多く、海草や岩の間をゆっくり泳ぎながら餌を探します。周囲に似た色や模様を持つため、静止していると見つけにくい魚です。",

    reproduction: "卵生であることが確認されていますが、本種固有の細かな求愛行動や卵保護については、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "緑から茶色の複雑な模様、皮膚の小さな突起、頭の上に立つ第1背びれの棘が特徴です。成熟したオスでは尾の付け根にある毛のような突起も識別に役立ちます。",

    nameOrigin: "和名の詳しい命名由来については主要資料では明確に確認できませんでした。種小名 tomentosus は「毛が密生した」という意味で、オスの尾の付け根にある毛状の突起に関係すると考えられています。",

    humanRelation: "海水観賞魚として流通します。周囲へ溶け込む高いカモフラージュ能力を持つ魚として、生物の保護色を観察する題材にもなります。",

    observationPoint: "水槽内の海草や岩と魚の体色を比べてみてください。体の輪郭が周囲に溶け込むように見えるか、体表にある小さな突起まで観察すると面白いです。",

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
        text: "鮮やかな赤橙色の体に黒い縦帯が入ります。生息する地域によって赤色の濃さなどに違いが見られます。"
      },
      {
        title: "1匹のオスと複数のメスで暮らす",
        text: "自然界では1匹のオスと複数のメスからなる、3〜7匹ほどの小さなグループを形成することがあります。"
      }
    ],

    bodyLength: "最大で全長約15cm。博物館資料などでは10cm前後までとして紹介されることもあります。",

    distribution: "主に熱帯の太平洋に分布し、ミクロネシア、ハワイ、ソロモン諸島、オーストラリア北東部など中・西部太平洋で見られます。",

    habitat: "透明度の高いサンゴ礁の内側から外側に生息します。岩やサンゴの隙間を隠れ場所として利用し、水深60m程度まで記録されています。",

    diet: "自然界では主に岩などの表面に生える藻類を食べます。",

    features: "体は鮮やかな赤色から橙色で、側面に複数の黒い縦帯があります。背びれと尻びれの後方には青紫色と黒色の細かな模様が入り、非常に鮮やかな外見です。",

    behavior: "岩やサンゴの隙間の近くを生活場所とし、危険を感じるとすぐに隠れられる範囲で活動します。自然界では小さなハーレムを形成します。",

    reproduction: "アブラヤッコ属は雌性先熟型の性転換を行うグループで、本種も雌雄同体性が知られています。社会的な順位と性が関係する小型キンチャクダイ類です。",

    identification: "赤橙色の体に黒い縦帯が並ぶ特徴的な模様で識別しやすい魚です。背びれ・尻びれ後方の青紫色の細い模様も重要な特徴です。",

    nameOrigin: "英名 Flame angelfish は、炎を思わせる鮮やかな赤橙色の体色に由来します。学名 loriculus の詳しい語源については複数の解釈があり、断定されていません。",

    humanRelation: "非常に鮮やかな色彩から、世界的に人気の高い海水観賞魚です。人工飼育下での繁殖例もあります。",

    observationPoint: "赤い体だけを見るのではなく、黒い縦帯の本数や形、背びれと尻びれ後方の青い模様を近くで見てみてください。",

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
        text: "ヘコアユは普段、体をほぼ縦にして頭を下へ向けた独特な姿勢で泳ぎます。群れの個体がそろって同じ姿勢を取ることもあります。"
      },
      {
        title: "尾に見える部分は背びれの棘",
        text: "体の後端から長く伸びている部分は普通の尾ではなく、背びれの第1棘が変化したものです。本当の尾びれは体の下側へ移動したような位置にあります。"
      }
    ],

    bodyLength: "最大で全長約15cm。",

    distribution: "インド・西太平洋に分布し、東アフリカ、セーシェル、南日本からオーストラリアのニューサウスウェールズ、バヌアツなどで見られます。",

    habitat: "波が比較的穏やかなサンゴ礁、海草が生える場所、岩礁などに生息します。水深2〜42m程度から記録されています。",

    diet: "動物プランクトンに含まれる非常に小さな甲殻類などを食べます。細長い口で小さな餌を吸い込むように捕食します。",

    features: "左右に非常に薄く平たい体を持ち、体表は薄い骨質の板で覆われています。体には吻から後方へ続く暗色の線があり、生息環境によって体色も変化します。",

    behavior: "頭を下にした姿勢で複数個体がまとまって泳ぎます。ガンガゼ類の長い棘の間や、枝状サンゴの周囲で群れを作ることがあります。",

    reproduction: "本種固有の詳しい産卵行動については、今回確認した主要な魚類資料では十分な情報がないため、推測による記載は行いません。",

    identification: "頭を下へ向けて縦に泳ぐ姿だけでも非常に特徴的です。薄く細長い体、体を走る黒い線、後方へ突き出した長い背びれの棘にも注目します。",

    nameOrigin: "和名「ヘコアユ」の詳しい由来について、今回確認した主要資料では確実な説明を確認できませんでした。英名 Jointed razorfish は、薄く刃物のような体形を表しています。",

    humanRelation: "食用として重要な魚ではありませんが、独特の泳ぎ方と体の形から水族館や観賞魚の世界でよく知られています。",

    observationPoint: "一番注目してほしいのは泳ぐ方向です。他の魚と比べて、本当に頭を下へ向けて泳いでいるか確認してください。その後、尾に見える長い突起にも注目してみてください。",

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
        text: "クリーニングステーションと呼ばれる場所を作り、ほかの魚の体表や口、鰓などについている寄生性の甲殻類などを食べます。"
      },
      {
        title: "性別が変わる",
        text: "基本的にはメスからオスへ性転換する魚ですが、研究では条件によってオスからメスへの逆方向の性転換も確認されています。"
      }
    ],

    bodyLength: "最大で全長約14cm。",

    distribution: "紅海、東アフリカから太平洋の島々まで、熱帯・亜熱帯のインド太平洋に非常に広く分布します。日本では南日本でも見られます。",

    habitat: "サンゴ礁や岩礁の浅い海から水深100m程度まで記録されていますが、通常は水深1〜30mほどでよく見られます。",

    diet: "ほかの魚の体表についている寄生性甲殻類などを主に食べます。また、相手の魚の粘液を食べることも知られています。",

    features: "細長い体を持ち、頭から尾まで黒い帯が伸びます。その上下は白色から淡い青色で、後方になるほど黒い帯が太くなります。",

    behavior: "一定の場所をクリーニングステーションとして利用し、掃除を受けに来た魚に近づいて寄生生物を食べます。相手に自分が掃除魚であることを示すような、特徴的な泳ぎを見せることもあります。",

    reproduction: "雌性先熟型で、群れの優位なオスがいなくなると大きなメスがオスへ性転換します。放卵・放精するタイプで、繁殖時にはペアで産卵します。研究では逆方向の性転換も確認されています。",

    identification: "吻から尾まで続く黒い帯と細長い体が特徴です。本種に似た模様を持って近づき、ほかの魚の体をかじるニセクロスジギンポという擬態魚もいるため、行動まで見るとさらに面白くなります。",

    nameOrigin: "もともと細長い体形から「ホソソメワケベラ」と呼ばれたものが、後に「ホンソメワケベラ」と呼ばれるようになったとする資料があります。",

    humanRelation: "サンゴ礁の魚同士の相利的な関係を示す代表的な魚として、多くの生態研究の対象になっています。魚類の認知能力を調べる研究にも利用されています。",

    observationPoint: "ホンソメワケベラ自身だけでなく、その周囲の魚にも注目してください。大きな魚が体を止め、ホンソメワケベラに体や口の周辺を掃除させている場面を見られる可能性があります。",

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
        text: "原記載では、生きている個体に白・茶・黒・黄・橙・青・紫という多くの色が現れることから multicolor と名付けられました。"
      },
      {
        title: "比較的深いサンゴ礁で暮らす",
        text: "水深20〜115mから記録されており、一般的な浅いサンゴ礁魚より深い場所でも生活する小型ヤッコです。"
      }
    ],

    bodyLength: "最大で全長約9cm。",

    distribution: "中部太平洋を中心に、パラオ、ミクロネシア、マーシャル諸島、フィジー、クック諸島、ソシエテ諸島などに分布します。ハワイでは迷い込んだ個体が記録されています。",

    habitat: "サンゴ礁の外側にある急な斜面や深い場所で見られます。サンゴが多い場所の間にある小石やサンゴ片の多い場所、岩棚の下などを隠れ場所として利用します。",

    diet: "主に植物質を利用する魚で、岩面などにつく藻類を食べます。",

    features: "体の上部は白っぽく、腹側には黄色から橙色が入ります。頭部には黒色と青色の複雑な模様があり、背びれや尻びれにも黒・青色が入り、名前通り非常に多彩です。",

    behavior: "岩やサンゴの隙間を利用する隠れがちな魚です。自然界では1匹のオスと複数のメスからなる3〜7匹ほどのハーレムを形成します。",

    reproduction: "雌性先熟型で、最初はメスとして成熟し、群れの社会的な条件によって一部の個体がオスへ性転換します。",

    identification: "白い体上部、黄色から橙色の腹部、額付近の黒と青の模様という組み合わせが特徴です。小型ながら複数の色がはっきり分かれています。",

    nameOrigin: "種小名 multicolor は「多くの色」という意味です。原記載では生体に7色が見られることが名称の由来とされています。",

    humanRelation: "美しい色彩から海水観賞魚として流通します。人工飼育下で繁殖された個体も流通するようになっています。",

    observationPoint: "体を一色ずつ分けて見るように観察してみてください。白、黄色、橙色、黒、青などが小さな体の中にどのように配置されているかがよく分かります。",

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
        text: "頭側は黄色っぽく、中央には太い黒褐色の帯があり、体の後半には紫色の水玉模様があります。1匹の魚に複数の模様が組み合わされています。"
      },
      {
        title: "卵を口の中で守る",
        text: "テンジクダイ類らしく、繁殖時には口内保育を行います。卵を口に入れて孵化まで守る独特の繁殖方法です。"
      }
    ],

    bodyLength: "最大で全長約8.5cm。",

    distribution: "インド太平洋に分布し、ジャワ島周辺からフィジー、北は琉球列島、南はグレートバリアリーフまで見られます。トンガからも記録されています。",

    habitat: "波の穏やかな湾や、サンゴ礁に囲まれた浅い海に生息します。昼間は枝状サンゴの間などで群れを作り、水深1〜14m程度から記録されています。",

    diet: "小型のエビやカニなどの甲殻類、動物プランクトン、カイアシ類などを食べます。夜間に海底近くへ広がって餌を取ります。",

    features: "頭部は黄色味を帯び、目には赤い帯があります。体の中央には太い黒褐色の帯があり、後半には紫色の斑点が多数入ります。第2背びれの一部が長く伸びます。",

    behavior: "昼間は枝状サンゴの周囲で複数個体が集まって過ごします。夜になると群れが広がり、海底近くで小型の動物を捕食します。",

    reproduction: "繁殖時には明瞭なペアを形成し、口内保育を行います。卵を外敵から守るため、親魚が卵塊を口の中に保持します。",

    identification: "黄色い頭、目を通る赤い線、体中央の太い黒い帯、体後半の紫色の水玉模様という非常に特徴的な組み合わせを持ちます。",

    nameOrigin: "和名「マンジュウイシモチ」の詳しい由来について、今回確認した主要資料では確実な説明を確認できなかったため断定しません。英名 Pajama cardinalfish は、さまざまな模様が組み合わされた独特の体色を表しています。",

    humanRelation: "特徴的でかわいらしい模様から海水観賞魚として世界的に人気があります。人工繁殖にも成功している魚です。",

    observationPoint: "まず体を前半・中央・後半の3つに分けて見てみてください。黄色い頭、黒い帯、水玉模様と、場所によって全く異なる模様を持っていることがよく分かります。",

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
        text: "ミズタマハゼは砂を口に含み、その中にいる小さな底生動物などを選び取って食べます。餌を取り除いたあとの砂は鰓の周辺から排出されます。"
      },
      {
        title: "多くの場合ペアで暮らす",
        text: "成魚はペアで行動し、岩やサンゴ片の下などに作られた巣穴を生活場所として利用します。一夫一妻的なペア形成が知られています。"
      }
    ],

    bodyLength: "最大で全長約14cm。",

    distribution: "紅海、ペルシャ湾、東アフリカからサモアまでのインド太平洋に広く分布します。北は琉球列島の八重山諸島、南はオーストラリアのクイーンズランドまで確認されています。",

    habitat: "サンゴ礁に囲まれた湾や礁湖などの砂底・泥混じりの砂底に生息します。水深3〜25m程度から記録されています。",

    diet: "砂を口に含んでこし取り、その中にいる非常に小さな底生動物を食べます。研究ではカイアシ類、貝形虫類、ダニ類などの微小な無脊椎動物が消化管から確認されています。",

    features: "体は淡い灰色から白っぽい色で、頬に水色から白色の小さな斑点があります。第1背びれの先端には黒色部があり、体の下側には淡い桃色の線が見えることがあります。オスでは尾びれがより長く伸びる傾向があります。",

    behavior: "砂地の上を低く泳ぎ、何度も砂を口へ入れながら餌を探します。通常はペアで行動し、危険を感じると岩などの下にある巣穴へ逃げ込みます。",

    reproduction: "一夫一妻的なペアを形成することが知られています。一方、本種だけを対象にした産卵間隔や卵保護の詳細については情報が限られるため、他のクロイトハゼ属の繁殖行動をそのまま本種へ当てはめることはしません。",

    identification: "淡い体色と、頬に並ぶ青白い斑点、第1背びれ先端の黒色部が重要な特徴です。特に頬の水色の斑点は水槽内でも見つけやすいポイントです。",

    nameOrigin: "和名の『ミズタマ』は頬に見られる水色の斑点を連想させますが、命名原典までは今回確認できなかったため断定しません。種小名 sexguttata は『6つの斑点を持つ』という意味に由来します。",

    humanRelation: "砂をこす独特の行動から海水観賞魚として流通します。砂の中の小動物を食べながら海底の堆積物を動かすため、サンゴ礁の砂底環境と生物との関係を観察する題材にもなります。",

    observationPoint: "口元と砂に注目してください。砂を口いっぱいに入れたあと、鰓の周辺から細かな砂を落としていく様子を観察できます。頬の水色の斑点もぜひ探してみてください。",

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
        text: "目の上や後頭部には枝分かれした皮膚の突起があります。正面から見ると、まつ毛や角のように見えることがあります。"
      },
      {
        title: "水槽では『コケ取り係』としても活躍",
        text: "岩やサンゴ表面の藻類や藻類の間にたまる有機物を削り取って食べます。実際に水族館でも水槽内の藻類を食べる生物として利用されています。"
      }
    ],

    bodyLength: "最大で全長約14cm。日本の水族館では12cm程度として紹介されることもあります。",

    distribution: "紅海・東アフリカからサモアまでのインド太平洋に広く分布します。北は琉球列島、南はグレートバリアリーフやニューカレドニアまで見られます。",

    habitat: "非常に浅いサンゴ礁、礁原、礁湖、岩やサンゴ片が多い場所に生息します。河口に近い汽水環境で見られることもあり、水深0〜8m程度から記録されています。",

    diet: "岩やサンゴの表面に生えた藻類を削り取るほか、藻類の間にたまったデトリタスと呼ばれる細かな有機物も利用します。",

    features: "体は緑褐色から茶色を基調とし、暗色の帯や白っぽい斑点が複雑に入ります。目の上と後頭部には枝分かれした皮膚の突起があり、体色と模様は周囲の岩やサンゴに溶け込みやすくなっています。",

    behavior: "海底付近で生活し、岩やサンゴの上に体を乗せて休んでいる姿がよく見られます。危険を感じると近くの穴や岩の隙間へ素早く逃げ込みます。",

    reproduction: "卵生です。卵は海底の基質などに付着する粘着性の卵で、細い付着構造によって固定されます。孵化した幼生は水中を漂う浮遊生活を送ります。",

    identification: "茶褐色の複雑な模様と、目の上にある枝分かれした皮膚の突起が特徴です。水槽の底や岩の上にじっと止まっていることも多いため、泳いでいる魚だけを探していると見落としやすい魚です。",

    nameOrigin: "日本では琉球列島、特に八重山諸島を含む南方海域で見られる魚です。ただし『ヤエヤマギンポ』という和名の正式な命名原典については今回確認できなかったため、地名が直接の命名理由であるとは断定しません。",

    humanRelation: "海水観賞魚として飼育されます。水槽内で藻類を食べるため『掃除屋』として利用されることもあり、新江ノ島水族館や沖縄美ら海水族館でも藻類を食べる性質が紹介されています。",

    observationPoint: "まず岩やサンゴの上を探してください。泳ぎ回るより、じっと止まっていることがあります。見つけたら目の上の枝分かれした突起と、岩の表面を口で削るように餌を食べる動きに注目です。",

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
        text: "ロイヤルグラマは腹側を岩や壁の方向へ向けて泳ぐ習性があります。そのため、岩棚の天井部分では人から見ると逆さまに泳いでいるように見えます。"
      },
      {
        title: "卵を守るのは巣を作ったオス",
        text: "オスは岩の穴や隙間に巣を作ります。メスがそこで産んだ卵を、オスが孵化まで守ります。以前は口内保育をするとされたこともありますが、研究では巣内保育であることが確認されています。"
      }
    ],

    bodyLength: "最大で全長約8cm。",

    distribution: "西部大西洋に分布します。バミューダ、バハマ、カリブ海、中央アメリカ周辺から南アメリカ北部まで確認されています。日本周辺に自然分布する魚ではありません。",

    habitat: "サンゴ礁の岩棚の下、岩の隙間、洞窟の入口など、影になる場所を好みます。FishBaseでは水深1〜60m程度、通常は1〜40m程度から記録されています。",

    diet: "主に水中を漂う小型甲殻類などを食べます。また、ほかの魚の体表についている外部寄生性の小型生物を食べるクリーニング行動も知られています。",

    features: "体の前半は鮮やかな紫色から紫青色、後半は黄色から黄橙色です。色の境界部分は完全に直線ではなく、紫と黄色が混じるように見えます。眼には暗色の線があり、背びれ前方には黒い斑点があります。",

    behavior: "岩やサンゴの近くからあまり離れず、危険を感じるとすぐに隙間へ逃げ込みます。腹側を常に岩面方向へ向ける傾向があり、垂直な壁や天井に沿って独特な姿勢で泳ぎます。",

    reproduction: "オスが岩の穴や隙間に巣を作り、メスは夜明け前後にその巣へ入って卵を産みます。卵は巣の中に残され、オスが見張り、巣を整え、汚れを取り除くなどの世話をします。研究では成魚が性転換する証拠は確認されておらず、成熟後は雌雄が分かれたまま繁殖する魚とされています。",

    identification: "紫色の前半部と黄色い後半部、眼を通る暗色線、背びれ前方の黒斑が特徴です。よく似たバイカラードティーバックでは紫と黄色の境界がよりくっきりしており、ロイヤルグラマのような背びれ前方の黒斑がありません。",

    nameOrigin: "英名・流通名の Royal gramma が日本でもそのまま用いられています。種小名 loreto は、キューバで模式標本を採集したLoreto Martínezという人物に由来するとされています。",

    humanRelation: "鮮やかな紫色と黄色の体色から、世界的に人気の高い海水観賞魚です。人工繁殖にも成功しており、飼育下繁殖個体も流通します。",

    observationPoint: "魚そのものだけでなく、体の向きを見てください。岩棚の下で腹側を天井へ向けて泳いでいれば、ロイヤルグラマ特有の姿勢を観察できます。背びれ前方の黒い斑点も探してみてください。",

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
        text: "背びれ・腹びれ・尻びれには鋭い棘があり、毒を持ちます。死んだ個体でも棘でけがをする可能性があるため、取り扱いには注意が必要です。"
      },
      {
        title: "成長すると食べ物が変わる",
        text: "小さな稚魚は動物プランクトンなどを利用しますが、成魚になると海藻を中心に食べます。日本での胃内容物調査でも褐藻・紅藻・緑藻が多く確認されています。"
      }
    ],

    bodyLength: "通常は全長30cm前後まで見られ、最大で全長約40cmに達する記録があります。",

    distribution: "西太平洋に広く分布します。日本、朝鮮半島南部、中国沿岸、台湾、フィリピン、インドネシア、オーストラリアなどから知られています。",

    habitat: "沿岸の岩礁、藻場、サンゴ礁周辺などに生息します。海水だけでなく汽水域へ入ることもあり、水深1〜50m程度から記録されています。",

    diet: "成魚は主に褐藻・紅藻・緑藻などの海藻を食べます。一方、小型の稚魚では動物プランクトンを利用する割合が高く、成長によって食性が変化します。",

    features: "体は左右に平たく、褐色からオリーブ色を基調としています。体表には細かな斑点やまだら模様が見られ、状態によって体色が変化します。背びれ、腹びれ、尻びれには毒を持つ鋭い棘があります。",

    behavior: "岩礁や藻場の周辺を泳ぎながら海藻を食べます。環境や刺激によって体色を変化させることがあり、警戒時には通常より暗いまだら模様になる場合があります。",

    reproduction: "日本の館山湾では7〜8月、瀬戸内海東部では6〜8月に産卵が確認されています。地域によって時期に差がありますが、日本では主に初夏から夏に繁殖する魚です。",

    identification: "褐色からオリーブ色のまだら模様と、長く連続する背びれが特徴です。アイゴ科には似た魚もいるため、模様だけではなく体形や各ひれの形も合わせて確認します。",

    nameOrigin: "「アイゴ」という和名の詳しい語源には複数の説があり、今回確認した主要資料から確実な由来を特定できなかったため断定しません。",

    humanRelation: "地域によって食用になります。一方、ひれの棘には毒があるため、釣りや漁業では取り扱いに注意が必要です。近年は海藻を大量に食べる魚として、磯焼けとの関係でも研究されています。",

    observationPoint: "まず背びれを見てください。鋭い棘が何本も並んでいることが分かります。水槽内で岩や海藻を口でついばむ様子が見られれば、植物を食べる行動にも注目です。",

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
        text: "かつてはホシササノハベラとまとめて「ササノハベラ」とされていましたが、1997年に別種として整理されました。"
      },
      {
        title: "オスは自分の産卵場所を持つ",
        text: "繁殖期にはオスが一定の範囲を縄張りとして利用し、そこへ入ってきたメスとペアで産卵することが観察されています。"
      }
    ],

    bodyLength: "最大で標準体長約20cm。",

    distribution: "北西太平洋に分布します。日本では千葉県館山湾から九州南岸、小笠原諸島、屋久島、沖縄島などから記録され、国外では済州島、台湾、中国南部などで見られます。",

    habitat: "沿岸からやや沖合の岩礁域に生息します。特に外洋の影響を受ける岩礁や、波当たりのある場所で見られることがあります。",

    diet: "動物食性で、海底にいる小型の甲殻類などの底生動物を主に捕食します。",

    features: "体は赤褐色から赤みの強い色を示すことが多いですが、個体差があります。頭部には複数の暗色線があり、眼の下から後方へ伸びる線が胸びれの付け根方向まで達します。",

    behavior: "岩礁の海底近くを泳ぎながら、岩や海底の小型動物を探します。繁殖期のオスは産卵に利用する縄張りを持つことが確認されています。",

    reproduction: "繁殖期にはオスが縄張りを形成します。メスが縄張りに入ると求愛し、雌雄がペアとなって水中で放卵・放精する産卵行動が確認されています。",

    identification: "ホシササノハベラとよく似ています。アカササノハベラでは頭部下側の暗い線が胸びれの付け根方向まで伸び、成魚の体側にはホシササノハベラで見られる明瞭な白色斑がありません。",

    nameOrigin: "赤みを帯びた体色が和名に関係すると考えられますが、正式な命名原典まで今回確認できなかったため断定しません。",

    humanRelation: "釣りでよく見られるベラ類の一つで、地域によっては食用にもされます。以前は近縁種と同じ種として扱われていたため、日本の魚類分類の変化を紹介できる魚でもあります。",

    observationPoint: "体色だけで判断せず、まず顔の模様を見てください。眼の下から胸びれ方向へ伸びる線を探すと、近縁のホシササノハベラとの違いを理解しやすくなります。",

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
        text: "成長したアカニシでは、殻の入口の内側が赤色から橙色になります。「アカニシ」という名前をイメージしやすい特徴です。"
      },
      {
        title: "海外では侵略的外来種になっている",
        text: "本来は日本を含む北西太平洋の貝ですが、黒海・地中海・北米などへ移入され、二枚貝を捕食する外来種として問題になっている地域があります。"
      }
    ],

    bodyLength: "殻の高さは10cm前後の個体が一般的ですが、大型個体では17cm以上、資料によっては20cm近くに達するとされています。",

    distribution: "本来は日本海、黄海、東シナ海、渤海など北西太平洋に分布します。現在では黒海、地中海、北米東岸、南米などにも外来種として定着しています。",

    habitat: "内湾などの浅い海の砂底・砂泥底に生息し、砂の中へ潜ることがあります。日本の標本資料では水深30mより浅い砂泥底から記録されています。",

    diet: "肉食性で、カキ、ムール貝、アサリなどの二枚貝を主に捕食します。殻を完全に割るのではなく、二枚貝の殻の隙間から軟体部を食べることがあります。",

    features: "非常に厚く頑丈な巻貝の殻を持ちます。殻表面にはこぶ状の突起と多数の筋があり、成長した個体では大きな殻口の内側が濃い橙色から赤色になります。",

    behavior: "海底を這って移動し、砂へ体を埋めることがあります。二枚貝を見つけると捕食し、世界各地の移入先では二枚貝資源へ大きな影響を与える例があります。",

    reproduction: "雌雄は別々です。体内受精を行い、メスは硬い基質などへ多数の細長い卵嚢をまとめて産み付けます。卵嚢の中で発生した幼生は孵化後、水中を漂う浮遊生活を送ります。",

    identification: "大型で厚い殻、表面のこぶ状の彫刻、そして成長個体で赤橙色になる殻口内部が大きな特徴です。",

    nameOrigin: "成長すると殻口の内側が赤色から橙色になることが「アカニシ」という名前に関係しています。",

    humanRelation: "日本では食用に利用されます。一方、国外では二枚貝を大量に捕食する外来種として問題になっており、地域によって人との関係が大きく異なります。",

    observationPoint: "殻の外側だけでなく入口の内側を見てください。赤橙色になっていればアカニシらしい特徴がよく分かります。殻表面にあるこぶや細かな筋にも注目です。",

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
        text: "名前の通り、朱色から赤色の非常に目立つ体色をしています。色だけでなく、長く細い腕も特徴です。"
      },
      {
        title: "裏側にはたくさんの『管足』",
        text: "ヒトデの腕の裏には多数の細い管足が並びます。管足を使って海底をゆっくり移動したり、物につかまったりします。"
      }
    ],

    bodyLength: "大きさには個体差があります。新潟大学の海洋生物図鑑では約10cmの個体が紹介されていますが、さらに大型になる個体も知られています。",

    distribution: "日本および東シナ海周辺に分布します。日本では本州北部以南の沿岸で見られます。",

    habitat: "潮間帯から浅い海の岩礁や、小石の多い海底などに生息します。",

    diet: "自然下での詳細な食性については十分な資料がありません。水族館では他の生物が残した餌や、生物の排出物などを食べることが確認されています。",

    features: "通常5本の長い腕を持ちます。中心の部分は比較的小さく、腕は細長い円筒状です。背面は朱色から赤色で、表面には細かな粒状の構造があります。",

    behavior: "腕の裏側にある多数の管足を使って岩や海底へ付着しながら、ゆっくり移動します。魚とは異なり、体のどちらか一方向を常に前にして移動するわけではありません。",

    reproduction: "本種固有の繁殖時期や繁殖行動について、今回確認した信頼できる主要資料では十分な情報が得られなかったため、他のヒトデ類の繁殖方法を本種の事実として断定しません。",

    identification: "鮮やかな赤色、細長い5本の腕、小さめの中心部が特徴です。似た赤いヒトデ類もいるため、正確な同定では腕や体表の構造なども確認します。",

    nameOrigin: "全身が赤色をしていることから「アカヒトデ」と呼ばれます。",

    humanRelation: "一般的な食用生物ではありません。ヒトデ類の体の構造や再生、生化学研究などの対象となることがあります。",

    observationPoint: "上から赤い体を見るだけでなく、可能なら腕の裏側にも注目してください。多数の小さな管足を使ってゆっくり移動する様子が観察できます。",

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
        text: "カニのような姿ですが、分類上は異尾類と呼ばれるグループで、ヤドカリやコシオリエビなどに近い仲間です。"
      },
      {
        title: "大きなイソギンチャクと一緒に暮らす",
        text: "ハタゴイソギンチャクなど大型のイソギンチャクの触手の間で暮らします。雌雄のペアが同じイソギンチャクにいることもあります。"
      }
    ],

    bodyLength: "甲幅は約1cm程度。非常に小型の甲殻類です。",

    distribution: "インド太平洋に広く分布します。日本では沖縄など南日本から記録され、オーストラリア、パプアニューギニア、パラオ、フィジーなどでも確認されています。",

    habitat: "水深1〜10m程度の浅いサンゴ礁に生息し、主に大型のイソギンチャクの体表や触手の間を生活場所として利用します。",

    diet: "水中に漂う細かな有機物やプランクトンを、羽毛状に発達した口器でこし取るように食べる懸濁物食者です。共生するイソギンチャクの粘液を食べることも確認されています。",

    features: "体は乳白色で表面が滑らかです。甲や脚には赤色から紫赤色の丸い斑点が多数あり、陶器のような光沢があります。",

    behavior: "大型イソギンチャクからあまり離れず、その触手の間を隠れ場所として利用します。水中では口元の細かな付属肢を動かし、流れてくる餌を集めます。",

    reproduction: "本種だけを対象にした詳しい繁殖行動については、今回確認した主要資料では十分な情報を確認できなかったため、十脚類一般の繁殖様式をそのまま記載することは避けます。",

    identification: "乳白色の体と、甲・鋏脚・歩脚に多数ある赤紫色の丸い斑点が特徴です。イソギンチャクの触手の中にいることも大きな手掛かりです。",

    nameOrigin: "体に多数の赤い星のような斑点があるカニダマシ類であることが、和名の特徴をよく表しています。",

    humanRelation: "食用として利用される生物ではありませんが、イソギンチャクと共生する美しい甲殻類として、ダイビングや水族館、海水観賞の世界で知られています。",

    observationPoint: "イソギンチャクだけを見ず、その触手の間を探してください。小さな白い体に赤い斑点が見えたら本種の可能性があります。口元を細かく動かして餌を集める姿にも注目です。",

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
        text: "かつて1種と考えられていたメバルは、現在ではアカメバル・クロメバル・シロメバルの3種として区別されています。"
      },
      {
        title: "卵ではなく仔魚を産む",
        text: "アカメバルは体内受精を行い、卵を体内で発生させた後、泳ぐことのできる仔魚として海中へ産み出します。"
      }
    ],

    bodyLength: "水族館では15cm前後の個体がよく見られますが、最大で全長約35.9cmに達する記録があります。",

    distribution: "北西太平洋に分布し、日本では北海道南部から九州まで見られます。朝鮮半島南部にも分布します。",

    habitat: "沿岸の岩礁や藻場に生息します。海藻の多い場所で複数個体が集まっていることがあります。",

    diet: "主にエビ類などの甲殻類を食べます。若狭湾で行われた研究では、アカメバルは特にエビ類を重要な餌として利用していました。幼魚では動物プランクトンも利用します。",

    features: "体は赤色から橙色を帯び、体側には濃い赤色の帯があります。胸びれが比較的長く、尻びれ付近まで伸びることがあります。",

    behavior: "岩礁や海藻の周辺で生活し、群れを作ることがあります。幼魚は流れ藻などに付いて生活することも知られています。",

    reproduction: "体内受精を行う胎生型の魚です。オスとメスが交尾し、受精した卵はメスの体内で発生します。その後、発達した仔魚が海中へ産み出されます。",

    identification: "アカメバル・クロメバル・シロメバルは非常によく似ています。赤い体色は参考になりますが、体色だけでは確実に判断できず、専門的には胸びれの軟条数や体形など複数の特徴を確認します。",

    nameOrigin: "赤色から橙色を帯びる体色が『アカメバル』という和名に表れています。",

    humanRelation: "釣りや沿岸漁業の対象となり、食用として利用されます。近縁のクロメバルやシロメバルとともに、日本の沿岸で身近な魚です。",

    observationPoint: "まず胸びれの長さと体側の赤い帯を見てください。ただし『赤いから必ずアカメバル』ではないため、クロメバルやシロメバルが同じ水槽にいれば体形や模様を比較してみるのがおすすめです。",

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
        text: "殻や棘は赤色から赤紫色をしています。照明や個体差によって、赤よりも紫色が強く見えることもあります。"
      },
      {
        title: "高級食材として利用される",
        text: "生殖巣が食用となり、西日本を中心に重要な水産資源として漁獲・養殖・種苗放流の研究が行われています。"
      }
    ],

    bodyLength: "殻の直径は6〜7cm程度に達し、漁獲個体では8cmを超える例もあります。殻は比較的低く平たい形をしています。",

    distribution: "日本沿岸に分布します。水産庁資料では、日本海側では北海道松前以南、太平洋側では茨城県日立以南から鹿児島県大隅諸島までとされています。",

    habitat: "沿岸の岩礁や小石の多い海底、岩の隙間などに生息します。神奈川県三浦半島の調査では、若い個体と成体で好む海底環境が異なることも確認されています。",

    diet: "主に海藻を食べます。アラメ・カジメ類などの大型褐藻を利用し、稚ウニでは付着珪藻などの微細な藻類も重要な餌になります。",

    features: "殻は上から押しつぶしたように低く、体表には比較的短い棘が密生します。棘は赤色から赤紫色で、口側ではさらに短く細くなります。",

    behavior: "管足と棘を使って岩の上や海底をゆっくり移動し、海藻を削り取るように食べます。成長すると岩の隙間など、より安定した場所を利用する傾向があります。",

    reproduction: "雌雄は別々で、卵と精子を海中へ放出して体外受精します。産卵期には地域差があり、長崎県平戸島の研究では主に11〜1月に産卵することが確認されています。",

    identification: "赤色から赤紫色の棘と、比較的平たい殻が特徴です。ムラサキウニなど他のウニと比較すると、殻の高さや棘の長さ・色に違いがあります。",

    nameOrigin: "体表と棘が赤色から赤紫色になることから「アカウニ」と呼ばれます。",

    humanRelation: "生殖巣が食用となる重要な水産資源です。市場価値が高いため、各地で資源管理、人工種苗生産、放流技術などの研究が行われています。",

    observationPoint: "棘だけでなく、その間から伸びる細い管足を探してみてください。管足や棘を使いながら非常にゆっくり移動する様子が観察できます。",

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
        text: "尻びれに赤褐色の帯が現れることが和名の由来ですが、個体や状態によっては赤い帯がほとんど見えないこともあります。"
      },
      {
        title: "オスが卵を守る",
        text: "カキ殻や岩の隙間などを巣として利用して産卵し、産み付けられた卵はオスが孵化するまで保護します。"
      }
    ],

    bodyLength: "最大で全長約11cm。日本では3〜10cm程度の個体がよく見られます。",

    distribution: "日本、朝鮮半島、中国沿岸、台湾など北西太平洋に分布します。日本では北海道から鹿児島県まで広く確認されています。北米西岸やオーストラリアなどには外来種として定着した地域があります。",

    habitat: "内湾や河口などの汽水域を中心に、砂や泥の海底、カキ殻や小石が混じる場所、護岸などに生息します。",

    diet: "小型甲殻類、ゴカイ類、ヒドロ虫などさまざまな小型動物を食べる雑食性です。幼魚ではカイアシ類や甲殻類の幼生などを多く利用します。",

    features: "体側には暗色の縞模様があり、尻びれには赤褐色の帯が現れることがあります。体色を比較的大きく変えることができるため、英名では Chameleon goby と呼ばれます。",

    behavior: "海底付近で生活し、カキ殻、岩の隙間、護岸に付着した生物の間などを隠れ場所として利用します。",

    reproduction: "卵生です。カキ殻や岩の隙間などに巣を作り、メスが産み付けた卵をオスが守ります。外来個体群の研究でも、オスによる巣と卵の保護が確認されています。",

    identification: "よく似たシモフリシマハゼとの区別が重要です。アカオビシマハゼでは頬の点が大きく少なく、頭部腹面に白点がなく、尻びれに赤い帯が出ることがあります。",

    nameOrigin: "尻びれに現れる赤褐色の帯と、体側の縞模様から「アカオビシマハゼ」と呼ばれます。",

    humanRelation: "日本では身近な汽水魚の一つです。一方、船舶や養殖生物などに伴って海外へ移動したと考えられ、北米などでは外来魚として定着しています。",

    observationPoint: "尻びれをよく見て、赤い帯が見えるか確認してください。ただし赤帯が出ない個体もいるので、体側の縞や顔の模様も合わせて観察するのがおすすめです。",

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
        text: "大きな餌を食べる際には、口から胃を外へ出して餌を包み、体の外で消化を始めることができます。"
      },
      {
        title: "発生研究でよく使われる",
        text: "採集や飼育が比較的容易で卵も得やすいため、受精や初期発生を研究するモデル生物として利用されてきました。"
      }
    ],

    bodyLength: "腕を含めた幅は10cm前後になる個体が多く見られます。個体や地域によって大きさには差があります。",

    distribution: "北西太平洋に分布し、日本、中国、朝鮮半島、ロシア沿岸などで見られます。日本各地の浅い海で比較的普通に観察されるヒトデです。",

    habitat: "潮間帯から水深40m程度までの浅い海に生息し、岩や小石のある海底などで見られます。",

    diet: "藻類、海草、細かな有機物、小型の無脊椎動物などさまざまな餌を利用します。水槽ではオキアミや二枚貝などを食べることもあります。",

    features: "通常5本の短く幅広い腕を持ち、腕と腕の間の切れ込みは浅く、丸みのある星形になります。背面は青緑色を基調に赤や橙色のまだら模様が入り、裏側は橙色を帯びます。",

    behavior: "腕の裏側にある多数の管足を使って海底をゆっくり移動します。餌によっては胃を口から外へ出し、餌に直接かぶせて消化します。",

    reproduction: "雌雄は別々で、卵と精子を海中へ放出して体外受精します。孵化後は水中を漂う幼生期を経て海底生活へ移ります。産卵時期は地域によって異なります。",

    identification: "短く丸みのある5本の腕と、青緑色に赤いまだら模様が入る体が特徴です。細長い腕を持つアカヒトデとは形だけでも比較しやすいヒトデです。",

    nameOrigin: "丸く広がった星形の姿が昔の糸巻き道具を連想させることが名称に関係すると考えられますが、命名原典までは今回確認できなかったため断定しません。",

    humanRelation: "一般的な食用生物ではありませんが、卵や幼生を扱いやすいため、受精・発生・細胞生物学などの実験研究で重要なモデル生物として利用されます。",

    observationPoint: "アカヒトデと見比べてみてください。イトマキヒトデは腕が短く幅広く、全体が丸みのある星形です。移動中には裏側の管足にも注目です。",

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
        text: "マナマコなどとは違い、イシコは口の周りにある枝分かれした触手を広げ、水中を流れてくる細かな餌を捕らえる「懸濁物食」を行います。"
      },
      {
        title: "触手は10本あるが全部同じ大きさではない",
        text: "口の周囲には10本の枝分かれした触手があり、そのうち8本は大きく、2本は小さくなっています。"
      }
    ],

    bodyLength: "体長はおよそ5〜10cm。小型のナマコ類です。",

    distribution: "北太平洋に分布し、日本でも記録されています。日本の沿岸生物データベースでも標準和名「イシコ」として掲載されています。",

    habitat: "岩礁や岩の隙間などに生息します。体の多くを隙間に隠し、口の周囲の触手だけを水中へ出していることもあります。",

    diet: "懸濁物食性です。枝分かれした口触手で水中を漂う微細な有機物やプランクトンなどを捕らえ、触手を1本ずつ口へ入れて餌を食べます。",

    features: "白色からクリーム色の小型ナマコで、体には5列の管足が並びます。口の周囲には10本の枝分かれした触手があり、8本が大きく、2本が小さいことが特徴です。",

    behavior: "岩の隙間などへ体を固定し、触手を水中へ広げて餌を待ちます。餌が付着した触手を順番に口へ運び、表面についた餌をなめ取るように食べます。",

    reproduction: "雌雄は別々で、卵と精子を海中へ放出して体外受精します。北米太平洋岸の個体群では春に産卵することが報告されていますが、日本の個体群で同じ時期になるとは限りません。",

    identification: "外見だけで似た小型ナマコと区別することは難しい場合があります。5列の管足や大小のある10本の触手が特徴ですが、確実な種同定には体内の微小な骨片を顕微鏡で確認することがあります。",

    nameOrigin: "和名「イシコ」の詳しい命名由来について、今回確認した主要資料では明確な説明を確認できなかったため断定しません。学名の quinquesemita は『5本の道』を意味し、5列に並ぶ管足に由来します。",

    humanRelation: "一般的な食用ナマコではありません。ナマコ類の体の構造、組織の性質、自切や内臓放出などを研究する材料として利用されることがあります。",

    observationPoint: "ナマコ本体だけでなく、口から伸びる白い枝状の触手を探してください。触手を水中へ広げ、1本ずつ口へ運んでいれば、懸濁物を食べている様子を直接観察できます。",

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
        text: "幼魚では白っぽい体に6〜7本ほどの黒い縦帯がはっきりしていますが、成長すると縞模様は薄くなります。特に大型のオスでは口の周辺が黒くなり、「クチグロ」と呼ばれることがあります。"
      },
      {
        title: "子どもの頃は流れ藻と一緒に旅をする",
        text: "イシダイの稚魚は海面を漂う流れ藻につくことがあり、藻と一緒に海を移動した後、成長すると沿岸の岩礁で生活するようになります。"
      }
    ],

    bodyLength: "最大で全長約80cmに達する記録があります。通常見られる個体はこれより小さいものが多いです。",

    distribution: "日本、朝鮮半島、台湾など北西太平洋に分布します。日本では北海道から九州、伊豆諸島、小笠原諸島など広い範囲で確認されています。",

    habitat: "成魚は沿岸の岩礁域を中心に生活します。FishBaseでは水深1〜10m程度が主要な生息環境として記録されています。幼魚は流れ藻の周辺で生活することがあります。",

    diet: "成長すると貝類、甲殻類など岩礁に生息する硬い無脊椎動物を食べます。丈夫な顎と歯を使って硬い餌を処理できます。",

    features: "体は左右に平たく、幼魚では白色から銀色の体に黒い縦帯がはっきり現れます。成長につれて縞は目立たなくなり、大型のオスでは口の周囲が黒くなることがあります。",

    behavior: "幼魚は流れ藻の周囲で生活しますが、成長すると岩礁へ移ります。成魚は岩場を泳ぎながら、貝類などの付着生物を探します。",

    reproduction: "日本では主に春から夏に産卵します。水産庁資料では4〜7月、水温18℃以上になる頃から産卵が行われるとされています。一度だけではなく、産卵期中に複数回産卵する魚です。",

    identification: "幼魚では明瞭な黒い縦帯が非常に分かりやすい特徴です。近縁のイシガキダイでは縦帯ではなく多数の黒い斑点が見られます。ただし天然では両種の交雑個体も確認されています。",

    nameOrigin: "「イシダイ」という和名の詳しい命名原典は今回確認できませんでした。岩礁域に生息するタイ形の魚として古くから知られています。",

    humanRelation: "釣りの対象として非常に人気が高く、食用としても利用される高級魚です。養殖も行われています。",

    observationPoint: "まず体の縞模様を見てみてください。若い個体なら黒い縞が非常に明瞭です。大型個体では縞がどの程度薄くなっているか、口元が黒くなっているかを比較すると成長による変化が分かります。",

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
        text: "殻の表面には縦方向と横方向の細かな溝があり、小さな四角形が並んだように見えます。この模様が和名の由来です。"
      },
      {
        title: "昼間は石の下に隠れていることが多い",
        text: "夜行性で、昼間は石の下や岩の隙間に入り、夜になると岩の表面を移動して餌を食べます。"
      }
    ],

    bodyLength: "殻高は約2〜2.5cm程度。小型の巻貝です。",

    distribution: "日本の北海道から本州、四国、九州などの温帯沿岸で広く確認されています。東アジアの沿岸にも分布します。",

    habitat: "潮が満ちると海中になり、引くと陸上に出る潮間帯の岩礁や護岸に生息します。石の下や岩の隙間でもよく見られます。",

    diet: "主に岩の表面についた付着珪藻などの微細な藻類を、歯舌と呼ばれる器官で削り取って食べます。",

    features: "丸みのある円錐形の殻を持ち、表面には細かな凹凸が規則的に並びます。暗緑色、褐色、黄色などが混じった模様を持ち、殻口の内側には特徴的なくぼみと歯状の突起があります。",

    behavior: "日中は石の下などに隠れ、夜になると岩面を這って藻類を食べます。外敵に触れられると、殻を動かしたり移動速度を上げたりして逃げる行動も報告されています。",

    reproduction: "雌雄が別々の個体として存在します。繁殖に関する地域的な研究はありますが、展示向けに断定できるほど統一された繁殖時期ではないため、特定の月を本種全体の繁殖期としては記載しません。",

    identification: "殻の表面を拡大して見ると、縦横の溝によって石畳のような模様が作られています。現在は Monodonta labio ではなく Monodonta confusa をイシダタミとして扱います。",

    nameOrigin: "貝殻表面に並ぶ細かな四角形状の彫刻が、道路などに敷かれた石畳のように見えることから名付けられました。",

    humanRelation: "重要な漁業対象ではありませんが、日本の磯で非常に身近な巻貝の一つです。地域によっては食用にされることもあります。",

    observationPoint: "遠くからでは普通の小さな巻貝に見えるので、できるだけ殻の表面に注目してください。細かな凹凸が規則的に並び、本当に石畳のようになっています。",

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
        text: "歩脚の一部には凹凸が並び、石畳のように見える部分があります。イシダタミヤドカリという名前を理解しやすい特徴です。"
      },
      {
        title: "大きな巻貝の殻を家にする",
        text: "サザエ類やナガニシなど、入口が比較的大きな巻貝の殻を宿として利用します。大型になるため、使う貝殻もかなり大きくなります。"
      }
    ],

    bodyLength: "大型になるヤドカリで、甲長は数cmに達します。資料によって測定方法が異なるため、脚や宿貝を含めた『全長』としての数値は示しません。",

    distribution: "日本では東京湾から九州沿岸、日本海側では山形県から島根県、天草などで確認されています。国外では台湾、香港、ベトナム、インド洋方面まで分布します。",

    habitat: "沿岸の岩礁やサンゴ礁の斜面などに生息します。浅い場所から水深100mを超える場所まで記録があり、比較的幅広い水深帯で見られます。",

    diet: "自然界での本種だけを対象とした詳細な食性資料は限られています。ヤドカリ類らしく海底でさまざまな有機物を利用すると考えられますが、特定の餌を主食として断定しません。",

    features: "大型で頑丈な脚とはさみを持ち、脚には硬い毛が生えます。歩脚の一部には石畳のような細かな凹凸があります。体色は紫褐色を帯び、脚には黄褐色の帯が見られます。",

    behavior: "巻貝の殻を背負って海底を歩きます。日中でも活動することがあり、体が成長して宿貝が小さくなると、より大きな貝殻へ移る必要があります。",

    reproduction: "本種固有の交尾・産卵時期について、今回確認した信頼性の高い主要資料では十分な情報が得られなかったため、近縁種の繁殖生態をそのまま記載することは避けます。",

    identification: "大型の体、毛の多い脚、歩脚に見られる石畳状の構造が特徴です。宿貝だけでは種類を判断できないため、貝殻から出ている脚やはさみを観察することが重要です。",

    nameOrigin: "歩脚の表面に見られる石畳状の彫刻が和名の由来です。",

    humanRelation: "一般的な食用種ではありません。大型のヤドカリとして水族館や磯の生物展示で観察されます。",

    observationPoint: "背負っている貝殻ではなく、そこから出ている脚をよく見てください。脚の表面にある凹凸や毛、紫褐色の模様を観察すると本種の特徴が分かります。",

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
        text: "孵化した直後は親とは全く違う平たい『フィロソーマ幼生』になります。約300日もの長い浮遊生活を送り、黒潮などに運ばれた後、沿岸へ戻ってきます。"
      },
      {
        title: "大きなはさみを持たない",
        text: "ロブスターという名前から大きなはさみを想像しがちですが、イセエビにはアメリカンロブスターのような巨大なはさみ脚はありません。その代わり非常に長い触角と硬い棘を持ちます。"
      }
    ],

    bodyLength: "最大で全長約30cm。一般的には25cm前後までの個体が多いとされています。",

    distribution: "西太平洋に分布します。日本では主に太平洋側の暖かい沿岸で見られ、朝鮮半島南部や台湾などにも分布します。近年は北海道沿岸でも稚エビが確認されています。",

    habitat: "浅い海の岩礁に生息し、昼間は岩の割れ目や洞窟などに隠れます。夜になると隠れ場所から出て餌を探します。",

    diet: "肉食性で、小型の甲殻類、貝類など海底にいる無脊椎動物を食べます。",

    features: "赤褐色の硬い外骨格を持ち、頭胸部には多数の鋭い棘があります。非常に長く頑丈な第2触角が目立ちます。大きなはさみ脚を持たないことも特徴です。",

    behavior: "夜行性で、昼間は岩穴などに潜みます。夜間には海底を歩いて餌を探します。複数個体が同じ岩穴を利用することもあります。",

    reproduction: "日本では主に5〜8月ごろが産卵期です。受精した卵はメスの腹部に付着し、約1か月保護された後に孵化します。孵化後はフィロソーマ幼生として長期間沖合を漂い、透明なプエルルス幼生へ変態して沿岸へ戻り、その後稚エビになります。",

    identification: "赤褐色の体、非常に長い2本の触角、頭胸部に並ぶ多数の棘が特徴です。日本には近縁のイセエビ属が複数いるため、正確な種同定では脚や腹部の模様なども確認します。",

    nameOrigin: "伊勢地方で多く漁獲されたことが名称の由来とする説があります。鳥羽水族館では、かつて相模湾でも多く漁獲され「鎌倉エビ」と呼ばれたことを紹介しています。",

    humanRelation: "日本を代表する高級水産物の一つです。資源を守るため、各地域で禁漁期、体サイズの制限、抱卵個体の保護などさまざまな漁業管理が行われています。",

    observationPoint: "長い触角をどのように動かしているかを見てください。また、岩穴に複数個体が集まっていれば、昼間に隠れて休む習性も観察できます。",

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
        text: "以前は Scorpaenodes littoralis などの学名で扱われていましたが、標本の再検討により現在は Scorpaenodes evides が受理されています。"
      },
      {
        title: "岩に紛れてじっとしている",
        text: "赤褐色のまだら模様は岩礁の色とよく似ています。海底で動かず待ち伏せしていると、魚がいること自体に気づきにくくなります。"
      }
    ],

    bodyLength: "最大で全長約10.5cm。小型のカサゴ類です。",

    distribution: "インド太平洋に広く分布します。日本でも本州中部以南を中心とした岩礁域などで確認されています。",

    habitat: "水深1〜40m程度のサンゴ礁・岩礁域、岩穴や洞窟などに生息します。潮だまりで見られることもあります。",

    diet: "小型の甲殻類など海底付近の小動物を捕食する魚です。本種だけを対象とした詳細な食性研究は限られるため、餌の種類を必要以上に細かく断定しません。",

    features: "赤褐色から茶褐色のまだら模様を持ちます。鰓ぶたの下側には淡色で縁取られた暗色斑があり、眼の周囲には短い暗色線があります。",

    behavior: "海底や岩の上でじっとしていることが多く、周囲の模様へ溶け込みながら小動物が近づくのを待ちます。",

    reproduction: "本種固有の産卵時期や詳しい繁殖行動について、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "小型で赤褐色のまだら模様を持ち、頬付近の暗色斑が特徴です。カサゴ類は似た種類が多いため、ひれの棘や頭部の形なども含めて識別します。",

    nameOrigin: "磯や沿岸の岩礁で見られる小型のカサゴ類であることから付けられた名称と考えられますが、正式な命名原典までは確認できていません。",

    humanRelation: "一般的な重要食用魚ではありません。日本の磯で見られる小型魚として観察されます。日本の自然観察資料では背びれの棘に弱い毒があるとして注意喚起されているため、素手では触らない方が安全です。",

    observationPoint: "岩だけを見ているつもりでも、その中に赤褐色の魚が紛れていないか探してみてください。『動かない魚を探す』つもりで見ると見つけやすくなります。",

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
        text: "眼の上には枝分かれした皮膚の突起があります。特にオスでは長く発達し、正面から見ると眉毛や角のように見えます。"
      },
      {
        title: "周囲に合わせて体色が変わる",
        text: "茶色、緑色など体色の変化が大きく、岩や海藻の色に近づくことで目立ちにくくなります。"
      }
    ],

    bodyLength: "最大で全長約9cm。",

    distribution: "北西太平洋に分布します。日本の沿岸から朝鮮半島南部などで確認されています。",

    habitat: "沿岸の岩礁や潮だまりなど非常に浅い場所に生息します。石の間や岩穴などを隠れ場所として利用します。",

    diet: "主に藻類や細かな有機物を食べます。岩の表面などをついばみながら餌を取ります。",

    features: "体に鱗がなく、眼の上に枝分かれした皮弁があります。体色の変化が大きく、淡褐色、濃褐色、緑色など周囲によって見え方が変わります。",

    behavior: "岩穴や石の隙間へ素早く隠れる行動が見られます。泳ぎ続けるより岩の上などにとどまり、危険を感じたときに素早く移動します。",

    reproduction: "卵生で、卵は海底の基質に付着する粘着卵です。夏に産卵することが知られています。孵化した仔魚はしばらく水中を漂う生活をします。",

    identification: "眼の上の枝状の皮弁と、背びれの棘条部と軟条部の間にある切れ込みなどが特徴です。体色は非常に変化するため、色だけで判断しないことが重要です。",

    nameOrigin: "磯に生息するギンポ類であることから「イソギンポ」と呼ばれています。種小名 yatabei は日本の植物学者・矢田部良吉に献名されたものです。",

    humanRelation: "小型でまとまって漁獲されないため、一般的な食用魚ではありません。磯や潮だまりで見つけやすく、海辺の自然観察に適した魚です。",

    observationPoint: "魚を見つけたら目の上を拡大して見てください。枝分かれした皮膚の突起が確認できます。また、周囲の岩とどれくらい体色が似ているかも比較してみてください。",

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
        text: "体の大部分はほぼ透明ですが、黒褐色の細かな横縞が多数あります。潮だまりでは周囲が透けて見えるため意外と見つけにくいエビです。"
      },
      {
        title: "寿命はおよそ1年",
        text: "千葉県館山湾での研究では、寿命は約12〜15か月と推定されています。短い一生の中で成長し、繁殖します。"
      }
    ],

    bodyLength: "全長約5cm。",

    distribution: "日本の房総半島周辺を含む西太平洋から、東南アジア、ハワイなど広い海域で記録されています。",

    habitat: "外洋に面した岩礁海岸の潮だまりに多く生息します。日本の磯で普通に観察できるスジエビ類の一つです。",

    diet: "小型の動物や細かな有機物などを利用します。自然下での餌の割合については環境によって変化するため、特定の餌だけを主食として断定しません。",

    features: "体はほぼ透明で、全身に多数の黒褐色の細い横縞があります。頭部から前方へ伸びる額角は長く、先端側がやや上へ曲がります。",

    behavior: "潮だまりの岩陰などを歩いたり泳いだりして生活します。透明な体を持つため背景に紛れやすく、人が近づくと素早く移動します。",

    reproduction: "館山湾の研究では繁殖期は5〜11月まで続き、抱卵期間は約10〜20日でした。寿命は12〜15か月程度と推定されています。",

    identification: "透明な体に多数のはっきりした黒い横縞があることと、額角がやや上向きに湾曲する点が特徴です。スジエビモドキなど近縁種との識別にも利用されます。",

    nameOrigin: "磯に生息し、体に多数の筋状模様を持つエビであることが和名によく表れています。",

    humanRelation: "大型の食用エビではありませんが、磯の自然観察で身近な生物です。英名には bait shrimp と呼ばれるものもあり、地域によって餌として利用されることがあります。",

    observationPoint: "一見すると透明なので、体そのものより黒い細い縞を探してみてください。頭の前に伸びる額角が少し上向きに曲がっているかも観察ポイントです。",

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
        text: "波打ち際の岩場で生活し、水面より上の岩を素早く走ることがあります。危険を感じると岩の隙間へ一気に逃げ込みます。"
      },
      {
        title: "かなりの雑食性",
        text: "海藻だけでなく、小型甲殻類、魚などの動物質も利用します。磯にあるさまざまな食べ物を利用できるカニです。"
      }
    ],

    bodyLength: "甲幅は約3〜4cm程度に達します。",

    distribution: "日本や朝鮮半島など北西太平洋に分布するほか、北米西岸にも同種の個体群が分布します。",

    habitat: "外洋に面した岩礁海岸、護岸、潮間帯などに生息します。水中だけでなく、波しぶきがかかる岩の上を歩いていることもあります。",

    diet: "雑食性で、岩についている海藻、小型甲殻類、小魚、動物の死骸などさまざまなものを食べます。",

    features: "甲羅は比較的四角形で平たく、表面には多数の細い横方向の筋があります。褐色、暗紫色、緑色などが混ざった色をしています。",

    behavior: "非常に素早く、危険を感じると横方向へ走って岩の隙間へ逃げます。磯では海から少し離れた岩の上まで移動することがあります。",

    reproduction: "十脚類として卵を腹部に抱えて保護しますが、本種の日本個体群における産卵時期などについては今回確認した主要資料だけでは十分でないため、特定の時期は記載しません。",

    identification: "四角く平たい甲羅と、その表面に並ぶ細かな横線が特徴です。磯の岩場を非常に速く走り回る行動も見つける手掛かりになります。",

    nameOrigin: "岩礁海岸の岩の上でよく見られることから「イワガニ」と呼ばれます。",

    humanRelation: "重要な食用ガニではありませんが、磯で非常によく見られる身近な生物です。釣り餌として利用されることもあります。",

    observationPoint: "甲羅の表面をよく見ると、細かな横線が何本も入っています。動き始めると非常に速いので、静止しているときに模様を観察するのがおすすめです。",

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
        text: "左右の腹びれなどが変化して大きな吸盤を作っています。この吸盤で海藻や岩へ強くくっつき、波に流されにくくしています。"
      },
      {
        title: "実は2019年に新種として名前が付いた",
        text: "長い間、日本のウバウオは Aspasma minima とされていました。しかし標本を詳しく再調査した結果、それは別の魚の学名だと判明し、日本のウバウオは2019年に Aspasma ubauo という新種として正式に記載されました。"
      }
    ],

    bodyLength: "全長約6cm程度の小型魚です。",

    distribution: "日本沿岸に分布します。2019年の新種記載では日本本土の多数の標本が調査され、2026年には島根県隠岐諸島から初めて正式な記録が報告されるなど、現在も分布情報が更新されています。",

    habitat: "非常に浅い沿岸の岩礁や藻場に生息します。ホンダワラ類やカジメ類などの海藻に吸盤でくっついて生活します。",

    diet: "小型の甲殻類などの小動物を捕食します。体は小さいですが、海藻の上などで動物性の餌を利用する魚です。",

    features: "頭部はやや平たく、体には鱗がありません。腹側には大きな吸盤があり、海藻や岩、水槽のガラス面などへ吸着できます。体色は黄色、緑色、褐色など変化が大きい魚です。",

    behavior: "海藻などへ吸着して生活し、長距離を泳ぎ続ける魚ではありません。場所を変えるときには吸盤を離し、短く素早く泳いで別の場所へ移ります。",

    reproduction: "旧学名 Aspasma minima の時代に本種として観察された生態資料では、春から初夏に繁殖し、1年ほどで成熟することが報告されています。ただし2019年の分類整理以前の資料であるため、今後は Aspasma ubauo としての研究による再確認も重要です。",

    identification: "最も重要なのは腹側の吸盤です。ただしウバウオ科には他にも吸盤を持つ魚がいるため、正確な種同定ではひれの軟条数や頭部形態など専門的な特徴を確認します。",

    nameOrigin: "2019年に付けられた種小名 ubauo は、日本で古くから使われていた標準和名「ウバウオ」をそのままラテン文字化したものです。",

    humanRelation: "食用魚として利用されることはほとんどありません。一方、魚の腹びれが吸盤へ変化するという非常に特殊な体の仕組みを観察できる魚です。",

    observationPoint: "魚そのものを見るだけでなく、『何にくっついているのか』を見てください。ガラスや海藻へ腹側を押し当てている個体なら、吸盤を使っている様子を観察できます。",

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
        text: "殻の表面にはこぶ状から棘状の突起があり、名前の『ウニ』を思わせるごつごつした姿をしています。"
      },
      {
        title: "古い図鑑では違う属名で出てくる",
        text: "以前は Thais echinata などの名前で扱われた資料もありますが、現在WoRMSでは Mancinella echinata が受理名です。"
      }
    ],

    bodyLength: "殻高は3cm前後の個体が多く、鳥羽水族館の標本では4.8cmの個体も掲載されています。",

    distribution: "日本では房総半島以南に分布し、国外では中国、フィリピン、オーストラリアなど西太平洋から記録されています。",

    habitat: "潮間帯から浅い海の岩礁に生息します。資料によっては水深20m程度までの岩礁域から記録されています。",

    diet: "本種だけを対象とした信頼できる食性情報を今回十分に確認できなかったため、特定の餌を断定しません。アッキガイ科には肉食性の種が多く含まれますが、それだけを根拠に本種の詳細な食性とはしません。",

    features: "やや厚く丈夫な巻貝で、殻の表面には多数のこぶ状・棘状の突起があります。殻の形は卵形から円錐形に近く、表面の立体的な彫刻が非常に目立ちます。",

    behavior: "岩礁上を這って生活する巻貝です。本種固有の活動時間や詳細な行動については資料が少ないため、夜行性などを根拠なく断定しません。",

    reproduction: "本種固有の繁殖時期・産卵方法について、今回確認した主要資料では十分な記述が得られなかったため、アッキガイ科一般の繁殖方法をそのまま記載することは避けます。",

    identification: "殻の表面にある大きなこぶや棘状の突起が特徴です。似たレイシガイ類も多いため、正確な同定では殻口や殻表面の彫刻などを総合的に確認します。",

    nameOrigin: "貝殻にウニの棘を思わせるような突起があることが名称に関係しています。貝類学者・平瀬與一郎によって命名された和名とされています。",

    humanRelation: "主要な水産物として流通する貝ではありません。磯で見られる巻貝の一つで、貝殻の特徴的な形から貝類観察の対象になります。",

    observationPoint: "殻全体の形よりも、まず表面の突起を見てください。こぶや棘がどのように並んでいるかを観察すると、名前の『ウニ』をイメージしやすくなります。",

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
        text: "見た目はカニそっくりですが、カニダマシ類はヤドカリに近い異尾類の仲間です。歩脚も本当のカニとは異なり、最後の1対が小さくなっています。"
      },
      {
        title: "口元の毛で水中の餌を集める",
        text: "口の近くにある羽毛状の付属肢を水中へ広げ、流れてくるプランクトンや細かな有機物をこし取るように食べます。"
      }
    ],

    bodyLength: "甲幅は約3cm程度。カニダマシ類の中では比較的大きくなる種類です。",

    distribution: "日本では房総半島以南の暖かい海域で見られます。国外では西太平洋からインド太平洋域に分布します。",

    habitat: "沿岸の岩礁や潮間帯に生息し、石の下や岩の隙間を隠れ場所として利用します。",

    diet: "水中を漂うプランクトンや細かな有機物などを、羽毛状に発達した口器でこし取って食べます。",

    features: "体は赤褐色から濃い赤色を帯び、左右に大きなはさみを持ちます。体は比較的平たく、岩や石の狭い隙間へ入りやすい形をしています。",

    behavior: "石の下などに隠れて生活し、危険を感じると素早く隙間へ逃げ込みます。餌を取るときには口元の羽毛状の付属肢を繰り返し広げたり閉じたりします。",

    reproduction: "本種だけを対象にした繁殖時期や詳しい繁殖行動について、今回確認した主要資料では十分な情報が得られなかったため、近縁種の繁殖生態を本種の事実として記載しません。",

    identification: "赤みの強い体色と比較的大きな体が特徴です。近縁のイソカニダマシ類とは、はさみや歩脚の形、棘の位置などを合わせて識別します。",

    nameOrigin: "和名の詳しい命名由来について、今回確認した主要資料では明確な説明を確認できなかったため断定しません。",

    humanRelation: "一般的な食用生物ではありません。磯の石の下などで見つかるカニダマシ類として、甲殻類の多様性を観察できる生物です。",

    observationPoint: "口元をよく見てみてください。細かな羽毛状の器官を水中へ広げていれば、流れてくる餌を集めている可能性があります。",

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
        text: "大型の巻貝で、殻口の内側が赤色になることが大きな特徴です。ごつごつした外側と鮮やかな内側で印象がかなり異なります。"
      },
      {
        title: "毒が検出された例がある",
        text: "厚生労働省によると、中腸腺からテトロドトキシンが検出された例があります。日本での中毒事例は報告されていませんが、食用目的で安易に扱うべき生物ではありません。"
      }
    ],

    bodyLength: "殻長約14〜20cm。かなり大型になる巻貝です。",

    distribution: "日本では房総半島・山口県見島以南に分布し、国外では熱帯のインド・西太平洋に広く分布します。",

    habitat: "潮間帯より少し深い岩礁域などに生息します。",

    diet: "オキニシ科は肉食性の巻貝で、ゴカイ類など海底にいる無脊椎動物を捕食します。本種について細かな餌の割合までは十分な資料がないため、特定の餌だけを主食とはしません。",

    features: "殻は大型で非常に厚く、表面には大きなこぶや太い螺旋状の隆起があります。殻口は大きく、内側が鮮やかな赤色になります。",

    behavior: "岩礁上を這って生活する底生性の巻貝です。自然下での一日の活動周期など、本種固有の細かな行動については十分な資料がないため断定しません。",

    reproduction: "本種固有の産卵時期や繁殖行動について、今回確認した信頼できる主要資料では十分な情報が得られなかったため記載を限定します。",

    identification: "大きくごつごつした殻と、殻口内部の赤色が非常に分かりやすい特徴です。似た大型の巻貝とは、殻表面のこぶや殻口の色を比較します。",

    nameOrigin: "和名の詳しい命名原典については今回確認できなかったため、名称の由来を推測では記載しません。",

    humanRelation: "大型で目立つ巻貝ですが、中腸腺からフグ毒の一種であるテトロドトキシンが検出された例があり、厚生労働省も自然毒情報の対象として掲載しています。",

    observationPoint: "まず殻口の内側を見てください。外側のごつごつした褐色の殻と、内側の赤色との大きな違いが分かります。",

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
        text: "幼い時期に岩などへ付着すると、その後はそこへ完全に固着して生活します。普通の巻貝のように殻を背負って歩き回ることはありません。"
      },
      {
        title: "粘液のネットで餌を取る",
        text: "体から粘液を網のように広げ、水中を漂うプランクトンや細かな有機物を付着させます。その後、粘液ごと回収して食べます。"
      }
    ],

    bodyLength: "殻全体はおよそ5cm前後になることがあります。殻は不規則に伸びるため、通常の巻貝のように一定した形ではありません。",

    distribution: "日本では北海道南部から九州にかけての沿岸などで確認されています。",

    habitat: "潮間帯や浅い岩礁に生息し、岩などの硬い場所へ殻を完全に固着させて生活します。",

    diet: "粘液を水中へ広げ、プランクトンや細かな有機物を捕らえて食べます。",

    features: "普通の巻貝のような整った螺旋状の殻ではなく、細長い管状の殻が不規則に曲がりながら岩の表面へ張り付いています。",

    behavior: "成長後は岩から移動しません。餌を取るときには粘液の糸や網を水中へ伸ばし、そこに付着した餌を口へ引き寄せます。",

    reproduction: "オスは精子を含むカプセルを水中へ放出し、メスが粘液を使ってそれを捕らえることで受精することが観察されています。",

    identification: "岩に完全に固着した不規則な管状の殻が大きな特徴です。古い資料では Serpulorbis imbricatus の学名が使われますが、現在は Thylacodes adamsii が受理名です。",

    nameOrigin: "細長く曲がりくねった殻がヘビのように見えることから「ヘビガイ」と呼ばれます。",

    humanRelation: "一般的な食用貝ではありません。動かない巻貝や、粘液を使った独特な摂餌方法を観察できる興味深い生物です。",

    observationPoint: "殻そのものより、殻の入口周辺を観察してみてください。タイミングがよければ、餌を集めるための粘液を伸ばす様子を見ることができます。",

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
        text: "大型魚の体表についた寄生生物や傷んだ組織、食べ残しなどを食べるクリーニング行動が知られています。"
      },
      {
        title: "非常に長い白い触角で存在を知らせる",
        text: "赤白の体から何倍もの長さに伸びる白い触角が目立ちます。魚に対してクリーニングを行うエビとして認識される手掛かりにもなります。"
      }
    ],

    bodyLength: "体長は最大約6cm程度。長い触角を含めると見た目はさらに大きくなります。",

    distribution: "紅海・インド洋から太平洋、さらに西部大西洋まで、熱帯・亜熱帯の海に非常に広く分布します。",

    habitat: "サンゴ礁や岩礁の岩穴、洞窟、オーバーハングした場所などに生息します。",

    diet: "小型の甲殻類などを食べるほか、クリーニング行動によって魚の体表の寄生生物、傷んだ組織、餌の残りなども利用します。",

    features: "体とはさみ脚に鮮やかな赤色と白色の帯があります。体表には細かな棘があり、非常に長い白色の触角が伸びています。",

    behavior: "岩穴などを生活場所とし、クリーニングを受けに来た魚へ近づきます。大型魚の体表や口の周辺などを歩きながら餌を探すことがあります。",

    reproduction: "雌雄のペア関係が形成されることが知られています。飼育下ではメスが腹部に卵を抱えて保護し、孵化した幼生は水中を漂う生活を送ります。",

    identification: "赤と白の明瞭な帯模様、長い白い触角、大きな第3胸脚のはさみが特徴です。",

    nameOrigin: "和名の正確な命名原典については今回確認できなかったため、乙姫伝説などとの関係を推測で記載することは避けます。",

    humanRelation: "クリーナーシュリンプとして海水観賞で人気があり、水族館では魚と甲殻類の共生的な関係を紹介する生物としても利用されます。",

    observationPoint: "長い触角だけでなく、周囲の魚との関係を見てください。魚が近づいても逃げず、体表を歩くような行動をしていればクリーニングを観察できる可能性があります。",

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
        text: "非常に大型になるイソメの仲間で、資料では全長1.5mほどに達する個体も知られています。細長い体には数百もの体節があります。"
      },
      {
        title: "虹色に光ることがある",
        text: "暗褐色の体表は光の当たり方によって金属のような虹色の光沢を見せることがあります。"
      }
    ],

    bodyLength: "大型個体では全長約1.5mに達することがあります。体は非常に細長く、多数の体節からできています。",

    distribution: "日本では本州中部以南などから記録されています。国外でもインド太平洋を中心に広い海域から報告されています。",

    habitat: "岩礁やサンゴ礁、砂や小石が混じる海底などに巣穴を作って生活します。",

    diet: "強い顎を持つ動物食性の多毛類で、小型の無脊椎動物などを捕食します。腐肉などを利用することもあります。",

    features: "非常に細長い体には多数の体節があり、各体節の左右に疣足があります。頭部には5本の目立つ触手があり、口の内部には硬く強力な顎があります。",

    behavior: "体の多くを岩や砂の隙間へ隠して生活します。頭部を外へ出して周囲の餌を探し、強い顎を使って捕食します。",

    reproduction: "本種固有の繁殖行動や日本での産卵時期については、今回確認した主要資料では十分な情報がないため、近縁の多毛類の生態を本種へ当てはめません。",

    identification: "非常に大型になる体、5本の頭部触手、光沢を持つ暗褐色の体、強い顎が特徴です。ただしEunice属には似た種類が多く、正確な種同定には専門的な形態確認が必要です。",

    nameOrigin: "非常に大型で強い顎を持つ姿から『オニ』を連想させますが、正式な命名由来を確認できなかったため断定はしません。",

    humanRelation: "一般的な食用生物ではありません。非常に大型になる多毛類として知られ、独特な姿や捕食器官から注目される生物です。",

    observationPoint: "全身が見えなくても、岩穴から出ている頭部を探してください。5本の触手や金属的に光る体表が見えれば特徴を観察しやすくなります。",

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
        text: "腕には多数の太いトゲがありますが、沖縄美ら海水族館では『刺したりはしない』と紹介されています。"
      },
      {
        title: "体より腕だけが見えていることが多い",
        text: "枝状サンゴの隙間へ中央の体を隠し、細長い腕だけを外へ伸ばしていることがあります。"
      }
    ],

    bodyLength: "中央の盤の直径は約2cm。腕は盤よりはるかに長く、資料では18cmほどに達する個体も報告されています。",

    distribution: "インド・西太平洋の熱帯域に分布し、琉球列島、フィリピン、インドネシア、グレートバリアリーフなどから記録されています。",

    habitat: "サンゴ礁に生息し、枝状サンゴの間、サンゴ片や岩の下、隙間などを隠れ場所として利用します。",

    diet: "本種だけを対象とした詳しい食性資料が限られるため、特定の餌を断定しません。クモヒトデ類では細かな有機物や小動物などを利用する種が多くいます。",

    features: "中央に小さな円盤状の体があり、そこから5本の細長い腕が伸びます。腕には多数の目立つ棘が並びます。",

    behavior: "中央部をサンゴの隙間へ隠し、腕だけを外へ伸ばしていることがあります。クモヒトデ類はヒトデより腕の動きが速く、腕を使って這うように移動します。",

    reproduction: "本種固有の繁殖時期や詳しい産卵行動について、今回確認した主要資料では十分な情報が得られなかったため断定しません。",

    identification: "細長い腕と、腕に並ぶ大きな棘が特徴です。正確な同定では中央部や腕の板、棘の形などを確認する必要があります。",

    nameOrigin: "腕に多数の大きな棘を持つクモヒトデであることが名前をイメージしやすい特徴ですが、正式な命名原典までは確認できていません。",

    humanRelation: "食用として一般的に利用される生物ではありません。サンゴの隙間に暮らす小型の棘皮動物として、サンゴ礁の生物多様性を観察できます。",

    observationPoint: "サンゴの枝の間をよく見てください。本体が見えなくても、トゲの多い細長い腕だけが外へ伸びている場合があります。",

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
        text: "以前は Erosaria boivinii とされることが多かった種ですが、現在のWoRMSでは Naria boivinii が受理名です。"
      },
      {
        title: "殻は自然に磨かれたような光沢を持つ",
        text: "タカラガイ類の殻は非常になめらかで光沢があります。生きている間に外套膜が殻の表面を覆うことが、この美しい表面を維持することにも関係します。"
      }
    ],

    bodyLength: "殻長は約4cm前後。",

    distribution: "日本では房総半島・山口県以南などの暖かい海域で見られ、国外では熱帯のインド・西太平洋に分布します。",

    habitat: "潮間帯からやや深い海のサンゴ礁や砂底、岩礁周辺などに生息します。",

    diet: "本種だけを対象とした信頼できる詳細な食性資料を十分確認できなかったため、特定の餌を断定しません。",

    features: "殻は丸みのある卵形で、表面は非常になめらかです。灰褐色を基調として褐色の斑点などが入り、殻の裏側には細長い殻口と多数の歯状突起があります。",

    behavior: "海底を足で這って移動します。生きているときには外套膜を殻の表面へ広げることがあり、貝殻だけを見た姿とは印象が大きく異なります。",

    reproduction: "本種固有の繁殖時期や卵保護について信頼できる詳しい資料が十分でないため、タカラガイ類一般の繁殖行動を本種の事実として記載しません。",

    identification: "なめらかな殻表面と灰褐色の模様が特徴です。タカラガイ類は似た種類が多いため、殻の模様だけでなく大きさや殻口の歯なども確認します。",

    nameOrigin: "『オミナエシ』は秋の七草の一つですが、この和名が具体的に殻のどの特徴から付けられたかについて、今回確認した主要資料では明確な根拠を確認できなかったため断定しません。",

    humanRelation: "タカラガイ類は光沢のある殻から古くから人に親しまれてきました。本種も貝類観察や貝殻収集で知られています。",

    observationPoint: "空の貝殻と生きた個体の違いに注目です。生きていれば、殻の表面へ軟らかい外套膜が広がっている様子を観察できる可能性があります。",

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
        text: "歩脚に非常に長い毛が生えており、それをオールのように動かして水中を泳ぐことができます。"
      },
      {
        title: "大量に海面を泳ぐことがある",
        text: "多数の個体が一斉に水中や海面付近を泳ぐことがあります。研究では繁殖だけでなく、餌を取るための遊泳も行うと考えられています。"
      }
    ],

    bodyLength: "甲幅は約1〜1.5cm程度。小型のカニです。",

    distribution: "日本では東京湾から有明海などで確認され、朝鮮半島や中国沿岸にも分布します。",

    habitat: "内湾の海底などに生息します。二枚貝の内部やゴカイ類の棲管などから見つかることもあります。",

    diet: "小型のプランクトンなどを食べることが確認されています。遊泳しながら口器を使って餌を取る行動も研究されています。",

    features: "甲羅は横に広く、歩脚には非常に長い毛が密生します。この毛が水を押す面積を大きくし、遊泳を可能にしています。",

    behavior: "海底だけでなく水中を活発に泳ぐことがあります。多数の個体が集団で泳ぐ現象も知られ、本種の名前の由来にもなっています。",

    reproduction: "抱卵したメスが確認され、飼育下で幼生から成体までの成長過程も研究されています。一方、集団遊泳のすべてが繁殖目的というわけではなく、摂餌との関係も指摘されています。",

    identification: "小型で横長の甲羅を持ち、特に歩脚に生える長い毛が特徴です。実際に泳いでいれば、ほかの小型ガニとの違いは非常に分かりやすくなります。",

    nameOrigin: "水中を活発に泳ぐことができる小型ガニであることから「オヨギピンノ」と呼ばれます。",

    humanRelation: "一般的な食用種ではありません。カニとしては珍しい遊泳能力を持つため、行動生態の研究対象にもなっています。",

    observationPoint: "海底にいるときだけではなく、水中へ泳ぎ出す瞬間を見てください。脚の長い毛を使って水をかく動きを観察できれば、本種最大の特徴が分かります。",

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
        text: "銀白色の体に5本の太い黒色帯があります。背中側は黄色味を帯びることがあり、特に繁殖時には色が目立ちます。"
      },
      {
        title: "卵を守るのはオス",
        text: "岩などの表面に粘着性の卵を産み、オスが孵化するまで卵を守ります。ひれを使って卵へ新鮮な水を送る行動も行います。"
      }
    ],

    bodyLength: "最大で全長約20cm。",

    distribution: "紅海・東アフリカから太平洋の島々までインド太平洋に広く分布し、北は南日本、南はオーストラリアまで確認されています。",

    habitat: "浅いサンゴ礁や沿岸の岩礁に生息します。水深0〜15m程度の浅い海でよく見られます。幼魚は流れ藻について生活することもあります。",

    diet: "動物プランクトン、岩面の藻類、小型の無脊椎動物などを食べる雑食性です。",

    features: "体は左右に平たく、青緑色から銀白色です。体側には5本の黒い縦帯が入り、背中側に黄色が現れることがあります。尾びれは二叉します。",

    behavior: "単独より群れで泳いでいることが多く、中層でプランクトンを食べたり、岩の周辺で藻類をついばんだりします。繁殖期のオスは卵を守るため縄張り性が強くなります。",

    reproduction: "卵生で、繁殖時にはペアになります。卵は岩などの海底表面へ付着し、産卵後はオスが卵を守り、ひれで水を送ります。",

    identification: "銀白色の体に5本の黒帯があるのが特徴です。よく似るロクセンスズメダイでは尾びれにも黒い線が入りますが、オヤビッチャの尾びれにはそのような明瞭な黒帯がありません。",

    nameOrigin: "独特な和名ですが、確実な命名由来については複数の説があり、今回確認した主要資料だけでは断定できないため記載しません。",

    humanRelation: "南日本の磯やサンゴ礁で身近に見られる魚です。観賞魚として流通するほか、地域によって漁獲・利用されることもあります。",

    observationPoint: "黒い帯を数えてみてください。5本確認できたら、次は尾びれに黒い線があるかを見ると、似たロクセンスズメダイとの違いを観察できます。",

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
        text: "後ろ側の2対の脚を背中方向へ曲げ、カイメンや群体ボヤなどをつかんで背負います。身を隠すカモフラージュとして役立つと考えられています。"
      },
      {
        title: "背負う物を自分の体に合わせて加工する",
        text: "カイメンなどが大きすぎる場合には、はさみで切って自分の甲羅に合う大きさに整えてから背負う行動も知られています。"
      }
    ],

    bodyLength: "甲幅は最大約10cm程度。",

    distribution: "日本を含む西太平洋からインド太平洋の暖かい海域に分布します。",

    habitat: "岩や砂、小石などがある海底に生息します。浅い海から水深100mを超える場所まで記録があります。",

    diet: "雑食性で、海底の小型動物などさまざまな餌を利用します。水族館資料ではヒトデなどを食べる例も紹介されています。",

    features: "丸みのある甲羅は短い毛で覆われています。後方の2対の歩脚は普通のカニのように歩くためではなく、背中方向へ曲がり、カイメンなどをつかむことに適した形になっています。",

    behavior: "カイメン、群体ボヤ、貝殻などを背中へ乗せて移動します。背負う物が大きい場合には、自分に合った大きさへ加工する行動も知られています。",

    reproduction: "メスは受精した卵を腹部に抱えて保護します。飼育下では幼生の飼育研究も行われていますが、本種の自然界での詳しい繁殖時期については十分な情報がないため断定しません。",

    identification: "丸みのある毛深い甲羅と、背中方向へ向いた後ろ2対の脚が大きな特徴です。何かを背負っている場合でも、脚の配置を見るとカイカムリらしい体の構造が分かります。",

    nameOrigin: "貝やカイメンなどを背中に『かぶる』ようにして生活する姿を連想させる名前ですが、正式な命名原典については今回確認できなかったため断定しません。",

    humanRelation: "一般的な食用ガニではありません。物を加工して背負う複雑な行動を行うことから、カニ類の行動研究でも興味深い存在です。",

    observationPoint: "背負っている物だけでなく、その下にある後ろ脚を探してください。後方の脚でカイメンなどをしっかりつかんでいることが分かります。",

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
        text: "黄色い体に太い黒色の斜めの帯が入り、チョウチョウウオの仲間のようにも見えます。しかし分類上はカゴカキダイ科という別のグループです。"
      },
      {
        title: "大人になると群れで泳ぐことが多い",
        text: "成魚は岩礁域で多数の個体が集まり、大きな群れを形成することがあります。昼間には岩棚や洞窟の周辺へ集まることもあります。"
      }
    ],

    bodyLength: "最大で全長約20cm。",

    distribution: "日本では青森県から九州南岸、琉球列島などで確認されています。日本周辺の温帯から亜熱帯の沿岸で見られる魚です。",

    habitat: "沿岸の岩礁、港湾、礁湖などに生息します。成魚は水深10〜30m程度でよく見られますが、幼魚は非常に浅い岩礁域にも現れます。",

    diet: "幼魚では小型甲殻類や藻類を食べることが確認されています。成魚も小型の底生動物や植物質などを利用する雑食性です。",

    features: "体は左右に強く平たく、黄色から黄白色の体に黒い斜めの帯が複数入ります。口は小さく、体高が高いため円盤に近いシルエットに見えます。",

    behavior: "幼魚では浅い岩礁や港などでも見られます。成魚になると複数個体がまとまって泳ぐことが多く、岩棚や洞窟周辺へ大きな群れが集まることもあります。",

    reproduction: "日本では春を中心に産卵すると考えられています。地域によっては異なる季節にも稚魚が確認されていますが、本種の産卵行動そのものについては詳細な情報が限られるため、断定的な記載は避けます。",

    identification: "黄色い体と黒い太い縞模様が最大の特徴です。似た色のチョウチョウウオ類と比べると、吻が長く伸びず、体の縞の入り方も異なります。",

    nameOrigin: "「カゴカキダイ」という和名の確実な語源については複数の説明があり、今回確認した主要資料から断定できないため記載しません。",

    humanRelation: "釣りで捕獲され、食用にもなります。黒潮生物研究所では美味な魚としても紹介されています。また観賞魚として扱われることがあります。",

    observationPoint: "黒い帯が何本あるか、そして帯が真っすぐではなく斜めに走っていることに注目してください。群れで同じ方向を向いて泳ぐ様子も見どころです。",

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
        text: "殻は最大で約18cmに達します。日本の磯で見られる巻貝の中ではかなり大型になる種類です。"
      },
      {
        title: "見た目に反して肉食性",
        text: "二枚貝やほかの巻貝、棘皮動物などを捕食します。長い吻を使い、獲物の軟らかい部分を食べます。"
      }
    ],

    bodyLength: "殻長は最大約18cm。大型個体では15cmを超えることがあります。",

    distribution: "非常に広い分布を持ち、インド太平洋だけでなく大西洋や地中海からも記録されています。日本沿岸からも確認されています。",

    habitat: "潮間帯から水深75m程度まで記録されています。浅い岩礁や岩の多い海底などで見られます。",

    diet: "肉食性で、二枚貝、巻貝、棘皮動物などを捕食します。足で獲物を押さえながら吻を伸ばして食べることがあります。",

    features: "殻は大型で、丸みのある太い形をしています。殻表面には太い螺旋状の筋やこぶがあり、生きている個体では殻表面を褐色の殻皮が覆います。",

    behavior: "海底を這って生活する肉食性の巻貝です。日中より夜間に活動する例が多く、岩の周辺で獲物を探します。",

    reproduction: "フジツガイ科の繁殖については卵嚢を産む種類が知られていますが、本種固有の日本沿岸での繁殖時期や詳細な産卵行動については十分な情報がないため断定しません。",

    identification: "大型で膨らんだ殻、太い螺旋状の彫刻、殻を覆う褐色の殻皮などが特徴です。古い資料では Cymatium echo など別の学名で掲載されていることがあります。",

    nameOrigin: "和名「カコボラ」の確実な命名由来については今回確認した主要資料では確認できなかったため、推測では記載しません。",

    humanRelation: "地域によって貝殻が収集されるほか、大型の巻貝として知られます。一般的な主要食用貝ではありません。",

    observationPoint: "殻の大きさだけでなく、表面を覆う殻皮や太い筋に注目してください。動いている場合は、殻の下から出てくる大きな足も観察できます。",

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
        text: "カサゴは体内で受精・発生させた後、泳げる状態の仔魚を海中へ産み出します。多くの魚のように卵を海底へ産み付けるタイプではありません。"
      },
      {
        title: "大きくなるほど魚を食べる割合が増える",
        text: "若い個体ではエビやカニなどの甲殻類を多く食べますが、大きくなるにつれて魚を捕食する割合が増えることが研究で確認されています。"
      }
    ],

    bodyLength: "最大で全長約36cm。沿岸では20cm前後の個体がよく見られます。",

    distribution: "日本の北海道南部から南日本、朝鮮半島、中国沿岸、フィリピンなど西太平洋に分布します。",

    habitat: "沿岸の岩礁に生息します。岩の隙間や海底付近を生活場所とし、周囲の岩に溶け込むような体色をしています。",

    diet: "エビやカニなどの甲殻類、クモヒトデ類、小魚などを捕食します。成長に伴って魚類を食べる割合が高くなることも報告されています。",

    features: "頭が大きく、体には褐色・赤色・黒色などの不規則なまだら模様があります。体色には個体差が大きく、生息場所によっても見え方が変わります。背びれには鋭い棘があります。",

    behavior: "海底や岩の上であまり動かず、小魚や甲殻類が近づくのを待つことがあります。単独で一定範囲を利用することが多い魚です。",

    reproduction: "体内受精を行い、メスの体内で卵が発生します。その後、発達した仔魚を海中へ産み出す胎生型の繁殖を行います。",

    identification: "大きな頭と口、赤褐色のまだら模様が特徴です。ただしウッカリカサゴなど近縁種と似るため、正確な同定では体の模様や鰭の特徴を総合して判断します。",

    nameOrigin: "「カサゴ」の語源には複数の説があり、今回確認した資料から一つに断定することはできないため記載しません。",

    humanRelation: "釣りや沿岸漁業の重要な対象で、刺身、煮付け、唐揚げ、汁物など幅広く食用になります。日本では養殖も行われています。",

    observationPoint: "岩と体の模様を比べてみてください。背景へ溶け込む保護色がよく分かります。また、海底でじっとしている時間の長さにも注目です。",

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
        text: "殻そのものはそれほど大きくありませんが、非常に細長い棘は30cmほどまで伸びることがあります。"
      },
      {
        title: "上にある黄色い『目』は目ではない",
        text: "体の上部中央には黄色や橙色の丸い部分が見えますが、これは眼ではなく肛門のある部分です。"
      }
    ],

    bodyLength: "殻径は約5〜9cm。棘は非常に長く、30cmほどに達することがあります。",

    distribution: "日本では房総半島・相模湾以南などに分布し、インド太平洋の熱帯・亜熱帯域に広く分布します。",

    habitat: "岩礁、サンゴ礁、砂や小石の混じる海底などに生息します。水深15m程度までの浅い場所で多く見られます。",

    diet: "海藻を食べることが知られていますが、天然個体の研究では動物質も利用している可能性が示されており、単純な完全草食動物とは言い切れません。",

    features: "黒色から暗紫色の体から、針のように細く長い棘が放射状に伸びます。体上部には青色の点や、中央に黄色から橙色の目立つ部分があります。",

    behavior: "昼間は岩の隙間や陰に集まり、暗くなると周囲へ出て餌を探すことがあります。棘を周囲へ大きく広げることで外敵から身を守ります。",

    reproduction: "雌雄が別々に存在し、卵と精子を海水中へ放出して体外受精します。受精後は浮遊性の幼生期を経て、海底で生活するウニへ変化します。",

    identification: "非常に長い黒色の棘と、体の上部中央にある黄色から橙色の部分が大きな特徴です。近縁のアオスジガンガゼなどとは体表の青い模様なども比較します。",

    nameOrigin: "和名「ガンガゼ」の詳しい語源について確実な資料を確認できなかったため、推測では記載しません。",

    humanRelation: "長い棘は非常に折れやすく毒性もあり、刺さると強い痛みを生じます。また、地域によっては海藻を食べることによる藻場への影響も研究されています。",

    observationPoint: "長い棘だけでなく、その中心部を見てください。黄色い丸い部分が見えれば、そこが眼ではなく肛門周辺であることを思い出して観察すると面白いです。",

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
        text: "非常に厚くごつごつした殻に、枝分かれした棘状の突起が並びます。まるで小さな岩石のような姿です。"
      },
      {
        title: "標準和名は『ガンゼキボラ』",
        text: "『ガンセキボラ』と書かれることもありますが、現在一般的に使われる標準和名はガンゼキボラです。"
      }
    ],

    bodyLength: "殻高は通常約7cm。大型個体では11cmを超えることがあります。",

    distribution: "日本では房総半島以南に分布します。国外では東アフリカから西太平洋、ポリネシア、オーストラリア北部などインド・西太平洋に広く分布します。",

    habitat: "潮間帯から浅い海に生息し、岩礁、サンゴ礁、砂底や泥混じりの海底など幅広い環境から確認されています。",

    diet: "肉食性の巻貝で、ほかの巻貝などを捕食します。歯舌や長い吻を使って獲物の軟らかい部分を食べます。",

    features: "殻は厚く頑丈で、各部分に太いこぶと枝分かれした棘状突起があります。殻は褐色から黒褐色で、殻口は白色から淡い桃色、縁が濃い桃色になることがあります。",

    behavior: "海底を這って獲物を探します。岩礁だけでなく砂底などでも見られる底生性の巻貝です。",

    reproduction: "本種は卵と精子を一斉に水中へ放出するタイプではありません。ただし日本での詳しい産卵時期や卵嚢の形成について十分な資料がないため、詳細は断定しません。",

    identification: "ごつごつした厚い殻と、枝分かれした多数の棘が特徴です。殻口の淡い桃色も識別の手掛かりになります。",

    nameOrigin: "漢字では「岩石法螺」とされ、ごつごつした岩石のような殻を持つことが名前の由来です。江戸時代から使われていた名称とされています。",

    humanRelation: "地域によって食用として採集されることがあり、貝殻が装飾などに利用されることもあります。",

    observationPoint: "殻の棘を一本ずつ見てみてください。単純な尖った棘ではなく、枝分かれした複雑な形をしている部分があります。",

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
        text: "背びれの大きな棘1本と腹びれの大きな棘2本が目立ちます。英名のTripodfishは、この3本の棘を三脚に見立てた名前です。"
      },
      {
        title: "体から大量の粘液を出す",
        text: "体表は細かな鱗でざらざらしており、さらに大量の粘液を出します。漁獲時には扱いにくい魚として知られることもあります。"
      }
    ],

    bodyLength: "全長約25〜30cm。",

    distribution: "日本では房総半島以南を中心に見られ、日本海側にも分布します。国外では朝鮮半島からインド・西太平洋域に広く分布します。",

    habitat: "沿岸や河口付近の浅い砂底・泥底に生息します。群れを形成して生活することがあります。",

    diet: "ゴカイ類、甲殻類など海底に生息する小型の無脊椎動物を食べます。",

    features: "銀白色で左右に平たい体を持ち、吻は前方へ細く伸びます。第1背びれと左右の腹びれには非常に長く鋭い棘があります。",

    behavior: "浅い砂泥底付近を群れで泳ぎながら、海底にいる小動物を探します。",

    reproduction: "本種固有の日本沿岸での詳しい産卵行動については、今回確認した主要資料では十分な情報が得られなかったため、時期や方法を推測では記載しません。",

    identification: "細長く尖った顔、銀色の体、そして背びれと腹びれの長い棘が非常に特徴的です。",

    nameOrigin: "体表の感触が擬麻と呼ばれる織物に似るという説や、銀色の体と馬のような顔から『銀馬』に由来するという説など複数あり、確定していません。",

    humanRelation: "三河湾や伊勢湾などでは釣りや食用の対象になります。一方、鋭い棘と大量の粘液があるため、漁業現場では扱いにくい魚でもあります。",

    observationPoint: "背中の棘だけでなく、腹側にも長い2本の棘があることを確認してみてください。3本を合わせると英名の『tripod』の意味が分かります。",

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
        text: "キヌハダウミウシは肉食性で、ほかのウミウシを捕食します。野外では別種のウミウシへ襲いかかって食べる様子が実際に観察されています。"
      },
      {
        title: "獲物の内臓から食べることもある",
        text: "研究では、獲物の体へ口器を差し込み、最初に内臓を食べてから残った体を食べるという独特な捕食行動も確認されています。"
      }
    ],

    bodyLength: "大型個体では体長5cm前後になることがあります。",

    distribution: "日本を含むインド太平洋の広い範囲から記録されています。アフリカ東岸、東南アジア、オーストラリア、ニューカレドニア、ハワイなどでも確認されています。",

    habitat: "岩礁やサンゴ礁、砂が混じる場所などに生息します。BiSMALでは水深0〜25m程度から多数の記録があります。",

    diet: "完全な肉食性で、主にほかのウミウシ類を捕食します。Dendrodoris属やGlossodoris属など複数のウミウシを捕食した観察例があります。",

    features: "体は橙色から黄橙色で、表面は比較的滑らかです。頭部には一対の触角があり、背中の後方には枝分かれした鰓があります。",

    behavior: "海底を這って移動し、ほかのウミウシを探します。獲物を発見すると接近し、大きく発達した口器を使って捕食します。",

    reproduction: "ウミウシ類らしく雌雄両方の生殖器官を持つ雌雄同体ですが、通常は別個体と交尾して受精します。本種固有の産卵期については十分な情報がないため断定しません。",

    identification: "橙色の滑らかな体が特徴ですが、Gymnodoris属には似た種類が多くあります。正確な種同定では外部形態だけでなく口器や生殖器などの形態が必要になる場合があります。",

    nameOrigin: "滑らかで絹のように見える体表が『キヌハダ』という名称を連想させますが、正式な命名原典までは確認できなかったため断定しません。",

    humanRelation: "食用にはなりませんが、ウミウシがほかのウミウシを捕食するという意外な生態を観察できる生物です。捕食行動の研究対象にもなっています。",

    observationPoint: "近くに別のウミウシがいないかも一緒に見てください。もし接近して口を伸ばしていれば、捕食行動が始まる可能性があります。",

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
        text: "はさみ脚と歩脚には長い毛が密生しています。体表には細かな黒い斑点が多く、触角の赤色も目立ちます。"
      },
      {
        title: "右のはさみが大きい",
        text: "ホンヤドカリ属の特徴の一つとして、右側のはさみ脚が左側より大きく発達します。"
      }
    ],

    bodyLength: "甲長は最大約1cm。貝殻と脚を含めると見た目はさらに大きくなります。",

    distribution: "北海道から九州までの日本沿岸、朝鮮半島などに分布します。",

    habitat: "沿岸の岩礁や潮だまりに生息します。比較的波当たりの強い低い潮間帯にも見られます。",

    diet: "海底の藻類、細かな有機物、動物質などさまざまな餌を利用する雑食性です。",

    features: "全体は灰緑色から褐色で、はさみ脚や歩脚に長毛が密生します。黒褐色の小さな斑点が多数あり、触角は赤色から橙色でよく目立ちます。",

    behavior: "巻貝の空殻を利用して生活します。危険を感じると脚とはさみを殻の内部へ引っ込めます。成長すると、より大きな空殻へ引っ越します。",

    reproduction: "房総半島での研究では、抱卵したメスは主に12月から5月に確認されています。ただし繁殖時期には地域差がある可能性があります。",

    identification: "脚の長い毛、黒い小斑点、赤い触角、右のはさみが左より大きいことが主な特徴です。非常によく似た近縁種もいるため、細かな模様を確認する必要があります。",

    nameOrigin: "脚に長い毛が多く生えるホンヤドカリ類であることから「ケアシホンヤドカリ」と呼ばれます。",

    humanRelation: "食用として一般的に利用される生物ではありませんが、日本の磯で身近に見られるヤドカリ類の一つです。",

    observationPoint: "貝殻ではなく、そこから出ている脚を見てください。毛の多さ、黒い点、赤い触角を確認すると本種の特徴が分かります。",

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
        text: "ホンヤドカリ類では左右のはさみの大きさが大きく違う種類も多いですが、本種では左右がほぼ同じ大きさです。"
      },
      {
        title: "脚が名前通り『毛深い』",
        text: "はさみ脚と歩脚には長い毛が密生します。ケアシホンヤドカリとは、はさみの大きさなどを比べると違いが分かります。"
      }
    ],

    bodyLength: "体長は約3〜4cm程度まで。新潟大学では約4cmの個体が紹介されています。",

    distribution: "日本では北海道南部から九州までの日本海側・太平洋側で記録されています。朝鮮半島やロシア沿海州周辺からも確認されています。",

    habitat: "潮間帯から水深210m程度まで記録がありますが、日本沿岸では浅い岩礁や石、小石の多い海底でよく見られます。",

    diet: "本種単独の詳細な食性資料は限られています。海底にある動植物質や細かな有機物など、さまざまな餌を利用すると考えられますが、特定の主食は断定しません。",

    features: "はさみ脚と歩脚には長い毛が密生します。左右のはさみ脚はほぼ同じ大きさで、この点はケアシホンヤドカリなどとの比較に役立ちます。",

    behavior: "巻貝の空殻を背負って海底を歩き、危険を感じると殻の中へ引っ込みます。浅い石の多い場所でも見られます。",

    reproduction: "日本沿岸では7月や9月に抱卵したメスが記録されています。ただし北方の個体群を含め繁殖時期には地域差がある可能性があります。",

    identification: "毛が多いことだけでなく、左右のはさみがほぼ同じ大きさであることを確認すると識別しやすくなります。",

    nameOrigin: "毛深い外見を持つ、小型のヒメヨコバサミ類であることがそのまま和名に表れています。",

    humanRelation: "一般的な食用生物ではありません。岩礁や磯に生息するヤドカリ類の多様性を観察できる種類です。",

    observationPoint: "近くにケアシホンヤドカリがいれば、左右のはさみを見比べてください。本種では左右がかなり近い大きさです。",

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
        text: "岩の穴や空いた管などへ体を入れ、頭だけを外へ出して周囲を見ていることがあります。水族館でも特徴的な姿を観察しやすい魚です。"
      },
      {
        title: "オスが巣と卵を守る",
        text: "繁殖期のオスは自分の巣穴を縄張りとして守ります。メスが巣の中へ産んだ卵もオスが保護します。"
      }
    ],

    bodyLength: "最大で全長約8cm。",

    distribution: "日本と朝鮮半島など北西太平洋から知られます。FishBaseでは北米カリフォルニア沿岸からも記録されています。",

    habitat: "潮だまりから浅い海の岩礁に生息します。小石の多い場所や岩の穴、貝殻・管状の空間などを利用します。",

    diet: "小型甲殻類など、周囲にいる小さな底生動物を捕食します。",

    features: "細長い体を持ち、頭部は比較的大きくなっています。眼の上や吻の周辺には複雑に枝分かれした皮膚の突起があり、体色は褐色、赤色など個体差があります。",

    behavior: "巣穴から頭部を出して周囲を警戒します。餌が近づくと巣から飛び出して捕食し、再び穴へ戻ります。繁殖期のオスは巣の周囲を縄張りとして防衛します。",

    reproduction: "メスはオスの巣穴内部へ粘着性の卵を産み付けます。オスはその後も巣に残り、卵が孵化するまで外敵から守ります。",

    identification: "眼の上の枝分かれした皮弁と、穴から頭だけを出す習性が特徴です。ただし日本には複数のコケギンポ属魚類がいるため、種同定には頭部の模様やひれの特徴も確認します。",

    nameOrigin: "眼の上の複雑な皮膚突起やまだら模様が、岩についた苔を思わせることが名前に関係すると考えられますが、命名原典までは今回確認できなかったため断定しません。",

    humanRelation: "食用にはほとんど利用されませんが、穴から顔を出す独特な姿からダイバーや水族館で人気があります。繁殖・縄張り行動の研究対象にもなっています。",

    observationPoint: "水槽全体を泳いでいる魚を探すのではなく、小さな穴を一つずつ見てください。穴から顔だけを出している個体を見つけたら、眼の上の『ふさふさ』にも注目です。",

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
        text: "成魚の体の後半には細かな黒い斑点が散らばります。この模様を胡椒の粒に見立てたことが名前の由来とする説があります。"
      },
      {
        title: "子どもと大人で見た目がかなり変わる",
        text: "小さな稚魚では体が黒っぽく、ひれに大きな黒斑が目立ちます。成長すると銀灰色の体に太い斜めの帯と細かな黒斑を持つ姿へ変化します。"
      }
    ],

    bodyLength: "最大で全長約60cm。大型になるイサキ科の魚です。",

    distribution: "日本では相模湾から九州南岸を中心に、日本海・東シナ海沿岸、瀬戸内海、屋久島などで確認されています。国外では朝鮮半島、中国沿岸、台湾からアラビア海方面まで分布します。",

    habitat: "沿岸の岩礁や、その周辺にある砂底などに生息します。若い個体は非常に浅い海や、まれに河口付近へ入ることもあります。",

    diet: "甲殻類やゴカイ類など海底にいる小動物を主に食べます。成長した大型個体では小魚を捕食することもあります。",

    features: "体高が高く左右に平たい体を持ちます。成魚では銀灰色の体に太い暗色帯が斜めに入り、背中から尾びれ付近には細かな黒い斑点が散らばります。唇が厚いことも特徴です。",

    behavior: "岩礁と砂地の境界付近などを泳ぎながら、海底の餌を探します。幼魚と成魚では生息場所や外見にも違いが見られます。",

    reproduction: "卵生で、繁殖時にはペアを形成します。日本では5〜6月ごろが産卵期とされますが、地域によって時期が変化する可能性があります。",

    identification: "成魚では体側の太い斜めの黒帯と、体後半の細かな黒い斑点が重要です。近縁のコロダイなどとは体の模様が大きく異なります。",

    nameOrigin: "体の後半に散らばる黒斑が胡椒の粒のように見えることから『胡椒鯛』と呼ばれたという説があります。一方、小姓の装束の模様に由来するという説もあります。",

    humanRelation: "釣りや沿岸漁業で漁獲され、食用になります。白身魚として刺身、塩焼き、煮付けなどに利用されます。",

    observationPoint: "太い黒い帯だけでなく、背中から尾にかけて散らばる小さな黒点を探してください。若い個体がいれば、成魚との模様の違いも比較できます。",

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
        text: "左右の大きなはさみを体の前で合わせると、甲羅の前面を覆うような形になります。この姿からカラッパ類は英語でBox crabやShame-faced crabと呼ばれることがあります。"
      },
      {
        title: "砂の中へ潜る",
        text: "砂底では体を砂の中へ埋め、外敵から身を隠します。甲羅と大きなはさみだけを残して潜ることもあります。"
      }
    ],

    bodyLength: "甲幅は約8cm程度、甲長は最大約6cmほどになります。",

    distribution: "非常に広い分布を持ち、インド・太平洋では紅海から日本、ポリネシアまで見られます。大西洋の熱帯域からも記録されています。",

    habitat: "浅い海から水深200mを超える場所まで記録され、砂底、砂泥底、サンゴ礁、岩礁などに生息します。砂へ潜って生活することがあります。",

    diet: "肉食性で、巻貝など硬い殻を持つ動物を捕食します。カラッパ類では左右のはさみを異なる用途に使って殻を壊すことが知られています。",

    features: "甲羅は横に広く、表面には多数の大きなこぶや凹凸があります。左右のはさみ脚は非常に大きく、体の前面を覆える形をしています。",

    behavior: "海底の砂に体を潜らせて隠れます。獲物を捕らえる際には強力なはさみを利用します。",

    reproduction: "雌雄は別々です。本種固有の日本沿岸での産卵時期や求愛行動については、信頼できる詳しい資料が少ないため断定しません。",

    identification: "表面に大きなこぶを持つ甲羅が特徴です。同じカラッパ属にはトラフカラッパなど似た種類がいるため、甲羅後方の形や突起、模様も確認します。",

    nameOrigin: "甲羅に大きなこぶ状の隆起があるカラッパ類であることから『コブカラッパ』と呼ばれます。",

    humanRelation: "一部地域では漁獲されることがありますが、日本で一般的な食用ガニではありません。大きなはさみや砂へ潜る行動を観察できる興味深いカニです。",

    observationPoint: "はさみを閉じたとき、どれだけ体の前を覆えるのか見てみてください。砂がある場合は、少しずつ砂へ体を埋める行動にも注目です。",

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
        text: "ヨコバサミ属では左右のはさみの大きさが比較的近く、本種も左右が大きく違わないことが特徴です。"
      },
      {
        title: "河口近くでも暮らせる",
        text: "海だけでなく河口に近い砂泥底やマングローブなどにも生息し、塩分が変化しやすい沿岸環境を利用します。"
      }
    ],

    bodyLength: "体そのものは数cm程度のヤドカリです。利用する巻貝の殻によって見た目の大きさは大きく変わります。",

    distribution: "日本を含むインド・西太平洋に広く分布します。",

    habitat: "潮間帯の下部から浅い海に生息します。特に河口付近の砂底・砂泥底、マングローブ周辺などで記録されています。",

    diet: "雑食性で、海底の細かな有機物、藻類、動物質などさまざまな餌を利用すると考えられます。",

    features: "歩脚は比較的長く、褐色から暗色の体に黄橙色などの縞模様が見られます。左右のはさみ脚の大きさは比較的近くなっています。",

    behavior: "空になった巻貝の殻へ腹部を入れて生活します。成長すると現在の殻が小さくなるため、より大きな空殻へ引っ越します。",

    reproduction: "雌雄は別々です。メスは受精した卵を腹部に抱えて保護します。本種の日本での詳細な繁殖時期については十分な資料がないため断定しません。",

    identification: "脚の縞模様やはさみの形が識別の手掛かりになります。ただし宿としている貝殻の種類は個体によって異なるため、貝殻だけで種を判断することはできません。",

    nameOrigin: "和名の『コブ』の具体的な命名根拠については、今回確認した主要資料では明確に確認できなかったため推測では記載しません。",

    humanRelation: "一般的な食用種ではありません。河口や砂泥底に暮らすヤドカリとして、沿岸生態系の観察対象になります。",

    observationPoint: "背負っている貝殻ではなく、外へ出ている脚とはさみを見てください。脚の模様や左右のはさみの大きさを比べるのがおすすめです。",

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
        text: "コマチガニはウミシダ類と強い関係を持ち、腕や根元付近に隠れて生活します。宿主の色や模様に似て見える個体もいます。"
      },
      {
        title: "甲幅はわずか1〜2cmほど",
        text: "非常に小型のカニなので、ウミシダだけを見ていると見逃してしまいます。ウミシダの腕の付け根付近を探すと見つかることがあります。"
      }
    ],

    bodyLength: "甲幅約1.5〜2cm程度の小型のカニです。",

    distribution: "日本では東京湾・相模湾から九州などで記録されています。インド洋から東南アジアにかけても知られています。",

    habitat: "浅い岩礁からやや深い海まで生息し、主にウミシダ類の体上や腕の付け根などで生活します。",

    diet: "本種だけを対象にした詳しい自然下の食性資料は限られています。ウミシダ上で生活する共生性のカニですが、宿主をどの程度直接利用しているかについては断定しません。",

    features: "甲羅は横にやや広い六角形で、小型です。体色や模様は個体差があり、宿主となるウミシダの上では非常に見つけにくくなります。",

    behavior: "ウミシダから大きく離れず、その腕や根元付近を移動します。ウミシダを外敵や環境から身を隠す場所として利用します。",

    reproduction: "雌雄は別々で、抱卵したメスも知られています。ただし本種固有の繁殖時期や幼生の詳細については情報が限られるため断定しません。",

    identification: "Harrovia属には非常によく似た種類があります。コマチガニとして扱われる Harrovia elegans と Harrovia japonica は過去に分類上混同された経緯もあるため、正確な種同定には甲羅側縁などの細かな形態確認が必要です。",

    nameOrigin: "ウミシダ類は『コマチ』と呼ばれることがあり、そのウミシダに共生するカニであることが和名に関係しています。",

    humanRelation: "食用ではありません。ウミシダと小型甲殻類との共生関係を観察するのに適した生物です。",

    observationPoint: "カニだけを探すのではなく、まずウミシダを見つけてください。その腕の間や中心部を注意深く見ると、小さなコマチガニを見つけられる可能性があります。",

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
        text: "初夏の大潮前後になると、多数のクサフグが非常に浅い磯や砂浜へ集まり、波で体が打ち上がるほど岸近くで一斉に産卵することがあります。"
      },
      {
        title: "危険を感じると体を膨らませる",
        text: "水や空気を胃へ取り込み、普段より大きな球形に近い姿へ膨らむことで、外敵に飲み込まれにくくします。"
      }
    ],

    bodyLength: "一般には全長15cm前後の小型フグです。FishBaseにはさらに大型の記録もあります。",

    distribution: "日本各地の沿岸を含む東アジアからインド・西太平洋に分布します。",

    habitat: "沿岸の非常に浅い海、砂底、岩礁周辺、河口付近などに生息します。砂へ潜り、眼や背中だけを外へ出していることもあります。",

    diet: "甲殻類、貝類、ゴカイ類などの小型動物を食べます。硬い餌をかじることができる強い歯を持っています。",

    features: "背中は暗緑色から褐緑色で、白い小さな斑点が多数あります。胸びれの後ろには大きな黒色斑があり、背面と腹面には細かな棘があります。",

    behavior: "浅い海底で餌を探し、砂へ潜る行動も見られます。危険を感じると胃へ水を入れて体を大きく膨らませます。",

    reproduction: "神奈川県では5月中旬から7月中旬ごろ、大潮の数日後に大群で波打ち際へ集まって産卵することが知られています。雌雄が一斉に卵と精子を放出します。",

    identification: "暗緑色の背中に白い小斑点が多数あり、胸びれ後方には大きな黒斑があります。体表の小さな棘も特徴です。",

    nameOrigin: "和名の詳しい語源については複数の説があり、確実な命名由来を確認できないため断定しません。",

    humanRelation: "テトロドトキシンを持つ有毒魚です。毒の分布には個体差・地域差もあるため、一般の人が自己判断で食用にしてはいけません。フグの取り扱いは法令や自治体の規則に従う必要があります。",

    observationPoint: "白い小さな斑点と胸びれ後ろの大きな黒斑を探してください。砂がある水槽なら、体を砂へ埋めている個体がいないかも見てみましょう。",

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
        text: "多くの巻貝やウミウシは歯舌という細かな歯の並んだ器官を持ちますが、本種では歯舌がありません。この特徴が『シタナシ』という名前につながっています。"
      },
      {
        title: "カイメンを吸い込むように食べる",
        text: "歯舌で削る代わりに、特殊な口を使ってカイメンの組織を吸い込むようにして食べます。"
      }
    ],

    bodyLength: "体長約5cm程度になる個体が見られます。",

    distribution: "日本を含む西太平洋・インド太平洋域から記録されています。",

    habitat: "比較的内湾的な浅い岩礁で見られ、潮だまりや岩の表面などでも確認されます。",

    diet: "カイメン類を食べます。歯舌を持たないため、カイメンの組織を吸い込むような特殊な方法で摂餌します。",

    features: "体は黒色から暗褐色を基調とし、外縁部に灰色、黄色、橙色などが入る個体があります。背面後方には樹枝状に広がる二次鰓があります。",

    behavior: "岩の上などをゆっくり這って移動します。餌となるカイメンの近くで見つかることがあります。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体です。通常は別個体同士で交尾し、受精後に卵塊を産みます。",

    identification: "黒っぽい体色だけでは、ホンクロシタナシウミウシなどと混同する可能性があります。外套膜の縁の色や触角、二次鰓などを合わせて確認します。",

    nameOrigin: "本種を含むDendrodoris属は、餌を削る歯舌を持たないことから『シタナシ』という和名が付けられています。",

    humanRelation: "一般的な食用生物ではありません。歯舌を失い、カイメンを吸い込んで食べるという特殊な進化を観察できるウミウシです。",

    observationPoint: "背中の後ろにある木の枝のような二次鰓と、頭側にある2本の触角を探してください。黒い体だけでなく、体の縁の色にも注目です。",

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
        text: "クロダイは雄性先熟型の性転換を行う魚として知られています。若い時期にはオスとして成熟し、その後一部の個体がメスへ変化します。"
      },
      {
        title: "海だけでなく川にも入る",
        text: "塩分変化への適応力が高く、内湾や河口だけでなく、かなり塩分の低い場所まで入り込むことがあります。"
      }
    ],

    bodyLength: "最大で標準体長約50cm。全長では60cm前後に達する大型個体も見られます。",

    distribution: "北西太平洋に分布し、日本では北海道南部から九州まで広く見られます。朝鮮半島、中国沿岸、台湾などにも分布します。",

    habitat: "内湾、浅い岩礁、砂泥底、河口の汽水域など幅広い環境に生息します。",

    diet: "雑食性で、貝類、ゴカイ類、甲殻類など海底にいるさまざまな生物を食べます。",

    features: "体は銀灰色から黒みを帯び、体高が高く左右に平たい形をしています。背びれには鋭い棘があり、大型個体では全身がより黒っぽく見えることがあります。",

    behavior: "沿岸の浅い場所を泳ぎながら海底の餌を探します。警戒心が強い一方、港湾や河口など人の生活圏に近い場所でも見られます。",

    reproduction: "主に春から初夏に産卵します。雄性先熟型の性転換が知られ、若い個体ではオスが多く、成長すると一部がメスへ変化します。",

    identification: "銀灰色から黒色の体とタイ科らしい高い体形が特徴です。キチヌなど近縁種とは腹びれ・尻びれの色や体色などを比較します。",

    nameOrigin: "体全体が黒みを帯びるタイ類であることから『クロダイ』と呼ばれます。関西地方を中心に『チヌ』という名前でもよく知られています。",

    humanRelation: "沿岸釣りを代表する人気魚の一つです。食用としても利用され、養殖も行われています。一方、カキなどの二枚貝を食べるため、養殖場で問題になることもあります。",

    observationPoint: "口元を見てください。海底の貝や小動物を食べられる丈夫な顎を持っています。体色が個体ごとにどれくらい違うか比較するのもおすすめです。",

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
        text: "長年 Turbo cornutus という学名が使われていましたが、分類学的な再検討によって日本のサザエは別種であることが分かり、2017年に Turbo sazae という学名が付けられました。"
      },
      {
        title: "棘がある個体とない個体がいる",
        text: "サザエの殻の形には大きな個体差があります。水流など生息環境の影響を受け、長い棘を持つ個体もいれば、ほとんど棘のない個体もいます。"
      }
    ],

    bodyLength: "殻高は7〜10cm程度になります。",

    distribution: "日本と朝鮮半島周辺に分布します。日本では暖流の影響を受ける各地の岩礁沿岸で広く見られます。",

    habitat: "潮間帯から水深20〜30m程度までの岩礁に生息します。海藻が豊富な場所でよく見られます。",

    diet: "主に海藻を食べます。テングサ、カジメ、アラメなどさまざまな海藻を、歯舌で岩から削り取るように食べます。",

    features: "厚く頑丈な渦巻き状の殻を持ちます。殻には太い隆起があり、個体によっては長い角状の棘が発達します。殻口には硬い石灰質のふたがあります。",

    behavior: "大きな足を使って岩の表面をゆっくり這いながら海藻を食べます。危険を感じると体を殻へ引っ込め、硬いふたで入口を閉じます。",

    reproduction: "雌雄は別々です。神奈川県では6〜8月ごろが産卵期とされ、卵と精子を海中へ放出して体外受精します。孵化した幼生は数日間水中を漂った後、海底へ着底します。",

    identification: "厚い大型の殻と硬い石灰質のふたが特徴です。棘の有無だけでは判断できず、棘のほとんどないサザエもいます。",

    nameOrigin: "和名の語源には諸説があるため、確定的な説明は避けます。現在の学名 sazae は日本語の『サザエ』そのものを種小名として採用しています。",

    humanRelation: "日本を代表する食用巻貝で、刺身、つぼ焼き、煮物などに利用されます。各地で漁獲されるほか、人工種苗を育てて海へ放流する栽培漁業も行われています。",

    observationPoint: "『サザエには必ず角がある』と思わずに見比べてみてください。個体によって棘の長さや数が大きく異なることが分かります。",

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
        text: "白い体の上に赤色の網目や斑点が広がりますが、模様の細かさや赤色の面積は個体によってかなり変化します。"
      },
      {
        title: "カイメンを食べる",
        text: "美しい見た目ですが植物を食べる生物ではありません。海底に付着しているカイメン類を食べる肉食性のウミウシです。"
      }
    ],

    bodyLength: "通常4cm前後ですが、資料によっては約7cmまで成長する個体が知られています。",

    distribution: "日本、紅海、インド洋、西太平洋、オーストラリア周辺など広い暖海域から記録されています。",

    habitat: "岩礁やサンゴ礁などに生息します。餌となるカイメンが付着している場所で見られます。",

    diet: "主にカイメン類を食べます。詳しい餌カイメンの種類については地域や研究によって十分に確定していません。",

    features: "白い体の背面に赤色の網目状・斑点状模様があり、外套膜の縁には黄色い線が入ります。触角と背面後方の二次鰓は赤色から橙赤色です。",

    behavior: "海底や岩の上をゆっくり這って移動します。餌となるカイメンに近づき、歯舌を使って表面を削り取るように食べます。",

    reproduction: "雌雄同体ですが、通常は別の個体と交尾します。受精後は、リボン状の卵塊を渦巻き状に産み付けます。",

    identification: "白地に赤い網目模様と、外套膜外縁の黄色い線が特徴です。非常によく似たGoniobranchus属のウミウシがいるため、模様だけで確実に判断できない場合があります。",

    nameOrigin: "赤色の細かな模様が、日本の染め物に用いられる『更紗模様』を思わせることからサラサウミウシと呼ばれます。",

    humanRelation: "食用にはなりませんが、鮮やかな模様からダイバーや水族館で人気のあるウミウシです。ウミウシ類の色彩や食性を学ぶ題材にもなります。",

    observationPoint: "赤い模様だけを見るのではなく、体の縁を一周する黄色い線を探してください。背中後方の花のような二次鰓も見どころです。",

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
        text: "メスがオスの腹部にある育児嚢へ卵を渡します。オスの育児嚢内で卵が発生し、成長した稚魚をオスが外へ送り出します。"
      },
      {
        title: "尾を海草に巻き付ける",
        text: "普通の魚のような尾びれはなく、細長い尾を海草などへ巻き付けて体を固定できます。流されずに同じ場所へ留まるためにも役立ちます。"
      }
    ],

    bodyLength: "最大で約9cm。成魚では5〜8cm程度の個体が多く見られます。",

    distribution: "日本、中国、朝鮮半島から東南アジア、インド方面までのインド・西太平洋に分布します。",

    habitat: "浅い海のアマモ場などの海草藻場、河口域、砂泥底などに生息します。水深0〜20m程度から記録されています。",

    diet: "肉食性で、ヨコエビ類を中心に、ワレカラ類、カイアシ類、アミ類など非常に小さな甲殻類を吸い込んで食べます。",

    features: "頭部は馬の頭のような形で、口は細長い管状です。体表には鱗の代わりに骨質の輪があり、尾は細長く物へ巻き付けることができます。",

    behavior: "尾を海草などへ巻き付け、体を固定した状態で餌を待ちます。獲物が近づくと、細長い口を急速に動かして水と一緒に吸い込みます。",

    reproduction: "メスが卵をオスの育児嚢へ渡し、オスが卵を保護します。飼育研究では出産は主に早朝に行われ、1回に3〜130個体の稚魚を産出した例があります。主として一夫一妻型のペア関係も確認されています。",

    identification: "小型のタツノオトシゴ類で、体の棘は比較的低く、頭頂部の冠状部も低い形をしています。尾が体に対して非常に長いことも特徴です。",

    nameOrigin: "和名の正確な命名由来は今回確認した主要資料では明確ではありません。学名の種小名 mohnikei はドイツの医師・博物学者Otto Mohnikeに献名されたものです。",

    humanRelation: "国際的にはタツノオトシゴ属全体がCITES附属書IIの対象となっており、国際取引が管理されています。本種はIUCNでVulnerableと評価されています。",

    observationPoint: "尾に注目してください。海草や水槽内の物へ巻き付けていれば、タツノオトシゴ特有の尾の使い方を観察できます。また、餌を吸い込む細長い口にも注目です。",

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
        text: "棘を取り除いた殻の表面には細かな凹凸や溝があります。その様子がサンショウの木の表面に似ることからサンショウウニと呼ばれます。"
      },
      {
        title: "体の上に物を乗せる",
        text: "管足と棘を使って、海藻や小石、貝殻の破片などを体の上へ乗せる行動があります。身を隠したり、強い光を避けたりすることに役立つと考えられています。"
      }
    ],

    bodyLength: "殻の直径は数cm程度になる中型のウニです。",

    distribution: "日本では相模湾から九州、新潟県以南などで見られます。国外ではインド・西太平洋の暖かい海域に広く分布します。",

    habitat: "潮間帯から浅い海に生息し、岩礁、砂地、小石の多い場所などで見られます。",

    diet: "主に海藻や海草などの植物質を食べます。研究では複数の海藻・海草を利用することが確認されています。",

    features: "丸い殻を比較的短い棘が覆っています。棘を取り除いた殻には深い溝や細かな模様があり、独特な表面構造を持っています。",

    behavior: "管足と棘を使って海底を移動します。また、周囲にある海藻や石などを体の上へ運び、自分の体を覆うことがあります。",

    reproduction: "雌雄は別々で、ウニ類らしく卵と精子を海水中へ放出して体外受精します。本種の日本各地での詳しい産卵時期には地域差があるため、特定の月には限定しません。",

    identification: "棘だけでは近縁のウニと見分けにくい場合があります。殻の表面にある深い溝や細かな彫刻が重要な特徴になります。",

    nameOrigin: "鳥羽水族館では、棘を取り除いた殻の表面がサンショウの木肌に似ていることが和名の由来として紹介されています。",

    humanRelation: "生殖腺に刺激性があるため、日本では一般的な食用ウニとして利用されません。発生や生殖などの研究に使われることがあります。",

    observationPoint: "体の上に海藻や小石などを乗せていないか探してみてください。何かを背負っているように見えれば、ウニ自身が管足を使って乗せている可能性があります。",

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
        text: "生きた個体の殻は褐色の毛のような殻皮で覆われます。そのため英名ではHairy tritonと呼ばれています。"
      },
      {
        title: "見た目に反して肉食性",
        text: "ほかの貝類や棘皮動物などを捕食する肉食性の巻貝です。長く伸びる吻を使って餌を食べます。"
      }
    ],

    bodyLength: "殻高は約10cm程度まで成長します。",

    distribution: "インド洋から西太平洋などの暖かい海域に広く分布し、日本では暖流の影響を受ける沿岸で見られます。",

    habitat: "浅い海の岩礁やサンゴ礁、その周辺の海底などに生息します。",

    diet: "肉食性で、ほかの巻貝や二枚貝、ウニ・ヒトデなどの棘皮動物、多毛類などの小動物を利用します。",

    features: "殻はやや細長く、大きな隆起と細かな螺旋状の筋があります。生きた個体では殻表面が褐色の毛状の殻皮で覆われています。",

    behavior: "海底を大きな足で這いながら獲物を探します。餌を見つけると長い吻を伸ばして捕食します。",

    reproduction: "本種固有の日本沿岸での産卵時期や詳しい繁殖行動について、今回確認できた資料では十分な情報がないため断定しません。",

    identification: "殻に並ぶ大きな隆起と、生きた個体で見られる毛状の殻皮が特徴です。古い資料では Cymatium pileare という学名が使われている場合があります。",

    nameOrigin: "和名『シノマキガイ』の詳しい命名原典について、今回確認した主要資料では明確な説明がないため推測では記載しません。",

    humanRelation: "重要な水産物ではありませんが、特徴的な大型の殻を持つため貝類観察の対象になります。",

    observationPoint: "貝殻だけではなく、表面を覆う毛のような殻皮を探してください。標本の殻とはかなり違った姿に見えることがあります。",

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
        text: "管足と棘を使い、海藻、サンゴ片、貝殻などを体の上に乗せます。強い紫外線から体を守る効果があることも研究で示されています。"
      },
      {
        title: "沖縄では重要な食用ウニ",
        text: "生殖腺が食用になり、沖縄では昔から漁獲されてきました。資源減少に対応するため人工的な種苗生産や放流も行われています。"
      }
    ],

    bodyLength: "殻径10cm前後に達する比較的大型のウニです。",

    distribution: "日本では相模湾以南の暖かい海域に見られ、インド洋から西太平洋の熱帯・亜熱帯域に広く分布します。",

    habitat: "浅いサンゴ礁、海草藻場、砂地、小石やサンゴ片の多い場所などに生息します。",

    diet: "主に海藻や海草を食べます。海草藻場では海草の葉を食べることもあります。",

    features: "殻は丸く、棘はガンガゼほど長くありません。棘は白色・橙色などさまざまで、暗紫色の体とのコントラストが目立ちます。",

    behavior: "管足と棘を使って移動し、周囲の海藻や貝殻、石などを体の上へ運びます。この行動は英名Collector urchinの由来にもなっています。",

    reproduction: "雌雄が別々で、卵と精子を海水中へ放出して体外受精します。幼生はしばらく水中を漂った後、海底へ着底して稚ウニになります。",

    identification: "比較的大型で、棘が白色や橙色を帯びる点が特徴です。また、体の上に海藻や小石などを多数乗せていることがあります。",

    nameOrigin: "白っぽい棘を持つ個体が多いことが『シラヒゲ』という名前を連想させますが、正式な命名原典までは今回確認できなかったため断定しません。",

    humanRelation: "食用ウニとして利用されます。沖縄県では資源量の減少を受け、養殖や放流用の人工種苗生産が行われています。叉棘には毒があり、触れると炎症を起こすことがあるため注意が必要です。",

    observationPoint: "棘の色だけでなく、体の上に何を乗せているか見てください。海藻や貝殻を自分で集めている様子を観察できる可能性があります。",

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
        text: "どちらも白い体に黄色い縁取りがありますが、シラライロウミウシの斑点は黒ではなく赤紫色から紫色です。"
      },
      {
        title: "触角と鰓も見分けるポイント",
        text: "背面には2本の触角と、後方に花のような二次鰓があります。本種ではこれらが白っぽく見えることが特徴の一つです。"
      }
    ],

    bodyLength: "体長約1〜4cm程度。",

    distribution: "日本、香港、タイ、フィリピン、ニューカレドニア、オーストラリアなど西太平洋から南太平洋に分布します。",

    habitat: "浅い岩礁や、砂・小石が混じる海底の岩の上などで見られます。",

    diet: "イロウミウシ科の仲間は主にカイメン類を利用しますが、本種について餌生物を種レベルまで確実に特定した資料が限られるため、特定のカイメン名までは記載しません。",

    features: "体の地色は半透明の白色です。背中には赤紫色から紫色の小さな斑点が多数あり、体の縁より少し内側には黄色い帯が走ります。",

    behavior: "海底の岩などの上をゆっくり這って移動します。頭部の触角で水中の化学物質を感知しながら周囲を探ります。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体です。通常は別個体と交尾して受精し、ウミウシ類らしいリボン状の卵塊を産みます。",

    identification: "シロウミウシとの違いが重要です。シロウミウシでは黒い斑点が目立ちますが、本種では斑点が赤紫色から紫色です。",

    nameOrigin: "本種にはかつて Glossodoris shirarae という学名が使われたことがあります。現在の受理名は Goniobranchus tumuliferus です。和名の詳しい命名経緯については推測を避けます。",

    humanRelation: "食用にはなりませんが、色彩の美しさからダイバーや水族館で人気のあるウミウシです。",

    observationPoint: "まず斑点の色を見てください。『黒ではなく紫色』なら、よく似たシロウミウシとの違いが分かりやすくなります。",

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
        text: "見た目は岩に付いた袋のようですが、ホヤ類は脊索動物です。幼生の時期にはオタマジャクシのような姿をし、尾に脊索を持っています。"
      },
      {
        title: "体の中へ海水を通して餌を取る",
        text: "入水孔から海水を取り込み、体内の大きな鰓で植物プランクトンなどをこし取り、残った海水を出水孔から外へ出します。"
      }
    ],

    bodyLength: "体長約5〜7cm程度。",

    distribution: "日本の本州・四国・九州などの内湾で見られます。また、人間活動に伴って世界各地の港湾へ広がったと考えられているホヤです。",

    habitat: "内湾の岩、護岸、桟橋、船底、養殖いかだなどの硬い場所へ付着して生活します。",

    diet: "植物プランクトン、微小な動物プランクトン、細かな有機物などを海水からこし取って食べます。",

    features: "黄白色から灰白色の卵形の体を持ち、表面には深いしわや溝があります。体の上側には海水を吸い込む入水孔と、吐き出す出水孔があります。",

    behavior: "成体は岩などへ固着しているため移動しません。入水孔から大量の海水を取り込み、体内で餌をこし取りながら生活します。刺激を受けると体を縮めて水を勢いよく吐き出します。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体です。卵と精子を海水中へ放出し、受精した卵からオタマジャクシ型の幼生が生まれます。幼生は泳いだ後、基質へ付着して成体へ変態します。",

    identification: "白っぽい卵形の体と、表面にある深いしわが特徴です。2つある水の出入口を確認すると、ホヤらしい体の構造が分かります。",

    nameOrigin: "白色から黄白色の体をしていることからシロボヤと呼ばれます。",

    humanRelation: "桟橋や船底だけでなく、カキやアコヤガイなどの養殖施設へ大量に付着し、養殖作業の邪魔になることがあります。一方、水中の微粒子を大量に濾過する生物でもあります。",

    observationPoint: "体の上にある2つの穴を探してください。一方から水を吸い込み、もう一方から出しているのが分かれば、ホヤの濾過摂食を理解しやすくなります。",

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
        text: "甲羅の後方には白く縁取られた赤紫色の丸い斑紋が3個並びます。これが蛇の目模様に見えることから名前が付いています。"
      },
      {
        title: "最後の脚が泳ぐための『パドル』",
        text: "一番後ろの歩脚は先端が平たくなっています。この脚をオールのように動かし、海底を歩くだけでなく水中を泳げます。"
      }
    ],

    bodyLength: "甲幅約15cm程度まで成長します。",

    distribution: "日本を含むインド・西太平洋に広く分布します。",

    habitat: "沿岸の砂底や砂泥底に生息し、日本では水深30m程度までの場所でもよく見られます。",

    diet: "小型の甲殻類、貝類、魚などの動物質を利用する肉食・雑食性のカニです。",

    features: "甲羅は横に広く、左右には長い棘があります。甲羅後方に並ぶ3個の赤紫色の丸い模様が最大の特徴です。最後の脚は遊泳に適した平たい形になっています。",

    behavior: "砂底を歩くほか、後ろ脚を使って活発に泳ぎます。砂へ体を埋めて隠れることもあります。",

    reproduction: "交尾後、メスは多数の受精卵を腹部の腹肢に付着させて抱卵します。大阪湾の研究では8〜1月に抱卵個体が確認されましたが、繁殖時期は地域によって異なります。",

    identification: "甲羅の後ろに横一列に並んだ3つの赤紫色の丸い斑紋を探してください。ほかのガザミ類と非常に区別しやすい特徴です。",

    nameOrigin: "白く縁取られた丸い斑紋が、伝統的な『蛇の目』模様に見えることからジャノメガザミと呼ばれます。",

    humanRelation: "食用になり、地域によって漁獲されます。三重県では茹でガニや味噌汁などに利用されています。",

    observationPoint: "まず甲羅の3つの丸い模様を探してください。次に最後の脚を見ると、ほかの歩脚とは違って平たい『泳ぐための脚』になっています。",

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
        text: "外洋に面した岩礁で生活し、危険を感じると岩の表面を非常に素早く移動して隙間へ逃げ込みます。"
      },
      {
        title: "昔とは属名が変わった",
        text: "以前は Plagusia dentipes と呼ばれていましたが、2010年の分類学的研究によって現在は Guinusia dentipes とされています。"
      }
    ],

    bodyLength: "甲幅約4.5〜5cm程度。",

    distribution: "日本では東北地方以南から九州、琉球列島などで見られ、朝鮮半島、台湾などにも分布します。",

    habitat: "外洋に面した岩礁海岸を好み、潮間帯から浅い海で見られます。",

    diet: "雑食性で、岩についた海藻や小型の動物などさまざまな餌を利用します。",

    features: "甲羅は平たく丸みのある四角形で、暗赤褐色をしています。甲羅の前側には4個の鋸歯状の突起があり、歩脚にも棘状の構造が並びます。",

    behavior: "波の当たる岩礁をすばやく移動します。岩の隙間へ入り込むと、平たい体を利用して外敵から身を隠します。",

    reproduction: "雌雄は別々です。メスは受精した卵を腹部に抱えて保護します。本種では初夏に大型のメガロパ幼生が岩礁周辺で確認されています。",

    identification: "赤褐色で平たい甲羅と、長く頑丈な歩脚が特徴です。甲羅の前側縁には鋸の歯のような突起が並びます。",

    nameOrigin: "『ショウジンガニ』という和名の詳しい語源には複数の説明があるため、確実な由来としては記載しません。",

    humanRelation: "地方によって食用にされ、茹でたり味噌汁にしたりして利用されることがあります。",

    observationPoint: "じっとしている姿だけでなく、動き出した瞬間にも注目してください。岩の上をカニとは思えないほど素早く走ることがあります。",

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
        text: "テトロドトキシンやサキシトキシンなどの強い神経毒を持つ個体が確認されています。食用には絶対にできません。"
      },
      {
        title: "触っただけで毒に当たるカニではない",
        text: "毒は主に体内に含まれています。普通に触れただけで毒が皮膚から入るタイプではありませんが、生き物なので不用意に触らないことが基本です。"
      }
    ],

    bodyLength: "甲幅は約7〜10cm程度に達します。",

    distribution: "日本の暖かい沿岸を含む、インド・西太平洋の熱帯・亜熱帯海域に広く分布します。",

    habitat: "浅い岩礁やサンゴ礁に生息し、岩の隙間などへ隠れていることがあります。",

    diet: "雑食性とされ、小型の底生生物や動物の死骸、植物質などさまざまなものを利用します。",

    features: "甲羅は丸く大きく盛り上がり、表面が非常になめらかです。緑褐色や褐色を基調に、白色や黄色などの複雑な模様があります。",

    behavior: "岩礁の隙間などを利用しながら生活します。夜間に活動することが多いものの、昼間に巣穴の外で見られる場合もあります。",

    reproduction: "雌雄は別々で、メスは受精卵を腹部に抱えて保護します。本種固有の日本各地での繁殖時期については十分な資料がないため断定しません。",

    identification: "丸みの強い滑らかな甲羅が特徴です。しかし毒の有無を見た目から判断することはできません。",

    nameOrigin: "丸く盛り上がった甲羅が饅頭のように見え、さらに表面が滑らかなことからスベスベマンジュウガニと呼ばれます。",

    humanRelation: "食べてはいけない有毒ガニです。日本産個体からテトロドトキシン、サキシトキシンなどが検出されています。加熱して安全になるとは考えないでください。",

    observationPoint: "名前通りの丸く滑らかな甲羅を観察してください。かわいらしい外見と強い毒を持つというギャップも、この生物の重要な特徴です。",

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
        text: "体全体が上から押しつぶしたように非常に平たく、幅広い姿をしています。この独特な体形が和名の由来です。"
      },
      {
        title: "触角が大きな板になっている",
        text: "イセエビのような長い触角は持たず、第2触角が幅広く平たい板状に変化しています。セミエビ類を見分ける重要な特徴です。"
      }
    ],

    bodyLength: "通常は体長約15cm、大型個体では約20cmに達します。",

    distribution: "日本沿岸を中心とした西太平洋に分布します。模式標本は東京湾から得られています。",

    habitat: "外洋の影響を受ける岩礁域に生息します。水深10〜30m程度で見られることが多く、WoRMSでは浅海から約20mまでの記録が示されています。",

    diet: "本種だけを対象にした詳細な食性資料が限られているため、特定の餌を主食として断定しません。海底を歩いて餌を探す底生性の甲殻類です。",

    features: "体は非常に幅広く平たく、硬い甲羅には多数の小さな粒状の凹凸や短い毛があります。頭胸甲の左右には鋭い棘が並びます。",

    behavior: "岩礁の海底を歩いて生活します。平たい体は岩の下や狭い隙間へ入り込むのにも適しています。",

    reproduction: "雌雄は別々です。メスは受精した卵を腹部に抱えて保護します。孵化した幼生はフィロソーマと呼ばれる透明で平たい姿となり、しばらく海中を漂います。",

    identification: "非常に平たく幅広い体と、板のように変化した大きな触角が特徴です。セミエビやコブセミエビとは甲羅や側縁の形を比較して識別します。",

    nameOrigin: "平たく幅広い体が日本の履物である『草履』に似ていることからゾウリエビと呼ばれます。",

    humanRelation: "食用になり、味のよいエビとして知られます。ただし漁獲量が多くないため、一般市場で頻繁に見られる水産物ではありません。",

    observationPoint: "イセエビと触角を比較してみてください。長い棒状の触角ではなく、大きく平たい板になっていることが一目で分かります。",

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
        text: "日本を含む北西太平洋が原産と考えられていますが、船舶やカキ養殖などに伴って世界各地へ移動し、現在では多くの国の港や内湾で見られます。"
      },
      {
        title: "体をちぎって増えることができる",
        text: "有性生殖だけでなく、体の一部が分かれ、その断片から新しい個体を作る無性生殖も行います。"
      }
    ],

    bodyLength: "日本の内湾で見られる個体は直径1cm未満のことが多い小型種です。大きな個体では触手を広げた直径が数cmになることもあります。",

    distribution: "日本を含む北西太平洋が原産と考えられています。現在ではヨーロッパ、北米、南米、オセアニアなど世界各地へ移入されています。",

    habitat: "内湾や河口、港などに多く、カキ殻、フジツボの間、岩、護岸、杭などの硬い場所へ付着して生活します。",

    diet: "触手の刺胞で水中の小型動物やプランクトンなどを捕らえ、口へ運んで食べます。",

    features: "体は濃いオリーブ色から緑褐色で、体の縦方向に橙色や黄色の線が走ります。口の周囲には多数の細い触手があります。",

    behavior: "基部を岩などへ付着させて生活します。刺激を受けると触手を縮めるほか、体壁から白い糸状の防御器官を出すことがあります。",

    reproduction: "有性生殖に加え、体の一部が分離し、その断片から新しい個体が再生する無性生殖を行います。この能力が短期間で個体数を増やせる理由の一つです。",

    identification: "オリーブ色の体に入る橙色の縦縞が最大の特徴です。日本の古い資料や水族館資料では Haliplanella lineata という学名が使われていますが、現在の受理名は Diadumene lineata です。",

    nameOrigin: "体の側面に橙色や黄色の縦縞が入ることからタテジマイソギンチャクと呼ばれます。",

    humanRelation: "船舶や養殖されたカキなどに付着して世界各地へ運ばれたと考えられており、海外では外来種として研究されています。日本では内湾の身近なイソギンチャクです。",

    observationPoint: "非常に小さいので、まずオレンジ色の縦線を探してください。刺激を与えずに観察すると、多数の細い触手を広げている姿を見ることができます。",

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
        text: "腕の縁に並ぶ棘などを使って砂へ潜ります。昼間は砂の中に隠れ、夜になると表面へ出てくることがあります。"
      },
      {
        title: "貝を丸ごと食べることがある",
        text: "二枚貝や小型の巻貝など、砂の中に暮らす小動物を捕食します。小さな獲物では丸ごと口へ取り込んで食べることがあります。"
      }
    ],

    bodyLength: "腕の中心から先端まで約7cm程度になる個体が知られています。",

    distribution: "日本では房総半島以南で確認され、インド・西太平洋の熱帯・亜熱帯域に広く分布します。",

    habitat: "浅い海の砂底や砂泥底を主な生活場所とします。砂の表面だけでなく、砂の中へ潜っていることもあります。",

    diet: "肉食性で、砂の中に生息する二枚貝、巻貝、ゴカイ類などの小型無脊椎動物を捕食します。",

    features: "扁平な星形の体を持ち、通常5本の腕があります。腕の左右の縁には櫛のように並んだ棘があり、『トゲモミジガイ』という名前をイメージしやすい特徴です。",

    behavior: "砂の上を管足で移動し、棘を利用して体を砂の中へ潜らせます。夜間に砂から出て餌を探すことがあります。",

    reproduction: "雌雄は別々で、卵と精子を海中へ放出して体外受精します。本種では浮遊幼生を経て、やがて海底生活へ移ります。",

    identification: "モミジガイ類の中でも、腕の縁に発達する多数の棘が重要な特徴です。正確な同定では棘の形や配置なども確認します。",

    nameOrigin: "モミジガイの仲間で、腕の縁に目立つ棘を持つことから『トゲモミジガイ』と呼ばれます。",

    humanRelation: "一般的な食用生物ではありません。また、本種からテトロドトキシンが検出された研究例があるため、食用には適しません。",

    observationPoint: "腕の縁をよく見てください。小さな棘が櫛のように並んでいます。砂がある場合は、少しずつ体を潜らせる様子にも注目です。",

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
        text: "太く目立つ棘の間に、細く鋭い棘があります。細い棘には毒があり、刺さると痛みを生じるため注意が必要です。"
      },
      {
        title: "名前の『トックリ』は体の上にある部分",
        text: "体の上側にある肛門周辺の部分が徳利のような形に伸びることが、名前の由来になっています。"
      }
    ],

    bodyLength: "殻径は10cm以上になることがあり、SeaLifeBaseでは最大約15cmが示されています。長い棘を含めるとさらに大きく見えます。",

    distribution: "インド洋から西太平洋に広く分布し、日本から南太平洋の島々まで確認されています。",

    habitat: "浅いサンゴ礁、転石の周辺、サンゴの隙間などに生息します。水深90mまで記録がありますが、浅いサンゴ礁でよく見られます。",

    diet: "主に海藻を食べます。岩やサンゴ表面に生えた藻類を削り取るように利用します。",

    features: "太さの異なる2種類の棘を持ちます。太い棘には白色と褐色などの縞模様が見られる個体があり、細い棘はより鋭く毒を持ちます。",

    behavior: "岩やサンゴの隙間へ入り、棘を外側へ広げて身を守ります。周囲の刺激に対して棘の向きを変えることがあります。",

    reproduction: "雌雄は別々で、ウニ類らしく卵と精子を海中へ放出して体外受精します。本種の日本での詳しい繁殖時期については断定しません。",

    identification: "太い棘と細い棘が混在する点が特徴です。ガンガゼモドキと似ますが、本種では太い棘の表面にある細かな棘が帯状に並ぶことなどが識別点になります。",

    nameOrigin: "肛門付近に伸びる部分が徳利のような形になることから『トックリガンガゼモドキ』と呼ばれます。",

    humanRelation: "細い棘には毒があり、刺傷事故につながる可能性があります。海中で見つけても素手で触らないことが重要です。",

    observationPoint: "棘をすべて同じものとして見ず、太い棘とその間にある細い棘を比較してください。体の上にある徳利型の部分も見つけられるか探してみましょう。",

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
        text: "左右の大きなはさみを前へ折りたたむと、顔や体の前面を覆うことができます。カラッパ類らしい非常に特徴的な姿です。"
      },
      {
        title: "強力なはさみで貝を食べる",
        text: "カラッパ類は強いはさみを使って巻貝などの硬い殻を壊し、中の軟らかい部分を食べることができます。"
      }
    ],

    bodyLength: "甲幅は10cm前後になる中型から大型のカニです。",

    distribution: "日本を含むインド・西太平洋の暖かい海域に広く分布します。",

    habitat: "主に砂底や砂泥底に生息します。水深10〜100m程度から多く記録されています。",

    diet: "肉食性で、巻貝や二枚貝など硬い殻を持つ小動物を捕食します。",

    features: "甲羅は大きく丸みを帯び、後方の左右が張り出します。淡い体色に赤褐色の模様や横方向の線が入り、大きく平たいはさみ脚を持ちます。",

    behavior: "砂へ体を潜らせて隠れることがあります。危険を感じると大きなはさみを体の前へ折りたたみ、防御に利用します。",

    reproduction: "雌雄は別々で、メスは受精した卵を腹部に抱えて保護します。本種固有の日本での繁殖時期については十分な資料がないため断定しません。",

    identification: "甲羅後方の大きな張り出しと、赤褐色の横模様が特徴です。同属のコブカラッパなどとは甲羅表面の凹凸や模様を比較します。",

    nameOrigin: "甲羅に見られる虎斑を思わせる模様が『トラフ』という和名に関係しています。",

    humanRelation: "底引き網などで混獲されることがあります。地域によって利用されることもありますが、日本では主要な食用ガニではありません。",

    observationPoint: "前から見てみてください。左右の大きなはさみを閉じると、顔がほとんど隠れるような形になることが分かります。",

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
        text: "多くのハゼを海底にいる魚としてイメージしますが、ニクハゼは内湾などで海底から少し離れて群れで泳ぐ姿も見られます。"
      },
      {
        title: "子どもの主食は小さなプランクトン",
        text: "仔魚や稚魚ではカイアシ類などの動物プランクトンを多く食べます。成長すると多毛類など、より幅広い餌も利用するようになります。"
      }
    ],

    bodyLength: "最大で全長約7cm。一般には5cm前後の小型魚です。",

    distribution: "北海道から九州までの日本沿岸に分布し、国外ではロシア沿海州、朝鮮半島、中国沿岸など北西太平洋で確認されています。",

    habitat: "内湾、アマモ場、河口周辺などに生息します。幼魚は干潟などでも見られ、神奈川県では横浜市の平潟湾などから確認されています。",

    diet: "仔魚・稚魚ではカイアシ類などの動物プランクトンを主に食べます。成長すると多毛類などの底生動物や、小魚の仔魚なども利用します。",

    features: "細長く左右にやや平たい体を持ち、口は比較的大きく開きます。稚魚では肉のような淡い桃色に見えることがあります。",

    behavior: "内湾の海底近くを群れで泳ぐことがあります。成長段階によって利用する場所が変化し、仔稚魚は干潟や浅い沿岸域を成育場所として利用します。",

    reproduction: "本種の詳しい繁殖行動については、今回確認した主要資料では十分な情報が得られなかったため、近縁のウキゴリ属の繁殖方法をそのまま記載しません。",

    identification: "細長い体と大きな口が特徴です。ほかのウキゴリ属魚類と似ているため、正確な同定ではひれや鱗、体の模様なども確認します。",

    nameOrigin: "稚魚が赤みの強い淡い桃色をしており、『肉』のように見えることがニクハゼという和名に関係するとされています。",

    humanRelation: "大型の食用魚ではありませんが、アマモ場や干潟を利用する小型魚として、内湾生態系を調べる研究対象になっています。",

    observationPoint: "水槽の底だけを探さず、海底から少し離れた位置も見てください。小型の個体がまとまって浮くように泳いでいることがあります。",

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
        text: "モミジガイは Astropecten 属ですが、ニセモミジガイは Ctenopleura 属です。外見が似ていても分類上は別の属になります。"
      },
      {
        title: "巻貝を食べていた個体が見つかっている",
        text: "紀伊水道の水深約100mから採集された個体が、自分の中心部とほぼ同じ大きさの巻貝を捕食していた事例が報告されています。"
      }
    ],

    bodyLength: "大きさには個体差があります。信頼できる資料で統一された最大サイズを確認できなかったため、数値は断定しません。",

    distribution: "日本周辺を含む北西太平洋から記録されています。日本では紀伊水道などから採集記録があります。",

    habitat: "海底で生活する底生性のヒトデです。水深100m前後から採集された記録もあります。",

    diet: "肉食性で、巻貝を捕食した事例が実際に報告されています。ただし、本種全体の餌構成については研究例が少ないため、特定の動物だけを主食とはしません。",

    features: "通常5本の腕を持つ扁平なヒトデです。腕は付け根側が幅広く、先端へ向かって急に細くなります。背面には多数の小さな構造が並びます。",

    behavior: "海底を管足を使って移動します。本種固有の詳しい日周行動については研究例が少ないため、夜行性などとは断定しません。",

    reproduction: "雌雄による有性生殖を行います。本種では発生過程について研究された例がありますが、自然下での産卵時期について十分な資料がないため具体的な月は記載しません。",

    identification: "モミジガイ類と似ていますが、腕の形や背面の骨板などが異なります。正確な同定には体表の細かな構造を確認する必要があります。",

    nameOrigin: "モミジガイによく似た姿を持つ別属のヒトデであることから、ニセモミジガイと呼ばれます。",

    humanRelation: "一般的な食用生物ではありません。生態情報が比較的少なく、分類や捕食行動などの研究対象となっています。",

    observationPoint: "トゲモミジガイなどと見比べるのがおすすめです。腕の縁や背面の構造がどのように違うのかを観察してみてください。",

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
        text: "二次鰓の後方に大きく盛り上がった突起があります。ここには餌から得た防御物質が集められ、外敵への防御に役立つと考えられています。"
      },
      {
        title: "色の個体差が非常に大きい",
        text: "黄色、橙色、赤色、紫色などさまざまな色が現れます。同じ種類とは思えないほど模様が異なる個体もいます。"
      }
    ],

    bodyLength: "大型になるウミウシで、体長15cmほどに達する個体も確認されています。",

    distribution: "日本を含むインド・西太平洋の熱帯・亜熱帯域に広く分布します。",

    habitat: "サンゴ礁や岩礁に生息し、餌となるカイメン類がある場所を這って生活します。",

    diet: "肉食性で、主にカイメン類を食べます。Dysidea属のカイメンを利用することが報告されています。",

    features: "大型で厚みのある体を持ち、外套膜の左右には大きな張り出しがあります。背面後方には花のような二次鰓と、そのさらに後ろに大きな突起があります。",

    behavior: "岩やサンゴ礁の表面をゆっくり這って移動し、触角で周囲の化学物質を感知しながら餌を探します。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体です。ただし通常は別個体同士で交尾し、受精後にリボン状の卵塊を産みます。",

    identification: "体色だけでは個体差が大きいため、二次鰓の後ろにある大きな突起や、外套膜の形なども合わせて確認します。",

    nameOrigin: "非常に鮮やかで複雑な体色が、美しい織物である『錦』を思わせることからニシキウミウシと呼ばれています。",

    humanRelation: "食用にはなりませんが、大型で色鮮やかなことからダイバーに人気があります。餌由来の化学物質を防御へ利用する研究対象にもなっています。",

    observationPoint: "色だけでなく、背中の後ろにある大きな突起を探してください。さらにその手前にある花のような二次鰓と比較すると体の構造が分かりやすくなります。",

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
        text: "日本本土の個体は長く Mespilia globulus とされていましたが、分類学的な再検討により Mespilia levituberculatus という別種として扱われるようになりました。"
      },
      {
        title: "体の上に物を乗せる",
        text: "管足を使って海藻などを体の上へ貼り付ける行動が見られます。体を目立ちにくくしたり、光から守ったりする働きが考えられます。"
      }
    ],

    bodyLength: "殻径はおよそ3〜5cm程度。比較的小型のウニです。",

    distribution: "日本では九州南部から相模湾、日本海側では新潟県周辺まで確認されています。",

    habitat: "潮下帯の岩礁、石の下、砂泥底などで確認されています。日中は岩陰などに隠れていることがあります。",

    diet: "主に海藻などを食べると考えられます。詳しい自然下の餌構成については資料が限られるため、特定の海藻種までは断定しません。",

    features: "殻は比較的小型で丸みが強く、他のウニより球形に近く見えます。棘や管足がある部分と、棘の少ない部分が帯状に並びます。",

    behavior: "管足と棘で海底を移動します。また、海藻などの物体を体の上へ乗せる行動があります。",

    reproduction: "雌雄は別々で、卵と精子を海水中へ放出して体外受精すると考えられます。本種固有の詳しい繁殖時期については十分な情報がないため断定しません。",

    identification: "南西諸島などに生息するコシダカウニ Mespilia globulus とよく似ています。現在、日本本土側の個体ではニッポンコシダカウニとして区別されることが重要です。",

    nameOrigin: "従来『コシダカウニ』として扱われていた日本本土の個体群が別種として整理されたことを受け、『ニッポンコシダカウニ』という標準和名が使われています。",

    humanRelation: "一般的な食用ウニではありません。近年分類が整理された生物であり、日本沿岸のウニ類の多様性を理解するうえでも興味深い種類です。",

    observationPoint: "体の上に海藻などを乗せていないか見てください。また、ほかの小型ウニと比べて殻が丸く球形に近い点にも注目です。",

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
        text: "普通のヒトデは管足を中心にゆっくり移動しますが、クモヒトデ類は5本の細長い腕を大きく動かして這うため、かなり素早く移動できます。"
      },
      {
        title: "最初は日本固有種だと思われていた",
        text: "神奈川県三崎をもとに記載され、日本固有種とも考えられていましたが、その後韓国や中国南部からも確認されています。"
      }
    ],

    bodyLength: "中央の円盤部分は直径約2cm。そこから5本の細長い腕が伸び、全体では10cm程度になることがあります。",

    distribution: "日本海沿岸と銚子以南の太平洋岸に分布し、国外では韓国、中国南部でも確認されています。",

    habitat: "岩礁の潮間帯などに生息し、転石の下をひっくり返すと見つかることがあります。",

    diet: "本種固有の詳しい餌構成については十分な資料を確認できなかったため、特定の餌を主食として断定しません。",

    features: "中央に丸い盤があり、そこから5本の細長い腕が伸びます。体は暗褐色で、腕には濃淡の横縞があります。盤の背面は細かな鱗状の板で覆われています。",

    behavior: "細長い腕を左右へ大きく動かし、海底を這うように素早く移動します。普段は石の下など暗い場所に隠れていることがあります。",

    reproduction: "雌雄は別々で、卵と精子を海中へ放出して体外受精します。発生の途中では樽形の『ビテラリア幼生』となり、その後変態して海底生活へ移ります。",

    identification: "暗褐色の体と腕の横縞が特徴です。よく似たトウメクモヒトデとは、中央の盤の背面が細かな鱗状の板で覆われることなどで区別できます。",

    nameOrigin: "日本で記載された代表的なクモヒトデの一種であることからニホンクモヒトデと呼ばれています。",

    humanRelation: "食用生物ではありませんが、日本の磯で比較的身近に観察できるクモヒトデです。また、発生過程が研究されている数少ないクモヒトデ類の一つです。",

    observationPoint: "腕だけでなく中央の丸い部分を見てください。可能であれば腕の濃淡の横縞も確認しましょう。動き始めたときの速さもヒトデとの大きな違いです。",

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
        text: "夏になると軍配のような形の卵嚢を産みます。この卵嚢はサカサホオズキやグンバイホオズキと呼ばれ、かつては玩具として利用されました。"
      },
      {
        title: "殻が非常に細長い",
        text: "名前の通り、一般的な巻貝よりも殻の塔が高く、先端から水管部分まで細長い紡錘形をしています。"
      }
    ],

    bodyLength: "殻高は最大約14cm、殻径は約4〜5cmになります。",

    distribution: "北海道南部から九州までの日本沿岸に分布します。",

    habitat: "水深10〜50m程度の砂底や砂泥底に生息します。",

    diet: "雑食性で、動物の死骸を含む有機物などを食べることが知られています。",

    features: "殻は細長い紡錘形で、螺塔が高く伸びます。殻の下側には細く長い水管溝があり、生きている個体では黄褐色のビロード状の殻皮に覆われます。",

    behavior: "砂泥底を大きな足でゆっくり移動しながら餌を探します。生きた個体では殻の表面にカイメンなどが付着していることもあります。",

    reproduction: "主に夏に産卵します。メスは黄白色で革質の軍配形の卵嚢をまとめて産み付けます。この特徴的な卵嚢はサカサホオズキと呼ばれます。",

    identification: "非常に高い螺塔と、細長く伸びる水管部分が特徴です。似たイトマキナガニシなどとは殻の大きさや彫刻を比較します。",

    nameOrigin: "非常に細長い殻を持つニシ類であることから『ナガニシ』と呼ばれます。漢字では『長辛螺』と表記されます。",

    humanRelation: "卵嚢はかつて『海ほおずき』として縁日などで売られ、口に入れて音を出す玩具として利用されました。殻も貝細工に使われた歴史があります。",

    observationPoint: "普通の巻貝と殻の縦横比を比較してください。下側へ非常に長く伸びる水管部分を見ると、ナガニシらしい形がよく分かります。",

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
        text: "オオヘビガイなどの空になった殻の内部へメスが卵を産み付けることがあります。産卵後はオスがその場所を守ります。"
      },
      {
        title: "オスが卵へ水を送る",
        text: "オスは巣に残り、尾びれなどを動かして卵へ新鮮な海水を送る『ファニング』を行います。"
      }
    ],

    bodyLength: "最大で全長約6cm。小型のイソギンポ類です。",

    distribution: "北西太平洋に分布し、日本南部から朝鮮半島、中国の山東半島周辺まで確認されています。",

    habitat: "浅い岩礁域に生息します。潮だまりや岩の隙間、貝殻などの小さな穴を利用します。",

    diet: "成魚は岩などの表面に付着する藻類や、細かな有機物を食べます。",

    features: "細長い体を持ち、体の前半には暗色の縦帯、後半には黄色味が目立ちます。繁殖期のオスでは普段と異なる婚姻色が現れます。",

    behavior: "浅い岩礁で、穴や隙間の周囲を生活場所として利用します。繁殖期のオスは巣となる穴を守り、他の個体が近づくと追い払います。",

    reproduction: "卵生です。メスは岩穴や空の貝殻などの内側へ粘着性の卵を産み付けます。オスは巣に残って卵を守り、尾びれを使って卵へ水を送ります。",

    identification: "黄色味を帯びた細長い体と横方向の模様が特徴です。頭部にはイソギンポで見られるような大きな皮弁がなく、体の模様などを合わせて識別します。",

    nameOrigin: "『ナベカ』という独特な和名の詳しい命名由来については、今回確認した信頼できる主要資料では確定できなかったため記載しません。",

    humanRelation: "食用として利用される魚ではありませんが、磯の浅い場所で繁殖行動やオスによる卵保護を観察できる興味深い魚です。",

    observationPoint: "岩の表面だけでなく、小さな穴や空の貝殻を見てください。繁殖期なら穴からオスが顔を出していたり、内部の卵を守っていたりする可能性があります。",

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
        text: "古い資料では Asterina batheri とされていますが、現在は Aquilonastra batheri が受理名です。"
      },
      {
        title: "小さなヒトデ",
        text: "大型のヒトデではなく、数cmほどの小型種です。浅い岩礁や石の周辺を探すと見つかることがあります。"
      }
    ],

    bodyLength: "腕を含めた大きさは数cm程度で、新潟大学の記録では約3〜5cmの個体が紹介されています。",

    distribution: "日本沿岸から記録されています。BISMaLでは相模湾周辺などにも多数の記録があります。",

    habitat: "潮間帯から水深数mほどの浅い岩礁や、石が多い海底などに生息します。干潟の砂や小石が混じった場所からも確認されています。",

    diet: "本種だけを対象とした詳しい自然下の食性について、信頼できる資料が十分に確認できないため、特定の餌は断定しません。",

    features: "体は扁平で、一般的には5本の短い腕を持ちます。イトマキヒトデより小型で、腕と中央部の境界が比較的なだらかな星形をしています。",

    behavior: "岩や石の表面・裏側などを管足を使ってゆっくり移動します。大きなヒトデと比べると小型なので、岩の隙間などに入り込みやすい体形です。",

    reproduction: "本種固有の繁殖時期や繁殖方法の詳細については、今回確認した主要資料では十分な情報が得られなかったため断定しません。",

    identification: "小型のイトマキヒトデ科ですが、近縁種も多いため外見だけでの確実な種同定が難しい場合があります。現在の受理名が Aquilonastra batheri である点も重要です。",

    nameOrigin: "『ヌノメ』という和名の具体的な命名由来について、今回確認した主要資料では確実な説明が得られなかったため断定しません。",

    humanRelation: "一般的な食用生物ではありません。日本の浅い岩礁や干潟で見られる小型ヒトデとして、磯の生物観察の対象になります。",

    observationPoint: "イトマキヒトデと大きさを比較してみてください。小さなヒトデなので、水槽内の石や岩の隙間も探すのがおすすめです。",

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
        text: "背びれの鋭い棘には毒があります。全長10cmほどの小型魚ですが、刺されると強い痛みを生じるため注意が必要です。"
      },
      {
        title: "夕方に2匹で泳ぎ上がって産卵する",
        text: "繁殖期にはオスとメスが並んで海底から中層へ泳ぎ上がり、卵と精子を水中へ放出する産卵行動が知られています。"
      }
    ],

    bodyLength: "最大で全長約10cm。",

    distribution: "日本では青森県周辺から九州南岸まで広く見られ、朝鮮半島や台湾周辺にも分布します。",

    habitat: "浅い海のアマモ場、岩礁、潮だまりなどに生息します。",

    diet: "小型の甲殻類など、海底にいる小さな動物を捕食します。",

    features: "体は左右に平たく、赤褐色・茶褐色など個体によって色が異なります。背びれが頭の近くから長く続き、その棘には毒があります。",

    behavior: "夜行性で、昼間は海藻や岩などの陰でじっとしていることが多い魚です。夜になると活動して小動物を探します。",

    reproduction: "日本では主に6〜8月ごろに繁殖します。夕方、ペアになった雌雄が中層へ上昇しながら放卵・放精します。",

    identification: "小型で体高があり、頭の上から続く大きな背びれが特徴です。第5〜9背びれ棘付近には黒い斑紋が見られます。",

    nameOrigin: "『ハオコゼ』の詳しい語源については複数の説明があるため、確実な由来としては記載しません。",

    humanRelation: "食用として一般的に利用される魚ではありません。釣りでは外道として掛かることがあり、背びれの毒棘による刺傷に注意が必要です。",

    observationPoint: "小さい魚ですが、背びれをよく見てください。長い棘が何本も並んでいます。水槽の底や海藻の陰でじっとしている個体も探してみましょう。",

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
        text: "茶褐色の体の中央付近に、一本の白っぽい帯があります。英名のSinglebar devilも、この一本の帯を表しています。"
      },
      {
        title: "卵を守るのはオス",
        text: "岩などへ粘着性の卵を産み付け、産卵後はオスが卵を守りながら、ひれを使って新鮮な水を送ります。"
      }
    ],

    bodyLength: "最大で全長約12cm。",

    distribution: "紅海・東アフリカから太平洋の島々までインド太平洋に広く分布し、北は日本、南はオーストラリアまで見られます。",

    habitat: "波当たりの強い非常に浅い岩礁やサンゴ礁を好みます。水深0〜6m程度から記録されています。幼魚は潮だまりでも見られます。",

    diet: "主に岩などの表面に生える底生藻類を食べます。小型の動物質を利用することもあります。",

    features: "成魚は茶褐色で、体の中央に白色から淡色の横帯があります。幼魚では白帯の後ろに大きな黒い眼状斑が目立ちます。",

    behavior: "昼間に活動し、浅い岩礁で藻類をついばみます。縄張り性が強く、ほかの魚を追い払う行動も見られます。",

    reproduction: "卵生で、繁殖時にはペアになります。卵は海底の岩などへ付着し、オスが孵化まで卵を守って水を送ります。",

    identification: "茶褐色の体中央にある一本の白帯が特徴です。幼魚では、その後ろにある黄色く縁取られた黒い斑紋も大きな識別点です。",

    nameOrigin: "体側に一本の白い帯があることから『白線スズメダイ』と呼ばれます。",

    humanRelation: "食用として重要な魚ではありませんが、浅い磯やサンゴ礁で観察でき、観賞魚として飼育されることもあります。",

    observationPoint: "まず白い帯を探してください。小さな個体なら、そのすぐ後ろに黒い丸い模様が残っているかを見ると成長段階も分かります。",

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
        text: "生きているときには外套膜という軟らかい体の一部を殻の表面へ広げます。この働きによって、タカラガイ特有のなめらかな光沢のある殻が保たれます。"
      },
      {
        title: "白い点が雪のように見える",
        text: "濃い褐色の殻に多数の小さな白い斑点が散らばります。この模様が『花丸雪』という美しい和名につながっています。"
      }
    ],

    bodyLength: "殻長は約3〜4cm程度。大型個体では4cmを超えることがあります。",

    distribution: "南日本を含むインド・太平洋の暖かい海域に広く分布します。日本では房総半島以南などで見られます。",

    habitat: "外洋の影響を受ける潮間帯から浅い岩礁・サンゴ礁などに生息します。",

    diet: "本種固有の自然下での詳しい食性について、信頼できる資料を十分確認できなかったため、特定の餌を断定しません。",

    features: "殻は厚く、丸みのある卵形です。背面は褐色から黒褐色で、多数の白い小斑点があります。殻表面には非常に強い光沢があります。",

    behavior: "潮が引いている時間帯には岩のくぼみや石の下などに隠れ、海水に覆われると移動する様子が知られています。",

    reproduction: "本種固有の詳しい産卵時期や卵保護について、今回確認した主要資料では十分な情報が得られなかったため断定しません。",

    identification: "濃い褐色の背面に白い小斑点が多数あり、殻の側面は濃色になります。現在WoRMSでは Monetaria caputserpentis が受理名です。",

    nameOrigin: "褐色の地に白い斑点が散らばる模様が雪を思わせることから『花丸雪』と呼ばれるようになったとされています。",

    humanRelation: "光沢のある美しい殻から、古くから貝殻収集や玩具などに利用されてきました。地域によっては食用にされることもあります。",

    observationPoint: "空の殻だけでなく、生きた個体では外套膜にも注目です。軟らかい体が光沢のある殻の表面を覆っていることがあります。",

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
        text: "古い図鑑では Cypraea miliaris や Erosaria miliaris と書かれますが、現在WoRMSでは Naria miliaris が受理名です。"
      },
      {
        title: "名前の由来は『初雪』",
        text: "黄褐色の殻に、輪郭のややぼやけた白い点が多数散らばります。その姿が初雪を思わせることから名付けられました。"
      }
    ],

    bodyLength: "殻長は約4〜4.5cm。個体によっては5cmを超えることがあります。",

    distribution: "日本では房総半島以南などで見られ、インド・西太平洋の暖かい海域に広く分布します。",

    habitat: "潮間帯から浅い海の岩礁域などで見られ、転石の下や岩のくぼみなどを利用します。",

    diet: "本種固有の詳しい自然下での食性について十分な資料を確認できなかったため、特定の餌は断定しません。",

    features: "殻は丸みのある卵形で、黄褐色から褐色の地色に多数の白い斑点があります。腹側は白っぽく、細長い殻口には多数の歯があります。",

    behavior: "岩や石の下などを隠れ場所として利用します。生きた個体ではタカラガイ類特有の外套膜が殻表面を覆うことがあります。",

    reproduction: "本種固有の産卵期や繁殖行動について、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "黄褐色の地に散る白い斑点が特徴です。ハナマルユキとは殻全体の色や白斑の入り方が異なります。",

    nameOrigin: "内山柳太郎によって命名され、殻に散る白い模様を『初雪』に見立てた名称とされています。",

    humanRelation: "主要な食用貝ではなく、光沢のある美しい殻から貝殻収集の対象として知られています。",

    observationPoint: "ハナマルユキと並んでいる場合は、殻の地色と白斑を比較してください。ハツユキダカラは淡い地色に雪が散ったような模様が目立ちます。",

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
        text: "殻の周囲には管のような形をした棘が複数列に並びます。普通のサザエとはかなり違った外見です。"
      },
      {
        title: "昔とは属名が変わっている",
        text: "古い資料では Galeoastraea modesta とされることがありますが、現在WoRMSでは Bolma modesta が受理名です。"
      }
    ],

    bodyLength: "殻高約5cm、殻径約5.5cm程度。",

    distribution: "日本では房総半島から九州にかけて分布し、中国沿岸などからも記録されています。",

    habitat: "主に水深30〜100mほどの、岩や小石が多い海底に生息します。",

    diet: "本種だけを対象とした詳しい自然下の食性について十分な資料が得られなかったため、特定の餌は断定しません。",

    features: "殻は低い円錐形で厚く頑丈です。殻の周囲には管状の棘が列になって並び、殻表面は淡い紅色を帯びることがあります。",

    behavior: "海底を足で這って生活します。本種固有の日周行動については詳しい資料が少ないため、活動時間帯は断定しません。",

    reproduction: "本種固有の繁殖時期や産卵行動について、今回確認した主要資料では十分な情報が得られなかったため記載を限定します。",

    identification: "サザエに似た殻ですが、殻高が比較的低く、殻の周囲に複数列の細長い棘があることが特徴です。",

    nameOrigin: "殻の周囲に針のような棘を多数持つサザエ類であることから『ハリサザエ』と呼ばれます。",

    humanRelation: "イセエビ漁の刺し網などに混ざって漁獲されることがあります。美しい棘を持つため貝殻収集の対象にもなります。",

    observationPoint: "殻を横から見てください。周囲に並ぶ棘が何列あるかを見ると、普通のサザエとの違いが分かりやすくなります。",

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
        text: "死んだ魚などの動物質へ集まる習性があります。これを利用し、魚の餌を入れた『バイ籠』で漁獲されます。"
      },
      {
        title: "卵の袋には名前がある",
        text: "四角い板のような卵嚢を多数産み付けます。この卵嚢の集まりは泡のように見えることから『アワホオズキ』と呼ばれます。"
      }
    ],

    bodyLength: "殻高約6〜7cm。",

    distribution: "北海道南部から本州・四国・九州、朝鮮半島などに分布します。",

    habitat: "沿岸の砂底・砂泥底に生息します。日中は砂の中へ潜っていることがあります。",

    diet: "肉食・腐肉食性で、死んだ魚や貝などの動物質を食べます。",

    features: "殻は長い卵形で、白から淡い紫色の地に紫褐色の斑紋があります。生きている個体では殻表面が黄褐色の薄い殻皮に覆われます。",

    behavior: "日中は砂に潜り、夜になると砂から出て餌を探すことがあります。においに反応して餌へ集まります。",

    reproduction: "日本では主に5〜8月ごろに産卵します。メスは四角い板状の卵嚢を多数まとめて産み付けます。",

    identification: "白っぽい殻に規則的な紫褐色の斑紋が入り、丸みのある長卵形の殻を持ちます。",

    nameOrigin: "『バイ』という名称は古くから使われていますが、その詳しい語源については複数の説があるため断定しません。",

    humanRelation: "古くから食用にされてきた巻貝で、煮付けなどに利用されます。かつて日本各地で多く漁獲されていました。",

    observationPoint: "砂底がある場合は、砂の中へ潜っていないか探してみてください。移動中には殻の下から大きな足が伸びます。",

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
        text: "見た目から『バフンウニ』という独特な名前を持ちますが、生殖巣は食用になります。福井県の『越前うに』などにも利用されてきました。"
      },
      {
        title: "多くのウニとは違い冬に産卵する",
        text: "日本の多くのウニが春から夏に産卵するのに対し、バフンウニは本州では冬を中心に産卵する地域が多くあります。"
      }
    ],

    bodyLength: "殻径は4cm前後になる個体が多く見られます。",

    distribution: "日本では九州から北海道まで分布し、朝鮮半島や中国沿岸にも見られます。",

    habitat: "潮間帯から浅い海の岩礁や、石の多い海底などに生息します。",

    diet: "主に海藻を食べます。自然下では褐藻・紅藻などさまざまな海藻を利用し、少量の底生動物が胃から見つかることもあります。",

    features: "殻はやや扁平な半球形で、短く密集した棘に覆われます。棘の色は暗緑色、褐色、赤褐色など個体差があります。",

    behavior: "管足と棘を使って岩や石の表面を移動し、海藻を歯で削り取って食べます。",

    reproduction: "雌雄は別々で、卵と精子を海水中へ放出して体外受精します。産卵期は地域によって異なり、本州では冬、北海道南部では春から初夏までずれ込むことがあります。",

    identification: "短く密集した棘と、比較的平たい殻が特徴です。アカウニやムラサキウニと比較すると、棘の長さや殻の形に違いがあります。",

    nameOrigin: "短い棘に覆われた丸い姿が馬糞を連想させることが和名の由来とされています。",

    humanRelation: "食用になる重要なウニの一つです。塩やアルコールなどを使った加工品にも利用されてきました。",

    observationPoint: "長い棘のウニと比較してみてください。バフンウニは棘が短く密集しています。棘の間から伸びる細い管足も探してみましょう。",

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
        text: "養殖個体では橙色、黄色、赤色、紫色など非常に鮮やかな殻が見られます。ただし天然個体では褐色系のものも多くいます。"
      },
      {
        title: "学名が整理されている",
        text: "日本では長く Mimachlamys nobilis として知られてきましたが、現在WoRMSではこれを異名とし、Mimachlamys crassicostata を受理名としています。"
      }
    ],

    bodyLength: "殻長は約10cm前後まで成長し、10cmを超える大型個体も知られています。",

    distribution: "日本では房総半島・男鹿半島以南から沖縄などで見られ、さらに西太平洋の暖かい海域へ分布します。",

    habitat: "潮間帯下部から水深20〜30m程度の岩礁などに生息します。",

    diet: "海水中の植物プランクトンや細かな有機物などを鰓でこし取って食べる濾過食者です。",

    features: "扇形の二枚の殻を持ち、殻表面には放射状の太い肋があります。殻の色には非常に大きな個体差があります。",

    behavior: "足糸と呼ばれる細い糸を出して岩などへ付着します。イタヤガイ類なので、強く刺激された場合には殻を開閉して移動する能力もあります。",

    reproduction: "雌雄による有性生殖を行います。詳しい産卵時期は地域や養殖環境によって異なるため、全国一律の時期としては記載しません。",

    identification: "扇形の殻と放射状の太い肋が特徴です。色だけでは種を判別できず、茶色のヒオウギガイもいます。",

    nameOrigin: "扇形の殻が、古くから使われた『檜扇』という扇に似ていることからヒオウギと呼ばれます。",

    humanRelation: "『南のホタテ』とも呼ばれる食用二枚貝で、三重県、愛媛県、大分県などで養殖されています。色鮮やかな個体を選んで養殖することもあります。",

    observationPoint: "複数個体がいれば殻の色を比較してください。同じ種類でも驚くほど色が違います。殻の縁にある外套膜には小さな眼点も並びます。",

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
        text: "古い資料では Actaea depressa や Forestia depressa などの名前で掲載されていますが、現在は Forestiana granulata として扱われます。"
      },
      {
        title: "甲羅は意外と大きくなる",
        text: "近年の沖縄の調査では、甲幅約3.9cmのオスも記録されています。小さなアワツブガニ類だけではありません。"
      }
    ],

    bodyLength: "甲幅は数cm程度で、沖縄島から甲幅約3.9cmの個体が記録されています。",

    distribution: "日本を含むインド・西太平洋から知られています。日本では相模湾や沖縄などから記録があります。",

    habitat: "浅い海の岩礁や、石・サンゴ片などの周辺で見られます。",

    diet: "本種固有の自然下での詳しい食性について信頼できる情報が少ないため、特定の餌を断定しません。",

    features: "甲羅は横に広く比較的扁平で、表面はいくつもの隆起した区域に分かれています。表面には粒状の凹凸があります。",

    behavior: "岩や石の周辺で生活する底生性のカニです。本種固有の活動時間や詳しい行動については情報が少ないため、推測で記載しません。",

    reproduction: "雌雄は別々です。本種固有の繁殖時期や詳しい繁殖行動については資料が限られるため断定しません。",

    identification: "オウギガニ科には似た種類が非常に多いため、甲羅表面の区域や粒状構造、はさみ脚などを確認して同定します。",

    nameOrigin: "扁平な甲羅を持つアワツブガニ類であることが名称に表れています。",

    humanRelation: "一般的な食用種ではありません。分類の変更が多いグループで、カニ類の分類学的な多様性を知る例になります。",

    observationPoint: "甲羅を上から観察してください。表面が単純に平らなのではなく、細かな粒と複数の隆起した区域に分かれていることが分かります。",

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
        text: "はさみを使って海藻などを食べるだけでなく、口の近くにある第3顎脚を使って、水中を漂う細かな餌をこし取ることもできます。"
      },
      {
        title: "同じ種類でも色がかなり違う",
        text: "白色、緑褐色、赤褐色、暗褐色など体色の個体差が大きく、磯の石や貝殻に紛れやすい姿をしています。"
      }
    ],

    bodyLength: "甲幅は約2.5〜3cm程度。",

    distribution: "日本では北海道から九州・沖縄まで広く見られ、中国沿岸などにも分布します。",

    habitat: "岩礁海岸の潮間帯に多く、特に石の下や岩の隙間などで普通に見られます。",

    diet: "雑食性です。伊豆半島周辺での研究では、アオサ類などの緑藻や紅藻を主に利用し、付着微細藻類やプランクトン、動物質も食べることが確認されています。",

    features: "甲羅は平たく、ほぼ四角形です。体色の変化が非常に大きく、白色斑を持つ個体や一様な褐色の個体などさまざまです。",

    behavior: "石の下などに隠れていますが、餌を取る際にははさみを使うだけでなく、第3顎脚を動かして水中の微細な餌を集めることがあります。",

    reproduction: "千葉県勝浦での調査では4〜10月に抱卵したメスが確認され、7月に抱卵率が最も高くなりました。ただし繁殖時期には地域差があります。",

    identification: "平たい四角形の甲羅が特徴です。ただし体色の個体差が大きいため、色だけではなく甲羅の形や側縁の歯なども確認します。",

    nameOrigin: "平たい体形をした磯のカニであることが『ヒライソガニ』という名称に表れています。",

    humanRelation: "食用として重要な種ではありませんが、日本の磯で非常に身近なカニで、生態系の物質循環や摂餌行動の研究対象にもなっています。",

    observationPoint: "体色を何個体か見比べてみてください。同じ種類でも驚くほど色が違います。また、口元を細かく動かしている場合は水中の餌を集めている可能性があります。",

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
        text: "泳ぎ続けるより、サンゴや岩の上に体を乗せて周囲を見ていることが多い魚です。獲物が近づくと素早く飛び出します。"
      },
      {
        title: "オスは複数のメスと生活する",
        text: "オスは縄張りを持ち、その中で複数のメスと生活するハーレム型の社会を作ることが知られています。"
      }
    ],

    bodyLength: "FishBaseでは最大標準体長約15.2cm。日本で観察される個体は7〜9cm程度のことも多くあります。",

    distribution: "インド太平洋の広い範囲に分布し、日本では南日本、小笠原諸島、琉球列島などで見られます。東太平洋からも記録されています。",

    habitat: "サンゴがよく発達した礁湖や外洋側のサンゴ礁・岩礁に生息します。水深1〜40m程度から記録され、10〜25mで多く見られます。",

    diet: "肉食性で、小型の甲殻類や小魚を捕食します。",

    features: "白色から淡い桃色の体に赤色から暗赤色の斑紋が並びます。背びれの棘には糸状の突起があり、尾びれなどにも赤い小斑点があります。",

    behavior: "サンゴや岩の上・下で休みながら、近づく小型動物を待ち伏せします。オスは縄張り性を示します。",

    reproduction: "浮遊性の卵を産みます。産卵時には雌雄が海底から約0.3〜1mほど水中へ上昇しながら放卵・放精する行動が報告されています。",

    identification: "赤い斑紋と、背びれの糸状突起が特徴です。ミナミゴンベに似ますが、ヒメゴンベでは尾びれにも赤い小斑点が見られることが識別点の一つです。",

    nameOrigin: "『ヒメ』を含む和名の正式な命名由来については、今回確認した主要資料では明確な説明を確認できなかったため断定しません。",

    humanRelation: "食用としてはほとんど利用されませんが、色彩と独特の行動から海水観賞魚として流通します。",

    observationPoint: "水槽の中を泳いでいる魚だけでなく、サンゴや岩の上を探してください。止まって周囲を見渡している個体を見つけやすい魚です。",

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
        text: "古い資料では Scyllarus cultrifer とされていますが、現在は Chelarctus cultrifer が受理名です。"
      },
      {
        title: "子どもの姿は親と全く違う",
        text: "幼生は『フィロソーマ幼生』と呼ばれる透明で非常に平たい姿をしています。その後ニスト期を経て、親に近い形の稚エビへ変態します。"
      }
    ],

    bodyLength: "体長約6cm前後の小型のセミエビ類です。",

    distribution: "日本を含む北西太平洋から西太平洋に分布します。",

    habitat: "岩礁域の岩陰、転石の下、洞窟など暗い場所に生息します。潮だまりで見られることもあります。",

    diet: "本種の自然下での詳しい食性については十分な資料が確認できないため、特定の餌を主食として断定しません。",

    features: "体は上から押しつぶしたように平たく、第2触角が幅広い板状になっています。大型のセミエビ類と比べるとかなり小型です。",

    behavior: "昼間は岩の隙間や洞窟などに隠れ、夜になると活動することが知られています。",

    reproduction: "幼生は透明で平たいフィロソーマ幼生として海中を漂います。与那国島沖で採集された後期幼生を飼育し、ニスト期を経て稚エビへ変態する過程も研究されています。",

    identification: "小型で平たい体と、板状になった触角が特徴です。古い図鑑では Scyllarus cultrifer と表記されている場合があります。",

    nameOrigin: "セミエビ類の中では比較的小型であることが『ヒメ』という名称に関係しています。",

    humanRelation: "大型のセミエビほど重要な水産物ではありませんが、セミエビ類の幼生変態や分類を研究する対象となっています。",

    observationPoint: "長い触角を探すのではなく、頭の前にある平たい板状の触角を見てください。イセエビとの違いが一目で分かります。",

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
        text: "テッポウエビ類は左右どちらかの大きなはさみを急速に閉じ、水中に強い水流と気泡を発生させます。大きな破裂音のような音を出すことができます。"
      },
      {
        title: "巣穴がほかの魚にも利用される",
        text: "本種が作った巣穴を、タビラクチやタネハゼなどのハゼ類が利用する可能性が報告されています。"
      }
    ],

    bodyLength: "全長約3cm前後の個体が報告されています。大型のはさみは体長の半分近くになることもあります。",

    distribution: "日本を含むインド・西太平洋に広く分布します。2025年には石川県からも初記録が報告されています。",

    habitat: "干潟や浅い岩礁、砂や小石が混じる海底などで巣穴を作って生活します。",

    diet: "本種固有の自然下での詳細な食性については情報が限られるため、特定の餌を断定しません。",

    features: "左右のはさみ脚の大きさが大きく異なり、片方が非常に大型になります。頭部には額角があり、その左右に深い溝があります。",

    behavior: "海底に巣穴を作り、その中を生活場所として利用します。大きなはさみを素早く閉じることで特徴的な音を発します。",

    reproduction: "雌雄による繁殖を行い、メスは受精卵を腹部に抱えて保護します。日本での詳しい繁殖時期については十分な資料がないため断定しません。",

    identification: "大型化した片方のはさみが大きな特徴です。テッポウエビ属にはよく似た種類が多いため、額角やはさみ脚の形なども確認します。",

    nameOrigin: "和名にある『二溝』は頭部前方の溝状構造に関係する名称ですが、正式な命名原典までは今回確認できなかったため詳しい由来は断定しません。",

    humanRelation: "食用として重要なエビではありませんが、強い音を生み出す仕組みや巣穴を作る行動から、生態・物理・共生研究でも興味深い生物です。",

    observationPoint: "左右のはさみの大きさを比べてください。水槽内が静かなときには『パチン』という音が聞こえる可能性もあります。",

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
        text: "捕脚の先端が棍棒状に発達したスマッシャー型のシャコで、非常に速い打撃を使って貝や甲殻類などの硬い獲物を破壊します。"
      },
      {
        title: "昔は複数の種類だと思われていた",
        text: "Gonodactylus takedai など、以前別種として記載された名前の一部は現在では本種 Gonodactylaceus falcatus の異名として整理されています。"
      }
    ],

    bodyLength: "全長約8cm程度。10cm近くになる個体もあります。",

    distribution: "インド太平洋に広く分布し、日本では南日本や小笠原諸島などから標本記録があります。",

    habitat: "潮間帯から浅い海の岩礁・サンゴ礁に生息し、岩の穴や割れ目などを巣として利用します。",

    diet: "肉食性で、貝類や小型の甲殻類などを捕食します。強力な捕脚で硬い殻を打撃して壊すことができます。",

    features: "体は緑色を帯びる個体が多いものの体色には変異があります。触角や腹部の縁には赤色・橙色が見られることがあります。前方には非常に強力な捕脚があります。",

    behavior: "岩穴などを拠点とし、獲物が近づくと素早く捕脚で打撃します。警戒すると巣穴へ素早く戻ります。",

    reproduction: "本種固有の繁殖期については十分な情報がないため断定しません。シャコ類ではメスが卵塊を抱えて保護する行動が知られています。",

    identification: "フトユビシャコ類には非常によく似た種がいるため、体色だけではなく尾節や捕脚などの形態を確認する必要があります。現在の受理名は Gonodactylaceus falcatus です。",

    nameOrigin: "和名の詳しい命名原典については今回確認できなかったため、捕脚の形だけから由来を断定しません。",

    humanRelation: "一般的な食用対象ではありません。高速の打撃を行うシャコ類として、捕食行動や視覚・コミュニケーションなどの研究対象になっています。",

    observationPoint: "岩穴から顔だけを出していることがあります。前方の捕脚に注目し、餌を取る際に非常に素早く動く瞬間を探してみてください。",

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
        text: "普通のウニとはかなり違い、数の少ない非常に太い棘を持っています。その棘には輪状の突起が何段も並び、節のように見えます。"
      },
      {
        title: "殻より棘の方が圧倒的に目立つ",
        text: "殻そのものは直径2〜3cm程度ですが、太く長い棘が外側へ伸びるため、実際の殻よりかなり大きく見えます。"
      }
    ],

    bodyLength: "殻径は約2〜3cm程度。太い棘を含めるとさらに大きく見えます。",

    distribution: "南日本からオーストラリア東岸、東アフリカ、マダガスカル、フィジー、ハワイなどインド・西太平洋に広く分布します。",

    habitat: "岩礁や転石の下、岩の隙間などで見られます。八丈島では水深10m以深から観察され、世界的には潮間帯から水深50m程度まで記録されています。",

    diet: "本種固有の詳しい自然下の食性について十分な資料を確認できなかったため、特定の餌を断定しません。",

    features: "棘の数は一般的なウニより少なく、一つ一つが非常に太くなっています。上側の主要な棘には輪状の突起が規則的に並びます。",

    behavior: "岩の隙間や転石の下などで生活します。本種固有の日周行動については情報が少ないため断定しません。",

    reproduction: "雌雄は別々で海中へ卵と精子を放出すると考えられますが、本種固有の日本での産卵時期については十分な資料がありません。",

    identification: "太い主要棘に何段もの輪状突起があることが最大の特徴です。ノコギリウニなど近縁のオウサマウニ類とは棘の構造を比較します。",

    nameOrigin: "太い棘に節のような輪状構造があることから『フシザオウニ』と呼ばれます。",

    humanRelation: "一般的な食用ウニではありません。通常のウニとは大きく異なる棘の形を観察できる種類です。",

    observationPoint: "棘の先端だけでなく、根元から先まで見てください。輪のような突起が何段も並び、本当に『節』のある棒のように見えます。",

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
        text: "柔らかい体が大きいためウミウシのように見えますが、体の内側ではなく外側に、非常に薄く透明感のある貝殻を持っています。"
      },
      {
        title: "水面へ浮かんで移動することがある",
        text: "腹足を水面へ広げ、表面張力を利用して浮かぶ『フローティング行動』が相模湾の野外個体で観察されています。"
      }
    ],

    bodyLength: "殻長約1cm。マリンピア日本海では殻長11mmとして紹介されています。",

    distribution: "北海道南部から九州までの日本沿岸に分布します。",

    habitat: "潮間帯から水深50m程度までの海藻上などに生息します。",

    diet: "藻食性で、アオサ類などの海藻を食べます。",

    features: "体は暗黄色から黄褐色で、黒い小斑点が散らばります。薄い楕円形の殻を持ちますが、軟らかい体が殻から大きくはみ出します。",

    behavior: "海藻の表面を這って餌を食べます。また、水面へ浮かんで流れを利用して移動するフローティング行動も確認されています。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体です。相模湾産個体では6〜7月に採集した成体から卵塊が得られ、同じ種でも異なる孵化形態を示すことが研究されています。",

    identification: "薄い貝殻と、黄色みを帯び黒点のある軟らかい体が特徴です。古い資料では Haloa japonica とされますが、現在は Haminoea japonica が受理名です。",

    nameOrigin: "丸みのある体や殻がブドウの実を思わせることが名称に関係すると考えられますが、正式な命名原典までは確認できなかったため断定しません。",

    humanRelation: "食用として利用される生物ではありませんが、発生様式や海面を利用した移動行動などの研究対象になっています。",

    observationPoint: "『ウミウシかな？』と思ったら、背中側の薄い殻を探してみてください。水面近くにいる場合は、浮いて移動していないかにも注目です。",

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
        text: "昆虫ではありません。ダンゴムシやワラジムシに近い等脚類で、さらに大きく分類すればエビやカニと同じ甲殻類です。"
      },
      {
        title: "海辺にいるのに水中生活は苦手",
        text: "普段は波が直接かからない岩場などの陸上で生活します。泳ぐことはできますが、長時間水中にいる生活には適していません。"
      }
    ],

    bodyLength: "体長3〜4cm程度。大型個体では5〜6cmほどに達する記録があります。",

    distribution: "日本の本州以南を中心とした沿岸で見られ、世界各地の暖温帯から熱帯の海岸にも広く分布します。",

    habitat: "海岸の高潮線より上にある岩場、消波ブロック、漁港、コンクリート護岸などで生活します。",

    diet: "雑食性で、海岸に打ち上げられた海藻、動物質、有機物などさまざまなものを食べます。",

    features: "体は上下に平たく、7対の歩脚を持ちます。大きな複眼と非常に長い第2触角、体の後端に伸びる長い尾肢が特徴です。",

    behavior: "非常に敏捷で、人や外敵が近づくと岩の隙間へ素早く逃げます。主に陸上で生活しますが、一時的に水中を泳ぐこともできます。",

    reproduction: "メスは胸部腹面の育房内で卵を保護します。幼体は育房内で発生し、成体に近い形になってから外へ出る直接発生を行います。",

    identification: "大きな複眼、長い触角、体の後ろに伸びる長い尾肢が特徴です。日本には複数のフナムシ属が存在するため、厳密な同定では触角や腹肢なども確認します。",

    nameOrigin: "船着き場や海岸で普通に見られることから『船虫』と呼ばれてきたと考えられます。",

    humanRelation: "釣り餌として利用されることがあります。また、陸上生活へ適応した甲殻類として生理・行動研究や水族館展示にも利用されています。",

    observationPoint: "脚の数を見てみてください。昆虫の6本ではなく、歩くための脚が7対あります。刺激すると非常に速く走ることも大きな特徴です。",

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
        text: "歯舌の一部が銛のように変化しており、毒を注入してハゼ類などの小魚を捕食します。"
      },
      {
        title: "きれいな貝でも素手で触らない",
        text: "イモガイ類は毒を持ち、ベッコウイモも刺す可能性があります。生きた個体を見つけても不用意に手で持つべきではありません。"
      }
    ],

    bodyLength: "殻高は約6.5cm程度に達します。",

    distribution: "日本では房総半島以南や瀬戸内海などで見られ、台湾などにも分布します。",

    habitat: "小石の多い砂泥底や、海藻のある岩礁の溝などに生息します。",

    diet: "肉食性で、ハゼ類の幼魚などの小魚を毒のある歯舌で捕らえて食べることが確認されています。",

    features: "殻は逆円錐形で硬く、褐色系の模様があります。個体によって黒褐色の斑紋の入り方が異なります。",

    behavior: "砂や小石の間などに隠れて生活し、獲物へ近づくと毒を持つ銛状の歯舌を使って捕食します。",

    reproduction: "卵生です。本種では幼生の変態条件などが研究されていますが、自然下での詳しい産卵時期については十分な情報がないため断定しません。",

    identification: "イモガイ類は非常によく似た種が多く、殻の色・模様だけで確実に判断できない場合があります。現在の受理名として Conus fulmen が広く使用されています。",

    nameOrigin: "べっ甲を思わせる褐色の美しい殻模様が名称に関係すると考えられますが、正式な命名原典までは確認できなかったため断定しません。",

    humanRelation: "毒を持つため生きた個体の取り扱いには注意が必要です。一方、殻の美しさから貝類収集の対象にもなっています。",

    observationPoint: "殻の模様を観察するだけにして、触らないようにしてください。水槽内では砂や小石の間に体を隠していないか探してみましょう。",

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
        text: "細い茎の先に小さなポリプが一つずつ付き、それらが多数集まってふさ状の群体を作ります。"
      },
      {
        title: "自由に泳ぐクラゲにならない",
        text: "ヒドロ虫の仲間ですが、一般的なクラゲのような自由遊泳するクラゲ世代を持ちません。受精卵からアクチヌラ幼生が生じ、直接新しいポリプになります。"
      }
    ],

    bodyLength: "群体は10cm前後の高さになることがあり、海外資料では約12cmまでのふさ状群体が紹介されています。",

    distribution: "世界各地の温帯海域から報告され、日本でもベニクダウミヒドラとして記録されています。",

    habitat: "岩、貝殻、桟橋、杭、船体など海中の硬い場所へ付着し、群体を形成します。",

    diet: "触手の刺胞を使って水中の動物プランクトンなどを捕らえます。研究では胃内容物の多くを甲殻類が占めた例があります。",

    features: "細長い茎の先端に花のようなポリプがあります。口の周囲とその下側に2組の触手があり、ポリプ中央部は赤色から橙赤色を帯びます。",

    behavior: "成体は硬い場所へ付着して動きません。多数のポリプが触手を広げ、水中を流れてくる小さな餌を捕らえます。",

    reproduction: "自由に泳ぐクラゲ世代を持ちません。ポリプの触手の間に生殖体が形成され、受精・発生後にアクチヌラ幼生が放出されます。幼生は短期間水中を漂った後、基質へ付着して新しい群体を作ります。",

    identification: "灰色から淡色の細長い茎と、赤色・桃色を帯びたポリプが特徴です。古い資料では Tubularia mesembryanthemum などの学名が使われていますが、現在は Ectopleura crocea が受理名です。",

    nameOrigin: "赤色を帯びたポリプを持つクダウミヒドラ類であることが和名に表れています。",

    humanRelation: "桟橋や船体など人工構造物にも大量に付着することがあり、付着生物群集を構成します。また、ヒドロ虫の生活史研究にも利用されています。",

    observationPoint: "海藻のように全体だけを見るのではなく、一本一本の茎の先を見てください。小さな花のようなポリプと、その周囲に広がる触手が確認できます。",

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
        text: "ソメンヤドカリなどが背負う巻貝の殻に付着して生活することがあります。ヤドカリとイソギンチャクが一緒に移動する独特な共生関係です。"
      },
      {
        title: "ヤドカリ自身がイソギンチャクを移すこともある",
        text: "ヤドカリの仲間では、イソギンチャクを刺激して岩などから外し、自分が背負う貝殻へ付け替える行動が観察されています。"
      }
    ],

    bodyLength: "伸びた状態では高さ数cmになり、大型個体では約8cmに達する記録があります。",

    distribution: "日本の暖かい沿岸を含むインド・太平洋域などから知られています。",

    habitat: "浅い岩礁やサンゴ礁などで、特にソメンヤドカリやサメハダヤドカリなどが利用する巻貝の殻上で見られます。",

    diet: "触手にある刺胞を利用し、水中を漂う小型の動物や有機物などを捕らえて食べます。ヤドカリが餌を食べた際に生じる細かな食べ残しを利用する可能性もあります。",

    features: "体の基部は広く、貝殻の表面へしっかり付着します。体には淡褐色や白色、桃色などの模様が入り、多数の細い触手を口の周囲に広げます。",

    behavior: "自力で大きく移動することは多くありませんが、ヤドカリの貝殻に付着することで、ヤドカリと一緒に海底を移動できます。",

    reproduction: "本種固有の日本沿岸での詳しい繁殖時期については、今回確認した主要資料では十分な情報が得られなかったため断定しません。",

    identification: "ヤドカリが背負う貝殻に付着していることが重要な手掛かりです。よく似るヤドカリイソギンチャク Calliactis japonica とは別種なので注意が必要です。",

    nameOrigin: "『ベニヒモ』という和名の正式な命名由来については、今回確認した資料だけでは確実に断定できないため記載しません。",

    humanRelation: "食用生物ではありません。ヤドカリとイソギンチャクという異なる動物が一緒に暮らす共生関係を観察できる代表的な生物です。",

    observationPoint: "イソギンチャクだけではなく、その下にある貝殻とヤドカリも見てください。『イソギンチャクが自分で歩いているように見える』理由が分かります。",

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
        text: "長い棘には淡い黄緑色と鮮やかな赤色の横縞が入り、殻にも紫色などの美しい模様があります。日本産ウニの中でも特に色鮮やかな種類です。"
      },
      {
        title: "本来は少し深い海に多い",
        text: "通常は水深70〜360mほどから知られるウニですが、高知県では水深15〜17mほどの浅い場所から見つかった記録もあります。"
      }
    ],

    bodyLength: "殻の直径は成体で約2〜4cm。棘を含めるとさらに大きく見えます。",

    distribution: "日本では相模湾から九州、福井県沿岸、富山湾などから確認されています。",

    habitat: "通常はやや深い海底に生息しますが、地域によっては比較的浅い岩礁の転石下などから見つかることもあります。",

    diet: "雑食性で、海底にある藻類や細かな有機物など、さまざまな餌を利用するとされています。",

    features: "長く細い主棘には淡い黄緑色と朱赤色の横帯があります。殻自体にも鮮やかな色彩があり、棘を外した状態でも非常に特徴的です。",

    behavior: "管足と棘を使って海底を移動します。本種固有の詳しい活動時間帯については十分な資料がないため断定しません。",

    reproduction: "雌雄は別々で、ウニ類らしく卵と精子を海中へ放出して体外受精すると考えられます。本種固有の繁殖期については情報が限られています。",

    identification: "長い主棘すべてに赤色と淡色の横縞が入ることが、近縁のヤマトベンテンウニなどとの識別点になります。",

    nameOrigin: "鮮やかで美しい姿から弁天を連想させる名称ですが、正式な命名原典までは今回確認できなかったため断定しません。",

    humanRelation: "一般的な食用ウニではありません。その鮮やかな色彩や独特な棘から、水族館展示やウニ類の分類研究で注目されます。",

    observationPoint: "棘を一本ずつ見てみてください。赤と淡い黄緑色の横縞が確認できれば、ベンテンウニらしい特徴がよく分かります。",

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
        text: "ホシギンポは外海に面した岩礁など、波がよく当たる非常に浅い場所で見られる魚です。潮だまりへ取り残されても生活できます。"
      },
      {
        title: "海藻だけでなく小動物も食べる",
        text: "以前は藻類を食べる魚として紹介されることも多くありましたが、研究では藻類だけでなく小型甲殻類などの無脊椎動物も食べる雑食性であることが確認されています。"
      }
    ],

    bodyLength: "最大で標準体長約11cm。",

    distribution: "北西太平洋に分布し、日本、沖縄、サイパンなどから確認されています。",

    habitat: "波当たりの強い岩礁海岸や潮間帯、潮だまりなどに生息します。",

    diet: "雑食性で、岩表面の藻類やシアノバクテリア、細かな有機物、小型の甲殻類などを食べます。",

    features: "細長い体を持ち、頭部には皮膚の突起があります。体には小さな白色斑が散らばることがあり、周囲の岩に紛れやすい模様です。",

    behavior: "岩の表面や穴の周辺で生活し、人や外敵が近づくと素早く岩の隙間へ逃げ込みます。",

    reproduction: "卵生です。卵は海底の岩などへ粘着性の構造で付着します。孵化した仔魚は水中を漂う浮遊生活を送ります。",

    identification: "頭部の皮膚突起と、細長い体に散らばる小さな白点が特徴です。外見が似たイソギンポ類もいるため、体の模様やひれも確認します。",

    nameOrigin: "体に散らばる小さな白い点を星に見立てたという説がありますが、正式な命名由来は明確ではありません。",

    humanRelation: "食用として利用される魚ではありません。波の強い磯という厳しい環境へ適応した魚として、行動や食性の研究対象にもなっています。",

    observationPoint: "水槽の底だけでなく岩の穴を探してください。穴から頭だけを出している個体がいれば、頭部の小さな皮膚突起にも注目です。",

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
        text: "褐色の光沢のある殻に、大小の白い丸い斑点が多数散らばります。この模様が『ホシ』という和名を連想させます。"
      },
      {
        title: "生きていると殻が見えなくなることもある",
        text: "タカラガイ類は外套膜という軟らかい組織を殻の表面へ広げます。完全に広がると、美しい貝殻がほとんど見えなくなることがあります。"
      }
    ],

    bodyLength: "殻長は5cm前後の個体が多く、大型では7〜8cmほどに達します。",

    distribution: "日本では房総半島・山口県北部以南などで見られ、インド・太平洋の暖かい海域に広く分布します。",

    habitat: "潮間帯から水深150m程度までの岩礁やサンゴ礁などに生息します。",

    diet: "藻類や海綿などの付着生物を利用する記録があります。資料によって食性の記載に差があるため、一種類の餌だけを主食とはしません。",

    features: "厚くよく膨らんだ卵形の殻を持ちます。背面は茶褐色から紫がかった褐色で、多数の白い斑点と淡い横帯があります。腹面は白色です。",

    behavior: "夜間に活動することが多く、昼間は岩やサンゴの下、隙間などへ隠れます。",

    reproduction: "本種固有の繁殖時期や卵保護について、今回確認した主要資料では十分な情報が得られなかったため断定しません。",

    identification: "大きく膨らんだ褐色の殻と、多数の白い斑点が特徴です。現在の受理名は Lyncina vitellus で、古い資料では Cypraea vitellus と表記されます。",

    nameOrigin: "『ホシ』は殻の白い斑点、『キヌタ』は昔の布を打つ道具である砧を連想させる名称とされています。",

    humanRelation: "一般的な食用貝ではありませんが、厚く光沢のある美しい殻から、古くから貝殻収集の対象となってきました。",

    observationPoint: "白い斑点だけでなく、外套膜にも注目です。生きた個体が外套膜を広げていれば、標本の貝殻とは全く異なる姿を見ることができます。",

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
        text: "甲長は最大約5cmに達し、大きなサザエ類やボウシュウボラなどの殻を背負うことがあります。"
      },
      {
        title: "大きすぎる貝殻を使うこともある",
        text: "和歌山県では、体に対して非常に大きく重いボウシュウボラの殻を利用していた個体が研究されました。用意された軽い殻へ何度か引っ越しても、元の大きな殻へは戻らなかったことが報告されています。"
      }
    ],

    bodyLength: "甲長は最大約5cm。大型になるヤドカリです。",

    distribution: "日本では房総半島・新潟県以南から九州まで見られ、台湾からも知られています。",

    habitat: "浅い岩礁域を中心に、水深5〜90m程度から記録されています。",

    diet: "雑食性で、海底にある動植物質などを利用すると考えられます。詳しい自然下の食性構成については情報が限られるため、主食は断定しません。",

    features: "大型で毛の多いヤドカリです。はさみ脚は左右がほぼ同じ大きさで、歩脚には赤褐色や黄色の帯状模様があります。",

    behavior: "大きな巻貝の空殻を利用して海底を歩きます。成長に合わせて、より適した大きさの殻へ引っ越します。",

    reproduction: "本種固有の詳しい繁殖時期や交尾行動については、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "大型で毛が多く、脚に赤褐色などの横帯があります。近縁のオキナワオニヤドカリなどとは脚の模様を比較して識別します。",

    nameOrigin: "本州を含む日本本土側に生息する大型のオニヤドカリ類であることが『ホンド』という名称に表れています。",

    humanRelation: "一般的な水産物ではありません。大型の巻貝の空殻を利用するため、ヤドカリと貝類との関係を観察できる生物です。",

    observationPoint: "背負っている貝殻だけではなく、そこから出ている脚を見てください。長い毛と帯状の模様がよく分かります。",

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
        text: "ホンヤドカリでは右側のはさみ脚が左より大きく発達します。左右のはさみの大きさを見ると、ヤドカリ類を見分ける手掛かりになります。"
      },
      {
        title: "オスがメスの貝殻を何日もつかんで守る",
        text: "繁殖期のオスは交尾できる時期が近づいたメスの貝殻をつかみ、最大数日間そのまま連れ歩く交尾前ガードを行います。"
      }
    ],

    bodyLength: "体の大きさは約2cm程度。利用する貝殻を含めるとさらに大きく見えます。",

    distribution: "北海道以南の日本各地の沿岸で広く確認されています。",

    habitat: "潮間帯の岩礁や潮だまり、石の多い場所などに多く生息します。",

    diet: "雑食性で、海藻、細かな有機物、動物質などさまざまな餌を利用します。",

    features: "はさみ脚と歩脚は緑褐色を帯びます。右のはさみが大きく、歩脚先端は黒く、その手前に明瞭な白色部があります。触角には白黒の縞があります。",

    behavior: "巻貝の空殻を背負い、成長するとより適した殻へ交換します。貝殻の種類や大きさは成長・生存・繁殖にも影響します。",

    reproduction: "繁殖時期には地域差があります。土佐湾では主に冬、函館湾では春から夏に繁殖が確認されています。オスは交尾前に成熟したメスの殻をつかんでガードします。",

    identification: "右のはさみが大きいこと、触角の白黒模様、歩脚の先端直前にある白色部が重要な特徴です。",

    nameOrigin: "ホンヤドカリ属を代表する身近な種として現在の標準和名が使われていますが、命名原典に基づく詳しい由来は断定しません。",

    humanRelation: "日本の磯で非常に身近なヤドカリです。また、殻の選択、繁殖、オス同士の競争など行動生態学の研究に多く利用されています。",

    observationPoint: "左右のはさみを比較してください。右側が大きければ重要な手掛かりです。脚先の黒と白の模様も見つけてみましょう。",

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
        text: "イトマキヒトデなどのヒトデ類を捕食します。長く伸びる吻を使って、ヒトデの体を食べ進めます。"
      },
      {
        title: "卵の袋は『トックリホオズキ』",
        text: "徳利のような形をした卵嚢を多数産み付けます。この卵嚢は海ほおずきの一種として『トックリホオズキ』と呼ばれます。"
      }
    ],

    bodyLength: "日本で見られる個体では殻長20〜25cm前後になり、26cmほどの標本も知られています。",

    distribution: "日本では房総半島・山口県以南などの暖かい海域から知られます。Charonia lampas 全体としては非常に広い海域に分布します。",

    habitat: "潮間帯から水深50m程度までの岩礁域などに生息します。",

    diet: "肉食性で、ヒトデ類を好んで捕食します。イトマキヒトデなどを食べる様子が水族館でも確認されています。",

    features: "大型で厚く頑丈な殻を持ちます。殻表面には大きなこぶの列と細かな筋があり、黄褐色の地に濃い褐色の模様があります。",

    behavior: "海底を這ってヒトデなどの餌を探します。産卵後のメスが卵嚢の近くにとどまり、しばらく守る行動も観察されています。",

    reproduction: "冬から春に産卵する例が水族館で確認されています。徳利型の卵嚢を多数産み付け、親がしばらく卵嚢の周囲にいることがあります。",

    identification: "大型でごつごつした殻と、殻口内部の白色、褐色の模様が特徴です。古い日本の資料では Charonia lampas sauliae とされますが、現在は Charonia lampas へ統合されています。",

    nameOrigin: "『房州』は現在の千葉県南部にあたる地域名で、房総地方との関係から付けられた和名です。",

    humanRelation: "過去に食用によるテトロドトキシン中毒が発生しています。厚生労働省では中腸腺を猛毒としており、食用には十分な注意が必要です。",

    observationPoint: "餌のヒトデが同じ水槽にいる場合は、長い吻を伸ばしていないか観察してください。殻の大きさだけでなく、動物食の巻貝であることも大きな特徴です。",

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
        text: "幼生の時期は水中を漂いますが、成長の途中で岩などへ付着すると、その後はそこから移動せずに生活します。"
      },
      {
        title: "水をこして植物プランクトンを食べる",
        text: "大量の海水を鰓へ通し、水中に漂う植物プランクトンや細かな有機物をこし取って食べます。"
      }
    ],

    bodyLength: "標準的な殻高は約15cm。生育環境によって殻の大きさや形には非常に大きな差があります。",

    distribution: "本来は日本の北海道から九州、朝鮮半島、ロシア沿海州、中国沿岸などに分布します。養殖用として世界各地へ移され、現在では多くの地域に定着しています。",

    habitat: "汽水性の内湾、河口、潮間帯から浅い海に生息します。岩やほかのカキなど硬い物へ付着し、多数集まって『カキ礁』を作ることがあります。",

    diet: "植物プランクトンや水中の微細な有機物を鰓でこし取って食べる濾過食者です。",

    features: "左右の殻は形が異なり、岩などへ付着する側の殻は深くくぼみます。殻表面は非常に粗く、周囲の形に合わせて不規則な形へ成長します。",

    behavior: "成体は基質へ固定されているため移動しません。殻を開き、鰓へ海水を通すことで呼吸と摂餌を同時に行います。",

    reproduction: "日本では主に初夏から夏、水温が高くなる時期に産卵します。卵と精子を海水中へ放出し、幼生は2〜3週間ほど浮遊した後、岩などへ付着します。",

    identification: "殻の形は環境によって大きく変わるため、形だけでは判断しにくい場合があります。古くから Crassostrea gigas という学名が広く使われていますが、現在BISMaL・WoRMSでは Magallana gigas が受理名です。",

    nameOrigin: "『真牡蠣』と書き、日本で古くから代表的なカキとして利用されてきたことを示す名称です。",

    humanRelation: "日本を代表する養殖二枚貝の一つで、生食、焼きガキ、フライなど幅広く利用されます。養殖用の種苗生産も大規模に行われています。",

    observationPoint: "殻の形を何個体か見比べてください。同じ種類でも周囲の岩や隣のカキに合わせて全く違う形へ成長していることがあります。",

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
        text: "針のような細い棘ではなく、鉛筆のように太く先端が丸い主棘を少数持っています。"
      },
      {
        title: "とても古いタイプのウニの仲間",
        text: "オウサマウニ目は現生ウニの中でも古い特徴を多く残したグループです。現代の一般的なウニとは棘や殻の構造が大きく異なります。"
      }
    ],

    bodyLength: "殻の直径は最大約3cm。太い棘を含めるとさらに大きく見えます。",

    distribution: "インド・西太平洋の暖かい海域に広く分布し、日本の暖海域からも確認されています。",

    habitat: "浅いサンゴ礁や岩礁、岩の隙間などに生息します。",

    diet: "藻類や細かな有機物を食べるほか、カイメンやコケムシなどの付着生物を利用することも知られています。",

    features: "太く円筒形の主棘を少数持ち、棘には淡色と赤褐色などの横帯があります。棘の先端は細く鋭くならず、やや平らで丸みがあります。",

    behavior: "太い棘と管足を使って岩礁上をゆっくり移動します。棘の表面には藻類などの付着生物が付いていることもあります。",

    reproduction: "雌雄が別々で、卵と精子を海水中へ放出して体外受精します。幼生は水中を漂った後、海底へ着底して稚ウニへ変態します。",

    identification: "非常に太く、先端が丸い主棘が最大の特徴です。フシザオウニなど他のオウサマウニ類とは、棘表面の構造や形を比較します。",

    nameOrigin: "太い棘を持つ独特な姿が松かさを思わせる名称ですが、正式な命名原典については今回確認できなかったため断定しません。",

    humanRelation: "一般的な食用ウニではありません。現生ウニの進化や体の構造を理解するうえで興味深いグループです。",

    observationPoint: "ガンガゼやバフンウニと棘を比較してください。マツカサウニでは『針』ではなく太い棒のような棘が並んでいます。",

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
        text: "半透明の黄白色、赤褐色、黒色に近い個体まで体色の変化が非常に大きく、地域や個体によって印象が大きく異なります。"
      },
      {
        title: "歯で削らず、カイメンを吸って食べる",
        text: "クロシタナシウミウシ科では一般的な巻貝のような歯舌を持たず、特殊な口を使ってカイメンの組織を吸い込むように食べます。"
      }
    ],

    bodyLength: "大型個体では体長約10cmに達します。通常は3〜4cm程度の個体も多く見られます。",

    distribution: "日本を含むインド洋、西太平洋、中部太平洋、東太平洋など非常に広い範囲から記録されています。",

    habitat: "浅い岩礁、干潟周辺、砂や小石が混じる海底などに生息します。",

    diet: "肉食性で、主にカイメン類を食べます。歯舌を持たず、カイメンの組織を吸い込むような摂餌方法を使います。",

    features: "体色の個体差が非常に大きく、黄白色、赤褐色、暗色などさまざまです。背面には不規則な暗色斑があり、体の縁は薄く波打ちます。背面後方には大きな樹枝状の二次鰓があります。",

    behavior: "海底や岩の表面をゆっくり這って移動し、餌となるカイメンを探します。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体です。交尾後にはリボン状の卵塊を渦巻き状に産みます。飼育研究では22〜23℃で約10日後に浮遊幼生が孵化した例があります。",

    identification: "体色だけでは識別できません。背面の不規則な斑紋、触角、二次鰓などを合わせて確認します。クロシタナシウミウシとの分類関係については研究者によって見解が異なることがあるため注意が必要です。",

    nameOrigin: "体に不規則なまだら模様が現れることから『マダラウミウシ』と呼ばれます。",

    humanRelation: "一般的な食用生物ではありません。色彩の変異や、歯舌を持たない特殊な摂餌方法を研究する対象にもなっています。",

    observationPoint: "色だけで種類を決めず、背中後方の大きな二次鰓と、不規則なまだら模様を一緒に見てください。同じ種類でも個体ごとの色の違いが非常に大きい点も見どころです。",

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
        text: "背中には大小の丸い突起が多数あります。伊豆半島では、この独特な姿から『健康サンダル』という愛称で呼ばれることもあります。"
      },
      {
        title: "学名が何度か整理されている",
        text: "日本で Carminodoris armata として記載された後、Hoplodoris armata とされた時期がありましたが、現在は再び Carminodoris armata が受理名として扱われています。"
      }
    ],

    bodyLength: "大型のウミウシで、体長15cmほどに達する個体が知られています。",

    distribution: "日本の本州、八丈島、韓国などから記録されています。",

    habitat: "伊豆半島などでは、水深10〜20mほどの砂や小石が混じる海底で見られることがあります。",

    diet: "本種だけを対象にした自然下の詳しい食性資料は限られているため、特定の餌を断定しません。",

    features: "体は幅広く、淡褐色から赤褐色です。背面には大小さまざまな丸い突起が密生し、突起の先端が暗紫色になる個体もいます。",

    behavior: "海底を大きな腹足でゆっくり這って移動します。砂地や岩の周辺で見られます。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体です。春ごろに交接し、橙色の卵塊を産む例が報告されています。",

    identification: "大型で幅広い体と、背中を覆う多数のこぶ状突起が特徴です。近縁のセンリョウウミウシより突起が大きく見えることがあります。",

    nameOrigin: "『マンリョウ』という和名の詳しい命名理由について、今回確認した資料では明確な説明がないため推測では記載しません。",

    humanRelation: "食用には利用されません。大型で独特な姿をしているため、ダイバーやウミウシ観察で印象に残りやすい種類です。",

    observationPoint: "背中の突起を見てください。単純な丸い粒ではなく、途中が少しくびれ、先端がこぶ状になっているものがあります。",

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
        text: "半球形の特徴的な卵嚢を岩などへ産み付けます。この卵嚢は昔から『マンジュウホオズキ』と呼ばれています。"
      },
      {
        title: "名前の通り表面が比較的なめらか",
        text: "白っぽい厚い殻を持ち、細かな彫刻はありますが、全体として磨いたような印象があります。"
      }
    ],

    bodyLength: "殻高は通常10cm前後で、大型個体では約14cmに達します。",

    distribution: "日本では陸奥湾以南の各地で見られます。朝鮮半島周辺からも知られています。",

    habitat: "潮間帯より下の岩礁から、砂や泥の混じる海底まで幅広い環境に生息します。",

    diet: "肉食・腐肉食性で、二枚貝などの小動物や動物の死骸、細かな有機物などを利用します。",

    features: "殻は細長い紡錘形で非常に厚く頑丈です。殻は白色を基調とし、各層には低いこぶが並びます。",

    behavior: "海底を大きな足で這いながら餌を探します。死んだ動物などのにおいに集まることがあります。",

    reproduction: "メスは特徴的な半球形の卵嚢を岩などへ産み付けます。この卵嚢は『マンジュウホオズキ』として知られています。",

    identification: "大型で重厚な白い殻と、各層に並ぶ低いこぶが特徴です。殻の下側には短い水管部があります。",

    nameOrigin: "殻表面が磨いたようになめらかに見えることが『ミガキボラ』という名前に関係するとされています。",

    humanRelation: "まとまって流通する水産物ではありませんが、食用にすることができます。イセエビ漁の網などに混獲されることがあります。",

    observationPoint: "殻の大きさだけでなく、表面の低いこぶと細かな筋を見てください。運がよければ卵嚢も一緒に観察できます。",

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
        text: "触手は桃色、黄色、緑色、褐色などさまざまですが、体の側面に並ぶ吸着イボは鮮やかな緑色です。"
      },
      {
        title: "触手は約96本",
        text: "口の周囲には多数の触手が並び、マリンピア日本海では96本と紹介されています。"
      }
    ],

    bodyLength: "口盤の直径は数cm程度で、資料によっては直径10cmほどになる個体も紹介されています。",

    distribution: "日本沿岸に分布し、北海道南西部以南の本州・四国・九州などで確認されています。",

    habitat: "潮間帯から非常に浅い海の岩礁に生息し、岩の割れ目や砂・小石のたまった場所でも見られます。",

    diet: "触手の刺胞を使って、水中を漂う小型動物やプランクトンなどを捕らえて食べます。",

    features: "体壁は暗緑色から暗赤紫色で、鮮やかな緑色の吸着イボが縦方向に並びます。触手の色には大きな個体差があります。",

    behavior: "足盤で岩などへ付着して生活します。刺激を受けると触手を縮め、体全体を小さくすることができます。",

    reproduction: "本種固有の産卵時期や繁殖方法について、今回確認した主要資料では十分な情報が得られなかったため断定しません。",

    identification: "体壁に並ぶ若草色の吸着イボが重要な特徴です。触手の色だけでは個体差が大きいため、側面も観察します。",

    nameOrigin: "体壁に鮮やかな緑色の吸着イボを持つことが『ミドリイソギンチャク』という名称に表れています。",

    humanRelation: "一般的な食用生物ではありません。日本の磯で観察できる身近なイソギンチャクの一つです。",

    observationPoint: "上から触手だけを見るのではなく、横から体の側面を探してください。鮮やかな緑色の小さなイボが並んでいます。",

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
        text: "古い図鑑では Cypraea gracilis と書かれることがありますが、現在は Purpuradusta gracilis が受理名です。"
      },
      {
        title: "生きていると殻を体で覆う",
        text: "タカラガイ類は外套膜という軟らかい組織を殻の表面へ広げます。メダカラでは朱色に近い外套膜が観察されることがあります。"
      }
    ],

    bodyLength: "殻高は約2cm程度の小型のタカラガイです。",

    distribution: "日本では陸奥湾以南から四国、九州、奄美、沖縄などで確認されています。",

    habitat: "浅い沿岸に生息し、岩礁や石の周辺などで見られます。",

    diet: "本種固有の自然下での詳しい食性については情報が少ないため、特定の餌を断定しません。",

    features: "殻は小型で滑らかです。背面は灰褐色を基調とし、褐色の不規則な帯状模様があります。生きた個体では外套膜が殻を覆うことがあります。",

    behavior: "海底を足で這って移動します。生きているときには外套膜を殻の表面へ広げ、殻が見えにくくなることがあります。",

    reproduction: "本種固有の繁殖期や卵保護について、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "約2cmの小型タカラガイで、灰褐色の殻に不規則な褐色模様があります。近縁種が多いため、殻口の歯や模様も確認します。",

    nameOrigin: "『メダカラ』の詳しい和名由来について確実な資料を確認できなかったため、推測では記載しません。",

    humanRelation: "主要な食用貝ではありません。小型で光沢のある殻を持つため、磯の貝類観察で見つけられる種類です。",

    observationPoint: "殻そのものだけでなく、生きた個体では外套膜を見てください。朱色に近い軟らかな体が殻を覆っていることがあります。",

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
        text: "幼ガニから成体までは主に川で生活しますが、成熟すると川を下り、河口や海で交尾・産卵します。"
      },
      {
        title: "はさみが本当に『藻くず』のよう",
        text: "成体のはさみ脚には長く柔らかな毛が密生します。この毛が藻のくずのように見えることが名前の由来です。"
      }
    ],

    bodyLength: "大型個体では甲幅7〜8cm程度になり、8cmを超える個体も記録されています。",

    distribution: "日本各地に広く分布し、朝鮮半島、中国沿岸、台湾など東アジアにも分布します。",

    habitat: "河口から河川の上流域まで幅広く生活します。若い個体は川を遡上し、成熟すると河口・沿岸へ下ります。",

    diet: "動物食の割合が高い雑食性で、魚や貝などの死骸、小動物、植物質などさまざまな餌を利用します。",

    features: "甲羅は丸みのある四角形で暗褐色です。成体のはさみには長く柔らかな毛が密生します。",

    behavior: "夜行性で、昼間は石の下や護岸の隙間などへ隠れます。成長した個体は繁殖期になると川を下って海へ向かいます。",

    reproduction: "成熟した成体は秋から冬を中心に川を下り、河口や海岸で交尾・産卵します。メスは卵を腹部に抱え、孵化したゾエア幼生は海で成長します。メガロパ幼生になると河口へ戻り、稚ガニとなって川を遡上します。",

    identification: "はさみに密生する長い毛が最大の特徴です。近縁のチュウゴクモクズガニなどとは甲羅の形や額部などを詳しく確認する必要があります。",

    nameOrigin: "はさみ脚に生える褐色の長い毛が『藻くず』のように見えることからモクズガニと呼ばれます。",

    humanRelation: "日本各地で食用になり、地域によって『ズガニ』『ツガニ』などとも呼ばれます。河川と海を往復するため、堰やダムなどが移動を妨げる場合があります。",

    observationPoint: "まずはさみを見てください。ふさふさした毛が確認できます。また、海の生き物展示にいるのに生活史の多くを川で過ごす点にも注目です。",

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
        text: "体や脚に生えた鉤状の毛へ、海藻、カイメン、細かなゴミなどを自分で取り付け、周囲の景色に溶け込みます。"
      },
      {
        title: "隠れ場所が少ないほど飾り付けが増える",
        text: "実験では、身を隠せる場所が少ない環境ほど、体へ多くの物を取り付けることが確認されています。捕食者から身を守るための行動と考えられています。"
      }
    ],

    bodyLength: "甲羅は最大約3cm。脚を広げると10cm前後になることがあります。",

    distribution: "紅海からインド洋、西太平洋まで広く分布し、日本の暖かい海域でも見られます。",

    habitat: "浅いサンゴ礁、岩礁、サンゴ片の多い場所、海草藻場などに生息します。",

    diet: "自然下での詳しい食性資料は限られます。小動物や有機物などを利用すると考えられていますが、特定の主食は断定しません。",

    features: "体と細長い脚には鉤状の毛が生えています。この毛に海藻、カイメン、ホヤ類などを取り付けるため、何も付けていない本来の体形は見えにくくなります。",

    behavior: "昼間は岩の隙間などで隠れ、夜になると活動します。周囲の物をはさみで切り取り、体へ取り付けるカモフラージュ行動を行います。",

    reproduction: "雌雄は別々です。本種固有の繁殖時期など詳しい自然下の情報は限られているため、時期までは断定しません。",

    identification: "体全体を海藻やカイメンなどで覆っていることが大きな特徴です。ただし本来の甲羅は涙滴形で、脚は非常に細長くなっています。",

    nameOrigin: "海藻のくずなどを体に『背負う』姿から、モクズショイという非常に分かりやすい名前が付けられています。",

    humanRelation: "食用にはほとんど利用されません。カモフラージュ行動の代表的なカニとして、水族館や行動生態学の研究で注目されます。",

    observationPoint: "『カニを探す』より、まず動いている海藻やカイメンを探してください。よく見ると、その下から細い脚が出ていることがあります。",

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
        text: "多くのヒトデの管足には吸盤がありますが、モミジガイ類の管足には吸盤がありません。砂の上や中を移動する生活に適した形です。"
      },
      {
        title: "小さな貝を丸ごと食べる",
        text: "伊勢湾の胃内容物調査では、小型の巻貝や二枚貝が主要な餌として確認されています。"
      }
    ],

    bodyLength: "腕の長さは約5〜6cm程度。",

    distribution: "日本では北海道南西部以南の各地で確認され、東アジアからインド洋方面にも分布します。",

    habitat: "干潟から水深数十m程度までの砂底・泥混じりの砂底に生息します。",

    diet: "肉食性で、小型の巻貝や二枚貝など海底にいる無脊椎動物を捕食します。",

    features: "5本の腕を持ち、体は扁平です。腕の縁には板状の構造と細い棘が並びます。体色は灰青色から青みのある褐色です。",

    behavior: "砂の表面を滑るように移動し、体を浅く砂の中へ埋めることもあります。",

    reproduction: "雌雄は別々で海中へ卵と精子を放出します。発生研究では、受精から約2週間で幼生が海底へ沈み始め、約18日で稚ヒトデへの変態を完了した例があります。",

    identification: "トゲモミジガイと比べると、腕の縁の大きな棘がそれほど目立ちません。正確な識別では腕の縁にある板や棘の形を比較します。",

    nameOrigin: "5本の腕を広げた形が植物のモミジの葉を思わせることからモミジガイと呼ばれます。",

    humanRelation: "食用には利用されません。二枚貝の稚貝を捕食するため、貝類の養殖・種苗生産では害敵として扱われる場合があります。",

    observationPoint: "砂の中へ少し潜った個体がいないか探してみてください。トゲモミジガイと一緒にいれば、腕の縁の棘も比較できます。",

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
        text: "腕は通常6〜10本ほどあり、必ず8本になるわけではありません。同じ種類でも腕の本数が違います。"
      },
      {
        title: "自分の体を二つに分けて増える",
        text: "体を自ら二つに分裂させ、それぞれが足りない腕を再生する無性生殖を行います。実験では分裂を繰り返して個体数が増えることも確認されています。"
      }
    ],

    bodyLength: "腕の長さは約6cm程度。全体の大きさは腕の本数や再生状態によって大きく変わります。",

    distribution: "日本では本州中部以南などの沿岸で見られ、奄美大島などにも分布します。",

    habitat: "潮間帯から浅い岩礁、転石の多い場所などに生息します。",

    diet: "肉食性・広食性で、小型の貝類などを捕食します。アワビの稚貝を食べることも確認されています。",

    features: "細長い腕を6〜10本ほど持ちます。体色は褐色を基調とし、青色や白色の斑点が入ることがあります。腕の背面には棘が並びます。",

    behavior: "岩や石の裏などを利用して生活します。餌を見つけると管足を使って近づき、胃を体外へ出して消化することがあります。",

    reproduction: "有性生殖と無性生殖の両方を行います。無性生殖では体を二つに分裂させ、失われた腕を再生します。日本の研究では夏に分裂が増える個体群も確認されています。",

    identification: "腕の本数が5本ではなく、多くの場合6〜10本あることが分かりやすい特徴です。再生途中では腕の長さが不揃いになることもあります。",

    nameOrigin: "多数の腕を持つ姿を『八つ手』に見立ててヤツデヒトデと呼ばれます。ただし腕が必ず8本という意味ではありません。",

    humanRelation: "アワビの放流種苗を捕食するため、地域によっては漁業上の害敵として駆除対象になることがあります。",

    observationPoint: "腕を実際に数えてみてください。8本とは限りません。長さが違う腕があれば、分裂後に再生している途中かもしれません。",

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
        text: "大型の個体では、サザエの空殻を宿として利用することがあります。成長するほど必要な貝殻も大きくなります。"
      },
      {
        title: "昔の『ケブカホンヤドカリ』は同じ種",
        text: "以前 Pagurus barbatus とされ『ケブカホンヤドカリ』と呼ばれたものは、現在はヤマトホンヤドカリ Pagurus japonicus の異名として整理されています。"
      }
    ],

    bodyLength: "甲長は大型個体で約2.5cm程度。貝殻や脚を含めると見た目はさらに大きくなります。",

    distribution: "日本では太平洋側の房総半島以南、日本海側では青森県以南から九州まで確認され、中国北部、韓国、台湾北東部にも分布します。",

    habitat: "潮間帯から水深30m程度までの岩礁や砂泥底に生息します。",

    diet: "雑食性と考えられ、海底にある細かな有機物や動植物質を利用します。本種だけを対象にした詳細な食性資料は限られています。",

    features: "比較的大型のホンヤドカリ類で、右側のはさみが大きくなります。眼柄は中央部が赤色で両端が白っぽく、歩脚先端にも白色部があります。",

    behavior: "空になった巻貝の殻を背負い、成長するとより大きな殻へ交換します。大型個体ではサザエなど大きな巻貝の殻を利用します。",

    reproduction: "雌雄は別々で、メスは受精した卵を腹部に抱えて保護します。日本海沿岸では抱卵したメスの記録もありますが、繁殖時期は地域差があるため一律には示しません。",

    identification: "右のはさみが非常に大きく、眼柄中央部が赤色で、歩脚先端側に白色部があることが特徴です。",

    nameOrigin: "『ヤマト』を含む和名の詳しい命名経緯については今回確認した資料では明確でないため、推測では記載しません。",

    humanRelation: "一般的な食用種ではありません。大型になるホンヤドカリとして、巻貝の空殻との関係を観察できます。",

    observationPoint: "右と左のはさみを比べてください。また、大型個体がどんな種類の貝殻を利用しているのかを見るのもおすすめです。",

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
        text: "体は半透明から透明な円筒形で、内部の器官が外から透けて見えます。この透明感が『ユウレイ』という名前をイメージさせます。"
      },
      {
        title: "大人は動かないのに、子どもは泳ぐ",
        text: "成体は岩などに付着して動きませんが、幼生はオタマジャクシのような姿で泳ぎます。着底すると大きく体を変えてホヤの姿になります。"
      }
    ],

    bodyLength: "体長約10cmまで成長します。",

    distribution: "日本沿岸に自然分布します。人の活動に伴って北米西岸やニュージーランドなどにも広がり、国外では外来種として扱われる地域があります。",

    habitat: "岩などの自然物だけでなく、港の岸壁、桟橋、ロープ、水槽など人工物にも付着して生活します。",

    diet: "海水中の植物プランクトンや微細な有機物などを、体内の鰓を使ってこし取って食べます。",

    features: "体は透明な円筒形で、上部に入水孔と出水孔があります。体が透明なため、内部の消化管や生殖器などが見えることがあります。",

    behavior: "成体は基質へ固着して移動しません。海水を体内へ取り込み、餌をこし取った後、別の開口部から水を排出します。",

    reproduction: "雌雄両方の生殖器官を持つ雌雄同体で、卵と精子を水中へ放出します。自家受精も可能ですが、実験では他個体由来の精子との受精が優先される場合があることが示されています。",

    identification: "透明な円筒形の体が特徴です。よく似るカタユウレイボヤなどとは、体の色や内部構造、遺伝的特徴などを合わせて識別します。",

    nameOrigin: "透明な体が幽霊を思わせることが和名に関係すると考えられますが、正式な命名原典までは確認できなかったため断定しません。",

    humanRelation: "発生生物学や遺伝学の研究材料として広く利用されています。一方、海外では人工構造物などへ大量に付着する外来・付着生物として問題になる地域もあります。",

    observationPoint: "透明な体の内部を見てください。水の出入口だけでなく、消化管などの内部構造まで透けて見えることがあります。",

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
        text: "海水だけでなく塩分が低くなる河口にも生息できます。和歌川河口の調査では、汽水域を含む広い範囲で優占していました。"
      },
      {
        title: "古い学名はPagurus dubius",
        text: "古い図鑑では Pagurus dubius と書かれることがありますが、現在は Pagurus minutus の異名として扱われています。"
      }
    ],

    bodyLength: "甲長1cm前後になる小型のヤドカリです。背負う貝殻を含めた大きさは個体によって大きく異なります。",

    distribution: "日本沿岸を含む北西太平洋に分布します。日本では干潟や内湾で普通に見られるヤドカリの一つです。",

    habitat: "内湾、河口、干潟、浅い砂泥底などに生息します。塩分が変化する汽水環境にも進入できます。",

    diet: "雑食性で、海底にある藻類、細かな有機物、動物質などを利用します。",

    features: "小型のホンヤドカリ類で、右側のはさみが左側より大きくなります。歩脚が比較的細長く、名前の『ユビナガ』をイメージしやすい体形です。",

    behavior: "巻貝の空殻を背負って海底を歩きます。成長すると現在の殻が小さくなるため、より大きな空殻へ引っ越します。",

    reproduction: "土佐湾の研究では、主に冬に抱卵したメスが確認され、1回の繁殖期に複数回産卵することも知られています。繁殖時期には地域差があります。",

    identification: "小型で右のはさみが大きいホンヤドカリ類です。近縁種が多いため、脚の模様やはさみの形なども合わせて確認します。",

    nameOrigin: "歩脚が細長いことが『ユビナガ』という和名に関係しています。",

    humanRelation: "食用として利用されることはほとんどありません。干潟や河口の環境を利用する身近な甲殻類として、生態研究にも使われています。",

    observationPoint: "貝殻ではなく、外へ出ている脚とはさみを見てください。右のはさみの方が大きいことや、細長い歩脚を確認できます。",

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
        text: "佐渡島ではアナハゼ類やサラサカジカ、クダヤガラなどが、リッテルボヤの囲鰓腔を産卵場所として利用することが確認されています。"
      },
      {
        title: "現在も分類上の扱いに違いがある",
        text: "日本のBISMaLや新潟大学では Halocynthia ritteri として扱われています。一方、2026年のWoRMSでは Halocynthia igaboja の異名とされており、分類上の扱いが一致していません。"
      }
    ],

    bodyLength: "体長約8cm。",

    distribution: "日本海沿岸など日本周辺から記録されています。分類上の扱いによって分布範囲の解釈が変わる可能性があります。",

    habitat: "浅い岩礁や漁港の岸壁など、硬い場所に付着して生活します。佐渡島では水深2〜6m程度でも普通に観察されています。",

    diet: "海水を体内へ取り込み、植物プランクトンや微細な有機物などを鰓でこし取って食べます。",

    features: "袋状の体を持つ単体性のホヤです。入水孔と出水孔の周囲には多数の棘状突起があり、他のホヤとの識別点になります。",

    behavior: "成体は岩などへ固着しているため移動しません。入水孔から海水を取り込み、濾過した後に出水孔から排出します。",

    reproduction: "ホヤ類らしく幼生期には泳ぐことができますが、本種の日本沿岸における詳しい産卵時期については、今回確認した資料だけでは断定しません。",

    identification: "入水孔・出水孔の周囲に多数の棘があることが特徴です。現在は分類資料によって Halocynthia ritteri の扱いが異なるため、学名を利用する場合は注意が必要です。",

    nameOrigin: "種小名 ritteri は人物への献名です。現在の標準和名『リッテルボヤ』もこの学名に由来します。",

    humanRelation: "食用として一般的に利用されるホヤではありません。一方、魚類が体内を産卵場所として利用する例があり、生物同士の関係を観察できる興味深い種です。",

    observationPoint: "体の上にある2つの開口部を見てください。その周囲に多数のトゲ状突起があります。",

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
        text: "岩についているフジツボや二枚貝などを捕食します。見た目は動きの遅い巻貝ですが、沿岸では重要な捕食者です。"
      },
      {
        title: "イボニシとは殻口の色で見分けられる",
        text: "よく似たイボニシでは殻口の内側が暗色になりますが、レイシガイでは黄色から黄橙色を帯びます。"
      }
    ],

    bodyLength: "殻高は通常4〜5cm程度で、大型個体では約6cmに達します。",

    distribution: "日本では房総半島・男鹿半島以南から台湾付近まで分布します。",

    habitat: "潮間帯から水深20m程度までの岩礁に生息します。",

    diet: "肉食性で、フジツボ類、二枚貝など岩礁に付着する無脊椎動物を捕食します。",

    features: "殻は厚く頑丈な紡錘形で、殻表面には大きなこぶ状の突起があります。殻口の内側は黄色から黄橙色です。",

    behavior: "岩礁上を這って獲物を探します。冬は岩の隙間などであまり動かず、暖かくなると活動が活発になります。",

    reproduction: "夏に複数個体が集まり、岩の裏側やくぼみなどへ多数の卵嚢を産み付けます。日本では5月末から8〜9月ごろまで産卵する地域があります。",

    identification: "大きなこぶのある殻と黄橙色の殻口が特徴です。イボニシ Reishia clavigera との比較では、特に殻口内側の色が分かりやすい識別点です。",

    nameOrigin: "殻表面の大きなこぶが、植物のレイシの実に似ていることから『茘枝貝』と呼ばれます。",

    humanRelation: "主要な食用貝ではありません。カキやフジツボなどを捕食するため、付着生物群集の中では捕食者として重要です。",

    observationPoint: "殻の外側だけでなく、入口の内側を見てください。黄色っぽければ、イボニシとの違いが分かりやすくなります。",

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
        text: "日本のアコヤ真珠は、この貝の体内で作られます。外套膜が分泌する真珠層によって、核の周囲に真珠が形成されます。"
      },
      {
        title: "昔の学名とは扱いが変わっている",
        text: "日本のアコヤガイには Pinctada fucata martensii や Pinctada martensii という学名が広く使われてきましたが、現在WoRMSでは Pinctada fucata に統合されています。"
      }
    ],

    bodyLength: "殻長・殻高は約8〜10cmに達します。",

    distribution: "日本では本州中部以南から九州・南西諸島などに分布します。Pinctada fucata としてはインド・西太平洋に広く分布します。",

    habitat: "潮間帯から浅い海の岩礁などに生息し、足糸と呼ばれる丈夫な糸を出して岩などへ付着します。",

    diet: "海水中の植物プランクトンや微細な有機物を鰓でこし取って食べます。宇和海の養殖個体では、粒状有機物の大部分と付着微細藻類が餌として利用されることが確認されています。",

    features: "殻はやや四角形で薄く、内側には強い真珠光沢があります。殻の一部には足糸を外へ出すための切れ込みがあります。",

    behavior: "足糸で岩や養殖器具などへ付着します。成体は大きく移動せず、殻を開いて海水を濾過しながら生活します。",

    reproduction: "日本の温帯域では主に暖かい季節に生殖腺が成熟して産卵します。繁殖時期は水温や地域によって異なり、南方では異なる季節に産卵のピークが現れることもあります。",

    identification: "殻の内面に強い真珠光沢があることが特徴です。現在の分類では Pinctada fucata を使用しますが、日本の養殖資料では P. fucata martensii の表記も非常に多く残っています。",

    nameOrigin: "『アコヤ』は古くから使われる名称で、地名に由来するとする説などがありますが、確実な命名由来には諸説があります。",

    humanRelation: "日本の真珠養殖で最も重要な二枚貝です。三重県の英虞湾、愛媛県、長崎県などでアコヤ真珠の養殖が行われています。",

    observationPoint: "殻の外側よりも内側に注目です。光が当たると虹色に輝く真珠層を見ることができます。",

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
        text: "多くのウミシダには数十本以上の腕を持つ種類もいますが、オオウミシダは基本的に10本です。その1本1本が太く、30cm以上になる大型種です。"
      },
      {
        title: "昔はアフリカの種と同じ扱いだった",
        text: "長く Tropiometra afra macrodiscus という亜種名が使われてきましたが、現在は Tropiometra macrodiscus という独立種として扱われます。"
      }
    ],

    bodyLength: "腕長は30〜40cmほどに達する大型のウミシダです。",

    distribution: "日本の相模湾・小笠原諸島などから、韓国、中国、香港周辺まで分布します。",

    habitat: "南日本などの浅い岩礁に生息します。岩陰へ体を固定し、腕だけを水中へ広げていることがあります。",

    diet: "水中を漂うプランクトンや細かな有機物を、腕に並ぶ羽枝と管足で捕らえて口へ運びます。",

    features: "基本的に10本の非常に太く頑丈な腕を持ちます。体色は黒褐色から茶色が多いですが、全身が黄色い個体も知られています。",

    behavior: "巻枝で岩などへ強くつかまり、流れのある場所へ腕を広げて餌を捕らえます。刺激を受けても腕が比較的硬く、他のウミシダほど強く丸まらないことがあります。",

    reproduction: "本種固有の詳しい繁殖時期については情報が限られているため、特定の季節は断定しません。",

    identification: "基本的に10本の太く剛直な腕を持つことが特徴です。従来の Tropiometra afra macrodiscus 表記ではなく、現在は Tropiometra macrodiscus が受理名です。",

    nameOrigin: "非常に大型になるウミシダであることから『オオウミシダ』と呼ばれます。",

    humanRelation: "食用には利用されません。ウミシダ類の中でも大型で観察しやすく、棘皮動物の独特な摂食方法を学べる生物です。",

    observationPoint: "腕の本数を数えてみてください。多数に枝分かれして見えますが、大きな腕は基本的に10本です。",

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
        text: "古い資料では Phanogenia delicata や Comantheria delicata とされますが、現在BISMaLでは Comanthus delicatus が受理名です。"
      },
      {
        title: "ヤギ類などにつかまって生活する",
        text: "発達した巻枝を使って、ヤギ類などの枝へしっかりつかまっている姿が観察されています。"
      }
    ],

    bodyLength: "小型から中型のウミシダです。最大サイズについて信頼できる統一値を確認できないため、数値は断定しません。",

    distribution: "日本を含む西太平洋から記録されています。日本では伊豆半島周辺などでも確認されています。",

    habitat: "岩礁域に生息し、ヤギ類などの刺胞動物へ巻枝を絡ませて生活する個体が知られています。",

    diet: "ほかのウミシダ類と同様、腕と羽枝を広げ、水中を流れるプランクトンや細かな有機物を捕らえて食べます。",

    features: "多数の腕と羽枝を持ち、裏側には体を基質へ固定する巻枝があります。体色には変異があります。",

    behavior: "巻枝を使ってヤギ類などへ付着し、腕を水流へ広げて餌を捕らえます。必要に応じて腕を動かして移動することもできます。",

    reproduction: "本種固有の繁殖時期や幼生発生について、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "ウミシダ類は外見だけでの識別が難しく、腕や羽枝だけでなく、裏側にある巻枝や骨片の形などを確認して種を区別します。",

    nameOrigin: "『オガサワラコアシウミシダ』という和名が使われていますが、命名原典に基づく詳しい由来は今回確認できなかったため断定しません。",

    humanRelation: "食用には利用されません。ウミシダ類の分類や、ヤギ類などとの共生的な生息環境を学ぶ対象になります。",

    observationPoint: "腕だけではなく、体の裏側から伸びる『巻枝』に注目してください。ヤギの枝などへ巻き付いて体を固定します。",

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
        text: "泳ぐだけではなく、岩の上を跳ねるようにして別の潮だまりへ移動することがあります。"
      },
      {
        title: "卵を守るのはオス",
        text: "繁殖期のオスは岩の割れ目などに巣を作り、複数のメスが産んだ卵を孵化するまで守ります。"
      }
    ],

    bodyLength: "全長約12〜15cm。",

    distribution: "本州中部以南から九州、朝鮮半島南岸など北西太平洋に分布します。",

    habitat: "岩礁海岸の潮間帯や潮だまりに生息します。波の強い非常に浅い場所でも見られます。",

    diet: "主に岩の表面に生える藻類を削り取って食べる植物食性の強い魚です。",

    features: "体は細長く、褐色を基調に暗色の横帯があります。眼の上には一対の糸状の皮膚突起があります。",

    behavior: "潮だまりや岩の表面で生活します。危険を感じると水中を泳ぐほか、岩の上を跳ねるように素早く移動することがあります。",

    reproduction: "夏の潮だまりでは、オスが岩の割れ目に縄張りと巣を持ちます。メスが産んだ卵をオスが守り、小潮付近で産卵、次の大潮付近で孵化する半月周期も鹿児島で確認されています。",

    identification: "眼の上の細い皮弁と暗色の横縞が特徴です。Istiblennius edentulus と混同された時期がありますが、日本のカエルウオ Istiblennius enosimae は現在独立種として扱われています。",

    nameOrigin: "岩の上を跳ねるように動く姿がカエルを連想させると説明されることがあります。",

    humanRelation: "一般的な食用魚ではありません。潮だまりで観察しやすく、潮間帯への適応や繁殖行動の研究対象になっています。",

    observationPoint: "眼の上の糸のような突起を探してください。また、岩の表面を口で削るように藻類を食べる姿にも注目です。",

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
        text: "クマノミは雄性先熟型の性転換を行います。グループ内のメスがいなくなると、社会関係に応じてオスがメスへ変化することがあります。"
      },
      {
        title: "毒のあるイソギンチャクの中で暮らせる",
        text: "体表の粘液などによって宿主イソギンチャクの刺胞から身を守り、触手の間を外敵からの避難場所として利用します。"
      }
    ],

    bodyLength: "最大で全長約15cm。",

    distribution: "ペルシャ湾からインド洋、西太平洋まで広く分布し、北は台湾・南日本まで確認されています。",

    habitat: "水深1〜70m程度のサンゴ礁や岩礁で、宿主となる大型イソギンチャクとともに生活します。",

    diet: "動物プランクトン、小型甲殻類、藻類などを食べる雑食性です。",

    features: "黒色から褐色の体に2本の白い横帯があります。尾びれは黄色または白色になることがあり、地域や個体による体色変異が大きい種類です。",

    behavior: "大型イソギンチャクを生活の中心として利用し、成魚のペアと若い個体による小さなグループを作ることがあります。",

    reproduction: "雌雄のペアで繁殖し、イソギンチャク近くの岩などに卵を産みます。主にオスが卵を守り、ひれで水を送ります。オスからメスへの性転換も行います。",

    identification: "体の2本の白帯が特徴です。カクレクマノミは通常3本の白帯を持つため、見比べると違いが分かりやすくなります。",

    nameOrigin: "『クマノミ』の和名には複数の語源説があり、確実なものに絞れないため断定しません。",

    humanRelation: "海水観賞魚として世界的に知られています。イソギンチャクとの共生や性転換の研究材料としても重要な魚です。",

    observationPoint: "魚だけでなくイソギンチャクとの距離を見てください。危険を感じたときに触手の奥へ入り込む姿や、ペアの大きさの違いにも注目です。",

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
        text: "腕の長さがすべて同じではなく、長い腕と短い腕の差が大きいことが特徴です。長い腕は15cmほどになることがあります。"
      },
      {
        title: "体を隠して腕だけ伸ばす",
        text: "岩やサンゴの隙間へ体の中心部を隠し、長い腕だけを水流へ伸ばして餌を捕らえる姿がよく見られます。"
      }
    ],

    bodyLength: "長い腕は約15cmまで。通常20〜30本程度の腕を持つとされています。",

    distribution: "日本の南部を含む西太平洋に分布します。オーストラリアなどからも知られています。",

    habitat: "浅いサンゴ礁・岩礁に生息し、岩やサンゴの隙間へ体を入れて生活します。",

    diet: "腕と羽枝を水流へ広げ、動物プランクトンや細かな有機物を捕らえる懸濁物食者です。",

    features: "20〜30本程度の細長い腕を持ち、長い腕と短い腕の差が目立ちます。体色は暗緑色から黒色で、羽枝先端が黄色や白色になる個体があります。",

    behavior: "岩の隙間に体を隠し、長い腕だけを外へ伸ばすことがあります。巻枝は比較的少なく、コアシウミシダとよく似ています。",

    reproduction: "本種固有の繁殖時期や幼生発生については詳しい情報が限られるため、推測で記載しません。",

    identification: "コアシウミシダと非常によく似ます。ギスレンウミシダでは体の地色が黒っぽく、腕が30本以下になる傾向がありますが、正確な同定には細部の確認が必要です。",

    nameOrigin: "種小名 gisleni はウミシダ研究者にちなむ献名です。和名も学名の人名に由来します。",

    humanRelation: "食用には利用されません。コアシウミシダ類の分類や、ウミシダに共生する小型生物の研究対象になります。",

    observationPoint: "すべての腕を同じものとして見ず、長い腕と短い腕を探してください。羽枝の先端だけが黄色や白色になっていないかも観察ポイントです。",

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
        text: "多数の腕を持つウミシダもいますが、シモフリウミシダは通常10本で、最大でも12本程度です。"
      },
      {
        title: "ヤギなどの枝につかまって暮らす",
        text: "短く丈夫な巻枝を使ってヤギ類などへ付着し、腕を平面的に広げて水中の餌を捕らえます。"
      }
    ],

    bodyLength: "腕長は最大約10cm。",

    distribution: "日本沿岸など北西太平洋に分布します。佐渡島や南日本の岩礁でも確認されています。",

    habitat: "岩礁域で海藻やヤギ類などへつかまって生活します。佐渡では水深12〜20mほどから観察されています。",

    diet: "水中を漂うプランクトンや細かな有機物を、腕と羽枝にある管足で捕らえて口へ運びます。",

    features: "通常10本、最大12本程度の腕を持ちます。体色は黒色、橙色、紫色など変異があり、腕には白い斑点や縞模様が見られます。",

    behavior: "20〜30本ほどある短く丈夫な巻枝を使って、ヤギ類などへ体を固定します。腕を同じ平面上へ扇状に広げて水流から餌を捕らえます。",

    reproduction: "本種固有の産卵時期や発生について十分な情報が確認できないため、詳しい繁殖時期は断定しません。",

    identification: "通常10本の腕、白い霜降り状の模様、丈夫な巻枝が特徴です。よく似るトゲシモフリウミシダでは腕の基部側の羽枝が棘状に立ち上がります。",

    nameOrigin: "腕に入る白い細かな斑紋や縞が『霜降り』模様のように見えることからシモフリウミシダと呼ばれます。",

    humanRelation: "食用には利用されません。ヤギ類などに付着して濾過摂食するウミシダの生活様式を観察できます。",

    observationPoint: "腕の白い斑点だけでなく、体を固定している根元を見てください。短い巻枝がヤギなどへしっかりつかまっています。",

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
        text: "日本の水族館や図鑑では Liparometra grandis とされることが多いですが、現在のWoRMSでは Dichrometra grandis が受理名です。"
      },
      {
        title: "植物ではなく動物",
        text: "シダの葉のような姿をしていますが、ヒトデやウニと同じ棘皮動物です。多数の腕を水中へ広げて流れてくる餌を捕らえます。"
      }
    ],

    bodyLength: "標本では腕長約6〜12cm程度の個体が報告されています。腕は40本前後になる個体もあります。",

    distribution: "日本では相模湾周辺、伊豆半島、琉球列島などから記録されています。西太平洋の暖かい海域にも分布します。",

    habitat: "岩礁域に生息し、岩やサンゴなどへ巻枝を使ってつかまります。伊豆半島では浅い場所から水深10mを超える岩礁でも観察されています。",

    diet: "水中を漂うプランクトンや細かな有機物を腕と羽枝で捕らえて食べます。",

    features: "中心部から多数の羽毛状の腕が伸びます。体色は褐色、灰色、紫色など変異があります。体の裏側には基質へつかまるための巻枝があります。",

    behavior: "巻枝で岩などへつかまり、腕を水流へ広げて餌を捕らえます。休息時には腕を中心方向へ巻き込む姿も見られます。",

    reproduction: "ウミシダ類は雌雄が別々で、腕にある生殖器官から卵や精子を海中へ放出します。本種固有の日本での繁殖時期については十分な資料がないため断定しません。",

    identification: "腕数や巻枝、羽枝などの細かな形態が識別に重要です。国内では Liparometra grandis の名称が広く残っていますが、現在WoRMSでは Dichrometra grandis に変更されています。",

    nameOrigin: "和名『ツヤウミシダ』の詳しい命名由来について、今回確認した主要資料では明確な説明がないため断定しません。",

    humanRelation: "食用には利用されません。伊豆などではダイビング中にも観察でき、ウミシダ類の多様性を知ることができる生物です。",

    observationPoint: "腕だけでなく、体の裏側を岩へ固定している巻枝にも注目してください。腕を開いている時と丸めている時で印象が大きく変わります。",

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
        text: "細長い棒のような姿ですが、ヨコエビ類に近い甲殻類です。英語では体形からSkeleton shrimpと呼ばれます。"
      },
      {
        title: "海藻などへ後ろ脚でつかまる",
        text: "後方の脚を海藻、ヒドロ虫、コケムシなどへ引っ掛け、体を立てるような姿勢で生活します。"
      }
    ],

    bodyLength: "大型個体では体長約2cmを超え、海外では約23mmの記録があります。",

    distribution: "日本を含む各地の海域から知られ、船舶や養殖施設など人間活動に伴って世界各地へ分布を広げた地域もあります。",

    habitat: "海藻、海草、ヒドロ虫、コケムシ、養殖施設、浮桟橋などの付着生物群集の中で生活します。",

    diet: "水中の細かな有機物やプランクトンなどを利用します。付着場所の表面にある餌を取ることもあります。",

    features: "非常に細長い体を持ち、腹部が大きく退縮しています。前方には獲物などをつかむための大きな第2咬脚があります。",

    behavior: "後方の脚で基質へつかまり、上半身を水中へ伸ばします。体を左右へ振るように動かしながら餌を取ります。",

    reproduction: "メスは腹側にある育児嚢の中で卵と幼体を保護します。卵から生まれた幼体は成体に近い姿をしており、浮遊幼生期を持ちません。",

    identification: "ワレカラ属には似た種類が多いため、頭部や胸節にある突起、第2咬脚などを確認します。本種では頭部前方の棘状突起が特徴の一つです。",

    nameOrigin: "体に棘状の突起があるワレカラであることからトゲワレカラと呼ばれます。",

    humanRelation: "食用ではありません。人工構造物にも多数付着することから、付着生物や外来種研究の対象として世界各地で調査されています。",

    observationPoint: "非常に細いので、海藻そのものではなく『海藻から突き出して動いている細い棒』を探してください。",

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
        text: "鳥羽水族館では腕数が40本を超える大型のウミシダとして紹介されています。一本一本の腕にはさらに多数の羽枝が並びます。"
      },
      {
        title: "昔とは属名が大きく変わった",
        text: "過去には Comanthus japonicus や Oxycomanthus japonicus などの学名が使われましたが、現在は Anneissia japonica です。"
      }
    ],

    bodyLength: "腕長は約15cmに達し、全体では20cmほどになる大型のウミシダです。",

    distribution: "日本では房総半島および佐渡島以南に分布します。",

    habitat: "浅い海から水深数十m程度の岩礁に生息し、岩などへ巻枝を使ってつかまります。",

    diet: "腕を水流へ広げ、プランクトンや細かな有機物を羽枝と管足で捕らえて食べます。",

    features: "40本を超える多数の腕を持つことがあります。体色の個体差が大きく、黄色、褐色、黒色などさまざまな色彩があります。",

    behavior: "巻枝で岩などへ固定しながら腕を広げて餌を捕らえます。必要に応じて腕を使って這ったり泳いだりして場所を移動することもできます。",

    reproduction: "雌雄は別々です。生殖腺は腕の羽枝にあり、成熟すると卵または精子を海水中へ放出します。",

    identification: "多数の腕を持つ大型ウミシダですが、似た仲間も多いため、腕の分岐や巻枝など細かな形態も確認する必要があります。",

    nameOrigin: "日本から古くから知られているウミシダであることが和名に表れています。種小名 japonica も『日本の』を意味します。",

    humanRelation: "食用には利用されません。日本の温帯岩礁を代表する大型ウミシダの一つです。",

    observationPoint: "まず腕を何本くらい持っているか見てください。体色も個体ごとの差が大きいので、複数個体がいれば比較がおすすめです。",

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
        text: "大型のコウイカ類と違い、外套長は最大でも約7cmほどです。小型なことから英名ではStumpy cuttlefishと呼ばれます。"
      },
      {
        title: "海底を『歩く』ことがある",
        text: "腕と腹側の体を使い、泳ぐよりも海底を歩くように移動する行動が知られています。夜間に活発になる小型のコウイカです。"
      }
    ],

    bodyLength: "最大外套長約7cm。",

    distribution: "フィリピン、マレーシア、インドネシア、ニューギニアなど熱帯インド・西太平洋に分布します。",

    habitat: "浅いサンゴ礁や、その周辺の砂底・泥混じりの海底に生息します。野外研究では夜間、水深6〜12mのサンゴ礁で観察されています。",

    diet: "小型のエビ類など甲殻類や、小魚などを捕食します。",

    features: "小型で丸みのある胴を持ち、体色と模様を非常に素早く変化させます。背中側の内部にはコウイカ類特有の甲があります。",

    behavior: "夜行性が強く、昼間は周囲へ溶け込んで隠れます。色素胞を使って体色や模様を瞬時に変え、さらに砂を体へ付着させてカモフラージュする行動も観察されています。",

    reproduction: "雌雄は別々です。オスは交接腕を使って精包をメスへ渡します。受精したメスは卵を産みます。本種は飼育下で世代交代させることも可能です。",

    identification: "非常に小型のコウイカです。国内資料では Sepia bandensis の学名が残っていますが、2023年以降の分類体系と現在のWoRMSでは Ascarosepion bandense が受理名です。",

    nameOrigin: "種小名 bandense は、本種の模式産地であるインドネシアのバンダ海に由来します。このため標準和名は『バンダコウイカ』です。",

    humanRelation: "小型で飼育繁殖が可能なため、水族館だけでなく神経科学・行動学などの研究動物としても利用され始めています。",

    observationPoint: "体色を数秒間見続けてください。背景や行動に応じて色や模様が変化することがあります。海底を腕で歩くような動きも注目です。",

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
        text: "昼間は岩陰などで腕を丸めていますが、夜になると岩の上へ出て腕を大きく広げます。その姿が上から見ると日傘のように見えます。"
      },
      {
        title: "40〜50本もの腕を持つ",
        text: "腕長は約15cmまで成長し、腕は40〜50本ほどになります。体の裏側には50〜70本ほどの巻枝があります。"
      }
    ],

    bodyLength: "腕長最大約15cm。腕数は40〜50本程度。",

    distribution: "日本では佐渡島以南で見られ、インド洋、紅海、西太平洋まで非常に広く分布します。",

    habitat: "浅い岩礁やサンゴ礁に生息します。昼は岩陰や転石の下へ隠れ、夜間に外へ出ます。",

    diet: "水中を漂うプランクトンや細かな有機物を、羽毛状の腕で捕らえて食べます。",

    features: "多数の太めの腕を持ち、橙色から赤褐色の体に白色や紫色の斑点・横帯が入る個体が見られます。",

    behavior: "夜行性です。夜間には腕を扇状に広げ、水流へ向けて餌を捕らえます。刺激されると腕を使って這うように移動できます。",

    reproduction: "雌雄は別々で、生殖器官は羽枝にあります。本種固有の産卵時期については十分な日本の資料がないため断定しません。",

    identification: "国内資料では Lamprometra palmata が長く使われていますが、現在WoRMSでは Dichrometra palmata が受理名です。",

    nameOrigin: "岩上で多数の腕を円形に広げた姿が、上から見た日傘のように見えることからヒガサウミシダと呼ばれます。",

    humanRelation: "食用には利用されません。夜間のサンゴ礁・岩礁で、ウミシダ類の濾過摂食行動を観察できる種類です。",

    observationPoint: "昼と夜で姿が大きく変化します。腕を丸めているのか、日傘のように大きく開いているのかを見てください。",

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
        text: "日本のウミシダ専門資料では Clarkcomanthus exilis をヒゲクシウミシダとして区別しますが、現在のWoRMSでは C. exilis は C. comanthipinna の異名として統合されています。"
      },
      {
        title: "昼間は隠れ、夜に腕を伸ばす",
        text: "日本でC. exilisとして研究された個体は夜行性で、昼間は石の下などへ隠れ、夜になると腕を外へ伸ばします。"
      }
    ],

    bodyLength: "日本でヒゲクシウミシダとして扱われてきた型では、腕長約10cmまで、腕数20〜30本程度です。",

    distribution: "日本の専門資料でヒゲクシウミシダとされた型は、相模湾以南の西太平洋に分布します。",

    habitat: "浅い岩礁やサンゴ礁で見られ、昼間は転石下や岩の隙間へ潜んでいます。",

    diet: "腕と羽枝を水流へ広げ、プランクトンや微細な有機物を捕らえて食べます。",

    features: "日本でC. exilisとされた型では体の地色は赤色で、腕に白い横帯が数本あります。腕を広げると同心円状の模様に見えることがあります。",

    behavior: "夜行性で、夜には隠れ場所から数本以上の腕を水中へ伸ばして摂餌します。",

    reproduction: "ウミシダ類として雌雄による有性生殖を行います。本種の日本における詳しい繁殖時期は十分に分かっていません。",

    identification: "分類には注意が必要です。2017年の分子・形態研究では Clarkcomanthus exilis が C. comanthipinna に統合され、現在WoRMSもこの扱いを採用しています。一方、日本の図鑑ではヒゲクシウミシダとコヒゲクシウミシダを別に掲載した資料があります。",

    nameOrigin: "腕に並ぶ羽枝が櫛やひげのように見えることが名称を連想させますが、正式な命名原典については断定しません。",

    humanRelation: "食用には利用されません。ウミシダ類の形態分類とDNAによる分類結果が必ずしも一致しない例としても興味深い種類です。",

    observationPoint: "赤い腕に白い横帯が入っているか確認してください。ただし現在は分類学的に統合されているため、見た目だけでC. exilis型と断定するのは避けます。",

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
        text: "長年 Octopus vulgaris とされてきましたが、分類学的な再検討により、日本など東アジアのマダコは Octopus sinensis として扱われています。"
      },
      {
        title: "吸盤で触りながら味も感じる",
        text: "腕の吸盤には接触だけでなく化学物質を感知する能力もあり、物に触れながら餌かどうかなどを調べることができます。"
      }
    ],

    bodyLength: "大型個体では全長50〜60cm程度になり、体重2kg前後まで成長する個体もいます。",

    distribution: "日本、中国、朝鮮半島周辺など東アジアの沿岸に分布します。",

    habitat: "浅い岩礁、砂や小石が混じる海底、砂泥底など幅広い沿岸環境に生息します。岩穴などを巣として利用します。",

    diet: "カニやエビなどの甲殻類、二枚貝、巻貝、小魚などを捕食します。",

    features: "8本の腕を持ち、腕には2列の吸盤が並びます。体内に硬い骨格をほとんど持たないため、非常に狭い隙間へ体を入り込ませることができます。",

    behavior: "岩穴などを巣にして生活し、周囲の石や貝殻を巣の入口へ集めることがあります。色素胞や皮膚の凹凸を使い、背景に合わせて体色・模様・質感を変化させます。",

    reproduction: "オスは交接腕を使って精包をメスへ渡します。メスは岩穴などの天井に多数の卵を房状に産み、孵化するまで卵へ水を送りながら守ります。繁殖後は寿命を終える一回繁殖型です。",

    identification: "日本産個体は長く Octopus vulgaris とされてきましたが、2016年の分類学的再検討以降 Octopus sinensis が有効名として使用されています。",

    nameOrigin: "『真蛸』と書き、日本で代表的なタコとして古くから使われてきた名称です。",

    humanRelation: "日本を代表する重要な水産物です。刺身、寿司、煮物、たこ焼きなど多くの料理に利用され、養殖技術の研究も進められています。",

    observationPoint: "体色だけでなく皮膚表面を見てください。滑らかな状態から、周囲の岩のような凹凸を持つ状態へ短時間で変化することがあります。",

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
        text: "管から広がる花のような部分は鰓冠です。呼吸だけでなく、水中を漂う餌を集める役割も持っています。"
      },
      {
        title: "危険を感じると一瞬で管へ消える",
        text: "魚や物体の接近などを感じると、広げていた鰓冠を瞬時に棲管の中へ引っ込めます。"
      }
    ],

    bodyLength: "体長約10〜15cm程度。鰓冠を広げるとさらに大きく見えます。",

    distribution: "日本沿岸を中心に、西太平洋の一部から記録されています。",

    habitat: "潮間帯から浅い海の岩礁や砂・小石の混じる場所に生息し、粘液などで作った細長い棲管の中で生活します。",

    diet: "水中を漂う植物プランクトンや微細な有機物を鰓冠で捕らえて食べます。",

    features: "細長い体は棲管の中に隠れています。管の入口から多数の鰓糸が集まった大きな鰓冠を広げます。鰓冠には白色、褐色、赤紫色などさまざまな模様があります。",

    behavior: "普段は鰓冠だけを水中へ広げて濾過摂食します。振動や影などの刺激を受けると、非常に速く鰓冠を管内へ引き込みます。",

    reproduction: "雌雄による有性生殖を行います。本種固有の日本での産卵期について信頼できる情報が限られるため、具体的な月は断定しません。",

    identification: "ケヤリムシでは鰓糸が非常に多く、整然と一列に並ばず、全体としてぼんぼり状の鰓冠になります。",

    nameOrigin: "大名行列などで使われた毛槍のように鰓冠が広がることから『ケヤリムシ』と呼ばれます。",

    humanRelation: "食用には利用されません。美しい鰓冠から水族館や海水飼育で観察されるほか、多毛類の濾過摂食を学べる生物です。",

    observationPoint: "近づいた時に突然消えたように見えたら、鰓冠を管へ引っ込めています。しばらく静かに待つと再びゆっくり広がることがあります。",

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
        text: "胴の背中側には石灰質の甲があります。浮力調整にも関わり、浜辺に白い甲だけが打ち上げられていることもあります。"
      },
      {
        title: "2023年以降、属名が変更された",
        text: "長く Sepia esculenta と呼ばれてきましたが、コウイカ科の系統解析を反映した現在の分類では Acanthosepion esculentum が受理名です。"
      }
    ],

    bodyLength: "最大外套長約18cm、体重約600gに達します。",

    distribution: "日本では関東以西に分布し、朝鮮半島、中国沿岸、東シナ海・南シナ海など北西太平洋に分布します。",

    habitat: "沿岸から水深100m程度までの砂泥底などに生息します。繁殖期には浅い内湾へ移動します。",

    diet: "エビやカニなどの甲殻類、小魚などを捕食します。",

    features: "胴は幅広い楕円形で、左右の縁には細いひれが続きます。体色は褐色を基調に白色斑や黒色斑があり、成熟したオスでは横縞が目立つことがあります。",

    behavior: "体色や模様を瞬時に変えて背景へ溶け込みます。砂泥底では体を砂へ埋めることもあります。",

    reproduction: "春を中心に沿岸へ移動して繁殖します。オスから精包を受け取ったメスは、海藻や沈木などへ卵を産み付けます。",

    identification: "体内の甲と幅広い胴が特徴です。従来の Sepia esculenta は現在、Acanthosepion esculentum へ属が変更されています。",

    nameOrigin: "漢字では『甲烏賊』と書き、体内に硬い甲を持つことが和名の由来です。",

    humanRelation: "日本・東アジアで重要な食用イカです。刺身、寿司、炒め物などに利用され、地域漁業の重要な対象になります。",

    observationPoint: "体色の変化に注目してください。さらに胴の左右を縁取る細いひれが波打つように動く様子も観察ポイントです。",

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
        text: "体の左右から伸びる白い毛のような剛毛は非常に細く、皮膚へ刺さると強い痛みや炎症を起こすことがあります。"
      },
      {
        title: "背中には紫色の模様が並ぶ",
        text: "背面中央には暗紫色の丸い斑紋が一列に並びます。白い剛毛と合わせて本種を見分ける特徴です。"
      }
    ],

    bodyLength: "通常7〜8cm程度ですが、大型個体では15cmほどに達することがあります。",

    distribution: "日本では本州中部以南などに分布し、インド・西太平洋の暖かい海域に広く見られます。",

    habitat: "浅い海から潮下帯の砂底・砂泥底などで生活します。",

    diet: "肉食性・腐肉食性があり、小型の底生動物や動物の死骸などを利用します。地域によっては刺胞動物や海綿などを食べることも知られています。",

    features: "細長い体は多数の体節からできています。各節の両側には白い剛毛の束があり、背中の中央には暗紫色の楕円形斑紋が並びます。",

    behavior: "砂泥底の表面を這って移動し、餌を探します。刺激を受けると剛毛が目立つ状態になります。",

    reproduction: "本種固有の日本沿岸での詳しい産卵時期については、今回確認した主要資料では十分な情報がないため断定しません。",

    identification: "左右に並ぶ白い剛毛と、背中中央に一列に並ぶ紫色の斑紋が特徴です。ウミケムシ科には複数種が存在するため、これらの模様を確認します。",

    nameOrigin: "白い剛毛が陸上の毛虫の毛のように見えることから『海毛虫』と呼ばれます。",

    humanRelation: "毒性のある剛毛が皮膚へ刺さるため、海岸や釣りで見つけても素手で触るべきではありません。釣り針に掛かって上がってくることもあります。",

    observationPoint: "触らずに、背中中央の紫色の斑点と両側の白い剛毛を観察してください。毛の一本一本は非常に細いため、水槽越しの観察が安全です。",

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
        text: "魚やクラゲではなく、巻貝と同じ腹足類の仲間です。成体では貝殻を持たず、翼のような『翼足』を動かして泳ぎます。"
      },
      {
        title: "食事の時は頭から6本の器官が出る",
        text: "ミジンウキマイマイなどを捕食するとき、頭部から6本のバッカルコーンと呼ばれる器官を伸ばして獲物をつかみます。"
      }
    ],

    bodyLength: "日本周辺で見られる個体は体長1〜2cm程度。",

    distribution: "北太平洋の寒冷な海域に分布します。日本では北海道周辺などで見られ、知床沖では流氷が訪れる冬季に表層へ現れることがあります。",

    habitat: "冷たい海の水中を漂って生活する浮遊性の軟体動物です。海底で生活する生物ではありません。",

    diet: "主に同じ翼足類のミジンウキマイマイを捕食します。頭部からバッカルコーンを伸ばして獲物を捕らえます。",

    features: "透明な細長い体を持ち、体内の消化器官などが橙赤色に透けて見えます。左右には翼のような翼足があり、それを羽ばたかせるように動かして泳ぎます。",

    behavior: "翼足を連続して動かしながら水中を漂います。餌を感知すると頭部を大きく開き、普段は見えない捕食器官を使って獲物を捕らえます。",

    reproduction: "Clione属は雌雄両方の生殖器官を持つ雌雄同体として知られています。ただし Clione elegantissima の日本周辺における詳しい繁殖時期については十分な資料がないため断定しません。",

    identification: "日本で『クリオネ』としてよく知られる北太平洋産種は Clione elegantissima です。古い資料や海外資料では別種の Clione limacina と一括して扱われる場合があるため注意が必要です。",

    nameOrigin: "和名『ハダカカメガイ』は、成体が貝殻を持たないカメガイ類であることに由来します。『クリオネ』は属名 Clione から広まった呼び名です。",

    humanRelation: "透明な体と泳ぐ姿から水族館で非常に人気があります。一方、特殊な餌を必要とするため長期飼育には餌の確保などの難しさがあります。",

    observationPoint: "翼足がどのようなリズムで動いているか見てください。餌を食べる瞬間に出会えれば、普段の『天使』の姿から大きく変わる頭部も見どころです。",

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
        text: "甲羅や脚の表面には短い毛が密生しています。この毛によって表面がビロードのように見えることがあります。"
      },
      {
        title: "暖かい海が苦手",
        text: "北海道のオホーツク海では水温10℃以下の冷たい環境を好むことが確認されています。冷たい海を代表するカニの一つです。"
      }
    ],

    bodyLength: "大型個体では甲長約15cmに達します。",

    distribution: "日本海北部、北海道周辺、東北地方から北の太平洋、オホーツク海、ベーリング海など北太平洋の寒冷域に分布します。",

    habitat: "水深数十〜200m程度の砂底・砂泥底などに生息します。北海道では特に冷たい海水を好みます。",

    diet: "海底にいるゴカイ類、貝類、甲殻類などの小型動物を食べる動物食性の強い雑食性です。状況によっては同種を食べることもあります。",

    features: "丸みのある甲羅と太い脚を持ち、体表全体が短い毛に覆われています。甲羅や脚には多数の小さな突起があります。",

    behavior: "海底を歩きながら餌を探します。成長するためには脱皮が必要で、脱皮直後は甲羅が柔らかいため外敵に襲われやすくなります。",

    reproduction: "交尾後、メスは受精卵を腹部に抱えて長期間保護します。水温の低い環境では卵の発生に長い時間がかかり、孵化までおよそ1年を要する場合があります。",

    identification: "クリガニ類の中でも大型で、体全体を覆う密な毛と丸い甲羅が大きな特徴です。",

    nameOrigin: "甲羅や脚に毛が密生していることから、そのまま『毛蟹』と呼ばれます。",

    humanRelation: "北海道を代表する重要な水産物です。資源保護のため地域ごとに漁期や甲長などの漁獲規制が設けられています。",

    observationPoint: "甲羅だけでなく脚を近くで見てください。表面に非常に細かな毛がびっしり生えていることが分かります。",

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
        text: "若魚やメスでは体表の円錐形の突起がよく発達しますが、成熟したオスでは突起が小さくなったり、ほとんど消えたりすることがあります。"
      },
      {
        title: "腹びれが吸盤に変化している",
        text: "腹側には腹びれが変化してできた吸盤があり、岩や貝殻などへ体を固定することができます。"
      }
    ],

    bodyLength: "最大15cm前後。多くの個体は5〜10cm程度です。",

    distribution: "日本では山口県以北の日本海側、千葉県以北の太平洋側などで見られ、オホーツク海、ベーリング海、ロシア沿海州などにも分布します。",

    habitat: "比較的深い冷たい海に生息します。夏から秋には水深100〜300m付近で多く見られ、季節によってより深い場所へ移動することがあります。",

    diet: "動物プランクトンを主に食べます。日本海北西部の研究では、端脚類の Themisto japonica を非常に多く捕食することが確認されています。",

    features: "丸みのある体を持ち、メスや若い個体では体表に多数の硬い円錐形突起があります。この姿がお菓子の金平糖によく似ています。",

    behavior: "腹側の吸盤を使って岩や貝殻などへ付着できます。産卵期のオスは産卵場所となる大型巻貝の空殻を確保することがあります。",

    reproduction: "ロシア沿海州では春と秋に産卵し、特に春に多いことが報告されています。メスは大型巻貝の空殻の内部へ卵を産み、オスが孵化まで卵を守ります。",

    identification: "古い日本の資料では Eumicrotremus birulai とされることがありますが、現在は Eumicrotremus asperrimus が有効名です。E. birulai は同種の異名として整理されています。",

    nameOrigin: "体表に多数並ぶ円錐形の突起が、砂糖菓子の『金平糖』に似ていることから名付けられました。",

    humanRelation: "食用としての利用はほとんどありませんが、非常に特徴的な姿から冷水性生物を展示する水族館で人気があります。",

    observationPoint: "まず体表の突起と、お腹側の吸盤を探してください。突起が少ない個体がいれば、成熟したオスである可能性があります。",

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
        text: "孵化して間もない稚魚では、頭部の周囲に白いリング状の模様が見られます。成長すると消えてしまうため、『天使の輪』と呼ばれています。"
      },
      {
        title: "小さいけれど立派な吸盤を持つ",
        text: "腹びれが変化した吸盤を使い、海藻や岩へくっつきます。波がある浅い海でも体を固定できます。"
      }
    ],

    bodyLength: "最大標準体長約2cmの非常に小さな魚です。",

    distribution: "現在の分類では、日本の太平洋側の本州、主に千葉県から三重県にかけて分布することが確認されています。",

    habitat: "水深0〜20m程度の浅い岩礁域に生息し、海藻や岩などに吸盤で付着して生活します。",

    diet: "小型の甲殻類などを捕食します。FishBaseではカニ類を餌として利用することが記録されています。",

    features: "丸く小さな体で、体表にコンペイトウのような硬い突起はありません。体色には赤、緑、褐色など大きな変異があり、腹側には吸盤があります。",

    behavior: "泳ぎ続けるよりも、吸盤を使って海藻や岩へ付着している時間が長い魚です。",

    reproduction: "冬の低水温期に繁殖します。オスは貝殻や岩の穴などを産卵場所として利用し、メスが産んだ卵を孵化まで守ります。オスが体や大きな背びれで卵を覆うように保護する行動も知られています。",

    identification: "古い資料では Lethotremus awae とされていますが、2017年の分類学的再検討によって Eumicrotremus awae とされました。日本海側に分布するサクラダンゴウオ Eumicrotremus uenoi とは別種です。",

    nameOrigin: "丸く小さな体形が食べ物の『団子』のように見えることからダンゴウオと呼ばれます。",

    humanRelation: "小さく丸い姿からダイバーや水族館で人気があります。八景島では繁殖にも成功し、2026年には異なる成長段階の個体をLABO3で同時展示しています。",

    observationPoint: "まずお腹側の吸盤に注目してください。小さな個体なら、頭の周りに白い『天使の輪』が残っていないかも探してみましょう。",

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
        text: "一般的なカニが属する短尾下目ではなく、ヤドカリ類と同じ異尾下目に分類されます。見た目はカニですが進化的にはヤドカリに近い仲間です。"
      },
      {
        title: "見えている歩脚は3対だけ",
        text: "一般的なカニより歩脚が1対少なく見えます。実際には小さくなった最後の脚が甲羅の下に隠れており、体や鰓の掃除などに使われます。"
      }
    ],

    bodyLength: "大型個体では脚を広げた幅が1mを超え、海外では約1.5mに達する記録もあります。",

    distribution: "北太平洋の寒冷域に分布します。日本では北海道周辺やオホーツク海に見られ、ベーリング海、アラスカ沿岸などにも分布します。",

    habitat: "冷たい海の海底に生息します。若い個体は小石や貝殻など隠れ場所の多い浅い場所を利用し、成長した個体は大陸棚のより深い海へ移動します。",

    diet: "雑食性で、ゴカイ類、貝類、フジツボ、ほかの甲殻類、小魚、ヒトデ、クモヒトデなど非常に幅広い生物を食べます。",

    features: "全身が硬い甲羅と鋭い棘に覆われています。大きなはさみを1対と、外から目立つ3対の歩脚を持ちます。",

    behavior: "海底を長い脚で歩きながら餌を探します。若い個体では多数が集まって大きな群れを作ることもあります。",

    reproduction: "メスは多数の受精卵を腹部に抱えて保護します。成熟したメスは1回に数万〜数十万個の卵を持つことがあり、孵化した幼生は2〜3か月ほど水中を漂った後、海底へ着底します。",

    identification: "本種は『カニ』という名前ですが異尾下目に属します。外から見える歩脚が3対で、一般的なカニより1対少なく見えることが分かりやすい特徴です。",

    nameOrigin: "漢字では『鱈場蟹』と書き、タラが漁獲される漁場で一緒に捕れることが名前の由来とされています。",

    humanRelation: "日本でも非常に人気の高い高級水産物です。北太平洋では重要な漁業対象となっており、資源量を管理しながら漁獲されています。",

    observationPoint: "脚を数えてみてください。普通のカニとの違いに気づけます。甲羅の下側に隠れた小さな最後の脚も観察できるか探してみましょう。",

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
        text: "成獣ではオスの方が大型になります。国立科学博物館の資料ではオスは体長195〜230cm、メスは165〜195cmほどです。"
      },
      {
        title: "1時間近く潜れることがある",
        text: "優れた潜水能力を持ち、海外の調査では水深約475mまで潜り、最大約1時間潜水することが確認されています。"
      }
    ],

    bodyLength: "成獣オスは体長約195〜230cm・170〜310kg、メスは約165〜195cm・105〜186kg。",

    distribution: "北大西洋とバルト海に分布します。北米東岸、イギリス、アイスランド、北欧、ロシア西部などに生息し、日本周辺に自然分布するアザラシではありません。",

    habitat: "沿岸海域で生活し、繁殖や休息の際には岩礁海岸、島、砂州、海氷などへ上陸します。",

    diet: "魚類を中心に、甲殻類、イカ、タコなどを捕食します。地域・季節・年齢によって食べるものは変化します。",

    features: "外耳はなく、後肢を前方へ回して陸上を歩くことはできません。特に成獣オスでは鼻先が長く盛り上がり、横から見ると特徴的な顔つきになります。",

    behavior: "普段は海中で餌を探し、休息・換毛・繁殖などの際に陸上へ上がります。潜水能力が高く、長時間海中で採餌できます。",

    reproduction: "メスは約11か月の妊娠期間を経て、通常1頭の子を産みます。生まれた子には白い産毛があり、約3週間母乳を飲んだ後に離乳します。出産時期は生息地域によって異なります。",

    identification: "オスでは長く盛り上がった鼻先が特徴です。体には灰色・褐色を基調とした斑点模様があります。耳たぶがないこともアザラシ科の特徴です。",

    nameOrigin: "灰色を基調とする体色から『ハイイロアザラシ』と呼ばれます。学名 Halichoerus grypus は特徴的な鼻の形にも関係する名称です。",

    humanRelation: "野生では北大西洋沿岸の代表的な大型アザラシです。国や地域によって保護・管理の対象となり、水族館では海棲哺乳類の体のつくりや潜水適応を学べる生物です。",

    observationPoint: "顔を横から見て、鼻先の形に注目してください。また、泳ぐ時に後肢をどのように使っているのかも観察してみましょう。",

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
        text: "ダンゴウオ科の特徴として、左右の腹びれが変化して一つの吸盤になっています。岩などへ吸い付いて体を固定できます。"
      },
      {
        title: "飼育下では水温4.2℃で産卵した例がある",
        text: "小樽水族館の繁殖例では、オスが体を震わせてメスへ求愛し、水温4.2℃で産卵が確認されました。"
      }
    ],

    bodyLength: "最大で全長約20cm。",

    distribution: "北西太平洋に分布し、南部オホーツク海、南千島、北海道太平洋沿岸、日本海、東シナ海などから記録されています。",

    habitat: "冷たい海の海底付近に生息します。FishBaseでは水深0〜232mから記録されています。",

    diet: "野生での詳しい食性については情報が限られています。飼育下ではオキアミ、イカナゴ、イカ、ホッケなどを食べた例がありますが、これは飼育餌であり自然下の主食を示すものではありません。",

    features: "名前の通り風船のように丸みの強い体を持ちます。腹面には吸盤があり、体色や斑紋には個体差があります。",

    behavior: "泳ぎ続けるよりも、吸盤を利用して岩などへ付着していることがあります。冷水環境に適応した底生性の魚です。",

    reproduction: "飼育下では低水温期に産卵が確認されています。小樽水族館の例ではオスが体を震わせる求愛を行い、産卵後の卵塊に親魚による卵保護は確認されませんでした。本種が常に卵を守らないとまでは断定できません。",

    identification: "丸く膨らんだ体と腹側の吸盤が特徴です。同属のコンペイトウとは、体表の発達した円錐形突起などを比較します。",

    nameOrigin: "丸く膨らんだ体が風船のように見えることから『フウセンウオ』と名付けられています。",

    humanRelation: "食用として重要な魚ではありませんが、特徴的な丸い姿から冷水性生物を展示する水族館で人気があります。飼育下繁殖の研究も行われています。",

    observationPoint: "お腹側の吸盤を探してください。同じLABO3のコンペイトウやダンゴウオと並べて、体表の突起や大きさの違いを見るのがおすすめです。",

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
        text: "頭部には多数の房状の皮膚突起があります。岩や海藻に紛れるのに役立つ独特な外見です。"
      },
      {
        title: "ナマコをかじって食べる",
        text: "陸奥湾の研究ではマナマコなどのナマコ類や巻貝を食べ、鋭い歯で獲物の体を噛み切ることが確認されています。"
      }
    ],

    bodyLength: "全長50cmほどになり、50cmを超える大型個体も知られています。",

    distribution: "北西太平洋の冷たい海域に分布します。日本では日本海側で兵庫県以北、太平洋側では岩手県以北などで確認され、北海道、朝鮮半島、中国北部、ロシア沿海州にも分布します。",

    habitat: "浅い沿岸の岩礁に生息し、海藻の間や岩の割れ目、穴などを隠れ場所として利用します。",

    diet: "肉食性で、ナマコ類や大型の巻貝、イソギンチャクなどを食べます。陸奥湾での研究ではマナマコとエゾボラ類が主要な餌として確認されています。",

    features: "細長く大型の体を持ち、頭部周辺には多数の房状の皮膚突起があります。褐色を基調とした複雑なまだら模様があり、岩礁や海藻に紛れやすい姿です。",

    behavior: "岩の割れ目や海藻の中へ身を隠す性質が非常に強く、自然下では大型個体でも見つけにくい魚です。",

    reproduction: "陸奥湾では水温が10℃以下になる11月下旬〜12月に産卵します。水槽内での観察ではメスが岩穴に産んだ卵塊を守り、水温3.5〜10℃では孵化まで約2か月かかりました。",

    identification: "頭部にある多数の房状の皮膚突起と、大型で細長い体が特徴です。幼魚では頬の鱗など一部の特徴が成魚ほど分かりやすくありません。",

    nameOrigin: "頭部に『房』のような皮膚突起が多数あるギンポ類であることからフサギンポと呼ばれます。",

    humanRelation: "主要な食用魚ではありませんが、北方系の岩礁魚として水族館で展示されます。繁殖や成長についても日本で研究されています。",

    observationPoint: "頭の周りをよく見てください。海藻のように見える細かな房が魚自身の体の一部だと分かります。岩陰に隠れて顔だけ出していることもあります。",

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
        text: "雪や氷のない地面に小石を集めます。巣を高くすることは、卵やひなを雪解け水から遠ざけるのに役立ちます。"
      },
      {
        title: "雪の上ではお腹で滑る",
        text: "歩くだけでなく、お腹を雪につけて滑りながら移動することもあります。"
      }
    ],

    bodyLength: "立った高さ約70cm、体重約3〜6kg。",

    distribution: "南極大陸の沿岸と周辺の島々に広く分布します。",

    habitat: "海で餌をとり、繁殖には岩や小石が露出した陸地を利用します。冬は流氷域の海でも生活します。",

    diet: "オキアミ類や魚類、小型の甲殻類。食べるものの割合は採餌場所によって変わります。",

    features: "頭部と背面は黒く、腹面は白いペンギンです。成鳥は目の周りに白い輪があります。外見だけで雌雄を区別するのは難しい種です。",

    behavior: "海中で採餌し、繁殖地では集団で生活します。氷上を長い距離歩いて海と繁殖地を往復することがあります。",

    reproduction: "南半球の春から夏に繁殖します。通常2卵を産み、雌雄が抱卵と採餌を交代します。育ったひなは集団をつくります。",

    identification: "黒い顔と、目を取り囲む白い輪が目印です。ジェンツーペンギンの頭頂部の白帯や、ヒゲペンギンのあごの黒線と見比べられます。",

    nameOrigin: "『アデリー』はフランスの探検家デュモン・デュルヴィルの妻アデールの名にちなみます。",

    humanRelation: "南極の海洋生態系を調べるため、繁殖や採餌行動の長期調査が行われています。",

    observationPoint: "目の周囲の白い輪を探し、ほかのペンギンとの顔の模様の違いを見てください。",

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
        text: "巣をつくらず、足の上に卵を載せて抱卵します。"
      },
      {
        title: "『王様』でも大きさは2番目",
        text: "現生のペンギンではコウテイペンギンに次ぐ大きさです。両種は同じ属に分類されます。"
      }
    ],

    bodyLength: "立った高さ約85〜95cm。体重は繁殖周期で変動し、求愛開始時は約10〜15kg。",

    distribution: "サウスジョージア島、クローゼ諸島、ケルゲレン諸島、マッコーリー島などの亜南極の島々で繁殖します。",

    habitat: "海で採餌し、繁殖地には海に近い雪や氷のない浜や平地を利用します。",

    diet: "主にハダカイワシ類などの魚類。イカ類も食べ、冬にその割合が増える例があります。",

    features: "大型で、頭部は黒く、腹面は白色です。頭の両側から胸の上部にかけて、鮮やかな橙色から黄色の部分が目立ちます。",

    behavior: "多数の個体が集まる繁殖地を形成します。親鳥は海へ餌をとりに出かけ、繁殖地のひなへ餌を運びます。",

    reproduction: "抱卵期間は約54日。繁殖周期は換羽前の時期を含め約13〜16か月と長く、毎年必ずひなを育て上げられるわけではありません。",

    identification: "LABO4のほかの3種より大きく、頭の両側と胸の鮮やかな色が目印です。コウテイペンギンとは別種です。",

    nameOrigin: "ヨーロッパで知られた当初、最大のペンギンと考えられたことが英名King penguinの背景にあります。",

    humanRelation: "過去には亜南極の島々で油を得るために捕獲され、個体数が大きく減った地域があります。",

    observationPoint: "体の大きさと頭の両側の橙色に注目してください。同じ展示の小型のペンギンと比べると違いが分かります。",

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
        text: "左右の目の上の白い部分が頭頂部でつながり、帯のように見えます。"
      },
      {
        title: "場所によって献立が変わる",
        text: "魚だけでなく甲殻類やイカも食べます。地域や季節によって餌の組み合わせが変わります。"
      }
    ],

    bodyLength: "立った高さ約76cmが目安。成鳥の体重約5〜8kg。地域・性別・季節で差があります。",

    distribution: "亜南極の島々と南極半島に分布します。ここでは参照資料がジェンツーペンギンとして扱う範囲を示します。",

    habitat: "沿岸で採餌し、海岸の雪のない地面や草の生えた場所などで繁殖します。",

    diet: "オキアミ類を含む甲殻類、小魚、イカ類など。地域や季節に応じてさまざまな獲物を利用します。",

    features: "背面は黒く、腹面は白色です。頭頂部を横切る白い帯と、赤橙色のくちばしが目立ちます。尾は比較的長いペンギンです。",

    behavior: "繁殖地周辺に一年を通してとどまる集団もあります。巣の周囲では、ほかの個体に対して場所を守る行動が見られます。",

    reproduction: "小石などで巣をつくり、通常2卵を産みます。抱卵期間は約34〜37日で、ひなは育つと集団をつくります。繁殖時期は地域によって異なります。",

    identification: "白い頭頂の帯と赤橙色のくちばしで、アデリー・ヒゲペンギンと見分けられます。展示名だけから亜種や地域系統は確定しません。",

    nameOrigin: "和名は英名Gentoo penguinに対応する呼び名です。Gentooという呼称の詳しい由来は、今回確認した資料では確定できませんでした。",

    humanRelation: "繁殖地では人の活動や家畜による巣への影響が問題となる地域があります。",

    observationPoint: "白い帯を正面と横から見比べ、同じLABOのほかのペンギンとくちばしの色を比べてください。",

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
        text: "2本のキバは上あごの犬歯が伸びたものです。オスにもメスにもあります。"
      },
      {
        title: "貝の身を吸い出して食べる",
        text: "敏感なひげで海底の餌を探します。舌を引いて口の中に強い吸引力をつくり、貝の軟らかい部分を吸い出します。"
      }
    ],

    bodyLength: "八景島公式の種紹介では体長約2.5mが目安。大型のオスは1tを超え、太平洋の個体では体長約3.7mに達する例があります。",

    distribution: "北極圏を中心とする寒冷な海域に分布します。太平洋側の個体群はベーリング海やチュクチ海などに生息します。",

    habitat: "比較的浅い大陸棚の海で採餌し、海氷や海岸を休息場所に利用します。",

    diet: "二枚貝や巻貝、ゴカイ類、ナマコ類など、海底の動物を食べます。",

    features: "大きな体、厚い皮膚、口の周囲に密生するひげ、長い2本のキバが特徴です。一般にオスはメスより大型になります。",

    behavior: "群れで休息し、海へ潜って餌を探します。キバは個体間の威嚇や氷へ上がる際などに使い、餌を探すため海底を掘る道具ではありません。",

    reproduction: "太平洋の個体では冬に交尾し、着床遅延を含め約15か月後の春に通常1頭を出産します。子は約2年間母親と過ごします。",

    identification: "長いキバと太いひげが目印です。八景島の公式表記に合わせて種Odobenus rosmarusとして登録し、展示個体の亜種は確定しません。",

    nameOrigin: "和名の語源は今回確認した専門資料では裏付けられなかったため、断定しません。",

    humanRelation: "北極圏の沿岸の人々にとって伝統的に重要な食料です。海氷の減少は、休息場所や採餌場所への移動に影響します。",

    observationPoint: "キバだけでなく、口元のひげと唇の動きを見てください。餌を口へ取り込む様子も見どころです。",

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
        text: "あごの下の黒い線は、黒い羽毛が帯状に並んだものです。帽子のあごひもにも似ています。"
      },
      {
        title: "両親で卵を温める",
        text: "オスとメスが抱卵を交代し、通常2羽のひなを育てます。"
      }
    ],

    bodyLength: "八景島公式の種紹介では体長約70cm、体重約4〜6kg。",

    distribution: "南極半島とサウスシェトランド諸島、サウスオークニー諸島、サウスサンドウィッチ諸島などを中心に分布します。",

    habitat: "南極・亜南極の海で餌をとり、沿岸の陸地で集団繁殖します。",

    diet: "主にオキアミ類を食べ、魚類も捕食します。",

    features: "背面と頭頂部は黒く、腹面と顔の大部分は白色です。あごの下を細い黒帯が横切ります。くちばしは黒く、成鳥の虹彩は赤褐色です。",

    behavior: "翼を使って水中を進み、獲物を追います。繁殖地の近くの海で採餌することが多いペンギンです。",

    reproduction: "南半球の春から夏に繁殖し、通常2卵を産みます。抱卵期間は約33〜36日で、雌雄が交代して卵を温めます。",

    identification: "白い顔とあごの黒い線が目印です。学名は八景島とBirdLifeのPygoscelis antarcticusを採用。Australian Antarctic ProgramにはPygoscelis antarcticaの表記がありますが、ここでは別種として扱いません。",

    nameOrigin: "あごの下の黒い模様がひげに見えることに由来します。英名Chinstrapは『あごひも』の意味です。",

    humanRelation: "八景島では2024年11月9日に展示が始まりました。当時の導入案内では、アドベンチャーワールドから4羽が来館したとされています。",

    observationPoint: "顔を横から見て、あごの下の黒線を探してください。黒い顔に白い目の輪を持つアデリーペンギンとの違いが分かります。",

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
        text: "体毛自体は透明で、白い色素で白くなっているわけではありません。毛の下には黒い皮膚があります。"
      },
      {
        title: "泳ぐときは前足で水をかく",
        text: "幅広い前足で水をかき、後ろ足で進む向きを調整します。"
      }
    ],

    bodyLength: "頭胴長は多くの個体で約1.8〜2.7m。オスはメスより大型です。後ろ足で立った高さとは異なります。",

    distribution: "北極圏とその周辺に分布します。南極に自然分布する動物ではありません。",

    habitat: "海氷と沿岸を利用します。海氷はアザラシを捕らえる重要な足場です。",

    diet: "主にアザラシ類。クジラの死体なども利用しますが、アザラシの脂肪に富む食物が重要です。",

    features: "白く見える密な体毛と厚い皮下脂肪を持つ大型のクマです。足は幅広く、氷上の移動や遊泳に適しています。",

    behavior: "母子などを除いて単独で過ごすことが多く、アザラシの呼吸穴付近で待ち伏せします。多くの個体は冬も活動し、妊娠したメスは出産用の巣穴にこもります。",

    reproduction: "着床遅延があり、通常は雪の巣穴で1〜3頭、よく見られるのは2頭の子を産みます。母親が授乳と子育てを担います。",

    identification: "白く見える毛並みと黒い鼻が目印です。八景島の公式学名はUrsus maritimus、科はクマ科です。",

    nameOrigin: "北極域にすむクマという意味の和名です。学名Ursus maritimusは『海のクマ』を意味します。",

    humanRelation: "海氷の減少による採餌環境の変化が保全上の課題です。八景島ではLABO4で展示されています。",

    observationPoint: "泳ぐときの前足と後ろ足の使い方に注目してください。陸上では足の大きさや毛並みを観察できます。",

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
      {title: "頭の前縁が見分ける手がかり", text: "横に広がった頭の前縁には、中央にもくぼみがあります。中央がなめらかに続くシロシュモクザメとの違いを探せます。"},
      {title: "群れをつくる大型のサメ", text: "単独で泳ぐだけでなく、多数が集まることもあります。野生では沿岸の浅場を幼魚の育つ場所として利用します。"}
    ],
    bodyLength: "全長3mを超える大型種で、大きな個体は4mほどになります。展示個体の実測値ではありません。",
    distribution: "世界の熱帯から暖温帯の海に広く分布し、日本近海にも生息します。",
    habitat: "沿岸から沖合にかけて、大陸棚や島の周辺を利用します。幼魚は比較的浅い沿岸域で見られ、成長するとより広い海域へ移動します。",
    diet: "魚類やイカなどを食べ、甲殻類、小型のサメやエイも餌にします。成長段階や海域によって食物の構成は変わります。",
    features: "左右に大きく張り出した頭と、その両端に位置する目が特徴です。背面は灰色から褐色がかり、腹面は白っぽくなります。第1背びれは高く、第2背びれはかなり小さめです。",
    behavior: "海中を泳ぎながら餌を探し、単独でも群れでも行動します。沿岸と沖合を行き来するため、一つの浅場だけで一生を過ごすサメではありません。",
    reproduction: "母体内で子を育てて出産する胎生です。妊娠期間はおおむね1年弱で、一度に複数の子を産みます。出産数や時期には地域差があります。",
    identification: "頭の前縁中央のくぼみと、丸みを帯びた前縁の形を確認します。単に頭が金づち形というだけでは、ほかのシュモクザメ類と区別できません。",
    nameOrigin: "『シュモク』は鐘などを打つ撞木に由来し、横に広がった頭の形を表します。英名のScallopedは、頭の前縁の波打つような輪郭に対応します。",
    humanRelation: "肉やひれが利用される一方、漁獲や混獲が保全上の問題になっています。成魚だけでなく、幼魚が育つ沿岸環境にも目を向ける必要がある種です。",
    observationPoint: "正面や斜め上から見えるときに、頭の中央のくぼみと目の位置を探してください。方向を変える際の頭、胸びれ、尾びれの動きも見比べられます。",
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
      {title: "呼吸の方法を使い分ける", text: "海遊館では、泳いで水を取り込む呼吸と、口や噴水孔を動かして水を送る呼吸の両方が観察されています。サメがすべて同じ方法で呼吸するわけではありません。"},
      {title: "胃の中身から分かる食生活", text: "瀬戸内海中央部の個体を調べた研究では、魚類と頭足類を食べていました。野生で何を食べるかは、実際の胃内容物の調査からも確かめられています。"}
    ],
    bodyLength: "全長1m前後になるサメで、雌では最大約1.2mの記録があります。",
    distribution: "日本、朝鮮半島、中国、台湾周辺など、北西太平洋に分布します。",
    habitat: "沿岸から沖合の海底に近い場所で暮らします。比較的浅い海だけでなく、深い場所からの記録もある種です。",
    diet: "魚類やイカ・タコなどの頭足類を食べます。瀬戸内海中央部の食性研究でも、これらが主要な餌として報告されています。",
    features: "細長い体に2基の背びれを持つ、ドチザメ科のサメです。頭の下面に口があり、頭の側面には5対の鰓孔が並びます。目の後方には呼吸時に水を取り込む噴水孔があります。",
    behavior: "泳ぎながら活動する姿と、口や噴水孔を動かして呼吸する姿の両方が観察されています。瀬戸内海の調査では夏から秋に多く採集されましたが、この季節性をすべての海域に当てはめることはできません。",
    reproduction: "母体内で卵黄の栄養を使って子が育つ、無胎盤性の胎生です。従来は卵胎生とも呼ばれます。1回に8〜22尾、生まれた子は全長約20〜21cmという報告があります。",
    identification: "大型のメジロザメ類とは体格や頭部、背びれの形を見比べます。似たドチザメ科の種もいるため、灰色で細長いという特徴だけで種を断定せず、展示名と合わせて確認します。",
    nameOrigin: "標準和名の詳しい語源は、今回確認した資料では確定できませんでした。学名の種小名japanicaは日本にちなみます。",
    humanRelation: "沿岸の漁業で漁獲されることがあり、食性や分布を調べる研究の対象にもなっています。展示では、サメの呼吸や繁殖方法の多様さを知ることができます。",
    observationPoint: "目の後ろの小さな噴水孔と、側面に並ぶ鰓孔に注目してください。口を開いて泳ぐときと、口や噴水孔が動くときの違いを探せます。",
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
      {title: "黒いひれ先にも違いがある", text: "複数のひれの先が黒くなりますが、尻びれは通常黒くなりません。黒斑の出方は年齢などで変わるため、ほかの特徴も合わせて確認します。"},
      {title: "海面から跳び出すことも", text: "野生では、魚の群れを追って海面から跳び出す行動が知られています。回転を伴う跳躍もありますが、この行動だけで種を見分けることはできません。"}
    ],
    bodyLength: "全長約1.5mが一般的な大きさの目安で、大型個体は2mを超えます。最大約2.9mの記録があります。",
    distribution: "世界の熱帯・亜熱帯から暖温帯にかけての海に分布し、日本周辺にも生息します。",
    habitat: "沿岸の浅海、湾、河口周辺、サンゴ礁の周囲などを利用します。幼魚にとって、浅い沿岸域は重要な生育場所です。",
    diet: "群れで泳ぐ小魚などの魚類を中心に、イカや甲殻類、小型の軟骨魚類も食べます。",
    features: "先のとがった吻と、比較的がっしりした体を持ちます。背面は灰色から褐色で、腹面は白色です。背びれや胸びれなどの先端に黒色部が現れ、2基の背びれの間に明瞭な隆起線はありません。",
    behavior: "活発に泳いで餌を探し、魚群を追うことがあります。単独だけでなく群れになることもあり、生息海域によって季節的な移動が見られます。",
    reproduction: "卵黄嚢に由来する胎盤を通して母体から栄養を受ける胎生です。妊娠期間はおおむね11〜12か月で、浅い沿岸域などで複数の子を産みます。出産数には地域差があります。",
    identification: "黒いひれ先だけでなく、とがった吻、第1背びれの位置、尻びれの色を組み合わせて確認します。ツマグロやハナザメにも黒いひれ先があり、混同に注意が必要です。",
    nameOrigin: "英名Blacktip sharkは、ひれの先端の黒色部に由来します。標準和名の語源は、今回の参照資料だけでは断定しません。",
    humanRelation: "肉やひれなどが利用される漁業対象種です。沿岸域を利用するため漁業と接する機会が多く、幼魚の育つ場所も資源を考えるうえで重要です。",
    observationPoint: "ひれの先を一つずつ見比べ、どこが黒いか確かめてください。腹側が見えたら、腹びれより後方にある尻びれの色も観察できます。",
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
      {title: "英語では銅色のサメ", text: "Copper sharkやBronze whalerという英名があります。背面が銅色や青銅色を帯びて見えることに対応した呼び名です。"},
      {title: "魚の大群を追うサメの一つ", text: "南アフリカでは、イワシ類の大群が移動するサーディン・ランに伴って現れます。これはその地域で知られる行動で、日本の展示個体の経験を示すものではありません。"}
    ],
    bodyLength: "全長3mほどになる大型のサメです。個体や海域によって大きさには幅があります。",
    distribution: "世界の温帯から亜熱帯の海に分布します。日本周辺のほか、オーストラリア、南アフリカなどでも知られます。",
    habitat: "沿岸の湾や河口周辺から沖合の大陸棚まで利用します。暖かい海だけに限らず、温帯の沿岸域にも生息します。",
    diet: "イワシ類やボラ類などの魚類、イカなどを食べます。小型のサメやエイが餌になることもあります。",
    features: "背面は灰褐色から銅色がかり、腹面は白っぽくなります。吻は比較的長くとがり、2基の背びれの間に明瞭な隆起線はありません。体色は光の当たり方でも印象が変わります。",
    behavior: "餌となる魚を追って移動し、群れをつくることもあります。一部の海域では季節的な南北移動が知られており、移動の方向や時期は地域によって異なります。",
    reproduction: "胎盤を持つ胎生のサメで、子を母体内で育ててから産みます。成熟までに長い年月を要し、繁殖できるようになるまで10年以上かかる地域の報告があります。",
    identification: "ドタブカと比べる際は、体色に加えて背びれ間の隆起線の有無や吻の形が手がかりになります。細い隆起線は水槽越しには見えにくく、色だけでの断定は避けます。",
    nameOrigin: "英名のCopperは銅、Bronzeは青銅を意味し、体色にちなみます。和名の『クロヘリ』だけを頼りに、ひれの黒さで同定することはできません。",
    humanRelation: "肉やひれなどが利用され、漁業の対象や混獲種になります。成熟が遅いことから、漁獲による減少後に個体群が回復するには時間がかかります。",
    observationPoint: "横から吻の長さと胸びれの形を観察してください。ドタブカが近くを泳いだら、第1背びれの位置や背中の輪郭を比べると違いを探しやすくなります。",
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
      {title: "タイではなくベラの仲間", text: "名前にタイと付きますが、マダイと同じタイ科ではなくベラ科です。大きな口と丈夫な歯で、硬い餌も食べます。"},
      {title: "成長に伴って顔も性も変わる", text: "雌として成熟した後に雄へ変わる、雌性先熟の性転換が知られます。大型の雄では額と下あごが張り出し、若い個体とは顔つきが大きく違います。"}
    ],
    bodyLength: "大型個体は全長1mを超えます。体格や頭部のこぶの発達には、成長段階や性による違いがあります。",
    distribution: "日本では東北地方から九州にかけての沿岸などに分布します。",
    habitat: "沿岸の岩礁域で暮らします。岩の周囲や海底で、貝類などの餌を探します。",
    diet: "貝類や甲殻類、ウニ類などを食べます。丈夫な歯とあごは、硬い殻を持つ生きものを食べるのに役立ちます。",
    features: "厚い唇と大きな頭部を持ち、大型の雄では額のこぶと張り出した下あごが目立ちます。若い個体には成魚ほど大きなこぶはありません。国内資料でよく使われるSemicossyphus reticulatusは旧来の学名の組合せで、ここではWoRMSの受理名Bodianus reticulatusを採用しています。",
    behavior: "岩礁の周囲で餌を探して活動します。大型の雄は縄張りを持つことがあり、ほかの個体との関係も行動に影響します。",
    reproduction: "卵を産んで繁殖します。雌から雄への性転換が知られ、すべての個体が同じ年齢や大きさで一斉に変わるわけではありません。鴨川シーワールドでは飼育下での産卵と、ふ化後の育成が報告されています。",
    identification: "大型の雄は額と下あごの張り出しがよい目印です。こぶの小さい若い個体を見分けるときは、頭の形や唇、全身の姿も確認します。",
    nameOrigin: "額のこぶ状の張り出しにちなむ名前です。冬に味がよい魚として『寒鯛』と呼ばれることもあります。",
    humanRelation: "食用にされ、特に冬の魚として知られる地域があります。水族館では性転換や成長に伴う外見の変化を紹介する魚でもあり、繁殖・育成の取り組みも行われています。",
    observationPoint: "額だけでなく、下あごと唇の厚みにも注目してください。大きさの異なる個体が見られれば、こぶの発達の違いを比べられます。",
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
      {title: "黄色い帯は尾まで続く", text: "青みのある体の背中寄りを、鮮やかな黄色い帯が走ります。群れが向きを変えるときも、帯と黄色い尾が目印になります。"},
      {title: "小さな口でプランクトンを食べる", text: "岩礁域に群れますが、主食は海中の動物プランクトンです。岩についた海藻を主にかじる魚とは、餌のとり方が異なります。"}
    ],
    bodyLength: "全長25cmほどになる魚です。資料の『体長』と尾びれを含む『全長』は、同じ測り方ではありません。",
    distribution: "日本沿岸に分布し、房総半島から九州にかけての太平洋側や伊豆諸島などで知られます。",
    habitat: "沿岸の岩礁域の中層で群れをつくります。稚魚が潮だまりに入ることもあり、成長段階によって見られる場所が変わります。",
    diet: "主に動物プランクトンを食べます。小さな口で、水中に浮遊する餌を取り込みます。",
    features: "左右にやや平たい紡錘形の体で、背面は青色、腹面は銀白色です。背中寄りに黄色い帯があり、尾びれは二叉します。学名はFishBaseの受理表記argenteiventrisを採用し、国内資料に見られるargentiventrisと区別しています。",
    behavior: "岩礁の周囲を群れで泳ぎます。伊豆諸島では春に小さな稚魚の群れが磯で見られ、成魚も沿岸漁業や釣りの対象になります。",
    reproduction: "卵生です。伊豆諸島では秋が産卵期とされ、直径約1mmの卵を産みます。産卵期やふ化までの日数は、地域や水温などの条件と合わせて考える必要があります。",
    identification: "青い背面と、背中寄りを尾まで走る黄色い帯、小さい口が手がかりです。黄色い線のあるほかの群泳魚とは、帯の位置や体形、尾の色を合わせて見比べます。",
    nameOrigin: "標準和名の詳しい語源は、今回確認した資料では確定できませんでした。伊豆諸島では小型魚に『ムギタオシ』という地方名があります。",
    humanRelation: "伊豆諸島の沿岸漁業で重要な魚の一つです。白身で、夏に脂がのる魚として知られ、塩焼きや煮魚などに利用されます。",
    observationPoint: "群れ全体の向きが変わる瞬間に、黄色い帯と尾を追ってみてください。近くを通った個体では、体の大きさに対して口が小さいことも確認できます。",
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
      {title: "横幅の広さが際立つエイ", text: "胸びれが左右へ大きく広がり、体盤は前後よりも横に幅広い形です。大きさを比べるときは、尾を含む全長と体盤幅を区別します。"},
      {title: "ツバメにちなむ名前", text: "『ツバクロ』はツバメの別名です。左右に広がる体の姿を、翼を広げたツバメに見立てた名前とされています。"}
    ],
    bodyLength: "左右の胸びれの端を結ぶ体盤幅が1mを超える大型個体も知られます。これは尾を含む全長とは別の値です。",
    distribution: "日本周辺から東アジアの沿岸に分布します。国内では本州から九州の沿岸や瀬戸内海などで知られます。",
    habitat: "浅い海の砂地や泥底に生息します。海底に近い場所で生活する、底生性のエイです。",
    diet: "海底にすむ動物を食べます。食べる生物の種類や割合は、場所や個体の大きさによって異なります。",
    features: "平たく、横に大きく広がった体盤と、それに比べて短い尾が特徴です。背面は褐色系で、腹面は淡色です。トビエイのように頭部が体盤から大きく前へ突き出す形ではありません。",
    behavior: "海底付近で暮らし、広い胸びれを動かして移動します。水槽では泳いでいる姿だけでなく、底にいるときの体の輪郭も観察できます。",
    reproduction: "子を母体内で育てて産む無胎盤性の胎生で、従来は卵胎生とも呼ばれます。発生の初めは卵黄を利用し、その後は子宮からの分泌物によっても栄養を得ます。",
    identification: "極端に横長の体盤と短い尾を組み合わせて確認します。長いむち状の尾と前へ張り出した頭を持つトビエイとは、全体の輪郭が大きく異なります。",
    nameOrigin: "ツバメの別名『ツバクロ』にちなみます。英名のbutterflyrayは、広がった胸びれをチョウの翅に見立てた呼び方です。",
    humanRelation: "底びき網や刺網などで漁獲され、肉が利用されます。かまぼこの原料としての利用も記録されています。",
    observationPoint: "まず体の前後の長さと横幅を比べ、その後で短い尾を探してください。下側が見えたときは、腹面にある口や鰓孔も観察できます。",
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
      {title: "翼を羽ばたかせるように泳ぐ", text: "左右の胸びれを大きく上下させて進みます。海中を飛ぶように見える姿が、トビエイという名前につながっています。"},
      {title: "口の中には餌を砕く歯の列", text: "歯が板状に並び、中央の幅広い列の左右に小さな列があります。鋭い歯で肉を切るサメとは異なる、海底の餌を砕くためのつくりです。"}
    ],
    bodyLength: "体盤幅約66.5cmに達する記録があります。尾を含む全長には約1.5mの記録がありますが、体盤幅1.5mという意味ではありません。",
    distribution: "日本、朝鮮半島、中国沿岸など、北西太平洋に分布します。国内では本州や九州、瀬戸内海などで知られます。",
    habitat: "沿岸の海で暮らし、海底にすむ餌を利用します。海底付近だけでなく、その上を泳ぐ姿も見られます。",
    diet: "海底にすむ動物を食べます。板状に並ぶ歯は、貝類などの硬い餌を砕くのに役立ちます。",
    features: "頭が体盤の前方へ張り出し、左右には翼のような胸びれが広がります。背面は黄褐色系で、不規則な暗色斑が見られることがあります。尾は細長く、毒を伴う尾棘があります。",
    behavior: "胸びれを羽ばたかせるように動かして泳ぎ、海底の餌を探します。ツバクロエイと比べると、頭部の張り出しや尾の長さ、胸びれの輪郭の違いが分かります。",
    reproduction: "子を母体内で育てて産む無胎盤性の胎生です。卵黄に加えて子宮からの分泌物が栄養となり、子は小さなエイの姿で生まれます。",
    identification: "前へ突き出た頭、翼状の胸びれ、長い尾を確認します。ナルトビエイ類などにも似るため、泳ぎ方だけで種を断定することはできません。",
    nameOrigin: "翼を羽ばたかせるように泳ぐ姿にちなみます。英名のeagle rayも、鳥の翼を思わせる体形や泳ぐ姿を表した呼び名です。",
    humanRelation: "漁業で漁獲されることがあります。尾には棘があるため、漁獲個体などを扱う際は注意が必要です。水族館では水中を飛ぶような泳ぎ方が観察できます。",
    observationPoint: "胸びれの上下運動と、前へ張り出した頭を追ってください。下から見えるときは、口が腹側にあることや、長い尾の付け根も確認できます。",
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
      {title: "背中の細い線が識別の手がかり", text: "第1背びれと第2背びれの間に、低い隆起線があります。これを持たないクロヘリメジロザメなどとの比較に使えます。"},
      {title: "繁殖までに長い年月が必要", text: "成長して繁殖できるようになるまで、十数年から20年以上を要する地域の報告があります。大型になるだけでなく、生活史も長いサメです。"}
    ],
    bodyLength: "全長2〜3m級の大型種で、大きな個体は4mほどに達します。",
    distribution: "世界の暖温帯から熱帯の海に分布します。日本周辺を含むインド・西太平洋のほか、大西洋や東太平洋にも生息します。",
    habitat: "沿岸から沖合の大陸棚にかけて利用します。幼魚は比較的浅い場所に多く、成魚はより深い場所にも現れます。",
    diet: "海底付近や中層の魚類、小型のサメやエイ、イカ、甲殻類などを食べます。幅広い餌を利用する大型の捕食者です。",
    features: "背面は青灰色から灰色、腹面は白っぽいサメです。吻は幅広く丸みがあり、胸びれは湾曲します。2基の背びれの間には低い隆起線があります。若い個体ではひれ先が暗く見えることがあります。",
    behavior: "生息海域の一部では季節的に長距離を移動します。成長に伴って利用する深さや海域が変わるため、幼魚と成魚が同じ場所に集中するとは限りません。",
    reproduction: "卵黄嚢に由来する胎盤を持つ胎生です。妊娠は1年を超える長期間に及びますが、具体的な期間は資料や地域で異なります。生まれる子の全長は約70〜100cmと報告されています。",
    identification: "幅広く丸みのある吻、胸びれの形、背びれ間の隆起線などを組み合わせます。隆起線を持つ別種もいるため、その有無だけでドタブカと断定することはできません。",
    nameOrigin: "英名Duskyは薄暗い、くすんだ色合いを意味します。種小名obscurusも暗いという意味を持ち、灰色系の体色に関係すると考えられています。",
    humanRelation: "肉やひれ、肝油などが利用されてきました。成熟が遅く繁殖にも時間がかかるため、漁獲や混獲による個体数の減少が保全上の問題になります。",
    observationPoint: "クロヘリメジロザメと、吻の丸みや胸びれの湾曲を比べてください。斜め上から背中が見える場合は、背びれ間の低い隆起線も探せます。",
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
      {title: "サザエ割りと呼ばれるサメ", text: "口の奥の丸みのある歯で、硬い殻の餌を砕きます。貝を食べることから『サザエ割り』という呼び名もあります。"},
      {title: "卵のケースがらせん形", text: "卵を包む卵殻には、らせん状のひだがあります。岩の隙間などに収まりやすい形で、卵殻の中で子が育ってからふ化します。"}
    ],
    bodyLength: "全長60〜80cmほどの個体が見られ、大型では1mを超えます。最大約1.2mの記録があります。",
    distribution: "日本、朝鮮半島、中国、台湾周辺など、北西太平洋に分布します。",
    habitat: "沿岸の岩礁や海藻のある海底で暮らします。岩の隙間など、体を落ち着けられる場所を利用します。",
    diet: "貝類、甲殻類、ウニ類などを食べ、小魚も餌にします。前方の歯と奥の歯で形が異なり、奥の歯は硬い餌を砕くのに向いています。",
    features: "太く短めの体と丸みのある頭、目の上の張り出しが特徴です。褐色系の体に暗色の帯が入り、2基の背びれの前縁にはそれぞれ棘があります。",
    behavior: "海底付近で生活し、昼間は岩陰などで休むことが多いサメです。夜に活動して餌を探し、大きな胸びれを使って海底を移動する姿も見られます。",
    reproduction: "卵生で、らせん状の卵殻に包まれた卵を産みます。ふ化までには水温などによって長い時間がかかり、約1年を要する例があります。1個の卵殻から1尾がふ化し、子の全長は約18〜20cmです。",
    identification: "目の上の張り出し、丸い頭、体の暗色帯、背びれ前縁の棘を確認します。細長い体で泳ぎ回るメジロザメ類とは、頭や体の輪郭が大きく異なります。",
    nameOrigin: "属名Heterodontusは異なる歯を意味し、口の前方と奥で歯の形が違うことにちなみます。種小名japonicusは日本にちなむ名前です。",
    humanRelation: "沿岸で漁獲されることがあり、水族館では卵やふ化した幼魚が紹介されることもあります。サメのすべてが子を直接産むわけではなく、卵を産む種類もいると分かる種です。",
    observationPoint: "底で休んでいても、口や鰓孔の動きに注目してください。目の上の張り出しと背びれの前の棘を探すと、ネコザメらしい姿を確認できます。",
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
      {title: "尾の付け根に何枚もの硬い板", text: "尾柄の左右には4〜5枚ほどの骨質板が並びます。ニザダイ科の仲間を見分ける重要な特徴で、尾の付け根を横から見ると列になっているのが分かります。"},
      {title: "浅い岩礁で群れになる", text: "波や流れの影響を受ける浅い岩礁域で、複数個体が群れをつくることがあります。水槽でも同じ方向へ泳ぐ個体がいないか観察できます。"}
    ],
    bodyLength: "最大で全長約50cm。成魚は40cm前後になることが多い大型のニザダイ類です。",
    distribution: "北西太平洋に分布し、日本では宮城県付近以南から南日本に見られ、台湾周辺まで知られています。",
    habitat: "沿岸の浅い岩礁域に生息し、波当たりや潮通しのよい場所でも見られます。岩礁の表面を移動しながら餌を探します。",
    diet: "藻類を中心に岩面をついばみますが、小型の底生動物なども利用する雑食性です。餌の内容は生息場所や成長段階によって変化します。",
    features: "体は左右に平たく、成長するとやや楕円形になります。最大の特徴は尾柄の左右に並ぶ複数の硬い骨質板で、後方の板ほど小さな隆起を持ちます。",
    behavior: "浅い岩礁を泳ぎ回り、岩の表面をついばみながら採餌します。単独だけでなく群れで見られることもあります。",
    reproduction: "本種固有の詳しい産卵時期や産卵行動については、今回確認した主要資料では情報が限られるため、この図鑑では他のニザダイ類の繁殖様式を本種の事実として断定しません。",
    identification: "尾の付け根に4〜5枚ほどの骨質板が並ぶことが最も分かりやすい特徴です。体色だけでなく、尾柄部分を横から確認すると識別しやすくなります。",
    nameOrigin: "標準和名「ニザダイ」の詳しい語源は主要資料だけでは確定できないため断定しません。英名Scalpel sawtailは、尾柄に並ぶ刃物のような硬い板を表しています。",
    humanRelation: "沿岸漁業で漁獲され食用になるほか、水族館でも日本沿岸の岩礁魚として展示されます。尾柄の特殊な構造を観察できる魚でもあります。",
    observationPoint: "まず尾の付け根を探してください。左右に並ぶ黒っぽい硬い板が確認できれば、ニザダイらしい特徴を実物で観察できます。",
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
      {title: "あごの下に白い「ひげ」が密生", text: "下唇からあごの周辺には、白いひげのような突起が密集しています。名前の通り、顔つきだけでも非常に特徴的な魚です。"},
      {title: "ヒゲソリダイとは別種", text: "以前の資料で混同されやすいHapalogenys nigripinnisは、現在の日本の標準和名ではヒゲソリダイです。ヒゲダイはHapalogenys senninとして2005年に記載されました。"}
    ],
    bodyLength: "大型では全長40cmを超え、新潟市水族館では体長48cmほどになる魚として紹介されています。",
    distribution: "主に南日本の温帯域で知られます。国内資料では日本固有種として紹介されることがあり、FishBaseでは琉球列島・小笠原諸島を除く南日本から記録されています。",
    habitat: "河口周辺から水深50mほどまでの岩礁域や砂底域に生息します。成魚は岩穴や岩の張り出しの下などで単独で見られることがあります。",
    diet: "海底付近の小型動物などを利用する捕食者ですが、本種だけを対象にした詳しい食性資料は限られます。そのため、特定の餌だけを主食として断定しません。",
    features: "体は比較的体高があり、全身は暗褐色から黒褐色に見えます。下唇からあごには短い突起と長い白色のひげ状突起が密生します。国内のBISMaLや水族館資料ではイサキ科として扱われますが、FishBaseではLobotidaeに置かれており、上位分類の扱いには資料差があります。",
    behavior: "岩礁の洞や岩の下などを利用し、成魚は単独で行動することがあります。FishBaseが引用する原記載では、宮崎県沿岸で岩穴やオーバーハングの下に単独で見られた記録があります。",
    reproduction: "本種の詳しい産卵期、産卵場所、親による卵保護などについては、今回確認した主要資料では十分な情報を確認できなかったため断定しません。",
    identification: "あごの下に密生する長い白色のひげ状突起を確認します。よく似たヒゲソリダイと混同しないことが重要で、展示名だけでなく学名Hapalogenys senninも合わせて確認すると確実です。",
    nameOrigin: "和名は目立つひげ状突起に由来します。種小名senninは日本語の「仙人」に由来し、ひげを持つ顔つきと単独で暮らす姿を仙人になぞらえた名称です。",
    humanRelation: "定置網や刺網などで混獲されることがあり、食用として利用される場合もあります。水族館では独特なひげを間近で観察できる魚です。",
    observationPoint: "口の下を正面または斜め下から見てください。白いひげが密集している様子が分かれば、本種の最も特徴的な部分を観察できます。",
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
      {title: "白い「星」は感覚器の入口", text: "背中に並ぶ白い点の一部は単なる模様ではなく、微弱な電気を感じるロレンチーニ瓶の開口部です。新潟市水族館では、点の中央に小さな穴が見えることも紹介されています。"},
      {title: "約1年かけて子を育てた飼育例", text: "新潟市水族館では、母親が受精後およそ1年を経て3個体の幼魚を出産した例があります。これは同館での飼育記録で、すべての個体が必ず同じ日数・産仔数になるという意味ではありません。"}
    ],
    bodyLength: "非常に大型になるエイで、体盤幅約1.8mに達する個体が知られます。FishBaseには尾を含む全長4mを超える大型記録もあります。",
    distribution: "日本周辺を含むインド・西太平洋の温帯域などに分布します。日本では北海道から本州周辺の沿岸・沖合でも知られています。",
    habitat: "沿岸の湾、港、砂底、岩礁周辺から沖合の大陸棚・斜面上部まで利用します。浅場に現れることもある大型の底生性エイです。",
    diet: "魚類、二枚貝、イカ類、甲殻類などを食べます。海底にいるさまざまな動物を利用する大型捕食者です。",
    features: "幅広く菱形に近い体盤を持ち、背面は灰褐色から暗色です。背面には白く見える点が並び、尾は体盤幅に比べて短めです。尾には毒を伴う棘があります。",
    behavior: "海底近くを泳いだり、砂底や岩礁周辺を移動したりします。野生では複数個体が集まることも記録されています。",
    reproduction: "無胎盤性の胎生で、母体内で子を育ててから幼魚を産みます。新潟市水族館では受精後約1年で3個体を出産した飼育例があります。",
    identification: "大型で幅広い体盤、暗い背面に見える白色点、比較的短い尾を組み合わせて確認します。白い点を近くで見ると、単なる色模様ではなく小さな開口部として見える場合があります。",
    nameOrigin: "背面に並ぶ白い斑点が星のように見えることから「ホシエイ」と呼ばれます。",
    humanRelation: "漁業で混獲されることがあり、水族館では大型エイの代表的な展示種です。尾の棘は危険なため、野外で出会っても触れないことが重要です。",
    observationPoint: "背中の白い点を一つずつ観察してみてください。近くで見える個体なら、点の中央に小さな穴があるか探すと電気感覚器の存在を実感できます。",
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
      {title: "背中の白い点が名前の目印", text: "灰色から褐色の背面には小さな白色点が並びます。この星のような点が、ホシザメを見分ける手掛かりになります。"},
      {title: "鋭く切るより「つぶす」歯", text: "ホシザメは底生の甲殻類などを多く食べます。歯は大型の肉食ザメのような鋭い三角形ではなく、硬い餌をつぶすのに向いた形をしています。"}
    ],
    bodyLength: "通常は1m前後で、新潟市水族館では体長約1.25mになる魚として紹介されています。FishBaseにはさらに大型の記録もありますが、地域や資料によって最大値に差があります。",
    distribution: "北西太平洋を中心に、日本、朝鮮半島、中国、台湾などに分布します。日本では北海道以南の各地で知られています。",
    habitat: "沿岸の砂底・泥底や内湾から沖合まで生息し、水深360mほどまでの記録があります。海底近くで生活することの多いサメです。",
    diet: "カニやエビなどの甲殻類をはじめとする底生無脊椎動物を主に食べ、小魚も捕食します。",
    features: "細長い体を持つドチザメ科のサメで、背面に白色点が並びます。吻と口は強く丸みを帯びず、瞬膜はあまり発達しません。",
    behavior: "砂泥底など海底近くを泳ぎながら餌を探します。餌の多い沿岸域や半閉鎖的な海域でも見られます。",
    reproduction: "無胎盤性の胎生で、子は母体内で卵黄を栄養として成長します。妊娠期間は約10〜12か月とされ、1回に1〜22尾の子を産んだ記録があります。",
    identification: "体側から背面に並ぶ小さな白色点、細長い体形、比較的尖った吻を確認します。同じホシザメ属の仲間とは細かな形態が似るため、展示名と合わせて判断します。",
    nameOrigin: "体に並ぶ白い点を星に見立てた和名です。英名Starspotted smooth-houndも同じ特徴を表しています。",
    humanRelation: "底びき網や延縄などで漁獲され、食用になります。沿岸性のサメとして水族館でも飼育・展示されることがあります。",
    observationPoint: "まず背中から体側にかけて白い点を探し、その後に口元を見てください。大型のメジロザメ類とは口や頭の形、体つきがかなり違います。",
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
      {title: "海の魚なのに川にも入る", text: "成魚は沿岸に暮らしますが、河口や汽水域だけでなく川へ入り込むことがあります。幼魚の群れは河口や河川下流でよく見られます。"},
      {title: "卵巣は「からすみ」になる", text: "成熟したメスの卵巣を塩漬けして乾燥させたものが、珍味として知られるからすみです。ボラは古くから人と関わりの深い食用魚です。"}
    ],
    bodyLength: "全長50〜80cmほどの個体が多く、大型では1m近くになることがあります。",
    distribution: "日本では北海道から琉球列島まで広く分布します。ボラ類は世界各地の温帯・熱帯沿岸に分布しますが、日本の魚類資料では日本産のボラに亜種名Mugil cephalus cephalusを用いる扱いがあります。",
    habitat: "沿岸の浅海、内湾、河口、汽水域、河川下流など幅広い環境を利用します。砂底や泥底の浅い場所で群れを作ることがあります。",
    diet: "成魚はデトリタス、微細藻類、底生生物などを食べます。小さな幼魚の時期には動物プランクトンを多く利用し、成長に伴って食べ方が変化します。",
    features: "銀色の細長い体と比較的大きな尾びれを持ちます。目の周囲には脂瞼と呼ばれる透明な膜が発達し、胸びれの付け根には青みを帯びた斑紋が見えることがあります。",
    behavior: "群れをつくって沿岸や河口を泳ぎます。成長すると生活場所を変え、繁殖期には海の産卵場へ移動する個体群があります。",
    reproduction: "海で産卵し、卵は水中で発生します。成魚が沖合へ移動して産卵し、成長した仔稚魚が沿岸や河口へ戻る生活史が知られています。",
    identification: "太めの銀色の体、離れて位置する2基の背びれ、目を覆うように発達する脂瞼などを確認します。河口にいる似たボラ類とは細かな鱗やひれの特徴も必要です。",
    nameOrigin: "標準和名「ボラ」の詳しい語源については複数の説があり、この図鑑では一つに断定しません。地域によって成長段階ごとに呼び名が変わる「出世魚」としても知られます。",
    humanRelation: "刺身、焼き物などに利用され、卵巣はからすみの原料になります。河口や港でも見られるため、人の生活圏の近くで観察しやすい魚でもあります。",
    observationPoint: "正面や斜め前から目を見てください。透明な脂瞼が眼球の周りを覆う独特の構造を観察できることがあります。",
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
      {title: "体側に並ぶ黒い点", text: "銀色の体側には黒い斑点が1〜3列並びます。中央の列が特に目立ち、昔から見分ける手掛かりになってきました。"},
      {title: "えらを使ってプランクトンをこし取る", text: "水中の動物プランクトンや珪藻などを、えらにある鰓耙を利用してこし取りながら食べます。大きな群れそのものが巨大な採餌集団になります。"}
    ],
    bodyLength: "標準体長20cm前後で、全長では25cm程度になる個体もいます。",
    distribution: "北西太平洋に分布し、日本周辺では北海道から本州・四国・九州、種子島付近まで広く知られています。",
    habitat: "沿岸から沖合の海面近くを中心に、大きな群れで遊泳します。資源量や海況によって分布範囲や群れの大きさは大きく変化します。",
    diet: "動物プランクトンや植物プランクトンの珪藻類などを食べます。鰓耙で水中の微小な餌をろ過して取り込むことができます。",
    features: "体は細長く銀白色で、背側は青緑色から黒色を帯びます。体側に1〜3列の黒色斑が並ぶのが大きな特徴です。日本の魚類資料ではSardinops melanostictusを用いますが、FishBaseなどではSardinops sagaxの異名として扱う場合があり、分類上の扱いに差があります。",
    behavior: "多数の個体が密集した群れをつくり、同じ方向へ泳ぎながら餌場を移動します。群れは捕食者から身を守るうえでも重要です。",
    reproduction: "1〜3歳ほどで成熟する個体が多く、海中へ多数の卵を放出します。産卵場や産卵時期は海域や年代によって変動し、資源量の大きな変化とも関係します。",
    identification: "銀色の細長い体と、体側に並ぶ複数の黒色斑を確認します。同じように群泳する小型魚でも、この黒い点列がマイワシを見分ける大きな手掛かりです。",
    nameOrigin: "標準和名の詳しい語源は主要資料だけでは確定できないため断定しません。体側の黒点にちなみ「七つ星」などの呼び名が使われる地域もあります。",
    humanRelation: "日本の代表的な水産資源の一つで、鮮魚、干物、缶詰、加工品など幅広く利用されます。資源量が大きく増減する魚として水産研究でも重要です。",
    observationPoint: "群れ全体だけでなく1匹の体側を追ってください。銀色の体に黒い点が列になっているのを確認すると、マイワシらしい特徴が分かります。",
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
      {title: "尾の前に小さなひれが並ぶ", text: "背びれと尻びれの後方には、小離鰭と呼ばれる小さなひれが上下一列に並びます。高速で泳ぐサバ類らしい体のつくりです。"},
      {title: "小さいうちから同じ大きさで群れる", text: "マサバは数cmほどの幼魚期から、似た大きさの個体どうしで群れをつくる性質が発達します。群れで泳ぐ姿は本種を観察する大きな見どころです。"}
    ],
    bodyLength: "一般的には全長30〜50cmほどで、FishBaseでは最大64cmの記録があります。",
    distribution: "日本周辺を含む太平洋の温帯・亜熱帯域などに広く分布します。日本近海では季節的に大きく移動する群れもあります。",
    habitat: "沿岸から大陸棚周辺の表層・中層を群れで泳ぎ、水深300mほどまで記録されています。昼夜で利用する水深が変わることもあります。",
    diet: "カイアシ類などの甲殻類、小魚、イカ類などを食べます。成長に伴ってより大きな餌も利用します。",
    features: "背側には細い波状・虫食い状の暗色模様があり、腹側は銀白色で通常は目立つ黒点がありません。尾柄の上下にはそれぞれ5個ほどの小離鰭が並びます。",
    behavior: "同じ大きさの個体を中心に大きな群れを作ります。昼間は比較的深い場所にいることがあり、夜に上層へ移動して採餌する行動も知られています。",
    reproduction: "複数回に分けて産卵する多回産卵魚で、卵と仔魚は海中を浮遊します。FishBaseでは15〜20℃ほどの水温で産卵が多いとされています。",
    identification: "背中の波状模様と、銀白色で目立つ黒点が少ない腹側を確認します。ゴマサバと比較すると、腹側にゴマ状の黒点が目立たないことが見分ける手掛かりになります。",
    nameOrigin: "種小名japonicusは「日本の」を意味し、タイプ産地が日本であることにちなみます。和名「マサバ」の詳しい語源はここでは断定しません。",
    humanRelation: "日本を代表する食用魚の一つで、焼き魚、しめさば、缶詰など幅広く利用されます。漁業資源としても重要です。",
    observationPoint: "群れの速さだけでなく尾の直前を見てください。上下に並ぶ小さな小離鰭を確認できれば、サバ類の高速遊泳に適した体の構造が分かります。",
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
      {title: "幼魚の目を通る黒い帯", text: "幼魚では眼を横切る黒褐色の帯が目立ちます。この「目を通る一線」がメイチダイという名前につながったとされています。"},
      {title: "成長すると模様が変わる", text: "幼魚は複数の暗色帯が目立ちますが、成長すると体は黄色みを帯びた銀色になり、幼魚ほど強い帯模様が目立たなくなります。"}
    ],
    bodyLength: "全長35〜40cmほどになります。FishBaseでは最大35cm、美ら海水族館では全長40cmに達すると紹介されています。",
    distribution: "南日本から東南アジアを中心としたインド・西太平洋に分布します。日本では本州沿岸から九州・琉球列島まで各地で記録されています。",
    habitat: "内湾の砂泥底や砂礫底、岩礁・サンゴ礁周辺に生息し、水深15〜80mほどからよく記録されます。幼魚が浅い河口付近で見られることもあります。",
    diet: "海底にすむ無脊椎動物を中心に食べます。砂泥底や礁の周辺で底生動物を探します。",
    features: "体高があり、眼が比較的大きい魚です。幼魚では眼を通る暗色帯と体側の複数の横帯が目立ち、成魚では黄色味を帯びた銀色になります。",
    behavior: "海底近くをゆっくり泳いだり、底の上で静止するように見えることがあります。単独のほか、小さな群れをつくることもあります。",
    reproduction: "FishBaseでは標準体長15〜17cmほどで成熟するとされています。一方、本種固有の詳細な産卵期や産卵行動については主要資料で情報が限られるため断定しません。",
    identification: "幼魚では眼を通る暗色帯が非常に分かりやすい特徴です。成魚では帯が薄くなるため、体形、大きな眼、体色などを合わせて確認します。",
    nameOrigin: "眼を通る暗色の横帯が和名「メイチダイ」の由来とされています。特に幼魚でこの模様がよく分かります。",
    humanRelation: "一本釣り、刺網、定置網などで漁獲され、刺身や塩焼きなどに利用される食用魚です。夏に美味とされる地域もあります。",
    observationPoint: "若い個体がいたら、まず眼を横切る帯を探してください。成魚と幼魚が同じ水槽にいれば、成長による模様の変化を比べると面白い魚です。",
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
      {title: "第一背びれがとても大きい", text: "メジロザメ類の中でも第一背びれが高く大きく立ち上がることが特徴です。泳いでいる横姿を見ると、背びれの高さが目立ちます。"},
      {title: "子は胎盤を通して育つ", text: "母体内で卵黄を使い切った後、胎盤を介して母親から栄養を受ける胎生です。1回に1〜14尾ほどの子を産む記録があります。"}
    ],
    bodyLength: "全長2m前後になる大型のサメで、2.5mを超える個体も知られます。FishBaseにある3mの最大記録は不確実と注記されています。",
    distribution: "世界の温帯から熱帯の沿岸域に広く分布し、日本周辺を含むインド太平洋、大西洋、東太平洋などで知られています。",
    habitat: "沿岸の砂底・泥底、湾、河口周辺から沖合まで利用します。水深0〜500mの記録がありますが、20〜65mほどで多く見られるとされています。",
    diet: "魚類、エイ類、小型のサメ、イカ類、甲殻類、巻貝などさまざまな動物を捕食します。海底近くの餌もよく利用します。",
    features: "がっしりした体と比較的長く丸みのある吻を持ち、第一背びれが非常に高く大きいことが特徴です。第一背びれと第二背びれの間には隆起線があります。",
    behavior: "沿岸から沖合を移動し、年齢や大きさによって利用する場所が分かれることがあります。地域によって季節移動も知られています。",
    reproduction: "胎盤を持つ胎生で、妊娠期間は約12か月とされています。1回に1〜14尾を産み、生まれた子は全長56〜75cmほどです。",
    identification: "高く大きな第一背びれと、2基の背びれの間にある隆起線が重要な手掛かりです。同属のドタブカやクロヘリメジロザメなどとは、背びれの位置・高さ、吻、体色などを総合して見分けます。",
    nameOrigin: "標準和名の詳しい語源は今回確認した主要資料では確定できないため断定しません。種小名plumbeusは「鉛色の」という意味で、灰褐色の背面にちなみます。",
    humanRelation: "各地の漁業で漁獲され、水族館でも大型サメとして展示されることがあります。成長が遅く繁殖数も多くないため、漁獲圧の影響を受けやすい種です。",
    observationPoint: "横から見たときの第一背びれの高さに注目してください。LABO5の他のメジロザメ類と背びれ、吻、体の太さを比べると違いを観察できます。",
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
      {title: "短い尾の先に小さな尾びれ", text: "アカエイのような長いむち状の尾ではなく、太く短い尾の先に小さな丸い尾びれがあります。全体のシルエットで見分けやすい特徴です。"},
      {title: "尾びれの手前には毒棘", text: "短い尾の途中には鋭い棘があり、毒を伴います。野外で見つけても触ったり踏んだりしないことが大切です。"}
    ],
    bodyLength: "全長40〜50cmほどになる小型のエイで、体盤幅は30cm前後になることがあります。",
    distribution: "南日本から朝鮮半島、東シナ海周辺に分布します。日本では本州中部以南などで知られます。",
    habitat: "内湾や大陸棚の砂底・砂泥底に生息します。浅場から水深200m前後まで記録され、海底に密着して暮らします。",
    diet: "小魚、エビ・カニ類、ゴカイ類など、海底付近の小型動物を食べます。砂泥底を餌場として利用します。",
    features: "体盤はほぼ円形から丸みのある菱形で、背面は褐色、腹面は淡色です。尾は太く短く、先端に小さな尾びれがあり、その手前に毒棘があります。",
    behavior: "砂泥底の上で生活し、ときには砂に体を寄せるようにして休みます。泳ぐときは左右の胸びれを波打たせるように動かします。",
    reproduction: "無胎盤性の胎生で、母体内で子を育ててから産みます。1回に2〜4尾程度の子を産む記録があります。",
    identification: "アカエイ類よりも尾が短く太く、尾の先に明瞭な小さな尾びれがあることが重要です。体盤も比較的丸い形をしています。",
    nameOrigin: "標準和名の詳しい命名由来は今回確認した主要資料では明確でないため断定しません。平たく丸みのある体形を持つエイです。",
    humanRelation: "底びき網などで漁獲され、地域によっては練り製品の原料などに利用されます。尾の毒棘には注意が必要です。",
    observationPoint: "LABO6では尾を見てください。短い尾の先に小さな尾びれがあることを確認すると、アカエイとの体形の違いが分かりやすくなります。",
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
      {title: "2025年にそっくりな別種が正式記載", text: "長年アカエイと混同されてきた「アリアケアカエイ」が、2025年にHemitrygon ariakensisとして新種記載されました。見た目が非常によく似るため、現在は両種を区別して扱う必要があります。"},
      {title: "赤みは腹側に現れる", text: "アカエイでは腹面の外縁などに黄橙色から赤橙色が現れます。学名akajeiも日本語の「アカエイ」に由来する名称です。"}
    ],
    bodyLength: "全長1m前後の個体が多く、FishBaseでは最大約2mの記録があります。長い尾を含むため、体盤幅より全長がかなり長くなります。",
    distribution: "北西太平洋に分布し、日本を中心にロシア極東から中国沿岸まで知られています。沿岸の身近なエイですが、近縁種との混同が長く続いていました。",
    habitat: "沿岸の浅い砂底・泥底、内湾、河口などに生息します。人の利用する海岸や干潟に近い場所へ入ることもあります。",
    diet: "小魚、エビ・カニなどの甲殻類、その他の底生動物を捕食します。海底を探りながら餌を取ります。",
    features: "体盤は菱形で、吻は三角形に前へ張り出します。尾は長いむち状で毒棘を持ち、腹面の外縁には黄色から赤橙色が現れることがあります。",
    behavior: "海底近くで生活し、砂泥底へ体を寄せて休むことがあります。泳ぐ際には大きな胸びれを波打たせるように動かします。",
    reproduction: "無胎盤性の胎生で、胚は初期に卵黄を利用し、その後は母体の子宮分泌液からも栄養を受けて成長します。親と同じエイの形をした子を産みます。",
    identification: "アリアケアカエイHemitrygon ariakensisとは外見が非常によく似ます。新種アリアケアカエイでは尾の腹側の皮褶が黒く縁が白いこと、第5鰓孔付近に横溝があることなどが識別点とされますが、展示個体を外見だけで安易に再同定せず展示情報と専門的な形態確認を優先します。",
    nameOrigin: "腹側に見られる赤橙色が和名「アカエイ」に関係します。学名の種小名akajeiも日本語名に由来します。",
    humanRelation: "日本では古くから漁獲・食用にされてきました。一方、尾には鋸歯を持つ毒棘があり、浅場で誤って踏むと大きなけがにつながるため注意が必要です。",
    observationPoint: "まず長い尾と体盤の形を観察し、腹側が見えたら外縁の黄橙色にも注目してください。近縁のアリアケアカエイとの違いは肉眼だけで断定しないことも重要です。",
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
      {title: "胸びれの3本で海底を「歩く」", text: "胸びれの下側にある3本の軟条は他の部分から離れて自由に動きます。海底に触れながら歩くように動かし、餌を探す感覚器としても使います。"},
      {title: "脚のような部分には味を感じる器官", text: "遊離した胸びれ軟条の先には味蕾があり、砂泥の中に隠れた餌を探すのに役立ちます。見た目だけでなく感覚器として働く特別なひれです。"}
    ],
    bodyLength: "通常は全長30cm前後で、最大約40cmになります。",
    distribution: "北西太平洋に分布し、日本では北海道南部以南から南日本、中国沿岸、南シナ海まで知られています。",
    habitat: "沿岸から沖合の砂底・砂泥底に生息します。資料により水深5mほどの浅場から600m近い深場まで記録があります。",
    diet: "エビやカニなどの甲殻類、小魚などを食べます。遊離した胸びれ軟条で海底を探り、砂泥中の餌を見つけます。",
    features: "赤みのある体と大きな胸びれを持ち、胸びれの内側には青緑色を基調とした鮮やかな斑紋があります。胸びれの下側3本の軟条は遊離して自由に動きます。",
    behavior: "海底を泳ぐだけでなく、3本の遊離軟条を交互に動かして歩くように移動しながら餌を探します。驚いたときには大きな胸びれを広げることがあります。",
    reproduction: "冬から春を中心に産卵する地域があり、卵は海中を浮遊します。産卵時期は海域や水温によって変化します。",
    identification: "赤い体、大きな青緑色の胸びれ、胸びれから独立した3本の軟条を確認すると非常に見分けやすい魚です。",
    nameOrigin: "和名の由来には、鳴き声に由来する説や「方々」を歩き回るような姿に由来する説などがありますが、決定的な一説としては断定しません。",
    humanRelation: "刺身、焼き物、鍋物などに利用される食用魚で、地域によっては高級魚として扱われます。独特の胸びれと歩行行動から水族館でも人気があります。",
    observationPoint: "海底にいるときの胸びれの下を見てください。3本の細い軟条を脚のように一本ずつ動かしていれば、ホウボウ特有の餌探しを観察できます。",
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
      {title: "背びれが旗のように長く伸びる", text: "背びれの一部が白く細長く伸び、泳ぐと旗やペナントを立てているように見えます。英名Pennant coralfishもこの姿を表しています。"},
      {title: "幼魚が他の魚を掃除することも", text: "幼魚では、ほかの魚の体表に付く寄生生物をついばむ行動が観察されることがあります。成魚は主に動物プランクトンを食べます。"}
    ],
    bodyLength: "最大で全長約25cm。長く伸びる背びれの軟条を含めると、実際の体長以上に大きく見えます。",
    distribution: "インド太平洋に広く分布し、東アフリカ、インド洋の島々、東南アジア、日本、ミクロネシア、オーストラリア、フランス領ポリネシアなどで見られます。",
    habitat: "サンゴ礁の保護された礁湖や水路、外礁斜面などに生息します。水深2〜178mから記録され、15〜75mほどで多く見られるとされています。",
    diet: "主に動物プランクトンを食べます。幼魚では他の魚の体表から寄生生物などをついばむこともあります。",
    features: "白い体に2本の幅広い黒色帯が入り、体の後方や尾びれは黄色味を帯びます。背びれの一部が非常に長く白い糸状に伸びることが最大の特徴です。",
    behavior: "幼魚は単独で見られることが多く、成魚はペアで行動することがあります。サンゴ礁の近くから大きく離れず、水中のプランクトンを捕食します。",
    reproduction: "卵生で、繁殖時にはペアを形成します。卵を産んだ後に親が巣で保護するタイプではありません。",
    identification: "白黒の太い帯、黄色い後半部、長く伸びる白い背びれを組み合わせて確認します。似たハタタテダイ属の魚もいるため、模様だけでなく体形や吻の長さも合わせて見るとよいです。",
    nameOrigin: "長く伸びた背びれが、背中に旗を立てているように見えることから「ハタタテダイ」と呼ばれます。英名のPennantも小旗を意味します。",
    humanRelation: "特徴的な白黒黄色の模様から海水観賞魚として知られ、水族館ではサンゴ礁の魚として展示されます。幼魚のクリーニング行動も興味深い生態です。",
    observationPoint: "長い背びれだけでなく、個体同士の距離にも注目してください。2匹が並んで泳いでいれば、成魚でよく見られるペア行動を観察できる可能性があります。",
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
        text: "岩などの基質に産みつけられた卵をオスが守ります。オスは卵の近くにとどまり、ひれで水を送る行動も行います。"
      },
      {
        title: "胸びれの付け根に黒い部分",
        text: "胸びれ基部の上側には目立つ黒斑があります。体色だけでは似たスズメダイ類もいるため、見分けるときの重要なポイントです。"
      }
    ],
    bodyLength: "最大で全長約17cm。日本沿岸で普通に見られるスズメダイ類の中では比較的大きくなります。",
    distribution: "北西太平洋に分布し、日本、朝鮮半島南部、中国沿岸、台湾などで知られています。",
    habitat: "沿岸の岩礁やサンゴ礁周辺に生息し、水深2〜15m程度の浅い海でよく見られます。",
    diet: "主に水中を漂う動物プランクトンなどの小型生物を捕食します。",
    features: "体は左右に平たく、全体は灰褐色から暗い青褐色に見えます。胸びれの付け根上部に黒斑があり、背びれ後端付近に淡色部が見えることがあります。尾びれは深く二叉します。",
    behavior: "昼間に活動し、岩礁の上や周辺で複数個体が群れをつくることがあります。水中へ少し浮き上がってプランクトンを捕食します。",
    reproduction: "卵生で、繁殖時には基質へ粘着性の卵を産みつけます。産卵後はオスが卵を守り、ひれで水を送ります。",
    identification: "胸びれ基部の黒斑と深く二叉した尾びれを確認します。似たスズメダイ類とは体色だけで判断せず、胸びれ付近の模様も見ることが重要です。",
    nameOrigin: "標準和名「スズメダイ」の詳しい語源には複数の説明があるため、この図鑑では一つに断定しません。",
    humanRelation: "沿岸で漁獲され、地域によって食用にされます。また、日本沿岸の岩礁魚を代表する身近な魚として水族館でも展示されます。",
    observationPoint: "群れ全体を見た後、1匹の胸びれの付け根に注目してください。黒い斑点を確認すると、スズメダイの識別ポイントが分かります。",
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
        text: "鮮やかな青色の体に、尾びれを中心とした黄色い部分が組み合わさります。浅い海では非常に目立つ小型魚です。"
      },
      {
        title: "オスが卵の世話をする",
        text: "岩などに付着した卵をオスが守り、ひれで水を送り続けます。小さな魚ですが繁殖期には縄張りを守ります。"
      }
    ],
    bodyLength: "最大で全長約9cm。",
    distribution: "東部インド洋から西・中部太平洋に広く分布し、北は南日本、南はオーストラリア周辺まで見られます。",
    habitat: "水深1〜20mほどのサンゴ礁や岩礁、礁湖に生息します。砂礫底やサンゴの周辺でも見られます。",
    diet: "主に動物プランクトンを食べ、底生藻類も利用します。",
    features: "体の大部分は鮮やかな青色で、尾びれ周辺は黄色になります。光の当たり方によって青色の鮮やかさが大きく変わります。",
    behavior: "幼魚はサンゴなどの周辺で群れを作ることがあり、成魚も小さな群れから大きな集団を形成します。危険を感じると岩やサンゴの近くへ逃げ込みます。",
    reproduction: "卵生です。繁殖時にペアを形成し、基質に付着する卵を産みます。産卵後はオスが卵を守って水を送ります。",
    identification: "青い体と黄色い尾部の組み合わせが特徴です。シリキルリスズメダイなど似た青色のスズメダイとは、黄色が広がる位置や体形を比較します。",
    nameOrigin: "空を思わせる鮮やかな青色の体が「ソラスズメダイ」という和名に表れています。",
    humanRelation: "ダイビングや磯で観察される代表的な小型魚で、海水観賞魚としても知られています。",
    observationPoint: "水槽の照明によって体の青色がどのように変わって見えるか観察してみてください。黄色い尾との境界を見るのもおすすめです。",
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
        text: "熱帯魚の印象が強いチョウチョウウオ科ですが、本種は日本沿岸の温帯域でも見られます。伊豆などでも観察される身近なチョウチョウウオです。"
      },
      {
        title: "繁殖時にはペアになる",
        text: "繁殖時には2匹でペアを形成します。チョウチョウウオ類ではペア関係が長期間続く種類も知られています。"
      }
    ],
    bodyLength: "最大で全長約20cm。",
    distribution: "西太平洋の日本から台湾周辺を中心に分布します。",
    habitat: "水深1〜30m程度の岩礁や、藻類・サンゴがある沿岸域に生息します。",
    diet: "海底にすむ小型無脊椎動物などを食べます。細長い口を使って岩の隙間などから餌をついばみます。",
    features: "体は左右に強く平たく、黄褐色を基調とします。眼を通る黒い帯、その隣の白い帯、体側に並ぶ細い暗色線が特徴です。",
    behavior: "単独、ペア、小さな群れなどで岩礁を泳ぎ、岩や海底をついばみながら餌を探します。",
    reproduction: "卵生で、繁殖時にはペアを形成します。卵を海中へ放出するタイプで、産卵後に親が卵を守る魚ではありません。",
    identification: "眼を通る黒帯とその後方の白帯、黄褐色の体、体側の細い線を確認します。LABO10にいる他のチョウチョウウオ類との比較にも向いています。",
    nameOrigin: "チョウチョウウオという名称は、左右に平たい体と鮮やかな模様をチョウに見立てたものとされています。",
    humanRelation: "海水観賞魚として知られるほか、ダイビングやシュノーケリングでも人気の魚です。",
    observationPoint: "口の形に注目してください。小さく突き出た口を岩の隙間へ向けて、細かくついばむ様子を観察できます。",
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
        text: "緑、青、赤、橙色など複数の色が入り混じる非常に鮮やかなベラです。個体や成長段階によって模様の印象も変わります。"
      },
      {
        title: "集団での産卵も観察されている",
        text: "野外研究では複数個体が集まり、そこから魚が水中へ素早く上昇して放卵・放精する産卵行動が観察されています。"
      }
    ],
    bodyLength: "最大で全長約20cm。一般には14cm前後の個体も多く見られます。",
    distribution: "北西太平洋に分布し、日本から台湾周辺まで知られています。",
    habitat: "沿岸の浅い岩礁やサンゴ礁周辺に生息します。",
    diet: "海底の小型甲殻類など、主に動物性の餌を捕食します。岩の表面や隙間を泳ぎながら餌を探します。",
    features: "細長い体に緑色、青色、赤色などの複雑な模様が入ります。頭部にも鮮やかな線があり、日本沿岸のベラ類の中でも目立つ体色です。",
    behavior: "昼間に活発に泳ぎ回り、岩礁の周辺を絶えず移動しながら餌を探します。動きが速く、同じ場所に長くとどまらないことがあります。",
    reproduction: "卵を海中へ放出する浮遊性産卵を行います。野外では集団産卵や少数個体による産卵行動が研究されています。",
    identification: "体全体に入る複雑で鮮やかな色彩が大きな特徴です。キュウセンなど他のベラと比べ、頭部から体側にかけての模様を確認します。",
    nameOrigin: "色鮮やかな模様を、美しい織物の「錦」にたとえた和名です。",
    humanRelation: "沿岸で漁獲されるほか、鮮やかな体色から観賞魚として扱われることもあります。",
    observationPoint: "泳ぐ速さだけでなく、頭部の細かな色の線を追ってみてください。光の角度で色の見え方も変わります。",
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
        text: "キュウセンには、メスとして成熟した後に大型のオスへ性転換する個体がいます。緑色の大型雄は「アオベラ」、赤みのある雌などは「アカベラ」と呼ばれることがあります。"
      },
      {
        title: "夜は砂の中で眠る",
        text: "夜になると砂に潜って休みます。水温が低くなる季節にも砂中で活動を抑えることが知られています。"
      }
    ],
    bodyLength: "最大で全長約34cm。大型になる個体はオスであることが多くなります。",
    distribution: "北西太平洋に分布し、日本、朝鮮半島、中国沿岸、台湾などで知られています。",
    habitat: "沿岸の浅い岩礁と砂地が混じる場所に生息します。砂に潜るため、砂底のある環境を利用します。",
    diet: "小型甲殻類、貝類、ゴカイ類など海底の無脊椎動物を中心に食べます。",
    features: "雌雄や成長段階で体色が大きく異なります。メスや若い個体は赤褐色を帯び、複数の縦線が目立ちます。大型のオスでは緑色が強くなります。",
    behavior: "昼間は岩礁や砂地を活発に泳ぎ回って餌を探します。夜間や低水温期には砂へ潜ります。",
    reproduction: "雌性先熟型の性転換を行いますが、小さい段階からオスとして成熟する一次雄も存在するため、すべてのオスがメスから性転換した個体というわけではありません。",
    identification: "雌雄による色彩差が大きい魚です。大型の緑色個体と、赤褐色で縦線のある個体を比較すると違いがよく分かります。",
    nameOrigin: "「九線」と書かれることがあり、メスの体に見える複数の縦線が名称の由来とされています。",
    humanRelation: "西日本を中心に食用として利用され、特に瀬戸内海沿岸では身近な食用魚です。釣りの対象にもなります。",
    observationPoint: "同じ水槽に複数個体がいれば体色を比較してください。緑色の大型個体と赤みのある個体が見つかれば、性や成長による違いを観察できます。",
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
        text: "よく似たアイナメには体側に複数の側線がありますが、クジメの側線は基本的に1本です。似た2種を見分ける重要な特徴です。"
      },
      {
        title: "海藻が多い浅場で暮らす",
        text: "沿岸の海藻が茂る岩礁域をよく利用します。幼魚は流れ藻などに付いて見られることもあります。"
      }
    ],
    bodyLength: "最大で標準体長約30cm。一般にはアイナメより小型です。",
    distribution: "北西太平洋に分布し、日本、朝鮮半島、黄海、ロシア極東沿岸などで知られています。",
    habitat: "沿岸の浅い岩礁や海藻藻場に生息します。海底近くで生活する底生性の魚です。",
    diet: "甲殻類、ゴカイ類、小魚など、海底付近にいるさまざまな小動物を捕食します。",
    features: "細長い体を持ち、褐色・緑褐色など周囲に溶け込む体色をしています。体側の側線が1本であることが、アイナメとの重要な違いです。",
    behavior: "岩や海藻の周辺を生活場所にし、海底付近で餌を探します。体色が周囲の岩や藻場に溶け込みやすく、じっとしていると見つけにくい魚です。",
    reproduction: "本種について産卵生態の研究はありますが、今回確認できた主要データベースでは詳細情報が限られるため、近縁のアイナメの繁殖様式をそのまま本種へ当てはめません。",
    identification: "アイナメと比較する場合は、体の模様だけでなく側線の数に注目します。クジメでは基本的に1本の側線が確認できます。",
    nameOrigin: "標準和名「クジメ」の詳しい語源については主要な生物データベースで確定的な説明を確認できないため断定しません。",
    humanRelation: "沿岸で釣られ、食用にも利用されます。アイナメとよく似るため、釣りや魚類観察では識別対象になる魚です。",
    observationPoint: "まず体側を頭から尾まで追ってみてください。側線の入り方を確認できれば、アイナメとの違いを学べます。",
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
        text: "古い資料ではAnthocidaris crassispinaと書かれていることがありますが、現在BISMaLではHeliocidaris crassispinaを受理名としています。"
      },
      {
        title: "食べている「ウニ」は生殖巣",
        text: "食用にしている黄色や橙色の部分は、一般にウニの生殖巣です。本種も日本で食用になるウニの一つです。"
      }
    ],
    bodyLength: "殻径5〜7cm程度になる個体が多く、長い棘を含めるとさらに大きく見えます。",
    distribution: "日本沿岸を含む東アジアの温帯から亜熱帯域に分布します。近年は海水温の変化に伴う北方への分布拡大も研究されています。",
    habitat: "沿岸の浅い岩礁域や転石帯、海藻が生える場所などに生息します。",
    diet: "海藻類を中心にさまざまな付着生物・有機物を食べます。飼育研究でもコンブ類をよく利用することが確認されています。",
    features: "殻を覆うように細長い棘が密生し、暗紫色から黒紫色に見えます。棘の間には移動や付着に使う管足があります。",
    behavior: "管足と棘を使って岩の上をゆっくり移動しながら藻類などを削り取って食べます。岩の隙間に入り込むこともあります。",
    reproduction: "雌雄が海中へ精子と卵を放出して受精します。産卵期は地域や水温によって異なり、秋田県男鹿半島の調査では夏から初秋に産卵が確認されています。",
    identification: "暗紫色の長い棘が特徴です。バフンウニのように短い棘を密生させる種類とは、棘の長さと殻全体のシルエットが大きく異なります。",
    nameOrigin: "紫色から黒紫色に見える棘が「ムラサキウニ」という和名の由来です。",
    humanRelation: "生殖巣が食用になり、沿岸漁業の対象となります。一方、増えすぎたウニが海藻を大量に食べる「磯焼け」との関係でも研究される重要な種です。",
    observationPoint: "棘だけでなく、その間から伸びる細い管足を探してみてください。ゆっくり動く様子を見ると、棘だけで移動しているわけではないことが分かります。",
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
        text: "第一触角ではなく、大きく平たい第二触角が板のように広がります。同じイセエビ下目でも、イセエビとは正面から見た姿が大きく違います。"
      },
      {
        title: "貝をこじ開けて食べることも",
        text: "二枚貝の殻の隙間へ歩脚を差し込み、殻をこじ開けるようにして捕食する行動が報告されています。"
      }
    ],
    bodyLength: "最大で全長約40cmになる大型のセミエビ類です。",
    distribution: "インド・西太平洋に広く分布し、日本沿岸にも生息します。従来ハワイなどまで広く分布するとされましたが、近年の遺伝研究では太平洋の一部記録に未記載種が含まれる可能性が示されています。",
    habitat: "浅い岩礁やサンゴ礁の岩穴、割れ目などに生息し、水深80m程度まで記録されています。特に20〜50mほどの岩礁域で知られます。",
    diet: "貝類などの底生無脊椎動物を捕食します。歩脚を使って二枚貝をこじ開ける行動も知られています。",
    features: "体は上下に平たく幅広く、第二触角が大きな板状になります。イセエビのような非常に長い触角を持たないことが大きな特徴です。",
    behavior: "夜行性で、昼間は岩穴や割れ目などに隠れ、暗くなると外へ出て餌を探します。",
    reproduction: "雌雄は別で、雌は受精した卵を腹部の腹肢に付着させて抱卵します。本種固有の地域別産卵期については情報に差があるため一律には断定しません。",
    identification: "大きく平たい板状の触角と、幅広い扁平な体を確認します。LABO6のゾウリエビと比較すると、体の輪郭や触角部分の形の違いを観察できます。",
    nameOrigin: "幅広く平たい姿が昆虫のセミを思わせることから「セミエビ」と呼ばれます。",
    humanRelation: "大型で食用価値が高く、地域によって漁獲されます。身が多く、美味な甲殻類として利用されます。",
    observationPoint: "正面から顔を見てください。長い触角ではなく、左右へ広がった板のような触角を見るとセミエビらしい形がよく分かります。",
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
        text: "尾びれには白色と黒色の帯が入り、水中で泳いでいても非常によく目立ちます。英名Barred flagtailもこの尾びれに由来します。"
      },
      {
        title: "幼魚はタイドプールにも入る",
        text: "若い個体は潮だまりでよく見られます。神奈川県内でも夏にタイドプールや河口で観察される魚として紹介されています。"
      }
    ],
    bodyLength: "最大で標準体長約40cm。一般には20cm前後の個体もよく見られます。",
    distribution: "インド太平洋から東部太平洋まで非常に広く分布し、北は南日本まで見られます。",
    habitat: "波当たりのある岩礁海岸の表層近くや礁縁に群れで生息します。幼魚は潮だまりや河口でも見られます。",
    diet: "夜間を中心に遊泳性の甲殻類や小魚を捕食します。",
    features: "銀色の体と深く二叉した尾びれを持ちます。尾びれには複数の黒帯と白い部分が入り、遠くからでも目立ちます。",
    behavior: "岩礁海岸の波打ち際近くで密集した群れを形成します。水面近くを素早く泳ぐことが多い魚です。",
    reproduction: "本種固有の詳しい産卵場所や親による保護行動については、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "最も分かりやすい特徴は尾びれです。銀色の体に対し、白黒の帯が入った尾びれを確認します。",
    nameOrigin: "標準和名の正確な語源については主要資料で明確な説明を確認できないため断定しません。英名Barred flagtailは帯模様のある尾を意味します。",
    humanRelation: "一部地域では食用や釣り餌に利用され、水族館でも展示されます。神奈川県の磯でも観察できる身近な暖海性魚です。",
    observationPoint: "群れが方向転換するときに尾びれを見てください。白黒模様が一斉に動くため、尾の模様が非常によく分かります。",
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
        text: "小さな幼魚では黒・白・黄色の大きな帯模様が目立ちますが、成長すると灰色から銀色の体に橙褐色の斑点が現れ、姿が大きく変化します。"
      },
      {
        title: "最大1m級になる",
        text: "成長すると非常に大型になり、FishBaseでは尾叉長約1mまでの記録があります。幼魚の小さな姿からは想像しにくい大型魚です。"
      }
    ],
    bodyLength: "大型では尾叉長約1mに達します。",
    distribution: "インド・西太平洋に広く分布し、東アフリカ周辺から日本、パラオ、ニューカレドニアなどで知られています。",
    habitat: "沿岸の岩礁、サンゴ礁、砂泥底、湾内など幅広い環境を利用します。通常は水深50m程度まででよく見られます。",
    diet: "海底にすむ無脊椎動物や魚類などを捕食します。",
    features: "成長による色彩変化が非常に大きい魚です。幼魚は白・黄・黒の帯模様、成長途中では灰色の体に橙褐色の斑点が現れ、大型成魚では模様が薄くなる個体もいます。",
    behavior: "単独または群れで行動し、岩礁や砂泥底周辺の海底近くを泳ぎながら餌を探します。",
    reproduction: "本種固有の産卵時期や産卵行動については、今回確認した主要資料で十分な情報を確認できないため断定しません。",
    identification: "幼魚と成魚で模様が大きく異なるため、成長段階を考慮することが重要です。成魚では厚い唇と体側の細かな橙褐色斑も確認します。",
    nameOrigin: "標準和名「コロダイ」の詳しい命名由来には複数の説があり、主要な分類資料では確定できないため断定しません。",
    humanRelation: "各地で漁獲され食用になります。大型になるため釣りの対象としても知られています。一部の海外海域ではシガテラ毒の報告があるため、地域による違いがあります。",
    observationPoint: "写真などで幼魚の姿と比較してみてください。同じ種とは思えないほど模様が変化することがコロダイ最大の観察ポイントです。",
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
        text: "メスがオスの育児嚢へ卵を渡し、オスが体内で発生中の子を保護します。発生が進むと、オスが育児嚢から稚魚を産み出します。"
      },
      {
        title: "「クロ」でも黒いとは限らない",
        text: "体色は黒色だけではなく、黄色、褐色など周囲に合わせて大きく変化します。和名だけを基準に色で判断することはできません。"
      }
    ],
    bodyLength: "最大で全長約30cm。",
    distribution: "インド太平洋に広く分布し、アフリカ東岸から日本、東南アジア、オーストラリア、太平洋島嶼域まで知られています。",
    habitat: "浅い海草藻場、海藻帯、河口、サンゴ礁周辺などに生息します。通常は水深8mほどまでの浅場で多く見られます。",
    diet: "動物プランクトンや小型甲殻類などを、細長い吻で吸い込むように捕食します。",
    features: "直立した姿勢、馬の頭を思わせる頭部、物へ巻き付けられる尾を持ちます。体色は非常に変化が大きく、黒色、褐色、黄色などさまざまです。",
    behavior: "尾を海草や枝状の物へ巻き付けて体を固定します。泳ぐ能力は高くなく、背びれを細かく動かして移動します。",
    reproduction: "メスがオスの尾の腹側にある育児嚢へ卵を移し、オスが受精卵を保護します。FishBaseでは育児期間20〜28日程度の記録があり、育児嚢内の仔魚数には大きな幅があります。",
    identification: "色だけではなく、頭頂部の冠状構造、体輪、棘の発達などを確認する必要があります。タツノオトシゴ類は似た種が多いため、展示名と学名を合わせて確認します。",
    nameOrigin: "和名では「クロ」と呼ばれますが、実際の体色には大きな変異があります。種小名kudaはマレー語・インドネシア語で「馬」を意味する語に由来します。",
    humanRelation: "観賞魚として世界的に知られる一方、伝統薬などを目的とした国際取引も行われてきました。タツノオトシゴ類はCITES附属書IIの対象となっています。",
    observationPoint: "尾に注目してください。海藻や展示物へ尾を巻き付けている様子を見ると、普通の魚の尾びれとはまったく異なる構造が分かります。",
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
        text: "大型になるタツノオトシゴで、30cmを超える個体も知られます。一般的な小型のタツノオトシゴと並べると体格の違いがよく分かります。"
      },
      {
        title: "オスの妊娠を詳しく研究されている",
        text: "オスの大きな育児嚢の中で胚を育てるため、タツノオトシゴの「雄性妊娠」の仕組みを調べる研究対象としても利用されています。"
      }
    ],
    bodyLength: "大型個体では全長30cmを超え、約33cmに達する例があります。タツノオトシゴ類の中でも最大級です。",
    distribution: "ニュージーランドとオーストラリア南東部周辺の温帯海域に分布します。",
    habitat: "浅い岩礁、海草藻場、海藻が生える沿岸域などに生息します。熱帯性のタツノオトシゴとは異なり、比較的冷涼な温帯海域の種です。",
    diet: "ヨコエビ類や小型のエビなどの甲殻類を、細長い吻から吸い込んで捕食します。",
    features: "非常に大きな体と、腹部が深く膨らんだような体形が特徴です。体色は白色、黄色、褐色など変異があり、斑模様が現れることもあります。特に成熟雄では大きな育児嚢が目立ちます。",
    behavior: "尾を海草や構造物へ巻き付けて体を固定し、背びれを細かく動かして移動します。周囲の環境に合わせて体色を変化させることがあります。",
    reproduction: "メスから受け取った卵をオスの育児嚢内で発生させる雄性妊娠を行います。研究では育児嚢内部に胚を支える特殊な組織があり、父親から発生中の胚へ栄養物質が供給されることも示されています。",
    identification: "非常に大きな体と深い腹部が特徴です。クロウミウマと同じタツノオトシゴ属ですが、体格、腹部、頭頂部の形などを比較すると違いが分かります。",
    nameOrigin: "英名Pot-bellied seahorseは、深く大きく膨らんだ腹部を「pot belly」にたとえた名称です。日本語の展示名もこの英名をカタカナ化したものです。",
    humanRelation: "水族館や観賞魚飼育で知られるほか、雄性妊娠の仕組みや繁殖生理を研究するモデル生物としても重要です。",
    observationPoint: "クロウミウマと並べて、体の大きさと腹部を比較してみてください。オスなら尾の付け根側にある大きな育児嚢にも注目です。",
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
        text: "クロソイは雌の体内で卵を発生させ、ふ化した仔魚を海中へ産み出します。メバル属に見られる特徴的な繁殖方法です。"
      },
      {
        title: "幼魚は流れ藻を利用する",
        text: "幼魚の時期には流れ藻の周辺で生活することがあります。成長すると沿岸の岩礁域へ移り、海底近くを生活場所として利用します。"
      }
    ],
    bodyLength: "大型では全長約65cmに達します。一般に見られる個体はこれより小さく、50cm前後でも大型個体です。",
    distribution: "日本、朝鮮半島、中国沿岸など北西太平洋に分布します。",
    habitat: "沿岸の岩礁域を中心に生息し、水深数mの浅場から100m程度まで記録されています。",
    diet: "魚類、エビやカニなどの甲殻類をはじめとする小動物を捕食します。",
    features: "黒褐色から灰黒色の体を持つ大型のメバル属魚類です。頭部の涙骨には上顎へ覆いかぶさるような複数の棘があり、識別に利用されます。",
    behavior: "岩礁や人工構造物の周囲などで海底近くを生活場所として利用します。成長した個体は待ち伏せるようにして魚や甲殻類を捕食します。",
    reproduction: "雌の体内で卵を発生させ、仔魚の状態で産みます。三重県の資料では冬季に仔魚を産むことが紹介されています。",
    identification: "黒っぽい体色だけでは他のソイ類と混同するため、頭部の棘、体形、ひれの特徴を合わせて確認します。",
    nameOrigin: "黒みの強い体色を持つソイ類であることが和名に表れています。",
    humanRelation: "重要な食用魚で、刺身、煮付け、塩焼きなどに利用されます。日本では種苗生産や放流、養殖も行われてきました。",
    observationPoint: "同じ水槽のメバル類と体格や頭の形を比較してください。口が大きく、がっしりした体つきにも注目です。",
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
        text: "かつて沿岸性のメバルは1種として扱われていましたが、研究によってアカメバル・クロメバル・シロメバルの3種に整理されました。"
      },
      {
        title: "水中では青黒く光って見える",
        text: "クロメバルは水中では単なる黒色ではなく、金属的な青緑色から青黒色を帯びて見えることがあります。"
      }
    ],
    bodyLength: "全長30cmほどになる魚です。",
    distribution: "日本沿岸を中心に分布し、朝鮮半島南部からも知られています。",
    habitat: "外海に面した沿岸の岩礁や漁礁などを利用します。海底から少し浮いた場所で定位することもあります。",
    diet: "小魚、エビ類などの甲殻類をはじめとする小動物を捕食します。",
    features: "黒色から青黒色の体色を持ち、生きている個体では背側が青緑色に見えることがあります。胸びれ軟条は16本の個体が多いとされています。",
    behavior: "岩礁や漁礁の周囲で単独または群れで見られます。新潟大学の観察ではアカメバルと群れることもありますが、人が近づくと逃げやすい傾向が紹介されています。",
    reproduction: "卵胎生の魚で、雌の体内で卵を発生させ、仔魚の状態で産み出します。",
    identification: "クロメバル・アカメバル・シロメバルはよく似ます。体色だけではなく、胸びれ軟条数やひれの色など複数の特徴を確認する必要があります。",
    nameOrigin: "3種の沿岸性メバルのうち、黒みの強い体色を持つことからクロメバルと呼ばれます。",
    humanRelation: "釣りや沿岸漁業の対象となり、煮付け、塩焼きなどに利用される食用魚です。",
    observationPoint: "黒いと思って見るだけでなく、照明が当たった背中を観察してください。青緑色や金属的な色が見えることがあります。",
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
        text: "仔魚は表層で生活し、成長すると流れ藻の下を利用します。その後、成長に伴って沿岸から沖合の深い岩礁へ生活場所を移していきます。"
      },
      {
        title: "卵ではなく仔魚を産む",
        text: "雌の体内で卵がふ化し、数mmまで育った仔魚として海中へ産み出されます。"
      }
    ],
    bodyLength: "成魚は30cmを超えることがあり、FishBaseでは最大標準体長約30cmとされています。",
    distribution: "日本海側では北海道石狩湾付近から対馬周辺、太平洋側では北海道南部から関東沖まで広く知られています。",
    habitat: "若い個体は表層や流れ藻、沿岸域を利用し、成長した個体は水深80〜150m程度の沖合岩礁域で多く見られます。",
    diet: "甲殻類や小魚などを捕食します。",
    features: "体は橙色から赤褐色を帯び、体の上半部に濃褐色の不規則な帯模様があります。眼が大きく、沖合性のメバルらしい姿をしています。",
    behavior: "成長段階によって生息場所が大きく変化します。仔魚・幼魚は海面近くや流れ藻を利用し、成魚になるにつれて深い岩礁域へ移ります。",
    reproduction: "胎生性で、青森県の研究では12月ごろに交尾し、翌年4〜5月ごろに仔魚を産むとされています。地域によって時期には違いがあります。",
    identification: "体上部に現れる濃褐色の不規則な帯が特徴です。よく似たトゴットメバルなどとは帯の形や頭部の棘を比較します。",
    nameOrigin: "標準和名の詳しい命名由来について、今回確認した主要資料では確定的な説明を確認できないため断定しません。",
    humanRelation: "日本海側を中心に重要な水産資源で、刺身、煮付け、塩焼きなどに利用されます。",
    observationPoint: "体の上半分にある褐色の帯を探してください。さらに眼の大きさも他のメバル類と比較すると分かりやすいです。",
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
        text: "メバル属の中では比較的小型で、大きくなっても全長20cm程度です。岩礁や藻場の海底近くで暮らします。"
      },
      {
        title: "体の色はかなり変化する",
        text: "赤褐色や褐色など個体によって色彩に大きな違いがあります。体色だけで種類を判断するのは難しい魚です。"
      }
    ],
    bodyLength: "最大で全長20cm程度。15cm前後の個体もよく見られます。",
    distribution: "日本の本州沿岸を中心に九州北部、朝鮮半島南部などに分布します。",
    habitat: "沿岸の浅い岩礁や藻場の海底付近に生息します。幼魚は潮だまりで見つかることもあります。",
    diet: "小型の甲殻類や多毛類など、海底にすむ小動物を捕食します。",
    features: "体には淡赤褐色と暗褐色の不規則な模様があります。背びれには14本の棘があり、腹びれに褐色の小斑点が見られることがあります。",
    behavior: "岩の隙間や海藻の周囲など、複雑な海底環境を利用して生活します。",
    reproduction: "メバル属らしく卵胎生で、雌の体内で卵を発生させ、仔魚を産むとされています。",
    identification: "尾びれに明瞭な白色横帯がないこと、腹びれの小斑点、背びれ棘数などが識別の手掛かりになります。",
    nameOrigin: "「ヨロイ」という名称の詳しい命名経緯は主要資料だけでは確認できなかったため断定しません。英名はArmorclad rockfishです。",
    humanRelation: "定置網や刺網などで漁獲され、煮付け、塩焼き、汁物などに利用されます。",
    observationPoint: "一見すると褐色の魚ですが、体側や腹びれの細かな斑点を探してください。模様の複雑さがよく分かります。",
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
        text: "黄褐色から黒褐色の複雑な模様がタケノコの皮を思わせます。名前には、タケノコが出る季節によく獲れたことに由来するという説明もあります。"
      },
      {
        title: "卵を外へ産みつけない",
        text: "雌の体内で卵を発生させ、仔魚として産み出す卵胎生の魚です。"
      }
    ],
    bodyLength: "最大で標準体長約35cm。全長では40cmを超える個体も知られます。",
    distribution: "北海道南部から九州までの日本沿岸、朝鮮半島周辺など北西太平洋に分布します。",
    habitat: "沿岸の岩礁、堤防、藻場など海底に複雑な隠れ場所がある場所を好みます。",
    diet: "エビやカニなどの甲殻類、小魚などを捕食します。",
    features: "黄褐色、灰褐色、黒褐色など体色の変化が大きく、濃い褐色の斑紋が入ります。尾びれ後縁は丸みを帯びます。",
    behavior: "岩穴や構造物の陰などに身を寄せ、近くを通る小魚や甲殻類を捕食します。",
    reproduction: "卵胎生で、雌の体内で卵を発生させます。資料では秋から初冬にかけて仔魚を産むことが紹介されています。",
    identification: "吻から眼を通って鰓蓋方向へ伸びる暗色線や、丸みのある尾びれ、頭部の棘の状態などを確認します。",
    nameOrigin: "体の模様がタケノコの皮に似ること、またタケノコが出る時期によく獲れることが名称の由来として紹介されています。",
    humanRelation: "刺網や定置網、釣りなどで漁獲され、刺身、煮付け、塩焼きなどに利用されます。",
    observationPoint: "体全体のまだら模様をタケノコの皮と見比べるように観察してください。尾びれが丸い点にも注目です。",
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
        text: "多くの魚では体側の側線は左右1本ずつですが、アイナメでは片側に5本あります。水流や振動を感じ取る感覚器です。"
      },
      {
        title: "オスが黄金色になって卵を守る",
        text: "繁殖期のオスは鮮やかな黄橙色の婚姻色になり、複数のメスが産んだ卵塊をふ化まで守ります。"
      }
    ],
    bodyLength: "一般に全長40cm前後ですが、大型では50cmを超え、最大57cm程度の記録があります。",
    distribution: "日本沿岸、朝鮮半島、中国沿岸など北西太平洋に分布します。",
    habitat: "沿岸の浅い岩礁、岸壁、藻場などで海底近くを生活場所として利用します。",
    diet: "甲殻類、小魚、貝類などさまざまな底生動物を捕食します。",
    features: "細長くがっしりした体を持ち、体色は黄色、褐色、緑褐色など環境や個体によって大きく変化します。体側に5本の側線を持ちます。",
    behavior: "岩礁周辺で縄張り的に行動することがあります。繁殖期のオスは産卵場所を守り、メスを迎え入れます。",
    reproduction: "晩秋から冬に繁殖します。メスは岩や海藻などに粘着性の卵塊を産み、婚姻色になったオスがふ化するまで卵を守ります。",
    identification: "よく似たクジメと比較すると、アイナメには片側5本の側線があります。尾びれの形なども識別の手掛かりです。",
    nameOrigin: "「アユのように縄張りを持つ魚」という意味の「鮎並（あゆなみ）」が変化したという説があります。",
    humanRelation: "刺身、煮付け、唐揚げなどに利用される重要な食用魚で、堤防や磯からの釣りの対象としても人気があります。",
    observationPoint: "体色だけでなく体側をよく見て、複数の側線を探してください。繁殖期なら黄色いオスを見られる可能性もあります。",
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
        text: "アマモはワカメなどの海藻とは違い、陸上植物と同じ被子植物です。海中で花をつけ、種子をつくることができます。"
      },
      {
        title: "アマモ場は小さな生き物の重要な生活場所",
        text: "アマモが群生するアマモ場には、小魚や甲殻類など多くの生物が集まります。魚の幼魚が成長する場所としても重要です。"
      }
    ],
    bodyLength: "草丈は環境や季節によって大きく変化し、数十cmから1mを超えることがあります。宮古湾の調査では約20cmから130cmを超える株まで確認されています。",
    distribution: "北半球の温帯から亜寒帯に広く分布し、日本沿岸にも広く生育します。",
    habitat: "波の比較的穏やかな浅い海の砂泥底に地下茎を伸ばし、群落である「アマモ場」を形成します。",
    diet: "植物なので動物のように餌を食べることはなく、葉で光合成を行い、光・二酸化炭素・水・無機栄養塩などを利用して成長します。",
    features: "細長いリボン状の葉を持ち、海底の地下茎から多数の葉を伸ばします。根・地下茎・葉を持つ点も大型の海藻とは異なります。",
    behavior: "植物なので泳ぎませんが、地下茎を伸ばして株を増やし、季節に応じて葉の長さや密度が大きく変化します。",
    reproduction: "花と種子による有性生殖と、地下茎が枝分かれする栄養繁殖の両方を行います。多年生群落では地下茎による維持も重要です。",
    identification: "海底から細長い緑色の葉が束になって伸び、広い範囲で草原のような群落をつくることが特徴です。",
    nameOrigin: "和名「アマモ」の詳しい語源には諸説があるため、この図鑑では断定しません。",
    humanRelation: "アマモ場は魚類や甲殻類などの生息・育成場所となり、沿岸生態系を支える重要な環境です。各地でアマモ場の再生・保全活動も行われています。",
    observationPoint: "アマモだけを見るのではなく、葉の間を探してください。小魚や小型甲殻類がアマモ場を利用している様子も観察ポイントです。",
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
        text: "名前はクロイシモチですが、体色にはかなり変異があり、黒褐色だけでなく黄色や白っぽい個体も知られています。"
      },
      {
        title: "オスが口の中で卵を育てる",
        text: "繁殖時にはオスが卵のかたまりを口にくわえ、ふ化するまで守る口内保育を行います。"
      }
    ],
    bodyLength: "最大で全長約10cm。テンジクダイ類としては比較的体高のある魚です。",
    distribution: "南日本から台湾・南シナ海周辺に分布します。神奈川県周辺からも記録があります。",
    habitat: "内湾や漁港など波の穏やかな浅い海の砂泥底に生息し、転石や人工物などの陰を利用します。",
    diet: "小魚や小型甲殻類などを捕食する肉食性です。",
    features: "体はやや短く体高があり、頭部が大きく見えます。黒褐色の個体が多いですが、色彩変異があり、体の暗色帯が不明瞭になる場合もあります。",
    behavior: "大きな群れを形成するより、単独またはペアで物陰にいることが多い魚です。昼間は隠れていることが多く、暗くなると活動します。",
    reproduction: "夏を中心とした繁殖期には、オスが受精卵を口に入れ、ふ化するまで保護する口内保育を行います。",
    identification: "体高のある短い体、大きな頭、丸みのある尾びれなどが特徴です。ただし体色の変化が大きいため、黒色だけで判断しません。",
    nameOrigin: "黒っぽい個体が多いテンジクダイ類であることから「クロイシモチ」と呼ばれます。",
    humanRelation: "一般的な水産重要種ではありませんが、港や内湾で観察・採集されることがあります。口内保育を観察できる魚としても興味深い種です。",
    observationPoint: "口元に注目してください。繁殖期に口がふくらんでいるオスがいれば、卵を口内保育している可能性があります。",
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
        text: "水温が高くなると岩の下など暗い場所へ移動し、動きや摂餌を止める夏眠を行う個体がいます。北海道でも夏眠が確認されています。"
      },
      {
        title: "赤・青・黒のように色が違う",
        text: "マナマコには体色の異なる個体が知られており、赤色型・青緑色型・黒色型などが見られます。生息する底質にも違いがみられます。"
      }
    ],
    bodyLength: "最大で全長約30cmになる個体が知られています。体は伸び縮みするため、同じ個体でも見かけの長さは変化します。",
    distribution: "日本では北海道から九州まで見られ、中国、朝鮮半島、ロシア極東など北西太平洋に分布します。",
    habitat: "潮間帯から水深100mを超える海底まで生息し、砂泥底、礫底、岩礁周辺などさまざまな底質を利用します。",
    diet: "海底の砂や泥を口へ取り込み、その中の有機物、微細藻類、デトリタスなどを利用する堆積物食者です。",
    features: "太い円筒形の体を持ち、背側にはいぼ状の突起があります。腹側には多数の管足があり、海底へ付着しながら移動します。",
    behavior: "海底をゆっくり移動しながら堆積物を食べます。高水温期には岩陰などへ入り、摂餌や移動を止めて夏眠することがあります。",
    reproduction: "雌雄が海中へ卵と精子を放出して受精します。幼生は海中を漂って成長した後、海底へ着底します。",
    identification: "体表のいぼ状突起と腹側の管足を確認します。色には大きな変異があるため、色だけで別種と判断しないことが重要です。",
    nameOrigin: "「マナマコ」の詳しい語源については複数の説があるため、この図鑑では一つに断定しません。",
    humanRelation: "古くから重要な食用ナマコで、国内で漁獲されるほか、種苗生産や養殖研究も盛んです。乾燥ナマコは東アジアで高級食材として扱われます。",
    observationPoint: "口の周囲や腹側を観察してください。ゆっくり移動する管足や、海底の砂を取り込んでいる様子が見られることがあります。",
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
        text: "夜に休むとき、海藻などを口でしっかりくわえ、流されにくい状態で眠る行動が観察されています。"
      },
      {
        title: "卵を守るのはメス",
        text: "メスは粘着性のある卵を海藻へ付着させ、卵がふ化するまで近くで守ることが知られています。"
      }
    ],
    bodyLength: "最大で全長約7.5〜8cmの小型のカワハギ類です。",
    distribution: "日本では本州中部から九州付近まで見られ、朝鮮半島南部、台湾周辺にも分布します。",
    habitat: "沿岸のアマモ場や海藻の多い岩礁域などに生息します。",
    diet: "ヨコエビ類、多毛類、カイアシ類などの小動物に加え、アマモなど植物質も利用する雑食性です。",
    features: "小型で左右に平たい体を持ち、体表には網目状に見える細かな模様があります。周囲の環境によって体色を変化させることもあります。",
    behavior: "アマモや海藻の周囲を生活場所として利用し、危険を感じると植物の間へ隠れます。夜間には海藻を口でくわえて休むことがあります。",
    reproduction: "卵生です。メスは海藻などへ粘着卵を付着させ、卵がふ化するまで保護します。",
    identification: "非常に小さなカワハギ型の体と網目状の模様を確認します。成魚でも10cmに達しないほど小型です。",
    nameOrigin: "体表に見える細かな模様が網目のように見えることから「アミメハギ」と呼ばれます。",
    humanRelation: "小型のため主要な食用魚ではありませんが、アマモ場や藻場に暮らす代表的な小型魚として、生態研究や水族館展示の対象になります。",
    observationPoint: "アマモや海藻の近くにいるときの姿を見てください。体色が背景に溶け込んでいないか、口で植物をくわえていないかも注目です。",
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
        text: "標準和名「ムスメウシノシタ」は広く使われていますが、種レベルの正式な学名は現在も確定していません。国立科学博物館の魚類写真資料データベースではParachirus sp. 1として扱われています。"
      },
      {
        title: "国内資料でも属の扱いが違う",
        text: "国内の魚類研究ではAseraggodes sp.として掲載された例もあります。そのため、このFishGuideでは未記載・未確定であることを隠さず表示します。"
      }
    ],
    bodyLength: "10cm前後の小型魚です。神奈川県立生命の星・地球博物館の標本には標準体長9.7cmの個体があります。",
    distribution: "相模湾・伊豆半島以南の日本沿岸などから記録されていますが、正式な種同定が未確定なため、分布範囲も今後変わる可能性があります。",
    habitat: "浅い岩礁域の砂地や砂泥底、岩の表面や隙間付近で見られます。",
    diet: "本種だけを対象とした詳しい食性資料を十分に確認できないため、この図鑑では特定の餌を断定しません。",
    features: "非常に薄く左右に平たい体を持ち、眼は体の片側へ寄っています。有眼側の側線上には黒褐色の斑紋が見られます。",
    behavior: "海底へぴったり体をつけて生活し、砂や岩の色に溶け込むようにしています。体を砂へ隠すこともあります。",
    reproduction: "正式な種レベルの分類自体が未確定で、本種固有の詳しい繁殖生態についても十分な資料がないため、近縁種の情報を流用しません。",
    identification: "薄い楕円形の体、有眼側の黒褐色斑などを確認します。ただし未記載種と考えられており、属の扱いについても資料間で差があります。",
    nameOrigin: "標準和名の詳しい命名由来については主要資料から確定できないため断定しません。",
    humanRelation: "小型で一般的な食用魚ではありませんが、浅海の底生魚相を知るうえで興味深い魚です。分類学的にも未解決な部分を残しています。",
    observationPoint: "まず『どこにいるか』を探すこと自体が観察ポイントです。海底へ薄い体を密着させ、背景に溶け込む姿を見てください。",
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
        text: "海底から細長い赤色や橙色の糸状構造を多数伸ばします。これらには餌を集める触手や呼吸に関係する鰓が含まれ、本体が泥の中に隠れていても目立ちます。"
      },
      {
        title: "実は日本の『ミズヒキゴカイ』は1種ではなかった",
        text: "2024年の日本産Cirriformia属の研究では、従来Cirriformia tentaculataとされてきた個体群が12の系統群に分かれ、そのうち10種が新種として記載されました。過去の日本の記録をすべて本種とみなすことはできません。"
      }
    ],
    bodyLength: "本体は細長く収縮性が強いため、見かけの長さが大きく変化します。さらに長い糸状の鰓や触手を伸ばすため、この図鑑では一律の最大長を断定しません。",
    distribution: "Cirriformia tentaculataとして日本各地から記録されてきましたが、2024年の分類学的再検討によって、日本の旧記録には複数の別種が含まれることが明らかになりました。",
    habitat: "沿岸の砂泥底や泥底などに潜って生活します。有機物の多い海底から記録されることもあります。",
    diet: "海底表面の堆積物に含まれる微細な有機物などを、細長い触手を使って集める堆積物食者です。",
    features: "細長い環節を持つ体から、多数の非常に細い鰓や触手が伸びます。本体よりも糸状部分の方が水槽では目立つことがあります。",
    behavior: "体の大部分を砂泥の中に隠し、海底上へ触手や鰓を伸ばします。触手を海底表面へ広げながら餌となる粒子を集めます。",
    reproduction: "本種だけに限定した繁殖時期や繁殖行動について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "外見だけで日本産Cirriformia属を種まで同定することは難しくなっています。展示名がミズヒキゴカイであっても、厳密な種判定には形態観察や遺伝解析が必要になる場合があります。",
    nameOrigin: "細く長い赤色系の鰓や触手が、水引の糸を思わせる姿から付けられた名称と考えられます。",
    humanRelation: "以前は有機汚濁の指標生物として扱われることがありました。しかし2024年の研究では、従来1種とされた個体群が複数種だったため、種を確認せず一括して指標に使うことの問題点が指摘されています。",
    observationPoint: "海底から伸びている細い糸を探してください。本体そのものが見えなくても、糸状の鰓や触手が何本も動いていればミズヒキゴカイ類の生活の様子を観察できます。",
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
        text: "鳥羽水族館では、太平洋側の個体は体側に6本、日本海側では7本の横帯を持つことが紹介されています。同じ種でも地域によって模様が異なる興味深い例です。"
      },
      {
        title: "海底にべったりではなく浮いて泳ぐ",
        text: "ハゼの仲間ですが、岩の上にじっとするだけではなく、岩礁や海藻の周辺で海底から少し浮いて泳ぐ姿が見られます。"
      }
    ],
    bodyLength: "最大で標準体長約9cm。全長では10cm前後になります。",
    distribution: "日本では北海道南部・青森県付近から九州まで広く見られ、朝鮮半島から香港周辺までの北西太平洋に分布します。",
    habitat: "海藻が茂る内湾や岩礁性海岸などに生息します。幼魚は潮だまりで見られることもあります。",
    diet: "小型甲殻類や動物プランクトンなどの小動物を利用すると考えられますが、本種だけを対象とした詳細な食性資料は限られます。",
    features: "体側に太い暗色の横帯が並ぶことが大きな特徴です。頭部にも眼を通る帯があり、その後方にも斜めの帯が続きます。",
    behavior: "岩礁や海藻の周囲で、海底から少し浮いた位置を泳ぎます。複数個体が近い場所に集まることもあります。",
    reproduction: "本種固有の産卵場所や親魚による卵保護について、今回確認した主要資料では十分な情報を得られなかったため断定しません。",
    identification: "体側に並ぶ黒褐色の横帯を確認します。地域によって6本または7本となるため、単純に帯の本数だけで別種と判断しないことも重要です。",
    nameOrigin: "標準和名の詳しい由来について、今回確認した主要資料では明確な説明を確認できなかったため断定しません。",
    humanRelation: "主要な食用魚ではありませんが、磯や潮だまりで観察できるハゼとして知られ、水族館では日本沿岸の魚類展示に利用されます。",
    observationPoint: "体の横帯を頭側から尾側まで数えてみてください。さらに、普通の底生ハゼとは違って少し浮きながら泳ぐ姿にも注目です。",
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
        text: "成熟したオスでは尾びれの一部が糸状に伸び、メスよりも細長い体つきになります。雌雄の違いを外見から観察しやすいカワハギ類です。"
      },
      {
        title: "学名には長い混乱がある",
        text: "古い国内資料ではParamonacanthus japonicusとされることがありますが、Gill & Hutchinsの研究や2026年版Catalog of FishesではParamonacanthus oblongusを有効名としています。データベース間では現在も扱いが完全には統一されていません。"
      }
    ],
    bodyLength: "日本の図鑑では全長15cm前後、資料によっては20cm程度に達するとされています。分類上の扱いの違いによって数値にも資料差があります。",
    distribution: "日本では相模湾以南を中心に見られ、インド・西太平洋の暖海域に広く分布します。",
    habitat: "浅い海の砂底・砂泥底を中心に、岩礁や人工構造物の周辺でも見られます。",
    diet: "ゴカイ類、甲殻類、貝類などの小型底生動物を食べます。",
    features: "左右に強く平たい体を持つ小型のカワハギ類です。オスでは尾びれの軟条が長く伸び、メスより体高が低く見える傾向があります。",
    behavior: "砂泥底付近を泳ぎながら餌を探します。単独だけでなく複数個体が同じ場所に集まることもあります。",
    reproduction: "夏から秋に繁殖し、オスが砂底に縄張りをつくる行動が知られています。日没前に雌雄が寄り添い、メスが底質へ卵を産みつける産卵行動が観察されています。",
    identification: "小型のカワハギ型の体に加え、成熟したオスでは尾びれの一部が糸状に長く伸びる点が重要です。",
    nameOrigin: "標準和名の詳しい語源は主要な分類資料だけでは確認できないため、この図鑑では断定しません。",
    humanRelation: "日本では主要な食用魚ではありませんが、東南アジアなどでは食用に利用される場合があります。",
    observationPoint: "尾びれをよく見てください。細長く伸びた部分があればオスの可能性があります。体高の違いも個体間で比べると分かりやすくなります。",
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
        text: "下あごにある2本の黄色いひげは飾りではなく感覚器です。砂底へ触れさせながら、砂の中に隠れている甲殻類などを探します。"
      },
      {
        title: "昼と夜で体色が変わる",
        text: "淡い赤色だけでなく、横帯やまだら模様が強く現れることがあります。昼夜や状態によって体色が変化することも知られています。"
      }
    ],
    bodyLength: "成魚は全長20cm前後が多く、FishBaseでは標準体長28cmまでの記録があります。",
    distribution: "日本では北海道以南の沿岸に分布し、朝鮮半島、中国沿岸、台湾、フィリピン周辺など北西太平洋に広く見られます。",
    habitat: "水深数mから100m以上の砂底や砂礫底に生息します。",
    diet: "砂底にすむ小型甲殻類やゴカイ類などの底生動物を捕食します。",
    features: "細長い体と、下あごから伸びる2本の黄色いひげが最大の特徴です。体色は淡い赤色を基調としますが、模様には個体差があります。",
    behavior: "海底近くを泳ぎ、2本のひげを砂へ触れさせながら餌を探します。餌を見つけると砂をつつくようにして捕食します。",
    reproduction: "日本では夏に産卵するとされ、秋には数cmほどの稚魚が浅場で見られます。水温が下がると徐々に深場へ移動します。",
    identification: "下あごの2本の黄色いひげと、細長い赤みを帯びた体を確認します。LABO6には他のヒメジ類も後に出てくるため、体側模様も合わせて見ます。",
    nameOrigin: "標準和名の詳しい語源は、今回確認した主要資料では明確に確認できなかったため断定しません。",
    humanRelation: "食用になり、天ぷら、塩焼き、刺身などに利用されます。練り製品の原料として使われる場合もあります。",
    observationPoint: "海底近くに来たときのひげを見てください。左右のひげを細かく動かしながら砂を探る様子が最も特徴的です。",
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
        text: "大きくなっても10cmに満たない小型のハゼで、沿岸の浅い砂底や砂泥底に暮らします。"
      },
      {
        title: "サビハゼ属を代表する魚",
        text: "Sagamia属の魚で、属名は相模湾にちなむとされます。日本の沿岸魚研究とも関わりの深いハゼです。"
      }
    ],
    bodyLength: "最大で標準体長約7.1cm。全長でも10cmに満たない小型のハゼです。",
    distribution: "日本中部周辺から朝鮮半島に分布します。",
    habitat: "海岸近くの浅い砂底や砂泥底に生息します。",
    diet: "海底の小型甲殻類や多毛類などの小動物を食べると考えられます。",
    features: "細長い小型の体を持ち、灰褐色から褐色の地色に暗色斑が並びます。砂底に溶け込みやすい色彩です。",
    behavior: "海底付近で生活し、砂底の上を短い距離ずつ移動しながら餌を探します。",
    reproduction: "本種固有の産卵期や卵保護について、今回確認した主要資料では十分な情報が得られなかったため断定しません。",
    identification: "小型で細長い体と、砂底に溶け込む灰褐色の模様を確認します。ハゼ類は似た種が多いため、展示名と合わせて観察することが重要です。",
    nameOrigin: "さび色を思わせる褐色系の体色や斑紋に由来する名称と考えられます。",
    humanRelation: "水産上の重要性は高くありませんが、浅海の砂底に生息する小型魚として沿岸生態系を構成する種です。",
    observationPoint: "水槽の底をじっくり探してください。派手な魚ではありませんが、砂の色に溶け込む模様がよく分かります。",
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
        text: "BISMaLでは水深10cm程度の場所から記録があり、干潟や内湾など非常に浅い海にも適応したハゼです。"
      },
      {
        title: "砂泥底に溶け込む模様",
        text: "体側の暗色斑や筋状の模様によって、泥や砂の上では見つけにくくなります。"
      }
    ],
    bodyLength: "10cm前後までの小型のハゼです。",
    distribution: "日本沿岸を含む北西太平洋に分布します。",
    habitat: "内湾、河口、干潟などの浅い砂泥底に生息します。BISMaLでは水深0.1〜6m程度から多数の記録があります。",
    diet: "小型甲殻類やゴカイ類など、砂泥底にいる小型の底生動物を利用します。",
    features: "細長い体に暗褐色の斑紋が並び、体側では斑紋が筋状に見えることがあります。",
    behavior: "砂泥底の上で生活し、短く泳いでは海底に止まる行動を繰り返します。",
    reproduction: "本種固有の詳しい産卵期や親による卵保護について、今回確認した資料では十分な情報がないため断定しません。",
    identification: "体側の暗色斑と筋状模様を確認します。似た小型ハゼ類が多いため、模様だけでなく頭部やひれの形も合わせて判断します。",
    nameOrigin: "体側に見える筋状の模様が「スジハゼ」という和名につながっています。",
    humanRelation: "食用としての重要性は高くありませんが、干潟や内湾の魚類相を構成する身近なハゼです。",
    observationPoint: "砂泥底と体色を見比べてください。背景と非常によく似た模様をしていることが分かります。",
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
        text: "地域によって、毒腺につながった牙を持つミナミギンポ属Meiacanthusの魚によく似た姿になることがあります。捕食者が危険な魚と間違える擬態の例として知られています。"
      },
      {
        title: "空き缶を巣にすることもある",
        text: "貝殻やゴカイ類の古い棲管だけでなく、人が捨てた小さな空き缶などに入り込み、オスがそこを産卵場所として利用する例も知られています。"
      }
    ],
    bodyLength: "最大で標準体長約11cm。",
    distribution: "東アフリカから西太平洋まで広く分布し、日本では北海道付近から南日本まで記録されています。",
    habitat: "沿岸の浅い岩礁、藻場、内湾、河口周辺などに生息し、水深1〜15m程度で見られます。",
    diet: "小型甲殻類、珪藻類、海藻に付着する小さな生物などを食べる雑食性です。",
    features: "細長い体を持ち、吻から眼を通って尾側へ伸びる幅広い暗色帯が目立ちます。下あごには大きな犬歯があります。",
    behavior: "海藻やロープ、貝殻、空き缶などの周囲で泳ぎ、隙間を隠れ場所として利用します。幼魚は流れ藻につくこともあります。",
    reproduction: "卵生で、付着性の卵を産みます。オスは貝殻や人工物などの空洞を巣として利用し、卵の近くにとどまります。",
    identification: "吻から尾へ伸びる暗色帯と細長い体を確認します。下あごには大きな犬歯があるため、野外で捕まえた場合は不用意に触らないことが重要です。",
    nameOrigin: "標準和名の詳しい語源について、今回確認した主要資料では確定的な説明を確認できないため断定しません。",
    humanRelation: "観賞魚として扱われることがあります。人の作った空き缶などを巣として利用することもあり、人工物を生活場所として利用する魚の例でもあります。",
    observationPoint: "岩穴だけでなく、パイプや人工物の隙間から頭を出していないか探してください。口元が見えれば大きな犬歯も観察できる場合があります。",
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
        text: "長年Halichoeres tenuispinisやHalichoeres tenuispinnisとして掲載されてきましたが、ベラ科の系統分類の再検討を受け、日本魚類学会は2026年にホンベラをHemiulis bleekeriとして扱う変更を公表しました。"
      },
      {
        title: "メスからオスへ性転換する",
        text: "メスとして成熟した個体の一部が大型のオスへ性転換します。一方で、最初からオスとして成熟する一次オスも知られています。"
      }
    ],
    bodyLength: "全長15cm前後になる小型のベラです。",
    distribution: "日本では青森県付近から九州にかけての沿岸、伊豆諸島、瀬戸内海、種子島などに分布します。朝鮮半島、台湾などからも知られています。",
    habitat: "浅い岩礁や藻場などに生息し、日本沿岸では比較的普通に観察されます。",
    diet: "岩礁表面などにいる小型甲殻類などの底生動物を捕食します。",
    features: "雌や一次オスは赤褐色系で比較的地味ですが、性転換した大型オスでは青緑色や赤色の鮮やかな模様が発達します。",
    behavior: "昼間に岩礁周辺を活発に泳ぎながら餌を探します。性や社会的状態によって体色と行動が異なります。",
    reproduction: "夏を中心に産卵し、雌と雄が水中へ上昇して放卵・放精します。一次オスが複数でメスを追う集団産卵も観察されています。",
    identification: "メス・一次オス・二次オスで色彩が大きく異なります。古い図鑑ではHalichoeres tenuispinis等として掲載されているため、学名検索時には注意が必要です。",
    nameOrigin: "標準和名の詳しい命名由来については、今回確認した主要分類資料では説明を確認できないため断定しません。",
    humanRelation: "沿岸で普通に見られ、磯釣りなどでも釣れる魚です。2026年の分類変更により、日本産魚類の最新分類を紹介する上でも興味深い種になっています。",
    observationPoint: "複数個体がいれば体色を比べてください。地味な赤褐色の個体と鮮やかな青緑色の大型個体がいれば、性による違いを観察できます。",
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
        text: "ベラ科の魚の中でも体がかなり細長く、体長が体高の4倍以上になることがあります。"
      },
      {
        title: "ヒメジと一緒にいることもある",
        text: "国内の観察資料では、砂地の転石周辺で単独だけでなくヒメジ類などと一緒に見られることがあります。"
      }
    ],
    bodyLength: "全長15〜20cm程度になります。FishBaseでは最大全長16cmの記録があります。",
    distribution: "日本、朝鮮半島、台湾、ベトナム、ニューカレドニア、オーストラリアなど西太平洋に分布します。",
    habitat: "比較的穏やかな内湾の砂地や、砂地に点在する岩・サンゴ周辺に生息します。",
    diet: "ヨコエビ類などの小型甲殻類やゴカイ類を捕食します。",
    features: "白っぽく細長い体に、眼を通る赤褐色系の細い縦線が入り、尾柄付近には黒斑が見られます。",
    behavior: "砂地の上を泳ぎながら小型動物を探し、岩や転石周辺を生活場所として利用します。",
    reproduction: "本種固有の詳しい産卵期や性転換について、今回確認した資料では十分な情報がないため断定しません。",
    identification: "細長い体形、眼を通る縦線、尾柄付近の黒斑が識別の手掛かりです。",
    nameOrigin: "糸のように細長い体形を持つベラであることから「イトベラ」と呼ばれると考えられます。",
    humanRelation: "主要な水産対象種ではありませんが、ダイビングや水族館で砂地に暮らすベラ類の多様性を観察できる魚です。",
    observationPoint: "体高と体長を見比べてください。他のベラ類よりかなり細長く見えることが分かります。",
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
        text: "湾内の浅い砂地を好み、海水浴場のような砂浜沿岸にも生息します。投げ釣りで身近な魚として知られています。"
      },
      {
        title: "砂の中の小さな動物を食べる",
        text: "砂底を泳ぎながらゴカイ類や小型甲殻類などを探します。細長い吻を下へ向けて餌を取ります。"
      }
    ],
    bodyLength: "最大で全長約30cm。一般的には15〜25cm程度の個体が多く見られます。",
    distribution: "日本、朝鮮半島、中国、台湾など北西太平洋に分布します。日本では北海道南部から九州・沖縄まで知られます。",
    habitat: "湾内や沿岸の浅い砂底に生息し、水深0〜30m程度でよく見られます。",
    diet: "ゴカイ類、エビ類などの小型甲殻類、その他の底生無脊椎動物を食べます。",
    features: "細長い銀白色の体を持ち、背側は緑灰色を帯びます。2基の背びれが離れて位置し、吻が前方へ伸びます。",
    behavior: "砂底近くを小さな群れで泳ぎながら餌を探します。水温や季節によって浅場とやや深い場所を移動します。",
    reproduction: "卵生で、海中へ卵を産みます。産卵時期には地域差があるため、この図鑑では特定の月だけに限定しません。",
    identification: "細長い銀白色の体と、砂底近くを泳ぐ姿が特徴です。よく似たキス類とは鰭条数や鰾の形などにも違いがあります。",
    nameOrigin: "銀白色の美しい体色が標準和名「シロギス」に表れています。",
    humanRelation: "日本では非常に身近な食用魚で、天ぷら、塩焼き、刺身などに利用されます。投げ釣りの代表的な対象魚でもあります。",
    observationPoint: "水槽の底との距離に注目してください。砂底すれすれを泳ぎながら餌を探すシロギスらしい姿が観察できます。",
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
        text: "体内に発光器を持ち、その内部でPhotobacterium leiognathiなどの発光細菌と共生します。魚自身だけで光を作るのではなく、細菌の光を利用します。"
      },
      {
        title: "口を前下方へ大きく伸ばせる",
        text: "小さく見える口は前方から下方向へ大きく突出させることができ、砂泥底にいる小動物を食べるのに役立ちます。"
      }
    ],
    bodyLength: "最大で全長約25cmの記録がありますが、日本沿岸ではこれより小型の個体が多く見られます。",
    distribution: "日本では本州中部以南に分布し、台湾、中国南部、ベトナム周辺まで知られています。",
    habitat: "内湾、河口周辺の砂泥底などに生息します。海水だけでなく汽水環境へ入ることもあります。",
    diet: "砂泥底の小型甲殻類やゴカイ類などの小動物を食べます。",
    features: "体は卵形で強く左右に平たく、銀白色です。後頭部付近には黒褐色斑があり、非常に反射性の高い体表を持ちます。",
    behavior: "群れを形成して内湾の砂泥底付近を泳ぎます。突出可能な口を使って海底の餌を取ります。",
    reproduction: "本種固有の詳細な産卵時期や親による卵保護について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "銀色で強く側扁した体と、頭の後方にある黒褐色斑、前下方へ突出できる口が特徴です。",
    nameOrigin: "背びれや尻びれの棘が鋭く、植物のヒイラギの葉のように痛いことが名前に関係するとされています。",
    humanRelation: "小骨が多く主要な大型食用魚ではありませんが、地域によって干物や加工品として利用されます。また、魚と発光細菌の共生研究の重要な対象種です。",
    observationPoint: "口を伸ばす瞬間と、銀色の体が光を反射する様子に注目してください。発光器そのものは外から分かりにくいですが、体内には発光細菌が共生しています。",
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
        text: "幼魚は多数の個体が密集し、丸い塊のように泳ぎます。この特徴的な群れは『ゴンズイ玉』と呼ばれています。"
      },
      {
        title: "背びれと胸びれの棘に毒がある",
        text: "第一背びれと左右の胸びれにある硬い棘には毒があり、刺されると強い痛みを生じます。死んだ個体でも不用意に触らないことが重要です。"
      }
    ],
    bodyLength: "全長20〜30cmほどになります。",
    distribution: "日本では本州中部以南から九州・南日本の沿岸に分布します。",
    habitat: "浅い岩礁、藻場、港、河口周辺などに生息します。幼魚は特に浅場で見られます。",
    diet: "ゴカイ類、小型甲殻類、貝類など海底の小動物を食べます。",
    features: "ウナギのように細長い体を持ち、黒褐色の体側に2本の淡色縦帯があります。口の周囲には4対、合計8本の長いひげがあります。",
    behavior: "幼魚は密集した群れを作り、集団全体が一つの生物のように方向を変えます。成長すると群れは小さくなる傾向があります。",
    reproduction: "鹿児島大学の資料では6〜8月が産卵期として紹介されています。地域によって時期は変化する可能性があります。",
    identification: "2本の白っぽい縦帯、8本のひげ、細長い体を確認します。背びれ・胸びれの棘には毒があるため、野外では触れないでください。",
    nameOrigin: "標準和名の詳しい語源には複数の説があり、この図鑑では断定しません。",
    humanRelation: "毒棘を持つため磯遊びや釣りでは注意が必要な魚です。一方、幼魚のゴンズイ玉は水族館でも非常に特徴的な展示になります。",
    observationPoint: "複数個体がいたら、群れ全体の動きを見てください。個体同士の間隔をほとんど変えずに一斉に方向転換する姿が見どころです。",
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
        text: "ウツボ類は口を繰り返し開閉して水を口から取り込み、鰓へ送って呼吸します。口を大きく開けた姿が常に威嚇というわけではありません。"
      },
      {
        title: "胸びれがない",
        text: "一般的な魚に見られる胸びれと腹びれを持ちません。細長い体をくねらせて泳ぎ、岩の隙間へ入り込むことに適した体形です。"
      }
    ],
    bodyLength: "大型では全長1m前後になります。FishBaseでは標準体長91.5cmの記録があります。",
    distribution: "日本、台湾、小笠原諸島、ハワイ、ソシエテ諸島など西・中部太平洋から知られます。日本では南日本の岩礁域で普通に見られます。",
    habitat: "沿岸の岩礁やサンゴ礁の岩穴・割れ目に生息します。昼間は穴から頭だけを出していることもあります。",
    diet: "魚類、タコ類、甲殻類などを捕食します。夜間に岩礁周辺を移動して餌を探すこともあります。",
    features: "非常に細長い体と大きな口を持ち、褐色の体に不規則な暗色模様があります。胸びれと腹びれはありません。",
    behavior: "岩穴を生活場所として利用し、体の大部分を穴の中へ隠して頭だけを出す姿がよく見られます。口を開閉しながら呼吸します。",
    reproduction: "本種固有の詳細な産卵行動や繁殖期について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "褐色のまだら模様、太く細長い体、大きな口を確認します。LABO10にはドクウツボやニセゴイシウツボもいるため、模様を比較すると違いが分かります。",
    nameOrigin: "「ウツボ」という名称の詳しい語源には複数の説があり、今回確認した主要資料だけでは一つに決められないため断定しません。",
    humanRelation: "地域によって食用にされ、高知県などでは料理に利用されます。大型で鋭い歯を持つため、野外で岩穴へ手を入れたり触れたりしないことが重要です。",
    observationPoint: "口の開閉を観察してください。威嚇しているように見えても、一定のリズムで口を動かしていれば呼吸のための動作であることが分かります。",
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
        text: "三重県志摩沖の研究では、若く小さい個体は主にメスで、成長した一部の個体がオスへ性転換する雌性先熟型であることが確認されています。"
      },
      {
        title: "繁殖のピークは夏",
        text: "志摩半島沖の研究では成熟したメスが6〜9月に多く、特に6〜8月が繁殖の盛期と推定されています。性転換は標準体長約19cmから始まると推定されました。"
      }
    ],
    bodyLength: "最大で全長約52cm。一般には20〜30cm前後の個体も多く見られます。",
    distribution: "紅海・東アフリカから日本、韓国、太平洋島嶼域までインド太平洋に広く分布します。",
    habitat: "沿岸から沖合の岩礁やサンゴ礁に生息し、水深4〜160m程度から記録されています。20〜45m程度でよく見られるとされています。",
    diet: "魚類やエビ・カニ類などを捕食します。岩陰から近づいた獲物を狙う捕食魚です。",
    features: "体色は赤色から赤褐色で、体側には淡い暗色帯が現れることがあります。背びれの棘と棘の間の膜の先端部分が黒くなるのが特徴です。",
    behavior: "岩礁の割れ目や岩陰の周辺を生活場所として利用し、長距離を泳ぎ続けるよりも一定の場所の周辺で獲物を待つことが多い魚です。",
    reproduction: "雌性先熟型の性転換を行います。三重県志摩沖では繁殖盛期が6〜8月と推定され、約19cm標準体長付近から性転換が始まると考えられています。",
    identification: "赤色系の体と、背びれ棘間の膜の先端が黒くなる点に注目します。キジハタなど他のハタ類とは体側の斑点や背びれの模様を比較します。",
    nameOrigin: "赤みの強い体色を持つハタ類であることが和名「アカハタ」に表れています。",
    humanRelation: "食用価値の高いハタ類で、刺身、煮付けなどに利用されます。釣りの対象としても人気があります。",
    observationPoint: "背びれをよく見てください。棘の間の膜の先端が黒く見える部分は、アカハタを識別する重要な特徴です。",
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
        text: "灰褐色の体に多数の黄色い小斑点が入り、背びれや尾びれにも黄色い縁取りが見られます。水中では黄色が意外に目立ちます。"
      },
      {
        title: "メスからオスへ変わる",
        text: "アオハタは雌性先熟型の性転換を行うハタ類で、最初はメスとして成熟し、その後一部の個体がオスになります。"
      }
    ],
    bodyLength: "最大で全長約60cm。",
    distribution: "日本、朝鮮半島、中国、台湾、ベトナムなど北西太平洋に分布します。",
    habitat: "岩礁域だけでなく砂泥底も利用し、水深10〜50mほどに生息します。幼魚は潮だまりなど非常に浅い場所で見られることもあります。",
    diet: "小魚やエビ、カニなどの甲殻類を捕食します。",
    features: "灰褐色の体に黄色い小斑点が多数あり、体の上側には幅広い暗色帯が入ります。腹側は黄色味を帯びることがあります。",
    behavior: "海底付近で生活し、岩陰や砂泥底周辺から獲物を狙います。同種個体に対して縄張り的になる場合もあります。",
    reproduction: "雌性先熟型で、メスとして成熟した後に一部の個体がオスへ性転換します。性転換は社会的環境などにも影響されます。",
    identification: "黄色い小斑点と暗色の横帯、ひれの黄色い縁取りが特徴です。キジハタよりも全体に黄色味が強く見えることがあります。",
    nameOrigin: "標準和名の詳しい語源について、主要資料だけでは明確に確認できないため断定しません。",
    humanRelation: "食用魚として漁獲され、地域によって養殖も行われます。ハタ類らしい白身を持つ魚です。",
    observationPoint: "体側の黄色い点と、背びれ・尾びれの縁を見てください。暗色帯との組み合わせがアオハタらしい模様です。",
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
        text: "灰褐色の体には赤色から橙色の小さな斑点が多数あります。背びれの縁も黄色から橙色を帯び、美しい模様を持つハタです。"
      },
      {
        title: "性転換は一方向だけとは限らない",
        text: "基本的にはメスからオスへ変わる雌性先熟型ですが、飼育研究ではオスからメスへ戻る双方向の性転換も確認されています。"
      }
    ],
    bodyLength: "最大で全長約58cm。",
    distribution: "南日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",
    habitat: "沿岸の岩礁域に生息し、水深1〜55m程度から記録されています。幼魚は水深10mより浅い場所でもよく見られます。",
    diet: "魚類や甲殻類などを捕食します。",
    features: "淡い灰褐色の体に多数の赤色・橙色・金色の小斑点があり、体側には薄い暗色帯があります。尾びれは丸みを帯びます。",
    behavior: "岩穴や岩礁の周辺に定着し、近くを通る魚や甲殻類を捕食します。",
    reproduction: "一般に雌性先熟型で、成長したメスがオスへ性転換します。一方、飼育下では双方向の性転換が確認されるなど、柔軟な性の仕組みを持つことが分かっています。",
    identification: "全身に散る赤橙色の小斑点と、背びれ基部付近の暗色斑に注目します。",
    nameOrigin: "標準和名の詳しい命名由来について主要分類資料から確定できないため、ここでは断定しません。",
    humanRelation: "高級食用魚として知られ、漁獲だけでなく種苗生産や養殖研究も進められています。",
    observationPoint: "アカハタ・アオハタと並べ、斑点の色や大きさ、体の地色を比較するとハタ類の違いがよく分かります。",
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
        text: "小さなメジナは流れ藻の周辺に集まることがあります。成長すると沿岸の岩礁域を中心に生活するようになります。"
      },
      {
        title: "海藻をよく食べる魚",
        text: "成魚では海藻類が餌の大きな割合を占めますが、甲殻類やゴカイ類などの小動物も食べます。完全な草食魚ではありません。"
      }
    ],
    bodyLength: "最大で全長約50cm。",
    distribution: "日本では北海道南部から本州・四国・九州周辺まで広く見られ、台湾・東シナ海周辺にも分布します。",
    habitat: "沿岸の岩礁域に生息し、浅い磯から水深30m程度までの記録があります。",
    diet: "海藻類を中心に、甲殻類やゴカイ類なども食べる雑食性です。",
    features: "体高が高く左右に平たい体を持ち、体色は青灰色から黒緑色です。体表には比較的大きな鱗が規則的に並びます。",
    behavior: "岩礁周辺を群れで泳ぐことがあり、岩面に生える藻類などをついばみます。幼魚は流れ藻を生活場所として利用します。",
    reproduction: "関東・伊豆周辺の研究では春が主な産卵期で、北部伊豆諸島では4〜5月頃の産卵が示されています。",
    identification: "よく似たクロメジナと比較すると、鰓蓋後縁の色や鱗、尾びれの形などが識別に使われます。体色だけでの判別は難しい場合があります。",
    nameOrigin: "標準和名の詳しい語源には複数の説があるため、この図鑑では断定しません。",
    humanRelation: "磯釣りの代表的な対象魚で、刺身、塩焼きなど食用にも利用されます。釣り人には「グレ」と呼ばれる地域もあります。",
    observationPoint: "口元が岩へ近づいたときに注目してください。岩面の藻類をついばむ様子を観察できることがあります。",
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
        text: "2026年版Eschmeyer's Catalog of FishesとWoRMSではGoniistius zonatusが有効名です。一方、BISMaLでは現在もCheilodactylus zonatusを受理名としており、分類体系に差があります。"
      },
      {
        title: "小さな甲殻類をかなり食べる",
        text: "三宅島での食性研究では、ヨコエビ類を中心に、カニ類、ゴカイ類、等脚類などさまざまな海底生物を食べていました。"
      }
    ],
    bodyLength: "最大で全長約45cm。",
    distribution: "本州中部以南の日本沿岸から朝鮮半島、中国南部、台湾、ベトナム北部周辺まで分布します。",
    habitat: "沿岸の岩礁域を中心に、海底近くで生活します。砂底や泥底の小動物を利用することもあります。",
    diet: "ヨコエビ類、カニ類、ゴカイ類、等脚類、貝類などの底生動物を食べます。",
    features: "淡い体に複数の斜めの暗色帯が走り、尾びれには特徴的な斑紋があります。厚い唇と、下側の胸びれ軟条が発達した体形も特徴です。",
    behavior: "海底近くをゆっくり泳ぎながら、岩や砂底周辺にいる小動物を探します。",
    reproduction: "本種固有の産卵期や産卵行動について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "斜めに走る複数の暗色帯と尾びれの模様を確認します。ミギマキやユウダチタカノハなど近縁種との比較にも向いています。",
    nameOrigin: "体側の斜めの帯模様が鷹の羽の模様を連想させることが和名に関係するとされています。",
    humanRelation: "漁獲され食用にされることがありますが、地域や季節によって独特のにおいがあるとされ、食用評価には差があります。",
    observationPoint: "体の帯を一本ずつ追い、その後に尾びれを観察してください。LABO6後半に出てくるミギマキとの比較にも役立ちます。",
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
        text: "飼育研究では、メスからオスだけでなくオスからメスへの性転換も確認されており、双方向に性を変えられる魚として知られています。"
      },
      {
        title: "岩の上に止まって周囲を見る",
        text: "ゴンベ類は胸びれを使って岩やサンゴの上に体を乗せ、周囲を見渡すような姿勢をとります。泳ぎ続ける魚とは違った姿を観察できます。"
      }
    ],
    bodyLength: "最大で全長約14cm。",
    distribution: "インドから中国、日本の相模湾付近までのインド・西太平洋に分布します。",
    habitat: "岩礁域や岩壁、波の影響が比較的弱い湾内の海底などに生息し、水深5〜20m程度から記録されています。",
    diet: "小型甲殻類や小魚などを捕食する肉食性です。",
    features: "黄色から橙色の体色が目立ち、背中には淡い褐色の斑紋があります。背びれ棘の先端にはゴンベ類らしい房状の皮弁があります。",
    behavior: "単独で見られることが多く、岩やサンゴの上へ胸びれで体を支えるように止まり、獲物を待ちます。",
    reproduction: "飼育下では機能的なオスからメス、メスからオスの両方向の性転換が確認されています。",
    identification: "鮮やかな黄色から橙色の体と、背びれ棘先端の房状突起を確認します。クダゴンベのような赤白格子模様はありません。",
    nameOrigin: "標準和名の詳しい語源について主要資料では明確な説明が確認できないため断定しません。",
    humanRelation: "鮮やかな体色と岩の上に止まる行動から、海水観賞魚として扱われます。",
    observationPoint: "泳いでいる姿より、岩の上に『止まる瞬間』を探してください。胸びれで体を支えるゴンベ類独特の姿勢が分かります。",
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
        text: "南日本、朝鮮半島、台湾、中国沿岸などに分布します。過去にはインド洋からの記録もありましたが、FishBaseでは誤同定による可能性が高いとされています。"
      },
      {
        title: "体には赤褐色の細かな点",
        text: "淡い褐色の体に赤色から赤褐色の小斑点が多数入り、ひれにも同様の斑点が広がります。"
      }
    ],
    bodyLength: "最大で全長約50cm。",
    distribution: "南日本、朝鮮半島、台湾、中国沿岸など北西太平洋に分布します。",
    habitat: "浅い岩礁域に生息し、水深0〜30mほどから記録されています。",
    diet: "小魚や甲殻類などを捕食する肉食性です。",
    features: "淡褐色の体に多数の赤褐色斑があり、背側には暗色の斑紋が現れます。ひれにも多数の小斑点があります。",
    behavior: "岩陰や岩礁の周囲で海底近くにとどまり、近づく獲物を捕食します。",
    reproduction: "本種固有の性転換や産卵期について、今回確認した主要資料では十分な情報がないため、他のハタ類の情報をそのまま当てはめません。",
    identification: "体全体に散る赤褐色斑と、背側の暗色斑を確認します。似たハタ類とは斑点の大きさや配置を比較します。",
    nameOrigin: "標準和名「ノミノクチ」の詳しい命名由来は主要資料で確認できないため断定しません。",
    humanRelation: "食用魚として漁獲されるハタ類です。",
    observationPoint: "体色だけでなく、背中側にある暗色斑と細かな赤褐色点の配置を見てください。",
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
        text: "背中や体側には黒褐色の斑点が多数あり、体表には小さな丸いイボ状の突起があります。一方、背面と腹面には目立つ小棘はありません。"
      },
      {
        title: "食べられる部位は厳しく決められている",
        text: "厚生労働省の基準では、原則としてヒガンフグで食用可能なのは筋肉のみです。肝臓、卵巣、精巣、皮、腸は食用不可で、漁獲海域による例外もあります。"
      }
    ],
    bodyLength: "厚生労働省では全長35cmほどになる中型種として紹介されています。",
    distribution: "日本沿岸から黄海、東シナ海まで北西太平洋に分布します。",
    habitat: "沿岸の岩礁域や海底付近に生息します。",
    diet: "甲殻類、貝類、ゴカイ類など海底の小動物を食べます。",
    features: "背面は赤みを帯びた褐色で、多数の黒褐色斑があります。腹側は白く、体表には小さな丸い突起が密生します。",
    behavior: "海底付近を泳ぎながら餌を探します。危険を感じると他のフグ類と同じように体を膨らませることがあります。",
    reproduction: "本種固有の詳細な産卵場所や産卵行動について、今回確認した主要資料では十分な情報を確認できないため断定しません。",
    identification: "赤褐色の背面、多数の黒色斑、小さなイボ状突起が特徴です。似たフグ類とはひれの色や体表の棘の有無も確認します。",
    nameOrigin: "和名の由来には彼岸の時期との関係を示す説がありますが、確定的な由来としては断定しません。",
    humanRelation: "テトロドトキシンを持つフグです。厚生労働省では原則として筋肉のみを可食部位としていますが、専門的な処理が必要であり、一般の人による自己調理は非常に危険です。",
    observationPoint: "体を膨らませる姿よりも、普段の体表に注目してください。細かなイボ状突起と黒褐色斑がよく分かります。",
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
        text: "大型個体では全長約50cmに達し、セミエビ属の中でも非常に大型になる種です。"
      },
      {
        title: "幼生の詳しい姿が記載されたのは2024年",
        text: "長く大型幼生の確実な同定が難しかった種ですが、DNA解析によって同定された後期フィロソーマ幼生の形態が2024年に初めて詳しく報告されました。"
      }
    ],
    bodyLength: "大型では全長約50cm。甲長では最大17cm程度の記録があります。",
    distribution: "インド洋から日本、韓国、中国、東南アジア、オーストラリア、ハワイなどインド太平洋に広く分布します。",
    habitat: "水深10〜135m程度の岩礁底などに生息します。",
    diet: "貝類など海底にすむ無脊椎動物を利用します。",
    features: "幅広く頑丈な体と、板状に広がった第二触角を持ちます。背面にはこぶ状・隆起状の構造があり、名前通りゴツゴツした印象があります。",
    behavior: "岩礁の海底を歩くように移動し、岩穴や岩陰を隠れ場所として利用します。",
    reproduction: "雌雄は別で、メスは受精卵を腹部の腹肢に付着させて抱卵します。ふ化した幼生は平たく透明なフィロソーマ幼生として長期間浮遊します。",
    identification: "非常に大きな体、板状の触角、背中の隆起した構造を確認します。セミエビやゾウリエビと並べると体形の違いが分かります。",
    nameOrigin: "背面に目立つこぶ状の隆起を持つセミエビ類であることが和名に表れています。",
    humanRelation: "食用になる大型甲殻類で、地域によって漁獲されます。FAO資料では日本を含む地域で市場に出ることが記録されています。",
    observationPoint: "正面から板状の触角を見た後、背面の凹凸を観察してください。LABO6のセミエビやゾウリエビとの比較がおすすめです。",
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
        text: "背びれには強い毒を持つ棘があり、刺されると激しい痛みを起こします。野外で砂の中に隠れている個体を踏まないよう注意が必要です。"
      },
      {
        title: "夏に繰り返し産卵する",
        text: "新潟県の研究では産卵期は6〜8月、盛期は7月と推定されています。卵巣には異なる発達段階の卵が同時に見られ、1シーズンに複数回産卵すると考えられています。"
      }
    ],
    bodyLength: "最大で全長約29cm。",
    distribution: "日本から東シナ海・中国沿岸周辺に分布します。",
    habitat: "水深10〜200m程度の砂底・砂泥底など海底付近に生息します。",
    diet: "小魚やエビ・カニ類などを待ち伏せして捕食します。",
    features: "頭部が大きく、体表には複雑な突起や凹凸があります。砂や海底に非常によく溶け込む褐色系の体色を持ちます。",
    behavior: "砂底へ体を埋めるようにしてじっとし、近づいた獲物を急激に吸い込んで捕食します。胸びれ周辺の遊離した軟条を使って海底を歩くように移動することもあります。",
    reproduction: "新潟県沿岸の研究では6〜8月が産卵期で、7月が盛期と推定されています。多回産卵型と考えられています。",
    identification: "平たい大きな頭と、凹凸の多い体表、海底に溶け込む模様が特徴です。背びれの棘には毒があるため野外では触れません。",
    nameOrigin: "鬼を思わせるようなごつごつした頭部と、オコゼ類の姿から「オニオコゼ」と呼ばれます。",
    humanRelation: "毒棘を持つ一方、高級食用魚として扱われ、養殖も行われています。取り扱いには毒棘への十分な注意が必要です。",
    observationPoint: "魚そのものを探す前に海底を見てください。どれほど砂や岩の色に溶け込んでいるかが最大の見どころです。",
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
        text: "特に若い個体は河口や汽水域だけでなく河川へ遡上することがあります。海水と淡水の両方を利用できる魚です。"
      },
      {
        title: "成長すると名前が変わる出世魚",
        text: "地域によって呼び方は異なりますが、成長段階でセイゴ、フッコ、スズキなどと呼び名が変化する代表的な出世魚です。"
      }
    ],
    bodyLength: "最大で全長約102cm。大型個体では1mを超えます。",
    distribution: "日本から朝鮮半島、中国沿岸、南シナ海周辺まで西太平洋に分布します。",
    habitat: "沿岸、内湾、河口、汽水域、河川下流など幅広い環境を利用します。",
    diet: "幼魚は動物プランクトンやアミ類などを食べ、成長すると小魚やエビ類などを主に捕食します。",
    features: "銀白色の細長い体と大きな口を持ちます。下あごはやや前へ突き出し、尾びれは比較的大きくなります。",
    behavior: "若魚は河口や河川へ入り、成長すると沿岸を広く移動します。夜間に浅場へ入って餌を捕ることもあります。",
    reproduction: "主に冬季に沿岸のやや深い場所などで産卵します。仔稚魚は成長すると河口や汽水域へ入り、重要な成育場として利用します。",
    identification: "大きな口、細長い銀色の体、下あごが前へ出る顔つきを確認します。幼魚には体側に黒い斑点が現れる場合があります。",
    nameOrigin: "標準和名「スズキ」の語源には複数の説があり、この図鑑では一つに断定しません。",
    humanRelation: "刺身、洗い、焼き物などに利用される重要な食用魚で、ルアーフィッシングでは「シーバス」として非常に人気があります。",
    observationPoint: "口の大きさを見てください。小魚を丸ごと捕食できる大きな口と、河口魚らしい流線型の体が分かります。",
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
        text: "イラ属の魚は丈夫な犬歯を持ち、甲殻類や貝類など硬い餌を食べるのに適した口をしています。"
      },
      {
        title: "繁殖時はペアになる",
        text: "FishBaseでは卵生で、繁殖時に明瞭なペアを形成して産卵する魚として記録されています。"
      }
    ],
    bodyLength: "最大で全長約40cm。",
    distribution: "南日本、朝鮮半島、台湾、中国沿岸など西太平洋北西部に分布します。",
    habitat: "沿岸の岩礁底を中心に生息します。",
    diet: "甲殻類や貝類など、海底にすむ硬い殻を持つ動物を含むさまざまな底生動物を食べます。",
    features: "成魚では体の前半部がやや暗く、背びれ付近から胸びれ方向へ斜めに走る暗色帯が目立ちます。頭部は丸みがあり、口には丈夫な犬歯があります。",
    behavior: "岩礁の海底近くを泳ぎながら餌を探します。大きな口と歯を使って底生動物を捕食します。",
    reproduction: "卵生で、繁殖時には雌雄がペアになって産卵します。卵は海中へ放出されます。",
    identification: "体を斜めに横切る暗色帯と、厚みのある頭部、大きな犬歯が特徴です。",
    nameOrigin: "和名「イラ」の詳しい由来について主要分類資料では確定的な説明を確認できないため断定しません。",
    humanRelation: "漁獲され食用になります。大型で歯が丈夫なため、釣りの対象となることもあります。",
    observationPoint: "正面から口元を見てください。ベラの仲間とは思えないほど頑丈な犬歯と、厚みのある顔つきが分かります。",
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
        text: "成魚では体側に3本の黄色から黄褐色の縦線が見られます。種小名trilineatumも「3本の線」を表す名称です。"
      },
      {
        title: "季節によって浅場と沖合を移動する",
        text: "地域によって季節的な深浅移動が知られ、暖かい時期には沿岸側へ、条件によっては沖合の深い場所へ移動します。"
      }
    ],
    bodyLength: "最大で標準体長約40cm。一般には20〜35cmほどの個体が多く見られます。",
    distribution: "南日本、東シナ海、台湾周辺など北西太平洋に分布します。",
    habitat: "暖かく塩分の高い海を好み、沿岸の岩礁域やその周辺に生息します。",
    diet: "甲殻類、ゴカイ類などの小型動物を中心に捕食します。",
    features: "成魚では灰褐色から銀灰色の体側に3本の黄褐色の縦線が走ります。幼魚ではこれらの線がより明瞭に見えることがあります。",
    behavior: "岩礁周辺で群れを形成します。夜間に活発に餌を取ることがあり、飼育下でも夜間の摂餌行動が観察されています。",
    reproduction: "卵生です。繁殖時には雌雄がペアになり、水中を素早く上昇しながら放卵・放精する行動が知られています。",
    identification: "体側の3本の縦線と、比較的体高のある体形を確認します。若い個体では縦線が特に分かりやすくなります。",
    nameOrigin: "標準和名「イサキ」の詳しい語源には複数の説があるため、この図鑑では断定しません。",
    humanRelation: "日本では重要な食用魚で、特に初夏の旬の魚として知られます。刺身、塩焼き、煮付けなどに利用され、養殖や種苗放流も行われています。",
    observationPoint: "まず体側の線を数えてください。その後、群れの中で個体が同じ方向を向いて泳ぐ様子にも注目すると、イサキらしい展示を楽しめます。",
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
        text: "クエは雌性先熟型のハタ類で、まずメスとして成熟し、成長した一部の個体がオスへ性転換します。大型のオスを確保することは種苗生産でも重要な課題です。"
      },
      {
        title: "養殖研究が長く続けられている高級魚",
        text: "近畿大学では1980年代からクエの養殖研究が進められています。成長には時間がかかりますが、人工種苗生産技術も発達してきました。"
      }
    ],
    bodyLength: "最大で全長約136cm、体重33kgの記録があります。一般的には60cm前後でも大型の魚です。",
    distribution: "日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",
    habitat: "岩礁域を中心に生息し、泥底からも記録があります。成魚は水深20〜200mほど、幼魚は比較的浅い場所にも現れます。",
    diet: "魚類や甲殻類などを捕食する大型の肉食魚です。",
    features: "がっしりした大きな体と口を持ち、体側には6本ほどの太く不規則な暗色帯があります。尾びれは丸みを帯びます。",
    behavior: "岩礁の穴や岩陰などを生活場所として利用し、周囲へ近づいた魚や甲殻類を捕食します。",
    reproduction: "雌性先熟型で、メスとして成熟した後、大型個体の一部がオスへ性転換します。養殖現場ではホルモン処理による雄化研究も行われています。",
    identification: "大型で厚みのある体、幅広い暗色帯、大きな口を確認します。マハタとは暗色帯の入り方や頭部形態などを比較します。",
    nameOrigin: "標準和名「クエ」の詳しい語源は主要な分類資料から確定できないため、この図鑑では断定しません。",
    humanRelation: "非常に高価な食用魚で、特に冬の鍋料理などで珍重されます。養殖・種苗生産研究も盛んです。",
    observationPoint: "口と体の太さに注目してください。小型魚とはまったく違う、待ち伏せ型の大型捕食魚らしい体つきを観察できます。",
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
        text: "日本の資料では以前Epinephelus cometaeが使われていましたが、現在はEpinephelus morrhuaの異名とされ、E. morrhuaが受理名です。"
      },
      {
        title: "帯のつながり方が識別ポイント",
        text: "体側に複数の暗色帯があり、第4の帯が前方へ伸び、第2・第3の帯とつながるような複雑な模様を作ることが近縁種との識別点になります。"
      }
    ],
    bodyLength: "全長80〜90cmほどになる大型のハタです。",
    distribution: "日本の相模湾以南、小笠原諸島、琉球列島のほか、インド太平洋に広く分布します。",
    habitat: "沿岸から沖合の岩礁域に生息します。資料によって水深10〜370m程度から記録され、成魚は比較的深い場所でも見られます。",
    diet: "魚類や甲殻類などを捕食する肉食魚です。",
    features: "褐色から灰褐色の体に、斜め方向へ走る太い暗色帯があります。頭部にも細い暗色帯が入り、体全体で複雑な模様をつくります。",
    behavior: "岩礁周辺を生活場所とし、海底近くで獲物を待ち伏せます。幼魚は成魚より浅い岩礁域へ現れることがあります。",
    reproduction: "体長40〜45cmほどで性転換するとみられる資料がありますが、本種の性転換サイズには地域差や個体差も考えられるため一律には扱いません。",
    identification: "複数の暗色帯がどのようにつながっているかを確認します。イヤゴハタやカケハシハタなど似た種類との重要な識別点になります。",
    nameOrigin: "「ホウキハタ」の詳しい命名由来について、今回確認した主要資料では確定できないため断定しません。",
    humanRelation: "釣り、延縄、刺網などで漁獲される食用魚で、刺身や寿司などにも利用される美味なハタとして知られます。",
    observationPoint: "体側の帯を1本ずつ追ってみてください。途中で別の帯とつながる独特な模様が、本種を見分ける手掛かりになります。",
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
        text: "生きているマダイの体には、美しい赤色だけでなく小さな青色の斑点が多数あります。市場で見る魚とは少し違った色彩を観察できます。"
      },
      {
        title: "日本のお祝いと深く結びついた魚",
        text: "赤い体色や『めでたい』という語呂などから、結婚式や祝い事で古くから利用され、日本を代表する祝い魚になっています。"
      }
    ],
    bodyLength: "最大では標準体長約1m、体重約9.7kgの記録があります。一般的には30〜60cm程度の個体が多く見られます。",
    distribution: "日本を中心とする北西太平洋に分布し、朝鮮半島、中国沿岸、東シナ海周辺でも見られます。",
    habitat: "沿岸から水深200m程度までの岩礁、砂礫底、砂泥底などに生息します。",
    diet: "甲殻類、貝類、ゴカイ類、ウニ類、小魚などさまざまな底生動物を食べます。",
    features: "赤色から桃色の体に多数の青色点があります。尾びれ後縁は黒く、尾びれ下縁には白色部分が見られます。",
    behavior: "成長に伴って浅場から沖合まで幅広い場所を利用します。繁殖期には成魚が比較的浅い場所へ移動します。",
    reproduction: "雌雄は基本的に別個体です。晩春から夏にかけて浅い場所へ移動して産卵し、卵と仔魚は海中を漂います。",
    identification: "赤い体だけでなく、体側の青い小斑点と尾びれ後縁の黒色部分に注目します。",
    nameOrigin: "標準和名「マダイ」の詳しい語源については複数の説明があるため、この図鑑では断定しません。",
    humanRelation: "日本を代表する高級食用魚で、天然漁獲だけでなく養殖も盛んです。刺身、焼き物、煮物など幅広く利用されます。",
    observationPoint: "水槽では青い斑点を探してください。生きている個体だからこそ分かりやすい、マダイの美しい色彩の一つです。",
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
        text: "タカノハダイやミギマキに似ていますが、ユウダチタカノハでは尾びれに目立つ模様がないことが見分ける大きなポイントです。"
      },
      {
        title: "タカノハダイより深い場所にも現れる",
        text: "沿岸の岩礁周辺に生息しますが、比較的深い場所からも知られています。同じ仲間でも利用する水深には違いがあります。"
      }
    ],
    bodyLength: "最大で全長約40cm。",
    distribution: "日本では青森県・新潟県付近以南の南日本に見られ、朝鮮半島から南シナ海周辺まで知られています。",
    habitat: "沿岸の岩礁やその周辺の砂地に生息し、比較的深い場所でも見られます。",
    diet: "海底の小型甲殻類、ゴカイ類などの底生動物を利用すると考えられますが、本種単独の詳細な食性資料は限られるため特定の餌に限定しません。",
    features: "体側には斜め方向の太い暗色帯が並びます。厚い唇と、タカノハダイ類に特徴的な発達した胸びれ下部軟条を持ちます。",
    behavior: "岩礁周辺の海底近くをゆっくり移動しながら餌を探します。",
    reproduction: "本種固有の産卵期や繁殖行動について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "ミギマキやタカノハダイとよく似ます。尾びれに目立つ模様がないことや、顔周辺の帯模様を比較します。",
    nameOrigin: "「ユウダチタカノハ」という標準和名の詳しい命名由来は主要資料で確定できないため断定しません。",
    humanRelation: "漁獲され食用になることがあります。近縁のタカノハダイ類との比較展示に向いた魚です。",
    observationPoint: "まず尾びれを確認してください。次にLABO6のタカノハダイやミギマキと顔・体の斜線を比較すると見分けやすくなります。",
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
        text: "英名Redlip morwongの通り、成魚では赤色の厚い唇が非常によく目立ちます。体の縞だけでなく顔にも注目したい魚です。"
      },
      {
        title: "尾びれは上下で色が違う",
        text: "尾びれの上側は白っぽく、下側は黒くなります。似たユウダチタカノハは尾びれに目立つ模様がなく、識別に役立ちます。"
      }
    ],
    bodyLength: "最大で全長約35cm。",
    distribution: "日本から台湾周辺までの北西太平洋に分布します。日本では相模湾以南などで知られます。",
    habitat: "沿岸の岩礁域に生息し、比較的浅い海から水深30m程度で見られます。",
    diet: "岩礁周辺の甲殻類やゴカイ類などの底生無脊椎動物を食べます。",
    features: "淡灰褐色の体に複数の黒褐色の斜め帯があり、唇は鮮やかな赤色になります。尾びれの上半分は白く、下半分は黒色です。",
    behavior: "海底付近をゆっくり泳ぎ、発達した胸びれの下側軟条を海底近くへ向けながら餌を探します。",
    reproduction: "本種固有の詳しい産卵期や繁殖行動について、今回確認した資料では情報が限られるため断定しません。",
    identification: "赤い唇と、上下で白黒に分かれる尾びれが重要な特徴です。タカノハダイ、ユウダチタカノハと比較すると違いが明瞭です。",
    nameOrigin: "標準和名「ミギマキ」の詳しい由来については、主要資料から確定できないため断定しません。",
    humanRelation: "漁獲され食用になります。独特な赤い唇と縞模様からダイビングでも目につく魚です。",
    observationPoint: "唇→体の斜線→尾びれの順番で観察してください。3か所を見るだけで、近縁のタカノハダイ類との違いがかなり分かります。",
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
        text: "沿岸だけでなく河口や汽水域にも入り、特に若い個体は浅い河口域を成育場所として利用します。成長するとより深い場所へ移動します。"
      },
      {
        title: "性の仕組みが地域によって違う",
        text: "オーストラリアでは雌雄が分かれる個体群が確認されていますが、アジアではオスからメスへ変わる雄性先熟が報告されています。地域によって繁殖様式が異なる興味深い魚です。"
      }
    ],
    bodyLength: "最大で全長約80cm。一般的には45cm前後までの個体が多く見られます。",
    distribution: "紅海・東アフリカから日本、中国、オーストラリアまでインド・西太平洋に広く分布します。",
    habitat: "沿岸の浅場、岩礁、砂底、河口、汽水域など幅広い環境を利用します。",
    diet: "貝類などの底生無脊椎動物を中心に、海草などの植物質も食べます。",
    features: "銀白色の体に黄色味を帯びた細い縦線が見られます。腹びれ基部の上には鮮やかな黄色い部分があります。",
    behavior: "若い個体は河口や浅場で群れをつくり、成長するとより深い沿岸域へ移動します。",
    reproduction: "繁殖様式には地域差があります。アジアの個体群では雄性先熟が報告される一方、オーストラリアでは雌雄が別々の個体として成熟することが確認されています。",
    identification: "銀色のタイ型の体と、腹びれ付け根付近の黄色い部分を確認します。マダイのような赤色や青い斑点はありません。",
    nameOrigin: "標準和名「ヘダイ」の詳しい語源については主要資料から確定できないため断定しません。",
    humanRelation: "食用・釣魚として利用され、地域によって養殖も行われています。",
    observationPoint: "腹びれの付け根周辺を見てください。鮮やかな黄色が見つかれば、ヘダイを見分ける重要な手掛かりになります。",
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
        text: "小さなウマヅラハギは流れ藻の周辺を利用します。海を漂う流れ藻は、多くの幼魚にとって隠れ場所や餌場になります。"
      },
      {
        title: "日本では養殖も行われる",
        text: "天然で漁獲されるだけでなく、日本では養殖対象にもなっています。カワハギ類と同じく食用価値の高い魚です。"
      }
    ],
    bodyLength: "最大で全長約37cm。一般には20〜30cm前後の個体が多く見られます。",
    distribution: "北海道から琉球列島、東シナ海、南シナ海周辺まで北西太平洋に分布します。",
    habitat: "成魚は沖合の岩礁周辺などに生息し、水深50〜110m程度で多く記録されています。幼魚は流れ藻を利用します。",
    diet: "動物プランクトンなどを食べます。成長段階や環境によって利用する餌は変化します。",
    features: "左右に強く平たい体と、馬の顔のように長く伸びた吻が特徴です。第一背びれには強い棘があります。",
    behavior: "幼魚は流れ藻と一緒に移動し、成魚は沖合の海底付近を生活場所として利用します。",
    reproduction: "本種固有の詳しい産卵行動について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "カワハギより吻が長く、細長い顔つきをしています。第一背びれの棘と左右に薄い体も特徴です。",
    nameOrigin: "細長く伸びた顔が馬の顔を連想させることから「ウマヅラハギ」と呼ばれます。",
    humanRelation: "食用魚で、刺身、鍋物、干物などに利用されます。養殖も行われています。",
    observationPoint: "横から顔の長さを見てください。カワハギ類らしい薄い体と、馬のように長い顔の組み合わせがよく分かります。",
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
        text: "眼が赤色から赤橙色に見えることが大きな特徴です。体にも桃色から赤褐色が入り、他の日本産トラフグ属とはかなり印象が違います。"
      },
      {
        title: "日本周辺に限られるフグ",
        text: "厚生労働省では日本特産種として紹介されており、房総半島から高知沖までの本州太平洋側を中心に分布します。"
      }
    ],
    bodyLength: "全長約25cmになる小型のフグです。",
    distribution: "日本の本州中部太平洋側を中心に、房総半島から高知沖まで分布します。",
    habitat: "沿岸の海底付近に生息し、底刺網や小型定置網で漁獲されることがあります。",
    diet: "甲殻類や貝類など海底の小動物を食べると考えられますが、本種だけの詳細な食性資料は限られるため特定の餌に限定しません。",
    features: "桃黄色から橙褐色の体に黒褐色の棒状・円形の斑点が散在し、眼は赤橙色になります。背面と腹面には小棘がなく、表面は滑らかです。",
    behavior: "海底付近を泳ぎながら餌を探します。他のフグ類と同様、危険を感じると体を膨らませることがあります。",
    reproduction: "人工授精による卵発生と仔稚魚の飼育研究が行われています。野生での詳細な産卵行動については、今回確認した資料だけでは断定しません。",
    identification: "赤橙色の眼と、赤褐色系の体に散る黒い小斑点を確認します。背面と腹面に小棘がないことも識別点です。",
    nameOrigin: "赤色から赤橙色に見える眼が、標準和名「アカメフグ」の由来です。",
    humanRelation: "フグ毒を持ちます。厚生労働省の基準では筋肉と精巣は可食ですが、肝臓・卵巣・皮・腸は食用不可です。フグ処理には専門資格・地域の規制が関係するため、一般の人が自己判断で調理してはいけません。",
    observationPoint: "まず眼の色を見てください。その後、体表に小棘がなく滑らかに見えることと、黒褐色斑の形を観察すると特徴が分かります。",
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
        text: "古い資料ではEpinephelus septemfasciatusと書かれていますが、現在はHyporthodus septemfasciatusが受理名です。学名変更が多いハタ類の代表例です。"
      },
      {
        title: "最大1.5m級になる",
        text: "FishBaseでは最大全長155cm、体重63kgの記録があります。水族館でも成長すると非常に存在感のある大型魚になります。"
      }
    ],
    bodyLength: "最大で全長約155cm、体重63kgの記録があります。",
    distribution: "日本、朝鮮半島、中国周辺など北西太平洋に分布します。確実な分布域は比較的限られています。",
    habitat: "沿岸の浅い岩礁域を中心に生息し、水深5〜30m程度から記録されています。",
    diet: "魚類や甲殻類などを捕食します。",
    features: "淡い褐色の体に7〜8本の太い暗色帯があり、尾柄にも暗い帯が入ります。大型になると帯がやや不明瞭になることがあります。",
    behavior: "岩礁や半閉鎖的な沿岸域で生活し、海底近くから魚や甲殻類を捕食します。",
    reproduction: "ハタ類にみられる雌性先熟型の性転換を行う魚として養殖・繁殖研究の対象になっています。大型の雄を確保するため人工的な性転換技術も研究されています。",
    identification: "体側の7〜8本の暗色帯と尾柄の帯、大型でがっしりした体形を確認します。クエとは帯の形や頭部の輪郭などが異なります。",
    nameOrigin: "標準和名「マハタ」の詳しい語源については、今回確認した主要資料では確定できないため断定しません。",
    humanRelation: "高級食用魚として扱われ、日本では養殖も行われています。大型になる一方で成長に時間がかかる魚です。",
    observationPoint: "クエと並べて体側の帯を比較してください。マハタでは7〜8本の暗色帯が規則的に並ぶことが大きな特徴です。",
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
        text: "下あごの先端付近に発光器があり、その中に共生する発光細菌が光を作ります。古くからマツカサウオと発光細菌の共生研究が行われています。"
      },
      {
        title: "松ぼっくりのような天然のよろい",
        text: "体表は非常に硬く大きな鱗で覆われ、それぞれの鱗の縁が黒く見えます。黄色い体と組み合わさることで松かさのような独特な模様になります。"
      }
    ],
    bodyLength: "最大で全長約17cm。一般には10〜15cm程度の個体が多く見られます。",
    distribution: "紅海・東アフリカから日本、台湾、中国、オーストラリア、ニューカレドニアなどインド・西太平洋に広く分布します。",
    habitat: "岩礁の洞窟や岩陰など暗い場所を好みます。成魚は主に水深20〜200mで見られますが、浅場から300m程度まで記録があります。",
    diet: "小型甲殻類などの小動物を捕食します。",
    features: "黄色い体を硬い大型鱗が覆い、鱗の縁は黒く見えます。背側には独立した太い棘があり、下あご付近には発光器があります。",
    behavior: "日中は岩穴や洞窟など暗い場所に集まり、暗くなると活動性が高まります。複数個体で見られることもあります。",
    reproduction: "本種固有の産卵期や産卵行動について、今回確認した主要資料では情報が限られるため断定しません。",
    identification: "黄色い体、黒く縁取られた大きな硬い鱗、背側の太い棘という組み合わせは非常に特徴的です。",
    nameOrigin: "硬い鱗が重なった姿が植物の松かさ、つまり松ぼっくりに似ることから「マツカサウオ」と呼ばれます。",
    humanRelation: "独特の姿と発光能力から水族館で人気があり、魚類と発光細菌の共生を研究する対象としても重要です。",
    observationPoint: "体の硬そうな鱗を見た後、下あごの先端付近にも注目してください。暗い展示環境では発光器の弱い光が分かることがあります。",
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
        text: "最初はメスとして成熟し、一部の大型個体がオスへ性転換します。オスとメスでは体色が大きく異なります。"
      },
      {
        title: "オスは複数のメスと繁殖グループを作る",
        text: "繁殖期には1匹のオスと複数のメスからなるグループを形成し、雌雄が水中へ泳ぎ上がって放卵・放精します。"
      }
    ],
    bodyLength: "全長ではオス約20cm、メス約17cm程度までになります。",
    distribution: "日本、朝鮮半島、台湾など西太平洋に分布し、日本では相模湾以南を中心に見られます。",
    habitat: "沿岸の岩礁域に群れで生息し、水深15〜110m程度から知られています。",
    diet: "動物プランクトンや小型甲殻類など、水中を漂う小さな動物を捕食します。",
    features: "メスは赤色から橙赤色を基調とし、オスでは赤色の体に白色斑が目立ちます。性転換によって体色と模様が大きく変化します。",
    behavior: "岩礁から少し離れた中層で群れをつくり、流れてくるプランクトンを捕食します。",
    reproduction: "雌性先熟型です。国内資料では8〜11月頃に繁殖し、オス1匹と複数のメスからなる繁殖グループを形成することが知られています。",
    identification: "性別による色彩差が大きいため、オスとメスを別種と誤認しないことが重要です。成熟オスの白い斑紋が特に目立ちます。",
    nameOrigin: "成熟したオスに現れる白い斑点を桜の花びらに見立てたことが和名に関係するとされています。",
    humanRelation: "主要な食用魚ではありませんが、鮮やかな体色から水族館やダイビングで人気があります。",
    observationPoint: "複数個体がいる場合は体色を比較してください。赤橙色のメスと、白い斑点が目立つオスの違いを探すのがおすすめです。",
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
        text: "オスは赤色や紫色が強い複雑な色彩になりますが、メスは赤橙色を基調とした比較的単純な模様になります。"
      },
      {
        title: "深めの岩礁で見られるハナダイ",
        text: "相模湾などでは水深30〜40mを超える場所でよく観察されるため、ダイバーにとっては少し深場で出会うハナダイの代表種です。"
      }
    ],
    bodyLength: "オスは体長約14cm、メスは約10cm程度になります。",
    distribution: "相模湾、伊豆諸島から南日本太平洋岸、山口県日本海岸、朝鮮半島南部などに分布します。",
    habitat: "水深16〜65m程度の岩礁域に生息し、特に30m以深で群れを形成することがあります。",
    diet: "動物プランクトンや小型甲殻類などを捕食します。",
    features: "オスでは体前半が赤橙色、後半が紫赤色を帯び、ひれにも鮮やかな色彩が現れます。メスはオスより小型で、体側鱗に暗色部が目立ちます。",
    behavior: "岩礁上の中層へ泳ぎ出し、潮に乗って流れてくる小動物を捕食します。",
    reproduction: "ハナダイ類には性転換を行う種が多いものの、本種について今回確認できた資料だけでは性転換様式や地域別の産卵期を十分に確定できないため、ここでは断定しません。",
    identification: "オスでは前半と後半で体色の印象が変わること、メスでは背びれ第3棘が伸びることなどが識別点になります。",
    nameOrigin: "ハナダイ類の中で比較的細長い体形を持つことが「ナガハナダイ」という名称に関係します。",
    humanRelation: "観賞魚として扱われるほか、伊豆などのダイビングで深場の被写体として人気があります。",
    observationPoint: "オスとメスの体色を見比べてください。特にオスでは赤・紫・白の色彩が照明によって大きく変わって見えます。",
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
        text: "幼魚は黒色を基調として黄色い帯やひれを持ちますが、成長すると黄褐色の体に鮮やかな青色の横線が入る姿へ変化します。"
      },
      {
        title: "メスからオスへ性転換する",
        text: "雌性先熟型で、複数のメスと大型のオスからなる繁殖グループを形成します。"
      }
    ],
    bodyLength: "最大で全長約22〜25cm。",
    distribution: "南日本、朝鮮半島南部、台湾、中国沿岸など西太平洋北西部を中心に分布します。",
    habitat: "沿岸の岩礁域に生息し、水深5〜30m程度で見られます。幼魚は岩の割れ目や転石の近くをよく利用します。",
    diet: "カイメン類やホヤ類などの付着生物を中心に食べます。",
    features: "成魚では黄褐色の体に複数の鮮やかな青色縦線が走ります。鰓蓋にはキンチャクダイ科特有の強い棘があります。",
    behavior: "岩礁を泳ぎながら岩面の付着生物をついばみます。幼魚は成魚より隠れ場所への依存が強くなります。",
    reproduction: "雌性先熟型で、大型個体がオスになります。本州南岸では春から夏が繁殖期とされます。",
    identification: "成魚では青い横方向の線、幼魚では黒色の体と黄色い模様を確認します。成長による模様変化が非常に大きい魚です。",
    nameOrigin: "体を横から見た形が巾着を思わせることが和名に関係するとされています。",
    humanRelation: "海水観賞魚として知られ、水族館でも日本沿岸の大型キンチャクダイ類として展示されます。",
    observationPoint: "青い線だけでなく鰓蓋の後方を見てください。キンチャクダイ科特有の棘を確認できます。",
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
        text: "体側には約8本の横帯があり、上半分は褐色、下半分は黄色味を帯びます。種小名multifasciataも『多くの帯を持つ』という意味です。"
      },
      {
        title: "名前の通り沖合の深場に暮らす",
        text: "浅場に多いトラギス類に対し、本種は水深100m前後の砂泥底などでよく見られるため『オキトラギス』と呼ばれます。"
      }
    ],
    bodyLength: "最大で全長約17cm。",
    distribution: "新潟県・茨城県付近から九州南岸、東シナ海大陸棚周辺などに分布します。",
    habitat: "水深100m前後を中心とした大陸棚の砂泥底に生息します。",
    diet: "エビ・カニ類などの甲殻類やゴカイ類などを捕食します。",
    features: "細長い体に複数の横帯があり、唇は赤色を帯びます。尾びれ基部上側には暗色斑があります。",
    behavior: "海底付近を移動しながら、砂泥底にいる小型動物を探して捕食します。",
    reproduction: "国内資料では春に産卵し、仔稚魚は中層から採集されることがあります。",
    identification: "約8本の体側帯、赤い唇、尾びれ基部上部の暗色斑を組み合わせて識別します。",
    nameOrigin: "浅場のトラギスより沖合の深場で見られることから『沖のトラギス』という意味で付けられた名称です。",
    humanRelation: "アマダイ釣りなどで混獲されることがあり、小型ですが白身で食用になります。",
    observationPoint: "海底に止まったときに体側の帯を数えてみてください。唇の赤色も分かりやすい特徴です。",
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
        text: "八放サンゴ類の系統解析によって分類体系が再編され、現在BISMaLではフトヤギをMalacalcyonacea・Euplexauridaeに置いています。古い図鑑とは目や科の名称が異なる場合があります。"
      },
      {
        title: "1匹ではなく多数の個虫からできている",
        text: "木の枝のように見える群体は、多数の小さなポリプが共同でつくっています。各ポリプは八放サンゴ類らしく8本の羽状触手を持ちます。"
      }
    ],
    bodyLength: "群体の大きさは生育環境によって異なりますが、枝分かれしながら数十cm規模に成長します。",
    distribution: "日本沿岸の温帯域に分布し、相模湾などから記録されています。",
    habitat: "岩礁に固着し、海水の流れがある場所で枝状の群体を広げます。",
    diet: "ポリプの触手を広げ、水中を流れる動物プランクトンや有機物粒子などを捕らえます。",
    features: "太く枝分かれした群体を形成します。中心には群体を支える軸があり、その表面を多数のポリプを含む組織が覆います。",
    behavior: "移動することはなく岩に固着して生活します。流れに応じてポリプを開き、餌を捕らえます。",
    reproduction: "八放サンゴ類では有性生殖と群体の成長による無性的増殖が知られますが、本種固有の繁殖時期については十分な資料がないため断定しません。",
    identification: "太い枝状の群体が特徴ですが、フトヤギ属には似た種が多く、厳密な種同定では骨片などの観察が必要です。",
    nameOrigin: "他のヤギ類に比べて枝が太く見えることが『フトヤギ』という名称に表れています。",
    humanRelation: "相模湾など日本沿岸の八放サンゴ相を研究する上で重要な種です。",
    observationPoint: "枝そのものだけでなく表面を近くで見てください。小さなポリプが多数並んで群体を作っていることが分かります。",
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
        text: "国内の古い図鑑や一部の水族館資料ではEchinogorgia rigidaとされていますが、現在WoRMSではMenella rigidaが受理名です。"
      },
      {
        title: "八景島の個体資料でもMenella rigida",
        text: "水産無脊椎動物研究所が掲載している八景島シーパラダイスのアカヤギも、Menella rigidaとして記録されています。"
      }
    ],
    bodyLength: "群体は高さ30〜50cm程度まで成長することがあります。",
    distribution: "相模湾以南の日本沿岸からオーストラリア周辺まで知られています。",
    habitat: "浅海の岩礁に基部を付着させて生活します。",
    diet: "ポリプを開き、水中を流れる小型プランクトンや有機物粒子を捕らえます。",
    features: "群体は縦長の扇状に枝分かれし、鮮やかな血赤色になります。枝は癒着せず、黒褐色で弾力のある軸に支えられます。",
    behavior: "岩へ固着したまま、流れがあるときに多数のポリプを広げて餌を捕らえます。",
    reproduction: "本種固有の繁殖時期や幼生生態について十分な資料を確認できないため、近縁種の情報をそのまま当てはめません。",
    identification: "鮮やかな赤色の扇状群体が目立ちますが、近縁のアカヤギ類が複数存在するため、厳密な同定では骨片などの観察が必要です。",
    nameOrigin: "群体全体が鮮やかな赤色を呈することから『アカヤギ』と呼ばれます。",
    humanRelation: "観賞的に美しい八放サンゴであり、日本沿岸のヤギ類の分類研究でも扱われます。",
    observationPoint: "遠くから群体全体の扇状の形を見た後、近くで枝の表面に並ぶ小さなポリプを探してください。",
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
        text: "多くの造礁サンゴとは異なり、褐虫藻による光合成へ強く依存しない非造礁性サンゴです。そのため岩陰や洞窟など暗い環境にも生息できます。"
      },
      {
        title: "世界各地で外来種にもなっている",
        text: "本来のインド太平洋以外へ人為的に運ばれた地域では急速に増殖し、ブラジルなどでは代表的な侵入サンゴとして研究されています。"
      }
    ],
    bodyLength: "群体の大きさは一定ではありません。個々のサンゴ個体の莢は直径約6〜10mm程度です。",
    distribution: "日本では相模湾以南に見られ、インド・太平洋の暖海域に広く分布します。人為移入によって大西洋などにも定着しています。",
    habitat: "岩礁壁、洞窟、人工構造物などに付着し、日本では水深0〜10m程度の流れの速い場所でも見られます。",
    diet: "ポリプの触手で動物プランクトンや有機物を捕食します。",
    features: "橙色の共肉から黄色から橙色のポリプが突出し、群体になると多数の小さなカップが集まったように見えます。",
    behavior: "触手を大きく広げて餌を捕らえます。明暗や餌の存在によってポリプを開閉します。",
    reproduction: "有性生殖に加えて無性的な増殖も行い、高い繁殖能力を持ちます。幼生による分散能力も侵入地域での急速な拡大に関係しています。",
    identification: "橙色の群体と黄色系の触手が特徴ですが、Tubastraea属にはよく似た種が存在するため、厳密な同定では骨格形態も確認します。",
    nameOrigin: "表面から小さなこぶのようにサンゴ個体が突き出して見えることが『イボヤギ』という名称に関係します。",
    humanRelation: "日本では自然分布する一方、海外の一部地域では侵略的外来種として駆除・生態研究の対象となっています。",
    observationPoint: "ポリプが閉じている時と開いている時を比較してください。触手が広がると、同じ群体でも印象が大きく変わります。",
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
        text: "成長すると新しい部屋を作りながら前方へ移動します。古い部屋にはガスや液体が入り、浮力調節に利用されます。"
      },
      {
        title: "タコやイカとは違い吸盤がない",
        text: "60〜90本ほどの細い触手を持ちますが、タコやイカの腕のような吸盤はありません。粘着性のある触手で餌や岩につかまります。"
      }
    ],
    bodyLength: "成熟個体の殻径はおよそ13〜23cm程度です。",
    distribution: "インド洋から西太平洋の熱帯域に分布します。",
    habitat: "サンゴ礁の外側斜面など、水深100〜600m程度を中心に生活します。",
    diet: "甲殻類などの小動物や動物の死骸などを利用する肉食・腐肉食性です。",
    features: "白色と赤褐色の縞がある螺旋状の外殻を持ちます。殻内部は隔壁によって多数の部屋に分けられています。",
    behavior: "漏斗から水を噴き出すジェット推進で移動し、触手で岩などにつかまります。昼夜で利用する水深が変わることもあります。",
    reproduction: "雌雄は別で、交接によって受精します。大きな卵を産み、発生には長い期間を必要とするため、増殖速度の遅い頭足類です。",
    identification: "現生頭足類で発達した外殻を持つことが最大の特徴です。螺旋状の殻と多数の触手を確認します。",
    nameOrigin: "殻の模様や形が鳥のオウムのくちばしを連想させることが名称の由来とされています。",
    humanRelation: "美しい殻が装飾品として取引されてきました。オウムガイ科はCITES附属書IIに掲載され、国際取引が管理されています。",
    observationPoint: "LABO7では標本展示です。殻の螺旋形、赤褐色の縞、殻内部が見える標本であれば部屋が連続する構造に注目してください。",
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
        text: "骨格は主に二酸化ケイ素からなる非常に細いガラス質の骨針でできています。骨針が格子状に組み合わさり、軽くても壊れにくい構造を作ります。"
      },
      {
        title: "名前は『夫婦で同じ穴に暮らす』話から",
        text: "内部にドウケツエビ類が共生することがあり、雌雄のエビが内部で暮らす姿を夫婦になぞらえて『偕老同穴』という名前が付けられました。"
      }
    ],
    bodyLength: "個体によって大きく異なりますが、筒状・かご状の骨格は数十cm規模になります。",
    distribution: "日本では相模湾以南の深海などから知られ、西太平洋の深海域にも分布します。",
    habitat: "深海の海底に固着して生活します。",
    diet: "体内へ海水を通し、海水中の微細な有機物や微生物などを濾し取って利用します。",
    features: "白色半透明のガラス質骨針が精密な格子構造を作り、筒状の美しい骨格になります。",
    behavior: "動物ですが移動せず海底に固定され、体内へ海水を取り込んで濾過摂食します。",
    reproduction: "六放海綿類は有性生殖を行いますが、本種固有の繁殖周期について今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "白いガラス繊維を編んだような籠状骨格が非常に特徴的です。",
    nameOrigin: "内部で雌雄のドウケツエビ類が生活する様子を、夫婦が共に老いて同じ墓へ入る意味の『偕老同穴』に重ねた名称です。",
    humanRelation: "美しい骨格から標本として知られるほか、軽量で高強度な格子構造が材料科学や生体模倣研究でも注目されています。",
    observationPoint: "LABO7では標本展示です。遠くから全体の籠状形態を見た後、近づいてガラス質の骨格が斜めに交差する構造を観察してください。",
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
        text: "爬虫類のウミヘビではなく、ウナギ目ウミヘビ科に属するれっきとした魚です。鰓で呼吸します。"
      },
      {
        title: "2mを超える記録がある",
        text: "FishBaseでは最大全長207cmが記録されており、非常に細長い体形のため実際の長さ以上に大きく見えることがあります。"
      }
    ],
    bodyLength: "最大で全長約207cm。一般的には60cm前後の個体も多く見られます。",
    distribution: "日本を含むインド・西太平洋を中心に分布します。",
    habitat: "海底付近で生活し、砂泥底や岩礁周辺などから記録されています。日本近海のBISMaL記録には水深100mを超えるものもあります。",
    diet: "魚類や甲殻類などを捕食する肉食性です。",
    features: "非常に細長いウナギ型の体と、前方へ長く伸びた吻が特徴です。",
    behavior: "海底付近で生活し、長い体をくねらせながら泳ぎます。ウミヘビ科には砂へ体を潜らせる種類が多く、本種も底生生活に適応しています。",
    reproduction: "ウナギ目魚類らしくレプトケファルスと呼ばれる透明で葉状の幼生期を経ます。本種固有の詳細な産卵場所については十分な情報がありません。",
    identification: "爬虫類のウミヘビとは異なり鰓孔を持つ魚です。非常に長い吻と細長い体が識別点になります。",
    nameOrigin: "蛇のように長い体を持つ海産魚であることからウミヘビと呼ばれます。",
    humanRelation: "地域によって漁獲されることがありますが、一般的な主要食用魚ではありません。",
    observationPoint: "顔を横から観察し、吻がどれほど長く伸びているかを見てください。体の長さとの組み合わせが本種の特徴です。",
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
        text: "暗い環境でも光を集めやすい大きな眼を持ちます。頭の大きさに対して眼が非常に大きく、深場の魚らしい姿です。"
      },
      {
        title: "若い個体と成魚で暮らす深さが違う",
        text: "若魚は比較的浅い場所にも現れますが、成長した個体は水深数百m付近までの深場を利用します。"
      }
    ],
    bodyLength: "最大で全長約60cm。",
    distribution: "日本を含む世界の温帯から熱帯海域に広く分布します。",
    habitat: "岩礁性の海底付近に生息し、成魚は水深300m付近でも見られます。若魚はより浅い場所へ現れます。",
    diet: "エビ・カニ類、イカ・タコ類、小魚などを捕食します。",
    features: "鮮やかな赤色の体、大きな眼、大きく発達した腹びれが特徴です。体高が高く強く側扁します。",
    behavior: "暗い時間帯に活動性が高まり、海底近くで小動物を捕食します。",
    reproduction: "本種固有の詳細な産卵時期について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "赤い体、大きな眼、非常に大きな腹びれの組み合わせが特徴です。",
    nameOrigin: "眼が近くにあるという意味ではなく、非常に大きく目立つ眼を持つことに関連した和名とされています。",
    humanRelation: "食用や釣魚として利用されます。深場の魚を紹介する水族館展示にも向いています。",
    observationPoint: "眼の直径を頭全体と比べてください。暗い深場で暮らす魚の視覚への適応が分かりやすく現れています。",
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
        text: "雌性先熟型で、小型個体は主にメスとして成熟し、成長した一部の個体がオスへ性転換します。"
      },
      {
        title: "性別で体色が大きく違う",
        text: "メスは赤色が強く、オスは黄色味が増して体側に黄色い虫食い状の模様が現れます。"
      }
    ],
    bodyLength: "国内資料ではオスは全長約45cm、メスは約30cmまでになります。",
    distribution: "日本、朝鮮半島、台湾のほか、オーストラリアやニューカレドニア周辺にも分布します。",
    habitat: "水深40〜300m程度の岩礁や大陸棚縁辺部に生息します。",
    diet: "小型甲殻類などを含む動物性の餌を捕食します。",
    features: "メスは赤色を基調とし、背側に暗色斑があります。オスは黄色味が強く、背びれ基部に黒色斑が現れます。",
    behavior: "潮通しのよい外洋性岩礁で小規模な群れを形成します。",
    reproduction: "雌性先熟型で、30cm前後までメスとして成長した後に一部がオスへ性転換します。繁殖期には大型オスを中心とするグループを形成すると考えられています。",
    identification: "性別で色彩が違います。赤色のメスと黄色味の強い大型オスを同じ種として認識することが重要です。",
    nameOrigin: "赤い体色を持ち、イサキに似た姿をしていることが名称に表れています。",
    humanRelation: "釣りで漁獲され食用になります。ハナダイ類としては大型になる種です。",
    observationPoint: "複数個体がいる場合は体色を比較してください。性転換にともなう色彩変化を観察できる可能性があります。",
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
        text: "種小名oxycephalusはギリシャ語で『鋭い・尖った頭』を意味し、前方へ尖った特徴的な頭部を表しています。"
      },
      {
        title: "繁殖時はペアになる",
        text: "FishBaseでは卵生で、繁殖時に雌雄が明瞭なペアを形成する魚として記録されています。"
      }
    ],
    bodyLength: "最大で標準体長約29cm。全長では40cm近くになる個体も知られます。",
    distribution: "相模湾付近から南日本、朝鮮半島、台湾北東部周辺までの北西太平洋に分布します。",
    habitat: "沿岸からやや深い岩礁域に生息します。",
    diet: "甲殻類や貝類など海底にいる底生無脊椎動物を捕食します。",
    features: "前方へ尖った頭部と厚い唇を持ちます。体色や模様は成長によって変化します。",
    behavior: "岩礁周辺を泳ぎ回りながら、岩や海底にいる小動物を探して捕食します。",
    reproduction: "卵生で、繁殖時には雌雄がペアを形成します。",
    identification: "細長く尖った頭部が大きな特徴です。体色だけではなく吻の形を確認します。",
    nameOrigin: "前方へ尖った顔つきをキツネの顔に見立てたことが名称の由来です。",
    humanRelation: "漁獲され食用になるほか、ダイビングで観察されます。",
    observationPoint: "真正面と横から顔を見比べてください。キツネのように前方へ尖った吻が分かりやすい特徴です。",
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
        text: "砂泥底に穴を掘り、その巣穴を生活の拠点にします。危険を感じると素早く穴の中へ逃げ込みます。"
      },
      {
        title: "鱗まで料理になる高級魚",
        text: "鱗をつけたまま高温で加熱し、鱗を立たせる松笠焼き・松笠揚げなど、鱗まで利用する料理で知られています。"
      }
    ],
    bodyLength: "最大で全長約46cm。一般には35cm前後の個体が多く見られます。",
    distribution: "本州中部以南から東シナ海、南シナ海周辺まで分布します。",
    habitat: "水深30〜200m程度の砂泥底に生息します。",
    diet: "甲殻類、ゴカイ類など海底の小型動物を捕食します。",
    features: "桃色から赤色の細長い体と、大きく傾斜した頭部が特徴です。眼の後方には白色域があり、体側中央には黄色い模様が見られます。",
    behavior: "自ら掘った巣穴の周辺で活動し、餌を探したり危険時に穴へ逃げたりします。",
    reproduction: "卵生です。繁殖生態には地域差があるため、今回のFishGuideでは特定の産卵月を一律には記載しません。",
    identification: "赤桃色の体、眼後方の白い部分、体側の黄色い模様を確認します。",
    nameOrigin: "赤色の体を持つアマダイ類であることから『アカアマダイ』と呼ばれます。",
    humanRelation: "非常に評価の高い食用魚で、京都では『ぐじ』として知られます。若狭ぐじなどブランド魚として扱われる例もあります。",
    observationPoint: "水槽の底との関係を観察してください。底へ近づいたり、穴の周辺で行動したりする姿に注目です。",
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
        text: "九州地方ではクエを地方名で『アラ』と呼ぶことがありますが、標準和名アラはNiphon spinosusというまったく別の魚です。"
      },
      {
        title: "成長すると深い海へ移る",
        text: "若い個体は比較的浅い場所に現れますが、成長するにつれて水深100〜300m前後の深い海底へ移動します。"
      }
    ],
    bodyLength: "最大では全長1mを超える大型魚です。",
    distribution: "北海道太平洋岸、本州、四国、九州、東シナ海、中国・朝鮮半島・台湾周辺などに分布します。",
    habitat: "水深70〜360m程度の岩礁や貝殻混じりの砂底などに生息します。",
    diet: "魚類やイカ類などを捕食します。",
    features: "スズキに似た細長い体形を持ちますが、頭部・鰓蓋周辺には強い棘があります。若魚には体側上部に白い縦線が見られます。",
    behavior: "海底から少し上を泳ぎながら魚やイカを捕食します。成長するにつれてより深い場所を利用します。",
    reproduction: "国内資料では夏から秋に産卵し、この時期にはやや浅い水深帯へ集まる傾向があるとされています。",
    identification: "クエとはまったく異なる細長い体形です。鰓蓋周辺の強い棘と背びれ棘数なども識別に利用されます。",
    nameOrigin: "標準和名『アラ』の確実な語源については、今回確認した主要資料だけでは断定できません。",
    humanRelation: "非常に美味な高級魚として知られ、大型個体は希少です。鍋物や刺身などに利用されます。",
    observationPoint: "『クエ＝アラ』という地方名との違いを意識し、細長い体つきと頭部の棘を見てください。",
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
        text: "成長すると両眼が体の左側へ移動します。体を海底へ横倒しにしたような姿で生活します。"
      },
      {
        title: "春に産卵する",
        text: "国内資料では春が主な産卵期とされ、浅い砂泥底を利用して生活します。"
      }
    ],
    bodyLength: "最大で全長約50cm。",
    distribution: "本州中部以南から黄海、東シナ海、南シナ海周辺まで分布します。",
    habitat: "主に水深30m以浅の砂泥底に生息します。",
    diet: "甲殻類、ゴカイ類、小魚などを捕食します。",
    features: "有眼側は緑褐色から茶褐色で、丸い斑紋があります。口は大きく、ヒラメ型の体をしています。",
    behavior: "海底へ体を密着させ、ときには砂へ一部を埋めながら獲物を待ち伏せします。",
    reproduction: "卵生で、国内では春が主な産卵期とされています。",
    identification: "有眼側の眼状斑や体形が識別に重要です。タマガンゾウビラメなど近縁種とは斑紋の位置や形を比較します。",
    nameOrigin: "標準和名の詳しい命名由来については諸説があるため、この図鑑では断定しません。",
    humanRelation: "漁獲され食用になります。刺身や塩焼きなどに利用される白身魚です。",
    observationPoint: "海底と体の境界を探してください。体色が底質と似ており、見つけること自体が観察ポイントになります。",
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
        text: "卵生のエイで、卵は硬い卵殻に包まれます。FishBaseでは卵殻は長さ約5.6〜6.0cm、幅約3cmとされています。"
      },
      {
        title: "日本周辺に分布する小型カスベ",
        text: "FishBaseでは北西太平洋の日本から知られ、水深30〜60m程度の海底に生息するとされています。"
      }
    ],
    bodyLength: "今回確認した主要データベースでは信頼できる最大全長値を確定できなかったため、数値を無理に記載しません。",
    distribution: "日本周辺の北西太平洋に分布します。",
    habitat: "水深30〜60m程度を中心とする砂泥底などの海底に生息します。",
    diet: "小型甲殻類やその他の底生動物を捕食すると考えられますが、本種だけを対象とした詳細な食性資料は限られています。",
    features: "体は強く平たく、胸びれが頭部と連続して円盤状になります。吻は比較的短く、尾は細長く伸びます。",
    behavior: "海底に体を密着させて生活する底生性のエイです。",
    reproduction: "卵生で、雌は硬い卵殻に包まれた卵を産みます。胚は卵黄を栄養源として発生します。",
    identification: "ガンギエイ類は非常によく似るため、吻の形、体盤の比率、棘や斑紋などを組み合わせて同定します。",
    nameOrigin: "吻が比較的短く『詰まった』ように見えることが和名に関係すると考えられます。",
    humanRelation: "FishBaseのIUCN情報ではVulnerableとして評価されており、軟骨魚類として資源管理・保全上も注目されます。",
    observationPoint: "体盤の前端、特に吻の長さを見てください。さらに尾へ向かって体がどのようにつながるか観察するとエイの体構造が分かります。",
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
        text: "赤い体を大きく硬い鱗が覆い、見た目にも頑丈な印象があります。属名Ostichthysも骨を意味する語に由来します。"
      },
      {
        title: "2018年に近縁種が整理された",
        text: "北西太平洋産Ostichthys japonicus種群の再検討が行われ、似た種類との形態的な違いが詳しく整理されました。"
      }
    ],
    bodyLength: "最大で全長約45cm。一般には35cm程度までの個体が多く見られます。",
    distribution: "南日本を含むインド・太平洋に分布し、フィリピン、オーストラリア、ニューカレドニア、フィジーなどでも知られます。",
    habitat: "水深20〜270m程度の岩礁やその周辺に生息します。",
    diet: "小魚や甲殻類などを捕食すると考えられます。",
    features: "鮮やかな赤色の体と大きな硬い鱗を持ちます。胸びれ基部上部には暗赤色の斑紋が見られます。",
    behavior: "岩礁の海底近くで生活し、暗い環境を利用する深場の魚です。",
    reproduction: "本種固有の繁殖期や産卵行動について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "大きく硬い鱗、赤色の体、胸びれ基部上方の暗赤色斑などを確認します。",
    nameOrigin: "鮮やかな赤色や特徴的な姿を七福神の恵比寿に重ねた名称とされていますが、命名由来には資料差があります。",
    humanRelation: "漁獲され食用になりますが、深場にすむため一般市場で頻繁に見る魚ではありません。",
    observationPoint: "鱗を1枚ずつ見るつもりで体表を観察してください。普通の魚より非常に大きく硬そうな鱗で覆われています。",
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
        text: "体高が非常に高く、左右に強く平たい体をしています。その丸い輪郭が車輪のように見えることからクルマダイと呼ばれます。"
      },
      {
        title: "幼魚の方が縞模様が目立つ",
        text: "若い個体では体側に5本ほどの淡色の横帯がはっきり見えますが、成長すると模様が不明瞭になります。"
      }
    ],
    bodyLength: "最大で標準体長約27.4cm。全長では30cm前後になります。",
    distribution: "日本、東シナ海、台湾、中国南部、ベトナム、インドネシア、オーストラリアなど西太平洋からインド洋の一部に分布します。",
    habitat: "岩礁に関連して生活し、水深1〜250mまで記録があります。成魚は80〜100m以深で見られることが多く、幼魚は5〜30m程度の浅場にも現れます。",
    diet: "小型魚や甲殻類などを捕食する肉食魚です。",
    features: "非常に体高が高く、大きな眼を持ちます。若魚では体側に淡色の横帯が並び、成魚になると帯が薄くなります。",
    behavior: "岩礁周辺の暗い場所を利用します。大きな眼は光の少ない環境での生活に適しています。",
    reproduction: "卵生で、FishBaseでは直径約0.75mmの小さな球形の浮遊卵が記録されています。",
    identification: "車輪を思わせる高い体高と、頭部に対して非常に大きな眼を確認します。チカメキントキとも体形を比較できます。",
    nameOrigin: "体高が高く丸い体の輪郭を車輪に見立てたことから『クルマダイ』と呼ばれます。",
    humanRelation: "漁獲され食用になるほか、深場のキントキダイ類として水族館でも展示されます。",
    observationPoint: "LABO7のチカメキントキと見比べてください。同じキントキダイ科でも、クルマダイは特に丸く体高の高い体形をしています。",
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
        text: "属名Himeは日本語の標準和名「ヒメ」に由来します。古い資料ではAulopus japonicusとされますが、現在の有効名はHime japonicaです。"
      },
      {
        title: "現在のヒメは北西太平洋の種",
        text: "以前はオーストラリアなどの個体も同じ種とされましたが、分類の再検討によって別種が含まれていたことが分かり、現在のHime japonicaは日本・朝鮮半島・東シナ海から台湾付近を中心とする種として扱われます。"
      }
    ],
    bodyLength: "最大で標準体長約22.3cm。一般には15cm前後の個体が見られます。",
    distribution: "日本、朝鮮半島、東シナ海から台湾付近までの北西太平洋に分布します。",
    habitat: "水深85〜510m程度の海底近くに生息する底生性の魚です。",
    diet: "甲殻類や多毛類など、海底付近の小型動物を捕食します。",
    features: "細長い体と比較的大きな頭を持ちます。背びれが発達し、性別や成長段階によってひれの色彩や形に違いが見られます。",
    behavior: "砂泥底など海底付近で生活し、底生動物を探して捕食します。",
    reproduction: "本種固有の産卵時期や繁殖行動について、今回確認できた資料では十分な情報がないため断定しません。",
    identification: "ヒメ科にはよく似た種が存在します。体形だけではなく、ひれの形、体の比率、鰭条数などを用いて識別します。",
    nameOrigin: "属名Himeも日本語の「ヒメ」に由来します。種小名japonicaは日本を意味し、タイプ産地は横浜とされています。",
    humanRelation: "底びき網などで漁獲されることがありますが、主要な食用魚ではありません。",
    observationPoint: "体そのものだけでなく、背びれの形と色彩を見てください。深場に暮らす小型魚らしい細長い体形も特徴です。",
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
        text: "長くPugettia sagamiensisやGoniopugettia sagamiensisとして扱われましたが、2017年の分類研究で本種のためにTunepugettia属が新設され、現在はTunepugettia sagamiensisとされています。"
      },
      {
        title: "名前は相模湾に由来",
        text: "種小名sagamiensisは相模湾に由来します。八景島のある神奈川県とも非常に関係の深い名前です。"
      }
    ],
    bodyLength: "甲幅は数cm程度になります。分類研究では甲幅5cmを超える個体も扱われています。",
    distribution: "日本では房総半島から土佐湾周辺まで知られています。",
    habitat: "比較的深い海底に生息し、底びき網などで採集されることがあります。",
    diet: "本種だけを対象とした信頼できる詳細な食性資料が少ないため、特定の餌を断定しません。",
    features: "甲はやや角張り、表面に多数の隆起や突起があります。長い歩脚を持つクモガニ上科らしい体形です。",
    behavior: "深場の海底で生活する底生性のカニです。本種固有の行動生態については十分な研究がありません。",
    reproduction: "雌が腹部に受精卵を抱える十脚類ですが、本種固有の繁殖期や抱卵数については十分な資料がないため断定しません。",
    identification: "近縁のモガニ類との識別には甲の輪郭、隆起、突起、脚の形態など専門的な形態観察が必要です。",
    nameOrigin: "相模湾にちなむ種小名sagamiensisを持つモガニ類であることが和名に表れています。",
    humanRelation: "一般的な食用種ではありませんが、日本の深海性カニ類の分類研究上重要な種です。",
    observationPoint: "甲の表面を近くで見てください。平らではなく、多数の凹凸や突起があることが分かります。",
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
        text: "中央盤から伸びる5本の腕が繰り返し枝分かれし、最終的には細かな網のような巨大な腕の集合になります。"
      },
      {
        title: "夜になると腕を大きく広げる",
        text: "夜間に枝分かれした腕を水中へ大きく広げ、流れてくるプランクトンなどを捕らえます。"
      }
    ],
    bodyLength: "腕を広げた大きさは個体によって大きく異なり、大型個体では数十cm規模になります。",
    distribution: "日本では相模湾以南の太平洋岸などに分布し、朝鮮半島南部周辺からも知られています。",
    habitat: "水深40〜880m程度の岩礁や海底で、ヤギ類などにつかまって生活することがあります。",
    diet: "枝分かれした多数の腕を水流中へ広げ、動物プランクトンや浮遊する有機物を捕らえます。",
    features: "中央盤から5本の腕が伸び、それぞれが何度も二叉状に枝分かれします。腕を縮めると複雑に巻き込んだ塊のようになります。",
    behavior: "昼間は腕を縮めていることが多く、夜になると腕を大きく広げて摂餌します。",
    reproduction: "本種固有の産卵期や幼生生態については研究情報が限られているため、詳細は断定しません。",
    identification: "Astrocladus属には似た種類があるため、腕の棘や中央盤の形態など専門的な特徴を用いて識別します。",
    nameOrigin: "多数に枝分かれする腕が鶴が舞うような複雑な姿に見えるテヅルモヅル類の一種です。",
    humanRelation: "深海・深場の特異な棘皮動物として水族館展示や分類研究の対象になります。",
    observationPoint: "5本の腕が途中から何回枝分かれしていくか、中心から先端へ向かって追ってみてください。",
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
        text: "非常に長い吻の先端に小さな口があり、海底や水中の小さな餌を吸い込むように捕食します。"
      },
      {
        title: "背中に長い1本の棘",
        text: "第2背びれの棘が非常に長く発達し、後方へ伸びます。細長い吻と並ぶ本種の大きな特徴です。"
      }
    ],
    bodyLength: "最大で全長約20cm。",
    distribution: "日本を含む世界の温帯・亜熱帯海域に広く分布します。",
    habitat: "水深25〜600m程度から記録され、成魚は主に大陸棚から大陸棚斜面の砂泥底付近で生活します。",
    diet: "幼魚はカイアシ類など浮遊性の小動物を食べ、成魚では底生性の小型無脊椎動物も利用します。",
    features: "強く側扁した体、非常に長い管状の吻、長く伸びる背びれ棘が特徴です。体色は桃色から赤色を帯びます。",
    behavior: "幼魚は表層付近で浮遊生活をしますが、成長すると海底に近い深場へ移ります。群れを形成することもあります。",
    reproduction: "卵生ですが、本種の地域別の産卵期や詳細な産卵行動については十分な情報がないため断定しません。",
    identification: "管状に長く伸びた吻と、背中から後方へ伸びる非常に長い棘の組み合わせが特徴です。",
    nameOrigin: "細く長い吻を笛に見立てた名称と考えられますが、和名の詳しい命名経緯は断定しません。",
    humanRelation: "底びき網などで漁獲されることがありますが、日本では主要な食用魚ではありません。",
    observationPoint: "口の位置を探してください。長い吻の一番先に非常に小さな口があります。",
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
        text: "正式な標準和名は『ヒラホモラ』です。学名はHomolomannia sibogaeです。"
      },
      {
        title: "深い海に暮らすホモラの仲間",
        text: "日本からフィリピン、インドネシア、ニューカレドニアなど西太平洋の深場から知られるカニです。"
      }
    ],
    bodyLength: "本種の最大サイズについて統一された信頼できる一般向け資料が少ないため、無理に数値を記載しません。",
    distribution: "日本、台湾、フィリピン、インドネシア、ニューカレドニアなど西太平洋から知られています。",
    habitat: "大陸棚から大陸斜面の比較的深い海底に生息し、フィリピンでは水深180〜200m付近から採集例があります。",
    diet: "本種だけを対象とした詳細な食性研究を確認できないため、特定の餌は断定しません。",
    features: "甲は比較的平たく四角形に近く、鰓域の側縁が比較的直線的です。長い歩脚を持つ深海性のカニです。",
    behavior: "海底で生活する底生性のカニですが、本種固有の詳しい行動については研究資料が限られています。",
    reproduction: "十脚類として雌が腹部に卵を抱えますが、本種固有の繁殖期・抱卵数については十分な資料がありません。",
    identification: "ホモラ科の近縁種との識別には、甲の形状、突起、歩脚など専門的な形態観察が必要です。",
    nameOrigin: "ホモラ科の中でも平たい甲を持つことが『ヒラホモラ』という名称に関係します。",
    humanRelation: "一般的な食用種ではなく、深海性甲殻類の分類・生物相研究で扱われる種です。",
    observationPoint: "甲を上から見てください。丸いカニとは異なり、比較的平たく角張った輪郭をしています。",
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
        text: "古い資料ではStichopus nigripunctatusやParastichopus nigripunctatusとされることがありますが、現在の受理名はApostichopus nigripunctatusです。"
      },
      {
        title: "危険時に内臓を出すことがある",
        text: "強い刺激を受けると消化管などを体外へ放出することがあります。失われた組織はその後再生できます。"
      }
    ],
    bodyLength: "大型個体では体長約40cmになることがあります。",
    distribution: "日本近海を中心とする北西太平洋から知られています。",
    habitat: "沿岸から深海まで生息し、水深20〜600m程度から記録されています。",
    diet: "海底の砂泥や堆積物を取り込み、その中に含まれる有機物や微生物を利用する堆積物食者です。",
    features: "大型で太い円筒形の体を持ち、体表は暗褐色から黒褐色を帯びます。表面には黒色斑や突起があります。",
    behavior: "海底をゆっくり移動しながら堆積物を摂食します。刺激を受けると内臓を放出する防御反応を示す場合があります。",
    reproduction: "雌雄が海中へ卵と精子を放出する有性生殖を行いますが、本種の地域別の繁殖期は一律には記載しません。",
    identification: "暗色の大型ナマコですが、近縁のマナマコ類との識別には体表の突起や骨片なども確認する必要があります。",
    nameOrigin: "沖合や比較的深い場所から得られるナマコであることが名称に関係すると考えられます。",
    humanRelation: "食用として利用されることがありますが、マナマコほど一般的な流通種ではありません。",
    observationPoint: "口だけでなく、体の後端まで体表の突起と黒い模様を観察してください。",
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
        text: "長くActinernidaeに含められていましたが、日本産カワリギンチャク類の分子系統・形態研究によって、2023年に新設されたIsactinernidaeへ移されました。"
      },
      {
        title: "日本周辺に分布する珍しいイソギンチャク",
        text: "相模湾、紀伊半島、五島列島、小笠原諸島など日本近海の深場から知られています。"
      }
    ],
    bodyLength: "大型個体では15cm前後になることがありますが、伸縮によって見かけの大きさは大きく変化します。",
    distribution: "日本周辺から知られ、相模湾、紀伊半島、五島列島、小笠原諸島などで記録されています。",
    habitat: "水深70〜400m程度の海底に生息します。",
    diet: "触手の刺胞を使って、水中を漂う小型動物や有機物を捕らえます。",
    features: "細長く立ち上がる体柱と、その上端に並ぶ多数の触手を持ちます。伸びた状態では背の高いイソギンチャクに見えます。",
    behavior: "海底へ付着し、触手を水中へ広げて餌を捕らえます。刺激を受けると触手や体柱を縮めます。",
    reproduction: "本種固有の繁殖時期や幼生生態については十分な資料がないため断定しません。",
    identification: "Synhalcurias属には近縁種が存在するため、厳密な同定には触手数や内部形態など専門的な観察が必要です。",
    nameOrigin: "体柱を長く伸ばした際に背が高く見えることが『セイタカ』の名称に関係します。",
    humanRelation: "日本産深海性イソギンチャク類の系統進化・分類を研究する上で重要な種です。",
    observationPoint: "触手だけでなく、その下にある細長い体柱にも注目してください。",
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
        text: "メスは硬い卵殻に包まれた卵を産みます。卵殻の四隅から伸びる糸状構造によって海藻や岩などへ絡みつきます。"
      },
      {
        title: "人にはほとんど危険のない小型サメ",
        text: "最大でも1mに満たない小型の底生サメで、人を積極的に襲う種類ではありません。"
      }
    ],
    bodyLength: "最大で全長約78cm。",
    distribution: "日本、朝鮮半島、台湾周辺など北西太平洋に分布します。",
    habitat: "沿岸から水深300m程度までの砂泥底・岩礁周辺など海底付近に生息します。",
    diet: "小魚、エビ・カニ類、頭足類など海底付近の小動物を捕食します。",
    features: "細長い体に暗色の鞍状斑や斑点が入り、猫のような細長い眼を持ちます。",
    behavior: "海底付近をゆっくり泳ぎ、岩陰や海底で休んでいることもあります。",
    reproduction: "卵生で、雌は角のある卵殻に包まれた卵を産みます。",
    identification: "小型で細長い体と、褐色系の不規則な斑紋、トラザメ科らしい眼の形を確認します。",
    nameOrigin: "体表のまだら模様を虎の模様に見立てたことが和名に関係します。",
    humanRelation: "底びき網などで混獲されるほか、水族館では卵やふ化を観察しやすいサメとして展示されます。",
    observationPoint: "成魚だけでなく卵があれば、卵殻内部の胚や卵黄も観察ポイントです。",
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
        text: "外敵から刺激を受けると体側の粘液腺から大量の粘液を放出します。海水と混ざると急速に広がり、捕食者への防御になります。"
      },
      {
        title: "魚に似ているが顎がない",
        text: "一般的な魚のような上下の顎を持たず、円形の口の中に角質の歯状構造があります。脊椎動物の進化を考える上でも重要な動物です。"
      }
    ],
    bodyLength: "最大で全長約60cm。",
    distribution: "日本海、日本の太平洋岸から台湾周辺まで北西太平洋に分布します。",
    habitat: "水深10〜270m程度の泥底に生息し、泥の中へ体を潜らせて生活します。",
    diet: "海底の動物の死骸や弱った魚などを利用し、肉を削り取るように食べます。",
    features: "ウナギのように細長い体を持ち、顎や対になったひれを持ちません。鰓孔は左右に6対あります。",
    behavior: "海底の泥へ潜り、刺激を受けると大量の粘液を分泌します。季節によって繁殖のため深い場所へ移動することがあります。",
    reproduction: "卵生で、大型の卵を少数産みます。日本近海では季節的な生殖周期が研究されています。",
    identification: "顎がないこと、眼が非常に退化していること、体側に並ぶ粘液孔と複数の鰓孔が特徴です。",
    nameOrigin: "刺激時に出す大量のぬるぬるした粘液、『ぬた』が名称の由来です。",
    humanRelation: "日本や韓国などでは食用になるほか、皮が革製品として利用されることがあります。",
    observationPoint: "普通の魚のような胸びれや腹びれがないこと、体側に小さな鰓孔が並んでいることに注目してください。",
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
        text: "体長10cm前後の小型種ですが、水深100mを超える深場を中心に生活します。"
      },
      {
        title: "名前の『スミツキ』は黒斑",
        text: "成熟個体ではひれなどに特徴的な黒い斑紋が見られ、和名の識別ポイントにもなっています。"
      }
    ],
    bodyLength: "最大で標準体長約13cm。",
    distribution: "南日本から台湾、西オーストラリア周辺など西太平洋から知られています。",
    habitat: "水深129〜204m程度の沖合の岩礁・底びき網漁場など深場から記録されています。",
    diet: "本種だけを対象とした詳細な食性資料は限られますが、ハナダイ類らしく小型甲殻類などを捕食すると考えられます。",
    features: "赤色から桃色を基調とし、体側には明るい斑点が並びます。成熟個体では性別による色彩差も見られます。",
    behavior: "深場の岩礁付近で生活します。本種固有の詳しい群れ構造については十分な資料がないため断定しません。",
    reproduction: "本種では雌雄による形態差が研究されていますが、繁殖時期などについては十分な資料がないため一律には記載しません。",
    identification: "体側の明色斑と、成熟個体で見られるひれの黒斑などを組み合わせて識別します。",
    nameOrigin: "体やひれに現れる黒色斑を『墨付き』に見立てた名称です。",
    humanRelation: "深場性のため一般には目にする機会が少なく、深海・深場魚展示で観察できる貴重なハナダイです。",
    observationPoint: "赤い体色だけでなく、ひれにある暗色斑と体側の明るい点を探してください。",
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
        text: "名前にウミヘビとありますが、爬虫類ではなくウナギ目に属する魚です。鰓孔を持ち、鰓で呼吸します。"
      },
      {
        title: "全身には130個以上の椎骨",
        text: "非常に細長い体を支えるため多数の椎骨を持ち、FishBaseでは134〜139個の椎骨が記録されています。"
      }
    ],
    bodyLength: "最大で全長約61.5cm。",
    distribution: "日本を含むインド・西太平洋に分布します。",
    habitat: "海底付近で生活する底生性の魚で、砂泥底などを利用します。",
    diet: "本種固有の詳細な食性資料が少ないため、特定の餌生物を断定しません。",
    features: "非常に細長い体を持ち、背側は黄褐色から褐色、腹側は淡色です。尾端はウミヘビ科らしく硬く尖ります。",
    behavior: "海底付近で生活し、ウミヘビ科の魚類らしく砂泥へ体を潜らせるのに適した体形をしています。",
    reproduction: "卵生でレプトケファルス幼生期を経ますが、本種固有の繁殖場所や産卵期については十分な資料がありません。",
    identification: "細長い体、比較的大きな眼、背びれの始まりの位置、椎骨数などを用いて近縁種と識別します。",
    nameOrigin: "細長い体が海に暮らす蛇のように見えることからウミヘビと呼ばれます。『スソ』部分の詳しい命名由来は断定しません。",
    humanRelation: "主要な漁業対象ではありませんが、底びき網などで採集されることがあります。",
    observationPoint: "尾の先端に注目してください。一般的なウナギのような丸い尾びれではなく、硬く尖った形になります。",
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
        text: "長い茎で海底に立ち、上部に羽毛状の腕を広げるため植物のように見えますが、ヒトデやウニと同じ棘皮動物です。"
      },
      {
        title: "茎があっても移動できる",
        text: "完全に海底へ固定されているわけではなく、茎や腕を使ってゆっくり位置を変えることが確認されています。"
      }
    ],
    bodyLength: "茎を含めると数十cm規模になります。大きさは個体や成長段階によって異なります。",
    distribution: "日本近海、とくに相模湾・駿河湾などからよく知られています。",
    habitat: "比較的深い岩礁性の海底に生息し、駿河湾では水深130〜200m前後から研究例があります。",
    diet: "羽毛状に枝分かれした腕を水流へ広げ、プランクトンや微細な有機物を濾し取って食べます。",
    features: "長い節のある茎、その上にある萼、そこから伸びる多数の羽毛状の腕を持ちます。",
    behavior: "腕を水中へ広げて濾過摂食します。また、刺激や環境変化に応じて海底をゆっくり移動できます。",
    reproduction: "雌雄が配偶子を海中へ放出して繁殖しますが、本種固有の地域別繁殖期については十分な資料がないため断定しません。",
    identification: "日本近海には複数の有茎ウミユリがいるため、茎節や腕などの形態を使って識別します。",
    nameOrigin: "細長い茎と上部の形を鳥の脚に見立てたことから『トリノアシ』と呼ばれます。",
    humanRelation: "古生代から続くウミユリ類の姿を現代に残す動物として、進化や深海生物研究で重要です。",
    observationPoint: "植物の茎のような部分が、細かな節の連続でできていることを観察してください。",
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
        text: "深い海の泥底に巣穴を作り、普段はその周辺を生活場所にしています。"
      },
      {
        title: "日本を代表する高級深海エビ",
        text: "大型で身に甘みがあり、高級食材として利用されます。地域によっては底びき網などで漁獲されます。"
      }
    ],
    bodyLength: "全長20cm前後まで成長し、20cmを超える個体も記録されています。",
    distribution: "日本近海に分布し、銚子沖から日向灘周辺など太平洋岸を中心に知られています。",
    habitat: "主に水深200〜400m程度の泥底に巣穴を作って生活します。",
    diet: "海底の小型甲殻類、多毛類、軟体動物などを捕食すると考えられます。",
    features: "赤橙色の体と細長く発達した第1胸脚のはさみが特徴です。大きなはさみの先端部は白っぽくなります。",
    behavior: "泥底の巣穴を拠点とし、単独で行動することが多いとされています。",
    reproduction: "雌は受精卵を腹肢に付着させて抱卵します。地域によって成熟や繁殖時期に差があります。",
    identification: "赤い体、細長い大型のはさみ、白っぽいはさみ先端が分かりやすい特徴です。",
    nameOrigin: "鮮やかな赤色の体を持つ大型エビであることが名称に表れています。",
    humanRelation: "刺身、寿司、焼き物などに利用される高級食用エビです。",
    observationPoint: "体よりも長く見える第1胸脚と、その先端にある細長いはさみを見てください。",
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
        text: "Lycodes nakamuraiという表記が見られることがありますが、現在の受理名はLycodes nakamuraeです。"
      },
      {
        title: "水深700mを超える場所にも",
        text: "FishBaseでは水深140〜765mから記録されており、冷たい深場を利用するゲンゲ類です。"
      }
    ],
    bodyLength: "最大で標準体長約27.5cm。",
    distribution: "日本海、オホーツク海など北西太平洋の冷水域から知られています。",
    habitat: "水深140〜765m程度の海底付近に生息します。",
    diet: "本種だけを対象とした詳細な食性資料が限られているため、特定の餌を断定しません。",
    features: "細長く後方へ向かって細くなる体を持ち、体色は暗褐色から黒褐色です。背びれと尻びれは尾部まで長く続きます。",
    behavior: "深海の海底付近で生活する底生魚ですが、本種固有の行動については詳しい情報が限られています。",
    reproduction: "本種固有の繁殖様式・産卵時期について信頼できる詳細資料が少ないため断定しません。",
    identification: "ゲンゲ科には似た種が多いため、頭部形態、体の比率、鰭条や脊椎骨数などを組み合わせて識別します。",
    nameOrigin: "暗色から黒褐色の体を持つゲンゲ類であることが標準和名に表れています。",
    humanRelation: "底びき網で採集されることがありますが、主要な食用魚ではありません。",
    observationPoint: "背びれ・尾びれ・尻びれの境界が分かりにくいほど連続した、細長い体形に注目してください。",
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
        text: "巨大で深海に暮らしますが、陸上のダンゴムシやフナムシと同じ等脚目に属する甲殻類です。"
      },
      {
        title: "深海の『掃除屋』",
        text: "海底へ沈んだ魚などの死骸を食べる腐肉食者として働き、深海底の有機物を処理する役割があります。"
      }
    ],
    bodyLength: "一般に体長10〜15cm程度になります。",
    distribution: "日本では駿河湾以南などの深い海から知られています。",
    habitat: "主に水深200〜650m程度の砂泥底に生息し、より深い場所からの記録もあります。",
    diet: "魚類などの死骸を利用する腐肉食性が強く、その他の動物質も食べる雑食性です。",
    features: "背腹方向にやや扁平な体を持ち、硬い背板が連続します。7対の歩脚と大きな複眼を持ちます。",
    behavior: "海底を歩いて餌を探し、死骸などへ集まります。餌の少ない深海に適応しています。",
    reproduction: "雌は卵を腹側の育児嚢で保護します。等脚類としては大型の卵を産みます。",
    identification: "近縁のダイオウグソクムシ類より小型で、日本近海で一般に展示されるオオグソクムシはBathynomus doederleiniです。",
    nameOrigin: "陸上のグソクムシ類に似ながら大型になることから『オオグソクムシ』と呼ばれます。",
    humanRelation: "深海生物として非常に知名度が高く、水族館で人気のある甲殻類です。",
    observationPoint: "背中の硬い体節を数えるだけでなく、腹側に並ぶ歩脚も観察してください。",
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
        text: "一般的な魚の柔らかな鱗とは異なり、体表を硬い骨質板が覆います。深場の海底魚らしい独特な外見です。"
      },
      {
        title: "胸びれの一部で海底を探る",
        text: "胸びれの下側には独立した指のような鰭条があり、海底へ触れながら餌を探すのに利用します。"
      }
    ],
    bodyLength: "最大で全長約19cm。",
    distribution: "南日本、東シナ海、黄海など北西太平洋に分布します。",
    habitat: "水深120〜500m程度の大陸棚から大陸斜面の海底に生息します。",
    diet: "海底の小型動物を捕食しますが、本種のみを対象にした詳細な食性資料が限られるため、餌生物を細かく断定しません。",
    features: "体全体が骨板で覆われ、頭部には前方へ伸びる突起があります。胸びれ下側には独立した鰭条があります。",
    behavior: "海底付近を移動し、胸びれ下部の遊離鰭条を底へ接触させながら餌を探します。",
    reproduction: "本種固有の産卵時期・繁殖行動について、十分な資料がないため断定しません。",
    identification: "硬い骨板、頭部の突起、独立した胸びれ鰭条という組み合わせが特徴です。",
    nameOrigin: "ホウボウ類に似た体形を持ちながら硬い骨板で覆われる独特な魚です。和名の詳しい命名由来は断定しません。",
    humanRelation: "底びき網などで採集されることがありますが、主要な食用魚ではありません。",
    observationPoint: "胸びれの下を見てください。ひれから分離した指のような鰭条が確認できます。",
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
        text: "FishBaseでは水深100〜1000mから記録されており、冷たい深場の海底を利用するカスベです。"
      },
      {
        title: "大きな卵殻を産む",
        text: "卵生で、卵は四隅に角状突起を持つ硬い卵殻に包まれます。卵殻は長さ12cmを超えることがあります。"
      }
    ],
    bodyLength: "最大で全長約1mを超え、資料によっては約116cmの記録があります。",
    distribution: "日本海、オホーツク海、千島列島周辺など北西太平洋に分布します。",
    habitat: "水深100〜1000m程度の海底に生息します。",
    diet: "ヨコエビ類、エビ・カニ類、魚類、オキアミ類、イカ類などを捕食します。",
    features: "胸びれが大きく広がったひし形に近い体盤と細長い尾を持ち、背側は黄褐色から褐色になります。",
    behavior: "深い海の海底に体を密着させて生活し、底生動物や魚を捕食します。",
    reproduction: "卵生で、ペアになった卵を産みます。卵殻の四隅には角状の突起があります。",
    identification: "Bathyraja属には似た種が多く、体盤形状、吻、棘、腹面の特徴などを総合して識別します。",
    nameOrigin: "『カスベ』はエイ類を指す地方名として広く使われますが、『ドブ』部分の確実な由来は断定しません。",
    humanRelation: "地域によって底びき網などで漁獲されます。",
    observationPoint: "体盤の形だけでなく、尾の長さや背側に並ぶ棘にも注目してください。",
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
        text: "オスでは非常に長い脚が発達し、左右の脚を広げると3mを大きく超える大型個体も知られています。現生節足動物では最大の脚幅を持つことで有名です。"
      },
      {
        title: "国内資料と最新分類で科が違う",
        text: "BISMaLなどではクモガニ科Inachidaeに置かれていますが、現在の国際的な海洋生物データベースではMacrocheiridaeとして扱われる体系があります。FishGuideでは現在の国際分類を採用します。"
      }
    ],
    bodyLength: "甲幅は大型個体で30cmを超え、長い脚を左右へ広げた幅は3m以上になることがあります。",
    distribution: "日本近海に分布し、太平洋側の相模湾、駿河湾、紀伊半島沖などからよく知られています。",
    habitat: "主に水深50〜600m程度の海底に生息し、通常は深場にいます。繁殖期には比較的浅い場所へ移動することがあります。",
    diet: "海底の動物、貝類、甲殻類、動物の死骸などを利用する雑食性です。",
    features: "小さめの甲に対して非常に長い歩脚を持ち、特に大型オスでは鉗脚が著しく長くなります。",
    behavior: "海底を長い脚でゆっくり歩き、餌を探します。季節によって利用する水深が変化します。",
    reproduction: "雌は多数の卵を腹部に抱えて保護し、ふ化した幼生は浮遊生活を経て海底生活へ移ります。",
    identification: "非常に長い脚と、丸みを帯びた甲を持つ巨大なクモガニ類で、成体は他種と見間違えにくい形態です。",
    nameOrigin: "非常に長く高く伸びる脚から『高脚蟹＝タカアシガニ』と呼ばれます。",
    humanRelation: "一部地域では食用として漁獲されます。世界最大級の節足動物として、水族館展示でも非常に人気があります。",
    observationPoint: "脚の長さだけでなく、甲の大きさと比較してください。体の大部分を脚が占めていることが分かります。",
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
        text: "胃へ大量の海水や空気を取り込んで体を大きく膨らませます。岩の隙間で膨らむことで、捕食者から引き出されにくくする防御になります。"
      },
      {
        title: "卵がふ化するまで約1年",
        text: "卵生で、2個の卵殻を一度に産むことがあります。FishBaseでは、ふ化まで約1年、ふ化仔の全長は約16〜22cmとされています。"
      }
    ],
    bodyLength: "最大で全長約120cm。",
    distribution: "日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",
    habitat: "水深20〜500m程度の岩礁や砂泥底に生息します。",
    diet: "サバ、イワシ、カワハギ類などの硬骨魚に加え、小型のサメ・エイ類やイカ類も捕食します。",
    features: "太い胴体と幅広い頭を持ち、背側には褐色の鞍状斑や不規則な斑点があります。",
    behavior: "海底付近で生活し、危険を感じると胃へ水を取り込んで体を大きく膨らませます。",
    reproduction: "卵生で、糸状突起を持つ卵殻を産みます。2個の卵殻を同時に産むことがあり、胚は卵黄を栄養として成長します。",
    identification: "3つの幅広い暗色鞍状斑や成魚の不規則な斑点、幅広い頭部などが識別に使われます。",
    nameOrigin: "『七日鮫』と書かれることがありますが、和名の確実な由来については諸説があるため断定しません。",
    humanRelation: "人への危険性は低いサメです。水族館で繁殖例があり、卵からの発生を観察できる種類でもあります。",
    observationPoint: "通常時の太い胴体を見てください。もし刺激を受けて膨らんでいる場合でも、展示個体へ意図的に刺激を与えてはいけません。",
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
        text: "FishBaseでは最大全長200cm、最大体重約85kgが記録されています。日本近海に生息する非常に大型の底生魚です。"
      },
      {
        title: "肝臓は絶対に食べてはいけない",
        text: "肝臓には非常に高濃度のビタミンAが含まれ、中毒を起こす危険があります。日本では1960年からイシナギの肝臓は食用禁止とされています。"
      }
    ],
    bodyLength: "最大で全長約200cm、体重約85kgの記録があります。",
    distribution: "北海道から南日本、朝鮮半島、ロシア極東、台湾周辺など北西太平洋に分布します。",
    habitat: "大型成魚は主に深い岩礁域に生息し、FishBaseでは水深400〜600mが示されています。日本近海ではより浅い場所からの記録もあります。",
    diet: "大型の肉食魚ですが、本種固有の詳細な食性資料は限られているため、特定の餌生物を過度に断定しません。",
    features: "非常に大型で頑丈な体と大きな口を持ちます。体色は灰褐色から黄褐色で、若い個体では体側に淡色の縞模様が目立ちます。",
    behavior: "深い岩礁周辺の海底近くで生活します。産卵期には通常より浅い水深帯へ移動することがあります。",
    reproduction: "卵生です。産卵期には比較的浅い場所へ移動することが知られますが、詳しい繁殖行動には未解明な部分があります。",
    identification: "巨大な体、大きな口、若魚に見られる淡色の縞模様が特徴です。近縁のコクチイシナギとの識別には口・体形なども確認します。",
    nameOrigin: "非常に大きな口を持つイシナギ類であることから『オオクチイシナギ』と呼ばれます。",
    humanRelation: "身は食用になりますが、肝臓には大量のビタミンAが含まれるため、日本では肝臓の食用は禁止されています。専門的な処理を経た可食部以外を自己判断で食べてはいけません。",
    observationPoint: "口の大きさを頭部全体と比較してください。若い個体なら体側の縞模様にも注目してください。",
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
        text: "八景島シーパラダイスが保管する相模湾・江の島沖産の標本も、2024年の研究でオロシザメOxynotus japonicusとして詳細に再確認されています。今回のFishGuideでは、現地メモの誤記と判断して正式和名へ修正します。"
      },
      {
        title: "体はサメとは思えないほど背が高い",
        text: "胴体が非常に太く高く、2基の大きな帆状の背びれを持ちます。一般的な流線型のサメとはかなり違ったシルエットです。"
      }
    ],
    bodyLength: "確認されている大型個体は全長約64.5cm。2024年に調べられた相模湾・駿河湾産7個体は全長約51〜63cmでした。",
    distribution: "北西太平洋の日本から台湾周辺に分布します。相模湾と駿河湾では複数の確実な記録があり、本種に適した生息域と考えられています。",
    habitat: "主に水深150〜400mの急傾斜した深海底付近に生息します。",
    diet: "本種そのものの野外での詳細な食性情報は限られているため、近縁のオロシザメ類の食性をそのまま当てはめません。",
    features: "非常に体高の高い太い体を持ち、2基の大きな背びれには棘があります。皮膚は大きな楯鱗によって非常にざらつき、臀びれを持ちません。体色は暗褐色です。",
    behavior: "深海底付近をゆっくり遊泳する底生性のサメです。通常の高速遊泳型のサメとは異なる体形をしています。",
    reproduction: "胎生で、母体内で卵黄を利用して発生するタイプとされています。ただし繁殖回数や妊娠期間など、本種固有の生活史には未解明な点が多く残ります。",
    identification: "極端に高い体高、大きな2基の背びれ、非常にざらついた皮膚が重要な特徴です。",
    nameOrigin: "ざらざらした体表が、おろし金を思わせることが和名に関係すると考えられています。",
    humanRelation: "非常に記録の少ない深海ザメです。IUCNでは絶滅危惧II類相当のVulnerableと評価されており、底引網・深海刺網などによる混獲の影響が懸念されています。",
    observationPoint: "LABO7では標本展示です。普通のサメと比べて胴体がどれほど高いか、2基の背びれがどれほど大きいかを横から観察してください。",
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
        text: "ヨロイザメは腹側に非常に小さな発光器を持ち、青緑色の光を出します。全長1mを超える個体も発光するため、発光する脊椎動物として世界最大級です。"
      },
      {
        title: "深海1,000mより下まで潜る",
        text: "記録される水深範囲は非常に広く、FishBaseでは37〜1,800mとされています。通常は数百mの大陸棚斜面などで見られます。"
      }
    ],
    bodyLength: "最大で全長約182cm。",
    distribution: "大西洋・インド洋・太平洋・地中海など、世界の温帯から熱帯海域に広く分布します。",
    habitat: "大陸棚外縁から大陸斜面の深海域に生息し、水深37〜1,800mから記録されています。",
    diet: "魚類、他の小型サメ、甲殻類、頭足類などさまざまな動物を捕食します。",
    features: "太く頑丈な暗褐色の体を持ち、背びれは2基ありますが背びれ棘はありません。下あごには大きな三角形の歯が並びます。",
    behavior: "深海を遊泳しながらさまざまな動物を捕食します。腹側の発光は、自分の影を消して下方の捕食者や獲物から見えにくくするカウンターイルミネーションに関係すると考えられています。",
    reproduction: "胎生で、胚は胎盤を形成せず卵黄を利用して発生します。複数の仔を母体内で育てます。",
    identification: "暗色で太い体、2基のほぼ同程度の背びれ、大きな下顎歯が特徴です。",
    nameOrigin: "標準和名「ヨロイザメ」の詳しい命名由来について、今回確認した主要分類資料では確定できないため断定しません。",
    humanRelation: "一部地域では肝油や肉が利用されます。深海漁業で混獲されることがあり、IUCNではVulnerableと評価されています。",
    observationPoint: "LABO7では標本展示です。下あごの大きな歯と、一般的なツノザメ類とは違って背びれに目立つ棘がない点を見てください。",
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
        text: "多くのサメは左右5対の鰓孔を持ちますが、エドアブラザメは7対あります。標本でも数えやすい最大の特徴です。"
      },
      {
        title: "背びれは1つだけ",
        text: "一般的なサメには背びれが2基ありますが、本種では1基だけです。7対の鰓孔と合わせて原始的な特徴を残すサメ類として知られます。"
      }
    ],
    bodyLength: "最大で全長約137〜140cm。一般的には1m前後です。",
    distribution: "北東太平洋を除く世界の温帯・熱帯海域に広く分布し、日本近海にも生息します。",
    habitat: "通常は水深180〜450m程度の大陸棚外縁・大陸斜面に生息しますが、浅場から水深1,000mまで記録されています。",
    diet: "小型のサメ・エイ、硬骨魚、エビ・カニ類、イカ・コウイカ類などを捕食します。",
    features: "細長い体、大きな眼、尖った吻、7対の鰓孔を持ちます。背びれは体の後方に1基だけあります。",
    behavior: "深海性ですが比較的活発に泳ぎ、魚類や頭足類などさまざまな獲物を捕食します。",
    reproduction: "胎生で、1回に約9〜20尾の仔を産む記録があります。出生時の仔は約25cmです。",
    identification: "まず鰓孔を数えてください。7対の鰓孔と背びれ1基という組み合わせで、一般的なサメとは容易に区別できます。",
    nameOrigin: "標準和名の詳しい由来は主要分類資料で明確に確認できないため断定しません。",
    humanRelation: "一部で漁獲され、肝油などが利用されます。IUCNではNear Threatenedと評価されています。",
    observationPoint: "LABO7では標本展示です。頭の横に並ぶ鰓孔を実際に7つ数えてみるのがおすすめです。",
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
        text: "普段は頭の下に収まっている上下のあごを高速で前方へ突出させ、獲物を捕らえます。深海ザメの中でも特に独特な捕食方法です。"
      },
      {
        title: "学名には日本と横浜の歴史が残る",
        text: "属名Mitsukurinaは動物学者の箕作佳吉、種小名owstoniは横浜在住の標本収集家Alan Owstonに由来します。"
      }
    ],
    bodyLength: "一般には全長2〜3m程度ですが、FishBaseには最大617cmの記録があります。",
    distribution: "世界各地から散発的に記録され、日本では特に相模湾周辺から多く報告されています。",
    habitat: "大陸棚外縁から大陸斜面に生息し、水深30〜1,300mから記録されています。通常は数百mの深場で見られます。",
    diet: "魚類、イカ・タコ類、甲殻類などを捕食します。",
    features: "前方へ長く平たく伸びた吻、小さな眼、非常に突出性の高い顎を持ちます。生時は血管が透けるため淡い桃色に見えます。",
    behavior: "深海を比較的ゆっくり遊泳し、獲物が近づくと顎を急激に突出させて捕らえます。",
    reproduction: "繁殖の直接観察例は非常に少ないですが、胎生で、近縁のネズミザメ類と同様に母体内で未受精卵を栄養として利用する可能性が示されています。",
    identification: "長く平たい吻と、前方へ大きく飛び出せる顎は他の日本産サメにはない特徴です。",
    nameOrigin: "属名と標準和名は、日本の動物学者・箕作佳吉に由来します。",
    humanRelation: "深海性で人との接触はほとんどありません。珍しい外見から世界的に有名な深海ザメで、水族館や博物館の標本展示でも注目されます。",
    observationPoint: "LABO7では標本展示です。吻の長さだけでなく、顎が通常の位置からどこまで前へ伸びる構造なのかを想像しながら口を観察してください。",
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
        text: "一般的なサメの5対ではなく6対の鰓孔を持ち、最前部の鰓膜は喉の下で左右がつながります。このひだ状の鰓が英名Frilled sharkの由来です。"
      },
      {
        title: "『生きた化石』と呼ばれることもある",
        text: "ウナギのような細長い体や6対の鰓孔など独特な特徴から、一般向けには『生きた化石』と紹介されることがあります。ただし現生種そのものが古代から全く変化していないという意味ではありません。"
      }
    ],
    bodyLength: "最大で全長約200cm。",
    distribution: "分布は世界各地に点在し、日本からニュージーランド、東太平洋、東大西洋などで記録されています。",
    habitat: "深海性で、通常は水深120〜1,280m程度に生息します。",
    diet: "イカ類を中心に、魚類や他の小型サメなども捕食します。",
    features: "非常に細長いウナギ状の体、6対の鰓孔、三叉する細長い歯を多数持ちます。背びれは体のかなり後方に1基あります。",
    behavior: "深海を泳ぎ、柔軟な体と多数の鋭い歯を使ってイカなどを捕らえます。",
    reproduction: "胎生です。胎盤を形成せず、胚は卵黄を利用して発生します。妊娠期間は非常に長い可能性が指摘されていますが、正確な期間には不確実性があります。",
    identification: "ウナギ状の体と6対の鰓孔を確認すれば、一般的なサメとは容易に区別できます。",
    nameOrigin: "標準和名「ラブカ」の正確な語源については諸説があり、この図鑑では断定しません。",
    humanRelation: "通常は深海に生息するため人への危険性はほとんどありません。深海ザメを代表する種として研究・展示の対象になります。",
    observationPoint: "LABO7では標本展示です。鰓孔を数え、さらに歯を近くで見てください。1本の歯が三つ叉状になっていることが分かります。",
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
        text: "腹側には発光器があり、左右の腹びれの付け根を結ぶ位置より後方にあります。外見だけでは見落としやすい深海魚の特徴です。"
      },
      {
        title: "昔の学名表記も残っている",
        text: "古い資料ではPhysiculus japonicaや、エゾイソアイナメとして扱われたPhysiculus maximowicziなどの名前が見られますが、現在BISMaLではPhysiculus japonicusを受理名としています。"
      }
    ],
    bodyLength: "最大で全長約35cm。",
    distribution: "日本の太平洋岸・日本海、東シナ海などから知られています。",
    habitat: "大陸棚から大陸棚斜面上部に生息し、主に水深150〜880mから記録されています。",
    diet: "小型甲殻類や魚類など、海底付近の動物を捕食します。",
    features: "細長い体、下あごの1本のひげ、腹側の発光器が特徴です。背びれは2基に分かれます。",
    behavior: "深い海底近くで生活し、海底付近の小動物を探して捕食します。",
    reproduction: "本種固有の産卵時期・繁殖行動について十分な資料を確認できないため断定しません。",
    identification: "下あごのひげと、腹部にある発光器の位置が重要な識別点です。",
    nameOrigin: "標準和名の詳しい命名由来は主要資料から確定できないため断定しません。",
    humanRelation: "底引網などで漁獲され、地域によって食用となります。",
    observationPoint: "下あごのひげを見つけたあと、腹側にも注目してください。深海生活に関係する発光器を持つ魚です。",
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
        text: "日本の古い図鑑などではDentex tumifronsが広く使われましたが、現在BISMaLやWoRMSではDentex hypselosomusが受理名です。"
      },
      {
        title: "市場では『レンコダイ』でもおなじみ",
        text: "キダイは市場や釣りではレンコダイと呼ばれることが多く、祝い事や焼き物などにも利用されます。"
      }
    ],
    bodyLength: "最大で標準体長約30.8cm。全長では30cmを超えることがあります。",
    distribution: "南日本、朝鮮半島南部、中国沿岸、台湾西岸など北西太平洋に分布します。",
    habitat: "主に水深50〜200mの海底付近に生息します。",
    diet: "甲殻類やゴカイ類など、海底の小型動物を中心に利用します。",
    features: "背側は赤色、腹側へ向かって淡い赤色になり、吻や背側には鮮やかな黄色・金色の斑紋があります。",
    behavior: "海底付近で群れを形成することがあり、小型底生動物を探して移動します。",
    reproduction: "本種の地域別の詳細な繁殖時期については資料差があるため、特定の月へ一律に限定しません。",
    identification: "赤い体に加え、吻や背びれ付近に現れる鮮やかな黄色斑を見ることがポイントです。",
    nameOrigin: "体に黄色味の強い部分を持つタイ類であることが『キダイ』という名称に表れています。",
    humanRelation: "レンコダイの名でも流通する重要な食用魚で、塩焼き、干物、酢締めなど幅広く利用されます。",
    observationPoint: "マダイのような赤色だけを見るのではなく、吻や背中の黄色い部分を探してください。",
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
        text: "若魚は沿岸の浅い場所に現れますが、成長すると深い岩礁へ移動します。成長とともに生活場所が大きく変わる魚です。"
      },
      {
        title: "成魚は黒く、幼魚は銀色",
        text: "成魚になると全体が黒褐色になりますが、若い個体では銀色が強く、成長段階で見た目がかなり変わります。"
      }
    ],
    bodyLength: "大型では全長1mを超え、最大約150cmの記録があります。",
    distribution: "日本、朝鮮半島、中国周辺など北西太平洋に分布します。",
    habitat: "幼魚は沿岸の浅場、成魚は沖合の深い岩礁域を主な生活場所とします。日本周辺では水深20〜600mを超える記録があります。",
    diet: "魚類、甲殻類、イカ類などを捕食します。",
    features: "成魚は黒褐色で、大きな眼と口を持ちます。尾びれは深く二叉し、強い遊泳力を持つ体形です。",
    behavior: "成長すると深場の岩礁周辺で生活し、魚類やイカを追って捕食します。",
    reproduction: "FishBaseでは10月から3月頃に産卵することが記録されています。",
    identification: "黒っぽい体、大きな眼と口、深く二叉した尾びれを確認します。",
    nameOrigin: "標準和名「ムツ」の詳しい語源には複数の説があるため、この図鑑では断定しません。",
    humanRelation: "脂のある白身を持つ高級食用魚です。煮付け、刺身、焼き物などに利用されます。",
    observationPoint: "大きな眼と口に注目してください。暗い深場で獲物を捕らえる肉食魚らしい顔つきが分かります。",
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
        text: "イズカサゴは釣りや市場でオニカサゴと呼ばれることがあります。ただし標準和名『オニカサゴ』は別の魚なので、図鑑では混同しないことが重要です。"
      },
      {
        title: "海底に溶け込む待ち伏せ型",
        text: "赤褐色の複雑な模様と皮弁によって岩や海底に溶け込み、近づいた小魚や甲殻類を待ち伏せします。"
      }
    ],
    bodyLength: "最大で全長約40cm。",
    distribution: "本州中部から九州、東シナ海などに分布します。",
    habitat: "比較的深い砂礫底・岩礁周辺に生息し、水深80m前後から数百mの記録があります。",
    diet: "小魚や甲殻類などを捕食します。",
    features: "頭部が大きく、赤色から赤褐色の体に複雑な斑紋と皮弁があります。背びれなどの鋭い棘には注意が必要です。",
    behavior: "海底でほとんど動かず、体色を利用して獲物を待ち伏せします。",
    reproduction: "本種固有の繁殖期について、今回確認した主要資料では十分な情報を得られなかったため断定しません。",
    identification: "胸びれ腋部の皮弁、胸びれ軟条数、頭部の棘などが近縁種との識別に利用されます。",
    nameOrigin: "伊豆を含む本州中部周辺で知られたカサゴ類ですが、標準和名成立の詳しい経緯までは断定しません。",
    humanRelation: "高級食用魚として扱われ、刺身、鍋、煮付けなどに利用されます。野外では鋭い棘に触れないよう注意が必要です。",
    observationPoint: "海底の色と魚の模様を見比べてください。どれほど背景に溶け込めるかがこの魚の見どころです。",
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
        text: "以前は仔魚を直接産む卵胎生と考えられていましたが、2014年に飼育下でゼラチン質に包まれた卵塊を産出することが確認され、繁殖様式の理解が変わりました。"
      },
      {
        title: "大きくなるまで10年以上",
        text: "25cmを超えるまで10年以上かかると考えられており、深海魚らしく比較的ゆっくり成長します。"
      }
    ],
    bodyLength: "大型では全長約60cmになる記録があります。",
    distribution: "日本海、東シナ海、日本の太平洋沿岸、伊豆諸島などに分布します。",
    habitat: "水深約130〜980mの砂泥底などに生息し、150〜200m程度でよく見られます。",
    diet: "甲殻類、ゴカイ類、小型のイカ類、魚類などを食べます。大型個体ほど魚類を多く利用する傾向があります。",
    features: "赤色から橙赤色の体と大きな眼を持ちます。口の中が黒く見えることから、地域によってノドグロカサゴとも呼ばれます。",
    behavior: "深い海底付近で生活し、小型動物や魚を捕食します。",
    reproduction: "冬季を中心に繁殖し、ゼラチン質に包まれた卵塊を産出します。ふ化した仔魚は40日以上の浮遊期を経て海底生活へ移ります。",
    identification: "赤色の体、大きな眼、口腔内の黒色などを確認します。",
    nameOrigin: "標準和名の詳しい命名由来について、主要資料では確定できないため断定しません。",
    humanRelation: "底引網や釣りで漁獲され、煮付けや塩焼きなどに利用されます。",
    observationPoint: "口が開いたときに内部の色を確認してください。外側の赤色との対比がよく分かります。",
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
        text: "若い時期には流れ藻など海面近くの浮遊物を利用しますが、成長すると水深100m以上の深い場所へ生活場所を移します。"
      },
      {
        title: "成魚は夜に浅い場所まで上がる",
        text: "成魚は通常深い岩礁域にいますが、夜間には餌を求めて上層・浅場へ移動することがあります。"
      }
    ],
    bodyLength: "最大で全長約90cm。",
    distribution: "北海道南部から東シナ海までの北西太平洋に分布します。",
    habitat: "成魚は主に水深150〜400m程度の深場を利用します。",
    diet: "幼魚は動物プランクトンを食べ、成魚になると魚類やイカ類などを捕食します。",
    features: "成魚は灰黒色から黒褐色で、体高のある厚みのある体を持ちます。眼が大きく、体表には粘液が多くあります。",
    behavior: "成長にともない表層付近から深海へ移動し、成魚は昼夜で利用する水深を変えることがあります。",
    reproduction: "本種固有の詳しい産卵行動について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "大きな眼、暗色で厚みのある体、背びれ前方の棘などが特徴です。",
    nameOrigin: "大きく目立つ眼が標準和名に関係すると考えられます。",
    humanRelation: "日本では重要な食用魚で、刺身、西京焼き、煮付けなどに利用されます。",
    observationPoint: "幼魚と成魚で暮らす場所が大きく変わる魚です。展示個体では大きな眼と厚みのある体を観察してください。",
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
        text: "FishBaseでは幼魚は外洋性・浮遊性で、成長すると海底付近を生活場所とすることが示されています。成長によって生活様式が変化します。"
      },
      {
        title: "『鎧魚』の仲間",
        text: "英名Japanese armorheadの通り、頭部の骨や鱗が硬く頑丈な体をしています。"
      }
    ],
    bodyLength: "最大で全長約25cm。",
    distribution: "南日本からオーストラリア、ニュージーランド周辺まで西太平洋に分布します。",
    habitat: "成魚は水深100〜830m程度の海底付近に生息します。",
    diet: "本種固有の詳細な食性資料は限られているため、特定の餌だけに限定して記載しません。",
    features: "体高が高く左右に平たい体と、硬い頭部、強い背びれ棘を持ちます。",
    behavior: "幼魚期は海中を漂う生活を送り、成長すると深い海底付近へ移ります。",
    reproduction: "本種固有の繁殖時期・産卵生態について十分な資料を確認できないため断定しません。",
    identification: "非常に体高の高い体、硬そうな頭部、強く発達した背びれ棘が特徴です。",
    nameOrigin: "標準和名「ツボダイ」の詳しい由来について、主要資料では確定できないため断定しません。",
    humanRelation: "脂の乗った白身を持ち、干物や焼き魚などで利用される食用魚です。",
    observationPoint: "頭部と背びれの棘を見てください。英名armorheadが示すような頑丈な体つきが分かります。",
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
        text: "深海で限られた餌を逃さず捕食できるよう、大きく開く口を持ちます。"
      }
    ],
    bodyLength: "FishBaseでは最大標準体長約20cm。全長では30cm前後になる個体も知られています。",
    distribution: "主に日本周辺の北西太平洋から知られています。",
    habitat: "深海性で、FishBaseでは水深320〜660mから記録されています。",
    diet: "深海の小魚や甲殻類などを捕食すると考えられます。",
    features: "赤色系の体、大きな眼と口、硬くざらついた鱗を持ちます。",
    behavior: "深い海底近くで生活する底生・底層性の魚です。",
    reproduction: "本種固有の詳しい繁殖生態について資料が限られるため断定しません。",
    identification: "大きな眼と口、赤い体、ざらざらした体表が特徴です。",
    nameOrigin: "標準和名の詳しい命名由来について、今回確認した主要資料では断定できません。",
    humanRelation: "底引網などで混獲されることがありますが、一般的な主要水産対象魚ではありません。",
    observationPoint: "眼と口を頭部全体と比べてみてください。どちらも深海魚らしく大きく発達しています。",
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
        text: "左右の鼻孔から非常に長い皮弁が伸びます。FishBaseでも本種を見分ける最大の特徴として紹介されています。"
      },
      {
        title: "肝臓にはスクアレンが多い",
        text: "商業利用は多くありませんが、肝臓にはスクアレンを比較的多く含むことが報告されています。"
      }
    ],
    bodyLength: "最大で全長約126cm。",
    distribution: "西太平洋に分布し、日本の本州南東部、オーストラリア、ニュージーランド、バヌアツ周辺などから知られています。",
    habitat: "水深140〜650m程度の大陸棚外縁・大陸斜面上部に生息します。",
    diet: "海底付近の魚類や無脊椎動物などを捕食します。",
    features: "鼻孔から伸びる非常に長いひげ状皮弁と、2基の背びれの前にある棘が特徴です。臀びれはありません。",
    behavior: "深い海底付近を遊泳しながら魚類や底生動物を探します。",
    reproduction: "胎生で、1腹10尾程度の仔を産んだ記録があります。",
    identification: "鼻先の長いひげを見るだけで、他の日本産ツノザメ類からかなり容易に区別できます。",
    nameOrigin: "鼻先に非常に大きなひげ状構造を持つツノザメであることが、そのまま標準和名に表れています。",
    humanRelation: "漁業対象としての重要性は低いですが、独特な鼻ひげを持つ深海ザメとして研究対象になります。",
    observationPoint: "LABO7では標本展示です。最初に鼻先を見て、左右から伸びる長いひげ状の皮弁を探してください。",
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
        text: "2基の背びれそれぞれの前方に強い棘があります。ツノザメという名前にもつながる特徴です。"
      },
      {
        title: "『世界中にいる』記録には注意が必要",
        text: "従来は世界の温帯・亜熱帯に広く分布するとされましたが、FishBaseでも複数種を含むspecies complexの可能性が指摘されています。地域ごとの記録は慎重に扱う必要があります。"
      }
    ],
    bodyLength: "最大でオス約89.8cm、メス約94.3cm。",
    distribution: "日本・朝鮮半島・中国など北西太平洋を含む世界各地から報告されていますが、広域の記録には近縁種が混在する可能性があります。",
    habitat: "水深29〜600m程度の海底付近に生息します。",
    diet: "魚類、イカなどの頭足類、甲殻類を捕食します。",
    features: "比較的太い体を持つツノザメで、2基の背びれの前方に棘があります。臀びれはありません。",
    behavior: "海底近くを遊泳しながら魚類や頭足類を捕食します。",
    reproduction: "胎生で、FishBaseでは1腹4〜9尾程度の仔を産む記録があります。",
    identification: "背びれ棘の長さや体形、各ひれの位置などを確認します。ツノザメ属には似た種類が多いため体色だけでは判別しません。",
    nameOrigin: "比較的太い体形を持つツノザメ類であることが和名に表れています。",
    humanRelation: "深海漁業で混獲されます。日本の環境省評価では準絶滅危惧、世界的にはIUCNでEndangeredと評価されています。",
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
        text: "自分の遺伝子だけで発光酵素を作るのではなく、発光するウミホタル類などの餌からルシフェラーゼを取り込み、発光器へ運んで再利用します。2026年には全ゲノム解析から、この『盗タンパク質』の仕組みを支持する研究成果が公表されました。"
      },
      {
        title: "洞窟で数万匹の巨大な群れになる",
        text: "昼間はサンゴ礁の洞窟や岩陰に密集し、ときには数万匹規模の群れを形成します。暗くなると外へ出て餌を食べます。"
      }
    ],
    bodyLength: "最大で全長約12cm。水族館でよく見られる個体は6〜7cm前後です。",
    distribution: "日本を含む西太平洋の暖海域に分布します。",
    habitat: "水深3〜30m程度のサンゴ礁・岩礁域に生息し、昼間は洞窟や岩棚の下など暗い場所に大群で集まります。",
    diet: "夜間に水中へ出て、甲殻類幼生やゴカイ類の幼生など動物プランクトンを捕食します。",
    features: "小型でやや透明感のある銀色から金色の体を持ち、大きな眼があります。腹側には発光に利用する器官があります。",
    behavior: "夜行性です。昼間は密集した群れで岩陰に隠れ、暗くなると群れから広がってプランクトンを捕食します。",
    reproduction: "本種固有の詳しい繁殖期・産卵行動について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "透明感のある銀色の体、大きな眼、非常に密集した群れが特徴です。",
    nameOrigin: "金色・銀色に輝く大きな眼を持つ小魚ですが、標準和名の詳しい命名経緯までは断定しません。",
    humanRelation: "2026年に餌由来の発光タンパク質を利用する仕組みがゲノム研究でも詳しく示され、生物発光研究で特に注目される魚になっています。",
    observationPoint: "まず群れ全体を見てください。その後1匹の腹側を観察し、暗い環境で弱い発光が見られないか探してみてください。",
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
        text: "下あごには短いひげ状構造があり、海底の小動物を探す際に利用します。大きな縞模様に目が行きやすいですが、顔にも特徴があります。"
      },
      {
        title: "最大90cmになる",
        text: "水族館では50cm前後の個体も多い大型魚ですが、FishBaseでは最大全長90cmが記録されています。"
      }
    ],
    bodyLength: "最大で全長約90cm。",
    distribution: "日本太平洋岸、ハワイ諸島、オーストラリア、ニュージーランド周辺など太平洋に分布します。",
    habitat: "岩礁や砂地周辺に生息し、水深18〜193m程度から記録されています。",
    diet: "海底のクモヒトデ類など、小型の底生無脊椎動物を食べます。",
    features: "体高が非常に高く、白っぽい体に太い黒色の縦帯が入り、ひれは黄色を帯びます。吻は前方へ尖ります。",
    behavior: "単独、ペア、小さな群れで深めの岩礁域を泳ぎます。海底へ吻を近づけて餌を探します。",
    reproduction: "本種固有の繁殖時期・産卵行動について十分な資料を確認できないため断定しません。",
    identification: "非常に高い体高、太い黒色帯、黄色いひれ、尖った吻の組み合わせが特徴です。",
    nameOrigin: "前方へ突き出した特徴的な吻を、天狗の長い鼻に見立てた和名です。",
    humanRelation: "大型で特徴的な縞模様を持つため、水族館やダイビングで人気があります。",
    observationPoint: "大きな縞模様を見たあと、下あごへ注目してください。短いひげ状構造を探すと新しい特徴が見えてきます。",
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
        text: "メスが産んだ卵の塊をオスが口にくわえ、ふ化するまで守ります。日本での繁殖期は主に6〜9月とされています。"
      },
      {
        title: "オスはときどき卵を食べる",
        text: "口内保育中のオスが一部の卵を食べることがあり、口の中に収められる量へ調節したり、自身のエネルギーを補う行動と考えられています。"
      }
    ],
    bodyLength: "最大で全長約10cm前後。",
    distribution: "日本を含む西太平洋の温帯から暖海域に分布します。",
    habitat: "沿岸の岩礁やサンゴ礁周辺で群れを形成します。",
    diet: "動物プランクトン、小型甲殻類などを捕食します。",
    features: "吻から眼へ伸びる黒帯、後頭部の黒斑、尾びれ基部の黒斑が特徴です。",
    behavior: "昼間は岩礁周辺で大きな群れを形成し、夜になると餌を求めて活動します。",
    reproduction: "日本では6〜9月頃が繁殖期です。ペアを形成して産卵し、受精後の卵塊をオスが口内保育します。",
    identification: "後頭部と尾びれ基部にある黒斑、眼を通る黒帯を確認します。",
    nameOrigin: "体に目立つ黒い斑点を持つイシモチ類であることが標準和名に表れています。",
    humanRelation: "主要な食用魚ではありませんが、群泳とオスの口内保育という興味深い繁殖行動から水族館展示に適した魚です。",
    observationPoint: "群れを見るだけでなく、1匹ずつ口元を見てください。繁殖期に口が大きく膨らんだオスがいれば、卵を保育している可能性があります。",
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
        text: "幼魚では背びれ後方付近に黒い眼状斑がありますが、成長すると消失します。成長段階を見分けるポイントです。"
      },
      {
        title: "複数のオスと1匹のメスで産卵することも",
        text: "水槽内の研究では、夜間に1匹のメスを複数のオスが追い、水中へ泳ぎ上がって放卵・放精する集団産卵が観察されています。"
      }
    ],
    bodyLength: "最大で全長約15cm。",
    distribution: "日本、朝鮮半島、台湾、フィリピン周辺など北西太平洋に分布します。",
    habitat: "沿岸の岩礁やサンゴ礁域に生息し、主に水深5〜30m程度で見られます。",
    diet: "岩礁周辺の小型無脊椎動物などをついばんで食べます。",
    features: "体は淡い黄褐色で、体の後半に幅広い暗色帯があります。幼魚では背びれ後部付近に眼状斑が現れます。",
    behavior: "岩礁域を単独・ペア・小群で泳ぎながら餌を探します。日本沿岸の比較的温帯域にも適応したチョウチョウウオです。",
    reproduction: "水槽内では水温23℃以上の夜間に産卵し、1匹のメスと複数オスによる放卵・放精が観察されています。卵は直径約0.7mmの浮遊卵です。",
    identification: "淡い黄褐色の体、後半部の太い暗色帯を確認します。幼魚では背びれ付近の眼状斑も重要です。",
    nameOrigin: "標準和名「シラコダイ」の詳しい命名由来は主要資料から確定できないため断定しません。",
    humanRelation: "日本沿岸で比較的観察しやすいチョウチョウウオの一つで、水族館やダイビングでも親しまれます。",
    observationPoint: "若い個体がいれば背びれの後ろ側を見てください。黒い眼状斑があるかどうかで成長段階の違いを観察できます。",
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
        text: "一般的なサメの卵殻は褐色で不透明ですが、本種の卵殻は非常に透明です。八景島でも2026年に透明な卵が産卵され、LABO8で展示されました。"
      },
      {
        title: "サメで新しく発見された繁殖方法",
        text: "卵をすぐに産み落とさず、左右の輸卵管に1個ずつ保持したまま胚をかなり成長させてから産卵します。この方式は『持続的単卵生（sustained single oviparity）』として2020年に報告されました。"
      }
    ],
    bodyLength: "最大で全長約40cm。ナヌカザメ属では小型の種類です。",
    distribution: "西太平洋の南シナ海周辺に分布し、マレーシア、ブルネイ、台湾周辺などから知られています。",
    habitat: "主に水深100〜200m前後の大陸棚外縁の海底に生息します。研究標本では118〜165mから記録されています。",
    diet: "本種単独の詳細な食性研究は限られているため、特定の餌を断定しません。",
    features: "小型でややずんぐりした体を持ち、体には暗色の鞍状斑や斑紋があります。危険時には胃へ海水や空気を取り込んで腹部を大きく膨らませます。",
    behavior: "外敵に襲われると体を膨らませ、岩の隙間などから引き出されにくくする防御行動を行います。",
    reproduction: "卵生です。ただし一般的なトラザメ類より卵を母体内に長期間保持し、かなり発達した胚が入った大型の透明卵殻を産みます。",
    identification: "小型のナヌカザメ類で、暗色斑の配置や体形を確認します。正確な同定では近縁種との形態比較が必要です。",
    nameOrigin: "マレーシア・ボルネオ島のサラワク地域にちなむ名称と、体を膨らませるswellsharkという英名を組み合わせた展示名です。",
    humanRelation: "分布域が狭く、繁殖数も少ないと考えられるサメです。八景島では2026年に産卵・ふ化が確認され、繁殖生態を直接観察できる貴重な展示となっています。",
    observationPoint: "成魚だけでなく卵が展示されていれば必見です。透明な卵殻を通して、胚や大きな卵黄を観察できる可能性があります。",
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
        text: "大型のサメですが外洋だけでなく、内湾・河口・砂地・アマモ場など人の身近な浅海域をよく利用します。"
      },
      {
        title: "卵ではなく赤ちゃんを産む",
        text: "胎盤を形成しない胎生で、母体内の胚は卵黄を栄養に成長します。1回に10〜20尾ほどの仔を産む記録があります。"
      }
    ],
    bodyLength: "最大で全長約150cm。",
    distribution: "ロシア極東、日本、朝鮮半島、中国、台湾など北西太平洋に分布します。",
    habitat: "沿岸の浅い砂底・岩礁・湾内・河口・アマモ場などを利用します。",
    diet: "小魚やエビ・カニなどの甲殻類、その他の底生動物を捕食します。",
    features: "細長い灰褐色の体を持ち、若い個体では体側に暗色の帯や斑紋が見られます。口は腹側にあり、歯には中央の尖った部分とその両側に小さな突起があります。",
    behavior: "普段は海底付近をゆっくり泳ぎ、複数個体が同じ場所で休むこともあります。",
    reproduction: "無胎盤性の胎生で、胚は母体内で卵黄を使って成長します。FishBaseでは1腹10〜20尾とされています。",
    identification: "細長い体形と、若魚に見られる帯状模様、2基の背びれの位置などを確認します。",
    nameOrigin: "標準和名の詳しい語源については確実な資料が少ないため断定しません。",
    humanRelation: "沿岸漁業で漁獲されることがあります。一般に人へ積極的に危害を加えるサメではありません。",
    observationPoint: "底の近くを泳ぐときに口の位置を見てください。体の真下側へ口が開いている、底生性のサメらしい形が分かります。",
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
        text: "胸びれが左右へ大きく広がり体も平たいのでエイのように見えますが、鰓孔が頭部の側面に開くサメの仲間です。"
      },
      {
        title: "砂の中から一気に襲う",
        text: "海底の砂へ体を隠し、近くを通過した魚などへ瞬間的に飛びつく待ち伏せ型の捕食者です。"
      }
    ],
    bodyLength: "最大で全長約200cm。",
    distribution: "日本、朝鮮半島、中国沿岸など北西太平洋に分布します。",
    habitat: "沿岸から大陸棚の砂底・砂泥底に生息します。",
    diet: "魚類、甲殻類など海底付近の動物を捕食します。",
    features: "頭と胴が強く平たく、大型の胸びれが左右へ広がります。背側は褐色で、海底へ溶け込む細かな斑紋があります。",
    behavior: "砂へ体を埋め、眼と呼吸孔だけを出して待ち伏せします。獲物が近づくと大きな口を素早く開いて捕食します。",
    reproduction: "無胎盤性の胎生で、母体内の胚は卵黄を利用して成長します。",
    identification: "エイのような体形ですが、胸びれと頭部が完全には連続しておらず、鰓孔が頭の側面にあります。",
    nameOrigin: "標準和名の詳しい語源について主要資料では確定できないため断定しません。",
    humanRelation: "食用に利用されることがあります。一方、FishBase掲載のIUCN評価ではCritically Endangeredとされ、資源減少が懸念されています。",
    observationPoint: "正面から見ると非常に平たいことが分かります。さらにエイとの違いとして、頭部側面の鰓孔を探してください。",
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
        text: "母体内で最も早く成長した胚が、同じ子宮内の小さな胚を捕食する『子宮内共食い』を行います。最終的に左右の子宮から通常1尾ずつ、計2尾ほどの大型の仔が生まれます。"
      },
      {
        title: "見た目ほど攻撃的ではない",
        text: "口から細長い歯が常に突き出て非常に怖く見えますが、通常はゆっくり遊泳するサメです。ただし大型野生動物なので不用意に近づくべきではありません。"
      }
    ],
    bodyLength: "最大で全長約330cm。",
    distribution: "大西洋、インド洋、西太平洋など温帯から亜熱帯域に分布します。日本では小笠原諸島などで知られます。",
    habitat: "沿岸の砂底、岩礁、洞窟、沈船周辺などに生息します。",
    diet: "魚類、エイ類、小型のサメ、イカ類、甲殻類などを捕食します。",
    features: "太い体、大きな口、口を閉じても外へ突出する細長く鋭い歯が特徴です。背びれは2基あり、大きさが比較的近くなります。",
    behavior: "海底付近をゆっくり泳ぎ、洞窟や岩礁周辺に集まることがあります。",
    reproduction: "無胎盤性胎生で、卵食と子宮内共食いを行います。最終的に生き残る仔が少ないため、繁殖力は非常に低いサメです。",
    identification: "口から常に見える細長い歯と、2基の比較的大きさが近い背びれが重要な特徴です。",
    nameOrigin: "『シロワニ』のワニは大型で鋭い歯を持つ姿に関係すると考えられますが、詳しい命名経緯は断定しません。",
    humanRelation: "繁殖力が低く、世界的に個体数減少が深刻なサメです。日本では環境省レッドリストで絶滅危惧種として扱われています。",
    observationPoint: "歯だけではなく泳ぎ方も見てください。鋭い歯の印象とは対照的に、ゆっくり一定速度で泳ぐ姿を観察できます。",
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
        text: "刺胞動物ではなくクシクラゲの仲間なので、刺胞を持ちません。体表に並ぶ8列の櫛板を動かして泳ぎます。"
      },
      {
        title: "ほかのクシクラゲを丸のみ",
        text: "触手を持たず、体の前端にある大きな口を開いて、カブトクラゲなど他のクシクラゲを捕食します。"
      }
    ],
    bodyLength: "数cm程度になるクシクラゲです。柔らかな体は伸縮するため大きさには変化があります。",
    distribution: "日本沿岸から知られ、黒潮生物研究所では高知県宿毛湾で冬から春に観察されています。",
    habitat: "沿岸から外洋の海中を漂って生活します。",
    diet: "主に他のクシクラゲ類を捕食します。",
    features: "押しつぶした瓜のような半透明の体を持ち、表面には8列の櫛板列があります。触手を持ちません。",
    behavior: "櫛板を順番に動かして泳ぎ、獲物となるクシクラゲへ近づくと大きな口で飲み込みます。",
    reproduction: "クシクラゲ類では雌雄同体の種が多く、本種でも配偶子を水中へ放出して繁殖しますが、地域別の詳しい繁殖期は断定しません。",
    identification: "カブトクラゲとは異なり、大きな袖状突起や触手がなく、単純な袋・瓜状の体になります。",
    nameOrigin: "種小名campanaは鐘を意味し、独特の体形に関係します。",
    humanRelation: "食用ではありませんが、刺胞動物とは異なる『クシクラゲ』の体の仕組みを学べる重要な展示生物です。",
    observationPoint: "虹色に見える8列の櫛板を探してください。これは自ら発光しているのではなく、櫛板が光を回折することで生じます。",
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
        text: "8列の櫛板を構成する繊毛に光が当たり、回折することで虹色に輝きます。暗闇で自ら虹色の光を作っているわけではありません。"
      },
      {
        title: "刺胞を持たない",
        text: "ミズクラゲなどとは別の有櫛動物で、獲物を刺す刺胞はありません。小さな時期には粘着性の細胞をもつ触手を使います。"
      }
    ],
    bodyLength: "体長5〜10cm程度。",
    distribution: "日本沿岸に広く見られます。",
    habitat: "沿岸の表層から水中を漂い、海況によって大量に見られることがあります。",
    diet: "動物プランクトンや小型の浮遊生物を食べます。",
    features: "兜を思わせる丸みのある透明な体と、左右に張り出した大きな葉状部分を持ちます。8列の櫛板が虹色に輝きます。",
    behavior: "櫛板の繊毛を波打つように動かしてゆっくり遊泳します。",
    reproduction: "雌雄同体で、卵と精子を海中へ放出します。水族館でも繁殖飼育される種類です。",
    identification: "兜のような体形と大きな葉状突起が特徴です。ウリクラゲ類とは体形が明確に異なります。",
    nameOrigin: "体の輪郭が武士の兜を思わせることからカブトクラゲと呼ばれます。",
    humanRelation: "飼育・繁殖が比較的行いやすく、水族館でクシクラゲを代表する展示種です。",
    observationPoint: "照明の角度を変えながら櫛板を見てください。光の色が移動するように見える美しい現象を観察できます。",
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
        text: "体内に褐虫藻と呼ばれる光合成生物を共生させ、その光合成産物の一部を利用します。そのため明るい場所で過ごすことが重要です。"
      },
      {
        title: "タコのように8本",
        text: "傘の下には8本の太い口腕があり、タコの脚のように見えることが和名の由来です。"
      }
    ],
    bodyLength: "傘径5〜20cm程度になります。",
    distribution: "日本を含むインド・西太平洋の暖海域に分布します。",
    habitat: "暖かい沿岸の表層や湾、礁湖などに生息します。",
    diet: "動物プランクトンを捕食するほか、共生する褐虫藻の光合成産物も利用します。",
    features: "丸く厚みのある傘に白い斑点があり、傘下には8本の太い口腕と棒状の付属器があります。",
    behavior: "傘を一定のリズムで拍動させながら泳ぎ、共生藻が光合成できる明るい水中を利用します。",
    reproduction: "成体が配偶子を放出し、プラヌラからポリプとなります。ポリプは無性的にも増殖し、エフィラを放出してクラゲへ成長します。",
    identification: "丸い傘の白色斑点と、タコの脚のような8本の太い口腕が特徴です。",
    nameOrigin: "8本の太い口腕をタコの脚に見立てた名称です。",
    humanRelation: "色彩と泳ぎ方が美しく、水族館では非常に人気の高いクラゲです。",
    observationPoint: "口腕だけでなく体色にも注目してください。共生藻の量などによって褐色の濃さが変化します。",
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
        text: "半透明の傘に16本の赤褐色の放射状模様が入り、長い触手と組み合わさった姿が特徴です。"
      },
      {
        title: "乾燥しても刺胞は残る",
        text: "刺胞毒が強く、打ち上げられて乾燥した個体でも刺胞が残る場合があります。粉末化した残骸が刺激になることから『ハクションクラゲ』と呼ばれることもあります。"
      }
    ],
    bodyLength: "傘径10〜20cm程度。触手は傘よりはるかに長く、2mを超えることがあります。",
    distribution: "北海道以南の日本近海など北西太平洋に分布します。",
    habitat: "沿岸から沖合の表中層を漂い、春から夏に多く見られます。",
    diet: "動物プランクトン、小魚、甲殻類のほか、ミズクラゲなど他のクラゲを捕食することがあります。",
    features: "傘に16本の赤褐色の縞が放射状に走り、傘縁から多数の長い触手が伸びます。",
    behavior: "傘を拍動させながら水中を漂い、長い触手で獲物を捕らえます。",
    reproduction: "受精卵からプラヌラ、ポリプ、ストロビラ、エフィラを経て成体クラゲになります。",
    identification: "16本の赤褐色線と非常に長い触手が分かりやすい特徴です。",
    nameOrigin: "赤色から赤褐色の体色と傘の縞模様からアカクラゲと呼ばれます。",
    humanRelation: "刺胞毒が強く、海水浴などでは注意が必要です。一方、美しい姿から水族館展示でも人気があります。",
    observationPoint: "傘の赤い線を数えた後、触手がどれほど細く長く伸びているか観察してください。",
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
        text: "中国から東南アジア、東部インド洋・西太平洋の温暖な海域に分布し、『マレーシアンシーネットル』と呼ばれることもあります。"
      },
      {
        title: "失った口腕を再生できる",
        text: "捕食者などによって口腕を失っても、比較的速く再生できる能力が知られています。"
      }
    ],
    bodyLength: "傘径は平均10cm前後ですが、大型個体では20cmを超えることがあります。長い口腕・触手を含めると非常に大きく見えます。",
    distribution: "中国沿岸から東南アジア、東部インド洋・西太平洋の熱帯域に分布します。",
    habitat: "温暖な沿岸の浅い海を中心に生息します。",
    diet: "動物プランクトン、甲殻類、他のクラゲ類などを捕食します。",
    features: "半透明の傘から非常に長く薄い口腕や触手が伸びます。白、黄色、桃色など個体によって色彩が変化します。",
    behavior: "長い触手を水中へ広げながら漂い、触れた小動物を刺胞で捕らえます。",
    reproduction: "鉢虫類の一般的な生活環として、プラヌラ・ポリプ・エフィラを経てクラゲへ成長します。",
    identification: "非常に長い繊細な口腕と多数の触手が特徴です。近縁のChrysaora属とは触手数や傘の形態を組み合わせて同定します。",
    nameOrigin: "英名Indonesian sea nettleをそのままカタカナ化した展示名です。Sea nettleは『海のイラクサ』を意味します。",
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
        text: "通常でも傘径40〜70cmほどになる大型種で、例外的には傘径1.8m以上、触手30m以上という記録もあります。"
      },
      {
        title: "英名は『ライオンのたてがみ』",
        text: "傘の下から大量の細長い触手が束になって伸びる姿がライオンのたてがみに似ることからLion's mane jellyfishと呼ばれます。"
      }
    ],
    bodyLength: "一般には傘径30〜80cmほど。非常に大型の個体では1.8mを超える記録があります。",
    distribution: "北太平洋・北大西洋など北半球の冷たい海域を中心に分布します。",
    habitat: "冷水域の沿岸から外洋の表中層に生息します。",
    diet: "動物プランクトン、魚類の仔稚魚、他のクラゲなどを長い触手で捕食します。",
    features: "黄褐色・赤褐色系の大型の傘と、傘下に密集する非常に多数の細長い触手が特徴です。",
    behavior: "大量の触手を水中へ広げ、広い範囲の獲物を捕らえながら漂います。",
    reproduction: "受精卵からプラヌラ、ポリプ、ストロビラ、エフィラを経て成体になります。",
    identification: "同属のユウレイクラゲより北方・冷水性で、成体は褐色・赤色が強く非常に大型になります。",
    nameOrigin: "ユウレイクラゲ属のうち、より北方の冷水域を中心に分布することが和名に表れています。",
    humanRelation: "長い触手には刺胞があり、刺されると痛みや皮膚症状を生じます。",
    observationPoint: "傘だけを見るのではなく、その下に集まる触手の束を確認してください。ユウレイクラゲとの色の違いも比較できます。",
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
        text: "傘から長く垂れる触手・口腕が水中でゆらゆら揺れる姿が、柳の枝を思わせます。"
      },
      {
        title: "アカクラゲと同じ属",
        text: "アカクラゲやインドネシアンシーネットルと同じChrysaora属で、長い刺胞触手を使う捕食性クラゲです。"
      }
    ],
    bodyLength: "傘径数cm〜10cm前後になる中小型のクラゲです。",
    distribution: "西太平洋を中心に記録されています。",
    habitat: "沿岸から沖合の海中を漂って生活します。",
    diet: "動物プランクトン、小型甲殻類、その他のゼラチン質プランクトンなどを捕食します。",
    features: "半透明から黄褐色の傘を持ち、傘縁から多数の細長い触手が伸びます。",
    behavior: "長い触手を広げて漂い、刺胞で小動物を捕らえます。",
    reproduction: "プラヌラからポリプ、ストロビラ、エフィラを経て成体クラゲになる鉢虫類の生活環を持ちます。",
    identification: "Chrysaora属の他種とは傘の模様、触手数、傘縁の形などを組み合わせて識別します。",
    nameOrigin: "細長い触手・口腕が柳の枝のように垂れる姿が和名に関係します。",
    humanRelation: "刺胞を持つため野外では触れないことが重要です。",
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
        text: "傘縁には16本の長い触手と16個の感覚器が交互に並び、傘縁全体は32枚の葉状部分に分かれます。"
      },
      {
        title: "天草で多く見られたことが名前に",
        text: "日本では本州中部以南に現れ、九州の天草付近で夏に多く見られることからアマクサクラゲと呼ばれます。"
      }
    ],
    bodyLength: "傘径は通常数cm〜9cm程度。",
    distribution: "日本を含むインド・西太平洋の熱帯・亜熱帯域に分布します。",
    habitat: "暖海の沿岸から沖合の表中層に生息します。",
    diet: "動物プランクトンや小型動物を刺胞で捕食します。",
    features: "淡い赤紫色から黄褐色を帯びた傘を持ち、16本の長い触手と複雑にひだ状になった口腕があります。",
    behavior: "長い触手を広げながら水中を漂い、小動物を捕らえます。",
    reproduction: "受精卵からプラヌラ・ポリプを経てクラゲになります。ポリプでは無性的な増殖も行います。",
    identification: "16本の長い触手と傘縁の32枚の葉状部分が識別点です。",
    nameOrigin: "熊本県天草周辺でよく知られたことが標準和名の由来です。",
    humanRelation: "刺胞毒が強く、触手に触れると強い痛みを生じることがあります。",
    observationPoint: "傘縁をゆっくり追い、長い触手と感覚器が交互に配置されている構造を見てください。",
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
        text: "半透明から白色の大きな傘と多数の長い触手・口腕を持ち、水中を漂う姿が幽霊を思わせます。"
      },
      {
        title: "クラゲも食べる大型捕食者",
        text: "動物プランクトンだけでなく、魚の仔稚魚や他のクラゲなども捕食します。"
      }
    ],
    bodyLength: "傘径20〜30cm程度が多く、50cm以上になる個体もあります。",
    distribution: "本州中部以南の日本、中国沿岸など北西太平洋に分布します。",
    habitat: "沿岸から沖合の表中層に生息し、日本では夏から秋を中心に見られます。",
    diet: "動物プランクトン、魚類の仔稚魚、他のクラゲなどを捕食します。",
    features: "白色から淡黄色の扁平な大型の傘を持ち、傘縁から多数の糸状触手が伸びます。",
    behavior: "広げた触手で広範囲の餌を捕らえながら漂います。",
    reproduction: "プラヌラ、ポリプ、ストロビラ、エフィラを経て大型クラゲへ成長します。",
    identification: "キタユウレイクラゲと比べると白・淡色の傘が目立ちます。大型化すると傘径50cmを超える場合があります。",
    nameOrigin: "白く半透明で長い触手をたなびかせる姿を幽霊に見立てた名称です。",
    humanRelation: "刺胞毒が強く、刺されると強い痛みを生じることがあります。",
    observationPoint: "LABO9にキタユウレイクラゲもいれば、傘の色を比較してください。ユウレイクラゲはより白っぽく見えます。",
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
        text: "以前は世界中のミズクラゲにAurelia auritaが使われていましたが、遺伝子解析などによる再検討で、日本沿岸の一般的なミズクラゲはAurelia coeruleaとされています。"
      },
      {
        title: "四つ葉模様は目ではない",
        text: "傘中央に見える4つの馬蹄形・四つ葉状の構造は眼ではなく、生殖腺などが透けて見えているものです。"
      }
    ],
    bodyLength: "一般には傘径10〜30cm程度。",
    distribution: "日本各地を含む温帯・暖海域に広く分布します。",
    habitat: "湾内・港・沿岸の表層などに生息し、条件がそろうと大量発生します。",
    diet: "動物プランクトン、魚卵や仔魚などの小型生物を触手と口腕で捕らえます。",
    features: "ほぼ透明な円盤状の傘を持ち、中央に4個の馬蹄形の生殖腺が透けて見えます。",
    behavior: "傘をゆっくり拍動させながら漂い、傘縁の短い触手で餌を捕らえます。",
    reproduction: "成体クラゲの有性生殖後、プラヌラが海底へ付着してポリプになり、ストロビレーションによってエフィラを放出します。",
    identification: "4個の馬蹄形生殖腺と透明な円形の傘が最大の特徴です。",
    nameOrigin: "水のように透明な体を持つことが和名に関係するとされています。",
    humanRelation: "日本の水族館を代表するクラゲです。一方、大量発生すると漁業や発電所の取水設備などへ影響する場合があります。",
    observationPoint: "傘中央の四つ葉状模様を観察してください。個体によって生殖腺の色や形に違いがあります。",
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
        text: "ほとんど無色透明で、傘の内部に細い放射管や生殖腺が見える姿からガラス細工を思わせます。"
      },
      {
        title: "湘南でも見られる春のクラゲ",
        text: "神奈川県江の島周辺でも春に出現記録があり、相模湾のクラゲ相を代表するヒドロクラゲの一つです。"
      }
    ],
    bodyLength: "傘径5cm前後になることが多く、文献では10cm程度に達する記録もあります。",
    distribution: "北太平洋・北大西洋の温帯から冷水域に分布し、日本では主に関東以北などで見られます。",
    habitat: "沿岸の表中層を漂い、日本では冬から春を中心に出現します。",
    diet: "動物プランクトンなどの小型生物を触手で捕らえます。",
    features: "非常に透明な傘と長い触手を持ち、体内の放射管や生殖腺がガラス越しのように見えます。",
    behavior: "傘を拍動させながらゆっくり遊泳します。",
    reproduction: "ヒドロクラゲ類らしく、付着生活するポリプ世代と自由遊泳するクラゲ世代を持ちます。",
    identification: "透明な傘、中央から放射状に伸びる管、生殖腺と多数の細い触手を確認します。",
    nameOrigin: "『ギヤマン』はガラス製品・ガラス細工を指す古い言葉で、透明な姿から名付けられました。",
    humanRelation: "透明感のある美しい姿から水族館展示で人気があり、神奈川県沿岸でも観察されるクラゲです。",
    observationPoint: "背景の色が透けるほど透明な傘を見てください。内部の管や生殖腺まで直接観察できます。",
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
        text: "オワンクラゲ属のクラゲには緑色蛍光タンパク質があり、本種でも紫外線を当てると傘縁などに緑色蛍光を見ることができます。"
      },
      {
        title: "クラゲのまま分裂して増えることも",
        text: "野外ではクラゲ体が分裂して増殖している様子が観察されており、栄養状態によって無性生殖と有性生殖を使い分ける可能性があります。"
      }
    ],
    bodyLength: "傘径8cm程度までになります。",
    distribution: "日本を含む太平洋などの暖温帯海域から知られています。",
    habitat: "沿岸から沖合の表中層を漂って生活します。",
    diet: "小型の動物プランクトンなどを触手で捕らえます。",
    features: "透明な皿状の傘を持ち、多数の放射管が中心から傘縁へ伸びます。放射管数に対して触手数が少ないことが近縁種との特徴です。",
    behavior: "傘をゆっくり拍動させながら水中を漂います。",
    reproduction: "クラゲの有性生殖に加え、個体の分裂による無性的増殖も観察されています。",
    identification: "多数の放射管に対し、触手数が比較的少ないことがオワンクラゲなどとの識別点です。",
    nameOrigin: "緑色の光を灯しているように見えることが『火灯し』という和名に関係します。",
    humanRelation: "オワンクラゲ類はGFP研究との関係で非常に有名で、本種も蛍光タンパク質を観察できるクラゲです。",
    observationPoint: "通常照明だけでなく、展示で紫外線照明が使われていれば傘縁の緑色蛍光にも注目してください。",
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
        text: "普通のクラゲとは逆に傘を海底へつけ、口腕を上へ向けた姿勢で生活します。"
      },
      {
        title: "逆さまなのは日光を受けるため",
        text: "体内に褐虫藻を共生させており、口腕を太陽光へ向けることで共生藻が光合成しやすくなります。"
      }
    ],
    bodyLength: "傘径10〜20cm程度になる個体が多く見られます。",
    distribution: "日本では九州・琉球列島など暖かい海域を中心に分布します。",
    habitat: "浅い礁湖、マングローブ周辺、砂泥底など日光の届く穏やかな場所に生息します。",
    diet: "動物プランクトンを捕食するほか、共生する褐虫藻から光合成産物を得ます。",
    features: "平たい傘を下にして海底へ置き、枝分かれした口腕を上へ広げます。",
    behavior: "海底で逆さまの姿勢を保ち、傘を拍動させて周囲へ海水を流します。",
    reproduction: "有性生殖に加え、ポリプ世代では無性的に増殖し、エフィラを形成して成体へ成長します。",
    identification: "海底で傘を下にして逆さまになっていれば非常に見分けやすいクラゲです。",
    nameOrigin: "通常のクラゲとは上下が逆の姿勢で生活するためサカサクラゲと呼ばれます。",
    humanRelation: "褐虫藻との共生や独特な姿勢を観察しやすく、水族館でよく展示されます。",
    observationPoint: "なぜ口腕を上へ向けているのか考えながら、照明方向との関係を観察してください。",
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
        text: "成熟すると傘中央から放射状に伸びる4本の白い生殖腺が発達し、透明な傘の中で非常に目立ちます。"
      },
      {
        title: "光の方向へ一斉に泳ぐ",
        text: "非常に強い正の走光性があり、照明を付けると光の方向へ一斉に泳ぐ行動が飼育下で観察されています。"
      }
    ],
    bodyLength: "傘径1〜4cm程度。成熟個体では3cm前後になることがあります。",
    distribution: "日本では東北地方以北など冷たい海域を中心に見られます。",
    habitat: "冷水域の沿岸の表中層に生息し、春に大量発生することがあります。",
    diet: "小型の動物プランクトンを触手で捕食します。",
    features: "透明な丸い傘を持ち、成熟個体では4本の白い生殖腺が放射状に伸びます。",
    behavior: "光へ集まる正の走光性が非常に強く、多数個体が同じ方向へ泳ぐことがあります。",
    reproduction: "付着生活するポリプを持ち、低水温条件ではポリプから多数のクラゲが遊離することが飼育下で確認されています。",
    identification: "透明な傘の中央から外側へ伸びる4本の白い生殖腺が最大の特徴です。",
    nameOrigin: "成熟すると目立つ白い生殖腺を持つことが和名に関係します。",
    humanRelation: "小型ですが透明で美しく、水族館では春の冷水性クラゲとして展示されます。",
    observationPoint: "4本の白い線を探してください。照明の方向が変わる展示では、クラゲ自身の移動方向にも注目です。",
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
        text: "成熟したクラゲが強い刺激や老化などをきっかけに球状の組織へ変化し、そこから再びポリプを作る『生活環の逆転』を起こすことがあります。"
      },
      {
        title: "昔のTurritopsis nutriculaは日本産には不適切",
        text: "日本のベニクラゲ類は長くTurritopsis nutriculaとされましたが、分子系統研究で複数種に分かれることが判明しました。現在、北日本などで『ベニクラゲ』と呼ばれる種にはTurritopsis pacificaが用いられています。"
      }
    ],
    bodyLength: "傘径・傘高は1cm前後の非常に小型のクラゲです。",
    distribution: "日本では北日本を中心に浅海域から知られています。",
    habitat: "沿岸の浅い海を漂い、ポリプ世代は岩や人工物などの基質へ付着します。",
    diet: "小型の動物プランクトンなどを捕食します。",
    features: "透明な小さな傘を持ち、中央の口柄・生殖腺が赤色を帯びるため『ベニクラゲ』らしい色が見えます。",
    behavior: "通常は他のヒドロクラゲと同じように遊泳しますが、傷害・老化などの条件下でクラゲ体が退縮し、ポリプへ戻る場合があります。",
    reproduction: "有性生殖で生じたプラヌラからポリプとなり、ポリプからクラゲが形成されます。さらにクラゲからポリプへ逆戻りする現象も知られます。",
    identification: "日本にはニホンベニクラゲTurritopsis sp.やチチュウカイベニクラゲT. dohrniiも確認されるため、厳密な識別には形態と遺伝情報が必要です。",
    nameOrigin: "口柄や生殖腺などが紅色に見えることからベニクラゲと呼ばれます。",
    humanRelation: "『不老不死のクラゲ』として有名ですが、捕食・病気・環境悪化などでは普通に死亡します。正確には、特定条件で生活環を逆転させて若いポリプ段階へ戻れるクラゲです。",
    observationPoint: "非常に小さいため、まず中央の赤い部分を探してください。解説があればポリプ段階の姿とも見比べると、若返りの仕組みを理解しやすくなります。",
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
        text: "眼を通る黒帯に加えて額にも黒い模様が入り、英名ではRaccoon butterflyfishと呼ばれます。"
      },
      {
        title: "数十匹の群れになることもある",
        text: "ペアだけでなく、場所によっては数十匹ほどの群れで行動することも知られています。"
      }
    ],
    bodyLength: "最大で全長約20cm。",
    distribution: "八丈島、小笠原諸島、南日本、琉球列島からインド・太平洋の熱帯・亜熱帯域に広く分布します。",
    habitat: "浅いサンゴ礁や岩礁、礁湖などに生息します。",
    diet: "小型の底生無脊椎動物、サンゴのポリプ、付着藻類などを食べる雑食性です。",
    features: "黄色い体を基調とし、眼を通る黒帯と額の黒色部、胸びれ上方から背側へ広がる大きな暗色斜帯が特徴です。",
    behavior: "昼間に岩礁やサンゴ礁を泳ぎ回り、岩やサンゴ表面を細かくついばみます。ペアや小群で見られます。",
    reproduction: "卵を海中へ放出する浮遊卵型で、チョウチョウウオ類では繁殖期にペアを形成して産卵する例が知られています。",
    identification: "眼を通る黒帯だけでなく、頭部後方から背側へ広がる幅広い黒色帯を確認します。",
    nameOrigin: "標準和名の詳しい語源は主要資料から確定できないため断定しません。",
    humanRelation: "鮮やかな模様から観賞魚や水族館展示で人気があり、サンゴ礁を代表する魚の一つです。",
    observationPoint: "正面よりも横から顔を見てください。眼の位置が黒帯によって分かりにくくなっていることが分かります。",
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
        text: "種小名vagabundusには『放浪する』という意味があり、広い範囲を泳ぎ回る姿から和名の『フウライ』にもつながったとされています。"
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
    features: "白い体側に2方向から斜めの細い黒線が走り、背びれ・尻びれ・尾部には黄色と黒色が入ります。",
    behavior: "成魚はペアで広い範囲を泳ぎ回ることが多く、岩礁表面をついばみながら餌を探します。",
    reproduction: "雌雄がペアになり、卵と精子を海中へ放出します。卵は浮遊性です。",
    identification: "体側の2方向から交差する細い斜線と、尾部周辺の黄色・黒色模様が特徴です。",
    nameOrigin: "種小名vagabundusの『放浪する』という意味から、風来坊を連想した和名とされています。",
    humanRelation: "水族館や観賞魚として知られ、南日本の磯では季節来遊魚として観察されます。",
    observationPoint: "体側の線を追ってください。前半と後半で斜線の方向が変わることがよく分かります。",
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
        text: "成長すると背びれ軟条部の後方が細長く伸び、英名Threadfin butterflyfishの由来にもなっています。"
      },
      {
        title: "背びれの黒斑は大人でも残る",
        text: "多くのチョウチョウウオでは幼魚の眼状斑が消えますが、本種では背びれ後方の黒斑が成魚でも明瞭です。"
      }
    ],
    bodyLength: "最大で全長約23〜25cm。",
    distribution: "南日本からインド・太平洋の熱帯域に非常に広く分布します。",
    habitat: "浅いサンゴ礁、岩礁、礁湖などに生息します。",
    diet: "小型底生動物、サンゴのポリプ、付着藻類などを食べる雑食性です。",
    features: "白い体に多数の斜線が入り、体後半は黄色です。背びれ後部には大きな黒斑があり、成魚では背びれ後端が糸状に伸びます。",
    behavior: "単独またはペアでサンゴ礁を泳ぎ回ります。成魚のペアが長期間一緒に行動することもあります。",
    reproduction: "ペアで海中へ卵と精子を放出する浮遊卵型です。",
    identification: "背びれ後方の黒斑と糸状に伸びた背びれ、体側の斜線を確認します。",
    nameOrigin: "成魚の背びれが細い棘のように長く伸びる姿が和名に表れています。",
    humanRelation: "サンゴ礁性チョウチョウウオとして水族館や観賞魚市場でよく知られています。",
    observationPoint: "背びれの最後部を見てください。成長した個体ほど糸状部分が長くなります。",
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
        text: "オスには青色と黒色の横帯が多数入り、メスでは青灰色の体に眼を通る黒帯が目立ちます。雌雄差が非常に大きいヤッコです。"
      },
      {
        title: "岩をついばまず中層で餌を食べる",
        text: "多くのキンチャクダイ類がカイメンなどを食べるのに対し、タテジマヤッコ属は中層の動物プランクトンを主に捕食します。"
      }
    ],
    bodyLength: "全長15〜18cm程度。",
    distribution: "八丈島、小笠原諸島、屋久島、琉球列島から中・西部太平洋に分布します。",
    habitat: "潮通しの良いやや深い岩礁・サンゴ礁域に生息します。",
    diet: "主に動物プランクトンを捕食します。",
    features: "オスとメスで色彩が異なります。オスでは青色の体に黒い横線、メスでは青灰色の体と顔周辺の黒帯が特徴です。",
    behavior: "海底に密着せず、岩礁上の中層を泳ぎながら流れてくるプランクトンを捕食します。",
    reproduction: "タテジマヤッコ属では雌性先熟型の性転換が知られ、社会構造の変化によって大型メスがオスになることがあります。",
    identification: "オス・メスを別種と思わないことが重要です。尾びれ上下葉や背びれ・尻びれの模様も確認します。",
    nameOrigin: "成魚のひれが長く伸びることが標準和名に表れています。",
    humanRelation: "深場性で美しい色彩を持ち、海水観賞魚として人気があります。",
    observationPoint: "複数個体がいる場合は、オスとメスの模様を比較してください。",
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
        text: "幼魚は濃紺の体に白と青の同心円状模様を持ちますが、成魚になると黄色と青色の横縞へ大きく変化します。"
      },
      {
        title: "名前は『縦縞』でも魚では横方向",
        text: "日本語では魚の頭から尾へ走る線を『縦縞』と呼ぶため、成魚の黄色と青の線がタテジマと表現されています。"
      }
    ],
    bodyLength: "最大で全長約40cm。",
    distribution: "南日本からインド・太平洋の熱帯サンゴ礁域に広く分布します。",
    habitat: "サンゴ礁や岩礁の洞窟・割れ目が多い場所に生息します。",
    diet: "カイメン類、ホヤ類などの付着性無脊椎動物を中心に食べます。",
    features: "成魚は黄色と青色の細い縞模様、眼を通る黒帯、青く縁取られた黒い鰓蓋部が特徴です。幼魚は同心円状模様になります。",
    behavior: "成魚は一定の岩礁域を利用し、岩面をついばみながら餌を取ります。",
    reproduction: "繁殖時には雌雄が水中へ上昇しながら放卵・放精し、浮遊卵を産みます。",
    identification: "幼魚と成魚の模様が完全に異なるため、成長段階ごとの模様を覚えることが重要です。",
    nameOrigin: "成魚の体側に多数並ぶ縦方向の縞模様から名付けられています。",
    humanRelation: "世界的に人気の高い大型海水観賞魚で、水族館でも代表的なサンゴ礁魚です。",
    observationPoint: "若い個体がいれば成魚と模様を比較してください。成長途中では円模様と縞模様が混ざった姿も見られます。",
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
        text: "幼魚は濃紺の体に白と青の湾曲した線が入り、さざ波のように見えます。成魚になると模様は大きく変化します。"
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
    behavior: "岩礁表面を泳ぎながら付着生物をついばみます。成魚は単独またはペアで行動することがあります。",
    reproduction: "卵生で、繁殖時には雌雄が海中へ放卵・放精します。",
    identification: "成魚では多数の青い小斑点、幼魚では波のような曲線模様が重要です。",
    nameOrigin: "幼魚に見られる波状の模様を『さざ波』に見立てた和名です。",
    humanRelation: "観賞魚として人気が高く、成長による色彩変化を観察できる水族館向きの魚です。",
    observationPoint: "成長段階が違う個体がいれば、どのように模様が切り替わっていくか比較してください。",
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
        text: "普段はサンゴの上で群れていますが、危険を感じると群れ全体が一斉に枝状サンゴの隙間へ逃げ込みます。"
      },
      {
        title: "卵を守るのはオス",
        text: "産卵後、オスが岩やサンゴ上に付着した卵を守り、ひれで新鮮な水を送ります。"
      }
    ],
    bodyLength: "最大で全長約10cm。",
    distribution: "琉球列島など南日本からインド・西太平洋のサンゴ礁域に広く分布します。",
    habitat: "浅いサンゴ礁、とくに枝状サンゴの上や周辺に群れで生息します。",
    diet: "主に動物プランクトンを捕食します。",
    features: "青緑色の小型魚で、光の角度によって水色・緑色・青色に見えます。尾びれは深く二叉します。",
    behavior: "大きな群れでサンゴの上を泳ぎ、流れてくるプランクトンを食べます。危険時にはサンゴ内へ隠れます。",
    reproduction: "卵生で、オスが産卵場所を準備し、メスが産んだ付着卵をオスが保護します。",
    identification: "淡い青緑色の体と深く二叉した尾びれ、枝状サンゴ上での群泳が特徴です。",
    nameOrigin: "前方に突出する歯を持つことが『出歯』の名前に関係するとされています。",
    humanRelation: "サンゴ礁水槽を代表する群泳魚で、海水観賞魚としても非常に人気があります。",
    observationPoint: "群れに突然別の魚が近づいたときに注目してください。一斉にサンゴへ隠れる行動が見られることがあります。",
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
        text: "淡黄色の体側に小さな暗色点が規則的に並び、ゴマを散らしたような模様になります。"
      },
      {
        title: "幅広い餌を利用できる",
        text: "サンゴのポリプだけに依存せず、小型無脊椎動物や藻類なども利用するため、比較的幅広い環境に生息できます。"
      }
    ],
    bodyLength: "最大で全長約13cm。",
    distribution: "南日本からインド・太平洋の熱帯海域に広く分布します。",
    habitat: "サンゴ礁、礁湖、岩礁などの浅場に生息します。",
    diet: "サンゴのポリプ、小型底生無脊椎動物、藻類などを食べます。",
    features: "黄白色の体全体に小さな暗色点が並び、眼には黒帯が通ります。",
    behavior: "単独またはペアで浅いサンゴ礁を泳ぎ、岩やサンゴを細かくついばみます。",
    reproduction: "繁殖時にはペアを形成し、海中へ浮遊卵を放出します。",
    identification: "体側全体の細かな黒点が最も分かりやすい特徴です。",
    nameOrigin: "体に散らばる黒い小斑点をゴマに見立てた名称です。",
    humanRelation: "小型で鮮やかなチョウチョウウオとして観賞魚・水族館展示で知られます。",
    observationPoint: "近くで見ると、体の点がランダムではなく鱗に沿って並んでいることが分かります。",
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
        text: "体の後上部に大きな黒色域があり、英名Saddle butterflyfishのsaddle＝鞍もこの模様を表します。"
      },
      {
        title: "成魚では背びれが長く伸びる",
        text: "成熟した個体では背びれ後方の軟条が糸状に伸び、体の輪郭がさらに特徴的になります。"
      }
    ],
    bodyLength: "最大で全長約30cm。",
    distribution: "南日本からインド・太平洋の熱帯サンゴ礁域に広く分布します。",
    habitat: "浅いサンゴ礁や岩礁、礁湖に生息します。",
    diet: "小型底生動物、サンゴのポリプ、藻類などを食べる雑食性です。",
    features: "黄白色の体の後上部に非常に大きな黒色斑があり、尾部は黄色、腹側には青色線も見られます。",
    behavior: "単独またはペアで岩礁を泳ぎ、岩面をついばみながら餌を探します。",
    reproduction: "繁殖時にはペアを形成し、浮遊卵を海中へ放出します。",
    identification: "体後上部の巨大な黒色斑を確認すれば、他のチョウチョウウオ類と見分けやすい種です。",
    nameOrigin: "背中の大きな黒色部分から『背黒』チョウチョウウオと呼ばれます。",
    humanRelation: "大型で色彩の美しいチョウチョウウオとして水族館展示に適しています。",
    observationPoint: "大きな黒斑だけでなく、成魚ではその上から伸びる背びれの細長い部分も見てください。",
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
        text: "夜には体全体が暗くなり、背側に白い斑が現れるなど昼間とは大きく異なる体色になります。"
      },
      {
        title: "幼魚の背びれには眼状斑がない",
        text: "よく似た種類の幼魚では背びれに黒い眼状斑が現れる場合がありますが、本種では見られません。"
      }
    ],
    bodyLength: "最大で全長約18〜20cm。",
    distribution: "南日本からインド・西太平洋のサンゴ礁域に広く分布します。",
    habitat: "浅いサンゴ礁や岩礁に生息します。",
    diet: "サンゴのポリプ、小型付着生物、藻類などを利用します。",
    features: "白色から淡黄色の体側に多数の斜めの黒線が並び、背側は黄色から黒色を帯びます。眼を通る黒帯があります。",
    behavior: "昼間はサンゴ礁を泳ぎながら餌を探し、夜になると休息時の暗い体色へ変化します。",
    reproduction: "卵生で、繁殖時には雌雄が海中へ放卵・放精します。",
    identification: "体側の斜線と、幼魚でも背びれに大きな黒い眼状斑がない点が特徴です。",
    nameOrigin: "体の黄色や黒色のグラデーションを夜明けの空に見立てたという説明がありますが、確定的な語源としては断定しません。",
    humanRelation: "ダイビングや水族館で観察される代表的なチョウチョウウオ類です。",
    observationPoint: "昼間の模様を覚えておくと、消灯前後で体色が変化した際に違いを観察できます。",
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
        text: "古い資料ではChaetodon rafflesiと書かれることがありますが、現在の受理名はiが2つのChaetodon rafflesiiです。"
      },
      {
        title: "体全体が網目模様",
        text: "黄色い体の鱗に沿って暗色線が並び、細かな網目のような模様を作ります。"
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
    humanRelation: "鮮やかな色彩を持つため、海水観賞魚・水族館展示で知られています。",
    observationPoint: "少し離れると黄色一色に見えますが、近くでは非常に細かな網目模様が見えます。",
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
        text: "サンゴのポリプだけでなく、小型底生動物や藻類、プランクトンなども利用できるため、幅広い環境に適応します。"
      },
      {
        title: "大きな群れになることがある",
        text: "単独やペアだけでなく、多数の個体が集まって中層を泳ぐ姿も見られます。"
      }
    ],
    bodyLength: "最大で全長約15cm。",
    distribution: "南日本からインド・太平洋の熱帯・亜熱帯海域に広く分布します。",
    habitat: "サンゴ礁、岩礁、礁湖などに生息します。",
    diet: "サンゴのポリプ、小型底生動物、藻類、動物プランクトンなどを利用します。",
    features: "淡黄色の体を持ち、体前半部は白っぽく、眼には暗色帯が通ります。",
    behavior: "単独、ペア、群れなどさまざまな形で行動し、サンゴ礁上を活発に泳ぎます。",
    reproduction: "卵生で、繁殖時には雌雄が放卵・放精します。",
    identification: "体前半の白い部分と黄色い後半部、眼を通る帯を確認します。",
    nameOrigin: "白っぽい細かな色彩がみぞれを思わせることが和名に関係すると考えられます。",
    humanRelation: "比較的丈夫なチョウチョウウオとして水族館や観賞魚飼育でも知られています。",
    observationPoint: "LABO10の他のチョウチョウウオと比べ、模様が比較的シンプルであることに注目してください。",
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
        text: "成魚は名前通り黄色から山吹色の体を持ち、サンゴ礁の中でも非常に目立ちます。"
      },
      {
        title: "オスが卵を守る",
        text: "スズメダイ類らしく付着卵を産み、産卵後はオスが卵の近くに残って保護します。"
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
    nameOrigin: "日本の伝統色である山吹色のような鮮やかな黄色い体色に由来します。",
    humanRelation: "サンゴ礁水槽の色彩を彩る魚として水族館・観賞魚で人気があります。",
    observationPoint: "黄色い体だけでなく、どの高さを泳いでいるかにも注目してください。底より少し上で餌を待っています。",
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
        text: "従来はタカサゴ科Caesionidaeとして扱われてきましたが、現在の系統分類ではフエダイ科Lutjanidaeのタカサゴ亜科Caesioninaeに置かれる体系が採用されています。"
      },
      {
        title: "沖縄の『グルクン』",
        text: "沖縄ではタカサゴ類をグルクンと呼び、唐揚げなどで親しまれる非常に身近な食用魚です。"
      }
    ],
    bodyLength: "最大で全長約30cm。",
    distribution: "南日本から中・西部太平洋の熱帯域に分布します。",
    habitat: "サンゴ礁の外縁や潮通しの良い場所の中層で大きな群れを形成します。",
    diet: "主に動物プランクトンを捕食します。",
    features: "青緑色の細長い体に2本の黄色い縦線が入り、尾びれ上下葉の先端は黒くなります。",
    behavior: "高速でまとまった群れを形成し、サンゴ礁上の中層で流れてくるプランクトンを捕食します。",
    reproduction: "浮遊卵を産み、卵や仔魚は海中を漂って成長します。",
    identification: "2本の黄色線と尾びれ先端の黒色部を確認します。ニセタカサゴとは黄色線と側線の位置関係が識別点です。",
    nameOrigin: "標準和名の詳しい語源について主要資料では確定できないため断定しません。",
    humanRelation: "沖縄県を代表する食用魚の一つで、グルクンの名で広く親しまれています。",
    observationPoint: "1匹だけでなく群れ全体を見てください。同じ方向へ一斉に方向転換する姿が見どころです。",
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
        text: "体は青灰色から桃色を帯びますが、尾柄から尾びれ、背側の一部が鮮やかな黄色になります。"
      },
      {
        title: "大きな群れで泳ぐプランクトン食者",
        text: "サンゴ礁上の中層を大群で高速遊泳し、流れてくる動物プランクトンを捕食します。"
      }
    ],
    bodyLength: "最大で全長約60cmとされますが、一般には30cm前後の個体が多く見られます。",
    distribution: "琉球列島・小笠原諸島からインド・西太平洋の熱帯域に広く分布します。",
    habitat: "サンゴ礁や岩礁外縁の中層に群れで生息します。",
    diet: "主に動物プランクトンを捕食します。",
    features: "青灰色から桃色の体を持ち、尾柄・尾びれと背側の一部が鮮やかな黄色になります。",
    behavior: "大きな群れで中層を泳ぎ、潮流に乗って運ばれるプランクトンを捕食します。",
    reproduction: "浮遊卵を海中へ放出し、仔魚は浮遊生活を送ります。",
    identification: "黄色い尾部と、体の下側に赤みが出る色彩が特徴です。",
    nameOrigin: "標準和名の詳しい由来には諸説があり、この図鑑では断定しません。",
    humanRelation: "南西諸島で漁獲され、食用魚として利用されます。",
    observationPoint: "タカサゴと並べて尾の色や体側の線を比較すると、タカサゴ類の違いが分かります。",
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
        text: "以前はインド太平洋のイロブダイをCetoscarus bicolorとする資料が多くありましたが、現在C. bicolorは紅海周辺の種とされ、日本を含むインド・西太平洋の個体はC. ocellatusです。"
      },
      {
        title: "幼魚・メス・オスで全部違う色",
        text: "幼魚は白と橙色、雌型は赤褐色、雄型は鮮やかな青緑色となり、成長と性によって別種のように姿が変化します。"
      }
    ],
    bodyLength: "最大で全長約80cm。",
    distribution: "伊豆諸島、紀伊半島以南からインド・中西部太平洋に分布します。",
    habitat: "浅いサンゴ礁や岩礁に生息します。",
    diet: "主に死サンゴや岩の表面に生える藻類を歯板で削り取って食べます。",
    features: "歯が融合して鳥のくちばしのような歯板を形成します。雄は青緑色、雌は赤褐色、幼魚は白と橙色という大きな色彩変化があります。",
    behavior: "サンゴ礁表面を泳ぎ回り、歯板で岩や死サンゴの表面を削りながら藻類を食べます。",
    reproduction: "雌性先熟型を含む複雑な性構造を持つブダイ類で、繁殖時には雌雄が中層へ泳ぎ上がって放卵・放精します。",
    identification: "幼魚では白い体と橙色の頭部、背びれの黒斑が特徴です。成魚では性による色彩差が非常に大きくなります。",
    nameOrigin: "成長や性に応じて非常に多彩な色彩を示すことが『イロブダイ』という名前に関係します。",
    humanRelation: "サンゴ礁の藻類を食べる重要な植食魚で、藻類の過剰繁茂を抑える生態学的役割を持ちます。",
    observationPoint: "幼魚・雌・雄が同じ水槽にいれば必ず見比べてください。同じ種とは思えないほど色が異なります。",
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
        text: "雌型は黄色を基調に青い帯が入り、雄型では青緑色と桃色の鮮やかな模様になります。"
      },
      {
        title: "サンゴ礁の表面を削って食べる",
        text: "くちばし状の歯板で岩やサンゴ表面の藻類を削り取ります。細かく砕かれた石灰質は砂として排出されることもあります。"
      }
    ],
    bodyLength: "大型では全長80〜90cm程度になります。",
    distribution: "駿河湾以南の日本からインド・太平洋に広く分布します。",
    habitat: "サンゴ礁、岩礁、海草藻場などに生息します。",
    diet: "主に付着藻類などの植物質を食べます。",
    features: "歯が融合した強い歯板を持ちます。雌型では黄色味、雄型では青緑色が強く、性によって模様が変化します。",
    behavior: "昼間にサンゴ礁を広く泳ぎながら岩面の藻類を削り取ります。",
    reproduction: "ブダイ類らしく浮遊卵を放出します。性や色彩には複雑な変化があり、大型の雄型個体が繁殖に参加します。",
    identification: "黄色と青色の雌型、青緑色の雄型という色彩差と、くちばし状の歯を確認します。",
    nameOrigin: "雄型の鮮やかな緋色・青緑色を含む色彩が名称に関係するとされています。",
    humanRelation: "食用になるほか、サンゴ礁の藻類量を調整する植食魚として生態系上重要です。",
    observationPoint: "口元を見てください。普通の魚の歯とは違い、歯がつながって板状になっています。",
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
        text: "下あごの2本のひげには味覚などに関わる感覚器があり、砂や岩の隙間にいる餌を探すために使います。"
      },
      {
        title: "オキナヒメジとそっくり",
        text: "非常によく似ますが、ホウライヒメジでは尾柄の黒い鞍状斑が側線より下まで広がることが重要な識別点です。"
      }
    ],
    bodyLength: "最大で全長約40cm。",
    distribution: "千葉県以南を中心とする日本沿岸からインド・太平洋に広く分布します。",
    habitat: "浅い岩礁、サンゴ礁、砂礫底などに生息し、大型個体はやや深い場所でも見られます。",
    diet: "ゴカイ類やエビ・カニなどの甲殻類を中心に食べます。",
    features: "桃色から褐色の体を持ち、尾柄には白色部と黒色の鞍状斑があります。下あごには2本の長いひげがあります。",
    behavior: "海底にひげを触れさせながら泳ぎ、砂中の小動物を探します。岩の上などで群れたまま休むこともあります。",
    reproduction: "卵生で、放卵・放精された卵は浮遊します。本種固有の詳細な産卵期については一律には断定しません。",
    identification: "尾柄の黒色斑が側線を越えて下側まで広がるかを確認すると、オキナヒメジとの識別に役立ちます。",
    nameOrigin: "標準和名の詳しい語源は主要資料から確定できないため断定しません。",
    humanRelation: "釣りや沿岸漁業で漁獲され、食用にも利用されます。",
    observationPoint: "泳いでいるときより海底へ近づいた瞬間に注目してください。2本のひげが左右別々に動く様子が見られます。",
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
        text: "生時は白色から淡黄色の体に黄色い縦線とひれを持ちますが、死後に赤みが強くなることが和名『アカヒメジ』につながったとされています。"
      },
      {
        title: "昼は大群で休む",
        text: "昼間はサンゴ礁付近で大きな群れを作って休み、餌を取るときには海底で2本のひげを使います。"
      }
    ],
    bodyLength: "最大で全長約38〜40cm。",
    distribution: "房総半島以南の日本からインド・太平洋の熱帯域に広く分布します。",
    habitat: "サンゴ礁、礁湖、砂地、サンゴ礁外縁などに生息します。",
    diet: "エビ・カニなどの甲殻類、ゴカイ類などの底生無脊椎動物を食べます。",
    features: "生きている個体は白色から淡黄色で、体側に黄色い縦線が入り、尾びれ・背びれも黄色くなります。下あごには2本のひげがあります。",
    behavior: "日中はまとまった群れで休息し、餌を取る際には海底近くへ移動してひげで餌を探します。",
    reproduction: "卵生で、海中へ放出された卵は浮遊します。",
    identification: "黄色いひれと体側の黄色い縦線、下あごの2本のひげが特徴です。",
    nameOrigin: "生時よりも死後に赤色が強く現れることからアカヒメジと呼ばれるとされています。",
    humanRelation: "各地で食用にされるほか、大群をつくるためサンゴ礁水槽でも存在感のある展示魚です。",
    observationPoint: "『アカ』という名前なのに、生きている個体が何色に見えるか確認してください。",
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
        text: "日本では長くPseudanthias squamipinnisとして扱われてきましたが、2026年版Eschmeyer's Catalog of Fishesでは西太平洋個体群をPseudanthias cheirospilosとして独立させ、日本もこの種の分布域に含めています。"
      },
      {
        title: "群れからオスが消えるとメスがオスへ",
        text: "雌性先熟型で、通常は1匹のオスと複数のメスからなる群れを作ります。オスがいなくなると大型のメスが性転換してオスになります。"
      }
    ],
    bodyLength: "最大で全長約15cm。",
    distribution: "2026年版Catalog of Fishesでは、西インドネシアから西太平洋、南韓国・日本中部付近まで分布するとされています。",
    habitat: "サンゴ礁や岩礁の潮通しの良い斜面で、海底から少し離れた中層に大群を形成します。",
    diet: "主に動物プランクトンを捕食します。",
    features: "メスは鮮やかな橙色を基調とし、オスは大型で赤紫色が強くなります。性によって模様とひれの形も変化します。",
    behavior: "多数のメスと少数のオスからなる群れを形成し、岩礁上へ泳ぎ出して流れてくるプランクトンを捕食します。",
    reproduction: "雌性先熟型で、社会順位の高いメスがオスへ性転換できます。夕方などに雌雄が中層へ上昇しながら放卵・放精します。",
    identification: "雌雄の色彩差が大きいことに注意します。最新分類では日本・西太平洋産をP. cheirospilosとする扱いがありますが、WoRMS・BISMaL・国内図鑑にはP. squamipinnis表記が現在も広く残っています。",
    nameOrigin: "小型で鮮やかな橙色のメスが、水中を泳ぐ金魚を思わせることが和名に関係します。",
    humanRelation: "伊豆などのダイビングで非常に人気の高い群泳魚で、水族館や観賞魚としても知られます。",
    observationPoint: "群れの中で最も大きく色の違う個体を探してください。オスと多数のメスからなる社会構造を目で確認できます。",
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
        text: "テングハギ属ですが、成魚になっても額に長い角状突起を作りません。名前だけで角があると思うと意外な魚です。"
      },
      {
        title: "尾の付け根には鋭い『メス』",
        text: "尾柄の左右には2枚ずつ鋭い骨質板があり、黄色から橙色に目立ちます。ニザダイ類を英語でsurgeonfishと呼ぶ理由にもつながる構造です。"
      }
    ],
    bodyLength: "最大で標準体長約46cm。",
    distribution: "日本の本州南部からオーストラリア、ニューカレドニア、ハワイ、フランス領ポリネシアなど太平洋の熱帯・亜熱帯域に広く分布します。",
    habitat: "サンゴ礁や岩礁、礁湖、礁斜面などに生息します。",
    diet: "ホンダワラ類やDictyota属などの大型褐藻を中心に食べる植食性です。",
    features: "灰褐色から青灰色の体を持ち、口周辺には橙色・黄色が入ります。尾柄の左右には鮮やかな橙黄色の鋭い骨質板があります。",
    behavior: "成魚は単独または小群で岩礁域を泳ぎ、岩面や海藻をついばみます。大きな群れになる場合もあります。",
    reproduction: "雌雄がペアになって海中へ上昇し、放卵・放精する行動が観察されています。",
    identification: "額に角がないこと、口周辺の橙色、尾柄の橙黄色の骨質板が重要です。",
    nameOrigin: "標準和名の詳しい命名由来については主要資料から確定できないため断定しません。",
    humanRelation: "海水観賞魚として人気があります。岩礁の藻類を食べる大型植食魚として生態系上も重要です。",
    observationPoint: "尾の付け根をよく見てください。黄色い部分の中に鋭い骨質板があることが分かります。",
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
        text: "名前はアカモンガラですが、体は青紫色から紺色です。成魚では口の中の歯が赤色になり、英名もRed-toothed triggerfishです。"
      },
      {
        title: "モンガラカワハギなのに中層を群泳する",
        text: "海底付近で単独生活するモンガラカワハギ類も多い中、本種は潮通しのよい礁斜面の中層で大きな群れを作ります。"
      }
    ],
    bodyLength: "最大で全長約50cm。一般には30cm前後です。",
    distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋までインド・太平洋に広く分布します。",
    habitat: "潮流の強いサンゴ礁外縁や礁斜面に生息し、水深5〜110m程度から記録されています。",
    diet: "主に動物プランクトンを捕食し、カイメン類などを食べることもあります。",
    features: "青色から青紫色の体と深く二叉した尾びれ、赤色の歯が特徴です。",
    behavior: "礁斜面の中層で大きな群れを形成し、潮に流れてくるプランクトンを活発に捕食します。",
    reproduction: "卵生です。本種固有の詳しい繁殖行動については、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "青紫色の体、長く二叉した尾びれ、成魚の赤い歯を確認します。",
    nameOrigin: "赤く見える歯が標準和名に関係すると考えられます。",
    humanRelation: "観賞魚として流通するほか、地域によって食用にも利用されます。",
    observationPoint: "群れ全体を見た後、近くを通った個体の口元を見てください。赤い歯が確認できることがあります。",
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
        text: "体表の長い棘は普段は体に沿って寝ています。危険を感じて水を飲み込み体を膨らませると、棘が外側へ立ち上がります。"
      },
      {
        title: "針は本当に1000本ではない",
        text: "『千本』は非常に多いことを表す名前で、実際に1000本の棘を持つわけではありません。"
      }
    ],
    bodyLength: "最大で全長約50cm。",
    distribution: "世界の熱帯・亜熱帯海域に広く分布し、日本でも本州中部以南などで見られます。",
    habitat: "サンゴ礁、岩礁、砂地、海草藻場など沿岸の浅い海に生息します。",
    diet: "貝類、甲殻類、ウニ類など硬い殻を持つ底生動物を強い歯板で砕いて食べます。",
    features: "丸みのある体を長い棘が覆い、上下の顎には強い歯板があります。体には褐色斑が入ります。",
    behavior: "通常はゆっくり泳ぎ、危険を感じると水を大量に飲み込んで球状に膨らみます。",
    reproduction: "卵生で、卵は海中へ放出されます。仔魚は浮遊生活を送ります。",
    identification: "非常に長い可動性の棘と、眼周辺や体側の褐色斑を確認します。",
    nameOrigin: "全身に非常に多くの針状の棘を持つ姿から「ハリセンボン」と呼ばれます。",
    humanRelation: "沖縄などでは食用になることがありますが、フグ類・ハリセンボン類は種類や部位による毒性の違いがあるため、自己判断での調理は行うべきではありません。",
    observationPoint: "普段の棘がどの方向へ寝ているかを見てください。無理に膨らませることなく、通常時の構造を観察するのがおすすめです。",
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
        text: "雄性先熟型の性転換を行い、群れで最も大きな個体がメス、その次に大きな個体が繁殖可能なオスになります。メスがいなくなるとオスがメスへ性転換します。"
      },
      {
        title: "主な相手はタマイタダキイソギンチャク",
        text: "ハマクマノミは特にタマイタダキイソギンチャクEntacmaea quadricolorとの共生で知られています。"
      }
    ],
    bodyLength: "最大で全長約14cm。",
    distribution: "タイ湾から南日本、パラオ、インドネシアのジャワ島周辺まで西太平洋に分布します。",
    habitat: "浅いサンゴ礁や内湾で、宿主となるイソギンチャクの周辺に生活します。",
    diet: "動物プランクトン、小型甲殻類、藻類などを食べる雑食性です。",
    features: "赤橙色の体に、頭の後方を通る1本の白色横帯があります。大型個体では体側が黒褐色になることがあります。",
    behavior: "宿主イソギンチャクから大きく離れず生活し、縄張りへ近づく魚を追い払うことがあります。",
    reproduction: "雄性先熟型です。卵はイソギンチャク近くの岩などへ産み付けられ、オスが卵を守り、ひれで水を送ります。",
    identification: "成魚では頭の後ろに1本だけある白帯が分かりやすい特徴です。",
    nameOrigin: "標準和名の詳しい命名原典については主要資料から確定できないため断定しません。",
    humanRelation: "クマノミ類として水族館・観賞魚で人気があり、性転換やイソギンチャクとの共生を説明する代表種です。",
    observationPoint: "イソギンチャクから何cm程度離れて泳ぐかを観察してください。危険を感じるとすぐ触手の中へ戻ります。",
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
        text: "歩脚は青色を基調とし、黒い帯が入り、非常に派手な色彩をしています。サンゴ礁のヤドカリの中でも目立つ種類です。"
      },
      {
        title: "自分で殻を作ることはできない",
        text: "巻貝の空き殻を利用し、成長して殻が狭くなるとより大きな空き殻へ引っ越します。"
      }
    ],
    bodyLength: "本体は数cm程度の小型のヤドカリです。利用する巻貝の殻によって見かけの大きさは変わります。",
    distribution: "インド・太平洋の熱帯域に広く分布し、日本では琉球列島、小笠原諸島などから記録されています。",
    habitat: "潮間帯から水深10m程度の岩礁、サンゴ礁、転石帯などに生息します。",
    diet: "藻類、デトリタス、小さな有機物などさまざまな餌を利用する雑食性です。",
    features: "鮮やかな青色の歩脚に黒い帯が入り、触角や脚先にも強い色彩があります。ヤドカリ科らしく左側のはさみが比較的大きくなります。",
    behavior: "昼間は岩陰などに隠れ、夜間に活発に餌を探すことがあります。",
    reproduction: "雌雄は別個体で、メスは受精卵を腹部に抱えて保護します。ふ化した幼生は浮遊生活を送ります。",
    identification: "青い脚と黒い輪状帯が非常に特徴的です。",
    nameOrigin: "歩脚に入る輪状模様を指輪に見立てたことが標準和名に関係します。",
    humanRelation: "美しい体色から海水観賞用のヤドカリとして流通します。",
    observationPoint: "宿貝だけを見るのではなく、殻から出ている脚の青と黒の模様を観察してください。",
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
        text: "非常に細長い体を持ち、SeaLifeBaseでは最大全長約2mが記録されています。ナマコ類としては非常に長大です。"
      },
      {
        title: "普通のナマコにある管足がない",
        text: "無足目に属し、マナマコのような発達した管足を持ちません。体壁にある錨形の微小骨片を使って海底や物体へ引っ掛かります。"
      }
    ],
    bodyLength: "最大で全長約200cm。",
    distribution: "ハワイ諸島を除くインド・西太平洋の熱帯浅海域に広く分布します。",
    habitat: "浅い砂地、海草藻場、サンゴ礁の転石下などに生息します。",
    diet: "口の周囲の触手を使い、海底表面の有機物や堆積物を集めて食べます。",
    features: "非常に細長く柔らかい体を持ち、口周囲には枝分かれした触手があります。管足はありません。",
    behavior: "海底を這いながら触手を広げ、表面の有機物を集めます。体を非常に長く伸ばすことができます。",
    reproduction: "本種固有の詳細な繁殖周期について十分な資料がないため、一律の時期は記載しません。",
    identification: "極端に細長い体と管足がないこと、口周囲の大きな触手が特徴です。",
    nameOrigin: "体壁に錨のような形の微小骨片を持つイカリナマコ類の大型種であることが和名に表れています。",
    humanRelation: "一般的な食用ナマコではありませんが、無足目ナマコの独特な体構造を観察できる種類です。",
    observationPoint: "口周辺の触手に注目してください。1本ずつ海底へ触れ、餌を口へ運ぶ動きを観察できます。",
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
        text: "食用として『海ぶどう』の名前で流通している海藻がクビレズタです。球形の小枝がブドウの房のように並びます。"
      },
      {
        title: "体全体が巨大な1つの細胞",
        text: "イワズタ属は細胞を区切る壁がほとんどない多核体で、複雑な形をしていても大部分が1つの巨大な細胞としてつながっています。"
      }
    ],
    bodyLength: "直立する枝は数cm〜十数cm程度になりますが、海底を這う匍匐枝は広い範囲へ伸びます。",
    distribution: "日本では主に沖縄など南西諸島に分布し、インド・西太平洋の熱帯域に広く見られます。",
    habitat: "水深1〜15m程度の浅い砂地やサンゴ礁周辺で海底を這うように生育します。",
    diet: "海藻なので餌を食べず、光合成によって有機物を作ります。海水中の窒素・リンなどの栄養塩も利用します。",
    features: "細い匍匐枝から直立枝が伸び、その表面に小さな球状の小枝が多数並びます。",
    behavior: "植物ではなく緑藻ですが、匍匐枝を伸ばしながら海底に広がり、切れた断片から増えることもあります。",
    reproduction: "栄養繁殖に加え、有性生殖も行います。養殖では主に藻体を分けて増殖させます。",
    identification: "ブドウの房のように小さな緑色の球体が並ぶことが非常に特徴的です。",
    nameOrigin: "直立枝の軸が小枝の間でくびれて見えることからクビレズタと呼ばれます。",
    humanRelation: "沖縄を代表する養殖海藻の一つで、『海ぶどう』として生食されます。",
    observationPoint: "一粒ずつが独立した実ではなく、すべてつながった藻体の一部であることを意識して見てください。",
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
        text: "非常によく似ますが、フエヤッコダイはForcipiger flavissimus、ハシナガチョウチョウウオはF. longirostrisです。"
      },
      {
        title: "ウニの管足まで食べる",
        text: "長い吻で岩の隙間を探り、小型甲殻類やゴカイだけでなく、ウニの管足や叉棘なども食べます。"
      }
    ],
    bodyLength: "最大で全長約22cm。",
    distribution: "紅海・東アフリカから南日本、ハワイ、イースター島、東部太平洋まで熱帯インド・太平洋に広く分布します。",
    habitat: "サンゴ礁外縁や礁湖などに生息し、水深0〜145m程度まで記録されています。",
    diet: "ヒドロ虫、魚卵、小型甲殻類、ゴカイの触手、ウニの管足や叉棘などを食べます。",
    features: "黄色い体、白い頭部下側、黒色の頭頂部、細長い吻が特徴です。尻びれ付近には黒い斑紋があります。",
    behavior: "単独や小群でも見られますが、成魚はペアで行動することが多く、岩やサンゴの隙間から餌を取ります。",
    reproduction: "卵生で、繁殖時にはペアを形成します。一夫一妻的なペア関係が知られています。",
    identification: "ハシナガチョウチョウウオより吻が短く口が大きく、背びれ棘は12〜13本です。胸部に小黒点列はありません。",
    nameOrigin: "細長い吻が笛のように見えることが標準和名に関係します。",
    humanRelation: "観賞魚として広く流通するチョウチョウウオ類です。",
    observationPoint: "同じLABO10のハシナガチョウチョウウオと並べ、吻の長さと胸部の模様を比較してください。",
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
        text: "白い体に頭部・体中央・尾柄付近を通る3本の黒い帯が入り、小型でも非常に目立ちます。"
      },
      {
        title: "枝サンゴが天然のシェルター",
        text: "ミドリイシ類など枝状サンゴの上に群れを作り、危険を感じると一斉に細い枝の隙間へ逃げ込みます。"
      }
    ],
    bodyLength: "最大で全長約10cm。",
    distribution: "南日本から中央太平洋まで、西・中部太平洋の熱帯サンゴ礁域に分布します。",
    habitat: "浅い礁湖や礁原で、枝状ミドリイシ類などのサンゴ周辺に群れで生息します。",
    diet: "動物プランクトン、底生無脊椎動物、藻類などを食べます。",
    features: "白い体を3本の黒い帯が縦断し、腹びれは黒色です。",
    behavior: "群れでサンゴ上を泳ぎ、危険時には一斉にサンゴの隙間へ隠れます。縄張り性もあります。",
    reproduction: "卵生で、オスが産卵場所へメスを誘い、基質へ産まれた卵をふ化まで守ります。卵は約3〜5日でふ化する記録があります。",
    identification: "白地に3本の太い黒帯という非常に明瞭な模様で識別できます。",
    nameOrigin: "3本の黒い筋を持つリュウキュウスズメダイ類であることが和名に表れています。",
    humanRelation: "サンゴ礁水槽でよく飼育され、魚と枝状サンゴの関係を観察しやすい種です。",
    observationPoint: "群れへ他の魚が近づいた瞬間を見てください。全個体が一斉にサンゴへ隠れることがあります。",
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
        text: "古い資料ではウミトサカ目Alcyonaceaとして掲載されますが、現在BISMaLではMalacalcyonacea・Sarcophytidaeに分類されています。"
      },
      {
        title: "大きな群体でも多数の小さな個体の集合",
        text: "キノコのような大きな体は1匹ではなく、表面に並ぶ多数の小さなポリプが共同で作った群体です。"
      }
    ],
    bodyLength: "群体サイズは環境や年齢によって大きく変化し、数十cm規模の大型群体になります。",
    distribution: "日本の暖海域を含むインド・西太平洋のサンゴ礁域に広く分布します。",
    habitat: "浅いサンゴ礁や岩礁に固着して生活します。",
    diet: "ポリプでプランクトンや有機物を捕らえるほか、共生する褐虫藻の光合成産物も利用します。",
    features: "太い柄の先に幅広い傘状部分があり、表面には多数のポリプが並びます。触ると革のような質感を持つことから英語ではleather coralと呼ばれます。",
    behavior: "岩へ固着し、ポリプを開いて餌を捕らえます。刺激や環境変化で全ポリプを一斉に縮めることがあります。",
    reproduction: "雌雄別体です。紅海での研究では年1回の非常に同期した放卵・放精が観察され、卵形成には約2年かかることが示されています。",
    identification: "キノコ状の大きな群体と、その表面を覆う多数の小さなポリプが特徴です。",
    nameOrigin: "キノコの傘を思わせる群体形からウミキノコと呼ばれ、その中でも大型になる種類です。",
    humanRelation: "海水水槽で広く飼育されるソフトコーラルの一つです。",
    observationPoint: "遠くから全体のキノコ形を見た後、近くで表面の1個1個のポリプを探してください。",
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
        text: "青・緑・橙色の複雑な模様を持ち、体長わずか数cmながらサンゴ礁魚の中でも特に派手な種類です。"
      },
      {
        title: "夕方にペアで『空中ダンス』",
        text: "繁殖時には雌雄が体を寄せ合い、海底から水面方向へ一緒に上昇して、途中で卵と精子を放出します。"
      }
    ],
    bodyLength: "最大で全長約7cm。",
    distribution: "琉球列島からオーストラリアなど西太平洋に分布します。",
    habitat: "水深1〜18m程度の穏やかな礁湖や内湾で、サンゴ礫・砂泥が混じる場所に生息します。",
    diet: "カイアシ類、ヨコエビ類など非常に小さな底生甲殻類を中心に食べます。",
    features: "青色から緑色の体に橙色の曲線模様が複雑に入り、オスでは第一背びれが長く伸びます。",
    behavior: "海底近くをゆっくり移動しながら、サンゴ礫の間の小動物をついばみます。",
    reproduction: "夕方を中心に雌雄がペアとなり、体を密着させて水中へ上昇しながら放卵・放精します。",
    identification: "青・緑・橙色の複雑な模様は非常に特徴的です。オスでは第一背びれが長く伸びます。",
    nameOrigin: "錦の織物のように鮮やかな色彩と、テグリ類の体形を持つことから名付けられています。",
    humanRelation: "世界的に人気の高い海水観賞魚ですが、自然下では非常に小さな餌を継続的に食べる魚です。",
    observationPoint: "泳ぎ回る魚を探すより、サンゴ礫のすき間を見てください。海底すれすれをゆっくり移動しています。",
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
        text: "左右の小さなはさみ脚にイソギンチャクを保持し、ボクサーがグローブを構えるような姿になります。"
      },
      {
        title: "イソギンチャクを武器にも食事にも利用",
        text: "危険時には刺胞を持つイソギンチャクを相手へ向けます。またイソギンチャクが捕らえた餌を利用することもあります。"
      }
    ],
    bodyLength: "甲幅1〜2cm程度の非常に小型のカニです。",
    distribution: "南日本を含むインド・太平洋の熱帯サンゴ礁域に分布します。",
    habitat: "浅いサンゴ礁や岩礁の石の下、サンゴ片の間などに生息します。",
    diet: "小型の有機物や動物質を食べ、保持しているイソギンチャクが捕らえた餌を利用することもあります。",
    features: "小型の甲に細長い脚を持ち、左右のはさみ脚には小型イソギンチャクを保持します。",
    behavior: "両方のはさみを持ち上げ、イソギンチャクを振るような行動を行います。",
    reproduction: "雌は受精卵を腹部に抱えて保護し、ふ化後の幼生は海中を漂います。",
    identification: "左右のはさみにイソギンチャクを持っている姿が最大の特徴です。",
    nameOrigin: "左右に持つイソギンチャクが小さな巾着袋のように見えることが和名に関係します。",
    humanRelation: "非常に特徴的な共生行動から、水族館やダイビングで人気のある小型甲殻類です。",
    observationPoint: "イソギンチャクそのものだけでなく、カニが左右を別々に動かしている様子を観察してください。",
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
        text: "幼い時期には小さな柄で岩などへ付着しますが、成長するとその部分から離れ、海底に自由に置かれた状態で生活します。"
      },
      {
        title: "1枚の円盤が基本的に1個体",
        text: "多くのサンゴが多数のポリプからなる群体なのに対し、クサビライシの成体は基本的に大型の1ポリプです。"
      }
    ],
    bodyLength: "直径10〜30cm程度の円盤状になります。",
    distribution: "南日本を含むインド・西太平洋のサンゴ礁域に広く分布します。",
    habitat: "浅いサンゴ礁の砂礫底や礁原などで自由生活します。",
    diet: "共生する褐虫藻の光合成産物を利用するほか、触手でプランクトンや有機物を捕らえます。",
    features: "円形から楕円形の硬い骨格を持ち、中央に細長い口があります。骨格表面には中心から外側へ多数の隔壁が放射状に並びます。",
    behavior: "完全に固定されておらず、膨張や収縮を利用してわずかに位置を変えたり、砂に埋もれた状態から抜け出したりできます。",
    reproduction: "有性生殖に加えて無性的な出芽も知られます。幼体は柄で基質に付着した後、成長して離れます。",
    identification: "単独で海底に置かれた円盤状の硬いサンゴで、中央に一本の長い口があることが特徴です。",
    nameOrigin: "キノコの傘のような円盤状の形を持つことから、英名でもmushroom coralと呼ばれます。",
    humanRelation: "サンゴの中でも群体ではなく単体で自由生活するという特殊な生活様式を学べる種類です。",
    observationPoint: "中央の口から外側へ伸びる放射状の骨格模様を観察してください。",
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
        text: "典型的な色彩型では体の前半が濃褐色から黒色、後半が黄色から橙色になります。"
      },
      {
        title: "穴から顔だけ出していることが多い",
        text: "サンゴや岩の小さな穴を隠れ家にし、頭だけを外へ出して周囲を見る独特の姿がよく観察されます。"
      }
    ],
    bodyLength: "最大で全長約11cm。",
    distribution: "南日本からインド・西太平洋のサンゴ礁域に広く分布します。",
    habitat: "浅いサンゴ礁・岩礁の穴や割れ目周辺に生息します。",
    diet: "岩やサンゴ表面の藻類を中心に食べます。",
    features: "細長い体を持ち、代表的な色彩型では前半が黒褐色、後半が黄橙色です。ただし色彩変異があります。",
    behavior: "小穴を縄張り・隠れ家として利用し、危険時には尾側から素早く穴へ入り込みます。",
    reproduction: "卵生です。イソギンポ科では基質の隙間などへ付着卵を産み、オスが卵を守る種類が多く知られています。",
    identification: "前後で大きく色が変わる典型型が分かりやすいですが、色彩変異があるため頭部や体形も確認します。",
    nameOrigin: "体が明瞭な2色に分かれて見えることからフタイロカエルウオと呼ばれます。",
    humanRelation: "小型で特徴的な色彩から海水観賞魚として人気があります。",
    observationPoint: "水槽全体を泳ぐ魚だけでなく、小さな穴から顔を出している個体を探してください。",
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
        text: "砂ごと口へ取り込み、その中にいる小型生物や有機物を選び取った後、不要な砂を鰓付近から排出します。"
      },
      {
        title: "夫婦で同じ巣穴を使う",
        text: "成魚はペアで生活し、砂地に作った浅い巣穴を隠れ家として共同で利用します。"
      }
    ],
    bodyLength: "最大で標準体長約20cm。",
    distribution: "紅海からサモア、北は南日本、南はグレートバリアリーフ・ニューカレドニアまでインド・太平洋に広く分布します。",
    habitat: "透明度の高い礁湖やサンゴ礁外縁の砂地に生息し、水深2〜84m程度から記録されています。",
    diet: "砂の中の小型甲殻類、多毛類、有機物などを砂ごと口へ入れて選別して食べます。",
    features: "淡い灰色の体に大きな橙色斑が一列に並び、頭部には青白色の線や斑点があります。",
    behavior: "ペアで砂地を生活場所とし、砂を繰り返し口へ入れて餌を探します。危険時には瓦礫の下などに作った巣穴へ逃げ込みます。",
    reproduction: "一夫一妻的なペア関係が知られます。繁殖でもペア関係を維持しますが、今回確認した主要資料では産卵周期などの詳細は断定しません。",
    identification: "淡色の体側に並ぶ大きな橙色斑と、頭部の青色系の模様が特徴です。",
    nameOrigin: "標準和名の詳しい命名由来について主要資料から確定できないため断定しません。",
    humanRelation: "砂をきれいに攪拌する行動から海水観賞魚として知られますが、自然下では砂底の小動物を食べる重要な底生魚です。",
    observationPoint: "口へ砂を入れた後、どこから砂を出すのか見てください。砂を選別するハゼ類独特の摂餌行動が分かります。",
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
        text: "南西諸島だけでなく、本州中部など比較的高緯度の海にも生息するミドリイシ類です。枝状群体をつくり、多くの小動物や魚の隠れ場所にもなります。"
      },
      {
        title: "1本の枝も多数の個体の集合",
        text: "枝全体が1匹のサンゴではありません。表面に並ぶ多数のポリプが骨格を共有して巨大な群体を作っています。"
      }
    ],
    bodyLength: "群体は数十cm以上に成長します。枝の太さや群体サイズは水流・光・成長段階によって大きく変化します。",
    distribution: "日本沿岸を中心とする北西太平洋に分布し、本州中部以南などから知られています。",
    habitat: "光の届く浅い岩礁域に固着し、比較的水流のある場所で枝状群体を形成します。",
    diet: "体内に共生する褐虫藻の光合成産物を利用するほか、ポリプの触手でプランクトンや有機物粒子を捕らえます。",
    features: "樹枝状に枝分かれする石灰質骨格を作ります。枝の先端には軸ポリプ、その周囲には多数の放射ポリプがあります。",
    behavior: "岩へ固着して動きませんが、ポリプは触手を伸縮させて餌を捕らえます。環境条件によって群体形状も変化します。",
    reproduction: "有性生殖では卵・精子を海中へ放出します。また、枝が折れて別の場所に定着する断片化によって無性的に増えることもあります。",
    identification: "Acropora属は非常に似た種類が多く、枝の形だけでの種同定は危険です。骨格形態やポリプ配置などを総合して判定します。",
    nameOrigin: "枝状に成長するミドリイシ類であることからエダミドリイシと呼ばれます。",
    humanRelation: "日本沿岸のサンゴ群集を構成する重要種です。高水温による白化など環境変化の影響を受けます。",
    observationPoint: "枝の先端と側面を見比べ、ポリプの形や配置が違うことに注目してください。",
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
        text: "IUCNは2025年10月、世界全体のアオウミガメをEndangeredからLeast Concernへ変更しました。1970年代以降、世界個体群が約28％増えたとされていますが、地域によっては依然として大きな脅威があります。"
      }
    ],
    bodyLength: "甲長1m前後になる大型のウミガメで、体重100kgを超える個体も珍しくありません。",
    distribution: "世界の熱帯・亜熱帯海域に広く分布し、日本では南日本を中心に回遊・摂餌します。",
    habitat: "幼体は外洋も利用し、成長すると沿岸の海草藻場、岩礁、サンゴ礁などを重要な餌場として利用します。",
    diet: "幼若期には動物質も利用しますが、成長すると海草や大型藻類を多く食べるようになります。",
    features: "丸みのある甲羅と比較的小さな頭を持ちます。前肢は長いフリッパー状で、海中での遊泳に適応しています。",
    behavior: "産卵場と餌場の間を数百〜数千km移動することがあります。肺呼吸のため定期的に水面へ浮上します。",
    reproduction: "メスは繁殖期に砂浜へ上陸し、後肢で穴を掘って多数の卵を産みます。同じ繁殖期に複数回産卵する場合があります。",
    identification: "頭部の前額板が通常1対であることなどが、アカウミガメとの識別に利用されます。",
    nameOrigin: "緑色を帯びる脂肪などに由来すると考えられ、英名もGreen sea turtleです。",
    humanRelation: "国際的な保全対象で、CITES附属書Iに掲載されています。2025年に世界評価は改善しましたが、混獲、海洋ごみ、沿岸開発、気候変動などの問題は残ります。",
    observationPoint: "泳ぐときの前肢と後肢の使い方を観察してください。前肢を大きく羽ばたかせ、後肢は主に方向調整に使います。",
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
        text: "第一背びれや尾びれなどの先端に明瞭な黒色部があります。英名Blacktip reef sharkも同じ特徴を表しています。"
      },
      {
        title: "かなり浅いサンゴ礁にも入る",
        text: "成魚だけでなく幼魚も非常に浅い礁湖や砂地を利用し、ときには背びれが水面から出るほどの浅場を泳ぎます。"
      }
    ],
    bodyLength: "最大で全長約200cm。一般には1〜1.5m程度の個体が多く見られます。",
    distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋までインド・太平洋に広く分布します。",
    habitat: "サンゴ礁、礁湖、浅い砂地、礁原などに生息します。",
    diet: "魚類を中心に、甲殻類、頭足類などを捕食します。",
    features: "灰褐色の流線型の体と、各ひれ先端の黒色部が特徴です。第一背びれの黒色部は特に明瞭です。",
    behavior: "比較的狭い行動圏を持つ個体もあり、サンゴ礁周辺を繰り返し巡回します。",
    reproduction: "胎盤を形成する胎生で、母体から栄養を受けながら成長した仔を出産します。1回の出産数は数尾程度です。",
    identification: "ひれ先の黒色だけでなく、第一背びれの位置や吻の形を組み合わせて確認します。",
    nameOrigin: "ひれの端、つまり『つま』が黒いことからツマグロと呼ばれます。",
    humanRelation: "サンゴ礁域で人と遭遇することがありますが、通常は人を積極的に襲う種類ではありません。",
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
        text: "大型個体では全長2.5mを超え、体重数百kgになる記録があります。サンゴ礁に暮らす硬骨魚の中でも最大級です。"
      },
      {
        title: "幼魚と成魚で模様が変わる",
        text: "幼魚では黄色と黒色の明瞭なまだら模様がありますが、成長すると全体が暗灰色から褐色になり、模様も不明瞭になります。"
      }
    ],
    bodyLength: "最大で全長約270cm、体重400kg級の記録があります。",
    distribution: "紅海・インド洋から南日本、オーストラリア、中西部太平洋まで広く分布します。",
    habitat: "サンゴ礁、岩礁、洞窟、沈船、河口周辺などに生息します。",
    diet: "魚類、甲殻類、エイ類、小型のウミガメなど大型の動物まで捕食することがあります。",
    features: "非常に大きな頭と口、太く頑丈な体を持ちます。若魚には明瞭な斑紋があります。",
    behavior: "大型個体は岩礁や洞窟周辺に定着し、待ち伏せ型の捕食を行います。",
    reproduction: "産卵時には卵と精子を海中へ放出します。大型ハタ類は繁殖力や成熟までの時間の長さから漁獲圧の影響を受けやすい傾向があります。",
    identification: "圧倒的な体格、大きな口、丸みのある尾びれが特徴です。",
    nameOrigin: "標準和名の詳しい語源については主要資料から確定できないため断定しません。",
    humanRelation: "高級食用魚として漁獲・養殖されますが、大型ハタ類は過剰漁獲の影響を受けやすいため資源管理が重要です。",
    observationPoint: "人の体と比較するつもりで頭と口の大きさを見てください。大型ハタならではの迫力があります。",
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
        text: "大型の成魚、特に雄型個体では額が大きく盛り上がり、英名Humphead wrasseの由来になります。"
      },
      {
        title: "世界的な保全対象",
        text: "大型で成長が遅く、食用目的の乱獲の影響を受けやすい魚です。CITES附属書IIに掲載され、国際取引が規制されています。"
      }
    ],
    bodyLength: "最大で全長約230cm。体重190kgを超える記録があります。",
    distribution: "紅海・東アフリカから南日本、ニューカレドニア、中央太平洋までインド・太平洋に広く分布します。",
    habitat: "サンゴ礁外縁、礁斜面、礁湖などに生息します。",
    diet: "貝類、甲殻類、ウニ類、魚類などを食べ、オニヒトデを捕食することもあります。",
    features: "大型成魚では額が盛り上がり、厚い唇を持ちます。眼の周辺には黒い線が入り、眼鏡のように見えます。",
    behavior: "昼間にサンゴ礁を広く泳ぎ回り、夜間は洞窟などで休息します。",
    reproduction: "雌性先熟型で、メスとして成熟した個体の一部が成長後にオスへ性転換します。",
    identification: "眼の周囲の模様、厚い唇、大型個体の額の隆起が重要です。",
    nameOrigin: "眼の周囲にある線を眼鏡に見立てたことが標準和名の由来です。",
    humanRelation: "高級な活魚として取引されてきましたが、乱獲の影響から国際的に保護対象となっています。",
    observationPoint: "額だけではなく眼の周辺を見てください。名前の由来となった眼鏡状の模様を確認できます。",
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
        text: "名前にサメとありますが、サメの仲間ではなく条鰭類の硬骨魚です。分類上はアジ類に近いグループに置かれます。"
      },
      {
        title: "吸盤は背びれが変化したもの",
        text: "頭の上の小判型吸着盤は第一背びれが特殊化した構造です。多数の板状構造を立てることで大型動物へ強く付着します。"
      }
    ],
    bodyLength: "最大で全長約110cm。",
    distribution: "世界の熱帯・亜熱帯海域に広く分布します。",
    habitat: "外洋から沿岸まで幅広く見られ、サメ、エイ、ウミガメ、大型魚などに付着して移動します。",
    diet: "宿主の食べ残し、小魚・甲殻類などを食べ、宿主表面の寄生生物を利用する場合もあります。",
    features: "細長い体と、頭頂部にある楕円形の吸着盤が最大の特徴です。",
    behavior: "大型海洋動物へ吸着して移動することで、遊泳エネルギーを節約しながら新しい餌場へ移動できます。",
    reproduction: "卵生で、卵は海中を漂う浮遊卵です。幼魚は吸着盤が発達すると大型動物への付着を始めます。",
    identification: "頭上の大きな吸着盤があるため、他の魚と容易に区別できます。",
    nameOrigin: "頭の吸着盤が江戸時代の小判に似ることからコバンザメと呼ばれます。",
    humanRelation: "大型水槽ではサメやエイへ実際に付着する様子を観察でき、共生関係を説明する代表的な魚です。",
    observationPoint: "どの魚に付いているかだけでなく、吸着盤の板が何列くらい並んでいるか見てください。",
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
        text: "全長3mに達する可能性があり、世界最大級のウツボです。大型個体では頭部だけでもかなりの大きさになります。"
      },
      {
        title: "『毒』は毒牙ではない",
        text: "毒を注入する牙を持つわけではありません。食物連鎖を通してシガテラ毒を体内へ蓄積している個体があり、食用時の中毒リスクが和名の印象につながります。"
      }
    ],
    bodyLength: "最大で全長約300cm。",
    distribution: "南日本からインド・太平洋の熱帯サンゴ礁域に広く分布します。",
    habitat: "礁湖や外礁斜面の洞窟・岩穴などに生息し、水深50m程度までよく見られます。",
    diet: "主に魚類を捕食し、甲殻類なども食べます。",
    features: "非常に太く大型の体を持ち、褐色系の体に黒色斑点が密に入ります。",
    behavior: "昼間は岩穴から頭を出していることが多く、夜間に活動して魚を捕食します。",
    reproduction: "卵生で、ふ化後はレプトケファルスと呼ばれる透明な葉状幼生として浮遊生活を送ります。",
    identification: "巨大な体格と、細かな黒色斑が全身に密集する模様が特徴です。",
    nameOrigin: "食用による中毒が知られることが『ドクウツボ』という名称に関係すると考えられます。",
    humanRelation: "大型で鋭い歯を持つため野外では不用意に近づくべきではありません。またシガテラ中毒リスクがあります。",
    observationPoint: "口の開閉を観察してください。ウツボ類では呼吸のために口を繰り返し開閉します。",
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
        text: "淡色の体に大きな黒褐色斑が多数あり、碁石を散らしたような模様になります。"
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
    behavior: "岩穴を拠点として生活し、頭だけを外へ出して周囲を警戒することがあります。",
    reproduction: "卵生で、幼生期には透明なレプトケファルス幼生となります。",
    identification: "黒色斑の大きさ・配置や頭部模様を確認します。ゴイシウツボ類にはよく似た種類がいるため模様だけで安易に判断しません。",
    nameOrigin: "ゴイシウツボに似た碁石状模様を持つ別種であることからニセゴイシウツボと呼ばれます。",
    humanRelation: "大型のウツボ類で、ダイビングや水族館で観察されます。",
    observationPoint: "ドクウツボと並べ、黒い模様が細かな点なのか大きな斑点なのか比較してください。",
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
        text: "昼間は大きな群れでまとまっていることが多い一方、夜には群れが散らばって活発に獲物を捕食します。"
      },
      {
        title: "ダイバー憧れの巨大な群れ",
        text: "数百匹規模の群れが渦を巻く『ギンガメアジトルネード』は、南西諸島などのダイビングで非常に人気があります。"
      }
    ],
    bodyLength: "最大で全長約120cm。",
    distribution: "世界の熱帯・亜熱帯海域に広く分布し、日本では南日本を中心に見られます。",
    habitat: "サンゴ礁、岩礁、外洋性の島、幼魚では河口域なども利用します。",
    diet: "魚類、エビ・カニ、頭足類などを捕食します。",
    features: "銀色の体、大きな眼、鰓蓋上部付近の黒斑が特徴です。尾びれは強く二叉します。",
    behavior: "昼は密集した群れを形成し、夜間には活発な捕食者になります。",
    reproduction: "卵生で、海中へ浮遊卵を放出します。",
    identification: "眼が大きく、鰓蓋上方に暗色斑があることが特徴です。",
    nameOrigin: "銀色に輝く大型のアジであることが名称に表れています。",
    humanRelation: "釣魚・食用魚として利用されるほか、大群を形成するためダイビング観光でも重要です。",
    observationPoint: "1匹より群れ全体を見てください。群れがほぼ同時に方向を変える動きが見どころです。",
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
        text: "体が薄く流線型で、強く二叉した尾びれを使って浅い沿岸を高速で遊泳します。"
      }
    ],
    bodyLength: "最大で全長約60cm。",
    distribution: "南日本からインド・太平洋の熱帯・亜熱帯域に広く分布します。",
    habitat: "砂浜沿岸、サンゴ礁、外礁周辺などの浅海に生息します。",
    diet: "小魚、甲殻類、その他の小型動物を捕食します。",
    features: "強く側扁した銀色の体と、鎌状の背びれ・尻びれ、深く二叉した尾びれを持ちます。体側上部に黒点があります。",
    behavior: "沿岸の中層を高速で泳ぎ、単独または小群で餌を追います。",
    reproduction: "卵生で、浮遊卵を海中へ放出します。",
    identification: "銀色の薄い体、鎌状のひれ、体側上部に並ぶ小黒点を確認します。",
    nameOrigin: "体形が小判のように平たく見えることが名称に関係するとされています。",
    humanRelation: "釣魚・食用魚として利用されます。",
    observationPoint: "横から体の薄さを確認し、体側上部の黒点を数えてみてください。",
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
        text: "長くCarangoides ferdauとして知られてきましたが、現在WoRMSやFishBaseではFerdauia ferdauが受理名です。"
      },
      {
        title: "大型では70cm",
        text: "細長いアジというより体高のある大型のアジで、全長70cm程度まで成長します。"
      }
    ],
    bodyLength: "最大で全長約70cm。",
    distribution: "東アフリカから日本、ハワイなどインド・太平洋に広く分布します。",
    habitat: "サンゴ礁、岩礁、礁湖、外礁斜面などに生息します。",
    diet: "小魚、甲殻類などを捕食します。",
    features: "銀色から青灰色の体を持ち、体側には青色系の縞や斑紋が現れます。胸びれは鎌状です。",
    behavior: "単独または小群で礁周辺を泳ぎながら獲物を探します。",
    reproduction: "卵生で、浮遊卵を放出します。詳しい地域別産卵期は一律には記載しません。",
    identification: "体側の青色系の縞、体高、ひれの形などを総合して確認します。",
    nameOrigin: "黒みを帯びて見える体色と、平たいアジ型の体が名称に関係すると考えられます。",
    humanRelation: "漁獲され食用になります。大型アジ類として釣りの対象にもなります。",
    observationPoint: "同じ水槽の他のアジ類と体高を比べてください。かなり厚みのある体形です。",
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
        text: "天然物は高級魚として知られますが、安定供給のため日本では養殖も行われています。"
      },
      {
        title: "若魚の体には黄色い線",
        text: "若い個体では銀色の体側に黄色い縦線が目立ち、成長すると次第に不明瞭になります。"
      }
    ],
    bodyLength: "最大で全長1mを超え、WoRMSではPseudocaranx dentexが現在の受理名です。",
    distribution: "日本を含む世界の温帯から亜熱帯海域に広く分布します。",
    habitat: "沿岸の岩礁、砂地、沖合の島周辺などに生息します。",
    diet: "小魚、甲殻類、イカ類などを捕食します。",
    features: "銀白色で体高のある体、黄色味を帯びる縦線、尾柄の硬い稜鱗が特徴です。",
    behavior: "群れを形成して活発に泳ぎ、餌となる小魚などを追います。",
    reproduction: "卵生で、海中へ浮遊卵を放出します。養殖では人工種苗生産も行われています。",
    identification: "尾柄の稜鱗、体側の黄色い線、体高を確認します。",
    nameOrigin: "若魚に見られる縞状模様が標準和名に関係するとされています。",
    humanRelation: "刺身・寿司などで非常に評価が高く、日本では重要な養殖魚でもあります。",
    observationPoint: "マアジより体高があり、尾の付け根が強く締まっていることを比較してください。",
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
        text: "尾柄の左右に前方を向く鋭い骨質棘があり、防御に使われます。ニザダイ科がsurgeonfishと呼ばれる理由です。"
      }
    ],
    bodyLength: "最大で全長約54cm。",
    distribution: "東アフリカから南日本、ハワイ、オーストラリアなどインド・太平洋に広く分布します。",
    habitat: "主に外洋に面したサンゴ礁斜面や深めの礁壁に生息し、水深4〜131mから記録されています。",
    diet: "砂や岩の表面に付着する微細藻類、珪藻、藍藻、デトリタスなどを食べます。",
    features: "淡褐色の体に細かな線が入り、眼の周囲には橙色から黄色の線があります。尾柄の棘の周囲は暗色になります。",
    behavior: "単独または群れで行動し、昼間に海底表面をついばんで摂餌します。",
    reproduction: "雌雄がペアで産卵することが知られています。卵は浮遊性です。",
    identification: "眼周辺の線、体側の細かな模様、尾柄棘周辺の色を確認します。",
    nameOrigin: "カンランハギに似ることからニセカンランハギと呼ばれます。",
    humanRelation: "地域によって食用になり、観賞魚として扱われることもあります。",
    observationPoint: "眼の周囲と尾の付け根を順番に見てください。識別に使える特徴が集中しています。",
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
        text: "成魚では鰓蓋後方から体上部へ伸びる黒い横帯があり、英名Epaulette surgeonfishの『肩章』に例えられています。"
      },
      {
        title: "サンゴの上より砂地を好む",
        text: "多くのニザダイ類がサンゴ礁そのものを泳ぐ一方、本種は湾や礁湖の砂地周辺を好む傾向があります。"
      }
    ],
    bodyLength: "最大で尾叉長約45.3cm。",
    distribution: "東アフリカから琉球列島、オーストラリア、ツアモツ諸島までインド・太平洋に分布します。",
    habitat: "透明度の高い礁湖や湾内、砂底とサンゴが混じる浅場に生息し、水深0〜30m程度で見られます。",
    diet: "藻類やデトリタスなどを海底表面から食べます。",
    features: "暗褐色から紫灰色の体を持ち、成魚では鰓蓋後方に黒い横帯があります。尾柄には白色帯と鋭い棘があります。",
    behavior: "単独または小群で砂地・礁湖を泳ぎながら海底表面をついばみます。",
    reproduction: "卵生で、海中へ浮遊卵を放出します。",
    identification: "鰓蓋後方の黒帯と尾柄基部の白色帯が重要です。幼魚では黒帯が目立たない場合があります。",
    nameOrigin: "体側に目立つ黒い斑・帯を持つことが標準和名に関係します。",
    humanRelation: "観賞魚や地域的な食用魚として利用されます。",
    observationPoint: "黒帯だけでなく、尾柄に白い帯と棘があることも確認してください。",
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
        text: "幼魚にはほとんどありませんが、成長すると眼より前方の額から角状突起が伸びます。英名unicornfishの由来です。"
      },
      {
        title: "尾には青い刃",
        text: "尾柄の左右に2個ずつ青色の骨質板があり、非常に鋭いため防御に使われます。"
      }
    ],
    bodyLength: "最大で全長約70cm。",
    distribution: "紅海・東アフリカから日本、ハワイ、中央太平洋までインド・太平洋に広く分布します。",
    habitat: "サンゴ礁や岩礁、とくに波当たりや潮通しのよい場所に生息します。",
    diet: "主に大型褐藻などを食べる植食性です。",
    features: "成魚では額に角状突起が発達し、尾柄には青色の骨質板があります。",
    behavior: "日中に岩礁を泳ぎ回り、大型藻類を食べます。単独や群れで見られます。",
    reproduction: "卵生で、雌雄が中層へ上昇しながら放卵・放精することがあります。",
    identification: "額の角と尾柄の青色板が非常に特徴的です。",
    nameOrigin: "額の角状突起を天狗の長い鼻に見立てた標準和名です。",
    humanRelation: "食用・観賞魚として利用され、サンゴ礁の大型植食魚として重要です。",
    observationPoint: "角だけでなく尾の付け根も観察してください。青色の鋭い骨質板があります。",
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
        text: "鮮やかな黄色い体側上部に4本の青色縦線が走ります。群れになると非常に目立ちます。"
      },
      {
        title: "昼は大群で集まる",
        text: "日中はサンゴ、洞窟、沈船周辺などで大きな群れを形成し、夜になると餌を求めて分散することがあります。"
      }
    ],
    bodyLength: "最大で全長約40cm。",
    distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋まで広く分布します。",
    habitat: "礁湖から外礁斜面までサンゴ礁周辺に生息し、水深3〜265mから記録されています。",
    diet: "魚類、エビ、カニ、シャコ、頭足類、プランクトン性甲殻類など幅広く食べます。",
    features: "体上部が黄色、腹側が白色で、体側に4本の青い縦線があります。ひれも黄色です。",
    behavior: "日中は非常に大きな群れを作り、夜間に活動範囲を広げます。",
    reproduction: "卵生で、浮遊卵を産みます。",
    identification: "黄色い体と4本の明瞭な青線を数えれば識別しやすい種類です。",
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
        text: "側線の上、背びれ軟条部の下あたりに明瞭な白色斑があり、種小名stellatus＝『星のある』にもつながります。"
      }
    ],
    bodyLength: "最大で全長約55cm。一般には35cm前後です。",
    distribution: "南日本から香港周辺までの北西太平洋に分布します。",
    habitat: "沿岸のサンゴ礁・岩礁周辺に生息します。",
    diet: "魚類や甲殻類などを捕食する肉食魚です。",
    features: "褐色から紫褐色の体を持ち、吻から鰓蓋に青色線があります。体側上部には特徴的な白色斑があります。",
    behavior: "単独または小群で岩礁周辺を泳ぎ、魚や甲殻類を捕食します。",
    reproduction: "卵生で、浮遊卵を産みます。詳細な産卵期は地域によって異なるため一律には記載しません。",
    identification: "吻から鰓蓋へ伸びる青線と、側線上方の白色斑が特徴です。",
    nameOrigin: "標準和名はフエダイ属を代表する魚として付けられています。",
    humanRelation: "食用魚として漁獲され、刺身や焼き物などに利用されます。",
    observationPoint: "茶色い体の中にある白色斑を探してください。意外に目立つ識別点です。",
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
        text: "サンゴ礁だけでなく、若魚はマングローブや河口など汽水環境を利用することがあります。"
      }
    ],
    bodyLength: "最大で全長約50cm。",
    distribution: "紅海・東アフリカから琉球列島、オーストラリア、サモアまでインド・太平洋に広く分布します。",
    habitat: "サンゴ礁、岩礁、海草藻場、河口、マングローブ周辺などに生息します。",
    diet: "魚類、エビ・カニなどの甲殻類、小型無脊椎動物を捕食します。",
    features: "黄褐色から黄色の体側に複数の細い黄色線が入り、体側上部には大きな黒斑があります。",
    behavior: "単独または群れで行動し、夜間に活発に摂餌することがあります。",
    reproduction: "卵生で、浮遊卵を産みます。",
    identification: "体側の黒斑と黄色系の縦線を組み合わせて確認します。クロホシフエダイなど類似種との混同に注意します。",
    nameOrigin: "クロホシフエダイに似ていますが別種であることから『ニセ』が付いています。",
    humanRelation: "食用魚として広く利用されます。",
    observationPoint: "黒斑だけで判定せず、その周囲を通る黄色い線も一緒に見てください。",
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
        text: "体上半部では縦・横方向の褐色線が交差し、四角い白い窓が並んだようなチェック模様になります。"
      },
      {
        title: "尾の付け根には大きな黒斑",
        text: "尾柄部には目立つ黒色斑があり、網目模様と合わせて非常に識別しやすいフエダイです。"
      }
    ],
    bodyLength: "最大で全長約35cm。",
    distribution: "インド、スリランカから琉球列島、ニューギニア周辺までインド・西太平洋に分布します。",
    habitat: "沿岸・沖合のサンゴ礁に生息し、幼魚は浅く保護された礁原も利用します。",
    diet: "魚類、甲殻類などの小動物を捕食します。",
    features: "白っぽい体に縦横の褐色線が入り、上半身にチェック状の模様を作ります。尾びれ基部には大きな黒斑があります。",
    behavior: "単独または群れでサンゴ礁周辺を泳ぎます。",
    reproduction: "卵生で浮遊卵を産みます。本種固有の産卵期については地域差があるため断定しません。",
    identification: "上半身の網目・チェック模様と尾柄の黒斑が最大の特徴です。",
    nameOrigin: "体側の線が網目のように見えることからアミメフエダイと呼ばれます。",
    humanRelation: "食用魚として漁獲され、幼魚は観賞魚として流通することもあります。",
    observationPoint: "体上半分を近くで見てください。縦線と横線が交差して四角い模様になっていることが分かります。",
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
        text: "成魚では頬や体側に青色の細かな斑点や線が現れます。体色そのものは環境や興奮状態によってかなり変化します。"
      },
      {
        title: "大型では80cm近くになる",
        text: "フエフキダイ類の中でも大型で、FishBaseでは最大全長87cmが記録されています。"
      }
    ],
    bodyLength: "最大で全長約87cm。一般には40〜60cm程度の個体が多く見られます。",
    distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋までインド・太平洋に広く分布します。",
    habitat: "サンゴ礁、岩礁、砂礫底、海草藻場など沿岸の浅海域に生息します。",
    diet: "甲殻類、軟体動物、ウニ類、小魚など海底の動物を幅広く捕食します。",
    features: "比較的長い吻と厚い唇を持ち、体側や頭部には青色の斑点・線が現れます。",
    behavior: "日中に礁周辺や砂地を泳ぎ、海底の獲物を探します。単独から小群で見られます。",
    reproduction: "卵生で海中へ放卵・放精します。地域によって繁殖時期が異なるため一律の月は記載しません。",
    identification: "青い斑点・線、比較的長い吻、大型になる体格を組み合わせて識別します。",
    nameOrigin: "浜に近い浅海域でも見られるフエフキダイ類であることが名称に関係すると考えられます。",
    humanRelation: "重要な食用魚で、釣りや沿岸漁業の対象になります。",
    observationPoint: "顔の周辺を近くで見てください。青い細線や斑点が想像以上に細かく入っています。",
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
        text: "眼を通る帯と、背びれ付近から胸びれ方向へ伸びる帯の2本が頭部付近に目立ちます。"
      },
      {
        title: "棘には毒がある",
        text: "背びれ・腹びれ・尻びれの強い棘には毒腺があり、刺されると強い痛みを生じます。"
      }
    ],
    bodyLength: "最大で全長約30cm。一般には20cm前後です。",
    distribution: "南日本、台湾、中国南部、東南アジア、オーストラリア北部などインド・西太平洋に分布します。",
    habitat: "浅いサンゴ礁、砂地、岩礁、河口、マングローブ周辺などに生息します。",
    diet: "主に海藻や付着藻類を食べる植食性です。",
    features: "黄色味のある体に、頭部付近を横切る2本の暗色帯があります。背びれなどには鋭い毒棘があります。",
    behavior: "成魚はペアで見られることが多く、岩やサンゴ表面の藻類をついばみます。",
    reproduction: "卵生で、海中へ放卵・放精します。",
    identification: "頭部の2本の太い暗色帯と黄色い体色が重要です。",
    nameOrigin: "アイゴ類の中で比較的小型・細身に見えることが和名に関係すると考えられます。",
    humanRelation: "地域によって食用になりますが、ひれの毒棘には注意が必要です。",
    observationPoint: "頭部の2本の帯を探したあと、背びれの棘にも注目してください。",
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
        text: "体や頭部に多数の細かな斑点があり、和名の『ゴマ』を連想させます。"
      },
      {
        title: "アイゴ類では珍しく夜にも活発",
        text: "FishBaseでは本種が夜行性を示すことが報告されており、他の多くのアイゴ類とは少し違う行動を持ちます。"
      }
    ],
    bodyLength: "最大で全長約42cm。一般には25cm前後です。",
    distribution: "琉球列島、中国南部、台湾、東南アジア、フィリピン、パラオなどに分布します。",
    habitat: "濁りのある沿岸礁、マングローブ、河口、海草藻場など塩分変化のある環境にも生息します。",
    diet: "主に海底の付着藻類を食べます。",
    features: "青灰色から黄褐色の体に多数の斑点があり、背びれ後方付近には鮮黄色の斑紋が目立ちます。",
    behavior: "一生を通して群れを形成する傾向があり、成魚では10〜15匹ほどの群れも見られます。",
    reproduction: "卵生です。FishBaseでは主に真夜中に産卵することが報告されています。",
    identification: "全身の細かな斑点と背びれ後部付近の黄色い斑紋が特徴です。",
    nameOrigin: "体表の多数の小さな斑点をゴマ粒に見立てた名称です。",
    humanRelation: "食用・養殖・観賞魚として利用されます。ひれの棘には毒があります。",
    observationPoint: "体側だけでなく顔にも斑点があることを確認してください。",
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
        text: "成魚では眼の上から額付近に小さな突起が発達します。種小名monocerosも『一角』を意味します。"
      },
      {
        title: "ハタタテダイより顔つきがごつい",
        text: "額の突起と眼上部の隆起によって、近縁のハタタテダイより複雑で力強い頭部形態になります。"
      }
    ],
    bodyLength: "最大で全長約24cm。",
    distribution: "東アフリカから南日本、オーストラリア、ツアモツ諸島までインド・太平洋に分布します。",
    habitat: "サンゴ礁や岩礁の浅場、水深2〜30m程度に生息します。",
    diet: "底生無脊椎動物やサンゴ周辺の小動物などを食べます。",
    features: "白・黒・黄色の大きな帯模様と、長く伸びる背びれ、額周辺の小突起が特徴です。",
    behavior: "単独、ペア、小群などで岩礁周辺を泳ぎます。",
    reproduction: "卵生で、繁殖時には雌雄が海中へ放卵・放精します。",
    identification: "額の突起と眼付近の隆起を確認すると、ハタタテダイとの識別に役立ちます。",
    nameOrigin: "頭部の突起など、通常のハタタテダイより荒々しく見える姿が『オニ』の名に関係すると考えられます。",
    humanRelation: "観賞魚や水族館展示で知られます。",
    observationPoint: "長い背びれより先に、額の形を見てください。小さな角状突起を探せます。",
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
        text: "FishBaseでは最高齢40年が記録されており、大型で長寿なフエダイです。"
      }
    ],
    bodyLength: "最大で全長1mを超え、FishBaseでは116cmの記録があります。",
    distribution: "紅海南部・東アフリカから南日本、ニューカレドニア、オーストラリアまでインド・西太平洋に分布します。",
    habitat: "サンゴ礁、岩礁、砂泥底など水深5〜180m程度に生息します。",
    diet: "魚類、甲殻類、頭足類などを捕食します。",
    features: "幼若魚には3本の幅広い赤色帯があり、大型成魚では全体が赤色になります。",
    behavior: "成魚は岩礁周辺で単独または群れで生活します。",
    reproduction: "卵生で海中へ浮遊卵を放出します。",
    identification: "若魚の3本の赤帯が非常に特徴的です。大型成魚では帯が薄れます。",
    nameOrigin: "標準和名の詳しい命名由来については主要資料から確定できないため断定しません。",
    humanRelation: "大型の重要食用魚として漁獲されます。",
    observationPoint: "若い個体と成魚がいれば模様を比較してください。",
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
        text: "幼魚は白と褐色の大きな模様を持ち、頭を下げながら全身を激しくくねらせる独特な泳ぎ方をします。"
      },
      {
        title: "大人は水玉模様へ",
        text: "成魚になると体色が大きく変わり、淡色の体に黒褐色の丸い斑点が多数入ります。"
      }
    ],
    bodyLength: "最大で全長約72cm。",
    distribution: "インド洋から琉球列島、フィジー、ニューカレドニアなどインド・西太平洋に分布します。",
    habitat: "透明度の高いサンゴ礁・礁湖・外礁斜面に生息します。",
    diet: "夜間に甲殻類、貝類、魚類などを捕食します。",
    features: "幼魚と成魚で模様が大幅に変化します。成魚では白っぽい体に多数の黒褐色斑があります。",
    behavior: "成魚は昼間に洞窟・岩棚の下などで休み、夜間に活動して餌を探します。",
    reproduction: "卵生で、繁殖時にペアを形成することが知られています。",
    identification: "幼魚では大きな白黒斑とくねる泳ぎ、成魚では全身の丸い斑点が特徴です。",
    nameOrigin: "幼魚の模様がチョウチョウウオ類を思わせることが和名に関係します。",
    humanRelation: "幼魚の独特な泳ぎから観賞魚として非常に人気があります。",
    observationPoint: "幼魚がいれば泳ぎ方を見てください。通常の魚とはかなり違う全身運動をします。",
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
        text: "幼魚では背びれと尻びれが非常に長く伸び、体色も褐色を帯びるため、水中を漂う枯れ葉のように見えます。"
      },
      {
        title: "大人になると丸い魚へ",
        text: "成長するとひれの長さが相対的に短くなり、銀色で体高の高い大型魚へ変化します。"
      }
    ],
    bodyLength: "最大で全長約70cm。",
    distribution: "紅海・東アフリカから南日本、オーストラリア、中西部太平洋に分布します。",
    habitat: "サンゴ礁、岩礁、沈船、港湾などの中層に生息します。",
    diet: "藻類、クラゲ類、小型無脊椎動物などを食べる雑食性です。",
    features: "非常に体高の高い円盤状の体と、幼魚で長く伸びる背びれ・尻びれが特徴です。",
    behavior: "成魚は小群から大きな群れを形成することがあります。",
    reproduction: "卵生で、浮遊卵を産みます。",
    identification: "成魚では胸びれ付近の黒斑と非常に高い体高が特徴です。",
    nameOrigin: "長く伸びたひれを持つ幼魚の輪郭を飛ぶツバメに見立てたとされています。",
    humanRelation: "水族館・観賞魚として人気があり、食用にも利用されます。",
    observationPoint: "若魚がいれば成魚と体形を比べてください。",
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
        text: "幼魚は白い体に黒色や橙色の模様を持ちますが、大型成魚は青緑色を基調とした全く異なる姿になります。"
      },
      {
        title: "大型オスは額が盛り上がる",
        text: "大型の雄型個体では頭部前方が大きく隆起し、『カンムリ』を思わせる姿になります。"
      }
    ],
    bodyLength: "最大で全長約120cm。",
    distribution: "紅海・東アフリカから南日本、オーストラリア、中央太平洋まで広く分布します。",
    habitat: "サンゴ礁・岩礁の砂地周辺に生息します。",
    diet: "貝類、甲殻類、ウニ類など硬い底生動物を強い歯で捕食します。",
    features: "大型で強い歯を持ち、成長と性による色彩変化が非常に大きいベラです。",
    behavior: "昼間に海底を泳ぎ回って餌を探し、夜間や危険時には砂へ潜ることがあります。",
    reproduction: "ベラ類らしく性転換を行うと考えられ、大型の雄型個体が繁殖に参加します。",
    identification: "幼魚・若魚・成魚で見た目が大きく変わるため、成長段階を考慮して判定します。",
    nameOrigin: "大型雄の盛り上がった額を冠に見立てた名称です。",
    humanRelation: "大型ベラとしてダイビングや水族館で人気があります。",
    observationPoint: "口元の大きな犬歯状の歯にも注目してください。",
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
        text: "多数の歯が融合して、オウムのくちばしのような強い歯板を作っています。"
      },
      {
        title: "食べるのは危険な場合がある",
        text: "厚生労働省はアオブダイをパリトキシン様毒による食中毒の原因魚として挙げています。筋肉や肝臓などを食べた死亡例もあり、自己判断での調理・喫食は避けるべき魚です。"
      }
    ],
    bodyLength: "最大で全長約90cm。",
    distribution: "日本近海を中心とする北西太平洋に分布します。",
    habitat: "沿岸の岩礁やサンゴ礁周辺に生息します。",
    diet: "岩礁表面の藻類や付着生物などを強い歯板で削り取って食べます。",
    features: "大型個体では青緑色を帯び、頭部が丸く盛り上がります。歯は融合して強い歯板になります。",
    behavior: "日中に岩礁を泳ぎ回り、岩面をかじるように摂餌します。",
    reproduction: "卵生です。ブダイ類では性転換が広く知られますが、本種固有の性システムについては資料を限定して断定しません。",
    identification: "大型で丸みのある頭、青緑色の体、強大な歯板が特徴です。",
    nameOrigin: "大型個体が青色から青緑色を帯びることからアオブダイと呼ばれます。",
    humanRelation: "過去には食用とされましたが、パリトキシン様毒による重篤・死亡中毒例があります。",
    observationPoint: "歯の形に注目してください。個々の歯ではなく、大きな板のようにつながっています。",
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
        text: "暗色から褐色の体全体に多数の白色斑が入り、腹側には細かな縞状模様も見られます。"
      },
      {
        title: "危険時には大きく膨らむ",
        text: "フグ類らしく大量の海水を胃へ取り込み、体を球状に膨らませて捕食されにくくします。"
      }
    ],
    bodyLength: "最大で全長約50cm。",
    distribution: "紅海・東アフリカから南日本、ハワイなどインド・太平洋に広く分布します。",
    habitat: "サンゴ礁、岩礁、礁湖、砂地、海草藻場などに生息します。",
    diet: "甲殻類、軟体動物、棘皮動物、付着生物などを食べます。",
    features: "褐色の体に多数の白斑があり、体表には細かな棘があります。",
    behavior: "通常はゆっくり泳ぎ、海底の餌を強い歯板でかじります。",
    reproduction: "卵生です。詳しい野外繁殖生態には未解明な部分があります。",
    identification: "全身の多数の白斑と腹側の線状模様が特徴です。",
    nameOrigin: "腹側などに見られる細かな波状模様を『さざ波』に見立てた名称です。",
    humanRelation: "フグ類は毒性のある種類・部位があるため、自己判断での調理や喫食は行うべきではありません。",
    observationPoint: "白い斑点だけでなく、腹側の模様も見てください。",
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
        text: "FishBaseでは最大全長120cmが記録され、モヨウフグ属の中でも非常に大型になります。"
      },
      {
        title: "子どもは縞、大人は点",
        text: "幼魚では腹側を中心に暗い縞模様が見られますが、成長に伴って多数の黒い点模様へ変化します。"
      }
    ],
    bodyLength: "最大で全長約120cm。一般には50cm前後です。",
    distribution: "紅海・東アフリカから南日本、ツアモツ諸島、ロードハウ島までインド・太平洋に分布します。",
    habitat: "サンゴ礁、礁湖、砂地、河口周辺などに生息します。",
    diet: "甲殻類、軟体動物、サンゴ類、棘皮動物などを食べます。",
    features: "成魚は淡灰色から白色の大きな体に多数の黒色小斑点があります。",
    behavior: "大型成魚は礁斜面などをゆっくり泳ぎます。危険時には体を膨らませます。",
    reproduction: "卵生です。",
    identification: "大型で、全身に非常に多数の細かな黒点が散在することが特徴です。",
    nameOrigin: "全身の複雑な斑点・模様からモヨウフグと呼ばれます。",
    humanRelation: "FishBaseでは食用毒性ありとされ、自己判断での喫食は避けるべき魚です。",
    observationPoint: "幼魚と成魚がいれば模様がどのように変わるか比較してください。",
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
        text: "ハリセンボンとは異なり、体表の棘は短く固定されており、体を膨らませても大きく立ち上がりません。"
      },
      {
        title: "世界中の暖かい海にいる",
        text: "大西洋・インド洋・太平洋に広く分布する、非常に分布域の広いハリセンボン科魚類です。"
      }
    ],
    bodyLength: "最大で約70cm、一般には30cm前後です。",
    distribution: "熱帯・亜熱帯の世界各地の海に広く分布します。",
    habitat: "岩礁、サンゴ礁、砂礫底などに生息します。",
    diet: "貝類、甲殻類、ウニ類など硬い動物を歯板で砕いて食べます。",
    features: "丸い体に短く太い固定棘が多数あり、体には黒色斑があります。",
    behavior: "通常はゆっくり泳ぎ、危険時には水を飲み込んで体を膨らませます。",
    reproduction: "卵生で、仔稚魚は表層を漂う生活を送ります。",
    identification: "ハリセンボンより棘が短く、棘が倒れず固定されていることが特徴です。",
    nameOrigin: "体表の模様や硬い棘が石垣を思わせることが名称に関係するとされています。",
    humanRelation: "水族館で人気があります。食用利用については地域差があるため、自己判断で扱わないことが安全です。",
    observationPoint: "ハリセンボンと棘の長さを比較してください。",
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
        text: "幼いヤシガニはヤドカリのように巻貝の殻を利用しますが、成長すると腹部の外皮が硬化し、殻を使わなくなります。"
      }
    ],
    bodyLength: "大型個体では体重4kg以上、脚を広げた幅は1m近くになることがあります。",
    distribution: "インド洋から西太平洋の熱帯島嶼に分布し、日本では南西諸島、小笠原諸島などで見られます。",
    habitat: "海岸近くの森林、岩場、洞窟など陸上で生活します。",
    diet: "果実、種子、植物質、動物の死骸などを食べる雑食性です。",
    features: "巨大なはさみと頑丈な歩脚を持ち、成体では腹部も硬くなります。",
    behavior: "主に夜行性で、日中は岩穴などで休みます。木へ登ることもできます。",
    reproduction: "交尾後、メスは腹部に卵を抱え、ふ化時期になると海岸へ移動して海中へ幼生を放します。幼生期は海中で生活します。",
    identification: "巨大な体格と巻貝の殻を背負わない成体の姿が特徴です。",
    nameOrigin: "ヤシの実などを食べる姿からヤシガニと呼ばれます。",
    humanRelation: "地域によって食用になりますが、乱獲や生息地減少の影響を受けやすく、日本でも保全対象となる地域があります。",
    observationPoint: "はさみだけでなく腹部を見てください。普通のヤドカリとは違い、成体は殻を必要としません。",
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
        text: "長くAonyx cinereusまたはAonyx cinereaとして知られてきましたが、2022年のカワウソ類の系統ゲノム研究を受け、最新のMammal Diversity DatabaseではLutra cinereaが有効名です。"
      },
      {
        title: "名前通り爪がとても小さい",
        text: "指先の爪が小さく、指の間の水かきも完全ではありません。その分、前足を器用に使って餌を探せます。"
      }
    ],
    bodyLength: "頭胴長約40〜60cm、尾長約25〜35cm。体重はおよそ3〜6kg程度です。",
    distribution: "インドから東南アジア、中国南部、台湾、インドネシア、フィリピンなどに分布します。",
    habitat: "河川、湿地、水田、マングローブ、海岸周辺など水辺に生息します。",
    diet: "カニ、貝類、魚類、カエルなどを食べます。",
    features: "カワウソ類の中では小型で、指の爪が非常に小さく、前足を器用に使えます。",
    behavior: "社会性が高く、家族群で生活します。鳴き声によるコミュニケーションも非常に多彩です。",
    reproduction: "雌雄のペアを中心とした家族群で繁殖し、1回に複数の仔を産みます。",
    identification: "小型の体と短い爪、比較的丸い顔が特徴です。",
    nameOrigin: "指先の爪が非常に小さいことからコツメカワウソと呼ばれます。",
    humanRelation: "水族館・動物園で人気がありますが、野生個体は違法なペット取引や生息地減少の影響を受けています。",
    observationPoint: "餌を食べるときの前足に注目してください。指先を非常に器用に使います。",
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
        text: "木を切ってダムを作り、川の流れをせき止めて池を作ります。その結果、多くの水生生物が利用できる湿地環境が生まれます。"
      },
      {
        title: "歯は一生伸び続ける",
        text: "前歯は一生伸び続けます。硬い木をかじり続けることで適切な長さに摩耗します。"
      }
    ],
    bodyLength: "頭胴長約70〜100cm、尾長約25〜35cm。大型個体では体重30kgを超えることがあります。",
    distribution: "北アメリカの広い範囲に自然分布し、他地域へ移入された例もあります。",
    habitat: "河川、湖沼、湿地など淡水域に生息します。",
    diet: "樹皮、枝、水草など植物質を食べます。",
    features: "大きなオレンジ色の前歯、平たく幅広い尾、水かきの発達した後肢を持ちます。",
    behavior: "木を倒し、枝や泥を使ってダムや巣を作ります。主に夜間から薄明時に活動します。",
    reproduction: "通常は一夫一妻のペアを形成し、家族群で生活します。仔は巣内で育てられます。",
    identification: "幅広く平たい尾と巨大な前歯が最大の特徴です。",
    nameOrigin: "北アメリカに分布するビーバーであることからアメリカビーバーと呼ばれます。",
    humanRelation: "生態系を大きく改変する『生態系エンジニア』として非常に重要です。",
    observationPoint: "泳ぐときに尾と後脚をどのように使っているか観察してください。",
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
        text: "群れを作りますが、映画のように常に大型動物へ集団で襲いかかる魚ではありません。群れには捕食だけでなく防御の意味もあります。"
      },
      {
        title: "左右の歯を交互に交換",
        text: "強力な三角形の歯は左右の顎で交互に交換されるため、すべての歯を一度に失うことなく噛む能力を維持できます。"
      }
    ],
    bodyLength: "最大で標準体長約50cm。一般には20〜30cm程度です。",
    distribution: "アマゾン川、パラグアイ・パラナ川流域、ブラジル北東部の河川など南米に分布します。",
    habitat: "河川、入り江、氾濫原の池など淡水域に生息します。",
    diet: "魚類、昆虫、ゴカイ類、甲殻類などを食べます。",
    features: "体高のある銀灰色の体を持ち、成魚では腹部が赤色から橙赤色を帯びます。顎には鋭い三角形の歯が並びます。",
    behavior: "小群から群れを形成し、夕方や明け方を中心に活動します。",
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
    features: "大型で黒褐色の体を持ち、体側にノコギリ状の硬い骨板が並びます。口周辺にはひげがあります。",
    behavior: "底層を群れで行動することがあり、泥底で餌を探します。",
    reproduction: "野外での詳細な繁殖生態について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "体側に一列に並ぶ非常に硬い骨板が特徴です。",
    nameOrigin: "属名Oxydorasは『鋭い皮膚』に関係する語源を持ち、体側の硬い骨板を表しています。",
    humanRelation: "南米では食用になるほか、大型観賞魚として飼育されることもあります。",
    observationPoint: "魚の横腹を見てください。鱗とは違う大きな骨板が一列に並びます。",
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
        text: "Doradoはスペイン語・ポルトガル語圏で『黄金色』を意味し、成魚の金色に輝く体色に由来します。"
      },
      {
        title: "南米を代表する大型肉食魚",
        text: "最大1m級になり、魚を高速で追いかけて捕食する強力な遊泳魚です。スポーツフィッシングでも有名です。"
      }
    ],
    bodyLength: "最大で標準体長約100cm、体重30kgを超える記録があります。",
    distribution: "南米のパラナ川、パラグアイ川、ウルグアイ川などの流域に分布します。",
    habitat: "大河川、支流、湖沼などの淡水域に生息します。",
    diet: "主に魚類を捕食し、甲殻類なども食べます。",
    features: "流線型で筋肉質な体を持ち、成魚は金黄色に輝きます。尾びれは強く二叉します。",
    behavior: "強力な遊泳力を持ち、魚を追って河川内を移動します。繁殖などに伴う河川移動も行います。",
    reproduction: "河川を移動して繁殖する回遊性淡水魚で、繁殖期には上流方向へ移動します。",
    identification: "金色の体と黒い尾びれ中央部、大きな口が特徴です。",
    nameOrigin: "Doradoはスペイン語で『黄金の』を意味します。",
    humanRelation: "南米を代表するゲームフィッシュであり、食用にも利用されます。",
    observationPoint: "体色だけでなく、尾びれと胴体の筋肉質な形に注目してください。",
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
        text: "鰓だけではなく、血管の発達した鰾を肺のように使う義務的空気呼吸魚です。定期的に水面へ浮上して大きく空気を飲み込みます。"
      },
      {
        title: "世界最大級の淡水魚",
        text: "FishBaseでは最大4.5mという歴史的記録があり、一般的な大型個体でも2m前後になります。"
      }
    ],
    bodyLength: "一般的には全長2m前後。FishBaseでは最大4.5m、200kgという記録があります。",
    distribution: "南米アマゾン川流域に分布します。",
    habitat: "河川、湖、氾濫原、酸素の少ない止水域などに生息します。",
    diet: "主に魚類を捕食し、甲殻類や小型動物を利用することもあります。",
    features: "非常に大きく細長い体、巨大な鱗、後半部に集中する背びれ・尻びれを持ちます。大型個体では体後半の鱗が赤色を帯びます。",
    behavior: "数分から十数分おきに水面へ浮上して空気を吸います。低酸素環境でも生存できる大きな理由です。",
    reproduction: "砂底に巣を作って産卵し、親が卵や仔魚を保護します。繁殖期には親子で行動する姿が見られます。",
    identification: "巨大な鱗と細長い大型の体、体後半に集まるひれが特徴です。",
    nameOrigin: "ピラルクという名称は南米先住民の言語に由来するとされます。",
    humanRelation: "アマゾン地域の重要な食用魚で、養殖も行われます。国際取引はCITES附属書IIで管理されています。",
    observationPoint: "しばらく水面を見てください。定期的に浮上し、口を開けて空気を吸う瞬間を観察できます。",
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
        text: "鼻先が細長く突き出し、鼻孔が前方を向くため『ブタバナガメ』とも呼ばれます。水面から鼻先だけを出して呼吸できます。"
      },
      {
        title: "卵は雨を待ってふ化する",
        text: "砂地に産まれた卵では、胚が十分に成長した後もすぐにはふ化せず、増水によって巣が水に浸かることがふ化のきっかけになることがあります。"
      }
    ],
    bodyLength: "背甲長50cm前後になり、資料によっては70cm近い大型個体も知られています。",
    distribution: "ニューギニア島南部とオーストラリア北部に自然分布します。",
    habitat: "大河川、湖、湿地などの淡水域を中心に生活し、汽水域を利用することもあります。",
    diet: "果実や水生植物などの植物質に加え、貝類、甲殻類、昆虫なども利用する雑食性です。",
    features: "甲羅には一般的なカメのような硬い鱗板がなく、表面は滑らかです。四肢はウミガメのようなヒレ状になっています。",
    behavior: "ほとんどの時間を水中で過ごす非常に水生傾向の強いカメです。産卵時のメス以外は陸へ上がる機会が少ないとされています。",
    reproduction: "メスは乾季などに砂地へ上陸して卵を産みます。胚には発生を一時的に止める能力があり、水位上昇がふ化の引き金になることがあります。",
    identification: "ブタの鼻のような吻、滑らかな甲羅、ヒレ状の四肢という組み合わせで他の淡水ガメと容易に区別できます。",
    nameOrigin: "スッポンに似た滑らかな甲羅を持ちながら別系統のカメであることからスッポンモドキと呼ばれます。",
    humanRelation: "ペット取引や卵の採取、生息地改変などの影響を受けています。国際取引はCITES附属書IIで管理されています。",
    observationPoint: "鼻先と前肢に注目してください。淡水ガメでありながら、ウミガメのようなヒレ状の前肢を持っています。",
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
        text: "黒褐色の背中と白い腹部に対して、尾びれが鮮やかな橙赤色になる非常に目立つ大型ナマズです。"
      },
      {
        title: "魚だけでなく果実も食べる",
        text: "大型の肉食魚という印象が強いですが、野外では魚やカニだけでなく、水中へ落ちた果実も利用します。"
      }
    ],
    bodyLength: "最大で全長約135cm。最大公表体重は40kgを超えます。",
    distribution: "南米のアマゾン川水系とオリノコ川水系に分布します。",
    habitat: "大河川本流、支流、深みなど淡水域の底層を中心に生活します。",
    diet: "魚類、カニ類、その他の水生動物に加え、果実なども食べます。",
    features: "幅広い頭と大きな口、非常に長いひげ、黒褐色の背面、白い腹部、赤橙色の尾びれが特徴です。",
    behavior: "主に底層を泳ぎ、大きな口でさまざまな餌を捕食します。河川内を移動する回遊性もあります。",
    reproduction: "雌雄異体で体外受精します。野外では季節的な繁殖ピークが知られますが、詳しい繁殖行動には未解明な部分があります。",
    identification: "赤い尾びれ、白い腹部、巨大な頭部という特徴的な色彩と体形で識別できます。",
    nameOrigin: "英名・流通名ともに、鮮やかな赤い尾びれに由来します。",
    humanRelation: "南米では食用・釣魚として利用され、世界中で大型観賞魚としても飼育されます。ただし非常に大型化するため一般家庭での終生飼育には大きな設備が必要です。",
    observationPoint: "尾だけでなく口とひげの大きさを見てください。成長すると非常に巨大な捕食魚になります。",
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
        text: "上向きの大きな口を使って水面付近の餌を捕らえます。野外では水上の昆虫を捕らえるため、水面から飛び出すこともあります。"
      },
      {
        title: "卵を守るのはオスの口",
        text: "オスは受精卵を口の中へ入れ、卵だけでなくふ化後の仔魚まで長期間保護します。口内保育は約6週間続くことがあります。"
      }
    ],
    bodyLength: "FishBaseでは最大全長約90cm。大型個体では1m近くになります。",
    distribution: "南米のアマゾン川流域、ルプヌニ川、オヤポック川などに分布します。",
    habitat: "河川、氾濫原、湖沼などの水面近くをよく利用します。",
    diet: "魚類、甲殻類、昆虫などを食べる雑食性・肉食傾向の強い魚です。",
    features: "銀白色の大きな鱗、非常に長い背びれと尻びれ、下あご先端にある2本のひげが特徴です。",
    behavior: "水面近くをゆっくり泳ぎ、上方にいる獲物を狙います。驚くと非常に高く跳ねることがあります。",
    reproduction: "オスが卵・仔魚を口内保育します。仔魚がある程度成長するまで口へ戻して保護する行動もあります。",
    identification: "非常に大きな銀色の鱗、上向きの口、下あごの2本のひげを確認します。",
    nameOrigin: "銀色に輝く体を持つアロワナであることからシルバーアロワナと呼ばれます。",
    humanRelation: "大型観賞魚として世界的に人気があります。南米では食用にも利用されます。",
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
        text: "手首の骨の一部が発達した『偽の親指』を持ち、竹などを前足でつかむのに役立ちます。"
      },
      {
        title: "足の裏まで毛が生えている",
        text: "寒い山地で生活するため、足裏にも密な毛が生えています。八景島公式でもこの特徴が紹介されています。"
      }
    ],
    bodyLength: "頭胴長約50〜65cm、尾長約30〜50cm。体重はおよそ3〜6kg程度です。",
    distribution: "八景島公式ではインド北東部、ネパール、ブータン、ミャンマー北部、中国などが分布域として紹介されています。",
    habitat: "標高の高い温帯林・山地林で、竹が豊富な森林を主な生活場所とします。",
    diet: "竹の葉や新芽を中心に、果実、昆虫、小動物なども利用します。",
    features: "赤褐色の毛、白い顔の模様、長く太い縞模様の尾が特徴です。",
    behavior: "木登りが非常に得意で、木の上で休息することも多くあります。通常は単独で行動する傾向があります。",
    reproduction: "メスは通常1〜数頭の仔を産み、樹洞などを巣として利用します。",
    identification: "赤褐色の体と白い顔、長い縞模様の尾が特徴です。",
    nameOrigin: "英語red pandaに対応する動物で、ジャイアントパンダとは別のレッサーパンダ科に属します。",
    humanRelation: "生息地の減少や密猟などが問題となっており、国際的な保全対象です。",
    observationPoint: "木を登るときの足と、餌を持つ前足に注目してください。",
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
        text: "生きている状態で体が非常に透明で、脊椎や内部構造まで外側から見ることができます。"
      },
      {
        title: "2013年に正式に別種として整理された",
        text: "観賞魚として長年Kryptopterus bicirrhisの名前で流通していましたが、実際の透明な小型種は2013年にKryptopterus vitreolusとして記載されました。"
      }
    ],
    bodyLength: "最大で標準体長約6.5cm。",
    distribution: "タイ半島部・タイ南東部の河川から知られています。マレーシア・ペナン島からの記録は確認が必要とされています。",
    habitat: "流れの緩い河川や、褐色から黒色を帯びる止水・緩流環境に生息します。",
    diet: "小型の水生無脊椎動物や動物プランクトンなどを食べます。",
    features: "筋肉や色素が少なく非常に透明で、銀色の内臓部分と背骨が目立ちます。ナマズ類らしい長いひげも持ちます。",
    behavior: "群れを作って中層を泳ぎ、同じ方向を向いて静止するように泳ぐ姿もよく見られます。",
    reproduction: "野外での詳しい繁殖生態について、今回確認した主要資料では十分な情報がないため断定しません。",
    identification: "生時に本当に透明であることが最大の特徴です。大型で半透明なK. bicirrhisとは別種です。",
    nameOrigin: "Translucent／glassという名前は、ガラスのように透明な体に由来します。",
    humanRelation: "世界的に人気の高い観賞魚です。八景島公式でもフォレストガーデンの代表生物として紹介されています。",
    observationPoint: "体表の色ではなく体の中を見てください。背骨や内臓の位置を直接確認できます。",
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
        text: "体側を走る黒い帯は尾柄で終わらず、尾びれ中央部まで続きます。識別に使われる重要な特徴です。"
      },
      {
        title: "『コケ取り魚』として有名",
        text: "岩や流木などの表面に付着する藻類を食べるため、水草水槽では藻類除去を目的に飼育されることがあります。"
      }
    ],
    bodyLength: "最大で標準体長約16cm。",
    distribution: "タイからインドネシアなど東南アジアに分布します。",
    habitat: "透明で流れの速い渓流や河川、急流付近の底層に生息します。",
    diet: "付着藻類やデトリタス、小型の水生生物などを利用します。",
    features: "細長い体の中央を太い黒帯が走り、その帯は尾びれ中央まで続きます。",
    behavior: "河床近くを活発に泳ぎ、岩や植物表面をついばみます。",
    reproduction: "野外での詳しい繁殖生態について資料が限られるため断定しません。",
    identification: "黒帯が尾びれまで連続することや、体側・口周辺の形を確認します。",
    nameOrigin: "Siameseはタイの旧称Siamに由来します。",
    humanRelation: "水草水槽の『コケ取り魚』として非常に有名です。ただし観賞魚流通では近縁のCrossocheilus属が同じ名前で扱われることがあるため、個体レベルの確定には展示ラベルの学名確認が理想です。",
    observationPoint: "黒い横線を頭から尾まで追い、尾びれの中まで続いているか見てください。",
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
        text: "体は非常に細長く、黄褐色の体に黒褐色の帯が6〜10本ほど入ります。"
      },
      {
        title: "空気呼吸もできる",
        text: "FishBaseでは補助的な空気呼吸を行う魚として記録されています。酸素条件が悪い環境への適応の一つです。"
      }
    ],
    bodyLength: "最大で全長約12cm。",
    distribution: "東南アジアに分布します。",
    habitat: "森林内の小河川、低地の水路、泥底や落ち葉がたまる泥炭湿地などに生息します。",
    diet: "小型の底生無脊椎動物や有機物などを底から探して食べます。",
    features: "非常に細長い体と、黄色から橙褐色の地に入る不規則な黒色帯が特徴です。",
    behavior: "底生性で、落ち葉や砂・泥の中へ潜ることがあります。暗い時間帯に活動性が高まります。",
    reproduction: "卵生で、繁殖時には明瞭なペアを形成することが知られています。",
    identification: "細長い体と6〜10本ほどの帯が特徴ですが、Pangio属には酷似種が多く、観賞魚流通では別種がクーリーローチ名で扱われる場合があります。",
    nameOrigin: "種小名kuhliiはドイツの博物学者Heinrich Kuhlにちなみます。",
    humanRelation: "温和な小型底生魚として観賞魚で広く飼育されています。",
    observationPoint: "明るい場所だけでなく流木や落ち葉の下を探してください。体を半分だけ隠していることがあります。",
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
        text: "観賞魚では今も『ラスポラ』の名前が定着していますが、1999年の分類再検討以降はTrigonostigma属に移されています。"
      },
      {
        title: "卵を葉の裏へ産む",
        text: "一般的な小型コイ科魚類とは少し異なり、幅広い水草の葉の裏側などへ卵を産み付けます。"
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
    nameOrigin: "heteromorphaは『異なる形』を意味します。流通名には旧属名Rasboraが現在も残っています。",
    humanRelation: "世界的に非常に人気の高い小型観賞魚です。",
    observationPoint: "群れ全体を見ると、黒い三角形模様が同じ方向へ一斉に動く様子が目立ちます。",
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
        text: "普通のエビのように底をついばみ続けるのではなく、水流の強い場所で上流を向き、扇状の脚を広げて濾過摂食します。"
      }
    ],
    bodyLength: "全長8〜10cm程度になります。",
    distribution: "東南アジアの河川に分布します。",
    habitat: "水流のある淡水河川で、岩や流木の上など流れを受けやすい場所を利用します。",
    diet: "水中を漂う微小な有機物、プランクトン、細かな餌粒などを濾し取って食べます。",
    features: "比較的大型で頑丈な体を持ち、前方の脚の先端が扇状になっています。体色は褐色、赤褐色など個体差があります。",
    behavior: "流れの方向へ体を向け、両方の扇状脚を交互に広げて餌を集めます。",
    reproduction: "雌は卵を腹部に抱えて保護します。自然下の幼生生活については複雑な生活史を持つと考えられますが、今回のデータでは詳細を断定しません。",
    identification: "はさみではなく、大きな扇状の毛を持つ前脚が最大の特徴です。",
    nameOrigin: "観賞魚市場でロックシュリンプ、アジアロックシュリンプなどの名前で流通します。",
    humanRelation: "濾過摂食という珍しい食べ方から人気の淡水観賞エビです。",
    observationPoint: "水流の出口付近を探してください。扇を開いたり閉じたりする動きを観察できます。",
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
        text: "ナマズ目のプレコ類ではなく、コイ目の急流性魚類です。観賞魚での姿がプレコに似るためこの流通名が使われています。"
      },
      {
        title: "体全体が吸盤のよう",
        text: "胸びれ・腹びれが横へ大きく広がり、平たい腹面と合わせて岩へ密着できます。急流でも流されにくい体です。"
      }
    ],
    bodyLength: "最大で標準体長約6.5cm。",
    distribution: "ボルネオ島固有です。",
    habitat: "酸素が豊富で流れの強い渓流・急流の岩場に生息します。",
    diet: "岩の表面に付着する藻類や微小な有機物などを食べます。",
    features: "上下に強く平たい体と、大きく横へ広がった胸びれ・腹びれを持ちます。",
    behavior: "岩へ腹部を密着させ、強い水流の中で表面の餌を削り取ります。",
    reproduction: "本種の詳しい繁殖生態について十分な資料がないため断定しません。",
    identification: "プレコのように見えますが、口やひげではなく大きな胸・腹びれで体を岩へ密着させています。",
    nameOrigin: "ボルネオ島産で、外見がプレコ類を思わせることからこの流通名があります。",
    humanRelation: "急流環境を再現する観賞魚として人気があります。",
    observationPoint: "水槽のガラスや石に張り付いた腹側を観察すると、吸盤状の体形が分かります。",
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
        text: "水面や流木の裏側などから餌を取る際、腹側を上へ向けて泳ぐことが日常的です。"
      },
      {
        title: "色も普通の魚と逆",
        text: "普通の魚は背中側が暗く腹側が明るいことが多いですが、本種では逆さまの姿勢に合わせ、腹側の方が暗色になります。"
      }
    ],
    bodyLength: "最大で全長約9.6cm。",
    distribution: "アフリカのコンゴ川中流域などに分布します。",
    habitat: "河川や支流の岩・流木が多い場所に生息します。",
    diet: "主に夜間に昆虫、甲殻類、植物質などを食べます。",
    features: "ナマズらしいひげを持ち、腹側の色が背側より暗い逆カウンターシェーディングが特徴です。",
    behavior: "流木や水草の下側を逆さまに泳ぎ、表面に付着した餌などを食べます。",
    reproduction: "卵生です。本種の詳しい繁殖行動については情報が限られます。",
    identification: "普段から腹側を上へ向けて泳ぐ行動が最大の特徴です。",
    nameOrigin: "逆さまになって泳ぐナマズであることからサカサナマズと呼ばれます。",
    humanRelation: "独特な泳ぎ方から世界的に人気の観賞魚です。",
    observationPoint: "逆さまに泳ぐことを異常行動と思わず、どの場所で逆さまになるか観察してください。",
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
        text: "背中には普通の魚のような1枚の背びれではなく、10〜13個ほどの小さな背びれが一列に並びます。"
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
    behavior: "底層をゆっくり移動し、胸びれを使って歩くように進むこともあります。酸素不足時には水面へ浮上します。",
    reproduction: "雨季に繁殖・産卵することが報告されています。",
    identification: "太い黒色横帯と多数の小さな背びれが特徴です。",
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
        text: "若い時期にはウーパールーパーのような外鰓を持ちます。成長に伴って外鰓は失われます。"
      },
      {
        title: "鰾を肺のように使う",
        text: "水面から空気を吸い込み、発達した鰾でガス交換できるため、酸素の少ない湿地でも生活できます。"
      }
    ],
    bodyLength: "最大で標準体長約70cm。",
    distribution: "西アフリカからナイル川水系、チャド湖水系、コンゴ川水系の一部などに分布します。",
    habitat: "湿地、河川沿岸、淡水ラグーン、泥底など穏やかな水域を利用します。",
    diet: "魚、昆虫、甲殻類、貝類、カエルなどを食べます。",
    features: "細長い円筒形の体と複数の独立した背びれ、硬いガノイン鱗を持ちます。",
    behavior: "底近くを蛇のように泳ぎ、胸びれも使って移動します。水面へ上がって空気呼吸を行います。",
    reproduction: "卵生で、水草などのある浅い環境で繁殖します。幼魚には外鰓があります。",
    identification: "デルヘッツイのような太い横帯がなく、比較的単色で滑らかな体色です。",
    nameOrigin: "種名senegalusはセネガルに由来します。",
    humanRelation: "ポリプテルス類の中でも古くから観賞魚として飼育されてきた種類です。",
    observationPoint: "デルヘッツイと並べ、横帯の有無と背びれ数・体色を比較してください。",
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
        text: "成熟したオスでは背びれや尾びれが長く伸び、メスよりも非常に派手な姿になります。"
      },
      {
        title: "鱗が虹色に光る",
        text: "銀色の体表は光の当たり方によって青、緑、黄色、紫などさまざまな色に輝いて見えます。"
      }
    ],
    bodyLength: "全長8〜10cm程度になります。",
    distribution: "アフリカのコンゴ川流域に分布します。",
    habitat: "流れのある河川や支流の中層に群れで生活します。",
    diet: "昆虫、甲殻類、小型水生動物、植物質などを利用します。",
    features: "銀色から虹色に輝く体と、大きく発達したひれが特徴です。特にオスの尾びれ中央部が伸びます。",
    behavior: "群れを作って中層を活発に泳ぎます。",
    reproduction: "卵生で、水草などの間へ多数の卵をばらまくタイプです。",
    identification: "大型のテトラ類で、虹色の体とオスの長いひれが特徴です。",
    nameOrigin: "コンゴ川流域に分布するテトラ類であることが名前の由来です。",
    humanRelation: "世界的に人気の高い観賞魚で、八景島公式でもフォレストガーデンの代表生物として紹介されています。",
    observationPoint: "照明の角度によって鱗の色がどのように変化するか観察してください。",
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
        text: "黒褐色の甲板中央から黄色い線が放射状に伸び、星が並んだような非常に美しい模様になります。"
      },
      {
        title: "国際取引規制が最も厳しい附属書I",
        text: "違法なペット取引による捕獲が大きな問題となり、2019年にCITES附属書IIから附属書Iへ移されました。"
      }
    ],
    bodyLength: "通常、オスは甲長20〜25cm程度、メスは30cm前後になり、メスの方が大型です。",
    distribution: "インド、パキスタン、スリランカなどインド亜大陸に分布します。",
    habitat: "乾燥した草原、低木林、農地周辺などに生息します。",
    diet: "草、葉、花、果実などを食べる植物食性です。",
    features: "丸みのある高い甲羅と、各甲板から放射状に伸びる黄色い星形模様を持ちます。",
    behavior: "雨季には活動性が高まり、乾燥・高温時には日陰などで休息します。",
    reproduction: "卵生で、メスは地面に穴を掘って卵を産みます。",
    identification: "黒色地に黄色い放射線が入る星形甲羅模様が非常に特徴的です。",
    nameOrigin: "甲羅に並ぶ星形の模様からホシガメと呼ばれます。",
    humanRelation: "ペット目的の密猟・違法取引が大きな脅威です。CITES附属書Iに掲載されています。",
    observationPoint: "甲羅全体を見るだけでなく、1枚の甲板から何本の黄色い線が伸びているか見てください。",
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
        text: "日本の環境省などでは現在もTanakia tanagoが広く使われていますが、2026年7月版Eschmeyer's Catalog of FishesではPseudorhodeus tanagoが有効名として採用されています。"
      },
      {
        title: "卵を二枚貝の中へ産む",
        text: "メスは長い産卵管を使ってマツカサガイなど淡水二枚貝の鰓の中へ卵を産みます。仔魚は貝の中で成長してから外へ出ます。"
      }
    ],
    bodyLength: "環境省では体長30〜40mm程度、神奈川県資料では5〜6cm程度までになるとされています。",
    distribution: "日本固有種で、現在の自然分布は栃木県・千葉県のごく限られた水域に残るとされています。",
    habitat: "湧水を水源とする水路や池など、流れの緩やかな淡水環境に生息します。",
    diet: "小型水生動物、付着藻類などを食べます。",
    features: "小型のタナゴで、繁殖期のオスは体色が鮮やかになり、尻びれ先端が黒くなる特徴があります。",
    behavior: "浅い水路や池で生活し、繁殖期にはオスが縄張り的な行動を示します。",
    reproduction: "産卵期は主に春から夏で、メスは淡水二枚貝の鰓内へ産卵します。",
    identification: "小型の体、繁殖期オスの婚姻色、尻びれの黒色部などを確認します。",
    nameOrigin: "東京・小石川の東京帝国大学附属植物園で発見されたことから『都＝東京』の名が付いたとされています。",
    humanRelation: "国の天然記念物かつ国内希少野生動植物種で、環境省レッドリストでは絶滅危惧IA類です。",
    observationPoint: "繁殖期のオスがいれば、通常時より鮮やかになる体色と尻びれに注目してください。",
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
        text: "鮮やかな黄色と黒色の模様は、捕食者に対して毒を持つことを知らせる警告色として機能します。"
      },
      {
        title: "毒は食べ物から作られる",
        text: "野生のヤドクガエル類の皮膚アルカロイドは、餌となる小型節足動物から取り込まれると考えられています。飼育下繁殖個体では毒性が大きく低下します。"
      }
    ],
    bodyLength: "体長3〜5cm程度。",
    distribution: "南米北部のベネズエラ、ガイアナ周辺などに分布します。",
    habitat: "熱帯林の林床、岩場、落ち葉の多い湿った環境に生息します。",
    diet: "アリ、ダニなど非常に小さな節足動物を食べます。",
    features: "黒い体に太い黄色の帯・斑紋が入り、個体によって模様には変異があります。",
    behavior: "昼行性で、地表付近を歩きながら小型昆虫を探します。オスは繁殖期に鳴いてメスへアピールします。",
    reproduction: "陸上の湿った場所へ少数の卵を産み、ふ化したオタマジャクシを親が水場へ運ぶ行動があります。",
    identification: "黄色い太い帯と黒い地色の組み合わせが特徴です。",
    nameOrigin: "黄色い帯を持つヤドクガエルであることからキオビヤドクガエルと呼ばれます。",
    humanRelation: "鮮やかな警告色から動物園・水族館で人気があります。野生個体には皮膚毒があるため触れないことが重要です。",
    observationPoint: "模様だけでなく指先も観察してください。木や葉へつかまるための吸盤状構造があります。",
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
        text: "緑と黒の個体が有名ですが、青色・水色・黄色など地域個体群によって色彩が大きく異なります。"
      },
      {
        title: "父親がオタマジャクシを運ぶ",
        text: "卵からふ化したオタマジャクシを親、特にオスが背中へ乗せ、安全な水場まで運ぶ行動が知られています。"
      }
    ],
    bodyLength: "体長3〜5cm程度。",
    distribution: "中米のニカラグア、コスタリカ、パナマから南米北西部などに分布します。",
    habitat: "湿潤な熱帯林の林床、渓流周辺などに生息します。",
    diet: "アリ、ダニ、非常に小さな昆虫などを捕食します。",
    features: "黒色を基調として緑色・青色などの不規則な斑紋が広がります。",
    behavior: "昼間に活動し、林床の落ち葉や植物上を移動して餌を探します。",
    reproduction: "湿った陸上へ卵を産み、親が管理します。ふ化した幼生は親の背中に乗って小さな水場へ運ばれます。",
    identification: "黒色地に不規則な緑・青色斑が入ることが特徴ですが、色彩変異が非常に大きい種です。",
    nameOrigin: "全身にまだら状の斑紋を持つことが和名の由来です。",
    humanRelation: "観賞・展示で人気があります。飼育下個体は野生個体ほど強い毒性を持たないことが一般的です。",
    observationPoint: "キオビヤドクガエルと模様を比較してください。こちらは帯よりも不規則なまだら模様が目立ちます。",
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
        text: "日本動物園水族館協会の飼育動物検索では、チャグロサソリにHeterometrus longimanusが対応しています。"
      },
      {
        title: "赤ちゃんは母親の背中へ",
        text: "サソリは卵を外へ産むのではなく、母体から仔を産みます。生まれた仔は最初の脱皮まで母親の背中に乗って生活します。"
      }
    ],
    bodyLength: "全長10cm前後になる大型のサソリです。",
    distribution: "東南アジアの熱帯地域に分布します。",
    habitat: "湿度の高い熱帯林の林床、倒木や石の下、地面の穴などを利用します。",
    diet: "昆虫やその他の小型節足動物を捕食します。",
    features: "暗褐色から黒色の大型の体と、太く発達したはさみを持ちます。尾の先端には毒針があります。",
    behavior: "主に夜行性で、日中は倒木や石の下などに隠れます。",
    reproduction: "胎生で、メスは多数の仔を産みます。生まれた仔は母親の背中へ乗ります。",
    identification: "大型で黒褐色の体と太いはさみが特徴ですが、Heterometrus属には似た種類が多いため厳密な同定には注意が必要です。",
    nameOrigin: "茶色から黒褐色の体色を持つサソリであることが和名に表れています。",
    humanRelation: "毒針を持つため展示個体へ触れることはできません。飼育・取り扱いは専門的な管理下で行う必要があります。",
    observationPoint: "尾の毒針だけでなく、大きなはさみの形と歩脚を観察してください。",
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
        text: "八景島公式では『マクラギヤスデ』と表記されています。学名はNiponia nodulosaで、巨大なアフリカ産ヤスデではなく日本にも普通に生息する小型種です。"
      },
      {
        title: "脱皮するたび体節と脚が増える",
        text: "幼体は成虫より体節が少なく、脱皮を繰り返すたびに新しい体節と脚を追加します。成体では通常20胴節になります。"
      }
    ],
    bodyLength: "体長約15〜20mm。",
    distribution: "本州の関東地方以南、九州、南西諸島など日本の広い範囲から記録されています。",
    habitat: "森林や公園などの落ち葉、腐葉土、石の下、朽木の樹皮下など湿った林床に生息します。",
    diet: "落ち葉、腐植質、朽木などの分解途中の植物質を食べます。",
    features: "体は扁平でくすんだ褐色をしており、背板の間に隙間があります。成体では20胴節を持ちます。",
    behavior: "林床をゆっくり歩き、乾燥を避けて落ち葉や朽木の内部に隠れます。集団で見つかる場合もあります。",
    reproduction: "卵からふ化した幼体は少ない体節を持ち、脱皮ごとに新しい体節を追加する『増節変態』によって成長します。",
    identification: "細長い円筒形ではなく、幅広く扁平な体と、枕木が並ぶような背板が特徴です。",
    nameOrigin: "背板が間隔を空けて並ぶ姿が、鉄道の線路に並ぶ枕木に似ることからマクラギヤスデと名付けられました。",
    humanRelation: "日本の身近な林床で落ち葉などを分解する土壌動物の一つです。発生・体節形成の研究材料としても利用されています。",
    observationPoint: "非常に小さいので、背中を近くで見てください。幅広い背板が枕木のように並んでいます。",
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
        text: "Scolopendra属の中でも大型で、20cmを超える個体が知られています。2016年の東南アジア産Scolopendra属の分類再検討でも独立種Scolopendra dehaaniとして扱われています。"
      },
      {
        title: "昆虫だけでなく脊椎動物も襲う",
        text: "昆虫やクモなどを主に捕食しますが、野外ではカエルやヘビなど小型脊椎動物を捕食した記録もあります。"
      }
    ],
    bodyLength: "大型個体では体長20cmを超えます。20cmを超える個体が分類研究でも確認されています。",
    distribution: "タイを含む東南アジアを中心に分布します。ベトナムなど周辺地域からも記録されています。",
    habitat: "高温多湿な森林の林床で、落ち葉、石、倒木の下や地中など湿度の保たれる場所を利用します。",
    diet: "昆虫、クモなどの節足動物を中心に、小型の爬虫類・両生類など自分より小さい脊椎動物を捕食することもあります。",
    features: "非常に細長い体は多数の体節からなり、各胴節に1対の歩脚があります。頭部直後には毒腺につながる顎肢が発達しています。",
    behavior: "主に地表や落ち葉の下で活動する捕食者です。夜間活動が多い一方、タイでは昼間の採餌や樹上での活動も記録されています。",
    reproduction: "メスは卵の塊を体で巻くように抱え、ふ化まで保護します。S. dehaaniでも卵を抱える行動が記録されています。",
    identification: "大型のScolopendra属で、体色には地域・成長段階による大きな変異があります。色だけで近縁種と識別するのは危険です。",
    nameOrigin: "タイ産の大型オオムカデとして展示・流通上『タイオオムカデ』と呼ばれています。",
    humanRelation: "顎肢から毒を注入でき、咬まれると強い痛みや腫れを生じる可能性があります。生体へ直接触れないことが重要です。",
    observationPoint: "脚の数だけでなく、頭部直後にある太い顎肢を観察してください。普通の歩脚とは形が大きく異なります。",
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
        text: "複数の巣穴がつながる複雑な地下トンネルを作り、家族単位の群れが集まって大きなコロニーを形成します。"
      },
      {
        title: "『ドッグ』は鳴き声から",
        text: "犬の仲間ではなくリス科の齧歯類です。危険を見つけると犬の鳴き声を思わせる警戒声を出すことが名前の由来です。"
      }
    ],
    bodyLength: "全長約35〜42cm。体重はおよそ0.7〜1.7kgで、オスの方が大型になる傾向があります。",
    distribution: "北アメリカ中央部の大平原地域に自然分布します。",
    habitat: "乾燥した短草草原など見通しの良いプレーリーに巣穴を掘って生活します。",
    diet: "食物の98％以上を植物質が占め、草の葉・茎・根などを主に食べます。昆虫を食べることもあります。",
    features: "ずんぐりした体形と短い耳を持ち、名前通り尾の先端が黒色になります。",
    behavior: "昼行性で社会性が非常に高く、家族群で生活します。見張り役が捕食者を発見すると警戒声を出して仲間へ知らせます。",
    reproduction: "通常は年1回繁殖し、妊娠期間は約33〜38日です。1回に複数の仔を産み、仔は地下の巣穴内で育ちます。",
    identification: "尾の先端が黒いことが、他のプレーリードッグ類との分かりやすい違いの一つです。",
    nameOrigin: "プレーリーに暮らし、犬のような警戒声を出すことからプレーリードッグと呼ばれます。",
    humanRelation: "巣穴を掘り草を刈ることで草原環境を変化させ、多くの動植物に影響を与える重要な草原生態系の構成種です。",
    observationPoint: "立ち上がって周囲を見る個体や、仲間同士で触れ合う行動に注目してください。",
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
        text: "藻類や甲殻類などに含まれるカロテノイド色素を取り込むことで、羽毛が鮮やかな紅色になります。色素が不足すると体色は薄くなります。"
      },
      {
        title: "親は『フラミンゴミルク』を作る",
        text: "オスとメスの両方が消化管から栄養価の高い赤色の分泌物を出し、ヒナへ与えます。"
      }
    ],
    bodyLength: "全長約120〜145cm、体重約2.1〜4.1kg。フラミンゴ類では最大級です。",
    distribution: "カリブ海地域、中央アメリカ周辺、南アメリカ北部、ガラパゴス諸島などに分布します。",
    habitat: "塩湖、塩性ラグーン、干潟など浅い水域に大群で生息します。",
    diet: "藻類、微小な甲殻類、水生昆虫、プランクトンなどを食べます。",
    features: "長い首と脚、下向きに曲がったくちばし、鮮やかな紅色の羽毛が特徴です。翼を開くと黒い風切羽が見えます。",
    behavior: "くちばしを逆さまに水中へ入れ、舌をポンプのように動かしながら、くちばし内部のラメラで小さな餌を濾し取ります。",
    reproduction: "泥を積み上げて円錐状の巣を作り、通常1個の卵を産みます。雌雄が交代で抱卵し、ふ化後も両親がヒナを育てます。",
    identification: "ヨーロッパフラミンゴなどに比べて全身の紅色が濃く、脚も鮮やかな桃色になります。",
    nameOrigin: "非常に鮮やかな紅色の羽毛を持つことからベニイロフラミンゴと呼ばれます。",
    humanRelation: "世界各地の動物園で飼育される代表的なフラミンゴです。IUCNではLeast Concernと評価されています。",
    observationPoint: "餌を食べるときのくちばしの向きを見てください。頭を逆さまにして水を濾しています。",
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
        text: "ユーラシア大陸を中心に分布しますが、日本にも数少ない冬鳥・迷鳥として飛来することがあります。"
      }
    ],
    bodyLength: "全長約58〜70cm、体重約1〜1.5kg。",
    distribution: "ユーラシア大陸中部などで繁殖し、冬季には北アフリカ、南アジア、中国などへ移動します。",
    habitat: "湖沼、河川、湿地、草原に近い水辺などを利用します。",
    diet: "水草・若芽・種子などの植物質に加え、昆虫、甲殻類、貝類なども食べる雑食性です。",
    features: "全身が鮮やかな橙褐色で、頭部はやや淡色です。翼を広げると白い雨覆羽と黒い風切羽が目立ちます。",
    behavior: "日中は水上で休むことも多く、朝夕を中心に陸上や浅い水辺で餌を探します。",
    reproduction: "岩穴、崖の穴、樹洞などを利用して営巣し、複数の卵を産みます。",
    identification: "橙褐色の大型のカモで、繁殖期のオスでは首の黒輪が目立ちます。メスは顔がやや白っぽく見えます。",
    nameOrigin: "赤褐色の体を持つツクシガモ類であることからアカツクシガモと呼ばれます。",
    humanRelation: "IUCNではLeast Concernですが、日本では飛来数の少ない鳥として観察されます。",
    observationPoint: "首を観察してください。黒い首輪があれば繁殖羽のオスを見分ける手掛かりになります。",
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
        text: "コールダックは野生の別種ではありません。マガモを家畜化したアヒルをさらに小型化した家禽品種です。"
      },
      {
        title: "大きな声が名前の由来",
        text: "小さな体に対して非常に大きな声を出します。もともとはその鳴き声で野生のカモを呼び寄せる、おとり用のアヒルとして利用されました。"
      }
    ],
    bodyLength: "全長約30cm、体重約600〜1000g。一般的なアヒルよりかなり小型です。",
    distribution: "家禽品種のため自然分布域はありません。現在は世界各地で観賞・ペット用などとして飼育されています。",
    habitat: "家禽として人の飼育環境で生活します。水場を好みますが、野生種として特定の自然生息地を持つものではありません。",
    diet: "穀類、植物質、水生小動物などを利用する雑食性で、飼育下では家禽用の配合飼料などが用いられます。",
    features: "非常に小型で丸みのある体、大きな頭、短いくちばしが特徴です。白色、灰色、マガモ型など複数の羽色品種があります。",
    behavior: "群れで生活し、水浴びや採餌を行います。小型ですが飛翔能力の高い個体もいます。特にメスは大きな声でよく鳴きます。",
    reproduction: "卵生で、他の家禽アヒルと同様に産卵・抱卵します。品種改良された家禽なので繁殖特性には系統差があります。",
    identification: "一般的なアヒルより圧倒的に小さく、丸い頭と非常に短いくちばしが特徴です。",
    nameOrigin: "野生のカモを鳴き声で『call＝呼ぶ』ためのおとりとして利用されたことからCall Duckと呼ばれます。",
    humanRelation: "現在は観賞用・ペットとして飼育される小型アヒルです。JAZAでは『アヒル（家禽）コールダック』として管理されています。",
    observationPoint: "普通のアヒルと体格・くちばしの長さを比べてください。鳴き声にも注目です。",
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
        text: "クリック音を発し、その反響を聞き取るエコーロケーションを使います。水中で餌や物体までの位置を把握する重要な能力です。"
      },
      {
        title: "遊び行動がとても豊富",
        text: "波に乗ったり、ジャンプしたり、物を使って遊んだりします。八景島でも、さまざまな物に興味を持ち、自分で遊び方を考えるイルカとして紹介されています。"
      }
    ],

    bodyLength:
      "全長約2〜4m。八景島では体長約3mと紹介されています。",

    distribution:
      "世界各地の熱帯から温帯の海に広く分布します。沿岸だけでなく沖合を利用する個体群もあります。",

    habitat:
      "湾、河口、沿岸域から大陸棚、外洋まで幅広い海域を利用します。",

    diet:
      "魚類、イカ類、甲殻類などを食べます。単独で餌を探すだけでなく、複数個体で魚群を追い込むこともあります。",

    features:
      "灰色の流線型の体を持ち、吻は太く比較的短い形をしています。背びれは大きな鎌形で、頭頂部には呼吸に使う噴気孔があります。",

    behavior:
      "社会性が高く、複数個体で群れを形成します。鳴音を使ってコミュニケーションを行い、エコーロケーションによって周囲の環境や餌を探ります。",

    reproduction:
      "胎生で、通常は1頭の子を出産します。妊娠期間は約12か月で、子は母乳を飲みながら数年間母親と行動します。",

    identification:
      "太く短い吻、大きな鎌形の背びれ、比較的がっしりした体型が特徴です。ただし近縁種との識別には詳細な形態や遺伝情報が必要な場合があります。",

    nameOrigin:
      "英名のBottlenoseは、太く突き出した吻を瓶の口に見立てた名称です。日本では「ハンドウイルカ」という名称も使用されます。",

    humanRelation:
      "世界各地の水族館で飼育され、認知能力、社会行動、音響コミュニケーションなどの研究対象にもなっています。",

    observationPoint:
      "アーチ水槽では、頭上を泳ぐときに噴気孔、胸びれ、背びれ、尾びれを順番に観察してみてください。泳ぎながら体をどのように動かしているかも注目ポイントです。",

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
        text: "体表は丈夫でざらついた皮に覆われていますが、調理時には皮を比較的簡単にはがすことができます。和名もこの特徴に由来するとされています。"
      },
      {
        title: "幼魚は流れ藻を利用する",
        text: "幼魚は海面を漂う流れ藻の周辺で見られることがあり、流れ藻を隠れ場所や餌場として利用します。"
      }
    ],

    bodyLength:
      "最大で全長約30cm。",

    distribution:
      "西部太平洋に分布し、日本周辺では北海道から東シナ海まで見られます。",

    habitat:
      "沿岸の岩礁、砂底、砂礫底、藻場などに生息し、主に海底付近を利用します。",

    diet:
      "ゴカイ類、小型甲殻類、貝類などの底生無脊椎動物を食べます。小さな口と丈夫な歯を使って餌をついばみます。",

    features:
      "体は左右に強く平たく、皮膚は厚くざらついています。頭部の上には非常に強い第1背びれ棘があり、口は小さく前方へ突き出しています。",

    behavior:
      "海底付近をゆっくり泳ぎながら餌を探します。危険を感じると第1背びれ棘を立てることがあります。",

    reproduction:
      "卵生です。沿岸域で繁殖し、繁殖時期は地域や水温などによって異なります。",

    identification:
      "左右に平たい体、小さな口、頭部にある太く長い第1背びれ棘が重要な特徴です。",

    nameOrigin:
      "丈夫な皮を比較的簡単にはぎ取れることから、「皮を剥ぐ魚」という意味でカワハギと呼ばれるようになったとされています。",

    humanRelation:
      "日本では重要な食用魚です。刺身、煮付け、鍋料理などに利用され、特に肝が食材として高く評価されています。養殖も行われています。",

    observationPoint:
      "頭の上にある長い第1背びれ棘を探してください。小さな口で底や岩をついばむような行動にも注目です。",

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
        text: "頭の左右から伸びて見える羽毛は「羽角」と呼ばれます。本当の耳の穴は頭部の羽毛に隠れています。"
      },
      {
        title: "夜の狩りに適応している",
        text: "大きな眼だけでなく聴覚も発達しており、暗い環境で小動物の位置を探すことができます。"
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
      "主に夜間に活動し、日中は木の枝や岩陰などで休みます。フクロウ類特有の羽毛構造によって、飛行時の音を小さくすることができます。",

    reproduction:
      "岩棚、地面、建物などを営巣場所として利用します。主にメスが抱卵し、オスが餌を運ぶことがあります。",

    identification:
      "黄色い眼、頭部の羽角、体全体に広がる細かな斑点模様が特徴です。",

    nameOrigin:
      "アフリカに分布するワシミミズク類であることから、この和名で呼ばれています。英名のSpottedは斑点模様を意味します。",

    humanRelation:
      "動物園などで飼育され、フクロウ類の夜行性や飛行、捕食行動について学ぶ教育展示にも利用されています。",

    observationPoint:
      "黄色い眼と頭の上にある羽角を探してください。羽角を立てているときと寝かせているときで、顔の印象が大きく変化します。",

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
        text: "前向きの指2本と後ろ向きの指2本を持ち、枝や食べ物をしっかりつかむことができます。"
      },
      {
        title: "くちばしは非常に強力",
        text: "大きく曲がったくちばしを使って、硬い木の実や種子を割ることができます。木を登るときに、くちばしを支えとして使うこともあります。"
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
      "背中と翼は鮮やかな青色で、胸から腹部は黄色です。額は緑色を帯び、顔には白い皮膚が露出した部分があります。",

    behavior:
      "ペアや群れで行動します。大きな声で鳴き合いながら移動し、ペア同士で羽繕いする行動も見られます。",

    reproduction:
      "樹洞などを巣として利用します。親鳥がヒナへ餌を与えて育てます。",

    identification:
      "鮮やかな青い翼と黄色い腹部、大きな黒色のくちばし、白い顔が非常に目立ちます。",

    nameOrigin:
      "瑠璃色を思わせる鮮やかな青色の羽を持つ大型のコンゴウインコであることから、ルリコンゴウインコと呼ばれています。",

    humanRelation:
      "美しい羽色と高い知能から世界各地の動物園などで飼育されています。",

    observationPoint:
      "青色と黄色だけでなく、白い顔の部分に並ぶ細かな黒い羽毛を観察してください。枝を移動するときに足とくちばしをどのように使うかにも注目です。",

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
        text: "猛禽類としては非常に社会性が高く、複数個体で協力して獲物を追い込む行動が知られています。"
      },
      {
        title: "猛禽類の教育展示でも活躍",
        text: "人との関係を築きやすく社会性も高いことから、鷹狩や動物園の教育プログラムなどでも飼育されています。"
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
      "体は濃い褐色で、肩や腿に赤褐色の羽があります。長い黄色の脚と、尾の白色部分も特徴です。",

    behavior:
      "家族を中心とした群れを形成することがあります。複数個体で獲物を取り囲み、交代で追跡するなど、協力して狩りを行います。",

    reproduction:
      "木や大型のサボテンなどに巣を作ります。繁殖ペア以外の個体が子育てを手伝うこともあります。",

    identification:
      "濃褐色の体、赤褐色の肩、黄色い脚、尾の白色部分が特徴です。飛翔時には尾の白色が特に目立ちます。",

    nameOrigin:
      "英名Harris's Hawkは、博物学者Edward Harrisにちなむ名称です。日本でも英名をそのまま用いたハリスホークという呼び名が広く使用されています。",

    humanRelation:
      "社会性が高く訓練しやすいため、鷹狩や猛禽類の教育展示などで飼育されています。",

    observationPoint:
      "濃い褐色の体と赤褐色の肩、黄色い脚に注目してください。飛ぶ機会があれば尾にある白色部分も非常に分かりやすい特徴です。",

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
        text: "生まれたばかりのシロイルカは灰色をしています。成長するにつれて体色が薄くなり、成熟すると特徴的な白色になります。"
      },
      {
        title: "首を左右へ動かせる",
        text: "多くのクジラ類とは異なり頸椎が完全には癒合していないため、頭を上下左右へ比較的自由に動かせます。"
      }
    ],

    bodyLength:
      "全長約3〜5m。八景島では体重約0.5〜1.5tと紹介されています。",

    distribution:
      "北極海とその周辺の亜寒帯海域に分布します。カナダ、アラスカ、ロシア、グリーンランド周辺などで見られます。",

    habitat:
      "寒冷な沿岸域、湾、河口、入り江などを利用します。季節によって海氷のある海域も利用します。",

    diet:
      "魚類のほか、イカ、タコ、エビ、カニ、貝類などさまざまな動物を食べます。",

    features:
      "成熟すると全身が白くなります。背びれを持たず、丸く大きな額を持つことも特徴です。",

    behavior:
      "社会性が高く群れで生活します。多様な鳴き声を出すため「海のカナリア」とも呼ばれます。エコーロケーションも利用します。",

    reproduction:
      "胎生で、通常は1頭の子を出産します。妊娠期間は約15か月で、子は少なくとも約2年間母乳を飲むことがあります。",

    identification:
      "成体では真っ白な体、大きく丸い額、背びれが存在しないことが非常に分かりやすい特徴です。",

    nameOrigin:
      "成熟すると全身が白くなることからシロイルカと呼ばれます。英名Belugaも白色に関係する語に由来します。",

    humanRelation:
      "水族館で飼育されるほか、発声、エコーロケーション、認知能力などの研究対象にもなっています。",

    observationPoint:
      "背中に背びれがないことを確認してください。頭を左右へ動かす様子や、柔らかい額の形が変化する様子も特徴的です。",

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
        text: "白い腹部にある黒色斑の配置は個体によって異なります。そのため、模様を個体識別の手掛かりにできます。"
      },
      {
        title: "野生では深刻な絶滅危機",
        text: "野生個体数が大きく減少し、2024年にIUCNレッドリストでCritically Endangeredに引き上げられました。"
      }
    ],

    bodyLength:
      "全長約60〜70cm。",

    distribution:
      "アフリカ南部の沿岸に分布し、南アフリカ共和国とナミビア周辺などで繁殖します。",

    habitat:
      "岩礁海岸、沿岸の島、砂浜などに繁殖地を作り、海へ出て餌を探します。",

    diet:
      "イワシ類やカタクチイワシ類などの小型魚を中心に、イカ類なども食べます。",

    features:
      "背中は黒色、腹面は白色で、胸には黒い帯があります。眼の上にはピンク色の裸出部があり、腹部には黒色斑があります。",

    behavior:
      "海中では翼が変化したフリッパーを使って高速で泳ぎます。陸上では群れで生活し、繁殖や休息を行います。",

    reproduction:
      "地面の穴、岩の隙間、人工巣などを利用します。通常は2個ほどの卵を産み、オスとメスが交代で抱卵します。",

    identification:
      "胸にある1本の黒い帯、眼の上にあるピンク色の皮膚、腹部の黒い斑点が重要な特徴です。",

    nameOrigin:
      "南アフリカのケープ地方を含むアフリカ南部に生息することから、日本ではケープペンギンと呼ばれています。",

    humanRelation:
      "動物園や水族館で飼育されています。一方、野生では餌となる魚の減少、漁業との競合、気候変動などによって急速に個体数が減少しています。",

    observationPoint:
      "お腹にある黒い斑点を個体ごとに比べてみてください。同じケープペンギンでも模様がそれぞれ異なります。",

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
        text: "成熟したオスは首や胸、後頭部周辺の毛が発達し、ライオンのたてがみのように見えます。"
      },
      {
        title: "アザラシより陸上を移動しやすい",
        text: "後肢を体の前方へ回して体を支えることができるため、陸上では四肢を使うように歩くことができます。"
      }
    ],

    bodyLength:
      "全長約200〜280cm。オスはメスより大型になります。",

    distribution:
      "南アメリカ中部以南の太平洋岸と大西洋岸などに分布します。",

    habitat:
      "岩礁海岸、砂浜、沿岸の島などを休息・繁殖場所として利用し、海へ出て餌を探します。",

    diet:
      "魚類、イカやタコなどの頭足類、甲殻類などを捕食します。",

    features:
      "大型でがっしりとした体を持ちます。成熟したオスでは頭部と首が非常に太くなり、後頭部や胸周辺の毛がたてがみ状に発達します。",

    behavior:
      "海中では大きな前肢のフリッパーを使って泳ぎます。陸上では前肢と後肢を使って体を持ち上げ、比較的機敏に移動できます。",

    reproduction:
      "繁殖期には大型のオスが繁殖場所を確保し、複数のメスと繁殖します。通常は1頭の子を出産します。",

    identification:
      "小さな耳介が外から見えること、長い前肢、後肢を前方へ回して陸上を歩けることがアザラシ類との大きな違いです。",

    nameOrigin:
      "属名Otariaに由来する名称です。英名South American sea lionは、南アメリカに生息し、成熟オスがライオンのようなたてがみを持つことを表しています。",

    humanRelation:
      "水族館では高い運動能力や学習能力を生かした行動展示が行われています。",

    observationPoint:
      "小さな耳介と大きな前肢を探してください。陸上を移動するときに後肢を体の下へ入れて歩く様子を見ると、アザラシ類との違いがよく分かります。",

    references: [
      "横浜・八景島シーパラダイス：オタリア",
      "Mammal Diversity Database: Otaria flavescens"
    ]
  },







];


// ========================================
// 八景島 Fish Guide
// 展示場所データ
// ========================================


// ========================================
// アクアミュージアム
// LABO 1〜11
// ========================================

const aquaMuseumLabos = [

  {
    id: "labo1",
    number: 1,
    name: "はじまりの海"
  },

  {
    id: "labo2",
    number: 2,
    name: "身近な海の生きもの研究所"
  },

  {
    id: "labo3",
    number: 3,
    name: "海で進化した動物たち"
  },

  {
    id: "labo4",
    number: 4,
    name: "氷の海にくらす動物たち"
  },

  {
    id: "labo5",
    number: 5,
    name: "大海原に生きる群れと輝きの魚たち"
  },

  {
    id: "labo6",
    number: 6,
    name: "太陽の恵みをうける海と生きものたち"
  },

  {
    id: "labo7",
    number: 7,
    name: "未知なる海底谷 深海リウム"
  },

  {
    id: "labo8",
    number: 8,
    name: "海の王者サメ～五感で知るサメの世界～"
  },

  {
    id: "labo9",
    number: 9,
    name: "くらげりうむ"
  },

  {
    id: "labo10",
    number: 10,
    name: "サンゴ礁を彩る群れの魚たち"
  },

  {
    id: "labo11",
    number: 11,
    name: "フォレストリウム"
  }

];


// ========================================
// 八景島 全体の場所データ
// ========================================

const locationData = {

  // ----------------------------------------
  // 4つの水族館
  // ----------------------------------------

  facilities: [

    {
      id: "aquamuseum",
      name: "アクアミュージアム",
      icon: "🐟"
    },

    {
      id: "dolphin-fantasy",
      name: "ドルフィン ファンタジー",
      icon: "🐬"
    },

    {
      id: "umi-farm",
      name: "うみファーム",
      icon: "🌊"
    },

    {
      id: "fureai-lagoon",
      name: "ふれあいラグーン",
      icon: "🫧"
    }

  ],


  // ----------------------------------------
  // 現在のapp.jsとの互換用
  // ----------------------------------------

  labos: aquaMuseumLabos,


  // ----------------------------------------
  // 各施設の展示エリア
  // 今後こちらを使って全施設を動かします
  // ----------------------------------------

  areasByFacility: {


    // ======================================
    // アクアミュージアム
    // ======================================

    "aquamuseum": [

      ...aquaMuseumLabos,

      {
        id: "forest-garden",
        code: "FOREST GARDEN",
        name: "フォレストガーデン"
      },

      {
        id: "live-stadium",
        code: "LIVE STADIUM",
        name: "ライブスタジアム"
      },

      {
        id: "aqua-theater",
        code: "AQUA THEATER",
        name: "アクアシアター"
      }

    ],


    // ======================================
    // ドルフィン ファンタジー
    // ======================================

    "dolphin-fantasy": [

      {
        id: "dolphin-arch",
        code: "AREA 1",
        name: "アーチ水槽"
      },

      {
        id: "dolphin-cylinder",
        code: "AREA 2",
        name: "円柱水槽"
      }

    ],


    // ======================================
    // うみファーム
    // ======================================

   "umi-farm": [

  {
    id: "ocean-labo-a",
    code: "OCEAN LABO A",
    name: "東京湾の身近なクラゲ"
  },

  {
    id: "ocean-labo-b",
    code: "OCEAN LABO B",
    name: "岸壁マンション"
  },

  {
    id: "ocean-labo-c",
    code: "OCEAN LABO C",
    name: "人のくらしと東京湾"
  },

  {
    id: "ocean-labo-d",
    code: "OCEAN LABO D",
    name: "いのち輝くアマモの森"
  },

  {
    id: "ocean-labo-e",
    code: "OCEAN LABO E",
    name: "おさかなごはん"
  },

  {
    id: "fishermans-oasis",
    code: "FISHERMAN'S OASIS",
    name: "フィッシャーマンズオアシス"
  },

  {
    id: "marine-biotop",
    code: "MARINE BIOTOPE",
    name: "マリンビオトープ"
  }

],
  


    // ======================================
    // ふれあいラグーン
    // ======================================

    "fureai-lagoon": [

      {
        id: "welcome-port",
        code: "AREA 1",
        name: "ウエルカムポート"
      },

      {
        id: "whale-ocean",
        code: "AREA 3",
        name: "ホエールオーシャン"
      },

      {
        id: "sakana-reef",
        code: "AREA 4",
        name: "サカナリーフ"
      },

      {
        id: "hireashi-beach",
        code: "AREA 5",
        name: "ヒレアシビーチ"
      },

      {
        id: "friendly-circle",
        code: "AREA 6",
        name: "フレンドリーサークル"
      }

    ]

  }

};
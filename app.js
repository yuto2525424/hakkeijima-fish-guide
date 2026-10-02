// ========================================
// 八景島 Creature Guide
// アプリ画面制御
// 4施設対応版
// ========================================

if (typeof locationData === "undefined") {
  alert("location-data.js が読み込まれていません。");
  throw new Error("locationData is not defined");
}

if (typeof fishData === "undefined") {
  alert("fish-data.js が読み込まれていません。");
  throw new Error("fishData is not defined");
}

const homeScreen = document.body.innerHTML;

// ========================================
// 詳細ページから戻る位置を保存
// ========================================

let detailReturnState = {
  scrollY: 0,
  query: ""
};


function returnFromFishDetail(
  facilityId = "",
  areaId = ""
) {

  const savedScrollY =
    detailReturnState.scrollY;

  const savedQuery =
    detailReturnState.query;


  if (
    facilityId &&
    areaId
  ) {

    showArea(
      facilityId,
      areaId
    );

  } else {

    showFishList(
      savedQuery
    );

  }


  requestAnimationFrame(
    function() {

      requestAnimationFrame(
        function() {

          window.scrollTo(
            0,
            savedScrollY
          );

        }
      );

    }
  );

}

// ========================================
// ページ背景切り替え
// ========================================

function setPageBackground(backgroundId) {

  const availableBackgrounds = [
    "home",
    "aquamuseum",
    "dolphin-fantasy",
    "umi-farm",
    "fureai-lagoon",
    "none"
  ];

  document.body.dataset.pageBg =
    availableBackgrounds.includes(backgroundId)
      ? backgroundId
      : "home";

}



// ========================================
// 写真提供者
// 名前が決まるまでは空欄
// ========================================

const DEFAULT_PHOTO_CREDIT = "河本　凛";



// ========================================
// 共通
// ========================================

function escapeHTML(value) {

  if (value === undefined || value === null) {
    return "";
  }

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


function getFacility(facilityId) {

  return locationData.facilities.find(
    function(item) {
      return item.id === facilityId;
    }
  );

}


function getAreas(facilityId) {

  if (!locationData.areasByFacility) {
    return [];
  }

  return (
    locationData.areasByFacility[facilityId]
    || []
  );

}


function getArea(
  facilityId,
  areaId
) {

  return getAreas(facilityId).find(
    function(item) {
      return item.id === areaId;
    }
  );

}


function getAreaCode(area) {

  if (area.code) {
    return area.code;
  }

  if (area.number !== undefined) {
    return `LABO ${area.number}`;
  }

  return "AREA";

}


// ========================================
// ホーム
// ========================================

function setupHome() {

  const placeButton =
    document.querySelector(
      ".place-button"
    );

  const fishButton =
    document.querySelector(
      ".fish-button"
    );

  const searchInput =
    document.querySelector(
      ".search-box input"
    );


  if (placeButton) {

    placeButton.addEventListener(
      "click",
      showFacilities
    );

  }


  if (fishButton) {

    fishButton.addEventListener(
      "click",
      function() {
        showFishList();
      }
    );

  }


  if (searchInput) {

    searchInput.addEventListener(
      "keydown",
      function(event) {

        if (event.key === "Enter") {

          event.preventDefault();

          showFishList(
            searchInput.value.trim()
          );

        }

      }
    );

  }


  const footerButtons =
    document.querySelectorAll(
      "footer button"
    );


  if (footerButtons.length >= 3) {

    footerButtons[0]
      .addEventListener(
        "click",
        showHome
      );


    footerButtons[1]
      .addEventListener(
        "click",
        showFacilities
      );


    footerButtons[2]
      .addEventListener(
        "click",
        function() {
          showFishList();
        }
      );

  }

}


function showHome() {

  document.body.innerHTML =
    homeScreen;

  setPageBackground("home");

  setupHome();

  window.scrollTo(0, 0);

}


// ========================================
// 施設一覧
// ========================================

function showFacilities() {

  setPageBackground("home");

  let facilityHTML = "";







  locationData.facilities.forEach(
    function(facility) {

      facilityHTML += `

      <button
  class="main-button fish-button facility-card"
  data-facility="${facility.id}"
  onclick="
    showFacilityAreas(
      '${facility.id}'
    )
  "
>

         




















     <div class="button-text">

  <strong>
    ${escapeHTML(
      facility.name
    )}
  </strong>

  <small>
  ここにいる生きものを見る
</small>

</div>







          <div class="arrow">
            ›
          </div>

        </button>

      `;

    }
  );


  document.body.innerHTML = `

  <header class="app-header location-header">

      <div>

      <p class="small-title">
  AQUARIUM
</p>

<h1>
  水族館から探す
</h1>

      </div>

    </header>


    <main>



      <button
        class="back-button"
        onclick="showHome()"
      >
        ← ホームに戻る
      </button>

      <div class="facility-list">

        ${facilityHTML}

      </div>

      <p class="ai-note">
        ※本サイトの生物情報の一部は、文献・公開情報などを参考に、AIを活用して作成・整理しています。正確性の確認に努めていますが、誤りや情報の更新遅れが生じる場合があります。
      </p>

    </main>

    ${createFooter("place")}

  `;


  window.scrollTo(0, 0);

}


// ========================================
// 各施設の展示エリア
// ========================================

function showFacilityAreas(
  facilityId
) {

  const facility =
    getFacility(facilityId);

  const areas =
    getAreas(facilityId);


  if (!facility) {
    return;
  }


setPageBackground(facilityId);


  let areaHTML = "";


  const visibleAreas =
    areas.filter(
      function(area) {

        return fishData.some(
          function(fish) {

            return (
              Array.isArray(
                fish.areaIds
              )
              &&
              fish.areaIds.includes(
                area.id
              )
            );

          }
        );

      }
    );

    visibleAreas.forEach(
    function(area) {

      const fishCount =
        fishData.filter(
          function(fish) {

            return (
              Array.isArray(
                fish.areaIds
              )
              &&
              fish.areaIds.includes(
                area.id
              )
            );

          }
        ).length;


      areaHTML += `

        <button
          class="labo-card"
          onclick="
            showArea(
              '${facilityId}',
              '${area.id}'
            )
          "
        >

          <div class="labo-number">

            ${escapeHTML(
              getAreaCode(area)
            )}

          </div>


          <div class="labo-info">

            <strong>
              ${escapeHTML(
                area.name
              )}
            </strong>

            <small>

              展示されている生きものを見る

              ${
                fishCount > 0
                  ? ` ・ ${fishCount}種`
                  : ""
              }

            </small>

          </div>


          <div class="arrow">
            ›
          </div>

        </button>

      `;

    }
  );


   if (visibleAreas.length === 0) {

    areaHTML = `

      <section class="empty-card">

        <div class="empty-icon">
          🐠
        </div>

        <h2>
          展示エリアはまだ登録されていません
        </h2>

        <p>
          location-data.js に追加すると
          自動表示されます。
        </p>

      </section>

    `;

  }


  const pageTitle =
    facilityId === "aquamuseum"
      ? "LABOを選ぶ"
      : "展示エリアを選ぶ";


  document.body.innerHTML = `

    <header
  class="app-header facility-theme"
  data-facility="${facilityId}"
>

      <div>

        <p class="small-title">
          ${escapeHTML(
            facility.name
          )}
        </p>

        <h1>
          ${pageTitle}
        </h1>

      </div>

    </header>


    <main>





      <button
        class="back-button"
        onclick="showFacilities()"
      >
        ← 施設選択へ戻る
      </button>


     <div
  class="labo-list facility-theme"
  data-facility="${facilityId}"
>

  ${areaHTML}

</div>

    </main>


    ${createFooter("place")}

  `;


   window.scrollTo(0, 0);





}


// ========================================
// 以前の関数名も残す
// ========================================

function showAquaMuseum() {

  showFacilityAreas(
    "aquamuseum"
  );

}


function showLabo(laboId) {

  showArea(
    "aquamuseum",
    laboId
  );

}


// ========================================
// 展示エリア内の生きもの
// ========================================

function showArea(
  facilityId,
  areaId,
  restoreScrollY = 0
) {

  const facility =
    getFacility(facilityId);

  const area =
    getArea(
      facilityId,
      areaId
    );


  if (
    !facility ||
    !area
  ) {
    return;
  }

setPageBackground(facilityId);





  const fishes =
    fishData.filter(
      function(fish) {

        return (
          Array.isArray(
            fish.areaIds
          )
          &&
          fish.areaIds.includes(
            areaId
          )
        );

      }
    );


  let fishHTML = "";


  if (fishes.length === 0) {

    fishHTML = `

      <section class="empty-card">

        <div class="empty-icon">
          🐟
        </div>

        <h2>
          まだ生きものが登録されていません
        </h2>

        <p>
          この場所の生きものを登録すると、
          ここに自動で表示されます。
        </p>

      </section>

    `;

  }

  else {

    fishHTML =
      createFishCards(
        fishes,
        facilityId,
        areaId
      );

  }


  document.body.innerHTML = `

<header
  class="app-header facility-theme"
  data-facility="${facilityId}"
>

      <div>

        <p class="small-title">
          ${escapeHTML(
            facility.name
          )}
        </p>

       <h1 class="area-page-title">
  <span>
    ${escapeHTML(
      getAreaCode(area)
    )}
  </span>

  <span class="area-page-name">
    ${escapeHTML(
      area.name
    )}
  </span>
</h1>








      </div>

    </header>


    <main>

      <button
        class="back-button"
        onclick="
          showFacilityAreas(
            '${facilityId}'
          )
        "
      >
        ← 展示エリア一覧へ戻る
      </button>


      

         ${fishHTML}

    </main>


    <button
      id="back-to-top"
      class="back-to-top"
      type="button"
      aria-label="ページ上部へ戻る"
      onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      ↑
    </button>


    ${createFooter("place")}

  `;

  window.scrollTo(0, 0);


















}


// ========================================
// 魚カード
// ========================================

function createFishCards(
  fishes,
  fromFacilityId = "",
  fromAreaId = ""
) {

  let html = "";


  fishes.forEach(
    function(fish) {

      const cardFeature =
        (
          Array.isArray(fish.trivia)
          &&
          fish.trivia.length > 0
          &&
          fish.trivia[0].title
        )

          ? fish.trivia[0].title

          : (
              fish.identification
              ||
              fish.features
              ||
              "もっと詳しく見てみよう"
            );


      html += `

        <button
          class="main-button fish-button creature-card"
          onclick="
            showFishDetail(
              '${fish.id}',
              '${fromFacilityId}',
              '${fromAreaId}'
            )
          "
        >

          <div class="fish-list-image">

            ${
              fish.image

                ? `
                  <img
                    src="${escapeHTML(
                      fish.image
                    )}"

                    alt="${escapeHTML(
                      fish.nameJa
                    )}"

                    loading="lazy"
                    decoding="async"
                  >
                `

                : "🐟"
            }

          </div>


          <div class="button-text">

            <strong>
              ${escapeHTML(
                fish.nameJa
              )}
            </strong>

















           <div class="creature-card-feature-row">

  <span class="creature-card-badge">
    注目
  </span>

  <small class="creature-card-feature">
    ${escapeHTML(
      cardFeature
    )}
  </small>

</div>





















          </div>


          <div class="arrow">
            ›
          </div>

















        </button>

      `;

    }
  );


  return html;

}








// ========================================
// 魚一覧
// ========================================

function showFishList(
  initialQuery = ""
) {

  setPageBackground("home");

  document.body.innerHTML = `
  




















  <header class="app-header fish-list-header">

      <div>

        <p class="small-title">
        CREATURES
        </p>

        <h1>
          生きものから探す
        </h1>

      </div>

    </header>


    <main class="fish-list-main">


      <button
        class="back-button"
        onclick="showHome()"
      >
        ← ホームに戻る
      </button>


      <div class="search-box">

        <span class="search-icon">
          ⌕
        </span>

        <input
          id="fish-search-input"
          type="text"
         placeholder="生きものの名前を検索"
          value="${escapeHTML(
            initialQuery
          )}"
        >

            </div>

      <p class="ai-note">
        ※本サイトの生物情報の一部は、文献・公開情報などを参考に、AIを活用して作成・整理しています。正確性の確認に努めていますが、誤りや情報の更新遅れが生じる場合があります。
      </p>

           <div
        id="fish-search-results"
      >
      </div>

    </main>


    <button
      id="back-to-top"
      class="back-to-top"
      type="button"
      aria-label="ページ上部へ戻る"
      onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      ↑
    </button>


    ${createFooter("fish")}

  `;


  const searchInput =
    document.getElementById(
      "fish-search-input"
    );


  searchInput.addEventListener(
    "input",
    function() {

      updateFishSearch(
        searchInput.value
      );

    }
  );


  updateFishSearch(
    initialQuery
  );


  window.scrollTo(0, 0);

}


// ========================================
// 魚検索
// ========================================


// 検索文字を統一する
function normalizeSearchText(text) {

  return String(
    text || ""
  )

    // 半角文字などを全角相当に統一
    .normalize("NFKC")

    // 英字を小文字へ
    .toLowerCase()

    // カタカナをひらがなへ
    .replace(
      /[\u30a1-\u30f6]/g,
      function(character) {

        return String.fromCharCode(
          character.charCodeAt(0) - 0x60
        );

      }
    )

    // 空白を削除
    .replace(/\s+/g, "");

}


// ========================================
// 文字の違いを数える
// ========================================

function getSearchDistance(
  first,
  second
) {

  const a =
    normalizeSearchText(first);

  const b =
    normalizeSearchText(second);


  const rows =
    a.length + 1;

  const columns =
    b.length + 1;


  const matrix =
    Array.from(
      {
        length: rows
      },
      function() {

        return new Array(
          columns
        ).fill(0);

      }
    );


  for (
    let i = 0;
    i < rows;
    i++
  ) {

    matrix[i][0] = i;

  }


  for (
    let j = 0;
    j < columns;
    j++
  ) {

    matrix[0][j] = j;

  }


  for (
    let i = 1;
    i < rows;
    i++
  ) {

    for (
      let j = 1;
      j < columns;
      j++
    ) {

      const cost =
        a[i - 1] === b[j - 1]
          ? 0
          : 1;


      matrix[i][j] =
        Math.min(

          matrix[i - 1][j] + 1,

          matrix[i][j - 1] + 1,

          matrix[i - 1][j - 1] + cost

        );

    }

  }


  return matrix[
    a.length
  ][
    b.length
  ];

}


// ========================================
// 誤字として許容するか
// ========================================

function isCloseSearchMatch(
  keyword,
  name
) {

  const normalizedKeyword =
    normalizeSearchText(
      keyword
    );


  const normalizedName =
    normalizeSearchText(
      name
    );


  // 短い検索語では
  // 誤字検索を行わない
  if (
    normalizedKeyword.length < 3
  ) {

    return false;

  }


  // 長さが大きく違う名前は除外
  if (
    Math.abs(
      normalizedKeyword.length
      -
      normalizedName.length
    ) > 2
  ) {

    return false;

  }


  const distance =
    getSearchDistance(
      normalizedKeyword,
      normalizedName
    );


  // 3〜5文字なら誤字1文字まで
  if (
    normalizedKeyword.length <= 5
  ) {

    return distance <= 1;

  }


  // 6文字以上なら誤字2文字まで
  return distance <= 2;

}


// ========================================
// 検索実行
// ========================================

function updateFishSearch(query) {

  const resultArea =
    document.getElementById(
      "fish-search-results"
    );


  if (!resultArea) {
    return;
  }


  const keyword =
    normalizeSearchText(
      query.trim()
    );


  let fishes =
    fishData;


  if (keyword !== "") {

    const exactMatches = [];

    const fuzzyMatches = [];


    fishData.forEach(
      function(fish) {

        const nameJa =
          normalizeSearchText(
            fish.nameJa
          );


        const scientificName =
          normalizeSearchText(
            fish.scientificName
          );


        const englishName =
          normalizeSearchText(
            fish.englishName
          );


        // 通常検索
        if (
          nameJa.includes(keyword)
          ||
          scientificName.includes(
            keyword
          )
          ||
          englishName.includes(
            keyword
          )
        ) {

          exactMatches.push(
            fish
          );

          return;

        }


        // 日本語名のみ誤字検索
        if (
          isCloseSearchMatch(
            keyword,
            nameJa
          )
        ) {

          fuzzyMatches.push(
            fish
          );

        }

      }
    );


    fishes = [
      ...exactMatches,
      ...fuzzyMatches
    ];

  }


  if (fishes.length === 0) {

    resultArea.innerHTML = `

      <section class="empty-card">

        <div class="empty-icon">
          🔍
        </div>

        <h2>
          該当する生きものがありません
        </h2>

        <p>
          別の名前でも検索してみてください。
        </p>

      </section>

    `;

    return;

  }


  resultArea.innerHTML =
    createFishCards(
      fishes
    );

}
// ========================================
// 魚詳細
// ========================================

function showFishDetail(
  fishId,
  fromFacilityId = "",
  fromAreaId = ""
) {

  const currentSearchInput =
    document.getElementById(
      "fish-search-input"
    );


  detailReturnState = {

    scrollY:
      window.scrollY,

    query:
      currentSearchInput
        ? currentSearchInput.value
        : ""

  };



  const fish =
    fishData.find(
      function(item) {

        return item.id === fishId;

      }
    );


  if (!fish) {
    return;
  }



setPageBackground("none");


  const classification =
    Array.isArray(
      fish.classification
    )
      ? fish.classification
      : [];


  const trivia =
    Array.isArray(
      fish.trivia
    )
      ? fish.trivia.slice(0, 2)
      : [];


  let triviaHTML = "";


  trivia.forEach(
    function(item, index) {

      triviaHTML += `

        <div class="feature-card">

          <span>
            0${index + 1}
          </span>

          <strong>
            ${escapeHTML(
              item.title
            )}
          </strong>

          <small>
            ${escapeHTML(
              item.text
            )}
          </small>

        </div>

      `;

    }
  );


   let backAction =
    "returnFromFishDetail()";


  if (
    fromFacilityId
    &&
    fromAreaId
  ) {

    backAction =
      `returnFromFishDetail(
        '${fromFacilityId}',
        '${fromAreaId}'
      )`;

  }
 


  document.body.innerHTML = `

   <header class="app-header creature-detail-header">

  <div>

    <button
      class="back-button"
      onclick="${backAction}"
    >
      ← 一覧へ戻る
    </button>

    <h1 class="creature-detail-name">
  ${escapeHTML(
    fish.nameJa
  )}
</h1>

  </div>

</header>


 <main class="creature-detail-main">


 <main class="creature-detail-main">

  


  <div class="fish-detail-image">

      <div class="fish-detail-image">

        ${
          fish.image

            ? `
             <img
  src="${escapeHTML(
    fish.image
  )}"

  alt="${escapeHTML(
    fish.nameJa
  )}"

  onclick="openImageZoom(this)"
>




            `

            : `
              <div
                class="fish-image-placeholder"
              >
                🐟
              </div>
            `
        }

      </div>



      ${
        fish.image && (fish.photoCredit || DEFAULT_PHOTO_CREDIT)
          ? `
            <p class="photo-credit">
              写真提供：${escapeHTML(
                fish.photoCredit || DEFAULT_PHOTO_CREDIT
              )}
            </p>
          `
          : ""
      }



    
      <nav class="detail-mini-nav" aria-label="生きもの詳細メニュー">

        <button
          type="button"
          onclick="document.getElementById('detail-trivia').scrollIntoView({ behavior: 'smooth', block: 'start' })"
        >
          豆知識
        </button>

        <button
          type="button"
          onclick="document.getElementById('detail-observation').scrollIntoView({ behavior: 'smooth', block: 'start' })"
        >
          観察
        </button>

        <button
          type="button"
          onclick="document.getElementById('detail-basic').scrollIntoView({ behavior: 'smooth', block: 'start' })"
        >
          基本情報
        </button>

        <button
          type="button"
          onclick="document.getElementById('detail-encyclopedia').scrollIntoView({ behavior: 'smooth', block: 'start' })"
        >
          図鑑
        </button>

      </nav>


















   

      <section
        id="detail-trivia"
        class="feature-section"
      >

        <h2>
          💡 面白い豆知識
        </h2>

        <div class="feature-grid">

          ${
            triviaHTML

            ||

            `
              <div class="feature-card">

                <strong>
                  豆知識は準備中です
                </strong>

              </div>
            `
          }

        </div>

      </section>


      ${createTextSection(
        "名前の由来",
        fish.nameOrigin
      )}

      <div id="detail-observation">

        ${createTextSection(
          "八景島で観察するなら",
          fish.observationPoint
        )}

      </div>


      ${createTextSection(
        "人とのかかわり",
        fish.humanRelation
      )}


           <section
        id="detail-basic"
        class="feature-section"
      >

        <h2>
          基本情報
        </h2>

        <div class="feature-grid">

          ${createInfoCard(
            "体長",
            fish.bodyLength
          )}

          ${createInfoCard(
            "分布",
            fish.distribution
          )}

          ${createInfoCard(
            "生息環境",
            fish.habitat
          )}

          ${createInfoCard(
            "食性",
            fish.diet
          )}

        </div>

      </section>


      ${createTextSection(
        "体の特徴",
        fish.features
      )}


      ${createTextSection(
        "繁殖",
        fish.reproduction
      )}


      ${createTextSection(
        "生態・行動",
        fish.behavior
      )}


      ${createTextSection(
        "見分け方",
        fish.identification
      )}


           <section
        id="detail-encyclopedia"
        class="feature-section"
      >

        <details class="encyclopedia-details">

          <summary>
            図鑑データ 3項目
          </summary>

          <div class="encyclopedia-content">

            <p>
              <strong>学名：</strong>
              <i>${escapeHTML(
                fish.scientificName || "未入力"
              )}</i>
            </p>

            <p>
              <strong>英名：</strong>
              ${escapeHTML(
                fish.englishName || "未入力"
              )}
            </p>

            <p>
              <strong>分類：</strong>
              ${
                classification.length > 0
                  ? classification
                      .map(escapeHTML)
                      .join(" ＞ ")
                  : "未入力"
              }
            </p>

          </div>

        </details>

      </section>


      ${createReferences(
        fish.references
      )}


      <section class="feature-section">

        <h2>
          情報更新
        </h2>

        <div class="feature-grid">

          ${createInfoCard(
            "展示確認日",
            fish.observedDate || "未登録"
          )}

          ${createInfoCard(
            "最終更新日",
            fish.updatedDate || "未登録"
          )}

        </div>

      </section>     









       </main>


    <button
      id="back-to-top"
      class="back-to-top"
      type="button"
      aria-label="ページ上部へ戻る"
      onclick="window.scrollTo({ top: 0, behavior: 'smooth' })"
    >
      ↑
    </button>


    ${createFooter("fish")}




  `;


  window.scrollTo(0, 0);

}


// ========================================
// 基本情報カード
// ========================================

function createInfoCard(
  title,
  value
) {

  return `

    <div class="feature-card">

      <span>
        ${escapeHTML(title)}
      </span>

      <strong>

        ${
          escapeHTML(value)
          || "未入力"
        }

      </strong>

    </div>

  `;

}


// ========================================
// 詳細文章
// ========================================

function createTextSection(
  title,
  text
) {

  return `

    <section class="feature-section">

      <h2>
        ${escapeHTML(title)}
      </h2>

      <p>

        ${
          text
            ? escapeHTML(text)
            : "未入力"
        }

      </p>

    </section>

  `;

}


// ========================================
// 参考文献
// ========================================

function createReferences(
  references
) {

  if (
    !Array.isArray(references)
    ||
    references.length === 0
  ) {

    return `

      <section class="feature-section">

        <details class="references-details">

          <summary>
            参考文献 0件
          </summary>

          <p>
            未入力
          </p>

        </details>

      </section>

    `;

  }


  let html = "";


  references.forEach(
    function(reference) {

      html += `

        <p>
          ${escapeHTML(
            reference
          )}
        </p>

      `;

    }
  );


  return `

    <section class="feature-section">

      <details class="references-details">

        <summary>
          参考文献 ${references.length}件
        </summary>

        <div class="references-content">

          ${html}

        </div>

      </details>

    </section>

  `;

}



// ========================================
// 写真拡大
// ========================================

function openImageZoom(imageElement) {

  const overlay =
    document.createElement("div");

  overlay.className =
    "image-zoom-overlay";


  const image =
    document.createElement("img");

  image.src =
    imageElement.src;

  image.alt =
    imageElement.alt;


  const closeButton =
    document.createElement("button");

  closeButton.className =
    "image-zoom-close";

  closeButton.textContent =
    "×";


  function closeZoom() {

    overlay.remove();

    document.body.style.overflow = "";

  }


  closeButton.addEventListener(
    "click",
    closeZoom
  );


  overlay.addEventListener(
    "click",
    function(event) {

      if (event.target === overlay) {
        closeZoom();
      }

    }
  );


  overlay.appendChild(image);
  overlay.appendChild(closeButton);

  document.body.appendChild(overlay);

  document.body.style.overflow =
    "hidden";

}




// ========================================
// 下メニュー
// ========================================

function createFooter(active) {

  return `

    <footer>


      <button
        class="${
          active === "home"
            ? "active-footer"
            : ""
        }"
        onclick="showHome()"
      >

        <span>⌂</span>

        ホーム

      </button>


      <button
        class="${
          active === "place"
            ? "active-footer"
            : ""
        }"
        onclick="showFacilities()"
      >

        <span>📍</span>

        場所

      </button>


      <button
        class="${
          active === "fish"
            ? "active-footer"
            : ""
        }"
        onclick="showFishList()"
      >

        <span>⌕</span>

        生きもの

      </button>


    </footer>

  `;

}



// ========================================
// 上へ戻るボタン
// ========================================

function updateBackToTopButton() {

  const button =
    document.getElementById(
      "back-to-top"
    );


  if (!button) {
    return;
  }


  button.classList.toggle(
    "is-visible",
    window.scrollY > 500
  );

}


window.addEventListener(
  "scroll",
  updateBackToTopButton,
  {
    passive: true
  }
);

// ========================================
// 起動
// ========================================

setPageBackground("home");
setupHome();
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
// 全ボタン 共通タップフィードバック
// ========================================

let pressingElement = null;


document.addEventListener(
  "pointerdown",
  function(event) {

    const target =
      event.target.closest(
        "button, a"
      );


    if (!target) {
      return;
    }


    pressingElement =
      target;


    target.classList.add(
      "is-pressing"
    );

  },
  {
    passive: true
  }
);


function releasePressingElement() {

  if (!pressingElement) {
    return;
  }


  const target =
    pressingElement;


  pressingElement = null;


  setTimeout(
    function() {

      target.classList.remove(
        "is-pressing"
      );

    },
    90
  );

}


document.addEventListener(
  "pointerup",
  releasePressingElement,
  {
    passive: true
  }
);


document.addEventListener(
  "pointercancel",
  releasePressingElement,
  {
    passive: true
  }
);









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
// 見つけた生きもの
// 発見数の計算
// ========================================

const FOUND_FISH_STORAGE_KEY =
  "fishguide-found-fish";


function getFoundFishIds() {

  try {

    const saved =
      JSON.parse(
        localStorage.getItem(
          FOUND_FISH_STORAGE_KEY
        )
        ||
        "[]"
      );


    return Array.isArray(saved)
      ? saved
      : [];


  } catch (error) {

    return [];

  }

}

function isFishFound(fishId) {

  return getFoundFishIds()
    .includes(fishId);

}


function toggleFoundFish(
  fishId,
  event
) {

  if (event) {

    event.preventDefault();
    event.stopPropagation();

  }


  let foundIds =
    getFoundFishIds();


  const alreadyFound =
    foundIds.includes(
      fishId
    );


  if (alreadyFound) {

    foundIds =
      foundIds.filter(
        function(id) {

          return id !== fishId;

        }
      );

  } else {

    foundIds.push(
      fishId
    );

  }


  localStorage.setItem(
    FOUND_FISH_STORAGE_KEY,
    JSON.stringify(
      foundIds
    )
  );


  const isFound =
    foundIds.includes(
      fishId
    );


  document
    .querySelectorAll(
      `[data-found-fish-id="${fishId}"]`
    )
    .forEach(
      function(heart) {

        heart.textContent =
          isFound
            ? "♥"
            : "♡";


        heart.classList.toggle(
          "is-found",
          isFound
        );

      }
    );

}




function getAreaDiscoveryProgress(
  areaId
) {

  const foundIds =
    new Set(
      getFoundFishIds()
    );


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


  const found =
    fishes.filter(
      function(fish) {

        return foundIds.has(
          fish.id
        );

      }
    ).length;


  return {

    found:
      found,

    total:
      fishes.length

  };

}


function getFacilityDiscoveryProgress(
  facilityId
) {

  const foundIds =
    new Set(
      getFoundFishIds()
    );


  const areaIds =
    new Set(
      getAreas(
        facilityId
      ).map(
        function(area) {

          return area.id;

        }
      )
    );


  const fishes =
    fishData.filter(
      function(fish) {

        return (
          Array.isArray(
            fish.areaIds
          )
          &&
          fish.areaIds.some(
            function(areaId) {

              return areaIds.has(
                areaId
              );

            }
          )
        );

      }
    );


  // 同じ魚が複数LABOにいても
  // 施設全体では1種類として数える
  const uniqueFishes =
    Array.from(
      new Map(
        fishes.map(
          function(fish) {

            return [
              fish.id,
              fish
            ];

          }
        )
      ).values()
    );


  const found =
    uniqueFishes.filter(
      function(fish) {

        return foundIds.has(
          fish.id
        );

      }
    ).length;


  return {

    found:
      found,

    total:
      uniqueFishes.length

  };

}














// ========================================
// 詳細ページ「どこにいる？」
// ========================================

function createDetailLocationGuide(fish) {

  if (
    !Array.isArray(fish.areaIds)
    ||
    fish.areaIds.length === 0
  ) {
    return "";
  }


  let locationHTML = "";


  locationData.facilities.forEach(
    function(facility) {

      getAreas(
        facility.id
      ).forEach(
        function(area) {

          if (
            !fish.areaIds.includes(
              area.id
            )
          ) {
            return;
          }


          const placeName =
            facility.id === "aquamuseum"

              ? getAreaCode(area)

              : area.name;


          locationHTML += `

            <div class="detail-location-item">

              <strong>
                ${escapeHTML(
                  placeName
                )}
              </strong>

              <small>
                ${escapeHTML(
                  facility.name
                )}
              </small>

            </div>

          `;

        }
      );

    }
  );


  if (locationHTML === "") {
    return "";
  }


  return `

    <div class="detail-location-guide">

      <div class="detail-location-guide-title">

       
        <span>
          どこにいる？
        </span>

      </div>

      <div class="detail-location-list">

        ${locationHTML}

      </div>

    </div>

  `;

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
// 写真から探す
// ========================================

let currentPhotoPreviewUrl = "";
let currentPhotoFile = null;
let currentCameraStream = null;

function openPhotoPicker(inputId) {

  const input =
    document.getElementById(inputId);

  if (!input) {
    return;
  }

  input.value = "";

  input.click();

}



// ========================================
// FishGuide専用カメラ
// ========================================

async function showPhotoCamera() {

  setPageBackground("home");


  document.body.innerHTML = `

    <header class="app-header photo-search-header">

      <div>

        <p class="small-title">
          PHOTO SEARCH
        </p>

        <h1>
          写真から探す
        </h1>

      </div>

    </header>


    <main class="photo-camera-main">

      <button
        class="back-button"
        type="button"
        onclick="closePhotoCameraAndHome()"
      >
        ← ホームに戻る
      </button>


      <section class="photo-camera-card">

        <div class="photo-camera-view">

          <video
            id="photo-camera-video"
            autoplay
            playsinline
            muted
          >
          </video>

          <div
            id="photo-camera-message"
            class="photo-camera-message"
          >
            カメラを起動しています…
          </div>

        </div>


        <p class="photo-camera-help">
          生きものが画面の中央に
          大きく写るように撮影してください。
        </p>

      </section>


      <canvas
        id="photo-camera-canvas"
        hidden
      >
      </canvas>


      <input
        id="photo-library-input"
        type="file"
        accept="image/*"
        onchange="selectPhotoFromLibrary(this)"
        hidden
      >


      <div class="photo-camera-actions">

        <button
          class="photo-camera-library"
          type="button"
          onclick="
            openPhotoPicker(
              'photo-library-input'
            )
          "
        >
          <span>🖼</span>
          写真から選ぶ
        </button>


        <button
          class="photo-camera-shutter"
          type="button"
          onclick="capturePhotoFromCamera()"
          aria-label="撮影"
        >
          <span></span>
        </button>

      </div>

    </main>

  `;


  window.scrollTo(0, 0);


  try {

    currentCameraStream =
      await navigator.mediaDevices.getUserMedia({

        video: {

          facingMode: {
            ideal: "environment"
          }

        },

        audio: false

      });


    const video =
      document.getElementById(
        "photo-camera-video"
      );


    if (video) {

      video.srcObject =
        currentCameraStream;

      await video.play();

    }


    const message =
      document.getElementById(
        "photo-camera-message"
      );


    if (message) {

      message.style.display =
        "none";

    }


  } catch (error) {

    console.error(
      "Camera error:",
      error
    );


    const message =
      document.getElementById(
        "photo-camera-message"
      );


    if (message) {

      message.innerHTML = `
        カメラを起動できませんでした。<br>
        「写真から選ぶ」はそのまま利用できます。
      `;

    }

  }

}


function stopPhotoCamera() {

  if (!currentCameraStream) {
    return;
  }


  currentCameraStream
    .getTracks()
    .forEach(
      function(track) {

        track.stop();

      }
    );


  currentCameraStream = null;

}


function closePhotoCameraAndHome() {

  stopPhotoCamera();

  showHome();

}


function selectPhotoFromLibrary(input) {

  stopPhotoCamera();

  handlePhotoFile(input);

}


function capturePhotoFromCamera() {

  const video =
    document.getElementById(
      "photo-camera-video"
    );


  const canvas =
    document.getElementById(
      "photo-camera-canvas"
    );


  if (
    !video ||
    !canvas ||
    !video.videoWidth ||
    !video.videoHeight
  ) {

    alert(
      "カメラの準備ができていません。"
    );

    return;

  }


  canvas.width =
    video.videoWidth;

  canvas.height =
    video.videoHeight;


  const context =
    canvas.getContext("2d");


  context.drawImage(
    video,
    0,
    0,
    canvas.width,
    canvas.height
  );


  canvas.toBlob(
    function(blob) {

      if (!blob) {

        alert(
          "写真を撮影できませんでした。"
        );

        return;

      }


      const file =
        new File(
          [blob],
          `fishguide-${Date.now()}.jpg`,
          {
            type: "image/jpeg"
          }
        );


      stopPhotoCamera();

      showPhotoPreview(file);

    },

    "image/jpeg",

    0.9

  );

}








 


function handlePhotoFile(input) {

  if (
    !input.files ||
    input.files.length === 0
  ) {
    return;
  }


  const file =
    input.files[0];


  if (!file.type.startsWith("image/")) {

    alert(
      "画像ファイルを選択してください。"
    );

    return;
  }


  showPhotoPreview(file);

}


function showPhotoPreview(file) {

  setPageBackground("home");

  currentPhotoFile = file;

  if (currentPhotoPreviewUrl) {

    URL.revokeObjectURL(
      currentPhotoPreviewUrl
    );

  }


  currentPhotoPreviewUrl =
    URL.createObjectURL(file);


  document.body.innerHTML = `

    <header
      class="app-header photo-search-header"
    >

      <div>

        <p class="small-title">
          PHOTO SEARCH
        </p>

        <h1>
          写真から探す
        </h1>

      </div>

    </header>


    <main class="photo-search-main">

      <button
        class="back-button"
        type="button"
        onclick="showHome()"
      >
        ← ホームに戻る
      </button>


      <section class="photo-preview-card">

        <p class="photo-preview-label">
          撮影した写真
        </p>

        <img
          src="${currentPhotoPreviewUrl}"
          alt="検索する生きものの写真"
          class="photo-search-preview"
        >


        <p class="photo-preview-help">
          生きものができるだけ大きく
          写っている写真がおすすめです。
        </p>

      </section>


     

      <div class="photo-search-actions">

       <button
  class="photo-search-secondary"
  type="button"
  onclick="showPhotoCamera()"
>
  📷 撮り直す
</button>


        <button
  class="photo-search-primary"
  type="button"
  onclick="startPhotoSearch()"
>
  この写真で探す
</button>

      </div>


      <p class="photo-search-coming-soon">
        次の工程で、
        Fish Guideに登録されている生きものから
        候補をランキング表示します。
      </p>

    </main>


    ${createFooter("home")}

  `;


  window.scrollTo(0, 0);

}



function preparePhotoForAI(file) {

  return new Promise(
    function(resolve, reject) {

      const reader =
        new FileReader();


      reader.onload =
        function() {

          const image =
            new Image();


          image.onload =
            function() {

              const maxSize = 1280;

              const scale =
                Math.min(
                  1,
                  maxSize /
                  Math.max(
                    image.naturalWidth,
                    image.naturalHeight
                  )
                );


              const width =
                Math.round(
                  image.naturalWidth * scale
                );

              const height =
                Math.round(
                  image.naturalHeight * scale
                );


              const canvas =
                document.createElement(
                  "canvas"
                );


              canvas.width = width;
              canvas.height = height;


              const context =
                canvas.getContext("2d");


              context.drawImage(
                image,
                0,
                0,
                width,
                height
              );


              resolve(
                canvas.toDataURL(
                  "image/jpeg",
                  0.82
                )
              );

            };


          image.onerror = reject;

          image.src = reader.result;

        };


      reader.onerror = reject;

      reader.readAsDataURL(file);

    }
  );

}



// ========================================
// 写真検索
// AI検索
// ========================================

async function startPhotoSearch() {

  if (!currentPhotoFile) {

    alert(
      "検索する写真を選択してください。"
    );

    return;
  }


  showPhotoSearchLoading();


  try {

    // 写真をAI送信用に軽くする
    const image =
      await preparePhotoForAI(
        currentPhotoFile
      );


    // FishGuide登録生物のうち
    // 写真が登録されている魚類だけを候補にする
    const candidates =
      fishData

        .filter(
          function(fish) {

            return (
              fish.category === "魚類"
              &&
              fish.image
            );

          }
        )

        .map(
          function(fish) {

            return {

              id:
                fish.id,

              nameJa:
                fish.nameJa,

              scientificName:
                fish.scientificName || "",

              bodyLength:
                fish.bodyLength || "",

              features:
                fish.features || "",

              identification:
                fish.identification || ""

            };

          }
        );


    const apiResponse =
      await fetch(
        "/api/photo-search",
        {

          method: "POST",

          headers: {

            "Content-Type":
              "application/json"

          },

          body:
            JSON.stringify({

              image:
                image,

              candidates:
                candidates

            })

        }
      );


    const data =
      await apiResponse.json();


    if (!apiResponse.ok) {

      throw new Error(
        data.error ||
        "画像検索に失敗しました"
      );

    }


    showPhotoSearchResults(
      data.results || []
    );


  } catch (error) {

    console.error(
      "Photo search error:",
      error
    );


    alert(
      "画像検索に失敗しました。\n" +
      "もう一度お試しください。"
    );


    if (currentPhotoFile) {

      showPhotoPreview(
        currentPhotoFile
      );

    } else {

      showHome();

    }

  }

}


// ========================================
// 検索中画面
// ========================================

function showPhotoSearchLoading() {

  setPageBackground("home");


  document.body.innerHTML = `

    <header
      class="app-header photo-search-header"
    >

      <div>

        <p class="small-title">
          PHOTO SEARCH
        </p>

        <h1>
          写真から探す
        </h1>

      </div>

    </header>


    <main class="photo-search-main">

      <section
        class="photo-search-loading"
      >

        <div
          class="photo-search-spinner"
        >
        </div>


        <h2>
          生きものを探しています
        </h2>


        <p>
          Fish Guideに登録されている
          生きものと比較しています…
        </p>

      </section>

    </main>


    ${createFooter("home")}

  `;


  window.scrollTo(0, 0);

}


// ========================================
// AI検索結果
// ========================================

function showPhotoSearchResults(
  results
) {

  setPageBackground("home");


  const normalizedResults =
    (
      Array.isArray(results)
        ? results
        : []
    )

      .map(
        function(result) {

          const fish =
            fishData.find(
              function(item) {

                return (
                  item.id ===
                  result.id
                );

              }
            );


          if (!fish) {

            return null;

          }


          return {

            fish:
              fish,

            level:
              result.level || "中",

            reason:
              result.reason || ""

          };

        }
      )

      .filter(Boolean)

      .slice(0, 3);


  let resultHTML = "";


  if (
    normalizedResults.length === 0
  ) {

    resultHTML = `

      <section class="empty-card">

        <div class="empty-icon">
          📷
        </div>

        <h2>
          候補を絞り込めませんでした
        </h2>

        <p>
          生きものが大きく写るように
          撮り直してみてください。
        </p>

      </section>

    `;

  }


  normalizedResults.forEach(
    function(result, index) {

      const fish =
        result.fish;


      resultHTML += `

        <article
          class="photo-result-card"
        >

          <div
            class="photo-result-rank"
          >

            ${index + 1}

            <span>
              位
            </span>

          </div>


          <div
            class="photo-result-image"
          >

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
                  >
                `

                : "🐟"
            }

          </div>


          <div
            class="photo-result-info"
          >

            <small>
              候補度：
              ${escapeHTML(
                result.level
              )}
            </small>


            <strong>
              ${escapeHTML(
                fish.nameJa
              )}
            </strong>


            ${
              result.reason

                ? `
                  <small>
                    ${escapeHTML(
                      result.reason
                    )}
                  </small>
                `

                : ""
            }


            <button
              type="button"

              onclick="
                showFishDetail(
                  '${fish.id}'
                )
              "
            >
              詳しく見る
            </button>

          </div>

        </article>

      `;

    }
  );


  document.body.innerHTML = `

    <header
      class="app-header photo-search-header"
    >

      <div>

        <p class="small-title">
          PHOTO SEARCH
        </p>

        <h1>
          検索結果
        </h1>

      </div>

    </header>


    <main class="photo-search-main">

      <button
        class="back-button"
        type="button"
        onclick="showHome()"
      >
        ← ホームに戻る
      </button>


      ${
        currentPhotoPreviewUrl

          ? `
            <section
              class="photo-result-query"
            >

              <small>
                検索した写真
              </small>

              <img
                src="${currentPhotoPreviewUrl}"
                alt="検索に使用した写真"
              >

            </section>
          `

          : ""
      }


      <section
        class="photo-result-heading"
      >

        <span>
          AI候補
        </span>

        <h2>
          似ている生きもの
        </h2>

        <p>
          Fish Guide登録生物の中から
          候補を表示しています。
        </p>

      </section>


      <div
        class="photo-result-list"
      >

        ${resultHTML}

      </div>


      <p
        class="photo-result-warning"
      >

        ※AIによる画像判定のため、
        実際の生きものと
        異なる場合があります。

      </p>


    


    <button
  class="photo-search-again"
  type="button"
  onclick="showPhotoCamera()"
>
  📷 もう一度写真から探す
</button>

    </main>


    ${createFooter("fish")}

  `;


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

    const facilityImage =
      `images/background-${facility.id}.png`;

const facilityTitleHtml = {
  "aquamuseum":
    'アクア<br class="facility-mobile-break">ミュージアム',

  "dolphin-fantasy":
    'ドルフィン<span class="facility-desktop-space"> </span><br class="facility-mobile-break">ファンタジー',

  "umi-farm":
    'うみ<br class="facility-mobile-break">ファーム',

  "fureai-lagoon":
    'ふれあい<br class="facility-mobile-break">ラグーン'
}[facility.id] || escapeHTML(facility.name);





const facilityProgress =
  getFacilityDiscoveryProgress(
    facility.id
  );






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
<div class="facility-card-image">

  <img
    src="${facilityImage}"
    alt="${escapeHTML(
      facility.name
    )}"
    loading="lazy"
    decoding="async"
  >

</div>
         



















<div class="button-text">

  <strong>
    ${facilityTitleHtml}
  </strong>

  <small>
    ここにいる生きものを見る
  </small>


  <div class="discovery-progress">

    <span class="discovery-heart">
      ♥
    </span>

    <span class="discovery-count">
      ${facilityProgress.found}
      /
      ${facilityProgress.total}種
    </span>

  

  </div>

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


const areaProgress =
  getAreaDiscoveryProgress(
    area.id
  );


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
</small>


<div class="discovery-progress">

  <span class="discovery-heart">
    ♥
  </span>

  <span class="discovery-count">
    ${areaProgress.found}
    /
    ${areaProgress.total}種
  </span>


</div>
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



const facilityProgress =
  getFacilityDiscoveryProgress(
    facilityId
  );


const facilityPercent =
  facilityProgress.total > 0

    ? Math.round(
        (
          facilityProgress.found /
          facilityProgress.total
        )
        * 1000
      ) / 10

    : 0;





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
<h1 class="facility-select-title">
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


<section
  class="facility-discovery-summary"
  data-facility="${facilityId}"
>

  <div class="facility-discovery-head">

    <span class="facility-discovery-count">
      <span class="facility-discovery-heart">
        ♥
      </span>

      ${facilityProgress.found}
      /
      ${facilityProgress.total}種
    </span>


    <strong class="facility-discovery-percent">
      ${facilityPercent}%
    </strong>

  </div>


  <div
    class="facility-discovery-track"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="${facilityPercent}"
  >

    <div
      class="facility-discovery-fill"
      style="width: ${facilityPercent}%;"
    >
    </div>

  </div>

</section>

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
// 前・次のLABO / エリア
// ========================================

function createAreaNavigation(
  facilityId,
  areaId
) {

  const areas =
    getAreas(
      facilityId
    );


  // 生きものが登録されている場所だけ
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


  const currentIndex =
    visibleAreas.findIndex(
      function(area) {
        return area.id === areaId;
      }
    );


  if (currentIndex === -1) {
    return "";
  }


  const previousArea =
    currentIndex > 0
      ? visibleAreas[
          currentIndex - 1
        ]
      : null;


  const nextArea =
    currentIndex <
    visibleAreas.length - 1
      ? visibleAreas[
          currentIndex + 1
        ]
      : null;


  const areaLabel =
    facilityId === "aquamuseum"
      ? "LABO"
      : "エリア";


  let buttonsHTML = "";


  if (previousArea) {

    buttonsHTML += `

      <button
        class="
          area-sequence-button
          area-sequence-prev
        "
        type="button"
        onclick="
          showArea(
            '${facilityId}',
            '${previousArea.id}'
          )
        "
      >
        ← 前の${areaLabel}へ
      </button>

    `;

  }


  if (nextArea) {

    buttonsHTML += `

      <button
        class="
          area-sequence-button
          area-sequence-next
        "
        type="button"
        onclick="
          showArea(
            '${facilityId}',
            '${nextArea.id}'
          )
        "
      >
        次の${areaLabel}へ →
      </button>

    `;

  }


  let endHTML = "";


  if (!nextArea) {

    endHTML = `

      <div class="area-sequence-end">

        <p>
          この施設の展示エリアはここまで
        </p>

        <button
          type="button"
          onclick="showFacilities()"
        >
          他の施設を見る →
        </button>

      </div>

    `;

  }


  return `

    <section
      class="area-sequence-nav"
      aria-label="展示エリアの移動"
    >

      <div class="area-sequence-buttons">

        ${buttonsHTML}

      </div>

      ${endHTML}

    </section>

  `;

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


const areaProgress =
  getAreaDiscoveryProgress(
    areaId
  );


const areaPercent =
  areaProgress.total > 0

    ? Math.round(
        (
          areaProgress.found /
          areaProgress.total
        )
        * 1000
      ) / 10

    : 0;






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


  const areaNavigationHTML =
    createAreaNavigation(
      facilityId,
      areaId
    );


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

<section
  class="area-discovery-summary"
  data-facility="${facilityId}"
>

  <div class="area-discovery-head">

    <span class="area-discovery-count">

      <span class="area-discovery-heart">
        ♥
      </span>

      ${areaProgress.found}
      /
      ${areaProgress.total}種

    </span>


    <strong class="area-discovery-percent">
      ${areaPercent}%
    </strong>

  </div>


  <div
    class="area-discovery-track"
    role="progressbar"
    aria-valuemin="0"
    aria-valuemax="100"
    aria-valuenow="${areaPercent}"
  >

    <div
      class="area-discovery-fill"
      style="width: ${areaPercent}%;"
    >
    </div>

  </div>

</section>
      

             ${fishHTML}


         ${areaNavigationHTML}


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


const isFound =
  isFishFound(
    fish.id
  );

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

















<div class="detail-found-wrap">

  <span class="detail-found-label">
    見た！
  </span>

  <span
    class="
      detail-found-heart
      ${isFound ? "is-found" : ""}
    "
    data-found-fish-id="${fish.id}"
    onclick="
      toggleFoundFish(
        '${fish.id}',
        event
      )
    "
  >
    ${isFound ? "♥" : "♡"}
  </span>

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

  animateSearchResults(
    resultArea
  );

// ========================================
// 検索結果を滑らかに表示
// ========================================

function animateSearchResults(
  resultArea
) {

  resultArea
    .getAnimations()
    .forEach(
      function(animation) {
        animation.cancel();
      }
    );


  resultArea.animate(
    [
      {
        opacity: 0.35,
        transform: "translateY(5px)"
      },

      {
        opacity: 1,
        transform: "translateY(0)"
      }
    ],
    {
      duration: 160,
      easing: "ease-out"
    }
  );

}





















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
const isFound =
  isFishFound(
    fish.id
  );


  setPageBackground("none");


  const detailLocationHTML =
    createDetailLocationGuide(
      fish
    );


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

  <div class="creature-detail-title-row">

<div class="creature-found-wrap">

  <span class="creature-found-label">
    見た！
  </span>

  <span
    class="
      creature-found-heart
      ${isFound ? "is-found" : ""}
    "
    data-found-fish-id="${fish.id}"
    onclick="
      toggleFoundFish(
        '${fish.id}',
        event
      )
    "
  >
    ${isFound ? "♥" : "♡"}
  </span>

</div>



  <h1 class="creature-detail-name">
    ${escapeHTML(
      fish.nameJa
    )}
  </h1>


  <span
    class="detail-title-spacer"
    aria-hidden="true"
  >
  </span>

</div>


${detailLocationHTML}


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
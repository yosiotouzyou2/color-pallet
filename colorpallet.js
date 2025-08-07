const colorGroups = {
  "青系": [
    ["水色", "173, 216, 230"],
    ["スカイブルー", "135, 206, 250"],
    ["空色", "135, 206, 235"],
    ["ターコイズ", "64, 224, 208"],
    ["シアン", "0, 255, 255"],
    ["ロイヤルブルー", "65, 105, 225"],
    ["青", "0, 0, 255"],
    ["コバルトブルー", "0, 71, 171"],
    ["藍色", "0, 51, 102"],
    ["紺色", "0, 0, 128"]
  ],
  "藍系": [
    ["ブルーグレイ", "168, 178, 204"],
    ["インディゴブルー", "75, 0, 130"],
    ["藍色", "0, 64, 128"],
    ["紺色", "0, 0, 128"],
    ["鉄紺", "30, 30, 60"],
    ["濃藍", "15, 30, 60"],
    ["ネイビーブルー", "0, 0, 102"],
    ["勝色（かちいろ）", "0, 34, 102"]
  ],
  "赤系": [
    ["バラ色", "255, 192, 203"],
    ["薄紅色", "255, 182, 193"],
    ["サーモンピンク", "250, 128, 114"],
    ["朱色", "255, 83, 73"],
    ["珊瑚色", "255, 127, 80"],
    ["朱華", "230, 41, 55"],
    ["赤", "255, 0, 0"],
    ["茜色", "176, 23, 31"],
    ["ワインレッド", "114, 47, 55"],
    ["紅色", "204, 0, 0"],
    ["バーガンディ", "128, 0, 32"]
  ],
  "ピンク系": [
    ["ベビーピンク", "255, 228, 225"],
    ["桜色", "255, 234, 240"],
    ["ローズピンク", "255, 204, 204"],
    ["ピンク", "255, 192, 203"],
    ["薄紅色", "250, 142, 155"],
    ["サーモンピンク", "255, 145, 164"],
    ["珊瑚色", "255, 114, 118"],
    ["梅色", "222, 103, 139"],
    ["桃色", "255, 105, 180"],
    ["中紅色", "204, 72, 99"],
    ["バラ色", "224, 48, 96"]
  ],
  "オレンジ系": [
    ["アプリコット", "251, 206, 177"],
    ["パステルオレンジ", "255, 209, 150"],
    ["ピーチ", "255, 203, 164"],
    ["ライトサーモン", "255, 160, 122"],
    ["珊瑚色", "255, 127, 80"],
    ["橙色", "255, 128, 0"],
    ["オレンジ", "255, 165, 0"],
    ["山吹色", "255, 181, 0"],
    ["キャロットオレンジ", "237, 145, 33"],
    ["柿色", "221, 102, 17"],
    ["焦げ茶オレンジ", "198, 104, 36"]
  ],
  "黄色系": [
    ["薄黄色", "255, 255, 204"],
    ["レモンイエロー", "255, 250, 205"],
    ["クリーム色", "255, 253, 208"],
    ["パステルイエロー", "253, 253, 150"],
    ["明るい黄色", "255, 255, 0"],
    ["黄色", "255, 255, 0"],
    ["黄金色", "255, 193, 37"],
    ["山吹色", "255, 181, 0"],
    ["マスタード", "255, 219, 88"],
    ["琥珀色", "255, 191, 0"],
    ["オーカー", "204, 119, 34"],
    ["黄土色", "153, 101, 21"]
  ],
  "緑系": [
    ["ミントグリーン", "152, 255, 152"],
    ["薄緑", "152, 251, 152"],
    ["若草色", "144, 238, 144"],
    ["黄緑", "154, 205, 50"],
    ["エメラルドグリーン", "80, 200, 120"],
    ["ジャングルグリーン", "41, 171, 135"],
    ["ライムグリーン", "50, 205, 50"],
    ["オリーブ", "128, 128, 0"],
    ["グリーン", "0, 128, 0"],
    ["森林緑", "34, 139, 34"],
    ["フォレストグリーン", "34, 139, 34"],
    ["深緑", "0, 100, 0"]
  ],
  "青緑系": [
    ["パウダーブルー", "176, 224, 230"],
    ["ライトターコイズ", "173, 216, 230"],
    ["アクアマリン", "127, 255, 212"],
    ["ターコイズ", "64, 224, 208"],
    ["ティールブルー", "54, 117, 136"],
    ["青緑", "0, 128, 128"],
    ["ビリジアン", "0, 150, 152"],
    ["ピーコックグリーン", "0, 159, 152"],
    ["マリンブルー", "0, 119, 145"],
    ["深青緑", "0, 86, 94"]
  ],
  "黄緑系": [
    ["ミントグリーン", "152, 255, 152"],
    ["薄緑", "152, 251, 152"],
    ["若草色", "144, 238, 144"],
    ["ライム", "191, 255, 0"],
    ["黄緑", "154, 205, 50"],
    ["萌黄色", "139, 195, 74"],
    ["アップルグリーン", "128, 189, 76"],
    ["マスカットグリーン", "124, 205, 124"],
    ["シャトルーズグリーン", "127, 255, 0"],
    ["ピスタチオグリーン", "143, 188, 143"]
  ],
  "紫系": [
    ["ラベンダー", "230, 230, 250"],
    ["藤色", "218, 187, 255"],
    ["ライラック", "200, 162, 200"],
    ["すみれ色", "155, 107, 204"],
    ["菫色", "138, 43, 226"],
    ["紫", "128, 0, 128"],
    ["葡萄色", "97, 64, 128"],
    ["青紫", "89, 51, 146"],
    ["濃紫", "75, 0, 130"],
    ["茄子紺", "54, 37, 74"]
  ],
  "茶系": [
    ["ベージュ", "245, 245, 220"],
    ["アイボリーブラウン", "231, 208, 170"],
    ["キャメル", "193, 154, 107"],
    ["カフェオレ", "180, 140, 100"],
    ["黄土色", "181, 131, 90"],
    ["こげ茶", "138, 92, 66"],
    ["ブロンズ", "137, 104, 57"],
    ["チョコレート", "123, 63, 0"],
    ["栗色", "101, 67, 33"],
    ["バーントアンバー", "138, 51, 36"],
    ["ウォルナット", "87, 58, 46"]
  ],
  "灰系": [
    ["ホワイトグレー", "245, 245, 245"],
    ["ライトグレー", "211, 211, 211"],
    ["シルバーグレー", "192, 192, 192"],
    ["グレージュ", "190, 183, 172"],
    ["ねずみ色", "149, 149, 149"],
    ["スチールグレー", "119, 136, 153"],
    ["グレー", "128, 128, 128"],
    ["ダークグレー", "105, 105, 105"],
    ["チャコールグレー", "80, 80, 80"],
    ["鉛色", "70, 70, 80"],
    ["黒鉄色", "40, 40, 50"]
  ],
  "黒系": [
    ["スミ黒", "50, 50, 50"],
    ["チャコールブラック", "40, 40, 40"],
    ["ランプブラック", "30, 30, 30"],
    ["黒", "0, 0, 0"],
    ["漆黒", "10, 10, 10"],
    ["墨色", "38, 38, 38"],
    ["グラファイトブラック", "25, 25, 25"]
  ],
  "白系": [
    ["純白", "255, 255, 255"],
    ["雪色", "250, 250, 250"],
    ["生成り色", "252, 243, 224"],
    ["オフホワイト", "245, 245, 240"],
    ["アイボリー", "255, 255, 240"],
    ["シャンパン", "247, 231, 206"],
    ["クリーム", "255, 253, 208"],
    ["パールホワイト", "234, 224, 200"],
    ["ミルクホワイト", "255, 255, 240"],
    ["亜麻色", "244, 236, 222"]
  ],
  "蛍光色": [
    ["ネオンイエロー", "255, 255, 102"],
    ["ネオンオレンジ", "255, 153, 51"],
    ["ネオンピンク", "255, 20, 147"],
    ["ネオングリーン", "57, 255, 20"],
    ["ネオンブルー", "77, 77, 255"],
    ["蛍光ライム", "204, 255, 0"],
    ["蛍光グリーン", "0, 255, 0"],
    ["蛍光レッド", "255, 64, 64"],
    ["蛍光パープル", "191, 0, 255"],
    ["蛍光シアン", "0, 255, 255"]
  ],
  "金系": [
    ["シャンパンゴールド", "247, 231, 206"],
    ["ライトゴールド", "255, 236, 139"],
    ["メタリックゴールド", "212, 175, 55"],
    ["ゴールド", "255, 215, 0"],
    ["アンティークゴールド", "184, 134, 11"],
    ["ブロンズ", "205, 127, 50"],
    ["ダークゴールド", "184, 134, 11"]
  ],
  "銀系": [
    ["パールホワイト", "234, 224, 200"],
    ["ライトシルバー", "192, 192, 192"],
    ["シルバー", "192, 192, 192"],
    ["メタリックシルバー", "196, 196, 196"],
    ["クロームシルバー", "200, 200, 200"],
    ["ガンメタル", "42, 52, 57"],
    ["ダークシルバー", "128, 128, 128"]
  ]
};

const container = document.getElementById("paletteContainer");
const toast = document.getElementById("toast");
const favoritesKey = 'favoriteColors';

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

for (const groupName in colorGroups) {
  const section = document.createElement("div");
  section.className = "palette-section";

  const title = document.createElement("div");
  title.className = "palette-title";
  title.textContent = groupName;

  const groupColors = colorGroups[groupName];

  const groupContainer = document.createElement("div");
  groupContainer.className = "palette-container";

  groupColors.forEach(([name, rgbString]) => {
    const rgb = `rgb(${rgbString})`;

    const palette = document.createElement("div");
    palette.className = "color-palette";

    palette.innerHTML = `
      <div class="color-box" style="background-color: ${rgb};"></div>
      <div class="color-info">
        <div class="color-name">${name}</div>
        <div class="color-rgb">${rgb}</div>
      </div>
      <button class="copy-btn">Copy</button>
      <button class="fav-btn">♡</button>
    `;

    const copyBtn = palette.querySelector(".copy-btn");
    copyBtn.addEventListener("click", () => {
      navigator.clipboard.writeText(rgbString).then(() => {
        showToast(`Copied: ${rgbString}`);
      });
    });

    const favBtn = palette.querySelector(".fav-btn");
    favBtn.addEventListener("click", () => {
      addFavorite({ name, rgb: rgbString });
      showToast(`Added to favorites: ${name}`);
    });

    function removeFavorite(color) {
        let favs = getFavorites();
        favs = favs.filter(c => !(c.name === color.name && c.rgb === color.rgb));
        localStorage.setItem('favoriteColors', JSON.stringify(favs));
        renderFavorites();   // お気に入りリスト再描画
        updateFavoriteButtons(); // これでパレット側も状態更新
    }


    favBtn.addEventListener("click", () => {
        const isActive = favBtn.classList.toggle("active");
        const color = { name, rgb: rgbString }; // 対象の色データ

        if (isActive) {
            addFavorite(color);   // お気に入りに追加
        } else {
            removeFavorite(color); // お気に入りから削除
        }
        });


    groupContainer.appendChild(palette);
  });

    section.appendChild(title);
    section.appendChild(groupContainer);
    container.appendChild(section);

    // パレット生成後に
    updateFavoriteButtons();

}


// お気に入り一覧を取得
function getFavorites() {
  const data = localStorage.getItem(favoritesKey);
  return data ? JSON.parse(data) : [];
}

function updateFavoriteButtons() {
  const favorites = getFavorites();

  document.querySelectorAll(".color-palette").forEach(palette => {
    const name = palette.querySelector(".color-name").textContent;
    const rgbText = palette.querySelector(".color-rgb").textContent;
    const rgbMatch = rgbText.match(/\d+,\s*\d+,\s*\d+/);
    const rgb = rgbMatch ? rgbMatch[0] : "";

    const favBtn = palette.querySelector(".fav-btn");
    if (favorites.find(c => c.name === name && c.rgb === rgb)) {
      favBtn.classList.add("active");
    } else {
      favBtn.classList.remove("active");
    }
  });
}

// お気に入り追加
function addFavorite(color) {
  const favs = getFavorites();
  if (!favs.find(c => c.name === color.name && c.rgb === color.rgb)) {
    favs.push(color);
    localStorage.setItem(favoritesKey, JSON.stringify(favs));
  }
  renderFavorites();
}

// お気に入り削除
function removeFavorite(color) {
  let favs = getFavorites();
  favs = favs.filter(c => !(c.name === color.name && c.rgb === color.rgb));
  localStorage.setItem(favoritesKey, JSON.stringify(favs));
  renderFavorites();
  updateFavoriteButtons();
}

// お気に入り一覧の表示
function renderFavorites() {
  const favs = getFavorites();
  const favContainer = document.getElementById('favoritesContainer');
  favContainer.innerHTML = '';

  favs.forEach(color => {
    const div = document.createElement('div');
    div.textContent = `${color.name} (RGB: ${color.rgb})`;
    div.style.backgroundColor = `rgb(${color.rgb})`;
    div.style.color = '#fff';
    div.style.padding = '4px';
    div.style.margin = '2px';
    div.style.borderRadius = '3px';

    const copyBtn = document.createElement('button');
    copyBtn.textContent = 'Copy';
    copyBtn.className = 'favorite-btn';
    copyBtn.style.marginLeft = '8px';
    copyBtn.onclick = () => {
      navigator.clipboard.writeText(color.rgb).then(() => {
        showToast(`Copied: ${color.rgb}`);
      });
    };
    div.appendChild(copyBtn);

    // 削除ボタン
    const btn = document.createElement('button');
    btn.textContent = '×';
    btn.className = 'favorite-btn remove-btn';
    btn.style.marginLeft = '8px';
    btn.onclick = () => removeFavorite(color);

    div.appendChild(btn);
    favContainer.appendChild(div);
  });
}

//リンクジャンプ
document.getElementById("editer").addEventListener("click", () => {
  window.open("https://scratch.mit.edu/users/yosiotouzyou2/", "_blank"); // 新しいタブで開く
});

document.getElementById("template").addEventListener("click", () => {
  window.open("https://scratch.mit.edu/users/yosiotouzyou2/", "_blank");
});

document.getElementById("color").addEventListener("click", () => {
  window.open("https://scratch.mit.edu/users/yosiotouzyou2/", "_blank");
});


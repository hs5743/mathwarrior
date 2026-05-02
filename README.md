# 數學勇者 MathWarrior

`MathWarrior` 是一個可放上 GitHub Pages 的 3D 數學冒險雛型。玩家選擇角色後進入迷宮，透過小數、分數與除法題目擊敗守衛，完成 16 道封印。內建題庫目前已匯入 89 題。

## 檔案

- `index.html`：頁面結構
- `styles.css`：介面、手機版與視覺樣式
- `game.js`：Three.js 場景、題目流程、排行榜與本機紀錄

## 部署到 GitHub Pages

把這個資料夾內容放到 `hs5743/mathwarrior` repository 的根目錄，GitHub Pages 選擇從 `main` branch 的 root 發布即可。

## Google Apps Script 接口

此版本可直接在純網頁環境執行，排行榜會先使用瀏覽器本機紀錄與示範資料。

如果整個遊戲部署在 Google Apps Script Web App，`game.js` 會自動偵測：

- `google.script.run.getQuestions()`
- `google.script.run.getLeaderboard()`
- `google.script.run.saveRecord(playerName, score, timeString)`

`getQuestions()` 回傳格式建議如下：

```js
[
  {
    q: "題目文字",
    options: ["選項一", "選項二", "選項三", "選項四"],
    ans: 0,
    monster: "迷宮守衛",
    color: 0x4fd1a5,
    shape: "sphere"
  }
]
```

`shape` 可使用 `sphere`、`box`、`octa`、`crystal`。

如果遊戲部署在 GitHub Pages，瀏覽器不會有 `google.script.run`。這時需要把 Apps Script 另行部署成可回傳 JSON 的 Web App API，然後在 `game.js` 最上方填入：

```js
const GAS_WEB_APP_URL = "你的 Apps Script Web App URL";
```

API 建議支援這三個 `action` query：

- `?action=getQuestions`
- `?action=getLeaderboard`
- `?action=saveRecord&playerName=...&score=...&timeString=...`

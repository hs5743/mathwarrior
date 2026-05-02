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

可直接參考 `apps-script/Code.gs`。API 支援這三個 `action` query：

- `?action=getQuestions`
- `?action=getLeaderboard`
- `?action=saveRecord&playerName=...&score=...&timeString=...`

## 建議的安全設定

- 不要把 Google Sheets API key、OAuth client secret、服務帳戶 JSON 金鑰放進 GitHub Pages 或前端程式碼。
- 建議使用綁定試算表的 Apps Script Web App 當中介層，程式只存取這份遊戲試算表。
- 試算表只放遊戲需要的 `題庫` 與 `紀錄`，不要放學生個資、成績冊或其他敏感資料。
- Apps Script 部署時，如果只給校內學生使用，優先選擇「只有網域內使用者」；若必須公開，才選「任何人」。
- `apps-script/Code.gs` 已限制姓名長度、分數範圍、時間格式與 JSONP callback 名稱，降低亂寫資料與注入風險。
- 若 Web App URL 洩漏或被濫用，請到 Apps Script 的部署管理中建立新部署或停用舊部署。

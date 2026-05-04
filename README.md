# 數學勇者 MathWarrior

`MathWarrior` 是一個可放上 GitHub Pages 的 2D 偽 3D 數學冒險雛型。玩家選擇角色後進入迷宮，透過小數、分數與除法題目擊敗守衛，完成 16 道封印。內建題庫目前已匯入 89 題。

## 檔案

- `index.html`：頁面結構
- `styles.css`：介面、手機版與視覺樣式
- `game.js`：Canvas 2D 偽 3D 場景、題目流程、排行榜與本機紀錄

## 部署到 GitHub Pages

把這個資料夾內容放到 `hs5743/mathwarrior` repository 的根目錄，GitHub Pages 選擇從 `main` branch 的 root 發布即可。

## 題庫與排行榜

此版本採資安優先設計，不連接 Google Sheets API，也不在前端放任何 API key 或服務帳戶金鑰。

目前運作方式：

- 題庫：內建於 `game.js`，目前 89 題。
- 排行榜：存在玩家瀏覽器的 `localStorage`，只在同一台裝置/同一瀏覽器保留。
- 示範資料：排行榜會混入幾筆示範紀錄，方便第一次開啟時確認版面。

若日後需要全班共用排行榜，建議改用有登入、權限與後端驗證的正式後端服務，不建議把 Google API 憑證放入公開 GitHub Pages。

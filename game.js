const TOTAL_STAGES = 16;
const GAS_WEB_APP_URL = "";
const BASE_QUESTIONS = [
  {
    "q": "將 3 公斤的米平分成 4 袋，列式是 3÷4。若改用分數表示，被除數「3」會放在哪裡？",
    "options": [
      "分母的位置",
      "分子的位置",
      "分數線的旁邊",
      "整數的位置"
    ],
    "ans": 1,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "觀察算式 5÷8=5/8，這代表分數「5/8」其實等同於什麼動作？",
    "options": [
      "把8平分成5份",
      "把5和8加起來",
      "把5平分成8份",
      "把5放大8倍"
    ],
    "ans": 2,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "「一條 2 公尺的緞帶平分成 5 段」，求一段的長度，第一步的算式該怎麼寫？",
    "options": [
      "5 ÷ 2",
      "2 ÷ 5",
      "2 × 5",
      "2 - 5"
    ],
    "ans": 1,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "小明寫出分數 7/20。在除法情境中，分母的「20」代表什麼意義？",
    "options": [
      "原本的總重量",
      "被平分的總份數",
      "最後分到的數量",
      "剩下的數量"
    ],
    "ans": 1,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "比較 3÷4 和 4÷3，它們化為分數後的結果代表的意義一樣嗎？",
    "options": [
      "完全一樣",
      "不一樣，被分的東西和份數顛倒了",
      "只差在有沒有小數點",
      "都是代表1.33"
    ],
    "ans": 1,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  },
  {
    "q": "將 1/8 轉換為小數時，如果使用直式計算，除號裡面（被除數）應該放哪一個數字？",
    "options": [
      "1",
      "8",
      "10",
      "100"
    ],
    "ans": 0,
    "monster": "薄霧蝙蝠",
    "color": 10265519,
    "shape": "crystal"
  },
  {
    "q": "「將 4 塊披薩平分給 25 人」，求每人分到幾塊。請問這題的「除數」是誰？",
    "options": [
      "4",
      "25",
      "100",
      "無法確定"
    ],
    "ans": 1,
    "monster": "金葉騎兵",
    "color": 16765286,
    "shape": "octa"
  },
  {
    "q": "承上題，除數 25 寫成分數時，應該放在哪一個位置？",
    "options": [
      "分子",
      "分母",
      "分數前面",
      "小數點後面"
    ],
    "ans": 1,
    "monster": "藤蔓守門者",
    "color": 7984222,
    "shape": "box"
  },
  {
    "q": "為什麼 3/5 可以直接看成 3÷5 進行計算？",
    "options": [
      "因為分子一定比較小",
      "因為分母都是5的倍數",
      "因為中間的分數線就等同於除號",
      "因為這是老師規定的"
    ],
    "ans": 2,
    "monster": "古樹謎靈",
    "color": 16096779,
    "shape": "sphere"
  },
  {
    "q": "當我們要把分數化為小數，最核心的概念是把分數視為什麼樣的運算？",
    "options": [
      "加法運算",
      "減法運算",
      "乘法運算",
      "除法運算"
    ],
    "ans": 3,
    "monster": "藍光甲蟲",
    "color": 3718648,
    "shape": "crystal"
  },
  {
    "q": "欲將 1/2 化為小數，若使用「擴分法」，我們希望把分母變成多少最容易直接轉成小數？",
    "options": [
      "4",
      "8",
      "10",
      "12"
    ],
    "ans": 2,
    "monster": "月影獵手",
    "color": 10980346,
    "shape": "octa"
  },
  {
    "q": "小華想把 3/4 化為小數，他應該把分子和分母同時乘上多少，才能讓分母變成 100？",
    "options": [
      "20",
      "25",
      "40",
      "50"
    ],
    "ans": 1,
    "monster": "迷宮石像",
    "color": 2278750,
    "shape": "box"
  },
  {
    "q": "承上題，當擴分成 75/100 時，分母的 100 代表小數點後面會有幾位數？",
    "options": [
      "一位",
      "兩位",
      "三位",
      "四位"
    ],
    "ans": 1,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "將 7/20 用擴分法化為小數時，為了讓分母變 100，第一步該做什麼？",
    "options": [
      "分子分母同除以2",
      "分子分母同乘以5",
      "只把分母乘以5",
      "只把分子乘以5"
    ],
    "ans": 1,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "將 9/25 化為小數，為什麼分母要乘上 4？",
    "options": [
      "因為 4 是吉祥數字",
      "為了讓分母變成 100，方便轉化為小數",
      "為了讓分子變大",
      "因為 25 不能除以其他數字"
    ],
    "ans": 1,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "遇到分數 1/8 時，無法輕易擴分成 10 或 100，這時分母應該同乘 125 擴分為多少？",
    "options": [
      "1000",
      "2000",
      "500",
      "800"
    ],
    "ans": 0,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "小華把 3/5 擴分為 6/10，請問 6/10 讀作「十分之六」，寫成小數是多少？",
    "options": [
      "0.06",
      "0.6",
      "6.1",
      "6"
    ],
    "ans": 1,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  },
  {
    "q": "欲將 11/20 轉為小數，若分母乘以 5 變成 100，分子 11 必須怎麼處理？",
    "options": [
      "保持不變",
      "加 5",
      "也要乘以 5 變成 55",
      "除以 5"
    ],
    "ans": 2,
    "monster": "薄霧蝙蝠",
    "color": 10265519,
    "shape": "crystal"
  },
  {
    "q": "如果擴分時只把分母乘以 5，卻忘記乘分子（變成 11/100），這是犯了什麼錯誤？",
    "options": [
      "沒有遵守分子分母同乘同除的擴分規則",
      "數字算錯了",
      "加法進位錯誤",
      "沒有寫單位"
    ],
    "ans": 0,
    "monster": "金葉騎兵",
    "color": 16765286,
    "shape": "octa"
  },
  {
    "q": "將 7/25 擴分為分母為 100 的分數時，分子 7 會變成多少？",
    "options": [
      "7",
      "14",
      "21",
      "28"
    ],
    "ans": 3,
    "monster": "藤蔓守門者",
    "color": 7984222,
    "shape": "box"
  },
  {
    "q": "若一個分數擴分後為 45/100，它對應的小數是多少？",
    "options": [
      "4.5",
      "0.45",
      "0.045",
      "45"
    ],
    "ans": 1,
    "monster": "古樹謎靈",
    "color": 16096779,
    "shape": "sphere"
  },
  {
    "q": "化小數有「擴分法」與「分子除以分母」。對於 4/25，用哪種方法出錯率較低且更直觀？",
    "options": [
      "擴分法，同乘4變16/100",
      "直式除法，因為數字大",
      "兩者一樣容易出錯",
      "先轉成帶分數"
    ],
    "ans": 0,
    "monster": "藍光甲蟲",
    "color": 3718648,
    "shape": "crystal"
  },
  {
    "q": "小美算 3÷8 的直式，算到小數第一位餘數是 6。下一步她該怎麼做？",
    "options": [
      "直接寫答案 0.3...6",
      "在餘數後面補 0 繼續往下除",
      "把餘數捨去",
      "向前進位"
    ],
    "ans": 1,
    "monster": "月影獵手",
    "color": 10980346,
    "shape": "octa"
  },
  {
    "q": "直式除法化為小數時，要算到什麼時候才能判定「完全除盡」？",
    "options": [
      "算到第一位就好",
      "算到第二位就好",
      "直到餘數出現 0 為止",
      "算到紙寫不下為止"
    ],
    "ans": 2,
    "monster": "迷宮石像",
    "color": 2278750,
    "shape": "box"
  },
  {
    "q": "分母是 2, 4, 5, 8, 20, 25 的分數，化為小數時有一個共同特徵，是什麼？",
    "options": [
      "它們都無法除盡",
      "它們化為小數後都會無限循環",
      "它們都可以剛好除盡（有限小數）",
      "它們的小數點後都只有一位"
    ],
    "ans": 2,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "在 0 到 1 的數線上，1/2 在正中間 (0.5)。請問 1/4 會在哪個區段？",
    "options": [
      "0 和 0.5 的正中間 (0.25)",
      "0.5 和 1 的正中間",
      "超過 1 的地方",
      "剛好在 0 的位置"
    ],
    "ans": 0,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "已知 1/8 = 0.125，要求 3/8 的小數，除了用直式除法，還可以用什麼觀念最快算出來？",
    "options": [
      "用 1 減去 0.125",
      "將 0.125 乘以 3 倍",
      "將 0.125 除以 3",
      "把 3 和 8 加起來"
    ],
    "ans": 1,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "因為 3/8 是 3 個 1/8，所以 0.125 × 3 = 0.375。這展現了分數的什麼概念？",
    "options": [
      "約分的規則",
      "分數是由單位分數（如1/8）累積而成的",
      "假分數的轉換",
      "除不盡的現象"
    ],
    "ans": 1,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "若 1/4 = 0.25，從數線概念來看，5/4 的小數一定會具備什麼特徵？",
    "options": [
      "小於 0.5",
      "介於 0.5 到 1 之間",
      "大於 1，因為分子大於分母",
      "等於 0.25"
    ],
    "ans": 2,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  },
  {
    "q": "比較 0.6 和 5/8 (即0.625) 的大小。在數線上，誰的位置比較靠右邊（比較大）？",
    "options": [
      "0.6",
      "2026-05-08 00:00:00",
      "一樣大",
      "無法比較"
    ],
    "ans": 1,
    "monster": "薄霧蝙蝠",
    "color": 10265519,
    "shape": "crystal"
  },
  {
    "q": "老師問：「7/20 是大於還是小於 0.5？」小明看一眼就說小於，他最可能是怎麼判斷的？",
    "options": [
      "他直接猜的",
      "因為一半是 10/20，而 7 小於 10",
      "因為 7 加 20 等於 27",
      "他用直式算出來的"
    ],
    "ans": 1,
    "monster": "金葉騎兵",
    "color": 16765286,
    "shape": "octa"
  },
  {
    "q": "若知道 1/5 = 0.2，要推算 4/5，可以直接怎麼想？",
    "options": [
      "0.2 加 4",
      "0.2 的 4 倍，也就是 0.8",
      "1 減 0.2",
      "4 除以 0.2"
    ],
    "ans": 1,
    "monster": "藤蔓守門者",
    "color": 7984222,
    "shape": "box"
  },
  {
    "q": "數線上，把 0 到 1 平分成 100 格。9/25 會落在哪一格？",
    "options": [
      "第 9 格",
      "第 25 格",
      "第 36 格，因為擴分為 36/100",
      "第 100 格"
    ],
    "ans": 2,
    "monster": "古樹謎靈",
    "color": 16096779,
    "shape": "sphere"
  },
  {
    "q": "比較 3/8 和 0.4 的大小，最不容易出錯的判斷程序是什麼？",
    "options": [
      "看誰的數字多",
      "把 3/8 化為小數 0.375，再與 0.4 對齊位值比較",
      "直接看分母 8 大於 4",
      "把 0.4 變成 4/10 再亂猜"
    ],
    "ans": 1,
    "monster": "藍光甲蟲",
    "color": 3718648,
    "shape": "crystal"
  },
  {
    "q": "比較 0.375 和 0.4 時，從左到右，應該先比較哪一個位數的數字？",
    "options": [
      "個位",
      "十分位（小數第一位）",
      "百分位（小數第二位）",
      "千分位（小數第三位）"
    ],
    "ans": 1,
    "monster": "月影獵手",
    "color": 10980346,
    "shape": "octa"
  },
  {
    "q": "題目要求：「商用四捨五入法求到小數第一位」。這代表直式除法必須算到小數第幾位？",
    "options": [
      "小數第一位",
      "小數第二位",
      "小數第三位",
      "小數第四位"
    ],
    "ans": 1,
    "monster": "迷宮石像",
    "color": 2278750,
    "shape": "box"
  },
  {
    "q": "承上題，為什麼必須要多算一位（算到小數第二位）？",
    "options": [
      "為了讓算式看起來比較長",
      "因為要觀察下一位的數字來決定是否進位",
      "因為老師規定的格式",
      "為了檢查有沒有算錯"
    ],
    "ans": 1,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "題目：「求商到小數第二位」。小強直式只算到第二位就寫答案，他省略了哪個重要步驟？",
    "options": [
      "他沒有算到第三位，因此無法判斷到底該四捨還是五入",
      "他忘了寫單位",
      "他忘記寫大約符號",
      "他沒有驗算"
    ],
    "ans": 0,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "若要四捨五入到「百分位」(小數第二位)，我們做決定時要盯著哪一個位數？",
    "options": [
      "十分位",
      "百分位",
      "千分位 (小數第三位)",
      "萬分位"
    ],
    "ans": 2,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "如果觀察的那一位（例如千分位）數字是 5，在四捨五入的規則中該怎麼處理？",
    "options": [
      "直接捨去，前一位不變",
      "向前一位進 1",
      "保留 5，後面補 0",
      "把前一位減 1"
    ],
    "ans": 1,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "如果觀察的那一位數字是 4，在四捨五入時，我們該怎麼處理？",
    "options": [
      "向前進位",
      "直接捨去，前一位的數字保持不變",
      "把 4 變成 5",
      "把它變成 0 再進位"
    ],
    "ans": 1,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  },
  {
    "q": "計算 10÷3，商是 3.333...。若要四捨五入到小數第一位，決定進位與否的關鍵數字是誰？",
    "options": [
      "整數位的 3",
      "小數第一位的 3",
      "小數第二位的 3",
      "最後一個 3"
    ],
    "ans": 2,
    "monster": "薄霧蝙蝠",
    "color": 10265519,
    "shape": "crystal"
  },
  {
    "q": "小明算 2.6÷9，得到 0.288...。如果要取概數到小數第一位，結果會是多少？",
    "options": [
      "0.2",
      "0.3",
      "0.4",
      "0.28"
    ],
    "ans": 1,
    "monster": "金葉騎兵",
    "color": 16765286,
    "shape": "octa"
  },
  {
    "q": "承上題，因為小數第二位是 8，要進位。進位後，十分位的 2 為什麼會改變？",
    "options": [
      "因為 8 大於 5，觸發了「五入」規則，把 2 加 1 變成 3",
      "因為 2 太小了",
      "因為小數點移位了",
      "因為乘法進位"
    ],
    "ans": 0,
    "monster": "藤蔓守門者",
    "color": 7984222,
    "shape": "box"
  },
  {
    "q": "若商是 1.066，四捨五入到小數第二位時，百分位的 6 為什麼會變成 7？",
    "options": [
      "因為老師說要加1",
      "因為千分位是 6，符合「五入」條件，所以進位",
      "因為算錯了",
      "因為要變成雙數"
    ],
    "ans": 1,
    "monster": "古樹謎靈",
    "color": 16096779,
    "shape": "sphere"
  },
  {
    "q": "若商為 0.433，四捨五入到小數第二位時，結果為何是 0.43 而不是 0.44？",
    "options": [
      "因為千分位是 3，屬於「四捨」，直接捨去不用進位",
      "因為 4 加 3 不等於 8",
      "因為這是規定的格式",
      "因為 3 不能進位給 4"
    ],
    "ans": 0,
    "monster": "藍光甲蟲",
    "color": 3718648,
    "shape": "crystal"
  },
  {
    "q": "題目要求概數到「小數第二位」，小強答案寫 1.5，這在觀念表達上哪裡不夠嚴謹？",
    "options": [
      "沒有寫出第二位的 0 (應寫 1.50) 來表示精確度到了百分位",
      "字寫太醜",
      "不應該有小數點",
      "應該寫成分數"
    ],
    "ans": 0,
    "monster": "月影獵手",
    "color": 10980346,
    "shape": "octa"
  },
  {
    "q": "算式 5.5÷7 算到小數第三位是 0.785。四捨五入到第二位的正確思考步驟是什麼？",
    "options": [
      "看第三位 5 ➔ 符合五入 ➔ 進位給第二位的 8 ➔ 變成 0.79",
      "把 5 直接擦掉變 0.78",
      "看第二位 8 ➔ 進位給 7 ➔ 變成 0.8",
      "全部進位變成 1"
    ],
    "ans": 0,
    "monster": "迷宮石像",
    "color": 2278750,
    "shape": "box"
  },
  {
    "q": "若一題除法的商為 3.004，四捨五入到小數第二位的結果是多少？",
    "options": [
      "3.01",
      "3.1",
      "3",
      "3.4"
    ],
    "ans": 2,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "寫出概數 3.00 時，後面的兩個 0 能不能隨便省略不寫？",
    "options": [
      "可以，0沒意義",
      "不建議，寫出 .00 代表這是經過測量或四捨五入「精確到第二位」的結果",
      "一定會被打錯",
      "看心情決定"
    ],
    "ans": 1,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "計算 1.3÷3 時，我們發現商的小數部分一直出現 3。這是因為直式計算中發生了什麼事？",
    "options": [
      "除數變大了",
      "每次減完的餘數都一樣是 1，導致過程不斷重複",
      "小數點寫錯位置了",
      "乘法表背錯了"
    ],
    "ans": 1,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "當直式除法中出現「相同的餘數」一直重複時，代表商的結果會怎樣？",
    "options": [
      "會突然變成 0",
      "商的數字也會開始不斷重複循環",
      "會剛好除盡",
      "小數點會消失"
    ],
    "ans": 1,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "遇到「一直除不盡」的題目，如果題目沒有特別規定，我們能把直式完全寫完嗎？",
    "options": [
      "可以，寫到第100位就結束了",
      "可以，只要紙夠大",
      "不可能寫完，所以通常需要依據情境「用四捨五入取概數」",
      "直接放棄不寫"
    ],
    "ans": 2,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  },
  {
    "q": "為什麼有些數除以 3、7、9 時，常常會遇到除不盡的狀況？",
    "options": [
      "因為它們不是 10 的因數 (2和5) 的組合，無法形成完美的十進位小數",
      "因為它們是幸運數字",
      "因為數字太小",
      "因為計算機算不出來"
    ],
    "ans": 0,
    "monster": "薄霧蝙蝠",
    "color": 10265519,
    "shape": "crystal"
  },
  {
    "q": "小明算 22.39÷21，算到小數第三位 1.066，發現餘數又是 4。他可以大膽預測下一位的商是多少？",
    "options": [
      "0",
      "1",
      "6",
      "9"
    ],
    "ans": 2,
    "monster": "金葉騎兵",
    "color": 16765286,
    "shape": "octa"
  },
  {
    "q": "既然知道下一位還是 6，若題目只要求四捨五入到第二位，小明還需要繼續硬算嗎？",
    "options": [
      "需要，要算到第十位",
      "不用，知道第三位是6已經足夠判斷「五入」，可以直接寫出概數",
      "需要，老師會檢查",
      "看時間夠不夠"
    ],
    "ans": 1,
    "monster": "藤蔓守門者",
    "color": 7984222,
    "shape": "box"
  },
  {
    "q": "「10 公升果汁平分 3 杯」，列式 10÷3。這情境中「除不盡」代表什麼現實意義？",
    "options": [
      "果汁壞掉了",
      "現實中無法用完美的精確小數來分配，所以我們需要取概數來描述",
      "杯子破掉了",
      "果汁會變多"
    ],
    "ans": 1,
    "monster": "古樹謎靈",
    "color": 16096779,
    "shape": "sphere"
  },
  {
    "q": "在進行小數除法時，如果被除數的數字已經除完，但還有餘數，標準程序會怎麼做？",
    "options": [
      "直接把餘數當答案",
      "在餘數後面補 0 繼續往下除",
      "把餘數加到商裡面",
      "結束計算"
    ],
    "ans": 1,
    "monster": "藍光甲蟲",
    "color": 3718648,
    "shape": "crystal"
  },
  {
    "q": "為什麼被除數的最後面可以無限補 0 繼續除？",
    "options": [
      "因為 0 沒有意義",
      "因為小數末尾補 0 不會改變原本數值的大小 (如 1.3 = 1.300)",
      "為了讓算式變好看",
      "因為借位需要"
    ],
    "ans": 1,
    "monster": "月影獵手",
    "color": 10980346,
    "shape": "octa"
  },
  {
    "q": "當我們寫出 1.3÷3 ≈ 0.43 時，中間波浪狀的「≈」符號代表什麼意思？",
    "options": [
      "完全等於",
      "大約等於，表示這是一個經過取捨的「概數」",
      "小於的意思",
      "大於的意思"
    ],
    "ans": 1,
    "monster": "迷宮石像",
    "color": 2278750,
    "shape": "box"
  },
  {
    "q": "為什麼不寫「=」而要嚴謹地使用「≈」？",
    "options": [
      "因為 0.43 並不是精確的真實答案，只是為了方便記錄的近似值",
      "因為寫錯字了",
      "因為波浪符號比較好看",
      "沒有特別原因"
    ],
    "ans": 0,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "如果某除法算出來剛好是 0.5，我們需要用「≈」嗎？",
    "options": [
      "需要，小數都要用",
      "不需要，因為剛好除盡，這就是精確值，應該用等於「=」",
      "看題目有沒有要求",
      "都可以"
    ],
    "ans": 1,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "判斷題：「所有的分數都可以化成除得盡的有限小數。」這個觀念正確嗎？",
    "options": [
      "正確，只要慢慢算一定除得盡",
      "錯誤，例如 1/3 化為小數就會無限循環除不盡",
      "正確，用計算機就算得出來",
      "只適用於真分數"
    ],
    "ans": 1,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "在算 5÷6 得到 0.833...。若要四捨五入到小數第二位，我們需要算到小數第四位嗎？",
    "options": [
      "需要，算越多越好",
      "不需要，只要算到第三位，看到是 3 就可以判斷要「四捨」了",
      "需要，為了驗算",
      "不需要，算到第一位就好"
    ],
    "ans": 1,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "學生A算到小數第三位，學生B算到第五位，兩人都被要求四捨五入到第二位。誰的程序比較有效率？",
    "options": [
      "學生B，比較認真",
      "學生A，知道目標位數後「只多算一位」是最省時且正確的程序",
      "兩人都錯了",
      "效率一樣"
    ],
    "ans": 1,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  },
  {
    "q": "題目：「8 公斤土平分裝 9 盆，一盆約幾公斤？(四捨五入到小數第一位)」第一步該怎麼列式？",
    "options": [
      "9 ÷ 8",
      "8 ÷ 9",
      "8 × 9",
      "8 + 9"
    ],
    "ans": 1,
    "monster": "薄霧蝙蝠",
    "color": 10265519,
    "shape": "crystal"
  },
  {
    "q": "列出 8÷9 後，為了得到小數第一位的概數，直式計算的目標是算到哪裡？",
    "options": [
      "算到整數位",
      "算到小數第一位",
      "算到小數第二位，作為判斷進位的依據",
      "算到餘數為 0"
    ],
    "ans": 2,
    "monster": "金葉騎兵",
    "color": 16765286,
    "shape": "octa"
  },
  {
    "q": "「3公尺鐵絲平分7人，求每人約分到幾公尺(四捨五入到小數第二位)」。這題的完整解題程序為何？",
    "options": [
      "列式 3÷7 ➔ 算到小數第三位 ➔ 觀察第三位數字 ➔ 進行四捨五入取概數",
      "直接寫 3/7 結束",
      "列式 7÷3 ➔ 算到小數第一位 ➔ 結束",
      "用猜的"
    ],
    "ans": 0,
    "monster": "藤蔓守門者",
    "color": 7984222,
    "shape": "box"
  },
  {
    "q": "老師說：「只要取概數到十分位，我偷懶只算到十分位然後自己猜下一位可以嗎？」為什麼不行？",
    "options": [
      "可以，老師說的都對",
      "因為下一位的數字可能是 5~9，會觸發進位改變十分位的結果，不能用猜的",
      "因為會被扣分",
      "因為數字會變小"
    ],
    "ans": 1,
    "monster": "古樹謎靈",
    "color": 16096779,
    "shape": "sphere"
  },
  {
    "q": "小強計算 2÷7 得到 0.285。要四捨五入到第二位，他把 5 捨去變成 0.28。他犯了什麼程序錯誤？",
    "options": [
      "沒算錯",
      "遇到觀察位是 5 時應該要「五入」向前進位，他誤用成了捨去",
      "他忘記補 0",
      "他算錯位數了"
    ],
    "ans": 1,
    "monster": "藍光甲蟲",
    "color": 3718648,
    "shape": "crystal"
  },
  {
    "q": "15公升湯分11碗，15÷11=1.363...，四捨五入到小數第一位，正確的思維過程是？",
    "options": [
      "看第一位的 3 ➔ 捨去 ➔ 1.0",
      "看第二位的 6 ➔ 大於5要進位 ➔ 第一位的 3 變成 4 ➔ 得到 1.4",
      "看第三位的 3 ➔ 捨去 ➔ 1.36",
      "把 6 變成 0 ➔ 1.30"
    ],
    "ans": 1,
    "monster": "月影獵手",
    "color": 10980346,
    "shape": "octa"
  },
  {
    "q": "若一題的商是 0.996，四捨五入到小數第二位。這題的連續進位步驟該怎麼想？",
    "options": [
      "看第三位 6 ➔ 進位 ➔ 第二位 9 變 10 ➔ 滿十再向前進一 ➔ 變成 1.00",
      "直接把 6 捨去 ➔ 0.99",
      "把 99 變成 00 ➔ 0.00",
      "進位到個位數 ➔ 2.00"
    ],
    "ans": 0,
    "monster": "迷宮石像",
    "color": 2278750,
    "shape": "box"
  },
  {
    "q": "0.99 遇到進位變成 1.00，這個「滿十進一」的觀念與哪種運算完全一樣？",
    "options": [
      "乘法退位",
      "整數的加法進位概念",
      "分數的約分",
      "除法的餘數"
    ],
    "ans": 1,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "小美寫：1÷3 = 0.33。老師說她寫法不精確，她應該怎麼修正符號？",
    "options": [
      "把「=」改成「≈」表示大約等於",
      "把 0.33 改成 3.3",
      "加上單位",
      "畫上底線"
    ],
    "ans": 0,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "將「2/5」和「1/3」比較大小。轉成概數 0.4 和 0.33。這展現了化為小數的什麼好處？",
    "options": [
      "小數比較難算",
      "小數可以統一對齊位值，比通分更容易直觀比較大小",
      "小數寫起來比較長",
      "沒有特別的好處"
    ],
    "ans": 1,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "計算 7.5 ÷ 9。第一步，整數 7 不夠給 9 除，標準程序的下一步是什麼？",
    "options": [
      "直接放棄",
      "在商的個位寫 0，並點上小數點，然後看成 75 繼續除",
      "把 9 和 7 對調",
      "把小數點擦掉"
    ],
    "ans": 1,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "算到小數第二位是 0.83，若要求商到小數第一位，這樣算完了嗎？",
    "options": [
      "算完了，看第二位是 3 屬於四捨，所以概數是 0.8",
      "還沒，要繼續算到第三位",
      "算錯了，應該是 8.3",
      "要倒過來算"
    ],
    "ans": 0,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  },
  {
    "q": "遇到 10÷4，算出來是 2.5。題目要求四捨五入到小數第一位。我們還需要改變答案嗎？",
    "options": [
      "需要變成 3.0",
      "不需要，2.5 剛好除盡，本身就已經精確到第一位了",
      "需要加上波浪號",
      "要改成 2.50"
    ],
    "ans": 1,
    "monster": "薄霧蝙蝠",
    "color": 10265519,
    "shape": "crystal"
  },
  {
    "q": "一袋米 1.3 公斤平分 3 份，算式 1.3÷3 = 0.433...。這個「0.433」代表的現實意義是什麼？",
    "options": [
      "米壞掉了",
      "剩下的米有 0.433 公斤",
      "平分後「每一份米」的重量大約是 0.433 公斤",
      "總共的重量"
    ],
    "ans": 2,
    "monster": "金葉騎兵",
    "color": 16765286,
    "shape": "octa"
  },
  {
    "q": "解決這類小數概數題材的「黃金三步驟」是什麼？",
    "options": [
      "1.列除法 ➔ 2.算到要求位數的「下一位」 ➔ 3.看最後一位數字進行四捨五入",
      "1.看題目 ➔ 2.拿計算機 ➔ 3.抄答案",
      "1.加法 ➔ 2.減法 ➔ 3.乘法",
      "1.畫圖 ➔ 2.著色 ➔ 3.擦掉"
    ],
    "ans": 0,
    "monster": "藤蔓守門者",
    "color": 7984222,
    "shape": "box"
  },
  {
    "q": "要求商到小數第二位，直式除法必須算到小數第幾位？",
    "options": [
      "第一位",
      "第二位",
      "第三位",
      "第四位"
    ],
    "ans": 2,
    "monster": "古樹謎靈",
    "color": 16096779,
    "shape": "sphere"
  },
  {
    "q": "22.39 ÷ 21 = 1.066...，若四捨五入到小數第二位，看第三位的數字是 6，應該怎麼辦？",
    "options": [
      "捨去",
      "進位",
      "不變",
      "重算"
    ],
    "ans": 1,
    "monster": "藍光甲蟲",
    "color": 3718648,
    "shape": "crystal"
  },
  {
    "q": "1.3 ÷ 3 = 0.433...，若四捨五入到小數第二位，看第三位的數字是 3，應該怎麼辦？",
    "options": [
      "捨去",
      "進位",
      "不變",
      "重算"
    ],
    "ans": 0,
    "monster": "月影獵手",
    "color": 10980346,
    "shape": "octa"
  },
  {
    "q": "為什麼 10 ÷ 3 會一直除不盡？",
    "options": [
      "因為 10 太大",
      "因為 3 太小",
      "因為餘數一直重複",
      "因為除數是奇數"
    ],
    "ans": 2,
    "monster": "迷宮石像",
    "color": 2278750,
    "shape": "box"
  },
  {
    "q": "四捨五入法中，遇到哪個數字需要進位？",
    "options": [
      "0, 1, 2, 3, 4",
      "5, 6, 7, 8, 9",
      "只有 9",
      "只有 0"
    ],
    "ans": 1,
    "monster": "霧林史萊姆",
    "color": 5231013,
    "shape": "sphere"
  },
  {
    "q": "四捨五入法中，遇到哪個數字需要捨去？",
    "options": [
      "0, 1, 2, 3, 4",
      "5, 6, 7, 8, 9",
      "只有 9",
      "只有 0"
    ],
    "ans": 0,
    "monster": "赤焰守衛",
    "color": 16739194,
    "shape": "crystal"
  },
  {
    "q": "若商算到小數第三位是 2.458，四捨五入到小數第二位的結果是多少？",
    "options": [
      "2.45",
      "2.46",
      "2.4",
      "2.5"
    ],
    "ans": 1,
    "monster": "紫影術士",
    "color": 11635967,
    "shape": "octa"
  },
  {
    "q": "若商算到小數第三位是 7.124，四捨五入到小數第二位的結果是多少？",
    "options": [
      "7.12",
      "7.13",
      "7.1",
      "7.2"
    ],
    "ans": 0,
    "monster": "水晶妖精",
    "color": 6670327,
    "shape": "box"
  },
  {
    "q": "若商算到小數第二位是 5.86，四捨五入到小數第一位的結果是多少？",
    "options": [
      "5.8",
      "5.9",
      "5.86",
      "6"
    ],
    "ans": 1,
    "monster": "石甲魔像",
    "color": 12104099,
    "shape": "sphere"
  }
];

const screens = {
  title: document.querySelector("#titleScreen"),
  setup: document.querySelector("#setupScreen"),
  result: document.querySelector("#resultScreen"),
  leaderboard: document.querySelector("#leaderboardScreen")
};

const ui = {
  hp: document.querySelector("#hpText"),
  progress: document.querySelector("#progressText"),
  timer: document.querySelector("#timerText"),
  question: document.querySelector("#questionText"),
  monster: document.querySelector("#monsterLabel"),
  options: document.querySelector("#optionGrid"),
  encounter: document.querySelector("#encounterCard"),
  actionDock: document.querySelector("#actionDock"),
  toast: document.querySelector("#toast"),
  playerName: document.querySelector("#playerName"),
  leaderboardContent: document.querySelector("#leaderboardContent"),
  resultTitle: document.querySelector("#resultTitle"),
  resultText: document.querySelector("#resultText"),
  resultEyebrow: document.querySelector("#resultEyebrow"),
  finalScore: document.querySelector("#finalScore"),
  finalTime: document.querySelector("#finalTime"),
  soundButton: document.querySelector("#soundButton")
};

const avatarConfig = {
  emerald: { color: 0x4fd1a5, emissive: 0x1c7f67, shape: "tetra" },
  azure: { color: 0x65c7f7, emissive: 0x1f6feb, shape: "octa" },
  ember: { color: 0xff6b7a, emissive: 0xb83147, shape: "ico" }
};

let questionBank = [...BASE_QUESTIONS];
let pool = [];
let state = "title";
let playerName = "勇者";
let avatar = "emerald";
let hp = 3;
let score = 0;
let startTime = 0;
let elapsed = 0;
let soundOn = true;
let timerId = 0;

let scene;
let camera;
let renderer;
let hero;
let monster;
let heroLight;
let floorMaterial;
let clock = new THREE.Clock();
let cameraTarget = new THREE.Vector3(0, 4.2, 12);
let particles = [];
let runes = [];
let mazePieces = [];
let moveTarget = null;
let facing = 0;
let destinationFacing = 0;

function initScene() {
  const host = document.querySelector("#sceneHost");
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111a2f);
  scene.fog = new THREE.FogExp2(0x111a2f, 0.032);

  camera = new THREE.PerspectiveCamera(58, window.innerWidth / window.innerHeight, 0.1, 220);
  camera.position.set(0, 4.2, 12);

  renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  host.appendChild(renderer.domElement);

  scene.add(new THREE.HemisphereLight(0xbfdcff, 0x1a2b22, 1.45));
  const sun = new THREE.DirectionalLight(0xfff1c5, 1.55);
  sun.position.set(8, 18, 10);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  scene.add(sun);

  heroLight = new THREE.PointLight(0x4fd1a5, 2.2, 16);
  scene.add(heroLight);

  floorMaterial = new THREE.MeshStandardMaterial({ color: 0x253451, roughness: 0.88, metalness: 0.04 });
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(90, 260, 18, 52), floorMaterial);
  floor.rotation.x = -Math.PI / 2;
  floor.position.z = -90;
  floor.receiveShadow = true;
  scene.add(floor);

  addPathRunes();
  addMazeArchitecture();
  addEnvironment();
  createHero();

  window.addEventListener("resize", resize);
  animate();
}

function addEnvironment() {
  const trunkMat = new THREE.MeshStandardMaterial({ color: 0x3a2518, roughness: 0.95 });
  const leafMats = [
    new THREE.MeshStandardMaterial({ color: 0x1f6d5a, roughness: 0.8 }),
    new THREE.MeshStandardMaterial({ color: 0x315d7a, roughness: 0.78 }),
    new THREE.MeshStandardMaterial({ color: 0x5c4f7a, roughness: 0.82 })
  ];
  const stoneMat = new THREE.MeshStandardMaterial({ color: 0x697083, roughness: 0.9 });

  for (let i = 0; i < 170; i += 1) {
    const side = Math.random() > 0.5 ? 1 : -1;
    const x = side * (10 + Math.random() * 36);
    const z = 16 - Math.random() * 180;
    if (Math.random() > 0.28) {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.55, 5 + Math.random() * 3, 6), trunkMat);
      trunk.position.set(x, 2.5, z);
      trunk.castShadow = true;
      const leaves = new THREE.Mesh(new THREE.ConeGeometry(2.2 + Math.random() * 1.4, 5, 7), leafMats[i % leafMats.length]);
      leaves.position.y = 4.2;
      leaves.castShadow = true;
      trunk.add(leaves);
      scene.add(trunk);
    } else {
      const stone = new THREE.Mesh(new THREE.DodecahedronGeometry(0.7 + Math.random() * 1.1, 0), stoneMat);
      stone.position.set(x, 0.7, z);
      stone.rotation.set(Math.random(), Math.random(), Math.random());
      stone.castShadow = true;
      scene.add(stone);
    }
  }

  const stars = new THREE.BufferGeometry();
  const positions = new Float32Array(420 * 3);
  for (let i = 0; i < positions.length; i += 3) {
    positions[i] = (Math.random() - 0.5) * 96;
    positions[i + 1] = 2 + Math.random() * 18;
    positions[i + 2] = 18 - Math.random() * 210;
  }
  stars.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  scene.add(new THREE.Points(stars, new THREE.PointsMaterial({ color: 0xffe6a0, size: 0.08, transparent: true, opacity: 0.86 })));
}

function addMazeArchitecture() {
  const wallMat = new THREE.MeshStandardMaterial({ color: 0x133f32, roughness: 0.92, metalness: 0.02 });
  const vineMat = new THREE.MeshStandardMaterial({ color: 0x54a45f, roughness: 0.86 });
  const amberMat = new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.78 });
  const wallGeo = new THREE.BoxGeometry(2.4, 4.8, 1.4);
  const vineGeo = new THREE.TorusGeometry(0.62, 0.045, 8, 28);
  const flameGeo = new THREE.SphereGeometry(0.16, 10, 8);

  for (let i = 0; i < 34; i += 1) {
    const z = 8 - i * 6;
    const bend = Math.sin(i * 0.72) * 4.2;
    [-1, 1].forEach((side) => {
      const block = new THREE.Mesh(wallGeo, wallMat);
      block.position.set(bend + side * (7.8 + (i % 3) * 0.45), 2.25, z);
      block.rotation.y = side * 0.16 + Math.sin(i) * 0.08;
      block.castShadow = true;
      block.receiveShadow = true;
      scene.add(block);
      mazePieces.push(block);

      if (i % 2 === 0) {
        const vine = new THREE.Mesh(vineGeo, vineMat);
        vine.position.set(block.position.x - side * 0.08, 4.25, z + 0.15);
        vine.rotation.set(Math.PI / 2, 0, side * 0.75);
        scene.add(vine);
        mazePieces.push(vine);
      }
    });

    if (i % 5 === 2) {
      const side = i % 10 === 2 ? -1 : 1;
      const branch = new THREE.Mesh(new THREE.BoxGeometry(7.4, 0.08, 1.15), amberMat);
      branch.position.set(bend + side * 5.7, 0.08, z - 1.4);
      branch.rotation.y = side * 0.72;
      scene.add(branch);
      mazePieces.push(branch);
    }

    if (i % 4 === 0) {
      const light = new THREE.Mesh(flameGeo, amberMat);
      light.position.set(bend, 0.25, z);
      scene.add(light);
      mazePieces.push(light);
    }
  }
}

function addPathRunes() {
  const ringGeo = new THREE.TorusGeometry(1.2, 0.035, 8, 48);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xffd166, transparent: true, opacity: 0.64 });
  for (let i = 0; i < 24; i += 1) {
    const rune = new THREE.Mesh(ringGeo, ringMat);
    rune.rotation.x = Math.PI / 2;
    rune.position.set((i % 2 === 0 ? -1 : 1) * 2.6, 0.045, 4 - i * 8);
    scene.add(rune);
    runes.push(rune);
  }
}

function createHero() {
  if (hero) scene.remove(hero);
  const cfg = avatarConfig[avatar];
  const geo = cfg.shape === "octa"
    ? new THREE.OctahedronGeometry(0.9, 0)
    : cfg.shape === "ico"
      ? new THREE.IcosahedronGeometry(0.92, 0)
      : new THREE.TetrahedronGeometry(1.05, 1);
  const mat = new THREE.MeshStandardMaterial({
    color: cfg.color,
    emissive: cfg.emissive,
    emissiveIntensity: 0.46,
    roughness: 0.25,
    metalness: 0.58
  });
  hero = new THREE.Mesh(geo, mat);
  hero.position.set(0, 1.35, 6.8);
  hero.castShadow = true;
  scene.add(hero);
  heroLight.color.setHex(cfg.color);
}

function resize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
}

function animate() {
  requestAnimationFrame(animate);
  const dt = clock.getDelta();
  const t = clock.elapsedTime;
  facing += (destinationFacing - facing) * 0.055;
  const forward = new THREE.Vector3(Math.sin(facing), 0, -Math.cos(facing));

  runes.forEach((rune, index) => {
    rune.rotation.z = t * 0.35 + index;
    rune.material.opacity = 0.42 + Math.sin(t * 2 + index) * 0.16;
  });

  if (moveTarget) {
    camera.position.lerp(moveTarget.camera, 0.055);
    hero.position.lerp(moveTarget.hero, 0.07);
    hero.position.y = 1.35 + Math.abs(Math.sin(t * 10)) * 0.25;
    if (camera.position.distanceTo(moveTarget.camera) < 0.18) {
      moveTarget = null;
      beginEncounter();
    }
  } else {
    hero.rotation.y += dt * 0.9;
    hero.rotation.x = Math.sin(t * 1.5) * 0.18;
    hero.position.y = 1.35 + Math.sin(t * 2.2) * 0.08;
  }

  if (monster) {
    monster.rotation.y -= dt * 0.65;
    monster.position.y = monster.userData.baseY + Math.sin(t * 2.1) * 0.18;
  }

  heroLight.position.set(hero.position.x, hero.position.y + 0.6, hero.position.z + 0.6);
  mazePieces.forEach((piece, index) => {
    if (piece.material?.opacity) piece.material.opacity = 0.56 + Math.sin(t * 1.6 + index) * 0.16;
  });
  updateParticles(dt);
  const lookPoint = hero.position.clone().addScaledVector(forward, 9);
  camera.lookAt(lookPoint.x, 1.55, lookPoint.z);
  renderer.render(scene, camera);
}

function showScreen(name) {
  Object.entries(screens).forEach(([key, screen]) => screen.classList.toggle("active", key === name));
}

function hideScreens() {
  Object.values(screens).forEach((screen) => screen.classList.remove("active"));
}

function showToast(message, duration = 1600) {
  ui.toast.textContent = message;
  ui.toast.classList.add("active");
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => ui.toast.classList.remove("active"), duration);
}

function shuffle(items) {
  const array = [...items];
  for (let i = array.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function updateHud() {
  ui.hp.textContent = hp;
  ui.progress.textContent = `${score} / ${TOTAL_STAGES}`;
  ui.timer.textContent = formatTime(elapsed);
  const progressRatio = score / TOTAL_STAGES;
  scene.fog.density = 0.032 - progressRatio * 0.018;
  scene.background.lerpColors(new THREE.Color(0x111a2f), new THREE.Color(0x86d8ff), progressRatio);
  floorMaterial.color.lerpColors(new THREE.Color(0x253451), new THREE.Color(0x4f9c72), progressRatio);
}

function loadQuestionsThenStart() {
  const startButton = document.querySelector("#startButton");
  startButton.disabled = true;
  startButton.textContent = "讀取題庫中...";

  if (window.google?.script?.run) {
    window.google.script.run
      .withSuccessHandler((rows) => {
        if (Array.isArray(rows) && rows.length) questionBank = normalizeQuestions(rows);
        startButton.disabled = false;
        startButton.textContent = "確認出發";
        startGame();
      })
      .withFailureHandler(() => {
        startButton.disabled = false;
        startButton.textContent = "確認出發";
        startGame();
      })
      .getQuestions();
  } else if (GAS_WEB_APP_URL) {
    callGasApi("getQuestions")
      .then((rows) => {
        if (Array.isArray(rows) && rows.length) questionBank = normalizeQuestions(rows);
      })
      .catch(() => {
        showToast("目前無法連線題庫，先使用內建練習題。", 1800);
      })
      .finally(() => {
        startButton.disabled = false;
        startButton.textContent = "確認出發";
        startGame();
      });
  } else {
    setTimeout(() => {
      startButton.disabled = false;
      startButton.textContent = "確認出發";
      startGame();
    }, 280);
  }
}

function normalizeQuestions(rows) {
  return rows
    .filter((row) => row && row.q && Array.isArray(row.options) && row.options.length >= 4)
    .map((row, index) => ({
      q: String(row.q),
      options: row.options.slice(0, 4).map(String),
      ans: Number.isFinite(Number(row.ans)) ? Number(row.ans) : 0,
      monster: row.monster || `迷宮守衛 ${index + 1}`,
      color: normalizeColor(row.color, BASE_QUESTIONS[index % BASE_QUESTIONS.length].color),
      shape: row.shape || BASE_QUESTIONS[index % BASE_QUESTIONS.length].shape
    }));
}

function normalizeColor(value, fallback) {
  if (typeof value === "number") return value;
  if (typeof value !== "string") return fallback;
  const cleaned = value.trim().replace("#", "").replace(/^0x/i, "");
  const parsed = Number.parseInt(cleaned, 16);
  return Number.isFinite(parsed) ? parsed : fallback;
}

async function callGasApi(action, payload = {}) {
  const url = new URL(GAS_WEB_APP_URL);
  url.searchParams.set("action", action);
  Object.entries(payload).forEach(([key, value]) => url.searchParams.set(key, value));
  const response = await fetch(url.toString(), { method: "GET" });
  if (!response.ok) throw new Error(`GAS API failed: ${response.status}`);
  const data = await response.json();
  return data.records || data.questions || data;
}

function startGame() {
  hideScreens();
  state = "explore";
  hp = 3;
  score = 0;
  elapsed = 0;
  startTime = Date.now();
  pool = shuffle(questionBank);
  camera.position.set(0, 4.2, 12);
  hero.position.set(0, 1.35, 6.8);
  facing = 0;
  destinationFacing = 0;
  createHero();
  removeMonster();
  ui.encounter.classList.remove("active");
  ui.actionDock.hidden = false;
  startTimer();
  updateHud();
  showToast(`${playerName}，選一條路開始探索。`);
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (state === "explore" || state === "combat" || state === "moving") {
      elapsed = Math.floor((Date.now() - startTime) / 1000);
      updateHud();
    }
  }, 500);
}

function walk(direction) {
  if (state !== "explore") return;
  state = "moving";
  ui.actionDock.hidden = true;
  ui.encounter.classList.remove("active");
  const turn = direction === "left" ? -0.46 : 0.46;
  destinationFacing = Math.max(-1.05, Math.min(1.05, destinationFacing + turn));
  const forward = new THREE.Vector3(Math.sin(destinationFacing), 0, -Math.cos(destinationFacing));
  const side = new THREE.Vector3(Math.cos(destinationFacing), 0, Math.sin(destinationFacing));
  const sway = direction === "left" ? -1.6 : 1.6;
  const nextHero = hero.position.clone().addScaledVector(forward, 11.8).addScaledVector(side, sway);
  cameraTarget = nextHero.clone().addScaledVector(forward, -7.2);
  cameraTarget.y = 4.2;
  moveTarget = {
    camera: cameraTarget,
    hero: new THREE.Vector3(nextHero.x, 1.35, nextHero.z)
  };
  showToast(direction === "left" ? "你鑽進左側藤蔓小徑。" : "你轉向右側石牆岔路。", 900);
}

function beginEncounter() {
  state = "combat";
  const data = pool.pop() || shuffle(questionBank).pop();
  if (pool.length < 2) pool = shuffle(questionBank);
  createMonster(data);
  const forward = new THREE.Vector3(Math.sin(facing), 0, -Math.cos(facing));

  ui.monster.textContent = `Lv.${score + 1} ${data.monster}`;
  ui.monster.style.color = `#${data.color.toString(16).padStart(6, "0")}`;
  ui.question.textContent = data.q;
  ui.options.innerHTML = "";

  const options = shuffle(data.options.map((text, index) => ({ text, correct: index === data.ans })));
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong>${escapeHtml(option.text)}</strong>`;
    button.addEventListener("click", () => answer(button, option.correct, options));
    ui.options.appendChild(button);
  });
  ui.encounter.classList.add("active");
}

function createMonster(data) {
  removeMonster();
  let geo;
  if (data.shape === "box") geo = new THREE.BoxGeometry(2.1, 2.1, 2.1);
  else if (data.shape === "octa") geo = new THREE.OctahedronGeometry(1.55, 0);
  else if (data.shape === "crystal") geo = new THREE.ConeGeometry(1.25, 2.8, 5);
  else geo = new THREE.SphereGeometry(1.55, 28, 20);

  const mat = new THREE.MeshStandardMaterial({
    color: data.color,
    emissive: data.color,
    emissiveIntensity: 0.18,
    roughness: 0.36,
    metalness: 0.18
  });
  monster = new THREE.Mesh(geo, mat);
  const monsterPos = hero.position.clone().addScaledVector(new THREE.Vector3(Math.sin(facing), 0, -Math.cos(facing)), 8);
  monster.position.set(monsterPos.x, 1.7, monsterPos.z);
  monster.userData.baseY = data.shape === "box" ? 1.25 : 1.7;
  monster.castShadow = true;
  scene.add(monster);
}

function removeMonster() {
  if (!monster) return;
  monster.geometry.dispose();
  monster.material.dispose();
  scene.remove(monster);
  monster = null;
}

function answer(button, correct) {
  if (state !== "combat") return;
  state = "resolving";
  [...ui.options.children].forEach((child) => {
    child.disabled = true;
  });

  if (correct) {
    button.classList.add("correct");
    score += 1;
    burst(monster.position, 0xfff0ad, 34);
    beep(660, 0.08);
    setTimeout(() => {
      removeMonster();
      updateHud();
      if (score >= TOTAL_STAGES) finishGame(true);
      else if (score % 4 === 0) {
        showToast(`突破 ${score} 道封印，迷霧正在散開。`, 1900);
        nextExplore(1000);
      } else {
        nextExplore(650);
      }
    }, 520);
  } else {
    button.classList.add("wrong");
    hp -= 1;
    burst(hero.position, 0xff6b7a, 24);
    beep(180, 0.12);
    updateHud();
    showToast(hp > 0 ? "受到一點傷害，換個策略再前進。" : "HP 歸零，這次探索先告一段落。");
    setTimeout(() => {
      removeMonster();
      if (hp <= 0) finishGame(false);
      else nextExplore(400);
    }, 950);
  }
}

function nextExplore(delay) {
  setTimeout(() => {
    state = "explore";
    ui.encounter.classList.remove("active");
    ui.actionDock.hidden = false;
  }, delay);
}

function finishGame(won) {
  clearInterval(timerId);
  state = won ? "win" : "gameover";
  elapsed = Math.floor((Date.now() - startTime) / 1000);
  ui.encounter.classList.remove("active");
  ui.actionDock.hidden = true;
  ui.resultEyebrow.textContent = won ? "挑戰完成" : "探索失敗";
  ui.resultTitle.textContent = won ? "破曉降臨" : "暫時撤退";
  ui.resultText.textContent = won
    ? `${playerName} 完成 16 道考驗，讓迷宮重新亮起來。`
    : `${playerName} 已解開 ${score} 道封印。休息一下，下一次會更穩。`;
  ui.finalScore.textContent = `${score} / ${TOTAL_STAGES}`;
  ui.finalTime.textContent = formatTime(elapsed);
  saveRecord();
  showScreen("result");
}

function saveRecord() {
  const timeString = `${Math.floor(elapsed / 60)}分${elapsed % 60}秒`;
  const record = { name: playerName, score, timeStr: timeString, totalSecs: elapsed, date: new Date().toISOString() };
  const local = JSON.parse(localStorage.getItem("mathwarriorRecords") || "[]");
  local.push(record);
  localStorage.setItem("mathwarriorRecords", JSON.stringify(local.slice(-80)));

  if (window.google?.script?.run) {
    window.google.script.run.saveRecord(playerName, score, timeString);
  } else if (GAS_WEB_APP_URL) {
    callGasApi("saveRecord", { playerName, score, timeString }).catch(() => {});
  }
}

function showLeaderboard() {
  showScreen("leaderboard");
  ui.leaderboardContent.textContent = "讀取中...";
  if (window.google?.script?.run) {
    window.google.script.run
      .withSuccessHandler(renderLeaderboard)
      .withFailureHandler(() => renderLeaderboard(getLocalLeaderboard()))
      .getLeaderboard();
  } else if (GAS_WEB_APP_URL) {
    callGasApi("getLeaderboard")
      .then(renderLeaderboard)
      .catch(() => renderLeaderboard(getLocalLeaderboard()));
  } else {
    renderLeaderboard(getLocalLeaderboard());
  }
}

function getLocalLeaderboard() {
  const local = JSON.parse(localStorage.getItem("mathwarriorRecords") || "[]");
  const demo = [
    { name: "晨光勇者", score: 16, timeStr: "02分18秒", totalSecs: 138 },
    { name: "分數騎士", score: 15, timeStr: "03分05秒", totalSecs: 185 },
    { name: "小數法師", score: 12, timeStr: "02分52秒", totalSecs: 172 }
  ];
  return [...local, ...demo]
    .sort((a, b) => (b.score === a.score ? a.totalSecs - b.totalSecs : b.score - a.score))
    .slice(0, 10);
}

function renderLeaderboard(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    ui.leaderboardContent.textContent = "目前還沒有紀錄。";
    return;
  }
  const safeRows = rows.slice(0, 10);
  ui.leaderboardContent.innerHTML = `
    <table class="leaderboard-table">
      <thead><tr><th>排名</th><th>勇者</th><th>題數</th><th>時間</th></tr></thead>
      <tbody>
        ${safeRows.map((row, index) => `
          <tr>
            <td>${index + 1}</td>
            <td>${escapeHtml(row.name || "勇者")}</td>
            <td>${Number(row.score) || 0}</td>
            <td>${escapeHtml(row.timeStr || "--")}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function burst(position, color, count) {
  const mat = new THREE.MeshBasicMaterial({ color });
  const geo = new THREE.TetrahedronGeometry(0.16, 0);
  for (let i = 0; i < count; i += 1) {
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.copy(position);
    mesh.userData.velocity = new THREE.Vector3((Math.random() - 0.5) * 7, Math.random() * 5, (Math.random() - 0.5) * 7);
    mesh.userData.life = 1;
    scene.add(mesh);
    particles.push(mesh);
  }
}

function updateParticles(dt) {
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.position.addScaledVector(p.userData.velocity, dt);
    p.userData.velocity.y -= dt * 5.8;
    p.userData.life -= dt * 1.8;
    p.scale.setScalar(Math.max(0, p.userData.life));
    if (p.userData.life <= 0) {
      scene.remove(p);
      particles.splice(i, 1);
    }
  }
}

let audioContext;
function beep(freq, duration) {
  if (!soundOn) return;
  audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.frequency.value = freq;
  osc.type = "triangle";
  gain.gain.setValueAtTime(0.001, audioContext.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.08, audioContext.currentTime + 0.01);
  gain.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration);
  osc.connect(gain).connect(audioContext.destination);
  osc.start();
  osc.stop(audioContext.currentTime + duration + 0.02);
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  })[char]);
}

document.querySelector("#enterButton").addEventListener("click", () => showScreen("setup"));
document.querySelector("#leaderboardButton").addEventListener("click", showLeaderboard);
document.querySelector("#resultLeaderboardButton").addEventListener("click", showLeaderboard);
document.querySelector("#closeLeaderboardButton").addEventListener("click", () => {
  if (state === "title") showScreen("title");
  else hideScreens();
});
document.querySelector("#againButton").addEventListener("click", () => showScreen("setup"));
document.querySelector("#leftButton").addEventListener("click", () => walk("left"));
document.querySelector("#rightButton").addEventListener("click", () => walk("right"));
ui.soundButton.addEventListener("click", () => {
  soundOn = !soundOn;
  ui.soundButton.textContent = soundOn ? "音" : "靜";
});

document.querySelector("#setupForm").addEventListener("submit", (event) => {
  event.preventDefault();
  playerName = ui.playerName.value.trim() || "勇者";
  avatar = new FormData(event.currentTarget).get("avatar") || "emerald";
  loadQuestionsThenStart();
});

document.querySelectorAll(".avatar-option").forEach((label) => {
  label.addEventListener("click", () => {
    document.querySelectorAll(".avatar-option").forEach((item) => item.classList.remove("selected"));
    label.classList.add("selected");
  });
});

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") walk("left");
  if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") walk("right");
  const optionIndex = Number(event.key) - 1;
  if (state === "combat" && optionIndex >= 0 && optionIndex < 4) {
    ui.options.children[optionIndex]?.click();
  }
});

initScene();
updateHud();

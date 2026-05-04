const TOTAL_STAGES = 16;
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
      "5/8",
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
  soundButton: document.querySelector("#soundButton"),
  feedback: document.querySelector("#answerFeedback")
};

const avatarConfig = {
  emerald: { main: "#2fbf7f", dark: "#167455", cape: "#0f5a47", accent: "#ffe08a" },
  azure: { main: "#4ba3f2", dark: "#1e5fae", cape: "#183f7a", accent: "#d8f3ff" },
  ember: { main: "#ef6b5a", dark: "#9e2f3c", cape: "#6d1f33", accent: "#ffd166" }
};

let canvas;
let ctx;
let dpr = 1;
let width = 0;
let height = 0;
let lastTime = 0;
let gameMode = "title";
let playerName = "勇者";
let avatar = "emerald";
let hp = 3;
let score = 0;
let elapsed = 0;
let startTime = 0;
let timerId = 0;
let questionBank = [...BASE_QUESTIONS];
let pool = [];
let currentQuestion = null;
let pathSeed = 7;
let moveProgress = 0;
let moveDirection = "right";
let attackProgress = 0;
let resolveType = "";
let shakeTime = 0;
let soundOn = true;
let particles = [];

function init2D() {
  const host = document.querySelector("#sceneHost");
  canvas = document.createElement("canvas");
  canvas.id = "gameCanvas";
  canvas.setAttribute("aria-label", "數學勇者 2D 偽 3D 遊戲畫面");
  host.replaceChildren(canvas);
  ctx = canvas.getContext("2d", { alpha: false });
  resize();
  window.addEventListener("resize", resize);
  requestAnimationFrame(loop);
}

function resize() {
  dpr = Math.min(window.devicePixelRatio || 1, 1.5);
  width = Math.max(320, window.innerWidth);
  height = Math.max(480, window.innerHeight);
  canvas.width = Math.floor(width * dpr);
  canvas.height = Math.floor(height * dpr);
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}

function loop(time) {
  const dt = Math.min(0.033, (time - lastTime) / 1000 || 0.016);
  lastTime = time;
  update(dt);
  render();
  requestAnimationFrame(loop);
}

function update(dt) {
  if (gameMode === "moving") {
    moveProgress += dt * 1.8;
    if (moveProgress >= 1) {
      moveProgress = 1;
      beginBattle();
    }
  }
  if (gameMode === "resolving") attackProgress = Math.min(1, attackProgress + dt * 1.7);
  if (shakeTime > 0) shakeTime = Math.max(0, shakeTime - dt);
  for (let i = particles.length - 1; i >= 0; i -= 1) {
    const p = particles[i];
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vy += 220 * dt;
    p.life -= dt;
    if (p.life <= 0) particles.splice(i, 1);
  }
}

function render() {
  drawExploreScene(gameMode === "moving" ? moveProgress : 0);
  if (gameMode === "battle" || gameMode === "resolving") drawBattleScene();
  drawParticles();
}

function drawExploreScene(progress) {
  const sky = ctx.createLinearGradient(0, 0, 0, height);
  sky.addColorStop(0, "#95d8f4");
  sky.addColorStop(0.48, "#c6f0c4");
  sky.addColorStop(1, "#2f7a49");
  ctx.fillStyle = sky;
  ctx.fillRect(0, 0, width, height);

  drawSunAndHills();
  drawPerspectivePath(progress);
  drawForestLayers(progress);
  if (gameMode !== "battle" && gameMode !== "resolving") drawExploreHero();
}

function drawSunAndHills() {
  ctx.save();
  ctx.globalAlpha = 0.85;
  ctx.fillStyle = "#ffe6a3";
  ctx.beginPath();
  ctx.arc(width * 0.82, height * 0.16, Math.min(width, height) * 0.055, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;
  const hillColors = ["#4f9b68", "#3f8b5b", "#2f7350"];
  for (let h = 0; h < 3; h += 1) {
    ctx.fillStyle = hillColors[h];
    ctx.beginPath();
    ctx.moveTo(0, height * (0.42 + h * 0.055));
    for (let x = 0; x <= width; x += width / 6) {
      ctx.quadraticCurveTo(x + width / 12, height * (0.31 + h * 0.06 + Math.sin(x * 0.02 + h) * 0.025), x + width / 6, height * (0.42 + h * 0.055));
    }
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    ctx.fill();
  }
  ctx.restore();
}

function drawPerspectivePath(progress) {
  const horizon = height * 0.43;
  const bottom = height + 16;
  const turn = moveDirection === "left" ? -1 : 1;
  const eased = progress * progress * (3 - 2 * progress);
  const centerShift = turn * eased * width * 0.1;
  const cx = width * 0.5 + centerShift;
  const forkY = height * 0.5;

  drawForkBranch(cx, horizon, forkY, -1, progress);
  drawForkBranch(cx, horizon, forkY, 1, progress);

  const path = ctx.createLinearGradient(0, horizon, 0, bottom);
  path.addColorStop(0, "#c79b5e");
  path.addColorStop(1, "#815334");
  ctx.fillStyle = path;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.055, horizon);
  ctx.lineTo(cx + width * 0.055, horizon);
  ctx.lineTo(width * 0.72, bottom);
  ctx.lineTo(width * 0.28, bottom);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = "rgba(255,255,255,0.24)";
  ctx.lineWidth = 2;
  for (let i = 0; i < 10; i += 1) {
    const t = ((i / 10 + progress * 0.7) % 1);
    const y = lerp(horizon, bottom, t * t);
    const half = lerp(width * 0.045, width * 0.23, t);
    ctx.globalAlpha = 0.15 + t * 0.25;
    ctx.beginPath();
    ctx.moveTo(cx - half, y);
    ctx.lineTo(cx + half, y);
    ctx.stroke();
  }
  ctx.globalAlpha = 1;

  ctx.strokeStyle = "rgba(79, 61, 33, 0.42)";
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.moveTo(cx - width * 0.055, horizon);
  ctx.lineTo(width * 0.28, bottom);
  ctx.moveTo(cx + width * 0.055, horizon);
  ctx.lineTo(width * 0.72, bottom);
  ctx.stroke();
}

function drawForkBranch(cx, horizon, forkY, side, progress) {
  const turn = moveDirection === "left" ? -1 : 1;
  const chosen = gameMode === "moving" && side === turn;
  const fade = gameMode === "moving" && side !== turn ? 0.32 : 1;
  const branchReach = width * 0.16;
  const branchWideNear = width * 0.135;
  const branchWideFar = width * 0.04;
  const pull = chosen ? progress * width * 0.055 * side : 0;
  const nearX = cx + side * branchReach + pull;
  const farLeft = cx + side * width * 0.02;
  const farRight = cx + side * width * 0.075;

  ctx.save();
  ctx.globalAlpha = fade;
  const branch = ctx.createLinearGradient(0, horizon, 0, forkY + height * 0.09);
  branch.addColorStop(0, "#d4ad74");
  branch.addColorStop(1, "#9c6b40");
  ctx.fillStyle = branch;
  ctx.beginPath();
  ctx.moveTo(farLeft, horizon + 3);
  ctx.lineTo(farRight, horizon + 2);
  ctx.lineTo(nearX + side * branchWideNear, forkY + height * 0.12);
  ctx.lineTo(nearX - side * branchWideFar, forkY + height * 0.07);
  ctx.closePath();
  ctx.fill();

  ctx.strokeStyle = chosen ? "rgba(255, 224, 142, 0.7)" : "rgba(74, 55, 31, 0.38)";
  ctx.lineWidth = chosen ? 5 : 3;
  ctx.beginPath();
  ctx.moveTo(farLeft, horizon + 4);
  ctx.lineTo(nearX - side * branchWideFar, forkY + height * 0.07);
  ctx.moveTo(farRight, horizon + 4);
  ctx.lineTo(nearX + side * branchWideNear, forkY + height * 0.12);
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 235, 172, 0.82)";
  ctx.beginPath();
  ctx.ellipse(nearX + side * branchWideNear * 0.72, forkY + height * 0.09, 8, 4, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawForestLayers(progress) {
  const count = 9;
  for (let i = count; i >= 0; i -= 1) {
    const t = ((i / count + progress * 0.85) % 1);
    const scale = 0.28 + t * 1.15;
    const y = lerp(height * 0.43, height * 0.94, t * t);
    const gap = lerp(width * 0.09, width * 0.34, t);
    const jitter = seededWave(pathSeed + i) * width * 0.025;
    drawTree(width * 0.5 - gap + jitter, y, scale, i);
    drawTree(width * 0.5 + gap + jitter, y, scale, i + 4);
    if (i % 2 === 0) {
      drawBush(width * 0.5 - gap * 0.72, y + scale * 18, scale * 0.7, i);
      drawBush(width * 0.5 + gap * 0.72, y + scale * 18, scale * 0.7, i + 2);
    }
    if (i % 3 === 1) drawDecoration(width * 0.5 + (i % 2 ? -gap * 0.52 : gap * 0.52), y + scale * 25, scale, i);
  }
}

function drawTree(x, y, s, seed) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.fillStyle = "#6f482d";
  roundRect(-6, -48, 12, 50, 5, true);
  const colors = ["#23784f", "#2f9b58", "#3c8d62"];
  drawLeafBlob(0, -58, 32, colors[seed % colors.length]);
  drawLeafBlob(-18, -45, 24, colors[(seed + 1) % colors.length]);
  drawLeafBlob(18, -44, 25, colors[(seed + 2) % colors.length]);
  ctx.restore();
}

function drawLeafBlob(x, y, r, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x, y, r * 0.9, r * 0.68, 0, 0, Math.PI * 2);
  ctx.fill();
}

function drawBush(x, y, s, seed) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.fillStyle = seed % 2 ? "#63ad55" : "#3c9a5d";
  for (let i = -1; i <= 1; i += 1) {
    ctx.beginPath();
    ctx.ellipse(i * 15, 0, 18, 13, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawDecoration(x, y, s, seed) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  if (seed % 2 === 0) {
    ctx.fillStyle = "#8a9388";
    ctx.beginPath();
    ctx.ellipse(0, 0, 14, 9, -0.2, 0, Math.PI * 2);
    ctx.fill();
  } else {
    ctx.fillStyle = "#f7e6ca";
    roundRect(-3, -12, 6, 14, 3, true);
    ctx.fillStyle = seed % 4 === 1 ? "#ff7aa2" : "#ffc857";
    ctx.beginPath();
    ctx.ellipse(0, -14, 11, 6, 0, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawExploreHero() {
  const bob = Math.sin(lastTime * 0.006) * 4;
  drawHero(width * 0.5, height * 0.78 + bob, 1.05, avatarConfig[avatar], false);
}

function drawBattleScene() {
  ctx.save();
  const shake = shakeTime > 0 ? Math.sin(lastTime * 0.08) * 6 : 0;
  ctx.translate(shake, 0);
  const overlay = ctx.createLinearGradient(0, height * 0.24, 0, height);
  overlay.addColorStop(0, "rgba(31, 79, 65, 0.12)");
  overlay.addColorStop(1, "rgba(20, 28, 44, 0.36)");
  ctx.fillStyle = overlay;
  ctx.fillRect(0, height * 0.25, width, height * 0.62);

  const heroX = width * 0.29 + (resolveType === "correct" ? attackProgress * width * 0.1 : 0);
  const heroY = height * 0.64 + Math.sin(lastTime * 0.008) * 2;
  const monsterX = width * 0.73 + (resolveType === "wrong" ? -attackProgress * width * 0.1 : 0);
  const monsterY = height * 0.43 + Math.sin(lastTime * 0.006) * 5;

  drawShadow(heroX, heroY + 68, 74, 18, "rgba(0,0,0,0.23)");
  drawShadow(monsterX, monsterY + 75, 90, 20, "rgba(0,0,0,0.25)");
  drawHero(heroX, heroY, 1.25, avatarConfig[avatar], true);
  drawMonster(monsterX, monsterY, 1.05, currentQuestion || BASE_QUESTIONS[0], resolveType === "correct" && attackProgress > 0.25);
  if (gameMode === "resolving") drawImpact(resolveType, heroX, heroY, monsterX, monsterY);
  ctx.restore();
}

function drawHero(x, y, s, cfg, battle) {
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s, s);
  ctx.fillStyle = cfg.cape;
  ctx.beginPath();
  ctx.moveTo(-26, 5);
  ctx.lineTo(25, 6);
  ctx.lineTo(36, 70);
  ctx.lineTo(-34, 72);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = cfg.main;
  roundRect(-20, -6, 40, 56, 12, true);
  ctx.fillStyle = "#ffd7a8";
  ctx.beginPath();
  ctx.arc(0, -28, 18, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#6b4226";
  ctx.beginPath();
  ctx.ellipse(0, -38, 20, 10, 0, Math.PI, 0);
  ctx.fill();
  ctx.fillStyle = "#111827";
  ctx.fillRect(-7, -29, 3, 3);
  ctx.fillRect(6, -29, 3, 3);
  ctx.strokeStyle = cfg.accent;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, -22, 8, 0.15, Math.PI - 0.15);
  ctx.stroke();
  ctx.fillStyle = "#d9e6ee";
  ctx.beginPath();
  ctx.ellipse(-27, 15, 13, 20, -0.35, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#8ca3af";
  ctx.stroke();
  if (battle) {
    ctx.strokeStyle = "#eef6ff";
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(24, 4);
    ctx.lineTo(48, -35);
    ctx.stroke();
    ctx.strokeStyle = "#6b4226";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(19, 11);
    ctx.lineTo(30, -3);
    ctx.stroke();
  }
  ctx.restore();
}

function drawMonster(x, y, s, data, hit) {
  const color = numberToHex(data.color || 0x4fd1a5);
  ctx.save();
  ctx.translate(x, y);
  ctx.scale(s * (hit ? 1.08 : 1), s * (hit ? 0.92 : 1));
  ctx.globalAlpha = hit && Math.floor(lastTime / 70) % 2 === 0 ? 0.55 : 1;
  if (data.shape === "box") drawStoneMonster(color);
  else if (data.shape === "octa") drawFlyingMonster(color);
  else if (data.shape === "crystal") drawCrystalMonster(color);
  else drawSlimeMonster(color);
  ctx.restore();
}

function drawSlimeMonster(color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 20, 54, 38, 0, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.ellipse(0, -14, 40, 36, 0, 0, Math.PI * 2);
  ctx.fill();
  drawMonsterFace();
}

function drawStoneMonster(color) {
  ctx.fillStyle = "#8a9388";
  roundRect(-42, -20, 84, 75, 10, true);
  ctx.fillStyle = color;
  roundRect(-32, -64, 64, 42, 8, true);
  ctx.fillStyle = "#747d73";
  roundRect(-65, -8, 25, 55, 8, true);
  roundRect(40, -8, 25, 55, 8, true);
  drawMonsterFace();
}

function drawFlyingMonster(color) {
  ctx.fillStyle = "rgba(32,58,75,0.78)";
  ctx.beginPath();
  ctx.ellipse(-42, -6, 40, 15, -0.45, 0, Math.PI * 2);
  ctx.ellipse(42, -6, 40, 15, 0.45, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(0, 8, 48, 38, 0, 0, Math.PI * 2);
  ctx.fill();
  drawMonsterFace();
}

function drawCrystalMonster(color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.moveTo(0, -70);
  ctx.lineTo(42, 0);
  ctx.lineTo(24, 58);
  ctx.lineTo(-24, 58);
  ctx.lineTo(-42, 0);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = "rgba(255,255,255,0.28)";
  ctx.beginPath();
  ctx.moveTo(0, -58);
  ctx.lineTo(18, -2);
  ctx.lineTo(0, 46);
  ctx.closePath();
  ctx.fill();
  drawMonsterFace();
}

function drawMonsterFace() {
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(-16, -4, 8, 0, Math.PI * 2);
  ctx.arc(16, -4, 8, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = "#111827";
  ctx.beginPath();
  ctx.arc(-16, -4, 3, 0, Math.PI * 2);
  ctx.arc(16, -4, 3, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = "#111827";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 13, 12, 0.2, Math.PI - 0.2);
  ctx.stroke();
}

function drawImpact(type, heroX, heroY, monsterX, monsterY) {
  const t = attackProgress;
  ctx.save();
  if (type === "correct") {
    const x = lerp(heroX + 40, monsterX - 38, t);
    const y = lerp(heroY - 20, monsterY - 10, t);
    ctx.strokeStyle = "rgba(255, 240, 173, 0.9)";
    ctx.lineWidth = 7;
    ctx.beginPath();
    ctx.moveTo(x - 28, y + 18);
    ctx.lineTo(x + 28, y - 18);
    ctx.stroke();
  } else if (type === "wrong") {
    ctx.fillStyle = "rgba(255, 107, 122, 0.85)";
    ctx.beginPath();
    ctx.arc(heroX, heroY - 30, 18 + Math.sin(t * Math.PI) * 22, 0, Math.PI * 2);
    ctx.fill();
  }
  ctx.restore();
}

function drawParticles() {
  for (const p of particles) {
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();
  }
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

function showAnswerFeedback(type, title, message) {
  ui.feedback.className = `answer-feedback ${type} active`;
  ui.feedback.innerHTML = `<strong>${escapeHtml(title)}</strong><span>${escapeHtml(message)}</span>`;
  clearTimeout(showAnswerFeedback.timer);
  showAnswerFeedback.timer = setTimeout(() => ui.feedback.classList.remove("active"), 1250);
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
}

function loadQuestionsThenStart() {
  const startButton = document.querySelector("#startButton");
  startButton.disabled = true;
  startButton.textContent = "準備題庫中...";
  setTimeout(() => {
    startButton.disabled = false;
    startButton.textContent = "確認出發";
    startGame();
  }, 180);
}

function startGame() {
  hideScreens();
  gameMode = "explore";
  hp = 3;
  score = 0;
  elapsed = 0;
  pathSeed += 17;
  startTime = Date.now();
  pool = shuffle(questionBank);
  particles = [];
  currentQuestion = null;
  ui.encounter.classList.remove("active", "resolving");
  ui.feedback.classList.remove("active");
  ui.actionDock.hidden = false;
  startTimer();
  updateHud();
  showToast(`${playerName}，選一條路深入迷宮吧`);
}

function startTimer() {
  clearInterval(timerId);
  timerId = setInterval(() => {
    if (["explore", "moving", "battle", "resolving"].includes(gameMode)) {
      elapsed = Math.floor((Date.now() - startTime) / 1000);
      updateHud();
    }
  }, 500);
}

function walk(direction) {
  if (gameMode !== "explore") return;
  gameMode = "moving";
  moveDirection = direction;
  moveProgress = 0;
  ui.actionDock.hidden = true;
  ui.encounter.classList.remove("active", "resolving");
  ui.feedback.classList.remove("active");
  showToast(direction === "left" ? "左路的藤蔓被撥開了" : "右路的光點正在引路", 800);
}

function beginBattle() {
  gameMode = "battle";
  moveProgress = 0;
  pathSeed += moveDirection === "left" ? 5 : 9;
  currentQuestion = pool.pop() || shuffle(questionBank).pop();
  if (pool.length < 2) pool = shuffle(questionBank);
  ui.monster.textContent = `Lv.${score + 1} ${currentQuestion.monster}`;
  ui.monster.style.color = numberToHex(currentQuestion.color);
  ui.question.textContent = currentQuestion.q;
  ui.options.innerHTML = "";
  const options = shuffle(currentQuestion.options.map((text, index) => ({ text, correct: index === currentQuestion.ans })));
  options.forEach((option, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option-button";
    button.dataset.correct = option.correct ? "true" : "false";
    button.innerHTML = `<span>${String.fromCharCode(65 + index)}</span><strong>${escapeHtml(option.text)}</strong>`;
    button.addEventListener("click", () => answer(button, option.correct));
    ui.options.appendChild(button);
  });
  ui.encounter.classList.add("active");
}

function answer(button, correct) {
  if (gameMode !== "battle") return;
  gameMode = "resolving";
  resolveType = correct ? "correct" : "wrong";
  attackProgress = 0;
  ui.encounter.classList.add("resolving");
  [...ui.options.children].forEach((child) => { child.disabled = true; });
  if (correct) {
    score += 1;
    button.classList.add("correct");
    addSparkles(width * 0.72, height * 0.45, "#fff0ad", 24);
    showAnswerFeedback("correct", "答對了！", "勇者出擊，怪物的迷霧被擊散");
    beep(660, 0.08);
    setTimeout(() => {
      updateHud();
      if (score >= TOTAL_STAGES) finishGame(true);
      else nextExplore(score % 4 === 0 ? `已通過 ${score} 關，迷宮變得更明亮了` : "繼續探索下一段道路");
    }, 1250);
  } else {
    hp -= 1;
    button.classList.add("wrong");
    [...ui.options.children].forEach((child) => {
      if (child.dataset.correct === "true") child.classList.add("correct");
    });
    shakeTime = 0.42;
    addSparkles(width * 0.28, height * 0.55, "#ff6b7a", 18);
    updateHud();
    showAnswerFeedback("wrong", "答錯了", hp > 0 ? "HP -1，正確答案已經亮起" : "HP 歸零，需要重新挑戰");
    beep(180, 0.12);
    setTimeout(() => {
      if (hp <= 0) finishGame(false);
      else nextExplore("整理思路，再往前探索");
    }, 1500);
  }
}

function nextExplore(message) {
  gameMode = "explore";
  resolveType = "";
  attackProgress = 0;
  currentQuestion = null;
  ui.encounter.classList.remove("active", "resolving");
  ui.actionDock.hidden = false;
  if (message) showToast(message, 1500);
}

function finishGame(won) {
  clearInterval(timerId);
  gameMode = won ? "win" : "gameover";
  elapsed = Math.floor((Date.now() - startTime) / 1000);
  ui.encounter.classList.remove("active", "resolving");
  ui.actionDock.hidden = true;
  ui.resultEyebrow.textContent = won ? "挑戰完成" : "探索失敗";
  ui.resultTitle.textContent = won ? "破曉降臨" : "暫時撤退";
  ui.resultText.textContent = won
    ? `${playerName} 通過 16 關，成功走出數學迷宮`
    : `${playerName} 完成了 ${score} 關，休息一下再重新出發`;
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
}

function showLeaderboard() {
  showScreen("leaderboard");
  ui.leaderboardContent.textContent = "讀取中...";
  renderLeaderboard(getLocalLeaderboard());
}

function getLocalLeaderboard() {
  const local = JSON.parse(localStorage.getItem("mathwarriorRecords") || "[]");
  const demo = [
    { name: "晨光勇者", score: 16, timeStr: "02分18秒", totalSecs: 138 },
    { name: "森林騎士", score: 15, timeStr: "03分05秒", totalSecs: 185 },
    { name: "計算法師", score: 12, timeStr: "02分52秒", totalSecs: 172 }
  ];
  return [...local, ...demo]
    .sort((a, b) => (b.score === a.score ? a.totalSecs - b.totalSecs : b.score - a.score))
    .slice(0, 10);
}

function renderLeaderboard(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    ui.leaderboardContent.textContent = "目前還沒有勇者留下紀錄";
    return;
  }
  ui.leaderboardContent.innerHTML = `
    <table class="leaderboard-table">
      <thead><tr><th>排名</th><th>勇者</th><th>關卡</th><th>時間</th></tr></thead>
      <tbody>
        ${rows.slice(0, 10).map((row, index) => `
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

function addSparkles(x, y, color, count) {
  for (let i = 0; i < count; i += 1) {
    particles.push({
      x,
      y,
      vx: (Math.random() - 0.5) * 280,
      vy: -80 - Math.random() * 180,
      size: 3 + Math.random() * 4,
      life: 0.55 + Math.random() * 0.45,
      color
    });
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

function roundRect(x, y, w, h, r, fill) {
  const radius = Math.min(r, Math.abs(w) / 2, Math.abs(h) / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
  if (fill) ctx.fill();
  else ctx.stroke();
}

function drawShadow(x, y, w, h, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.ellipse(x, y, w, h, 0, 0, Math.PI * 2);
  ctx.fill();
}

function lerp(a, b, t) {
  return a + (b - a) * t;
}

function seededWave(seed) {
  return Math.sin(seed * 12.9898 + pathSeed * 78.233) * 0.5 + Math.sin(seed * 4.31) * 0.25;
}

function numberToHex(value) {
  const color = Number(value || 0x4fd1a5).toString(16).padStart(6, "0");
  return `#${color.slice(-6)}`;
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
  if (gameMode === "title") showScreen("title");
  else hideScreens();
});
document.querySelector("#againButton").addEventListener("click", () => showScreen("setup"));
document.querySelector("#leftButton").addEventListener("click", () => walk("left"));
document.querySelector("#rightButton").addEventListener("click", () => walk("right"));
ui.soundButton.addEventListener("click", () => {
  soundOn = !soundOn;
  ui.soundButton.textContent = soundOn ? "音效開" : "音效關";
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
  if (gameMode === "battle" && optionIndex >= 0 && optionIndex < 4) ui.options.children[optionIndex]?.click();
});

init2D();
updateHud();

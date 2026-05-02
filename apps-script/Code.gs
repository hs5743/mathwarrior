function doGet(e) {
  var action = e.parameter.action || "";
  var callback = e.parameter.callback || "";
  var result;

  try {
    if (action === "getQuestions") {
      result = { questions: getQuestions() };
    } else if (action === "getLeaderboard") {
      result = { records: getLeaderboard() };
    } else if (action === "saveRecord") {
      saveRecord(
        e.parameter.playerName || "勇者",
        Number(e.parameter.score || 0),
        e.parameter.timeString || "99分59秒"
      );
      result = { ok: true };
    } else {
      result = { error: "unknown action" };
    }
  } catch (err) {
    result = { error: String(err) };
  }

  var body = callback
    ? callback + "(" + JSON.stringify(result) + ");"
    : JSON.stringify(result);

  return ContentService
    .createTextOutput(body)
    .setMimeType(callback ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}

function saveRecord(playerName, score, timeString) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("紀錄");
  if (sheet) {
    sheet.appendRow([new Date(), playerName, score, timeString]);
  }
}

function getLeaderboard() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("紀錄");
  if (!sheet) return [];
  var data = sheet.getDataRange().getValues();
  if (data.length <= 1) return [];

  var records = [];
  for (var i = 1; i < data.length; i++) {
    if (data[i][1] === "") continue;
    var timeStr = data[i][3] ? data[i][3].toString() : "99分59秒";
    var match = timeStr.match(/(\d+)分(\d+)秒/);
    var totalSecs = match ? (parseInt(match[1], 10) * 60 + parseInt(match[2], 10)) : 9999;
    records.push({
      name: data[i][1].toString(),
      score: parseInt(data[i][2], 10) || 0,
      timeStr: timeStr,
      totalSecs: totalSecs
    });
  }

  records.sort(function(a, b) {
    if (b.score !== a.score) return b.score - a.score;
    return a.totalSecs - b.totalSecs;
  });
  return records.slice(0, 10);
}

function getQuestions() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("題庫");
  if (!sheet) return [];
  var data = sheet.getDataRange().getValues();
  var questions = [];
  var colors = [0x4fd1a5, 0xff6b7a, 0xb18cff, 0x65c7f7, 0xb8b1a3, 0x9ca3af, 0xffd166, 0x79d45e];
  var shapes = ["sphere", "crystal", "octa", "box"];
  var monsters = ["霧林史萊姆", "赤焰守衛", "紫影術士", "水晶妖精", "石甲魔像", "薄霧蝙蝠", "金葉騎兵", "藤蔓守門者"];

  for (var i = 1; i < data.length; i++) {
    if (data[i][0] === "") continue;
    questions.push({
      q: data[i][0].toString(),
      options: [
        formatOption(data[i][1]),
        formatOption(data[i][2]),
        formatOption(data[i][3]),
        formatOption(data[i][4])
      ],
      ans: parseInt(data[i][5], 10) || 0,
      monster: monsters[i % monsters.length],
      color: colors[i % colors.length],
      shape: shapes[i % shapes.length]
    });
  }
  return questions;
}

function formatOption(value) {
  if (Object.prototype.toString.call(value) === "[object Date]") {
    return (value.getMonth() + 1) + "/" + value.getDate();
  }
  return value.toString();
}

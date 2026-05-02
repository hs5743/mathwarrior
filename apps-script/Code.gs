var MAX_SCORE = 16;
var MAX_NAME_LENGTH = 10;

function doGet(e) {
  var action = getParam(e, "action", "");
  var callback = getParam(e, "callback", "");
  var result;

  try {
    if (action === "getQuestions") {
      result = { questions: getQuestions() };
    } else if (action === "getLeaderboard") {
      result = { records: getLeaderboard() };
    } else if (action === "saveRecord") {
      saveRecord(
        sanitizeName(getParam(e, "playerName", "勇者")),
        sanitizeScore(getParam(e, "score", "0")),
        sanitizeTime(getParam(e, "timeString", "99分59秒"))
      );
      result = { ok: true };
    } else {
      result = { error: "unknown action" };
    }
  } catch (err) {
    result = { error: "server error" };
  }

  var json = JSON.stringify(result);
  var useJsonp = /^[A-Za-z_$][0-9A-Za-z_$]*$/.test(callback);
  var body = useJsonp ? callback + "(" + json + ");" : json;

  return ContentService
    .createTextOutput(body)
    .setMimeType(useJsonp ? ContentService.MimeType.JAVASCRIPT : ContentService.MimeType.JSON);
}

function getParam(e, key, fallback) {
  return e && e.parameter && e.parameter[key] !== undefined ? e.parameter[key] : fallback;
}

function saveRecord(playerName, score, timeString) {
  var lock = LockService.getScriptLock();
  lock.waitLock(3000);
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("紀錄");
    if (sheet) {
      sheet.appendRow([new Date(), playerName, score, timeString]);
    }
  } finally {
    lock.releaseLock();
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
    var timeStr = sanitizeTime(data[i][3] ? data[i][3].toString() : "99分59秒");
    var totalSecs = timeToSeconds(timeStr);
    records.push({
      name: sanitizeName(data[i][1].toString()),
      score: sanitizeScore(data[i][2]),
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
    var ans = sanitizeAnswer(data[i][5]);
    questions.push({
      q: data[i][0].toString().slice(0, 160),
      options: [
        formatOption(data[i][1]),
        formatOption(data[i][2]),
        formatOption(data[i][3]),
        formatOption(data[i][4])
      ],
      ans: ans,
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
  return value.toString().slice(0, 80);
}

function sanitizeName(value) {
  return value
    .toString()
    .replace(/[<>"'`]/g, "")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, MAX_NAME_LENGTH) || "勇者";
}

function sanitizeScore(value) {
  var score = parseInt(value, 10);
  if (isNaN(score)) return 0;
  return Math.max(0, Math.min(MAX_SCORE, score));
}

function sanitizeAnswer(value) {
  var ans = parseInt(value, 10);
  if (isNaN(ans)) return 0;
  return Math.max(0, Math.min(3, ans));
}

function sanitizeTime(value) {
  var text = value.toString();
  var match = text.match(/^(\d{1,2})分(\d{1,2})秒$/);
  if (!match) return "99分59秒";
  var mins = Math.max(0, Math.min(99, parseInt(match[1], 10)));
  var secs = Math.max(0, Math.min(59, parseInt(match[2], 10)));
  return mins + "分" + secs + "秒";
}

function timeToSeconds(timeStr) {
  var match = timeStr.match(/^(\d{1,2})分(\d{1,2})秒$/);
  return match ? (parseInt(match[1], 10) * 60 + parseInt(match[2], 10)) : 9999;
}

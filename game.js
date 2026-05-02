const TOTAL_STAGES = 16;
const GAS_WEB_APP_URL = "";
const BASE_QUESTIONS = [
  {
    q: "把 3 公斤的米平分成 4 袋。用除法算式表示「一袋重多少公斤」，應該怎麼列式？",
    options: ["3 ÷ 4", "4 ÷ 3", "3 × 4", "4 ÷ 1"],
    ans: 0,
    monster: "霧林史萊姆",
    color: 0x4fd1a5,
    shape: "sphere"
  },
  {
    q: "將分數 4/25 化為小數時，最快的方法是先把分母擴分為多少？",
    options: ["10", "100", "1000", "4"],
    ans: 1,
    monster: "赤焰守衛",
    color: 0xff6b7a,
    shape: "crystal"
  },
  {
    q: "在數線上，1/8 是 0.125。那麼 3/8 的小數是多少？",
    options: ["0.375", "3.125", "0.041", "0.38"],
    ans: 0,
    monster: "紫影術士",
    color: 0xb18cff,
    shape: "octa"
  },
  {
    q: "一瓶鮮奶有 4/25 公升，用小數表示是多少公升？",
    options: ["0.16", "0.25", "0.04", "0.425"],
    ans: 0,
    monster: "水晶妖精",
    color: 0x65c7f7,
    shape: "sphere"
  },
  {
    q: "計算 1.3 ÷ 3，若要把商四捨五入到小數第二位，直式除法通常要算到哪一位？",
    options: ["小數第一位", "小數第二位", "小數第三位", "整數位"],
    ans: 2,
    monster: "石甲魔像",
    color: 0xb8b1a3,
    shape: "box"
  },
  {
    q: "0.48 ÷ 6 的結果是多少？",
    options: ["0.8", "0.08", "8", "0.008"],
    ans: 1,
    monster: "薄霧蝙蝠",
    color: 0x9ca3af,
    shape: "octa"
  },
  {
    q: "7/20 可以先擴分成幾分之幾，再寫成小數？",
    options: ["35/100", "14/40", "70/200", "7/100"],
    ans: 0,
    monster: "金葉騎兵",
    color: 0xffd166,
    shape: "crystal"
  },
  {
    q: "一條繩子長 2.4 公尺，平分成 8 段，每段長多少公尺？",
    options: ["0.03", "0.3", "3", "0.24"],
    ans: 1,
    monster: "藤蔓守門者",
    color: 0x79d45e,
    shape: "box"
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

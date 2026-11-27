// NEXABLAST home page. No libraries.
// DOWNLOAD LINKS: put the real URLs here. Empty = not published yet: the buttons lead to the download section and a
// "coming soon" note shows. Android and iOS are announced as "coming soon" in the page itself.
const LINKS = {
  pc: "",      // e.g. the Windows download URL
  android: "", // e.g. the Google Play listing URL (then replace the "Yakında / Coming soon" Google Play badge with a link)
};

document.documentElement.classList.add("js");
document.body.classList.add("js");
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

// ---- English text (Turkish is the page's own HTML). Keys are the elements' data-i attributes.
const EN = {
  skip: "Skip to content", n1: "Why", n2: "Modes", n3: "Mechs", n4: "Planets", n5: "Progress", n6: "System",
  dl: "FREE DOWNLOAD", dl2: "DOWNLOAD FREE NOW", h_b2: "EXPLORE THE GAME", h_eye: "TACTICAL MECH COMBAT",
  h_t: "ENTER THE ARENA.<br><em>PICK YOUR MECH.</em><br>WIN THE WAR.",
  h_l: "Giant war machines, tactical arenas and non-stop combat. 8 pilots, one arena – be the last one standing.",
  h_soon: "COMING SOON TO ANDROID AND iOS", h_scroll: "SCROLL DOWN",
  s1: "Playable mechs", s2: "Combat roles", s3: "Planets", s4: "Arenas", s5: "Game modes", s6: "Story missions", s7: "Languages", s8: "Players per match",
  tick: "8 MECHS ✦ 4 ROLES ✦ 5 PLANETS ✦ 10 ARENAS ✦ 8-PLAYER BATTLES ✦ ONLINE · LAN · OFFLINE ✦ SHATTERING ARMOR ✦ EXPLODING BARRELS ✦ ",
  i_eye: "GET READY", i_t: "DON'T JUST SHOOT.<br><em>READ THE FIELD.</em>",
  i_p: "In NEXABLAST the right position and the right moment decide the fight. Duck behind cover, reload, lure your rival next to a barrel – and set the arena on fire with one shot.",
  i_link: "SEE THE GAME MODES", i_tag: "REAL IN-GAME FOOTAGE",
  w_eye: "WHY NEXABLAST", w_t: "EVERY BATTLE<br><em>A NEW STRATEGY.</em>",
  f1: "True character balance", f1p: "There is no \"best mech\". 4 roles, 8 mechs, each with its own strengths and weaknesses. Skill wins.",
  f2: "Tactical battlefields", f2p: "Take cover, change position and turn explosive barrels against your enemies.",
  f3: "Shattering armor", f3p: "Take hits and your mech smokes, catches fire and loses armor plates. Bolts and scrap fly everywhere.",
  f4: "Online, LAN and offline", f4p: "Match online, play with friends on the same Wi-Fi, or fight bots with no internet at all.",
  f5: "8-player battles", f5p: "Free-for-all, team battle, duel, last man standing: up to 8 pilots in one arena.",
  f6: "Constant progress and rewards", f6p: "Mech mastery, research lab, daily missions, weekly rules, events and season rewards.",
  m_eye: "GAME MODES", m_t: "EVERY ARENA UNIQUE.<br><em>EVERY MODE DIFFERENT.</em>",
  m_sub: "From a three-minute brawl to a 40-mission story: pick your own rhythm. Every match pays credits, experience and crates.",
  md1: "Quick Battle", md1p: "A 3-minute clash on a small arena, one tap to start. Bots fill the empty slots.",
  md2: "Free-For-All", md2p: "Everyone against everyone. First to 25 points wins.",
  md3: "Team Battle", md3p: "Blue against red; the team that moves together wins.",
  md4: "Respawn Deathmatch", md4p: "10 minutes of non-stop fighting; die and you come right back.",
  md5: "Last Man Standing", md5p: "One life. A shrinking safe zone pushes everyone to the middle; the last one standing wins.",
  md6: "Duel", md6p: "One on one, three rounds, pure skill.",
  md7: "Ranked", md7p: "Climb the leagues and collect season rewards.",
  md8: "Story Mode", md8p: "The story of pilot Raider and prototype R-01: 8 chapters, 40 missions, voiced cutscenes.",
  md9: "Events and Tournaments", md9p: "Survive wave after wave in the Iron Colosseum and compete in tournaments.",
  c_eye: "MECH COLLECTION", c_t: "EIGHT MECHS.<br><em>FOUR COMBAT ROLES.</em>", c_sub: "There is no best mech. There is the mech that completes your team and your style.",
  r0: "All", r1: "Speed", r2: "Tank", r3: "Damage", r4: "Sniper", r1u: "SPEED", r2u: "TANK", r3u: "DAMAGE", r4u: "SNIPER",
  b1: "Armor", b2: "Speed", b3: "Damage", b4: "Range", ult: "SPECIAL ABILITY (R)",
  d_raider: "Light, fast flanker. The mech of pilots who are first into the fight and first out once it is done.",
  u_raider: "Jump-Jet Dash – bursts forward to join a fight or escape one.",
  d_hawk: "Ultralight hover scout and the fastest mech in the game. Strikes from the flanks and is gone before it is caught.",
  u_hawk: "Phase Blink – teleports a short distance.",
  d_bulwark: "Heavy tank and area controller. Stands in front of the team and holds the line.",
  u_bulwark: "Aegis Shield Wall – an energy wall that soaks most of the damage in front of it.",
  d_colossus: "Super-heavy walking fortress; the toughest mech in the game. Slow, but unstoppable.",
  u_colossus: "Bastion Mode – roots in place and becomes almost indestructible.",
  d_wraith: "A predator. Hits hard and stays alive on the energy it steals – but its armor is thin.",
  u_wraith: "Life Siphon – turns part of the damage it deals into health.",
  d_tempest: "Four-legged storm caller. Dives into the crowd and burns everyone at once.",
  u_tempest: "Storm Nova – an energy wave that blasts everyone around it.",
  d_stalker: "Long-range marksman. Deals the most damage from afar; weak up close and quick to fall.",
  u_stalker: "Optic Cloak – turns invisible and repositions.",
  d_siege: "Heavy artillery platform. Floods an area with fire from behind cover; helpless in close combat.",
  u_siege: "Artillery Barrage – rains fire over a wide area.",
  c_note: "Coming soon: Support and Assassin roles, and new mechs that counter each other.",
  g_eye: "PLANETS AND ARENAS", g_t: "FIVE PLANETS.<br><em>TEN BATTLEFIELDS.</em>",
  g_sub: "Every planet brings its own hazards and tactical chances. Know the battlefield and make it work for you.",
  wt: "The old, dust-covered world. Steel decks, scrap pits and container corridors.", wth: "Hazard: sandstorms blind the field", wta: "Dustbowl Colosseum · Scrap Pit",
  wm: "The red planet's foundries. Lava boils underground; the floor can erupt at any moment.", wmh: "Hazard: erupting lava vents", wma: "Foundry Core · Slag Run",
  we: "Bases under domes of ice. Snow drifts and slippery floors.", weh: "Hazard: mechs sliding on ice", wea: "Cryo Dome · Frost Vault",
  wi: "Methane refineries and pipelines. Chemical spills everywhere.", wih: "Hazard: igniting methane pools", wia: "Refinery Deck · Pipeline 7",
  wh: "A station in orbit. Space under the glass floor, low gravity.", whh: "Hazard: vacuum vents and low gravity", wha: "Halo Atrium · Airlock Ring",
  g_10: "10 ARENAS", a1: "Dustbowl Colosseum", a2: "Scrap Pit", a3: "Foundry Core", a4: "Slag Run", a5: "Cryo Dome", a6: "Frost Vault",
  a7: "Refinery Deck", a8: "Pipeline 7", a9: "Halo Atrium", a10: "Airlock Ring",
  p_eye: "COMBAT AND PROGRESS", p_t: "DON'T JUST FIGHT.<br><em>GROW. GET STRONGER.</em>",
  p_sub: "Grab supply crates in the arena, master your mech and walk into the next fight stronger.", p_cr: "SUPPLY CRATES",
  k1: "Ammo", k1p: "Refills your ammunition.", k2: "Credits", k2p: "Pays in-game credits.", k3: "Repair", k3p: "Restores your mech's health.",
  k4: "Power-up", k4p: "Overcharge, haste or shield.", k5: "Attack", k5p: "+10% damage for 3 seconds.",
  pg1: "Mech mastery", pg1p: "Play a mech and you master it. At mastery levels 5, 10, 15 and 20 your special ability (R) grows stronger.",
  pg2: "Research lab", pg2p: "Spend the research disks you collect in matches on armor, speed and shield skills.",
  pg3: "Customization", pg3p: "Alloys, decals, profile icons and frames. Make your mech carry your signature.",
  pg4: "Clans and leagues", pg4p: "Found your clan, chat with friends, climb the leaderboards and the season leagues.",
  ctl: "SUPPORTED CONTROLS", ctl1: "KEYBOARD + MOUSE", ctl2: "GAMEPAD", ctl3: "TOUCHSCREEN",
  o_eye: "HOW YOU PLAY", o_t: "YOU CHOOSE<br><em>HOW TO CONNECT.</em>",
  o1: "Quick matchmaking, join by code, private rooms with friends and the ranked league.", o1t: "INTERNET REQUIRED",
  o2: "Play with friends on the same Wi-Fi network without any internet.", o2t: "SAME WI-FI NETWORK",
  o3: "Play every mode offline against bots that take cover, reload and move like real players.", o3t: "AGAINST BOTS",
  q_eye: "SYSTEM REQUIREMENTS", q_t: "GEAR UP.<br><em>JOIN THE ARENA.</em>",
  q_sub: "<b>Automatic resolution</b> adapts the picture to the frame rate; <b>five graphics levels</b> (Very Low to Ultra) and a device test at first launch pick the best settings by themselves.",
  q_pc: "PC (WINDOWS)", q_an: "PHONE (ANDROID)", q_min: "Minimum", q_rec: "Recommended",
  q1: "Operating system", q2: "Processor", q3: "Memory", q4: "Graphics card", q4a: "Vulkan support, Intel UHD 620 or equivalent", q4b: "GeForce GTX 1050 / Radeon RX 560 or better",
  q5: "Storage", q5a: "1 GB free space", q5b: "1 GB free space (SSD)", q6: "Internet", q6a: "Required for online modes", q6b: "Broadband",
  q7: "Version", q7b: "Android 10 or later", q8a: "64-bit, 4 cores", q8b: "8 cores (Snapdragon 7 series or equivalent)", q9b: "4 GB RAM or more",
  q10: "Graphics", q11a: "500 MB free space", q11b: "1 GB free space",
  q_note: "Online modes need an internet connection. System requirements are estimates. iOS requirements will be announced before launch.",
  l_t: "NINE LANGUAGES.<br><em>ONE BATTLEFIELD.</em>",
  z_t: "THE BATTLEFIELD<br><em>IS WAITING, PILOT.</em>", z_p: "Pick your mech. Take cover. Bring your rivals down. Start writing your own legend in NEXABLAST: Mech Arena.",
  z_b: "DOWNLOAD FREE NOW", st_dl: "Download", st_soon: "Coming soon", st_now: "Play now", st_web: "Play in browser",
  z_soon: "The PC download link is coming here very soon. For now you can play in your browser.",
  ft: "Giant war machines. Tactical arenas. Non-stop combat.", ft1: "Privacy policy", ft5: "Terms of use", ft2: "Delete account", ft3: "Press kit",
};
const META = {
  tr: { title: document.title, desc: document.querySelector('meta[name="description"]').content },
  en: { title: "NEXABLAST: Mech Arena – Tactical Mech Combat | PC and Android",
        desc: "NEXABLAST: Mech Arena – 8 mechs, 4 combat roles, 5 planets and 10 tactical arenas. 8-player online, LAN and offline mech battles. Free on PC; Android and iOS coming soon." },
};

function setLang(lang) {
  document.querySelectorAll("[data-i]").forEach((el) => {
    if (el.dataset.tr === undefined) el.dataset.tr = el.innerHTML;
    const en = EN[el.dataset.i];
    el.innerHTML = lang === "en" && en !== undefined ? en : el.dataset.tr;
  });
  document.documentElement.lang = lang;
  document.title = META[lang].title;
  document.querySelector('meta[name="description"]').content = META[lang].desc;
  document.querySelectorAll(".lang button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.lang === lang));
  try { localStorage.setItem("lang", lang); } catch (e) { /* private mode: the choice just isn't remembered */ }
  document.dispatchEvent(new Event("langchange"));
}
(() => {
  let lang = "tr";
  try { lang = localStorage.getItem("lang") || ((navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en"); } catch (e) {}
  document.querySelectorAll(".lang button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
  if (lang === "en") setLang("en");
})();

// ---- download buttons
(() => {
  let missing = false;
  document.querySelectorAll("[data-dl]").forEach((a) => {
    const url = LINKS[a.dataset.dl === "any" ? "pc" : a.dataset.dl];
    if (url) {
      a.href = url;
      a.rel = "noopener";
      if (/^https?:/.test(url)) a.target = "_blank";
    } else {
      missing = true;
      a.href = "#indir";
      if (a.classList.contains("store")) a.setAttribute("aria-disabled", "true");
    }
  });
  if (missing) document.querySelector(".soon-text")?.removeAttribute("hidden");
})();

// ---- nav: solid after the hero, mobile menu
(() => {
  const nav = document.querySelector(".nav");
  const onScroll = () => nav.classList.toggle("solid", scrollY > 40);
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();
  const btn = document.querySelector(".nav-toggle");
  const menu = document.getElementById("menu");
  const set = (open) => { btn.setAttribute("aria-expanded", open); menu.classList.toggle("open", open); };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) set(false); });
  addEventListener("keydown", (e) => { if (e.key === "Escape") set(false); });
})();

// ---- reveal on scroll + counters
(() => {
  const count = (el) => {
    const end = +el.dataset.count;
    if (reduce) return;
    const t0 = performance.now();
    const step = (t) => {
      const k = Math.min(1, (t - t0) / 1400);
      el.textContent = Math.round(end * (1 - Math.pow(1 - k, 3)));
      if (k < 1) requestAnimationFrame(step);
    };
    el.textContent = "0";
    requestAnimationFrame(step);
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const i = [...el.parentElement.children].indexOf(el);
      el.style.transitionDelay = Math.min(i, 8) * 70 + "ms"; // siblings that enter together come in one after another
      el.classList.add("in");
      el.querySelectorAll(".mech").forEach((m) => m.classList.add("seen"));
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
  const so = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (e.isIntersecting) { e.target.querySelectorAll("[data-count]").forEach(count); so.unobserve(e.target); }
  }), { threshold: 0.4 });
  document.querySelectorAll(".stats").forEach((s) => so.observe(s));
})();

// ---- mech select screen: roster + role filter
(() => {
  const mechs = [...document.querySelectorAll(".stage .mech")];
  const roster = document.querySelector(".roster");
  const wide = matchMedia("(min-width: 761px)");
  const items = mechs.map((m) => {
    const li = document.createElement("li");
    const b = document.createElement("button");
    b.type = "button";
    b.style.setProperty("--c", m.style.getPropertyValue("--c"));
    b.addEventListener("click", () => show(m));
    li.append(b);
    roster.append(li);
    return { m, li, b };
  });
  const label = () => items.forEach(({ m, b }) => {
    b.innerHTML = `<img src="${m.querySelector("img").getAttribute("src")}" alt=""><span><b>${m.querySelector("h3").firstChild.textContent.trim()}</b><small>${m.querySelector(".mech-role").textContent}</small></span>`;
  });
  function show(m) {
    items.forEach((it) => {
      const on = it.m === m;
      it.m.classList.toggle("on", on);
      it.b.setAttribute("aria-selected", on);
    });
  }
  document.querySelectorAll(".roles button").forEach((tab) => tab.addEventListener("click", () => {
    document.querySelectorAll(".roles button").forEach((t) => t.setAttribute("aria-selected", t === tab));
    const role = tab.dataset.role;
    let first = null;
    items.forEach((it) => {
      const ok = role === "all" || it.m.dataset.role === role;
      it.li.hidden = !ok;
      it.m.hidden = !ok && !wide.matches; // phones: the swipe row shows only that class
      if (ok && !first) first = it.m;
    });
    if (first) show(first);
  }));
  document.addEventListener("langchange", label);
  label();
  show(mechs[0]);
})();

// ---- hero: slow embers (canvas, paused when off screen or with reduced motion)
(() => {
  const cv = document.querySelector(".hero-fx");
  if (!cv || reduce) return;
  const g = cv.getContext("2d");
  let w, h, dpr, run = true;
  const parts = [];
  const N = innerWidth < 760 ? 26 : 60;
  const size = () => {
    dpr = Math.min(2, devicePixelRatio || 1);
    w = cv.clientWidth; h = cv.clientHeight;
    cv.width = w * dpr; cv.height = h * dpr;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
  };
  const spawn = (p = {}) => Object.assign(p, { x: Math.random() * w, y: h + Math.random() * h * 0.3, r: 0.6 + Math.random() * 1.8,
    vy: 0.25 + Math.random() * 0.7, vx: (Math.random() - 0.5) * 0.3, a: 0.3 + Math.random() * 0.6, t: Math.random() * 6 });
  size();
  for (let i = 0; i < N; i++) { const p = spawn(); p.y = Math.random() * h; parts.push(p); }
  addEventListener("resize", size);
  new IntersectionObserver(([e]) => { run = e.isIntersecting; if (run) requestAnimationFrame(tick); }).observe(cv);
  function tick() {
    if (!run) return;
    g.clearRect(0, 0, w, h);
    for (const p of parts) {
      p.t += 0.02; p.y -= p.vy; p.x += p.vx + Math.sin(p.t) * 0.2;
      if (p.y < -10) spawn(p);
      g.globalAlpha = p.a * Math.min(1, p.y / h * 1.4);
      g.fillStyle = p.r > 1.6 ? "#ffb347" : "#ff7a1a";
      g.beginPath(); g.arc(p.x, p.y, p.r, 0, 6.283); g.fill();
    }
    requestAnimationFrame(tick);
  }
})();

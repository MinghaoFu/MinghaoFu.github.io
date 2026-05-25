import {
  me, papers, albums, news, education, experience, service, blogs,
  papersByAlbum, albumById, paperById, popularPapers,
} from "./data.js";

// ============ SVG icon set ============
const ICON = {
  home:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.5 3.247a1 1 0 00-1 0L4 7.577V20h4.5v-6a1 1 0 011-1h5a1 1 0 011 1v6H20V7.577l-7.5-4.33zm-1.5-1.732a3 3 0 013 0l7.5 4.33a2 2 0 011 1.732V21a1 1 0 01-1 1h-6.5a1 1 0 01-1-1v-6h-3v6a1 1 0 01-1 1H4a1 1 0 01-1-1V7.577a2 2 0 011-1.732l7.5-4.33z"/></svg>`,
  search:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.533 1.27893C5.35215 1.27893 1.12598 5.41887 1.12598 10.5579C1.12598 15.697 5.35215 19.8369 10.533 19.8369C12.767 19.8369 14.8235 19.0671 16.4402 17.7794L20.7929 22.132L22.2071 20.7178L17.8634 16.3742C19.1845 14.7468 19.94 12.7163 19.94 10.5579C19.94 5.41887 15.7138 1.27893 10.533 1.27893ZM3.12598 10.5579C3.12598 6.55226 6.42768 3.27893 10.533 3.27893C14.6383 3.27893 17.94 6.55226 17.94 10.5579C17.94 14.5636 14.6383 17.8369 10.533 17.8369C6.42768 17.8369 3.12598 14.5636 3.12598 10.5579Z"/></svg>`,
  library: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.5 2.134a1 1 0 011 0l6 3.464a1 1 0 01.5.866V21a1 1 0 01-1 1h-6a1 1 0 01-1-1V3a1 1 0 01.5-.866zM16 4.732V20h4V7.041l-4-2.309zM3 22a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1zm6 0a1 1 0 01-1-1V3a1 1 0 012 0v18a1 1 0 01-1 1z"/></svg>`,
  back:    `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M11.03.47a.75.75 0 010 1.06L4.56 8l6.47 6.47a.75.75 0 11-1.06 1.06L2.44 8 9.97.47a.75.75 0 011.06 0z"/></svg>`,
  fwd:     `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M4.97.47a.75.75 0 011.06 0L13.56 8l-7.53 7.53a.75.75 0 01-1.06-1.06L11.44 8 4.97 1.53a.75.75 0 010-1.06z"/></svg>`,
  play:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7.05 3.606l13.49 7.788a.7.7 0 010 1.212L7.05 20.394A.7.7 0 016 19.788V4.212a.7.7 0 011.05-.606z"/></svg>`,
  pause:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.7 3a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7H5.7zm10 0a.7.7 0 00-.7.7v16.6a.7.7 0 00.7.7h2.6a.7.7 0 00.7-.7V3.7a.7.7 0 00-.7-.7h-2.6z"/></svg>`,
  prev:    `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M3.3 1a.7.7 0 01.7.7v5.15l9.95-5.744a.7.7 0 011.05.606v12.575a.7.7 0 01-1.05.607L4 9.149V14.3a.7.7 0 01-.7.7H1.7a.7.7 0 01-.7-.7V1.7a.7.7 0 01.7-.7h1.6z"/></svg>`,
  next:    `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M12.7 1a.7.7 0 00-.7.7v5.15L2.05 1.107A.7.7 0 001 1.712v12.575a.7.7 0 001.05.607L12 9.149V14.3a.7.7 0 00.7.7h1.6a.7.7 0 00.7-.7V1.7a.7.7 0 00-.7-.7h-1.6z"/></svg>`,
  shuffle: `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M13.151.922a.75.75 0 10-1.06 1.06L13.109 3H11.16a3.75 3.75 0 00-2.873 1.34l-6.173 7.4A2.25 2.25 0 01.39 12.55H0v1.5h.391a3.75 3.75 0 002.873-1.34l6.173-7.4a2.25 2.25 0 011.724-.81h1.947l-1.017 1.018a.75.75 0 001.06 1.06L15.98 3.75 13.15.922zM.391 3.55H0v1.5h.391c.689 0 1.342.31 1.778.844l.61.732.972-1.166-.434-.52A3.75 3.75 0 00.39 3.55zM7.235 10.083l.972-1.166.434.52a2.25 2.25 0 001.778.844h1.946l-1.017-1.017a.75.75 0 011.06-1.061l2.829 2.828-2.829 2.828a.75.75 0 11-1.06-1.06L13.109 12H11.16a3.75 3.75 0 01-2.873-1.34l-.61-.732z"/></svg>`,
  repeat:  `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M0 4.75A3.75 3.75 0 013.75 1h8.5A3.75 3.75 0 0116 4.75v5a3.75 3.75 0 01-3.75 3.75H9.81l1.018 1.018a.75.75 0 11-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 011.06 1.06L9.811 12h2.439a2.25 2.25 0 002.25-2.25v-5a2.25 2.25 0 00-2.25-2.25h-8.5A2.25 2.25 0 001.5 4.75v5A2.25 2.25 0 003.75 12H5v1.5H3.75A3.75 3.75 0 010 9.75v-5z"/></svg>`,
  verified:`<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.814 1.0728a1.687 1.687 0 0 1 2.372 0l1.512 1.499a1.687 1.687 0 0 0 1.197.495l2.13-.002a1.687 1.687 0 0 1 1.677 1.677l-.002 2.13c0 .45.177.88.495 1.197l1.5 1.512a1.687 1.687 0 0 1 0 2.372l-1.5 1.512a1.687 1.687 0 0 0-.495 1.196l.002 2.131c0 .926-.75 1.677-1.676 1.677l-2.131-.002a1.687 1.687 0 0 0-1.197.495l-1.512 1.5a1.687 1.687 0 0 1-2.372 0l-1.512-1.5a1.687 1.687 0 0 0-1.196-.495l-2.131.002a1.687 1.687 0 0 1-1.677-1.677l.002-2.131a1.687 1.687 0 0 0-.495-1.196l-1.5-1.512a1.687 1.687 0 0 1 0-2.372l1.5-1.512a1.687 1.687 0 0 0 .495-1.197l-.002-2.13a1.687 1.687 0 0 1 1.677-1.677l2.131.002a1.687 1.687 0 0 0 1.196-.495l1.512-1.5zm6.585 8.4-1.06-1.06-5.78 5.78-3.123-3.124-1.06 1.06 4.182 4.184 6.84-6.84z"/></svg>`,
  heart:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.724 4.22A4.313 4.313 0 0112 2.236 4.313 4.313 0 014.236 8.5c0 4.43 7.764 12 7.764 12s7.764-7.57 7.764-12a4.313 4.313 0 00-4.04-4.28z" fill="none" stroke="currentColor" stroke-width="2"/></svg>`,
  more:    `<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="5" cy="12" r="2"/><circle cx="12" cy="12" r="2"/><circle cx="19" cy="12" r="2"/></svg>`,
  vol:     `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M9.741.85a.75.75 0 01.375.65v13a.75.75 0 01-1.125.65l-6.925-4a3.642 3.642 0 01-1.33-4.967 3.639 3.639 0 011.33-1.332l6.925-4a.75.75 0 01.75 0zm-6.924 5.3a2.139 2.139 0 000 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 010 4.88z"/></svg>`,
  queue:   `<svg viewBox="0 0 16 16" fill="currentColor"><path d="M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 013.5 1h9a2.5 2.5 0 010 5h-9A2.5 2.5 0 011 3.5zm2.5-1a1 1 0 000 2h9a1 1 0 100-2h-9z"/></svg>`,
  external:`<svg viewBox="0 0 16 16" fill="currentColor"><path d="M6 1v1.5h6.94L1 14.44 2.06 15.5 14 3.56V10.5h1.5V1H6z"/></svg>`,
  project: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/></svg>`,
  arxiv:   `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 3H7a2 2 0 00-2 2v14a2 2 0 002 2h10a2 2 0 002-2V8z"/><path d="M14 3v5h5M9 13h6M9 17h4"/></svg>`,
  github:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.2c-3.2.7-3.87-1.36-3.87-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.96 10.96 0 015.74 0c2.2-1.49 3.16-1.18 3.16-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.83 1.18 3.09 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.56C20.21 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5z"/></svg>`,
  dataset: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6"/></svg>`,
  sun:     `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4.2"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.6 4.6l1.8 1.8M17.6 17.6l1.8 1.8M4.6 19.4l1.8-1.8M17.6 6.4l1.8-1.8"/></svg>`,
  moon:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`,
};

// ============ Reader counter (counterapi.dev) ============
// One free public counter. /up increments + returns; bare URL just reads.
// We only increment once per browser session, then re-read on later visits.
const READER_NAMESPACE = "minghaofu-site";
const READER_KEY = "homepage";
const READER_CACHE_KEY = "mf-reader-count-v1";
const READER_SESSION_KEY = "mf-reader-hit-v1";

function getCachedReaderCount(){
  try{
    const v = parseInt(localStorage.getItem(READER_CACHE_KEY) || "0", 10);
    return isNaN(v) ? 0 : v;
  }catch(e){ return 0; }
}
function setCachedReaderCount(n){
  try{ localStorage.setItem(READER_CACHE_KEY, String(n)); }catch(e){}
}
function formatReaders(n){
  return Number(n).toLocaleString("en-US");
}
function readersText(){
  return formatReaders(me.monthlyReadersBase + getCachedReaderCount());
}
async function refreshReaderCount(){
  let alreadyHit = false;
  try{ alreadyHit = !!sessionStorage.getItem(READER_SESSION_KEY); }catch(e){}
  const path = alreadyHit
    ? `https://api.counterapi.dev/v1/${READER_NAMESPACE}/${READER_KEY}`
    : `https://api.counterapi.dev/v1/${READER_NAMESPACE}/${READER_KEY}/up`;
  try{
    const r = await fetch(path, { mode: "cors" });
    if (!r.ok) return;
    const d = await r.json();
    if (typeof d.count === "number"){
      setCachedReaderCount(d.count);
      try{ sessionStorage.setItem(READER_SESSION_KEY, "1"); }catch(e){}
      document.querySelectorAll("[data-readers]").forEach(el => {
        el.textContent = readersText();
      });
    }
  }catch(e){ /* offline, blocked, or API down — keep cached/base value */ }
}

// ============ Theme (light / dark) ============
const THEME_KEY = "mf-theme-v1";
function defaultThemeByClock(){
  const h = new Date().getHours();
  return (h >= 7 && h < 19) ? "light" : "dark";
}
function loadTheme(){
  try{
    const t = localStorage.getItem(THEME_KEY);
    if (t === "light" || t === "dark") return t;
  }catch(e){}
  return defaultThemeByClock();
}
function currentTheme(){
  return document.documentElement.getAttribute("data-theme") || defaultThemeByClock();
}
function applyTheme(t){
  document.documentElement.setAttribute("data-theme", t);
}
function setTheme(t){
  applyTheme(t);
  try{ localStorage.setItem(THEME_KEY, t); }catch(e){}
}
function toggleTheme(){
  setTheme(currentTheme() === "dark" ? "light" : "dark");
  renderTopbar();
}

// ============ Player state (persists across reloads) ============
const PLAYER_KEY = "mf-player-v1";
const player = loadPlayer();

function loadPlayer(){
  try{
    const s = localStorage.getItem(PLAYER_KEY);
    if (s) return { paperId: null, isPlaying: false, ...JSON.parse(s) };
  }catch(e){}
  return { paperId: null, isPlaying: false };
}
function savePlayer(){
  try{ localStorage.setItem(PLAYER_KEY, JSON.stringify(player)); }catch(e){}
}

function play(paperId){
  player.paperId = paperId;
  player.isPlaying = true;
  savePlayer();
  renderPlayer();
  highlightPlayingRows();
}
function pause(){
  player.isPlaying = false;
  savePlayer();
  renderPlayer();
  highlightPlayingRows();
}
function togglePlay(){
  if (!player.paperId){
    if (papers.length) play(papers[0].id);
    return;
  }
  if (player.isPlaying) pause();
  else { player.isPlaying = true; savePlayer(); renderPlayer(); highlightPlayingRows(); }
}
function nextTrack(dir = 1){
  const idx = papers.findIndex(p => p.id === player.paperId);
  if (idx === -1){ if (papers.length) play(papers[0].id); return; }
  const next = papers[(idx + dir + papers.length) % papers.length];
  play(next.id);
}

function highlightPlayingRows(){
  document.querySelectorAll(".track").forEach(el => {
    const id = el.getAttribute("data-paper-id");
    el.classList.toggle("playing", !!id && id === player.paperId && player.isPlaying);
  });
}

// ============ Helpers ============
function el(html){
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}
function escapeHtml(s){
  return String(s).replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[ch]));
}
function albumGradient(album){
  if (!album) return "linear-gradient(135deg,#333,#111)";
  const [a, b] = album.coverHex || ["#333","#111"];
  return `linear-gradient(135deg, ${a}, ${b})`;
}
function paperGradient(p){
  const al = albumById(p.albumId);
  return albumGradient(al);
}
function thumbHTML(p, sizeClass = ""){
  if (p.thumb) return `<img class="thumb ${sizeClass}" src="${p.thumb}" alt="">`;
  const initial = (p.title || "?").trim()[0];
  return `<div class="thumb-fallback ${sizeClass}" style="background:${paperGradient(p)}">${escapeHtml(initial)}</div>`;
}
function coverHTML(album){
  if (album.cover) return `<div class="album-card-cover has-image" style="background-image:url('${album.cover}')">${escapeHtml(album.title)}</div>`;
  return `<div class="album-card-cover" style="background:${albumGradient(album)}">${escapeHtml(album.title)}</div>`;
}
function debounce(fn, ms){
  let t; return (...a) => { clearTimeout(t); t = setTimeout(() => fn(...a), ms); };
}

// ============ Router ============
function parseRoute(){
  const h = location.hash.replace(/^#\/?/, "");
  if (!h) return { name: "home" };
  if (h.startsWith("album/")) return { name: "album", id: h.slice(6) };
  if (h.startsWith("blogs"))  return { name: "blogs" };
  if (h.startsWith("search")) {
    const q = new URLSearchParams(h.split("?")[1] || "").get("q") || "";
    return { name: "search", q };
  }
  return { name: "home" };
}
function navigate(hash){
  if (location.hash === hash) renderRoute();
  else location.hash = hash;
}

function renderRoute(){
  const r = parseRoute();
  const view = document.getElementById("view");
  view.scrollTop = 0;
  view.innerHTML = "";
  if (r.name === "album")       renderAlbum(view, r.id);
  else if (r.name === "search") renderSearch(view, r.q);
  else if (r.name === "blogs")  renderBlogs(view);
  else                          renderHome(view);
  renderSidebar();
  highlightPlayingRows();
}

// ============ Sidebar ============
function renderSidebar(){
  const r = parseRoute();
  const side = document.getElementById("sidebar");
  side.innerHTML = `
    <nav class="side-nav">
      <button class="side-nav-item ${r.name === "home" ? "active" : ""}" data-nav="home">
        ${ICON.home}<span class="label">Home</span>
      </button>
      <button class="side-nav-item ${r.name === "blogs" ? "active" : ""}" data-nav="blogs">
        ${ICON.library}<span class="label">Blogs</span>
      </button>
    </nav>
  `;
  side.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", () => {
      const n = btn.getAttribute("data-nav");
      navigate(n === "blogs" ? "#/blogs" : "#/");
    });
  });
}

// ============ Topbar ============
function renderTopbar(){
  const top = document.getElementById("topbar");
  top.innerHTML = `
    <div class="nav-arrows">
      <button class="nav-arrow" data-nav="back" aria-label="Back">${ICON.back}</button>
      <button class="nav-arrow" data-nav="fwd"  aria-label="Forward">${ICON.fwd}</button>
    </div>
    <div class="search-box">
      ${ICON.search.replace("<svg ", "<svg class='icon' ")}
      <input id="topbar-search" type="text" placeholder="What do you want to read?" />
    </div>
    <div class="topbar-spacer"></div>
    <button class="theme-toggle" data-act="theme" aria-label="Toggle light/dark theme" title="${currentTheme() === "dark" ? "Switch to light" : "Switch to dark"}">
      ${currentTheme() === "dark" ? ICON.sun : ICON.moon}
    </button>
    <a class="profile-chip" href="${me.socials.find(s => s.label === "Email")?.href || "#"}">
      <img src="${me.photo}" alt="${escapeHtml(me.name)}">
      <span>${escapeHtml(me.name)}</span>
    </a>
  `;
  top.querySelector('[data-nav="back"]').addEventListener("click", () => history.back());
  top.querySelector('[data-nav="fwd"]').addEventListener("click", () => history.forward());
  top.querySelector('[data-act="theme"]')?.addEventListener("click", toggleTheme);
  const input = top.querySelector("#topbar-search");
  const r = parseRoute();
  if (r.name === "search") input.value = r.q || "";
  input.addEventListener("input", debounce(e => {
    const q = e.target.value.trim();
    if (q) navigate("#/search?q=" + encodeURIComponent(q));
    else if (parseRoute().name === "search") navigate("#/");
  }, 180));
}

// ============ Home view ============
function renderHome(view){
  const top = popularPapers(5);
  const banner = me.banner || me.photo;
  view.innerHTML = `
    <section class="view-hero">
      <div class="view-hero-bg" style="background-image:url('${banner}')"></div>
      <div class="view-hero-text">
        <div class="hero-eyebrow">
          <span class="verified" title="Verified researcher">${ICON.verified}</span>
          <span>Verified Researcher</span>
        </div>
        <h1 class="hero-title">${escapeHtml(me.name)}</h1>
        <p class="hero-tagline">${escapeHtml(me.tagline)}</p>
        <div class="hero-meta">
          <span><span data-readers>${readersText()}</span> monthly readers</span>
        </div>
      </div>
    </section>

    <div class="view-inner">
      <div class="view-actions">
        <button class="play-fab lg" id="hero-play" aria-label="Play top track">${ICON.play}</button>
        <button class="follow-btn" id="follow-btn">Follow</button>
        <button class="icon-btn lg" aria-label="More">${ICON.more}</button>
      </div>

      <section class="section" id="popular-section">
        <div class="section-head">
          <h2 class="section-title">Popular</h2>
        </div>
        <div class="tracklist popular" id="popular-list">
          ${top.map((p,i) => popularRowHTML(p, i+1)).join("")}
        </div>
        ${papers.length > top.length ? `<div style="margin-top:8px"><button class="section-link" id="popular-toggle">See more</button></div>` : ""}
      </section>

      <section class="section">
        <div class="section-head">
          <h2 class="section-title">Discography</h2>
          <a class="section-link" href="#/search?q=">Show all</a>
        </div>
        <div class="filter-chips" id="disco-chips">
          <button class="chip active" data-filter="all">Popular releases</button>
          <button class="chip" data-filter="album">Albums</button>
        </div>
        <div class="card-grid" id="disco-grid">
          ${albums.map(a => albumCardHTML(a)).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2 class="section-title">About</h2></div>
        <div class="about-card">
          <img src="${me.photo}" alt="${escapeHtml(me.name)}">
          <div>
            <h3>About</h3>
            <div class="name">${escapeHtml(me.name)}</div>
            <div class="role">${escapeHtml(me.role)}</div>
            <div class="bio">${me.bio.map(p => `<p>${p}</p>`).join("")}</div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2 class="section-title">News</h2></div>
        <div class="news-list">
          ${news.map(n => `
            <div class="news-row">
              <div class="when">${escapeHtml(n.date)}</div>
              <div class="what">${n.html}</div>
            </div>`).join("")}
        </div>
      </section>

      <section class="section timeline-section">
        <div class="timeline-col">
          <h3 class="section-title">Education</h3>
          ${education.map(e => `
            <div class="timeline-row">
              <img src="${e.logo}" alt="">
              <div>
                <div class="where">${escapeHtml(e.where)}</div>
                <div class="what">${escapeHtml(e.what)}</div>
                ${e.advisor ? `<div class="advisor">Advised by ${e.advisor}</div>` : ""}
              </div>
              <div class="when">${escapeHtml(e.when)}</div>
            </div>`).join("")}
        </div>
        <div class="timeline-col">
          <h3 class="section-title">Experience</h3>
          ${experience.map(e => `
            <div class="timeline-row ${e.logo ? "" : "no-logo"}">
              ${e.logo ? `<img src="${e.logo}" alt="">` : ""}
              <div>
                <div class="where">${escapeHtml(e.where)}</div>
                <div class="what">${escapeHtml(e.what)}</div>
              </div>
              <div class="when">${escapeHtml(e.when)}</div>
            </div>`).join("")}
        </div>
      </section>

      <section class="section">
        <div class="section-head"><h2 class="section-title">Service</h2></div>
        <div class="service-card">
          ${service.map(s => `<p><span class="label">${escapeHtml(s.label)}:</span>${escapeHtml(s.value)}</p>`).join("")}
        </div>
      </section>
    </div>
  `;
  bindTrackHandlers(view);
  bindAlbumCardHandlers(view);
  view.querySelector("#hero-play")?.addEventListener("click", () => {
    const target = popularPapers(1)[0] || papers[0];
    if (target) play(target.id);
  });
  // "See more" toggle on Popular: expand to all papers, then collapse back.
  const popToggle = view.querySelector("#popular-toggle");
  const popList = view.querySelector("#popular-list");
  let expanded = false;
  popToggle?.addEventListener("click", () => {
    expanded = !expanded;
    const rows = expanded ? papers : popularPapers(5);
    popList.innerHTML = rows.map((p,i) => popularRowHTML(p, i+1)).join("");
    bindTrackHandlers(popList);
    highlightPlayingRows();
    popToggle.textContent = expanded ? "Show less" : "See more";
  });
  // Refresh visit counter (first hit per session = increment, then read-only).
  refreshReaderCount();
  const followBtn = view.querySelector("#follow-btn");
  followBtn?.addEventListener("click", () => {
    const following = followBtn.classList.toggle("following");
    followBtn.textContent = following ? "Following" : "Follow";
  });
  // Discography filter chips
  const chipBar = view.querySelector("#disco-chips");
  const grid = view.querySelector("#disco-grid");
  chipBar?.querySelectorAll(".chip").forEach(btn => {
    btn.addEventListener("click", () => {
      chipBar.querySelectorAll(".chip").forEach(c => c.classList.remove("active"));
      btn.classList.add("active");
      const f = btn.getAttribute("data-filter");
      const list = f === "all" ? albums : albums.filter(a => (a.tag || "album") === f);
      grid.innerHTML = list.map(a => albumCardHTML(a)).join("");
      bindAlbumCardHandlers(grid);
    });
  });
}

// ============ Album view ============
function renderAlbum(view, id){
  const album = albumById(id);
  if (!album){
    view.innerHTML = `<div class="empty"><h3>Album not found</h3><p>Try one from your library.</p></div>`;
    return;
  }
  const tracks = papersByAlbum(album.id);
  const bg = album.cover
    ? `background-image:url('${album.cover}')`
    : `background:${albumGradient(album)}`;
  const tagLabel = album.tag === "single" ? "Single" : "Album";
  view.innerHTML = `
    <section class="view-hero album-hero">
      <div class="view-hero-bg" style="${bg}"></div>
      <div class="view-hero-text">
        <div class="hero-eyebrow"><span>${tagLabel}</span></div>
        <h1 class="hero-title album">${escapeHtml(album.title)}</h1>
        <div class="hero-meta">
          <strong>${escapeHtml(me.name)}</strong>
          <span class="dot">•</span>
          <span>${escapeHtml(String(album.year))}</span>
          <span class="dot">•</span>
          <span>${tracks.length} ${tracks.length === 1 ? "track" : "tracks"}</span>
        </div>
        ${album.blurb ? `<p style="margin-top:10px;color:rgba(255,255,255,.9);font-size:14px;max-width:560px;">${escapeHtml(album.blurb)}</p>` : ""}
      </div>
    </section>

    <div class="view-inner">
      <div class="view-actions">
        <button class="play-fab" id="album-play" aria-label="Play album">${ICON.play}</button>
        <button class="icon-btn lg" aria-label="Like">${ICON.heart}</button>
        <button class="icon-btn lg" aria-label="More">${ICON.more}</button>
      </div>

      ${tracks.length ? `
        <div class="tracklist">
          <div class="tracklist-header">
            <div class="col-num">#</div>
            <div class="col-title">Title</div>
            <div class="col-venue">Venue</div>
            <div class="col-year">Year</div>
            <div class="col-actions" aria-hidden="true"></div>
          </div>
          ${tracks.map((p,i) => trackRowHTML(p, i+1, { showAlbum:false, showYear:true })).join("")}
        </div>
      ` : `<div class="empty"><h3>No tracks yet</h3><p>This album is still in production.</p></div>`}
    </div>
  `;
  bindTrackHandlers(view);
  view.querySelector("#album-play")?.addEventListener("click", () => {
    if (tracks[0]) play(tracks[0].id);
  });
}

// ============ Search view ============
function renderSearch(view, q){
  const query = (q || "").trim().toLowerCase();
  const matchPapers = !query ? [] : papers.filter(p =>
    p.title.toLowerCase().includes(query) ||
    p.authors.toLowerCase().includes(query) ||
    p.venue.toLowerCase().includes(query) ||
    String(p.year).includes(query)
  );
  const matchAlbums = !query ? albums : albums.filter(a =>
    a.title.toLowerCase().includes(query) ||
    (a.blurb || "").toLowerCase().includes(query)
  );
  view.innerHTML = `
    <div class="view-inner" style="padding-top:24px">
      ${!query ? `
        <section class="section">
          <div class="section-head"><h2 class="section-title">Browse all</h2></div>
          <div class="card-grid">${albums.map(a => albumCardHTML(a)).join("")}</div>
        </section>
      ` : `
        ${matchAlbums.length ? `
          <section class="section">
            <div class="section-head"><h2 class="section-title">Albums</h2></div>
            <div class="card-grid">${matchAlbums.map(a => albumCardHTML(a)).join("")}</div>
          </section>` : ""}
        ${matchPapers.length ? `
          <section class="section">
            <div class="section-head"><h2 class="section-title">Papers</h2></div>
            <div class="tracklist">
              <div class="tracklist-header">
                <div class="col-num">#</div>
                <div class="col-title">Title</div>
                <div class="col-album">Album</div>
                <div class="col-venue">Venue</div>
                <div class="col-actions" aria-hidden="true"></div>
              </div>
              ${matchPapers.map((p,i) => trackRowHTML(p, i+1, { showAlbum:true })).join("")}
            </div>
          </section>` : ""}
        ${(!matchAlbums.length && !matchPapers.length) ? `
          <div class="empty">
            <h3>No results found for "${escapeHtml(q)}"</h3>
            <p>Try different keywords or check the album list.</p>
          </div>` : ""}
      `}
    </div>
  `;
  bindTrackHandlers(view);
  bindAlbumCardHandlers(view);
}

// ============ Blogs view ============
function renderBlogs(view){
  const heroBg = blogs[0]
    ? `background:linear-gradient(135deg, ${blogs[0].coverHex[0]}, ${blogs[0].coverHex[1]})`
    : `background:linear-gradient(135deg,#3a1c5a,#7a3da8)`;
  view.innerHTML = `
    <section class="view-hero album-hero">
      <div class="view-hero-bg" style="${heroBg}"></div>
      <div class="view-hero-text">
        <div class="hero-eyebrow"><span>Playlist</span></div>
        <h1 class="hero-title album">Blogs</h1>
        <div class="hero-meta">
          <strong>${escapeHtml(me.name)}</strong>
          <span class="dot">•</span>
          <span>${blogs.length} ${blogs.length === 1 ? "post" : "posts"}</span>
          <span class="dot">•</span>
          <span>Liner notes</span>
        </div>
      </div>
    </section>

    <div class="view-inner">
      ${blogs.length ? `
        <div class="tracklist">
          <div class="tracklist-header">
            <div class="col-num">#</div>
            <div class="col-title">Title</div>
            <div class="col-venue">Posted</div>
            <div class="col-actions" aria-hidden="true"></div>
          </div>
          ${blogs.map((b,i) => `
            <a class="track" href="${b.href}">
              <div class="col-num"><span class="num-text">${i+1}</span></div>
              <div class="col-title">
                <div class="thumb-fallback" style="background:linear-gradient(135deg, ${b.coverHex[0]}, ${b.coverHex[1]})">B</div>
                <div class="meta">
                  <div class="t">${escapeHtml(b.title)}</div>
                  <div class="a">${escapeHtml(b.desc)}</div>
                </div>
              </div>
              <div class="col-venue">${escapeHtml(b.date)}</div>
              <div class="col-actions"></div>
            </a>
          `).join("")}
        </div>
      ` : `<div class="empty"><h3>No posts yet</h3></div>`}
    </div>
  `;
}

// ============ Track row ============
function linkButtonsHTML(p){
  const L = p.links || {};
  const btns = [];
  if (L.project) btns.push(`<a class="link-btn-icon" data-link href="${L.project}" target="_blank" rel="noopener" title="Project page" aria-label="Project page">${ICON.project}</a>`);
  if (L.arxiv)   btns.push(`<a class="link-btn-icon" data-link href="${L.arxiv}"   target="_blank" rel="noopener" title="arXiv / PDF"  aria-label="arXiv / PDF">${ICON.arxiv}</a>`);
  if (L.code)    btns.push(`<a class="link-btn-icon" data-link href="${L.code}"    target="_blank" rel="noopener" title="Code"         aria-label="Code">${ICON.github}</a>`);
  if (L.dataset) btns.push(`<a class="link-btn-icon" data-link href="${L.dataset}" target="_blank" rel="noopener" title="Dataset"      aria-label="Dataset">${ICON.dataset}</a>`);
  return `<div class="col-actions">${btns.join("")}</div>`;
}

// Popular row: # | thumb | title+venue badge | actions
function popularRowHTML(p, num){
  const isPlaying = player.paperId === p.id && player.isPlaying;
  const isAccepted = !/preprint/i.test(p.venue);
  const venueClass = isAccepted ? "venue-badge accepted" : "venue-badge";
  return `
    <div class="track${isPlaying ? " playing" : ""}" role="button" tabindex="0" data-paper-id="${p.id}">
      <div class="col-num"><span class="num-text">${num}</span><span class="num-play">${ICON.play}</span></div>
      <div class="col-thumb">${thumbHTML(p)}</div>
      <div class="col-title">
        <div class="meta">
          <div class="t">${escapeHtml(p.title)}</div>
          <div class="a">${p.authors}</div>
          <div class="meta-row"><span class="${venueClass}">${escapeHtml(p.venue)}</span></div>
        </div>
      </div>
      ${linkButtonsHTML(p)}
    </div>
  `;
}

function trackRowHTML(p, num, opts = {}){
  const { showAlbum = false, showYear = false } = opts;
  const al = albumById(p.albumId);
  const isPlaying = player.paperId === p.id && player.isPlaying;
  const cols = [];
  cols.push(`<div class="col-num"><span class="num-text">${num}</span><span class="num-play">${ICON.play}</span></div>`);
  cols.push(`
    <div class="col-title">
      ${thumbHTML(p)}
      <div class="meta">
        <div class="t">${escapeHtml(p.title)}</div>
        <div class="a">${p.authors}</div>
      </div>
    </div>
  `);
  if (showAlbum){
    cols.push(`<div class="col-album">${al ? `<a data-album-link="${al.id}">${escapeHtml(al.title)}</a>` : "—"}</div>`);
  }
  cols.push(`<div class="col-venue">${escapeHtml(p.venue)}</div>`);
  if (showYear){
    cols.push(`<div class="col-year">${escapeHtml(String(p.year))}</div>`);
  }
  cols.push(linkButtonsHTML(p));
  return `<div class="track${isPlaying ? " playing" : ""}" role="button" tabindex="0" data-paper-id="${p.id}">${cols.join("")}</div>`;
}

function bindTrackHandlers(root){
  root.querySelectorAll(".track").forEach(btn => {
    const trigger = e => {
      // link buttons (project/arxiv/code/dataset) shouldn't trigger play
      const linkBtn = e.target.closest("[data-link]");
      if (linkBtn){ e.stopPropagation(); return; }
      // album link inside row shouldn't trigger play either
      const a = e.target.closest("[data-album-link]");
      if (a){
        e.stopPropagation();
        navigate("#/album/" + a.getAttribute("data-album-link"));
        return;
      }
      const id = btn.getAttribute("data-paper-id");
      if (id) play(id);
    };
    btn.addEventListener("click", trigger);
    btn.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " "){
        // ignore when focus is on a child link
        if (e.target.closest("[data-link],[data-album-link]")) return;
        e.preventDefault();
        trigger(e);
      }
    });
  });
}

function albumCardHTML(a){
  const tagLabel = a.tag === "single" ? "Single" : "Album";
  return `
    <button class="album-card" data-album="${a.id}">
      ${coverHTML(a)}
      <div class="album-card-title">${escapeHtml(a.title)}</div>
      <div class="album-card-sub">${a.year} · ${tagLabel}</div>
      <span class="album-card-play" aria-label="Open album">${ICON.play}</span>
    </button>
  `;
}
function bindAlbumCardHandlers(root){
  root.querySelectorAll("[data-album]").forEach(btn => {
    btn.addEventListener("click", () => navigate("#/album/" + btn.getAttribute("data-album")));
  });
}

// ============ Player bar ============
function renderPlayer(){
  const p = player.paperId ? paperById(player.paperId) : null;
  const node = document.getElementById("player");
  node.innerHTML = `
    <div class="player-left">
      ${p ? thumbHTML(p) : `<div class="thumb-fallback" style="background:#222">♪</div>`}
      <div class="pl-meta">
        <div class="pl-title">${p ? escapeHtml(p.title) : "Select a paper to read"}</div>
        <div class="pl-sub">${p ? p.authors : escapeHtml(me.name)}</div>
      </div>
    </div>

    <div class="player-center">
      <div class="player-controls">
        <button class="icon-btn" data-act="prev" aria-label="Previous">${ICON.prev}</button>
        <button class="play-pause" data-act="toggle" aria-label="${player.isPlaying ? "Pause" : "Play"}">${player.isPlaying ? ICON.pause : ICON.play}</button>
        <button class="icon-btn" data-act="next" aria-label="Next">${ICON.next}</button>
      </div>
    </div>

    <div class="player-right"></div>
  `;
  node.querySelector('[data-act="toggle"]')?.addEventListener("click", togglePlay);
  node.querySelector('[data-act="prev"]')?.addEventListener("click", () => nextTrack(-1));
  node.querySelector('[data-act="next"]')?.addEventListener("click", () => nextTrack(1));
}

// ============ Boot ============
// Apply theme as early as possible to avoid a flash. Boot happens at DOMContentLoaded;
// we also apply at module-load time so the first paint already has the right palette.
applyTheme(loadTheme());

function boot(){
  renderTopbar();
  renderSidebar();
  renderRoute();
  renderPlayer();
  window.addEventListener("hashchange", renderRoute);
}
document.addEventListener("DOMContentLoaded", boot);

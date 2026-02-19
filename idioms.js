// idioms.js — Daily idiom home page logic
import idiomsDB from './idioms-db.js';

const { getSaved, setSaved, setSaveBtnState, getMeta, setMeta } = window.SharedApp;

// ── Deterministic daily index ─────────────────────────────────────────
function getDayIndex() {
  const today = new Date();
  const daysSinceEpoch = Math.floor(today.getTime() / 86_400_000);
  return daysSinceEpoch % idiomsDB.length;
}

// ── Shuffle once per day: generate a daily-seeded order ──────────────
function seededShuffle(arr, seed) {
  // Simple seeded LCG
  let s = seed;
  const rand = () => { s = (s * 1664525 + 1013904223) & 0xffffffff; return (s >>> 0) / 0xffffffff; };
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Build daily order (shuffled from today's date seed)
const today = new Date();
const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
const dailyOrder = seededShuffle(idiomsDB, dateSeed);

// ── State ─────────────────────────────────────────────────────────────
let currentIndex = 0; // index within dailyOrder

// ── Elements ──────────────────────────────────────────────────────────
const idiomGermanEl  = document.getElementById('idiomGerman');
const idiomLiteral   = document.getElementById('idiomLiteral');
const idiomCategory  = document.getElementById('idiomCategory');
const idiomMeaning   = document.getElementById('idiomMeaning');
const idiomExample   = document.getElementById('idiomExample');
const typeBadge      = document.getElementById('typeBadge');
const dateText       = document.getElementById('dateText');
const counterNum     = document.getElementById('counterNum');
const counterTotal   = document.getElementById('counterTotal');
const progressFill   = document.getElementById('progressFill');
const btnPrev        = document.getElementById('btnPrev');
const btnNext        = document.getElementById('btnNext');
const btnSave        = document.getElementById('btnSaveIdiom');
const saveHeart      = document.getElementById('saveHeart');
const saveLabel      = document.getElementById('saveLabel');

// ── Date display ──────────────────────────────────────────────────────
const dateFormatter = new Intl.DateTimeFormat('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
if (dateText) dateText.textContent = dateFormatter.format(today);

// ── Render ────────────────────────────────────────────────────────────
const TYPE_LABELS = { idiom: 'Idiom', proverb: 'Sprichwort', saying: 'Redewendung' };
const CAT_EMOJI = {
  everyday: '☕', attitude: '🧠', problem: '🔧', mistakes: '❌', distance: '📍',
  luck: '🍀', secrets: '🤫', society: '👥', action: '⚡', futility: '🌀',
  money: '💶', work: '💼', family: '👨‍👩‍👧', learning: '📚', honesty: '✅',
  relationships: '❤️', hope: '🌅', time: '⏰', patience: '⌛', communication: '💬',
  conflict: '⚔️', fear: '😨', courage: '🦁', humor: '😄', happiness: '🌟',
  food: '🍽️', wisdom: '🦉', culture: '🌍', independence: '🦅', anger: '🔥',
  emotion: '💭', celebration: '🎉', caution: '⚠️', laziness: '🛋️', love: '💕',
  death: '🌑', age: '🎂', surprise: '😲', indifference: '🤷', deception: '🃏',
  persistence: '💪', fate: '⭐', default: '✦'
};

function getCatEmoji(cat) { return CAT_EMOJI[cat] || CAT_EMOJI.default; }

function currentIdiom() { return dailyOrder[currentIndex]; }

function getSaveId(idiom) { return `idiom:${idiom.id}`; }

function updateSaveBtn(idiom) {
  const id = getSaveId(idiom);
  const saved = getSaved().has(id);
  saveHeart.textContent = saved ? '♥' : '♡';
  saveLabel.textContent = saved ? 'Saved' : 'Save';
  btnSave.classList.toggle('saved', saved);
}

function render(animate = true) {
  const idiom = currentIdiom();
  if (!idiom) return;

  // Animate out then in
  if (animate) {
    idiomGermanEl.classList.add('fade-out');
    setTimeout(() => {
      applyRender(idiom);
      idiomGermanEl.classList.remove('fade-out');
      idiomGermanEl.classList.add('fade-in');
      setTimeout(() => idiomGermanEl.classList.remove('fade-in'), 400);
    }, 200);
  } else {
    applyRender(idiom);
  }

  // Counter & progress
  counterNum.textContent = currentIndex + 1;
  counterTotal.textContent = `of ${dailyOrder.length}`;
  progressFill.style.width = `${((currentIndex + 1) / dailyOrder.length) * 100}%`;
  updateSaveBtn(idiom);
}

function applyRender(idiom) {
  idiomGermanEl.textContent = idiom.german;

  idiomLiteral.textContent  = idiom.literal;
  idiomMeaning.textContent  = idiom.meaning;
  idiomExample.textContent  = idiom.example;

  const catText = idiom.category
    ? `${getCatEmoji(idiom.category)} ${idiom.category.charAt(0).toUpperCase() + idiom.category.slice(1)}`
    : '—';
  idiomCategory.textContent = catText;
  typeBadge.textContent = TYPE_LABELS[idiom.type] || idiom.type;
}

// ── Navigation ────────────────────────────────────────────────────────
function prev() {
  currentIndex = (currentIndex - 1 + dailyOrder.length) % dailyOrder.length;
  render();
}

function next() {
  currentIndex = (currentIndex + 1) % dailyOrder.length;
  render();
}

btnPrev.addEventListener('click', prev);
btnNext.addEventListener('click', next);

// ── Save ──────────────────────────────────────────────────────────────
btnSave.addEventListener('click', () => {
  const idiom = currentIdiom();
  const id = getSaveId(idiom);
  const s = getSaved();
  const m = getMeta();
  if (s.has(id)) {
    s.delete(id);
    delete m[id];
  } else {
    s.add(id);
    m[id] = { label: idiom.german, translation: idiom.meaning.slice(0, 60), url: 'index.html' };
  }
  setSaved(s);
  setMeta(m);
  updateSaveBtn(idiom);
});

// ── Keyboard ──────────────────────────────────────────────────────────
document.addEventListener('keydown', (e) => {
  if (e.target.tagName === 'INPUT') return;
  if (e.key === 'ArrowLeft')  { e.preventDefault(); prev(); }
  if (e.key === 'ArrowRight') { e.preventDefault(); next(); }
  if (e.key === 's' || e.key === 'S') { btnSave.click(); }
});

// ── Swipe support ─────────────────────────────────────────────────────
let touchStartX = 0;
document.addEventListener('touchstart', (e) => { touchStartX = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend', (e) => {
  const dx = e.changedTouches[0].clientX - touchStartX;
  if (Math.abs(dx) > 60) { dx < 0 ? next() : prev(); }
}, { passive: true });

// ── Register for global search ────────────────────────────────────────
if (window.SharedApp?.registerSearchItems) {
  const items = idiomsDB.map((idiom, i) => ({
    id: `idiom:${idiom.id}`,
    label: idiom.german,
    translation: idiom.meaning.slice(0, 60),
    index: i,
    level: idiom.type,
    category: 'Idioms',
    url: 'index.html',
  }));
  window.SharedApp.registerSearchItems?.(items);
}

// ── Init ──────────────────────────────────────────────────────────────
// Start at today's phrase (first in daily order)
currentIndex = 0;
render(false);

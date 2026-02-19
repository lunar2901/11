// idioms.js — Daily idiom home page logic
import idiomsDB from './idioms-db.js';

// Cross-page imports so global search finds everything from the home page
import verbsA1 from './js/verbs-db-a1.js';
import verbsA2 from './js/verbs-db-a2.js';
import verbsB1 from './js/verbs-db-b1.js';
import verbsB2 from './js/verbs-db-b2.js';
import verbsC1 from './js/verbs-db-c1.js';
import nounsA1 from './js/nouns-db-a1.js';
import nounsA2 from './js/nouns-db-a2.js';
import nounsB1 from './js/nouns-db-b1.js';
import nounsB2 from './js/nouns-db-b2.js';
import nounsC1 from './js/nouns-db-c1.js';
import adjectivesA1 from './js/adjectives-db-a1.js';
import adjectivesA2 from './js/adjectives-db-a2.js';
import adjectivesB1 from './js/adjectives-db-b1.js';
import adjectivesB2 from './js/adjectives-db-b2.js';
import adjectivesC1 from './js/adjectives-db-c1.js';
import adverbsA1 from './js/adverbs-db-a1.js';
import adverbsA2 from './js/adverbs-db-a2.js';
import adverbsB1 from './js/adverbs-db-b1.js';
import adverbsB2 from './js/adverbs-db-b2.js';
import adverbsC1 from './js/adverbs-db-c1.js';

/* ── Seeded daily shuffle ─────────────────────────────────────────── */
function seededShuffle(arr, seed) {
  let s = seed >>> 0;
  const rand = () => { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 0xffffffff; };
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const today    = new Date();
const dateSeed = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
const order    = seededShuffle(idiomsDB, dateSeed);

let idx = 0;

/* ── DOM refs ────────────────────────────────────────────────────── */
const $           = id => document.getElementById(id);
const idiomTextEl = $('idiomText');
const infoLitEl   = $('infoLiteral');
const infoCatEl   = $('infoCategory');
const infoMeanEl  = $('infoMeaning');
const infoExEl    = $('infoExample');
const typePillEl  = $('typePill');
const heroDateEl  = $('heroDate');
const cNumEl      = $('cNum');
const cTotalEl    = $('cTotal');
const progressEl  = $('progressFill');
const btnPrev     = $('btnPrev');
const btnNext     = $('btnNext');
const btnSave     = $('btnSaveIdiom');
const saveHeartEl = $('saveHeart');
const saveLabelEl = $('saveLabel');

/* ── Date label ──────────────────────────────────────────────────── */
if (heroDateEl) {
  heroDateEl.textContent = new Intl.DateTimeFormat('en-GB', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  }).format(today);
}

/* ── Helpers ─────────────────────────────────────────────────────── */
const TYPE_LABEL = { idiom: 'Idiom', proverb: 'Sprichwort', saying: 'Redewendung' };
const CAT_EMOJI  = {
  everyday:'☕', attitude:'🧠', problem:'🔧', mistakes:'❌', distance:'📍',
  luck:'🍀', secrets:'🤫', society:'👥', action:'⚡', futility:'🌀',
  money:'💶', work:'💼', family:'👨‍👩‍👧', learning:'📚', honesty:'✅',
  relationships:'❤️', hope:'🌅', time:'⏰', patience:'⌛', communication:'💬',
  conflict:'⚔️', fear:'😨', courage:'🦁', humor:'😄', happiness:'🌟',
  food:'🍽️', wisdom:'🦉', culture:'🌍', independence:'🦅', anger:'🔥',
  emotion:'💭', celebration:'🎉', caution:'⚠️', laziness:'🛋️', love:'💕',
  death:'🌑', age:'🎂', surprise:'😲', indifference:'🤷', deception:'🃏',
  persistence:'💪', fate:'⭐', default:'✦'
};
const catEmoji  = c => CAT_EMOJI[c] || CAT_EMOJI.default;
const getSaveId = item => `idiom:${item.id}`;

function updateSave(item) {
  if (!btnSave) return;
  const saved = SharedApp.getSaved().has(getSaveId(item));
  if (saveHeartEl) saveHeartEl.textContent = saved ? '♥' : '♡';
  if (saveLabelEl) saveLabelEl.textContent  = saved ? 'Saved' : 'Save';
  btnSave.classList.toggle('saved', saved);
}

/* ── Render ──────────────────────────────────────────────────────── */
function render(animate) {
  const item = order[idx];
  if (!item) return;

  const apply = () => {
    if (idiomTextEl) idiomTextEl.textContent = item.german;
    if (infoLitEl)   infoLitEl.textContent   = item.literal;
    if (infoCatEl)   infoCatEl.textContent   = `${catEmoji(item.category)} ${item.category || '—'}`;
    if (infoMeanEl)  infoMeanEl.textContent  = item.meaning;
    if (infoExEl)    infoExEl.textContent    = item.example;
    if (typePillEl)  typePillEl.textContent  = TYPE_LABEL[item.type] || item.type || 'Phrase';
  };

  if (animate && idiomTextEl) {
    idiomTextEl.classList.add('anim-out');
    setTimeout(() => { apply(); idiomTextEl.classList.remove('anim-out'); }, 230);
  } else {
    apply();
  }

  if (cNumEl)     cNumEl.textContent     = idx + 1;
  if (cTotalEl)   cTotalEl.textContent   = `of ${order.length}`;
  if (progressEl) progressEl.style.width = `${((idx + 1) / order.length) * 100}%`;
  updateSave(item);
}

/* ── Navigation ──────────────────────────────────────────────────── */
const prev = () => { idx = (idx - 1 + order.length) % order.length; render(true); };
const next = () => { idx = (idx + 1) % order.length; render(true); };

btnPrev?.addEventListener('click', prev);
btnNext?.addEventListener('click', next);

/* ── Save ────────────────────────────────────────────────────────── */
btnSave?.addEventListener('click', () => {
  const item = order[idx];
  const id   = getSaveId(item);
  const s    = SharedApp.getSaved();
  const m    = SharedApp.getMeta();
  if (s.has(id)) { s.delete(id); delete m[id]; }
  else { s.add(id); m[id] = { label: item.german, translation: item.meaning.slice(0, 70), url: 'index.html', category: 'Idioms' }; }
  SharedApp.setSaved(s);
  SharedApp.setMeta(m);
  updateSave(item);
});

/* ── Keyboard ────────────────────────────────────────────────────── */
document.addEventListener('keydown', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft')               { e.preventDefault(); prev(); }
  else if (e.key === 'ArrowRight')         { e.preventDefault(); next(); }
  else if (e.key === 's' || e.key === 'S') { btnSave?.click(); }
});

/* ── Swipe ───────────────────────────────────────────────────────── */
let tx = 0;
document.addEventListener('touchstart', e => { tx = e.touches[0].clientX; }, { passive: true });
document.addEventListener('touchend',   e => {
  const dx = e.changedTouches[0].clientX - tx;
  if (Math.abs(dx) > 55) { dx < 0 ? next() : prev(); }
}, { passive: true });

/* ── Register ALL items in search index ──────────────────────────── */
// Idiom items (this page — clicking navigates here via #jump)
const idiomItems = idiomsDB.map((item, i) => ({
  id: getSaveId(item),
  label: item.german,
  translation: item.meaning.slice(0, 60),
  index: i,
  level: item.type || 'idiom',
  category: 'Idioms',
  url: 'index.html',
}));

// Cross-page word items — clicking navigates to the correct page
const vDB   = { a1: verbsA1, a2: verbsA2, b1: verbsB1, b2: verbsB2, c1: verbsC1 };
const nDB   = { a1: nounsA1, a2: nounsA2, b1: nounsB1, b2: nounsB2, c1: nounsC1 };
const adjDB = { a1: adjectivesA1, a2: adjectivesA2, b1: adjectivesB1, b2: adjectivesB2, c1: adjectivesC1 };
const advDB = { a1: adverbsA1, a2: adverbsA2, b1: adverbsB1, b2: adverbsB2, c1: adverbsC1 };

const verbItems = Object.keys(vDB).flatMap(l =>
  (vDB[l] || []).map((v, i) => ({
    id: `verbs:${l}:${v.base || ''}`, label: v.base || '—',
    translation: (v.translations || [])[0] || '', index: i, level: l,
    category: 'Verbs', url: 'verbs.html',
  }))
);
const nounItems = Object.keys(nDB).flatMap(l =>
  (nDB[l] || []).map((n, i) => ({
    id: `nouns:${l}:${n.base || n.word || ''}`, label: n.base || n.word || '—',
    translation: (n.translations || [])[0] || '', index: i, level: l,
    category: 'Nouns', url: 'nouns.html',
  }))
);
const adjItems = Object.keys(adjDB).flatMap(l =>
  (adjDB[l] || []).map((a, i) => ({
    id: `adjectives:${l}:${a.base || ''}`, label: a.base || '—',
    translation: (a.translations || [])[0] || '', index: i, level: l,
    category: 'Adjectives', url: 'adjectives.html',
  }))
);
const advItems = Object.keys(advDB).flatMap(l =>
  (advDB[l] || []).map((a, i) => ({
    id: `adverbs:${l}:${a.base || ''}`, label: a.base || '—',
    translation: (a.translations || [])[0] || '', index: i, level: l,
    category: 'Adverbs', url: 'adverbs.html',
  }))
);

// Register idiom items as page items (so "isHere" logic works for in-page jump)
SharedApp.registerPageItems?.(idiomItems);

// Register word items as cross-page search targets
SharedApp.registerSearchItems?.([...verbItems, ...nounItems, ...adjItems, ...advItems]);

/* ── Handle #jump hash for idioms ────────────────────────────────── */
// When search result from another page links here: index.html#jump:idiom:42
const hash = window.location.hash;
if (hash.startsWith('#jump:')) {
  const parts = hash.slice(1).split(':'); // ['jump', type, index]
  const jumpIdx = parseInt(parts[2], 10);
  if (!isNaN(jumpIdx) && jumpIdx >= 0 && jumpIdx < order.length) {
    idx = jumpIdx;
  }
  history.replaceState(null, '', window.location.pathname);
}

/* ── Init ────────────────────────────────────────────────────────── */
render(false);

// app.js - Verb focus mode with level dropdowns + save
import { initFocusMode } from './focus-mode.js';
import verbsA1 from './js/verbs-db-a1.js';
import verbsA2 from './js/verbs-db-a2.js';
import verbsB1 from './js/verbs-db-b1.js';
import verbsB2 from './js/verbs-db-b2.js';
import verbsC1 from './js/verbs-db-c1.js';
// Cross-page DB imports so global search works from this page without needing to visit others first
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

const verbsDB = { a1: verbsA1, a2: verbsA2, b1: verbsB1, b2: verbsB2, c1: verbsC1 };
const levelBtns = document.querySelectorAll('.level-btn');

let currentLevel = 'a1';
let focusApi = null;

// Saved words via shared.js
const { getSaved, setSaved, setSaveBtnState, wireSaveButtons, initSearchModal, registerPageItems, registerSearchItems } = window.SharedApp;

/* ========================= Styles (MUST be defined before first render) ========================= */

let __verbCardStylesInjected = false;

function injectVerbCardStylesOnce() {
  if (__verbCardStylesInjected) return;
  __verbCardStylesInjected = true;

  const css = `
  .verb-card{
    border:1px solid rgba(0,0,0,.08);
    border-radius:16px;
    padding:14px;
    background:#fff;
    box-shadow:0 6px 18px rgba(0,0,0,.06);
  }

  .verb-header{ display:flex; justify-content:space-between; align-items:flex-start; gap:12px; }
  .verb-base{ font-size:22px; font-weight:800; letter-spacing:.2px; }
  .reflexive-marker{ font-size:12px; opacity:.7; margin-top:2px; }

  .verb-info{ margin-top:10px; display:flex; gap:8px; align-items:flex-start; }
  .verb-info .label{ font-size:12px; opacity:.7; min-width:86px; }
  .verb-info .value{ font-size:13px; font-weight:600; }

  .pill-row{ margin-top:8px; display:flex; flex-wrap:wrap; gap:6px; }
  .pill{
    display:inline-flex; align-items:center; gap:6px;
    padding:5px 10px;
    border-radius:999px;
    background:rgba(0,0,0,.05);
    font-size:12px;
    font-weight:800;
  }

  .tabbar{ margin-top:12px; display:flex; gap:8px; }
  .tab-btn{
    border:1px solid rgba(0,0,0,.12);
    background:#fff;
    border-radius:999px;
    padding:6px 10px;
    font-size:12px;
    font-weight:900;
    cursor:pointer;
    user-select:none;
  }
  .tab-btn.active{ background:rgba(0,0,0,.06); }
  .tab-panel{ margin-top:12px; }
  .tab-panel[hidden]{ display:none !important; }

  .verb-forms{
    margin-top:2px;
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:8px;
  }
  .form-item{ background:rgba(0,0,0,.03); border-radius:12px; padding:8px 10px; }
  .form-label{ display:block; font-size:11px; opacity:.65; margin-bottom:2px; }
  .form-value{ font-weight:800; }

  .section-title{
    font-size:12px;
    font-weight:900;
    letter-spacing:.3px;
    text-transform:uppercase;
    opacity:.7;
    margin:4px 0 10px;
  }

  details.variety{
    border:1px solid rgba(0,0,0,.10);
    border-radius:14px;
    padding:8px 10px;
    background:rgba(0,0,0,.02);
    margin-bottom:10px;
  }
  details.variety summary{
    cursor:pointer;
    font-weight:900;
    font-size:13px;
    list-style:none;
    display:flex;
    align-items:center;
    justify-content:space-between;
    gap:10px;
  }
  details.variety summary::-webkit-details-marker{ display:none; }

  .variety-meta{ margin-top:8px; display:flex; flex-wrap:wrap; gap:6px; }
  .meta-chip{
    background:rgba(0,0,0,.05);
    border-radius:999px;
    padding:4px 8px;
    font-size:12px;
    font-weight:800;
  }
  .variety-expl{ margin-top:8px; font-size:13px; opacity:.9; }
  .variety-examples{ margin:10px 0 0; padding-left:18px; }
  .variety-examples li{ margin:6px 0; }

  .save-btn{
    border:1px solid rgba(0,0,0,.12);
    background:#fff;
    border-radius:999px;
    padding:6px 10px;
    cursor:pointer;
    font-weight:900;
    user-select:none;
  }
  `;

  const style = document.createElement('style');
  style.setAttribute('data-verb-card-styles', '1');
  style.textContent = css;
  document.head.appendChild(style);
}

/* ========================= Build page items for global search ========================= */

function buildPageItems(level) {
  const list = verbsDB[level] || [];
  return list.map((v, i) => ({
    id: `verbs:${level}:${getVerbBase(v)}`,
    label: getVerbBase(v),
    translation: getTranslations(v).slice(0, 2).join(', '),
    index: i, level, category: 'Verbs', url: 'index.html',
  }));
}

function buildAllPageItems() {
  return Object.keys(verbsDB).flatMap(l => buildPageItems(l));
}

// Cross-page item builders so search finds all words without visiting other pages
function buildCrossPageItems() {
  const nounDB = { a1: nounsA1, a2: nounsA2, b1: nounsB1, b2: nounsB2, c1: nounsC1 };
  const adjDB  = { a1: adjectivesA1, a2: adjectivesA2, b1: adjectivesB1, b2: adjectivesB2, c1: adjectivesC1 };
  const advDB  = { a1: adverbsA1, a2: adverbsA2, b1: adverbsB1, b2: adverbsB2, c1: adverbsC1 };

  const nouns = Object.keys(nounDB).flatMap(l => (nounDB[l]||[]).map((n,i) => ({
    id: `nouns:${l}:${n.base||n.word}`, label: n.base||n.word||'—', translation: (n.translations||[])[0]||'',
    index: i, level: l, category: 'Nouns', url: 'nouns.html',
  })));
  const adjs = Object.keys(adjDB).flatMap(l => (adjDB[l]||[]).map((a,i) => ({
    id: `adjectives:${l}:${a.base||a.word}`, label: a.base||a.word||'—', translation: (a.translations||[])[0]||'',
    index: i, level: l, category: 'Adjectives', url: 'adjectives.html',
  })));
  const advs = Object.keys(advDB).flatMap(l => (advDB[l]||[]).map((a,i) => ({
    id: `adverbs:${l}:${a.base||a.word}`, label: a.base||a.word||'—', translation: (a.translations||[])[0]||'',
    index: i, level: l, category: 'Adverbs', url: 'adverbs.html',
  })));
  return [...nouns, ...adjs, ...advs];
}

/* ========================= Init ========================= */

renderCurrent();
updateCounts();
buildAllDropdowns();

// Register only this page's items for in-page jumping; cross-page items go to index only
registerPageItems(buildAllPageItems());
registerSearchItems(buildCrossPageItems());
// Handle cross-page search navigation (#jump:level:index)
window.SharedApp.handleJumpHash(
  () => currentLevel,
  (level, index) => {
    const btn = document.querySelector(`.level-btn[data-level="${level}"]`);
    if (btn) { levelBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
    currentLevel = level;
    renderCurrent();
    setTimeout(() => focusApi?.jumpTo(index), 80);
  },
  () => focusApi
);

initSearchModal((item) => {
  if (item.level !== currentLevel) {
    const btn = document.querySelector(`.level-btn[data-level="${item.level}"]`);
    if (btn) { levelBtns.forEach(b => b.classList.remove('active')); btn.classList.add('active'); }
    currentLevel = item.level;
    renderCurrent();
    setTimeout(() => focusApi?.jumpTo(item.index), 80);
  } else {
    focusApi?.jumpTo(item.index);
  }
});

levelBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const level = btn.dataset.level;

    // Switch level if not already active
    if (!btn.classList.contains('active')) {
      levelBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentLevel = level;
      renderCurrent();
    }

    // Open positioned dropdown under this button
    const items = buildPageItems(level);
    window.SharedApp.openLevelSheet(
      btn,
      items,
      (idx) => { if (level !== currentLevel) { currentLevel = level; renderCurrent(); } setTimeout(() => focusApi?.jumpTo(idx), 40); },
      `${level.toUpperCase()} — ${items.length} verbs`
    );
  });
});


function renderCurrent() {
  const rootId = 'verbs-list';
  const root = document.getElementById(rootId);
  if (!root) return;
  root.classList.add('study-root');

  const list = verbsDB[currentLevel] || [];

  if (list.length === 0) {
    root.innerHTML = `<div class="no-results"><p>No verbs in this level yet.</p></div>`;
    return;
  }

  focusApi = initFocusMode({
    rootId,
    items: list,
    level: currentLevel,
    storageKey: 'verbs',
    getId: (v) => `verbs:${currentLevel}:${getVerbBase(v)}`,
    getLabel: (v) => getVerbBase(v),
    renderCard: (v, idx) => createVerbCard(v, idx),
  });

  wireDrawerReview(focusApi);
  if (focusApi) focusApi.onChange = () => wireDrawerReview(focusApi);
}

/* ========================= Level dropdowns ========================= */

function buildAllDropdowns() {
  Object.entries(verbsDB).forEach(([level, items]) => {
    const dd = document.getElementById(`dropdown-${level}`);
    if (!dd || !items?.length) return;

    const frag = document.createDocumentFragment();
    items.forEach((v, i) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'level-dropdown-item';
      const base = getVerbBase(v);
      const trans = getTranslations(v)[0] || '';
      btn.innerHTML = `${escapeHtml(base)}<span class="ddi-translation">${escapeHtml(trans)}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // don't trigger level-btn click twice
        // Switch level if needed
        if (level !== currentLevel) {
          const levelBtn = document.querySelector(`.level-btn[data-level="${level}"]`);
          if (levelBtn) {
            levelBtns.forEach(b => b.classList.remove('active'));
            levelBtn.classList.add('active');
            currentLevel = level;
            renderCurrent();
          }
        }
        setTimeout(() => focusApi?.jumpTo(i), 30);
      });
      frag.appendChild(btn);
    });
    dd.appendChild(frag);
  });
}

/* ========================= Data extractors ========================= */

function getVerbBase(v) {
  const direct = v.base ?? v.infinitive ?? v.verb ?? v.word ?? v.lemma ?? v.name ?? v.title;
  if (isNonEmptyString(direct)) return direct.trim();
  const nested = v?.headword ?? v?.entry?.base ?? v?.entry?.infinitive ?? v?.verb?.base;
  if (isNonEmptyString(nested)) return nested.trim();
  return '—';
}

function getTypeText(v) {
  const parts = [];
  const raw = v.type ?? v.verbType ?? v.class ?? v.category;
  if (isNonEmptyString(raw)) parts.push(raw);
  if (v.reflexive === true || String(getVerbBase(v)).toLowerCase().startsWith('sich ')) parts.push('reflexive');
  if (v.strong === true) parts.push('strong');
  if (v.weak === true) parts.push('weak');
  if (v.irregular === true) parts.push('irregular');
  if (v.separable === true) parts.push('separable');
  return parts.filter(Boolean).join(', ');
}

function getForms(v) {
  // present may be an object {ich, du, er_sie_es, wir, ihr, sie_Sie} — extract ich-form
  const presentRaw = v.present ?? v.prasens ?? v.präsens ?? v.forms?.present ?? v?.principalParts?.[0];
  const presentIch = (presentRaw && typeof presentRaw === 'object') ? (presentRaw.ich || Object.values(presentRaw)[0] || '') : presentRaw;

  // past_tenses object {präteritum, partizip_ii} — extract fields
  const pastTenses = v.past_tenses || {};
  const past     = v.past ?? v.prateritum ?? v.präteritum ?? pastTenses.präteritum ?? v.forms?.past ?? v?.principalParts?.[1];
  const partizip2 = v.partizip2 ?? v.partizipII ?? v.participle ?? v.pp ?? pastTenses.partizip_ii ?? v.forms?.partizip2 ?? v?.principalParts?.[2];

  // aux from auxiliaries array
  const auxArr = Array.isArray(v.auxiliaries) ? v.auxiliaries : [];
  const auxFromArr = auxArr[0]?.aux || '';
  const aux = v.aux ?? v.auxiliary ?? v.hilfsverb ?? v.forms?.aux ?? auxFromArr;

  let p = asText(presentIch), pa = asText(past), pp = asText(partizip2), a = asText(aux);

  const line = v.conjugationLine ?? v.conjugation ?? v.formsLine ?? v.principalPartsLine;
  if ((!p || p === '—') && line && typeof line === 'string') {
    const parts = line.split(',').map(s => s.trim()).filter(Boolean);
    if (parts.length >= 2) {
      p = parts[0] || p;
      pa = parts[1] || pa;
      if (parts[2]) {
        const m = parts[2].match(/^(hat|habe|haben|ist|bin|bist|sind|seid)\s+(.+)$/i);
        if (m) { a = a || m[1]; pp = pp || m[2]; }
        else { pp = pp || parts[2]; }
      }
    }
  }
    // If present is missing, use first derived (ich-form) as present
  if ((!p || p === '—') && Array.isArray(v.derived) && v.derived[0]) {
    p = String(v.derived[0]).trim();
  }
  return { present: p || '—', past: pa || '—', partizip2: pp || '—', aux: a || '' };
}

function getTranslations(v) {
  const t = v.translations ?? v.meanings ?? v.translation ?? v.meaning ?? v.definition ?? v.definitions;
  if (Array.isArray(t)) return t.map(asText).filter(Boolean);
  if (t && typeof t === 'object') {
    const flat = [];
    for (const val of Object.values(t)) {
      if (Array.isArray(val)) flat.push(...val.map(asText));
      else if (isNonEmptyString(val)) flat.push(val);
    }
    return flat.filter(Boolean);
  }
  if (isNonEmptyString(t)) return [t];
  return [];
}

function getVariants(v) {
  const va = v.variants ?? v.variant ?? v.alternatives ?? v.varieties;
  if (Array.isArray(va)) return va;
  if (va && typeof va === 'object') return [va];
  return [];
}

function asText(x) {
  if (x == null) return '';
  if (typeof x === 'string') return x;
  if (typeof x === 'number' || typeof x === 'boolean') return String(x);
  return '';
}

function isNonEmptyString(x) {
  return typeof x === 'string' && x.trim().length > 0;
}

/* ========================= Card renderer (Tabs + Collapsible varieties) ========================= */


function createVerbCard(v, idx) {
  const card = document.createElement('div');
  card.className = 'verb-card';

  const infinitive = getVerbBase(v);
  const saveId = `verbs:${currentLevel}:${infinitive}`;
  const typeText = getTypeText(v);
  const forms = getForms(v);
  const translations = getTranslations(v);
  const displayBase = (forms.present && forms.present !== '—') ? forms.present : infinitive;

  // ── Patterns / varieties (original format) ──
  const oldVariants = getVariants(v).filter(vr => vr.label || vr.variant || vr.name || typeof vr === 'string');

  // ── New: linked variant words (from our processing) ──
  const linkedVariants = Array.isArray(v.variants) ? v.variants : [];
  const derivedFrom = v.derived_from || null;

  // ── Reflexive uses ──
  const reflexiveUses = Array.isArray(v.reflexive_uses) ? v.reflexive_uses : [];

  // ── Present tense full conjugation ──
  const presObj = (v.present && typeof v.present === 'object') ? v.present : null;
  const konjII  = v.konjunktiv_ii || null;
  const imperative = (v.imperative && typeof v.imperative === 'object') ? v.imperative : null;
  const pastTenses = v.past_tenses || {};

  // ── Extra learning fields ──
  const tip            = v.tip || '';
  const commonMistakes = Array.isArray(v.common_mistakes) ? v.common_mistakes : [];
  const wordFamily     = v.word_family || null;
  const register       = v.register || '';

  // Build HTML
  const presHtml = presObj ? `
    <div class="section-title" style="margin-top:14px">Full conjugation (Präsens)</div>
    <div class="verb-forms" style="grid-template-columns:repeat(3,1fr)">
      ${Object.entries(presObj).map(([pro,form])=>`<div class="form-item"><span class="form-label">${escapeHtml(pro.replace('_',' '))}</span><span class="form-value">${escapeHtml(form)}</span></div>`).join('')}
    </div>` : '';

  const impHtml = imperative ? `
    <div class="section-title" style="margin-top:12px">Imperative</div>
    <div class="verb-forms" style="grid-template-columns:repeat(3,1fr)">
      ${Object.entries(imperative).map(([pro,form])=>`<div class="form-item"><span class="form-label">${escapeHtml(pro)}</span><span class="form-value">${escapeHtml(form)}</span></div>`).join('')}
    </div>` : '';

  const konjHtml = konjII ? `
    <div class="section-title" style="margin-top:12px">Konjunktiv II</div>
    <div class="verb-forms">
      <div class="form-item"><span class="form-label">ich</span><span class="form-value">${escapeHtml(konjII.ich||'—')}</span></div>
      <div class="form-item"><span class="form-label">construction</span><span class="form-value">${escapeHtml(konjII.construction||'—')}</span></div>
    </div>
    ${konjII.note ? `<div class="verb-info" style="margin-top:6px"><span class="label">Note:</span><span class="value">${escapeHtml(konjII.note)}</span></div>` : ''}
    ${konjII.example ? `<div class="verb-info"><span class="label">e.g.</span><span class="value">${escapeHtml(konjII.example)}</span></div>` : ''}` : '';

  const reflexHtml = reflexiveUses.length ? `
    <div class="section-title" style="margin-top:12px">Reflexive uses</div>
    ${reflexiveUses.map(r=>`
      <details class="variety">
        <summary>${escapeHtml(r.label)}${r.prepositions?.length ? ' <span style="opacity:.5;font-size:11px;">'+escapeHtml(r.prepositions.join(', '))+'</span>' : ''}<span style="opacity:.4">▾</span></summary>
        ${r.explanation ? `<div class="variety-expl">${escapeHtml(r.explanation)}</div>` : ''}
        ${(r.examples||[]).length ? `<ul class="variety-examples">${r.examples.map(e=>`<li>${escapeHtml(e)}</li>`).join('')}</ul>` : ''}
      </details>`).join('')}` : '';

  const linkedHtml = linkedVariants.length ? `
    <div class="section-title" style="margin-top:12px">Derived forms</div>
    ${linkedVariants.map(lv=>`
      <div class="verb-info" style="align-items:center;gap:10px">
        <span class="label" style="min-width:60px">${escapeHtml(lv.type||'')}</span>
        <span class="value" style="flex:1">${escapeHtml(lv.base)} <span style="opacity:.55;font-size:11px;">[${(lv.level||'').toUpperCase()}]</span></span>
        <span style="font-size:11px;opacity:.55">${escapeHtml((lv.translations||[]).join(', '))}</span>
      </div>`).join('')}` : '';

  let derivedHtml = '';
  if (derivedFrom) {
    const dLevel = (derivedFrom.level||'a1').toLowerCase();
    const dBase  = derivedFrom.base||'';
    const dArr   = (verbsDB[dLevel]||[]);
    const dIdx   = dArr.findIndex(x=>(x.base||x.word||'')===dBase);
    const dUrl   = dIdx>=0 ? 'verbs.html#jump:'+dLevel+':'+dIdx : 'verbs.html';
    derivedHtml  = `
    <div class="verb-info" style="margin-top:10px;background:rgba(80,120,255,.07);border-radius:10px;padding:6px 10px">
      <span class="label">Base word:</span>
      <a href="${dUrl}" class="value" style="color:#3a60d4;text-decoration:none;font-weight:600">${escapeHtml(dBase)} <span style="opacity:.5;font-size:11px;">[${(derivedFrom.level||'').toUpperCase()}]</span> <span style="opacity:.4;font-size:11px;">(${escapeHtml(derivedFrom.type||'')} →)</span></a>
    </div>`;
  }
      const title = vr.label || vr.variant || vr.name || 'Usage';
      const preps = (vr.prepositions||[]).map(p=>`<span class="prep-badge">${escapeHtml(p)}</span>`).join(' ');
      const exs = (vr.examples||[]).map(e=>`<li>${escapeHtml(e)}</li>`).join('');
      return `<details class="variety">
        <summary>${escapeHtml(title)}${preps ? ' '+preps : ''}<span style="opacity:.4">▾</span></summary>
        ${vr.explanation ? `<div class="variety-expl">${escapeHtml(vr.explanation)}</div>` : ''}
        ${exs ? `<ul class="variety-examples">${exs}</ul>` : ''}
      </details>`;
    }).join('')}` : '';

  const wordFamilyHtml = wordFamily ? `
    <div class="verb-info" style="flex-wrap:wrap;gap:6px;margin-top:8px">
      <span class="label">Word family:</span>
      <span class="value">${[...(wordFamily.nouns||[]),...(wordFamily.adjectives||[])].map(w=>`<span class="prep-badge">${escapeHtml(w)}</span>`).join(' ')}</span>
    </div>` : '';

  const tipHtml = tip ? `
    <div class="verb-info" style="margin-top:8px;background:rgba(255,200,0,.1);border-radius:10px;padding:8px 10px;flex-direction:column;gap:4px">
      <span class="label">💡 Tip</span>
      <span style="font-size:13px">${escapeHtml(tip)}</span>
    </div>` : '';

  const mistakesHtml = commonMistakes.length ? `
    <div class="verb-info" style="margin-top:8px;background:rgba(255,60,60,.07);border-radius:10px;padding:8px 10px;flex-direction:column;gap:4px">
      <span class="label">⚠️ Common mistakes</span>
      ${commonMistakes.map(m=>`<span style="font-size:12px">${escapeHtml(m)}</span>`).join('')}
    </div>` : '';

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${escapeHtml(displayBase)}</div>
        <div class="conjugation">${escapeHtml(infinitive)}</div>
        ${typeText ? `<div class="reflexive-marker">${escapeHtml(typeText)}${register ? ' · '+escapeHtml(register) : ''}</div>` : (register ? `<div class="reflexive-marker">${escapeHtml(register)}</div>` : '')}
      </div>
      <button class="save-btn" type="button"
        data-save-id="${escapeHtml(saveId)}"
        data-save-label="${escapeHtml(infinitive)}"
        data-save-trans="${escapeHtml(translations[0] || '')}"
        data-save-url="index.html"
        aria-label="Save">♡</button>
    </div>

    <div class="verb-forms">
      <div class="form-item">
        <span class="form-label">Present (ich)</span>
        <span class="form-value">${escapeHtml(forms.present)}</span>
      </div>
      <div class="form-item">
        <span class="form-label">Präteritum</span>
        <span class="form-value">${escapeHtml(pastTenses.präteritum||forms.past)}</span>
      </div>
      <div class="form-item" style="grid-column:1/-1">
        <span class="form-label">Partizip II${forms.aux ? ' ('+escapeHtml(forms.aux)+')' : ''}</span>
        <span class="form-value">${escapeHtml(pastTenses.partizip_ii||forms.partizip2)}</span>
      </div>
    </div>

    ${translations.length ? `<div class="verb-info"><span class="label">Translation:</span><span class="value">${escapeHtml(translations.join(', '))}</span></div>` : ''}

    ${derivedHtml}
    ${presHtml}
    ${impHtml}
    ${konjHtml}
    ${reflexHtml}
    ${oldVarHtml}
    ${linkedHtml}
    ${wordFamilyHtml}
    ${tipHtml}
    ${mistakesHtml}
  `;

  injectVerbCardStylesOnce();

  const btn = card.querySelector('.save-btn');
  if (btn) {
    setSaveBtnState(btn, getSaved().has(saveId));
    btn.addEventListener('click', () => {
      const s = getSaved();
      const m = window.SharedApp.getMeta();
      if (s.has(saveId)) { s.delete(saveId); delete m[saveId]; }
      else { s.add(saveId); m[saveId] = { label: infinitive, translation: translations[0] || '', url: 'index.html' }; }
      setSaved(s); window.SharedApp.setMeta(m);
      setSaveBtnState(btn, s.has(saveId));
    });
  }
  return card;
}





/* ========================= Drawer ========================= */

function wireDrawerReview(api) {
  if (!api) return;
  const st = api.getState?.();
  if (!st) return;

  const learnedHost   = document.getElementById('drawerLearnedList');
  const unlearnedHost = document.getElementById('drawerUnlearnedList');

  if (learnedHost) {
    learnedHost.innerHTML = st.learned?.length
      ? st.learned.map(x => `<button class="drawer-item" data-jump="${x.i}">${escapeHtml(x.label)}</button>`).join('')
      : `<div class="drawer-empty">No learned words yet.</div>`;
  }
  if (unlearnedHost) {
    unlearnedHost.innerHTML = st.unlearned?.length
      ? st.unlearned.map(x => `<button class="drawer-item" data-jump="${x.i}">${escapeHtml(x.label)}</button>`).join('')
      : `<div class="drawer-empty">All learned 🎉</div>`;
  }

  document.querySelectorAll('[data-jump]').forEach(btn => {
    btn.onclick = () => api.jumpTo(parseInt(btn.dataset.jump, 10));
  });

  const markLearned   = document.getElementById('btnMarkLearned');
  const markUnlearned = document.getElementById('btnMarkUnlearned');
  if (markLearned)   markLearned.onclick   = () => { api.setLearned?.(true);  wireDrawerReview(api); };
  if (markUnlearned) markUnlearned.onclick = () => { api.setLearned?.(false); wireDrawerReview(api); };
}

/* ========================= Utilities ========================= */

function updateCounts() {
  Object.keys(verbsDB).forEach(level => {
    const badge = document.getElementById(`count-${level}`);
    if (badge) badge.textContent = (verbsDB[level] || []).length;
  });
}

function escapeHtml(s) {
  return String(s ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

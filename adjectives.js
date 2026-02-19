// adjectives.js - Focus mode with level dropdowns + save
import adjectivesA1 from './js/adjectives-db-a1.js';
import adjectivesA2 from './js/adjectives-db-a2.js';
import adjectivesB1 from './js/adjectives-db-b1.js';
import adjectivesB2 from './js/adjectives-db-b2.js';
import adjectivesC1 from './js/adjectives-db-c1.js';
import verbsA1 from './js/verbs-db-a1.js'; import verbsA2 from './js/verbs-db-a2.js'; import verbsB1 from './js/verbs-db-b1.js'; import verbsB2 from './js/verbs-db-b2.js'; import verbsC1 from './js/verbs-db-c1.js';
import nounsA1 from './js/nouns-db-a1.js'; import nounsA2 from './js/nouns-db-a2.js'; import nounsB1 from './js/nouns-db-b1.js'; import nounsB2 from './js/nouns-db-b2.js'; import nounsC1 from './js/nouns-db-c1.js';
import adverbsA1 from './js/adverbs-db-a1.js'; import adverbsA2 from './js/adverbs-db-a2.js'; import adverbsB1 from './js/adverbs-db-b1.js'; import adverbsB2 from './js/adverbs-db-b2.js'; import adverbsC1 from './js/adverbs-db-c1.js';
import { initFocusMode } from './focus-mode.js';

const DB = { a1: adjectivesA1, a2: adjectivesA2, b1: adjectivesB1, b2: adjectivesB2, c1: adjectivesC1 };
const levelBtns = document.querySelectorAll('.level-btn');
let currentLevel = 'a1';
let focusApi = null;
const { getSaved, setSaved, setSaveBtnState, initSearchModal, registerPageItems, registerSearchItems } = window.SharedApp;

function getLabel(adj) { return adj.base || adj.word || '—'; }

function buildPageItems(level) {
  return (DB[level] || []).map((adj, i) => ({
    id: `adjectives:${level}:${getLabel(adj)}`, label: getLabel(adj),
    translation: (adj.translations || [])[0] || '', index: i, level, category: 'Adjectives', url: 'adjectives.html',
  }));
}
function buildAllPageItems() { return Object.keys(DB).flatMap(l => buildPageItems(l)); }
function buildCrossPageItems() {
  const vDB={a1:verbsA1,a2:verbsA2,b1:verbsB1,b2:verbsB2,c1:verbsC1};
  const nDB={a1:nounsA1,a2:nounsA2,b1:nounsB1,b2:nounsB2,c1:nounsC1};
  const aDB={a1:adverbsA1,a2:adverbsA2,b1:adverbsB1,b2:adverbsB2,c1:adverbsC1};
  return [
    ...Object.keys(vDB).flatMap(l=>(vDB[l]||[]).map((v,i)=>({id:`verbs:${l}:${v.base||v.word||''}`,label:v.base||v.word||'—',translation:((v.translations||[])[0])||'',index:i,level:l,category:'Verbs',url:'index.html'}))),
    ...Object.keys(nDB).flatMap(l=>(nDB[l]||[]).map((n,i)=>({id:`nouns:${l}:${n.base||n.word}`,label:n.base||n.word||'—',translation:(n.translations||[])[0]||'',index:i,level:l,category:'Nouns',url:'nouns.html'}))),
    ...Object.keys(aDB).flatMap(l=>(aDB[l]||[]).map((a,i)=>({id:`adverbs:${l}:${a.base||a.word}`,label:a.base||a.word||'—',translation:(a.translations||[])[0]||'',index:i,level:l,category:'Adverbs',url:'adverbs.html'}))),
  ];
}

renderCurrent(); updateCounts(); buildAllDropdowns();
registerPageItems(buildAllPageItems()); registerSearchItems(buildCrossPageItems());

window.SharedApp.handleJumpHash(() => currentLevel, (level, index) => {
  const btn = document.querySelector(`.level-btn[data-level="${level}"]`);
  if (btn) { levelBtns.forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
  currentLevel = level; renderCurrent(); setTimeout(() => focusApi?.jumpTo(index), 80);
}, () => focusApi);

initSearchModal((item) => {
  if (item.level !== currentLevel) {
    const btn = document.querySelector(`.level-btn[data-level="${item.level}"]`);
    if (btn) { levelBtns.forEach(b=>b.classList.remove('active')); btn.classList.add('active'); }
    currentLevel = item.level; renderCurrent(); setTimeout(() => focusApi?.jumpTo(item.index), 80);
  } else { focusApi?.jumpTo(item.index); }
});

levelBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const level = btn.dataset.level;
    if (!btn.classList.contains('active')) { levelBtns.forEach(b=>b.classList.remove('active')); btn.classList.add('active'); currentLevel = level; renderCurrent(); }
    const items = buildPageItems(level);
    window.SharedApp.openLevelSheet(btn, items, (idx) => { if (level!==currentLevel){currentLevel=level;renderCurrent();} setTimeout(()=>focusApi?.jumpTo(idx),40); }, `${level.toUpperCase()} — ${items.length} adjectives`);
  });
});

function renderCurrent() {
  const root = document.getElementById('study-root');
  if (!root) return;
  root.classList.add('study-root');
  const list = DB[currentLevel] || [];
  const countEl = document.getElementById('adjective-count');
  if (countEl) countEl.textContent = `${list.length} ${list.length === 1 ? 'adjective' : 'adjectives'}`;
  if (!list.length) { root.innerHTML = '<div class="no-results"><p>No adjectives in this level yet.</p></div>'; return; }
  focusApi = initFocusMode({ rootId:'study-root', items:list, level:currentLevel, storageKey:'adjectives',
    getId: (a) => `adjectives:${currentLevel}:${getLabel(a)}`, getLabel: (a) => getLabel(a), renderCard: (a) => createCard(a) });
  wireDrawerReview(focusApi);
  if (focusApi) focusApi.onChange = () => wireDrawerReview(focusApi);
}

function buildAllDropdowns() {
  Object.entries(DB).forEach(([level, items]) => {
    const dd = document.getElementById(`dropdown-${level}`);
    if (!dd || !items?.length) return;
    const frag = document.createDocumentFragment();
    items.forEach((adj, i) => {
      const btn = document.createElement('button'); btn.type='button'; btn.className='level-dropdown-item';
      btn.innerHTML = `${esc(getLabel(adj))}<span class="ddi-translation">${esc((adj.translations||[])[0]||'')}</span>`;
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (level !== currentLevel) { const lb = document.querySelector(`.level-btn[data-level="${level}"]`); if(lb){levelBtns.forEach(b=>b.classList.remove('active'));lb.classList.add('active');currentLevel=level;renderCurrent();} }
        setTimeout(() => focusApi?.jumpTo(i), 30);
      });
      frag.appendChild(btn);
    });
    dd.appendChild(frag);
  });
}

function createCard(adj) {
  const card = document.createElement('div');
  card.className = 'verb-card';
  const label  = getLabel(adj);
  const saveId = `adjectives:${currentLevel}:${label}`;
  const trans  = (adj.translations || []).join(', ') || '—';
  const register = adj.register || '';

  const comp = adj.comparison || {};
  const positive   = comp.positive || label;
  const comparative  = comp.comparative || adj.comparative || '—';
  const supPred      = comp.superlative_predicative || adj.superlative || '—';
  const supAttr      = comp.superlative_attributive || '';
  const irregular    = adj.irregular ? ' ⚡' : '';

  const declEx = adj.declension_examples || {};
  const hasDeclEx = Object.keys(declEx).length > 0;
  const positions = Array.isArray(adj.position) ? adj.position.join(', ') : '';

  const linkedVariants = Array.isArray(adj.variants) ? adj.variants : [];
  const derivedFrom    = adj.derived_from || null;

  const synonyms       = Array.isArray(adj.synonyms)       ? adj.synonyms       : [];
  const antonym        = adj.antonym || '';
  const collocations   = Array.isArray(adj.collocations)   ? adj.collocations   : [];
  const tip            = adj.tip || '';
  const commonMistakes = Array.isArray(adj.common_mistakes) ? adj.common_mistakes : [];

  const derivedHtml = derivedFrom ? `
    <div class="verb-info" style="background:rgba(80,120,255,.07);border-radius:10px;padding:6px 10px;margin-top:8px">
      <span class="label">Base word:</span>
      <span class="value">${esc(derivedFrom.base)} <span style="opacity:.5;font-size:11px;">[${(derivedFrom.level||'').toUpperCase()}]</span> <span style="opacity:.4;font-size:11px;">(${esc(derivedFrom.type||'')})</span></span>
    </div>` : '';

  const compHtml = `
    <div class="verb-forms" style="margin-top:10px">
      <div class="form-item"><span class="form-label">Positive</span><span class="form-value">${esc(positive)}${irregular}</span></div>
      <div class="form-item"><span class="form-label">Comparative</span><span class="form-value">${esc(comparative)}</span></div>
      <div class="form-item"><span class="form-label">Superlative</span><span class="form-value">${esc(supPred)}</span></div>
      ${supAttr ? `<div class="form-item"><span class="form-label">Superlat. (attr.)</span><span class="form-value">${esc(supAttr)}</span></div>` : ''}
    </div>`;

  const declExHtml = hasDeclEx ? `
    <div class="section-title" style="margin-top:12px">Declension (Nom. Sg.)</div>
    <div class="verb-forms" style="grid-template-columns:repeat(3,1fr)">
      ${Object.entries(declEx).map(([type,form])=>`<div class="form-item"><span class="form-label">${esc(type)}</span><span class="form-value">${esc(form)}</span></div>`).join('')}
    </div>` : '';

  const posHtml = positions ? `<div class="verb-info" style="margin-top:6px"><span class="label">Position:</span><span class="value">${esc(positions)}</span></div>` : '';

  const synonymsHtml = synonyms.length ? `
    <div class="verb-info" style="margin-top:8px;flex-wrap:wrap;gap:6px">
      <span class="label">Synonyms:</span>
      <span class="value">${synonyms.map(s=>`<span class="meta-chip">${esc(s)}</span>`).join(' ')}</span>
    </div>` : '';

  const antonymHtml = antonym ? `<div class="verb-info" style="margin-top:4px"><span class="label">Antonym:</span><span class="value">${esc(antonym)}</span></div>` : '';

  const collocHtml = collocations.length ? `
    <div class="section-title" style="margin-top:12px">Collocations</div>
    <div class="pill-row">${collocations.map(c=>`<span class="meta-chip">${esc(c)}</span>`).join('')}</div>` : '';

  const linkedHtml = linkedVariants.length ? `
    <div class="section-title" style="margin-top:12px">Derived forms</div>
    ${linkedVariants.map(lv=>`<div class="verb-info" style="gap:8px">
      <span class="label" style="min-width:70px">${esc(lv.type||'')}</span>
      <span class="value">${esc(lv.base)} <span style="opacity:.5;font-size:11px;">[${(lv.level||'').toUpperCase()}]</span></span>
      <span style="font-size:11px;opacity:.5">${esc((lv.translations||[]).slice(0,2).join(', '))}</span>
    </div>`).join('')}` : '';

  const examplesHtml = (adj.examples||[]).length ? `
    <div class="section-title" style="margin-top:12px">Examples</div>
    <ul class="variety-examples">${(adj.examples||[]).map(ex=>`<li>${esc(ex)}</li>`).join('')}</ul>` : '';

  const tipHtml = tip ? `
    <div class="verb-info" style="margin-top:8px;background:rgba(255,200,0,.1);border-radius:10px;padding:8px 10px;flex-direction:column;gap:4px">
      <span class="label">💡 Tip</span><span style="font-size:13px">${esc(tip)}</span>
    </div>` : '';

  const mistakesHtml = commonMistakes.length ? `
    <div class="verb-info" style="margin-top:8px;background:rgba(255,60,60,.07);border-radius:10px;padding:8px 10px;flex-direction:column;gap:4px">
      <span class="label">⚠️ Common mistakes</span>
      ${commonMistakes.map(m=>`<span style="font-size:12px">${esc(m)}</span>`).join('')}
    </div>` : '';

  card.innerHTML = `
    <div class="verb-header">
      <div>
        <div class="verb-base">${esc(label)}</div>
        ${register ? `<div class="reflexive-marker">${esc(register)}</div>` : ''}
      </div>
      <button class="save-btn" type="button" data-save-id="${esc(saveId)}" data-save-label="${esc(label)}" data-save-trans="${esc((adj.translations||[])[0]||'')}" data-save-url="adjectives.html" aria-label="Save">♡</button>
    </div>
    <div class="verb-info"><span class="label">Translation:</span><span class="value">${esc(trans)}</span></div>
    ${derivedHtml}${compHtml}${posHtml}${declExHtml}${synonymsHtml}${antonymHtml}${collocHtml}${linkedHtml}${examplesHtml}${tipHtml}${mistakesHtml}
  `;

  const btn = card.querySelector('.save-btn');
  if (btn) {
    setSaveBtnState(btn, getSaved().has(saveId));
    btn.addEventListener('click', () => {
      const s=getSaved(); const m=window.SharedApp.getMeta();
      if(s.has(saveId)){s.delete(saveId);delete m[saveId];}else{s.add(saveId);m[saveId]={label,translation:(adj.translations||[])[0]||'',url:'adjectives.html'};}
      setSaved(s); window.SharedApp.setMeta(m); setSaveBtnState(btn,s.has(saveId));
    });
  }
  return card;
}

function wireDrawerReview(api) {
  if (!api) return; const st = api.getState?.(); if (!st) return;
  const lh=document.getElementById('drawerLearnedList'); const uh=document.getElementById('drawerUnlearnedList');
  if(lh) lh.innerHTML=st.learned?.length?st.learned.map(x=>`<button class="drawer-item" data-jump="${x.i}">${esc(x.label)}</button>`).join(''):'<div class="drawer-empty">No learned words yet.</div>';
  if(uh) uh.innerHTML=st.unlearned?.length?st.unlearned.map(x=>`<button class="drawer-item" data-jump="${x.i}">${esc(x.label)}</button>`).join(''):'<div class="drawer-empty">All learned 🎉</div>';
  document.querySelectorAll('[data-jump]').forEach(b=>{b.onclick=()=>api.jumpTo(parseInt(b.dataset.jump,10));});
  const ml=document.getElementById('btnMarkLearned'); const mu=document.getElementById('btnMarkUnlearned');
  if(ml) ml.onclick=()=>{api.setLearned?.(true);wireDrawerReview(api);}; if(mu) mu.onclick=()=>{api.setLearned?.(false);wireDrawerReview(api);};
}

function updateCounts() {
  Object.keys(DB).forEach(level => { const badge=document.getElementById(`count-${level}`); if(badge) badge.textContent=(DB[level]||[]).length; });
}

function esc(s) { return String(s??'').replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'",'&#039;'); }

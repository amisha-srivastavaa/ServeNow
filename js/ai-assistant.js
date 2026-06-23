/* ═══════════════════════════════════════════
   ServeNow — ai-assistant.js
   SmartFit upload flow, body measurement simulation,
   style quiz, personalized style feed
   ═══════════════════════════════════════════ */

let aiTab = 'smartfit';  /* 'smartfit' | 'feed' */
let quizStep = 0;
let quizAnswers = [];
let uploadedPhotos = [];
let smartfitPhase = 'upload'; /* 'upload' | 'processing' | 'result' */

/* ═══════════════ AI PAGE ═══════════════ */
function renderAI(container) {
  container.innerHTML = `
  <div class="ai-page page-enter">
    <!-- Hero -->
    <div class="ai-hero">
      <div class="ai-hero-badge">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        AI-Powered Style Assistant
      </div>
      <h1>Your <span class="gradient-text">Smart Style</span><br>Companion</h1>
      <p>Get precise measurements & personalised fashion advice — all in one place.</p>
    </div>

    <!-- Tabs -->
    <div class="ai-tabs">
      <div class="tab-row">
        <button class="tab-btn ${aiTab === 'smartfit' ? 'active' : ''}" onclick="switchAITab('smartfit')">📐 Smart Fit</button>
        <button class="tab-btn ${aiTab === 'feed' ? 'active' : ''}" onclick="switchAITab('feed')">✨ Style Feed</button>
        <button class="tab-btn" onclick="switchAITab('quiz')">🎨 Style Quiz</button>
      </div>
    </div>

    <div id="ai-tab-content">
      ${aiTab === 'smartfit' ? renderSmartFitHTML() : renderStyleFeedHTML()}
    </div>
  </div>`;
}

function switchAITab(tab) {
  aiTab = tab;
  const content = document.getElementById('ai-tab-content');
  if (!content) return;

  if (tab === 'smartfit') {
    smartfitPhase = App.state.profile.measurements ? 'result' : 'upload';
    uploadedPhotos = []; // Reset uploads on tab switch
    content.innerHTML = renderSmartFitHTML();
  } else if (tab === 'feed') {
    content.innerHTML = renderStyleFeedHTML();
  } else if (tab === 'quiz') {
    quizStep = 0;
    quizAnswers = [];
    content.innerHTML = renderQuizHTML();
  }

  document.querySelectorAll('.tab-btn').forEach((b, i) => {
    b.classList.toggle('active', ['smartfit','feed','quiz'][i] === tab);
  });
}

/* ═══════════════ SMARTFIT ═══════════════ */
function renderSmartFitHTML() {
  if (smartfitPhase === 'result' && App.state.profile.measurements) {
    return renderMeasurementResultHTML(App.state.profile.measurements);
  }
  if (smartfitPhase === 'processing') {
    return renderProcessingHTML();
  }
  return renderUploadHTML();
}

function renderUploadHTML() {
  return `
  <div class="smartfit-section">
    <div style="text-align:center;margin-bottom:8px;">
      <div style="font-size:13px;color:var(--text-muted);font-weight:600;text-transform:uppercase;letter-spacing:.06em;">Step 1 of 2</div>
      <h2 style="font-size:18px;margin-top:4px;">Upload Your Photos</h2>
      <p style="font-size:13px;color:var(--text-muted);margin-top:4px;">Our AI analyses posture and silhouette to estimate your measurements.</p>
    </div>

    <div class="photo-preview-grid">
      <div class="upload-zone" id="upload-front" onclick="simulatePhotoUpload('front')" style="min-height:160px;">
        <div class="upload-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="upload-title">Front View</div>
        <div class="upload-sub">Stand straight, arms at sides</div>
      </div>
      <div class="upload-zone" id="upload-side" onclick="simulatePhotoUpload('side')" style="min-height:160px;">
        <div class="upload-icon-wrap">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--brand)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        </div>
        <div class="upload-title">Side View</div>
        <div class="upload-sub">Stand naturally, arms at sides</div>
      </div>
    </div>

    <div style="background:var(--surface-3);border-radius:var(--r-lg);padding:14px 16px;border:1px solid var(--border-light);">
      <div style="font-weight:700;font-size:13px;color:var(--text-primary);margin-bottom:8px;">📸 Photo Tips</div>
      ${['Wear form-fitting clothes (no oversized)','Stand against a plain wall or door','Ensure good lighting','Keep phone at chest height for photos'].map(tip=>`
        <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text-secondary);padding:3px 0;">
          <span style="color:var(--brand);font-weight:700;">✓</span>${tip}
        </div>`).join('')}
    </div>

    <button class="btn-primary" id="start-analysis-btn" style="opacity:.5;pointer-events:none" onclick="startAnalysis()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Analyse My Measurements
    </button>
    <p style="font-size:11px;color:var(--text-muted);text-align:center;">🔒 Photos are processed on-device and never stored.</p>
  </div>`;
}

function simulatePhotoUpload(view) {
  const box = document.getElementById(`upload-${view}`);
  if (!box) return;
  box.innerHTML = `
    <div style="width:60px;height:60px;background:var(--brand-light);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;">${view === 'front' ? '🧍' : '🚶'}</div>
    <div style="font-weight:600;color:var(--brand);font-size:13px;">${view === 'front' ? 'Front' : 'Side'} View ✓</div>
    <div style="font-size:11px;color:var(--text-muted);">Photo ready for analysis</div>`;
  box.style.borderColor = 'var(--brand)';
  box.style.background = 'var(--brand-xlight)';

  uploadedPhotos.push(view);
  showToast(`${view === 'front' ? 'Front' : 'Side'} photo ready ✓`);

  if (uploadedPhotos.length >= 1) {
    const btn = document.getElementById('start-analysis-btn');
    if (btn) { btn.style.opacity = '1'; btn.style.pointerEvents = 'auto'; }
  }
}

function startAnalysis() {
  smartfitPhase = 'processing';
  const content = document.getElementById('ai-tab-content');
  if (content) content.innerHTML = renderProcessingHTML();
  runProcessingAnimation();
}

function renderProcessingHTML() {
  return `
  <div class="smartfit-section">
    <div class="ai-processing">
      <div class="ai-process-ring">
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="34" fill="none" stroke="var(--brand-light)" stroke-width="6"/>
          <circle cx="40" cy="40" r="34" fill="none" stroke="var(--brand)" stroke-width="6" stroke-linecap="round" stroke-dasharray="100 113" stroke-dashoffset="-30" id="progress-circle"/>
        </svg>
        <div class="ai-process-icon">🤖</div>
      </div>
      <h3>Analysing your photos…</h3>
      <p>AI is estimating your body measurements</p>
      <div class="process-steps" id="process-steps">
        <div class="process-step active" id="ps-0"><div class="process-step-dot"></div>Detecting body outline</div>
        <div class="process-step" id="ps-1"><div class="process-step-dot"></div>Calculating proportions</div>
        <div class="process-step" id="ps-2"><div class="process-step-dot"></div>Estimating measurements</div>
        <div class="process-step" id="ps-3"><div class="process-step-dot"></div>Matching your size profile</div>
      </div>
    </div>
  </div>`;
}

function runProcessingAnimation() {
  const stepLabels = ['ps-0','ps-1','ps-2','ps-3'];
  let current = 0;

  const advance = () => {
    if (current < stepLabels.length) {
      const el = document.getElementById(stepLabels[current]);
      if (el) {
        el.classList.remove('active');
        el.classList.add('done');
        el.querySelector('.process-step-dot') && (el.querySelector('.process-step-dot').style.background = 'var(--success)');
      }
      current++;
      const next = document.getElementById(stepLabels[current]);
      if (next) next.classList.add('active');
      setTimeout(advance, 700);
    } else {
      // Done — show results
      setTimeout(() => {
        App.state.profile.measurements = DATA.mockMeasurements;
        smartfitPhase = 'result';
        const content = document.getElementById('ai-tab-content');
        if (content) content.innerHTML = renderMeasurementResultHTML(DATA.mockMeasurements);
        showToast('📐 Measurements ready!');
      }, 500);
    }
  };
  setTimeout(advance, 700);
}

function renderMeasurementResultHTML(m) {
  const items = [
    { label: 'Chest', value: m.chest, unit: 'cm' },
    { label: 'Waist', value: m.waist, unit: 'cm' },
    { label: 'Hips',  value: m.hips,  unit: 'cm' },
    { label: 'Shoulder', value: m.shoulder, unit: 'cm' },
    { label: 'Inseam', value: m.inseam, unit: 'cm' },
    { label: 'Size',  value: m.size,  unit: '' },
  ];

  return `
  <div class="smartfit-section">
    <div class="measurement-result">
      <div class="measurement-header">
        <div class="measurement-header-icon">📐</div>
        <div>
          <h3>Your Measurements</h3>
          <p>AI-estimated · 94% confidence</p>
        </div>
      </div>
      <div class="measurement-grid">
        ${items.map(i => `
          <div class="measurement-item">
            <div class="measurement-label">${i.label}</div>
            <div class="measurement-value">${i.value}</div>
            <div class="measurement-unit">${i.unit}</div>
          </div>`).join('')}
      </div>
      <div class="measurement-confidence">
        <div class="confidence-icon">✅</div>
        <div class="confidence-text">High confidence · Based on 2 photos · Updated ${new Date().toLocaleDateString('en-IN',{day:'numeric',month:'short'})}</div>
      </div>
      <div class="measurement-actions">
        <button class="btn-primary" onclick="App.navigate('category',{id:'tailoring'});showToast('Measurements auto-applied to tailoring order!')">
          Book Tailoring with These Measurements
        </button>
        <button class="btn-secondary" onclick="showToast('Measurements saved to your profile ✓')">
          Save to Profile
        </button>
        <button class="btn-ghost btn-sm" style="width:100%;justify-content:center;" onclick="smartfitPhase='upload';uploadedPhotos=[];switchAITab('smartfit')">
          Retake Photos
        </button>
      </div>
    </div>

    <div style="background:var(--surface);border-radius:var(--r-xl);padding:16px;border:1px solid var(--border-light);">
      <div style="font-weight:700;margin-bottom:12px;">🎯 Recommended Services for You</div>
      ${[
        { name:'Custom Kurti Stitching', emoji:'👗', price:'₹399', time:'2 days' },
        { name:'Trouser Alteration',     emoji:'✂️', price:'₹149', time:'1 day'  },
        { name:'Salwar Kameez Full',     emoji:'🧵', price:'₹599', time:'3 days' },
      ].map(s => `
        <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border-light);" onclick="App.navigate('category',{id:'stitching'})">
          <span style="font-size:1.5rem">${s.emoji}</span>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:14px;">${s.name}</div>
            <div style="font-size:12px;color:var(--text-muted);">${s.time}</div>
          </div>
          <div style="font-weight:700;color:var(--brand);">${s.price}</div>
        </div>`).join('')}
    </div>
  </div>`;
}

/* ═══════════════ STYLE QUIZ ═══════════════ */
function renderQuizHTML() {
  if (App.state.profile.styleQuizResult) {
    return renderStyleResultHTML(App.state.profile.styleQuizResult);
  }

  const q = DATA.styleQuiz[quizStep];
  const pct = Math.round((quizStep / DATA.styleQuiz.length) * 100);

  return `
  <div class="smartfit-section">
    <div class="quiz-card">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${pct}%"></div>
      </div>
      <div class="quiz-q-num">Question ${quizStep + 1} of ${DATA.styleQuiz.length}</div>
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options">
        ${q.options.map((opt, i) => `
          <div class="quiz-option ${quizAnswers[quizStep] === i ? 'selected' : ''}"
               id="qopt-${i}"
               onclick="selectQuizOption(${i})">
            <div class="quiz-option-emoji">${opt.emoji}</div>
            <div>${opt.label}</div>
          </div>`).join('')}
      </div>
      <div class="quiz-nav">
        ${quizStep > 0 ? `<button class="btn-ghost btn-sm" onclick="quizBack()">← Back</button>` : '<div></div>'}
        <span class="quiz-step-indicator">${quizStep + 1} / ${DATA.styleQuiz.length}</span>
        <button class="btn-secondary btn-sm" style="width:auto;" onclick="quizNext()" ${quizAnswers[quizStep] === undefined ? 'disabled style="opacity:.5;pointer-events:none"' : ''} id="quiz-next-btn">
          ${quizStep === DATA.styleQuiz.length - 1 ? 'See Results 🎉' : 'Next →'}
        </button>
      </div>
    </div>
  </div>`;
}

function selectQuizOption(i) {
  quizAnswers[quizStep] = i;
  document.querySelectorAll('.quiz-option').forEach((el, j) => el.classList.toggle('selected', j === i));
  const btn = document.getElementById('quiz-next-btn');
  if (btn) { btn.removeAttribute('disabled'); btn.style.opacity = '1'; btn.style.pointerEvents = 'auto'; }
}

function quizNext() {
  if (quizAnswers[quizStep] === undefined) return;
  if (quizStep < DATA.styleQuiz.length - 1) {
    quizStep++;
    const content = document.getElementById('ai-tab-content');
    if (content) content.innerHTML = renderQuizHTML();
  } else {
    // Show results
    const result = DATA.styleResults.default;
    App.state.profile.styleQuizResult = result;
    const content = document.getElementById('ai-tab-content');
    if (content) content.innerHTML = renderStyleResultHTML(result);
    showToast('🎉 Style profile ready!');
  }
}

function quizBack() {
  if (quizStep > 0) {
    quizStep--;
    const content = document.getElementById('ai-tab-content');
    if (content) content.innerHTML = renderQuizHTML();
  }
}

function renderStyleResultHTML(result) {
  return `
  <div class="smartfit-section">
    <div class="style-result">
      <div class="style-result-tag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Your Style Profile
      </div>
      <h3>✨ ${result.label}</h3>
      <p>${result.desc}</p>
      <div class="style-tags">
        ${result.tags.map(t => `<span class="style-tag">${t}</span>`).join('')}
      </div>
    </div>
    <div style="background:var(--surface);border-radius:var(--r-xl);padding:16px;border:1px solid var(--border-light);">
      <div style="font-weight:700;margin-bottom:8px;">🛍️ Shop Your Style</div>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px;">Services matched to your style profile:</p>
      <button class="btn-primary" onclick="App.navigate('category',{id:'tailoring'})">Explore Tailoring →</button>
      <button class="btn-secondary" style="margin-top:8px;" onclick="switchAITab('feed')">Browse Style Feed →</button>
    </div>
    <button class="btn-ghost" style="width:100%;justify-content:center;" onclick="App.state.profile.styleQuizResult=null;quizStep=0;quizAnswers=[];switchAITab('quiz')">
      Retake Quiz
    </button>
  </div>`;
}

/* ═══════════════ STYLE FEED ═══════════════ */
function renderStyleFeedHTML() {
  return `
  <div class="style-feed">
    <div style="background:var(--surface-3);border-radius:var(--r-xl);padding:14px 16px;border:1px solid var(--border-light);display:flex;align-items:center;gap:12px;margin-bottom:0;">
      <div style="font-size:1.6rem;">💡</div>
      <div>
        <div style="font-weight:700;font-size:14px;color:var(--text-primary);">Get Personalised Advice</div>
        <div style="font-size:12px;color:var(--text-muted);">Based on your measurements + style quiz</div>
      </div>
      <button class="btn-secondary btn-sm" style="width:auto;flex-shrink:0;" onclick="switchAITab('quiz')">Take Quiz</button>
    </div>

    ${App.state.styleFeed.map((post, idx) => `
    <div class="style-post-card" id="sfpost-${post.id}">
      <div class="style-post-header">
        <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${post.author.avatar}</div>
        <div class="style-post-author">
          <div class="style-post-name">
            ${post.author.name}
            ${post.author.verified ? '<span class="verified-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> Verified</span>' : ''}
          </div>
          <div class="style-post-role">${post.author.role}</div>
        </div>
        <div class="style-post-time">${post.time}</div>
      </div>
      <div class="style-post-image">
        <span>${post.emoji}</span>
        ${post.isVideo ? `<div class="style-video-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>${post.duration}</div>` : ''}
      </div>
      <div class="style-post-body">
        <div class="style-post-text">${post.text}</div>
        <div class="style-post-tags">${post.tags.map(t => `<span class="post-tag">${t}</span>`).join('')}</div>
      </div>
      <div class="style-post-actions">
        <button class="post-action-btn ${post.liked ? 'liked' : ''}" id="sf-like-${post.id}" onclick="toggleStyleLike('${post.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          ${post.likes}
        </button>
        <button class="post-action-btn ${post.saved ? 'saved' : ''}" id="sf-save-${post.id}" onclick="toggleStyleSave('${post.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${post.saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          Save
        </button>
        <button class="get-advice-btn" onclick="showToast('🎨 Personalised advice sent to your profile!')">Get Advice</button>
      </div>
    </div>`).join('')}
  </div>`;
}

function toggleStyleLike(postId) {
  const post = App.state.styleFeed.find(p => p.id === postId);
  if (!post) return;
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  const btn = document.getElementById(`sf-like-${postId}`);
  if (btn) {
    btn.classList.toggle('liked', post.liked);
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      ${post.likes}`;
  }
}

function toggleStyleSave(postId) {
  const post = App.state.styleFeed.find(p => p.id === postId);
  if (!post) return;
  post.saved = !post.saved;
  showToast(post.saved ? '🔖 Saved to your collection!' : 'Removed from collection');

  const btn = document.getElementById(`sf-save-${postId}`);
  if (btn) {
    btn.classList.toggle('saved', post.saved);
    btn.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${post.saved ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
      Save`;
  }
}

/* ─── Register Page ─── */
window.addEventListener('load', () => {
  App.registerPage('ai', (c) => renderAI(c));
});


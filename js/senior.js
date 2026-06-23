/* ═══════════════════════════════════════════
   ServeNow — senior.js
   Senior Mode toggle, mic FAB wiring,
   simplified profile settings integration
   ═══════════════════════════════════════════ */

/* ─── Profile / Settings Page ─── */
function renderProfile(container) {
  const profile = App.state.profile;
  const seniorOn = App.state.seniorMode;

  container.innerHTML = `
  <div class="profile-page page-enter">
    <!-- Profile Header -->
    <div class="profile-header">
      <div class="profile-avatar">
        ${profile.name.charAt(0).toUpperCase()}
      </div>
      <div class="profile-name">${profile.name}</div>
      <div class="profile-email">${profile.email}</div>
    </div>

    <!-- Profile Body -->
    <div class="profile-body">

      <!-- Measurements Quick View -->
      ${profile.measurements ? `
      <div style="background:linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%);border-radius:var(--r-xl);padding:16px 20px;cursor:pointer;" onclick="App.navigate('ai')">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <div style="color:rgba(255,255,255,0.75);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;">Smart Fit Active</div>
          <div style="background:rgba(0,181,173,0.25);color:#4ECDC4;font-size:11px;font-weight:700;padding:2px 10px;border-radius:20px;">View →</div>
        </div>
        <div style="color:white;font-weight:700;font-size:15px;margin-bottom:4px;">📐 Your Measurements Saved</div>
        <div style="color:rgba(255,255,255,0.7);font-size:12px;">Chest: ${profile.measurements.chest}cm · Waist: ${profile.measurements.waist}cm · Size: ${profile.measurements.size}</div>
      </div>` : `
      <div style="background:var(--surface);border-radius:var(--r-xl);padding:16px;border:1.5px dashed var(--border);cursor:pointer;display:flex;align-items:center;gap:12px;" onclick="App.navigate('ai')">
        <div style="font-size:1.8rem;">📐</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:14px;">Set Up Smart Fit</div>
          <div style="font-size:12px;color:var(--text-muted);">Get AI body measurements in 30 seconds</div>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </div>`}

      <!-- Settings -->
      <div class="profile-section">
        <div class="profile-section-title">Account</div>
        <div class="profile-row" onclick="showToast('Edit profile coming soon!')">
          <div class="profile-row-icon">👤</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Edit Profile</div>
            <div class="profile-row-sub">${profile.name} · ${profile.email}</div>
          </div>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <div class="profile-row" onclick="showToast('Saved addresses: Home, Office')">
          <div class="profile-row-icon">📍</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Saved Addresses</div>
            <div class="profile-row-sub">2 addresses saved</div>
          </div>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <div class="profile-row" onclick="showToast('Payment methods coming soon!')">
          <div class="profile-row-icon">💳</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Payment Methods</div>
            <div class="profile-row-sub">UPI · GPay</div>
          </div>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>

      <!-- Preferences -->
      <div class="profile-section">
        <div class="profile-section-title">Preferences</div>

        <!-- Senior Mode Toggle -->
        <div class="profile-row senior-toggle-row" id="senior-toggle-row">
          <div class="profile-row-icon senior-mode-icon">👴</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Senior Mode</div>
            <div class="profile-row-sub">Large fonts, big buttons, voice assistant</div>
          </div>
          <label class="toggle" onclick="event.stopPropagation()">
            <input type="checkbox" id="senior-toggle-input" ${seniorOn ? 'checked' : ''} onchange="handleSeniorToggle(this.checked)">
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Voice Language -->
        <div class="profile-row" onclick="showVoiceLangPicker()">
          <div class="profile-row-icon" style="background:var(--brand-light);">🗣️</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Voice Language</div>
            <div class="profile-row-sub" id="voice-lang-label">${App.state.voiceLang === 'hi-IN' ? 'हिंदी (Hindi)' : 'English (India)'}</div>
          </div>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>

        <!-- Notifications -->
        <div class="profile-row">
          <div class="profile-row-icon" style="background:#FFF3E0;">🔔</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Notifications</div>
            <div class="profile-row-sub">Order updates, offers</div>
          </div>
          <label class="toggle" onclick="event.stopPropagation()">
            <input type="checkbox" checked onchange="showToast(this.checked?'🔔 Notifications on':'🔕 Notifications off')">
            <span class="toggle-slider"></span>
          </label>
        </div>
      </div>

      <!-- Service Provider -->
      <div class="profile-section">
        <div class="profile-section-title">Partner</div>
        <div class="profile-row" onclick="App.navigate('provider')">
          <div class="profile-row-icon" style="background:#E8F5E9;">🏪</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Provider Dashboard</div>
            <div class="profile-row-sub">Manage orders, earnings, availability</div>
          </div>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>

      <!-- About -->
      <div class="profile-section">
        <div class="profile-section-title">Support</div>
        <div class="profile-row" onclick="showHelpModal()">
          <div class="profile-row-icon" style="background:var(--accent-light);">📞</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Call Support</div>
            <div class="profile-row-sub">Mon–Sat, 8 AM–10 PM</div>
          </div>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
        <div class="profile-row" onclick="showToast('ServeNow v1.0 · Made with ❤️ in India')">
          <div class="profile-row-icon" style="background:var(--brand-light);">ℹ️</div>
          <div class="profile-row-info">
            <div class="profile-row-label">About ServeNow</div>
            <div class="profile-row-sub">Version 1.0 · Hyperlocal Services</div>
          </div>
          <svg class="arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18l6-6-6-6"/></svg>
        </div>
      </div>

      <!-- Logout -->
      <button style="width:100%;background:var(--error-bg);color:var(--error);font-size:15px;font-weight:700;padding:14px;border-radius:var(--r-xl);border:none;cursor:pointer;margin-top:8px;" onclick="showToast('👋 Logged out! (demo)')">
        Sign Out
      </button>

      <p style="font-size:11px;color:var(--text-muted);text-align:center;margin-top:8px;">ServeNow · Hyperlocal Services Platform</p>
    </div>
  </div>`;
}

/* ─── Senior Mode Handler ─── */
function handleSeniorToggle(on) {
  App.setSeniorMode(on);

  // If turning ON → show brief welcome
  if (on) {
    setTimeout(() => {
      speak('Senior Mode is now on. You can use the microphone button to place orders by voice.', 'en-IN');
    }, 600);
  }

  // Re-render profile to reflect change
  setTimeout(() => {
    const mc = document.getElementById('main-content');
    if (mc && App.state.page === 'profile') renderProfile(mc);
  }, 300);
}

/* ─── Voice Language Picker ─── */
function showVoiceLangPicker() {
  const current = App.state.voiceLang;
  const next = current === 'en-IN' ? 'hi-IN' : 'en-IN';
  const label = next === 'hi-IN' ? 'हिंदी (Hindi)' : 'English (India)';
  setVoiceLang(next);
  const el = document.getElementById('voice-lang-label');
  if (el) el.textContent = label;
}

/* ─── Register Page ─── */
window.addEventListener('load', () => {
  App.registerPage('profile', (c) => renderProfile(c));
});


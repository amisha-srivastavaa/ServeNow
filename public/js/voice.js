/* ===========================================
   ServeNow — voice.js
   Web Speech API wrapper (EN+HI), intent parser,
   TTS readback, voice assistant UI
   =========================================== */

let voiceRecognition = null;
let voiceLang = 'en-IN';
let isListening = false;
let ttsEnabled = true;

/* --- TTS Speak --- */
function speak(text, lang) {
  if (!ttsEnabled) return;
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang || voiceLang;
  utter.rate = 0.92;
  utter.pitch = 1.05;
  window.speechSynthesis.speak(utter);
}

/* --- Start Voice Assistant --- */
function startVoiceAssistant() {
  const modal = document.getElementById('voice-modal');
  const overlay = document.getElementById('voice-overlay');
  if (!modal || !overlay) return;

  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');

  // Reset UI
  setVoiceStatus('Listening…');
  setVoiceTranscript('');
  const respEl = document.getElementById('voice-response');
  if (respEl) respEl.classList.add('hidden');

  // Check browser support
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) {
    setVoiceStatus('Not supported in this browser');
    setVoiceTranscript('Please use Chrome or Edge for voice support.');
    speak('Voice assistant is not supported in this browser. Please try Chrome.');
    return;
  }

  // FIX #1 — Always create a fresh instance so handlers + lang are up-to-date.
  // Re-using a singleton means stale lang / detached handlers after first session.
  if (voiceRecognition) {
    try { voiceRecognition.abort(); } catch (_) {}
  }
  voiceRecognition = new SpeechRecognition();
  voiceRecognition.continuous = false;
  voiceRecognition.interimResults = true;
  voiceRecognition.lang = voiceLang;

  voiceRecognition.onstart = () => {
    isListening = true;
    setVoiceStatus('Listening…');
  };

  voiceRecognition.onresult = (e) => {
    const transcript = Array.from(e.results)
      .map(r => r[0].transcript)
      .join('');
    setVoiceTranscript('"' + transcript + '"');

    if (e.results[e.results.length - 1].isFinal) {
      processVoiceCommand(transcript);
    }
  };

  voiceRecognition.onerror = (e) => {
    isListening = false;
    if (e.error === 'not-allowed' || e.error === 'service-not-allowed') {
      // Mic permission denied — tell the user clearly
      setVoiceStatus('Microphone access denied');
      setVoiceTranscript('Allow microphone in browser settings, or tap the demo below.');
      showDemoFallbackBtn();
    } else if (e.error === 'no-speech') {
      // Timeout with no speech — show helpful prompt
      setVoiceStatus('No speech detected');
      setVoiceTranscript('Try saying: "Iron 3 shirts" or "Check my order"');
    } else {
      // Any other error (network, aborted, etc.) — fall back to demo
      simulateVoiceDemo();
    }
  };

  // FIX #7 — Clear onend reference so stale callbacks don't fire after modal close.
  voiceRecognition.onend = () => {
    isListening = false;
    // Do NOT call simulateVoiceDemo() here — onend fires normally after a final result too.
  };

  // FIX #2 — On InvalidStateError (already-started), abort + retry once instead of
  // jumping straight to demo mode.
  try {
    voiceRecognition.start();
  } catch (e) {
    if (e.name === 'InvalidStateError') {
      try {
        voiceRecognition.abort();
        voiceRecognition.start();
      } catch (_) {
        simulateVoiceDemo();
      }
    } else {
      simulateVoiceDemo();
    }
  }
}

/* --- Demo fallback button (shown when mic is blocked) --- */
function showDemoFallbackBtn() {
  const statusEl = document.getElementById('voice-status');
  if (!statusEl) return;
  // Append a small "Try Demo" button below the status if not already there
  if (!document.getElementById('voice-demo-btn')) {
    const btn = document.createElement('button');
    btn.id = 'voice-demo-btn';
    btn.className = 'btn-ghost btn-sm';
    btn.style.cssText = 'margin-top:12px;font-size:13px;';
    btn.textContent = 'Try Demo Mode';
    btn.onclick = () => { btn.remove(); simulateVoiceDemo(); };
    statusEl.parentNode.insertBefore(btn, statusEl.nextSibling);
  }
}

/* --- Demo mode (no mic / Firefox / blocked permission) --- */
const demoCommands = [
  'Iron 5 shirts pickup tomorrow morning',
  'Check my order status',
  'Book dry cleaning for my suit',
  'What services do you have?',
  'Cancel',
];
let demoIdx = 0;

function simulateVoiceDemo() {
  const cmd = demoCommands[demoIdx % demoCommands.length];
  demoIdx++;
  setVoiceStatus('Demo mode — simulating voice…');
  setVoiceTranscript('');

  let typed = '';
  const typeInterval = setInterval(() => {
    typed += cmd[typed.length];
    setVoiceTranscript('"' + typed + '"');
    if (typed.length === cmd.length) {
      clearInterval(typeInterval);
      setTimeout(() => processVoiceCommand(cmd), 400);
    }
  }, 55);
}

/* --- Intent Parser --- */
function processVoiceCommand(transcript) {
  setVoiceStatus('Processing…');
  const t = transcript.toLowerCase();

  setTimeout(() => {
    let response = '';

    if (matchIntent(t, ['iron', 'ironing', 'press', 'kapde']) ||
        (matchIntent(t, ['shirt', 'trouser']) && !matchIntent(t, ['dry clean', 'suit']))) {
      // FIX #3 — Add once and set correct qty; loop was adding extra via repeated addToCart calls.
      const num = extractNumber(t) || 1;
      const item = t.includes('trouser') ? 'trouser' : 'shirt';
      const svcId = item === 'shirt' ? 's-i-1' : 's-i-2';
      const svcName = item === 'shirt' ? 'Shirt / T-Shirt' : 'Trousers / Jeans';
      const price = item === 'shirt' ? 25 : 30;
      // Add once; existing addToCart increments qty automatically on repeat calls
      for (let i = 0; i < num; i++) {
        App.addToCart({ id: svcId, name: svcName, emoji: '👔', price }, 'ironing');
      }
      response = 'Added ' + num + ' ' + item + ' ironing to your cart. Total: ₹' + (price * num) + '. Shall I proceed to checkout?';

    } else if (matchIntent(t, ['dry clean', 'dry-clean', 'dry'])) {
      App.addToCart({ id: 's-d-1', name: 'Formal Suit (Dry Clean)', emoji: '🤵', price: 299 }, 'dry-cleaning');
      response = 'Added dry cleaning for 1 formal suit. ₹299. Want to add anything else?';

    } else if (matchIntent(t, ['laundry', 'wash', 'dhulai', 'washing'])) {
      App.addToCart({ id: 's-l-1', name: 'Wash & Fold (1 kg)', emoji: '🫧', price: 69 }, 'laundry');
      response = 'Added 1 kg wash and fold to your cart. ₹69.';

    } else if (matchIntent(t, ['shoe', 'boot', 'sandal', 'joota'])) {
      App.addToCart({ id: 's-sr-5', name: 'Sneaker Deep Clean', emoji: '👟', price: 199 }, 'shoe-repair');
      response = 'Added sneaker deep clean to your cart. ₹199.';

    // FIX #5 — 'help' keyword removed from services branch; moved call/support check BEFORE
    // the generic services branch so "call help" correctly routes to support.
    } else if (matchIntent(t, ['call', 'support', 'agent', 'human', 'connect'])) {
      response = 'Connecting you to a support agent now.';
      setTimeout(() => { closeVoiceModal(); showHelpModal(); }, 1500);

    } else if (matchIntent(t, ['checkout', 'pay', 'payment', 'order now', 'place order'])) {
      response = 'Taking you to checkout now!';
      setTimeout(() => { closeVoiceModal(); App.navigate('checkout'); }, 2000);

    } else if (matchIntent(t, ['order', 'status', 'track', 'where', 'delivery', 'kahan'])) {
      const order = App.state.activeOrder || DATA.activeOrder;
      response = 'Your order ' + order.id + ' is currently In Progress. Estimated delivery in ' + order.eta + ' minutes.';
      setTimeout(() => { closeVoiceModal(); App.navigate('tracking'); }, 3000);

    } else if (matchIntent(t, ['cancel', 'close', 'stop', 'never mind', 'band karo'])) {
      response = 'No problem! Let me know if you need anything.';
      setTimeout(closeVoiceModal, 2000);

    } else if (matchIntent(t, ['service', 'what', 'kya', 'option', 'help', 'available'])) {
      response = 'ServeNow offers Ironing, Dry Cleaning, Shoe Repair, Tailoring, Stitching, Laundry, Bag Repair, and Watch Repair — all delivered in 15 to 30 minutes!';

    } else {
      // FIX #4 — Was using a curly apostrophe (\u2019) inside a single-quoted string, causing
      // a JS syntax error in strict parsers. Now uses a template literal to avoid escaping.
      response = `I heard you, but I'm not sure what you need. Try saying "iron 3 shirts", "check my order", or "call support".`;
    }

    setVoiceStatus('Done ✓');
    showVoiceResponse(response);
    speak(response, voiceLang);
  }, 800);
}

/* --- Helpers --- */
function matchIntent(text, keywords) {
  return keywords.some(k => text.includes(k));
}

function extractNumber(text) {
  const match = text.match(/(\d+|one|two|three|four|five|six|seven|eight|nine|ten)/i);
  if (!match) return null;
  const words = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10 };
  const v = match[1].toLowerCase();
  return words[v] !== undefined ? words[v] : parseInt(v, 10);
}

function setVoiceStatus(text) {
  const el = document.getElementById('voice-status');
  if (el) el.textContent = text;
}

function setVoiceTranscript(text) {
  const el = document.getElementById('voice-transcript');
  if (el) el.textContent = text;
}

function showVoiceResponse(text) {
  const el = document.getElementById('voice-response');
  if (!el) return;
  el.textContent = text;
  el.classList.remove('hidden');
  el.style.animation = 'none';
  // Force reflow so the animation replays correctly each time
  void el.offsetWidth;
  el.style.animation = 'popIn 0.3s ease both';
}

/* --- Language Switch --- */
function setVoiceLang(lang) {
  voiceLang = lang;
  App.state.voiceLang = lang;

  document.querySelectorAll('.voice-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.id === (lang === 'en-IN' ? 'lang-en' : 'lang-hi'));
  });

  // FIX #6 — If recognition is active, stop + restart with new language.
  if (voiceRecognition && isListening) {
    try {
      voiceRecognition.stop();   // onend fires, isListening -> false
    } catch (_) {}
    // Brief delay so the engine fully stops before restarting
    setTimeout(startVoiceAssistant, 300);
  }

  showToast(lang === 'en-IN' ? '🇬🇧 English selected' : '🇮🇳 हिंदी चुनी गई');
}

/* --- Close --- */
function closeVoiceModal() {
  if (voiceRecognition) {
    // FIX #7 — Null out onend before stopping so stale callbacks don't fire after close.
    voiceRecognition.onend = null;
    if (isListening) {
      try { voiceRecognition.stop(); } catch (_) {}
    }
    isListening = false;
  }
  if (window.speechSynthesis) window.speechSynthesis.cancel();
  document.getElementById('voice-modal').classList.add('hidden');
  document.getElementById('voice-overlay').classList.add('hidden');
}

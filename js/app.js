/* ═══════════════════════════════════════════
   ServeNow — app.js
   Core router, global state, navigation,
   toast, location, cart badge, modals
   ═══════════════════════════════════════════ */

/* ─── Global State ─── */
window.App = (function () {

  const state = {
    page: 'home',
    params: {},
    cart: [],       /* [{ serviceId, name, emoji, price, qty, category }] */
    profile: {
      name: 'Amisha',
      email: 'amisha@example.com',
      location: 'Sector 15, Noida',
      measurements: null,
      styleQuizResult: null,
    },
    seniorMode: JSON.parse(localStorage.getItem('sn_senior') || 'false'),
    voiceLang: 'en-IN',
    activeOrder: DATA.activeOrder,
    communityPosts: JSON.parse(JSON.stringify(DATA.communityPosts)),
    styleFeed: JSON.parse(JSON.stringify(DATA.styleFeed)),
  };

  /* ─── Page Registry ─── */
  const pages = {};
  function registerPage(id, renderer) { pages[id] = renderer; }

  /* ─── Navigate ─── */
  function navigate(page, params = {}) {
    state.page = page;
    state.params = params;

    // Update hash
    const hash = params && Object.keys(params).length
      ? `#${page}/${Object.values(params).join('/')}`
      : `#${page}`;
    history.pushState({ page, params }, '', hash);

    // Close cart if open
    closeCart();

    // Render
    render();

    // Update nav
    updateNav(page);

    // Scroll to top
    const mc = document.getElementById('main-content');
    if (mc) mc.scrollTop = 0;
  }

  /* ─── Render ─── */
  function render() {
    const mc = document.getElementById('main-content');
    if (!mc) return;

    const renderer = pages[state.page];
    if (renderer) {
      mc.innerHTML = '';
      renderer(mc, state.params);
      mc.firstElementChild && mc.firstElementChild.classList.add('page-enter');
    } else {
      mc.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><h3>Page not found</h3><p>Sorry, this page doesn't exist.</p></div>`;
    }

    // Update back button visibility
    updateBackBtn();
    // Update cart badge
    updateCartBadge();
    // Update voice FAB
    updateVoiceFab();
  }

  /* ─── Nav ─── */
  function updateNav(page) {
    const mainPages = ['home', 'orders', 'ai', 'community', 'profile'];
    document.querySelectorAll('#bottom-nav .nav-item, #senior-nav .senior-nav-item').forEach(el => {
      el.classList.remove('active');
    });
    if (mainPages.includes(page)) {
      const el = document.getElementById(`nav-${page}`);
      if (el) el.classList.add('active');
    }
  }

  function updateBackBtn() {
    const btn = document.getElementById('btn-back');
    const mainPages = ['home', 'orders', 'ai', 'community', 'profile'];
    if (btn) {
      if (!mainPages.includes(state.page)) {
        btn.classList.remove('hidden');
        btn.onclick = () => navigate('home');
      } else {
        btn.classList.add('hidden');
      }
    }
  }

  function updateVoiceFab() {
    const fab = document.getElementById('voice-fab');
    if (fab) fab.classList.toggle('hidden', !state.seniorMode);
    const micTop = document.getElementById('btn-voice-top');
    if (micTop) micTop.classList.toggle('hidden', !state.seniorMode);
  }

  /* ─── Cart ─── */
  function addToCart(service, category) {
    const existing = state.cart.find(i => i.serviceId === service.id);
    if (existing) {
      existing.qty += 1;
    } else {
      state.cart.push({
        serviceId: service.id,
        name: service.name,
        emoji: service.emoji,
        price: service.price,
        qty: 1,
        category,
      });
    }
    updateCartBadge();
    showToast(`${service.emoji || (existing && existing.emoji) || '🛒'} Added to cart`);
    // Re-render cart if open
    if (document.getElementById('cart-drawer').classList.contains('open')) {
      renderCartInner();
    }
    // Animate badge
    const badge = document.getElementById('cart-badge');
    if (badge) {
      badge.classList.remove('pop');
      requestAnimationFrame(() => badge.classList.add('pop'));
    }
  }

  function removeFromCart(serviceId) {
    const idx = state.cart.findIndex(i => i.serviceId === serviceId);
    if (idx > -1) {
      if (state.cart[idx].qty > 1) {
        state.cart[idx].qty -= 1;
      } else {
        state.cart.splice(idx, 1);
      }
      updateCartBadge();
      if (document.getElementById('cart-drawer').classList.contains('open')) {
        renderCartInner();
      }
    }
  }

  function clearCart() {
    state.cart = [];
    updateCartBadge();
  }

  function getCartTotal() {
    return state.cart.reduce((sum, i) => sum + i.price * i.qty, 0);
  }

  function getCartCount() {
    return state.cart.reduce((sum, i) => sum + i.qty, 0);
  }

  function updateCartBadge() {
    const badge = document.getElementById('cart-badge');
    const count = getCartCount();
    if (badge) {
      badge.textContent = count;
      badge.classList.toggle('hidden', count === 0);
    }
  }

  /* ─── Senior Mode ─── */
  function setSeniorMode(on) {
    state.seniorMode = on;
    localStorage.setItem('sn_senior', JSON.stringify(on));
    document.body.classList.toggle('senior-mode', on);
    document.getElementById('bottom-nav').classList.toggle('hidden', on);
    document.getElementById('senior-nav').classList.toggle('hidden', !on);
    const fab = document.getElementById('voice-fab');
    if (fab) fab.classList.toggle('hidden', !on);
    const micTop = document.getElementById('btn-voice-top');
    if (micTop) micTop.classList.toggle('hidden', !on);
    showToast(on ? '👴 Senior Mode ON' : 'Senior Mode OFF');
    // Add profile btn to senior nav if not already present
    updateSeniorNavProfile();
  }

  function updateSeniorNavProfile() {
    const sn = document.getElementById('senior-nav');
    if (!sn) return;
    if (!document.getElementById('senior-nav-settings')) {
      const btn = document.createElement('button');
      btn.className = 'senior-nav-item';
      btn.id = 'senior-nav-settings';
      btn.setAttribute('onclick', "App.navigate('profile')");
      btn.innerHTML = `<span class="senior-nav-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20v-1a8 8 0 0 1 16 0v1"/></svg></span><span class="senior-nav-label">Profile</span>`;
      // Insert before help button
      const helpBtn = document.getElementById('senior-nav-help');
      if (helpBtn) sn.insertBefore(btn, helpBtn);
      else sn.appendChild(btn);
    }
  }

  /* ─── Init ─── */
  function init() {
    // Apply senior mode
    if (state.seniorMode) {
      document.body.classList.add('senior-mode');
      document.getElementById('bottom-nav').classList.add('hidden');
      document.getElementById('senior-nav').classList.remove('hidden');
      updateSeniorNavProfile();
    }

    // Hash routing
    window.addEventListener('popstate', (e) => {
      if (e.state) navigate(e.state.page, e.state.params);
      else navigate('home');
    });

    // Handle hash on load
    const hash = location.hash.slice(1);
    if (hash) {
      const [page, ...rest] = hash.split('/');
      navigate(page, rest.length ? { id: rest[0] } : {});
    } else {
      navigate('home');
    }

    // Simulate location detection
    setTimeout(() => {
      const locEl = document.getElementById('location-name');
      if (locEl) locEl.textContent = state.profile.location;
    }, 1200);

    // Orders badge
    const ob = document.getElementById('orders-badge');
    if (ob) ob.classList.remove('hidden');
  }

  return {
    state,
    navigate,
    registerPage,
    render,
    addToCart,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    setSeniorMode,
    init,
  };
})();

/* ─── Cart Drawer ─── */
function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  const isOpen = drawer.classList.contains('open');
  if (!isOpen) {
    renderCartInner();
    drawer.classList.add('open');
    overlay.classList.remove('hidden');
  } else {
    closeCart();
  }
}

function closeCart() {
  document.getElementById('cart-drawer').classList.remove('open');
  document.getElementById('cart-overlay').classList.add('hidden');
}

function renderCartInner() {
  const cart = App.state.cart;
  const inner = document.getElementById('cart-inner');
  if (!inner) return;

  if (cart.length === 0) {
    inner.innerHTML = `
      <div class="cart-header">
        <h2>🛒 Your Cart</h2>
        <button class="btn-icon" onclick="closeCart()">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
      <div class="cart-empty">
        <div class="cart-empty-icon">🛒</div>
        <h3>Your cart is empty</h3>
        <p>Add services to get started</p>
        <button class="btn-secondary btn-sm" style="margin-top:16px;width:auto;" onclick="closeCart();App.navigate('home');">Browse Services</button>
      </div>`;
    return;
  }

  const total = App.getCartTotal();
  const deliveryFee = total >= 299 ? 0 : 29;
  const taxes = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + taxes;

  inner.innerHTML = `
    <div class="cart-header">
      <h2>🛒 Your Cart <span style="font-size:.85em;color:var(--text-muted);font-weight:500">(${cart.length} item${cart.length > 1 ? 's' : ''})</span></h2>
      <button class="btn-icon" onclick="closeCart()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    ${cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-icon">${item.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${item.name}</div>
          <div class="cart-item-price">₹${item.price} each</div>
        </div>
        <div class="qty-counter">
          <button class="qty-btn" onclick="App.removeFromCart('${item.serviceId}')">−</button>
          <span class="qty-value">${item.qty}</span>
          <button class="qty-btn" onclick="App.addToCart({id:'${item.serviceId}'})">+</button>
        </div>
        <div style="font-weight:700;color:var(--text-primary);min-width:52px;text-align:right;">₹${item.price * item.qty}</div>
      </div>`).join('')}
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Subtotal</span><span>₹${total}</span></div>
      <div class="cart-summary-row"><span>Delivery</span><span>${deliveryFee === 0 ? '<span style="color:var(--success);font-weight:600">FREE</span>' : '₹' + deliveryFee}</span></div>
      <div class="cart-summary-row"><span>Taxes (5%)</span><span>₹${taxes}</span></div>
      <div class="cart-summary-row total"><span>Total</span><span>₹${grandTotal}</span></div>
    </div>
    ${deliveryFee > 0 ? `<p style="font-size:11px;color:var(--brand);text-align:center;margin-top:8px;">Add ₹${299-total} more for free delivery 🎉</p>` : '<p style="font-size:11px;color:var(--success);text-align:center;margin-top:8px;font-weight:600">✓ Free delivery applied!</p>'}
    <div class="sticky-footer" style="position:relative;margin-top:16px;">
      <button class="btn-primary" onclick="closeCart();App.navigate('checkout')">
        Proceed to Checkout · ₹${grandTotal}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>`;
}

/* ─── Toast ─── */
function showToast(msg, duration = 2200) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.remove('hidden');
  requestAnimationFrame(() => {
    requestAnimationFrame(() => toast.classList.add('show'));
  });
  clearTimeout(toast._timer);
  toast._timer = setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.classList.add('hidden'), 400);
  }, duration);
}

/* ─── Location Modal ─── */
function showLocationModal() {
  document.getElementById('location-modal').classList.remove('hidden');
  document.getElementById('location-overlay').classList.remove('hidden');
}
function closeLocationModal() {
  document.getElementById('location-modal').classList.add('hidden');
  document.getElementById('location-overlay').classList.add('hidden');
}
function detectLocation() {
  showToast('📍 Detecting your location…');
  setTimeout(() => {
    selectAddress('Sector 15, Noida, UP');
  }, 1500);
}
function selectAddress(addr) {
  document.getElementById('location-name').textContent = addr;
  App.state.profile.location = addr;
  closeLocationModal();
  showToast('📍 Location updated!');
}

/* ─── Help Modal ─── */
function showHelpModal() {
  document.getElementById('help-modal').classList.remove('hidden');
  document.getElementById('help-overlay').classList.remove('hidden');
}
function closeHelpModal() {
  document.getElementById('help-modal').classList.add('hidden');
  document.getElementById('help-overlay').classList.add('hidden');
}
function simulateCall() {
  closeHelpModal();
  showToast('📞 Connecting to support agent…');
  setTimeout(() => showToast('✅ Support agent will call you in 2 minutes', 3000), 2000);
}

/* ─── Notifications ─── */
function showNotifToast() {
  showToast('🔔 No new notifications', 2000);
}

/* ─── Init after ALL scripts load (avoids race with page registration) ─── */
window.addEventListener('load', () => App.init());

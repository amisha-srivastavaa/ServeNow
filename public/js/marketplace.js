/* ═══════════════════════════════════════════
   ServeNow — marketplace.js
   Home, category, service list, checkout flow,
   live tracking, order history, provider dashboard
   ═══════════════════════════════════════════ */

/* ─── Stars helper ─── */
function stars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let s = '';
  for (let i = 0; i < full; i++) s += '★';
  if (half) s += '½';
  return s;
}

/* ═══════════════ HOME PAGE ═══════════════ */
function renderHome(container) {
  const now = new Date();
  const hr = now.getHours();
  const greeting = hr < 12 ? 'Good morning' : hr < 17 ? 'Good afternoon' : 'Good evening';

  container.innerHTML = `
  <div class="home-page page-enter">
    <!-- Hero -->
    <div class="hero-strip">
      <div class="hero-greeting">${greeting}, ${App.state.profile.name} 👋</div>
      <div class="hero-title">What do you need<br>taken care of?</div>
      <div class="hero-sub">Services at your doorstep, fast.</div>
      <div class="hero-search-wrap">
        <div class="hero-search" onclick="focusSearch()">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          <span>Search ironing, laundry, repair…</span>
          <span class="search-shortcut">Quick</span>
        </div>
        <div class="time-strip">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          <span>15–30 min pickup in your area</span>
        </div>
      </div>
    </div>

    <div class="home-body">

      <!-- Promo Banner -->
      <div style="padding:0 16px;">
        <div class="promo-banner">
          <div>
            <div class="promo-tag">🔥 Today's Offer</div>
            <div class="promo-title">First Order<br>FREE Delivery</div>
            <div class="promo-sub">No min. order value · Use code <strong>SERVE1ST</strong></div>
          </div>
          <div class="promo-emoji">🎁</div>
        </div>
      </div>

      <!-- Categories -->
      <div>
        <div class="section-header">
          <h2>Our Services</h2>
          <button class="link-btn" onclick="showToast('All services listed below!')">See all</button>
        </div>
        <div class="category-grid">
          ${DATA.categories.map(cat => `
            <div class="category-card" onclick="App.navigate('category', {id:'${cat.id}'})" id="cat-${cat.id}">
              <div class="cat-icon-wrap" style="background:${cat.color}">
                <span style="font-size:1.8rem">${cat.emoji}</span>
              </div>
              <div class="cat-name">${cat.name}</div>
              <div class="cat-time">${cat.time}</div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Quick Reorder -->
      ${App.state.activeOrder || DATA.orders.length > 0 ? `
      <div>
        <div class="section-header">
          <h2>Order Again</h2>
          <button class="link-btn" onclick="App.navigate('orders')">View all</button>
        </div>
        <div class="quick-reorder-scroll">
          ${DATA.orders.map(o => o.items.map(item => `
            <div class="reorder-card" onclick="App.navigate('category',{id:'ironing'})">
              <div class="reorder-icon">${item.emoji}</div>
              <div class="reorder-name">${item.name.split(' ×')[0]}</div>
              <div class="reorder-price">₹${item.price}</div>
              <button class="reorder-btn" onclick="event.stopPropagation();showToast('Added to cart! 🎉')">Reorder</button>
            </div>
          `).join('')).join('')}
        </div>
      </div>` : ''}

      <!-- Active Order Banner -->
      ${App.state.activeOrder ? `
      <div style="padding:0 16px;">
        <div style="background:var(--gradient-brand);border-radius:var(--r-xl);padding:16px;cursor:pointer;box-shadow:var(--shadow-brand);" onclick="App.navigate('tracking')">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="color:rgba(255,255,255,0.85);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em">Live Order</div>
            <div style="background:rgba(255,255,255,0.2);color:white;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;">Track →</div>
          </div>
          <div style="color:white;font-weight:700;font-size:16px;margin-bottom:4px;">Order #${App.state.activeOrder.id}</div>
          <div style="color:rgba(255,255,255,0.85);font-size:13px;">🛵 Picked up · Est. ${App.state.activeOrder.eta} min delivery</div>
        </div>
      </div>` : ''}

      <!-- Second promo -->
      <div style="padding:0 16px;">
        <div class="promo-banner" style="background:var(--gradient-accent);">
          <div>
            <div class="promo-tag">✨ New Feature</div>
            <div class="promo-title">AI Smart Fit<br>Now Live!</div>
            <div class="promo-sub">Get your measurements in seconds</div>
          </div>
          <div class="promo-emoji" style="cursor:pointer;" onclick="App.navigate('ai')">📐</div>
        </div>
      </div>

      <!-- Provider CTA -->
      <div style="padding:0 16px 8px;">
        <div style="background:var(--surface);border:1.5px solid var(--border);border-radius:var(--r-xl);padding:20px;display:flex;align-items:center;gap:16px;cursor:pointer;" onclick="App.navigate('provider')">
          <div style="font-size:2.5rem;">🏪</div>
          <div style="flex:1;">
            <div style="font-weight:700;color:var(--text-primary);margin-bottom:4px;">Are you a service provider?</div>
            <div style="font-size:13px;color:var(--text-muted);">Join ServeNow and grow your business</div>
          </div>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </div>
      </div>

    </div>
  </div>`;
}

/* ═══════════════ CATEGORY PAGE ═══════════════ */
function renderCategory(container, params) {
  const catId = params.id || 'ironing';
  const cat = DATA.categories.find(c => c.id === catId) || DATA.categories[0];
  const services = DATA.services[catId] || [];

  document.getElementById('btn-back').classList.remove('hidden');
  document.getElementById('btn-back').onclick = () => App.navigate('home');

  container.innerHTML = `
  <div class="category-page page-enter">
    <!-- Header -->
    <div class="category-header">
      <div class="category-header-emoji">${cat.emoji}</div>
      <h1>${cat.name}</h1>
      <p>${cat.tagline} · <span style="opacity:.9">${cat.time} service</span></p>
    </div>

    <!-- Sort/Filter chips -->
    <div class="chip-row" style="padding-top:12px;">
      <div class="chip active">All</div>
      <div class="chip" onclick="showToast('Popular items shown!')">Popular ⭐</div>
      <div class="chip" onclick="showToast('Sorted by price!')">Price ↑</div>
      <div class="chip" onclick="showToast('Sorted by rating!')">Top Rated</div>
      <div class="chip" onclick="showToast('Express items shown!')">Express ⚡</div>
    </div>

    <!-- Service List -->
    <div class="service-list">
      ${services.map(svc => {
        const inCart = App.state.cart.find(i => i.serviceId === svc.id);
        const qty = inCart ? inCart.qty : 0;
        return `
        <div class="service-card" id="svc-${svc.id}">
          <div class="service-card-inner">
            <div class="service-icon-box" style="background:${cat.color}">${svc.emoji}</div>
            <div class="service-info">
              <div class="service-name">${svc.name} ${svc.popular ? '<span style="font-size:10px;background:var(--accent-light);color:var(--accent-dark);padding:2px 8px;border-radius:20px;font-weight:700;">Popular</span>' : ''}</div>
              <div class="service-desc">${svc.desc}</div>
              <div class="service-meta">
                <span class="time-badge">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  ${svc.time}
                </span>
                <span class="rating">
                  <span class="rating-star">★</span>
                  <span class="rating-value">${svc.rating}</span>
                  <span class="rating-count">(${svc.reviews})</span>
                </span>
              </div>
            </div>
          </div>
        <div class="service-action">
            <div class="service-price">₹${svc.price} <span class="original-price">₹${svc.orig}</span></div>
            <div id="svc-action-${svc.id}">
              ${qty > 0 ? `
              <div class="qty-counter">
                <button class="qty-btn" onclick="removeServiceById('${svc.id}','${catId}')">−</button>
                <span class="qty-value">${qty}</span>
                <button class="qty-btn" onclick="addServiceById('${svc.id}','${catId}')">+</button>
              </div>` : `
              <button class="btn-add" onclick="addServiceById('${svc.id}','${catId}')">ADD</button>`}
            </div>
          </div>
        </div>`;
      }).join('')}
    </div>

    <!-- Cart Footer (if items) -->
    <div id="cat-cart-footer" style="display:${App.state.cart.length > 0 ? 'block' : 'none'};">
      <div class="sticky-footer">
        <button class="btn-primary" onclick="toggleCart()">
          View Cart · ₹${App.getCartTotal()}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </button>
      </div>
    </div>
  </div>`;
}

function renderCategoryAction(svcId, catId) {
  const inCart = App.state.cart.find(i => i.serviceId === svcId);
  const qty = inCart ? inCart.qty : 0;

  const action = document.getElementById(`svc-action-${svcId}`);
  if (action) {
    if (qty > 0) {
      action.innerHTML = `
        <div class="qty-counter">
          <button class="qty-btn" onclick="removeServiceById('${svcId}','${catId}')">−</button>
          <span class="qty-value">${qty}</span>
          <button class="qty-btn" onclick="addServiceById('${svcId}','${catId}')">+</button>
        </div>`;
    } else {
      action.innerHTML = `<button class="btn-add" onclick="addServiceById('${svcId}','${catId}')">ADD</button>`;
    }
  }

  // FIX #2 — use innerHTML to preserve cart SVG icon, not textContent which strips child elements
  const footer = document.getElementById('cat-cart-footer');
  if (footer) {
    footer.style.display = App.state.cart.length > 0 ? 'block' : 'none';
    const btn = footer.querySelector('button');
    if (btn) btn.innerHTML = `View Cart &middot; \u20B9${App.getCartTotal()} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`;
  }
}

/* ═══════════════ CHECKOUT PAGE ═══════════════ */
let checkoutStep = 0;
let selectedDate = 0;
let selectedSlot = 0;
let selectedPayment = 'upi';

/* FIX #1 — slots defined at module scope so placeOrder can access it */
const PICKUP_SLOTS = [
  { time: '8:00–10:00 AM',  type: 'Morning',      avail: true,  fast: true  },
  { time: '10:00–12:00 PM', type: 'Late Morning',  avail: true,  fast: false },
  { time: '12:00–2:00 PM', type: 'Afternoon',    avail: false, fast: false },
  { time: '2:00–4:00 PM',  type: 'Afternoon',    avail: true,  fast: false },
  { time: '4:00–6:00 PM',  type: 'Evening',      avail: true,  fast: false },
  { time: '6:00–8:00 PM',  type: 'Evening',      avail: true,  fast: false },
];

function renderCheckout(container) {
  if (App.state.cart.length === 0) {
    container.innerHTML = `
    <div class="empty-state page-enter">
      <div class="empty-icon">🛒</div>
      <h3>Your cart is empty</h3>
      <p>Add services to proceed to checkout</p>
      <button class="btn-primary" style="margin-top:16px;width:auto;padding:12px 32px;" onclick="App.navigate('home')">Browse Services</button>
    </div>`;
    return;
  }

  checkoutStep = 0;
  renderCheckoutStep(container);
}

function renderCheckoutStep(container) {
  const steps = ['Slot', 'Address', 'Payment'];
  const cart = App.state.cart;
  const total = App.getCartTotal();
  const deliveryFee = total >= 299 ? 0 : 29;
  const taxes = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + taxes;

  const dates = [];
  for (let i = 0; i < 5; i++) {
    const d = new Date(); d.setDate(d.getDate() + i);
    dates.push({ day: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][d.getDay()], num: d.getDate() });
  }

  const slots = PICKUP_SLOTS;  /* use module-level array */

  container.innerHTML = `
  <div class="checkout-page page-enter">
    <!-- Progress -->
    <div class="checkout-progress">
      ${steps.map((s, i) => `
      <div class="progress-step ${i < checkoutStep ? 'done' : i === checkoutStep ? 'active' : ''}">
        <div class="step-dot">${i < checkoutStep ? '✓' : i + 1}</div>
        <div class="step-label">${s}</div>
      </div>`).join('')}
    </div>

    <!-- Order Summary -->
    <div class="checkout-section">
      <h3><span>🛒</span> Order Summary</h3>
      ${cart.map(item => `
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-light);">
          <span style="font-size:14px;">${item.emoji} ${item.name} <span style="color:var(--text-muted);">×${item.qty}</span></span>
          <span style="font-weight:700;">₹${item.price * item.qty}</span>
        </div>`).join('')}
      <div style="display:flex;justify-content:space-between;font-weight:800;font-size:16px;margin-top:12px;padding-top:12px;border-top:2px solid var(--border);">
        <span>Grand Total</span><span style="color:var(--brand);">₹${grandTotal}</span>
      </div>
    </div>

    <!-- Step 0: Slot Picker -->
    ${checkoutStep === 0 ? `
    <div class="checkout-section">
      <h3><span>📅</span> Choose Pickup Slot</h3>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px;">Select your preferred date and time for pickup.</p>
      <div class="date-scroll">
        ${dates.map((d, i) => `
          <div class="date-chip ${i === selectedDate ? 'selected' : ''}" onclick="selectedDate=${i};document.querySelectorAll('.date-chip').forEach((el,j)=>el.classList.toggle('selected',j===${i}))">
            <span class="date-day">${i === 0 ? 'Today' : d.day}</span>
            <span class="date-num">${d.num}</span>
          </div>`).join('')}
      </div>
      <div class="time-slots">
        ${slots.map((s, i) => `
          <div class="time-slot ${i === selectedSlot ? 'selected' : ''} ${!s.avail ? 'unavailable' : ''}"
               onclick="${s.avail ? `selectedSlot=${i};document.querySelectorAll('.time-slot').forEach((el,j)=>el.classList.toggle('selected',j===${i}))` : ''}">
            <div class="slot-time">${s.time}</div>
            <div class="slot-type">${s.type}</div>
            ${s.fast ? '<div class="slot-badge">Fast Pickup</div>' : ''}
            ${!s.avail ? '<div style="font-size:10px;color:var(--error);margin-top:2px;">Unavailable</div>' : ''}
          </div>`).join('')}
      </div>
    </div>` : ''}

    <!-- Step 1: Address -->
    ${checkoutStep === 1 ? `
    <div class="checkout-section">
      <h3><span>📍</span> Delivery Address</h3>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${DATA.savedAddresses.map((a, i) => `
          <div class="address-item" style="${i===0?'border-color:var(--brand);background:var(--brand-xlight);':''}" onclick="this.parentNode.querySelectorAll('.address-item').forEach(el=>el.removeAttribute('style'));this.style.borderColor='var(--brand)';this.style.background='var(--brand-xlight)'">
            <span style="font-size:1.3rem">${a.icon}</span>
            <div><strong>${a.label}</strong><span>${a.address}</span></div>
          </div>`).join('')}
        <div class="address-item" onclick="showToast('Address saved! 📍')">
          <span style="font-size:1.3rem">➕</span>
          <div><strong>Add New Address</strong><span>Enter a new delivery location</span></div>
        </div>
      </div>
    </div>
    <div class="checkout-section">
      <h3><span>📝</span> Special Instructions</h3>
      <textarea class="form-input" placeholder="e.g. Use extra starch on shirts, handle silk with care…" rows="3"></textarea>
    </div>` : ''}

    <!-- Step 2: Payment -->
    ${checkoutStep === 2 ? `
    <div class="checkout-section">
      <h3><span>💳</span> Payment Method</h3>
      <div class="payment-options">
        ${[
          { id:'upi',  icon:'📲', name:'UPI / GPay / PhonePe', sub:'Instant payment via UPI apps' },
          { id:'card', icon:'💳', name:'Credit / Debit Card',  sub:'Visa, Mastercard, RuPay' },
          { id:'cod',  icon:'💵', name:'Cash on Delivery',     sub:'Pay when your order arrives' },
          { id:'wallet', icon:'👛', name:'ServeNow Wallet', sub:'Balance: ₹150 available' },
        ].map(p => `
          <div class="payment-option ${p.id === selectedPayment ? 'selected' : ''}" onclick="selectedPayment='${p.id}';document.querySelectorAll('.payment-option').forEach(el=>el.classList.remove('selected'));this.classList.add('selected');this.querySelector('.payment-radio').classList.add('selected')">
            <div class="payment-icon">${p.icon}</div>
            <div class="payment-info">
              <div class="payment-name">${p.name}</div>
              <div class="payment-sub">${p.sub}</div>
            </div>
            <div class="payment-radio ${p.id === selectedPayment ? 'selected' : ''}"></div>
          </div>`).join('')}
      </div>
    </div>` : ''}

    <!-- CTA -->
    <div class="sticky-footer">
      <button class="btn-primary" onclick="checkoutNext()">
        ${checkoutStep < 2 ? 'Continue' : `Place Order · ₹${grandTotal}`}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>`;
}

function checkoutNext() {
  const mc = document.getElementById('main-content');
  if (checkoutStep < 2) {
    checkoutStep++;
    renderCheckoutStep(mc);
  } else {
    // Place order
    placeOrder(mc);
  }
}

function placeOrder(container) {
  // Show loading
  const btn = container.querySelector('.btn-primary');
  if (btn) { btn.disabled = true; btn.textContent = 'Processing…'; }

  // Save cart details before clearing
  const orderItems = App.state.cart.map(item => ({
    name: `${item.name} ×${item.qty}`,
    emoji: item.emoji,
    price: item.price * item.qty
  }));
  const total = App.getCartTotal();
  const deliveryFee = total >= 299 ? 0 : 29;
  const taxes = Math.round(total * 0.05);
  const grandTotal = total + deliveryFee + taxes;

  setTimeout(() => {
    const orderId = 'ORD-' + Math.floor(9000 + Math.random() * 999);
    
    // Assign order state safely
    App.state.activeOrder = {
      id: orderId,
      statusIndex: 0,
      eta: 28,
      items: orderItems,
      total: grandTotal,
      steps: DATA.activeOrder.steps,
      provider: DATA.activeOrder.provider
    };

    App.clearCart();

    /* FIX #1 — PICKUP_SLOTS is now in scope (module-level) */
    const slotLabel = PICKUP_SLOTS[selectedSlot] ? PICKUP_SLOTS[selectedSlot].time : '15–30 min';

    container.innerHTML = `
    <div class="order-confirm page-enter">
      <div class="confirm-animation">🎉</div>
      <h2 class="confirm-title">Order Placed!</h2>
      <p class="confirm-sub">Your services are confirmed. We'll pick up your items at your selected slot.</p>
      <div class="order-id-badge">Order #${orderId}</div>
      <div style="background:var(--brand-light);border-radius:var(--r-xl);padding:16px;width:100%;margin-top:8px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
          <span style="font-size:1.4rem">🛵</span>
          <div>
            <div style="font-weight:700;font-size:15px;">Pickup slot: ${slotLabel}</div>
            <div style="font-size:12px;color:var(--text-muted);">Agent will arrive at your door</div>
          </div>
        </div>
      </div>
      <div style="display:flex;flex-direction:column;gap:10px;width:100%;margin-top:8px;">
        <button class="btn-primary" onclick="App.navigate('tracking')">
          Track Your Order
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
        <button class="btn-ghost" onclick="App.navigate('home')">Back to Home</button>
      </div>
    </div>`;
  }, 1800);
}

/* ═══════════════ TRACKING PAGE ═══════════════ */
function renderTracking(container) {
  const order = App.state.activeOrder || DATA.activeOrder;
  const si = order.statusIndex !== undefined ? order.statusIndex : 1;

  container.innerHTML = `
  <div class="tracking-page page-enter">
    <!-- Map -->
    <div class="tracking-map">
      <div class="map-grid"></div>
      <div class="map-road-h" style="top:40%"></div>
      <div class="map-road-h" style="top:70%"></div>
      <div class="map-road-v" style="left:30%"></div>
      <div class="map-road-v" style="left:65%"></div>
      <div class="map-pulse" style="top:40%;left:65%;"></div>
      <div class="map-pin" style="top:40%;left:65%;">📍</div>
      <div class="map-driver" style="top:40%;left:35%;">🛵</div>
      <div class="map-eta">
        <div class="eta-min">${order.eta || 22}</div>
        <div class="eta-label">min away</div>
      </div>
    </div>

    <!-- Provider Card -->
    <div style="margin:16px;background:var(--surface);border-radius:var(--r-xl);padding:16px;border:1px solid var(--border-light);box-shadow:var(--shadow-xs);display:flex;align-items:center;gap:12px;">
      <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${order.provider.avatar}</div>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:15px;">${order.provider.name}</div>
        <div style="font-size:12px;color:var(--text-muted);">★ ${order.provider.rating} · Your service provider</div>
      </div>
      <button style="width:42px;height:42px;border-radius:50%;background:var(--success);color:white;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 2px 10px rgba(34,197,94,0.35);" onclick="showToast('📞 Calling ${order.provider.name}…')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.24 6.24l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </button>
    </div>

    <!-- Stepper -->
    <div class="order-stepper">
      ${order.steps.map((step, i) => `
        <div class="stepper-item ${i < si ? 'done' : i === si ? 'active' : 'upcoming'}">
          <div class="stepper-left">
            <div class="stepper-dot">${i < si ? '✓' : step.emoji}</div>
          </div>
          <div class="stepper-content">
            <div class="stepper-title">${step.label}</div>
            <div class="stepper-time">${step.time}</div>
            ${i === si ? `<div class="stepper-desc">${step.desc}</div>` : ''}
          </div>
        </div>`).join('')}
    </div>

    <!-- Order Details -->
    <div class="order-detail-box">
      <div class="order-detail-header">
        <span>📦 Order #${order.id}</span>
        <span class="status-badge picked">In Progress</span>
      </div>
      <div class="order-detail-body">
        ${(order.items || []).map(item => `
          <div class="order-detail-row">
            <span style="font-size:1.2rem">${item.emoji}</span>
            <span style="flex:1;">${item.name}</span>
            <span style="font-weight:700;">₹${item.price}</span>
          </div>`).join('')}
        <div style="height:1px;background:var(--border-light);margin:8px 0;"></div>
        <div class="order-detail-row" style="font-weight:800;font-size:15px;">
          <span>Total Paid</span>
          <span style="color:var(--brand);">₹${order.total || App.getCartTotal()}</span>
        </div>
      </div>
    </div>
  </div>`;

  /* FIX #3 — store interval ID in container so App.navigate() can clear it */
  let eta = order.eta || 22;
  const etaInterval = setInterval(() => {
    if (!document.body.contains(container)) {
      clearInterval(etaInterval);
      return;
    }
    if (eta <= 1) { clearInterval(etaInterval); return; }
    eta--;
    const etaEl = container.querySelector('.eta-min');
    if (etaEl) etaEl.textContent = eta;
  }, 8000);
}

/* ═══════════════ ORDER HISTORY PAGE ═══════════════ */
function renderOrders(container) {
  container.innerHTML = `
  <div class="orders-page page-enter">
    <div style="padding:20px 0 8px;">
      <div class="section-title" style="padding:0 16px;">Your Orders</div>
      <div class="section-sub" style="padding:0 16px;">Manage and reorder your services</div>
    </div>

    <!-- Active Order -->
    ${App.state.activeOrder ? `
    <div style="background:var(--gradient-brand);border-radius:var(--r-xl);margin:0 16px 8px;padding:16px;cursor:pointer;box-shadow:var(--shadow-brand);" onclick="App.navigate('tracking')">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <div style="background:rgba(255,255,255,0.25);color:white;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;">🟢 LIVE</div>
        <div style="color:rgba(255,255,255,0.85);font-size:12px;">Tap to track →</div>
      </div>
      <div style="color:white;font-weight:800;font-size:16px;">Order #${App.state.activeOrder.id}</div>
      <div style="color:rgba(255,255,255,0.85);font-size:13px;margin-top:4px;">🛵 Picked up · ETA ${App.state.activeOrder.eta} min</div>
    </div>` : ''}

    <!-- Tab Bar -->
    <div style="padding:0 16px 8px;">
      <div class="tab-row">
        <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');">All Orders</button>
        <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');showToast('No active orders!')">Active</button>
        <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');">Completed</button>
      </div>
    </div>

    ${DATA.orders.map(o => `
    <div class="order-history-card" onclick="App.navigate('tracking')">
      <div class="order-history-header">
        <div>
          <div class="order-history-id">${o.id}</div>
          <div class="order-history-date">${o.date} · ${o.slot}</div>
        </div>
        <span class="status-badge delivered">Delivered ✓</span>
      </div>
      <div class="order-history-body">
        <div class="order-history-items">
          ${o.items.map(item => `
            <div class="order-history-item">
              <div class="order-history-item-icon">${item.emoji}</div>
              <span>${item.name}</span>
              <span style="margin-left:auto;font-weight:600;color:var(--text-secondary);">₹${item.price}</span>
            </div>`).join('')}
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Provider: ${o.provider.name} · ★ ${o.provider.rating}</div>
        <div class="order-history-footer">
          <div class="order-total-label">Total: ₹${o.total}</div>
          <button class="reorder-action-btn" onclick="event.stopPropagation();App.navigate('category',{id:'ironing'});showToast('Items added! 🎉')">Reorder ↺</button>
        </div>
      </div>
    </div>`).join('')}
  </div>`;
}

/* ═══════════════ PROVIDER DASHBOARD ═══════════════ */
function renderProvider(container) {
  container.innerHTML = `
  <div class="provider-page page-enter">
    <div class="provider-hero">
      <h2>Provider Dashboard 🏪</h2>
      <p>Ramesh Tailors · Sector 15, Noida</p>
    </div>

    <!-- Stats -->
    <div class="provider-stats">
      <div class="stat-card">
        <div class="stat-number">3</div>
        <div class="stat-label">Active Orders</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">₹704</div>
        <div class="stat-label">Today's Earnings</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">4.8★</div>
        <div class="stat-label">Rating</div>
      </div>
    </div>

    <!-- Availability Toggle -->
    <div style="background:var(--surface);border-radius:var(--r-xl);padding:16px 20px;border:1px solid var(--border-light);">
      <div class="toggle-wrap">
        <div>
          <div style="font-weight:700;font-size:15px;">Accept New Orders</div>
          <div style="font-size:12px;color:var(--text-muted);">Toggle to go online/offline</div>
        </div>
        <label class="toggle">
          <input type="checkbox" checked onchange="showToast(this.checked?'✅ You are now Online':'⏸️ You are Offline')">
          <span class="toggle-slider"></span>
        </label>
      </div>
    </div>

    <!-- Active Orders -->
    <div>
      <div class="section-title" style="margin-bottom:12px;">Incoming Orders</div>
      ${DATA.providerOrders.map(o => `
      <div class="provider-order-card" style="margin-bottom:12px;">
        <div class="provider-order-header">
          <div>
            <div style="font-weight:700;">${o.customer}</div>
            <div style="font-size:12px;color:var(--text-muted);">${o.id} · ${o.slot}</div>
          </div>
          <span class="status-badge ${o.status}">${o.status === 'pending' ? '🕐 Pending' : '⚙️ Processing'}</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin:8px 0;">📦 ${o.items}</div>
        <div style="font-size:12px;color:var(--text-muted);">📍 ${o.address}</div>
        <div class="provider-actions">
          ${o.status === 'pending' ?
            `<button class="btn-primary btn-sm" onclick="showToast('✅ Order accepted!');this.closest('.provider-order-card').querySelector('.status-badge').textContent='⚙️ Processing';this.closest('.provider-order-card').querySelector('.status-badge').className='status-badge processing'">Accept</button>
             <button class="btn-ghost" onclick="showToast('Order declined.')">Decline</button>` :
            `<button class="btn-primary btn-sm" onclick="showToast('🚴 Marked Out for Delivery!')">Out for Delivery</button>
             <button class="btn-ghost" onclick="showToast('✅ Marked Delivered!')">Delivered</button>`}
        </div>
      </div>`).join('')}
    </div>
  </div>`;
}

window.addEventListener('load', () => {
  App.registerPage('home',     (c) => renderHome(c));
  App.registerPage('category', (c, p) => renderCategory(c, p));
  App.registerPage('checkout', (c) => renderCheckout(c));
  App.registerPage('tracking', (c) => renderTracking(c));
  App.registerPage('orders',   (c) => renderOrders(c));
  App.registerPage('provider', (c) => renderProvider(c));
});

/* ─── Global cart helpers accessible from onclick ─── */
function addServiceById(svcId, catId) {
  const svc = Object.values(DATA.services).flat().find(s => s.id === svcId);
  if (!svc) return;
  App.addToCart({ id: svc.id, name: svc.name, emoji: svc.emoji, price: svc.price }, catId);
  renderCategoryAction(svcId, catId);
}

function removeServiceById(svcId, catId) {
  App.removeFromCart(svcId);
  renderCategoryAction(svcId, catId);
}


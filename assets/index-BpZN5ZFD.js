(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={categories:[{id:`ironing`,name:`Ironing`,emoji:`👕`,tagline:`30 min pickup`,color:`#E3F2FD`,time:`30 min`},{id:`dry-cleaning`,name:`Dry Cleaning`,emoji:`✨`,tagline:`Expert clean`,color:`#F3E5F5`,time:`24 hrs`},{id:`shoe-repair`,name:`Shoe Repair`,emoji:`👟`,tagline:`Like new again`,color:`#FFF3E0`,time:`2 hrs`},{id:`tailoring`,name:`Tailoring`,emoji:`✂️`,tagline:`Perfect fit`,color:`#E8F5E9`,time:`1-2 days`},{id:`stitching`,name:`Stitching`,emoji:`🧵`,tagline:`Custom creation`,color:`#FCE4EC`,time:`2-3 days`},{id:`laundry`,name:`Laundry`,emoji:`🫧`,tagline:`Fresh & folded`,color:`#E0F7FA`,time:`24 hrs`},{id:`bag-repair`,name:`Bag & Leather`,emoji:`👜`,tagline:`Restore favorite`,color:`#FFF8E1`,time:`1-2 days`},{id:`watch-repair`,name:`Watch Repair`,emoji:`⌚`,tagline:`Precision craft`,color:`#E8EAF6`,time:`1-3 days`}],services:{ironing:[{id:`s-i-1`,name:`Shirt / T-Shirt`,desc:`Perfectly pressed, collar to cuffs`,price:25,orig:35,time:`30 min`,rating:4.8,reviews:1240,emoji:`👔`,popular:!0},{id:`s-i-2`,name:`Trousers / Jeans`,desc:`Crisp crease, flawless finish`,price:30,orig:40,time:`30 min`,rating:4.7,reviews:860,emoji:`👖`,popular:!1},{id:`s-i-3`,name:`Saree`,desc:`Delicate pleating, ready to drape`,price:80,orig:100,time:`45 min`,rating:4.9,reviews:540,emoji:`🥻`,popular:!1},{id:`s-i-4`,name:`Kurta / Kurti`,desc:`Traditional wear pressed to perfection`,price:35,orig:45,time:`30 min`,rating:4.8,reviews:730,emoji:`👗`,popular:!0},{id:`s-i-5`,name:`Suit / Blazer`,desc:`Professional finish for formal occasions`,price:120,orig:150,time:`1 hr`,rating:4.9,reviews:320,emoji:`🤵`,popular:!1},{id:`s-i-6`,name:`Bedsheet (Set of 2)`,desc:`Flat-ironed, crisp linens`,price:60,orig:80,time:`45 min`,rating:4.6,reviews:480,emoji:`🛏️`,popular:!1}],"dry-cleaning":[{id:`s-d-1`,name:`Formal Suit`,desc:`Dry clean + press, ready to wear`,price:299,orig:399,time:`24 hrs`,rating:4.9,reviews:890,emoji:`🤵`,popular:!0},{id:`s-d-2`,name:`Woollen Sweater`,desc:`Gentle clean, shape preserved`,price:199,orig:250,time:`24 hrs`,rating:4.7,reviews:560,emoji:`🧥`,popular:!1},{id:`s-d-3`,name:`Silk / Georgette Saree`,desc:`Specialist handling for delicate fabrics`,price:350,orig:450,time:`36 hrs`,rating:4.9,reviews:310,emoji:`🥻`,popular:!0},{id:`s-d-4`,name:`Winter Jacket`,desc:`Deep clean, retain insulation & shape`,price:399,orig:500,time:`24 hrs`,rating:4.8,reviews:420,emoji:`🧥`,popular:!1},{id:`s-d-5`,name:`Sherwani / Lehenga`,desc:`Bridal & festive wear — extra care`,price:699,orig:900,time:`48 hrs`,rating:4.9,reviews:260,emoji:`👘`,popular:!1}],"shoe-repair":[{id:`s-sr-1`,name:`Sole Replacement`,desc:`Full or half sole, any shoe type`,price:249,orig:350,time:`2 hrs`,rating:4.8,reviews:720,emoji:`👠`,popular:!0},{id:`s-sr-2`,name:`Stitching & Gluing`,desc:`Secure split seams and loose parts`,price:99,orig:150,time:`1 hr`,rating:4.7,reviews:540,emoji:`👟`,popular:!1},{id:`s-sr-3`,name:`Heel Repair`,desc:`Replace worn or broken heels`,price:149,orig:200,time:`90 min`,rating:4.8,reviews:610,emoji:`👡`,popular:!1},{id:`s-sr-4`,name:`Polish & Shine`,desc:`Professional colour match + buff to gleam`,price:79,orig:100,time:`45 min`,rating:4.6,reviews:980,emoji:`✨`,popular:!0},{id:`s-sr-5`,name:`Sneaker Deep Clean`,desc:`Hand-wash + UV dry + deodorize`,price:199,orig:250,time:`3 hrs`,rating:4.9,reviews:880,emoji:`👟`,popular:!0}],tailoring:[{id:`s-t-1`,name:`Trouser Hemming`,desc:`Precise length adjustment, invisible finish`,price:99,orig:150,time:`1 day`,rating:4.8,reviews:830,emoji:`✂️`,popular:!0},{id:`s-t-2`,name:`Shirt Alteration`,desc:`Waist, sleeve, shoulder adjustments`,price:149,orig:200,time:`1 day`,rating:4.7,reviews:620,emoji:`👔`,popular:!1},{id:`s-t-3`,name:`Blouse / Choli Work`,desc:`Hook, fall, lace and alteration work`,price:199,orig:250,time:`2 days`,rating:4.9,reviews:410,emoji:`👗`,popular:!1},{id:`s-t-4`,name:`Suit Fitting`,desc:`Take-in / let-out, sleeve alteration`,price:299,orig:400,time:`2 days`,rating:4.8,reviews:290,emoji:`🤵`,popular:!1},{id:`s-t-5`,name:`Zip / Button Repair`,desc:`Replace broken zip or reinforce buttons`,price:69,orig:100,time:`4 hrs`,rating:4.6,reviews:1100,emoji:`🪡`,popular:!0}],stitching:[{id:`s-st-1`,name:`Salwar Kameez (Full)`,desc:`Stitch from fabric — all measurements taken`,price:599,orig:799,time:`3 days`,rating:4.9,reviews:490,emoji:`🧵`,popular:!0},{id:`s-st-2`,name:`Blouse Stitching`,desc:`Custom blouse with neck & sleeve design`,price:299,orig:400,time:`2 days`,rating:4.8,reviews:660,emoji:`👗`,popular:!1},{id:`s-st-3`,name:`Kurti Stitching`,desc:`Designer or plain kurti, all sizes`,price:399,orig:500,time:`2 days`,rating:4.7,reviews:430,emoji:`👚`,popular:!1},{id:`s-st-4`,name:`Lehenga Stitching`,desc:`Bridal or casual — flare and fall choices`,price:999,orig:1299,time:`5 days`,rating:4.9,reviews:180,emoji:`👘`,popular:!1}],laundry:[{id:`s-l-1`,name:`Wash & Fold (kg)`,desc:`Machine wash, tumble dry, neatly folded`,price:69,orig:90,time:`24 hrs`,rating:4.7,reviews:2100,emoji:`🫧`,popular:!0},{id:`s-l-2`,name:`Wash & Iron (kg)`,desc:`Machine wash + professional press`,price:99,orig:130,time:`24 hrs`,rating:4.8,reviews:1560,emoji:`👕`,popular:!0},{id:`s-l-3`,name:`Express (3 hrs)`,desc:`Rush wash & iron — back in 3 hours`,price:149,orig:200,time:`3 hrs`,rating:4.9,reviews:740,emoji:`⚡`,popular:!1},{id:`s-l-4`,name:`Bedding & Linen`,desc:`Duvet, pillowcases, sheets — fresh set`,price:199,orig:250,time:`36 hrs`,rating:4.6,reviews:380,emoji:`🛏️`,popular:!1}],"bag-repair":[{id:`s-b-1`,name:`Strap Repair / Replace`,desc:`Leather or fabric strap fixed or replaced`,price:299,orig:400,time:`2 days`,rating:4.8,reviews:320,emoji:`👜`,popular:!0},{id:`s-b-2`,name:`Zip Replacement`,desc:`Brand-matching zip for bags & wallets`,price:199,orig:280,time:`1 day`,rating:4.7,reviews:480,emoji:`🛍️`,popular:!1},{id:`s-b-3`,name:`Leather Conditioning`,desc:`Deep condition + polish for leather goods`,price:399,orig:500,time:`1 day`,rating:4.9,reviews:210,emoji:`✨`,popular:!1},{id:`s-b-4`,name:`Bag Stitching`,desc:`Re-stitch torn seams, reinforce handles`,price:249,orig:350,time:`1 day`,rating:4.8,reviews:270,emoji:`🧵`,popular:!1}],"watch-repair":[{id:`s-w-1`,name:`Battery Replacement`,desc:`Quick swap, all watch brands`,price:149,orig:200,time:`1 hr`,rating:4.8,reviews:1850,emoji:`🔋`,popular:!0},{id:`s-w-2`,name:`Strap Replacement`,desc:`Leather, metal, rubber — wide range`,price:299,orig:400,time:`2 hrs`,rating:4.7,reviews:630,emoji:`⌚`,popular:!1},{id:`s-w-3`,name:`Movement Service`,desc:`Full overhaul, lubrication, timing check`,price:999,orig:1400,time:`3 days`,rating:4.9,reviews:180,emoji:`⚙️`,popular:!1},{id:`s-w-4`,name:`Glass Replacement`,desc:`Mineral or sapphire crystal replacement`,price:499,orig:700,time:`2 days`,rating:4.8,reviews:240,emoji:`🔍`,popular:!1}]},orders:[{id:`ORD-8821`,date:`22 Jun 2026`,status:`delivered`,items:[{name:`Shirt Ironing ×3`,emoji:`👔`,price:75},{name:`Trouser Ironing ×2`,emoji:`👖`,price:60}],total:149,address:`42, Sector 15, Noida`,slot:`Today, 8–10 AM`,provider:{name:`Ramesh Tailors`,rating:4.8}},{id:`ORD-7743`,date:`18 Jun 2026`,status:`delivered`,items:[{name:`Wash & Fold 3 kg`,emoji:`🫧`,price:207},{name:`Express Delivery`,emoji:`⚡`,price:30}],total:237,address:`DLF Cyber City, Gurugram`,slot:`Jun 18, 6–8 PM`,provider:{name:`SparkClean`,rating:4.9}},{id:`ORD-6554`,date:`10 Jun 2026`,status:`delivered`,items:[{name:`Sneaker Deep Clean ×2`,emoji:`👟`,price:398}],total:398,address:`42, Sector 15, Noida`,slot:`Jun 11, 10 AM–12 PM`,provider:{name:`SoleRevive`,rating:4.9}}],activeOrder:{id:`ORD-9901`,status:`picked`,statusIndex:1,items:[{name:`Shirt Ironing ×5`,emoji:`👔`,price:125},{name:`Trouser Ironing ×2`,emoji:`👖`,price:60}],total:199,eta:22,address:`42, Sector 15, Noida`,slot:`Today, 2–4 PM`,provider:{name:`Ramesh Tailors`,phone:`+91 98765 43210`,rating:4.8,avatar:`RT`},steps:[{label:`Order Confirmed`,emoji:`✅`,time:`1:42 PM`,desc:`Your order has been confirmed.`,done:!0},{label:`Picked Up`,emoji:`🛵`,time:`2:05 PM`,desc:`Agent is on the way to your address.`,done:!0},{label:`In Process`,emoji:`✂️`,time:`Est. 2:30 PM`,desc:`Your garments are being serviced.`,done:!1,active:!0},{label:`Out for Delivery`,emoji:`🚴`,time:`Est. 3:10 PM`,desc:`On the way back to you.`,done:!1},{label:`Delivered`,emoji:`🎉`,time:`Est. 3:30 PM`,desc:`Successfully delivered!`,done:!1}]},communityPosts:[{id:`p1`,author:{name:`Priya Sharma`,title:`Senior Fashion Designer`,avatar:`PS`,verified:!0,following:!1},time:`2h ago`,category:`Office Wear`,title:`Top 5 ways to style a linen blazer for summer 🌿`,text:`Linen blazers are the ultimate summer office essential. Here are my top 5 ways to rock one without looking overdressed. First, pair with a plain white tee and cropped trousers — effortless chic. Second, go monochrome — beige blazer + beige trousers = instant power look...`,emoji:`🧥`,tags:[`#LinenFashion`,`#OfficeWear`,`#SummerStyle`],likes:284,comments:32,liked:!1,saved:!1,commentList:[{author:`Anjali R.`,avatar:`AR`,text:`Love the monochrome idea! Works so well in the Delhi heat 😍`,verified:!1},{author:`Priya Sharma`,avatar:`PS`,text:`Exactly! And linen breathes so well — you will not regret it ✨`,verified:!0}]},{id:`p2`,author:{name:`Rohit Mehra`,title:`Influencer · 450k followers`,avatar:`RM`,verified:!0,following:!1},time:`4h ago`,category:`Casual`,title:`Oversized fits are not going anywhere this monsoon 🌧️`,text:`Monsoon is here and so are the oversized kurtas and baggy pants. I have been styling this look for the past 2 weeks and getting SO many compliments. The trick is to balance proportions — baggy top, slim bottom, or vice versa.`,emoji:`🌧️`,tags:[`#MonsoonFashion`,`#Casual`,`#Kurta`],likes:1120,comments:87,liked:!1,saved:!1,commentList:[{author:`Karan T.`,avatar:`KT`,text:`Great content as always! What brand is the kurta?`,verified:!1},{author:`Sunita V.`,avatar:`SV`,text:`The blue one in the second photo is stunning!`,verified:!1},{author:`Rohit Mehra`,avatar:`RM`,text:`It is from a local artisan brand in Jaipur — will drop the link soon 🙏`,verified:!0}]},{id:`p3`,author:{name:`Meena Krishnan`,title:`Fabric Care Expert`,avatar:`MK`,verified:!0,following:!1},time:`1d ago`,category:`Ethnic`,title:`How to care for your silk sarees at home 🥻`,text:`Silk sarees are investments. Here is the definitive guide I have put together after 15 years in the industry. Always hand-wash in cold water with mild detergent. Never wring — roll in a towel to remove moisture. Dry in shade, away from direct sunlight.`,emoji:`🥻`,tags:[`#SilkSaree`,`#FabricCare`,`#Ethnic`],likes:542,comments:61,liked:!1,saved:!1,commentList:[{author:`Radha M.`,avatar:`RM`,text:`This is so helpful! I have been storing mine wrong all along 😱`,verified:!1},{author:`Meena Krishnan`,avatar:`MK`,text:`Common mistake! Storage in muslin cloth is key for silk 🙂`,verified:!0}]},{id:`p4`,author:{name:`Devika Anand`,title:`User · Style Enthusiast`,avatar:`DA`,verified:!1,following:!1},time:`1d ago`,category:`Wedding`,title:`My sister's wedding look — styled by ServeNow's AI!`,text:`Used the Smart Fit tool + style quiz and got an AMAZING lehenga recommendation for my sister's wedding. The AI suggested a coral and gold combination based on her skin tone and body measurements — we loved it! Highly recommend trying it.`,emoji:`💍`,tags:[`#WeddingLook`,`#ServeNowStyle`,`#Lehenga`],likes:389,comments:45,liked:!1,saved:!1,commentList:[{author:`Neha P.`,avatar:`NP`,text:`The style quiz is so accurate! I got mine done last week 😊`,verified:!1}]}],styleFeed:[{id:`sf1`,author:{name:`Arjun Kapoor Style`,avatar:`AK`,verified:!0,role:`Designer · 1.2M followers`},time:`3h ago`,text:`🔥 Monsoon capsule wardrobe essentials: earthy tones + water-resistant fabrics. Full video breakdown below!`,emoji:`🌿`,tags:[`#MonsoonWear`,`#CapsuleWardrobe`,`#MinimalistFashion`],isVideo:!0,duration:`4:32`,likes:8420,saved:!1,liked:!1},{id:`sf2`,author:{name:`Studio Riya`,avatar:`SR`,verified:!0,role:`Boutique · Official`},time:`6h ago`,text:`✨ New collection: "Monsoon Bloom" — handwoven cotton sarees with natural dyes. Limited to 50 pieces.`,emoji:`🌸`,tags:[`#HandwovenSaree`,`#NewCollection`,`#SupportHandloom`],isVideo:!1,likes:3280,saved:!1,liked:!1},{id:`sf3`,author:{name:`Priya Sharma`,avatar:`PS`,verified:!0,role:`Fashion Designer · Verified`},time:`1d ago`,text:`💡 Tip: Your body measurements change seasonally. Re-take your Smart Fit measurements every 3 months for the most accurate tailoring results!`,emoji:`📐`,tags:[`#StyleTip`,`#SmartFit`,`#TailoringTip`],isVideo:!1,likes:1940,saved:!1,liked:!1}],styleQuiz:[{question:`What is your primary style vibe?`,options:[{label:`Minimal & Clean`,emoji:`⬜`},{label:`Bold & Colourful`,emoji:`🎨`},{label:`Traditional & Ethnic`,emoji:`🪷`},{label:`Casual & Sporty`,emoji:`🏃`}]},{question:`What occasions do you dress for most?`,options:[{label:`Office / Work`,emoji:`💼`},{label:`Casual Outings`,emoji:`☀️`},{label:`Weddings / Festivals`,emoji:`💍`},{label:`Social Events`,emoji:`🥂`}]},{question:`Which fabrics do you prefer?`,options:[{label:`Cotton & Linen`,emoji:`🌿`},{label:`Silk & Georgette`,emoji:`✨`},{label:`Denim & Canvas`,emoji:`👖`},{label:`Wool & Knit`,emoji:`🧶`}]},{question:`Your go-to colour palette?`,options:[{label:`Neutrals & Earth`,emoji:`🟤`},{label:`Pastels & Soft`,emoji:`🩷`},{label:`Brights & Jewel`,emoji:`💎`},{label:`Monochrome`,emoji:`⚫`}]},{question:`How would you describe your fit preference?`,options:[{label:`Tailored / Fitted`,emoji:`📐`},{label:`Relaxed / Loose`,emoji:`🌊`},{label:`Structured / Sharp`,emoji:`🔷`},{label:`Flowy / Draping`,emoji:`🌸`}]}],styleResults:{default:{label:`Contemporary Fusion`,desc:`You have a versatile style that blends modern silhouettes with timeless classics. We recommend investing in well-fitted basics and statement accessories.`,tags:[`Linen Blazer`,`Slim Trousers`,`Minimal Jewellery`,`Cotton Kurta`,`Earthy Tones`]}},mockMeasurements:{chest:94,waist:78,hips:98,shoulder:43,inseam:81,height:168,weight:65,size:`M`},savedAddresses:[{label:`Home`,icon:`🏠`,address:`42, Sector 15, Noida, UP 201301`},{label:`Office`,icon:`🏢`,address:`DLF Cyber City, Block B, Gurugram, HR`}],providerOrders:[{id:`ORD-9901`,customer:`Amisha S.`,items:`Shirt ×5, Trouser ×2 (Ironing)`,address:`Sector 15, Noida`,slot:`Today 2–4 PM`,status:`processing`,total:199},{id:`ORD-9887`,customer:`Rahul M.`,items:`Wash & Fold 4 kg`,address:`Sector 18, Noida`,slot:`Today 4–6 PM`,status:`pending`,total:276},{id:`ORD-9863`,customer:`Sunita K.`,items:`Dry Clean Suit × 1`,address:`Sector 62, Noida`,slot:`Today 6–8 PM`,status:`pending`,total:299}]};window.DATA=e;var t=(function(){let t={page:`home`,params:{},cart:[],profile:{name:`Amisha`,email:`amisha@example.com`,location:`Sector 15, Noida`,measurements:null,styleQuizResult:null},seniorMode:JSON.parse(localStorage.getItem(`sn_senior`)||`false`),voiceLang:`en-IN`,activeOrder:e.activeOrder,communityPosts:JSON.parse(JSON.stringify(e.communityPosts)),styleFeed:JSON.parse(JSON.stringify(e.styleFeed))},n={};function o(e,t){n[e]=t}function s(e,n={}){t.page=e,t.params=n;let i=n&&Object.keys(n).length?`#${e}/${Object.values(n).join(`/`)}`:`#${e}`;history.pushState({page:e,params:n},``,i),r(),c(),l(e);let a=document.getElementById(`main-content`);a&&(a.scrollTop=0)}function c(){let e=document.getElementById(`main-content`);if(!e)return;let r=n[t.page];r?(e.innerHTML=``,r(e,t.params),e.firstElementChild&&e.firstElementChild.classList.add(`page-enter`)):e.innerHTML=`<div class="empty-state"><div class="empty-icon">🔍</div><h3>Page not found</h3><p>Sorry, this page doesn't exist.</p></div>`,u(),g(),d()}function l(e){if(document.querySelectorAll(`#bottom-nav .nav-item, #senior-nav .senior-nav-item`).forEach(e=>{e.classList.remove(`active`)}),[`home`,`orders`,`ai`,`community`,`profile`].includes(e)){let t=document.getElementById(`nav-${e}`);t&&t.classList.add(`active`)}}function u(){let e=document.getElementById(`btn-back`);e&&([`home`,`orders`,`ai`,`community`,`profile`].includes(t.page)?e.classList.add(`hidden`):(e.classList.remove(`hidden`),e.onclick=()=>s(`home`)))}function d(){let e=document.getElementById(`voice-fab`);e&&e.classList.toggle(`hidden`,!t.seniorMode);let n=document.getElementById(`btn-voice-top`);n&&n.classList.toggle(`hidden`,!t.seniorMode)}function ee(e,n){let r=t.cart.find(t=>t.serviceId===e.id);r?r.qty+=1:t.cart.push({serviceId:e.id,name:e.name,emoji:e.emoji,price:e.price,qty:1,category:n}),g(),a(`${e.emoji||r&&r.emoji||`🛒`} Added to cart`),document.getElementById(`cart-drawer`).classList.contains(`open`)&&i();let o=document.getElementById(`cart-badge`);o&&(o.classList.remove(`pop`),requestAnimationFrame(()=>o.classList.add(`pop`)))}function f(e){let n=t.cart.findIndex(t=>t.serviceId===e);n>-1&&(t.cart[n].qty>1?--t.cart[n].qty:t.cart.splice(n,1),g(),document.getElementById(`cart-drawer`).classList.contains(`open`)&&i())}function p(){t.cart=[],g()}function m(){return t.cart.reduce((e,t)=>e+t.price*t.qty,0)}function h(){return t.cart.reduce((e,t)=>e+t.qty,0)}function g(){let e=document.getElementById(`cart-badge`),t=h();e&&(e.textContent=t,e.classList.toggle(`hidden`,t===0))}function _(e){t.seniorMode=e,localStorage.setItem(`sn_senior`,JSON.stringify(e)),document.body.classList.toggle(`senior-mode`,e),document.getElementById(`bottom-nav`).classList.toggle(`hidden`,e),document.getElementById(`senior-nav`).classList.toggle(`hidden`,!e);let n=document.getElementById(`voice-fab`);n&&n.classList.toggle(`hidden`,!e);let r=document.getElementById(`btn-voice-top`);r&&r.classList.toggle(`hidden`,!e),a(e?`👴 Senior Mode ON`:`Senior Mode OFF`),v()}function v(){let e=document.getElementById(`senior-nav`);if(e&&!document.getElementById(`senior-nav-settings`)){let t=document.createElement(`button`);t.className=`senior-nav-item`,t.id=`senior-nav-settings`,t.setAttribute(`onclick`,`App.navigate('profile')`),t.innerHTML=`<span class="senior-nav-icon"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20v-1a8 8 0 0 1 16 0v1"/></svg></span><span class="senior-nav-label">Profile</span>`;let n=document.getElementById(`senior-nav-help`);n?e.insertBefore(t,n):e.appendChild(t)}}function y(){t.seniorMode&&(document.body.classList.add(`senior-mode`),document.getElementById(`bottom-nav`).classList.add(`hidden`),document.getElementById(`senior-nav`).classList.remove(`hidden`),v()),window.addEventListener(`popstate`,e=>{e.state?s(e.state.page,e.state.params):s(`home`)});let e=location.hash.slice(1);if(e){let[t,...n]=e.split(`/`);s(t,n.length?{id:n[0]}:{})}else s(`home`);setTimeout(()=>{let e=document.getElementById(`location-name`);e&&(e.textContent=t.profile.location)},1200);let n=document.getElementById(`orders-badge`);n&&n.classList.remove(`hidden`)}return{state:t,navigate:s,registerPage:o,render:c,addToCart:ee,removeFromCart:f,clearCart:p,getCartTotal:m,getCartCount:h,setSeniorMode:_,init:y}})();function n(){let e=document.getElementById(`cart-drawer`),t=document.getElementById(`cart-overlay`);e.classList.contains(`open`)?r():(i(),e.classList.add(`open`),t.classList.remove(`hidden`))}function r(){document.getElementById(`cart-drawer`).classList.remove(`open`),document.getElementById(`cart-overlay`).classList.add(`hidden`)}function i(){let e=t.state.cart,n=document.getElementById(`cart-inner`);if(!n)return;if(e.length===0){n.innerHTML=`
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
      </div>`;return}let r=t.getCartTotal(),i=r>=299?0:29,a=Math.round(r*.05),o=r+i+a;n.innerHTML=`
    <div class="cart-header">
      <h2>🛒 Your Cart <span style="font-size:.85em;color:var(--text-muted);font-weight:500">(${e.length} item${e.length>1?`s`:``})</span></h2>
      <button class="btn-icon" onclick="closeCart()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    ${e.map(e=>`
      <div class="cart-item">
        <div class="cart-item-icon">${e.emoji}</div>
        <div class="cart-item-info">
          <div class="cart-item-name">${e.name}</div>
          <div class="cart-item-price">₹${e.price} each</div>
        </div>
        <div class="qty-counter">
          <button class="qty-btn" onclick="App.removeFromCart('${e.serviceId}')">−</button>
          <span class="qty-value">${e.qty}</span>
          <button class="qty-btn" onclick="App.addToCart({id:'${e.serviceId}'})">+</button>
        </div>
        <div style="font-weight:700;color:var(--text-primary);min-width:52px;text-align:right;">₹${e.price*e.qty}</div>
      </div>`).join(``)}
    <div class="cart-summary">
      <div class="cart-summary-row"><span>Subtotal</span><span>₹${r}</span></div>
      <div class="cart-summary-row"><span>Delivery</span><span>${i===0?`<span style="color:var(--success);font-weight:600">FREE</span>`:`₹`+i}</span></div>
      <div class="cart-summary-row"><span>Taxes (5%)</span><span>₹${a}</span></div>
      <div class="cart-summary-row total"><span>Total</span><span>₹${o}</span></div>
    </div>
    ${i>0?`<p style="font-size:11px;color:var(--brand);text-align:center;margin-top:8px;">Add ₹${299-r} more for free delivery 🎉</p>`:`<p style="font-size:11px;color:var(--success);text-align:center;margin-top:8px;font-weight:600">✓ Free delivery applied!</p>`}
    <div class="sticky-footer" style="position:relative;margin-top:16px;">
      <button class="btn-primary" onclick="closeCart();App.navigate('checkout')">
        Proceed to Checkout · ₹${o}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>`}function a(e,t=2200){let n=document.getElementById(`toast`);n&&(n.textContent=e,n.classList.remove(`hidden`),requestAnimationFrame(()=>{requestAnimationFrame(()=>n.classList.add(`show`))}),clearTimeout(n._timer),n._timer=setTimeout(()=>{n.classList.remove(`show`),setTimeout(()=>n.classList.add(`hidden`),400)},t))}function o(){document.getElementById(`location-modal`).classList.remove(`hidden`),document.getElementById(`location-overlay`).classList.remove(`hidden`)}function s(){document.getElementById(`location-modal`).classList.add(`hidden`),document.getElementById(`location-overlay`).classList.add(`hidden`)}function c(){a(`📍 Detecting your location…`),setTimeout(()=>{l(`Sector 15, Noida, UP`)},1500)}function l(e){document.getElementById(`location-name`).textContent=e,t.state.profile.location=e,s(),a(`📍 Location updated!`)}function u(){document.getElementById(`help-modal`).classList.remove(`hidden`),document.getElementById(`help-overlay`).classList.remove(`hidden`)}function d(){document.getElementById(`help-modal`).classList.add(`hidden`),document.getElementById(`help-overlay`).classList.add(`hidden`)}function ee(){d(),a(`📞 Connecting to support agent…`),setTimeout(()=>a(`✅ Support agent will call you in 2 minutes`,3e3),2e3)}function f(){a(`🔔 No new notifications`,2e3)}window.addEventListener(`load`,()=>{setTimeout(()=>t.init(),0)}),window.toggleCart=n,window.closeCart=r,window.renderCartInner=i,window.showToast=a,window.showLocationModal=o,window.closeLocationModal=s,window.detectLocation=c,window.selectAddress=l,window.showHelpModal=u,window.closeHelpModal=d,window.simulateCall=ee,window.showNotifToast=f,window.App=t;function p(e){let t=Math.floor(e),n=e%1>=.5,r=``;for(let e=0;e<t;e++)r+=`★`;return n&&(r+=`½`),r}function m(){showToast(`🔍 Search coming soon!`)}function h(n){let r=new Date().getHours();n.innerHTML=`
  <div class="home-page page-enter">
    <!-- Hero -->
    <div class="hero-strip">
      <div class="hero-greeting">${r<12?`Good morning`:r<17?`Good afternoon`:`Good evening`}, ${t.state.profile.name} 👋</div>
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
          ${e.categories.map(e=>`
            <div class="category-card" onclick="App.navigate('category', {id:'${e.id}'})" id="cat-${e.id}">
              <div class="cat-icon-wrap" style="background:${e.color}">
                <span style="font-size:1.8rem">${e.emoji}</span>
              </div>
              <div class="cat-name">${e.name}</div>
              <div class="cat-time">${e.time}</div>
            </div>
          `).join(``)}
        </div>
      </div>

      <!-- Quick Reorder -->
      ${t.state.activeOrder||e.orders.length>0?`
      <div>
        <div class="section-header">
          <h2>Order Again</h2>
          <button class="link-btn" onclick="App.navigate('orders')">View all</button>
        </div>
        <div class="quick-reorder-scroll">
          ${e.orders.map(e=>e.items.map(t=>`
            <div class="reorder-card" onclick="window.reorderHistory('${e.id}')">
              <div class="reorder-icon">${t.emoji}</div>
              <div class="reorder-name">${t.name.split(` ×`)[0]}</div>
              <div class="reorder-price">₹${t.price}</div>
              <button class="reorder-btn" onclick="event.stopPropagation();window.reorderHistory('${e.id}')">Reorder</button>
            </div>
          `).join(``)).join(``)}
        </div>
      </div>`:``}

      <!-- Active Order Banner -->
      ${t.state.activeOrder?`
      <div style="padding:0 16px;">
        <div style="background:var(--gradient-brand);border-radius:var(--r-xl);padding:16px;cursor:pointer;box-shadow:var(--shadow-brand);" onclick="App.navigate('tracking')">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <div style="color:rgba(255,255,255,0.85);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.06em">Live Order</div>
            <div style="background:rgba(255,255,255,0.2);color:white;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;">Track →</div>
          </div>
          <div style="color:white;font-weight:700;font-size:16px;margin-bottom:4px;">Order #${t.state.activeOrder.id}</div>
          <div style="color:rgba(255,255,255,0.85);font-size:13px;">🛵 Picked up · Est. ${t.state.activeOrder.eta} min delivery</div>
        </div>
      </div>`:``}

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
  </div>`}function g(n,r){let i=r.id||`ironing`,a=e.categories.find(e=>e.id===i)||e.categories[0],o=e.services[i]||[];document.getElementById(`btn-back`).classList.remove(`hidden`),document.getElementById(`btn-back`).onclick=()=>t.navigate(`home`),n.innerHTML=`
  <div class="category-page page-enter">
    <!-- Header -->
    <div class="category-header">
      <div class="category-header-emoji">${a.emoji}</div>
      <h1>${a.name}</h1>
      <p>${a.tagline} · <span style="opacity:.9">${a.time} service</span></p>
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
      ${o.map(e=>{let n=t.state.cart.find(t=>t.serviceId===e.id),r=n?n.qty:0;return`
        <div class="service-card" id="svc-${e.id}">
          <div class="service-card-inner">
            <div class="service-icon-box" style="background:${a.color}">${e.emoji}</div>
            <div class="service-info">
              <div class="service-name">${e.name} ${e.popular?`<span style="font-size:10px;background:var(--accent-light);color:var(--accent-dark);padding:2px 8px;border-radius:20px;font-weight:700;">Popular</span>`:``}</div>
              <div class="service-desc">${e.desc}</div>
              <div class="service-meta">
                <span class="time-badge">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                  ${e.time}
                </span>
                <span class="rating">
                  <span class="rating-star">★</span>
                  <span class="rating-value">${e.rating}</span>
                  <span class="rating-count">(${e.reviews})</span>
                </span>
              </div>
            </div>
          </div>
        <div class="service-action">
            <div class="service-price">₹${e.price} <span class="original-price">₹${e.orig}</span></div>
            <div id="svc-action-${e.id}">
              ${r>0?`
              <div class="qty-counter">
                <button class="qty-btn" onclick="removeServiceById('${e.id}','${i}')">−</button>
                <span class="qty-value">${r}</span>
                <button class="qty-btn" onclick="addServiceById('${e.id}','${i}')">+</button>
              </div>`:`
              <button class="btn-add" onclick="addServiceById('${e.id}','${i}')">ADD</button>`}
            </div>
          </div>
        </div>`}).join(``)}
    </div>

    <!-- Cart Footer (if items) -->
    <div id="cat-cart-footer" style="display:${t.state.cart.length>0?`block`:`none`};">
      <div class="sticky-footer">
        <button class="btn-primary" onclick="toggleCart()">
          View Cart · ₹${t.getCartTotal()}
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
        </button>
      </div>
    </div>
  </div>`}function _(e,n){let r=t.state.cart.find(t=>t.serviceId===e),i=r?r.qty:0,a=document.getElementById(`svc-action-${e}`);a&&(i>0?a.innerHTML=`
        <div class="qty-counter">
          <button class="qty-btn" onclick="removeServiceById('${e}','${n}')">−</button>
          <span class="qty-value">${i}</span>
          <button class="qty-btn" onclick="addServiceById('${e}','${n}')">+</button>
        </div>`:a.innerHTML=`<button class="btn-add" onclick="addServiceById('${e}','${n}')">ADD</button>`);let o=document.getElementById(`cat-cart-footer`);if(o){o.style.display=t.state.cart.length>0?`block`:`none`;let e=o.querySelector(`button`);e&&(e.innerHTML=`View Cart &middot; \u20B9${t.getCartTotal()} <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>`)}}window.checkoutStep=0,window.selectedDate=0,window.selectedSlot=0,window.selectedPayment=`upi`;var v=[{time:`8:00–10:00 AM`,type:`Morning`,avail:!0,fast:!0},{time:`10:00–12:00 PM`,type:`Late Morning`,avail:!0,fast:!1},{time:`12:00–2:00 PM`,type:`Afternoon`,avail:!1,fast:!1},{time:`2:00–4:00 PM`,type:`Afternoon`,avail:!0,fast:!1},{time:`4:00–6:00 PM`,type:`Evening`,avail:!0,fast:!1},{time:`6:00–8:00 PM`,type:`Evening`,avail:!0,fast:!1}];function y(e){if(t.state.cart.length===0){e.innerHTML=`
    <div class="empty-state page-enter">
      <div class="empty-icon">🛒</div>
      <h3>Your cart is empty</h3>
      <p>Add services to proceed to checkout</p>
      <button class="btn-primary" style="margin-top:16px;width:auto;padding:12px 32px;" onclick="App.navigate('home')">Browse Services</button>
    </div>`;return}window.checkoutStep=0,b(e)}function b(n){let r=[`Slot`,`Address`,`Payment`],i=t.state.cart,a=t.getCartTotal(),o=a>=299?0:29,s=Math.round(a*.05),c=a+o+s,l=[];for(let e=0;e<5;e++){let t=new Date;t.setDate(t.getDate()+e),l.push({day:[`Sun`,`Mon`,`Tue`,`Wed`,`Thu`,`Fri`,`Sat`][t.getDay()],num:t.getDate()})}let u=v;n.innerHTML=`
  <div class="checkout-page page-enter">
    <!-- Progress -->
    <div class="checkout-progress">
      ${r.map((e,t)=>`
      <div class="progress-step ${t<window.checkoutStep?`done`:t===window.checkoutStep?`active`:``}">
        <div class="step-dot">${t<window.checkoutStep?`✓`:t+1}</div>
        <div class="step-label">${e}</div>
      </div>`).join(``)}
    </div>

    <!-- Order Summary -->
    <div class="checkout-section">
      <h3><span>🛒</span> Order Summary</h3>
      ${i.map(e=>`
        <div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--border-light);">
          <span style="font-size:14px;">${e.emoji} ${e.name} <span style="color:var(--text-muted);">×${e.qty}</span></span>
          <span style="font-weight:700;">₹${e.price*e.qty}</span>
        </div>`).join(``)}
      <div style="display:flex;justify-content:space-between;font-weight:800;font-size:16px;margin-top:12px;padding-top:12px;border-top:2px solid var(--border);">
        <span>Grand Total</span><span style="color:var(--brand);">₹${c}</span>
      </div>
    </div>

    <!-- Step 0: Slot Picker -->
    ${window.checkoutStep===0?`
    <div class="checkout-section">
      <h3><span>📅</span> Choose Pickup Slot</h3>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:16px;">Select your preferred date and time for pickup.</p>
      <div class="date-scroll">
        ${l.map((e,t)=>`
          <div class="date-chip ${t===window.selectedDate?`selected`:``}" onclick="window.selectedDate=${t};document.querySelectorAll('.date-chip').forEach((el,j)=>el.classList.toggle('selected',j===${t}))">
            <span class="date-day">${t===0?`Today`:e.day}</span>
            <span class="date-num">${e.num}</span>
          </div>`).join(``)}
      </div>
      <div class="time-slots">
        ${u.map((e,t)=>`
          <div class="time-slot ${t===window.selectedSlot?`selected`:``} ${e.avail?``:`unavailable`}"
               onclick="${e.avail?`window.selectedSlot=${t};document.querySelectorAll('.time-slot').forEach((el,j)=>el.classList.toggle('selected',j===${t}))`:``}">
            <div class="slot-time">${e.time}</div>
            <div class="slot-type">${e.type}</div>
            ${e.fast?`<div class="slot-badge">Fast Pickup</div>`:``}
            ${e.avail?``:`<div style="font-size:10px;color:var(--error);margin-top:2px;">Unavailable</div>`}
          </div>`).join(``)}
      </div>
    </div>`:``}

    <!-- Step 1: Address -->
    ${window.checkoutStep===1?`
    <div class="checkout-section">
      <h3><span>📍</span> Delivery Address</h3>
      <div style="display:flex;flex-direction:column;gap:12px;">
        ${e.savedAddresses.map((e,t)=>`
          <div class="address-item" style="${t===0?`border-color:var(--brand);background:var(--brand-xlight);`:``}" onclick="this.parentNode.querySelectorAll('.address-item').forEach(el=>el.removeAttribute('style'));this.style.borderColor='var(--brand)';this.style.background='var(--brand-xlight)'">
            <span style="font-size:1.3rem">${e.icon}</span>
            <div><strong>${e.label}</strong><span>${e.address}</span></div>
          </div>`).join(``)}
        <div class="address-item" onclick="showToast('Address saved! 📍')">
          <span style="font-size:1.3rem">➕</span>
          <div><strong>Add New Address</strong><span>Enter a new delivery location</span></div>
        </div>
      </div>
    </div>
    <div class="checkout-section">
      <h3><span>📝</span> Special Instructions</h3>
      <textarea class="form-input" placeholder="e.g. Use extra starch on shirts, handle silk with care…" rows="3"></textarea>
    </div>`:``}

    <!-- Step 2: Payment -->
    ${window.checkoutStep===2?`
    <div class="checkout-section">
      <h3><span>💳</span> Payment Method</h3>
      <div class="payment-options">
        ${[{id:`upi`,icon:`📲`,name:`UPI / GPay / PhonePe`,sub:`Instant payment via UPI apps`},{id:`card`,icon:`💳`,name:`Credit / Debit Card`,sub:`Visa, Mastercard, RuPay`},{id:`cod`,icon:`💵`,name:`Cash on Delivery`,sub:`Pay when your order arrives`},{id:`wallet`,icon:`👛`,name:`ServeNow Wallet`,sub:`Balance: ₹150 available`}].map(e=>`
          <div class="payment-option ${e.id===window.selectedPayment?`selected`:``}" onclick="window.selectedPayment='${e.id}';document.querySelectorAll('.payment-option').forEach(el=>el.classList.remove('selected'));this.classList.add('selected');this.querySelector('.payment-radio').classList.add('selected')">
            <div class="payment-icon">${e.icon}</div>
            <div class="payment-info">
              <div class="payment-name">${e.name}</div>
              <div class="payment-sub">${e.sub}</div>
            </div>
            <div class="payment-radio ${e.id===window.selectedPayment?`selected`:``}"></div>
          </div>`).join(``)}
      </div>
    </div>`:``}

    <!-- CTA -->
    <div class="sticky-footer">
      <button class="btn-primary" onclick="checkoutNext()">
        ${window.checkoutStep<2?`Continue`:`Place Order · ₹${c}`}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
      </button>
    </div>
  </div>`}function te(){let e=document.getElementById(`main-content`);window.checkoutStep<2?(window.checkoutStep++,b(e)):x(e)}async function x(n){let r=n.querySelector(`.btn-primary`);r&&(r.disabled=!0,r.textContent=`Processing…`);let i=t.state.cart.map(e=>({name:e.name,emoji:e.emoji,price:e.price,qty:e.qty})),a=t.getCartTotal(),o=a>=299?0:29,s=Math.round(a*.05),c=a+o+s,l=v[window.selectedSlot]?v[window.selectedSlot].time:`15–30 min`;try{let r=await fetch(`http://localhost:8000/api/orders`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({items:i,total:c,slot:l,address:`42, Sector 15, Noida`})});if(!r.ok)throw Error(`Network error`);let a=await r.json();t.state.activeOrder={id:a.id,statusIndex:0,eta:a.eta,items:i,total:c,steps:e.activeOrder.steps,provider:e.activeOrder.provider},t.clearCart(),n.innerHTML=`
    <div class="order-confirm page-enter">
      <div class="confirm-animation">🎉</div>
      <h2 class="confirm-title">Order Placed!</h2>
      <p class="confirm-sub">Your services are confirmed. We'll pick up your items at your selected slot.</p>
      <div class="order-id-badge">Order #${a.id}</div>
      <div style="background:var(--brand-light);border-radius:var(--r-xl);padding:16px;width:100%;margin-top:8px;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
          <span style="font-size:1.4rem">🛵</span>
          <div>
            <div style="font-weight:700;font-size:15px;">Pickup slot: ${l}</div>
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
    </div>`}catch{showToast(`❌ Failed to connect to server`),r&&(r.disabled=!1,r.textContent=`Place Order`)}}function S(n){let r=t.state.activeOrder||e.activeOrder,i=r.statusIndex===void 0?1:r.statusIndex;n.innerHTML=`
  <div class="tracking-page page-enter">
    <!-- Map -->
    <div class="tracking-map" style="padding:0; overflow:hidden; position:relative;">
      <iframe 
        width="100%" 
        height="100%" 
        style="border:0;" 
        loading="lazy" 
        allowfullscreen 
        src="https://maps.google.com/maps?q=${encodeURIComponent(r.address)}&t=&z=14&ie=UTF8&iwloc=&output=embed">
      </iframe>
      <div style="position:absolute; bottom:16px; left:50%; transform:translateX(-50%); background:white; padding:8px 16px; border-radius:20px; box-shadow:0 4px 15px rgba(0,0,0,0.15); display:flex; align-items:center; gap:8px; font-weight:700; z-index:10; border:2px solid var(--brand);">
        <span style="width:10px; height:10px; background:var(--brand); border-radius:50%; display:inline-block; animation:pulse 1.5s infinite;"></span>
        <span class="eta-min" style="font-size:18px; color:var(--text-primary); font-variant-numeric: tabular-nums;">${r.eta||22}:00</span> 
        <span style="color:var(--text-muted); font-size:14px; font-weight:600;">away</span>
      </div>
    </div>

    <!-- Provider Card -->
    <div style="margin:16px;background:var(--surface);border-radius:var(--r-xl);padding:16px;border:1px solid var(--border-light);box-shadow:var(--shadow-xs);display:flex;align-items:center;gap:12px;">
      <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${r.provider.avatar}</div>
      <div style="flex:1;">
        <div style="font-weight:700;font-size:15px;">${r.provider.name}</div>
        <div style="font-size:12px;color:var(--text-muted);">★ ${r.provider.rating} · Your service provider</div>
      </div>
      <button style="width:42px;height:42px;border-radius:50%;background:var(--success);color:white;display:flex;align-items:center;justify-content:center;border:none;cursor:pointer;box-shadow:0 2px 10px rgba(34,197,94,0.35);" onclick="showToast('📞 Calling ${r.provider.name}…')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.86a16 16 0 0 0 6.24 6.24l.87-.87a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
      </button>
    </div>

    <!-- Stepper -->
    <div class="order-stepper">
      ${r.steps.map((e,t)=>`
        <div class="stepper-item ${t<i?`done`:t===i?`active`:`upcoming`}">
          <div class="stepper-left">
            <div class="stepper-dot">${t<i?`✓`:e.emoji}</div>
          </div>
          <div class="stepper-content">
            <div class="stepper-title">${e.label}</div>
            <div class="stepper-time">${e.time}</div>
            ${t===i?`<div class="stepper-desc">${e.desc}</div>`:``}
          </div>
        </div>`).join(``)}
    </div>

    <!-- Order Details -->
    <div class="order-detail-box">
      <div class="order-detail-header">
        <span>📦 Order #${r.id}</span>
        <span class="status-badge picked">In Progress</span>
      </div>
      <div class="order-detail-body">
        ${(r.items||[]).map(e=>`
          <div class="order-detail-row">
            <span style="font-size:1.2rem">${e.emoji}</span>
            <span style="flex:1;">${e.name}</span>
            <span style="font-weight:700;">₹${e.price}</span>
          </div>`).join(``)}
        <div style="height:1px;background:var(--border-light);margin:8px 0;"></div>
        <div class="order-detail-row" style="font-weight:800;font-size:15px;">
          <span>Total Paid</span>
          <span style="color:var(--brand);">₹${r.total||t.getCartTotal()}</span>
        </div>
      </div>
    </div>
  </div>`;let a=(r.eta||22)*60,o=setInterval(()=>{if(!document.body.contains(n)){clearInterval(o);return}if(a<=0){clearInterval(o);return}a--;let e=`${Math.floor(a/60)}:${(a%60).toString().padStart(2,`0`)}`,t=n.querySelector(`.eta-min`);t&&(t.textContent=e)},1e3)}function ne(n){n.innerHTML=`
  <div class="orders-page page-enter">
    <div style="padding:20px 0 8px;">
      <div class="section-title" style="padding:0 16px;">Your Orders</div>
      <div class="section-sub" style="padding:0 16px;">Manage and reorder your services</div>
    </div>

    <!-- Active Order -->
    ${t.state.activeOrder?`
    <div style="background:var(--gradient-brand);border-radius:var(--r-xl);margin:0 16px 8px;padding:16px;cursor:pointer;box-shadow:var(--shadow-brand);" onclick="App.navigate('tracking')">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
        <div style="background:rgba(255,255,255,0.25);color:white;font-size:11px;font-weight:700;padding:3px 10px;border-radius:20px;">🟢 LIVE</div>
        <div style="color:rgba(255,255,255,0.85);font-size:12px;">Tap to track →</div>
      </div>
      <div style="color:white;font-weight:800;font-size:16px;">Order #${t.state.activeOrder.id}</div>
      <div style="color:rgba(255,255,255,0.85);font-size:13px;margin-top:4px;">🛵 Picked up · ETA ${t.state.activeOrder.eta} min</div>
    </div>`:``}

    <!-- Tab Bar -->
    <div style="padding:0 16px 8px;">
      <div class="tab-row">
        <button class="tab-btn active" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');">All Orders</button>
        <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');showToast('No active orders!')">Active</button>
        <button class="tab-btn" onclick="this.parentNode.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));this.classList.add('active');">Completed</button>
      </div>
    </div>

    ${!t.state.activeOrder&&e.orders.length===0?`
    <div class="empty-state" style="margin:40px 16px;">
      <div class="empty-icon" style="font-size:3rem; margin-bottom:12px;">📝</div>
      <h3>No Orders Yet</h3>
      <p style="color:var(--text-muted); font-size:14px; margin-bottom:20px;">You haven't placed any orders. Start booking your first service!</p>
      <button class="btn-primary" style="width:auto; padding:12px 32px;" onclick="App.navigate('home')">Start Booking</button>
    </div>`:``}

    ${e.orders.map(e=>`
    <div class="order-history-card" onclick="App.navigate('tracking')">
      <div class="order-history-header">
        <div>
          <div class="order-history-id">${e.id}</div>
          <div class="order-history-date">${e.date} · ${e.slot}</div>
        </div>
        <span class="status-badge delivered">Delivered ✓</span>
      </div>
      <div class="order-history-body">
        <div class="order-history-items">
          ${e.items.map(e=>`
            <div class="order-history-item">
              <div class="order-history-item-icon">${e.emoji}</div>
              <span>${e.name}</span>
              <span style="margin-left:auto;font-weight:600;color:var(--text-secondary);">₹${e.price}</span>
            </div>`).join(``)}
        </div>
        <div style="font-size:12px;color:var(--text-muted);margin-bottom:8px;">Provider: ${e.provider.name} · ★ ${e.provider.rating}</div>
        <div class="order-history-footer">
          <div class="order-total-label">Total: ₹${e.total}</div>
          <button class="reorder-action-btn" onclick="event.stopPropagation();window.reorderHistory('${e.id}')">Reorder ↺</button>
        </div>
      </div>
    </div>`).join(``)}
  </div>`}function re(t){t.innerHTML=`
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
      ${e.providerOrders.map(e=>`
      <div class="provider-order-card" style="margin-bottom:12px;">
        <div class="provider-order-header">
          <div>
            <div style="font-weight:700;">${e.customer}</div>
            <div style="font-size:12px;color:var(--text-muted);">${e.id} · ${e.slot}</div>
          </div>
          <span class="status-badge ${e.status}">${e.status===`pending`?`🕐 Pending`:`⚙️ Processing`}</span>
        </div>
        <div style="font-size:13px;color:var(--text-secondary);margin:8px 0;">📦 ${e.items}</div>
        <div style="font-size:12px;color:var(--text-muted);">📍 ${e.address}</div>
        <div class="provider-actions">
          ${e.status===`pending`?`<button class="btn-primary btn-sm" onclick="showToast('✅ Order accepted!');this.closest('.provider-order-card').querySelector('.status-badge').textContent='⚙️ Processing';this.closest('.provider-order-card').querySelector('.status-badge').className='status-badge processing'">Accept</button>
             <button class="btn-ghost" onclick="showToast('Order declined.')">Decline</button>`:`<button class="btn-primary btn-sm" onclick="showToast('🚴 Marked Out for Delivery!')">Out for Delivery</button>
             <button class="btn-ghost" onclick="showToast('✅ Marked Delivered!')">Delivered</button>`}
        </div>
      </div>`).join(``)}
    </div>
  </div>`}window.addEventListener(`load`,()=>{t.registerPage(`home`,e=>h(e)),t.registerPage(`category`,(e,t)=>g(e,t)),t.registerPage(`checkout`,e=>y(e)),t.registerPage(`tracking`,e=>S(e)),t.registerPage(`orders`,e=>ne(e)),t.registerPage(`provider`,e=>re(e))});function ie(n,r){let i=Object.values(e.services).flat().find(e=>e.id===n);i&&(t.addToCart({id:i.id,name:i.name,emoji:i.emoji,price:i.price},r),_(n,r))}function ae(e,n){t.removeFromCart(e),_(e,n)}function oe(n){let r=e.orders.find(e=>e.id===n);if(!r)return;let i={id:`ORD-`+Math.floor(1e3+Math.random()*9e3),status:`pending`,statusIndex:0,eta:25,items:r.items.map(e=>({...e})),total:r.total,address:r.address,slot:`Asap (Fast Pickup)`,provider:r.provider,steps:[{label:`Order Confirmed`,emoji:`✅`,time:`Just now`,desc:`Your order has been confirmed.`,done:!0,active:!0},{label:`Picked Up`,emoji:`🛵`,time:`Pending`,desc:`Agent is on the way to your address.`,done:!1},{label:`In Process`,emoji:`✂️`,time:`Pending`,desc:`Your garments are being serviced.`,done:!1},{label:`Out for Delivery`,emoji:`🚴`,time:`Pending`,desc:`On the way back to you.`,done:!1},{label:`Delivered`,emoji:`🎉`,time:`Pending`,desc:`Successfully delivered!`,done:!1}]};t.state.activeOrder=i,showToast(`✅ Order cloned and placed!`),t.navigate(`tracking`)}window.stars=p,window.renderHome=h,window.renderCategory=g,window.renderCategoryAction=_,window.renderCheckout=y,window.renderCheckoutStep=b,window.checkoutNext=te,window.placeOrder=x,window.renderTracking=S,window.renderOrders=ne,window.renderProvider=re,window.addServiceById=ie,window.removeServiceById=ae,window.reorderHistory=oe,window.focusSearch=m;var C=`smartfit`;window.quizStep=0,window.quizAnswers=[];var w=[],T=`upload`;function E(e){e.innerHTML=`
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
        <button class="tab-btn ${C===`smartfit`?`active`:``}" onclick="switchAITab('smartfit')">📐 Smart Fit</button>
        <button class="tab-btn ${C===`feed`?`active`:``}" onclick="switchAITab('feed')">✨ Style Feed</button>
        <button class="tab-btn" onclick="switchAITab('quiz')">🎨 Style Quiz</button>
      </div>
    </div>

    <div id="ai-tab-content">
      ${C===`smartfit`?D():P()}
    </div>
  </div>`}function se(e){C=e;let n=document.getElementById(`ai-tab-content`);n&&(e===`smartfit`?(T=t.state.profile.measurements?`result`:`upload`,w=[],n.innerHTML=D()):e===`feed`?n.innerHTML=P():e===`quiz`&&(window.quizStep=0,window.quizAnswers=[],n.innerHTML=M()),document.querySelectorAll(`.tab-btn`).forEach((t,n)=>{t.classList.toggle(`active`,[`smartfit`,`feed`,`quiz`][n]===e)}))}function D(){return T===`result`&&t.state.profile.measurements?j(t.state.profile.measurements):T===`processing`?k():O()}function O(){return`
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
      ${[`Wear form-fitting clothes (no oversized)`,`Stand against a plain wall or door`,`Ensure good lighting`,`Keep phone at chest height for photos`].map(e=>`
        <div style="display:flex;align-items:center;gap:8px;font-size:12px;color:var(--text-secondary);padding:3px 0;">
          <span style="color:var(--brand);font-weight:700;">✓</span>${e}
        </div>`).join(``)}
    </div>

    <button class="btn-primary" id="start-analysis-btn" style="opacity:.5;pointer-events:none" onclick="startAnalysis()">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      Analyse My Measurements
    </button>
    <p style="font-size:11px;color:var(--text-muted);text-align:center;">🔒 Photos are processed on-device and never stored.</p>
  </div>`}function ce(e){let t=document.getElementById(`upload-${e}`);if(t&&(t.innerHTML=`
    <div style="width:60px;height:60px;background:var(--brand-light);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:2rem;">${e===`front`?`🧍`:`🚶`}</div>
    <div style="font-weight:600;color:var(--brand);font-size:13px;">${e===`front`?`Front`:`Side`} View ✓</div>
    <div style="font-size:11px;color:var(--text-muted);">Photo ready for analysis</div>`,t.style.borderColor=`var(--brand)`,t.style.background=`var(--brand-xlight)`,w.push(e),showToast(`${e===`front`?`Front`:`Side`} photo ready ✓`),w.length>=1)){let e=document.getElementById(`start-analysis-btn`);e&&(e.style.opacity=`1`,e.style.pointerEvents=`auto`)}}function le(){T=`processing`;let e=document.getElementById(`ai-tab-content`);e&&(e.innerHTML=k()),A()}function k(){return`
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
  </div>`}function A(){let n=[`ps-0`,`ps-1`,`ps-2`,`ps-3`],r=0,i=()=>{if(r<n.length){let e=document.getElementById(n[r]);if(e){e.classList.remove(`active`),e.classList.add(`done`);let t=e.querySelector(`.process-step-dot`);t&&(t.style.background=`var(--success)`)}r++;let t=document.getElementById(n[r]);t&&t.classList.add(`active`),setTimeout(i,700)}else setTimeout(()=>{t.state.profile.measurements=e.mockMeasurements,T=`result`;let n=document.getElementById(`ai-tab-content`);n&&(n.innerHTML=j(e.mockMeasurements)),showToast(`📐 Measurements ready!`)},500)};setTimeout(i,700)}function j(e){return`
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
        ${[{label:`Chest`,value:e.chest,unit:`cm`},{label:`Waist`,value:e.waist,unit:`cm`},{label:`Hips`,value:e.hips,unit:`cm`},{label:`Shoulder`,value:e.shoulder,unit:`cm`},{label:`Inseam`,value:e.inseam,unit:`cm`},{label:`Size`,value:e.size,unit:``}].map(e=>`
          <div class="measurement-item">
            <div class="measurement-label">${e.label}</div>
            <div class="measurement-value">${e.value}</div>
            <div class="measurement-unit">${e.unit}</div>
          </div>`).join(``)}
      </div>
      <div class="measurement-confidence">
        <div class="confidence-icon">✅</div>
        <div class="confidence-text">High confidence · Based on 2 photos · Updated ${new Date().toLocaleDateString(`en-IN`,{day:`numeric`,month:`short`})}</div>
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
      ${[{name:`Custom Kurti Stitching`,emoji:`👗`,price:`₹399`,time:`2 days`},{name:`Trouser Alteration`,emoji:`✂️`,price:`₹149`,time:`1 day`},{name:`Salwar Kameez Full`,emoji:`🧵`,price:`₹599`,time:`3 days`}].map(e=>`
        <div style="display:flex;align-items:center;gap:12px;padding:10px 0;border-bottom:1px solid var(--border-light);" onclick="App.navigate('category',{id:'stitching'})">
          <span style="font-size:1.5rem">${e.emoji}</span>
          <div style="flex:1;">
            <div style="font-weight:600;font-size:14px;">${e.name}</div>
            <div style="font-size:12px;color:var(--text-muted);">${e.time}</div>
          </div>
          <div style="font-weight:700;color:var(--brand);">${e.price}</div>
        </div>`).join(``)}
    </div>
  </div>`}function M(){if(t.state.profile.styleQuizResult)return N(t.state.profile.styleQuizResult);let n=e.styleQuiz[window.quizStep];return`
  <div class="smartfit-section">
    <div class="quiz-card">
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width:${Math.round(window.quizStep/e.styleQuiz.length*100)}%"></div>
      </div>
      <div class="quiz-q-num">Question ${window.quizStep+1} of ${e.styleQuiz.length}</div>
      <div class="quiz-question">${n.question}</div>
      <div class="quiz-options">
        ${n.options.map((e,t)=>`
          <div class="quiz-option ${window.quizAnswers[window.quizStep]===t?`selected`:``}"
               id="qopt-${t}"
               onclick="selectQuizOption(${t})">
            <div class="quiz-option-emoji">${e.emoji}</div>
            <div>${e.label}</div>
          </div>`).join(``)}
      </div>
      <div class="quiz-nav">
        ${window.quizStep>0?`<button class="btn-ghost btn-sm" onclick="quizBack()">← Back</button>`:`<div></div>`}
        <span class="quiz-step-indicator">${window.quizStep+1} / ${e.styleQuiz.length}</span>
        <button class="btn-secondary btn-sm" style="width:auto;" onclick="quizNext()" ${window.quizAnswers[window.quizStep]===void 0?`disabled style="opacity:.5;pointer-events:none"`:``} id="quiz-next-btn">
          ${window.quizStep===e.styleQuiz.length-1?`See Results 🎉`:`Next →`}
        </button>
      </div>
    </div>
  </div>`}function ue(e){window.quizAnswers[window.quizStep]=e,document.querySelectorAll(`.quiz-option`).forEach((t,n)=>t.classList.toggle(`selected`,n===e));let t=document.getElementById(`quiz-next-btn`);t&&(t.removeAttribute(`disabled`),t.style.opacity=`1`,t.style.pointerEvents=`auto`)}async function de(){if(window.quizAnswers[window.quizStep]!==void 0)if(window.quizStep<e.styleQuiz.length-1){window.quizStep++;let e=document.getElementById(`ai-tab-content`);e&&(e.innerHTML=M())}else{let n=document.getElementById(`ai-tab-content`);n&&(n.innerHTML=`<div class="smartfit-section" style="text-align:center;padding:40px;"><h3>Analysing your style...</h3></div>`);try{let e=await fetch(`http://localhost:8000/api/ai/style`,{method:`POST`,headers:{"Content-Type":`application/json`},body:JSON.stringify({answers:window.quizAnswers})});if(!e.ok)throw Error(`Network error`);let r=await e.json(),i={label:r.vibe,desc:r.recommendation,tags:[`Gemini Powered`,`Smart Fit`,`Trending`]};t.state.profile.styleQuizResult=i,n&&(n.innerHTML=N(i)),showToast(`🎉 Style profile ready!`)}catch{showToast(`❌ Failed to connect to Gemini AI Server`);let r=e.styleResults.default;t.state.profile.styleQuizResult=r,n&&(n.innerHTML=N(r))}}}function fe(){if(window.quizStep>0){window.quizStep--;let e=document.getElementById(`ai-tab-content`);e&&(e.innerHTML=M())}}function N(e){return`
  <div class="smartfit-section">
    <div class="style-result">
      <div class="style-result-tag">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
        Your Style Profile
      </div>
      <h3>✨ ${e.label}</h3>
      <p>${e.desc}</p>
      <div class="style-tags">
        ${e.tags.map(e=>`<span class="style-tag">${e}</span>`).join(``)}
      </div>
    </div>
    <div style="background:var(--surface);border-radius:var(--r-xl);padding:16px;border:1px solid var(--border-light);">
      <div style="font-weight:700;margin-bottom:8px;">🛍️ Shop Your Style</div>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px;">Services matched to your style profile:</p>
      <button class="btn-primary" onclick="App.navigate('category',{id:'tailoring'})">Explore Tailoring →</button>
      <button class="btn-secondary" style="margin-top:8px;" onclick="switchAITab('feed')">Browse Style Feed →</button>
    </div>
    <button class="btn-ghost" style="width:100%;justify-content:center;" onclick="App.state.profile.styleQuizResult=null;window.quizStep=0;window.quizAnswers=[];switchAITab('quiz')">
      Retake Quiz
    </button>
  </div>`}function P(){return`
  <div class="style-feed">
    <div style="background:var(--surface-3);border-radius:var(--r-xl);padding:14px 16px;border:1px solid var(--border-light);display:flex;align-items:center;gap:12px;margin-bottom:0;">
      <div style="font-size:1.6rem;">💡</div>
      <div>
        <div style="font-weight:700;font-size:14px;color:var(--text-primary);">Get Personalised Advice</div>
        <div style="font-size:12px;color:var(--text-muted);">Based on your measurements + style quiz</div>
      </div>
      <button class="btn-secondary btn-sm" style="width:auto;flex-shrink:0;" onclick="switchAITab('quiz')">Take Quiz</button>
    </div>

    ${t.state.styleFeed.map(e=>`
    <div class="style-post-card" id="sfpost-${e.id}">
      <div class="style-post-header">
        <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${e.author.avatar}</div>
        <div class="style-post-author">
          <div class="style-post-name">
            ${e.author.name}
            ${e.author.verified?`<span class="verified-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg> Verified</span>`:``}
          </div>
          <div class="style-post-role">${e.author.role}</div>
        </div>
        <div class="style-post-time">${e.time}</div>
      </div>
      <div class="style-post-image">
        <span>${e.emoji}</span>
        ${e.isVideo?`<div class="style-video-badge"><svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>${e.duration}</div>`:``}
      </div>
      <div class="style-post-body">
        <div class="style-post-text">${e.text}</div>
        <div class="style-post-tags">${e.tags.map(e=>`<span class="post-tag">${e}</span>`).join(``)}</div>
      </div>
      <div class="style-post-actions">
        <button class="post-action-btn ${e.liked?`liked`:``}" id="sf-like-${e.id}" onclick="toggleStyleLike('${e.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${e.liked?`currentColor`:`none`}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
          ${e.likes}
        </button>
        <button class="post-action-btn ${e.saved?`saved`:``}" id="sf-save-${e.id}" onclick="toggleStyleSave('${e.id}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="${e.saved?`currentColor`:`none`}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
          Save
        </button>
        <button class="get-advice-btn" onclick="showToast('🎨 Personalised advice sent to your profile!')">Get Advice</button>
      </div>
    </div>`).join(``)}
  </div>`}function pe(e){let n=t.state.styleFeed.find(t=>t.id===e);if(!n)return;n.liked=!n.liked,n.likes+=n.liked?1:-1;let r=document.getElementById(`sf-like-${e}`);r&&(r.classList.toggle(`liked`,n.liked),r.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${n.liked?`currentColor`:`none`}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      ${n.likes}`)}function me(e){let n=t.state.styleFeed.find(t=>t.id===e);if(!n)return;n.saved=!n.saved,showToast(n.saved?`🔖 Saved to your collection!`:`Removed from collection`);let r=document.getElementById(`sf-save-${e}`);r&&(r.classList.toggle(`saved`,n.saved),r.innerHTML=`
      <svg width="16" height="16" viewBox="0 0 24 24" fill="${n.saved?`currentColor`:`none`}" stroke="currentColor" stroke-width="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
      Save`)}window.addEventListener(`load`,()=>{t.registerPage(`ai`,e=>E(e))}),window.renderAI=E,window.switchAITab=se,window.renderSmartFitHTML=D,window.renderUploadHTML=O,window.simulatePhotoUpload=ce,window.startAnalysis=le,window.renderProcessingHTML=k,window.runProcessingAnimation=A,window.renderMeasurementResultHTML=j,window.renderQuizHTML=M,window.selectQuizOption=ue,window.quizNext=de,window.quizBack=fe,window.renderStyleResultHTML=N,window.renderStyleFeedHTML=P,window.toggleStyleLike=pe,window.toggleStyleSave=me;var F=null,I=`en-IN`,L=!1;function R(e,t){if(!window.speechSynthesis)return;window.speechSynthesis.cancel();let n=new SpeechSynthesisUtterance(e);n.lang=t||I,n.rate=.92,n.pitch=1.05,window.speechSynthesis.speak(n)}function z(){let e=document.getElementById(`voice-modal`),t=document.getElementById(`voice-overlay`);if(!e||!t)return;e.classList.remove(`hidden`),t.classList.remove(`hidden`),q(`Listening…`),J(``);let n=document.getElementById(`voice-response`);n&&n.classList.add(`hidden`);let r=window.SpeechRecognition||window.webkitSpeechRecognition;if(!r){q(`Not supported in this browser`),J(`Please use Chrome or Edge for voice support.`),R(`Voice assistant is not supported in this browser. Please try Chrome.`);return}if(F)try{F.abort()}catch{}F=new r,F.continuous=!1,F.interimResults=!0,F.lang=I,F.onstart=()=>{L=!0,q(`Listening…`)},F.onresult=e=>{let t=Array.from(e.results).map(e=>e[0].transcript).join(``);J(`"`+t+`"`),e.results[e.results.length-1].isFinal&&W(t)},F.onerror=e=>{L=!1,e.error===`not-allowed`||e.error===`service-not-allowed`?(q(`Microphone access denied`),J(`Allow microphone in browser settings, or tap the demo below.`),B()):e.error===`no-speech`?(q(`No speech detected`),J(`Try saying: "Iron 3 shirts" or "Check my order"`)):U()},F.onend=()=>{L=!1};try{F.start()}catch(e){if(e.name===`InvalidStateError`)try{F.abort(),F.start()}catch{U()}else U()}}function B(){let e=document.getElementById(`voice-status`);if(e&&!document.getElementById(`voice-demo-btn`)){let t=document.createElement(`button`);t.id=`voice-demo-btn`,t.className=`btn-ghost btn-sm`,t.style.cssText=`margin-top:12px;font-size:13px;`,t.textContent=`Try Demo Mode`,t.onclick=()=>{t.remove(),U()},e.parentNode.insertBefore(t,e.nextSibling)}}var V=[`Iron 5 shirts pickup tomorrow morning`,`Check my order status`,`Book dry cleaning for my suit`,`What services do you have?`,`Cancel`],H=0;function U(){let e=V[H%V.length];H++,q(`Demo mode — simulating voice…`),J(``);let t=``,n=setInterval(()=>{t+=e[t.length],J(`"`+t+`"`),t.length===e.length&&(clearInterval(n),setTimeout(()=>W(e),400))},55)}function W(n){q(`Processing…`);let r=n.toLowerCase();setTimeout(()=>{let n=``;if(G(r,[`iron`,`ironing`,`press`,`kapde`])||G(r,[`shirt`,`trouser`])&&!G(r,[`dry clean`,`suit`])){let e=K(r)||1,i=r.includes(`trouser`)?`trouser`:`shirt`,a=i===`shirt`?`s-i-1`:`s-i-2`,o=i===`shirt`?`Shirt / T-Shirt`:`Trousers / Jeans`,s=i===`shirt`?25:30;for(let n=0;n<e;n++)t.addToCart({id:a,name:o,emoji:`👔`,price:s},`ironing`);n=`Added `+e+` `+i+` ironing to your cart. Total: ₹`+s*e+`. Shall I proceed to checkout?`}else if(G(r,[`dry clean`,`dry-clean`,`dry`]))t.addToCart({id:`s-d-1`,name:`Formal Suit (Dry Clean)`,emoji:`🤵`,price:299},`dry-cleaning`),n=`Added dry cleaning for 1 formal suit. ₹299. Want to add anything else?`;else if(G(r,[`laundry`,`wash`,`dhulai`,`washing`]))t.addToCart({id:`s-l-1`,name:`Wash & Fold (1 kg)`,emoji:`🫧`,price:69},`laundry`),n=`Added 1 kg wash and fold to your cart. ₹69.`;else if(G(r,[`shoe`,`boot`,`sandal`,`joota`]))t.addToCart({id:`s-sr-5`,name:`Sneaker Deep Clean`,emoji:`👟`,price:199},`shoe-repair`),n=`Added sneaker deep clean to your cart. ₹199.`;else if(G(r,[`call`,`support`,`agent`,`human`,`connect`]))n=`Connecting you to a support agent now.`,setTimeout(()=>{Y(),showHelpModal()},1500);else if(G(r,[`checkout`,`pay`,`payment`,`order now`,`place order`]))n=`Taking you to checkout now!`,setTimeout(()=>{Y(),t.navigate(`checkout`)},2e3);else if(G(r,[`order`,`status`,`track`,`where`,`delivery`,`kahan`])){let r=t.state.activeOrder||e.activeOrder;n=`Your order `+r.id+` is currently In Progress. Estimated delivery in `+r.eta+` minutes.`,setTimeout(()=>{Y(),t.navigate(`tracking`)},3e3)}else G(r,[`cancel`,`close`,`stop`,`never mind`,`band karo`])?(n=`No problem! Let me know if you need anything.`,setTimeout(Y,2e3)):n=G(r,[`service`,`what`,`kya`,`option`,`help`,`available`])?`ServeNow offers Ironing, Dry Cleaning, Shoe Repair, Tailoring, Stitching, Laundry, Bag Repair, and Watch Repair — all delivered in 15 to 30 minutes!`:`I heard you, but I'm not sure what you need. Try saying "iron 3 shirts", "check my order", or "call support".`;q(`Done ✓`),he(n),R(n,I)},800)}function G(e,t){return t.some(t=>e.includes(t))}function K(e){let t=e.match(/(\d+|one|two|three|four|five|six|seven|eight|nine|ten)/i);if(!t)return null;let n={one:1,two:2,three:3,four:4,five:5,six:6,seven:7,eight:8,nine:9,ten:10},r=t[1].toLowerCase();return n[r]===void 0?parseInt(r,10):n[r]}function q(e){let t=document.getElementById(`voice-status`);t&&(t.textContent=e)}function J(e){let t=document.getElementById(`voice-transcript`);t&&(t.textContent=e)}function he(e){let t=document.getElementById(`voice-response`);t&&(t.textContent=e,t.classList.remove(`hidden`),t.style.animation=`none`,t.offsetWidth,t.style.animation=`popIn 0.3s ease both`)}function ge(e){if(I=e,t.state.voiceLang=e,document.querySelectorAll(`.voice-lang-btn`).forEach(t=>{t.classList.toggle(`active`,t.id===(e===`en-IN`?`lang-en`:`lang-hi`))}),F&&L){try{F.stop()}catch{}setTimeout(z,300)}showToast(e===`en-IN`?`🇬🇧 English selected`:`🇮🇳 हिंदी चुनी गई`)}function Y(){if(F){if(F.onend=null,L)try{F.stop()}catch{}L=!1}window.speechSynthesis&&window.speechSynthesis.cancel(),document.getElementById(`voice-modal`).classList.add(`hidden`),document.getElementById(`voice-overlay`).classList.add(`hidden`)}window.speak=R,window.startVoiceAssistant=z,window.showDemoFallbackBtn=B,window.simulateVoiceDemo=U,window.processVoiceCommand=W,window.matchIntent=G,window.extractNumber=K,window.setVoiceStatus=q,window.setVoiceTranscript=J,window.showVoiceResponse=he,window.setVoiceLang=ge,window.closeVoiceModal=Y;function X(e){let n=t.state.profile,r=t.state.seniorMode;e.innerHTML=`
  <div class="profile-page page-enter">
    <!-- Profile Header -->
    <div class="profile-header">
      <div class="profile-avatar">
        ${n.name.charAt(0).toUpperCase()}
      </div>
      <div class="profile-name">${n.name}</div>
      <div class="profile-email">${n.email}</div>
    </div>

    <!-- Profile Body -->
    <div class="profile-body">

      <!-- Measurements Quick View -->
      ${n.measurements?`
      <div style="background:linear-gradient(135deg,#1a1a2e 0%,#0f3460 100%);border-radius:var(--r-xl);padding:16px 20px;cursor:pointer;" onclick="App.navigate('ai')">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
          <div style="color:rgba(255,255,255,0.75);font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:.06em;">Smart Fit Active</div>
          <div style="background:rgba(0,181,173,0.25);color:#4ECDC4;font-size:11px;font-weight:700;padding:2px 10px;border-radius:20px;">View →</div>
        </div>
        <div style="color:white;font-weight:700;font-size:15px;margin-bottom:4px;">📐 Your Measurements Saved</div>
        <div style="color:rgba(255,255,255,0.7);font-size:12px;">Chest: ${n.measurements.chest}cm · Waist: ${n.measurements.waist}cm · Size: ${n.measurements.size}</div>
      </div>`:`
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
            <div class="profile-row-sub">${n.name} · ${n.email}</div>
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
            <input type="checkbox" id="senior-toggle-input" ${r?`checked`:``} onchange="handleSeniorToggle(this.checked)">
            <span class="toggle-slider"></span>
          </label>
        </div>

        <!-- Voice Language -->
        <div class="profile-row" onclick="showVoiceLangPicker()">
          <div class="profile-row-icon" style="background:var(--brand-light);">🗣️</div>
          <div class="profile-row-info">
            <div class="profile-row-label">Voice Language</div>
            <div class="profile-row-sub" id="voice-lang-label">${t.state.voiceLang===`hi-IN`?`हिंदी (Hindi)`:`English (India)`}</div>
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
  </div>`}function _e(e){t.setSeniorMode(e),e&&setTimeout(()=>{speak(`Senior Mode is now on. You can use the microphone button to place orders by voice.`,`en-IN`)},600),setTimeout(()=>{let e=document.getElementById(`main-content`);e&&t.state.page===`profile`&&X(e)},300)}function ve(){let e=t.state.voiceLang===`en-IN`?`hi-IN`:`en-IN`,n=e===`hi-IN`?`हिंदी (Hindi)`:`English (India)`;setVoiceLang(e);let r=document.getElementById(`voice-lang-label`);r&&(r.textContent=n)}window.addEventListener(`load`,()=>{t.registerPage(`profile`,e=>X(e))}),window.renderProfile=X,window.handleSeniorToggle=_e,window.showVoiceLangPicker=ve;var Z=`All`,Q=`Casual`,ye=[`All`,`Office Wear`,`Casual`,`Ethnic`,`Formal`,`Wedding`];function be(e){e.innerHTML=`
  <div class="community-page page-enter">
    <!-- Hero -->
    <div class="community-hero">
      <h1>Style Community 💬</h1>
      <p>Tips, trends and inspiration from designers & fashion lovers</p>
      <div class="community-stats-row">
        <div class="community-stat">
          <div class="community-stat-num">12.4K</div>
          <div class="community-stat-label">Members</div>
        </div>
        <div class="community-stat">
          <div class="community-stat-num">380+</div>
          <div class="community-stat-label">Posts Today</div>
        </div>
        <div class="community-stat">
          <div class="community-stat-num">47</div>
          <div class="community-stat-label">Designers</div>
        </div>
      </div>
    </div>

    <!-- Compose CTA -->
    <div class="compose-btn-wrap">
      <div class="compose-trigger" onclick="openCompose()">
        <div class="avatar avatar-sm" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">
          ${t.state.profile.name.charAt(0)}
        </div>
        <div class="compose-placeholder">Share a tip, outfit or ask for advice…</div>
        <div class="compose-actions">
          <div class="compose-action-icon" title="Add Photo">📷</div>
          <div class="compose-action-icon" title="Tag Designer">🏷️</div>
        </div>
      </div>
    </div>

    <!-- Filters -->
    <div class="filter-row">
      ${ye.map(e=>`
        <div class="chip ${e===Z?`active`:``}"
             onclick="setCommunityFilter('${e}')">
          ${e}
        </div>`).join(``)}
    </div>

    <!-- Feed -->
    <div class="community-feed" id="community-feed">
      ${$()}
    </div>
  </div>

  <!-- Compose Modal -->
  <div id="compose-overlay" class="overlay hidden" onclick="closeCompose()"></div>
  <div id="compose-modal" class="compose-modal hidden">
    <div class="compose-modal-header">
      <h3>New Post ✍️</h3>
      <button class="btn-icon" onclick="closeCompose()">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
      </button>
    </div>
    <div class="compose-modal-body">
      <div style="display:flex;align-items:flex-start;gap:12px;">
        <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${t.state.profile.name.charAt(0)}</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:14px;">${t.state.profile.name}</div>
          <div style="font-size:12px;color:var(--text-muted);">Style Enthusiast</div>
        </div>
      </div>
      <textarea class="form-input" id="compose-text" placeholder="Share a tip, question or outfit inspiration…" rows="4" style="margin-top:0;"></textarea>
      <div>
        <div class="section-label" style="margin-bottom:8px;">Category</div>
        <div class="compose-category-row">
          ${[`Casual`,`Office Wear`,`Ethnic`,`Formal`,`Wedding`].map(e=>`
            <button class="compose-cat-btn ${e===Q?`selected`:``}"
                    onclick="selectComposeCat('${e}',this)">${e}</button>`).join(``)}
        </div>
      </div>
      <div class="compose-photo-add" onclick="showToast('Photo picker coming soon!')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        Add Photo / Video
      </div>
      <div>
        <div class="section-label" style="margin-bottom:8px;">Tag a Designer</div>
        <div class="tag-designer-row">
          ${[`Priya Sharma`,`Studio Riya`,`Meena Krishnan`].map(e=>`
            <div class="tag-designer-btn" onclick="showToast('@${e.split(` `)[0]} tagged!')"
                 style="cursor:pointer;">@ ${e}</div>`).join(``)}
        </div>
      </div>
    </div>
    <div style="padding:12px 16px 24px;">
      <button class="btn-primary" onclick="submitPost()">Post to Community 🚀</button>
    </div>
  </div>`}function $(){let e=t.state.communityPosts.filter(e=>Z===`All`||e.category===Z);return e.length===0?`<div class="empty-state"><div class="empty-icon">💬</div><h3>No posts yet</h3><p>Be the first to post in ${Z}!</p></div>`:e.map(e=>xe(e)).join(``)}function xe(e){return`
  <div class="post-card" id="post-${e.id}">
    <div class="post-header">
      <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${e.author.avatar}</div>
      <div class="post-author-info">
        <div class="post-author-name">
          ${e.author.name}
          ${e.author.verified?`
          <span class="verified-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            Verified
          </span>`:``}
        </div>
        <div class="post-author-title">${e.author.title}</div>
      </div>
      <div class="post-time">${e.time}</div>
      <button class="post-more" onclick="showToast('Report / Block coming soon')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
    </div>

    <div class="post-image">
      <span>${e.emoji||`🌟`}</span>
      <div class="post-category-badge">${e.category}</div>
    </div>

    <div class="post-body">
      <div class="post-title">${e.title}</div>
      <div class="post-text" id="post-text-${e.id}">${e.text}</div>
      <button class="post-read-more" id="read-more-${e.id}" onclick="toggleReadMore('${e.id}')">Read more</button>
    </div>

    <div class="post-tags">
      ${(e.tags||[]).map(e=>`<span class="post-hashtag">${e}</span>`).join(` `)}
    </div>

    <div class="post-actions">
      <button class="action-btn ${e.liked?`liked`:``}" id="like-btn-${e.id}" onclick="toggleLike('${e.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${e.liked?`currentColor`:`none`}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span class="action-count" id="like-count-${e.id}">${e.likes}</span>
      </button>
      <button class="action-btn" onclick="toggleComments('${e.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span class="action-count">${e.comments}</span>
      </button>
      <button class="action-btn" onclick="showToast('Link copied! 📋')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Share
      </button>
      <button class="follow-btn ${e.author.following?`following`:``}" id="follow-${e.id}"
              onclick="toggleFollow('${e.id}')">
        ${e.author.following?`Following ✓`:`+ Follow`}
      </button>
    </div>

    <div class="comments-section" id="comments-${e.id}" style="display:none;">
      ${e.commentList.slice(0,2).map(e=>`
        <div class="comment-item">
          <div class="avatar avatar-sm">${e.avatar}</div>
          <div class="comment-content">
            <div class="comment-author">
              ${e.author}
              ${e.verified?`<span class="verified-badge" style="font-size:9px;">✓</span>`:``}
            </div>
            <div class="comment-text">${e.text}</div>
            <div class="comment-actions">
              <button class="comment-action" onclick="showToast('Like added!')">Like</button>
              <button class="comment-action" onclick="showToast('Reply coming soon!')">Reply</button>
            </div>
          </div>
        </div>`).join(``)}

      <div class="add-comment">
        <div class="avatar avatar-sm" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${t.state.profile.name.charAt(0)}</div>
        <input type="text" id="comment-input-${e.id}" placeholder="Add a comment…" onkeydown="if(event.key==='Enter')submitComment('${e.id}')">
        <button class="add-comment-btn" onclick="submitComment('${e.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>`}function Se(e){let n=t.state.communityPosts.find(t=>t.id===e);if(!n)return;n.liked=!n.liked,n.likes+=n.liked?1:-1;let r=document.getElementById(`like-btn-${e}`),i=document.getElementById(`like-count-${e}`);r&&(r.classList.toggle(`liked`,n.liked),r.querySelector(`svg`).setAttribute(`fill`,n.liked?`currentColor`:`none`)),i&&(i.textContent=n.likes),n.liked&&showToast(`❤️ Liked!`)}function Ce(e){let t=document.getElementById(`comments-${e}`);if(!t)return;let n=t.style.display!==`none`;t.style.display=n?`none`:`flex`,t.style.flexDirection=`column`,t.style.gap=`12px`}function we(e){let n=document.getElementById(`comment-input-${e}`);if(!n||!n.value.trim())return;let r=n.value.trim(),i=t.state.communityPosts.find(t=>t.id===e);i&&(i.commentList.unshift({author:t.state.profile.name,avatar:t.state.profile.name.charAt(0),text:r,verified:!1}),i.comments++);let a=document.getElementById(`comments-${e}`);if(a){let e=document.createElement(`div`);e.className=`comment-item`,e.style.animation=`popIn .25s ease both`,e.innerHTML=`
      <div class="avatar avatar-sm" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${t.state.profile.name.charAt(0)}</div>
      <div class="comment-content">
        <div class="comment-author">${t.state.profile.name}</div>
        <div class="comment-text">${r}</div>
      </div>`,a.insertBefore(e,a.querySelector(`.add-comment`)),n.value=``,showToast(`💬 Comment posted!`)}}function Te(e){let n=t.state.communityPosts.find(t=>t.id===e);if(!n)return;n.author.following=!n.author.following;let r=document.getElementById(`follow-${e}`);r&&(r.classList.toggle(`following`,n.author.following),r.textContent=n.author.following?`Following ✓`:`+ Follow`),showToast(n.author.following?`✅ Following ${n.author.name}!`:`Unfollowed`)}function Ee(e){let t=document.getElementById(`post-text-${e}`),n=document.getElementById(`read-more-${e}`);!t||!n||(n.textContent=t.classList.toggle(`expanded`)?`Show less`:`Read more`)}function De(e){Z=e;let t=document.getElementById(`community-feed`);t&&(t.innerHTML=$()),document.querySelectorAll(`.filter-row .chip`).forEach(t=>{t.classList.toggle(`active`,t.textContent.trim()===e)})}function Oe(){document.getElementById(`compose-modal`).classList.remove(`hidden`),document.getElementById(`compose-overlay`).classList.remove(`hidden`),setTimeout(()=>{let e=document.getElementById(`compose-text`);e&&e.focus()},350)}function ke(){let e=document.getElementById(`compose-modal`),t=document.getElementById(`compose-overlay`);e&&e.classList.add(`hidden`),t&&t.classList.add(`hidden`)}function Ae(e,t){Q=e,document.querySelectorAll(`.compose-cat-btn`).forEach(e=>e.classList.remove(`selected`)),t.classList.add(`selected`)}function je(){let e=document.getElementById(`compose-text`)?.value?.trim();if(!e){showToast(`Please write something first!`);return}let n={id:`p`+Date.now(),author:{name:t.state.profile.name,title:`Style Enthusiast`,avatar:t.state.profile.name.charAt(0).toUpperCase()+`S`,verified:!1,following:!1},time:`Just now`,category:Q,title:e.length>60?e.substring(0,60)+`…`:e,text:e,emoji:`✨`,tags:[`#${Q.replace(` `,``)}`],likes:0,comments:0,liked:!1,saved:!1,commentList:[]};t.state.communityPosts.unshift(n),ke(),showToast(`🚀 Post shared with the community!`),De(Z)}window.addEventListener(`load`,()=>{t.registerPage(`community`,e=>be(e))}),window.renderCommunity=be,window.renderPostCards=$,window.renderPostCard=xe,window.toggleLike=Se,window.toggleComments=Ce,window.submitComment=we,window.toggleFollow=Te,window.toggleReadMore=Ee,window.setCommunityFilter=De,window.openCompose=Oe,window.closeCompose=ke,window.selectComposeCat=Ae,window.submitPost=je;
/* ===========================================
   ServeNow — data.js
   All mock data: categories, services, orders,
   community posts, style feed, providers
   =========================================== */

const DATA = {

  /* --- Service Categories --- */
  categories: [
    { id: 'ironing',      name: 'Ironing',         emoji: '👕', tagline: '30 min pickup',     color: '#E3F2FD', time: '30 min' },
    { id: 'dry-cleaning', name: 'Dry Cleaning',    emoji: '✨', tagline: 'Expert clean',       color: '#F3E5F5', time: '24 hrs' },
    { id: 'shoe-repair',  name: 'Shoe Repair',     emoji: '👟', tagline: 'Like new again',     color: '#FFF3E0', time: '2 hrs'  },
    { id: 'tailoring',    name: 'Tailoring',       emoji: '✂️', tagline: 'Perfect fit',        color: '#E8F5E9', time: '1-2 days' },
    { id: 'stitching',    name: 'Stitching',       emoji: '🧵', tagline: 'Custom creation',    color: '#FCE4EC', time: '2-3 days' },
    { id: 'laundry',      name: 'Laundry',         emoji: '🫧', tagline: 'Fresh & folded',     color: '#E0F7FA', time: '24 hrs' },
    { id: 'bag-repair',   name: 'Bag & Leather',   emoji: '👜', tagline: 'Restore favorite',   color: '#FFF8E1', time: '1-2 days' },
    { id: 'watch-repair', name: 'Watch Repair',    emoji: '⌚', tagline: 'Precision craft',    color: '#E8EAF6', time: '1-3 days' },
  ],

  /* --- Services per category --- */
  services: {
    'ironing': [
      { id: 's-i-1', name: 'Shirt / T-Shirt',       desc: 'Perfectly pressed, collar to cuffs',          price: 25,  orig: 35,  time: '30 min', rating: 4.8, reviews: 1240, emoji: '👔', popular: true },
      { id: 's-i-2', name: 'Trousers / Jeans',       desc: 'Crisp crease, flawless finish',               price: 30,  orig: 40,  time: '30 min', rating: 4.7, reviews: 860,  emoji: '👖', popular: false },
      { id: 's-i-3', name: 'Saree',                  desc: 'Delicate pleating, ready to drape',           price: 80,  orig: 100, time: '45 min', rating: 4.9, reviews: 540,  emoji: '🥻', popular: false },
      { id: 's-i-4', name: 'Kurta / Kurti',          desc: 'Traditional wear pressed to perfection',      price: 35,  orig: 45,  time: '30 min', rating: 4.8, reviews: 730,  emoji: '👗', popular: true  },
      { id: 's-i-5', name: 'Suit / Blazer',          desc: 'Professional finish for formal occasions',    price: 120, orig: 150, time: '1 hr',   rating: 4.9, reviews: 320,  emoji: '🤵', popular: false },
      { id: 's-i-6', name: 'Bedsheet (Set of 2)',     desc: 'Flat-ironed, crisp linens',                  price: 60,  orig: 80,  time: '45 min', rating: 4.6, reviews: 480,  emoji: '🛏️', popular: false },
    ],
    'dry-cleaning': [
      { id: 's-d-1', name: 'Formal Suit',            desc: 'Dry clean + press, ready to wear',            price: 299, orig: 399, time: '24 hrs', rating: 4.9, reviews: 890,  emoji: '🤵', popular: true  },
      { id: 's-d-2', name: 'Woollen Sweater',        desc: 'Gentle clean, shape preserved',               price: 199, orig: 250, time: '24 hrs', rating: 4.7, reviews: 560,  emoji: '🧥', popular: false },
      { id: 's-d-3', name: 'Silk / Georgette Saree', desc: 'Specialist handling for delicate fabrics',    price: 350, orig: 450, time: '36 hrs', rating: 4.9, reviews: 310,  emoji: '🥻', popular: true  },
      { id: 's-d-4', name: 'Winter Jacket',          desc: 'Deep clean, retain insulation & shape',       price: 399, orig: 500, time: '24 hrs', rating: 4.8, reviews: 420,  emoji: '🧥', popular: false },
      { id: 's-d-5', name: 'Sherwani / Lehenga',     desc: 'Bridal & festive wear — extra care',          price: 699, orig: 900, time: '48 hrs', rating: 4.9, reviews: 260,  emoji: '👘', popular: false },
    ],
    'shoe-repair': [
      { id: 's-sr-1', name: 'Sole Replacement',      desc: 'Full or half sole, any shoe type',            price: 249, orig: 350, time: '2 hrs', rating: 4.8, reviews: 720,  emoji: '👠', popular: true  },
      { id: 's-sr-2', name: 'Stitching & Gluing',    desc: 'Secure split seams and loose parts',          price: 99,  orig: 150, time: '1 hr',  rating: 4.7, reviews: 540,  emoji: '👟', popular: false },
      { id: 's-sr-3', name: 'Heel Repair',           desc: 'Replace worn or broken heels',               price: 149, orig: 200, time: '90 min', rating: 4.8, reviews: 610, emoji: '👡', popular: false },
      { id: 's-sr-4', name: 'Polish & Shine',        desc: 'Professional colour match + buff to gleam',   price: 79,  orig: 100, time: '45 min', rating: 4.6, reviews: 980,  emoji: '✨', popular: true  },
      { id: 's-sr-5', name: 'Sneaker Deep Clean',    desc: 'Hand-wash + UV dry + deodorize',             price: 199, orig: 250, time: '3 hrs', rating: 4.9, reviews: 880,  emoji: '👟', popular: true  },
    ],
    'tailoring': [
      { id: 's-t-1', name: 'Trouser Hemming',        desc: 'Precise length adjustment, invisible finish',  price: 99,  orig: 150, time: '1 day',  rating: 4.8, reviews: 830,  emoji: '✂️', popular: true  },
      { id: 's-t-2', name: 'Shirt Alteration',       desc: 'Waist, sleeve, shoulder adjustments',         price: 149, orig: 200, time: '1 day',  rating: 4.7, reviews: 620,  emoji: '👔', popular: false },
      { id: 's-t-3', name: 'Blouse / Choli Work',    desc: 'Hook, fall, lace and alteration work',        price: 199, orig: 250, time: '2 days', rating: 4.9, reviews: 410,  emoji: '👗', popular: false },
      { id: 's-t-4', name: 'Suit Fitting',           desc: 'Take-in / let-out, sleeve alteration',        price: 299, orig: 400, time: '2 days', rating: 4.8, reviews: 290,  emoji: '🤵', popular: false },
      { id: 's-t-5', name: 'Zip / Button Repair',    desc: 'Replace broken zip or reinforce buttons',     price: 69,  orig: 100, time: '4 hrs',  rating: 4.6, reviews: 1100, emoji: '🪡', popular: true  },
    ],
    'stitching': [
      { id: 's-st-1', name: 'Salwar Kameez (Full)',  desc: 'Stitch from fabric — all measurements taken',  price: 599, orig: 799, time: '3 days', rating: 4.9, reviews: 490,  emoji: '🧵', popular: true  },
      { id: 's-st-2', name: 'Blouse Stitching',      desc: 'Custom blouse with neck & sleeve design',     price: 299, orig: 400, time: '2 days', rating: 4.8, reviews: 660,  emoji: '👗', popular: false },
      { id: 's-st-3', name: 'Kurti Stitching',       desc: 'Designer or plain kurti, all sizes',          price: 399, orig: 500, time: '2 days', rating: 4.7, reviews: 430,  emoji: '👚', popular: false },
      { id: 's-st-4', name: 'Lehenga Stitching',     desc: 'Bridal or casual — flare and fall choices',   price: 999, orig: 1299,time: '5 days', rating: 4.9, reviews: 180,  emoji: '👘', popular: false },
    ],
    'laundry': [
      { id: 's-l-1', name: 'Wash & Fold (kg)',       desc: 'Machine wash, tumble dry, neatly folded',     price: 69,  orig: 90,  time: '24 hrs', rating: 4.7, reviews: 2100, emoji: '🫧', popular: true  },
      { id: 's-l-2', name: 'Wash & Iron (kg)',       desc: 'Machine wash + professional press',           price: 99,  orig: 130, time: '24 hrs', rating: 4.8, reviews: 1560, emoji: '👕', popular: true  },
      { id: 's-l-3', name: 'Express (3 hrs)',        desc: 'Rush wash & iron — back in 3 hours',         price: 149, orig: 200, time: '3 hrs',  rating: 4.9, reviews: 740,  emoji: '⚡', popular: false },
      { id: 's-l-4', name: 'Bedding & Linen',        desc: 'Duvet, pillowcases, sheets — fresh set',     price: 199, orig: 250, time: '36 hrs', rating: 4.6, reviews: 380,  emoji: '🛏️', popular: false },
    ],
    'bag-repair': [
      { id: 's-b-1', name: 'Strap Repair / Replace', desc: 'Leather or fabric strap fixed or replaced',  price: 299, orig: 400, time: '2 days', rating: 4.8, reviews: 320,  emoji: '👜', popular: true  },
      { id: 's-b-2', name: 'Zip Replacement',        desc: 'Brand-matching zip for bags & wallets',       price: 199, orig: 280, time: '1 day',  rating: 4.7, reviews: 480,  emoji: '🛍️', popular: false },
      { id: 's-b-3', name: 'Leather Conditioning',   desc: 'Deep condition + polish for leather goods',   price: 399, orig: 500, time: '1 day',  rating: 4.9, reviews: 210,  emoji: '✨', popular: false },
      { id: 's-b-4', name: 'Bag Stitching',          desc: 'Re-stitch torn seams, reinforce handles',    price: 249, orig: 350, time: '1 day',  rating: 4.8, reviews: 270,  emoji: '🧵', popular: false },
    ],
    'watch-repair': [
      { id: 's-w-1', name: 'Battery Replacement',    desc: 'Quick swap, all watch brands',               price: 149, orig: 200, time: '1 hr',   rating: 4.8, reviews: 1850, emoji: '🔋', popular: true  },
      { id: 's-w-2', name: 'Strap Replacement',      desc: 'Leather, metal, rubber — wide range',        price: 299, orig: 400, time: '2 hrs',  rating: 4.7, reviews: 630,  emoji: '⌚', popular: false },
      { id: 's-w-3', name: 'Movement Service',       desc: 'Full overhaul, lubrication, timing check',   price: 999, orig: 1400,time: '3 days', rating: 4.9, reviews: 180,  emoji: '⚙️', popular: false },
      { id: 's-w-4', name: 'Glass Replacement',      desc: 'Mineral or sapphire crystal replacement',    price: 499, orig: 700, time: '2 days', rating: 4.8, reviews: 240,  emoji: '🔍', popular: false },
    ],
  },

  /* --- Past Orders --- */
  orders: [
    {
      id: 'ORD-8821',
      date: '22 Jun 2026',
      status: 'delivered',
      items: [
        { name: 'Shirt Ironing ×3',   emoji: '👔', price: 75  },
        { name: 'Trouser Ironing ×2', emoji: '👖', price: 60  },
      ],
      total: 149,
      address: '42, Sector 15, Noida',
      slot: 'Today, 8–10 AM',
      provider: { name: 'Ramesh Tailors', rating: 4.8 },
    },
    {
      id: 'ORD-7743',
      date: '18 Jun 2026',
      status: 'delivered',
      items: [
        { name: 'Wash & Fold 3 kg',   emoji: '🫧', price: 207 },
        { name: 'Express Delivery',   emoji: '⚡', price: 30  },
      ],
      total: 237,
      address: 'DLF Cyber City, Gurugram',
      slot: 'Jun 18, 6–8 PM',
      provider: { name: 'SparkClean', rating: 4.9 },
    },
    {
      id: 'ORD-6554',
      date: '10 Jun 2026',
      status: 'delivered',
      items: [
        { name: 'Sneaker Deep Clean ×2', emoji: '👟', price: 398 },
      ],
      total: 398,
      address: '42, Sector 15, Noida',
      slot: 'Jun 11, 10 AM–12 PM',
      provider: { name: 'SoleRevive', rating: 4.9 },
    },
  ],

  /* Active order for tracking demo */
  activeOrder: {
    id: 'ORD-9901',
    status: 'picked',   /* pending | picked | processing | out | delivered */
    statusIndex: 1,
    items: [{ name: 'Shirt Ironing ×5', emoji: '👔', price: 125 }, { name: 'Trouser Ironing ×2', emoji: '👖', price: 60 }],
    total: 199,
    eta: 22,
    address: '42, Sector 15, Noida',
    slot: 'Today, 2–4 PM',
    provider: { name: 'Ramesh Tailors', phone: '+91 98765 43210', rating: 4.8, avatar: 'RT' },
    steps: [
      { label: 'Order Confirmed',   emoji: '✅', time: '1:42 PM', desc: 'Your order has been confirmed.',             done: true  },
      { label: 'Picked Up',         emoji: '🛵', time: '2:05 PM', desc: 'Agent is on the way to your address.',      done: true  },
      { label: 'In Process',        emoji: '✂️', time: 'Est. 2:30 PM', desc: 'Your garments are being serviced.',    done: false, active: true },
      { label: 'Out for Delivery',  emoji: '🚴', time: 'Est. 3:10 PM', desc: 'On the way back to you.',              done: false },
      { label: 'Delivered',         emoji: '🎉', time: 'Est. 3:30 PM', desc: 'Successfully delivered!',              done: false },
    ],
  },

  /* --- Community Posts --- */
  communityPosts: [
    {
      id: 'p1',
      author: { name: 'Priya Sharma', title: 'Senior Fashion Designer', avatar: 'PS', verified: true, following: false },
      time: '2h ago',
      category: 'Office Wear',
      title: 'Top 5 ways to style a linen blazer for summer 🌿',
      text: 'Linen blazers are the ultimate summer office essential. Here are my top 5 ways to rock one without looking overdressed. First, pair with a plain white tee and cropped trousers — effortless chic. Second, go monochrome — beige blazer + beige trousers = instant power look...',
      emoji: '🧥',
      tags: ['#LinenFashion', '#OfficeWear', '#SummerStyle'],
      likes: 284,
      comments: 32,
      liked: false,
      saved: false,
      commentList: [
        { author: 'Anjali R.', avatar: 'AR', text: 'Love the monochrome idea! Works so well in the Delhi heat 😍', verified: false },
        { author: 'Priya Sharma', avatar: 'PS', text: 'Exactly! And linen breathes so well — you will not regret it ✨', verified: true },
      ],
    },
    {
      id: 'p2',
      author: { name: 'Rohit Mehra', title: 'Influencer · 450k followers', avatar: 'RM', verified: true, following: false },
      time: '4h ago',
      category: 'Casual',
      title: 'Oversized fits are not going anywhere this monsoon 🌧️',
      text: 'Monsoon is here and so are the oversized kurtas and baggy pants. I have been styling this look for the past 2 weeks and getting SO many compliments. The trick is to balance proportions — baggy top, slim bottom, or vice versa.',
      emoji: '🌧️',
      tags: ['#MonsoonFashion', '#Casual', '#Kurta'],
      likes: 1120,
      comments: 87,
      liked: false,
      saved: false,
      commentList: [
        { author: 'Karan T.', avatar: 'KT', text: 'Great content as always! What brand is the kurta?', verified: false },
        { author: 'Sunita V.', avatar: 'SV', text: 'The blue one in the second photo is stunning!', verified: false },
        { author: 'Rohit Mehra', avatar: 'RM', text: 'It is from a local artisan brand in Jaipur — will drop the link soon 🙏', verified: true },
      ],
    },
    {
      id: 'p3',
      author: { name: 'Meena Krishnan', title: 'Fabric Care Expert', avatar: 'MK', verified: true, following: false },
      time: '1d ago',
      category: 'Ethnic',
      title: 'How to care for your silk sarees at home 🥻',
      text: 'Silk sarees are investments. Here is the definitive guide I have put together after 15 years in the industry. Always hand-wash in cold water with mild detergent. Never wring — roll in a towel to remove moisture. Dry in shade, away from direct sunlight.',
      emoji: '🥻',
      tags: ['#SilkSaree', '#FabricCare', '#Ethnic'],
      likes: 542,
      comments: 61,
      liked: false,
      saved: false,
      commentList: [
        { author: 'Radha M.', avatar: 'RM', text: 'This is so helpful! I have been storing mine wrong all along 😱', verified: false },
        { author: 'Meena Krishnan', avatar: 'MK', text: 'Common mistake! Storage in muslin cloth is key for silk 🙂', verified: true },
      ],
    },
    {
      id: 'p4',
      author: { name: 'Devika Anand', title: 'User · Style Enthusiast', avatar: 'DA', verified: false, following: false },
      time: '1d ago',
      category: 'Wedding',
      title: 'My sister\'s wedding look — styled by ServeNow\'s AI!',
      text: 'Used the Smart Fit tool + style quiz and got an AMAZING lehenga recommendation for my sister\'s wedding. The AI suggested a coral and gold combination based on her skin tone and body measurements — we loved it! Highly recommend trying it.',
      emoji: '💍',
      tags: ['#WeddingLook', '#ServeNowStyle', '#Lehenga'],
      likes: 389,
      comments: 45,
      liked: false,
      saved: false,
      commentList: [
        { author: 'Neha P.', avatar: 'NP', text: 'The style quiz is so accurate! I got mine done last week 😊', verified: false },
      ],
    },
  ],

  /* --- Style Feed Posts --- */
  styleFeed: [
    {
      id: 'sf1',
      author: { name: 'Arjun Kapoor Style', avatar: 'AK', verified: true, role: 'Designer · 1.2M followers' },
      time: '3h ago',
      text: '🔥 Monsoon capsule wardrobe essentials: earthy tones + water-resistant fabrics. Full video breakdown below!',
      emoji: '🌿',
      tags: ['#MonsoonWear', '#CapsuleWardrobe', '#MinimalistFashion'],
      isVideo: true,
      duration: '4:32',
      likes: 8420,
      saved: false,
      liked: false,
    },
    {
      id: 'sf2',
      author: { name: 'Studio Riya', avatar: 'SR', verified: true, role: 'Boutique · Official' },
      time: '6h ago',
      text: '✨ New collection: "Monsoon Bloom" — handwoven cotton sarees with natural dyes. Limited to 50 pieces.',
      emoji: '🌸',
      tags: ['#HandwovenSaree', '#NewCollection', '#SupportHandloom'],
      isVideo: false,
      likes: 3280,
      saved: false,
      liked: false,
    },
    {
      id: 'sf3',
      author: { name: 'Priya Sharma', avatar: 'PS', verified: true, role: 'Fashion Designer · Verified' },
      time: '1d ago',
      text: '💡 Tip: Your body measurements change seasonally. Re-take your Smart Fit measurements every 3 months for the most accurate tailoring results!',
      emoji: '📐',
      tags: ['#StyleTip', '#SmartFit', '#TailoringTip'],
      isVideo: false,
      likes: 1940,
      saved: false,
      liked: false,
    },
  ],

  /* --- Style Quiz Questions --- */
  styleQuiz: [
    {
      question: 'What is your primary style vibe?',
      options: [
        { label: 'Minimal & Clean', emoji: '⬜' },
        { label: 'Bold & Colourful', emoji: '🎨' },
        { label: 'Traditional & Ethnic', emoji: '🪷' },
        { label: 'Casual & Sporty', emoji: '🏃' },
      ],
    },
    {
      question: 'What occasions do you dress for most?',
      options: [
        { label: 'Office / Work', emoji: '💼' },
        { label: 'Casual Outings', emoji: '☀️' },
        { label: 'Weddings / Festivals', emoji: '💍' },
        { label: 'Social Events', emoji: '🥂' },
      ],
    },
    {
      question: 'Which fabrics do you prefer?',
      options: [
        { label: 'Cotton & Linen', emoji: '🌿' },
        { label: 'Silk & Georgette', emoji: '✨' },
        { label: 'Denim & Canvas', emoji: '👖' },
        { label: 'Wool & Knit', emoji: '🧶' },
      ],
    },
    {
      question: 'Your go-to colour palette?',
      options: [
        { label: 'Neutrals & Earth', emoji: '🟤' },
        { label: 'Pastels & Soft', emoji: '🩷' },
        { label: 'Brights & Jewel', emoji: '💎' },
        { label: 'Monochrome', emoji: '⚫' },
      ],
    },
    {
      question: 'How would you describe your fit preference?',
      options: [
        { label: 'Tailored / Fitted', emoji: '📐' },
        { label: 'Relaxed / Loose', emoji: '🌊' },
        { label: 'Structured / Sharp', emoji: '🔷' },
        { label: 'Flowy / Draping', emoji: '🌸' },
      ],
    },
  ],

  /* --- Style Results Map --- */
  styleResults: {
    default: {
      label: 'Contemporary Fusion',
      desc: 'You have a versatile style that blends modern silhouettes with timeless classics. We recommend investing in well-fitted basics and statement accessories.',
      tags: ['Linen Blazer', 'Slim Trousers', 'Minimal Jewellery', 'Cotton Kurta', 'Earthy Tones'],
    },
  },

  /* --- Mock Measurements --- */
  mockMeasurements: {
    chest: 94,
    waist: 78,
    hips: 98,
    shoulder: 43,
    inseam: 81,
    height: 168,
    weight: 65,
    size: 'M',
  },

  /* --- Addresses --- */
  savedAddresses: [
    { label: 'Home',   icon: '🏠', address: '42, Sector 15, Noida, UP 201301' },
    { label: 'Office', icon: '🏢', address: 'DLF Cyber City, Block B, Gurugram, HR' },
  ],

  /* --- Provider Orders (Dashboard) --- */
  providerOrders: [
    { id: 'ORD-9901', customer: 'Amisha S.', items: 'Shirt ×5, Trouser ×2 (Ironing)', address: 'Sector 15, Noida', slot: 'Today 2–4 PM', status: 'processing', total: 199 },
    { id: 'ORD-9887', customer: 'Rahul M.', items: 'Wash & Fold 4 kg',               address: 'Sector 18, Noida', slot: 'Today 4–6 PM', status: 'pending',    total: 276 },
    { id: 'ORD-9863', customer: 'Sunita K.', items: 'Dry Clean Suit × 1',             address: 'Sector 62, Noida', slot: 'Today 6–8 PM', status: 'pending',    total: 299 },
  ],
};

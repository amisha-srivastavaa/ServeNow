/* ===========================================
   ServeNow — community.js
   Forum feed, likes, comments, compose modal,
   follow/unfollow, filter chips, profile
   =========================================== */

let communityFilter = 'All';
let composeCat = 'Casual';
let composeOverlayOpen = false;
const categories = ['All', 'Office Wear', 'Casual', 'Ethnic', 'Formal', 'Wedding'];

/* =============== COMMUNITY PAGE =============== */
function renderCommunity(container) {
  container.innerHTML = `
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
          ${App.state.profile.name.charAt(0)}
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
      ${categories.map(cat => `
        <div class="chip ${cat === communityFilter ? 'active' : ''}"
             onclick="setCommunityFilter('${cat}')">
          ${cat}
        </div>`).join('')}
    </div>

    <!-- Feed -->
    <div class="community-feed" id="community-feed">
      ${renderPostCards()}
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
        <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${App.state.profile.name.charAt(0)}</div>
        <div style="flex:1;">
          <div style="font-weight:700;font-size:14px;">${App.state.profile.name}</div>
          <div style="font-size:12px;color:var(--text-muted);">Style Enthusiast</div>
        </div>
      </div>
      <textarea class="form-input" id="compose-text" placeholder="Share a tip, question or outfit inspiration…" rows="4" style="margin-top:0;"></textarea>
      <div>
        <div class="section-label" style="margin-bottom:8px;">Category</div>
        <div class="compose-category-row">
          ${['Casual','Office Wear','Ethnic','Formal','Wedding'].map(cat => `
            <button class="compose-cat-btn ${cat === composeCat ? 'selected' : ''}"
                    onclick="selectComposeCat('${cat}',this)">${cat}</button>`).join('')}
        </div>
      </div>
      <div class="compose-photo-add" onclick="showToast('Photo picker coming soon!')">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
        Add Photo / Video
      </div>
      <div>
        <div class="section-label" style="margin-bottom:8px;">Tag a Designer</div>
        <div class="tag-designer-row">
          ${['Priya Sharma','Studio Riya','Meena Krishnan'].map(name => `
            <div class="tag-designer-btn" onclick="showToast('@${name.split(' ')[0]} tagged!')"
                 style="cursor:pointer;">@ ${name}</div>`).join('')}
        </div>
      </div>
    </div>
    <div style="padding:12px 16px 24px;">
      <button class="btn-primary" onclick="submitPost()">Post to Community 🚀</button>
    </div>
  </div>`;
}

/* --- Post Cards --- */
function renderPostCards() {
  const posts = App.state.communityPosts.filter(p =>
    communityFilter === 'All' || p.category === communityFilter
  );

  if (posts.length === 0) {
    return `<div class="empty-state"><div class="empty-icon">💬</div><h3>No posts yet</h3><p>Be the first to post in ${communityFilter}!</p></div>`;
  }

  return posts.map(post => renderPostCard(post)).join('');
}

function renderPostCard(post) {
  return `
  <div class="post-card" id="post-${post.id}">
    <div class="post-header">
      <div class="avatar avatar-md" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${post.author.avatar}</div>
      <div class="post-author-info">
        <div class="post-author-name">
          ${post.author.name}
          ${post.author.verified ? `
          <span class="verified-badge">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
            Verified
          </span>` : ''}
        </div>
        <div class="post-author-title">${post.author.title}</div>
      </div>
      <div class="post-time">${post.time}</div>
      <button class="post-more" onclick="showToast('Report / Block coming soon')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
      </button>
    </div>

    <div class="post-image">
      <span>${post.emoji || '🌟'}</span>
      <div class="post-category-badge">${post.category}</div>
    </div>

    <div class="post-body">
      <div class="post-title">${post.title}</div>
      <div class="post-text" id="post-text-${post.id}">${post.text}</div>
      <button class="post-read-more" id="read-more-${post.id}" onclick="toggleReadMore('${post.id}')">Read more</button>
    </div>

    <div class="post-tags">
      ${(post.tags || []).map(t => `<span class="post-hashtag">${t}</span>`).join(' ')}
    </div>

    <div class="post-actions">
      <button class="action-btn ${post.liked ? 'liked' : ''}" id="like-btn-${post.id}" onclick="toggleLike('${post.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="${post.liked ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        <span class="action-count" id="like-count-${post.id}">${post.likes}</span>
      </button>
      <button class="action-btn" onclick="toggleComments('${post.id}')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        <span class="action-count">${post.comments}</span>
      </button>
      <button class="action-btn" onclick="showToast('Link copied! 📋')">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
        Share
      </button>
      <button class="follow-btn ${post.author.following ? 'following' : ''}" id="follow-${post.id}"
              onclick="toggleFollow('${post.id}')">
        ${post.author.following ? 'Following ✓' : '+ Follow'}
      </button>
    </div>

    <div class="comments-section" id="comments-${post.id}" style="display:none;">
      ${post.commentList.slice(0, 2).map(c => `
        <div class="comment-item">
          <div class="avatar avatar-sm">${c.avatar}</div>
          <div class="comment-content">
            <div class="comment-author">
              ${c.author}
              ${c.verified ? '<span class="verified-badge" style="font-size:9px;">✓</span>' : ''}
            </div>
            <div class="comment-text">${c.text}</div>
            <div class="comment-actions">
              <button class="comment-action" onclick="showToast('Like added!')">Like</button>
              <button class="comment-action" onclick="showToast('Reply coming soon!')">Reply</button>
            </div>
          </div>
        </div>`).join('')}

      <div class="add-comment">
        <div class="avatar avatar-sm" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${App.state.profile.name.charAt(0)}</div>
        <input type="text" id="comment-input-${post.id}" placeholder="Add a comment…" onkeydown="if(event.key==='Enter')submitComment('${post.id}')">
        <button class="add-comment-btn" onclick="submitComment('${post.id}')">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </button>
      </div>
    </div>
  </div>`;
}

/* --- Like Toggle --- */
function toggleLike(postId) {
  const post = App.state.communityPosts.find(p => p.id === postId);
  if (!post) return;
  post.liked = !post.liked;
  post.likes += post.liked ? 1 : -1;

  const btn = document.getElementById(`like-btn-${postId}`);
  const cnt = document.getElementById(`like-count-${postId}`);
  if (btn) {
    btn.classList.toggle('liked', post.liked);
    btn.querySelector('svg').setAttribute('fill', post.liked ? 'currentColor' : 'none');
  }
  if (cnt) cnt.textContent = post.likes;
  if (post.liked) showToast('❤️ Liked!');
}

/* --- Comments Toggle --- */
function toggleComments(postId) {
  const section = document.getElementById(`comments-${postId}`);
  if (!section) return;
  const isOpen = section.style.display !== 'none';
  section.style.display = isOpen ? 'none' : 'flex';
  section.style.flexDirection = 'column';
  section.style.gap = '12px';
}

/* --- Submit Comment --- */
function submitComment(postId) {
  const input = document.getElementById(`comment-input-${postId}`);
  if (!input || !input.value.trim()) return;

  const text = input.value.trim();
  const post = App.state.communityPosts.find(p => p.id === postId);
  if (post) {
    post.commentList.unshift({
      author: App.state.profile.name,
      avatar: App.state.profile.name.charAt(0),
      text,
      verified: false,
    });
    post.comments++;
  }

  const section = document.getElementById(`comments-${postId}`);
  if (section) {
    const newComment = document.createElement('div');
    newComment.className = 'comment-item';
    newComment.style.animation = 'popIn .25s ease both';
    newComment.innerHTML = `
      <div class="avatar avatar-sm" style="background:var(--brand-light);color:var(--brand-dark);font-weight:800;">${App.state.profile.name.charAt(0)}</div>
      <div class="comment-content">
        <div class="comment-author">${App.state.profile.name}</div>
        <div class="comment-text">${text}</div>
      </div>`;
    section.insertBefore(newComment, section.querySelector('.add-comment'));
    input.value = '';
    showToast('💬 Comment posted!');
  }
}

/* --- Follow Toggle --- */
function toggleFollow(postId) {
  const post = App.state.communityPosts.find(p => p.id === postId);
  if (!post) return;
  post.author.following = !post.author.following;
  const btn = document.getElementById(`follow-${postId}`);
  if (btn) {
    btn.classList.toggle('following', post.author.following);
    btn.textContent = post.author.following ? 'Following ✓' : '+ Follow';
  }
  showToast(post.author.following ? `✅ Following ${post.author.name}!` : 'Unfollowed');
}

/* --- Read More --- */
function toggleReadMore(postId) {
  const textEl = document.getElementById(`post-text-${postId}`);
  const btnEl = document.getElementById(`read-more-${postId}`);
  if (!textEl || !btnEl) return;
  const expanded = textEl.classList.toggle('expanded');
  btnEl.textContent = expanded ? 'Show less' : 'Read more';
}

/* --- Filter --- */
function setCommunityFilter(cat) {
  communityFilter = cat;
  const feed = document.getElementById('community-feed');
  if (feed) {
    feed.innerHTML = renderPostCards();
  }
  document.querySelectorAll('.filter-row .chip').forEach(el => {
    el.classList.toggle('active', el.textContent.trim() === cat);
  });
}

/* --- Compose Modal --- */
function openCompose() {
  document.getElementById('compose-modal').classList.remove('hidden');
  document.getElementById('compose-overlay').classList.remove('hidden');
  composeOverlayOpen = true;
  setTimeout(() => {
    const textarea = document.getElementById('compose-text');
    if (textarea) textarea.focus();
  }, 350);
}

function closeCompose() {
  const modal = document.getElementById('compose-modal');
  const overlay = document.getElementById('compose-overlay');
  if (modal) modal.classList.add('hidden');
  if (overlay) overlay.classList.add('hidden');
  composeOverlayOpen = false;
}

function selectComposeCat(cat, btn) {
  composeCat = cat;
  document.querySelectorAll('.compose-cat-btn').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');
}

function submitPost() {
  const text = document.getElementById('compose-text')?.value?.trim();
  if (!text) { showToast('Please write something first!'); return; }

  const newPost = {
    id: 'p' + Date.now(),
    author: {
      name: App.state.profile.name,
      title: 'Style Enthusiast',
      avatar: App.state.profile.name.charAt(0).toUpperCase() + 'S',
      verified: false,
      following: false,
    },
    time: 'Just now',
    category: composeCat,
    title: text.length > 60 ? text.substring(0, 60) + '…' : text,
    text,
    emoji: '✨',
    tags: [`#${composeCat.replace(' ', '')}`],
    likes: 0,
    comments: 0,
    liked: false,
    saved: false,
    commentList: [],
  };

  App.state.communityPosts.unshift(newPost);
  closeCompose();
  showToast('🚀 Post shared with the community!');

  // Re-render feed
  setCommunityFilter(communityFilter);
}

/* --- Register Page --- */
window.addEventListener('load', () => {
  App.registerPage('community', (c) => renderCommunity(c));
});


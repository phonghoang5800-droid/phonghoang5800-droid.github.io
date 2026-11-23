// ============================================================
// Nguyen Hoang Phong — Interactive Portfolio Data & Animations
// All metrics & details strictly verified from CVs, PDF report & repos
// ============================================================

const PROJECTS = [
  {
    id: 'socialshield-vn',
    tracks: ['ba', 'ai'],
    badge: 'Flagship BA + XAI',
    period: 'May 2026',
    role: 'Team Leader · Business Analyst & ML Developer',
    title: 'SocialShield-VN — Explainable Vietnamese SMS & Phishing Warning System',
    summary:
      'End-to-end web system detecting Vietnamese impersonation scams across SMS, links, and CSV/TXT batches with calibrated 0–100 risk scoring, Global/Local XAI, and RBAC administration.',
    kpis: [
      { value: '85.59%', label: 'Macro F1 (X-HRS-MTSD+)' },
      { value: '3,114', label: 'Labeled VN SMS Rows' },
      { value: '22 Rules', label: 'Domain Feature Set' }
    ],
    stack: ['FastAPI', 'SQLite', 'Scikit-learn', 'TF-IDF + Rules', 'K-Means', 'HTML/CSS/JS'],
    mediaType: 'image',
    image: 'assets/images/socialshield-dashboard.png',
    repoUrl: 'https://github.com/phonghoang5800-droid',
    problem:
      'Vietnamese SMS phishing exploits accented/unaccented linguistic tricks and impersonates banks, police, delivery services, and e-wallets. Black-box models fail to explain why a message is risky to non-technical users.',
    contributions: [
      'Led a 3-member team (VNU-IS Final Project); defined functional & non-functional requirements, user/admin roles, use cases, user stories, and risk-scoring rules.',
      'Built X-HRS-MTSD+: hybrid Word TF-IDF + Char TF-IDF + 22 handcrafted domain rule features with One-vs-Rest Logistic Regression.',
      'Achieved 85.23% accuracy, 85.59% Macro F1, 84.39% Scam Precision, and 82.99% Scam Recall on local evaluation with ablation and threshold studies.',
      'Delivered FastAPI + SQLite web app supporting real-time SMS/URL checking, bulk CSV/TXT scanning, alert case tracking, K-Means phishing campaign clustering, and automated 30-case API test suite.'
    ],
    gallery: [
      { src: 'assets/images/socialshield-dashboard.png', caption: 'User Risk Overview Dashboard — live alerts, analyzed samples & F1 summary' },
      { src: 'assets/images/socialshield-risk.png', caption: 'Real-time SMS Risk Analysis — 100/100 bank impersonation alert with actionable guidance' },
      { src: 'assets/images/socialshield-metrics.png', caption: 'Confusion Matrix & Model Benchmark comparing X-HRS-MTSD+ against baselines' }
    ]
  },
  {
    id: 'hanoi-homes',
    tracks: ['ai', 'research'],
    badge: 'ML + Production Web',
    period: 'Oct 2026 – Present',
    role: 'ML & System Developer',
    title: 'Hanoi Homes — Apartment Price Estimation & Advisory Web System',
    summary:
      'Explainable housing valuation system cleaning 1,856 raw Hanoi real estate listings into 846 validated records across 262 projects, powered by CatBoost + SHAP and connected to R Shiny & SQLite.',
    kpis: [
      { value: '14.57%', label: 'CatBoost MAPE' },
      { value: '463/463', label: 'Test Cases Passed' },
      { value: '262', label: 'Hanoi Projects' }
    ],
    stack: ['Python', 'CatBoost', 'SHAP', 'R Shiny', 'SQLite', 'Automated Testing'],
    mediaType: 'viz-hanoi',
    repoUrl: 'https://github.com/phonghoang5800-droid/hanoi-home',
    problem:
      'Raw Hanoi apartment listings are noisy, inconsistent, and opaque. Buyers and analysts need both accurate segment-level valuation and transparent explanations of what drives each price estimate.',
    contributions: [
      'Cleaned and validated 1,856 raw Hanoi apartment listings down to 846 verified records spanning 262 distinct housing projects.',
      'Benchmarked 6 machine learning models by project segment; selected CatBoost achieving MAE VND 0.866 billion and MAPE 14.57%.',
      'Integrated SHAP explainability so every predicted apartment price traces back to its exact property and market drivers.',
      'Connected the Python ML pipeline to an interactive R Shiny web application and SQLite database, passing 463/463 test cases.'
    ]
  },
  {
    id: 'ridelink-chain',
    tracks: ['ba', 'research'],
    badge: 'System Analysis & Web3',
    period: '2026',
    role: 'System Analysis, BA & Functional Testing',
    title: 'RideLink Chain — Decentralized Ride-Hailing & Escrow Prototype',
    summary:
      'Full-stack blockchain-assisted ride booking and split-payment prototype combining Node.js/Express with a Solidity 0.8.20 escrow smart contract, QR trip verification, and hash-linked audit ledger.',
    kpis: [
      { value: '3 Portals', label: 'Passenger · Driver · Admin' },
      { value: 'Solidity', label: '0.8.20 Smart Escrow' },
      { value: 'API Specs', label: 'Booking & Payment Flows' }
    ],
    stack: ['Node.js', 'Express', 'Solidity 0.8.20', 'Hardhat', 'MetaMask', 'QR Verification'],
    mediaType: 'viz-ridelink',
    repoUrl: 'https://github.com/phonghoang5800-droid/ridelink-chain',
    problem:
      'Multi-party ride sharing and escrow settlements require airtight state transitions across passengers, drivers, and administrators to prevent fare disputes and record tampering.',
    contributions: [
      'Specified end-to-end booking, driver–rider matching, shared-ride split payments, QR verification, and escrow release/refund workflows.',
      'Defined structured API data fields across Passenger, Driver, and Admin endpoints and performed functional testing to detect and resolve logic errors.',
      'Integrated Solidity escrow contract (RideLinkEscrow.sol) on local Hardhat with MetaMask signing and tamper-evident hash-linked trip ledger.'
    ]
  },
  {
    id: 'interbank-verifychain',
    tracks: ['ba', 'research'],
    badge: 'FinTech Security Sim',
    period: '2026',
    role: 'FinTech Systems Designer & QA',
    title: 'InterBank VerifyChain — Secure Interbank Transaction Simulation',
    summary:
      'Interactive browser-based interbank settlement and reconciliation simulator featuring Web Crypto OTP, SHA-256 canonical hashing, RSA digital signatures, and a tamper-evident audit ledger.',
    kpis: [
      { value: '19 Cases', label: 'Documented QA Suite' },
      { value: 'SHA-256', label: '+ RSA Digital Signing' },
      { value: 'Live App', label: 'Zero-Backend Demo' }
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JS', 'Web Crypto API', 'RSA & SHA-256', 'Audit Ledger'],
    mediaType: 'image',
    image: 'assets/images/interbank-ui.png',
    repoUrl: 'https://github.com/phonghoang5800-droid/InterBank-VerifyChain-Secure-Transaction-Simulation',
    liveUrl: 'https://phonghoang5800-droid.github.io/InterBank-VerifyChain-Secure-Transaction-Simulation/',
    problem:
      'Demonstrating end-to-end interbank payment integrity, reconciliation workflows, and cryptographic tamper detection in an accessible, auditable environment.',
    contributions: [
      'Designed role-based Customer and Reconciliation Officer workflows covering registration, beneficiary checks, balance validation, and settlement.',
      'Implemented time-limited Web Crypto OTP, transaction canonicalization, SHA-256 hashing, RSA signing & public-key verification, and hash-linked ledger validation.',
      'Authored a structured 19-case QA suite (TC01–TC19) verifying auth rejections, insufficient balance checks, OTP guards, tamper detection, and CSV export.'
    ],
    gallery: [
      { src: 'assets/images/interbank-ui.png', caption: 'InterBank VerifyChain — Role-based Customer & Reconciliation Officer portal' }
    ]
  },
  {
    id: 'ifrs-esg',
    tracks: ['research', 'ai'],
    badge: 'ICECH 2026 Published',
    period: '2026',
    role: 'Co-Author & NLP Pipeline Developer',
    title: 'IFRS S1/S2 ESG Disclosure Intelligence — HSBC Case Study',
    summary:
      'Published ICECH 2026 research and Python NLP compliance pipeline mapping corporate annual & ESG reports to IFRS S1/S2 criteria with hybrid retrieval and greenwashing inconsistency checks.',
    kpis: [
      { value: 'ICECH ’26', label: 'Published Proceedings' },
      { value: '4-Way', label: 'Hybrid Rank Fusion' },
      { value: 'IFRS S1/S2', label: 'Structured Criteria' }
    ],
    stack: ['Python', 'pdfplumber', 'BM25 & TF-IDF', 'Sentence Transformers', 'NMF', 'SciPy'],
    mediaType: 'viz-ifrs',
    repoUrl: 'https://github.com/phonghoang5800-droid/IFRS-ESG-Disclosure-Intelligence',
    problem:
      'Sustainability reports are lengthy and unstructured, making manual IFRS S1/S2 compliance auditing slow and making narrative-vs-metric greenwashing hard to verify consistently.',
    contributions: [
      'Translated IFRS S1/S2 sustainability disclosure standards into a structured set of auditable assessment criteria for HSBC’s ESG and financial reports.',
      'Built FinAI.ipynb: extracts multi-year PDFs via pdfplumber, filters ESG pages, and retrieves IFRS evidence via TF-IDF, BM25, Jaccard, Sentence Transformers, and hybrid rank fusion.',
      'Cross-checked narrative claims against quantitative indicators, applied NMF topic modeling and bootstrap confidence intervals, and exported CSV/HTML audit reports.'
    ]
  },
  {
    id: 'telecom-churn',
    tracks: ['ai', 'research'],
    badge: 'Ensemble ML & EDA',
    period: '2025',
    role: 'AI/ML Team Member',
    title: 'Hybrid AI Customer Churn Prediction — Orange Telecom CRM',
    summary:
      'Proactive telecom customer retention pipeline combining multivariate EDA on charges, usage, and call-center metrics with a Hybrid Soft Voting ensemble classifier.',
    kpis: [
      { value: '0.90', label: 'Test ROC-AUC' },
      { value: '92.5%', label: 'Test Accuracy' },
      { value: '0.71', label: 'Churn F1 Score' }
    ],
    stack: ['Python', 'Scikit-learn', 'Soft Voting Ensemble', 'Pandas & NumPy', 'Multivariate EDA'],
    mediaType: 'viz-churn',
    repoUrl: 'https://github.com/phonghoang5800-droid',
    problem:
      'Telecom customer churn is imbalanced and driven by subtle interactions across billing charges, call duration, and customer service escalations.',
    contributions: [
      'Performed multivariate exploratory data analysis across charges, usage patterns, and call-center records to pinpoint primary churn drivers.',
      'Trained and combined complementary classifiers into a Hybrid Soft Voting ensemble achieving F1 0.71, ROC-AUC 0.90, and 92.5% accuracy on the holdout test set.',
      'Translated churn risk scores and behavioral segments into actionable retention recommendations for CRM teams.'
    ]
  }
];

function renderVisual(project) {
  if (project.mediaType === 'image') {
    return `<img src="${project.image}" alt="${project.title}" loading="lazy" />`;
  }
  if (project.mediaType === 'viz-hanoi') {
    return `
      <div class="viz-canvas">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#475569;text-transform:uppercase;letter-spacing:0.06em;">Hanoi Homes · Pipeline &amp; Model Benchmark</div>
        <div class="viz-bars">
          <div class="viz-bar-row"><span>CatBoost ★</span><div class="viz-track"><div class="viz-fill viz-fill-emerald" style="width:92%"></div></div><span>14.57%</span></div>
          <div class="viz-bar-row"><span>Validation</span><div class="viz-track"><div class="viz-fill" style="width:100%"></div></div><span>463/463</span></div>
          <div class="viz-bar-row"><span>Clean Data</span><div class="viz-track"><div class="viz-fill" style="width:76%"></div></div><span>846/1856</span></div>
          <div class="viz-bar-row"><span>Coverage</span><div class="viz-track"><div class="viz-fill" style="width:84%"></div></div><span>262 Proj</span></div>
        </div>
        <div style="display:flex;gap:8px;margin-top:4px;font-size:0.72rem;color:#334155;">
          <span style="background:#fff;padding:3px 9px;border-radius:6px;border:1px solid rgba(15,23,42,.08)">MAE: VND 0.866 bn</span>
          <span style="background:#fff;padding:3px 9px;border-radius:6px;border:1px solid rgba(15,23,42,.08)">SHAP + R Shiny + SQLite</span>
        </div>
      </div>`;
  }
  if (project.mediaType === 'viz-ridelink') {
    return `
      <div class="viz-canvas viz-canvas-dark">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#93c5fd;text-transform:uppercase;letter-spacing:0.06em;">RideLink Chain · Escrow &amp; Verification Architecture</div>
        <div class="viz-flow">
          <div class="viz-node"><strong>1. Book</strong><span>API Fields &amp; Split Fare</span></div>
          <div class="viz-node"><strong>2. Escrow</strong><span>Solidity Lock (ETH)</span></div>
          <div class="viz-node"><strong>3. Verify</strong><span>QR Code &amp; Driver Match</span></div>
          <div class="viz-node"><strong>4. Release</strong><span>Hash Ledger &amp; Payout</span></div>
        </div>
      </div>`;
  }
  if (project.mediaType === 'viz-ifrs') {
    return `
      <div class="viz-canvas">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#059669;text-transform:uppercase;letter-spacing:0.06em;">ICECH 2026 · Hybrid ESG Evidence Retrieval</div>
        <div class="viz-bars">
          <div class="viz-bar-row"><span>TF-IDF</span><div class="viz-track"><div class="viz-fill" style="width:74%"></div></div><span>Lexical</span></div>
          <div class="viz-bar-row"><span>BM25</span><div class="viz-track"><div class="viz-fill" style="width:82%"></div></div><span>Ranking</span></div>
          <div class="viz-bar-row"><span>Embeddings</span><div class="viz-track"><div class="viz-fill" style="width:90%"></div></div><span>Semantic</span></div>
          <div class="viz-bar-row"><span>Rank Fusion</span><div class="viz-track"><div class="viz-fill viz-fill-emerald" style="width:96%"></div></div><span>IFRS Map</span></div>
        </div>
      </div>`;
  }
  return `
    <div class="viz-canvas">
      <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#4f46e5;text-transform:uppercase;letter-spacing:0.06em;">Orange Telecom CRM · Soft Voting Ensemble Metrics</div>
      <div class="viz-bars">
        <div class="viz-bar-row"><span>Accuracy</span><div class="viz-track"><div class="viz-fill viz-fill-emerald" style="width:92.5%"></div></div><span>92.5%</span></div>
        <div class="viz-bar-row"><span>ROC-AUC</span><div class="viz-track"><div class="viz-fill" style="width:90%"></div></div><span>0.90</span></div>
        <div class="viz-bar-row"><span>Churn F1</span><div class="viz-track"><div class="viz-fill" style="width:71%"></div></div><span>0.71</span></div>
      </div>
    </div>`;
}

// Render Project Cards
const grid = document.getElementById('projectsGrid');

function renderProjects() {
  grid.innerHTML = PROJECTS.map((p, idx) => `
    <article class="project-card reveal" style="--delay:${(idx % 2) * 90}ms" data-id="${p.id}" data-tracks="${p.tracks.join(' ')}" tabindex="0" role="button" aria-label="Open case study for ${p.title}">
      <div class="project-media">
        ${renderVisual(p)}
        <div class="project-badge-row">
          <span class="p-badge p-badge-accent">${p.badge}</span>
          <span class="p-badge">${p.period}</span>
        </div>
      </div>
      <div class="project-body">
        <div class="project-role">${p.role}</div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-kpis">
          ${p.kpis.map(k => `<div class="kpi-box"><strong>${k.value}</strong><span>${k.label}</span></div>`).join('')}
        </div>
        <div class="project-stack">
          ${p.stack.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div class="project-footer">
          <span class="view-case-link">Inspect Case Study &rarr;</span>
          <a class="repo-ext-link" href="${p.repoUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">GitHub &nearr;</a>
        </div>
      </div>
    </article>
  `).join('');

  attachCardInteractions();
}

function attachCardInteractions() {
  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });
}

// Filter Buttons
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => {
      b.classList.remove('active');
      b.setAttribute('aria-selected', 'false');
    });
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');

    const filter = btn.dataset.filter;
    document.querySelectorAll('.project-card').forEach(card => {
      const tracks = card.dataset.tracks.split(' ');
      const show = filter === 'all' || tracks.includes(filter);
      card.classList.toggle('is-hidden', !show);
      if (show) {
        card.classList.add('visible');
      }
    });
  });
});

// Case Study Modal
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const p = PROJECTS.find(item => item.id === id);
  if (!p) return;

  const galleryHtml = p.gallery
    ? `<div class="modal-gallery">${p.gallery.map(g => `<figure><img src="${g.src}" alt="${g.caption}" /><figcaption>${g.caption}</figcaption></figure>`).join('')}</div>`
    : `<div style="border-radius:16px;overflow:hidden;border:1px solid var(--border);margin:18px 0;height:210px;">${renderVisual(p)}</div>`;

  modalBody.innerHTML = `
    <span class="eyebrow">${p.badge} &middot; ${p.period}</span>
    <h2 id="modalTitle" style="font-size:1.6rem;margin-bottom:6px;">${p.title}</h2>
    <p style="font-family:'JetBrains Mono',monospace;font-size:0.8rem;color:var(--primary);margin-bottom:14px;">${p.role}</p>
    <p style="color:var(--ink-2);font-size:0.95rem;">${p.summary}</p>
    ${galleryHtml}
    <div class="project-kpis" style="margin:18px 0;">
      ${p.kpis.map(k => `<div class="kpi-box"><strong>${k.value}</strong><span>${k.label}</span></div>`).join('')}
    </div>
    <div class="modal-sections">
      <div class="modal-block">
        <h4>Problem &amp; Context</h4>
        <p style="font-size:0.89rem;color:var(--ink-2);">${p.problem}</p>
      </div>
      <div class="modal-block">
        <h4>Key Contributions &amp; Outcomes</h4>
        <ul>${p.contributions.map(c => `<li>${c}</li>`).join('')}</ul>
      </div>
    </div>
    <div class="project-stack" style="margin-bottom:20px;">
      ${p.stack.map(s => `<span>${s}</span>`).join('')}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:10px;">
      <a href="${p.repoUrl}" target="_blank" rel="noopener" class="btn btn-primary">Open GitHub Repository &nearr;</a>
      ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="btn btn-secondary">Launch Live Demo &nearr;</a>` : ''}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('[data-open-project]').forEach(el => {
  el.addEventListener('click', () => openModal(el.dataset.openProject));
});

// Scroll Progress & Navbar Polish
const progressEl = document.getElementById('scrollProgress');
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressEl.style.width = maxScroll > 0 ? `${(scrollTop / maxScroll) * 100}%` : '0%';
  navbar.classList.toggle('scrolled', scrollTop > 18);
}, { passive: true });

// Subtle 3D Tilt on Portrait Card (Desktop only)
const portraitCard = document.getElementById('portraitCard');
if (portraitCard && window.matchMedia('(pointer: fine)').matches) {
  portraitCard.addEventListener('mousemove', e => {
    const r = portraitCard.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    portraitCard.style.transform = `perspective(900px) rotateY(${x * 7}deg) rotateX(${-y * 7}deg)`;
  });
  portraitCard.addEventListener('mouseleave', () => {
    portraitCard.style.transform = 'perspective(900px) rotateY(0deg) rotateX(0deg)';
  });
}

// Smooth Count-Up Animation for Hero Metrics
function animateCounts() {
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const duration = 950;
    const start = performance.now();

    function step(now) {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      el.textContent = `${(target * eased).toFixed(decimals)}${suffix}`;
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  });
}

// Scroll Reveal Observer
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Mobile Menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
mobileBtn?.addEventListener('click', () => mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', () => mobileNav.classList.remove('open')));

// Copy Email
const copyBtn = document.getElementById('copyEmailBtn');
copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('phonghoang5800@gmail.com');
    const prev = copyBtn.textContent;
    copyBtn.textContent = 'Copied!';
    setTimeout(() => { copyBtn.textContent = prev; }, 1800);
  } catch {
    window.location.href = 'mailto:phonghoang5800@gmail.com';
  }
});

// Init
renderProjects();
initReveal();
if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  setTimeout(animateCounts, 320);
}

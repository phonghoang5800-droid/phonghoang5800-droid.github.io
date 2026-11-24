// ============================================================
// Nguyen Hoang Phong — Behance-Pro Interactive Portfolio JS
// 100% verified metrics & real screenshots from CVs, PDF & repos
// ============================================================

const PROJECTS = [
  {
    id: 'socialshield-vn',
    tracks: ['ba', 'ai'],
    tags: ['Business Analysis', 'Explainable AI'],
    period: 'May 2026',
    role: 'Team Leader · Business Analyst & ML Developer',
    title: 'SocialShield-VN — Vietnamese SMS & Phishing Warning System',
    summary:
      'End-to-end web system detecting Vietnamese impersonation scams across SMS, links, and CSV/TXT batches with calibrated 0–100 risk scoring, Global/Local XAI, and RBAC administration.',
    kpis: [
      { value: '85.59%', label: 'Macro F1 (X-HRS-MTSD+)' },
      { value: '3,114', label: 'Labeled VN SMS Rows' },
      { value: '22 Rules', label: 'Domain Signals' }
    ],
    stack: ['FastAPI', 'SQLite', 'Scikit-learn', 'TF-IDF + Rules', 'K-Means', 'HTML/CSS/JS'],
    mediaType: 'image',
    image: 'assets/images/socialshield-dashboard.png',
    repoUrl: 'https://github.com/phonghoang5800-droid',
    problem:
      'Vietnamese SMS phishing exploits accented/unaccented linguistic tricks and impersonates banks, police, delivery services, and e-wallets. Black-box models fail to explain why a message is risky to non-technical users.',
    contributions: [
      'Led a 3-member VNU-IS team; defined functional & non-functional requirements, User vs. Admin RBAC, use cases, user stories, SQLite schema, and 0–100 risk-scoring rules.',
      'Built X-HRS-MTSD+: hybrid Word TF-IDF + Char TF-IDF + 22 domain-specific rule features with One-vs-Rest Logistic Regression.',
      'Achieved 85.23% accuracy, 85.59% Macro F1, 84.39% Scam Precision, and 82.99% Scam Recall on local evaluation with ablation and threshold studies.',
      'Delivered FastAPI + SQLite web app with real-time SMS/URL checking, bulk CSV/TXT scanning, alert case management, K-Means phishing clustering, and automated 30-case API test runner.'
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
    tags: ['Data Science', 'Explainable ML'],
    period: 'Oct 2026 – Present',
    role: 'ML & System Developer',
    title: 'Hanoi Homes — Apartment Price Estimation & Advisory Web App',
    summary:
      'Explainable housing valuation system cleaning 1,856 raw Hanoi real estate listings into 846 validated records across 262 projects, powered by CatBoost + SHAP and connected to R Shiny & SQLite.',
    kpis: [
      { value: '14.57%', label: 'CatBoost MAPE' },
      { value: '463/463', label: 'QA Tests Passed' },
      { value: '262', label: 'Hanoi Projects' }
    ],
    stack: ['Python', 'CatBoost', 'SHAP', 'R Shiny', 'SQLite', 'Automated QA'],
    mediaType: 'viz-hanoi',
    repoUrl: 'https://github.com/phonghoang5800-droid/hanoi-home',
    problem:
      'Raw Hanoi apartment listings are noisy and inconsistent. Buyers and market analysts need accurate segment-level valuation paired with transparent explanations of each price driver.',
    contributions: [
      'Cleaned and validated 1,856 raw Hanoi apartment listings down to 846 verified records across 262 projects.',
      'Benchmarked 6 ML models by project segment; selected CatBoost achieving MAE VND 0.866 billion and MAPE 14.57%.',
      'Integrated SHAP explainability so every predicted apartment price traces back to its concrete property and location drivers.',
      'Connected the Python ML pipeline to an interactive R Shiny web app and SQLite database, passing 463/463 automated test cases.'
    ]
  },
  {
    id: 'interbank-verifychain',
    tracks: ['ba', 'research'],
    tags: ['FinTech Systems', 'QA Testing'],
    period: '2026',
    role: 'FinTech Systems Designer & QA',
    title: 'InterBank VerifyChain — Secure Interbank Transaction Simulation',
    summary:
      'Interactive browser-based interbank settlement and reconciliation simulator featuring Web Crypto OTP, SHA-256 canonical hashing, RSA digital signatures, and a tamper-evident audit ledger.',
    kpis: [
      { value: '19 Cases', label: 'Documented QA Suite' },
      { value: 'SHA-256', label: '+ RSA Signing' },
      { value: 'Live Demo', label: 'Zero-Backend App' }
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JS', 'Web Crypto API', 'RSA & SHA-256', 'Audit Ledger'],
    mediaType: 'image',
    image: 'assets/images/interbank-ui.png',
    repoUrl: 'https://github.com/phonghoang5800-droid/InterBank-VerifyChain-Secure-Transaction-Simulation',
    liveUrl: 'https://phonghoang5800-droid.github.io/InterBank-VerifyChain-Secure-Transaction-Simulation/',
    problem:
      'Demonstrating end-to-end interbank payment integrity, reconciliation workflows, and cryptographic tamper detection in a clear, auditable web application.',
    contributions: [
      'Designed role-based Customer and Reconciliation Officer portals covering registration, beneficiary checks, balance guards, and settlement.',
      'Implemented time-limited Web Crypto OTP, transaction canonicalization, SHA-256 hashing, RSA digital signing & public-key verification, and hash-linked ledger validation.',
      'Authored and executed a 19-case formal QA suite (TC01–TC19) verifying auth rejections, insufficient funds, OTP failures, tamper alerts, and CSV export.'
    ],
    gallery: [
      { src: 'assets/images/interbank-ui.png', caption: 'InterBank VerifyChain — Role-based Customer & Reconciliation Officer portal' }
    ]
  },
  {
    id: 'ridelink-chain',
    tracks: ['ba', 'research'],
    tags: ['System Analysis', 'Web3 Escrow'],
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
      'Multi-party ride sharing and escrow settlements require strict state transitions across passengers, drivers, and administrators to prevent fare disputes and record tampering.',
    contributions: [
      'Specified end-to-end booking, driver–rider matching, shared-ride split payments, QR verification, and escrow release/refund workflows.',
      'Defined structured API data fields across Passenger, Driver, and Admin endpoints and performed functional testing to detect and resolve logic errors.',
      'Integrated Solidity escrow contract (RideLinkEscrow.sol) on local Hardhat with MetaMask signing and tamper-evident hash-linked trip ledger.'
    ]
  },
  {
    id: 'ifrs-esg',
    tracks: ['research', 'ai'],
    tags: ['ICECH 2026 Published', 'ESG NLP'],
    period: '2026',
    role: 'Co-Author & NLP Pipeline Developer',
    title: 'IFRS S1/S2 ESG Disclosure Intelligence — HSBC Case Study',
    summary:
      'Published ICECH 2026 research and Python NLP compliance pipeline mapping corporate annual & ESG reports to IFRS S1/S2 criteria with 4-way hybrid retrieval and greenwashing inconsistency checks.',
    kpis: [
      { value: 'ICECH ’26', label: 'Published Proceedings' },
      { value: '4-Way', label: 'Hybrid Rank Fusion' },
      { value: 'IFRS S1/S2', label: 'Criteria Audit' }
    ],
    stack: ['Python', 'pdfplumber', 'BM25 & TF-IDF', 'Sentence Transformers', 'NMF', 'SciPy'],
    mediaType: 'viz-ifrs',
    repoUrl: 'https://github.com/phonghoang5800-droid/IFRS-ESG-Disclosure-Intelligence',
    problem:
      'Corporate sustainability reports are lengthy and unstructured, making manual IFRS S1/S2 compliance auditing slow and narrative-vs-metric greenwashing hard to verify consistently.',
    contributions: [
      'Translated IFRS S1/S2 sustainability disclosure standards into a structured set of auditable assessment criteria for HSBC’s ESG and financial reports.',
      'Built FinAI.ipynb: extracts multi-year PDFs via pdfplumber, filters ESG pages, and retrieves evidence via TF-IDF, BM25, Jaccard, Sentence Transformers, and hybrid rank fusion.',
      'Cross-checked narrative claims against quantitative KPIs, applied NMF topic modeling and bootstrap confidence intervals, and exported CSV/HTML audit reports.'
    ]
  },
  {
    id: 'telecom-churn',
    tracks: ['ai', 'research'],
    tags: ['Ensemble ML', 'CRM Analytics'],
    period: '2025',
    role: 'AI/ML Team Member',
    title: 'Hybrid AI Customer Churn Prediction — Orange Telecom CRM',
    summary:
      'Proactive telecom customer retention pipeline combining multivariate EDA on charges, usage, and call-center records with a Hybrid Soft Voting ensemble classifier.',
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
      'Performed multivariate EDA across charges, usage patterns, and call-center records to pinpoint primary churn drivers.',
      'Built a Hybrid Soft Voting ensemble achieving F1 0.71, ROC-AUC 0.90, and 92.5% accuracy on the holdout test set.',
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
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#2563eb;text-transform:uppercase;letter-spacing:0.06em;">Hanoi Homes · CatBoost + SHAP + QA</div>
        <div class="viz-bars">
          <div class="viz-bar-row"><span>QA Suite</span><div class="viz-track"><div class="viz-fill viz-fill-emerald" style="width:100%"></div></div><span>463/463</span></div>
          <div class="viz-bar-row"><span>CatBoost ★</span><div class="viz-track"><div class="viz-fill" style="width:86%"></div></div><span>14.57%</span></div>
          <div class="viz-bar-row"><span>Validated</span><div class="viz-track"><div class="viz-fill" style="width:76%"></div></div><span>846/1856</span></div>
          <div class="viz-bar-row"><span>Coverage</span><div class="viz-track"><div class="viz-fill" style="width:84%"></div></div><span>262 Proj</span></div>
        </div>
        <div style="display:flex;gap:8px;font-size:0.72rem;color:#334155;">
          <span style="background:#fff;padding:3px 9px;border-radius:99px;border:1px solid #dbeafe">MAE: VND 0.866 bn</span>
          <span style="background:#fff;padding:3px 9px;border-radius:99px;border:1px solid #dbeafe">R Shiny + SQLite</span>
        </div>
      </div>`;
  }
  if (project.mediaType === 'viz-ridelink') {
    return `
      <div class="viz-canvas viz-canvas-dark">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#93c5fd;text-transform:uppercase;letter-spacing:0.06em;">RideLink Chain · Escrow &amp; API Workflow</div>
        <div class="viz-flow">
          <div class="viz-node"><strong>1. Book</strong><span>API Fields &amp; Split Fare</span></div>
          <div class="viz-node"><strong>2. Escrow</strong><span>Solidity Lock (ETH)</span></div>
          <div class="viz-node"><strong>3. Verify</strong><span>QR Code &amp; Match</span></div>
          <div class="viz-node"><strong>4. Payout</strong><span>Hash Ledger Audit</span></div>
        </div>
      </div>`;
  }
  if (project.mediaType === 'viz-ifrs') {
    return `
      <div class="viz-canvas">
        <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#059669;text-transform:uppercase;letter-spacing:0.06em;">ICECH 2026 · Hybrid ESG Retrieval Pipeline</div>
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
      <div style="font-family:'JetBrains Mono',monospace;font-size:0.7rem;color:#4f46e5;text-transform:uppercase;letter-spacing:0.06em;">Orange Telecom CRM · Soft Voting Ensemble</div>
      <div class="viz-bars">
        <div class="viz-bar-row"><span>Accuracy</span><div class="viz-track"><div class="viz-fill viz-fill-emerald" style="width:92.5%"></div></div><span>92.5%</span></div>
        <div class="viz-bar-row"><span>ROC-AUC</span><div class="viz-track"><div class="viz-fill" style="width:90%"></div></div><span>0.90</span></div>
        <div class="viz-bar-row"><span>Churn F1</span><div class="viz-track"><div class="viz-fill" style="width:71%"></div></div><span>0.71</span></div>
      </div>
    </div>`;
}

// Render Projects Grid
const grid = document.getElementById('projectsGrid');

function renderProjects() {
  grid.innerHTML = PROJECTS.map((p, idx) => `
    <article class="project-card spotlight-card reveal" style="--delay:${(idx % 2) * 80}ms" data-id="${p.id}" data-tracks="${p.tracks.join(' ')}" tabindex="0" role="button" aria-label="Inspect case study for ${p.title}">
      <div class="project-media">${renderVisual(p)}</div>
      <div class="project-body">
        <div class="project-pills">
          <span class="p-pill">${p.tags[0]}</span>
          <span class="p-pill p-pill-soft">${p.tags[1]}</span>
          <span class="p-pill p-pill-soft">${p.period}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-kpis">
          ${p.kpis.map(k => `<div class="kpi-box"><strong>${k.value}</strong><span>${k.label}</span></div>`).join('')}
        </div>
        <div class="project-footer">
          <span class="view-case-link">Inspect Case Study &rarr;</span>
          <a class="repo-ext-link" href="${p.repoUrl}" target="_blank" rel="noopener" onclick="event.stopPropagation()">GitHub &nearr;</a>
        </div>
      </div>
    </article>
  `).join('');

  document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
    card.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openModal(card.dataset.id);
      }
    });
  });
  bindSpotlight();
}

// Track Filters
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
      const show = filter === 'all' || card.dataset.tracks.split(' ').includes(filter);
      card.classList.toggle('is-hidden', !show);
      if (show) card.classList.add('visible');
    });
  });
});

// Modal (Case Studies + Document Previews)
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
    <div class="project-pills" style="margin-bottom:10px;">
      <span class="p-pill">${p.tags[0]}</span>
      <span class="p-pill p-pill-soft">${p.tags[1]}</span>
      <span class="p-pill p-pill-soft">${p.period}</span>
    </div>
    <h2 id="modalTitle" style="font-size:1.5rem;margin-bottom:4px;">${p.title}</h2>
    <p style="font-family:'JetBrains Mono',monospace;font-size:0.78rem;color:var(--blue);margin-bottom:12px;">${p.role}</p>
    <p style="color:var(--ink-2);font-size:0.94rem;">${p.summary}</p>
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
    <div class="chip-row" style="margin-bottom:20px;">
      ${p.stack.map(s => `<span>${s}</span>`).join('')}
    </div>
    <div style="display:flex;flex-wrap:wrap;gap:10px;">
      <a href="${p.repoUrl}" target="_blank" rel="noopener" class="pill-btn pill-btn-blue">Open GitHub Repository <span class="arrow-circle">&nearr;</span></a>
      ${p.liveUrl ? `<a href="${p.liveUrl}" target="_blank" rel="noopener" class="pill-btn pill-btn-outline">Launch Live Demo &nearr;</a>` : ''}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

const DOCUMENTS = {
  portfolio: {
    eyebrow: 'Visual Project Portfolio · 5 Pages A4',
    title: 'Portfolio — Nguyen Hoang Phong',
    downloadUrl: 'assets/Portfolio%20Nguyen%20Hoang%20Phong.pdf',
    downloadName: 'Portfolio Nguyen Hoang Phong.pdf',
    pages: [
      { src: 'assets/previews/portfolio-1.png', label: 'Page 1 / 5 — Executive Profile & Project Index' },
      { src: 'assets/previews/portfolio-2.png', label: 'Page 2 / 5 — SocialShield-VN (Dashboard, Risk Engine & Benchmark)' },
      { src: 'assets/previews/portfolio-3.png', label: 'Page 3 / 5 — Hanoi Homes & Orange Telecom Churn' },
      { src: 'assets/previews/portfolio-4.png', label: 'Page 4 / 5 — RideLink Chain & InterBank VerifyChain' },
      { src: 'assets/previews/portfolio-5.png', label: 'Page 5 / 5 — HSBC IFRS S1/S2 Study (ICECH 2026) & Contact' }
    ]
  }
};

function openDocPreview(key, pageNum) {
  const doc = DOCUMENTS[key];
  if (!doc) return;

  modalBody.innerHTML = `
    <div class="doc-preview-header">
      <div>
        <div class="j-date" style="margin-bottom:3px;">${doc.eyebrow}</div>
        <h2 id="modalTitle" style="font-size:1.4rem;">${doc.title}</h2>
      </div>
      <div style="display:flex;gap:10px;padding-right:42px;flex-wrap:wrap;">
        <a href="${doc.downloadUrl}" target="_blank" rel="noopener" class="pill-btn pill-btn-outline" style="padding:8px 16px;font-size:0.82rem;">Open Raw PDF &nearr;</a>
        <a href="${doc.downloadUrl}" download="${doc.downloadName}" class="pill-btn pill-btn-blue" style="padding:7px 9px 7px 16px;font-size:0.82rem;">Download PDF <span class="arrow-circle" style="width:24px;height:24px;">&darr;</span></a>
      </div>
    </div>
    <div class="doc-pages-stack">
      ${doc.pages.map((pg, idx) => `
        <div class="doc-page-card" id="docPage${idx + 1}">
          <img src="${pg.src}" alt="${pg.label}" />
          <div class="doc-page-label"><span>${pg.label}</span><span>High-Res Preview</span></div>
        </div>
      `).join('')}
    </div>
  `;

  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';

  if (pageNum) {
    requestAnimationFrame(() => {
      document.getElementById(`docPage${pageNum}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }
}

function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

modalClose.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

document.querySelectorAll('[data-preview-doc]').forEach(el => {
  el.addEventListener('click', () => openDocPreview(el.dataset.previewDoc, el.dataset.previewPage));
  el.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openDocPreview(el.dataset.previewDoc, el.dataset.previewPage);
    }
  });
});

// Cursor-Tracking Spotlight Glow
function bindSpotlight() {
  if (!window.matchMedia('(pointer: fine)').matches) return;
  document.querySelectorAll('.spotlight-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  });
}

// Scroll Progress, Navbar & Active Nav Scroll-Spy
const progressEl = document.getElementById('scrollProgress');
const navbar = document.getElementById('navbar');
const sections = [...document.querySelectorAll('main section[id]')];
const navLinks = [...document.querySelectorAll('.nav-link')];

window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
  progressEl.style.width = maxScroll > 0 ? `${(scrollTop / maxScroll) * 100}%` : '0%';
  navbar.classList.toggle('scrolled', scrollTop > 18);

  let current = 'home';
  for (const sec of sections) {
    if (scrollTop >= sec.offsetTop - 160) current = sec.id;
  }
  navLinks.forEach(l => l.classList.toggle('active', l.getAttribute('href') === `#${current}`));
}, { passive: true });

// Count-up stats when About section scrolls into view
let statsAnimated = false;
function animateStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('[data-count]').forEach(el => {
    const target = parseFloat(el.dataset.count);
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const suffix = el.dataset.suffix || '';
    const start = performance.now();
    const duration = 900;
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
        if (entry.target.closest('#about')) animateStats();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -24px 0px' });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// Mobile Menu
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileNav = document.getElementById('mobileNav');
mobileBtn?.addEventListener('click', () => mobileNav.classList.toggle('open'));
document.querySelectorAll('.mobile-nav-link').forEach(l => l.addEventListener('click', () => mobileNav.classList.remove('open')));

// Copy Email Button
const copyBtn = document.getElementById('copyEmailBtn');
copyBtn?.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('phonghoang5800@gmail.com');
    copyBtn.textContent = 'Copied!';
    setTimeout(() => { copyBtn.textContent = 'Copy'; }, 1800);
  } catch {
    window.location.href = 'mailto:phonghoang5800@gmail.com';
  }
});

// Interactive Contact Form -> Opens pre-filled email cleanly
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');
contactForm?.addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('cName').value.trim();
  const email = document.getElementById('cEmail').value.trim();
  const role = document.getElementById('cRole').value.trim() || 'Internship Inquiry';
  const msg = document.getElementById('cMsg').value.trim();
  const subject = encodeURIComponent(`[Portfolio] ${role} — from ${name}`);
  const body = encodeURIComponent(`Hi Nguyen Hoang Phong,\n\n${msg}\n\nBest regards,\n${name}\n${email}`);
  window.location.href = `mailto:phonghoang5800@gmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = 'Opening your mail client...';
  setTimeout(() => { formNote.textContent = 'Opens your mail client pre-filled'; }, 3000);
});

// Init
renderProjects();
bindSpotlight();
initReveal();

// ============================================================
// Nguyen Hoang Phong — Executive Portfolio v3
// Realistic Browser-Frame UI Mockups + Retina SVG Charts + Real Screenshots
// ============================================================

const PROJECTS = [
  {
    id: 'socialshield-vn',
    tracks: ['ba', 'ai'],
    tags: ['Business Analysis', 'Explainable AI'],
    period: 'May 2026',
    role: 'Team Leader · Business Analyst & ML Developer',
    title: 'SocialShield-VN',
    summary: 'Explainable Vietnamese SMS & phishing link warning web app with 0–100 risk scoring.',
    kpis: [
      { value: '85.59%', label: 'Macro F1 (X-HRS-MTSD+)' },
      { value: '3,114', label: 'Labeled VN SMS Rows' },
      { value: '22 Rules', label: 'Domain Signals' }
    ],
    stack: ['FastAPI', 'SQLite', 'Scikit-learn', 'TF-IDF + Rules', 'K-Means', 'HTML/CSS/JS'],
    urlLabel: 'socialshield-vn.local/dashboard',
    darkFrame: false,
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
      { src: 'assets/images/socialshield-batch.png', caption: 'Bulk CSV/TXT Scanner — scanning 3,114 messages with per-row risk levels & explanations' },
      { src: 'assets/images/socialshield-metrics.png', caption: 'Confusion Matrix & Model Benchmark comparing X-HRS-MTSD+ against baselines' }
    ]
  },
  {
    id: 'hanoi-homes',
    tracks: ['ai', 'research'],
    tags: ['Data Science', 'Explainable ML'],
    period: 'Oct 2026 – Present',
    role: 'ML & System Developer',
    title: 'Hanoi Homes',
    summary: 'Hanoi apartment price estimator powered by CatBoost + SHAP on R Shiny & SQLite.',
    kpis: [
      { value: '14.57%', label: 'CatBoost MAPE' },
      { value: '463/463', label: 'QA Tests Passed' },
      { value: '262', label: 'Hanoi Projects' }
    ],
    stack: ['Python', 'CatBoost', 'SHAP', 'R Shiny', 'SQLite', 'Automated QA'],
    urlLabel: 'hanoi-homes · R Shiny + CatBoost SHAP',
    darkFrame: false,
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
    title: 'InterBank VerifyChain',
    summary: 'Interbank settlement simulator with Web Crypto OTP, SHA-256, RSA signing & audit ledger.',
    kpis: [
      { value: '19 Cases', label: 'Documented QA Suite' },
      { value: 'SHA-256', label: '+ RSA Signing' },
      { value: 'Live Demo', label: 'Zero-Backend App' }
    ],
    stack: ['HTML5', 'CSS3', 'Vanilla JS', 'Web Crypto API', 'RSA & SHA-256', 'Audit Ledger'],
    urlLabel: 'phonghoang5800-droid.github.io/InterBank-VerifyChain',
    darkFrame: false,
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
    title: 'RideLink Chain',
    summary: 'Decentralized ride-hailing prototype with Solidity escrow, API specs & QR verification.',
    kpis: [
      { value: '3 Portals', label: 'Passenger · Driver · Admin' },
      { value: 'Solidity', label: '0.8.20 Smart Escrow' },
      { value: 'API Specs', label: 'Booking & Payment Flows' }
    ],
    stack: ['Node.js', 'Express', 'Solidity 0.8.20', 'Hardhat', 'MetaMask', 'QR Verification'],
    urlLabel: 'ridelink-chain · RideLinkEscrow.sol (Chain 31337)',
    darkFrame: true,
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
    title: 'IFRS S1/S2 ESG Intelligence',
    summary: 'ICECH 2026 HSBC study & Python hybrid NLP pipeline for ESG disclosure compliance.',
    kpis: [
      { value: 'ICECH ’26', label: 'Published Proceedings' },
      { value: '4-Way', label: 'Hybrid Rank Fusion' },
      { value: 'IFRS S1/S2', label: 'Criteria Audit' }
    ],
    stack: ['Python', 'pdfplumber', 'BM25 & TF-IDF', 'Sentence Transformers', 'NMF', 'SciPy'],
    urlLabel: 'FinAI.ipynb · IFRS S1/S2 Compliance Matrix',
    darkFrame: false,
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
    title: 'Orange Telecom Churn AI',
    summary: 'CRM churn prediction with multivariate EDA and Hybrid Soft Voting ensemble.',
    kpis: [
      { value: '0.90', label: 'Test ROC-AUC' },
      { value: '92.5%', label: 'Test Accuracy' },
      { value: '0.71', label: 'Churn F1 Score' }
    ],
    stack: ['Python', 'Scikit-learn', 'Soft Voting Ensemble', 'Pandas & NumPy', 'Multivariate EDA'],
    urlLabel: 'churn-analytics · Soft Voting ROC Curve',
    darkFrame: false,
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

function renderWindowInner(p) {
  if (p.mediaType === 'image') {
    return `<img src="${p.image}" alt="${p.title}" loading="lazy" />`;
  }

  if (p.mediaType === 'viz-hanoi') {
    return `
      <div class="ui-mock">
        <div class="ui-head-row">
          <strong style="font-family:'Poppins',sans-serif;font-size:0.78rem;color:#0f172a;">Hanoi Homes Valuation Engine</strong>
          <span class="ui-badge-ok">&#10003; 463/463 QA Passed</span>
        </div>
        <div class="ui-split">
          <div class="ui-panel">
            <div>
              <div class="ui-sub">Selected Model &middot; 6 Benchmarked</div>
              <div class="ui-price">CatBoost</div>
              <div class="ui-sub" style="margin-top:4px;">MAE: <strong style="color:#0f172a;">VND 0.866 bn</strong></div>
              <div class="ui-sub">MAPE: <strong style="color:#059669;">14.57%</strong></div>
            </div>
            <div style="margin-top:8px;padding-top:6px;border-top:1px solid #e2e8f0;font-family:'JetBrains Mono',monospace;font-size:0.63rem;color:#475569;">
              1,856 raw &rarr; <strong>846 clean</strong><br/>262 Hanoi projects
            </div>
          </div>
          <div class="ui-panel">
            <div class="ui-sub" style="font-weight:600;color:#0f172a;margin-bottom:4px;">SHAP Feature Drivers</div>
            <svg viewBox="0 0 220 112" style="width:100%;height:auto;" aria-hidden="true">
              <line x1="88" y1="6" x2="88" y2="106" stroke="#cbd5e1" stroke-dasharray="3 3"/>
              <text x="4" y="22" font-size="9" fill="#334155" font-family="Inter">District Tier</text>
              <rect x="88" y="13" width="96" height="11" rx="3" fill="#2563eb"/>
              <text x="188" y="22" font-size="8.5" fill="#2563eb" font-family="JetBrains Mono">+0.62</text>

              <text x="4" y="44" font-size="9" fill="#334155" font-family="Inter">Floor Area</text>
              <rect x="88" y="35" width="74" height="11" rx="3" fill="#3b82f6"/>
              <text x="166" y="44" font-size="8.5" fill="#2563eb" font-family="JetBrains Mono">+0.48</text>

              <text x="4" y="66" font-size="9" fill="#334155" font-family="Inter">Project Seg.</text>
              <rect x="88" y="57" width="52" height="11" rx="3" fill="#60a5fa"/>
              <text x="144" y="66" font-size="8.5" fill="#2563eb" font-family="JetBrains Mono">+0.31</text>

              <text x="4" y="88" font-size="9" fill="#334155" font-family="Inter">Age Factor</text>
              <rect x="64" y="79" width="24" height="11" rx="3" fill="#f43f5e"/>
              <text x="93" y="88" font-size="8.5" fill="#e11d48" font-family="JetBrains Mono">-0.19</text>
            </svg>
          </div>
        </div>
      </div>`;
  }

  if (p.mediaType === 'viz-ridelink') {
    return `
      <div class="ui-mock" style="color:#f8fafc;">
        <div class="ui-head-row">
          <strong style="font-family:'Poppins',sans-serif;font-size:0.78rem;color:#fff;">RideLinkEscrow.sol &middot; State Flow</strong>
          <span style="font-family:'JetBrains Mono',monospace;font-size:0.64rem;background:rgba(16,185,129,0.18);color:#6ee7b7;border:1px solid rgba(16,185,129,0.35);padding:2px 8px;border-radius:999px;">&#9679; Hardhat Live</span>
        </div>
        <div class="ui-split">
          <div class="ui-panel-dark">
            <div style="font-family:'JetBrains Mono',monospace;font-size:0.62rem;color:#93c5fd;margin-bottom:5px;">ESCROW PIPELINE</div>
            <div style="display:flex;flex-direction:column;gap:5px;font-size:0.67rem;">
              <div style="display:flex;justify-content:space-between;background:rgba(37,99,235,0.22);padding:4px 7px;border-radius:6px;"><span>1. Book &amp; Split Fare</span><span style="color:#93c5fd;">API</span></div>
              <div style="display:flex;justify-content:space-between;background:rgba(37,99,235,0.16);padding:4px 7px;border-radius:6px;"><span>2. Lock Escrow Funds</span><span style="color:#93c5fd;">ETH</span></div>
              <div style="display:flex;justify-content:space-between;background:rgba(16,185,129,0.18);padding:4px 7px;border-radius:6px;"><span>3. QR Boarding Check</span><span style="color:#6ee7b7;">OK</span></div>
              <div style="display:flex;justify-content:space-between;background:rgba(16,185,129,0.25);padding:4px 7px;border-radius:6px;"><span>4. Release + Hash Log</span><span style="color:#6ee7b7;">&#10003;</span></div>
            </div>
          </div>
          <div class="ui-panel-dark" style="font-family:'JetBrains Mono',monospace;font-size:0.63rem;line-height:1.5;color:#cbd5e1;">
            <div style="color:#93c5fd;margin-bottom:4px;">// API Data Field Spec</div>
            <div>{</div>
            <div style="padding-left:8px;">"tripId": <span style="color:#fde68a;">"RL-2026-084"</span>,</div>
            <div style="padding-left:8px;">"portals": <span style="color:#6ee7b7;">["User","Driver","Admin"]</span>,</div>
            <div style="padding-left:8px;">"escrow": <span style="color:#6ee7b7;">"RELEASED"</span>,</div>
            <div style="padding-left:8px;">"qrVerified": <span style="color:#93c5fd;">true</span>,</div>
            <div style="padding-left:8px;">"ledgerHash": <span style="color:#fde68a;">"0x8f3a..c91e"</span></div>
            <div>}</div>
          </div>
        </div>
      </div>`;
  }

  if (p.mediaType === 'viz-ifrs') {
    return `
      <div class="ui-mock">
        <div class="ui-head-row">
          <strong style="font-family:'Poppins',sans-serif;font-size:0.78rem;color:#0f172a;">IFRS S1/S2 Audit &middot; HSBC Case Study</strong>
          <span class="ui-badge-ok">ICECH 2026 Published</span>
        </div>
        <table class="esg-table">
          <thead>
            <tr><th>Standard</th><th>Retrieval Fusion</th><th>Evidence Audit</th><th>Status</th></tr>
          </thead>
          <tbody>
            <tr><td><strong>IFRS S1-Gov</strong></td><td>TF-IDF + BM25 + Emb.</td><td>Board ESG oversight</td><td><span class="esg-pill">Mapped</span></td></tr>
            <tr><td><strong>IFRS S2-Strat</strong></td><td>Hybrid Rank Fusion</td><td>Climate transition plan</td><td><span class="esg-pill">Mapped</span></td></tr>
            <tr><td><strong>IFRS S2-Risk</strong></td><td>NMF + Sensitivity</td><td>Physical &amp; credit risks</td><td><span class="esg-pill">Mapped</span></td></tr>
            <tr><td><strong>IFRS S2-KPI</strong></td><td>Narrative vs. Numeric</td><td>Greenwashing audit</td><td><span class="esg-pill">Verified</span></td></tr>
          </tbody>
        </table>
        <div style="display:flex;justify-content:space-between;align-items:center;font-family:'JetBrains Mono',monospace;font-size:0.63rem;color:#64748b;padding-top:4px;">
          <span>Inputs: ifrs_requirements.csv + indicator_value.csv</span>
          <span style="color:#2563eb;font-weight:600;">Bootstrap CI &middot; HTML/CSV</span>
        </div>
      </div>`;
  }

  return `
    <div class="ui-mock">
      <div class="ui-head-row">
        <strong style="font-family:'Poppins',sans-serif;font-size:0.78rem;color:#0f172a;">Orange Telecom CRM · ROC-AUC Curve</strong>
        <span class="ui-badge-blue">Soft Voting Ensemble</span>
      </div>
      <div class="ui-split">
        <div class="ui-panel" style="padding:8px;">
          <svg viewBox="0 0 180 120" style="width:100%;height:100%;" aria-hidden="true">
            <defs>
              <linearGradient id="rocGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stop-color="#2563eb" stop-opacity="0.28"/>
                <stop offset="100%" stop-color="#2563eb" stop-opacity="0.02"/>
              </linearGradient>
            </defs>
            <line x1="22" y1="102" x2="170" y2="102" stroke="#cbd5e1" stroke-width="1"/>
            <line x1="22" y1="10" x2="22" y2="102" stroke="#cbd5e1" stroke-width="1"/>
            <line x1="22" y1="102" x2="170" y2="10" stroke="#94a3b8" stroke-dasharray="4 3" stroke-width="1"/>
            <path d="M 22 102 C 30 34, 52 16, 170 10 L 170 102 Z" fill="url(#rocGrad)"/>
            <path d="M 22 102 C 30 34, 52 16, 170 10" fill="none" stroke="#2563eb" stroke-width="2.6" stroke-linecap="round"/>
            <circle cx="52" cy="24" r="3.5" fill="#059669" stroke="#fff" stroke-width="1.5"/>
            <text x="62" y="34" font-size="9.5" font-weight="700" fill="#1d4ed8" font-family="JetBrains Mono">AUC = 0.90</text>
            <text x="26" y="114" font-size="7.5" fill="#64748b" font-family="JetBrains Mono">FPR 0.0</text>
            <text x="140" y="114" font-size="7.5" fill="#64748b" font-family="JetBrains Mono">1.0</text>
          </svg>
        </div>
        <div class="ui-panel">
          <div>
            <div class="ui-sub">Holdout Test Metrics</div>
            <div style="display:flex;gap:10px;margin-top:4px;">
              <div><strong style="font-family:'Poppins';font-size:1.05rem;color:#059669;">92.5%</strong><div class="ui-sub">Accuracy</div></div>
              <div><strong style="font-family:'Poppins';font-size:1.05rem;color:#2563eb;">0.71</strong><div class="ui-sub">Churn F1</div></div>
            </div>
          </div>
          <div style="margin-top:6px;padding-top:6px;border-top:1px solid #e2e8f0;font-size:0.66rem;color:#334155;">
            <strong>Top EDA Drivers:</strong><br/>
            &bull; High total day charges<br/>
            &bull; Frequent call-center tickets
          </div>
        </div>
      </div>
    </div>`;
}

// Render Projects Grid
const grid = document.getElementById('projectsGrid');

function renderProjects() {
  grid.innerHTML = PROJECTS.map((p, idx) => `
    <article class="project-card spotlight-card reveal" style="--delay:${(idx % 2) * 80}ms" data-id="${p.id}" data-tracks="${p.tracks.join(' ')}" tabindex="0" role="button" aria-label="Inspect case study for ${p.title}">
      <div class="product-stage ${p.darkFrame ? 'product-stage-dark' : ''}">
        <div class="win-frame ${p.darkFrame ? 'win-frame-dark' : ''}">
          <div class="win-bar">
            <span class="win-dot wd-r"></span>
            <span class="win-dot wd-y"></span>
            <span class="win-dot wd-g"></span>
            <span class="win-url">${p.urlLabel}</span>
          </div>
          <div class="win-body">${renderWindowInner(p)}</div>
        </div>
      </div>
      <div class="project-body">
        <div class="project-pills">
          <span class="p-pill">${p.tags[0]}</span>
          <span class="p-pill p-pill-soft">${p.tags[1]}</span>
        </div>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary}</p>
        <div class="project-kpis">
          ${p.kpis.map(k => `<div class="kpi-box"><strong>${k.value}</strong><span>${k.label}</span></div>`).join('')}
        </div>
        <div class="project-footer">
          <span class="view-case-link">Case Study &rarr;</span>
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

// Modal (Case Studies + High-Res Portfolio PDF Lightbox)
const modal = document.getElementById('projectModal');
const modalBody = document.getElementById('modalBody');
const modalClose = document.getElementById('modalClose');

function openModal(id) {
  const p = PROJECTS.find(item => item.id === id);
  if (!p) return;

  const galleryHtml = p.gallery
    ? `<div class="modal-gallery">${p.gallery.map(g => `<figure><img src="${g.src}" alt="${g.caption}" /><figcaption>${g.caption}</figcaption></figure>`).join('')}</div>`
    : `<div class="product-stage ${p.darkFrame ? 'product-stage-dark' : ''}" style="border-radius:16px;margin:18px 0;border:1px solid var(--border);">
         <div class="win-frame ${p.darkFrame ? 'win-frame-dark' : ''}">
           <div class="win-bar"><span class="win-dot wd-r"></span><span class="win-dot wd-y"></span><span class="win-dot wd-g"></span><span class="win-url">${p.urlLabel}</span></div>
           <div class="win-body" style="height:225px;">${renderWindowInner(p)}</div>
         </div>
       </div>`;

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
    eyebrow: 'Visual Project Portfolio · 5 Pages A4 · Retina High-Res',
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
          <div class="doc-page-label"><span>${pg.label}</span><span>Retina 220 DPI Preview</span></div>
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

// Subtle 3D Tilt on Executive Hero Card
const execCard = document.getElementById('execCard');
if (execCard && window.matchMedia('(pointer: fine)').matches) {
  execCard.addEventListener('mousemove', e => {
    const r = execCard.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    execCard.style.transform = `perspective(1000px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
  });
  execCard.addEventListener('mouseleave', () => {
    execCard.style.transform = 'perspective(1000px) rotateY(0deg) rotateX(0deg)';
  });
}

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

// Scroll Progress, Navbar & Active Scroll-Spy
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

// Copy Email
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

// Interactive Contact Form
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

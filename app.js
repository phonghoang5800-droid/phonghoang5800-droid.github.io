/* 1. FAST MINIMAL PRELOADER (0% -> 100%) */
(function runPreloader() {
  const el = document.getElementById("preloader");
  const pct = document.getElementById("prePercent");
  const fill = document.getElementById("preFill");
  if (!el) return;
  const start = performance.now();
  const dur = 680;
  function step(now) {
    const t = Math.min(1, (now - start) / dur);
    const v = Math.round((1 - Math.pow(1 - t, 3)) * 100);
    pct.textContent = `${v}%`;
    fill.style.width = `${v}%`;
    if (t < 1) requestAnimationFrame(step);
    else setTimeout(() => el.classList.add("done"), 130);
  }
  requestAnimationFrame(step);
})();

/* 2. CHROME ORB LIGHT/DARK STUDIO TOGGLE */
document.getElementById("themeToggle")?.addEventListener("click", () => {
  const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  document.documentElement.dataset.theme = next;
});

/* 3. CLEAN TYPEWRITER (SINGLE FOCUS: FINANCIAL TECHNOLOGY AND DIGITAL BUSINESS) */
(function initTypewriter() {
  const el = document.getElementById("typewriterText");
  if (!el) return;
  const text = "Financial Technology and Digital Business";
  el.textContent = "";
  let i = 0;
  function typeOnce() {
    i++;
    el.textContent = text.slice(0, i);
    if (i < text.length) setTimeout(typeOnce, 38);
  }
  setTimeout(typeOnce, 720);
})();

/* 4. 60FPS ELASTIC PARACORD LANYARD + 180° FLIPPABLE ACRYLIC BADGE */
(function initAcrylicLanyard() {
  const wrap = document.getElementById("badgeWrap");
  const card3d = document.getElementById("acrylic3d");
  const refract = document.getElementById("acrylicRefract");
  const cordL = document.getElementById("cordL");
  const cordLS = document.getElementById("cordLStitch");
  const cordR = document.getElementById("cordR");
  const cordRS = document.getElementById("cordRStitch");
  const flipBtn = document.getElementById("flipPassBtn");
  if (!wrap || !card3d) return;

  const restY = 112;
  let x = 20, y = restY - 8, vx = -3.8, vy = 0, ang = -7.5, vAng = 0;
  let dragging = false, sx = 0, sy = 0, ox = 0, oy = 0, lastX = 0, moved = 0;

  wrap.addEventListener("pointerdown", (e) => {
    dragging = true;
    moved = 0;
    wrap.setPointerCapture?.(e.pointerId);
    sx = e.clientX; sy = e.clientY;
    ox = x; oy = y; lastX = e.clientX;
    vx = 0; vy = 0;
  });

  window.addEventListener("pointermove", (e) => {
    if (!dragging) return;
    const dx = e.clientX - sx;
    const dy = e.clientY - sy;
    moved = Math.hypot(dx, dy);
    x = Math.max(-175, Math.min(175, ox + dx));
    y = Math.max(40, Math.min(230, oy + dy));
    const mv = e.clientX - lastX;
    lastX = e.clientX;
    vx = mv * 0.65;
    ang = Math.max(-30, Math.min(30, -x * 0.14 + mv * 0.45));
  });

  window.addEventListener("pointerup", () => {
    if (dragging && moved < 6) card3d.classList.toggle("flipped");
    dragging = false;
  });

  flipBtn?.addEventListener("click", () => card3d.classList.toggle("flipped"));

  function animate() {
    if (!dragging) {
      vx = (vx + (0 - x) * 0.082) * 0.89;
      vy = (vy + (restY - y) * 0.082) * 0.89;
      x += vx; y += vy;
      const targetAng = -x * 0.13 - vx * 0.72;
      vAng = (vAng + (targetAng - ang) * 0.14) * 0.84;
      ang += vAng;
    }

    wrap.style.transform = `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${ang.toFixed(2)}deg)`;
    if (refract) refract.style.opacity = (0.35 + Math.min(0.45, Math.abs(x) / 140)).toFixed(2);

    const cx = 230 + x;
    const cy = y + 12;
    const mx = 230 + x * 0.44;
    const my = cy * 0.54;
    const dL = `M 218 -20 Q ${mx - 7} ${my} ${cx - 5} ${cy}`;
    const dR = `M 244 -20 Q ${mx + 7} ${my} ${cx + 5} ${cy}`;
    cordL.setAttribute("d", dL); cordLS.setAttribute("d", dL);
    cordR.setAttribute("d", dR); cordRS.setAttribute("d", dR);

    requestAnimationFrame(animate);
  }
  requestAnimationFrame(animate);
})();

/* 5. ABOUT ME LIVE CURSOR X-RAY LENS */
(function initXrayLens() {
  const frame = document.getElementById("xrayFrame");
  const lens = document.getElementById("xfLens");
  const hint = document.getElementById("xfHint");
  if (!frame || !lens) return;

  frame.addEventListener("mousemove", (e) => {
    const r = frame.getBoundingClientRect();
    lens.style.setProperty("--mx", `${e.clientX - r.left - 10}px`);
    lens.style.setProperty("--my", `${e.clientY - r.top - 10}px`);
  });

  frame.addEventListener("click", () => {
    const locked = frame.classList.toggle("locked");
    hint.textContent = locked ? "⚡ AI X-Ray Locked · Nhấp để mở" : "Di chuột soi X-Ray · Nhấp để khóa";
  });
})();

/* 6. RECRUITER AI COPILOT DRAWER */
(function initRecruiterAI() {
  const btn = document.getElementById("openAiHero");
  const drawer = document.getElementById("aiDrawer");
  const close = document.getElementById("aiClose");
  const msgs = document.getElementById("aiMessages");

  const QA = {
    major: "Phong học ngành <strong>Financial Technology &amp; Digital Business (VNU-IS)</strong>. Thay vì chỉ dừng ở lý thuyết trên lớp, Phong tập trung áp dụng tư duy tài chính, phân tích dữ liệu và thiết kế hệ thống để giải các bài toán thực tế như phát hiện lừa đảo, định giá BĐS, kiểm toán giao dịch và tuân thủ ESG.",
    project: "Các dự án thực tế gồm <strong>SocialShield-VN 2.0</strong> (chống lừa đảo tài chính), <strong>IFRS-ESG Disclosure Intelligence</strong> (nghiên cứu ICECH 2026), <strong>InterBank VerifyChain</strong> (xác thực giao dịch), <strong>Hanoi Homes</strong> (định giá BĐS CatBoost + SHAP) và <strong>RideLink Chain</strong> (ký quỹ thông minh Solidity).",
    stats: "<strong>GPA 3.45/4.0</strong> tại VNU-IS, chứng chỉ tiếng Anh <strong>Aptis B2</strong>, chứng chỉ Google Data Analysis / BI / AI, và là <strong>đồng tác giả bài báo quốc tế ICECH 2026</strong> (chủ đề IFRS S1/S2 ESG).",
    contact: "Liên hệ trực tiếp qua email <strong>phonghoang5800@gmail.com</strong> hoặc <strong>github.com/phonghoang5800-droid</strong> — sẵn sàng thực tập / làm việc tại Hà Nội!",
  };

  btn?.addEventListener("click", () => drawer.classList.toggle("hidden"));
  close?.addEventListener("click", () => drawer.classList.add("hidden"));

  document.querySelectorAll("#aiQuickQs button").forEach((b) => {
    b.addEventListener("click", () => {
      const u = document.createElement("div");
      u.className = "ai-m user";
      u.textContent = b.textContent;
      msgs.appendChild(u);

      const bot = document.createElement("div");
      bot.className = "ai-m bot";
      bot.innerHTML = QA[b.dataset.q] || "";
      msgs.appendChild(bot);
      msgs.scrollTop = msgs.scrollHeight;
    });
  });
})();

/* 7. SCROLL REVEAL & NAV ACTIVE SPY */
(function initSpy() {
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
    { threshold: 0.12 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  const ids = ["home", "about", "portfolio", "contact"];
  const navs = document.querySelectorAll(".nav-item");
  window.addEventListener("scroll", () => {
    const y = window.scrollY + window.innerHeight * 0.35;
    let cur = "home";
    for (const id of ids) {
      const el = document.getElementById(id);
      if (el && el.offsetTop <= y) cur = id;
    }
    navs.forEach((a) => a.classList.toggle("active", a.dataset.sec === cur));
  });
})();

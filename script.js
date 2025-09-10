// Küçük etkileşimler: mobil menü ve yıl
(function () {
  // Page fade-in
  document.addEventListener('DOMContentLoaded', () => {
    requestAnimationFrame(() => document.body.classList.remove('is-loading'));
  });

  const yilSpan = document.getElementById('yil');
  if (yilSpan) yilSpan.textContent = new Date().getFullYear();

  const toggle = document.querySelector('.nav-toggle');
  const menu = document.getElementById('ana-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      const acik = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(acik));
    });
  }

  // Aktif menü vurgusu
  (function setActiveNav() {
    const links = document.querySelectorAll('#ana-menu a');
    if (!links.length) return;
    let file = location.pathname.split('/').pop() || 'index.html';
    for (const a of links) {
      try {
        const href = a.getAttribute('href') || '';
        if (!href || href.startsWith('http')) continue;
        const path = href.split('#')[0] || href;
        if ((file === 'index.html' && path === 'index.html') || path === file) {
          a.classList.add('active');
        }
      } catch {}
    }
  })();

  // Page fade-out on internal navigation
  (function pageTransitions(){
    document.addEventListener('click', (e) => {
      const a = e.target.closest && e.target.closest('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      if (a.target === '_blank' || href.startsWith('http')) return; // external
      if (href.startsWith('#')) return; // in-page anchors
      if (href.trim() === '') return;
      e.preventDefault();
      document.body.classList.add('fade-out');
      setTimeout(() => { window.location.href = href; }, 220);
    });
  })();

  // (Removed) Language toggle

  // Tema (light/dark) toggle
  (function themeToggle(){
    const btn = document.querySelector('.theme-toggle');
    const key = 'theme';
    const stored = localStorage.getItem(key);
    if (stored === 'light') document.body.classList.add('light');
    if (btn) {
      const setLabel = () => btn.textContent = document.body.classList.contains('light') ? '🌙' : '🌞';
      setLabel();
      btn.addEventListener('click', () => {
        document.body.classList.toggle('light');
        localStorage.setItem(key, document.body.classList.contains('light') ? 'light' : 'dark');
        setLabel();
      });
    }
  })();

  // Scroll reveal
  (function reveal(){
    const els = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window) || !els.length) return els.forEach(el=>el.classList.add('in'));
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{ if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    els.forEach(el=>io.observe(el));
  })();

  // Back to top
  (function backToTop(){
    const btn = document.getElementById('to-top');
    if (!btn) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) btn.classList.add('show'); else btn.classList.remove('show');
    });
    btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  })();

  // Karbon Ayak İzi mini hesaplayıcı (basitleştirilmiş, emojili)
  (function carbonCalc() {
    const root = document.getElementById('cf-calc');
    if (!root) return;
    const inputs = root.querySelectorAll('input, select');
    const out = root.querySelector('[data-out]');

    function update() {
      const people = parseFloat(root.querySelector('#cf-people').value || '3.5');
      const home = root.querySelector('#cf-home').value || 'med';
      const transport = root.querySelector('#cf-transport').value || 'transit';
      const flights = root.querySelector('#cf-flights').value || 'none';
      const diet = root.querySelector('#cf-diet').value || 'normal';
      const shop = root.querySelector('#cf-shop').value || 'med';

      // Ev enerjisi (hane bazlı, ton/yıl) — kişi başına bölünecek
      const homeMap = { low: 1.2, med: 2.0, high: 3.0 };
      const homePerPerson = (homeMap[home] || 2.0) / Math.max(1, people);

      // Ulaşım (ton/yıl)
      const transportMap = { walk: 0.1, transit: 0.6, car_low: 0.9, car_high: 1.8 };
      const transportTon = transportMap[transport] ?? 0.6;

      // Uçuş (ton/yıl)
      const flightMap = { none: 0.0, few: 0.4, some: 1.0, many: 2.0 };
      const flightTon = flightMap[flights] ?? 0;

      // Beslenme (ton/yıl)
      const dietMap = { vegan: 0.8, vejetaryen: 1.2, normal: 1.7, et: 2.5 };
      const dietTon = dietMap[diet] ?? 1.7;

      // Tüketim (ton/yıl)
      const shopMap = { low: 0.2, med: 0.5, high: 1.0 };
      const shopTon = shopMap[shop] ?? 0.5;

      const totalTon = homePerPerson + transportTon + flightTon + dietTon + shopTon;

      if (out) {
        const emoji = totalTon < 2.0 ? '🌿' : totalTon < 4.0 ? '🌱' : totalTon < 7.0 ? '🌍' : '🔥';
        out.textContent = `${emoji} ≈ ${totalTon.toFixed(2)} ton CO2e/yıl (yaklaşık)`;
      }
    }

    inputs.forEach(el => el.addEventListener('input', update));
    update();
  })();

  // Count-up stats when visible
  (function counters(){
    const els = document.querySelectorAll('[data-count]');
    if (!els.length) return;
    const animate = (el) => {
      const to = parseFloat(el.getAttribute('data-count')) || 0;
      const dur = parseInt(el.getAttribute('data-dur') || '1200', 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let start = null;
      const from = 0;
      function step(ts){
        if (!start) start = ts;
        const p = Math.min(1, (ts - start) / dur);
        const val = from + (to - from) * (1 - Math.pow(1 - p, 3)); // ease-out-cubic
        el.textContent = val.toFixed(el.getAttribute('data-dec') ? parseInt(el.getAttribute('data-dec'),10): 0) + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    };
    if (!('IntersectionObserver' in window)) { els.forEach(animate); return; }
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(e=>{
        if (e.isIntersecting){ animate(e.target); io.unobserve(e.target);} 
      });
    }, { threshold: 0.4 });
    els.forEach(el=>io.observe(el));
  })();
})();

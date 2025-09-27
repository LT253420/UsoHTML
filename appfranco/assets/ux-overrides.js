// assets/ux-overrides.js
(function () {
  const $  = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const pre         = $('#preloader');
  const fill        = $('#progressFill'); // ← IDs reales del HTML
  const pct         = $('#percentage');   // ← IDs reales del HTML
  const homeBtn     = $('#homeBtn');
  const loginLoader = $('#loginLoader');

  const SCREEN_IDS = ['mainMenu', 'passwordMenu', 'fallasMenu', 'placaMenu', 'usoMenu', 'contactoMenu', 'respuestas'];

  // ---------- PRELOADER ----------
  let progress = 0, tick;
  function setProgress(v) {
    progress = Math.max(0, Math.min(100, v|0));
    if (fill) fill.style.width = progress + '%';
    if (pct)  pct.textContent = progress + '%';
  }
  function startPreloader() {
    setProgress(0);
    tick = setInterval(() => {
      const inc = progress < 60 ? 7 : progress < 85 ? 4 : 2;
      setProgress(progress + inc);
      if (progress >= 96) clearInterval(tick);
    }, 120);
  }
  function endPreloader() {
    clearInterval(tick);
    setProgress(100);
    if (pre) {
      pre.classList.add('hide');               // animación CSS de salida
      setTimeout(() => {
        pre.style.display = 'none';
        document.body.classList.add('ui-ready'); // muestra HOME / suaviza root
      }, 240);
    } else {
      document.body.classList.add('ui-ready');
    }
  }

  // ---------- Detectar cuando React montó algo en #root ----------
  function onAppMounted(cb) {
    const root = document.getElementById('root');
    if (!root) return cb();
    if (root.childElementCount > 0) return cb();

    const obs = new MutationObserver(() => {
      if (root.childElementCount > 0) {
        obs.disconnect();
        cb();
      }
    });
    obs.observe(root, { childList: true });

    // Fallback
    setTimeout(() => {
      if (root.childElementCount > 0) {
        try { obs.disconnect(); } catch {}
        cb();
      }
    }, 2000);
  }

  // ---------- Marcar pantallas con clase y activar solo la principal ----------
  function markScreens() {
    const found = [];
    SCREEN_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) { el.classList.add('menu-screen'); found.push(el); }
    });

    if (found.length) {
      found.forEach(x => x.classList.remove('is-active'));
      const main = document.getElementById('mainMenu') || found[0];
      if (main) main.classList.add('is-active');
    }
  }

  // ---------- Cambio de pantalla con fade ----------
  function showScreen(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    const screens = $$('.menu-screen');
    if (target.classList.contains('is-active')) return;

    document.body.classList.add('leaving');
    setTimeout(() => {
      screens.forEach(s => s.classList.remove('is-active'));
      target.classList.add('is-active');
      document.body.classList.remove('leaving');
    }, 220);
  }

  // ---------- HOME (global) ----------
  function goHome() {
    // Si existe mainMenu, vamos ahí con fade. Si no, recargamos limpio.
    const main = document.getElementById('mainMenu');
    if (main) {
      document.body.classList.add('leaving');
      setTimeout(() => {
        $$('.menu-screen').forEach(s => s.classList.remove('is-active'));
        main.classList.add('is-active');
        document.body.classList.remove('leaving');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 220);
    } else {
      document.body.classList.add('leaving');
      setTimeout(() => window.location.reload(), 220);
    }
  }
  // ← Hacemos accesible la función que tu botón llama
  window.goToHome = goHome;

  // ---------- Loader post-login (opcional) ----------
  window.addEventListener('auth:login:success', () => {
    document.body.classList.add('loading');
    if (loginLoader) loginLoader.style.display = 'flex';
    setTimeout(() => {
      document.body.classList.remove('loading');
      if (loginLoader) loginLoader.style.display = 'none';
    }, 1200);
  });

  // ---------- Autowire por texto (opcional) ----------
  function autoWireButtons() {
    const btns = $$('button, [role="button"]');
    btns.forEach((btn) => {
      const t = (btn.textContent || '').trim().toLowerCase();
      if (!t || btn.__wired) return;

      if (t.includes('ingresar') || t.includes('entrar')) {
        const targetId = 'passwordMenu';
        if (document.getElementById(targetId)) {
          btn.addEventListener('click', () => showScreen(targetId));
          btn.__wired = true;
        }
      }

      if (t.includes('inicio') || t.includes('home')) {
        if (document.getElementById('mainMenu')) {
          btn.addEventListener('click', () => showScreen('mainMenu'));
        } else {
          btn.addEventListener('click', goHome);
        }
        btn.__wired = true;
      }
    });
  }

  // API global mínima
  window.goScreen = showScreen;

  // ---------- INIT ----------
  document.addEventListener('DOMContentLoaded', () => {
    startPreloader();
    onAppMounted(() => {
      endPreloader();
      markScreens();
      autoWireButtons();

      if (homeBtn) homeBtn.addEventListener('click', goHome);

      // Reintentos por si React inyecta más tarde
      setTimeout(() => { markScreens(); autoWireButtons(); }, 400);
      setTimeout(() => { markScreens(); autoWireButtons(); }, 1200);
    });
  });
})();

// assets/ux-overrides.js
(function () {
  const $  = (sel) => document.querySelector(sel);
  const $$ = (sel) => Array.from(document.querySelectorAll(sel));

  const pre        = $('#preloader');
  const fill       = $('#preFill');
  const pct        = $('#prePercent');
  const homeBtn    = $('#homeBtn');
  const loginLoader= $('#loginLoader');

  // --- PANTALLAS que intentaremos detectar automáticamente ---
  // Ajustá esta lista si más adelante sumás nuevas pantallas (solo IDs).
  const SCREEN_IDS = ['mainMenu', 'passwordMenu', 'fallasMenu'];

  // ---- PRELOADER INICIAL (barra de progreso) ----
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
    try { clearInterval(tick); } catch {}
    setProgress(100);
    if (pre) {
      pre.classList.add('hide'); // animación CSS de salida
      setTimeout(() => {
        pre.style.display = 'none';
        document.body.classList.add('ui-ready'); // habilita HOME y muestra #root suave
      }, 240);
    } else {
      document.body.classList.add('ui-ready');
    }
  }

  // ---- DETECTAR CUANDO REACT MONTA EN #root ----
  function onAppMounted(cb) {
    const root = document.getElementById('root');
    if (!root) { cb(); return; }
    if (root.childElementCount > 0) { cb(); return; }
    const obs = new MutationObserver(() => {
      if (root.childElementCount > 0) {
        obs.disconnect();
        cb();
      }
    });
    obs.observe(root, { childList: true, subtree: false });
    setTimeout(() => {
      if (root.childElementCount > 0) { try { obs.disconnect(); } catch{} cb(); }
    }, 2000);
  }

  // ---- MARCAR PANTALLAS (agregar .menu-screen + ocultar salvo la principal) ----
  function markScreens() {
    const found = [];
    SCREEN_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.classList.add('menu-screen');
        found.push(el);
      }
    });
    // Si encontramos pantallas, dejamos visible solo la primera (mainMenu si existe)
    if (found.length) {
      // quitar is-active de todas
      found.forEach(x => x.classList.remove('is-active'));
      // priorizar mainMenu si existe, si no, la primera que haya
      const main = document.getElementById('mainMenu') || found[0];
      if (main) main.classList.add('is-active');
    }
  }

  // ---- CAMBIO DE PANTALLA CON ANIMACIÓN ----
  function showScreen(targetId) {
    const target = document.getElementById(targetId);
    if (!target) return;
    const screens = $$('.menu-screen');
    // ya está activa
    if (target.classList.contains('is-active')) return;

    document.body.classList.add('leaving'); // dispara fadeOut en botones
    setTimeout(() => {
      screens.forEach(s => s.classList.remove('is-active'));
      target.classList.add('is-active');
      document.body.classList.remove('leaving');
    }, 220); // coincide con duración de fadeOut CSS
  }

  // ---- HOME: volver al inicio (recarga limpia) ----
  function goHome() {
    document.body.classList.add('leaving');
    setTimeout(() => {
      window.location.reload();
    }, 220);
  }

  // ---- POST-LOGIN LOADER (usa el evento custom) ----
  window.addEventListener('auth:login:success', () => {
    document.body.classList.add('loading');
    if (loginLoader) loginLoader.style.display = 'flex';
    setTimeout(() => {
      document.body.classList.remove('loading');
      if (loginLoader) loginLoader.style.display = 'none';
    }, 1200);
  });

  // ---- AUTO-ENLACES POR TEXTO (opcional, no rompe si no encuentra) ----
  // Intenta detectar botones típicos y asignar navegación:
  //  - “Ingresar”  -> passwordMenu
  //  - “Inicio”/“Home” -> mainMenu
  function autoWireButtons() {
    const btns = $$('button, [role="button"]');
    btns.forEach((btn) => {
      const t = (btn.textContent || '').trim().toLowerCase();
      if (!t) return;

      // evitar reasignar si ya tiene listener
      if (btn.__wired) return;

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
          btn.__wired = true;
        } else {
          // si no hay mainMenu definido, que actúe de HOME (recarga limpia)
          btn.addEventListener('click', goHome);
          btn.__wired = true;
        }
      }
    });
  }

  // ---- EXPONER UNA API MUY SIMPLE (por si alguien te ayuda con React) ----
  // Se puede llamar desde cualquier handler: window.goScreen('passwordMenu')
  window.goScreen = showScreen;

  // ---- INIT ----
  document.addEventListener('DOMContentLoaded', () => {
    startPreloader();
    onAppMounted(() => {
      endPreloader();
      markScreens();
      autoWireButtons();

      if (homeBtn) homeBtn.addEventListener('click', goHome);
      // Si React re-renderiza y mete los IDs después, probamos re-marcar y re-enlazar:
      setTimeout(() => { markScreens(); autoWireButtons(); }, 400);
      setTimeout(() => { markScreens(); autoWireButtons(); }, 1200);
    });
  });
})();

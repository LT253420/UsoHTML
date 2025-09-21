// assets/ux-overrides.js

(function () {
  const $ = (sel) => document.querySelector(sel);
  const pre = $('#preloader');
  const fill = $('#preFill');
  const pct = $('#prePercent');
  const homeBtn = $('#homeBtn');

  // --- 1) Simular barra de carga inicial y ocultar preloader cuando la app "está lista" ---
  let progress = 0;
  let tick;

  function setProgress(v) {
    progress = Math.max(0, Math.min(100, v|0));
    if (fill) fill.style.width = progress + '%';
    if (pct) pct.textContent = progress + '%';
  }

  function startPreloader() {
    setProgress(0);
    // progreso simulado mientras el bundle monta React:
    tick = setInterval(() => {
      // acelera al principio, desacelera al final
      const inc = progress < 60 ? 7 : progress < 85 ? 4 : 2;
      setProgress(progress + inc);
      if (progress >= 96) {
        clearInterval(tick);
      }
    }, 120);
  }

  function endPreloader() {
    try { clearInterval(tick); } catch {}
    setProgress(100);
    if (pre) {
      pre.classList.add('hide'); // animación de salida
      setTimeout(() => {
        pre.style.display = 'none';
        document.body.classList.add('ui-ready'); // habilita HOME y muestra #root
      }, 240);
    } else {
      document.body.classList.add('ui-ready');
    }
  }

  // Detectar cuándo React montó algo en #root
  function onAppMounted(cb) {
    const root = document.getElementById('root');
    if (!root) { cb(); return; }
    const obs = new MutationObserver((muts) => {
      // en cuanto haya un primer hijo "visible", consideramos montada la app
      if (root.childElementCount > 0) {
        obs.disconnect();
        cb();
      }
    });
    obs.observe(root, { childList: true, subtree: false });
    // fallback por si tarda mucho o ya montó
    setTimeout(() => { if (root.childElementCount > 0) { try { obs.disconnect(); } catch{} cb(); } }, 2000);
  }

  // --- 2) HOME: animación de salida y volver al estado inicial ---
  function goHome() {
    // animación de salida de los botones/pantallas
    document.body.classList.add('leaving');
    // Pequeño delay para que se vea el fadeOut y luego recarga limpia
    setTimeout(() => {
      // Opción A (segura con React): recargar
      window.location.reload();
      // Opción B (si preferís sin recargar y tu app responde a navegación):
      // window.history.pushState({}, "", "/");
      // window.dispatchEvent(new Event("popstate"));
    }, 220);
  }

  // --- 3) Post-login loader (si disparás el evento 'auth:login:success') ---
  window.addEventListener('auth:login:success', () => {
    document.body.classList.add('loading');
    const loginLoader = document.getElementById('loginLoader');
    if (loginLoader) loginLoader.style.display = 'flex';
    setTimeout(() => {
      document.body.classList.remove('loading');
      if (loginLoader) loginLoader.style.display = 'none';
    }, 1200);
  });

  // --- Init ---
  document.addEventListener('DOMContentLoaded', () => {
    startPreloader();
    onAppMounted(() => {
      endPreloader();
      // Mostrar HOME y enganchar click
      if (homeBtn) {
        homeBtn.addEventListener('click', goHome);
        // ya se muestra con body.ui-ready vía CSS
      }
    });
  });
})();

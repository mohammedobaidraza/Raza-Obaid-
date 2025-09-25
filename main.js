/* ========== NAV DRAWER ========== */
(function(){
  function ready(fn){ document.readyState === 'loading' ? document.addEventListener('DOMContentLoaded', fn) : fn(); }

  ready(function(){
    const btn = document.querySelector('.hamburger');
    const drawer = document.getElementById('primary-drawer');
    const backdrop = document.querySelector('.nav-backdrop');
    if (!btn || !drawer || !backdrop) return;

    // Focusable elements selector
    const FOCUS = 'a, button, input, select, textarea, [tabindex]:not([tabindex="-1"])';
    let firstFocus, lastFocus;

    function setAria(open){
      btn.setAttribute('aria-expanded', String(open));
      drawer.setAttribute('aria-hidden', String(!open));
      document.body.classList.toggle('nav-open', open);
    }

    function openDrawer(){
      drawer.classList.add('open');
      backdrop.hidden = false;
      requestAnimationFrame(()=>backdrop.classList.add('show'));
      btn.classList.add('is-open');
      setAria(true);

      const focusables = drawer.querySelectorAll(FOCUS);
      firstFocus = focusables[0]; lastFocus = focusables[focusables.length - 1];
      firstFocus && firstFocus.focus();
      document.addEventListener('keydown', onKeyDown);
      document.addEventListener('click', onOutside, true);
    }

    function closeDrawer(){
      drawer.classList.remove('open');
      backdrop.classList.remove('show');
      btn.classList.remove('is-open');
      setAria(false);
      setTimeout(()=>{ backdrop.hidden = true; }, 180);
      btn.focus();
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('click', onOutside, true);
    }

    function onKeyDown(e){
      if (e.key === 'Escape') { e.preventDefault(); closeDrawer(); }
      if (e.key === 'Tab' && drawer.classList.contains('open')){
        const focusables = drawer.querySelectorAll(FOCUS);
        if (!focusables.length) return;
        const first = focusables[0], last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first){ e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last){ e.preventDefault(); first.focus(); }
      }
    }

    function onOutside(e){
      if (drawer.contains(e.target) || btn.contains(e.target)) return;
      closeDrawer();
    }

    btn.addEventListener('click', (e)=>{ e.preventDefault(); drawer.classList.contains('open') ? closeDrawer() : openDrawer(); }, {passive:false});
    btn.addEventListener('touchstart', ()=>{ drawer.classList.contains('open') ? closeDrawer() : openDrawer(); }, {passive:true});
    backdrop.addEventListener('click', closeDrawer);

    // Close drawer when clicking a link
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeDrawer);
      a.addEventListener('touchstart', closeDrawer, {passive:true});
    });
  });
})();
/* -----------------------------
   NAV TOGGLE (runs first)
------------------------------*/
(function setupNavToggle(){
  function ready(fn){ document.readyState==='loading' ? document.addEventListener('DOMContentLoaded', fn) : fn(); }
  ready(function(){
    var toggle = document.querySelector('.nav-toggle');
    var nav = document.getElementById('primary-nav');
    if(!toggle || !nav) return;

    function setOpen(open){
      nav.classList.toggle('open', open);
      toggle.classList.toggle('is-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      document.body.classList.toggle('nav-open', open);
    }
    function onToggle(e){ if(e) e.preventDefault(); setOpen(!nav.classList.contains('open')); }

    toggle.addEventListener('click', onToggle, { passive:false });
    toggle.addEventListener('touchstart', onToggle, { passive:true });
    nav.querySelectorAll('a').forEach(function(a){
      function close(){ setOpen(false); }
      a.addEventListener('click', close);
      a.addEventListener('touchstart', close, { passive:true });
    });
  });
})();

/* -----------------------------
   THREE.JS BACKGROUND (safe)
------------------------------*/
(function startBackground(){
  if (typeof THREE === 'undefined') {
    // Three not loaded (offline/CDN blocked) — skip gracefully.
    return;
  }
  let scene, camera, renderer, particles, mouseX=0, mouseY=0;

  function init(){
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
    camera.position.set(0, 0, 60);

    renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x0e0e10, 1);

    scene.fog = new THREE.FogExp2(0x0e0e10, 0.02);

    const count = 2000;
    const positions = new Float32Array(count * 3);
    for(let i=0;i<count;i++){
      positions[i*3+0] = (Math.random()-0.5) * 300;
      positions[i*3+1] = (Math.random()-0.5) * 200;
      positions[i*3+2] = (Math.random()-0.5) * 200;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const material = new THREE.PointsMaterial({ size: 0.9, color: 0xbfbfbf, transparent: true, opacity: 0.55 });
    particles = new THREE.Points(geometry, material);
    scene.add(particles);

    const light = new THREE.PointLight(0xffffff, 20, 200);
    light.position.set(0, 10, 20);
    scene.add(light);

    window.addEventListener('resize', onResize);
    document.addEventListener('mousemove', onMouseMove);

    const y = document.getElementById('year');
    if (y) y.textContent = new Date().getFullYear();

    animate();
  }

  function onResize(){
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  function onMouseMove(e){
    const nx = (e.clientX / window.innerWidth) * 2 - 1;
    const ny = (e.clientY / window.innerHeight) * 2 - 1;
    mouseX = nx; mouseY = ny;
  }

  function animate(){
    requestAnimationFrame(animate);
    camera.position.x += (mouseX*3 - camera.position.x) * 0.02;
    camera.position.y += (mouseY*-2 - camera.position.y) * 0.02;
    particles.rotation.y += 0.0008;
    particles.rotation.x += 0.0002;
    renderer.render(scene, camera);
  }

  init();
})();

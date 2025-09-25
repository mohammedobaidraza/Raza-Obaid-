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

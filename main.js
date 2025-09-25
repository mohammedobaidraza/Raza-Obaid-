
/* Minimal Three.js ambient scene in grayscale with subtle motion */
let scene, camera, renderer, particles, mouseX=0, mouseY=0;

function init(){
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 60);

  renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('bg'), antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x0e0e10, 1);

  // Fog for depth
  scene.fog = new THREE.FogExp2(0x0e0e10, 0.02);

  // Star-like particles (but monochrome)
  const count = 2500;
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

  // Soft vignette light
  const light = new THREE.PointLight(0xffffff, 20, 200);
  light.position.set(0, 10, 20);
  scene.add(light);

  window.addEventListener('resize', onResize);
  document.addEventListener('mousemove', onMouseMove);

  // Footer year
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
  // Subtle parallax
  camera.position.x += (mouseX*3 - camera.position.x) * 0.02;
  camera.position.y += (mouseY*-2 - camera.position.y) * 0.02;
  particles.rotation.y += 0.0008;
  particles.rotation.x += 0.0002;
  renderer.render(scene, camera);
}

init();

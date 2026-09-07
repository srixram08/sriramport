/**
 * 3D Minimalist Dark-on-White Particle Field & Fluid Waves for Sriram S Portfolio
 * Pure White Background with Deep Charcoal & Slate 3D Geometry
 */

(function () {
  const container = document.getElementById('three-canvas-container');
  if (!container || typeof THREE === 'undefined') return;

  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 2500);
  camera.position.set(0, 0, 420);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "high-performance" });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // 1. Dynamic Dark Fluid Wave Ribbons
  const ribbons = [];
  const ribbonCount = 3;
  const ribbonSegments = 70;

  for (let r = 0; r < ribbonCount; r++) {
    const geom = new THREE.PlaneGeometry(1600, 320, ribbonSegments, 14);
    
    // Deep slate / charcoal shades
    const col = r === 0 ? 0x09090b : (r === 1 ? 0x27272a : 0x71717a);
    const opacity = r === 0 ? 0.08 : (r === 1 ? 0.05 : 0.03);

    const mat = new THREE.MeshBasicMaterial({
      color: col,
      wireframe: true,
      transparent: true,
      opacity: opacity,
      side: THREE.DoubleSide
    });

    const mesh = new THREE.Mesh(geom, mat);
    mesh.position.set(0, 130 - r * 50, -180 - r * 70);
    mesh.rotation.x = Math.PI * 0.18 + (r * 0.04);
    mesh.rotation.z = (r % 2 === 0 ? 1 : -1) * 0.08;

    const posAttr = geom.attributes.position;
    const initialPositions = posAttr.array.slice();

    ribbons.push({
      mesh: mesh,
      initialPositions: initialPositions,
      speed: 0.0016 + r * 0.0005,
      waveScale: 25 + r * 6,
      freq: 0.01 + r * 0.003
    });

    scene.add(mesh);
  }

  // 2. High-Contrast Charcoal & Black Dots
  const starsCount = 1400;
  const starsGeometry = new THREE.BufferGeometry();
  const starPositions = new Float32Array(starsCount * 3);
  const starColors = new Float32Array(starsCount * 3);

  for (let i = 0; i < starsCount; i++) {
    starPositions[i * 3] = (Math.random() - 0.5) * 2200;
    starPositions[i * 3 + 1] = (Math.random() - 0.5) * 1600;
    starPositions[i * 3 + 2] = (Math.random() - 0.5) * 1800;

    const rand = Math.random();
    let val = 0.1; // Deep dark
    if (rand > 0.7) val = 0.25;
    else if (rand > 0.4) val = 0.45;
    else val = 0.6;

    starColors[i * 3] = val;
    starColors[i * 3 + 1] = val;
    starColors[i * 3 + 2] = val;
  }

  starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
  starsGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

  const starsMaterial = new THREE.PointsMaterial({
    size: 2.2,
    vertexColors: true,
    transparent: true,
    opacity: 0.7
  });
  const starField = new THREE.Points(starsGeometry, starsMaterial);
  scene.add(starField);

  // 3. Dark Wireframe Globe & Satellite
  const globeGroup = new THREE.Group();
  const globeRadius = 140;
  const globeGeom = new THREE.SphereGeometry(globeRadius, 32, 32);
  const globeMat = new THREE.MeshBasicMaterial({
    color: 0x18181b,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  const globeMesh = new THREE.Mesh(globeGeom, globeMat);
  globeGroup.add(globeMesh);

  // Ring around globe
  const ringGeom = new THREE.TorusGeometry(globeRadius * 1.06, 0.8, 16, 90);
  const ringMat = new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.18 });
  const ringMesh = new THREE.Mesh(ringGeom, ringMat);
  ringMesh.rotation.x = Math.PI / 2.8;
  globeGroup.add(ringMesh);

  // Satellite
  const satGroup = new THREE.Group();
  const satBody = new THREE.Mesh(new THREE.BoxGeometry(5, 3, 2), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  const satWings = new THREE.Mesh(new THREE.BoxGeometry(16, 1.8, 0.4), new THREE.MeshBasicMaterial({ color: 0x3f3f46 }));
  satGroup.add(satBody, satWings);
  satGroup.position.set(globeRadius + 45, 20, 0);
  globeGroup.add(satGroup);

  globeGroup.position.set(0, -60, -80);
  scene.add(globeGroup);

  // Mouse & Scroll Parallax
  let mouseX = 0, mouseY = 0;
  let targetRotationX = 0, targetRotationY = 0;
  const windowHalfX = window.innerWidth / 2;
  const windowHalfY = window.innerHeight / 2;

  document.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX - windowHalfX) * 0.0006;
    mouseY = (e.clientY - windowHalfY) * 0.0006;
  }, { passive: true });

  let scrollProgress = 0;
  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollProgress = totalHeight > 0 ? window.scrollY / totalHeight : 0;
  }, { passive: true });

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Animation Loop
  let clock = new THREE.Clock();

  function animate() {
    requestAnimationFrame(animate);
    const time = clock.getElapsedTime();

    // Wave motion
    ribbons.forEach((ribbon, idx) => {
      const posAttr = ribbon.mesh.geometry.attributes.position;
      const arr = posAttr.array;
      const initial = ribbon.initialPositions;

      for (let i = 0; i < arr.length; i += 3) {
        const x = initial[i];
        const y = initial[i + 1];
        const wave1 = Math.sin((x * ribbon.freq) + (time * ribbon.speed * 800)) * ribbon.waveScale;
        const wave2 = Math.cos((y * 0.015) + (time * 1.2)) * (ribbon.waveScale * 0.4);
        arr[i + 2] = initial[i + 2] + wave1 + wave2;
      }
      posAttr.needsUpdate = true;
      ribbon.mesh.rotation.z = Math.sin(time * 0.2 + idx) * 0.04;
    });

    // Globe rotation
    globeMesh.rotation.y += 0.002;
    ringMesh.rotation.z += 0.0025;
    satGroup.position.x = Math.cos(time * 0.8) * (globeRadius + 50);
    satGroup.position.z = Math.sin(time * 0.8) * (globeRadius + 50);
    satGroup.position.y = Math.sin(time * 1.6) * 35;
    satGroup.rotation.y = time * 1.2;

    // Parallax
    targetRotationY += (mouseX - targetRotationY) * 0.05;
    targetRotationX += (mouseY - targetRotationX) * 0.05;

    camera.position.x = targetRotationY * 80;
    camera.position.y = -targetRotationX * 60 - (scrollProgress * 100);
    camera.lookAt(0, -scrollProgress * 80, 0);

    starField.rotation.y = time * 0.006;

    renderer.render(scene, camera);
  }

  animate();
})();

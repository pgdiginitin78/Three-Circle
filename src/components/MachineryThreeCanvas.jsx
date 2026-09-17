import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function MachineryThreeCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;
    if (!mountNode) return;

    const width = mountNode.clientWidth;
    const height = mountNode.clientHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(55, width / height, 0.1, 1000);
    camera.position.set(0, 4, 18);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountNode.appendChild(renderer.domElement);

    // Main group for mouse interaction
    const mainGroup = new THREE.Group();
    scene.add(mainGroup);

    // 1. 3D Architectural Tech Perspective Grid (Terrain floor)
    const gridHelper = new THREE.GridHelper(40, 30, 0xd4af37, 0x1e293b);
    gridHelper.position.y = -6;
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.35;
    mainGroup.add(gridHelper);

    // 2. Floating 3D Geometric Rectangular Cubes Matrix (Industrial & Mechanical block feel)
    const cubeGroup = new THREE.Group();
    mainGroup.add(cubeGroup);

    const cubeMaterials = [
      new THREE.MeshStandardMaterial({
        color: 0xd4af37, // Gold metallic
        metalness: 0.9,
        roughness: 0.2,
      }),
      new THREE.MeshStandardMaterial({
        color: 0x00e5ff, // Cyan wireframe/glass feel
        metalness: 0.7,
        roughness: 0.3,
        transparent: true,
        opacity: 0.8,
      }),
      new THREE.MeshBasicMaterial({
        color: 0xffaa00,
        wireframe: true,
        transparent: true,
        opacity: 0.4,
      }),
    ];

    const cubes = [];
    const numCubes = 28;

    for (let i = 0; i < numCubes; i++) {
      // Random sizes (rectangular blocks, square cubes, beams)
      const w = 0.3 + Math.random() * 0.9;
      const h = 0.3 + Math.random() * 0.9;
      const d = 0.3 + Math.random() * 0.9;
      const geometry = new THREE.BoxGeometry(w, h, d);

      const matIndex = Math.floor(Math.random() * cubeMaterials.length);
      const mesh = new THREE.Mesh(geometry, cubeMaterials[matIndex]);

      // Spread in 3D space around center-right side
      const posX = (Math.random() - 0.3) * 16;
      const posY = (Math.random() - 0.4) * 10;
      const posZ = (Math.random() - 0.5) * 12;

      mesh.position.set(posX, posY, posZ);
      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );

      cubeGroup.add(mesh);

      cubes.push({
        mesh,
        rotSpeedX: (Math.random() - 0.5) * 0.008,
        rotSpeedY: (Math.random() - 0.5) * 0.008,
        rotSpeedZ: (Math.random() - 0.5) * 0.008,
        floatSpeed: 0.005 + Math.random() * 0.01,
        floatAmp: 0.3 + Math.random() * 0.5,
        initialY: posY,
        phase: Math.random() * Math.PI * 2,
      });
    }

    // 3. Ambient Industrial Dust Particle Field (Subtle floating light specks)
    const particleCount = 350;
    const particleGeo = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 25;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 25;
    }

    particleGeo.setAttribute(
      "position",
      new THREE.BufferAttribute(positions, 3)
    );

    const particleMat = new THREE.PointsMaterial({
      color: 0xd4af37,
      size: 0.09,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xd4af37, 2.2);
    dirLight1.position.set(12, 15, 10);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x00e5ff, 1.8);
    dirLight2.position.set(-12, -10, -5);
    scene.add(dirLight2);

    // Mouse Parallax Interaction
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      const windowHalfX = window.innerWidth / 2;
      const windowHalfY = window.innerHeight / 2;
      mouseX = (e.clientX - windowHalfX) * 0.0005;
      mouseY = (e.clientY - windowHalfY) * 0.0005;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation Loop
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse lerp
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      mainGroup.rotation.y = elapsedTime * 0.04 + targetX;
      mainGroup.rotation.x = Math.sin(elapsedTime * 0.1) * 0.05 + targetY;

      // Animate 3D Cubes floating & rotating
      cubes.forEach((item) => {
        item.mesh.rotation.x += item.rotSpeedX;
        item.mesh.rotation.y += item.rotSpeedY;
        item.mesh.rotation.z += item.rotSpeedZ;

        item.mesh.position.y =
          item.initialY + Math.sin(elapsedTime * item.floatSpeed * 3 + item.phase) * item.floatAmp;
      });

      // Slowly drift grid & particles
      particleSystem.rotation.y = elapsedTime * 0.02;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // Resize Handler
    const handleResize = () => {
      if (!mountNode) return;
      const newW = mountNode.clientWidth;
      const newH = mountNode.clientHeight;
      camera.aspect = newW / newH;
      camera.updateProjectionMatrix();
      renderer.setSize(newW, newH);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      if (mountNode && mountNode.contains(renderer.domElement)) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
      gridHelper.geometry.dispose();
      gridHelper.material.dispose();
      cubeMaterials.forEach((m) => m.dispose());
      particleGeo.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 z-0 pointer-events-none opacity-75"
    />
  );
}

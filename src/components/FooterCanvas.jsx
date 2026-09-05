import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function FooterScene() {
  const groupRef = useRef();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const { buildingLines, gridPoints } = useMemo(() => {
    const lines = [];
    const width = 16;
    const depth = 16;
    const height = 12;
    const cols = 5;
    const floors = 6;
    const spacingX = width / cols;
    const spacingZ = depth / cols;
    const floorH = height / floors;

    for (let f = 0; f <= floors; f++) {
      const y = -5 + f * floorH;
      for (let i = 0; i <= cols; i++) {
        const x = -width / 2 + i * spacingX;
        lines.push(new THREE.Vector3(x, y, -depth / 2));
        lines.push(new THREE.Vector3(x, y, depth / 2));
      }
      for (let j = 0; j <= cols; j++) {
        const z = -depth / 2 + j * spacingZ;
        lines.push(new THREE.Vector3(-width / 2, y, z));
        lines.push(new THREE.Vector3(width / 2, y, z));
      }
    }

    for (let i = 0; i <= cols; i++) {
      for (let j = 0; j <= cols; j++) {
        const x = -width / 2 + i * spacingX;
        const z = -depth / 2 + j * spacingZ;
        lines.push(new THREE.Vector3(x, -5, z));
        lines.push(new THREE.Vector3(x, -5 + height, z));
      }
    }

    const pts = new Float32Array(150 * 3);
    for (let i = 0; i < 150; i++) {
      pts[i * 3] = (Math.random() - 0.5) * 24;
      pts[i * 3 + 1] = Math.random() * 14 - 6;
      pts[i * 3 + 2] = (Math.random() - 0.5) * 24;
    }

    const lineGeom = new THREE.BufferGeometry().setFromPoints(lines);
    const pointGeom = new THREE.BufferGeometry();
    pointGeom.setAttribute('position', new THREE.BufferAttribute(pts, 3));

    return { buildingLines: lineGeom, gridPoints: pointGeom };
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion || !groupRef.current) return;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.y = t * 0.04;
    groupRef.current.rotation.x = Math.sin(t * 0.02) * 0.05 + 0.15;
  });

  return (
    <group ref={groupRef} position={[0, -2, -6]} scale={[0.85, 0.85, 0.85]}>
      <lineSegments geometry={buildingLines}>
        <lineBasicMaterial color="var(--color-brand-gold)" transparent opacity={0.09} />
      </lineSegments>
      <points geometry={gridPoints}>
        <pointsMaterial size={0.04} color="var(--color-brand-gold)" transparent opacity={0.35} sizeAttenuation />
      </points>
    </group>
  );
}

export default function FooterCanvas() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    }, { threshold: 0.05 });

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-60">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={[1, Math.min(window.devicePixelRatio || 1, 1.5)]}
          gl={{ alpha: true, antialias: false, powerPreference: 'low-power' }}
        >
          <FooterScene />
        </Canvas>
      )}
    </div>
  );
}

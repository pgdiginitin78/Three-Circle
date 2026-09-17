import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function MiningScene() {
  const meshGroupRef = useRef();
  const pointsRef = useRef();

  const { wireGeometry, pointsGeometry } = useMemo(() => {
    // 3D Polyhedral Rock/Mining Crystal Geometries
    const icosaGeom = new THREE.IcosahedronGeometry(4, 1);
    const wireGeom = new THREE.WireframeGeometry(icosaGeom);

    // Floating 3D Gold/Dust Particles
    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 35;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 22;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }

    const ptsGeom = new THREE.BufferGeometry();
    ptsGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return { wireGeometry: wireGeom, pointsGeometry: ptsGeom };
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshGroupRef.current) {
      meshGroupRef.current.rotation.y = t * 0.08;
      meshGroupRef.current.rotation.x = Math.sin(t * 0.05) * 0.12;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -t * 0.04;
      pointsRef.current.rotation.z = Math.cos(t * 0.03) * 0.05;
    }
  });

  return (
    <group position={[0, 0, -5]}>
      {/* Floating Ambient Gold Particles */}
      <points ref={pointsRef} geometry={pointsGeometry}>
        <pointsMaterial size={0.09} color="#F59E0B" transparent opacity={0.55} sizeAttenuation />
      </points>
    </group>
  );
}

export default function MiningHeroCanvas() {
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
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-hidden opacity-80">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={[1, Math.min(window.devicePixelRatio || 1, 1.5)]}
          gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        >
          <ambientLight intensity={0.5} />
          <MiningScene />
        </Canvas>
      )}
    </div>
  );
}

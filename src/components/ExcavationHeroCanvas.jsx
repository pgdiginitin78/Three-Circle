import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

function ExcavationScene() {
  const meshGroupRef = useRef();
  const particlesRef = useRef();

  const pointsGeometry = useMemo(() => {
    // Floating 3D Gold / Amber Ambient Dust Particles
    const count = 280;
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 38;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 24;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
    }

    const ptsGeom = new THREE.BufferGeometry();
    ptsGeom.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    return ptsGeom;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (particlesRef.current) {
      particlesRef.current.rotation.y = -t * 0.035;
      particlesRef.current.rotation.x = Math.sin(t * 0.04) * 0.08;
      particlesRef.current.rotation.z = Math.cos(t * 0.03) * 0.05;
    }
  });

  return (
    <group position={[0, 0, -5]} ref={meshGroupRef}>
      {/* Floating Ambient Amber / Gold Particles (No Wireframe Grid) */}
      <points ref={particlesRef} geometry={pointsGeometry}>
        <pointsMaterial size={0.1} color="#F59E0B" transparent opacity={0.55} sizeAttenuation />
      </points>
    </group>
  );
}

export default function ExcavationHeroCanvas() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full pointer-events-none z-15 overflow-hidden opacity-85">
      {isVisible && (
        <Canvas
          camera={{ position: [0, 0, 10], fov: 45 }}
          dpr={[1, Math.min(window.devicePixelRatio || 1, 1.5)]}
          gl={{ alpha: true, antialias: true, powerPreference: 'low-power' }}
        >
          <ambientLight intensity={0.6} />
          <ExcavationScene />
        </Canvas>
      )}
    </div>
  );
}

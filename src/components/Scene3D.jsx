import React, { useRef, useState, useEffect, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

function ThreeCirclesScene() {
  const groupRef = useRef();
  const ring1Ref = useRef();
  const ring2Ref = useRef();
  const ring3Ref = useRef();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { mouse } = useThree();

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  const pointsPosition = useMemo(() => {
    const pos = new Float32Array(300 * 3);
    for (let i = 0; i < 300 * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion) return;

    const time = state.clock.getElapsedTime();

    if (ring1Ref.current) {
      ring1Ref.current.rotation.x = time * 0.05;
      ring1Ref.current.rotation.y = time * 0.08;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y = -time * 0.06;
      ring2Ref.current.rotation.z = time * 0.04;
    }
    if (ring3Ref.current) {
      ring3Ref.current.rotation.x = -time * 0.03;
      ring3Ref.current.rotation.z = -time * 0.09;
    }

    if (groupRef.current) {
      const targetX = mouse.x * 1.5;
      const targetY = mouse.y * 1.5;
      groupRef.current.position.x += (targetX - groupRef.current.position.x) * 0.05;
      groupRef.current.position.y += (targetY - groupRef.current.position.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <mesh ref={ring1Ref}>
        <ringGeometry args={[2.0, 2.015, 64]} />
        <meshBasicMaterial color="#d4af37" transparent opacity={0.3} side={2} />
      </mesh>
      <mesh ref={ring2Ref}>
        <ringGeometry args={[2.4, 2.412, 64]} />
        <meshBasicMaterial color="#111111" transparent opacity={0.15} side={2} />
      </mesh>
      <mesh ref={ring3Ref}>
        <ringGeometry args={[2.8, 2.81, 64]} />
        <meshBasicMaterial color="#111111" transparent opacity={0.08} side={2} />
      </mesh>
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[pointsPosition, 3]}
          />
        </bufferGeometry>
        <pointsMaterial size={0.035} color="#111111" transparent opacity={0.2} sizeAttenuation />
      </points>
    </group>
  );
}

export default function Scene3D() {
  return (
    <div style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: 1,
      overflow: 'hidden'
    }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ alpha: true, antialias: true }}
      >
        <ThreeCirclesScene />
      </Canvas>
    </div>
  );
}

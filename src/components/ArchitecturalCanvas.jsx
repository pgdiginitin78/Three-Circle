import React, { useRef, useState, useEffect, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

function TowerCrane({ position = [1.6, -1.8, -1.3], scale = 0.75 }) {
  const craneRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (craneRef.current) {
      craneRef.current.rotation.y = Math.sin(t * 0.3) * 0.4 + 0.1;
    }
  });

  const cableGeom = useMemo(() => {
    const pts = [
      new THREE.Vector3(0, 1.4, 0),
      new THREE.Vector3(2.6, 0.15, 0),
      new THREE.Vector3(0, 1.4, 0),
      new THREE.Vector3(4.8, 0.15, 0),
      new THREE.Vector3(0, 1.4, 0),
      new THREE.Vector3(-2.2, 0.15, 0),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group position={position} scale={[scale, scale, scale]}>
      <mesh position={[0, 3.4, 0]}>
        <boxGeometry args={[0.24, 6.8, 0.24]} />
        <meshBasicMaterial
          color="#d4af37"
          wireframe
          transparent
          opacity={0.7}
        />
      </mesh>

      <group ref={craneRef} position={[0, 6.8, 0]}>
        <mesh position={[0.2, 0.1, 0.1]}>
          <boxGeometry args={[0.28, 0.4, 0.28]} />
          <meshBasicMaterial
            color="#1e293b"
            wireframe
            transparent
            opacity={0.6}
          />
        </mesh>

        <mesh position={[2.5, 0.15, 0]}>
          <boxGeometry args={[5.0, 0.2, 0.2]} />
          <meshBasicMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>

        <mesh position={[-1.2, 0.15, 0]}>
          <boxGeometry args={[2.4, 0.2, 0.2]} />
          <meshBasicMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={0.7}
          />
        </mesh>
        <mesh position={[-2.1, -0.1, 0]}>
          <boxGeometry args={[0.65, 0.4, 0.4]} />
          <meshBasicMaterial color="#0f172a" transparent opacity={0.6} />
        </mesh>

        <mesh position={[0, 0.7, 0]}>
          <coneGeometry args={[0.24, 1.4, 4]} />
          <meshBasicMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={0.75}
          />
        </mesh>

        <lineSegments geometry={cableGeom}>
          <lineBasicMaterial color="#d4af37" transparent opacity={0.6} />
        </lineSegments>

        <mesh position={[2.8, -0.65, 0]}>
          <cylinderGeometry args={[0.008, 0.008, 1.3]} />
          <meshBasicMaterial color="#d4af37" transparent opacity={0.8} />
        </mesh>
        <mesh position={[2.8, -1.35, 0]}>
          <octahedronGeometry args={[0.12]} />
          <meshBasicMaterial
            color="#d4af37"
            wireframe
            transparent
            opacity={0.95}
          />
        </mesh>
      </group>
    </group>
  );
}

function Building3D() {
  const floors = 5;
  const gridX = 3;
  const gridZ = 3;
  const spacingX = 1.05;
  const spacingZ = 1.05;
  const floorHeight = 0.76;

  const width = (gridX - 1) * spacingX;
  const depth = (gridZ - 1) * spacingZ;
  const baseY = -1.8;

  const { columnMeshes, rebarLines, perimeterLines } = useMemo(() => {
    const cols = [];
    const rebars = [];
    const perim = [];

    for (let i = 0; i < gridX; i++) {
      for (let j = 0; j < gridZ; j++) {
        const x = (i - (gridX - 1) / 2) * spacingX;
        const z = (j - (gridZ - 1) / 2) * spacingZ;
        const totalH = floors * floorHeight;

        cols.push({
          pos: [x, baseY + totalH / 2, z],
          h: totalH,
        });

        rebars.push(new THREE.Vector3(x, baseY + totalH, z));
        rebars.push(new THREE.Vector3(x, baseY + totalH + 0.4, z));
      }
    }

    for (let f = 1; f <= floors; f++) {
      const y = baseY + f * floorHeight;
      const hw = width / 2 + 0.07;
      const hd = depth / 2 + 0.07;

      perim.push(
        new THREE.Vector3(-hw, y + 0.12, -hd),
        new THREE.Vector3(hw, y + 0.12, -hd),
      );
      perim.push(
        new THREE.Vector3(hw, y + 0.12, -hd),
        new THREE.Vector3(hw, y + 0.12, hd),
      );
      perim.push(
        new THREE.Vector3(hw, y + 0.12, hd),
        new THREE.Vector3(-hw, y + 0.12, hd),
      );
      perim.push(
        new THREE.Vector3(-hw, y + 0.12, hd),
        new THREE.Vector3(-hw, y + 0.12, -hd),
      );
    }

    const rebarGeom = new THREE.BufferGeometry().setFromPoints(rebars);
    const perimGeom = new THREE.BufferGeometry().setFromPoints(perim);

    return {
      columnMeshes: cols,
      rebarLines: rebarGeom,
      perimeterLines: perimGeom,
    };
  }, [
    floors,
    gridX,
    gridZ,
    spacingX,
    spacingZ,
    floorHeight,
    width,
    depth,
    baseY,
  ]);

  return (
    <group>
      {Array.from({ length: floors }).map((_, idx) => {
        const y = baseY + idx * floorHeight;
        return (
          <group key={idx} position={[0, y, 0]}>
            <mesh>
              <boxGeometry args={[width + 0.38, 0.08, depth + 0.38]} />
              <meshBasicMaterial color="#cbd5e1" transparent opacity={0.35} />
            </mesh>
            <mesh>
              <boxGeometry args={[width + 0.385, 0.085, depth + 0.385]} />
              <meshBasicMaterial
                color="#d4af37"
                wireframe
                transparent
                opacity={0.65}
              />
            </mesh>
          </group>
        );
      })}

      {columnMeshes.map((col, idx) => (
        <group key={idx} position={col.pos}>
          <mesh>
            <boxGeometry args={[0.16, col.h, 0.16]} />
            <meshBasicMaterial color="#1e293b" transparent opacity={0.25} />
          </mesh>
          <mesh>
            <boxGeometry args={[0.165, col.h + 0.01, 0.165]} />
            <meshBasicMaterial
              color="#d4af37"
              wireframe
              transparent
              opacity={0.7}
            />
          </mesh>
        </group>
      ))}

      <lineSegments geometry={rebarLines}>
        <lineBasicMaterial color="#d4af37" transparent opacity={0.9} />
      </lineSegments>

      <lineSegments geometry={perimeterLines}>
        <lineBasicMaterial color="#1e293b" transparent opacity={0.4} />
      </lineSegments>

      <mesh position={[0, baseY + (floors * floorHeight) / 2, 0]}>
        <boxGeometry args={[0.8, floors * floorHeight + 0.25, 0.8]} />
        <meshBasicMaterial
          color="#0f172a"
          wireframe
          transparent
          opacity={0.32}
        />
      </mesh>
    </group>
  );
}

function Scene3D() {
  const worldRef = useRef();
  const scanBeamRef = useRef();
  const mousePos = useRef({ x: 0, y: 0 });
  const rotTarget = useRef({ x: 0.1, y: 0.5 });
  const autoAngle = useRef(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const { viewport, size } = useThree();

  const { responsiveX, responsiveY, responsiveScale } = useMemo(() => {
    const vpW = viewport.width;
    const vpH = viewport.height;
    const isMobile = size.width < 768;
    const is2XL = size.width >= 1536;

    const targetHeightFraction = is2XL ? 0.78 : isMobile ? 0.7 : 0.74;
    const heightScale = (vpH * targetHeightFraction) / 8.0;

    const widthScale = isMobile ? (vpW * 0.78) / 6.0 : (vpW * 0.44) / 6.0;

    const baseScale = Math.min(heightScale, widthScale);
    const minScale = is2XL ? 0.88 : isMobile ? 0.5 : 0.65;
    const maxScale = is2XL ? 1.45 : 1.15;
    const finalScale = Math.max(minScale, Math.min(maxScale, baseScale));

    const posY = -vpH * 0.04;

    const posX = isMobile ? 0 : Math.min(vpW * 0.23, is2XL ? 3.0 : 2.4);

    return {
      responsiveX: posX,
      responsiveY: posY,
      responsiveScale: finalScale,
    };
  }, [viewport.width, viewport.height, size.width]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);

    const handlePointerMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      mousePos.current.x = normX;
      mousePos.current.y = normY;

      rotTarget.current.y = normX * Math.PI * 1.5;
      rotTarget.current.x = -normY * 0.3 + 0.1;
    };

    const handleTouchMove = (e) => {
      if (e.touches && e.touches[0]) {
        const touch = e.touches[0];
        const normX = (touch.clientX / window.innerWidth) * 2 - 1;
        const normY = -(touch.clientY / window.innerHeight) * 2 + 1;
        rotTarget.current.y = normX * Math.PI * 1.5;
        rotTarget.current.x = -normY * 0.25 + 0.1;
      }
    };

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("touchmove", handleTouchMove, { passive: true });

    return () => {
      mediaQuery.removeEventListener("change", handler);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const groundGrid = useMemo(() => {
    const size = 18;
    const divisions = 22;
    const step = size / divisions;
    const pts = [];
    const y = -1.8;

    for (let i = -size / 2; i <= size / 2; i += step) {
      pts.push(
        new THREE.Vector3(i, y, -size / 2),
        new THREE.Vector3(i, y, size / 2),
      );
      pts.push(
        new THREE.Vector3(-size / 2, y, i),
        new THREE.Vector3(size / 2, y, i),
      );
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  const nodes = useMemo(() => {
    const count = 40;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 14;
      positions[i * 3 + 1] = Math.random() * 6 - 1.8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 14;
    }
    const geom = new THREE.BufferGeometry();
    geom.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    return geom;
  }, []);

  const ringGeom = useMemo(() => {
    const pts = [];
    const segments = 56;
    const radius = 4.0;
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI * 2;
      pts.push(
        new THREE.Vector3(
          Math.cos(theta) * radius,
          -1.78,
          Math.sin(theta) * radius,
        ),
      );
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  useFrame((state) => {
    if (prefersReducedMotion) return;
    const t = state.clock.getElapsedTime();

    autoAngle.current += 0.0025;
    const finalRotY = rotTarget.current.y + autoAngle.current;
    const finalRotX = Math.max(-0.16, Math.min(0.38, rotTarget.current.x));

    if (worldRef.current) {
      worldRef.current.rotation.y +=
        (finalRotY - worldRef.current.rotation.y) * 0.05;
      worldRef.current.rotation.x +=
        (finalRotX - worldRef.current.rotation.x) * 0.05;

      worldRef.current.position.y = responsiveY + Math.sin(t * 0.8) * 0.04;
      worldRef.current.position.x +=
        (responsiveX - worldRef.current.position.x) * 0.05;
    }

    if (scanBeamRef.current) {
      const scanY = ((t * 0.6) % 4.5) - 1.7;
      scanBeamRef.current.position.y = scanY;
    }
  });

  return (
    <group
      ref={worldRef}
      position={[responsiveX, responsiveY, 0]}
      scale={[responsiveScale, responsiveScale, responsiveScale]}
    >
      <Building3D />

      <TowerCrane position={[1.6, -1.8, -1.3]} scale={0.78} />

      <mesh
        ref={scanBeamRef}
        position={[0, 0, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <planeGeometry args={[4.0, 4.0]} />
        <meshBasicMaterial
          color="#d4af37"
          transparent
          opacity={0.3}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      <lineLoop geometry={ringGeom}>
        <lineBasicMaterial color="#d4af37" transparent opacity={0.35} />
      </lineLoop>

      <lineSegments geometry={groundGrid}>
        <lineBasicMaterial color="#c5a059" transparent opacity={0.14} />
      </lineSegments>

      <points geometry={nodes}>
        <pointsMaterial
          size={0.05}
          color="#d4af37"
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>

      <mesh position={[-4.2, -0.2, -4.2]}>
        <boxGeometry args={[1.6, 3.4, 1.6]} />
        <meshBasicMaterial
          color="#94a3b8"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
      <mesh position={[4.8, 0.2, -3.6]}>
        <boxGeometry args={[1.8, 3.8, 1.8]} />
        <meshBasicMaterial
          color="#94a3b8"
          wireframe
          transparent
          opacity={0.08}
        />
      </mesh>
    </group>
  );
}

export default function ArchitecturalCanvas() {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden opacity-95">
      <Canvas
        camera={{ position: [0, 0.2, 11.5], fov: 36 }}
        dpr={[1, Math.min(window.devicePixelRatio || 2, 2.5)]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
        }}
      >
        <Scene3D />
      </Canvas>
    </div>
  );
}

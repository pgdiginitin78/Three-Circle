import React, {
  useRef,
  useMemo,
  useState,
  useEffect,
  useCallback,
} from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import { Box, X } from "lucide-react";

const THEME = {
  gold: "#D4AF37",
  goldGlow: "#F3E5AB",
  charcoal: "#0F172A",
  steel: "#1E293B",
  glass: "#38BDF8",
  whiteWire: "#E2E8F0",
};

const materials = {
  podium: new THREE.MeshStandardMaterial({
    color: THEME.charcoal,
    metalness: 0.7,
    roughness: 0.3,
  }),
  podiumWire: new THREE.MeshBasicMaterial({
    color: THEME.gold,
    wireframe: true,
    transparent: true,
    opacity: 0.65,
  }),
  floor: new THREE.MeshStandardMaterial({
    color: THEME.steel,
    transparent: true,
    opacity: 0.7,
    metalness: 0.8,
    roughness: 0.2,
  }),
  floorWire: new THREE.MeshBasicMaterial({
    color: THEME.gold,
    wireframe: true,
    transparent: true,
    opacity: 0.85,
  }),
  column: new THREE.MeshStandardMaterial({
    color: THEME.charcoal,
    metalness: 0.9,
    roughness: 0.2,
  }),
  columnWire: new THREE.MeshBasicMaterial({
    color: THEME.gold,
    wireframe: true,
    transparent: true,
    opacity: 0.8,
  }),
  rebar: new THREE.MeshBasicMaterial({
    color: THEME.goldGlow,
    transparent: true,
    opacity: 0.9,
  }),
  glass: new THREE.MeshStandardMaterial({
    color: THEME.glass,
    transparent: true,
    opacity: 0.22,
    roughness: 0.1,
    metalness: 0.5,
    side: THREE.DoubleSide,
  }),
  mullion: new THREE.MeshBasicMaterial({
    color: THEME.gold,
    transparent: true,
    opacity: 0.75,
  }),
  whiteRailing: new THREE.MeshBasicMaterial({
    color: THEME.whiteWire,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  }),
  craneGold: new THREE.MeshBasicMaterial({
    color: THEME.gold,
    wireframe: true,
    transparent: true,
    opacity: 0.9,
  }),
  craneBody: new THREE.MeshStandardMaterial({
    color: THEME.charcoal,
    metalness: 0.85,
  }),
  skylineBody: new THREE.MeshStandardMaterial({
    color: THEME.charcoal,
    transparent: true,
    opacity: 0.5,
    metalness: 0.7,
  }),
  skylineWire: new THREE.MeshBasicMaterial({
    color: THEME.gold,
    wireframe: true,
    transparent: true,
    opacity: 0.35,
  }),
  ground: new THREE.MeshStandardMaterial({
    color: "#070a10",
    roughness: 0.9,
    metalness: 0.1,
  }),
};

function ArchitecturalBuilding({ position = [0.4, 0, -0.2], scale = 0.9 }) {
  const buildingRef = useRef();
  const floorLevels = [0, 1.1, 2.2];
  const columnsX = [-2.4, -0.8, 0.8, 2.4];
  const columnsZ = [-1.5, 0, 1.5];

  const roofRafterGeom = useMemo(() => {
    const pts = [];
    for (let x = -2.3; x <= 2.3; x += 0.38) {
      pts.push(
        new THREE.Vector3(x, 2.75, -1.4),
        new THREE.Vector3(x, 2.75, 1.4),
      );
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group ref={buildingRef} position={position} scale={[scale, scale, scale]}>
      <mesh position={[0, -0.06, 0]} material={materials.podium}>
        <boxGeometry args={[5.2, 0.12, 3.4]} />
      </mesh>
      <mesh position={[0, -0.06, 0]} material={materials.podiumWire}>
        <boxGeometry args={[5.22, 0.13, 3.42]} />
      </mesh>

      {floorLevels.map((lvlY, fIdx) => (
        <group key={`floor-${fIdx}`} position={[0, lvlY, 0]}>
          <mesh position={[0, 0.05, 0]} material={materials.floor}>
            <boxGeometry args={[5.0, 0.1, 3.2]} />
          </mesh>
          <mesh position={[0, 0.05, 0]} material={materials.floorWire}>
            <boxGeometry args={[5.02, 0.11, 3.22]} />
          </mesh>

          {fIdx === 1 && (
            <group position={[-2.75, 0.05, 0]}>
              <mesh material={materials.podium}>
                <boxGeometry args={[0.55, 0.08, 2.2]} />
              </mesh>
              <mesh material={materials.floorWire}>
                <boxGeometry args={[0.56, 0.09, 2.21]} />
              </mesh>
              <mesh position={[0, 0.22, 0]} material={materials.whiteRailing}>
                <boxGeometry args={[0.54, 0.36, 2.18]} />
              </mesh>
            </group>
          )}
        </group>
      ))}

      {columnsX.map((cx, ix) =>
        columnsZ.map((cz, iz) => (
          <group key={`col-${ix}-${iz}`} position={[cx, 1.1, cz]}>
            <mesh material={materials.column}>
              <boxGeometry args={[0.15, 2.2, 0.15]} />
            </mesh>
            <mesh material={materials.columnWire}>
              <boxGeometry args={[0.16, 2.22, 0.16]} />
            </mesh>

            {[-0.035, 0.035].map((rx, rix) =>
              [-0.035, 0.035].map((rz, riz) => (
                <mesh
                  key={`rebar-${rix}-${riz}`}
                  position={[rx, 1.25, rz]}
                  material={materials.rebar}
                >
                  <cylinderGeometry args={[0.01, 0.01, 0.4, 6]} />
                </mesh>
              )),
            )}
          </group>
        )),
      )}

      <group position={[0, 1.1, 1.52]}>
        <mesh material={materials.glass}>
          <planeGeometry args={[4.8, 2.1]} />
        </mesh>
        {[-1.8, -0.6, 0.6, 1.8].map((mx, idx) => (
          <mesh
            key={`fm-${idx}`}
            position={[mx, 0, 0.01]}
            material={materials.mullion}
          >
            <boxGeometry args={[0.035, 2.1, 0.035]} />
          </mesh>
        ))}
        {[-0.65, 0.38].map((my, idx) => (
          <mesh
            key={`fh-${idx}`}
            position={[0, my, 0.01]}
            material={materials.mullion}
          >
            <boxGeometry args={[4.8, 0.035, 0.035]} />
          </mesh>
        ))}
      </group>

      <group position={[2.42, 1.1, 0]} rotation={[0, Math.PI / 2, 0]}>
        <mesh material={materials.glass}>
          <planeGeometry args={[3.0, 2.1]} />
        </mesh>
        {[-0.75, 0, 0.75].map((mx, idx) => (
          <mesh
            key={`sm-${idx}`}
            position={[mx, 0, 0.01]}
            material={materials.mullion}
          >
            <boxGeometry args={[0.035, 2.1, 0.035]} />
          </mesh>
        ))}
      </group>

      <group position={[0, 0, 0]}>
        <mesh position={[0, 2.75, 0]} material={materials.floorWire}>
          <boxGeometry args={[4.9, 0.08, 3.1]} />
        </mesh>
        <lineSegments geometry={roofRafterGeom}>
          <lineBasicMaterial color={THEME.gold} transparent opacity={0.6} />
        </lineSegments>
      </group>
      <BuildingDimensionLines />
    </group>
  );
}

function BuildingDimensionLines() {
  const dimGeom = useMemo(() => {
    const pts = [
      new THREE.Vector3(2.7, 0.1, 1.5),
      new THREE.Vector3(2.7, 2.5, 1.5),
      new THREE.Vector3(2.6, 2.5, 1.5),
      new THREE.Vector3(2.8, 2.5, 1.5),
      new THREE.Vector3(2.6, 0.1, 1.5),
      new THREE.Vector3(2.8, 0.1, 1.5),

      new THREE.Vector3(-2.4, -0.25, 1.8),
      new THREE.Vector3(2.4, -0.25, 1.8),
      new THREE.Vector3(-2.4, -0.32, 1.8),
      new THREE.Vector3(-2.4, -0.18, 1.8),
      new THREE.Vector3(2.4, -0.32, 1.8),
      new THREE.Vector3(2.4, -0.18, 1.8),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <lineSegments geometry={dimGeom}>
      <lineBasicMaterial color={THEME.goldGlow} transparent opacity={0.65} />
    </lineSegments>
  );
}

function TowerCrane({ position = [2.6, 0, 0.6], scale = 0.8 }) {
  const jibRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (jibRef.current) {
      jibRef.current.rotation.y = Math.sin(t * 0.2) * 0.35 + 0.1;
    }
  });

  const stayCables = useMemo(() => {
    const pts = [
      new THREE.Vector3(0, 1.0, 0),
      new THREE.Vector3(1.6, 0.08, 0),
      new THREE.Vector3(0, 1.0, 0),
      new THREE.Vector3(3.6, 0.08, 0),
      new THREE.Vector3(0, 1.0, 0),
      new THREE.Vector3(5.0, 0.08, 0),
      new THREE.Vector3(0, 1.0, 0),
      new THREE.Vector3(-2.0, 0.08, 0),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group position={position} scale={[scale, scale, scale]}>
      <mesh position={[0, 1.9, 0]} material={materials.craneGold}>
        <boxGeometry args={[0.3, 3.8, 0.3]} />
      </mesh>

      <group ref={jibRef} position={[0, 3.8, 0]}>
        <mesh position={[0, 0.04, 0]} material={materials.craneBody}>
          <cylinderGeometry args={[0.22, 0.22, 0.1, 12]} />
        </mesh>
        <mesh position={[0.22, 0.16, 0.14]} material={materials.craneGold}>
          <boxGeometry args={[0.3, 0.35, 0.28]} />
        </mesh>
        <mesh position={[2.6, 0.14, 0]} material={materials.craneGold}>
          <boxGeometry args={[5.2, 0.2, 0.2]} />
        </mesh>
        <mesh position={[-1.2, 0.14, 0]} material={materials.craneGold}>
          <boxGeometry args={[2.4, 0.2, 0.2]} />
        </mesh>
        <mesh position={[-0.9, -0.08, 0]} material={materials.column}>
          <boxGeometry args={[0.65, 0.36, 0.35]} />
        </mesh>

        <mesh position={[0, 0.6, 0]} material={materials.craneGold}>
          <coneGeometry args={[0.22, 1.2, 4]} />
        </mesh>

        <lineSegments geometry={stayCables}>
          <lineBasicMaterial
            color={THEME.goldGlow}
            transparent
            opacity={0.65}
          />
        </lineSegments>

        <group position={[2.4, 0.05, 0]}>
          <mesh position={[0, -0.8, 0]} material={materials.rebar}>
            <cylinderGeometry args={[0.007, 0.007, 1.6, 6]} />
          </mesh>
          <mesh position={[0, -1.6, 0]} material={materials.podiumWire}>
            <boxGeometry args={[0.12, 0.16, 0.1]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function BackgroundCrane({ position = [-3.4, 0, -3.5], scale = 0.42 }) {
  const craneRef = useRef();

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (craneRef.current) {
      craneRef.current.rotation.y = -0.2 + Math.sin(t * 0.12) * 0.25;
    }
  });

  return (
    <group position={position} scale={[scale, scale, scale]}>
      <mesh position={[0, 1.8, 0]} material={materials.skylineWire}>
        <boxGeometry args={[0.22, 3.6, 0.22]} />
      </mesh>
      <group ref={craneRef} position={[0, 3.6, 0]}>
        <mesh position={[1.9, 0, 0]} material={materials.skylineWire}>
          <boxGeometry args={[3.8, 0.15, 0.15]} />
        </mesh>
        <mesh position={[-0.8, 0, 0]} material={materials.skylineWire}>
          <boxGeometry args={[1.6, 0.15, 0.15]} />
        </mesh>
        <mesh position={[0, 0.45, 0]} material={materials.skylineWire}>
          <coneGeometry args={[0.16, 0.9, 4]} />
        </mesh>
      </group>
    </group>
  );
}

function CitySkyline() {
  const skylineTowers = useMemo(() => {
    return [
      { pos: [-5.4, 1.1, -5.0], size: [1.1, 2.2, 1.1], spire: 0.5 },
      { pos: [-4.0, 1.4, -6.0], size: [1.2, 2.8, 1.2], spire: 0.6 },
      { pos: [-2.6, 1.2, -6.5], size: [1.0, 2.4, 1.0], spire: 0 },
      { pos: [0.0, 1.3, -7.0], size: [1.3, 2.6, 1.2], spire: 0.5 },
      { pos: [1.8, 1.0, -6.5], size: [1.0, 2.0, 1.0], spire: 0 },
      { pos: [4.2, 1.2, -6.0], size: [1.2, 2.4, 1.1], spire: 0.5 },
      { pos: [5.8, 0.9, -5.0], size: [1.1, 1.8, 1.1], spire: 0 },
    ];
  }, []);

  const elevationLines = useMemo(() => {
    const pts = [
      new THREE.Vector3(-6.2, 0, -5.0),
      new THREE.Vector3(-6.2, 2.2, -5.0),
      new THREE.Vector3(-6.4, 2.2, -5.0),
      new THREE.Vector3(-6.0, 2.2, -5.0),

      new THREE.Vector3(-3.2, 0, -6.0),
      new THREE.Vector3(-3.2, 2.8, -6.0),
      new THREE.Vector3(-3.4, 2.8, -6.0),
      new THREE.Vector3(-3.0, 2.8, -6.0),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group>
      {skylineTowers.map((t, idx) => (
        <group key={`skyline-${idx}`} position={t.pos}>
          <mesh material={materials.skylineBody}>
            <boxGeometry args={t.size} />
          </mesh>
          <mesh material={materials.skylineWire}>
            <boxGeometry
              args={[t.size[0] * 1.01, t.size[1] * 1.01, t.size[2] * 1.01]}
            />
          </mesh>
          {t.spire > 0 && (
            <mesh
              position={[0, t.size[1] / 2 + t.spire / 2, 0]}
              material={materials.rebar}
            >
              <cylinderGeometry args={[0.01, 0.03, t.spire, 6]} />
            </mesh>
          )}
        </group>
      ))}

      <lineSegments geometry={elevationLines}>
        <lineBasicMaterial color={THEME.gold} transparent opacity={0.35} />
      </lineSegments>
    </group>
  );
}

function ForegroundBlueprintArtifacts() {
  const treeBranchLines = useMemo(() => {
    const pts = [
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(0, 0.8, 0),
      new THREE.Vector3(0, 0.5, 0),
      new THREE.Vector3(-0.25, 0.9, 0.12),
      new THREE.Vector3(0, 0.6, 0),
      new THREE.Vector3(0.3, 0.95, -0.1),
      new THREE.Vector3(0, 0.7, 0),
      new THREE.Vector3(-0.12, 1.05, -0.2),
    ];
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  const blueprintDraftingSheetLines = useMemo(() => {
    const pts = [
      new THREE.Vector3(-1.8, 0.003, 1.2),
      new THREE.Vector3(1.8, 0.003, 1.2),
      new THREE.Vector3(1.8, 0.003, 1.2),
      new THREE.Vector3(1.8, 0.003, 2.8),
      new THREE.Vector3(1.8, 0.003, 2.8),
      new THREE.Vector3(-1.8, 0.003, 2.8),
      new THREE.Vector3(-1.8, 0.003, 2.8),
      new THREE.Vector3(-1.8, 0.003, 1.2),

      new THREE.Vector3(-1.6, 0.004, 1.4),
      new THREE.Vector3(0.2, 0.004, 1.4),
      new THREE.Vector3(0.2, 0.004, 1.4),
      new THREE.Vector3(0.2, 0.004, 2.6),
      new THREE.Vector3(0.2, 0.004, 2.6),
      new THREE.Vector3(-1.6, 0.004, 2.6),
      new THREE.Vector3(-1.6, 0.004, 2.6),
      new THREE.Vector3(-1.6, 0.004, 1.4),

      new THREE.Vector3(-0.8, 0.004, 1.4),
      new THREE.Vector3(-0.8, 0.004, 2.6),
      new THREE.Vector3(-1.6, 0.004, 2.0),
      new THREE.Vector3(0.2, 0.004, 2.0),

      new THREE.Vector3(0.5, 0.004, 1.7),
      new THREE.Vector3(1.5, 0.004, 1.7),
      new THREE.Vector3(0.5, 0.004, 2.0),
      new THREE.Vector3(1.5, 0.004, 2.0),
      new THREE.Vector3(0.5, 0.004, 2.3),
      new THREE.Vector3(1.5, 0.004, 2.3),

      new THREE.Vector3(-2.6, 0.004, 3.0),
      new THREE.Vector3(2.6, 0.004, 3.0),
    ];
    for (let rx = -2.6; rx <= 2.6; rx += 0.4) {
      pts.push(
        new THREE.Vector3(rx, 0.004, 2.95),
        new THREE.Vector3(rx, 0.004, 3.05),
      );
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  return (
    <group>
      <lineSegments geometry={blueprintDraftingSheetLines}>
        <lineBasicMaterial color={THEME.gold} transparent opacity={0.45} />
      </lineSegments>

      <group position={[-2.3, 0.14, 2.2]} rotation={[0, 0.35, 0]}>
        <group rotation={[Math.PI / 2, 0, 0.25]}>
          <mesh material={materials.floor}>
            <cylinderGeometry args={[0.2, 0.2, 1.4, 18]} />
          </mesh>
          <mesh material={materials.floorWire}>
            <cylinderGeometry args={[0.205, 0.205, 1.41, 18]} />
          </mesh>
        </group>
        <group position={[0.28, 0.04, -0.22]} rotation={[Math.PI / 2, 0, 0.15]}>
          <mesh material={materials.podium}>
            <cylinderGeometry args={[0.15, 0.15, 1.3, 18]} />
          </mesh>
          <mesh material={materials.podiumWire}>
            <cylinderGeometry args={[0.155, 0.155, 1.31, 18]} />
          </mesh>
        </group>
      </group>

      <group position={[-0.3, 0.04, 2.4]} rotation={[-0.05, 0.55, -0.05]}>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.podium}>
          <cylinderGeometry args={[0.035, 0.035, 1.05, 14]} />
        </mesh>
        <mesh rotation={[Math.PI / 2, 0, 0]} material={materials.podiumWire}>
          <cylinderGeometry args={[0.037, 0.037, 1.06, 14]} />
        </mesh>
        <mesh
          position={[0, 0, 0.58]}
          rotation={[-Math.PI / 2, 0, 0]}
          material={materials.rebar}
        >
          <coneGeometry args={[0.035, 0.14, 14]} />
        </mesh>
      </group>

      <group position={[-2.2, 0.24, 1.2]} rotation={[0, 0.4, 0]}>
        <mesh material={materials.podium}>
          <sphereGeometry
            args={[0.38, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2]}
          />
        </mesh>
        <mesh material={materials.podiumWire}>
          <sphereGeometry
            args={[0.385, 18, 12, 0, Math.PI * 2, 0, Math.PI / 2]}
          />
        </mesh>
      </group>

      <group position={[2.0, 0.14, 2.1]} rotation={[0, -0.3, 0]}>
        <group position={[0.5, 0, 0]}>
          {[0, 0.16].map((ly, lIdx) =>
            [-0.16, 0, 0.16].map((lx, cIdx) => (
              <mesh
                key={`tube-${lIdx}-${cIdx}`}
                position={[lx, ly, 0]}
                rotation={[Math.PI / 2, 0, 0]}
                material={materials.columnWire}
              >
                <boxGeometry args={[0.14, 1.3, 0.14]} />
              </mesh>
            )),
          )}
        </group>
        <group position={[-0.35, 0, 0]}>
          {[-0.14, 0.14].map((px, pIdx) => (
            <mesh
              key={`pipe-${pIdx}`}
              position={[px, 0.02, 0]}
              rotation={[Math.PI / 2, 0, 0]}
              material={materials.floorWire}
            >
              <cylinderGeometry args={[0.1, 0.1, 1.5, 16]} />
            </mesh>
          ))}
        </group>
      </group>

      <group position={[-1.3, 0.15, 0.1]}>
        <mesh position={[0, 0.1, 0]} material={materials.podiumWire}>
          <boxGeometry args={[1.0, 0.2, 1.0]} />
        </mesh>
        <lineSegments geometry={treeBranchLines} position={[0, 0.2, 0]}>
          <lineBasicMaterial color={THEME.gold} transparent opacity={0.8} />
        </lineSegments>
        <group position={[0, 1.2, 0]}>
          <mesh material={materials.skylineWire}>
            <dodecahedronGeometry args={[0.5, 1]} />
          </mesh>
        </group>
      </group>
    </group>
  );
}

function BlueprintGridFloor() {
  const { gridGeometry, crosshairs } = useMemo(() => {
    const size = 26;
    const step = 0.8;
    const pts = [];
    const chPts = [];
    const y = 0.001;

    for (let x = -size / 2; x <= size / 2; x += step) {
      pts.push(
        new THREE.Vector3(x, y, -size / 2),
        new THREE.Vector3(x, y, size / 2),
      );
    }
    for (let z = -size / 2; z <= size / 2; z += step) {
      pts.push(
        new THREE.Vector3(-size / 2, y, z),
        new THREE.Vector3(size / 2, y, z),
      );
    }

    const markers = [
      [-2.4, 1.6],
      [0, 2.4],
      [2.4, 1.6],
      [-1.6, -1.6],
      [2.4, -2.4],
    ];
    markers.forEach(([mx, mz]) => {
      chPts.push(
        new THREE.Vector3(mx - 0.2, y + 0.005, mz),
        new THREE.Vector3(mx + 0.2, y + 0.005, mz),
        new THREE.Vector3(mx, y + 0.005, mz - 0.2),
        new THREE.Vector3(mx, y + 0.005, mz + 0.2),
      );
    });

    return {
      gridGeometry: new THREE.BufferGeometry().setFromPoints(pts),
      crosshairs: new THREE.BufferGeometry().setFromPoints(chPts),
    };
  }, []);

  return (
    <group>
      <mesh
        position={[0, -0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        material={materials.ground}
      >
        <planeGeometry args={[30, 30]} />
      </mesh>
      <lineSegments geometry={gridGeometry}>
        <lineBasicMaterial color={THEME.gold} transparent opacity={0.22} />
      </lineSegments>
      <lineSegments geometry={crosshairs}>
        <lineBasicMaterial color={THEME.goldGlow} transparent opacity={0.85} />
      </lineSegments>
    </group>
  );
}

function BlueprintScene() {
  const { size } = useThree();
  const width = size.width;
  const height = size.height || 1;
  const aspect = width / height;

  const { sceneScale, scenePos } = useMemo(() => {
    if (width < 640 || aspect < 0.9) {
      const s = Math.min(0.85, Math.max(0.68, aspect * 0.85));
      return { sceneScale: s, scenePos: [-0.15, -0.42, 0.8] };
    } else if (width < 1024 || aspect < 1.45) {
      const s = Math.min(0.9, Math.max(0.78, aspect * 0.72));
      return { sceneScale: s, scenePos: [-0.12, -0.45, 1.05] };
    }
    return { sceneScale: 1, scenePos: [0, -0.5, 1.4] };
  }, [width, aspect]);

  return (
    <group position={scenePos} scale={[sceneScale, sceneScale, sceneScale]}>
      <ArchitecturalBuilding position={[0.4, 0, -0.2]} scale={0.9} />
      <TowerCrane position={[2.6, 0, 0.6]} scale={0.8} />
      <BackgroundCrane position={[-3.4, 0, -3.5]} scale={0.42} />
      <CitySkyline />
      <ForegroundBlueprintArtifacts />
      <BlueprintGridFloor />
    </group>
  );
}

function CameraInit({ target = [0, 0.85, 0] }) {
  const { camera, size } = useThree();
  useEffect(() => {
    const width = size.width;
    const height = size.height || 1;
    const aspect = width / height;

    if (width < 640 || aspect < 0.9) {
      const distMultiplier = Math.max(1.15, 1.35 / Math.max(aspect, 0.5));
      const targetZ = Math.min(14.5, 9.8 * distMultiplier);
      camera.position.set(-0.4, 1.85, targetZ);
      camera.lookAt(target[0], target[1], target[2]);
    } else if (width < 1024 || aspect < 1.45) {
      const distMultiplier = Math.max(1.05, 1.25 / Math.max(aspect, 0.68));
      const targetZ = Math.min(12.5, 9.8 * distMultiplier);
      camera.position.set(-0.7, 1.95, targetZ);
      camera.lookAt(target[0], target[1], target[2]);
    } else {
      camera.position.set(-1.8, 2.2, 9.8);
      camera.lookAt(0, 1.0, 0);
    }
    camera.updateProjectionMatrix();
  }, [camera, size.width, size.height, target]);
  return null;
}

export default function TransitionZone() {
  const [is3DActive, setIs3DActive] = useState(false);
  const controlsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e) => {
      if (is3DActive) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [is3DActive]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && is3DActive) {
        setIs3DActive(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [is3DActive]);

  const handleEnter3D = useCallback(() => {
    setIs3DActive(true);
  }, []);

  const handleExit3D = useCallback(() => {
    setIs3DActive(false);
    if (controlsRef.current) {
      controlsRef.current.reset();
    }
  }, []);

  return (
    <section
      ref={containerRef}
      id="transition-3d-zone"
      data-lenis-prevent={is3DActive ? "true" : undefined}
      className={`relative w-full transition-[border-color,box-shadow] duration-500 bg-[#070a10] border-y ${
        is3DActive
          ? "border-accent-gold/50 shadow-[0_0_50px_rgba(212,175,55,0.15)]"
          : "border-white/10"
      } h-[420px] xs:h-[480px] sm:h-[540px] md:h-[600px] lg:h-[680px] overflow-hidden select-none`}
    >
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(212, 175, 55, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(212, 175, 55, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />
      <div className="absolute inset-0 bg-radial from-[#D4AF37]/[0.08] via-transparent to-[#070a10] pointer-events-none" />

      {!is3DActive && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none px-4">
          <button
            onClick={handleEnter3D}
            className="group pointer-events-auto relative flex items-center gap-2.5 sm:gap-3 px-5 py-3 sm:px-7 sm:py-3.5 rounded-full bg-black/85 hover:bg-black/95 backdrop-blur-md border border-accent-gold/60 hover:border-accent-gold transition-all duration-300 shadow-[0_0_25px_rgba(212,175,55,0.25)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)] active:scale-95 hover:scale-105 cursor-pointer touch-manipulation"
          >
            <span className="absolute -inset-1 rounded-full border border-accent-gold/40 animate-ping opacity-40 pointer-events-none" />
            <Box className="w-4 h-4 sm:w-5 sm:h-5 text-accent-gold group-hover:rotate-45 transition-transform duration-500 shrink-0" />
            <span className="font-display font-bold text-xs sm:text-sm tracking-[0.18em] sm:tracking-[0.2em] text-white uppercase group-hover:text-accent-gold transition-colors">
              3D VIEW
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent-gold animate-pulse shrink-0" />
          </button>
        </div>
      )}

      {is3DActive && (
        <>
          <div className="absolute top-3.5 sm:top-4 md:top-5 left-3.5 sm:left-4 md:left-5 right-3.5 sm:right-4 md:right-5 z-30 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-accent-gold/40 shadow-md">
              <span className="w-2 h-2 rounded-full bg-accent-gold animate-ping" />
              <span className="font-mono text-[10px] sm:text-xs text-accent-gold font-medium tracking-wider">
                INTERACTIVE 3D
              </span>
            </div>

            <div className="flex items-center gap-2.5 pointer-events-auto">
              <button
                onClick={handleExit3D}
                className="group flex items-center gap-1.5 sm:gap-2 px-3.5 py-1.5 sm:px-4 sm:py-2 md:px-5 md:py-2 rounded-full bg-accent-gold hover:bg-white text-black font-display font-bold text-[11px] sm:text-xs tracking-wider uppercase transition-all duration-200 shadow-lg shadow-accent-gold/25 hover:shadow-accent-gold/50 cursor-pointer active:scale-95 touch-manipulation"
              >
                <X className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-black group-hover:rotate-90 transition-transform duration-300" />
                <span>CLOSE</span>
              </button>
            </div>
          </div>
          <div className="absolute bottom-3.5 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-30 pointer-events-none w-max max-w-[94vw] px-2">
            <div className="flex items-center justify-center gap-2 sm:gap-3 px-3.5 sm:px-4 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/15 text-white/80 font-mono text-[9px] xs:text-[10px] sm:text-[11px] tracking-wider shadow-lg">
              <span className="text-accent-gold font-semibold whitespace-nowrap">
                ✦ <span className="hidden md:inline">DRAG TO ROTATE 360°</span>
                <span className="md:hidden">DRAG ROTATE</span>
              </span>
              <span className="text-white/30">•</span>
              <span className="text-accent-gold font-semibold whitespace-nowrap">
                <span className="hidden md:inline">SCROLL TO ZOOM</span>
                <span className="md:hidden">PINCH / SCROLL ZOOM</span>
              </span>
            </div>
          </div>
        </>
      )}
      <Canvas
        camera={{ position: [-1.8, 2.2, 9.8], fov: 38, near: 0.1, far: 50 }}
        dpr={[1, 1.5]}
        gl={{
          alpha: true,
          antialias: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        className={
          is3DActive
            ? "cursor-grab active:cursor-grabbing touch-none"
            : "pointer-events-none"
        }
      >
        <CameraInit target={[0, 0.85, 0]} />
        <ambientLight intensity={1.5} color="#ffffff" />
        <directionalLight
          position={[8, 12, 6]}
          intensity={2.2}
          color="#ffffff"
        />
        <directionalLight
          position={[-8, 6, -5]}
          intensity={1.0}
          color={THEME.gold}
        />
        <pointLight
          position={[0, 4, 2]}
          intensity={1.6}
          color={THEME.goldGlow}
          distance={15}
        />

        <OrbitControls
          ref={controlsRef}
          target={[0, 0.85, 0]}
          enabled={is3DActive}
          enableZoom={is3DActive}
          enableRotate={is3DActive}
          enablePan={is3DActive}
          autoRotate={!is3DActive}
          autoRotateSpeed={0.5}
          dampingFactor={0.08}
          zoomSpeed={1.0}
          rotateSpeed={0.8}
          minDistance={2.5}
          maxDistance={25.0}
          maxPolarAngle={Math.PI / 2 - 0.02}
          minPolarAngle={0.1}
          touches={{
            ONE: THREE.TOUCH.ROTATE,
            TWO: THREE.TOUCH.DOLLY_PAN,
          }}
        />
        <BlueprintScene />
      </Canvas>
    </section>
  );
}

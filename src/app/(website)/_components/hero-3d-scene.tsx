// ─────────────────────────────────────────────────────────────
// hero-3d-scene.tsx — v4 GAME-QUALITY
// v3 (futuristic school + mini 3D models + dome orbit) upgraded
// with a real rendering pipeline:
//   • Bloom + Vignette postprocessing → windows/beacon/rings GLOW
//   • Procedural Environment via Lightformers → real reflections
//     on glass/metal (NO external HDR file or CDN needed)
//   • envMapIntensity-tuned PBR materials
//   • soft glow disc grounding the building
// Requires: pnpm add @react-three/postprocessing  (installed)
// ─────────────────────────────────────────────────────────────
"use client";

import { Suspense, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, Html, Lightformer, Sparkles, Torus } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import * as THREE from "three";

// ═════════════════ SVG ICONS (label chips) ═════════════════
const ICON_PATHS: Record<string, string> = {
  admissions: "M12 3 2 8l10 5 10-5-10-5Zm-6 7.5V15c0 1.7 2.7 3 6 3s6-1.3 6-3v-4.5",
  attendance: "M4 12.5 9.5 18 20 6.5",
  fees: "M6 4h12M6 8h12M8 8c6 0 6 4 2 5l6 7",
  academics: "M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5V5.5ZM20 18H6.5",
  messages: "M21 12a8 8 0 0 1-8 8H4l2-3.2A8 8 0 1 1 21 12Z",
  transport: "M5 17h14M5 17a2 2 0 1 0 4 0M15 17a2 2 0 1 0 4 0M4 17V7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10M4 11h16",
  exams: "M8 3h8l4 4v14H4V5a2 2 0 0 1 2-2h2Zm0 9h8M8 16h5",
  hr: "M9 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5 9a5 5 0 0 1 10 0M17 8a3 3 0 1 1-2 5.2M15 20a5 5 0 0 1 6-4.9",
};

const MODULES = [
  { key: "admissions", label: "Admissions", color: "#818cf8", angle: 0 },
  { key: "attendance", label: "Attendance", color: "#34d399", angle: 45 },
  { key: "fees", label: "Fees", color: "#fbbf24", angle: 90 },
  { key: "academics", label: "Academics", color: "#a78bfa", angle: 135 },
  { key: "messages", label: "Messages", color: "#38bdf8", angle: 180 },
  { key: "transport", label: "Transport", color: "#fb923c", angle: 225 },
  { key: "exams", label: "Exams", color: "#f472b6", angle: 270 },
  { key: "hr", label: "HR", color: "#4ade80", angle: 315 },
];

const RADIUS = 3.2;

// Dome-tilted orbit: back nodes rise, front nodes dip → nothing hides
function nodePosition(angle: number): [number, number, number] {
  const rad = (angle * Math.PI) / 180;
  const x = Math.cos(rad) * RADIUS;
  const z = Math.sin(rad) * RADIUS;
  const y = 0.15 - z * 0.16;
  return [x, y, z];
}

// PBR defaults tuned for the Lightformer environment
const PBR = { envMapIntensity: 1.4 };

// ═════════════════ MINI 3D MODELS PER MODULE ═════════════════
function MiniModel({ mod, active }: { mod: (typeof MODULES)[number]; active: boolean }) {
  const spin = useRef<THREE.Group>(null);
  useFrame((_, d) => {
    if (spin.current) spin.current.rotation.y += d * (active ? 1.6 : 0.4);
  });

  const c = mod.color;

  return (
    <group ref={spin}>
      {mod.key === "academics" && (
        <group>
          {[
            { y: -0.09, w: 0.42, col: "#7c6df0", rot: 0.12 },
            { y: 0.0, w: 0.38, col: "#a78bfa", rot: -0.1 },
            { y: 0.09, w: 0.34, col: "#c4b5fd", rot: 0.06 },
          ].map((b, i) => (
            <mesh key={i} position={[0, b.y, 0]} rotation={[0, b.rot, 0]}>
              <boxGeometry args={[b.w, 0.075, 0.28]} />
              <meshPhysicalMaterial color={b.col} roughness={0.45} clearcoat={0.6} {...PBR} />
            </mesh>
          ))}
        </group>
      )}

      {mod.key === "fees" && (
        <group>
          {[0, 1, 2, 3].map((i) => (
            <mesh key={i} position={[0, -0.12 + i * 0.065, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 0.05, 24]} />
              <meshPhysicalMaterial color="#fbbf24" metalness={0.95} roughness={0.18} clearcoat={0.8} {...PBR} />
            </mesh>
          ))}
          <mesh position={[0.2, -0.1, 0.05]} rotation={[0.3, 0, 1.2]}>
            <cylinderGeometry args={[0.16, 0.16, 0.05, 24]} />
            <meshPhysicalMaterial color="#f59e0b" metalness={0.95} roughness={0.18} {...PBR} />
          </mesh>
        </group>
      )}

      {mod.key === "transport" && (
        <group scale={0.9}>
          <mesh>
            <boxGeometry args={[0.5, 0.2, 0.22]} />
            <meshPhysicalMaterial color="#fb923c" roughness={0.25} clearcoat={1} clearcoatRoughness={0.1} {...PBR} />
          </mesh>
          <mesh position={[0.05, 0.14, 0]}>
            <boxGeometry args={[0.38, 0.12, 0.2]} />
            <meshPhysicalMaterial color="#fdba74" roughness={0.22} clearcoat={1} {...PBR} />
          </mesh>
          <mesh position={[0.05, 0.14, 0.101]}>
            <planeGeometry args={[0.3, 0.07]} />
            <meshBasicMaterial color="#dbeafe" />
          </mesh>
          {[-0.15, 0.15].map((wx) => (
            <mesh key={wx} position={[wx, -0.11, 0.09]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.055, 0.055, 0.04, 16]} />
              <meshPhysicalMaterial color="#1f2937" roughness={0.8} {...PBR} />
            </mesh>
          ))}
        </group>
      )}

      {mod.key === "exams" && (
        <group rotation={[-0.35, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.42, 0.3, 0.015]} />
            <meshPhysicalMaterial color="#f8fafc" roughness={0.55} {...PBR} />
          </mesh>
          <mesh position={[0.12, -0.07, 0.015]}>
            <cylinderGeometry args={[0.045, 0.045, 0.015, 20]} />
            <meshPhysicalMaterial color="#fbbf24" metalness={0.9} roughness={0.2} {...PBR} />
          </mesh>
          {[0.07, 0.02, -0.03].map((ly, i) => (
            <mesh key={i} position={[-0.05, ly, 0.009]}>
              <planeGeometry args={[0.24 - i * 0.05, 0.014]} />
              <meshBasicMaterial color="#94a3b8" />
            </mesh>
          ))}
        </group>
      )}

      {mod.key === "messages" && (
        <group>
          <mesh>
            <capsuleGeometry args={[0.11, 0.22, 8, 16]} />
            <meshPhysicalMaterial color="#38bdf8" roughness={0.18} clearcoat={1} {...PBR} />
          </mesh>
          <mesh position={[-0.12, -0.13, 0]} rotation={[0, 0, 0.8]}>
            <coneGeometry args={[0.05, 0.1, 3]} />
            <meshPhysicalMaterial color="#38bdf8" roughness={0.18} {...PBR} />
          </mesh>
          {[-0.06, 0, 0.06].map((dx, i) => (
            <mesh key={i} position={[dx, 0.01, 0.12]}>
              <sphereGeometry args={[0.02, 10, 10]} />
              <meshBasicMaterial color="#f0f9ff" />
            </mesh>
          ))}
        </group>
      )}

      {mod.key === "attendance" && (
        <group rotation={[-0.4, 0, 0]}>
          <mesh>
            <boxGeometry args={[0.34, 0.42, 0.07]} />
            <meshPhysicalMaterial color="#134e4a" roughness={0.3} metalness={0.4} {...PBR} />
          </mesh>
          <mesh position={[0, 0.03, 0.04]}>
            <planeGeometry args={[0.24, 0.28]} />
            <meshBasicMaterial color="#34d399" transparent opacity={0.35} />
          </mesh>
          <ScanLine />
        </group>
      )}

      {mod.key === "admissions" && (
        <group rotation={[-0.15, 0.2, 0]}>
          <mesh position={[0, -0.02, 0]}>
            <boxGeometry args={[0.4, 0.28, 0.05]} />
            <meshPhysicalMaterial color="#6366f1" roughness={0.4} clearcoat={0.6} {...PBR} />
          </mesh>
          <mesh position={[-0.1, 0.13, 0]}>
            <boxGeometry args={[0.16, 0.05, 0.05]} />
            <meshPhysicalMaterial color="#6366f1" roughness={0.4} {...PBR} />
          </mesh>
          <mesh position={[0.03, 0.06, 0.01]} rotation={[0, 0, -0.06]}>
            <boxGeometry args={[0.3, 0.2, 0.012]} />
            <meshPhysicalMaterial color="#eef2ff" roughness={0.55} {...PBR} />
          </mesh>
        </group>
      )}

      {mod.key === "hr" && (
        <group>
          {[
            { x: -0.09, col: "#4ade80", s: 1 },
            { x: 0.1, col: "#86efac", s: 0.85 },
          ].map((p, i) => (
            <group key={i} position={[p.x, 0, 0]} scale={p.s}>
              <mesh position={[0, 0.12, 0]}>
                <sphereGeometry args={[0.07, 16, 16]} />
                <meshPhysicalMaterial color={p.col} roughness={0.35} clearcoat={0.5} {...PBR} />
              </mesh>
              <mesh position={[0, -0.04, 0]}>
                <capsuleGeometry args={[0.07, 0.12, 8, 12]} />
                <meshPhysicalMaterial color={p.col} roughness={0.35} clearcoat={0.5} {...PBR} />
              </mesh>
            </group>
          ))}
        </group>
      )}

      {/* glass display-case shell — now catches real env reflections */}
      <mesh>
        <sphereGeometry args={[0.42, 32, 32]} />
        <meshPhysicalMaterial
          color={c} transparent opacity={0.08} roughness={0.03}
          clearcoat={1} clearcoatRoughness={0.05} side={THREE.DoubleSide} {...PBR}
        />
      </mesh>
    </group>
  );
}

function ScanLine() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.y = Math.sin(state.clock.elapsedTime * 2.2) * 0.12 + 0.03;
  });
  return (
    <mesh ref={ref} position={[0, 0.03, 0.045]}>
      <planeGeometry args={[0.24, 0.02]} />
      <meshBasicMaterial color="#a7f3d0" />
    </mesh>
  );
}

// ═════════════════ CENTER: FUTURISTIC SCHOOL BUILDING ═════════════════
function WindowRow({ y, cols, z, color }: { y: number; cols: number; z: number; color: string }) {
  return (
    <>
      {Array.from({ length: cols }, (_, c) => (
        <mesh key={c} position={[(c - (cols - 1) / 2) * 0.22, y, z]}>
          <planeGeometry args={[0.13, 0.12]} />
          {/* bright basic material → picked up by Bloom → real glow */}
          <meshBasicMaterial color={color} toneMapped={false} />
        </mesh>
      ))}
    </>
  );
}

function SchoolBuilding() {
  const beacon = useRef<THREE.MeshBasicMaterial>(null);
  const holo1 = useRef<THREE.Mesh>(null);
  const holo2 = useRef<THREE.Mesh>(null);
  const slow = useRef<THREE.Group>(null);

  useFrame((state, d) => {
    if (beacon.current) beacon.current.opacity = 0.55 + Math.sin(state.clock.elapsedTime * 2.6) * 0.4;
    if (holo1.current) holo1.current.rotation.z += d * 0.35;
    if (holo2.current) holo2.current.rotation.z -= d * 0.25;
    if (slow.current) slow.current.rotation.y += d * 0.08;
  });

  const BASE = -1.05;

  return (
    <group>
      {/* soft glow disc grounding the building */}
      <mesh position={[0, BASE - 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.1, 48]} />
        <meshBasicMaterial color="#312e81" transparent opacity={0.22} />
      </mesh>

      <group ref={slow}>
        {/* platform */}
        <mesh position={[0, BASE, 0]}>
          <cylinderGeometry args={[1.35, 1.5, 0.1, 48]} />
          <meshPhysicalMaterial color="#141b38" roughness={0.4} metalness={0.5} {...PBR} />
        </mesh>
        <mesh position={[0, BASE + 0.056, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[1.22, 1.33, 48]} />
          <meshBasicMaterial color="#818cf8" toneMapped={false} transparent opacity={0.9} side={THREE.DoubleSide} />
        </mesh>

        {/* podium */}
        <mesh position={[0, BASE + 0.28, 0]}>
          <boxGeometry args={[1.5, 0.42, 1.0]} />
          <meshPhysicalMaterial color="#1c2450" roughness={0.22} metalness={0.55} clearcoat={0.9} {...PBR} />
        </mesh>
        <WindowRow y={BASE + 0.28} cols={5} z={0.505} color="#93c5fd" />

        {/* glass tower — high metalness/clearcoat, real reflections */}
        <mesh position={[0, BASE + 1.15, 0]}>
          <boxGeometry args={[0.85, 1.35, 0.72]} />
          <meshPhysicalMaterial
            color="#232d63" roughness={0.1} metalness={0.7}
            clearcoat={1} clearcoatRoughness={0.06} {...PBR}
          />
        </mesh>
        {[0.62, 0.95, 1.28, 1.61].map((wy, r) => (
          <WindowRow key={r} y={BASE + wy} cols={3} z={0.365} color={r === 2 ? "#6d78d6" : "#a5b4fc"} />
        ))}

        {/* roof + antenna + beacon */}
        <mesh position={[0, BASE + 1.87, 0]}>
          <boxGeometry args={[0.95, 0.07, 0.8]} />
          <meshPhysicalMaterial color="#2b3470" roughness={0.25} metalness={0.55} {...PBR} />
        </mesh>
        <mesh position={[0.2, BASE + 2.08, 0]}>
          <cylinderGeometry args={[0.012, 0.012, 0.36, 8]} />
          <meshPhysicalMaterial color="#475090" metalness={0.7} roughness={0.3} {...PBR} />
        </mesh>
        <mesh position={[0.2, BASE + 2.29, 0]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshBasicMaterial ref={beacon} color="#67e8f9" toneMapped={false} transparent opacity={0.9} />
        </mesh>
      </group>

      {/* holographic rings — toneMapped=false → bloom glow */}
      <Torus ref={holo1} args={[1.55, 0.012, 16, 120]} rotation={[Math.PI / 2.15, 0, 0]} position={[0, -0.15, 0]}>
        <meshBasicMaterial color="#a5b4fc" toneMapped={false} transparent opacity={0.55} />
      </Torus>
      <Torus ref={holo2} args={[1.75, 0.008, 16, 120]} rotation={[Math.PI / 2.4, 0.3, 0]} position={[0, 0.15, 0]}>
        <meshBasicMaterial color="#c4b5fd" toneMapped={false} transparent opacity={0.35} />
      </Torus>

      <pointLight color="#818cf8" intensity={4} distance={5} position={[0, 0.4, 1.2]} />
      <pointLight color="#22d3ee" intensity={1} distance={2.5} position={[0.2, 1.3, 0]} />

      <Html center position={[0, -1.65, 0]} distanceFactor={9} zIndexRange={[40, 0]}>
        <div
          style={{
            padding: "7px 16px", borderRadius: 999, whiteSpace: "nowrap", userSelect: "none",
            background: "linear-gradient(135deg, rgba(99,102,241,.24), rgba(139,92,246,.14))",
            border: "1px solid rgba(165,180,252,.4)", backdropFilter: "blur(10px)",
            color: "#e0e7ff", fontSize: 12.5, fontWeight: 700, letterSpacing: ".02em",
            boxShadow: "0 8px 30px -8px rgba(99,102,241,.6)",
          }}
        >
          ShikshaMatrix Core
        </div>
      </Html>
    </group>
  );
}

// ═════════════════ ORBITING MODULE NODE ═════════════════
function ModuleNode({
  mod, active, onHover,
}: {
  mod: (typeof MODULES)[number];
  active: boolean;
  onHover: (key: string | null) => void;
}) {
  const group = useRef<THREE.Group>(null);
  const targetScale = useRef(new THREE.Vector3(1, 1, 1));
  const [x, y, z] = nodePosition(mod.angle);

  useFrame(() => {
    if (!group.current) return;
    targetScale.current.setScalar(active ? 1.3 : 1);
    group.current.scale.lerp(targetScale.current, 0.11);
  });

  return (
    <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.45}>
      <group
        ref={group}
        position={[x, y, z]}
        onPointerOver={(e) => { e.stopPropagation(); onHover(mod.key); document.body.style.cursor = "pointer"; }}
        onPointerOut={(e) => { e.stopPropagation(); onHover(null); document.body.style.cursor = "auto"; }}
      >
        <MiniModel mod={mod} active={active} />
        {active && <pointLight color={mod.color} intensity={3} distance={2.2} />}

        <Html center position={[0, 0.78, 0]} distanceFactor={8.5} zIndexRange={[60, 0]}>
          <div
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "6px 12px 6px 7px", borderRadius: 999, whiteSpace: "nowrap", userSelect: "none",
              background: active
                ? `linear-gradient(135deg, ${mod.color}2e, rgba(10,12,26,.88))`
                : "rgba(10,12,26,.8)",
              border: `1px solid ${active ? mod.color : "rgba(255,255,255,.14)"}`,
              backdropFilter: "blur(10px)",
              color: "#f1f5f9", fontSize: 12, fontWeight: 650,
              boxShadow: active ? `0 6px 26px -6px ${mod.color}` : "0 4px 14px -6px rgba(0,0,0,.6)",
              transition: "background .25s ease, border-color .25s ease, box-shadow .25s ease",
            }}
          >
            <span
              style={{
                display: "grid", placeItems: "center", width: 22, height: 22, borderRadius: 7,
                background: `linear-gradient(135deg, ${mod.color}33, ${mod.color}18)`,
                border: `1px solid ${mod.color}55`, flexShrink: 0,
              }}
            >
              <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke={mod.color} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
                <path d={ICON_PATHS[mod.key]} />
              </svg>
            </span>
            {mod.label}
          </div>
        </Html>
      </group>
    </Float>
  );
}

// ═════════════════ CONNECTORS + ORBIT PATH ═════════════════
function ConnectorLines({ activeKey }: { activeKey: string | null }) {
  const lines = useMemo(
    () =>
      MODULES.map((mod) => {
        const [x, y, z] = nodePosition(mod.angle);
        const geometry = new THREE.BufferGeometry().setFromPoints([
          new THREE.Vector3(0, 0.1, 0),
          new THREE.Vector3(x, y, z),
        ]);
        return { key: mod.key, color: mod.color, geometry };
      }),
    []
  );

  return (
    <>
      {lines.map((l) => {
        const isActive = activeKey === l.key;
        return (
          <line key={l.key} geometry={l.geometry}>
            <lineBasicMaterial
              color={isActive ? l.color : "#3d4166"}
              toneMapped={!isActive}
              transparent
              opacity={isActive ? 1 : 0.28}
            />
          </line>
        );
      })}
    </>
  );
}

function OrbitPath() {
  const points = useMemo(() => {
    const pts: THREE.Vector3[] = [];
    for (let a = 0; a <= 360; a += 4) {
      const [x, y, z] = nodePosition(a);
      pts.push(new THREE.Vector3(x, y, z));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);
  return (
    <line geometry={points}>
      <lineBasicMaterial color="#4c5384" transparent opacity={0.25} />
    </line>
  );
}

// ═════════════════ ECOSYSTEM ═════════════════
function Ecosystem() {
  const orbit = useRef<THREE.Group>(null);
  const world = useRef<THREE.Group>(null);
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useFrame((state, delta) => {
    if (orbit.current) orbit.current.rotation.y += delta * (activeKey ? 0.02 : 0.09);
    if (world.current) {
      const tx = (state.pointer.y * Math.PI) / 26;
      const ty = (state.pointer.x * Math.PI) / 18;
      world.current.rotation.x = THREE.MathUtils.lerp(world.current.rotation.x, tx, 0.04);
      world.current.rotation.y = THREE.MathUtils.lerp(world.current.rotation.y, ty, 0.04);
    }
  });

  return (
    <group ref={world}>
      <SchoolBuilding />
      <group ref={orbit}>
        <OrbitPath />
        <ConnectorLines activeKey={activeKey} />
        {MODULES.map((mod) => (
          <ModuleNode key={mod.key} mod={mod} active={activeKey === mod.key} onHover={setActiveKey} />
        ))}
      </group>
    </group>
  );
}

// ═════════════════ CANVAS + PIPELINE ═════════════════
export default function Hero3DScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 1.35, 7.8], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          {/* base lights */}
          <ambientLight intensity={0.25} />
          <directionalLight position={[4, 7, 4]} intensity={0.5} color="#dbe4ff" />
          <directionalLight position={[-4, -2, -3]} intensity={0.15} color="#a855f7" />

          {/* Procedural environment — real reflections, no HDR file needed.
              Lightformers render into a local env map: a cool key panel,
              a violet rim strip, and a warm floor bounce. */}
          <Environment resolution={64} frames={1}>
            <Lightformer intensity={2.2} color="#c7d2fe" position={[0, 4, 6]} scale={[9, 5, 1]} form="rect" />
            <Lightformer intensity={1.1} color="#a855f7" position={[-6, 1, -4]} rotation={[0, Math.PI / 2.5, 0]} scale={[7, 1.4, 1]} form="rect" />
            <Lightformer intensity={0.9} color="#38bdf8" position={[6, 2, -3]} rotation={[0, -Math.PI / 2.5, 0]} scale={[6, 1.2, 1]} form="rect" />
            <Lightformer intensity={0.5} color="#312e81" position={[0, -4, 0]} rotation={[Math.PI / 2, 0, 0]} scale={[10, 10, 1]} form="rect" />
          </Environment>

          <Sparkles count={50} scale={8} size={1.7} speed={0.2} color="#a5b4fc" opacity={0.4} />
          <Ecosystem />

          {/* game-look post pipeline */}
          <EffectComposer>
            <Bloom intensity={0.85} luminanceThreshold={0.62} luminanceSmoothing={0.25} mipmapBlur />
            <Vignette eskil={false} offset={0.12} darkness={0.55} />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
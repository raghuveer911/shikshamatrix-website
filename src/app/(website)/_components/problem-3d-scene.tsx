// ─────────────────────────────────────────────────────────────
// problem-3d-scene.tsx — v4 (reference-image architecture)
// Classic symmetric school: central block ("SCHOOL" sign, columned
// entrance, steps, flag) + two side wings with cream cornice trim.
//   LEFT  = same building, INCOMPLETE/DECAYED: tilted sunken wing,
//           boarded + flickering windows, bent bare flagpole,
//           hanging sign, ajar door, rubble, tumbling papers.
//   RIGHT = same building, PROPER & ENHANCED: warm brick + cream
//           trim, glowing blue windows, waving flag, trees,
//           lampposts, yellow school bus, rising data stream.
// ─────────────────────────────────────────────────────────────
"use client";

import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Float, Html, Sparkles } from "@react-three/drei";
import * as THREE from "three";

const GROUND_Y = -1.15;
const TOP = GROUND_Y + 0.05; // platform surface

// ═══════════════════ UI CHIPS ═══════════════════
const ICON_PATHS: Record<string, string> = {
  warning: "M12 4 2.5 20h19L12 4Zm0 6v4m0 3v.5",
  files: "M8 3h8l4 4v14H4V5a2 2 0 0 1 2-2h2Zm6 0v5h5",
  phone: "M6 3h4l2 5-2.5 1.5a12 12 0 0 0 5 5L16 12l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 4 5a2 2 0 0 1 2-2Z",
  check: "M4 12.5 9.5 18 20 6.5",
  bell: "M6 9a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6Zm4 9a2 2 0 0 0 4 0",
  chart: "M4 20V6m0 14h16M8 16v-5m4 5V8m4 8v-3",
};

function Chip({ icon, label, tone }: { icon: string; label: string; tone: "red" | "green" }) {
  const c =
    tone === "red"
      ? { fg: "#fecaca", accent: "#f87171", bg: "rgba(32,10,12,.85)", border: "rgba(248,113,113,.4)" }
      : { fg: "#bbf7d0", accent: "#34d399", bg: "rgba(5,24,18,.85)", border: "rgba(52,211,153,.4)" };
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: 7,
        padding: "6px 12px 6px 7px", borderRadius: 999, whiteSpace: "nowrap", userSelect: "none",
        background: c.bg, border: `1px solid ${c.border}`, backdropFilter: "blur(10px)",
        color: c.fg, fontSize: 11.5, fontWeight: 650,
        boxShadow: `0 8px 26px -10px ${c.accent}`,
      }}
    >
      <span style={{ display: "grid", placeItems: "center", width: 20, height: 20, borderRadius: 6, background: `${c.accent}20`, border: `1px solid ${c.accent}40` }}>
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={c.accent} strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
          <path d={ICON_PATHS[icon]} />
        </svg>
      </span>
      {label}
    </div>
  );
}

function JitterChip({ position, icon, label }: { position: [number, number, number]; icon: string; label: string }) {
  const ref = useRef<THREE.Group>(null);
  const seed = useRef(Math.random() * 20);
  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime + seed.current;
    ref.current.position.x = position[0] + Math.sin(t * 2.8) * 0.045;
    ref.current.position.y = position[1] + Math.cos(t * 2.2) * 0.04;
    ref.current.rotation.z = Math.sin(t * 3.8) * 0.05;
  });
  return (
    <group ref={ref} position={position}>
      <Html center distanceFactor={7} zIndexRange={[60, 0]}>
        <Chip icon={icon} label={label} tone="red" />
      </Html>
    </group>
  );
}

function CalmChip({ position, icon, label }: { position: [number, number, number]; icon: string; label: string }) {
  return (
    <Float speed={1.2} floatIntensity={0.4} rotationIntensity={0.06}>
      <group position={position}>
        <Html center distanceFactor={7} zIndexRange={[60, 0]}>
          <Chip icon={icon} label={label} tone="green" />
        </Html>
      </group>
    </Float>
  );
}

// ═══════════════════ PALETTES ═══════════════════
type Palette = {
  brick: string; brickDark: string; trim: string; frame: string;
  glass: string; glassOpacity: number; door: string; roofBox: string;
};

const SMART_PALETTE: Palette = {
  brick: "#a8574a", brickDark: "#94493e", trim: "#e9d9c1", frame: "#f0e4cf",
  glass: "#7fb7f7", glassOpacity: 0.95, door: "#3d6db5", roofBox: "#b05c4e",
};

const BROKEN_PALETTE: Palette = {
  brick: "#584044", brickDark: "#4a353a", trim: "#6e6156", frame: "#5f544b",
  glass: "#171114", glassOpacity: 0.92, door: "#241a20", roofBox: "#4e393e",
};

// ═══════════════════ BUILDING PARTS ═══════════════════

// Window: cream frame + glass; optional boarded planks or red flicker
function WindowUnit({
  position, palette, boarded = false, flicker = false, lit = true, phase = 0,
}: {
  position: [number, number, number]; palette: Palette;
  boarded?: boolean; flicker?: boolean; lit?: boolean; phase?: number;
}) {
  const mat = useRef<THREE.MeshBasicMaterial>(null);
  useFrame((state) => {
    if (!flicker || !mat.current) return;
    const t = state.clock.elapsedTime + phase;
    const pulse = Math.max(0, Math.sin(t * 5.3) * Math.sin(t * 1.7));
    mat.current.opacity = 0.15 + pulse * 0.75;
  });

  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.2, 0.26, 0.03]} />
        <meshPhysicalMaterial color={palette.frame} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0, 0.017]}>
        <planeGeometry args={[0.15, 0.21]} />
        <meshBasicMaterial
          ref={flicker ? mat : undefined}
          color={flicker ? "#f97316" : palette.glass}
          transparent
          opacity={lit ? palette.glassOpacity : 0.12}
        />
      </mesh>
      {boarded && (
        <>
          <mesh position={[0, 0, 0.028]} rotation={[0, 0, 0.5]}>
            <boxGeometry args={[0.26, 0.045, 0.012]} />
            <meshPhysicalMaterial color="#5b4632" roughness={0.9} />
          </mesh>
          <mesh position={[0, 0, 0.034]} rotation={[0, 0, -0.5]}>
            <boxGeometry args={[0.26, 0.045, 0.012]} />
            <meshPhysicalMaterial color="#4e3b2a" roughness={0.9} />
          </mesh>
        </>
      )}
    </group>
  );
}

// Cream cornice band capping a block
function Cornice({ y, w, d, palette, missing = false }: { y: number; w: number; d: number; palette: Palette; missing?: boolean }) {
  if (!missing) {
    return (
      <mesh position={[0, y, 0]}>
        <boxGeometry args={[w, 0.07, d]} />
        <meshPhysicalMaterial color={palette.trim} roughness={0.55} />
      </mesh>
    );
  }
  // broken: one third of the band is gone
  return (
    <mesh position={[-w * 0.17, y, 0]}>
      <boxGeometry args={[w * 0.66, 0.07, d]} />
      <meshPhysicalMaterial color={palette.trim} roughness={0.75} />
    </mesh>
  );
}

// Waving flag on a pole
function Flag({ base, broken = false }: { base: [number, number, number]; broken?: boolean }) {
  const flag = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!flag.current || broken) return;
    flag.current.rotation.y = Math.sin(state.clock.elapsedTime * 3) * 0.28;
  });
  return (
    <group position={base} rotation={broken ? [0, 0, 0.5] : [0, 0, 0]}>
      <mesh position={[0, 0.21, 0]}>
        <cylinderGeometry args={[0.012, 0.014, 0.42, 8]} />
        <meshPhysicalMaterial color="#8a8f9c" metalness={0.5} roughness={0.45} />
      </mesh>
      {!broken && (
        <mesh ref={flag} position={[0.1, 0.36, 0]}>
          <planeGeometry args={[0.2, 0.11]} />
          <meshBasicMaterial color="#dc2626" side={THREE.DoubleSide} />
        </mesh>
      )}
    </group>
  );
}

// SCHOOL sign plaque (Html for crisp text)
function SchoolSign({ position, broken = false }: { position: [number, number, number]; broken?: boolean }) {
  return (
    <group position={position} rotation={broken ? [0, 0, -0.22] : [0, 0, 0]}>
      <Html center distanceFactor={6.5} zIndexRange={[30, 0]}>
        <div
          style={{
            padding: "3px 12px", borderRadius: 4, userSelect: "none", whiteSpace: "nowrap",
            background: broken ? "#57504a" : "#efe0c8",
            border: `1.5px solid ${broken ? "#3d3733" : "#c9b894"}`,
            color: broken ? "#8a8078" : "#4a3527",
            fontFamily: "Georgia, serif", fontSize: 11, fontWeight: 700, letterSpacing: "0.22em",
            boxShadow: broken ? "none" : "0 2px 10px -3px rgba(0,0,0,.5)",
            opacity: broken ? 0.85 : 1,
          }}
        >
          SCHOOL
        </div>
      </Html>
    </group>
  );
}

// Columned entrance: steps, columns, portico roof, double door
function Entrance({ palette, broken = false, frontZ }: { palette: Palette; broken?: boolean; frontZ: number }) {
  return (
    <group position={[0, 0, frontZ]}>
      {/* steps */}
      {[0, 1, 2].map((i) => (
        <mesh key={i} position={[0, TOP + 0.03 + i * 0.05, 0.22 - i * 0.07]}>
          <boxGeometry args={[0.95 - i * 0.12, 0.05, 0.14]} />
          <meshPhysicalMaterial color={palette.trim} roughness={0.6} />
        </mesh>
      ))}
      {/* columns */}
      {[-0.3, 0.3].map((cx) => (
        <mesh key={cx} position={[cx, TOP + 0.45, 0.1]}>
          <cylinderGeometry args={[0.035, 0.04, 0.62, 12]} />
          <meshPhysicalMaterial color={palette.trim} roughness={0.55} />
        </mesh>
      ))}
      {/* portico roof */}
      <mesh position={[0, TOP + 0.8, 0.06]} rotation={broken ? [0, 0, 0.04] : [0, 0, 0]}>
        <boxGeometry args={[0.85, 0.06, 0.32]} />
        <meshPhysicalMaterial color={palette.trim} roughness={0.55} />
      </mesh>
      {/* door frame + double doors */}
      <mesh position={[0, TOP + 0.34, -0.02]}>
        <boxGeometry args={[0.42, 0.6, 0.05]} />
        <meshPhysicalMaterial color={palette.frame} roughness={0.6} />
      </mesh>
      <mesh position={[-0.1, TOP + 0.32, 0.012]}>
        <planeGeometry args={[0.16, 0.5]} />
        <meshBasicMaterial color={palette.door} />
      </mesh>
      {broken ? (
        // right panel ajar
        <mesh position={[0.13, TOP + 0.32, 0.05]} rotation={[0, -0.7, 0]}>
          <planeGeometry args={[0.16, 0.5]} />
          <meshBasicMaterial color={palette.door} side={THREE.DoubleSide} />
        </mesh>
      ) : (
        <mesh position={[0.1, TOP + 0.32, 0.012]}>
          <planeGeometry args={[0.16, 0.5]} />
          <meshBasicMaterial color={palette.door} />
        </mesh>
      )}
    </group>
  );
}

// ── Classic school: central block + two wings (parametric) ──
function ClassicSchool({ palette, broken = false }: { palette: Palette; broken?: boolean }) {
  // window layout per wing: 2 rows × 3 cols
  const wingWindows: { x: number; y: number }[] = [];
  for (const y of [TOP + 0.38, TOP + 0.78]) for (const x of [-0.32, 0, 0.32]) wingWindows.push({ x, y });

  return (
    <group rotation={broken ? [0, 0.18, 0.015] : [0, 0.06, 0]}>
      {/* ── LEFT WING ── */}
      <group position={[-1.08, 0, 0]}>
        <mesh position={[0, TOP + 0.55, 0]}>
          <boxGeometry args={[1.05, 1.1, 0.8]} />
          <meshPhysicalMaterial color={palette.brick} roughness={0.75} />
        </mesh>
        <Cornice y={TOP + 1.13} w={1.17} d={0.92} palette={palette} />
        {wingWindows.map((w, i) => (
          <WindowUnit
            key={i}
            position={[w.x, w.y, 0.415]}
            palette={palette}
            lit={!broken || [1, 4].includes(i)}
            flicker={broken && i === 1}
            boarded={broken && i === 3}
            phase={i * 1.9}
          />
        ))}
      </group>

      {/* ── RIGHT WING — broken: sunken & leaning ── */}
      <group position={broken ? [1.06, -0.07, 0.02] : [1.08, 0, 0]} rotation={broken ? [0.02, -0.1, -0.07] : [0, 0, 0]}>
        <mesh position={[0, TOP + 0.55, 0]}>
          <boxGeometry args={[1.05, 1.1, 0.8]} />
          <meshPhysicalMaterial color={palette.brickDark} roughness={0.8} />
        </mesh>
        <Cornice y={TOP + 1.13} w={1.17} d={0.92} palette={palette} missing={broken} />
        {wingWindows.map((w, i) => (
          <WindowUnit
            key={i}
            position={[w.x, w.y, 0.415]}
            palette={palette}
            lit={!broken || i === 2}
            flicker={broken && i === 4}
            boarded={broken && i === 0}
            phase={i * 2.3}
          />
        ))}
      </group>

      {/* ── CENTRAL BLOCK ── */}
      <group>
        <mesh position={[0, TOP + 0.75, 0.1]}>
          <boxGeometry args={[1.15, 1.5, 1.0]} />
          <meshPhysicalMaterial color={palette.brick} roughness={0.72} />
        </mesh>
        <Cornice y={TOP + 1.53} w={1.28} d={1.12} palette={palette} />
        {/* rooftop box + its trim */}
        <mesh position={broken ? [0.06, TOP + 1.65, 0.1] : [0, TOP + 1.66, 0.1]} rotation={broken ? [0, 0.15, -0.05] : [0, 0, 0]}>
          <boxGeometry args={[0.55, 0.18, 0.5]} />
          <meshPhysicalMaterial color={palette.roofBox} roughness={0.7} />
        </mesh>
        {!broken && (
          <mesh position={[0, TOP + 1.77, 0.1]}>
            <boxGeometry args={[0.62, 0.05, 0.57]} />
            <meshPhysicalMaterial color={palette.trim} roughness={0.55} />
          </mesh>
        )}
        <Flag base={[0, TOP + (broken ? 1.72 : 1.8), 0.1]} broken={broken} />

        {/* upper windows (2) */}
        {[-0.22, 0.22].map((x, i) => (
          <WindowUnit key={i} position={[x, TOP + 1.18, 0.615]} palette={palette} lit={!broken} boarded={broken && i === 0} flicker={broken && i === 1} phase={i * 3.1} />
        ))}

        <SchoolSign position={[0, TOP + 0.92, 0.63]} broken={broken} />
        <Entrance palette={palette} broken={broken} frontZ={0.61} />
      </group>

      {/* rubble at the base — broken only */}
      {broken && (
        <>
          {[
            { p: [0.55, TOP + 0.05, 0.75], r: 0.5, s: 0.1 },
            { p: [-0.4, TOP + 0.04, 0.85], r: 1.2, s: 0.08 },
            { p: [1.5, TOP + 0.05, 0.6], r: 2.1, s: 0.11 },
            { p: [-1.6, TOP + 0.04, 0.7], r: 0.8, s: 0.07 },
          ].map((b, i) => (
            <mesh key={i} position={b.p as [number, number, number]} rotation={[b.r, b.r * 0.7, 0]}>
              <boxGeometry args={[b.s, b.s * 0.7, b.s]} />
              <meshPhysicalMaterial color="#4c4046" roughness={0.95} />
            </mesh>
          ))}
        </>
      )}
    </group>
  );
}

// ═══════════════════ ENVIRONMENT PROPS (smart side) ═══════════════════
function Tree({ position, scale = 1 }: { position: [number, number, number]; scale?: number }) {
  return (
    <group position={position} scale={scale}>
      <mesh position={[0, 0.12, 0]}>
        <cylinderGeometry args={[0.03, 0.04, 0.24, 8]} />
        <meshPhysicalMaterial color="#6b4a32" roughness={0.85} />
      </mesh>
      {[0.28, 0.44, 0.58].map((y, i) => (
        <mesh key={i} position={[0, y, 0]}>
          <coneGeometry args={[0.22 - i * 0.055, 0.24, 10]} />
          <meshPhysicalMaterial color={i === 1 ? "#2f8f4e" : "#256e3f"} roughness={0.7} />
        </mesh>
      ))}
    </group>
  );
}

function LampPost({ position }: { position: [number, number, number] }) {
  return (
    <group position={position}>
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.015, 0.02, 0.6, 8]} />
        <meshPhysicalMaterial color="#2a3040" metalness={0.5} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.63, 0]}>
        <sphereGeometry args={[0.045, 12, 12]} />
        <meshBasicMaterial color="#fcd34d" transparent opacity={0.95} />
      </mesh>
      <pointLight color="#fcd34d" intensity={0.5} distance={1.4} position={[0, 0.63, 0]} />
    </group>
  );
}

function SchoolBus({ position, rotationY = 0 }: { position: [number, number, number]; rotationY?: number }) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      {/* body */}
      <mesh position={[0, 0.19, 0]}>
        <boxGeometry args={[0.85, 0.3, 0.34]} />
        <meshPhysicalMaterial color="#f5b923" roughness={0.3} clearcoat={0.8} />
      </mesh>
      {/* hood */}
      <mesh position={[0.52, 0.13, 0]}>
        <boxGeometry args={[0.2, 0.18, 0.32]} />
        <meshPhysicalMaterial color="#f5b923" roughness={0.3} clearcoat={0.8} />
      </mesh>
      {/* window strip */}
      <mesh position={[0, 0.26, 0.175]}>
        <planeGeometry args={[0.7, 0.11]} />
        <meshBasicMaterial color="#bfdbfe" />
      </mesh>
      {/* black stripe */}
      <mesh position={[0, 0.13, 0.175]}>
        <planeGeometry args={[0.8, 0.03]} />
        <meshBasicMaterial color="#1f2937" />
      </mesh>
      {/* wheels */}
      {[-0.28, 0.34].map((wx) => (
        <mesh key={wx} position={[wx, 0.05, 0.15]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.075, 0.075, 0.06, 16]} />
          <meshPhysicalMaterial color="#111827" roughness={0.85} />
        </mesh>
      ))}
      {/* headlight */}
      <mesh position={[0.63, 0.13, 0.1]}>
        <sphereGeometry args={[0.025, 10, 10]} />
        <meshBasicMaterial color="#fef9c3" />
      </mesh>
      <pointLight color="#fde68a" intensity={0.4} distance={1} position={[0.7, 0.13, 0.1]} />
    </group>
  );
}

// ═══════════════════ AMBIENT FX ═══════════════════
function TumblingPapers({ count = 6 }: { count?: number }) {
  const papers = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: (Math.random() - 0.5) * 3.4,
        z: (Math.random() - 0.5) * 1.6 + 0.5,
        startY: Math.random() * 1.8 + 0.6,
        speed: 0.25 + Math.random() * 0.2,
        spin: 0.8 + Math.random() * 1.4,
        phase: i * 2.3,
      })),
    [count]
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    papers.forEach((p, i) => {
      const m = refs.current[i];
      if (!m) return;
      const cycle = 3.2;
      const local = ((t * p.speed + p.phase) % cycle) / cycle;
      m.position.set(p.x + Math.sin(t * 0.9 + p.phase) * 0.25, p.startY + 1.1 - local * 2.5, p.z);
      m.rotation.set(t * p.spin, t * p.spin * 0.7 + p.phase, t * p.spin * 0.4);
      (m.material as THREE.MeshBasicMaterial).opacity = local < 0.08 ? local / 0.08 : local > 0.85 ? (1 - local) / 0.15 : 1;
    });
  });

  return (
    <>
      {papers.map((_, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <planeGeometry args={[0.15, 0.2]} />
          <meshBasicMaterial color="#d6d3d1" transparent opacity={0.9} side={THREE.DoubleSide} />
        </mesh>
      ))}
    </>
  );
}

function DataStream({ count = 7 }: { count?: number }) {
  const dots = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        x: (Math.random() - 0.5) * 0.6,
        z: (Math.random() - 0.5) * 0.4 + 0.1,
        speed: 0.35 + Math.random() * 0.25,
        phase: i * 1.9,
        color: i % 3 === 0 ? "#34d399" : "#818cf8",
      })),
    [count]
  );
  const refs = useRef<(THREE.Mesh | null)[]>([]);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    dots.forEach((d, i) => {
      const m = refs.current[i];
      if (!m) return;
      const cycle = 2.8;
      const local = ((t * d.speed + d.phase) % cycle) / cycle;
      m.position.set(d.x, TOP + 1.85 + local * 1.9, d.z);
      (m.material as THREE.MeshBasicMaterial).opacity = local < 0.12 ? local / 0.12 : 1 - local * 0.85;
      m.scale.setScalar(1 - local * 0.5);
    });
  });

  return (
    <>
      {dots.map((d, i) => (
        <mesh key={i} ref={(el) => { refs.current[i] = el; }}>
          <sphereGeometry args={[0.032, 12, 12]} />
          <meshBasicMaterial color={d.color} transparent opacity={0.9} />
        </mesh>
      ))}
    </>
  );
}

function Platform({ color, rimColor, rimOpacity }: { color: string; rimColor: string; rimOpacity: number }) {
  return (
    <group position={[0, GROUND_Y, 0]}>
      <mesh>
        <cylinderGeometry args={[2.2, 2.35, 0.1, 48]} />
        <meshPhysicalMaterial color={color} roughness={0.55} metalness={0.25} />
      </mesh>
      <mesh position={[0, 0.055, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <ringGeometry args={[2.05, 2.18, 48]} />
        <meshBasicMaterial color={rimColor} transparent opacity={rimOpacity} side={THREE.DoubleSide} />
      </mesh>
    </group>
  );
}

// ═══════════════════ SIDES ═══════════════════
function BrokenSchool() {
  return (
    <group>
      <Platform color="#1a1318" rimColor="#7f1d1d" rimOpacity={0.35} />
      <ClassicSchool palette={BROKEN_PALETTE} broken />
      <TumblingPapers />
      <pointLight color="#991b1b" intensity={2} distance={5.5} position={[0, TOP + 1.1, 1.4]} />

      <JitterChip position={[-1.95, 1.35, 0.5]} icon="files" label="Paper Files" />
      <JitterChip position={[1.9, 1.55, 0.3]} icon="warning" label="Fee Dues" />
      <JitterChip position={[-1.7, 0.05, 1.0]} icon="phone" label="Missed Calls" />
    </group>
  );
}

function SmartSchool() {
  return (
    <group>
      <Platform color="#141c38" rimColor="#6366f1" rimOpacity={0.8} />
      <ClassicSchool palette={SMART_PALETTE} />

      {/* environment — like the reference image */}
      <Tree position={[-1.85, TOP, 0.65]} scale={1.05} />
      <Tree position={[1.9, TOP, 0.55]} scale={0.85} />
      <LampPost position={[-1.35, TOP, 1.05]} />
      <LampPost position={[1.3, TOP, 1.05]} />
      <SchoolBus position={[0.95, TOP, 1.25]} rotationY={-0.35} />

      <DataStream />
      <pointLight color="#6366f1" intensity={3.2} distance={6} position={[0, TOP + 1.4, 1.6]} />

      <CalmChip position={[-1.9, 1.55, 0.5]} icon="check" label="Fees On Time" />
      <CalmChip position={[1.95, 1.8, 0.3]} icon="chart" label="Auto Reports" />
      <CalmChip position={[1.8, 0.35, 1.1]} icon="bell" label="Live Alerts" />
    </group>
  );
}

// ═══════════════════ ARROW + SCENE ═══════════════════
function TransitionArrow() {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.position.x = Math.sin(state.clock.elapsedTime * 1.5) * 0.09;
  });
  return (
    <group ref={ref} position={[0, 0.45, 1.2]}>
      <Html center distanceFactor={7} zIndexRange={[50, 0]}>
        <div
          style={{
            display: "flex", alignItems: "center",
            padding: "9px 16px", borderRadius: 999, userSelect: "none",
            background: "linear-gradient(135deg, rgba(99,102,241,.24), rgba(139,92,246,.14))",
            border: "1px solid rgba(165,180,252,.45)", backdropFilter: "blur(10px)",
            boxShadow: "0 0 30px -6px rgba(129,140,248,.85)",
          }}
        >
          <svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="#c7d2fe" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 12h16m-6-6 6 6-6 6" />
          </svg>
        </div>
      </Html>
    </group>
  );
}

function Scene() {
  const world = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!world.current) return;
    const ty = state.pointer.x * 0.16;
    const tx = -state.pointer.y * 0.05;
    world.current.rotation.y = THREE.MathUtils.lerp(world.current.rotation.y, ty, 0.04);
    world.current.rotation.x = THREE.MathUtils.lerp(world.current.rotation.x, tx, 0.04);
  });

  return (
    <>
      <ambientLight intensity={0.38} />
      <directionalLight position={[4, 7, 5]} intensity={0.75} color="#e2e8ff" />
      <directionalLight position={[-6, 3, -2]} intensity={0.2} color="#f87171" />
      <directionalLight position={[6, 3, -2]} intensity={0.26} color="#818cf8" />

      <group ref={world}>
        <group position={[-2.65, 0, 0]}>
          <BrokenSchool />
        </group>

        <TransitionArrow />

        <group position={[2.65, 0, 0]}>
          <SmartSchool />
        </group>

        <ContactShadows position={[0, GROUND_Y - 0.06, 0]} opacity={0.55} scale={14} blur={2.6} far={2.2} color="#000000" />
      </group>

      <Sparkles count={32} scale={9} size={1.5} speed={0.16} color="#a5b4fc" opacity={0.28} />
    </>
  );
}

export default function Problem3DScene() {
  return (
    <div className="h-full w-full">
      <Canvas camera={{ position: [0, 1.2, 7.6], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  );
}
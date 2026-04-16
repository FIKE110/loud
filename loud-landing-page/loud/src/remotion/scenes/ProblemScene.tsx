import {
  AbsoluteFill,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

const FONT = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";

const problems = [
  { icon: "\u{1F4B8}", text: "Millions lost on untrustworthy projects" },
  { icon: "\u{1F50B}", text: "No visibility on project progress" },
  { icon: "\u{1F4C9}", text: "Over budget & delayed timelines" },
];

export const ProblemScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });
  const statOpacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const statScale = spring({ frame: frame - 25, fps, config: { damping: 15 } });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #1a0a0a 50%, #0d1526 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT, padding: 80 }}>
      <div style={{ position: "absolute", width: 500, height: 500, borderRadius: "50%", background: "radial-gradient(circle, rgba(239,68,68,0.1) 0%, transparent 70%)", top: "30%", right: "10%" }} />
      <h2 style={{ fontSize: 56, fontWeight: 800, color: "#ffffff", textAlign: "center", margin: "0 0 48px 0", opacity: titleOpacity, transform: `translateY(${titleY}px)`, letterSpacing: "-0.02em" }}>
        The <span style={{ color: "#ef4444" }}>Problem</span>
      </h2>
      <div style={{ opacity: statOpacity, transform: `scale(${statScale})`, textAlign: "center", marginBottom: 48 }}>
        <div style={{ fontSize: 100, fontWeight: 800, color: "#ef4444", lineHeight: 1 }}>50M+</div>
        <div style={{ fontSize: 26, color: "rgba(255,255,255,0.7)", marginTop: 12 }}>African Diasporas affected</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 20, maxWidth: 700 }}>
        {problems.map((problem, i) => {
          const delay = 50 + i * 18;
          const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
          const x = interpolate(frame, [delay, delay + 15], [60, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });
          return (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, opacity, transform: `translateX(${x}px)`, background: "rgba(255,255,255,0.04)", borderRadius: 16, padding: "20px 28px", border: "1px solid rgba(239,68,68,0.2)" }}>
              <span style={{ fontSize: 36 }}>{problem.icon}</span>
              <span style={{ fontSize: 24, color: "rgba(255,255,255,0.85)", fontWeight: 600 }}>{problem.text}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

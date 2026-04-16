import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

const FONT = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";

const stats = [
  { value: "95%", label: "Faster Procurement", color: "#01B2FE" },
  { value: "80%", label: "Cost Savings", color: "#10b981" },
  { value: "30%", label: "Better Pricing", color: "#f59e0b" },
];

export const StatsScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1628 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT, padding: 80 }}>
      <h2 style={{ fontSize: 48, fontWeight: 800, color: "#ffffff", textAlign: "center", margin: "0 0 64px 0", opacity: titleOpacity }}>The Numbers Speak</h2>
      <div style={{ display: "flex", gap: 60, alignItems: "center" }}>
        {stats.map((stat, i) => {
          const delay = 20 + i * 20;
          const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
          const scale = spring({ frame: frame - delay, fps, config: { damping: 12 } });
          return (
            <div key={i} style={{ textAlign: "center", opacity, transform: `scale(${scale})` }}>
              <div style={{ width: 220, height: 220, borderRadius: "50%", background: `radial-gradient(circle, ${stat.color}15 0%, transparent 70%)`, border: `2px solid ${stat.color}40`, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", marginBottom: 20 }}>
                <div style={{ fontSize: 64, fontWeight: 800, color: stat.color, lineHeight: 1 }}>{stat.value}</div>
              </div>
              <div style={{ fontSize: 20, fontWeight: 600, color: "rgba(255,255,255,0.7)", maxWidth: 200 }}>{stat.label}</div>
            </div>
          );
        })}
      </div>
      <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", marginTop: 56, opacity: interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }), fontStyle: "italic" }}>
        Value for your money. Projects completed on budget.
      </p>
    </AbsoluteFill>
  );
};

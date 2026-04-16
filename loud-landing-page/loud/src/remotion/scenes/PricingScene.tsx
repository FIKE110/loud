import { AbsoluteFill, useCurrentFrame, useVideoConfig, interpolate, spring } from "remotion";

const FONT = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";

const plans = [
  { name: "Freemium", price: "$0", highlight: false },
  { name: "Creator Pack", price: "$42", highlight: false },
  { name: "Pro Access", price: "$80", highlight: true },
  { name: "Lifetime", price: "$3000", highlight: false },
];

export const PricingScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [0, 18], [25, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1628 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT, padding: 80 }}>
      <h2 style={{ fontSize: 52, fontWeight: 800, color: "#ffffff", textAlign: "center", margin: "0 0 16px 0", opacity: titleOpacity, transform: `translateY(${titleY}px)`, letterSpacing: "-0.02em" }}>
        Invest in Your <span style={{ color: "#01B2FE" }}>Prosperity</span>
      </h2>
      <p style={{ fontSize: 22, color: "rgba(255,255,255,0.5)", margin: "0 0 48px 0", opacity: interpolate(frame, [18, 32], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }) }}>Pre-launch pricing available now</p>
      <div style={{ display: "flex", gap: 24 }}>
        {plans.map((plan, i) => {
          const delay = 22 + i * 14;
          const opacity = interpolate(frame, [delay, delay + 14], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
          const scale = spring({ frame: frame - delay, fps, config: { damping: 15 } });
          return (
            <div key={i} style={{ background: plan.highlight ? "linear-gradient(135deg, rgba(1,178,254,0.15), rgba(1,178,254,0.05))" : "rgba(255,255,255,0.04)", border: plan.highlight ? "2px solid rgba(1,178,254,0.5)" : "1px solid rgba(255,255,255,0.1)", borderRadius: 24, padding: "36px 32px", textAlign: "center", width: 220, opacity, transform: `scale(${scale})`, position: "relative" }}>
              {plan.highlight && <div style={{ position: "absolute", top: -12, left: "50%", transform: "translateX(-50%)", background: "#01B2FE", color: "#fff", fontSize: 13, fontWeight: 700, padding: "4px 16px", borderRadius: 12 }}>POPULAR</div>}
              <div style={{ fontSize: 18, fontWeight: 600, color: "rgba(255,255,255,0.7)", marginBottom: 16 }}>{plan.name}</div>
              <div style={{ fontSize: 44, fontWeight: 800, color: plan.highlight ? "#01B2FE" : "#ffffff" }}>{plan.price}</div>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

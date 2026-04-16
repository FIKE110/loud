import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

const FONT = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";

const features = [
  { icon: "\u{1F512}", title: "Trust", desc: "Verified professionals & transparent processes" },
  { icon: "\u{26A1}", title: "Efficiency", desc: "95% faster procurement workflows" },
  { icon: "\u{1F465}", title: "Community", desc: "Connect with diaspora & local talent" },
  { icon: "\u{1F6E1}", title: "Safety", desc: "Escrow payments & milestone tracking" },
  { icon: "\u{1F3AF}", title: "Custom", desc: "Tailored solutions for every project" },
  { icon: "\u{26A1}", title: "Instant", desc: "Real-time bidding & instant awards" },
];

export const FeaturesScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [0, 18], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1628 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT, padding: 80 }}>
      <div style={{ position: "absolute", width: 700, height: 700, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,178,254,0.08) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
      <h2 style={{ fontSize: 52, fontWeight: 800, color: "#ffffff", textAlign: "center", margin: "0 0 56px 0", opacity: titleOpacity, transform: `translateY(${titleY}px)`, letterSpacing: "-0.02em" }}>
        Expressively <span style={{ color: "#01B2FE" }}>Loud</span>
      </h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, maxWidth: 1000 }}>
        {features.map((feature, i) => {
          const col = i % 3;
          const row = Math.floor(i / 3);
          const delay = 22 + (row * 3 + col) * 8;
          const opacity = interpolate(frame, [delay, delay + 14], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
          const y = interpolate(frame, [delay, delay + 14], [40, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });
          return (
            <div key={i} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(1,178,254,0.15)", borderRadius: 20, padding: "32px 28px", opacity, transform: `translateY(${y}px)`, display: "flex", flexDirection: "column", gap: 12 }}>
              <span style={{ fontSize: 40 }}>{feature.icon}</span>
              <span style={{ fontSize: 24, fontWeight: 700, color: "#01B2FE" }}>{feature.title}</span>
              <span style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.4 }}>{feature.desc}</span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

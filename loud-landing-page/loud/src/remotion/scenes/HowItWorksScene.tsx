import { AbsoluteFill, useCurrentFrame, interpolate, Easing } from "remotion";

const FONT = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";

const steps = [
  { number: "01", title: "Create Your Project", desc: "Post your project with details, budget, and timeline" },
  { number: "02", title: "Discover & Bid", desc: "Contractors discover and submit competitive bids" },
  { number: "03", title: "Award & Build", desc: "Select the best contractor and track progress live" },
];

export const HowItWorksScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 18], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [0, 18], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1628 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT, padding: 80 }}>
      <h2 style={{ fontSize: 52, fontWeight: 800, color: "#ffffff", textAlign: "center", margin: "0 0 64px 0", opacity: titleOpacity, transform: `translateY(${titleY}px)`, letterSpacing: "-0.02em" }}>
        How <span style={{ color: "#01B2FE" }}>LOUD!</span> Works
      </h2>
      <div style={{ display: "flex", gap: 40, alignItems: "flex-start" }}>
        {steps.map((step, i) => {
          const delay = 22 + i * 22;
          const opacity = interpolate(frame, [delay, delay + 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
          const y = interpolate(frame, [delay, delay + 15], [50, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });
          const arrowOpacity = interpolate(frame, [delay + 20, delay + 30], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
          return (
            <div key={i} style={{ display: "flex", alignItems: "flex-start" }}>
              <div style={{ textAlign: "center", opacity, transform: `translateY(${y}px)`, width: 280 }}>
                <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg, #01B2FE, #00567a)", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto 20px", fontSize: 28, fontWeight: 800, color: "#ffffff", boxShadow: "0 0 30px rgba(1,178,254,0.3)" }}>{step.number}</div>
                <h3 style={{ fontSize: 24, fontWeight: 700, color: "#ffffff", margin: "0 0 12px 0" }}>{step.title}</h3>
                <p style={{ fontSize: 17, color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: 0 }}>{step.desc}</p>
              </div>
              {i < steps.length - 1 && <div style={{ opacity: arrowOpacity, fontSize: 36, color: "#01B2FE", margin: "20px 8px 0", fontWeight: 300 }}>&rarr;</div>}
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};

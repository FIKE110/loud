import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  useVideoConfig,
  interpolate,
  spring,
  Easing,
} from "remotion";

const FONT = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";
const connections = ["Contractors", "Engineers", "Builders", "Content Creators", "Entrepreneurs"];

export const SolutionScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleScale = spring({ frame, fps, config: { damping: 20 } });
  const descOpacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [25, 45], [25, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });
  const phoneOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const phoneY = interpolate(frame, [35, 55], [60, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.cubic) });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0a1628 50%, #0d1526 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT, padding: 60 }}>
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,178,254,0.12) 0%, transparent 70%)", top: "40%", left: "50%", transform: "translate(-50%, -50%)" }} />
      <div style={{ display: "flex", alignItems: "center", gap: 80, maxWidth: 1200 }}>
        <div style={{ flex: 1 }}>
          <h2 style={{ fontSize: 52, fontWeight: 800, color: "#ffffff", margin: "0 0 24px 0", opacity: titleOpacity, transform: `scale(${titleScale})`, letterSpacing: "-0.02em" }}>
            Meet <span style={{ color: "#01B2FE" }}>LOUD!</span>
          </h2>
          <p style={{ fontSize: 24, color: "rgba(255,255,255,0.7)", lineHeight: 1.5, margin: "0 0 36px 0", opacity: descOpacity, transform: `translateY(${descY}px)` }}>
            The platform connecting African Diasporas with trusted professionals for 10x faster project delivery.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {connections.map((item, i) => {
              const delay = 50 + i * 10;
              const opacity = interpolate(frame, [delay, delay + 12], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
              const scale = spring({ frame: frame - delay, fps, config: { damping: 15 } });
              return (
                <div key={i} style={{ background: "rgba(1,178,254,0.15)", border: "1px solid rgba(1,178,254,0.3)", borderRadius: 24, padding: "10px 20px", fontSize: 18, fontWeight: 600, color: "#01B2FE", opacity, transform: `scale(${scale})` }}>
                  {item}
                </div>
              );
            })}
          </div>
        </div>
        <div style={{ opacity: phoneOpacity, transform: `translateY(${phoneY}px)`, position: "relative" }}>
          <div style={{ width: 320, height: 500, borderRadius: 32, overflow: "hidden", border: "3px solid rgba(1,178,254,0.3)", boxShadow: "0 0 60px rgba(1,178,254,0.15)" }}>
            <Img src={staticFile("assets/img/heroimg2.png")} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

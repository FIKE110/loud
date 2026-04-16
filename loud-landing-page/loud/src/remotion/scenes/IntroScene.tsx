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

export const IntroScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 15, stiffness: 120 } });
  const logoOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });

  const titleOpacity = interpolate(frame, [20, 35], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleY = interpolate(frame, [20, 35], [40, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });

  const subtitleOpacity = interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const subtitleY = interpolate(frame, [40, 55], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1628 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT }}>
      <div style={{ position: "absolute", width: 600, height: 600, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,178,254,0.15) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: interpolate(frame, [0, 30], [0, 1], { extrapolateRight: "clamp" }) }} />
      <div style={{ opacity: logoOpacity, transform: `scale(${logoScale})`, marginBottom: 24 }}>
        <Img src={staticFile("whitelogo.png")} style={{ width: 140, height: 140, objectFit: "contain" }} />
      </div>
      <h1 style={{ fontSize: 72, fontWeight: 800, color: "#ffffff", textAlign: "center", margin: 0, opacity: titleOpacity, transform: `translateY(${titleY}px)`, letterSpacing: "-0.03em" }}>
        <span style={{ color: "#01B2FE" }}>LOUD</span>!
      </h1>
      <p style={{ fontSize: 28, fontWeight: 400, color: "rgba(255,255,255,0.7)", textAlign: "center", margin: "16px 0 0 0", opacity: subtitleOpacity, transform: `translateY(${subtitleY}px)`, maxWidth: 700, lineHeight: 1.4 }}>
        Defining Africa's Digital Future
      </p>
      <div style={{ position: "absolute", bottom: 120, width: interpolate(frame, [50, 80], [0, 200], { extrapolateRight: "clamp", extrapolateLeft: "clamp" }), height: 3, background: "linear-gradient(90deg, transparent, #01B2FE, transparent)", borderRadius: 2 }} />
    </AbsoluteFill>
  );
};

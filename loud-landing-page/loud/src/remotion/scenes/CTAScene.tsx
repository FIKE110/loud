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

export const CTAScene: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoScale = spring({ frame, fps, config: { damping: 15 } });
  const titleOpacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const titleScale = spring({ frame: frame - 15, fps, config: { damping: 12 } });
  const descOpacity = interpolate(frame, [35, 55], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const descY = interpolate(frame, [35, 55], [30, 0], { extrapolateRight: "clamp", extrapolateLeft: "clamp", easing: Easing.out(Easing.quad) });
  const buttonOpacity = interpolate(frame, [55, 70], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const buttonScale = spring({ frame: frame - 55, fps, config: { damping: 10 } });
  const urlOpacity = interpolate(frame, [75, 90], [0, 1], { extrapolateRight: "clamp", extrapolateLeft: "clamp" });
  const pulse = interpolate(frame % 60, [0, 30, 60], [1, 1.05, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill style={{ background: "linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1628 100%)", justifyContent: "center", alignItems: "center", fontFamily: FONT }}>
      <div style={{ position: "absolute", width: 800, height: 800, borderRadius: "50%", background: "radial-gradient(circle, rgba(1,178,254,0.12) 0%, transparent 70%)", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }} />
      <div style={{ transform: `scale(${logoScale})`, marginBottom: 32 }}>
        <Img src={staticFile("whitelogo.png")} style={{ width: 100, height: 100, objectFit: "contain" }} />
      </div>
      <h2 style={{ fontSize: 60, fontWeight: 800, color: "#ffffff", textAlign: "center", margin: "0 0 20px 0", opacity: titleOpacity, transform: `scale(${titleScale})`, letterSpacing: "-0.02em" }}>Join the Future</h2>
      <p style={{ fontSize: 26, color: "rgba(255,255,255,0.6)", textAlign: "center", margin: "0 0 48px 0", opacity: descOpacity, transform: `translateY(${descY}px)`, maxWidth: 600, lineHeight: 1.4 }}>
        Pre-order LOUD! today and be part of Africa's digital transformation
      </p>
      <div style={{ opacity: buttonOpacity, transform: `scale(${buttonScale * pulse})` }}>
        <div style={{ background: "linear-gradient(135deg, #01B2FE, #00567a)", color: "#ffffff", fontSize: 26, fontWeight: 700, padding: "20px 64px", borderRadius: 50, boxShadow: "0 0 40px rgba(1,178,254,0.4)" }}>
          Pre-order Now &rarr;
        </div>
      </div>
      <p style={{ fontSize: 20, color: "rgba(255,255,255,0.4)", marginTop: 36, opacity: urlOpacity, letterSpacing: "0.05em" }}>loudproductslimited.com</p>
    </AbsoluteFill>
  );
};

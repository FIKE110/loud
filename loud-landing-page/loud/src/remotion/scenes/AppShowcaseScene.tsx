import {
  AbsoluteFill,
  Img,
  staticFile,
  useCurrentFrame,
  interpolate,
  Easing,
} from "remotion";

const FONT = "'Plus Jakarta Sans', 'Segoe UI', sans-serif";

const SCREENSHOTS = [
  "assets/img/heroimg.png",
  "assets/img/heroimg2.png",
  "assets/img/heroimg3.png",
];

export const AppShowcaseScene: React.FC = () => {
  const frame = useCurrentFrame();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });
  const titleY = interpolate(frame, [0, 20], [30, 0], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.out(Easing.quad),
  });

  const phoneOpacity = interpolate(frame, [10, 30], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const rotateY = interpolate(frame, [0, 150], [25, -15], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
    easing: Easing.inOut(Easing.quad),
  });

  const rotateX = interpolate(frame, [0, 150], [8, 5], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const tiltCycle = interpolate(frame % 180, [0, 90, 180], [-8, 8, -8], {
    extrapolateRight: "clamp",
  });

  const floatY = interpolate(frame % 120, [0, 60, 120], [0, -12, 0], {
    extrapolateRight: "clamp",
  });

  const descOpacity = interpolate(frame, [30, 50], [0, 1], {
    extrapolateRight: "clamp",
    extrapolateLeft: "clamp",
  });

  const screenshotIndex = Math.min(
    Math.floor(interpolate(frame, [0, 150], [0, SCREENSHOTS.length], { extrapolateRight: "clamp" })),
    SCREENSHOTS.length - 1
  );

  return (
    <AbsoluteFill
      style={{
        background: "linear-gradient(135deg, #0a0e1a 0%, #0d1526 50%, #0a1628 100%)",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: FONT,
        perspective: 1200,
      }}
    >
      <div
        style={{
          position: "absolute",
          width: 700,
          height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,178,254,0.15) 0%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(1,178,254,0.08) 0%, transparent 70%)",
          top: "35%",
          left: "30%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <h2
        style={{
          fontSize: 48,
          fontWeight: 800,
          color: "#ffffff",
          textAlign: "center",
          margin: "0 0 48px 0",
          opacity: titleOpacity,
          transform: `translateY(${titleY}px)`,
          letterSpacing: "-0.02em",
        }}
      >
        Built for the <span style={{ color: "#01B2FE" }}>Diaspora</span>
      </h2>

      <div
        style={{
          opacity: phoneOpacity,
          transform: `translateY(${floatY}px)`,
          display: "flex",
          alignItems: "center",
          gap: 60,
        }}
      >
        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotateY + tiltCycle}deg) rotateX(${rotateX}deg)`,
            transition: "transform 0.1s linear",
          }}
        >
          <PhoneMockup src={staticFile(SCREENSHOTS[screenshotIndex])} />
        </div>

        <div style={{ maxWidth: 400, opacity: descOpacity }}>
          <h3
            style={{
              fontSize: 32,
              fontWeight: 700,
              color: "#01B2FE",
              margin: "0 0 16px 0",
            }}
          >
            Your Project, Your Way
          </h3>
          <p
            style={{
              fontSize: 20,
              color: "rgba(255,255,255,0.6)",
              lineHeight: 1.6,
              margin: "0 0 24px 0",
            }}
          >
            Post projects, track milestones, and connect with verified professionals — all from your phone.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {[
              "Real-time project tracking",
              "Secure escrow payments",
              "Verified contractor profiles",
            ].map((item, i) => {
              const delay = 55 + i * 12;
              const op = interpolate(frame, [delay, delay + 12], [0, 1], {
                extrapolateRight: "clamp",
                extrapolateLeft: "clamp",
              });
              return (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    opacity: op,
                  }}
                >
                  <div
                    style={{
                      width: 8,
                      height: 8,
                      borderRadius: "50%",
                      background: "#01B2FE",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontSize: 17,
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    {item}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};

const PhoneMockup: React.FC<{ src: string }> = ({ src }) => {
  return (
    <div
      style={{
        width: 300,
        height: 600,
        borderRadius: 40,
        overflow: "hidden",
        border: "4px solid #2a2a3a",
        boxShadow:
          "0 0 60px rgba(1,178,254,0.2), 0 20px 60px rgba(0,0,0,0.5), inset 0 0 2px rgba(1,178,254,0.1)",
        position: "relative",
        background: "#0a0e1a",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 120,
          height: 28,
          borderRadius: "0 0 16px 16px",
          background: "#1a1a2e",
          zIndex: 2,
        }}
      />
      <Img
        src={src}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </div>
  );
};

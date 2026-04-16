import { AbsoluteFill } from "remotion";

export const TestScene: React.FC = () => {
  return (
    <AbsoluteFill
      style={{
        background: "#0a0e1a",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1 style={{ color: "#01B2FE", fontSize: 72, fontWeight: 800 }}>
        LOUD!
      </h1>
    </AbsoluteFill>
  );
};

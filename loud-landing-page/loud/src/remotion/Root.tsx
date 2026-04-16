import { Composition } from "remotion";
import { ProductVideo } from "./ProductVideo";

const FPS = 30;
// Intro 3s + Problem 6s + Solution 6s + AppShowcase 6s + Features 7s + Stats 5s + HowItWorks 5s + Pricing 5s + CTA 5s = 48s
const TOTAL_FRAMES = 48 * FPS;

export const RemotionRoot = () => {
  return (
    <Composition
      id="LoudProductVideo"
      component={ProductVideo}
      durationInFrames={TOTAL_FRAMES}
      fps={FPS}
      width={1920}
      height={1080}
    />
  );
};

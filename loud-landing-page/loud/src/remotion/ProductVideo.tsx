import { AbsoluteFill, Sequence } from "remotion";

import { IntroScene } from "./scenes/IntroScene";
import { ProblemScene } from "./scenes/ProblemScene";
import { SolutionScene } from "./scenes/SolutionScene";
import { AppShowcaseScene } from "./scenes/AppShowcaseScene";
import { FeaturesScene } from "./scenes/FeaturesScene";
import { StatsScene } from "./scenes/StatsScene";
import { HowItWorksScene } from "./scenes/HowItWorksScene";
import { PricingScene } from "./scenes/PricingScene";
import { CTAScene } from "./scenes/CTAScene";

const FPS = 30;

export const ProductVideo: React.FC = () => {
  return (
    <AbsoluteFill style={{ background: "#0a0e1a" }}>
      <Sequence durationInFrames={3 * FPS} name="Intro">
        <IntroScene />
      </Sequence>
      <Sequence durationInFrames={6 * FPS} from={3 * FPS} name="Problem">
        <ProblemScene />
      </Sequence>
      <Sequence durationInFrames={6 * FPS} from={9 * FPS} name="Solution">
        <SolutionScene />
      </Sequence>
      <Sequence durationInFrames={6 * FPS} from={15 * FPS} name="App Showcase">
        <AppShowcaseScene />
      </Sequence>
      <Sequence durationInFrames={7 * FPS} from={21 * FPS} name="Features">
        <FeaturesScene />
      </Sequence>
      <Sequence durationInFrames={5 * FPS} from={28 * FPS} name="Stats">
        <StatsScene />
      </Sequence>
      <Sequence durationInFrames={5 * FPS} from={33 * FPS} name="HowItWorks">
        <HowItWorksScene />
      </Sequence>
      <Sequence durationInFrames={5 * FPS} from={38 * FPS} name="Pricing">
        <PricingScene />
      </Sequence>
      <Sequence durationInFrames={5 * FPS} from={43 * FPS} name="CTA">
        <CTAScene />
      </Sequence>
    </AbsoluteFill>
  );
};

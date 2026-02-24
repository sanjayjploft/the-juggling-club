import StepsSection from "./StepsSection";
import { parentSteps } from "../constants/steps";

export default function HowCoachesUseItParents() {
  return (
    <StepsSection
      title="HOW COACHES USE IT"
      steps={parentSteps}
      ctaText="No setup, no monitoring, no complexity."
    />
  );
}

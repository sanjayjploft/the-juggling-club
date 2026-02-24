import StepsSection from "./StepsSection";
import { coachSteps } from "../constants/steps";

export default function HowCoachesUseIt() {
  return (
    <StepsSection
      title="HOW COACHES USE IT"
      steps={coachSteps}
      ctaText="That's it. No extra work. Big results."
    />
  );
}

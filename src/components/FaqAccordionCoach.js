import FaqAccordion from "./FaqAccordion";
import { coachFaqs } from "../constants/faqData";

export default function FaqAccordionCoach() {
  return <FaqAccordion items={coachFaqs} />;
}

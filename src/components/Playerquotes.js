import TestimonialCarousel from "./TestimonialCarousel";
import { playerQuotes } from "../constants/testimonials";

export default function Playerquotes() {
  return (
    <TestimonialCarousel
      heading="player quotes"
      slides={playerQuotes}
    />
  );
}

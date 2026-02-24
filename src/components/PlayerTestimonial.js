import TestimonialCarousel from "./TestimonialCarousel";
import { playerTestimonials } from "../constants/testimonials";

export default function PlayerTestimonial() {
  return (
    <TestimonialCarousel
      heading="Testimonial"
      slides={playerTestimonials}
    />
  );
}

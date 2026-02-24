import TestimonialCarousel from "./TestimonialCarousel";
import { coachTestimonials } from "../constants/testimonials";

export default function CoachesTestimonial() {
  return (
    <TestimonialCarousel
      heading="Testimonial"
      slides={coachTestimonials}
    />
  );
}

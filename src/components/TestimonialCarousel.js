"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { defaultCarouselBreakpoints, defaultAutoplay } from "../constants/swiperConfig";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function TestimonialCarousel({
  heading = "Testimonial",
  slides = [],
  showArrows = true,
  arrowVariant = "white",
}) {
  const arrowLeft =
    arrowVariant === "white"
      ? "/assets/image/arrow-left-white.svg"
      : "/assets/image/arrow-left.svg";
  const arrowRight =
    arrowVariant === "white"
      ? "/assets/image/arrow-right-white.svg"
      : "/assets/image/arrow-right.svg";

  return (
    <section className="section">
      <div className="container">
        <div className="player-quotes">
          <div className="darkHead">
            <div>
              <h3 className="section-heading">{heading}</h3>
            </div>
            {showArrows && (
              <div className="swiper-action-btn">
                <div className="custom-swiper-next">
                  <img src={arrowLeft} alt="Previous slide" className="cover" />
                </div>
                <div className="custom-swiper-prev">
                  <img src={arrowRight} alt="Next slide" className="cover" />
                </div>
              </div>
            )}
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            loop={true}
            autoplay={defaultAutoplay}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            breakpoints={defaultCarouselBreakpoints}
            className="hero-swiper"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="player-quotes">
                  <div className="player-profile">
                    <img src={slide.image} alt={slide.name} />
                    <div>
                      <h5>{slide.name}</h5>
                      {slide.role && <span>{slide.role}</span>}
                      {slide.age && <span>{slide.age}</span>}
                    </div>
                  </div>
                  {slide.category && <h4>{slide.category}</h4>}
                  <p>{slide.quote}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

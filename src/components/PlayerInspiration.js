"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { inspirationCarouselBreakpoints, defaultAutoplay } from "../constants/swiperConfig";
import { playerInspirations } from "../constants/testimonials";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PlayerInspiration() {
  return (
    <section className="darkSection">
      <div className="container">
        <div className="darkHead">
          <div>
            <h3 className="section-heading text-white">
              LEGENDARY PLAYER INSPIRATION
            </h3>
            <p className="section-dice text-white">
              The world&apos;s greatest players started with a ball and a dream.
            </p>
          </div>
          <div className="swiper-action-btn">
            <div className="custom-swiper-next">
              <img
                src="/assets/image/arrow-left.svg"
                alt="Previous slide"
                className="cover"
              />
            </div>
            <div className="custom-swiper-prev">
              <img
                src="/assets/image/arrow-right.svg"
                alt="Next slide"
                className="cover"
              />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={42}
          loop={true}
          autoplay={defaultAutoplay}
          navigation={{
            nextEl: ".custom-swiper-next",
            prevEl: ".custom-swiper-prev",
          }}
          breakpoints={inspirationCarouselBreakpoints}
          className="hero-swiper"
        >
          {playerInspirations.map((player) => (
            <SwiperSlide key={player.id}>
              <div className="hero-slide">
                <img
                  src={player.image}
                  alt={player.name}
                />
                <div className="player-info">
                  <img
                    src="/assets/image/text-simbl.svg"
                    alt=""
                    className="simbl-icon"
                  />
                  <div className={`player-bio ${player.bioClass}`}>
                    <p>{player.quote}</p>
                  </div>
                  <div className={`player-name ${player.nameClass}`}>
                    {player.name} <span>{player.subtitle}</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

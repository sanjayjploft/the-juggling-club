"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { defaultAutoplay } from "../constants/swiperConfig";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Parenttestimonials() {
  return (
    <section className="section">
      <div className="container">
        <div className="parent-testimonials">
          <div className="darkHead justify-content-center">
            <h3 className="section-heading">parent testimonials</h3>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            slidesPerView={1}
            loop={true}
            autoplay={defaultAutoplay}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            className="hero-swiper"
          >
            <SwiperSlide>
              <div className="parent-testimonials">
                <p>
                  &quot;We&apos;ve seen a real improvement in his ball control and first
                  touch within weeks.&quot;
                </p>
                <div className="player-profile">
                  <Image
                    src="/assets/image/parent-img-01.png"
                    alt="Andry Ford"
                    width={60}
                    height={60}
                  />
                  <div>
                    <h5>Andry Ford</h5>
                    <span>Parent of U12 player</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

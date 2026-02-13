"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function PlayerTestimonial() {
  return (
    <section className="section">
      <div className="container">
        <div className="player-quotes">
          <div className="darkHead">
            <div>
              <h3 className="section-heading">Testimonial</h3>
            </div>
            <div className="swiper-action-btn">
              <div className="custom-swiper-next">
                <img
                  src="/assets/image/arrow-left-white.svg"
                  alt="App mock"
                  className="cover"
                />
              </div>
              <div className="custom-swiper-prev">
                <img
                  src="/assets/image/arrow-right-white.svg"
                  alt="App mock"
                  className="cover"
                />
              </div>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={20}
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
            }}
            breakpoints={{
              // Mobile
              0: {
                slidesPerView: 1,
              },

              // Small tablets
              576: {
                slidesPerView: 1.2,
              },

              // Tablets
              768: {
                slidesPerView: 2,
              },

              // Small laptops
              992: {
                slidesPerView: 3,
              },

              // Desktop
              1200: {
                slidesPerView: 4,
              },
            }}
            className="hero-swiper">
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/parent-img-001.png" />
                  <div>
                    <h5>Coach Alex M.</h5>
                  </div>
                </div>

                <p>
                  Players are training on their own more than ever. That alone
                  has been a game-changer.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/parent-img-02.png" />
                  <div>
                    <h5>Coach Sarah L.</h5>
                  </div>
                </div>

                <p>
                  Their first touch and ball control have improved noticeably in
                  just weeks.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/parent-img-03.png" />
                  <div>
                    <h5>Coach Diego R.</h5>
                  </div>
                </div>

                <p>
                  I see more confidence on the ball—players try things now
                  instead of hesitating.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/parent-img-04.png" />
                  <div>
                    <h5>Coach Mark T.</h5>
                  </div>
                </div>

                <p>
                  Practice quality is higher because players show up already
                  sharp.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

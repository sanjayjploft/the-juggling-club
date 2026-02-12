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
                  <img src="/assets/image/quotes-img-1.png" />
                  <div>
                    <h5>Leo</h5>
                    <span>11 years</span>
                  </div>
                </div>

                <p>We can actually see the skill improvement week by week.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/quotes-img-2.png" />
                  <div>
                    <h5>Arjun</h5>
                    <span>13 years</span>
                  </div>
                </div>

                <p>
                  My child is more confident not just in games, but in practice
                  too.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/quotes-img-3.png" />
                  <div>
                    <h5>Max</h5>
                    <span>10 years</span>
                  </div>
                </div>

                <p>
                  They want to practice now. That’s been the biggest change.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/quotes-img-4.png" />
                  <div>
                    <h5>Noah</h5>
                    <span>12 years</span>
                  </div>
                </div>

                <p>
                  The attitude shift has been incredible more focus, less
                  resistance.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/quotes-img-1.png" />
                  <div>
                    <h5>Leo</h5>
                    <span>11 years</span>
                  </div>
                </div>

                <p>We can actually see the skill improvement week by week.</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/quotes-img-2.png" />
                  <div>
                    <h5>Arjun</h5>
                    <span>13 years</span>
                  </div>
                </div>

                <p>
                  My child is more confident not just in games, but in practice
                  too.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/quotes-img-3.png" />
                  <div>
                    <h5>Max</h5>
                    <span>10 years</span>
                  </div>
                </div>

                <p>
                  They want to practice now. That’s been the biggest change.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="player-quotes">
                <div className="player-profile">
                  <img src="/assets/image/quotes-img-4.png" />
                  <div>
                    <h5>Noah</h5>
                    <span>12 years</span>
                  </div>
                </div>

                <p>
                  The attitude shift has been incredible more focus, less
                  resistance.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

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
              Quotes and mindset tips to keep training consistent.
            </p>
          </div>
          <div className="swiper-action-btn">
            <div className="custom-swiper-next">
              <img
                src="/assets/image/arrow-left.svg"
                alt="App mock"
                className="cover"
              />
            </div>
            <div className="custom-swiper-prev">
              <img
                src="/assets/image/arrow-right.svg"
                alt="App mock"
                className="cover"
              />
            </div>
          </div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          slidesPerView={3}
          spaceBetween={42} // <-- gap between slides
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
              slidesPerView: 2,
            },

            // Desktop
            1200: {
              slidesPerView: 3,
            },
          }}
          className="hero-swiper">
          <SwiperSlide>
            <div className="hero-slide ">
              <img
                src="/assets/image/player-img01.png"
                alt="App mock"
                className=""
              />
              <div className="player-info">
                <img
                  src="/assets/image/text-simbl.svg"
                  alt="App mock"
                  className="simbl-icon"
                />
                <div className="player-bio neon-red-bg">
                  <p>
                    The ball is like a friend: the more kindly and skillfully
                    you treat it, the more it works with you on the field.
                  </p>
                </div>
                <div className="player-name badge-blue-bg">
                  Pelé <span>Global icon</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-slide ">
              <img
                src="/assets/image/player-img02.png"
                alt="App mock"
                className=""
              />
              <div className="player-info">
                <img
                  src="/assets/image/text-simbl.svg"
                  alt="App mock"
                  className="simbl-icon"
                />
                <div className="player-bio badge-blue-bg">
                  <p>
                    Practice the small things with patience and consistency
                    until they become second nature. 
                  </p>
                </div>
                <div className="player-name explosive-orange">
                  Messi <span>Maestro of control</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-slide ">
              <img
                src="/assets/image/player-img03.png"
                alt="App mock"
                className=""
              />
              <div className="player-info ">
                <img
                  src="/assets/image/text-simbl.svg"
                  alt="App mock"
                  className="simbl-icon"
                />
                <div className="player-bio dark-blue-bg">
                  <p>
                    Ball mastery grows from a genuine love for the game and the
                    discipline of constant repetition.
                  </p>
                </div>
                <div className="player-name neon-red-bg">
                  Maradona <span>Street genius</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="hero-slide ">
              <img
                src="/assets/image/player-img01.png"
                alt="App mock"
                className=""
              />
              <div className="player-info">
                <img
                  src="/assets/image/text-simbl.svg"
                  alt="App mock"
                  className="simbl-icon"
                />
                <div className="player-bio neon-red-bg">
                  <p>
                    The ball is like a friend: the more kindly and skillfully
                    you treat it, the more it works with you on the field.
                  </p>
                </div>
                <div className="player-name badge-blue-bg">
                  Pelé <span>Global icon</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-slide ">
              <img
                src="/assets/image/player-img02.png"
                alt="App mock"
                className=""
              />
              <div className="player-info">
                <img
                  src="/assets/image/text-simbl.svg"
                  alt="App mock"
                  className="simbl-icon"
                />
                <div className="player-bio badge-blue-bg">
                  <p>
                    Practice the small things with patience and consistency
                    until they become second nature. 
                  </p>
                </div>
                <div className="player-name explosive-orange">
                  Messi <span>Maestro of control</span>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="hero-slide ">
              <img
                src="/assets/image/player-img03.png"
                alt="App mock"
                className=""
              />
              <div className="player-info ">
                <img
                  src="/assets/image/text-simbl.svg"
                  alt="App mock"
                  className="simbl-icon"
                />
                <div className="player-bio dark-blue-bg">
                  <p>
                    Ball mastery grows from a genuine love for the game and the
                    discipline of constant repetition.
                  </p>
                </div>
                <div className="player-name neon-red-bg">
                  Maradona <span>Street genius</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}

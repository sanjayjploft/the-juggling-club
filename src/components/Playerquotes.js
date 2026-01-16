"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Playerquotes() {
  return (
    <section className="section">
      <div className="container">
        <div className="player-quotes">
          <div className="darkHead">
            <div>
              <h3 className="section-heading">player quotes</h3>
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
            slidesPerView={4}
            spaceBetween={20} // <-- gap between slides
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".custom-swiper-next",
              prevEl: ".custom-swiper-prev",
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
                <h4>Ball Control & Touch</h4>
                <p>
                  My first touch is way better now. I feel more in control every
                  time I get the ball.
                </p>
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
                <h4>Confidence</h4>
                <p>
                  I’m not scared to try skills anymore. I actually want the
                  ball.
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
                <h4>Fun & Gamified</h4>
                <p>
                  It feels like a game, not training. I just want to keep
                  leveling up.
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
                <h4>Motivation to Practice</h4>
                <p>I practice every day just to keep my streak alive.</p>
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
                <h4>Ball Control & Touch</h4>
                <p>
                  My first touch is way better now. I feel more in control every
                  time I get the ball.
                </p>
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
                <h4>Confidence</h4>
                <p>
                  I’m not scared to try skills anymore. I actually want the
                  ball.
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
                <h4>Fun & Gamified</h4>
                <p>
                  It feels like a game, not training. I just want to keep
                  leveling up.
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
                <h4>Motivation to Practice</h4>
                <p>I practice every day just to keep my streak alive.</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

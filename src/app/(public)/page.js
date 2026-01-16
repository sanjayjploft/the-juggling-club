import Link from "next/link";
import ScrollDown from "../../components/ScrollDown";
import PlayerInspiration from "../../components/PlayerInspiration";
import Blog from "../../components/Blog";

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <section className="sectionTop position-relative">
        <div className="container-fluid">
          <div className="hero">
            {/* <img
              src="/assets/image/hero.jpg"
              alt="Hero background"
              className="hero__img"
            /> */}
            <video className="hero__video" autoPlay muted loop playsInline>
              <source src="/assets/image/hero-bg-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="hero__overlay" />
            <div className="hero__content">
              <h1 className="hero__title">
                MASTER YOUR TOUCH. JOIN <br /> THE JUGGLING CLUB JOURNEY.
              </h1>
              <p className="hero__subtitle ">
                Build ball control with guided drills, challenges, and a global
                community.
              </p>
              <div className="rowBtns rowBtns--left">
                <Link href="#" className="btn btn--primary btn--lg">
                  Start journey
                </Link>
                <Link href="#" className="btn btn--outline btn--lg">
                  For Clubs & Coaches
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ScrollDown />
      </section>
      {/* GLOBAL JOURNEY */}
      <section className="section ">
        <div className="container">
          <div className="center pt-5">
            <h2 className="section-heading">THE GLOBAL JUGGLING JOURNEY</h2>
            <p className="section-dice">
              Join players around the world and explore regional challenges.
            </p>

            <div className="rowBtns">
              <a href="#" className="btn btn--primary">
                Start your adventure
              </a>
            </div>
          </div>

          <div className="mapCard">
            <img
              src="/assets/image/world-map.png"
              alt="Hero background"
              className="hero__img"
            />
          </div>
        </div>
      </section>

      {/* FEATURES + APP MOCK */}
      <section className="section bg-img">
        <div className="container">
          <div className="twoCol">
            <div className="">
              <span className="small-text">Player Features</span>
              <h2 className="section-heading text-start">
                EVERYTHING YOU NEED <br /> TO MASTER THE BALL
              </h2>

              <div className="featureList">
                <div className="featureList-item">
                  <div className="icon-box">
                    <img
                      src="/assets/image/skill-levels.svg"
                      alt="App mock"
                      className="cover"
                    />
                  </div>
                  <div className="item-name">
                    <h4>Level up across 100 progressive skill levels</h4>
                  </div>
                </div>
                <div className="featureList-item">
                  <div className="icon-box">
                    <img
                      src="/assets/image/rewards.svg"
                      alt="App mock"
                      className="cover"
                    />
                  </div>
                  <div className="item-name">
                    <h4>
                      Earn badges and unlock rewards throughout your journey
                    </h4>
                  </div>
                </div>
                <div className="featureList-item">
                  <div className="icon-box">
                    <img
                      src="/assets/image/feedback.svg"
                      alt="App mock"
                      className="cover"
                    />
                  </div>
                  <div className="item-name">
                    <h4>
                      Upload juggling videos and get personalized coaching
                      feedback
                    </h4>
                  </div>
                </div>
                <div className="featureList-item">
                  <div className="icon-box">
                    <img
                      src="/assets/image/mindset-ch.svg"
                      alt="App mock"
                      className="cover"
                    />
                  </div>
                  <div className="item-name">
                    <h4>
                      Unlock fun mindset challenges that help players grow on
                      and off the field
                    </h4>
                  </div>
                </div>
                <div className="featureList-item">
                  <div className="icon-box">
                    <img
                      src="/assets/image/ball-control.svg"
                      alt="App mock"
                      className="cover"
                    />
                  </div>
                  <div className="item-name">
                    <h4>
                      Improve first touch, ball control, and real-game
                      confidence
                    </h4>
                  </div>
                </div>
                <div className="featureList-item">
                  <div className="icon-box">
                    <img
                      src="/assets/image/leaderboard.svg"
                      alt="App mock"
                      className="cover"
                    />
                  </div>
                  <div className="item-name">
                    <h4>
                      Represent your country and climb the global leaderboard
                    </h4>
                  </div>
                </div>
                <div className="featureList-item">
                  <div className="icon-box">
                    <img
                      src="/assets/image/virtual-coach.svg"
                      alt="App mock"
                      className="cover"
                    />
                  </div>
                  <div className="item-name">
                    <h4>
                      Get motivating, player-specific tips from your virtual
                      coach
                    </h4>
                  </div>
                </div>
              </div>
              <div className="that-matters">
                <p>Hundreds of touches in training. One touch that matters.</p>
              </div>
            </div>

            <div className="">
              <img
                src="/assets/image/everything-you.png"
                alt="App mock"
                className="cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* DARK SECTION */}
      <PlayerInspiration />
      <Blog />
    </main>
  );
}

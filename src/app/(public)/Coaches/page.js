import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import HowCoachesUseIt from "../../../components/HowCoachesUseIt";
import PlayerTestimonial from "../../../components/PlayerTestimonial";

export default function page() {
  return (
    <>
      <main className="page">
        <section className="sectionTop position-relative inner-page">
          <div className="container-fluid">
            <div className="hero">
              <img
                src="/assets/image/coaches-bg.webp"
                alt="Hero background"
                className="hero__img"
              />

              <div className="hero__overlay" />
              <div className="hero__content">
                <h1 className="hero__title">
                  Coach on the field guiding
                  <br /> young players.
                </h1>
                <p className="hero__subtitle">
                  Motivate your players with skill challenges and positive
                  reinforcement.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="section">
          <div className="container">
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="why-join-info">
                  <h2>Why Juggling Club for Coaches</h2>
                  <h5>
                    More motivated players. Better technical foundations. Zero
                    extra work.
                  </h5>
                  <p>
                    Juggling Club gives coaches a powerful development tool that
                    strengthens players’ touch, consistency, and mindset —
                    without adding anything to your weekly workload.
                  </p>
                  <p>
                    Your players practice at home, receive personalized AI
                    coaching feedback, and build better habits automatically.
                  </p>
                  <p>
                    You simply open your dashboard to see who is improving, who
                    is practicing, and where additional support might help.
                  </p>

                  <ul className="why-join-fech">
                    <li>
                      <img src="/assets/image/checkmark.svg" /> Coaches get more
                      engaged players.
                    </li>
                    <li>
                      <img src="/assets/image/checkmark.svg" />
                      Players get better.
                    </li>
                    <li>
                      <img src="/assets/image/checkmark.svg" /> Training
                      sessions get more productive.
                    </li>
                  </ul>
                </div>
              </Col>
              <Col lg={4}>
                <img
                  className="cover mob-img-small"
                  src="/assets/image/coaches-abt-img.png"
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section club-staff-section">
          <div className="container">
            <div className="bg-yellow-sec bg-yellow-style-2">
              <Row className="align-items-center">
                <Col lg={5}>
                  <img
                    className="w-100"
                    src="/assets/image/club-staff-img-2.png"
                  />
                </Col>
                <Col lg={6} className="offset-1">
                  <div className="club-staff-info">
                    <h2>Effortless for Coaches</h2>
                    <h6>
                      Juggling Club is designed so you don’t have to manage
                      anything.
                    </h6>

                    <div className="featureList">
                      <div className="featureList-item">
                        <div className="icon-box">
                          <img
                            src="/assets/image/coaching-review.svg"
                            alt="App mock"
                            className="cover"
                          />
                        </div>
                        <div className="item-name">
                          <h4>No video review</h4>
                        </div>
                      </div>
                      <div className="featureList-item">
                        <div className="icon-box">
                          <img
                            src="/assets/image/notifications.svg"
                            alt="App mock"
                            className="cover"
                          />
                        </div>
                        <div className="item-name">
                          <h4>No administrative tasks</h4>
                        </div>
                      </div>
                      <div className="featureList-item">
                        <div className="icon-box">
                          <img
                            src="/assets/image/skill-evaluation.svg"
                            alt="App mock"
                            className="cover"
                          />
                        </div>
                        <div className="item-name">
                          <h4>No manual scoring</h4>
                        </div>
                      </div>
                      <div className="featureList-item">
                        <div className="icon-box">
                          <img
                            src="/assets/image/championship-trophy.svg"
                            alt="App mock"
                            className="cover"
                          />
                        </div>
                        <div className="item-name">
                          <h4>No learning curve</h4>
                        </div>
                      </div>
                      <div className="featureList-item">
                        <div className="icon-box">
                          <img
                            src="/assets/image/reminders-strak.svg"
                            alt="App mock"
                            className="cover"
                          />
                        </div>
                        <div className="item-name">
                          <h4>No extra sessions</h4>
                        </div>
                      </div>
                    </div>
                    <div className="club-staff-btm-sec">
                      <div className="btm-sec-item">
                        <img src="/assets/image/coach-gray.svg" />
                        <h2>
                          Your players train independently.The system handles
                          evaluation, feedback, reminders, and tracking.
                        </h2>
                      </div>
                    </div>
                    <div className="celebrate-progress">
                      <img src="/assets/image/star-icon.svg" />
                      <h2>
                        Coaches simply <span>view results</span> and{" "}
                        <span>celebrate progress</span>.
                      </h2>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section className="section position-relative">
          <div className="container">
            <Row>
              <Col lg={4}>
                <h2 className="section-heading text-start">
                  Key Benefits for Coaches
                </h2>
              </Col>
              <Col lg={8}>
                <div className="featureList">
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/scale-cbl.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Better First Touch & Ball Control</h4>
                      <p>
                        Players develop the technical foundation you need
                        juggling, coordination, balance, timing, and feel for
                        the ball so team training becomes more productive.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/discount-icon.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Player Progress Dashboards </h4>
                      <p>Instant visibility into team engagement and growth.</p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/dashboard-icon-clb.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>More Motivated, Prepared Players</h4>
                      <p>
                        Weekly streak rewards, badges, and country unlocks
                        create players who want to practice — leading to
                        improved effort, commitment, and team culture.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/message-coach.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Coach Messaging Tools</h4>
                      <p>
                        Send encouragement, reminders, or quick notes that keep
                        players accountable and connected. A simple “Nice work!”
                        goes a long way.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/ranking-clb.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Team Challenges & Competition</h4>
                      <p>
                        Run internal competitions that motivate players without
                        you having to manage any scoring or submissions.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/growth-clb.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Mindset Development Built In</h4>
                      <p>
                        Players complete video reflections on confidence, focus,
                        resilience, and leadership — skills every coach wants
                        but rarely has time to teach deeply.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/club-branded.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>More Focused Team Training Sessions</h4>
                      <p>
                        Because players improve their fundamentals on their own
                        time, coaches can spend training sessions on tactics,
                        spacing, decision-making, and game models.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/engagement-cbl.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Automated Player Engagement</h4>
                      <p>
                        The platform nudges players with reminders, streaks, and
                        notifications — keeping effort high without you lifting
                        a finger.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/growth-clb.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Aligned With Your Coaching Goals</h4>
                      <p>
                        You set the expectation: “We juggle. We train. We
                        improve.” Juggling Club provides the structure that
                        makes it happen.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <HowCoachesUseIt />
        <PlayerTestimonial />
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="enroll-section enroll-whitout-hed">
                {/* <h2>Ready to build your club’s legacy?</h2> */}
                <div className="action-btn">
                  <Link href="" className="btn btn--primary">
                    Start With Your Team
                  </Link>
                  <Link href="" className="btn btn--outline btn--lg">
                    See the Coach Dashboard
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="links-actin">
                <Link href="">Looking for club-wide tools?</Link>

                <Link href="">Need info for parents?</Link>

                <Link href="">Want to see the player journey?</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

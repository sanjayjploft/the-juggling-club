import React from "react";
import { Col, Row } from "react-bootstrap";
import Playerquotes from "../../../components/Playerquotes";
import Link from "next/link";
import HowCoachesUseIt from "../../../components/HowCoachesUseIt";

export default function page() {
  return (
    <>
      <main className="page">
        <section className="sectionTop position-relative inner-page">
          <div className="container-fluid">
            <div className="hero">
              <img
                src="/assets/image/parents-bg-img.webp"
                alt="Hero background"
                className="hero__img"
              />

              <div className="hero__overlay" />
              <div className="hero__content">
                <h1 className="hero__title">
                  Support your child’s soccer
                  <br /> journey -from home.
                </h1>
                <p className="hero__subtitle">
                  Help your child build a growth mindset.
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
                  <h2>Why Parents Love Juggling Club</h2>
                  <h5>Real soccer development. Real confidence. Real fun.</h5>
                  <p>
                    Juggling Club turns at-home practice into a fun, structured,
                    motivating journey that helps your child improve their first
                    touch, ball control, coordination, and confidence — in
                    minutes a day.
                  </p>
                  <p>
                    Every skill submission receives personalized coaching
                    feedback, while the gamified, 100-level journey keeps
                    players practicing consistently without parents having to
                    remind them.
                  </p>
                  <p>
                    It’s safe, constructive screen time with real developmental
                    benefits.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <img
                  className="cover w-100"
                  src="/assets/image/parents-abt-img.png"
                />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section">
          <div className="container">
            <Row className="">
              <h3 className="section-heading">
                What This Means for Your Child
              </h3>
            </Row>
            <div className="means-child-section">
              <Row className="align-items-center mb-4">
                <Col lg={5}>
                  <div className="img-item">
                    <img
                      className="left-top"
                      src="/assets/image/item-shape-left-top.svg"
                    />
                    <img
                      className="w-100 big-img"
                      src="/assets/image/item-img-01.png"
                    />
                    <img
                      className="right-bottom"
                      src="/assets/image/item-shape-right-bottom.svg"
                    />
                  </div>
                </Col>
                <Col lg={6} className="offset-1">
                  <div className="means-info">
                    <h3>Stronger Soccer Skills</h3>
                    <p>
                      Your child develops real ball mastery — first touch,
                      control, balance, coordination, and timing — the
                      foundation for success at all levels.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center mb-4">
                <Col lg={6} className="order-cms-2">
                  <div className="means-info">
                    <h3>More Confidence on and off the Field</h3>
                    <p>
                      Skill improvement + consistent encouragement = visible
                      confidence and growth.
                    </p>
                  </div>
                </Col>
                <Col lg={5} className="offset-1 order-cms-1">
                  <div className="img-item">
                    <img
                      className="left-top"
                      src="/assets/image/item-shape-left-top.svg"
                    />
                    <img
                      className="w-100 big-img"
                      src="/assets/image/item-img-02.png"
                    />
                    <img
                      className="right-bottom"
                      src="/assets/image/item-shape-right-bottom.svg"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center mb-4">
                <Col lg={5}>
                  <div className="img-item">
                    <img
                      className="left-top"
                      src="/assets/image/item-shape-left-top.svg"
                    />
                    <img
                      className="w-100 big-img"
                      src="/assets/image/item-img-03.png"
                    />
                    <img
                      className="right-bottom"
                      src="/assets/image/item-shape-right-bottom.svg"
                    />
                  </div>
                </Col>
                <Col lg={6} className="offset-1">
                  <div className="means-info">
                    <h3>Motivation Built In</h3>
                    <p>
                      Badges, streaks, levels, country unlocks, and personalized
                      feedback create a positive “I want to practice” mindset —
                      not a chore.
                    </p>
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center">
                <Col lg={6} className="order-cms-2">
                  <div className="means-info">
                    <h3>Growth Mindset Development</h3>
                    <p>
                      In each country path, players watch a short mindset video
                      and record their own thoughtful video response, helping
                      them build resilience, focus, and leadership skills.
                    </p>
                  </div>
                </Col>
                <Col lg={5} className="offset-1">
                  <div className="img-item">
                    <img
                      className="left-top"
                      src="/assets/image/item-shape-left-top.svg"
                    />
                    <img
                      className="w-100 big-img"
                      src="/assets/image/item-img-04.png"
                    />
                    <img
                      className="right-bottom"
                      src="/assets/image/item-shape-right-bottom.svg"
                    />
                  </div>
                </Col>
              </Row>
              <Row className="align-items-center mb-4">
                <Col lg={5}>
                  <div className="img-item">
                    <img
                      className="left-top"
                      src="/assets/image/item-shape-left-top.svg"
                    />
                    <img
                      className="w-100 big-img"
                      src="/assets/image/item-img-05.png"
                    />
                    <img
                      className="right-bottom"
                      src="/assets/image/item-shape-right-bottom.svg"
                    />
                  </div>
                </Col>
                <Col lg={6} className="offset-1">
                  <div className="means-info">
                    <h3>Real Progress You Can See</h3>
                    <p>
                      Parents and coaches see clear indicators of effort,
                      growth, activity, and consistency.
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </section>
        <section className="section club-staff-section">
          <div className="container">
            <div className="bg-yellow-sec bg-yellow-style-2">
              <Row className="mb-4">
                <h3 className="section-heading">What This Means for Parents</h3>
              </Row>
              <Row className="align-items-center">
                <Col lg={6}>
                  <div className="means-parents-info">
                    <div className="item-info-bx">
                      <div className="icon-info">
                        <img
                          className=""
                          src="/assets/image/parents-info-01.svg"
                        />
                      </div>
                      <div className="parentstext-info">
                        <h3>No Extra Work for You</h3>
                        <p>
                          Your child trains independently.The app handles
                          instructions, feedback, reminders, and motivation. You
                          don't have to supervise, film, or evaluate anything.
                        </p>
                      </div>
                    </div>
                    <div className="item-info-bx">
                      <div className="icon-info">
                        <img
                          className=""
                          src="/assets/image/parents-info-02.svg"
                        />
                      </div>
                      <div className="parentstext-info">
                        <h3>Safe & Secure</h3>
                        <p>
                          All content stays private by default. Nothing is
                          shared publicly unless your child chooses to share a
                          highlight. Parent accounts can monitor activity
                          anytime. Your child’s privacy and safety come first.
                          Juggling Club follows all COPPA guidelines for youth
                          apps.
                        </p>
                      </div>
                    </div>
                    <div className="item-info-bx">
                      <div className="icon-info">
                        <img
                          className=""
                          src="/assets/image/parents-info-03.svg"
                        />
                      </div>
                      <div className="parentstext-info">
                        <h3>Constructive, Personalized Coaching</h3>
                        <p>
                          Each video receives encouraging, actionable feedback
                          helping your child stay positive, proud, and
                          motivated.
                        </p>
                      </div>
                    </div>
                    <div className="item-info-bx">
                      <div className="icon-info">
                        <img
                          className=""
                          src="/assets/image/parents-info-04.svg"
                        />
                      </div>
                      <div className="parentstext-info">
                        <h3>A Safe, Supportive Global Community</h3>
                        <p>
                          Players progress through world paths, compete on
                          leaderboards, and represent their country — in a safe,
                          controlled environment.
                        </p>
                      </div>
                    </div>
                    <div className="item-info-bx">
                      <div className="icon-info">
                        <img
                          className=""
                          src="/assets/image/parents-info-05.svg"
                        />
                      </div>
                      <div className="parentstext-info">
                        <h3>Affordable Skill Development</h3>
                        <p>
                          Professional-quality coaching feedback at a fraction
                          of the cost of private training.
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="offset-1">
                  <img
                    className="w-100 rounded-4"
                    src="/assets/image/parents-img-sml.png"
                  />
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
        <Playerquotes />
        <section className="section pricing-overview">
          <div className="container">
            <h2 className="section-heading text-center mb-5">
              Choose Your Juggling Club Journey
            </h2>
            <Row className="justify-content-center">
              <Col lg={6}>
                <div className="price-box ">
                  <div className="singl-pric-box">
                    <div className="annual-price">
                      <p>Annual — Best Value</p>
                      <div className="price-text">
                        $199.99<small>/year</small>
                      </div>
                      <h6>
                        ≈ $16.60/month
                        <br /> Save $40 vs monthly
                      </h6>
                      <ul className="price-features">
                        <li>Full year of structured skill progression</li>
                        <li>Coach-guided feedback & challenges</li>
                        <li>Badges, milestones & world map progression</li>
                        <li>
                          <b>Best value for committed players</b>
                        </li>
                        <li>One payment. No monthly renewals.</li>
                      </ul>
                      <Link href="" className="btn btn--primary">
                        Join Now
                      </Link>
                    </div>
                    <div className="annual-price">
                      <p>Monthly Plan</p>
                      <div className="price-text">
                        $19.99<small>/month</small>
                      </div>

                      <ul className="price-features">
                        <li>Full access to all training features</li>
                        <li>Coach-guided feedback & challenges</li>
                        <li>Badges, milestones & world map progression</li>
                        <li>Flexible month-to-month</li>
                        <li>Cancel anytime</li>
                      </ul>
                      <Link href="" className="btn btn--primary">
                        Join Now
                      </Link>
                    </div>
                  </div>
                  <div className="price-expl-text">
                    Professional-quality coaching for the price of a weekly
                    coffee.
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="enroll-section price-whitout-hed">
                {/* <h2>Ready to build your club’s legacy?</h2> */}
                <div className="action-btn">
                  <Link href="" className="btn btn--primary">
                    Start Your Child’s Journey
                  </Link>
                  <Link href="" className="btn btn--outline btn--lg">
                    Explore the Player Experience
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="links-actin">
                <Link href="">Start Your Child’s Journey</Link>

                <Link href="">From a participating club?</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

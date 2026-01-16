import React from "react";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import Heroclubs from "../../../components/Heroclubs";

export default function page() {
  return (
    <>
      <main className="page">
        <Heroclubs />
        <div className="section">
          <div className="container">
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="why-join-info">
                  <h2>Why Juggling Club for Your Organization</h2>
                  <h5>
                    Develop your players. Inspire your teams. Strengthen your
                    club — without adding to staff workload.
                  </h5>
                  <p>
                    Juggling Club gives your players a proven development
                    pathway they can train with anywhere—while your coaches and
                    directors get real insight into engagement, consistency, and
                    technical improvement.
                  </p>
                  <p>
                    By partnering with Juggling Club, your families also receive
                    a 10% discount on their subscriptions, creating meaningful
                    savings and increasing the value your club delivers to its
                    members.
                  </p>
                  <p>
                    Build a stronger soccer culture, keep players motivated
                    year-round, and reinforce your club brand across every
                    touchpoint in the app.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <img src="/assets/image/club-abt-img.png" />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section bg-yellow-sec club-staff-section">
          <div className="container">
            <Row className="align-items-center">
              <Col lg={6}>
                <img src="/assets/image/club-staff-img.png" />
              </Col>
              <Col lg={6}>
                <div className="club-staff-info">
                  <h2>Effortless for Club Staff</h2>
                  <p>
                    Running Juggling Club requires almost no work from your
                    organization. You simply provide your club logo and invite
                    your players.
                  </p>
                  <h6>Our platform handles everything else:</h6>

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
                        <h4>Coaching feedback</h4>
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
                        <h4>Player engagement notifications</h4>
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
                        <h4>Skill evaluation</h4>
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
                        <h4>Leaderboards and challenges</h4>
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
                        <h4>Reminders and streak prompts</h4>
                      </div>
                    </div>
                    <div className="featureList-item">
                      <div className="icon-box">
                        <img
                          src="/assets/image/dashboard-report.svg"
                          alt="App mock"
                          className="cover"
                        />
                      </div>
                      <div className="item-name">
                        <h4>Dashboards and reporting</h4>
                      </div>
                    </div>
                  </div>
                  <div className="club-staff-btm-sec">
                    <div className="btm-sec-item">
                      <img src="/assets/image/dashboard-gray.svg" />
                      <h2>No extra admin</h2>
                    </div>
                    <div className="btm-sec-item">
                      <img src="/assets/image/repairing-gray.svg" />
                      <h2>No new tools to manage</h2>
                    </div>
                    <div className="btm-sec-item">
                      <img src="/assets/image/coach-gray.svg" />
                      <h2>No additional coach workload</h2>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section position-relative">
          <div className="container">
            <Row>
              <Col lg={4}>
                <h2 className="section-heading text-start">
                  Key Benefits for Clubs
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
                      <h4>Player Development at Scale</h4>
                      <p>
                        A structured 100-level skill journey that helps players
                        improve first touch, control, coordination, and
                        confidence.
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
                      <h4>Club-Exclusive 10% Family Discount </h4>
                      <p>
                        Players who join using your club’s promo code receive
                        10% off their subscription, saving families money and
                        increasing the positive value perception of your
                        organization.
                      </p>
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
                      <h4>Clubwide Player Progress Dashboards</h4>
                      <p>
                        Track participation, progression, streaks, engagement,
                        and growth across all teams.
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
                      <h4>Coach Messaging & Motivation Tools</h4>
                      <p>
                        Coaches can send encouragement, reminders, and
                        personalized notes to keep players training
                        consistently.
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
                      <h4>Club Leaderboards & Challenges</h4>
                      <p>
                        Inspire competition with team, age-group, or individual
                        leaderboards.
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
                      <h4>Mindset Growth Across All Ages</h4>
                      <p>
                        Players record video responses to mindset
                        challenges—building confidence, resilience, focus, and
                        leadership.
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
                      <h4>Club-Branded Experience</h4>
                      <p>
                        Your club logo and colors appear throughout the player
                        experience, reinforcing pride and brand identity.
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
                      <h4>Automated Engagement Tools</h4>
                      <p>
                        Streak reminders, training prompts, and motivational
                        nudges keep players active with no effort from coaches.
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
                      <h4>Simple Club Onboarding</h4>
                      <p>
                        Assign players, share club promo codes, track
                        activations, and monitor participation—all from one
                        streamlined dashboard.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/report-cbl.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Optional: Club Impact Tracking</h4>
                      <p>
                        Monthly reports showing improvement trends and
                        engagement insights.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section pricing-overview">
          <div className="container">
            <h2 className="section-heading text-center mb-5">
              Pricing Overview
            </h2>
            <Row className="justify-content-center">
              <Col lg={3}>
                <div className="price-box">
                  <p>Tier 1 Club</p>
                  <div className="price-text">
                    $99<small>Small Clubs</small>
                  </div>
                  <h6>0-500 Players</h6>
                  <Link href="" className="btn btn--primary">
                    Join Now
                  </Link>
                </div>
              </Col>
              <Col lg={3}>
                <div className="price-box">
                  <p>Tier 2 Club</p>
                  <div className="price-text">
                    $199<small>Medium Clubs</small>
                  </div>
                  <h6>501-1,000 Players</h6>
                  <Link href="" className="btn btn--primary">
                    Join Now
                  </Link>
                </div>
              </Col>
              <Col lg={3}>
                <div className="price-box">
                  <p>Tier 3 Club</p>
                  <div className="price-text">
                    $299<small>Large Clubs</small>
                  </div>
                  <h6>1,000+ Players</h6>
                  <Link href="" className="btn btn--primary">
                    Join Now
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="enroll-section">
                <h2>Ready to build your club’s legacy?</h2>
                <div className="action-btn">
                  <Link href="" className="btn btn--primary">
                    Enroll Your Club
                  </Link>
                  <Link href="" className="btn btn--outline btn--lg">
                    See How It Works
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div className="coaches-parents">
                <h2>Have coaches or parents who want to join?</h2>
                <div className="cta-buttons justify-content-center">
                  <Link href="" className="btn btn--primary">
                    Coaches
                  </Link>
                  <Link href="" className="btn-outline">
                    Parents
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

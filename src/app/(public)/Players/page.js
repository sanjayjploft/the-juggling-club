import React from "react";
import HeroinnerSection from "../../../components/HeroinnerSection";
import { Col, Row } from "react-bootstrap";
import Playerquotes from "../../../components/Playerquotes";
import Parenttestimonials from "../../../components/Parenttestimonials";
import Link from "next/link";

export default function page() {
  return (
    <>
      <main className="page">
        <HeroinnerSection />
        <div className="section">
          <div className="container">
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="why-join-info">
                  <span className="small-chip">Why Join</span>
                  <h2>Turn your soccer practice into a global adventure.</h2>
                  <h5>The Juggling Club makes you better while having fun.</h5>
                  <p>
                    Level up through 100 progressive skill challenges, earn
                    rewards, unlock countries, and get personalized coaching
                    feedback that helps you improve your first touch, control,
                    and confidence—every step of the journey.
                  </p>
                </div>
              </Col>
              <Col lg={4}>
                <img className="cover " src="/assets/image/why-Join.png" />
              </Col>
            </Row>
          </div>
        </div>
        <section className="section bg-color-rg position-relative">
          <img src="/assets/image/shape-img-bg.svg" className="bg-shape-img" />
          <div className="container">
            <Row>
              <Col lg={4}>
                <span className="small-text">Player</span>
                <h2 className="section-heading text-start">Features</h2>
              </Col>
              <Col lg={8}>
                <div className="featureList">
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/skill-journey.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>100-Level Skill Journey</h4>
                      <p>
                        Advance through progressive challenges designed to build
                        real ball control and first-touch mastery.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/stamps.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Badges, Rewards & Weekly Streaks</h4>
                      <p>
                        Stay motivated with weekly streak bonuses, unlockable
                        items, and a passport full of stamps.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/record-icon.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Skill Challenges With Video Submissions</h4>
                      <p>
                        Record your juggling and first touch skills, submit your
                        videos, and get personalized feedback from your virtual
                        coach.
                      </p>
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
                      <h4>Personalized Coaching Feedback</h4>
                      <p>
                        Each skill is evaluated with constructive, motivational
                        tips tailored to your progress.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/global-leaderboard.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Global Passport + Country Paths</h4>
                      <p>
                        Travel across 10 world regions, unlock new destinations,
                        and represent your country on the global leaderboard.
                      </p>
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
                      <h4>Mindset Challenges (1 per Country)</h4>
                      <p>
                        Record your response to mindset video challenges to
                        boost confidence, focus, and resilience along your
                        journey.
                      </p>
                    </div>
                  </div>
                  <div className="featureList-item">
                    <div className="icon-box">
                      <img
                        src="/assets/image/achievements.svg"
                        alt="App mock"
                        className="cover"
                      />
                    </div>
                    <div className="item-name">
                      <h4>Track Progress & Share Achievements</h4>
                      <p>
                        Show your growth with shareable highlights, badges, and
                        accomplishments.
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <Playerquotes />
        <Parenttestimonials />
        <section className="section cta-bg-img ">
          <div className="container">
            <Row>
              <div className="cta-info">
                <h3>Interested in Growing Your Online Presence?</h3>
                <Link href="" className="btn btn--primary">
                  Join Now
                </Link>
              </div>
            </Row>
          </div>
        </section>
      </main>
    </>
  );
}

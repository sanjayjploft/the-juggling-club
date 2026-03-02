"use client";

import { useState } from "react";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="juggling-dashboard-wrapper">
      <ClubSidebar />

      <main className="juggling-main">
        {/* HEADER */}

        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Players
                <span>View and manage club players</span>
              </h4>
            </div>
          </div>
          <div className="user-profile">
            <Link href="#">
              <img src="/assets/image/club-logo.png" />
            </Link>
          </div>
        </div>
        {/* CONTENT */}
        <div className="container-fluid clb-plr-detl clubplayer-details-card">
          <div className="dashboard-header">
            <img
              src="/assets/image/quotes-img-1.png"
              className="player-avatar"
            />
            <div className="player-avatar-info d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <h5 className="player-name">LEO MESSI</h5>
                  <p className="player-club mb-3">Age 12-14 • Boy</p>
                  <div className="act-sts">Parent Linked </div>
                </div>
              </div>

              <div className="player-reword">
                <div className="reword-item">
                  <img src="/assets/image/rank1.svg" />
                  <p>Club Ranking</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-grid-box">
            <div className="player-card">
              <h4>Total Points</h4>
              <div className="count-info-card">
                <h6>3,200</h6>
                <p>Across all skills</p>
              </div>
              <img src="/assets/image/points-icn.svg" />
            </div>
            <div className="player-card">
              <h4>Badges Earned</h4>
              <div className="count-info-card">
                <h6>15</h6>
                <p>Skills accomplished</p>
              </div>
              <img
                style={{ mixBlendMode: "luminosity" }}
                src="/assets/image/badges-ern.svg"
              />
            </div>
            <div className="player-card">
              <h4>Countries Unlocked</h4>
              <div className="count-info-card">
                <h6>4/10</h6>
                <p>Paths completed</p>
              </div>
              <img src="/assets/image/country-unlck.svg" />
            </div>
            <div className="player-card">
              <h4>Current Streak</h4>
              <div className="count-info-card">
                <h6>23</h6>
                <p>Weeks active</p>
              </div>
              <img src="/assets/image/streak-icn.svg" />
            </div>
          </div>

          <div className="tabbs">
            <button
              className={`tabb ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}>
              Progress
            </button>

            <button
              className={`tabb ${activeTab === "billing" ? "active" : ""}`}
              onClick={() => setActiveTab("billing")}>
              Skills Achieved
            </button>

            <button
              className={`tabb ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}>
              Activity
            </button>
          </div>

          {/* Tab Content */}
          <div className="tabb-content">
            {activeTab === "profile" && (
              <p>
                <h3>
                  Skill Progression
                  <span>
                    Overall progress through all skills and mindset challenges
                  </span>
                </h3>
                <div className="">
                  <div className="players-progress-header">
                    <span>Completed</span>
                    <span className="players-count">45%</span>
                  </div>

                  <div className="progress players-progress">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: "45%" }}
                      aria-valuenow="180"
                      aria-valuemin="0"
                      aria-valuemax="250"
                    />
                  </div>
                  <small>45 of 110 completed</small>
                </div>
                <Row>
                  <Col md={6}>
                    <div className="date-det">
                      <p>Joined</p>
                      <h4>2024-01-15</h4>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det">
                      <p>Last Active</p>
                      <h4>2024-12-26</h4>
                    </div>
                  </Col>
                </Row>
              </p>
            )}
            {activeTab === "billing" && (
              <p>
                <h3>
                  Skills Achieved
                  <span>All skills completed by this player</span>
                </h3>
                <Row>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-50.svg" />
                      <h5>Level 50: Around the World</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-29.svg" />
                      <h5>LEVEL 29: High Kicks: 15 with Bounce</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-49.svg" />
                      <h5>LEVEL 49: Sitting on Floor: 10</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-25.svg" />
                      <h5>LEVEL 25: Non-Preferred Foot: 10</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-47.svg" />
                      <h5>LEVEL 47: Rainbow Flick</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-23.svg" />
                      <h5>LEVEL 23: Alternating Feet: 10</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-43.svg" />
                      <h5>LEVEL 43: High, Low (10 rounds)</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-21.svg" />
                      <h5>LEVEL 21: Any Body Part: 25</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-mindset.svg" />
                      <h5>MINDSET | Mental Toughness</h5>
                    </div>
                  </Col>
                  <Col md={6}>
                    <div className="date-det-skills">
                      <img src="/assets/image/badge-level-20.svg" />
                      <h5>LEVEL 20: Neck Stall: 30 seconds</h5>
                    </div>
                  </Col>
                </Row>
              </p>
            )}
            {activeTab === "settings" && (
              <p>
                <h3>Activity Summary</h3>
                <Row>
                  <Col md={12}>
                    <div className="skills-smry">
                      <p>Current Streak</p>
                      <p>
                        <strong>23 Weeks</strong>
                      </p>
                      <div className="inact-sts">Pending</div>
                    </div>
                    <div className="skills-smry">
                      <p>Total Skills Completed</p>
                      <p>
                        <strong>45</strong>
                      </p>
                      <div className="act-sts">Completed</div>
                    </div>
                    <div className="skills-smry">
                      <p>Mindset Challenges Completed</p>
                      <p>
                        <strong>15</strong>
                      </p>
                      <div className="act-sts">Completed</div>
                    </div>
                    <div className="skills-smry">
                      <p>Total Points</p>
                      <p>
                        <strong>3,200</strong>
                      </p>
                      <div className="inact-sts">Pending</div>
                    </div>
                    <div className="skills-smry">
                      <p>Paths Unlocked</p>
                      <p>
                        <strong>4/10</strong>
                      </p>
                      <div className="act-sts">Pending</div>
                    </div>
                  </Col>
                </Row>
              </p>
            )}
          </div>

          <div className="current-subs"></div>
        </div>
      </main>
    </div>
  );
}

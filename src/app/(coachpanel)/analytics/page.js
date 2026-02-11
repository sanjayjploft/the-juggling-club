"use client";

import { useState, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import Link from "next/link";
import Progress from "../../../components/dashboard/Progress";
import SkillCompletion from "../../../components/dashboard/SkillCompletion";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Overview");
  const fileInputRef = useRef(null);

  return (
    <div className="msar-dashboard-wrapper">
      <CoachSidebar />

      <main className="msar-main">
        {/* HEADER */}
        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <h4>
              Team Analytics
              <span>Track player and team performance metrics</span>
            </h4>
          </div>
          <button className="btn admin-btn-primary">+ Add Player</button>
        </div>

        {/* CONTENT */}
        <div className="container-fluid clb-plr-detl">
          <Row className="align-items-end ">
            <Col lg={6}>
              <div className="tabbs mt-0">
                <button
                  className={`tabb ${activeTab === "Overview" ? "active" : ""}`}
                  onClick={() => setActiveTab("Overview")}>
                  Overview
                </button>

                <button
                  className={`tabb ${activeTab === "Progress" ? "active" : ""}`}
                  onClick={() => setActiveTab("Progress")}>
                  Progress
                </button>

                <button
                  className={`tabb ${activeTab === "Skills" ? "active" : ""}`}
                  onClick={() => setActiveTab("Skills")}>
                  Skills
                </button>
                <button
                  className={`tabb ${activeTab === "Top Players" ? "active" : ""}`}
                  onClick={() => setActiveTab("Top Players")}>
                  Top Players
                </button>
              </div>
            </Col>
            <Col lg={6}>
              <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
                <Form.Floating className="w-100">
                  <Form.Select>
                    <option selected> All</option>
                    <option> All</option>
                  </Form.Select>
                  <label>Teams/Groups</label>
                </Form.Floating>

                <Form.Floating className="w-100">
                  <Form.Select>
                    <option selected> All Time</option>
                    <option> All Time</option>
                  </Form.Select>
                  <label>Select Date</label>
                </Form.Floating>

                <div className="upload-data-img">
                  {/* ICON */}
                  <span
                    className="upload-data"
                    onClick={() => fileInputRef.current.click()}>
                    <img src="/assets/image/impact-icon.svg" />
                  </span>

                  {/* HIDDEN FILE INPUT */}
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    hidden
                  />
                </div>
              </div>
            </Col>
          </Row>

          {/* Tab Content */}
          <div className="tabb-content border-0 p-0">
            {activeTab === "Overview" && (
              <>
                <div className="overview-card">
                  <h2>Elite Squad</h2>
                  <div className="overview-grid">
                    <div className="overview-grid-item">
                      <span>Players</span>
                      <h4>12</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Skills Attempted</span>
                      <h4>45</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Skills Completed</span>
                      <h4>38</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Completion Rate</span>
                      <h4>84%</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Player Active Streaks</span>
                      <h4>42</h4>
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <h2>Advanced Group</h2>
                  <div className="overview-grid">
                    <div className="overview-grid-item">
                      <span>Players</span>
                      <h4>8</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Skills Attempted</span>
                      <h4>28</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Skills Completed</span>
                      <h4>22</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Total Badges</span>
                      <h4>28</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Completion Rate</span>
                      <h4>79%</h4>
                    </div>
                  </div>
                </div>
                <div className="overview-card">
                  <h2>Beginners</h2>
                  <div className="overview-grid">
                    <div className="overview-grid-item">
                      <span>Players</span>
                      <h4>6</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Skills Attempted</span>
                      <h4>18</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Skills Completed</span>
                      <h4>12</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Total Badges</span>
                      <h4>16</h4>
                    </div>
                    <div className="overview-grid-item">
                      <span>Completion Rate</span>
                      <h4>67%</h4>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Progress" && (
              <>
                <Progress />
              </>
            )}
            {activeTab === "Skills" && (
              <>
                <SkillCompletion />
                <div className="tabb-content border-0 px-3 pt-0">
                  <Row className="mt-4">
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="submission-info">
                          <h6>3-Ball Cascade</h6>
                          <p className="skill">24 of 28 players completed</p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="submission-right">
                        <div className="progress-wrapper border-0 p-0">
                          <div className="d-flex gap-3 align-items-center">
                            <div className="progress-bar-custom">
                              <span style={{ width: `86%` }} />
                            </div>
                            <span className="percent">86%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="submission-info">
                          <h6>3-Ball Shower</h6>
                          <p className="skill">3-Ball Shower</p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="submission-right">
                        <div className="progress-wrapper border-0 p-0">
                          <div className="d-flex gap-3 align-items-center">
                            <div className="progress-bar-custom">
                              <span style={{ width: `82%` }} />
                            </div>
                            <span className="percent">82%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="submission-info">
                          <h6>4-Ball Fountain</h6>
                          <p className="skill">14 of 18 players completed</p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="submission-right">
                        <div className="progress-wrapper border-0 p-0">
                          <div className="d-flex gap-3 align-items-center">
                            <div className="progress-bar-custom">
                              <span style={{ width: `78%` }} />
                            </div>
                            <span className="percent">78%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-card mb-0">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="submission-info">
                          <h6>5-Ball Cascade</h6>
                          <p className="skill">12 of 15 players completed</p>
                        </div>
                      </div>

                      {/* RIGHT */}
                      <div className="submission-right">
                        <div className="progress-wrapper border-0 p-0">
                          <div className="d-flex gap-3 align-items-center">
                            <div className="progress-bar-custom">
                              <span style={{ width: `80%` }} />
                            </div>
                            <span className="percent">80%</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </>
            )}
            {activeTab === "Top Players" && (
              <>
                <div className="progress-card top-players">
                  <div className="chart-headiang">
                    <h4>Top Performing Players</h4>
                    <p>Players ranked by overall performance metrics</p>
                  </div>
                  <Row className="mt-4">
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="rank1-cms">
                          <img src="/assets/image/rank1.svg" />
                        </div>
                        <div className="submission-info">
                          <h6>Alex Johnson</h6>
                          <div className="performing-info">
                            <div>
                              <b>18 </b> Skills
                            </div>
                            <div>
                              <b>280</b> Points
                            </div>
                            <div>
                              <b>15</b> Streak
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="rank1-cms">
                          <img src="/assets/image/rank2.svg" />
                        </div>
                        <div className="submission-info">
                          <h6>Maria Garcia</h6>
                          <div className="performing-info">
                            <div>
                              <b>16</b> Skills
                            </div>
                            <div>
                              <b>265</b> Points
                            </div>
                            <div>
                              <b>12</b> Streak
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="rank1-cms">
                          <img src="/assets/image/rank3.svg" />
                        </div>
                        <div className="submission-info">
                          <h6>Jordan Lee</h6>
                          <div className="performing-info">
                            <div>
                              <b>15</b> Skills
                            </div>
                            <div>
                              <b>10</b> Points
                            </div>
                            <div>
                              <b>245</b> Streak
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="rank1-cms">
                          <img src="/assets/image/rank4.svg" />
                        </div>
                        <div className="submission-info">
                          <h6>Sam Wilson</h6>
                          <div className="performing-info">
                            <div>
                              <b>13</b> Skills
                            </div>
                            <div>
                              <b>210</b> Points
                            </div>
                            <div>
                              <b>8</b> Streak
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="submission-card mb-3">
                      {/* LEFT */}
                      <div className="submission-left">
                        <div className="rank1-cms">
                          <img src="/assets/image/rank5.svg" />
                        </div>
                        <div className="submission-info">
                          <h6>Casey Adams</h6>
                          <div className="performing-info">
                            <div>
                              <b>12</b> Skills
                            </div>
                            <div>
                              <b>195</b> Points
                            </div>
                            <div>
                              <b>6</b> Streak
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Row>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

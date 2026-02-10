"use client";

import { useState } from "react";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import { Button, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function Page() {
  const [activeTab, setActiveTab] = useState("Virtual Coach Analysis");
  const [show, setShow] = useState(false);
  return (
    <div className="msar-dashboard-wrapper">
      <CoachSidebar />

      <main className="msar-main">
        {/* HEADER */}
        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <h4>
              Player Videos
              <span>
                Review video submissions and provide feedback to your players
              </span>
            </h4>
          </div>
          {/* <button className="btn admin-btn-primary">+ Add Player</button> */}
        </div>

        {/* CONTENT */}
        <div className="container-fluid clb-plr-detl">
          <div className="submission-card ">
            {/* LEFT */}
            <div className="submission-left">
              <div className="video-thumb-cms" onClick={() => setShow(true)}>
                <img src="/assets/image/activity-vid-img.png" alt="" />
                <span className="play-icon-cms">
                  <img src="/assets/image/play-icon.svg" />
                </span>
              </div>

              <div className="submission-info">
                <h6>Alex Johnson</h6>
                <p className="skill">3-Ball Cascade</p>
                <p className="date">Submitted: 28/12/2024</p>
              </div>
            </div>
          </div>

          <Row className="align-items-end ">
            <Col lg={8}>
              <div className="tabbs mt-0">
                <button
                  className={`tabb ${activeTab === "Virtual Coach Analysis" ? "active" : ""}`}
                  onClick={() => setActiveTab("Virtual Coach Analysis")}>
                  Virtual Coach Analysis
                </button>

                <button
                  className={`tabb ${activeTab === "Send Feedback" ? "active" : ""}`}
                  onClick={() => setActiveTab("Send Feedback")}>
                  Send Feedback
                </button>
              </div>
            </Col>
          </Row>

          {/* Tab Content */}
          <div className="tabb-content border-0 p-0">
            {activeTab === "Virtual Coach Analysis" && (
              <>
                <div className="feedback-player-card">
                  <div className="feedback-list  d-flex justify-content-between">
                    <div className="info-feed">
                      <h3>Technique Assessment</h3>
                      <p>
                        Good hand position and timing. Slight inconsistency in
                        throw height on the right side.
                      </p>
                    </div>
                    <div className="feed-status">
                      <span>Accomplished</span>
                    </div>
                  </div>
                  <div className="feedback-list  d-flex justify-content-between">
                    <div className="info-feed">
                      <h3>Difficulty Level</h3>
                      <p>Intermediate - Approaching Advanced</p>
                    </div>
                  </div>
                  <div className="feedback-list  d-flex justify-content-between">
                    <div className="info-feed">
                      <h3>Next Focus Areas</h3>
                      <ul className="feedback-expln-list">
                        <li>Increase throw height consistency</li>
                        <li>Work on smoother hand transitions</li>
                        <li>Improve catch stability during transitions</li>
                      </ul>
                    </div>
                  </div>
                  <div className="feedback-list  d-flex justify-content-between">
                    <div className="info-feed">
                      <h3>Coaching Tips</h3>
                      <ul className="feedback-expln-list">
                        <li>
                          Practice with eyes closed to build muscle memory
                        </li>
                        <li>
                          Record yourself from multiple angles to identify
                          patterns
                        </li>
                        <li>
                          Gradually increase speed while maintaining accuracy
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Send Feedback" && (
              <>
                <div className="feedback-player-card">
                  <div className="feedback-list border-0 p-0 d-flex justify-content-between">
                    <div className="info-feed">
                      <h3>Personalized Feedback</h3>
                      <p>Provide constructive feedback to Alex Johnson</p>
                    </div>
                  </div>
                  <Col md={12}>
                    <textarea
                      className=""
                      placeholder="Your Feedback"></textarea>
                    <div className="d-flex  justify-content-between ">
                      <div className="chrtr-lmt">Max 300 Characters </div>
                      <div className="chrtr-lmt">
                        The player will receive this feedback in the app with
                        your message{" "}
                      </div>
                    </div>
                  </Col>
                  <div className=" mt-3">
                    <Button className="btn-primary">
                      Send Feedback to Player
                    </Button>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="current-subs"></div>
        </div>

        <Modal
          show={show}
          onHide={() => setShow(false)}
          centered
          size="lg"
          className="video-modal">
          {/* <div className="modl-heading">
            <h3>Right Foot Juggle</h3>
          </div> */}
          <button className="btn-close" onClick={() => setShow(false)}>
            <img src="/assets/image/close-icon.svg" />
          </button>
          <Modal.Body>
            <div className="video-wrapper">
              <video controls autoPlay>
                <source
                  src="/assets/image/hero-bg-video.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </Modal.Body>
        </Modal>
      </main>
    </div>
  );
}

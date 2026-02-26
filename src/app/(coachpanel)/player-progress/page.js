"use client";

import { useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useRouter } from "next/navigation";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("New Submissions");
  const [show, setShow] = useState(false);
  const router = useRouter();
  const feedBakPage = () => {
    router.push("/sent-feedback");
  };

  return (
    <div className="juggling-dashboard-wrapper">
      <CoachSidebar />

      <main className="juggling-main">
        {/* HEADER */}

        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Player Videos
                <span>
                  Review video submissions and provide feedback to your players
                </span>
              </h4>
            </div>
          </div>
          <div className="user-profile">
            <Link href="#">
              <img src="/assets/image/coach-mike.png" />
            </Link>
          </div>
        </div>
        {/* CONTENT */}
        <div className="container-fluid clb-plr-detl">
          <Row className="align-items-end ">
            <Col lg={8}>
              <div className="tabbs mt-0">
                <button
                  className={`tabb ${activeTab === "New Submissions" ? "active" : ""}`}
                  onClick={() => setActiveTab("New Submissions")}>
                  New Submissions (2)
                </button>

                <button
                  className={`tabb ${activeTab === "Viewed" ? "active" : ""}`}
                  onClick={() => setActiveTab("Viewed")}>
                  Viewed (1)
                </button>

                <button
                  className={`tabb ${activeTab === "Feedback Shared" ? "active" : ""}`}
                  onClick={() => setActiveTab("Feedback Shared")}>
                  Feedback Shared (1)
                </button>
              </div>
            </Col>
            <Col lg={4}>
              <div className="d-flex align-items-center flex gap-3 mx-3 mx-lg-0">
                <input
                  className="search-inp w-100"
                  type="text"
                  placeholder="Search players by name..."></input>
                <Button className="small-btn-admin">Search</Button>
              </div>
            </Col>
          </Row>

          {/* Tab Content */}
          <div className="tabb-content border-0 p-0">
            {activeTab === "New Submissions" && (
              <>
                <div className="submission-card">
                  {/* LEFT */}
                  <div className="submission-left">
                    <div
                      className="video-thumb-cms"
                      onClick={() => setShow(true)}>
                      <img src="/assets/image/activity-vid-img.png" alt="" />
                      <span className="play-icon-cms">
                        <img src="/assets/image/play-icon.svg" />
                      </span>
                    </div>

                    <div className="submission-info" onClick={feedBakPage}>
                      <h6>Alex Johnson</h6>
                      <p className="skill">3-Ball Cascade</p>
                      <p className="date">Submitted: 28/12/2024</p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="submission-right">
                    <div className="progress-wrapper">
                      <span className="viewed-badge">VIEWED</span>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="progress-bar-custom">
                          <span style={{ width: `80%` }} />
                        </div>
                        <span className="percent">80%</span>
                      </div>
                    </div>

                    <label class="progress-checkbox">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="submission-card">
                  {/* LEFT */}
                  <div className="submission-left">
                    <div
                      className="video-thumb-cms"
                      onClick={() => setShow(true)}>
                      <img src="/assets/image/activity-vid-img-1.png" alt="" />
                      <span className="play-icon-cms">
                        <img src="/assets/image/play-icon.svg" />
                      </span>
                    </div>

                    <div className="submission-info" onClick={feedBakPage}>
                      <h6>Sam Wilson</h6>
                      <p className="skill">4-Ball Fountain</p>
                      <p className="date">Submitted: 25/12/2024</p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="submission-right">
                    <div className="progress-wrapper">
                      <span className="viewed-badge">VIEWED</span>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="progress-bar-custom">
                          <span style={{ width: `80%` }} />
                        </div>
                        <span className="percent">80%</span>
                      </div>
                    </div>

                    <label class="progress-checkbox">
                      <input type="checkbox" />
                      <span class="checkmark"></span>
                    </label>
                  </div>
                </div>
                <div className="">
                  <Button className="btn-primary">Mark reviewed</Button>
                </div>
              </>
            )}
            {activeTab === "Viewed" && (
              <>
                <div className="submission-card">
                  {/* LEFT */}
                  <div className="submission-left">
                    <div
                      className="video-thumb-cms"
                      onClick={() => setShow(true)}>
                      <img src="/assets/image/activity-vid-img-1.png" alt="" />
                      <span className="play-icon-cms">
                        <img src="/assets/image/play-icon.svg" />
                      </span>
                    </div>

                    <div className="submission-info" onClick={feedBakPage}>
                      <h6>Maria Garcia</h6>
                      <p className="skill">5-Ball Cascade</p>
                      <p className="date">Submitted: 27/12/2024</p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="submission-right">
                    <div className="progress-wrapper border-0 p-0">
                      <span className="viewed-badge blue-badge">
                        <img src="/assets/image/checkmark-white.svg" />
                        Viewed
                      </span>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="progress-bar-custom">
                          <span style={{ width: `85%` }} />
                        </div>
                        <span className="percent">85%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Feedback Shared" && (
              <>
                <div className="submission-card">
                  {/* LEFT */}
                  <div className="submission-left">
                    <div
                      className="video-thumb-cms"
                      onClick={() => setShow(true)}>
                      <img src="/assets/image/quotes-img-4.png" alt="" />
                      <span className="play-icon-cms">
                        <img src="/assets/image/play-icon.svg" />
                      </span>
                    </div>

                    <div className="submission-info" onClick={feedBakPage}>
                      <h6>Jordan Lee</h6>
                      <p className="skill">3-Ball Shower</p>
                      <p className="date">Submitted: 26/12/2024</p>
                    </div>
                  </div>

                  {/* RIGHT */}
                  <div className="submission-right">
                    <div className="progress-wrapper border-0 p-0">
                      <span className="viewed-badge ">
                        <img src="/assets/image/chat-small-icon.svg" />
                        Feedback Shared
                      </span>
                      <div className="d-flex gap-3 align-items-center">
                        <div className="progress-bar-custom">
                          <span style={{ width: `72%` }} />
                        </div>
                        <span className="percent">72%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          <div className="current-subs"></div>
        </div>
        <div className="insrt-text">
          <p>
            New videos from your players. Take a look anytime — feedback is
            always optional.
          </p>
        </div>
        <Modal
          show={show}
          onHide={() => setShow(false)}
          centered
          size="lg"
          className="video-modal">
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

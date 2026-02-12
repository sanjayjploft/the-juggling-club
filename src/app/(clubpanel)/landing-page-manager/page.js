"use client";

import { useState } from "react";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");
  const [checked, setChecked] = useState(false);
  return (
    <div className="msar-dashboard-wrapper">
      <ClubSidebar />

      <main className="msar-main">
        {/* HEADER */}

        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Landing Page Manager
                <span>Customize your club's public landing page</span>
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
          <div className="card-grid-box">
            <div className="lndg-pg-card">
              <div className="count-info-card">
                <h4>Testimonials</h4>
                <h6>Manage player/coach testimonials</h6>
                <p>
                  Add up to 3 testimonials{" "}
                  <Link href="/clubplayer-details" className="">
                    <img src="/assets/image/edit.svg" />
                  </Link>
                </p>
              </div>
            </div>
            <div className="lndg-pg-card">
              <div className="count-info-card">
                <h4>Leaderboard</h4>
                <h6>Configure leaderboard display</h6>
                <p>
                  Show/hide and customize display{" "}
                  <Link href="/clubplayer-details" className="">
                    <img src="/assets/image/edit.svg" />
                  </Link>
                </p>
              </div>
            </div>
            <div className="lndg-pg-card">
              <div className="count-info-card">
                <h4>Coach Spotlight</h4>
                <h6>Feature your coaches</h6>
                <p>
                  Add up to 3 featured coaches{" "}
                  <Link href="/clubplayer-details" className="">
                    <img src="/assets/image/edit.svg" />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="tabbs">
            <button
              className={`tabb ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}>
              Content
            </button>

            <button
              className={`tabb ${activeTab === "billing" ? "active" : ""}`}
              onClick={() => setActiveTab("billing")}>
              Page Sections
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
                <div className="date-det-skills-spot">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <h5>
                        It's fun, competitive, and actually improved my first
                        touch.
                        <span>— Player 1</span>
                      </h5>
                      <p>
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="custom-checkbox" />
                          <span className="label-text">
                            Show on landing page
                          </span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 text-white">
                    <Link href="/clubplayer-details" className="">
                      <img src="/assets/image/trash.svg" />
                    </Link>
                  </div>
                </div>
                <div className="date-det-skills-spot">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <h5>
                        Our players love seeing their progress each week.
                        <span>— Coach 1</span>
                      </h5>
                      <p>
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="custom-checkbox" />
                          <span className="label-text">
                            Show on landing page
                          </span>
                        </label>
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 text-white">
                    <Link href="/clubplayer-details" className="">
                      <img src="/assets/image/trash.svg" />
                    </Link>
                  </div>
                </div>
                <h3>Add Testimonial</h3>
                <Row>
                  <Col md={5}>
                    <Form.Floating className="mb-4">
                      <Form.Control placeholder="Author Name" />
                      <label>Author Name</label>
                    </Form.Floating>
                  </Col>
                </Row>
                <Row>
                  <Col md={5}>
                    <textarea
                      className=""
                      placeholder="Testimonial Text"></textarea>
                  </Col>
                </Row>
                <Button className="btn-next-bg mt-4">Add Testimonial</Button>
              </p>
            )}
            {activeTab === "billing" && (
              <p>
                <h3>
                  Page Sections
                  <span>
                    Add up to 3 player/parent/coach testimonials (max 300 chars
                    each)
                  </span>
                </h3>
                <div className="date-det-skills-spot mb-2">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <h5>Leaderboard Embed</h5>
                      <p className="mt-0 grdesd">Display top club performers</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 text-white">
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <span className="custom-checkbox" />
                      <span className="label-text"></span>
                    </label>
                  </div>
                </div>
                <div className="date-det-skills-spot mb-2">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <h5>Coach Spotlight</h5>
                      <p className="mt-0 grdesd">
                        Feature lead coach or ambassador
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 text-white">
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <span className="custom-checkbox" />
                      <span className="label-text"></span>
                    </label>
                  </div>
                </div>
                <div className="date-det-skills-spot mb-2">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <h5>VoiceTag Intro</h5>
                      <p className="mt-0 grdesd">
                        10-15s audio welcome message
                      </p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 text-white">
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <span className="custom-checkbox" />
                      <span className="label-text"></span>
                    </label>
                  </div>
                </div>
                <div className="date-det-skills-spot mb-2">
                  <div className="d-flex gap-3 align-items-center">
                    <div>
                      <h5>Hero Section</h5>
                      <p className="mt-0 grdesd">10-15s Video</p>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-4 text-white">
                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => setChecked(!checked)}
                      />
                      <span className="custom-checkbox" />
                      <span className="label-text"></span>
                    </label>
                  </div>
                </div>
                <Button className="btn-next-bg mt-4">Confirm</Button>
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

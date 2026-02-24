"use client";

import { useState } from "react";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

export default function Page() {
  const [activeTab, setActiveTab] = useState("profile");

  // Testimonials
  const [testimonial1, setTestimonial1] = useState(false);
  const [testimonial2, setTestimonial2] = useState(false);

  // Page Sections
  const [leaderboard, setLeaderboard] = useState(false);
  const [coachSpotlight, setCoachSpotlight] = useState(false);
  const [voiceTag, setVoiceTag] = useState(false);
  const [heroSection, setHeroSection] = useState(false);

  return (
    <div className="juggling-dashboard-wrapper">
      <ClubSidebar />

      <main className="juggling-main">
        {/* HEADER */}
        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <h4>
              Landing Page Manager
              <span>Customize your club's public landing page</span>
            </h4>
            <div className="btn-cdr d-flex gap-3 align-items-center">
              <Link href="/club-landing-page" className="small-btn-admin">
                Preview page
              </Link>
              <Link href="#" className="copy-url-btn">
                <img src="/assets/image/copy-icon.svg" alt="" /> Copy URL
              </Link>
            </div>
          </div>

          <div className="user-profile">
            <Link href="#">
              <img src="/assets/image/coach-mike.png" alt="" />
            </Link>
          </div>
        </div>

        {/* CONTENT */}
        <div className="container-fluid clb-plr-detl">
          {/* TOP CARDS */}
          <div className="card-grid-box">
            {/* Testimonials */}
            <div className="lndg-pg-card">
              <div className="count-info-card">
                <h4>Testimonials</h4>
                <h6>Manage player/coach testimonials</h6>
                <p>Add up to 3 testimonials</p>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="lndg-pg-card">
              <div className="count-info-card">
                <h4>Leaderboard</h4>
                <h6>Configure leaderboard display</h6>
                <p>Show/hide and customize display</p>
              </div>
            </div>

            {/* Coach Spotlight */}
            <div className="lndg-pg-card">
              <div className="count-info-card">
                <h4>Coach Spotlight</h4>
                <h6>Feature your coaches</h6>
                <p>
                  Add up to 3 featured coaches
                  <Link href="/coach-spotlight">
                    <img src="/assets/image/edit.svg" alt="" />
                  </Link>
                </p>
              </div>
            </div>

            {/* VoiceTag Intro */}
            <div className="lndg-pg-card">
              <div className="count-info-card">
                <h4>VoiceTag Intro</h4>
                <h6>Manage voicetag</h6>
                <p>
                  Upload/Replace voicetag
                  <Link href="/voicetag-intro">
                    <img src="/assets/image/edit.svg" alt="" />
                  </Link>
                </p>
              </div>
            </div>
          </div>

          {/* TABS */}
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

          {/* TAB CONTENT */}
          <div className="tabb-content">
            {/* CONTENT TAB */}
            {activeTab === "profile" && (
              <>
                <h3>
                  Testimonials
                  <span>
                    Add up to 3 player/parent/coach testimonials (max 300 chars
                    each)
                  </span>
                </h3>

                {/* Testimonial 1 */}
                <div className="date-det-skills-spot">
                  <div>
                    <h5>
                      It's fun, competitive, and actually improved my first
                      touch.
                      <span>— Player 1</span>
                    </h5>

                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={testimonial1}
                        onChange={() => setTestimonial1(!testimonial1)}
                      />
                      <span className="custom-checkbox" />
                      <span className="label-text">Show on landing page</span>
                    </label>
                  </div>

                  <Link href="#">
                    <img src="/assets/image/trash.svg" alt="" />
                  </Link>
                </div>

                {/* Testimonial 2 */}
                <div className="date-det-skills-spot">
                  <div>
                    <h5>
                      Our players love seeing their progress each week.
                      <span>— Coach 1</span>
                    </h5>

                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={testimonial2}
                        onChange={() => setTestimonial2(!testimonial2)}
                      />
                      <span className="custom-checkbox" />
                      <span className="label-text">Show on landing page</span>
                    </label>
                  </div>

                  <Link href="#">
                    <img src="/assets/image/trash.svg" alt="" />
                  </Link>
                </div>

                <h3>Add Testimonial</h3>

                <Row>
                  <Col lg={5} xs={12}>
                    <Form.Floating className="mb-4">
                      <Form.Control placeholder="Author Name" />
                      <label>Author Name</label>
                    </Form.Floating>
                  </Col>
                </Row>

                <Row>
                  <Col lg={5} xs={12}>
                    <Form.Floating className="mb-4">
                      <Form.Select>
                        <option>Select User Type</option>
                        <option>Player</option>
                        <option>Parent</option>
                        <option>Coach</option>
                      </Form.Select>
                      <label>Select User Type </label>
                    </Form.Floating>
                  </Col>
                </Row>
                <Row>
                  <Col lg={5} xs={12}>
                    <textarea placeholder="Testimonial Text" />
                  </Col>
                </Row>

                <Button className="btn-next-bg mt-4">Add Testimonial</Button>
              </>
            )}

            {/* PAGE SECTIONS TAB */}
            {activeTab === "billing" && (
              <>
                <h3>
                  Page Sections
                  <span>Enable or disable landing page sections</span>
                </h3>

                {[
                  {
                    title: "Leaderboard Embed",
                    desc: "Display top club performers",
                    state: leaderboard,
                    setState: setLeaderboard,
                    link: null, // ❌ no page open
                  },
                  {
                    title: "Coach Spotlight",
                    desc: "Manage coaches from Club Management → Coach",
                    state: coachSpotlight,
                    setState: setCoachSpotlight,
                    link: "/coach-spotlight",
                    highlightDesc: true,
                  },
                  {
                    title: "VoiceTag Intro",
                    desc: "10–15s audio welcome message",
                    state: voiceTag,
                    setState: setVoiceTag,
                    link: "/voicetag-intro",
                  },
                  {
                    title: "Hero Section",
                    desc: "10–15s Video",
                    state: heroSection,
                    setState: setHeroSection,
                    link: "/landing-hero-page",
                  },
                ].map((item, i) => (
                  <div className="date-det-skills-spot mb-2" key={i}>
                    <div>
                      {/* ✅ Conditional clickable heading */}
                      {item.link ? (
                        <Link href={item.link} className="heading-link">
                          <h5>{item.title}</h5>
                        </Link>
                      ) : (
                        <h5>{item.title}</h5> // Leaderboard Embed (no link)
                      )}

                      <p
                        className={`mt-0 grdesd ${
                          item.highlightDesc ? "highlight-desc" : ""
                        }`}>
                        {item.desc}
                      </p>
                    </div>

                    <label className="checkbox-wrapper">
                      <input
                        type="checkbox"
                        checked={item.state}
                        onChange={() => item.setState(!item.state)}
                      />
                      <span className="custom-checkbox" />
                    </label>
                  </div>
                ))}

                <Button className="btn-next-bg mt-4">Confirm</Button>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

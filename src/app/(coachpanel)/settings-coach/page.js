"use client";

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import VoiceSelector from "../../../components/dashboard/VoiceSelector";
import Link from "next/link";
import FaqAccordion from "../../../components/FaqAccordion";
export default function Page() {
  const [activeTab, setActiveTab] = useState("Profile");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setLastName] = useState("Johnson");
  const [email, setEmail] = useState("Alex_johnson02@gmail.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [profileImg, setProfileImg] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };
  return (
    <div className="msar-dashboard-wrapper">
      <CoachSidebar />

      <main className="msar-main">
        {/* HEADER */}
        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <h4>
              Settings
              <span>Track player and team performance metrics</span>
            </h4>
          </div>
          <button className="btn admin-btn-primary">+ Add Player</button>
        </div>

        {/* CONTENT */}
        <div className="container-fluid clb-plr-detl">
          <Row className="align-items-end ">
            <Col lg={8}>
              <div className="tabbs mt-0">
                <button
                  className={`tabb ${activeTab === "Profile" ? "active" : ""}`}
                  onClick={() => setActiveTab("Profile")}>
                  Profile
                </button>

                <button
                  className={`tabb ${activeTab === "Voice Setting" ? "active" : ""}`}
                  onClick={() => setActiveTab("Voice Setting")}>
                  Voice Setting
                </button>

                <button
                  className={`tabb ${activeTab === "Reminder" ? "active" : ""}`}
                  onClick={() => setActiveTab("Reminder")}>
                  Reminder
                </button>

                <button
                  className={`tabb ${activeTab === "Support" ? "active" : ""}`}
                  onClick={() => setActiveTab("Support")}>
                  Support
                </button>
              </div>
            </Col>
          </Row>

          {/* Tab Content */}
          <div className="tabb-content ">
            {activeTab === "Profile" && (
              <>
                <Row>
                  {/* 🔥 Profile Upload */}
                  <Col md={10}>
                    <div className="upload-profile-img my-5 mt-4">
                      <label className="upload-box-profile">
                        {profileImg ? (
                          <img src={profileImg} alt="Profile" />
                        ) : (
                          <span>
                            {" "}
                            <img src="/assets/image/upload-icn-profile.svg" />
                          </span>
                        )}
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                        />
                      </label>
                      <div className="lable-profile">Upload Photo</div>
                    </div>
                  </Col>

                  {/* First Name */}
                  <Col md={5}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label>First Name</label>
                    </Form.Floating>
                  </Col>

                  {/* Last Name */}
                  <Col md={5}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label>Last Name</label>
                    </Form.Floating>
                  </Col>

                  {/* Email */}
                  <Col md={5}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Email</label>
                    </Form.Floating>
                  </Col>

                  {/* Phone */}
                  <Col md={5}>
                    <div
                      className={`floating-phone ${phone ? "has-value" : ""}`}>
                      <PhoneInput
                        country="in"
                        value={phone}
                        onChange={(value) => setPhone(value)}
                        inputClass="phone-input"
                        containerClass="phone-container"
                        buttonClass="phone-flag"
                        enableSearch
                      />
                      <label className="floating-label">Phone Number *</label>
                    </div>
                  </Col>

                  {/* Password */}
                  <Col md={5}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label>Password</label>
                    </Form.Floating>
                  </Col>

                  {/* Confirm Password */}
                  <Col md={5}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                      <label>Confirm Password</label>
                    </Form.Floating>
                  </Col>
                </Row>
                <Button className="btn-next-bg">Update</Button>
              </>
            )}
            {activeTab === "Voice Setting" && (
              <>
                <Row>
                  <Col md={12}>
                    <div className="date-det-skills-spot">
                      <div className="d-flex gap-3 align-items-center">
                        <img src="/assets/image/coach-mike.png" />
                        <div>
                          <h5>My Clone Voice</h5>
                          <div className="voice-info-player">
                            Status: <span>Active</span> |{" "}
                            <span className="voice-duration">
                              Duration: 15 min
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="right-action-bx d-flex align-items-center gap-3 flex-wrap">
                        <button className="play-icon-big">
                          {" "}
                          <img src="/assets/image/play-big-icon.svg" />
                        </button>
                        <button className="re-record-btn"> Re-record</button>
                        <button className="disable-clone-btn">
                          {" "}
                          Disable Clone
                        </button>
                      </div>
                    </div>
                  </Col>
                </Row>
                <div className="tabs-heading-cms">
                  <h4>System Voices</h4>
                </div>
                <VoiceSelector />
              </>
            )}
            {activeTab === "Reminder" && (
              <>
                <div className="notification-card notification-card2 notification-cms ">
                  <div className="notification-card-in mb-4">
                    <h3>
                      Send Reminder On
                      <span>
                        Receive a reminder to message your team once per week.
                      </span>
                    </h3>
                    <input class="switch" type="checkbox" />
                  </div>
                  <Col lg={3}>
                    <Form.Floating>
                      <Form.Select>
                        <option selected> Monday</option>
                        <option> Monday</option>
                      </Form.Select>
                      <label>Send Reminder On</label>
                    </Form.Floating>
                  </Col>
                </div>
                <div className="notification-card notification-card2 mb-0">
                  <div className="notification-card-in ">
                    <h3>
                      Al Auto-Draft Suggested Message
                      <span>
                        Al will automatically draft a suggested message for you
                        to review and edit each week.
                      </span>
                    </h3>
                    <input class="switch" type="checkbox" />
                  </div>
                </div>
                <button className="btn admin-save-btn">Save</button>
              </>
            )}
            {activeTab === "Support" && (
              <>
                <div>
                  <Row className="px-3 mt-4">
                    <Col md={6} className="sprt-faq">
                      <FaqAccordion />
                      <div className="deactivate-account">
                        <img src="/assets/image/alert-rd.svg" />
                        <h3>
                          Deactivate Account Warning: This will deactivate your
                          account.
                        </h3>
                        <Button className="btn-next-bg">
                          Deactivate account
                        </Button>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="player-card">
                        <h4 className="mb-1">24/7 Support</h4>
                        <p>Our support team is available to help anytime.</p>
                        <Form.Floating className="mb-4">
                          <Form.Control placeholder="Name" />
                          <label>Name</label>
                        </Form.Floating>
                        <Form.Floating className="mb-4">
                          <Form.Control placeholder="Email" />
                          <label>Email</label>
                        </Form.Floating>
                        <Form.Floating className="mb-4">
                          <Form.Select>
                            <option>Subject</option>
                          </Form.Select>
                          <label>Subject</label>
                        </Form.Floating>
                        <textarea
                          className="mb-4"
                          placeholder="Message"></textarea>
                        <Button className="btn-next-bg">Send Message</Button>
                        <div className="tandcpp">
                          <Link href="/" className="">
                            Terms of Use
                          </Link>
                          <small>|</small>
                          <Link href="/" className="">
                            Privacy Policy
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </div>
              </>
            )}
          </div>

          <div className="current-subs"></div>
        </div>
      </main>
    </div>
  );
}

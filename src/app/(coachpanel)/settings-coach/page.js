"use client";

import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import FaqAccordionCoach from "../../../components/FaqAccordionCoach";
import VoiceSelector from "../../../components/dashboard/VoiceSelector";
import DeactivatingAccount from "../../../components/dashboard/DeactivatingAccount";
export default function Page() {
  const countries = [
    { name: "United States", code: "+1", flag: "/assets/image/usa-flag.svg" },
    { name: "Argentina", code: "+54", flag: "/assets/image/Argentina.svg" },
    { name: "Australia", code: "+61", flag: "/assets/image/Australia.svg" },
    { name: "France", code: "+33", flag: "/assets/image/France.svg" },
    { name: "India", code: "+91", flag: "/assets/image/India.svg" },
    {
      name: "Luxembourg",
      code: "+352",
      flag: "/assets/image/Luxembourg.svg",
    },
    { name: "Nicaragua", code: "+505", flag: "/assets/image/Nicaragua.svg" },
    { name: "Portugal", code: "+351", flag: "/assets/image/Portugal.svg" },
    { name: "Ukraine", code: "+380", flag: "/assets/image/Ukraine.svg" },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  const selectCountry = (country) => {
    setSelected(country);
    setOpen(false);
  };
  const [activeTab, setActiveTab] = useState("Profile");
  const [phone, setPhone] = useState("");
  const [firstName, setFirstName] = useState("Alex");
  const [lastName, setLastName] = useState("Johnson");
  const [email, setEmail] = useState("Alex_johnson02@gmail.com");
  const [profileImg, setProfileImg] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [showDelete, setShowDelete] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
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
                Settings
                <span>Manage your account settings </span>
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
                  <Col lg={5} xs={12}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                      />
                      <label>First Name</label>
                    </Form.Floating>
                  </Col>

                  {/* Last Name */}
                  <Col lg={5} xs={12}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                      />
                      <label>Last Name</label>
                    </Form.Floating>
                  </Col>

                  {/* Email */}
                  <Col lg={5} xs={12}>
                    <Form.Floating className="mb-4">
                      <Form.Control
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <label>Email</label>
                    </Form.Floating>
                  </Col>

                  {/* Phone */}
                  <Col lg={5} xs={12} className="mb-4">
                    <div className="csm-phone-input">
                      <div className="phone-wrapper">
                        {/* COUNTRY SELECT */}
                        <div
                          className="country-box"
                          onClick={() => setOpen(!open)}>
                          <img src={selected.flag} alt="flag" />
                          <span className="dial-code">{selected.code}</span>

                          <span className="arrow">
                            <img
                              src="/assets/image/phone-arrow.svg"
                              alt="arrow"
                            />
                          </span>
                        </div>

                        {/* DROPDOWN */}
                        {open && (
                          <div className="country-dropdown">
                            {countries.map((country, index) => (
                              <div
                                key={index}
                                className="country-item"
                                onClick={() => selectCountry(country)}>
                                <img src={country.flag} />
                                <span>{country.name}</span>
                                <strong>{country.code}</strong>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* INPUT */}
                        <div className="input-box">
                          <input type="number" required />
                          <label>Phone Number</label>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* Password */}
                  <Col lg={5} xs={12}>
                    <div className="password-field mb-4">
                      <Form.Floating>
                        <Form.Control
                          type={showPassword ? "text" : "password"}
                          placeholder="Password"
                        />
                        <label>Password</label>
                      </Form.Floating>

                      <img
                        src={
                          showPassword
                            ? "/assets/image/eye-open.svg"
                            : "/assets/image/eye-close.svg"
                        }
                        className="eye-icon"
                        onClick={() => setShowPassword(!showPassword)}
                      />
                    </div>
                  </Col>

                  {/* Confirm Password */}
                  <Col lg={5} xs={12}>
                    <div className="password-field mb-4">
                      <Form.Floating>
                        <Form.Control
                          type={showConfirm ? "text" : "password"}
                          placeholder="Confirm Password"
                        />
                        <label>Confirm Password</label>
                      </Form.Floating>

                      <img
                        src={
                          showConfirm
                            ? "/assets/image/eye-open.svg"
                            : "/assets/image/eye-close.svg"
                        }
                        className="eye-icon"
                        onClick={() => setShowConfirm(!showConfirm)}
                      />
                    </div>
                  </Col>
                </Row>
                <Button className="btn-next-bg">Update</Button>
              </>
            )}
            {activeTab === "Voice Setting" && (
              <>
                <Row>
                  <Col md={12}>
                    <div className="date-det-skills-spot voice-settings">
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
                      Weekly Reminder to Message Team
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
                        <option> Tuesday</option>
                        <option> Wednesday</option>
                        <option> Thursday</option>
                        <option> Friday</option>
                        <option> Saturday</option>
                        <option> Sunday </option>
                      </Form.Select>
                      <label>Send Reminder On</label>
                    </Form.Floating>
                  </Col>
                </div>
                <div className="notification-card notification-card2 notification-cms mb-0">
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
                    <Col lg={6} xs={12} className="sprt-faq mb-4 mb-lg-0">
                      <FaqAccordionCoach />
                      <div className="deactivate-account">
                        <img src="/assets/image/alert-rd.svg" />
                        <h3>
                          Deactivate Account Warning: This will deactivate your
                          account.
                        </h3>
                        <Button
                          className="btn-next-bg"
                          onClick={() => setShowDelete(true)}>
                          Deactivate account
                        </Button>
                      </div>
                    </Col>

                    <Col lg={6} xs={12}>
                      <div className="player-card setting-form-crd">
                        <div>
                          <div>
                            <h4 className="mb-1">24/7 Support</h4>
                            <p>
                              Our support team is available to help anytime.
                            </p>
                          </div>
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
                        </div>
                        <div className="tandcpp">
                          <a href="/terms-of-use" className="">
                            Terms of Use
                          </a>
                          <small>|</small>
                          <a href="/privacy-policy" className="">
                            Privacy Policy
                          </a>
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
        <DeactivatingAccount
          open={showDelete}
          onClose={() => setShowDelete(false)}
        />
      </main>
    </div>
  );
}

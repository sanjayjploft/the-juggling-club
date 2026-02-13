"use client";

import { useRef, useState } from "react";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import { Button, Col, Form, Row } from "react-bootstrap";
import Link from "next/link";

export default function Page() {
  const [primaryColor, setPrimaryColor] = useState("#0055A4");
  const [secondaryColor, setSecondaryColor] = useState("#00A86B");
  const [checked, setChecked] = useState(false);

  const fileRef = useRef(null);
  const [file, setFile] = useState(null);
  const [profileImg, setProfileImg] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImg(URL.createObjectURL(file));
    }
  };
  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) {
      setFile(selected);
    }
    if (file) {
      console.log("Uploaded file:", file.name);
    }
  };

  const openFilePicker = () => {
    fileRef.current.click();
  };
  const [activeTab, setActiveTab] = useState("profile");
  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  return (
    <div className="msar-dashboard-wrapper">
      <ClubSidebar />

      <main className="msar-main">
        {/* HEADER */}

        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Club Management
                <span>Manage branding, admins, coaches, and media</span>
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
          <div className="tabbs mt-0">
            <button
              className={`tabb ${activeTab === "profile" ? "active" : ""}`}
              onClick={() => setActiveTab("profile")}>
              Branding
            </button>

            <button
              className={`tabb ${activeTab === "billing" ? "active" : ""}`}
              onClick={() => setActiveTab("billing")}>
              Coach Spotlight
            </button>

            <button
              className={`tabb ${activeTab === "settings" ? "active" : ""}`}
              onClick={() => setActiveTab("settings")}>
              Administrators
            </button>
            <button
              className={`tabb ${activeTab === "media" ? "active" : ""}`}
              onClick={() => setActiveTab("media")}>
              Media
            </button>
          </div>

          {/* Tab Content */}
          <div className="tabb-content">
            {activeTab === "profile" && (
              <p>
                <h3>
                  Club Branding
                  <span>Customize your club colors and appearance</span>
                </h3>
                <div className="step-form">
                  <Row>
                    <Col lg={5}>
                      <div
                        className={`floating-color ${primaryColor ? "has-value" : ""}`}>
                        <div className="color-input-wrapper">
                          <input
                            type="color"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            className="color-picker"
                          />
                          <Form.Control
                            type="text"
                            value={primaryColor}
                            onChange={(e) => setPrimaryColor(e.target.value)}
                            placeholder="Primary Brand Color"
                          />
                        </div>

                        <label>Primary Brand Color</label>
                      </div>
                    </Col>

                    <Col lg={5}>
                      <div
                        className={`floating-color ${
                          secondaryColor ? "has-value" : ""
                        }`}>
                        <div className="color-input-wrapper">
                          <input
                            type="color"
                            value={secondaryColor}
                            onChange={(e) => setSecondaryColor(e.target.value)}
                            className="color-picker"
                          />
                          <Form.Control
                            type="text"
                            value={secondaryColor}
                            onChange={(e) => setSecondaryColor(e.target.value)}
                            placeholder="Secondary Color"
                          />
                        </div>
                        <label>Secondary Color</label>
                      </div>
                    </Col>
                    <Col lg={12}>
                      <Button className="btn-next-bg mt-4">
                        Save Branding Changes
                      </Button>
                    </Col>
                  </Row>
                </div>
              </p>
            )}
            {activeTab === "billing" && (
              <p>
                <h3>
                  Coach Spotlight
                  <span>Feature coaches on your club landing page</span>
                </h3>
                <Row>
                  <Col md={12}>
                    <div className="date-det-skills-spot">
                      <div className="d-flex gap-3 align-items-center">
                        <img src="/assets/image/coach-mike.png" />
                        <div>
                          <h5>
                            Coach Mike
                            <span>Technical Director</span>
                          </h5>
                          <p>
                            15+ years of coaching experience with a passion for
                            youth development.
                          </p>
                        </div>
                      </div>
                      <div className="d-flex align-items-center gap-4 text-white">
                        Show
                        <input class="switch mt-0" type="checkbox" />
                        <Link href="/clubplayer-details" className="">
                          <img src="/assets/image/trash.svg" />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
                <h3>Add Another Coach</h3>
                <div className="add-tme">
                  <Row>
                    <Col lg={10} xs={12}>
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
                        <div className="lable-profile">Upload Coach Photo</div>
                      </div>
                    </Col>
                    <Col lg={5} xs={12}>
                      <Form.Floating className="mb-4">
                        <Form.Control placeholder="Coach Name" />
                        <label>Coach Name</label>
                      </Form.Floating>
                    </Col>
                    <Col lg={5} xs={12}>
                      <Form.Floating className="mb-4">
                        <Form.Select>
                          <option>Coach Title</option>
                        </Form.Select>
                        <label>Coach Title</label>
                      </Form.Floating>
                    </Col>
                    <Col lg={10} xs={12}>
                      <textarea className="" placeholder="Coach Bio"></textarea>
                    </Col>
                    <Col lg={10} xs={12} className="chrtr-lmt">
                      Max 300 Characters{" "}
                    </Col>
                  </Row>
                  <Button className="btn-next-bg">Add Coach</Button>
                </div>
              </p>
            )}
            {activeTab === "settings" && (
              <p>
                <h3>
                  Club Administrators
                  <span>
                    Manage who can edit club content. Only Super Admins can
                    manage other administrators.
                  </span>
                </h3>
                <Row>
                  <Col md={12}>
                    <div className="date-det-skills-spot">
                      <div className="d-flex gap-3 align-items-center">
                        <img src="/assets/image/coach-mike.png" />
                        <div>
                          <h5>
                            You
                            <span>Super Admin</span>
                          </h5>
                          <p>admin@club.com</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                </Row>
                <h3>Add New Admin</h3>
                <div className="add-tme">
                  <Row>
                    <Col lg={5} xs={12}>
                      <Form.Floating className="mb-4">
                        <Form.Control placeholder="Admin Name" />
                        <label>Admin Name</label>
                      </Form.Floating>
                    </Col>
                    <Col lg={5} xs={12}>
                      <Form.Floating className="mb-4">
                        <Form.Control placeholder="Admin Email" />
                        <label>Admin Email</label>
                      </Form.Floating>
                    </Col>
                  </Row>
                  <Row className="adm-per">
                    <Col md={12}>
                      <h4 className="mb-1">Permissions:</h4>
                      <div className="permissions-box mt-3">
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="custom-checkbox" />
                          <span className="label-text">
                            Upload and Update Club Logo
                          </span>
                        </label>

                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="custom-checkbox" />
                          <span className="label-text">
                            Edit Club Landing Page Content
                          </span>
                        </label>
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="custom-checkbox" />
                          <span className="label-text">
                            Manage VoiceTag Recordings
                          </span>
                        </label>
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="custom-checkbox" />
                          <span className="label-text">Make Payments</span>
                        </label>
                        <label className="checkbox-wrapper">
                          <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                          />
                          <span className="custom-checkbox" />
                          <span className="label-text">View Reports</span>
                        </label>
                      </div>
                    </Col>
                  </Row>
                  <Button className="btn-next-bg mt-4">Add Admin</Button>
                </div>
              </p>
            )}
            {activeTab === "media" && (
              <p>
                <h3>
                  Club Logo
                  <span>Upload your club logo for the landing page</span>
                </h3>
                <div className="upload-box" onClick={handleClick}>
                  <div className="upload-content">
                    <div className="upload-icon">
                      <img src="/assets/image/upload-icn.svg" />
                    </div>
                    <p className="upload-text">
                      Drop your logo here or click to upload
                    </p>
                    <p className="upload-subtext">PNG, JPG, or GIF (max 5MB)</p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/gif"
                    onChange={handleFileChange}
                    hidden
                  />
                </div>
                <div className="d-flex align-items-center justify-content-between mt-5">
                  <h3 className="">
                    VoiceTag Intro
                    <span>
                      Record a 10-15 second welcome message for your club
                      landing page
                    </span>
                  </h3>
                  <input class="switch mt-0" type="checkbox" />
                </div>
                <div className="upload-box" onClick={handleClick}>
                  <div className="upload-content">
                    <div className="upload-icon">
                      <img src="/assets/image/upload-icn.svg" />
                    </div>
                    <p className="upload-text">
                      Upload an audio message (MP3 or WAV)
                    </p>
                    <p className="upload-subtext">Max 30 seconds</p>
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png,image/jpeg,image/gif"
                    onChange={handleFileChange}
                    hidden
                  />
                </div>

                <Button className="btn-next-bg mt-4">Save</Button>
              </p>
            )}
          </div>

          <div className="current-subs"></div>
        </div>
      </main>
    </div>
  );
}

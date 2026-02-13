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
                Coach Spotlight
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
        <div className="container-fluid clb-plr-detl ">
          {/* Tab Content */}
          <div className="tabb-content mt-0">
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
                      <Link href="#" className="">
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
          </div>

          <div className="current-subs"></div>
        </div>
      </main>
    </div>
  );
}

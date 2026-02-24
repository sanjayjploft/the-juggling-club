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
    <div className="juggling-dashboard-wrapper">
      <ClubSidebar />

      <main className="juggling-main">
        {/* HEADER */}

        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                VoiceTag Intro
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
              <div className="d-flex align-items-center justify-content-between">
                <h3 className="">
                  VoiceTag Intro
                  <span>
                    Record a 10-15 second welcome message for your club landing
                    page
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
          </div>

          <div className="current-subs"></div>
        </div>
      </main>
    </div>
  );
}

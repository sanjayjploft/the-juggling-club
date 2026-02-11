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
            <div>
              <h4>Messages</h4>
              <p className="mb-0">
                {" "}
                Keep your players motivated with personal messages and voice
                recordings.
              </p>
            </div>
            <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
              <Link href="/send-message" className="btn admin-btn-primary">
                Send Message
              </Link>
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
          <Row>
            <Col lg={12}>
              <div className="masg-list">
                <div className="masg-info">
                  <h4>Alex Johnson</h4>
                  <p>
                    Great work on completing that skill Keep the same focus on
                    the next one.
                  </p>
                </div>
                <span className="time-masg">2 hours ago</span>
              </div>
            </Col>
            <Col lg={12}>
              <div className="masg-list">
                <div className="masg-info">
                  <h4>Maria Garcia</h4>
                  <p>
                    Nice progress! Try keeping your balance a bit lower on the
                    next attempt.
                  </p>
                </div>
                <span className="time-masg">1 day ago</span>
              </div>
            </Col>
            <Col lg={12}>
              <div className="masg-list">
                <div className="masg-info">
                  <h4>James Smith</h4>
                  <p>
                    You’re building a solid streak—stay consistent and it’ll
                    show in games.
                  </p>
                </div>
                <span className="time-masg">2 hours ago</span>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

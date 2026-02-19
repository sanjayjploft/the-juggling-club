"use client";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import Link from "next/link";

export default function DashboardPage() {
  const [copied, setCopied] = useState(false);
  const joinCode = "T-SAE-12345";

  const copyCode = () => {
    navigator.clipboard.writeText(joinCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };
  return (
    <div className="msar-dashboard-wrapper">
      <CoachSidebar />

      <main className="msar-main">
        {/* HEADER */}

        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                YOUR TEAMS/GROUPS
                <span>Customize your club's public landing page</span>
              </h4>
            </div>
            <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
              <Form.Floating className="filter-select">
                <Form.Select>
                  <option selected> 20</option>
                  <option> 25</option>
                </Form.Select>
                <label>Age group</label>
              </Form.Floating>

              <Form.Floating className="filter-select">
                <Form.Select>
                  <option selected> Status</option>
                  <option> Status</option>
                </Form.Select>
                <label>Activity status</label>
              </Form.Floating>

              <Link href="/create-new-group" className="btn-primary">
                Create Group
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
        <div className="container-fluid ">
          <div className="team-card mb-4">
            {/* HEADER */}
            <Row className="align-items-center mb-3">
              <Col md={8}>
                <div className="team-heading">
                  Soccer Academy Elite
                  <span className="team-pill">TEAM</span>
                </div>
              </Col>
            </Row>

            {/* STATS */}
            <div className="team-stats-row">
              <div>
                <p>Players</p>
                <h6>12</h6>
              </div>
              <div>
                <p>Age Range</p>
                <h6>16-18</h6>
              </div>
              <div>
                <p>Gender</p>
                <h6>Mixed</h6>
              </div>
              <div>
                <p>Created</p>
                <h6>15/1/2024</h6>
              </div>
              <div>
                <p>Avg Skill Completion</p>
                <h6>43</h6>
              </div>
            </div>

            {/* JOIN CODE */}
            <Row className="align-items-center">
              <Col md={6}>
                <div className="join-code-box">
                  <span className="join-label">Join Code</span>
                  <div className="d-flex align-items-center">
                    <span className="join-code">T-SAE-12345</span>
                    <span className="copy-text ms-3">
                      {" "}
                      <img src="/assets/image/copy-icon.svg" className="me-2" />
                      Copy
                    </span>
                  </div>
                  <img src="/assets/image/qr-code.svg" className="qr-img" />
                </div>

                <small className="join-info">
                  Players enter this code in the app to join your Team/Group
                </small>
              </Col>

              <Col
                md={6}
                className="text-md-end text-center mb-4 button-mobile">
                <Link href="/view-players" className="btn-primary">
                  VIEW PLAYERS
                </Link>
                <Link href={""} className="btn-outline ms-3">
                  SEND MESSAGE
                </Link>
                <Link href={""} className=" ms-3">
                  <img src="/assets/image/settings.svg" className="" />
                </Link>
              </Col>
            </Row>
          </div>
          <div className="team-card mb-4">
            {/* HEADER */}
            <Row className="align-items-center mb-3">
              <Col md={6}>
                <div className="team-heading">
                  Youth Training Group{" "}
                  <span className="team-pill">TeamTeam</span>
                </div>
              </Col>
            </Row>

            {/* STATS */}
            <div className="team-stats-row">
              <div>
                <p>Players</p>
                <h6>8</h6>
              </div>
              <div>
                <p>Age Range</p>
                <h6>12-15</h6>
              </div>
              <div>
                <p>Gender</p>
                <h6>Mixed</h6>
              </div>
              <div>
                <p>Created</p>
                <h6>1/2/2024</h6>
              </div>
              <div>
                <p>Avg Skill Completion</p>
                <h6>30</h6>
              </div>
            </div>

            {/* JOIN CODE */}
            <Row className="align-items-center">
              <Col md={6}>
                <div className="join-code-box">
                  <span className="join-label">Join Code</span>
                  <div className="d-flex align-items-center">
                    <span className="join-code">T-YTG-67890</span>
                    <span className="copy-text ms-3">
                      {" "}
                      <img src="/assets/image/copy-icon.svg" className="me-2" />
                      Copy
                    </span>
                  </div>
                  <img src="/assets/image/qr-code.svg" className="qr-img" />
                </div>

                <small className="join-info">
                  Players enter this code in the app to join your group
                </small>
              </Col>

              <Col
                md={6}
                className="text-md-end text-center mb-4 button-mobile">
                <Link href="/view-players" className="btn-primary">
                  VIEW PLAYERS
                </Link>
                <Link href={""} className="btn-outline ms-3">
                  SEND MESSAGE
                </Link>
                <Link href={""} className="ms-3">
                  <img src="/assets/image/settings.svg" className="" />
                </Link>
              </Col>
            </Row>
          </div>
        </div>
      </main>
    </div>
  );
}

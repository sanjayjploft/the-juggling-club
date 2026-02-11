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
                CREATE A NEW TEAM/GROUP
                <span>
                  Define your team or group and generate an invite code for your
                  players.
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
        <div className="container-fluid ">
          <div className="content-card add-tme">
            <Row>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control placeholder="Team/Group Name" />
                  <label>Team/Group Name *</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Select>
                    <option>Group Type </option>
                  </Form.Select>
                  <label>Group Type *</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control placeholder="Age Range" />
                  <label>Age Range (Optional)</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Select>
                    <option>Gender</option>
                  </Form.Select>
                  <label>Gender (Optional)</label>
                </Form.Floating>
              </Col>
              <Col md={10}>
                <Form.Floating className="mb-4">
                  <Form.Control placeholder="Club/Organization" />
                  <label>Club/Organization (Optonal)</label>
                </Form.Floating>
              </Col>
              <Col lg={10}>
                <div className="auto-generated-code">
                  <h4>Auto-Generated Invite Code</h4>
                  <p>
                    Players will use this code to join and receive a 5%
                    discount.
                  </p>
                </div>
              </Col>
            </Row>

            <Button className="btn-next-bg">Create Group</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

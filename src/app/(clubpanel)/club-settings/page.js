"use client";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
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
      <ClubSidebar />

      <main className="msar-main">
        {/* HEADER */}
        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>Club Settings</h4>
              <p className="mb-0">
                {" "}
                Manage your club profile and contact information
              </p>
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
          <div className="player-card mx-3 mb-4">
            <div className="settings-sub-heading">
              <h6>Basic Information</h6>
              <p className="">Update your club details</p>
            </div>
            <Row>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control value={"Manchester United Youth Academy"} />
                  <label>Club Name</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control value={"https://www.manchesterunited.com"} />
                  <label>Website</label>
                </Form.Floating>
              </Col>

              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control value={"admin@mufc.com"} />
                  <label>Contact Email</label>
                </Form.Floating>
              </Col>

              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control value={"+44 161 676 1994"} />
                  <label>Phone</label>
                </Form.Floating>
              </Col>
            </Row>
          </div>
          <div className="player-card mx-3 mb-4">
            <div className="settings-sub-heading">
              <h6>Location</h6>
              <p className="">Club headquarters address</p>
            </div>
            <Row>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    value={"Carrington Training Ground, Carrington"}
                  />
                  <label>Street Address</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control value={"Manchester"} />
                  <label>City</label>
                </Form.Floating>
              </Col>

              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control value={"England"} />
                  <label>Country</label>
                </Form.Floating>
              </Col>
            </Row>
          </div>
          <div className="player-card mx-3">
            <div className="settings-sub-heading">
              <h6>Notification Preferences</h6>
              <p className="">Club headquarters address</p>
            </div>
            <div className="notification-card notification-card2">
              <div className="notification-card-in">
                <h3>Weekly summary email</h3>
                <input class="switch" type="checkbox" />
              </div>
            </div>
            <div className="notification-card notification-card2">
              <div className="notification-card-in">
                <h3>Billing alerts</h3>
                <input class="switch" type="checkbox" />
              </div>
            </div>
            <div className="notification-card notification-card2">
              <div className="notification-card-in">
                <h3>Player inactivity alerts</h3>
                <input class="switch" type="checkbox" />
              </div>
            </div>
          </div>
          <div className="mt-4 mx-3">
            <Link href="" className="btn-primary">
              Save Settings
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

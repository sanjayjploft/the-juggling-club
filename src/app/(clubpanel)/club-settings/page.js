"use client";

import { useState } from "react";
import { Row, Col, Form } from "react-bootstrap";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import Link from "next/link";

export default function DashboardPage() {
  /* ===============================
     FORM STATE
  =============================== */

  const [formData, setFormData] = useState({
    clubName: "Manchester United Youth Academy",
    website: "https://www.manchesterunited.com",
    email: "admin@mufc.com",
    phone: "+44 161 676 1994",
    address: "Carrington Training Ground, Carrington",
    city: "Manchester",
    country: "England",
  });

  /* ===============================
     NOTIFICATION STATE
  =============================== */

  const [notifications, setNotifications] = useState({
    weekly: true,
    billing: false,
    inactivity: true,
  });

  /* ===============================
     INPUT CHANGE
  =============================== */

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  /* ===============================
     TOGGLE SWITCH
  =============================== */

  const toggleNotification = (key) => {
    setNotifications((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  /* ===============================
     SAVE SETTINGS
  =============================== */

  const handleSave = () => {
    console.log("FORM DATA:", formData);
    console.log("NOTIFICATIONS:", notifications);

    alert("Settings Saved Successfully ✅");
  };

  return (
    <div className="juggling-dashboard-wrapper">
      <ClubSidebar />

      <main className="juggling-main">
        {/* ================= HEADER ================= */}

        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <h4>
              Club Settings
              <span>Manage your club profile and contact information</span>
            </h4>
          </div>

          <div className="user-profile">
            <Link href="#">
              <img src="/assets/image/club-logo.png" alt="" />
            </Link>
          </div>
        </div>

        {/* ================= CONTENT ================= */}

        <div className="container-fluid">
          {/* BASIC INFO */}
          <div className="player-card mx-3 mb-4 h-auto">
            <div className="settings-sub-heading">
              <h6>Basic Information</h6>
              <p>Update your club details</p>
            </div>

            <Row>
              <Col lg={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    name="clubName"
                    value={formData.clubName}
                    onChange={handleChange}
                  />
                  <label>Club Name</label>
                </Form.Floating>
              </Col>

              <Col lg={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                  />
                  <label>Website</label>
                </Form.Floating>
              </Col>

              <Col lg={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label>Contact Email</label>
                </Form.Floating>
              </Col>

              <Col lg={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  <label>Phone</label>
                </Form.Floating>
              </Col>
            </Row>
          </div>

          {/* LOCATION */}
          <div className="player-card mx-3 mb-4 h-auto">
            <div className="settings-sub-heading">
              <h6>Location</h6>
              <p>Club headquarters address</p>
            </div>

            <Row>
              <Col lg={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                  <label>Street Address</label>
                </Form.Floating>
              </Col>

              <Col lg={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  <label>City</label>
                </Form.Floating>
              </Col>

              <Col lg={5}>
                <Form.Floating className="mb-4">
                  <Form.Control
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                  />
                  <label>Country</label>
                </Form.Floating>
              </Col>
            </Row>
          </div>

          {/* NOTIFICATIONS */}
          <div className="player-card mx-3 h-auto">
            <div className="settings-sub-heading">
              <h6>Notification Preferences</h6>
              <p>Set Notification Preferences </p>
            </div>

            {/* Weekly */}
            <div className="notification-card notification-card2">
              <div className="notification-card-in">
                <h3>Weekly summary email</h3>
                <input
                  className="switch"
                  type="checkbox"
                  checked={notifications.weekly}
                  onChange={() => toggleNotification("weekly")}
                />
              </div>
            </div>

            {/* Billing */}
            <div className="notification-card notification-card2">
              <div className="notification-card-in">
                <h3>Billing alerts</h3>
                <input
                  className="switch"
                  type="checkbox"
                  checked={notifications.billing}
                  onChange={() => toggleNotification("billing")}
                />
              </div>
            </div>

            {/* Inactivity */}
            <div className="notification-card notification-card2">
              <div className="notification-card-in">
                <h3>Player inactivity alerts</h3>
                <input
                  className="switch"
                  type="checkbox"
                  checked={notifications.inactivity}
                  onChange={() => toggleNotification("inactivity")}
                />
              </div>
            </div>
          </div>

          {/* SAVE BUTTON */}
          <div className="mt-4 mx-3">
            <button className="btn btn-primary">Save Settings</button>
          </div>
        </div>
      </main>
    </div>
  );
}

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
    <div className="juggling-dashboard-wrapper">
      <CoachSidebar />

      <main className="juggling-main">
        {/* HEADER */}
        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>Your Rewards</h4>
              <p className="mb-0">
                {" "}
                Manage your club and organizational affiliations. Create new
                groups or join existing ones.
              </p>
            </div>
            <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
              <Link href="/claim-rewards" className="btn-primary">
                View Preference
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
          <div className="next-reward-card">
            <div>
              <p>Reward Preference</p>
              <h2>Amazon Gift Cards</h2>
            </div>
            <img src="/assets/image/trophy.svg" />
          </div>
          <div className="reward-heading">
            <h2>Reward Tiers</h2>
          </div>
          <div className="gift-rewards-list earned-rewards">
            <div className="gift-rewards-item">
              <Row>
                <Col lg={5}>
                  <div className="gift-info">
                    <div>
                      <img src="/assets/image/gift-card-img.svg" />
                    </div>
                    <div>
                      <h4>
                        Amazon Gift Card $25 <span>Earned</span>
                      </h4>
                      <p>Unlock at 5 players</p>
                    </div>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="gift-progress">
                    <div style={{ width: "100%" }}>
                      {/* Text */}
                      <p
                        style={{
                          marginBottom: "6px",
                          fontSize: "14px",
                          color: "#fff",
                          textAlign: "center",
                        }}>
                        100% complete
                      </p>

                      {/* Progress Bar */}
                      <div
                        style={{
                          width: "100%",
                          background: "rgba(10, 95, 255, 0.40)",
                          borderRadius: "8px",
                          height: "6px",
                          overflow: "hidden",
                        }}>
                        <div
                          style={{
                            width: "100%", // 🔒 static
                            height: "100%",
                            background: "#00D40B",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="text-end">
                  <div className="claim-reward">
                    <Link href="/claim-rewards" className="btn-primary">
                      Claim Reward
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <div className="gift-rewards-list  progress-rewards">
            <div className="gift-rewards-item">
              <Row>
                <Col lg={5}>
                  <div className="gift-info">
                    <div>
                      <img src="/assets/image/gift-card-img.svg" />
                    </div>
                    <div>
                      <h4>
                        Amazon Gift Card $25 <span>In Progress</span>
                      </h4>
                      <p>Unlock at 5 players</p>
                    </div>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="gift-progress">
                    <div style={{ width: "100%" }}>
                      {/* Text */}
                      <p
                        style={{
                          marginBottom: "6px",
                          fontSize: "14px",
                          color: "#fff",
                          textAlign: "center",
                        }}>
                        24% complete
                      </p>

                      {/* Progress Bar */}
                      <div
                        style={{
                          width: "100%",
                          background: "rgba(10, 95, 255, 0.40)",
                          borderRadius: "8px",
                          height: "6px",
                          overflow: "hidden",
                        }}>
                        <div
                          style={{
                            width: "24%", // 🔒 static
                            height: "100%",
                            background: "#0A5FFF",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
               
              </Row>
            </div>
          </div>
          <div className="gift-rewards-list  progress-rewards luminosity-mode">
            <div className="gift-rewards-item">
              <Row>
                <Col lg={5}>
                  <div className="gift-info">
                    <div>
                      <img src="/assets/image/holding-hands.svg" />
                    </div>
                    <div>
                      <h4>
                        Donation to Charity <span>Locked</span>
                      </h4>
                      <p>Unlock at 15 players</p>
                    </div>
                  </div>
                </Col>
                <Col lg={2}>
                  <div className="gift-progress">
                    <div style={{ width: "100%" }}>
                      {/* Text */}
                      <p
                        style={{
                          marginBottom: "6px",
                          fontSize: "14px",
                          color: "#fff",
                          textAlign: "center",
                        }}>
                        24% complete
                      </p>

                      {/* Progress Bar */}
                      <div
                        style={{
                          width: "100%",
                          background: "rgba(10, 95, 255, 0.40)",
                          borderRadius: "8px",
                          height: "6px",
                          overflow: "hidden",
                        }}>
                        <div
                          style={{
                            width: "24%", // 🔒 static
                            height: "100%",
                            background: "#0A5FFF",
                            borderRadius: "8px",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </Col>
                <Col lg={5} className="text-end">
                  <div className="claim-reward">
                   
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Row className="mt-4">
            <Col lg={12}>
              <div className="auto-generated-code rewards-work">
                <h4>How Rewards Work</h4>
                <ul className="feedback-expln-list yellow-chekmark mt-2">
                  <li>
                    Each unique player that joins your group counts towards a
                    reward{" "}
                  </li>
                  <li>
                    {" "}
                    Create multiple groups to grow your player base faster
                  </li>
                  <li>
                    Share your join codes with fellow coaches to
                    collaborate{" "}
                  </li>
                  <li>Change your reward preference anytime in settings </li>
                </ul>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

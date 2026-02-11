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
              <h4>Your Rewards</h4>
              <p className="mb-0">
                {" "}
                Manage your club and organizational affiliations. Create new
                groups or join existing ones.
              </p>
            </div>
            <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
              <Link href="/view-preference" className="btn-primary">
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
          <div className="gift-rewards-list earned-rewards">
            <div className="gift-rewards-item">
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
                      width: "180px",
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
              <div className="claim-reward">
                <Link href="#" className="btn-primary">
                  Claim Reward
                </Link>
              </div>
            </div>
          </div>
          <div className="gift-rewards-list progress-rewards">
            <div className="gift-rewards-item">
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
                      width: "180px",
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
              <div className="claim-reward">
                {/* <Link href="#" className="btn-primary">
                  Claim Reward
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

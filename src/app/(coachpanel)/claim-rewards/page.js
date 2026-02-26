"use client";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import SavePreference from "../../../components/dashboard/SavePreference";
import Link from "next/link";

export default function DashboardPage() {
  const [copied, setCopied] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
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
                <Col lg={12}>
                  {/* ===== GIFT OPTION ===== */}
                  <div className="gift-info d-flex align-items-center gap-3">
                    <label className="send-masg-radio">
                      <input type="radio" name="rewardType" defaultChecked />
                      <span className="send-masg-ui"></span>
                    </label>

                    <div>
                      <img src="/assets/image/gift-card-img.svg" />
                    </div>

                    <div>
                      <h4>Amazon Gift Card $25</h4>
                      <p>Unlock at 5 players</p>
                    </div>
                  </div>

                  <hr />

                  {/* ===== DONATION OPTION ===== */}
                  <div className="notification-card notification-card2 notification-cms border-0 p-0">
                    <div className=" mb-4 d-flex align-items-start gap-3">
                      <label className="send-masg-radio mt-1">
                        <input type="radio" name="rewardType" />
                        <span className="send-masg-ui"></span>
                      </label>

                      <div>
                        <h3>
                          Donation
                          <span>
                            Donate your rewards to support your sports club or a
                            chosen charity.
                          </span>
                        </h3>
                      </div>
                    </div>
                    <div className="donation-bottm-box">
                      <div className="donation-type">
                        {" "}
                        <img src="/assets/image/trophy-rewd.svg" />
                        Donate to My Club
                      </div>
                      <div className="donation-type">
                        {" "}
                        <img src="/assets/image/donation-rewd.svg" />
                        Donate to Charity
                      </div>
                      <Col lg={3} className="mt-4">
                        <Form.Floating>
                          <Form.Select>
                            <option>Select Charity</option>
                            <option>Charity One</option>
                            <option>Charity Two</option>
                          </Form.Select>
                          <label>Select Charity</label>
                        </Form.Floating>
                      </Col>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          <Col lg={5} className="ms-3">
            <div className="claim-reward">
              <Link
                href=""
                className="btn-primary"
                onClick={() => setShowDelete(true)}>
                Save Preference
              </Link>
            </div>
          </Col>
        </div>
        <SavePreference
          open={showDelete}
          onClose={() => setShowDelete(false)}
        />
      </main>
    </div>
  );
}

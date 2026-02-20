"use client";

import { useState, useRef } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import Link from "next/link";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("Summary Report");
  const fileInputRef = useRef(null);
  return (
    <div className="msar-dashboard-wrapper">
      <ClubSidebar />

      <main className="msar-main">
        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Billing & Payments
                <span>Manage your club subscription and payments</span>
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
        <div className="container-fluid">
          <div className=" subscription-page">
            {/* CURRENT SUBSCRIPTION */}
            <div className="subscription-box mb-4">
              <div className="d-flex justify-content-between align-items-start flex-wrap gap-2">
                <div>
                  <h6>CURRENT SUBSCRIPTION</h6>
                  <p className="">Your active club subscription plan</p>
                </div>
                <div className="text-end">
                  <div className="badge paid-badge">PAID</div>
                  <div className="badge-explin">
                    Your subscription is active and in good standing.
                  </div>
                </div>
              </div>

              <div className="team-info-grid subscription-box-info mx-0">
                <div className="team-grid-item">
                  <p>Tier 1</p>
                  <h5>Subscription Tier</h5>
                </div>
                <div className="team-grid-item">
                  <p>$99</p>
                  <h5>Annual Cost</h5>
                </div>
                <div className="team-grid-item">
                  <p>250</p>
                  <h5>Players Registered</h5>
                </div>
                <div className="team-grid-item">
                  <p>July 20, 2026</p>
                  <h5>Renewal Date</h5>
                </div>
              </div>
            </div>

            <div className="subscription-box mb-4">
              <div className="mb-3">
                <h6>Pricing Tiers</h6>
                <p className="">
                  Club subscription plans based on player count
                </p>
              </div>

              <Row className="g-3">
                <Col lg={4} xs={12}>
                  <div className="player-card tier-card">
                    <h3>Tier 1 - Small Clubs</h3>
                    <div className="align-items-center d-flex justify-content-between">
                      <div>
                        <span className="card-price-tier">$99</span>
                        <div className="small">1 - 500 players</div>
                      </div>
                      <Link href="" className="btn upgrade-btn">
                        Current Plan
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col lg={4} xs={12}>
                  <div className="player-card tier-card">
                    <h3>Tier 2 - Medium Clubs</h3>
                    <div className="align-items-center d-flex justify-content-between">
                      <div>
                        <span className="card-price-tier">$199</span>
                        <div className="small">501 - 1,000 players</div>
                      </div>
                      <Link href="" className="btn upgrade-btn">
                        Upgrade to Tier 2
                      </Link>
                    </div>
                  </div>
                </Col>

                <Col lg={4} xs={12}>
                  <div className="player-card tier-card">
                    <h3>Tier 3 - Large Clubs</h3>
                    <div className="align-items-center d-flex justify-content-between">
                      <div>
                        <span className="card-price-tier">$299</span>
                        <div className="small">1,001+ players</div>
                      </div>
                      <Link href="" className="btn upgrade-btn">
                        Upgrade to Tier 3
                      </Link>
                    </div>
                  </div>
                </Col>
              </Row>

              <p className="note-text mt-3">
                <img src="/assets/image/chat-icon-info.svg" /> Tier fees are
                waived in subsequent years if you achieve 10% or higher member
                participation.
              </p>
            </div>

            <div className="subscription-box mb-4">
              <div className="mb-3">
                <h6>INVOICE HISTORY</h6>
                <p className="">Download and manage your billing invoices</p>
              </div>
              <div className="table-wrapper">
                <table className="billing-table">
                  <thead>
                    <tr>
                      <th>Invoice Number</th>
                      <th>Date</th>
                      <th>Amount</th>
                      <th>Status</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>INV-2024-001</td>
                      <td>2024-01-15</td>
                      <td>$99</td>

                      <td>
                        <div className="status bg-green-tbl">Paid</div>
                      </td>

                      <td>
                        <Link href="#" className="">
                          <img src="/assets/image/download-icon-gray.svg" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>INV-2024-001</td>
                      <td>2024-01-15</td>
                      <td>$99</td>

                      <td>
                        <div className="status bg-green-tbl">Paid</div>
                      </td>

                      <td>
                        <Link href="#" className="">
                          <img src="/assets/image/download-icon-gray.svg" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>INV-2024-001</td>
                      <td>2024-01-15</td>
                      <td>$99</td>

                      <td>
                        <div className="status bg-green-tbl">Paid</div>
                      </td>

                      <td>
                        <Link href="#" className="">
                          <img src="/assets/image/download-icon-gray.svg" />
                        </Link>
                      </td>
                    </tr>
                    <tr>
                      <td>INV-2024-001</td>
                      <td>2024-01-15</td>
                      <td>$99</td>

                      <td>
                        <div className="status bg-green-tbl">Paid</div>
                      </td>

                      <td>
                        <Link href="#" className="">
                          <img src="/assets/image/download-icon-gray.svg" />
                        </Link>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="subscription-box">
              <div className="mb-3">
                <h6>Payment Method</h6>
                <p className="">Update your billing information</p>
              </div>

              <div className="date-det-skills-spot mb-2">
                <div className="d-flex gap-3 align-items-center">
                  <div>
                    <h5>Visa ending in 4242</h5>
                    <p className="mt-0 grdesd">Expires 12/26</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-4 text-white">
                  <Link href="" className="btn upgrade-btn">
                    Update
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

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
        {/* HEADER */}

        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Reports
                <span>View club analytics and player engagement</span>
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
          <div className="tabbs mt-0">
            <button
              className={`tabb ${activeTab === "Summary Report" ? "active" : ""}`}
              onClick={() => setActiveTab("Summary Report")}>
              Summary Report
            </button>

            <button
              className={`tabb ${activeTab === "Detail Report" ? "active" : ""}`}
              onClick={() => setActiveTab("Detail Report")}>
              Detail Report
            </button>
          </div>

          {/* Tab Content */}
          <div className="tabb-content p-0 border-0 mx-0">
            {activeTab === "Summary Report" && (
              <>
                <div className="card-grid-box">
                  <div className="player-card">
                    <h4>Total Registered</h4>
                    <div className="count-info-card">
                      <h6>5</h6>
                    </div>
                  </div>
                  <div className="player-card">
                    <h4>Club-Linked</h4>
                    <div className="count-info-card">
                      <h6>4</h6>
                      <p>Used club code</p>
                    </div>
                  </div>
                  <div className="player-card">
                    <h4>Club-Interest</h4>
                    <div className="count-info-card">
                      <h6>1</h6>
                      <p>No code used</p>
                    </div>
                  </div>
                  <div className="player-card">
                    <h4>Active (30d)</h4>
                    <div className="count-info-card">
                      <h6>0</h6>
                    </div>
                  </div>
                  <div className="player-card">
                    <h4>Avg Skills per Active Player</h4>
                    <div className="count-info-card">
                      <h6>13</h6>
                    </div>
                  </div>
                </div>
                <div className="card-cms-heading mt-5 ms-3">
                  <h4>Registered Players by Age & Gender</h4>
                </div>
                <div className="card-grid-box grid-box-style-2 card-line-cms mt-2">
                  <div className="player-card">
                    <h4>Registered Players</h4>
                    <div className="count-info-card mt-2">
                      <ul>
                        <li>
                          U12 Boys <span>1</span>
                        </li>
                        <li>
                          U12 Girls <span>1</span>
                        </li>
                        <li>
                          U14 Boys <span>1</span>
                        </li>
                        <li>
                          U14 Girls <span>1</span>
                        </li>

                        <li>
                          U16 Boys <span>1</span>
                        </li>
                        <li>
                          U16 Girls <span>0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="player-card">
                    <h4>Active Players (30d)</h4>
                    <div className="count-info-card mt-2">
                      <ul>
                        <li>
                          U2 Boys <span>1</span>
                        </li>
                        <li>
                          U12 Girls <span>1</span>
                        </li>
                        <li>
                          U14 Boys <span>1</span>
                        </li>
                        <li>
                          U14 Girls <span>1</span>
                        </li>
                        <li>
                          U16 Boys <span>1</span>
                        </li>
                        <li>
                          14-16 Girls <span>0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="card-cms-heading mt-4 ms-3">
                  <h4>Average Badges Earned by Age & Gender</h4>
                </div>
                <div className="card-grid-box grid-box-style-2 card-line-cms mt-2">
                  <div className="player-card">
                    <h4>Average Badges per Player</h4>
                    <div className="count-info-card mt-2">
                      <ul>
                        <li>
                          U12 Boys <span>8</span>
                        </li>
                        <li>
                          U12 Girls <span>12</span>
                        </li>
                        <li>
                          U14 Boys <span>15</span>
                        </li>
                        <li>
                          U14 Girls <span>10</span>
                        </li>

                        <li>
                          U16 Boys <span>18</span>
                        </li>
                        <li>
                          U16 Girls <span>0</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="player-card">
                    <h4>Additional Metrics</h4>
                    <div className="count-info-card mt-2">
                      <ul>
                        <li>
                          Subscription Tier <span>Tier 1</span>
                        </li>
                        <li>
                          Players Added (7d) <span>12</span>
                        </li>
                        <li>
                          Players Added (30d) <span>45</span>
                        </li>
                        <li>
                          Players Added (90d) <span>120</span>
                        </li>
                        <li>
                          Total Points Earned <span>14,100</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </>
            )}
            {activeTab === "Detail Report" && (
              <>
                <div className="content-card">
                  <div className="billing-card">
                    <div className="tbl-fltr">
                      <Row className="mb-3 align-items-center">
                        <Col md={4} className="">
                          <h2 className="report-tabs-title">
                            Player Details{" "}
                            <span>
                              Exportable list of all registered players
                            </span>
                          </h2>
                        </Col>
                        <Col
                          md={8}
                          className="d-flex align-items-center gap-3 text-end justify-content-end flex-wrap">
                          <div className="d-flex align-items-center gap-3 text-end justify-content-end">
                            <input
                              className="search-inp w-75"
                              type="text"
                              placeholder="Search players by name..."></input>
                            <Button className="small-btn-admin">Search</Button>
                          </div>
                          <div className="d-flex align-items-center  gap-3">
                            <div className="filter-btn-outline">
                              {" "}
                              <img src="/assets/image/filter-icon.svg" />
                              Filter
                            </div>
                            <div className="upload-data-img">
                              {/* ICON */}
                              <span
                                className="upload-data"
                                onClick={() => fileInputRef.current.click()}>
                                <img src="/assets/image/impact-icon.svg" />
                              </span>

                              {/* HIDDEN FILE INPUT */}
                              <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                hidden
                              />
                            </div>
                          </div>
                        </Col>

                        <Col lg={2}></Col>
                      </Row>
                    </div>
                    <div className="card-grid-box billing-card m-0">
                      <div className="table-wrapper">
                        <table className="billing-table">
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Age</th>
                              <th>Gender</th>
                              <th>Type</th>
                              <th>Registration</th>
                              <th>Badges</th>
                              <th>Points</th>
                              <th>Last Activity</th>
                            </tr>
                          </thead>

                          <tbody>
                            <tr>
                              <td>Alex Johnson</td>
                              <td>U12</td>
                              <td>Boy</td>

                              <td>
                                <div className="status bg-green-tbl">
                                  Club-Linked
                                </div>
                              </td>

                              <td>2024-01-15</td>
                              <td>15</td>
                              <td>3,200</td>
                              <td>2024-12-26</td>
                            </tr>
                            <tr>
                              <td>Maria Garcia</td>
                              <td>U14</td>
                              <td>Girl</td>

                              <td>
                                <div className="status bg-green-tbl">
                                  Club-Linked
                                </div>
                              </td>

                              <td>2024-01-15</td>
                              <td>12</td>
                              <td>2,800</td>
                              <td>2024-12-25</td>
                            </tr>
                            <tr>
                              <td>James Smith</td>
                              <td>U16</td>
                              <td>Boy</td>
                              <td>
                                <div className="status bg-blue-tbl">
                                  Club-Interest
                                </div>
                              </td>
                              <td>2024-03-10</td>
                              <td>18</td>
                              <td>4,100</td>
                              <td>2024-12-26</td>
                            </tr>
                            <tr>
                              <td>James Smith</td>
                              <td>U16</td>
                              <td>Girl</td>

                              <td>
                                <div className="status bg-green-tbl">
                                  Club-Linked
                                </div>
                              </td>

                              <td>2024-04-05</td>
                              <td>10</td>
                              <td>4,100</td>
                              <td>2024-12-24</td>
                            </tr>
                            <tr>
                              <td>Alex Johnson</td>
                              <td>U12</td>
                              <td>Boy</td>

                              <td>
                                <div className="status bg-green-tbl">
                                  Club-Linked
                                </div>
                              </td>

                              <td>2024-01-15</td>
                              <td>15</td>
                              <td>3,200</td>
                              <td>2024-12-26</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

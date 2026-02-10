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
              <h4>Soccer Academy Elite</h4>
              <p className="mb-0">
                Manage and track your team members' progress.
              </p>
            </div>
          </div>
          <button className="btn admin-btn-primary">+ Add Player</button>
        </div>

        {/* CONTENT */}
        <div className="container-fluid ">
          <div className="card-grid-box">
            <div className="player-card">
              <h4>Total Players</h4>
              <div className="count-info-card">
                <h6>5</h6>
              </div>
              <img src="/assets/image/total-players-icon.svg" />
            </div>
            <div className="player-card">
              <h4>Avg Skills Completed</h4>
              <div className="count-info-card">
                <h6>35</h6>
              </div>
              <img src="/assets/image/inactive-players-icon.svg" />
            </div>
            <div className="player-card">
              <h4>Total Badges</h4>
              <div className="count-info-card">
                <h6>63</h6>
              </div>
              <img src="/assets/image/rewards-earned.svg" />
            </div>
            <div className="player-card">
              <h4>Total Points</h4>
              <div className="count-info-card">
                <h6>13,600</h6>
              </div>
              <img src="/assets/image/rewards-earned.svg" />
            </div>
          </div>
          <div className="content-card billing-card mt-4">
            <div className=" table-head d-flex flex-wrap gap-3 justify-content-between  align-items-center mb-3">
              <div>
                <h2 class="billing-title mb-0">Team Members</h2>
                <p className="mb-0">
                  View and manage individual player progress
                </p>
              </div>
              <div className="d-flex align-items-center flex gap-3">
                <input
                  className="search-inp w-100"
                  type="text"
                  placeholder="Search players by name..."></input>
                <Button className="small-btn-admin">Search</Button>
              </div>
            </div>
            <div className="table-wrapper">
              <table className="billing-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skills</th>
                    <th>Points</th>
                    <th>Badges</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="/assets/image/rank1.svg" />
                    </td>
                    <td>Alex Johnson</td>
                    <td>U14</td>
                    <td>45/110</td>
                    <td>3,200</td>
                    <td>15</td>
                    <td>
                      <span className="act-sts">Active</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank2.svg" />
                    </td>
                    <td>Maria Garcia</td>
                    <td>U12</td>
                    <td>38/110</td>
                    <td>2,800</td>
                    <td>12</td>
                    <td>
                      <span className="act-sts">Active</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank3.svg" />
                    </td>
                    <td>James Smith</td>
                    <td>U16</td>
                    <td>52/110</td>
                    <td>4,100</td>
                    <td>18</td>
                    <td>
                      <span className="inact-sts">Inactive</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank4.svg" />
                    </td>
                    <td>James Smith</td>
                    <td>U16</td>
                    <td>38/110</td>
                    <td>2,800</td>
                    <td>10</td>
                    <td>
                      <span className="act-sts">Active</span>
                    </td>
                    <td>
                      <Link href="/clubplayer-details" className="">
                        <img src="/assets/image/view.svg" />
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

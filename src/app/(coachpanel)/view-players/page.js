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
                Soccer Academy Elite
                <span>Manage and track your team members' progress</span>
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
              <img src="/assets/image/hand-gesture.svg" />
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
                    <th>Gender</th>
                    <th>Skills</th>
                    <th>Points</th>
                    <th>Streak</th>
                    <th>Joined</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="/assets/image/rank1.svg" />
                    </td>
                    <td>
                      <Link href={"/sent-feedback"}>Alex Johnson</Link>
                    </td>
                    <td>12-14</td>
                    <td>Boy</td>
                    <td>42</td>
                    <td>3,200</td>
                    <td>23 Weeks</td>
                    <td>2024-01-15</td>
                    <td>
                      <Link href="/coach-messages" className="">
                        <img src="/assets/image/messages-menu.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank2.svg" />
                    </td>
                    <td>
                      {" "}
                      <Link href={"/sent-feedback"}>Maria Garcia</Link>
                    </td>
                    <td>10-12</td>
                    <td>Girl</td>
                    <td>35</td>
                    <td>2,800</td>
                    <td>18 Weeks</td>
                    <td>2024-01-15</td>
                    <td>
                      <Link href="/coach-messages" className="">
                        <img src="/assets/image/messages-menu.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank3.svg" />
                    </td>
                    <td>
                      {" "}
                      <Link href={"/sent-feedback"}>James Smith</Link>
                    </td>
                    <td>12-14</td>
                    <td>Boy</td>
                    <td>42</td>
                    <td>3,200</td>
                    <td>23 Weeks</td>
                    <td>2024-01-15</td>
                    <td>
                      <Link href="/coach-messages" className="">
                        <img src="/assets/image/messages-menu.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank4.svg" />
                    </td>
                    <td>
                      {" "}
                      <Link href={"/sent-feedback"}>Alex Johnson</Link>
                    </td>
                    <td>12-14</td>
                    <td>Boy</td>
                    <td>42</td>
                    <td>3,200</td>
                    <td>23 Weeks</td>
                    <td>2024-01-15</td>
                    <td>
                      <Link href="/coach-messages" className="">
                        <img src="/assets/image/messages-menu.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank1.svg" />
                    </td>
                    <td>
                      {" "}
                      <Link href={"/sent-feedback"}>Johnson </Link>
                    </td>
                    <td>12-14</td>
                    <td>Boy</td>
                    <td>42</td>
                    <td>3,200</td>
                    <td>23 Weeks</td>
                    <td>2024-01-15</td>
                    <td>
                      <Link href="/coach-messages" className="">
                        <img src="/assets/image/messages-menu.svg" />
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

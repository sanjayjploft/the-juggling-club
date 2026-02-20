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
                Leaderboard
                <span>
                  Track your team's performance and celebrate achievements.
                </span>
              </h4>
            </div>
            <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
              <Form.Floating className="filter-select">
                <Form.Select>
                  <option selected> 20</option>
                  <option> 25</option>
                </Form.Select>
                <label>Level</label>
              </Form.Floating>

              <Form.Floating className="filter-select">
                <Form.Select>
                  <option selected> Group</option>
                  <option> Group</option>
                </Form.Select>
                <label>Group</label>
              </Form.Floating>

              {/* <Link href="/create-new-group" className="btn-primary">
                Create Group
              </Link> */}
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
          <div className="content-card billing-card  border-0 p-0">
            <div className="table-wrapper">
              <table className="billing-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Player</th>
                    <th>Points</th>
                    <th>Badges</th>
                    <th>Highest Level</th>
                    <th>Team/Group</th>
                    <th> </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="/assets/image/rank1.svg" />
                    </td>
                    <td>Alex Johnson</td>
                    <td>3,200</td>
                    <td>5</td>
                    <td>Level 75</td>
                    <td>Soccer Academy Elite</td>

                    <td>
                      <Link href="/send-message" className="">
                        <img src="/assets/image/message-white.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank2.svg" />
                    </td>
                    <td>Maria Garcia</td>
                    <td>2,800</td>
                    <td>8</td>
                    <td>Level 60</td>
                    <td>Soccer Academy Elite</td>

                    <td>
                      <Link href="/send-message" className="">
                        <img src="/assets/image/message-white.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank3.svg" />
                    </td>
                    <td>Mike Davis</td>
                    <td>4,100</td>
                    <td>4</td>
                    <td>Level 54</td>
                    <td>Youth Training Group</td>

                    <td>
                      <Link href="/send-message" className="">
                        <img src="/assets/image/message-white.svg" />
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="/assets/image/rank4.svg" />
                    </td>
                    <td>James Smith</td>
                    <td>4,100</td>
                    <td>11</td>
                    <td>Level 45</td>
                    <td>Advanced Players</td>

                    <td>
                      <Link href="/send-message" className="">
                        <img src="/assets/image/message-white.svg" />
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

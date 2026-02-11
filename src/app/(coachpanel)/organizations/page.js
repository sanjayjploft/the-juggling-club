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
              <h4>Organizations</h4>
              <p className="mb-0">
                {" "}
                Manage your club and organizational affiliations. Create new
                groups or join existing ones.
              </p>
            </div>
            <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
              <Form.Floating className="filter-select">
                <Form.Select>
                  <option selected> 20</option>
                  <option> 25</option>
                </Form.Select>
                <label>Age group</label>
              </Form.Floating>

              <Form.Floating className="filter-select">
                <Form.Select>
                  <option selected> Status</option>
                  <option> Status</option>
                </Form.Select>
                <label>Activity status</label>
              </Form.Floating>

              <Link href="/create-new-group" className="btn-primary">
                Create Group
              </Link>
            </div>
          </div>
          <button className="btn admin-btn-primary">+ Add Player</button>
        </div>

        {/* CONTENT */}
        <div className="container-fluid ">
          <h4>Active Organizations (2)</h4>
          <div className="team-card grid-cardor-ganizational mb-4">
            <div className="grid-item-bx">
              <div className="team-heading">
                Soccer Academy Elite
                <span className="team-pill green-bg">Active</span>
                <span className="team-pill">Owner</span>
              </div>
              <p>Main club organization</p>
            </div>
            <div className="grid-item-bx">
              <span>Players</span>
              <h5>12</h5>
            </div>
            <div className="grid-item-bx">
              <Link href="/view-players" className="btn-primary">
                View Players
              </Link>
              <Link href={""} className=" ms-3">
                <img src="/assets/image/settings.svg" className="" />
              </Link>
              <Link href={""} className=" ms-3">
                <img src="/assets/image/settings.svg" className="" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

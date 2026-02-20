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
              <Link href="/add-organization" className="btn-primary">
                Add Organization
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
          <div className="sub-heading-card">
            <h4>Active Organizations (2)</h4>
          </div>
          <div className="team-card grid-cardor-oganizational mb-4 top-card-orgin">
            <div className="grid-item-bx">
              <div className="team-heading">
                Aurora Soccer Club
                <div className=" green-bg-pill">Active</div>
                <div className="blue-bg-pill">Owner</div>
              </div>
              <p>Main club organization</p>
            </div>
            <div className="grid-item-bx">
              <div className="oganiz-plr">Players</div>
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
                <img src="/assets/image/trash.svg" className="" />
              </Link>
            </div>
          </div>
          <div className="team-card grid-cardor-oganizational mb-4  top-card-orgin">
            <div className="grid-item-bx">
              <div className="team-heading">
                Youth Training Academy
                <div className=" green-bg-pill">Active</div>
                <div className="blue-bg-pill">Owner</div>
              </div>
              <p>Main club organization</p>
            </div>
            <div className="grid-item-bx">
              <div className="oganiz-plr">Players</div>
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
                <img src="/assets/image/trash.svg" className="" />
              </Link>
            </div>
          </div>

          <div className="sub-heading-card">
            <h4>Pending Approval (1)</h4>
          </div>
          <div className="team-card grid-cardor-oganizational mb-4">
            <div className="grid-item-bx">
              <div className="team-heading">
                Elite Development Group
                <div className=" pending-bg-pill">Pending Approval</div>
              </div>
              <p>Awaiting approval from Juggling Club administration</p>
            </div>

            <div className="grid-item-bx">
              <Link href={""} className=" ms-3">
                <img src="/assets/image/trash.svg" className="" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

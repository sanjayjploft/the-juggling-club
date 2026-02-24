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
          <div className="overview-card">
            <div className="hedaing-inner">
              <h4>Join Organization</h4>
              <p>Join an existing club or group</p>
            </div>
            <Col md={5}>
              <Form.Floating className="my-4">
                <Form.Select>
                  <option>Aurora Soccer Club </option>
                  <option>Youth Training Academy </option>
                </Form.Select>
                <label>Select Organization Name</label>
              </Form.Floating>
            </Col>
            <Link href="#" className="btn-primary mt-2">
              Create Organization
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}

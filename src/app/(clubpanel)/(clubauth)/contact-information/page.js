"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { Row, Col, Form, Button } from "react-bootstrap";
export default function ContactInformation() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="step-progress">
        <div className="step-item active ">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CLUB INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item current-step ">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CONTACT INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item">
          <div className="step-dot">
            <img src="/assets/image/steps-inactive-img.svg" />
          </div>
          <p>SUBSCRIPTION TIER</p>
          <span className="step-line" />
        </div>

        <div className="step-item">
          <div className="step-dot">
            <img src="/assets/image/steps-inactive-img.svg" />
          </div>
          <p>BRAND IDENTITY</p>
          <span className="step-line" />
        </div>

        <div className="step-item">
          <div className="step-dot">
            <img src="/assets/image/steps-inactive-img.svg" />
          </div>
          <p>TERMS & CONFIRMATION</p>
        </div>
      </div>

      <div className="step-form">
        <Form className="mt-5">
          <Row className="g-4">
            <Col lg={12}>
              <Form.Floating>
                <Form.Control placeholder="Contact Name *" />
                <label>Contact Name *</label>
              </Form.Floating>
            </Col>
            <Col lg={12}>
              <Form.Floating>
                <Form.Control placeholder="Email Address *" />
                <label>Email Address *</label>
              </Form.Floating>
              <div className="text-info-form">
                You'll be subscribed to partner updates
              </div>
            </Col>
            <Col lg={12}>
              <div className={`floating-phone ${phone ? "has-value" : ""}`}>
                <PhoneInput
                  country="in"
                  value={phone}
                  onChange={(value) => setPhone(value)}
                  inputClass="phone-input"
                  containerClass="phone-container"
                  buttonClass="phone-flag"
                  enableSearch
                />

                <label className="floating-label">Phone Number *</label>
              </div>
            </Col>

            <Col lg={12}>
              <Form.Floating>
                <Form.Select>
                  <option>State/Region</option>
                </Form.Select>
                <label>State/Region</label>
              </Form.Floating>
              <div className="text-info-form">Used for leaderboards</div>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="action-buttons mt-5">
        <Button className="btn-cancel-outline" onClick={() => router.back()}>
          Cancel
        </Button>

        <Button
          className="btn-next-bg"
          onClick={() => router.push("/subscription-tier")}>
          Next
        </Button>
      </div>
    </>
  );
}

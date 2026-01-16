"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function ClubInformation() {
  const [checked, setChecked] = useState(false);
  const router = useRouter();
  return (
    <>
      {/* Steps */}
      <div className="step-progress">
        <div className="step-item active">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CLUB INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item active">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CONTACT INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item active">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>SUBSCRIPTION TIER</p>
          <span className="step-line" />
        </div>

        <div className="step-item active">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>BRAND IDENTITY</p>
          <span className="step-line" />
        </div>

        <div className="step-item current-step">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>TERMS & CONFIRMATION</p>
        </div>
      </div>

      {/* Form */}
      <div className="step-form">
        <Form className="mt-5">
          <Row className="g-4">
            <Col lg={12}>
              <Form.Floating>
                <Form.Control
                  placeholder="Authorized Signature Name *"
                  value="John Deo"
                />
                <label>Authorized Signature Name *</label>
              </Form.Floating>
            </Col>
            <Col lg={12}>
              <div className="terms-confirmation">
                <h4>Juggling Club Partner Agreement</h4>
                <p>
                  By signing up, your club agrees to the Juggling Club Partner
                  Terms and Conditions.
                </p>
                <p>
                  This includes the right to display your club information on
                  branded landing pages, manage player data in accordance with
                  privacy policies, and maintain your subscription according to
                  the selected tier.
                </p>
                <p>
                  You agree that fees will be charged annually, and you
                  acknowledge the fee waiver conditions for subsequent years
                  (10% participation threshold).
                </p>
              </div>
              <div className="custom-checkbox-wrapper mt-2">
                <label className="custom-checkbox">
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={(e) => setChecked(e.target.checked)}
                  />
                  <span className="checkmark"></span>

                  <span className="checkbox-text">
                    I accept the{" "}
                    <a href="/terms" target="_blank">
                      Partner Terms & Conditions
                    </a>{" "}
                    <span className="required">*</span>
                  </span>
                </label>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      {/* Buttons */}
      <div className="action-buttons mt-5">
        <Button className="btn-cancel-outline" onClick={() => router.back()}>
          Cancel
        </Button>

        <Button
          className="btn-next-bg"
          onClick={() => router.push("/welcome-juggling-club")}>
          Complete Signup
        </Button>
      </div>
    </>
  );
}

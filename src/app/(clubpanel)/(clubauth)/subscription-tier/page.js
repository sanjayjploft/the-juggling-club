"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Row, Col, Form, Button } from "react-bootstrap";

export default function ClubInformation() {
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

        <div className="step-item current-step">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
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

      {/* Form */}
      <div className="step-form">
        <Form className="mt-5">
          <Row className="g-4">
            <Col lg={12}>
              <Form.Floating>
                <Form.Control placeholder="Number of Registered Players *" />
                <label>Number of Registered Players *</label>
              </Form.Floating>
              <div className="text-info-form">Must be greater than 0</div>
            </Col>
            <Col lg={12}>
              <div className="subscription">
                <div className="plan-card mb-1">
                  <ul>
                    <li>
                      <h5>Your Assigned Tier</h5> <span>Tier 1</span>
                    </li>
                    <li>
                      <h5>Player Range</h5> <span>1 - 500</span>
                    </li>
                    <li>
                      <b>Annual Subscription</b>{" "}
                      <span className="price-totl">$99/year</span>
                    </li>
                  </ul>
                </div>
                <p className="card-info-text">
                  *Fee waived in subsequent years if 10% or higher member
                  participation
                </p>
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
          onClick={() => router.push("/brand-identity")}>
          Next
        </Button>
      </div>
    </>
  );
}

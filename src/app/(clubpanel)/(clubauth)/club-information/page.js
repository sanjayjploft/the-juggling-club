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
        <div className="step-item current-step">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CLUB INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item">
          <div className="step-dot">
            <img src="/assets/image/steps-inactive-img.svg" />
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

      {/* Form */}
      <div className="step-form">
        <Form className="mt-5">
          <Row className="g-4">
            <Col lg={12}>
              <Form.Floating>
                <Form.Control placeholder="Club Name *" />
                <label>Club Name *</label>
              </Form.Floating>
              <div className="text-info-form">Max 100 characters</div>
            </Col>

            <Col lg={12}>
              <Form.Floating>
                <Form.Control placeholder="Website *" />
                <label>Website *</label>
              </Form.Floating>
              <div className="text-info-form">
                Must begin with http:// or https://
              </div>
            </Col>
            <Col lg={12}>
              <Form.Floating>
                <Form.Select>
                  <option>Country*</option>
                </Form.Select>
                <label>Country*</label>
              </Form.Floating>
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
          onClick={() => router.push("/contact-information")}>
          Next
        </Button>
      </div>
    </>
  );
}

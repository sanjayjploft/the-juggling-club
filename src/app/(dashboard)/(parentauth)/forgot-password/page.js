import Link from "next/link";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function page() {
  return (
    <div>
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="auth-login">
            <a href="/club-landing-page">
              <img
                src="/assets/image/logo-juggling.svg"
                className="club-logo"
              />
            </a>
            <Link href="/login" className="auth-back-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none">
                <path
                  d="M15.75 18.75L9 12L15.75 5.25"
                  stroke="#313131"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Back to login
            </Link>
            <h2 className="auth-title text-start mt-4 mb-4">
              Forgot your password?
            </h2>{" "}
            <p className="text-secondary">
              Don’t worry, happens to all of us. Enter your email below to
              recover your password
            </p>
            <Form className="mt-3 mt-lg-5">
              <Row className="gy-4">
                <Col lg={12}>
                  <Form.Floating>
                    <Form.Control placeholder="Example@email.com" />
                    <label>Email Address *</label>
                  </Form.Floating>
                </Col>

                <Col lg={12}>
                  <div className="text-end mt-3">
                    <Link href="/verify-email" className="btn-next-bg">
                      Submit
                    </Link>
                  </div>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col lg={6} className="d-none d-lg-block">
          <div className="auth-img-wrapper">
            <img src="/assets/image/login-img.png" />
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default page;

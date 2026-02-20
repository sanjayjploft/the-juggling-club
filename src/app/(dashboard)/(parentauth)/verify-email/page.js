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
            <h2 className="auth-title text-start mt-4 mb-4">
              Verify your email
            </h2>{" "}
            <Form className="mt-3 mt-lg-5">
              <Row className="gy-4">
                <Col lg={12}>
                  <Form.Floating>
                    <Form.Control placeholder="Enter Code" />
                    <label>Enter Verification Code</label>
                  </Form.Floating>
                </Col>

                <Col lg={12}>
                  <div className="text-end mt-3">
                    <Link href="/reset-password" className="btn-next-bg">
                      Verify
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

import Link from "next/link";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function page() {
  return (
    <div>
      <Row className="align-items-center">
        <Col lg={6}>
          <div className="auth-login">
            <img
              src="/assets/image/logo-juggling.svg"
              className="club-logo m-0"
            />
            <h2 className="auth-title text-start mt-4">Welcome Back 👋</h2>{" "}
            <Form className="mt-3 mt-lg-5">
              <Row className="gy-4">
                <Col lg={12}>
                  <Form.Floating>
                    <Form.Control placeholder="Example@email.com" />
                    <label>Email Address *</label>
                  </Form.Floating>
                </Col>
                <Col lg={12}>
                  <Form.Floating>
                    <Form.Control
                      placeholder="At least 8 characters"
                      type="password"
                    />
                    <label>Password</label>
                  </Form.Floating>
                  <p className="login-txt text-end mt-2">
                    <Link href="/forgot-password">Forgot Password?</Link>
                  </p>
                </Col>

                <Col lg={12}>
                  <div className="text-end">
                    <a href="/dashboard" className="btn-next-bg">
                      Sign In
                    </a>
                  </div>
                </Col>
              </Row>
            </Form>
            <div class="divider">
              <span>or sign up with</span>
            </div>
            <div className="auth-media">
              <Link href="#" className="media-icon">
                {" "}
                <img src="/assets/image/apple-icon.svg" alt="Apple Icon" />{" "}
              </Link>
              <Link href="#" className="media-icon">
                {" "}
                <img
                  src="/assets/image/google-icon.svg"
                  alt="Google Icon"
                />{" "}
              </Link>{" "}
              <Link href="#" className="media-icon">
                {" "}
                <img
                  src="/assets/image/facebook_icon.svg"
                  alt="Facebook Icon"
                />{" "}
              </Link>{" "}
            </div>
            <p className="login-txt">
              Don't you have an account?
              <a href="/signup"> Sign Up</a>
            </p>
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

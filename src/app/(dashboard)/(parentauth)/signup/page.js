"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { Row, Col, Form, Button } from "react-bootstrap";

function page() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  return (
    <div>
      <Row>
        <Col lg={12} className="text-center">
          <img src="/assets/image/logo-juggling.svg" className="club-logo" />
          <h2 className="auth-title">Sign up to Parent</h2>{" "}
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col lg={6}>
          <Form className="mt-3 mt-lg-5">
            <Row className="gy-4">
              <Col md={6}>
                <Form.Floating>
                  <Form.Control placeholder="First Name " />
                  <label>First Name </label>
                </Form.Floating>
              </Col>

              <Col md={6}>
                <Form.Floating>
                  <Form.Control placeholder="Last Name" />
                  <label>Last Name</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating>
                  <Form.Control placeholder="Email Address" />
                  <label>Email Address *</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
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
              <Col md={6}>
                <Form.Floating>
                  <Form.Control placeholder="Player Code" />
                  <label>Player Code</label>
                  <span className="scan-btn">
                    <img src="/assets/image/scan-code.svg" alt="Scan Icon" />
                  </span>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating>
                  <Form.Control placeholder="Club/Coach Code" />
                  <label>Club/Coach Code</label>
                  <span className="scan-btn">
                    <img src="/assets/image/scan-code.svg" alt="Scan Icon" />
                  </span>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating>
                  <Form.Control placeholder="Password" type="password" />
                  <label>Password</label>
                </Form.Floating>
              </Col>
              <Col md={6}>
                <Form.Floating>
                  <Form.Control
                    placeholder="Confirm Password"
                    type="password"
                  />
                  <label>Confirm Password</label>
                </Form.Floating>
              </Col>
              <Col md={12}>
                <div className="text-center my-3">
                  <a href="/dashboard" className="btn-next-bg signup-btn">
                    Signup dd
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
              <img src="/assets/image/google-icon.svg" alt="Google Icon" />{" "}
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
            Already have an account? <a href="/login">Login</a>
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default page;

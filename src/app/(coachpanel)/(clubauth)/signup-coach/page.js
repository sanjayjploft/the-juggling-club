"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Row, Col, Form, Button } from "react-bootstrap";
import Link from "next/link";
export default function ContactInformation() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <>
      <div className="step-form">
        <Form className="mt-5">
          <Row className="g-4">
            <Col lg={6}>
              <Form.Floating>
                <Form.Control placeholder="First Name " />
                <label>First Name </label>
              </Form.Floating>
            </Col>
            <Col lg={6}>
              <Form.Floating>
                <Form.Control placeholder="Last Name " />
                <label>Last Name </label>
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
                  country="us" // US flag +1 default
                  value={phone} // IMPORTANT
                  onChange={(value) => setPhone(value)}
                  inputClass="phone-input"
                  containerClass="phone-container"
                  buttonClass="phone-flag"
                  enableSearch
                  countryCodeEditable={false} 
                  disableCountryCode={false}
                  placeholder=""  
                />

                <label className="floating-label">Phone Number *</label>
              </div>
            </Col>
            <Col lg={6}>
              <div className="password-field">
                <Form.Floating>
                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <label>Password</label>
                </Form.Floating>

                <img
                  src={
                    showPassword
                      ? "/assets/image/eye-open.svg"
                      : "/assets/image/eye-close.svg"
                  }
                  className="eye-icon"
                  onClick={() => setShowPassword(!showPassword)}
                />
              </div>
            </Col>

            {/* CONFIRM PASSWORD */}
            <Col lg={6}>
              <div className="password-field">
                <Form.Floating>
                  <Form.Control
                    type={showConfirm ? "text" : "password"}
                    placeholder="Confirm Password"
                  />
                  <label>Confirm Password</label>
                </Form.Floating>

                <img
                  src={
                    showConfirm
                      ? "/assets/image/eye-open.svg"
                      : "/assets/image/eye-close.svg"
                  }
                  className="eye-icon"
                  onClick={() => setShowConfirm(!showConfirm)}
                />
              </div>
            </Col>
          </Row>
        </Form>
      </div>
      <div className="rowBtns mt-5">
        <a href="/dashboard-coach" className="btn btn--primary w-50">
          Signup
        </a>
      </div>
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
          <img src="/assets/image/facebook_icon.svg" alt="Facebook Icon" />{" "}
        </Link>{" "}
      </div>
      <p className="login-txt">
        Already have an account? <a href="/login">Login</a>
      </p>
    </>
  );
}

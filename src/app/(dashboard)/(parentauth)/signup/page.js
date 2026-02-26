"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Link from "next/link";
import { Row, Col, Form, Button } from "react-bootstrap";

function page() {
  const countries = [
    { name: "United States", code: "+1", flag: "/assets/image/usa-flag.svg" },
    { name: "Argentina", code: "+54", flag: "/assets/image/Argentina.svg" },
    { name: "Australia", code: "+61", flag: "/assets/image/Australia.svg" },
    { name: "France", code: "+33", flag: "/assets/image/France.svg" },
    { name: "India", code: "+91", flag: "/assets/image/India.svg" },
    {
      name: "Luxembourg",
      code: "+352",
      flag: "/assets/image/Luxembourg.svg",
    },
    { name: "Nicaragua", code: "+505", flag: "/assets/image/Nicaragua.svg" },
    { name: "Portugal", code: "+351", flag: "/assets/image/Portugal.svg" },
    { name: "Ukraine", code: "+380", flag: "/assets/image/Ukraine.svg" },
  ];

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(countries[0]);

  const selectCountry = (country) => {
    setSelected(country);
    setOpen(false);
  };
  const [phone, setPhone] = useState("");
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  return (
    <div>
      <Row>
        <Col lg={12} className="text-center">
          <a href="/club-landing-page">
            <img src="/assets/image/logo-juggling.svg" className="club-logo" />
          </a>
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
                <div className="csm-phone-input">
                  <div className="phone-wrapper">
                    {/* COUNTRY SELECT */}
                    <div className="country-box" onClick={() => setOpen(!open)}>
                      <img src={selected.flag} alt="flag" />
                      <span className="dial-code">{selected.code}</span>

                      <span className="arrow">
                        <img src="/assets/image/phone-arrow.svg" alt="arrow" />
                      </span>
                    </div>

                    {/* DROPDOWN */}
                    {open && (
                      <div className="country-dropdown">
                        {countries.map((country, index) => (
                          <div
                            key={index}
                            className="country-item"
                            onClick={() => selectCountry(country)}>
                            <img src={country.flag} />
                            <span>{country.name}</span>
                            <strong>{country.code}</strong>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* INPUT */}
                    <div className="input-box">
                      <input type="number" required />
                      <label>Phone Number</label>
                    </div>
                  </div>
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
              <Col md={6}>
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
              <Col md={12}>
                <div className="text-center my-3">
                  <a href="/dashboard" className="btn-next-bg signup-btn">
                    Signup
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

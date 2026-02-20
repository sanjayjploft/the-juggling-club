"use client";

import { useState } from "react";
import Link from "next/link";
import React from "react";
import { Row, Col, Form, Button } from "react-bootstrap";

function page() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
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
            <h2 className="auth-title text-start mt-4 mb-4">Reset Password</h2>{" "}
            <Form className="mt-3 mt-lg-5">
              <Row className="gy-4">
                <Col lg={12}>
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
                <Col lg={12}>
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

                <Col lg={12}>
                  <div className="text-end mt-3">
                    <Link href="/login" className="btn-next-bg">
                      Update
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

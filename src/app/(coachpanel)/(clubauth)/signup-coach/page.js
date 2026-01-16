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
            <Col lg={6}>
              <Form.Floating>
                <Form.Control placeholder="Password " />
                <label>Password </label>
              </Form.Floating>
            </Col>
            <Col lg={6}>
              <Form.Floating>
                <Form.Control placeholder="Confirm Password " />
                <label>Confirm Password </label>
              </Form.Floating>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="rowBtns mt-5">
        <Link href="" className="btn btn--primary w-50">
          Signup
        </Link>
      </div>
    </>
  );
}

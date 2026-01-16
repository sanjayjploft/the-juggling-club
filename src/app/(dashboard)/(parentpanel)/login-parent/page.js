"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Row, Col, Form, Button } from "react-bootstrap";
export default function ContactInformation() {
  const [phone, setPhone] = useState("");
  const router = useRouter();
  return (
    <>
      <div className="login-page">
        <Row>
          <Col lg={1}></Col>
          <Col lg={4}>
            <div className="">
              <img src="/assets/image/logo-juggling.svg" className="" />
              <h2>Welcome Back 👋</h2>
              <Form className="mt-5">
                <Row className="g-4">
                  <Col lg={12}>
                    <Form.Floating>
                      <Form.Control placeholder="Email" />
                      <label>Email</label>
                    </Form.Floating>
                  </Col>
                  <Col lg={12}>
                    <Form.Floating>
                      <Form.Control placeholder="Password" />
                      <label>Password</label>
                    </Form.Floating>
                  </Col>
                </Row>
              </Form>
            </div>
          </Col>
          <Col lg={1}></Col>
          <Col lg={6}>
            <img className="" src="/assets/image/login-bg.png" />
          </Col>
        </Row>
      </div>
    </>
  );
}

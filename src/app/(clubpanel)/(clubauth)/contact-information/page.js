"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";
import { Row, Col, Form, Button } from "react-bootstrap";
export default function ContactInformation() {
  const router = useRouter();
  const countries = [
    { name: "United States", code: "+1", flag: "/assets/image/usa-flag.svg" },
    { name: "Argentina", code: "+54", flag: "/assets/image/Argentina.svg" },
    { name: "Australia", code: "+61", flag: "/assets/image/Australia.svg" },
    { name: "France", code: "+33", flag: "/assets/image/France.svg" },
    { name: "India", code: "+91", flag: "/assets/image/India.svg" },
    { name: "Luxembourg", code: "+352", flag: "/assets/image/Luxembourg.svg" },
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
  return (
    <>
      <div className="step-progress">
        <div className="step-item active ">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
          </div>
          <p>CLUB INFORMATION</p>
          <span className="step-line" />
        </div>

        <div className="step-item current-step ">
          <div className="step-dot active-img">
            <img src="/assets/image/steps-active-img.svg" />
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

      <div className="step-form">
        <Form className="mt-5">
          <Row className="g-4">
            <Col lg={12}>
              <Form.Floating>
                <Form.Control placeholder="Contact Name *" />
                <label>Contact Name *</label>
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

            <Col lg={12}>
              <Form.Floating>
                <Form.Select>
                  <option>State/Region</option>
                </Form.Select>
                <label>State/Region</label>
              </Form.Floating>
              <div className="text-info-form">Used for leaderboards</div>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="action-buttons mt-5">
        <Button className="btn-cancel-outline" onClick={() => router.back()}>
          Back
        </Button>

        <Button
          className="btn-next-bg"
          onClick={() => router.push("/subscription-tier")}>
          Next
        </Button>
      </div>
    </>
  );
}

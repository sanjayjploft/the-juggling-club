"use client";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Parentsidebar from "../../../../components/dashboard/Parentsidebar";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();

  return (
    <>
      <div className="msar-dashboard-wrapper">
        <Parentsidebar />
        <main className="msar-main">
          <div className="msar-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <div>
                <h4>Dashboard</h4>
              </div>
            </div>
            <div className="user-profile">
              <Link href="#">
                <img src="/assets/image/coach-mike.png" />
              </Link>
            </div>
          </div>
          <div className="container-fluid">
            <div className="content-card">
              <div className="sabheading mb-2">
                <h2>Add Player</h2>
                <Link href="/addexisting" className="small-btn-admin">
                  Add Existing
                </Link>
              </div>
              <Col lg={6} className="m-auto add-player">
                <div className="step-progress  step-1">
                  <span className="step-line-active"></span>
                  <div className="step active">
                    <img src="/assets/image/steps-active-img.svg" />
                    Details
                  </div>
                  <div className="step">
                    {" "}
                    <img src="/assets/image/steps-inactive-img.svg" />
                    Plan
                  </div>
                  <div className="step">
                    {" "}
                    <img src="/assets/image/steps-inactive-img.svg" />
                    Pay
                  </div>
                </div>
                <Form className="mt-5">
                  <Row className="g-4">
                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Control placeholder="First Name" />
                        <label>First Name</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Control placeholder="Last Name" />
                        <label>Last Name</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={12}>
                      <Form.Floating>
                        <Form.Control placeholder="Username" />
                        <label>Username</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Control type="date" />
                        <label>Date of Birth</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Select>
                          <option>Gender</option>
                          <option>Male</option>
                          <option>Female</option>
                        </Form.Select>
                        <label>Gender</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Select>
                          <option value="">Select Country</option>
                          <option>India</option>
                          <option>United States</option>
                          <option>United Kingdom</option>
                          <option>Canada</option>
                          <option>Australia</option>
                          <option>Germany</option>
                          <option>France</option>
                          <option>Italy</option>
                          <option>Spain</option>
                          <option>Netherlands</option>
                          <option>Switzerland</option>
                          <option>Sweden</option>
                          <option>Norway</option>
                          <option>Denmark</option>
                          <option>United Arab Emirates</option>
                          <option>Saudi Arabia</option>
                          <option>Singapore</option>
                          <option>Japan</option>
                          <option>South Korea</option>
                          <option>China</option>
                          <option>Brazil</option>
                          <option>South Africa</option>
                          <option>New Zealand</option>
                          <option>Mexico</option>
                          <option>Indonesia</option>
                        </Form.Select>

                        <label>Country</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Select>
                          <option>Preferred Foot</option>
                          <option>Left</option>
                          <option>Right</option>
                        </Form.Select>
                        <label>Preferred Foot</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Select>
                          <option>Skill Level</option>
                          <option>Starter </option>
                          <option>Intermediate </option>
                          <option>Advanced</option>
                        </Form.Select>
                        <label>Skill Level</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={6}>
                      <Form.Floating>
                        <Form.Select>
                          <option>Virtual Coach 1</option>
                          <option>Virtual Coach 2</option>
                          <option>Virtual Coach 3</option>
                        </Form.Select>
                        <label>Virtual Coach</label>
                      </Form.Floating>
                    </Col>
                  </Row>

                  <div className="action-buttons mt-5">
                    <Link href="/dashboard" className="btn-cancel-outline">
                      Back
                    </Link>
                    <Link href="/plan" className="btn-next-bg">
                      {" "}
                      Next
                    </Link>
                  </div>

                  <div className="info-text mt-4">
                    <img src="/assets/image/info-chat.svg" className="me-2" />
                    If DOB &lt; 13 - Guardian consent required before coaching
                    features activate
                  </div>
                </Form>
              </Col>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

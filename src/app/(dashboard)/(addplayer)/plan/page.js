"use client";
import { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Parentsidebar from "../../../../components/dashboard/Parentsidebar";
import Link from "next/link";

export default function DetailsPage() {
  const router = useRouter();
  const [isApplied, setIsApplied] = useState(false);
  const handleApplyCode = () => {
    setIsApplied(true);
  };

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
              </div>
              <Col lg={6} className="m-auto add-player">
                <div className="step-progress step-2">
                  <span className="step-line-active"></span>
                  <div className="step active">
                    <img src="/assets/image/steps-active-img.svg" />
                    Details
                  </div>
                  <div className="step active">
                    {" "}
                    <img src="/assets/image/steps-active-img.svg" />
                    Plan
                  </div>
                  <div className="step">
                    {" "}
                    <img src="/assets/image/steps-inactive-img.svg" />
                    Pay
                  </div>
                </div>
                <div className="subscription">
                  <h4>Select Subscription</h4>
                  <div className="plan-card selected-plan">
                    <div className="plan-info">
                      <h3>Annual Plan</h3>
                      <span>Billed yearly</span>
                    </div>
                    <div className="plan-price">
                      <h3>$199.99</h3>
                      <span>Save 17%</span>
                    </div>
                  </div>
                  <div className="plan-card">
                    <div className="plan-info">
                      <h3>Monthly Plan</h3>
                      <span>Billed monthly</span>
                    </div>
                    <div className="plan-price">
                      <h3>$19.99</h3>
                    </div>
                  </div>

                  <Form className="mt-5">
                    <Row className="g-4">
                      <Col lg={12}>
                        <Form.Floating className="position-relative">
                          <Form.Control placeholder="Promo Code (Club or Coach)" />
                          <label>Promo Code (Club or Coach)</label>

                          <Button
                            className="apply-code"
                            onClick={handleApplyCode}>
                            Apply
                          </Button>
                        </Form.Floating>

                        {/* Success Message */}
                        {isApplied && (
                          <p className="text-success mt-2 mb-0">
                            Applied Successfully
                          </p>
                        )}
                      </Col>
                    </Row>
                    <div className="action-buttons mt-5">
                      <Link className="btn-cancel-outline" href="/details">
                        Back
                      </Link>
                      <Button
                        className="btn-next-bg"
                        onClick={() => router.push("/pay")}>
                        Next
                      </Button>
                    </div>
                    <div className="info-text mt-4">
                      <img src="/assets/image/info-chat.svg" className="me-2" />
                      Enter a Club Code for 10% off, or a Coach Invite Code for
                      5% off. Only one code can be applied at a time.
                    </div>
                  </Form>
                </div>
              </Col>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

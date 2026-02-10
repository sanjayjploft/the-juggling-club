"use client";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
import Parentsidebar from "../../../../components/dashboard/Parentsidebar";

export default function DetailsPage() {
  const router = useRouter();

  return (
    <>
      <div className="msar-dashboard-wrapper">
        <Parentsidebar />
        <main className="msar-main">
          <div className="msar-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <h4>Dashboard</h4>
            </div>
            <button className="btn admin-btn-primary">+ Add Player</button>
          </div>
          <Col lg={6} className="m-auto">
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
                  <h3>$199.99</h3>
                </div>
              </div>

              <Form className="mt-5">
                <Row className="g-4">
                  <Col lg={12}>
                    <Form.Floating>
                      <Form.Control placeholder="Promo Code (Club or Coach)" />
                      <label>Promo Code (Club or Coach)</label>
                      <Button className="apply-code">Apply</Button>
                    </Form.Floating>
                  </Col>
                </Row>
                <div className="action-buttons mt-5">
                  <Button
                    className="btn-cancel-outline"
                    onClick={() => router.back()}>
                    Back
                  </Button>
                  <Button
                    className="btn-next-bg"
                    onClick={() => router.push("/pay")}>
                    Next
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </main>
      </div>
    </>
  );
}

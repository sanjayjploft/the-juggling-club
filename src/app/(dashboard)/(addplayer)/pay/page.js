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
            {/* <button className="btn admin-btn-primary">+ Add Player</button> */}
          </div>
          <Col lg={6} className="m-auto add-player">
            <div className="step-progress step-3">
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
              <div className="step active">
                {" "}
                <img src="/assets/image/steps-active-img.svg" />
                Pay
              </div>
            </div>
            <div className="subscription">
              <h4>Select Subscription</h4>
              <div className="plan-card mb-1">
                <ul>
                  <li>
                    <h5>Player</h5> <span>leo</span>
                  </li>
                  <li>
                    <h5>Plan:</h5> <span>Annual Plan</span>
                  </li>
                  <li>
                    <b>Total:</b> <span className="price-totl">$199.99</span>
                  </li>
                </ul>
              </div>
              <p className="card-info-text">
                You are paying as Parent for this child
              </p>

              <Form className="mt-5">
                <h4 className="text-start mb-3">Card Details</h4>
                <Row className="g-4">
                  <Col lg={12}>
                    <Form.Floating>
                      <Form.Control placeholder="Card Number" />
                      <label>Card Number</label>
                    </Form.Floating>
                  </Col>
                  <Col lg={6}>
                    <Form.Floating>
                      <Form.Control placeholder="Expiry" />
                      <label>Expiry</label>
                    </Form.Floating>
                  </Col>

                  <Col lg={6}>
                    <Form.Floating>
                      <Form.Control placeholder="CVV" />
                      <label>CVV</label>
                    </Form.Floating>
                  </Col>
                </Row>

                <div className="action-buttons mt-5">
                  <Button
                    className="btn-cancel-outline"
                    onClick={() => router.back()}>
                    Back
                  </Button>
                  <Button className="btn-next-bg">Pay Now</Button>
                </div>
              </Form>
            </div>
          </Col>
        </main>
      </div>
    </>
  );
}

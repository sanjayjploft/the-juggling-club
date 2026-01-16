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
              <h4>Dashboard</h4>
            </div>
            <button className="btn admin-btn-primary">+ Add Player</button>
          </div>
          <div className="container-fluid">
            <div className="content-card">
              <div className="sabheading">
                <h2>Add Existing</h2>
              </div>
              <Col lg={6} className="m-auto">
                <Form className="mt-5">
                  <Row className="g-4">
                    <Col lg={12}>
                      <Form.Floating>
                        <Form.Control placeholder="Player Username" />
                        <label>Player Username</label>
                      </Form.Floating>
                    </Col>

                    <Col lg={12}>
                      <Form.Floating>
                        <Form.Control placeholder="Invite Code" />
                        <label>Invite Code</label>
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
                      onClick={() => router.push("/plan")}>
                      Next
                    </Button>
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

import { Button, Col, Form, Row } from "react-bootstrap";
import ClubSidebar from "../../../../../components/dashboard/ClubSidebar";

export default function Page() {
  return (
    <div className="msar-dashboard-wrapper">
      <ClubSidebar />

      <main className="msar-main">
        {/* HEADER */}

        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Team Management
                <span>Organize players into age groups and teams</span>
              </h4>
            </div>
          </div>
          <div className="user-profile">
            <Link href="#">
              <img src="/assets/image/coach-mike.png" />
            </Link>
          </div>
        </div>
        {/* CONTENT */}
        <div className="container-fluid">
          <div className="content-card add-tme">
            <h4>Create New Team</h4>
            <Row>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control placeholder="Team Name" />
                  <label>Team Name</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Select>
                    <option>Age Group</option>
                  </Form.Select>
                  <label>Age Group</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control placeholder="Coach Name" />
                  <label>Coach Name</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Select>
                    <option>Select Players</option>
                  </Form.Select>
                  <label>Select Players</label>
                </Form.Floating>
              </Col>
              <Col md={5}>
                <Form.Floating className="mb-4">
                  <Form.Control placeholder="Coach Email" />
                  <label>Coach Email</label>
                </Form.Floating>
              </Col>
            </Row>
            <Button className="btn-next-bg">Create Team</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

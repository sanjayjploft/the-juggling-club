import { Button, Col, Row } from "react-bootstrap";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import Link from "next/link";

export default function Page() {
  return (
    <div className="juggling-dashboard-wrapper">
      <ClubSidebar />

      <main className="juggling-main">
        {/* HEADER */}

        <div className="juggling-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Club Codes
                <span>Manage club invitation code</span>
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
          <div className="club-code-section">
            <Row className="align-items-center">
              <Col lg={8}>
                <div className="club-code-info-right">
                  <small>Club Code</small>
                  <h2>C-AUR-32871</h2>
                  <div className="code-action">
                    <Link href="" className="copy-code-btn">
                      {" "}
                      <img src="/assets/image/copy.svg" /> Copy Code
                    </Link>
                    <Link href="" className="share-code-btn">
                      {" "}
                      <img src="/assets/image/share-icon.svg" /> Share Code
                    </Link>
                  </div>
                  <div className="code-status-sec">
                    <div>
                      Status: <span>Active</span>{" "}
                    </div>
                    <div>
                      <span>425</span> Players Linked
                    </div>
                  </div>
                </div>
              </Col>
              <Col lg={4} className="text-end">
                <div className="club-qr-code">
                  <img src="/assets/image/qr-code-big.svg" />
                </div>
              </Col>
            </Row>
          </div>
          <div className="code-disti">
            <h4>Code Distribution Tips</h4>
            <p>• Share your unique Club Code with all players and families</p>
            <p>
              • Post or print a QR code (linked to this same Club Code) for easy
              scanning at practices, games, and events
            </p>
            <p>• Send the code via email or SMS for quick digital access</p>
            <p>
              • Families receive a 10% subscription discount, and players see
              your club branding throughout the app
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

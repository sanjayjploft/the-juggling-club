import { Button, Col, Row } from "react-bootstrap";
import Parentsidebar from "../../../components/dashboard/Parentsidebar";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="msar-dashboard-wrapper">
      <Parentsidebar />

      <main className="msar-main">
        {/* HEADER */}
        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <h4>Dashboard</h4>
            <div className="filter-by-days">
              <Button className="ft-btn active">Last 7 days</Button>
              <Button className="ft-btn">30 days </Button>
              <Button className="ft-btn">All time</Button>
            </div>
          </div>
          <Link href="/details" className="btn admin-btn-primary">
            + Add Player
          </Link>
        </div>

        {/* CONTENT */}
        <div className="container-fluid ">
          <Row className="">
            <Col xl={4} lg={6} className="mb-4">
              <div className="player-card">
                <div className="player-crd-profile">
                  <div className="d-flex gap-3">
                    <img src="/assets/image/quotes-img-1.png" />
                    <div>
                      <h4>Leo Messi</h4>
                      <span className="player-status active">Active</span>
                    </div>
                  </div>
                  <div className="btn-cdr">
                    <Link href="/Playerdetails" className="small-btn-admin">
                      View Progress
                    </Link>
                  </div>
                </div>
                <div className="clb-box">
                  <div>
                    <h6>Club</h6>
                    <span>Aurora SC</span>
                  </div>
                  <div>
                    <h6>Coach</h6>
                    <p>Coach Ted</p>
                  </div>
                </div>
                <div className="player-reword">
                  <div className="reword-item">
                    <img src="/assets/image/icon-badge.svg" />
                    <span>12</span>
                    <p>Badges</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-level-advanced.svg" />
                    <span>37</span>
                    <p>Level</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-points.svg" />
                    <span>1450</span>
                    <p>Points</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-streak.svg" />
                    <span>3Wks</span>
                    <p>Streak</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col xl={4} lg={6} className="mb-4">
              <div className="player-card">
                <div className="player-crd-profile">
                  <div className="d-flex gap-3">
                    <img src="/assets/image/quotes-img-2.png" />
                    <div>
                      <h4>Mia Hamm</h4>
                      <span className="player-status trial">Trial</span>
                    </div>
                  </div>
                  <div className="btn-cdr">
                    <Link href="" className="small-btn-admin">
                      View Progress
                    </Link>
                  </div>
                </div>
                <div className="clb-box">
                  <div>
                    <h6>Club</h6>
                    <span>Independent</span>
                  </div>
                  <div>
                    <h6>Coach</h6>
                    <p>Virtual Coach</p>
                  </div>
                </div>
                <div className="player-reword">
                  <div className="reword-item">
                    <img src="/assets/image/icon-badge.svg" />
                    <span>22</span>
                    <p>Badges</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-level-advanced.svg" />
                    <span>47</span>
                    <p>Level</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-points.svg" />
                    <span>1750</span>
                    <p>Points</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-streak.svg" />
                    <span>4Wks</span>
                    <p>Streak</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} className="mb-4">
              <div className="player-card">
                <div className="player-crd-profile">
                  <div className="d-flex gap-3">
                    <img src="/assets/image/quotes-img-3.png" />
                    <div>
                      <h4>Mia Hamm</h4>
                      <span className="player-status expired">Expired</span>
                    </div>
                  </div>
                  <div className="btn-cdr">
                    <Link href="" className="small-btn-admin">
                      View Progress
                    </Link>
                  </div>
                </div>
                <div className="clb-box">
                  <div>
                    <h6>Club</h6>
                    <span>Independent</span>
                  </div>
                  <div>
                    <h6>Coach</h6>
                    <p>Virtual Coach</p>
                  </div>
                </div>
                <div className="player-reword">
                  <div className="reword-item">
                    <img src="/assets/image/icon-badge.svg" />
                    <span>34</span>
                    <p>Badges</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-level-advanced.svg" />
                    <span>54</span>
                    <p>Level</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-points.svg" />
                    <span>1850</span>
                    <p>Points</p>
                  </div>
                  <div className="reword-item">
                    <img src="/assets/image/icon-streak.svg" />
                    <span>5Wks</span>
                    <p>Streak</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={4} lg={6} className="mb-4">
              <div className="player-card">
                <div className="player-crd-profile">
                  <div className="d-flex gap-3">
                    <img src="/assets/image/quotes-img-4.png" />
                    <div>
                      <h4>Mia Hamm</h4>
                      <span className="player-status trial">Trial</span>
                    </div>
                  </div>
                </div>
                <div className="consent-required">
                  <h6>Consent Required</h6>
                  <p>
                    Coaching features are locked until parental consent is
                    approved.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

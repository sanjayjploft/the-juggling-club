import { Button, Col, Row } from "react-bootstrap";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="msar-dashboard-wrapper">
      <CoachSidebar />

      <main className="msar-main">
        {/* HEADER */}

        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>Dashboard</h4>
            </div>
            <div className="filter-by-days">
              <button className="ft-btn active">Last 7 days</button>
              <button className="ft-btn">30 days </button>
              <button className="ft-btn">90 days </button>
              <button className="ft-btn">All time</button>
              <button className="ft-btn"></button>
              <div></div>
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
          <div className="next-reward-card">
            <div>
              <h2>Next Reward in Progress</h2>
              <p>3 players to your next reward! Keep building your team.</p>
            </div>
            <img src="/assets/image/trophy.svg" />
          </div>
          <div className="card-grid-box">
            <div className="player-card">
              <h4>Total Players Joined</h4>
              <div className="count-info-card">
                <h6>24</h6>
              </div>
              <img src="/assets/image/total-players-icon.svg" />
            </div>
            <div className="player-card">
              <h4>Total Teams/Groups</h4>
              <div className="count-info-card">
                <h6>3</h6>
              </div>
              <img src="/assets/image/team-groups.svg" />
            </div>
            <div className="player-card">
              <h4>Skills Accomplished</h4>
              <div className="count-info-card">
                <h6>156</h6>
              </div>
              <img src="/assets/image/skills-accomplished.svg" />
            </div>
            <div className="player-card">
              <h4>Rewards Earned</h4>
              <div className="count-info-card">
                <h6>2</h6>
                <p>Amazon Gift</p>
              </div>
              <img src="/assets/image/rewards-earned.svg" />
            </div>
            <div className="player-card">
              <h4>Pending Review</h4>
              <div className="count-info-card">
                <h6>2</h6>
              </div>
              <img src="/assets/image/pending-review.svg" />
            </div>
          </div>
          <div className="card-grid-box grid-box-style-2 mt-5">
            <div className="player-card">
              <h4>30-Day Growth</h4>
              <div className="count-info-card">
                <ul>
                  <li>
                    New Players <span>+8</span>
                  </li>
                  <li>
                    Teams/Groups <span>+1</span>
                  </li>
                  <li>
                    Skills Accomplished <span>+42</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="player-card">
              <h4>Voice Status</h4>
              <div className="count-info-card">
                <p>
                  Using default AI voice. Add your <br /> voice to personalize
                  messages!
                </p>
                <Link href="" className="card-btn">
                  Upload your voice
                </Link>
              </div>
              <img src="/assets/image/ai-technology.svg" />
            </div>
            <div className="player-card">
              <h4>Rewards</h4>
              <div className="count-info-card">
                <p>Amazon Gift Cards</p>
                <Link href="" className="card-btn">
                  View Rewards
                </Link>
              </div>
              <img src="/assets/image/gift-card.svg" />
            </div>
          </div>
          <Row className="mt-5">
            <Col lg={7} xs={12} className="mb-xs-4">
              <div className="quick-actions-style-2 player-card">
                <h4>Quick Actions</h4>

                <div className="quick-actions-grid">
                  <Link href="">
                    <img src="/assets/image/create-group.svg" />
                    <h4>Create Group</h4>
                  </Link>
                  <Link href="">
                    <img src="/assets/image/share-join-code.svg" />
                    <h4>Share Join Code</h4>
                  </Link>
                  <Link href="">
                    <img src="/assets/image/view-leaderboard.svg" />
                    <h4>View Leaderboard</h4>
                  </Link>
                  <Link href="">
                    <img src="/assets/image/send-message.svg" />
                    <h4>Send Message</h4>
                  </Link>
                  <Link href="">
                    <img src="/assets/image/view-rewards.svg" />
                    <h4>View Rewards</h4>
                  </Link>
                </div>
              </div>
            </Col>
            <Col lg={5} xs={12}>
              <div className="player-card">
                <h4 className="mb-0">Players Need Encouragement</h4>
                <p className="sub-text">Haven’t heard from you in 3+ days</p>
                <div className="notification-card plyr-crdin">
                  <img src="/assets/image/leo-img.png" />
                  <div className="player-card-in">
                    <h3>
                      Leo Messi
                      <span>U12 Academy</span>
                    </h3>
                    <Button className="btn-primary-sml">Encourage Now</Button>
                  </div>
                </div>
                <div className="notification-card plyr-crdin">
                  <img src="/assets/image/mia-img.png" />
                  <div className="player-card-in">
                    <h3>
                      Michael Lee
                      <span>No contact in 6 days</span>
                    </h3>
                    <Button className="btn-primary-sml">Encourage Now</Button>
                  </div>
                </div>
                <div className="notification-card plyr-crdin">
                  <img src="/assets/image/quotes-img-4.png" />
                  <div className="player-card-in">
                    <h3>
                      Mia Hamm
                      <span>U12 Academy</span>
                    </h3>
                    <Button className="btn-primary-sml">Encourage Now</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </main>
    </div>
  );
}

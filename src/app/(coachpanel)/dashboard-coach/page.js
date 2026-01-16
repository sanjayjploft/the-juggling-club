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
            <h4>Dashboard</h4>
            <div className="filter-by-days">
              <Button className="ft-btn active">Last 7 days</Button>
              <Button className="ft-btn">30 days </Button>
              <Button className="ft-btn">All time</Button>
            </div>
          </div>
          <button className="btn admin-btn-primary">+ Add Player</button>
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
          <div className="quick-actions-style-2">
            <h2>Quick Actions</h2>

            <div className="quick-actions-grid">
              <Link href="">
                <img src="/assets/image/trophy.svg" />
                Create Group
              </Link>
              <Link href="">
                <img src="/assets/image/trophy.svg" />
                Share Join Code
              </Link>
              <Link href="">
                <img src="/assets/image/trophy.svg" />
                View Leaderboard
              </Link>
              <Link href="">
                <img src="/assets/image/trophy.svg" />
                Send Message
              </Link>
              <Link href="">
                <img src="/assets/image/trophy.svg" />
                View Rewards
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

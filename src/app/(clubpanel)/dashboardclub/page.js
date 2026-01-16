import { Button, Col, Row } from "react-bootstrap";
import Link from "next/link";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";

export default function DashboardPage() {
  return (
    <div className="msar-dashboard-wrapper">
      <ClubSidebar />

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
          <div className="card-grid-box">
            <div className="player-card">
              <h4>Total Players</h4>
              <div className="count-info-card">
                <h6>1255</h6>
                <p>Registered players</p>
              </div>
              <img src="/assets/image/total-players-icon.svg" />
            </div>
            <div className="player-card">
              <h4>Active Players</h4>
              <div className="count-info-card">
                <h6>890</h6>
                <p>Past 30 days</p>
              </div>
              <img src="/assets/image/inactive-players-icon.svg" />
            </div>
            <div className="player-card">
              <h4>Avg Badges</h4>
              <div className="count-info-card">
                <h6>12</h6>
                <p>Per player</p>
              </div>
              <img src="/assets/image/avg-badges-icon.svg" />
            </div>
            <div className="player-card">
              <h4>Total Points</h4>
              <div className="count-info-card">
                <h6>45,320</h6>
                <p>All players</p>
              </div>
              <img src="/assets/image/total-points-icon.svg" />
            </div>
            <div className="player-card">
              <h4>Inactive Players</h4>
              <div className="count-info-card">
                <h6>365</h6>
                <p>Past 30 days</p>
              </div>
              <img src="/assets/image/inactive-players-icon.svg" />
            </div>
          </div>
          <div className="quick-actions-card">
            <h3>Quick Actions</h3>
            <p>Manage your club and landing page</p>
            <div className="quick-actions-grid">
              <div className="quick-item-grid">
                <img src="/assets/image/club-management.svg" />
                <h6>Club Management</h6>
                <p>Edit branding & admins</p>
              </div>
              <div className="quick-item-grid">
                <img src="/assets/image/landing-page.svg" />
                <h6>Landing Page</h6>
                <p>Customize your page</p>
              </div>
              <div className="quick-item-grid">
                <img src="/assets/image/business-report.svg" />
                <h6>Reports</h6>
                <p>View analytics</p>
              </div>
            </div>
          </div>
          <div className="current-subs">
            <div className="heading-subsc">
              <div>
                <h3>Current Subscription</h3>
                <p>Your active club subscription plan</p>
              </div>
              <div className="rightsubscription-info">
                <span className="paymet-status paid">Paid</span>
                <p>Your subscription is active and in good standing.</p>
              </div>
            </div>
            <div className="subs-info-grid">
              <div className="subs-grid-item">
                <h5>Tier 1</h5>
                <p>Subscription Tier</p>
              </div>
              <div className="subs-grid-item">
                <h5>$99</h5>
                <p>Annual Cost</p>
              </div>
              <div className="subs-grid-item">
                <h5>250</h5>
                <p>Players Registered</p>
              </div>
              <div className="subs-grid-item">
                <h5>July 20, 2026</h5>
                <p>Renewal Date</p>
              </div>
            </div>
            <div className="players-progress-box">
              <div className="players-progress-header">
                <span>Players Joined</span>
                <span className="players-count">
                  <strong>180</strong> / 250 players used
                </span>
              </div>

              <div className="progress players-progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  style={{ width: "72%" }}
                  aria-valuenow="180"
                  aria-valuemin="0"
                  aria-valuemax="250"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

"use client";

import Parentsidebar from "../../../components/dashboard/Parentsidebar";

export default function page() {
  return (
    <>
      <div className="msar-dashboard-wrapper">
        <Parentsidebar />
        <main className="msar-main">
          <div className="msar-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <h4>
                Notifications Settings
                <span>
                  Choose how you'd like to get important updates and reminders.
                </span>
              </h4>
            </div>
            <button className="btn admin-btn-primary">+ Add Player</button>
          </div>
          <div className="container-fluid">
            <div className="code-disti mb-3">
              <h4>Code Distribution Tips</h4>
              <p>• Share your unique Club Code with all players and families</p>
              <p>
                • Post or print a QR code (linked to this same Club Code) for
                easy scanning at practices, games, and events
              </p>
              <p>• Send the code via email or SMS for quick digital access</p>
              <p>
                • Families receive a 10% subscription discount, and players see
                your club branding throughout the app
              </p>
            </div>
            <div className="content-card">
              <div className="notification-card notification-card2">
                <div className="notification-card-in">
                  <h3>
                    Player Skill Accomplishment or Decline
                    <span>
                      Get notified when a skill video has been approved or
                      rejected.
                    </span>
                  </h3>
                  <input class="switch" type="checkbox" />
                </div>
              </div>
              <div className="notification-card notification-card2">
                <div className="notification-card-in">
                  <h3>
                    Streak Reminders
                    <span>
                      Stay motivated with streak reminders and progress
                      milestones.
                    </span>
                  </h3>
                  <input class="switch" type="checkbox" />
                </div>
              </div>
              <div className="notification-card notification-card2">
                <div className="notification-card-in">
                  <h3>
                    Coach Feedback Available
                    <span>
                      Get an alert when coach feedback is available to review.
                    </span>
                  </h3>
                  <input class="switch" type="checkbox" />
                </div>
              </div>
              <div className="notification-card notification-card2">
                <div className="notification-card-in">
                  <h3>
                    Payment Reminders
                    <span>
                      Receive reminders about upcoming payments or billing
                      issues.
                    </span>
                  </h3>
                  <input class="switch" type="checkbox" />
                </div>
              </div>
              <div className="notification-card notification-card2">
                <div className="notification-card-in">
                  <h3>
                    Auto Reminder Every 24h
                    <span>Auto reminder every 24h (max 3)</span>
                  </h3>
                  <input class="switch" type="checkbox" />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

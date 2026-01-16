"use client";
import Link from "next/link";
import Parentsidebar from "../../../components/dashboard/Parentsidebar";

export default function page() {

  return (
    <>
      <div className="msar-dashboard-wrapper">
        <Parentsidebar />
        <main className="msar-main">
          <div className="msar-top-bar d-flex justify-content-between align-items-start">
            <div className="top-heading">
              <h4>Notifications</h4>
              <Link href="/NotificationsSettings"><img src="/assets/image/noti-settings.svg" /></Link>
            </div>
            <button className="btn admin-btn-primary">+ Add Player</button>
          </div>
          <div className="container-fluid">
          <div className="content-card">
            <div className="notification-card">
              <img src="/assets/image/swdn-bdge.png" />
              <div className="notification-card-in">
                <h3>Badge Earned
                  <span>Leo earned the "Sweden Master" badge!</span>
                </h3>
                <p>2 hours ago</p>
              </div>
            </div>
            <div className="notification-card notification-card2">
              <img src="/assets/image/payment-successful.svg" />
              <div className="notification-card-in">
                <h3>Payment Successful
                  <span>Annual subscription renewal processed.</span>
                </h3>
                <p>1 day ago</p>
              </div>
            </div>
            <div className="notification-card notification-card2">
              <img src="/assets/image/practice.svg" />
              <div className="notification-card-in">
                <h3>Your child hasn’t practiced in 9 days…
                </h3>
                <p>1 day ago</p>
              </div>
            </div>
          </div>
          </div>
        </main>
      </div>
    </>
  );
}

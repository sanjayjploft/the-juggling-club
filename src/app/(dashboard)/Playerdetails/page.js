import CurrentJourney from "../../../components/dashboard/CurrentJourney";
import NextUp from "../../../components/dashboard/NextUp";
import Parentsidebar from "../../../components/dashboard/Parentsidebar";
import RecentActivity from "../../../components/dashboard/RecentActivity";
import SpainLevels from "../../../components/dashboard/SpainLevels";

export default function DashboardPage() {
  return (
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
          <div className="dashboard-header">
            <img
              src="/assets/image/quotes-img-1.png"
              className="player-avatar"
            />
            <div className="player-avatar-info d-flex align-items-center justify-content-between flex-wrap">
              <div className="d-flex align-items-center">
                <div className="ms-3">
                  <h5 className="player-name">LEO MESSI</h5>
                  <p className="player-club">Aurora SC (U12)</p>
                  <img src="/assets/image/1K-bronze.png" className="" />
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
          </div>

          <CurrentJourney />

          <div className="row mt-4">
            <div className="col-lg-4 col-md-12 mb-4">
              <RecentActivity />
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <NextUp />
            </div>

            <div className="col-lg-4 col-md-12 mb-4">
              <SpainLevels />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

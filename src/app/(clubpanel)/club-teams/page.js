import { Button, Col, Row } from "react-bootstrap";
import ClubSidebar from "../../../components/dashboard/ClubSidebar";
import Link from "next/link";

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
            <div className="filter-by-days d-flex justify-content-between gap-4 align-items-center">
              <Link href="club-teams/add-team" className="btn-primary">
                + Add Team
              </Link>
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
          <div className="team-info-grid">
            <div className="team-grid-item">
              <p>Team Name</p>
              <h5>U-12 Development Squad</h5>
            </div>
            <div className="team-grid-item">
              <p>Age Group</p>
              <h5>U12</h5>
            </div>
            <div className="team-grid-item">
              <p>Coach</p>
              <h5>Coach Mike</h5>
            </div>
            <div className="team-grid-item">
              <p>Players</p>
              <h5>18</h5>
            </div>
            <div className="team-grid-item">
              <p>Active Players</p>
              <h5>12</h5>
            </div>
            <div className="team-grid-item">
              <Link href="/reports" className="">
                <img src="/assets/image/view.svg" />
              </Link>
              <Link href="/clubplayer-details" className="">
                <img src="/assets/image/trash.svg" />
              </Link>
            </div>
          </div>
          <div className="team-info-grid">
            <div className="team-grid-item">
              <p>Team Name</p>
              <h5>U-14 Academy</h5>
            </div>
            <div className="team-grid-item">
              <p>Age Group</p>
              <h5>U14</h5>
            </div>
            <div className="team-grid-item">
              <p>Coach</p>
              <h5>Coach Sarah</h5>
            </div>
            <div className="team-grid-item">
              <p>Players</p>
              <h5>22</h5>
            </div>
            <div className="team-grid-item">
              <p>Active Players</p>
              <h5>18</h5>
            </div>
            <div className="team-grid-item">
              <Link href="/reports" className="">
                <img src="/assets/image/view.svg" />
              </Link>
              <Link href="/clubplayer-details" className="">
                <img src="/assets/image/trash.svg" />
              </Link>
            </div>
          </div>
          <div className="team-info-grid">
            <div className="team-grid-item">
              <p>Team Name</p>
              <h5>U-16 Elite</h5>
            </div>
            <div className="team-grid-item">
              <p>Age Group</p>
              <h5>U16</h5>
            </div>
            <div className="team-grid-item">
              <p>Coach</p>
              <h5>Coach James</h5>
            </div>
            <div className="team-grid-item">
              <p>Players</p>
              <h5>16</h5>
            </div>
            <div className="team-grid-item">
              <p>Active Players</p>
              <h5>12</h5>
            </div>
            <div className="team-grid-item">
              <Link href="/reports" className="">
                <img src="/assets/image/view.svg" />
              </Link>
              <Link href="/clubplayer-details" className="">
                <img src="/assets/image/trash.svg" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

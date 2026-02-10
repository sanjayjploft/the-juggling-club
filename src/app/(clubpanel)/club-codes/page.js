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
            <h4>Club Codes
              <span>Generate and manage club invitation codes for players</span>
            </h4>
            <Link href="club-teams/add-team" className="small-btn-admin">Generate New Code</Link>
          </div>
          <button className="btn admin-btn-primary">+ Add Player</button>
        </div>

        {/* CONTENT */}
        <div className="container-fluid">

            <div className="team-info-grid clb-cds">
              <div className="team-grid-item">
                <p>Generate New Code</p>
                <h5>C-AUR-32871</h5>                
              </div>
              <div className="team-grid-item">
                <p>Created</p>
                <h5>01-15-2024</h5>                
              </div>
              <div className="team-grid-item">
                <p>Players Linked</p>
                <h5>425</h5>                
              </div>
              <div className="team-grid-item">
                <p>Status</p>
                <span className="act-sts">Active</span>               
              </div>
              <div className="team-grid-item">
                <Link href="/clubplayer-details" className=""><img src="/assets/image/copy.svg" /> Copy Code</Link>             
              </div>
            </div>
            <div className="team-info-grid clb-cds">
              <div className="team-grid-item">
                <p>Generate New Code</p>
                <h5>C-AUR-32871</h5>                
              </div>
              <div className="team-grid-item">
                <p>Created</p>
                <h5>01-15-2024</h5>                
              </div>
              <div className="team-grid-item">
                <p>Players Linked</p>
                <h5>425</h5>                
              </div>
              <div className="team-grid-item">
                <p>Status</p>
                <span className="act-sts">Active</span>               
              </div>
              <div className="team-grid-item">
                <Link href="/clubplayer-details" className=""><img src="/assets/image/copy.svg" /> Copy Code</Link>             
              </div>
            </div>
            <div className="code-disti">
              <h4>Code Distribution Tips</h4>
              <p>• Share unique codes with different groups (U12, U14, etc.) to track sign-ups by age group</p>
              <p>• Distribute codes through email, SMS, or printed materials</p>
              <p>• Families using the code receive 10% discounts</p>
              <p>• Players' app experiences will be branded with your club</p>
            </div>

        </div>
      </main>
    </div>
  );
}

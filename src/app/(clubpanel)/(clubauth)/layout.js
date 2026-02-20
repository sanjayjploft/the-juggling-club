import "bootstrap/dist/css/bootstrap.min.css";
import "../(clubauth)/authpage.css";
export default function ClubAuthLayout({ children }) {
  return (
    <>
      <div className="club-register-wrapper">
        <a href="/club-landing-page">
          <img src="/assets/image/logo-juggling.svg" className="club-logo" />
        </a>
        {children}
      </div>
    </>
  );
}

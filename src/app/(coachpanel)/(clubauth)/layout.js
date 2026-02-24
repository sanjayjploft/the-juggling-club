import "../(clubauth)/authpage.css";
export default function ClubAuthLayout({ children }) {
  return (
    <>
      <div className="login-page-bg ">
        <div className="club-register-wrapper">
          <img src="/assets/image/logo-juggling.svg" className="club-logo" />
          {children}
        </div>
      </div>
    </>
  );
}

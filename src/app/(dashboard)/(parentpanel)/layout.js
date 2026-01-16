import "bootstrap/dist/css/bootstrap.min.css";
import "../(parentpanel)/authpage.css";
export default function ClubAuthLayout({ children }) {
  return (
    <>
      <div className="login-register-wrapper">{children}</div>
    </>
  );
}

import "bootstrap/dist/css/bootstrap.min.css";
import "../(parentauth)/parentauth.css";
export default function ClubAuthLayout({ children }) {
  return (
    <>
      <div className="club-register-wrapper">{children}</div>
    </>
  );
}

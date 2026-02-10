import "bootstrap/dist/css/bootstrap.min.css";
import "../(dashboard)/dashboard.css";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import DashboardFooter from "../../components/dashboard/DashboardFooter";

export default function DashboardLayout({ children }) {
  return (
    <>
      <main className="dashboard-main">{children}</main>
    </>
  );
}

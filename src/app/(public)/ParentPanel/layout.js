import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeaderLogin from "../components/HeaderLogin";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <HeaderLogin />
        {children}
      </body>
    </html>
  );
}

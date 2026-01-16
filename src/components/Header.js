"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container-fluid header__inner">
        <Link href="/" className="brand">
          <img
            src="/assets/image/logo-juggling.svg"
            alt="Juggling Club"
            className={`logo ${scrolled ? "logo--small" : ""}`}
          />
        </Link>

        <nav className="nav">
          <Link
            href="/"
            className={`nav__link ${isActive("/") ? "active" : ""}`}>
            Home
          </Link>

          <Link
            href="/Players"
            className={`nav__link ${isActive("/Players") ? "active" : ""}`}>
            Players
          </Link>

          <Link
            href="/Clubs"
            className={`nav__link ${isActive("/Clubs") ? "active" : ""}`}>
            Clubs
          </Link>

          <Link
            href="/Coaches"
            className={`nav__link ${isActive("/Coaches") ? "active" : ""}`}>
            Coaches
          </Link>

          <Link
            href="/Parents"
            className={`nav__link ${isActive("/Parents") ? "active" : ""}`}>
            Parents
          </Link>

          <Link
            href="/FAQ"
            className={`nav__link ${isActive("/FAQ") ? "active" : ""}`}>
            FAQ
          </Link>

          <Link
            href="/Contact"
            className={`nav__link ${isActive("/Contact") ? "active" : ""}`}>
            Contact
          </Link>
        </nav>

        <div className="navCtas">
          <Link href="#" className="btn btn--primary">
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}

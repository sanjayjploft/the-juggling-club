"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`header ${scrolled ? "header--scrolled" : ""}`}>
      <div className="container-fluid header__inner">
        <Link href="/" className="brand">
          <Image
            src="/assets/image/logo-juggling.svg"
            alt="Juggling Club"
            width={165}
            height={165}
            className={`logo ${scrolled ? "logo--small" : ""}`}
            priority
          />
        </Link>

        <button
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`nav ${menuOpen ? "nav--open" : ""}`}>
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

          <div className="navCtas mobile-cta">
            <Link href="/login" className="btn btn--primary">
              Sign in
            </Link>
          </div>
        </nav>

        <div className="navCtas desktop-cta">
          <Link href="/login" className="btn btn--primary">
            Sign in
          </Link>
        </div>
      </div>
    </header>
  );
}

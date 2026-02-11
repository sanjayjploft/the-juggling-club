"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <footer>
      {isHomePage && (
        <div className="cta-box">
          <div className="cta-content">
            <h2>
              JOIN THOUSANDS OF PLAYERS
              <br />
              LEVELING UP THEIR GAME.
            </h2>

            <div className="cta-buttons">
              <button className="btn-primary">PLAYER SIGN UP</button>
              <button className="btn-outline">CLUB SIGN UP</button>
            </div>
          </div>

          <div className="cta-image">
            <img src="/assets/image/player-cta-img.png" alt="Player" />
          </div>
        </div>
      )}

      {/* FOOTER CONTENT — ALL PAGES */}
      <section className="footer-section">
        <div className="container">
          <div className="footer-grid">
            {/* LEFT */}
            <div className="footer-left">
              <h3>JOIN THE JUGGLING CLUB</h3>

              <div className="newsletter">
                <span>
                  <img src="/assets/image/fi_mail.svg" />
                </span>
                <input placeholder="GET NEWSLETTER" />
              </div>

              <div className="socials">
                <span>FOLLOW US</span>
                <div className="icons">
                  <Link href="">
                    <img src="/assets/image/fb-icon.svg" />
                  </Link>
                  <Link href="">
                    <img src="/assets/image/tw-icon.svg" />
                  </Link>
                  <Link href="">
                    <img src="/assets/image/ig-icon.svg" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-grid-shape"></div>

            {/* RIGHT */}
            <div className="footer-right">
              <div>
                <h4>USEFUL LINKS</h4>
                <ul>
                  <li>
                    <Link href="">About Us</Link>
                  </li>
                  <li>
                    <Link href="">Our Community</Link>
                  </li>
                  <li>
                    <Link href="">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="">Support</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4>CONTACT INFO</h4>
                <ul>
                  <li>
                    <Link href="tel:+1 (00) 000 0000">+1 (00) 000 0000</Link>
                  </li>
                  <li>
                    <Link href="tel:+61 (00) 000 0000">+61 (00) 000 0000</Link>
                  </li>
                  <li>
                    <Link href="mailto:info@jugglingclub.com">
                      info@jugglingclub.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="copyright">
        Copyright <span>The Juggling Club</span>, All Rights Reserved
      </div>
    </footer>
  );
}

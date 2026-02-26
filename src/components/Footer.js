"use client";

import Image from "next/image";
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
              <Link href="/signup" className="btn-primary">
                PLAYER SIGN UP
              </Link>
              <Link href="/club-information" className="btn-outline">
                CLUB SIGN UP
              </Link>
            </div>
          </div>

          <div className="cta-image">
            <img
              src="/assets/image/player-cta-img-new.png"
              alt="Player kicking ball"
            />
          </div>
        </div>
      )}

      <section className="footer-section">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-left">
              <h3>JOIN THE JUGGLING CLUB</h3>

              <div className="newsletter">
                <span>
                  <Image
                    src="/assets/image/fi_mail.svg"
                    alt=""
                    width={20}
                    height={20}
                  />
                </span>
                <input
                  placeholder="GET NEWSLETTER"
                  aria-label="Email for newsletter"
                />
              </div>

              <div className="socials">
                <span>FOLLOW US</span>
                <div className="icons">
                  <Link href="" aria-label="Facebook">
                    <Image
                      src="/assets/image/fb-icon.svg"
                      alt="Facebook"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="" aria-label="Twitter">
                    <Image
                      src="/assets/image/tw-icon.svg"
                      alt="Twitter"
                      width={24}
                      height={24}
                    />
                  </Link>
                  <Link href="" aria-label="Instagram">
                    <Image
                      src="/assets/image/ig-icon.svg"
                      alt="Instagram"
                      width={24}
                      height={24}
                    />
                  </Link>
                </div>
              </div>
            </div>

            <div className="footer-grid-shape"></div>

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
                    <Link href="/terms-of-use">Terms of Use</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                  <li>
                    <Link href="/Contact">Support</Link>
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
        © 2026 The Juggling Club, All Rights Reserved
      </div>
    </footer>
  );
}

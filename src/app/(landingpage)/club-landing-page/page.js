import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-header">
            <img src="assets/image/club-logo.png" className="hero-logo" />
            <img src="/assets/image/logo-juggling.svg" className="hero-logo" />
          </div>

          <h1>
            AMERICAN FOOTBALL + JUGGLING CLUB <br />
            BUILDING BETTER BALL MASTERS
          </h1>

          <p className="hero-sub">
            Your club has partnered with Juggling Club to help players master
            the ball through fun, gamified challenges and real coaching
            feedback.
          </p>

          <div className="hero-actions">
            <Link href={""} className="btn-primary-custom">
              ACTIVATE MY ACCOUNT
            </Link>
            <Link href={""} className="btn-secondary-custom">
              <img src="/assets/image/play-button-white.svg" className="me-2" />{" "}
              WELCOME MESSAGE
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section">
        <div className="container">
          <h2 className="section-title">HOW IT WORKS</h2>

          <div className="row g-5">
            <div className="col-md-4">
              <div className="how-card">
                <img src="/assets/image/shoot-icon.svg" />
                <h4>TRAIN ANYWHERE</h4>
                <p>
                  Players follow progressive juggling skill challenges at their
                  own pace.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="how-card">
                <img src="/assets/image/video-posting.svg" />
                <h4>UPLOAD VIDEO</h4>
                <p>
                  Submit juggling videos for AI and coach feedback to improve
                  technique.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="how-card">
                <img src="/assets/image/competition.svg" />
                <h4>LEVEL UP</h4>
                <p>
                  Earn badges, climb leaderboards, and celebrate progress with
                  your club.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ACTIVATE */}
      <section className="activate-wrap">
        <div className="container">
          <div className="activate-box-exact">
            {/* LEFT */}
            <div className="activate-left">
              <h3>ACTIVATE YOUR ACCOUNT</h3>
              <p>
                Players joining through American Football receive a special
                member rate. Activate with your club promo code during sign-up.
              </p>
            </div>

            {/* RIGHT */}
            <div className="activate-right">
              <div className="qr-block">
                <img src="/assets/image/qr-code-2.svg" alt="QR Code" />
                <div className="qr-text">
                  <span>Club Code</span>
                  <strong>C-AUR-32872</strong>
                </div>
              </div>

              <button className="activate-btn-exact">ACTIVATE NOW</button>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonial-section">
        <div className="container">
          <h2 className="section-title">WHAT PLAYERS & COACHES ARE SAYING</h2>

          <div className="row g-4">
            <div className="col-md-6">
              <div className="testimonial-card">
                <p>
                  It's fun, competitive, and actually improved my first touch.
                </p>
                <div className="user-profile d-flex gap-3">
                  <div>
                    <img src="/assets/image/quotes-img-2.png" alt="QR Code" />
                  </div>
                  <div className="user-info">
                    <h4>EMMA J.</h4>
                    <span> U14 Player</span>
                  </div>{" "}
                </div>
              </div>
            </div>

            <div className="col-md-6">
              <div className="testimonial-card">
                <p>Our players love seeing their progress each week.</p>
                <div className="user-profile d-flex gap-3">
                  <div>
                    <img src="/assets/image/coach-mike.png" alt="QR Code" />
                  </div>
                  <div className="user-info">
                    <h4>Coach Stevens</h4>
                    <span> Director of Coaching</span>
                  </div>{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COACH */}
      <section className="coach-section">
        <div className="container">
          <h2 className="section-title">MEET OUR COACH</h2>

          <div className="coach-card">
            <img src="/images/coach.jpg" />
            <div>
              <h4>Lead Technical Director</h4>
              <p>
                With over 15 years of coaching experience, our lead coach brings
                passion and expertise to every training session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LEADERBOARD */}
      <section className="leaderboard-section">
        <div className="container">
          <h2 className="section-title light">TOP CLUB PERFORMERS</h2>

          <div className="leaderboard-box">
            <div className="leader-row">
              <img src="/images/medal-gold.png" />
              <span>Alex Johnson</span>
              <strong>1850 pts</strong>
            </div>
            <div className="leader-row">
              <img src="/images/medal-silver.png" />
              <span>Jordan Smith</span>
              <strong>1680 pts</strong>
            </div>
            <div className="leader-row">
              <img src="/images/medal-bronze.png" />
              <span>Casey Williams</span>
              <strong>1540 pts</strong>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <h2>READY TO START YOUR JUGGLING JOURNEY?</h2>
        <button className="btn-primary-custom">JOIN JUGGLING CLUB TODAY</button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>support@jugglingclub.app</p>
        <small>© Juggling Club. All rights reserved.</small>
      </footer>
    </>
  );
}

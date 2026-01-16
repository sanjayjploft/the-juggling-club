export default function HowCoachesUseIt() {
  return (
    <section className="steps-section">
      <div className="container position-relative">
        <h2 className="steps-title text-center">HOW COACHES USE IT</h2>
        {/* DOTTED LINE DESKTOP */}
        <div className="row steps-row">
          <div className="steps-line desktop">
            <img
              src="/assets/image/steps-line-desktop.svg"
              alt="steps line"
              fill
              priority
            />
          </div>{" "}
          <div className="col-lg-4 step s1">
            <span>1</span>
            <p>
              Invite your players
              <br />
              <small>(promo code or club onboarding)</small>
            </p>
          </div>
          <div className="col-lg-4 step s2">
            <span>2</span>
            <p>
              Players train independently
              <br />
              <small>with the 100-level skill path</small>
            </p>
          </div>
          <div className="col-lg-4 step s3">
            <span>3</span>
            <p>
              AI provides coaching feedback
              <br />
              <small>on every video</small>
            </p>
          </div>
          <div className="col-lg-4 step s4">
            <span>4</span>
            <p>
              View progress anytime
              <br />
              <small>through your dashboard</small>
            </p>
          </div>
          <div className="col-lg-4 step s5">
            <span>5</span>
            <p>
              Send encouragement
              <br />
              <small>to individuals or team</small>
            </p>
          </div>
          <div className="col-lg-4 step s6">
            <span>6</span>
            <p>
              Celebrate achievements
              <br />
              <small>and grow team culture</small>
            </p>
          </div>
        </div>
      </div>
      <div className="steps-cta text-center">
        That’s it. No extra work. Big results.
      </div>
    </section>
  );
}

export default function HowCoachesUseItParents() {
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
          <div className="col-lg-3 step s1">
            <span>1</span>
            <p>Register your child (or join via your club’s promo code)</p>
          </div>
          <div className="col-lg-3 step s2">
            <span>2</span>
            <p>Download the app</p>
          </div>
          <div className="col-lg-3 step s3">
            <span>3</span>
            <p>Your child starts the 100-level skill journey</p>
          </div>
          <div className="col-lg-3 step s4">
            <span>4</span>
            <p>They upload short juggling videos</p>
          </div>
          <div className="col-lg-4 step s5">
            <span>5</span>
            <p>They receive personalized feedback within minutes</p>
          </div>
          <div className="col-lg-4 step s6">
            <span>6</span>
            <p>They earn badges, streaks, stamps, and unlock countries</p>
          </div>
          <div className="col-lg-4 step s7">
            <span>7</span>
            <p>You watch their confidence and skill grow</p>
          </div>
        </div>
      </div>
      <div className="steps-cta text-center">
        That’s it. No extra work. Big results.
      </div>
    </section>
  );
}

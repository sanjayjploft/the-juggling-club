export default function StepsSection({
  title = "HOW COACHES USE IT",
  steps = [],
  ctaText = "",
}) {
  return (
    <section className="steps-section">
      <div className="container position-relative">
        <h2 className="steps-title text-center">{title}</h2>
        <div className="row steps-row">
          <div className="steps-line desktop">
            <img
              src="/assets/image/steps-line-desktop.svg"
              alt="Steps progress line"
            />
          </div>
          {steps.map((step) => (
            <div
              key={step.id}
              className={`${step.colClass} step ${step.stepClass}`}
            >
              <span>{step.id}</span>
              <p>
                {step.text}
                {step.subtext && (
                  <>
                    <br />
                    <small>{step.subtext}</small>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
      {ctaText && (
        <div className="steps-cta text-center">{ctaText}</div>
      )}
    </section>
  );
}

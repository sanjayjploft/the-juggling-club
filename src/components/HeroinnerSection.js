import React from "react";
import Link from "next/link";

export default function HeroinnerSection() {
  return (
    <>
      <section className="sectionTop position-relative inner-page">
        <div className="container-fluid">
          <div className="hero">
            <img
              src="/assets/image/inner-bg-img.png"
              alt="Hero background"
              className="hero__img"
            />

            <div className="hero__overlay" />
            <div className="hero__content">
              <h1 className="hero__title">
                Turn your soccer practice into a <br /> global adventure.
              </h1>
              <p className="hero__subtitle">
                Build real soccer skills, track your progress, and gain
                confidence with every touch.
              </p>
              <div className="rowBtns rowBtns--left">
                <Link href="#" className="btn btn--primary btn--lg">
                  Join Now
                </Link>
                <Link href="#" className="btn btn--outline btn--lg">
                  For Parents
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

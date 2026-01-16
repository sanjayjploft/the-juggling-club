import React from "react";
import Link from "next/link";

export default function Heroclubs() {
  return (
    <>
      <section className="sectionTop position-relative inner-page">
        <div className="container-fluid">
          <div className="hero">
            <img
              src="/assets/image/clube-hero-img.png"
              alt="Hero background"
              className="hero__img"
            />

            <div className="hero__overlay" />
            <div className="hero__content">
              <h1 className="hero__title">
                Develop your players. Inspire your
                <br /> teams. Build your brand.
              </h1>
              <p className="hero__subtitle">
                Partner with us to develop your players, inspire your teams, and
                build your club's brand.
              </p>
              <div className="rowBtns rowBtns--left">
                <Link href="" className="btn btn--primary">
                  Join Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

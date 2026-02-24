import Image from "next/image";
import Link from "next/link";

export default function HeroinnerSection() {
  return (
    <section className="sectionTop position-relative inner-page">
      <div className="container-fluid">
        <div className="hero">
          <Image
            src="/assets/image/inner-bg-img.png"
            alt="Players hero background"
            className="hero__img"
            fill
            priority
            style={{ objectFit: "cover" }}
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
              <Link href="/signup" className="btn btn--primary btn--lg">
                Join Now
              </Link>
              <Link href="/signup" className="btn btn--outline btn--lg">
                For Parents
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";
import { useState, useRef, useEffect } from "react";

export default function CurrentJourney() {
  const [slide, setSlide] = useState(0);
  const [maxSlide, setMaxSlide] = useState(0);

  const imgRef = useRef(null);
  const wrapRef = useRef(null);

  useEffect(() => {
    const calculateLimit = () => {
      if (imgRef.current && wrapRef.current) {
        const imgWidth = imgRef.current.offsetWidth;
        const wrapWidth = wrapRef.current.offsetWidth;

        const limit = wrapWidth - imgWidth; // negative
        setMaxSlide(limit < 0 ? limit : 0);
        setSlide(0);
      }
    };

    calculateLimit();
    window.addEventListener("resize", calculateLimit);

    return () => window.removeEventListener("resize", calculateLimit);
  }, []);

  const slideLeft = () => {
    setSlide((prev) => Math.min(prev + 220, 0));
  };

  const slideRight = () => {
    setSlide((prev) => Math.max(prev - 220, maxSlide));
  };

  return (
    <section className="cj-grid-wrap" ref={wrapRef}>
      {/* HEADER */}
      <div className="cj-head">
        <h3>Current Journey:</h3>
        <div className="actvie-journey">
          <img src="/assets/image/Spain.svg" alt="" />
          Spain
        </div>
      </div>

      {/* VIEWPORT */}
      <div className="cj-grid-viewport">
        <img
          ref={imgRef}
          src="/assets/image/map-journey.png"
          className="cj-slide-img"
          style={{ transform: `translateX(${slide}px)` }}
          alt=""
        />
      </div>

      {/* NAV */}
      <div className="cj-grid-nav">
        <button onClick={slideLeft} disabled={slide === 0}>
          <img src="/assets/image/arrow-left.svg" />
        </button>

        <button onClick={slideRight} disabled={slide === maxSlide}>
          <img src="/assets/image/arrow-right.svg" />
        </button>
      </div>
    </section>
  );
}

"use client";
import { useState } from "react";

const journey = [
  { name: "Sweden", flag: "/assets/image/Sweden.svg", state: "completed" },
  { name: "Spain", flag: "/assets/image/Spain.svg", state: "completed" },
  { name: "England", flag: "/assets/image/England.svg", state: "active" },
  { name: "Uruguay", flag: "/assets/image/Uruguay.svg", state: "unlocked" },
  { name: "Argentina", flag: "/assets/image/Argentina.svg", state: "locked" },
  { name: "France", flag: "/assets/image/France.svg", state: "locked" },
  { name: "USA", flag: "/assets/image/USA.svg", state: "locked" },
  { name: "Italy", flag: "/assets/image/Italy.svg", state: "locked" },
];

export default function CurrentJourney() {
  const [slide, setSlide] = useState(0);
  const MAX_SLIDE = -(journey.length * 180 - 720);

  return (
    <section className="cj-grid-wrap">
      {/* HEADER */}
      <div className="cj-head">
        <h3>Current Journey:</h3>
        <div className="actvie-journey">
          <img className="actvie-track-img" src="/assets/image/Spain.svg" />
          Spain
        </div>
      </div>

      {/* VIEWPORT */}
      <div className="cj-grid-viewport">
        <img
          className="grid-track-img"
          src="/assets/image/journey-shape-img.svg"
        />
        <div
          className="cj-grid-track"
          style={{ transform: `translateX(${slide}px)` }}>
          {/* SVG PATH */}

          {/* GRID */}
          <div className="cj-grid">
            {journey.map((item, i) => (
              <div
                key={i}
                className={`cj-grid-node ${item.state} ${
                  i % 2 === 0 ? "top" : "bottom"
                }`}>
                <div className="node-circle">
                  <img
                    src={item.flag}
                    alt={item.name}
                    className="flg-img-cont"
                  />

                  {(item.state === "completed" || item.state === "active") && (
                    <span className="unlock-cunt">
                      {" "}
                      <img
                        className="unlock-cunt-img"
                        src="/assets/image/star-map-img.svg"
                      />
                      <div className="text-cont">1</div>
                    </span>
                  )}

                  {item.state !== "completed" && item.state !== "active" && (
                    <span className="node-lock">
                      <img
                        src={
                          item.state === "unlocked"
                            ? "/assets/image/lock-open.svg"
                            : "/assets/image/lock-icon.svg"
                        }
                      />
                    </span>
                  )}
                </div>

                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* NAV */}
      <div className="cj-grid-nav">
        <button onClick={() => slide < 0 && setSlide(slide + 220)}>‹</button>
        <button onClick={() => slide > MAX_SLIDE && setSlide(slide - 220)}>
          ›
        </button>
      </div>
    </section>
  );
}

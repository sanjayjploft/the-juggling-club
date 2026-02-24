"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";

export default function NextUp() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="card-box">
        <h5>Next Up</h5>

        <div className="activity-card success">
          <div className="activity-player-profile">
            <button className="acti-video" onClick={() => setShow(true)} aria-label="Play Shooting Fundamentals video">
              <img
                src="/assets/image/activity-vid-img.png"
                alt="Shooting Fundamentals video thumbnail"
                className="video-thumb"
              />
              <span className="doller-icon">
                <img src="/assets/image/coin-icon.png" alt="" />
              </span>
              <span className="play-icon">
                <img src="/assets/image/play-icon.svg" alt="" />
              </span>
            </button>
            <div className="activity-info-player">
              <p className="title">
                {" "}
                <img src="/assets/image/level-30.png" className="me-2" alt="Level 30" />
                Shooting Fundamentals
              </p>
              <small>Virtual Coach:</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-2" alt="" />
                  Tomorrow
                </span>
              </div>
            </div>
          </div>

          <div className="activity-player-profile">
            <button className="acti-video" onClick={() => setShow(true)} aria-label="Play Right Foot Juggle video">
              <img
                src="/assets/image/activity-vid-img-1.png"
                alt="Right Foot Juggle video thumbnail"
                className="video-thumb"
              />
              <span className="doller-icon">
                <img src="/assets/image/coin-icon.png" alt="" />
              </span>
              <span className="play-icon">
                <img src="/assets/image/play-icon.svg" alt="" />
              </span>
            </button>
            <div className="activity-info-player">
              <p className="title">
                {" "}
                <img src="/assets/image/level-25.png" className="me-2" alt="Level 25" />
                Right Foot Juggle
              </p>
              <small>Coach:</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-2" alt="" />
                  Yesterday
                </span>
              </div>
            </div>
          </div>

          <div className="activity-player-profile">
            <button className="acti-video" onClick={() => setShow(true)} aria-label="Play Right Foot Juggle video">
              <img
                src="/assets/image/activity-vid-img.png"
                alt="Right Foot Juggle video thumbnail"
                className="video-thumb"
              />
              <span className="doller-icon">
                <img src="/assets/image/coin-icon.png" alt="" />
              </span>
              <span className="play-icon">
                <img src="/assets/image/play-icon.svg" alt="" />
              </span>
            </button>
            <div className="activity-info-player">
              <p className="title">
                {" "}
                <img src="/assets/image/level-23.png" className="me-2" alt="Level 23" />
                RIGHT FOOT JUGGLE
              </p>
              <small>Coach:</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-2" alt="" />
                  Today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal show={show} onHide={() => setShow(false)} title="Right Foot Juggle" />
    </>
  );
}

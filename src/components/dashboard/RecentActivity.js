"use client";

import { useState } from "react";
import VideoModal from "./VideoModal";

export default function RecentActivity() {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="card-box">
        <h5>RECENT ACTIVITY</h5>

        <div className="activity-card success">
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
                <img src="/assets/image/level-91.png" className="me-2" alt="Level 91" />
                RIGHT FOOT JUGGLE
              </p>
              <small>Coach: &quot;Great Knee Control!&quot;</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-1" alt="" />
                  Today
                </span>
                <div className="badge-success">
                  <img src="/assets/image/check-path.svg" className="me-1" alt="" />
                  Accomplished
                </div>
              </div>
            </div>
          </div>

          <div className="activity-player-profile">
            <button className="acti-video" onClick={() => setShow(true)} aria-label="Play Thigh Control video">
              <img
                src="/assets/image/activity-vid-img-1.png"
                alt="Thigh Control video thumbnail"
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
                <img src="/assets/image/level-91.png" className="me-1" alt="Level 91" />
                Thigh Control
              </p>
              <small>Virtual Coach: &quot;Keep the ball lower.&quot;</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-1" alt="" />
                  Yesterday
                </span>
                <div className="try-again">Try Again</div>
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
                <img src="/assets/image/level-91.png" className="me-1" alt="Level 91" />
                RIGHT FOOT JUGGLE
              </p>
              <small>Coach: &quot;Great Knee Control!&quot;</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-1" alt="" />
                  Today
                </span>
                <div className="badge-success">
                  <img src="/assets/image/check-path.svg" className="me-1" alt="" />
                  Accomplished
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoModal show={show} onHide={() => setShow(false)} title="Right Foot Juggle" />
    </>
  );
}

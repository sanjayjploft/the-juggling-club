"use client";

import { useState } from "react";
import Modal from "react-bootstrap/Modal";

export default function NextUp() {
  const [show, setShow] = useState(false);
  return (
    <>
      <div className="card-box">
        <h5>Next Up</h5>

        <div className="activity-card success">
          <div className="activity-player-profile">
            <div className="acti-video" onClick={() => setShow(true)}>
              <img
                src="/assets/image/activity-vid-img.png"
                alt="video thumbnail"
                className="video-thumb"
              />
              <span className="doller-icon">
                <img src="/assets/image/coin-icon.png" alt="" />
              </span>
              {/* Play Icon */}
              <span className="play-icon">
                <img src="/assets/image/play-icon.svg" alt="play" />
              </span>
            </div>
            <div className="activity-info-player">
              <p className="title">
                {" "}
                <img src="/assets/image/level-91.png" className="me-2" />
                RIGHT FOOT JUGGLE
              </p>
              <small>Coach:</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-2" />
                  Today
                </span>
              </div>
            </div>
          </div>

          <div className="activity-player-profile">
            <div className="acti-video" onClick={() => setShow(true)}>
              <img
                src="/assets/image/activity-vid-img-1.png"
                alt="video thumbnail"
                className="video-thumb"
              />
              <span className="doller-icon">
                <img src="/assets/image/coin-icon.png" alt="" />
              </span>
              {/* Play Icon */}
              <span className="play-icon">
                <img src="/assets/image/play-icon.svg" alt="play" />
              </span>
            </div>
            <div className="activity-info-player">
              <p className="title">
                {" "}
                <img src="/assets/image/level-91.png" className="me-2" />
                Thigh Control
              </p>
              <small>Virtual Coach:</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-2" />
                  Yesterday
                </span>
              </div>
            </div>
          </div>

          <div className="activity-player-profile">
            <div className="acti-video" onClick={() => setShow(true)}>
              <img
                src="/assets/image/activity-vid-img.png"
                alt="video thumbnail"
                className="video-thumb"
              />
              <span className="doller-icon">
                <img src="/assets/image/coin-icon.png" alt="" />
              </span>
              {/* Play Icon */}
              <span className="play-icon">
                <img src="/assets/image/play-icon.svg" alt="play" />
              </span>
            </div>
            <div className="activity-info-player">
              <p className="title">
                {" "}
                <img src="/assets/image/level-91.png" className="me-2" />
                RIGHT FOOT JUGGLE
              </p>
              <small>Coach:</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-2" />
                  Today
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered
        size="lg"
        className="video-modal">
        <Modal.Body>
          <div className="video-wrapper">
            <video controls autoPlay>
              <source src="/assets/video/sample-video.mp4" type="video/mp4" />
            </video>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

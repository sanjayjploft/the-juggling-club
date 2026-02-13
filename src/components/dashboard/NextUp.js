"use client";

import { useState } from "react";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

export default function NextUp() {
  const [show, setShow] = useState(false);
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      if (typeof window !== "undefined") {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      }
    } catch (err) {
      console.error("Copy failed", err);
    }
  };
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
                <img src="/assets/image/level-30.png" className="me-2" />
                Shooting Fundamentals
              </p>
              <small>Virtual Coach:</small>
              <div className="d-flex justify-content-between">
                <span>
                  <img src="/assets/image/calendar.svg" className="me-2" />
                  Tomorrow
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
                <img src="/assets/image/level-25.png" className="me-2" />
                Right Foot Juggle
              </p>
              <small>Coach:</small>
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
                <img src="/assets/image/level-23.png" className="me-2" />
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
        <div className="modl-heading">
          <h3>Right Foot Juggle</h3>
        </div>
        <Button className="btn-close" onClick={() => setShow(false)}>
          <img src="/assets/image/close-icon.svg" />
        </Button>
        <Modal.Body>
          <div className="video-wrapper">
            <video controls autoPlay>
              <source src="/assets/image/hero-bg-video.mp4" type="video/mp4" />
            </video>
            <div className="video-info">
              <div className="coach-details">
                <img src="/assets/image/coach-small-img.png" />
                <p>Coach James: "Great speed!"</p>
              </div>
              <div className="coach-details">
                <img src="/assets/image/ai-avatar-img.png" />
                <p>Coach Klaus Kickenbauer: "Great Knee Control!"</p>
              </div>
            </div>
          </div>
          <div className="mdl-footer">
            <div className="status-left">
              Status:{" "}
              <div className="status-box-mdl">
                <img src="/assets/image/check-path.svg" className="me-2" />
                Accomplished
              </div>
            </div>
            <div className="action-mdl">
              <div className="action-link cursor" onClick={handleCopy}>
                <img
                  src="/assets/image/copy-icon.svg"
                  className="me-2"
                  alt="copy"
                />
                {copied ? "Link Copied!" : "Copy Link"}
              </div>
              <div className="action-link">
                <img src="/assets/image/mail-icon.svg" className="me-2" />
                Email
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

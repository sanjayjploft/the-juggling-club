"use client";

import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import useCopyToClipboard from "../../hooks/useCopyToClipboard";

export default function VideoModal({ show, onHide, title = "Right Foot Juggle" }) {
  const { copied, handleCopy } = useCopyToClipboard();

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="video-modal"
    >
      <div className="modl-heading">
        <h3>{title}</h3>
      </div>
      <Button
        className="btn-close"
        onClick={onHide}
        aria-label="Close video modal"
      >
        <img src="/assets/image/close-icon.svg" alt="" />
      </Button>
      <Modal.Body>
        <div className="video-wrapper">
          <video controls autoPlay>
            <source src="/assets/image/hero-bg-video.mp4" type="video/mp4" />
          </video>
          <div className="video-info">
            <div className="coach-details">
              <img src="/assets/image/coach-small-img.png" alt="Coach" />
              <p>Coach James: &quot;Great speed!&quot;</p>
            </div>
            <div className="coach-details">
              <img src="/assets/image/ai-avatar-img.png" alt="AI Coach" />
              <p>Coach Klaus Kickenbauer: &quot;Great Knee Control!&quot;</p>
            </div>
          </div>
        </div>
        <div className="mdl-footer">
          <div className="status-left">
            Status:{" "}
            <div className="status-box-mdl">
              <img src="/assets/image/check-path.svg" className="me-2" alt="" />
              Accomplished
            </div>
          </div>
          <div className="action-mdl">
            <button
              className="action-link cursor"
              onClick={() => handleCopy()}
              aria-label="Copy link"
            >
              <img
                src="/assets/image/copy-icon.svg"
                className="me-2"
                alt=""
              />
              Copy Link
            </button>
            <div className="action-link">
              <img src="/assets/image/mail-icon.svg" className="me-2" alt="" />
              Email
            </div>
          </div>
        </div>
        {copied && <div className="copy-success">Link Copied!</div>}
      </Modal.Body>
    </Modal>
  );
}

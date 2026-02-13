"use client";
import { useState } from "react";

export default function Chatbot({ showButton = true }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Floating Icon (controlled from page) */}
      {showButton && (
        <div className="chatbot-fab" onClick={() => setOpen(true)}>
          <img src="/assets/image/ai-bot-icon.svg" />
        </div>
      )}

      {/* Chat Modal */}
      {open && (
        <div className="chatbot-overlay">
          <div className="chatbot-box">
            <button className="chatbot-close" onClick={() => setOpen(false)}>
              ✕
            </button>

            <div className="chatbot-header">
              <div className="bot-avatar">
                <img src="/assets/image/ai-bot-icon.svg" />
              </div>
              <div>
                <h5>Hi Ryan!</h5>
              </div>
            </div>
            <p>How can i assist you today?</p>
            <div className="chatbot-actions">
              <button>
                View upcoming events <span>›</span>
              </button>
              <button>
                Send a message <span>›</span>
              </button>
            </div>

            <div className="chatbot-input">
              <input type="text" placeholder="Type your message..." />
              <button className="send-btn">
                {" "}
                <img src="/assets/image/send-icon-chat-bot.svg" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

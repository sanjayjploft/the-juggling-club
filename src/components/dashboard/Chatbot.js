"use client";
import { useState } from "react";
import Image from "next/image";

export default function Chatbot({ showButton = true }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {showButton && (
        <button
          className="chatbot-fab"
          onClick={() => setOpen(true)}
          aria-label="Open chatbot"
        >
          <Image
            src="/assets/image/ai-bot-icon.svg"
            alt=""
            width={48}
            height={48}
          />
        </button>
      )}

      {open && (
        <div className="chatbot-overlay">
          <div className="chatbot-box" role="dialog" aria-label="Chatbot">
            <button
              className="chatbot-close"
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
            >
              ✕
            </button>

            <div className="chatbot-header">
              <div className="bot-avatar">
                <Image
                  src="/assets/image/ai-bot-icon.svg"
                  alt="AI assistant"
                  width={40}
                  height={40}
                />
              </div>
              <div>
                <h5>Hi Ryan!</h5>
              </div>
            </div>
            <p>How can I assist you today?</p>
            <div className="chatbot-actions">
              <button>
                View upcoming events <span aria-hidden="true">›</span>
              </button>
              <button>
                Send a message <span aria-hidden="true">›</span>
              </button>
            </div>

            <div className="chatbot-input">
              <input
                type="text"
                placeholder="Type your message..."
                aria-label="Chat message"
              />
              <button className="send-btn" aria-label="Send message">
                <Image
                  src="/assets/image/send-icon-chat-bot.svg"
                  alt=""
                  width={24}
                  height={24}
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

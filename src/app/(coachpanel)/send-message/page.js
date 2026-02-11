"use client";
import { useRef, useState } from "react";
import CoachSidebar from "../../../components/dashboard/CoachSidebar";
import Link from "next/link";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function Page() {
  const fileRef = useRef(null);

  const [messageType, setMessageType] = useState("voice");
  const [error, setError] = useState("");
  const [fileName, setFileName] = useState("");

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState({ name: "Ryan" });

  const voices = [
    { id: 1, name: "Ryan" },
    { id: 2, name: "Emma" },
    { id: 3, name: "Alex" },
  ];

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("audio/")) {
      setError("Please upload an audio file");
      setFileName("");
      return;
    }

    const audio = document.createElement("audio");
    audio.src = URL.createObjectURL(file);

    audio.onloadedmetadata = () => {
      const duration = audio.duration;

      if (duration < 10 || duration > 15) {
        setError("Audio must be between 10–15 seconds");
        setFileName("");
      } else {
        setError("");
        setFileName(file.name);
      }
    };
  };

  return (
    <div className="msar-dashboard-wrapper">
      <CoachSidebar />

      <main className="msar-main">
        {/* HEADER */}

        <div className="msar-top-bar d-flex justify-content-between align-items-start">
          <div className="top-heading">
            <div>
              <h4>
                Send a Message
                <span>
                  Keep your players motivated with personal messages and voice
                  recordings.
                </span>
              </h4>
            </div>
          </div>
          <div className="user-profile">
            <Link href="#">
              <img src="/assets/image/coach-mike.png" />
            </Link>
          </div>
        </div>
        {/* CONTENT */}
        <div className="container-fluid">
          <div className="content-card mt-4">
            <div className="row">
              <div className="col-lg-6 col-md-8 col-12">
                <div className="voice-ui">
                  {/* MESSAGE TYPE */}
                  <div className="voice-section mass-coman mt-0">
                    <p className="voice-label">Message Type</p>

                    <div className="voice-radio-row">
                      <label className="send-masg-radio">
                        <input
                          type="radio"
                          name="msgType"
                          checked={messageType === "text"}
                          onChange={() => setMessageType("text")}
                        />
                        <span className="send-masg-ui"></span>
                        <span className="send-masg-text">Text Message</span>
                      </label>

                      <label className="send-masg-radio">
                        <input
                          type="radio"
                          name="msgType"
                          checked={messageType === "voice"}
                          onChange={() => setMessageType("voice")}
                        />
                        <span className="send-masg-ui"></span>
                        <span className="send-masg-text">Voice Message</span>
                      </label>
                    </div>
                  </div>

                  <div className="voice-section mass-coman">
                    <p className="voice-label">Send To</p>

                    <div className="voice-radio-row">
                      <label className="send-masg-radio">
                        <input type="radio" name="sendTo" defaultChecked />
                        <span className="send-masg-ui"></span>
                        <span className="send-masg-text">Group</span>
                      </label>

                      <label className="send-masg-radio">
                        <input type="radio" name="sendTo" />
                        <span className="send-masg-ui"></span>
                        <span className="send-masg-text">
                          Individual Player
                        </span>
                      </label>
                    </div>
                  </div>
                  <div className="mass-coman mt-4">
                    <Form.Floating className="w-100">
                      <Form.Select>
                        <option selected> All</option>
                        <option> All</option>
                      </Form.Select>
                      <label>Teams/Groups</label>
                    </Form.Floating>
                  </div>
                  {/* TEXT MESSAGE */}
                  {messageType === "text" && (
                    <div className="voice-section mass-coman">
                      <textarea
                        className=""
                        placeholder="Text Message"></textarea>
                      <div className="d-flex  justify-content-between ">
                        <div className="chrtr-lmt">Max 300 Characters </div>
                      </div>
                    </div>
                  )}

                  {/* VOICE MESSAGE */}
                  {messageType === "voice" && (
                    <>
                      {/* SEND TO */}
                      <div className="voice-section mass-coman">
                        <p className="voice-label">Voice Source</p>
                        <div className="voice-section ">
                          <div className="voice-radio-row">
                            <label className="send-masg-radio">
                              <input
                                type="radio"
                                name="sendVoice"
                                defaultChecked
                              />
                              <span className="send-masg-ui"></span>
                              <span className="send-masg-text">
                                System Voice
                              </span>
                            </label>

                            <label className="send-masg-radio">
                              <input type="radio" name="sendVoice" />
                              <span className="send-masg-ui"></span>
                              <span className="send-masg-text">
                                My Voice (Clone)
                              </span>
                            </label>
                          </div>
                        </div>
                        <div
                          className="voice-select-box"
                          onClick={() => setOpen(!open)}>
                          <div className="voice-avatar">
                            <img src="/assets/image/quotes-img-1.png" />
                          </div>
                          <span className="avatar-name">{selected.name}</span>
                          <span className="voice-arrow">
                            <img
                              src="/assets/image/play-circle.svg"
                              className="me-3"
                              width={32}
                            />
                            <img
                              src="/assets/image/down-select.svg"
                              width={16}
                            />
                          </span>
                        </div>

                        {open && (
                          <div className="voice-dropdown">
                            {voices.map((v) => (
                              <div
                                key={v.id}
                                className="voice-option"
                                onClick={() => {
                                  setSelected(v);
                                  setOpen(false);
                                }}>
                                <div className="voice-avatar">
                                  {" "}
                                  <img src="/assets/image/quotes-img-1.png" />
                                </div>
                                <span className="avatar-name">{v.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div className="voice-section mass-coman">
                        <p className="voice-label-input">
                          Audio File (10–15 seconds)*
                        </p>

                        <div
                          className="voice-upload"
                          onClick={() => fileRef.current.click()}>
                          {fileName || "Upload Audio File"}
                          <img
                            src="/assets/image/upload-voice.svg"
                            width={24}
                          />
                        </div>

                        <input
                          ref={fileRef}
                          type="file"
                          accept="audio/*"
                          hidden
                          onChange={handleFileChange}
                        />

                        {error && <p className="voice-error">{error}</p>}
                      </div>
                      <div className="voice-section mass-coman">
                        <p className="voice-label-input">
                          Record Audio Message
                        </p>

                        <div className="recording-upload">
                          <img src="/assets/image/audio_recording.svg" />
                          <img src="/assets/image/pause-audio.svg" />
                        </div>

                        <input
                          ref={fileRef}
                          type="file"
                          accept="audio/*"
                          hidden
                          onChange={handleFileChange}
                        />

                        {error && <p className="voice-error">{error}</p>}
                      </div>
                    </>
                  )}

                  <button className="btn-primary mt-4">SEND MESSAGE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

import { useState } from "react";
import { Col, Row } from "react-bootstrap";
const voices = {
  male: [
    {
      id: 1,
      name: "Ryan",
      image: "/assets/image/quotes-img-1.png",
    },
    {
      id: 2,
      name: "Leo",
      image: "/assets/image/quotes-img-2.png",
    },
    {
      id: 3,
      name: "Marcus",
      image: "/assets/image/quotes-img-3.png",
    },
    {
      id: 4,
      name: "Theo",
      image: "/assets/image/quotes-img-4.png",
    },
  ],
  female: [
    {
      id: 5,
      name: "Taylor",
      image: "/assets/image/player-img01.png",
    },
    {
      id: 6,
      name: "Ava",
      image: "/assets/image/player-img02.png",
    },
    {
      id: 7,
      name: "Jordan",
      image: "/assets/image/coach-mike.png",
    },
    {
      id: 8,
      name: "Riley",
      image: "/assets/image/activity-vid-img.png",
    },
  ],
};

export default function VoiceSelector() {
  const [activeVoice, setActiveVoice] = useState(voices.male[0].id);
  const [playingId, setPlayingId] = useState(null);

  const handlePlay = (voice) => {
    setActiveVoice(voice.id);
    setPlayingId(voice.id === playingId ? null : voice.id);
  };

  const VoiceCard = ({ title, list }) => (
    <div className="player-card">
      <h4>{title}</h4>

      {list.map((voice) => {
        const isActive = activeVoice === voice.id;
        const isPlaying = playingId === voice.id;

        return (
          <div
            key={voice.id}
            className={`voice-row ${isActive ? "active" : ""}`}
            onClick={() => setActiveVoice(voice.id)}>
            <div className="left">
              <div className="avatar">
                <img src={voice.image} alt={voice.name} />
                {isActive && (
                  <span className="check">
                    <img src="/assets/image/checked-play-item.svg" />
                  </span>
                )}
              </div>

              <div className="info">
                <h6>{voice.name}</h6>
                <span>{voice.name}</span>
              </div>
            </div>

            <div className="right">
              {!isPlaying && <span className="time">0.05</span>}

              {isPlaying && (
                <div className="wave">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              )}

              <button
                className="play-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePlay(voice);
                }}>
                {isPlaying ? (
                  <img src="/assets/image/pause-circle.svg" />
                ) : (
                  <img src="/assets/image/play-circle.svg" />
                )}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="voice-wrapper">
      <Row>
        <Col lg={6} xs={12} className="mb-4 mb-lg-0">
          {" "}
          <VoiceCard title="Male Voices" list={voices.male} />
        </Col>
        <Col lg={6} xs={12}>
          <VoiceCard title="Female Voices" list={voices.female} />
        </Col>
      </Row>
      <Row>
        <Col lg={12}>
          <button className="btn admin-save-btn">Save</button>
        </Col>
      </Row>
    </div>
  );
}

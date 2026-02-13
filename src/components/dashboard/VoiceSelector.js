import { useState } from "react";
import { Col, Row } from "react-bootstrap";
const voices = {
  male: [
    {
      id: 1,
      name: "Ryan",
      image: "https://randomuser.me/api/portraits/men/11.jpg",
    },
    {
      id: 2,
      name: "Leo",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: 3,
      name: "Marcus",
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 4,
      name: "Theo",
      image: "https://randomuser.me/api/portraits/men/67.jpg",
    },
  ],
  female: [
    {
      id: 5,
      name: "Taylor",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
    },
    {
      id: 6,
      name: "Ava",
      image: "https://randomuser.me/api/portraits/women/33.jpg",
    },
    {
      id: 7,
      name: "Jordan",
      image: "https://randomuser.me/api/portraits/women/54.jpg",
    },
    {
      id: 8,
      name: "Riley",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
    },
  ],
};

export default function VoiceSelector() {
  const [activeVoice, setActiveVoice] = useState(null);
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

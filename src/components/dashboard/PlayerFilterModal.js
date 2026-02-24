"use client";

import { useState } from "react";

export default function PlayerFilterModal({ open, onClose }) {
  const ageOptions = ["U10", "U12", "U14", "U16", "U18"];

  const [ageGroup, setAgeGroup] = useState([]);
  const [gender, setGender] = useState("All");
  const [playerType, setPlayerType] = useState("Club-Linked");

  const toggleAge = (age) => {
    setAgeGroup((prev) =>
      prev.includes(age) ? prev.filter((a) => a !== age) : [...prev, age],
    );
  };

  return (
    <>
      <div
        className={`filter-backdrop ${open ? "show" : ""}`}
        onClick={onClose}
        role="presentation"
      />

      <div
        className={`filter-table ${open ? "open" : ""}`}
        role="dialog"
        aria-label="Player filters"
        aria-hidden={!open}
      >
        <div className="filter-header">
          <h5>Filters</h5>
          <button onClick={onClose} aria-label="Close filters">
            ✕
          </button>
        </div>

        <div className="filter-body">
          <h6 id="age-group-label">AGE GROUP</h6>
          <div className="age-group" role="group" aria-labelledby="age-group-label">
            {ageOptions.map((age) => (
              <button
                key={age}
                className={`age-btn ${ageGroup.includes(age) ? "active" : ""}`}
                onClick={() => toggleAge(age)}
                aria-pressed={ageGroup.includes(age)}
              >
                {age}
              </button>
            ))}
          </div>

          <h6 id="gender-label">Gender</h6>
          <div className="gender-toggle" role="group" aria-labelledby="gender-label">
            {["All", "Boy", "Girl"].map((g) => (
              <button
                key={g}
                className={gender === g ? "active" : ""}
                onClick={() => setGender(g)}
                aria-pressed={gender === g}
              >
                {g}
              </button>
            ))}
          </div>

          <h6 id="player-type-label">Player Type</h6>
          <div role="radiogroup" aria-labelledby="player-type-label">
            {["Club-Linked", "Club-Interest"].map((type) => (
              <button
                key={type}
                className={`custom-radio ${playerType === type ? "active" : ""}`}
                onClick={() => setPlayerType(type)}
                role="radio"
                aria-checked={playerType === type}
              >
                {type}
                <span />
              </button>
            ))}
          </div>

          <h6>Registration Date</h6>
          <div className="date-row">
            <input type="date" aria-label="Start date" />
            <input type="date" aria-label="End date" />
          </div>

          <h6>Last Activity</h6>
          <select aria-label="Last activity filter">
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Inactive 30+ Days</option>
          </select>

          <h6>Points Range</h6>
          <div className="range-row">
            <input placeholder="Min" aria-label="Minimum points" />
            <span aria-hidden="true">-</span>
            <input placeholder="Max" aria-label="Maximum points" />
          </div>

          <h6>Badge Count</h6>
          <div className="range-row">
            <input placeholder="Min" aria-label="Minimum badges" />
            <span aria-hidden="true">-</span>
            <input placeholder="Max" aria-label="Maximum badges" />
          </div>
        </div>

        <div className="filter-footer">
          <button className="reset-btn">Reset</button>
          <button className="apply-btn">Apply Filters</button>
        </div>
      </div>
    </>
  );
}

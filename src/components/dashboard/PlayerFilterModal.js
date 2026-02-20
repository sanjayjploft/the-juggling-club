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
      {/* BACKDROP */}
      <div
        className={`filter-backdrop ${open ? "show" : ""}`}
        onClick={onClose}
      />

      {/* MODAL */}
      <div className={`filter-table ${open ? "open" : ""}`}>
        {/* HEADER */}
        <div className="filter-header">
          <h5>Filters</h5>
          <span onClick={onClose}>✕</span>
        </div>

        <div className="filter-body">
          {/* AGE */}
          <h6>AGE GROUP</h6>
          <div className="age-group">
            {ageOptions.map((age) => (
              <button
                key={age}
                className={`age-btn ${ageGroup.includes(age) ? "active" : ""}`}
                onClick={() => toggleAge(age)}>
                {age}
              </button>
            ))}
          </div>

          {/* GENDER */}
          <h6>Gender</h6>
          <div className="gender-toggle">
            {["All", "Boy", "Girl"].map((g) => (
              <button
                key={g}
                className={gender === g ? "active" : ""}
                onClick={() => setGender(g)}>
                {g}
              </button>
            ))}
          </div>

          {/* PLAYER TYPE */}
          <h6>Player Type</h6>

          {["Club-Linked", "Club-Interest"].map((type) => (
            <div
              key={type}
              className={`custom-radio ${playerType === type ? "active" : ""}`}
              onClick={() => setPlayerType(type)}>
              {type}
              <span />
            </div>
          ))}

          {/* DATE */}
          <h6>Registration Date</h6>
          <div className="date-row">
            <input type="date" />
            <input type="date" />
          </div>

          {/* ACTIVITY */}
          <h6>Last Activity</h6>
          <select>
            <option>Today</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Inactive 30+ Days</option>
          </select>

          {/* POINTS */}
          <h6>Points Range</h6>
          <div className="range-row">
            <input placeholder="Min" />
            <span>-</span>
            <input placeholder="Max" />
          </div>

          {/* BADGES */}
          <h6>Badge Count</h6>
          <div className="range-row">
            <input placeholder="Min" />
            <span>-</span>
            <input placeholder="Max" />
          </div>
        </div>

        {/* FOOTER */}
        <div className="filter-footer">
          <button className="reset-btn">Reset</button>
          <button className="apply-btn">Apply Filters</button>
        </div>
      </div>
    </>
  );
}

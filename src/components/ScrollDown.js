"use client";

export default function ScrollDown() {
  return (
    <div className="scroll-wrapper">
      <div className="scroll-down">
        <span className="scroll-line"></span>

        <span className="scroll-arrow">
          {/* SVG Arrow */}
          <svg
            width="31"
            height="17"
            viewBox="0 0 31 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M29.2002 1.19995L15.2014 15.2396L1.2002 1.19995"
              stroke="#FF073A"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
    </div>
  );
}

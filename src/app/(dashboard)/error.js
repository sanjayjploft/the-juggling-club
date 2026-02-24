"use client";

export default function DashboardError({ error, reset }) {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        minHeight: "50vh",
        fontFamily: "Avenir, sans-serif",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "16px", color: "#03202F" }}>
          Something went wrong
        </h2>
        <p style={{ marginBottom: "32px", color: "#666" }}>
          We encountered an error loading this page.
        </p>
        <button onClick={() => reset()} className="btn btn--primary">
          Try Again
        </button>
      </div>
    </div>
  );
}

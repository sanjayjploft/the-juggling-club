"use client";

export default function Error({ error, reset }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        fontFamily: "Avenir, sans-serif",
        padding: "24px",
      }}
    >
      <div>
        <h2 style={{ marginBottom: "16px", color: "#03202F" }}>
          Something went wrong
        </h2>
        <p style={{ marginBottom: "32px", color: "#666" }}>
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="btn btn--primary"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}

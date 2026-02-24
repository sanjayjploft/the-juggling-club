import Link from "next/link";

export default function NotFound() {
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
        <h1 style={{ fontSize: "72px", fontWeight: 900, color: "#03202F" }}>
          404
        </h1>
        <h2 style={{ marginBottom: "16px", color: "#03202F" }}>
          Page Not Found
        </h2>
        <p style={{ marginBottom: "32px", color: "#666" }}>
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
        </p>
        <Link href="/" className="btn btn--primary">
          Return Home
        </Link>
      </div>
    </main>
  );
}

"use client";

import { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export default function RootLayout({ children }) {
  useEffect(() => {
    const handlePageShow = (event) => {
      if (event.persisted) {
        // Back/Forward cache se aaya page
        window.location.reload();
      }
    };

    window.addEventListener("pageshow", handlePageShow);

    return () => {
      window.removeEventListener("pageshow", handlePageShow);
    };
  }, []);
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

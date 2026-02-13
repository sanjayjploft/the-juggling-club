"use client";

import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PublicLayout({ children }) {
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
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

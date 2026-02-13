"use client";

import { useEffect } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function PublicLayout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

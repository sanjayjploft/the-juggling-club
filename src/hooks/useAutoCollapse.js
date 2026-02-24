"use client";

import { useState, useEffect } from "react";

export default function useAutoCollapse(breakpoint = 1400) {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setCollapsed(window.innerWidth < breakpoint);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return [collapsed, setCollapsed];
}

"use client";

import { useState, useCallback } from "react";

export default function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async (text) => {
    const copyText = text || window.location.href;

    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(copyText);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = copyText;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Copy failed:", err);
    }
  }, []);

  return { copied, handleCopy };
}

"use client";

import { useRouter } from "next/navigation";

export default function SavePreference({ open, onClose }) {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.clear();
    router.push("/");
  };

  if (!open) return null;

  return (
    <div
      className="logout-wrapper"
      role="dialog"
      aria-label="Log out confirmation">
      <div className="logout-backdrop" onClick={onClose} role="presentation" />

      <div className="logout-modal">
        <h4>Update Successful</h4>
        <p>Your preferences have been saved successfully.</p>

        <div className="logout-actions">
          <button className="logout-no" onClick={onClose}>
            No
          </button>
          <button className="logout-yes" onClick={onClose}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

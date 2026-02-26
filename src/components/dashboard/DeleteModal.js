"use client";

import { useRouter } from "next/navigation";

export default function DeleteModal({ open, onClose }) {
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
        <h4>Delete Coach Spotlight</h4>
        <p>
          Are you sure you want to delete this coach? This action cannot be
          undone.
        </p>

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

"use client";

import { useRouter } from "next/navigation";

export default function LogoutModal({ open, onClose }) {
  const router = useRouter();

  const handleLogout = () => {
    // 👉 future token remove
    localStorage.removeItem("token");
    sessionStorage.clear();

    router.push("/"); // homepage redirect
  };

  if (!open) return null;

  return (
    <div className="logout-wrapper">
      {/* BACKDROP */}
      <div className="logout-backdrop" onClick={onClose}></div>

      {/* MODAL */}
      <div className="logout-modal">
        <h4>Log Out</h4>

        <p>Are you sure you want to log out?</p>

        <div className="logout-actions">
          <button className="logout-no" onClick={onClose}>
            No
          </button>

          <button className="logout-yes" onClick={handleLogout}>
            Yes
          </button>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useRouter } from "next/navigation";

export default function DeactivatingOrganizations({ open, onClose }) {
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
        <h4>Delete Organization</h4>
        <p>
          Are you sure you want to delete this organization? This action cannot
          be undone and all associated data will be permanently removed.
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

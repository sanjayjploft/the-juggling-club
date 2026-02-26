"use client";

import { useRouter } from "next/navigation";

export default function ClaimReward({ open, onClose }) {
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
        <button className="close-btn" onClick={onClose}>
          <img src="/assets/image/close-icon.svg" className="" />
        </button>
        <h4>
          🎉 <br />
          Claim Your Reward
        </h4>
        <p className="mb-0">You’ve earned an Amazon Gift Card.</p>
        <p>You will receive further instructions via email shortly.</p>
      </div>
    </div>
  );
}

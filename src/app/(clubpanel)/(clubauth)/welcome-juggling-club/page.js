"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function ClubInformation() {
  const router = useRouter();
  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/dashboardclub");
    }, 5000); // 5 seconds

    return () => clearTimeout(timer);
  }, [router]);
  return (
    <>
      {/* Steps */}

      {/* Form */}

      <div className="welcome-box">
        <img src="/assets/image/checkmark-confrm.svg" />
        <h4>Welcome to Juggling Club!</h4>
        <span>Your club has been successfully registered </span>
        <div className="club-code">
          <span>Your club code:</span>
          <h6>C-WLW-785477</h6>
          <p>
            Share your club code with players to brand their app with your club
            and unlock a 10% subscription discount for families.
          </p>
        </div>
      </div>
      <div className="redirecting">Redirecting to your dashboard...</div>
    </>
  );
}

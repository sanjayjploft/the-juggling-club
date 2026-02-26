export const metadata = {
  title: "Privacy Policy",
  description: "Learn how we collect, use, and protect your data.",
};

export default function PrivacyPolicy() {
  return (
    <div className="legal-page container py-5">
      <h1>Privacy Policy</h1>

      <p>
        Your privacy is important to us. This Privacy Policy explains how we
        collect and use your information.
      </p>

      <h3>1. Information We Collect</h3>
      <p>
        We may collect personal information such as name, email, phone number,
        and usage data.
      </p>

      <h3>2. How We Use Information</h3>
      <p>
        Information is used to improve services, communicate updates, and ensure
        platform security.
      </p>

      <h3>3. Cookies</h3>
      <p>
        We use cookies to enhance user experience and analyze website traffic.
      </p>

      <h3>4. Data Protection</h3>
      <p>
        We implement industry-standard measures to protect your information.
      </p>

      <h3>5. Third-Party Services</h3>
      <p>
        Some services may involve trusted third parties who assist in operating
        our platform.
      </p>

      <h3>6. Your Rights</h3>
      <p>
        You may request access, correction, or deletion of your personal data.
      </p>

      <h3>7. Policy Updates</h3>
      <p>We may update this Privacy Policy periodically.</p>

      <p className="mt-4">Last Updated: {new Date().getFullYear()}</p>
    </div>
  );
}

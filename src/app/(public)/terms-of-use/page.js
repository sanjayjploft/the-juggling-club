export const metadata = {
  title: "Terms of Use",
  description: "Read our terms and conditions for using our platform.",
};

export default function TermsOfUse() {
  return (
    <div className="legal-page container py-5">
      <h1>Terms of Use</h1>

      <p>
        Welcome to our platform. By accessing or using our services, you agree
        to comply with these Terms of Use.
      </p>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By using this website, you confirm that you accept these terms and agree
        to follow them.
      </p>

      <h3>2. User Responsibilities</h3>
      <p>
        Users must provide accurate information and use the platform only for
        lawful purposes.
      </p>

      <h3>3. Account Usage</h3>
      <p>
        You are responsible for maintaining the confidentiality of your account
        credentials.
      </p>

      <h3>4. Intellectual Property</h3>
      <p>
        All content, logos, and materials are owned by the company and may not
        be reused without permission.
      </p>

      <h3>5. Limitation of Liability</h3>
      <p>
        We are not responsible for any damages resulting from the use of our
        services.
      </p>

      <h3>6. Changes to Terms</h3>
      <p>
        We may update these terms at any time. Continued use means acceptance of
        the updated terms.
      </p>

      <p className="mt-4">Last Updated: {new Date().getFullYear()}</p>
    </div>
  );
}

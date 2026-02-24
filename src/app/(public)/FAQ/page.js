import Tabs from "../../../components/Tabs";

export const metadata = {
  title: "FAQ",
  description: "Frequently asked questions about The Juggling Club platform.",
};

export default function Page() {
  return (
    <main className="page">
      <div className="section">
        <div className="container faq-tabs">
          <h1>Frequently Asked Questions</h1>
          <Tabs />
        </div>
      </div>
    </main>
  );
}

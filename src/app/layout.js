import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";

export const metadata = {
  title: {
    default: "The Juggling Club",
    template: "%s | The Juggling Club",
  },
  description:
    "Master your soccer juggling skills with AI coaching, track your progress, and gain confidence with every touch.",
  openGraph: {
    type: "website",
    siteName: "The Juggling Club",
    title: "The Juggling Club",
    description:
      "Master your soccer juggling skills with AI coaching, track your progress, and gain confidence with every touch.",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

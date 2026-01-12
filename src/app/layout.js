import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { Nav } from "../components/nav";

export const metadata = {
  title: {
    default: "Ishan Shah",
    template: "%s | Ishan Shah",
  },
  description: "Software engineer in SF.",
  icons: {
    icon: [
      { url: "/static/favicon.ico", sizes: "any" },
      { url: "/static/favicon.png", type: "image/png" },
    ],
    apple: "/static/meta/apple-touch-icon.png",
  },
  manifest: "/static/meta/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.ishanshah.me",
    siteName: "Ishan Shah",
    title: "Ishan Shah",
    description: "Software engineer in SF.",
    images: [
      {
        url: "https://www.ishanshah.me/static/og/default.png",
        alt: "Ishan Shah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@var_epsilon",
    creator: "@var_epsilon",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

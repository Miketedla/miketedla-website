import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import PersonSchema from "./person-schema";

export const metadata: Metadata = {
  metadataBase: new URL("https://miketedla.com"),

  title: "Mike Tedla | DJ i Stockholm",

  description:
    "Professionell DJ i Stockholm för företagsevent, restauranger, nattklubbar och privata event.",
 
    keywords: [
  "DJ Stockholm",
  "DJ",
  "DJ företagsevent",
  "DJ restaurang",
  "DJ nattklubb",
  "Event DJ",
  "Mike Tedla",
],
 
    alternates: {
    canonical: "https://miketedla.com",
  },

  icons: {
    icon: "/branding/MT-monogram-bold-favicon.svg",
    shortcut: "/branding/MT-monogram-bold-favicon.svg",
    apple: "/branding/apple-touch-icon.png",
  },

  openGraph: {
    title: "Mike Tedla | DJ & Eventpartner",
    description:
      "Musikupplevelser för företag, restauranger, nattklubbar och privata event.",
    url: "https://miketedla.com",
    siteName: "Mike Tedla",
    locale: "sv_SE",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Mike Tedla | DJ & Eventpartner",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Mike Tedla | DJ & Eventpartner",
    description:
      "Musikupplevelser för företag, restauranger, nattklubbar och privata event.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>
        {children}
        <Analytics />
        <GoogleAnalytics gaId="G-0F6XH2NQ9N" />
        <PersonSchema />
      </body>
    </html>
  );
}
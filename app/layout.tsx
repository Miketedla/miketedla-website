import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Mike Tedla | DJ & Eventpartner",

  description:
    "Musikupplevelser för företag, restauranger, nattklubbar och privata event.",

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
      </body>
    </html>
  );
}
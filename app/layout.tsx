import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mike Tedla | DJ & Eventpartner",
  description:
    "Musikupplevelser för företag, restauranger, nattklubbar och privata event.",
  icons: {
    icon: "/branding/MT-monogram-bold-favicon.svg",
    shortcut: "/branding/MT-monogram-bold-favicon.svg",
    apple: "/branding/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv">
      <body>{children}</body>
    </html>
  );
}
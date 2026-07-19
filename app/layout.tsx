import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <html lang="sv">
      <body>{children}</body>
    </html>
  );
}

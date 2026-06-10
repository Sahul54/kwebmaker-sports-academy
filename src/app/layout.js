import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://www.ssacademy.com"),

  title: {
    default: "SSA Academy | Sports Academy in Hunter Valley",
    template: "%s | SSA Academy",
  },

  description:
    "SSA Academy is a premier sports academy in Hunter Valley offering professional coaching, training programs, events, tournaments, and world-class sports facilities.",

  keywords: [
    "SSA Academy",
    "Sports Academy",
    "Hunter Valley Sports Academy",
    "Tennis Academy",
    "Sports Coaching",
    "Tennis Coaching",
    "Sports Training",
    "Junior Tennis Program",
    "Professional Coaches",
    "Sports Events",
    "Sports Facility",
    "Athlete Development",
    "Sports Programs",
    "Tennis Lessons",
    "Tennis Club Australia",
    "Hunter Valley Tennis",
  ],

  authors: [
    {
      name: "SSA Academy",
    },
  ],

  creator: "SSA Academy",
  publisher: "SSA Academy",

  openGraph: {
    title: "SSA Academy | Sports Academy in Hunter Valley",
    description:
      "Professional sports coaching, events, tournaments and training programs at SSA Academy.",
    url: "https://www.ssacademy.com",
    siteName: "SSA Academy",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SSA Academy",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "SSA Academy | Sports Academy",
    description:
      "Professional sports coaching, events and training programs.",
    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen overflow-x-hidden bg-white">
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
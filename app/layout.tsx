import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Beneva | Software, ERP, AI & Design",
  description:
    "Beneva builds software systems, ERP platforms, AI automation, and product experiences for ambitious businesses.",
  openGraph: {
    title: "Beneva | Software, ERP, AI & Design",
    description:
      "Software, ERP, AI automation, and design for businesses that need systems that actually work.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#f2efe9] text-[#111111]">{children}</body>
    </html>
  );
}

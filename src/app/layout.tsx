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
  title: "Malek | Full Stack Developer",
  description:
    "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB. I build modern and scalable web applications.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Malek" }],
  creator: "Malek",
  openGraph: {
    title: "Malek | Full Stack Developer",
    description:
      "Full Stack Developer specializing in React, Next.js, Node.js, and MongoDB.",
    url: "https://yourdomain.com",
    siteName: "Malek Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

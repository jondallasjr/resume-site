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
  title: "Jon Dallas | AI Engineer & Workshop Facilitator",
  description: "Custom AI solutions and workshops for SMBs. Expertise in LLMs, RAG, and full-stack development. 250+ workshops, 8,000+ attendees across 12 cities.",
  keywords: [
    "AI Engineer",
    "Workshop Facilitator",
    "Custom AI Solutions",
    "LLM Development",
    "RAG Systems",
    "Full-Stack Development",
    "AI Consulting"
  ],
  authors: [{ name: "Jon Dallas" }],
  creator: "Jon Dallas",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    type: "website",
    title: "Jon Dallas | AI Engineer & Workshop Facilitator",
    description: "Custom AI solutions and workshops for SMBs. Expertise in LLMs, RAG, and full-stack development.",
    siteName: "Jon Dallas Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jon Dallas | AI Engineer & Workshop Facilitator",
    description: "Custom AI solutions and workshops for SMBs. Expertise in LLMs, RAG, and full-stack development.",
    creator: "@jondallasjr"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-background`}
      >
        {children}
      </body>
    </html>
  );
}
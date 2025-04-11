import type { Metadata } from "next";
import { 
  Geist, 
  Geist_Mono, 
  Rubik_Bubbles, 
  Rubik_Doodle_Shadow, 
  Chakra_Petch,
  Playfair_Display,
  Inter,
  Space_Grotesk
} from "next/font/google";
import "./globals.css";

// Modern (default)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Memphis theme
const memphisFont = Rubik_Bubbles({
  weight: "400",
  variable: "--font-memphis",
  subsets: ["latin"],
});

// Neubrutalism theme
const neubrutFont = Rubik_Doodle_Shadow({
  weight: "400",
  variable: "--font-neubrutalism",
  subsets: ["latin"],
});

// Synthwave theme
const synthwaveFont = Chakra_Petch({
  weight: ["400", "700"],
  variable: "--font-synthwave",
  subsets: ["latin"],
});

// Classic theme
const classicFont = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  variable: "--font-classic",
  subsets: ["latin"],
});

// Minimal theme
const minimalFont = Inter({
  variable: "--font-minimal",
  subsets: ["latin"],
});

// Glassmorphism theme
const glassFont = Space_Grotesk({
  variable: "--font-glass",
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
    <html lang="en" className="scroll-smooth">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${memphisFont.variable}
          ${neubrutFont.variable}
          ${synthwaveFont.variable}
          ${classicFont.variable}
          ${minimalFont.variable}
          ${glassFont.variable}
          antialiased min-h-screen w-screen overflow-x-hidden
        `}
      >
        {children}
      </body>
    </html>
  );
}
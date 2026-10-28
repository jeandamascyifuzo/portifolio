import "./globals.css";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { profile } from "@/data/portfolio";
import Background from "./components/Background";
import CursorEffect from "./components/CursorEffect";

const sans = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});
const mono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
});

const description = `${profile.name} — ${profile.roles[0]} based in ${profile.location}. ${profile.tagline}`;

export const metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: `${profile.name} | ${profile.roles[0]}`,
    template: `%s | ${profile.shortName}`,
  },
  description,
  authors: [{ name: profile.name }],
  keywords: [
    "Full Stack Developer",
    "React",
    "Node.js",
    "Next.js",
    "Rwanda",
    profile.name,
  ],
  icons: { icon: "/images/my-logo.png" },
  openGraph: {
    type: "website",
    title: `${profile.name} | ${profile.roles[0]}`,
    description,
    siteName: profile.shortName,
    images: [{ url: profile.image, width: 640, height: 640 }],
  },
  twitter: {
    card: "summary",
    title: `${profile.name} | ${profile.roles[0]}`,
    description,
    images: [profile.image],
  },
  themeColor: "#05060a",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${sans.variable} ${mono.variable}`}>
      <body className="bg-base font-sans text-white antialiased">
        <Background />
        {children}
        <CursorEffect />
      </body>
    </html>
  );
}

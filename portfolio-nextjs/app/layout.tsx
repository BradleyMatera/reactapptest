import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bradleymatera.dev"),
  title: "Old Portfolio Retired | Bradley Matera",
  description:
    "This GitHub Pages portfolio is an old, deprecated archive. Visit bradleymatera.dev for Bradley Matera's current services, work, demos, and contact information.",
  alternates: {
    canonical: "https://bradleymatera.dev/",
  },
  robots: {
    index: false,
    follow: true,
  },
  openGraph: {
    title: "This Portfolio Is Retired | Bradley Matera",
    description:
      "This is an old, deprecated portfolio. Visit Bradley Matera's current website for up-to-date work and services.",
    url: "https://bradleymatera.dev/",
    siteName: "Bradley Matera",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

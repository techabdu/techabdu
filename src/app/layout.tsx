import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "One in Town — Portfolio",
  description: "I build digital systems that feel inevitable.",
  metadataBase: new URL("https://techabdu.com"),
  openGraph: {
    title: "One in Town — Portfolio",
    description: "I build digital systems that feel inevitable.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-6 py-3 bg-background text-foreground border border-border rounded-lg shadow-lg font-medium outline-none text-small"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}

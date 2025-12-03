import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/auth/AuthProvider";
import ConditionalLayout from "@/components/layout/ConditionalLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Workspace News – Real-Time Breaking Updates",
  description:
    "Workspace News delivers real-time breaking news, trending stories, and in-depth articles across technology, politics, entertainment, and world news.",
  
  // Safe metadataBase: uses env variable if exists, otherwise fallback
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://blog-space-inky-sigma.vercel.app"
  ),

  // Open Graph metadata (Facebook, LinkedIn, etc.)
  openGraph: {
    title: "Workspace News – Real-Time Breaking Updates",
    description:
      "Stay informed with real-time breaking news, trending updates, and expert analysis across global categories.",
    url: "https://blog-space-inky-sigma.vercel.app/",
    siteName: "Workspace News",
    images: [
      {
        url: "/og-news.png", // local image in /public
        width: 1200,
        height: 630,
        alt: "Workspace News Cover Image",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  // Twitter card metadata
  twitter: {
    card: "summary_large_image",
    title: "Workspace News – Real-Time Breaking Updates",
    description:
      "Real-time news coverage with fast, trusted, and high-quality articles.",
    creator: "@WorkspaceNews", // your Twitter handle
    images: ["/og-news.png"], // same local OG image
  },

  // Favicon and Apple touch icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  // Web manifest
  manifest: "/site.webmanifest",

  // Optional browser theme color
  themeColor: "#C86B3F", // matches your accent color
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <ConditionalLayout>{children}</ConditionalLayout>
        </AuthProvider>
      </body>
    </html>
  );
}

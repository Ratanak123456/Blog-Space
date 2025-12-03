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
  metadataBase: new URL("https://your-news-workspace.com"),

  openGraph: {
    title: "Workspace News – Real-Time Breaking Updates",
    description:
      "Stay informed with real-time breaking news, trending updates, and expert analysis across global categories.",
    url: "https://your-news-workspace.com",
    siteName: "Workspace News",
    images: [
      {
        url: "https://your-news-workspace.com/og-news.png", // your OG image
        width: 1200,
        height: 630,
        alt: "Workspace News Cover Image",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Workspace News – Real-Time Breaking Updates",
    description:
      "Real-time news coverage with fast, trusted, and high-quality articles.",
    images: ["https://your-news-workspace.com/og-news.png"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
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

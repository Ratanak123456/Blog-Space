"use client";

import { usePathname } from "next/navigation";
import Navbar from "../header/Navbar";
import Footer from "@/components/footer/footer";

export default function ConditionalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";
  const isBlogDetailPage =
    pathname.startsWith("/blogs/") && pathname.split("/").length > 3;

  const showLayout = !isLoginPage && !isBlogDetailPage;

  return (
    <>
      {showLayout && <Navbar />}
      {children}
      {showLayout && <Footer />}
    </>
  );
}

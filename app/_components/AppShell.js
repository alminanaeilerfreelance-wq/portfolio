"use client";

import { usePathname } from "next/navigation";

import Footer from "@/app/_components/Footer";
import Header from "@/app/_components/Header";
import ScrollToTop from "@/app/_components/ScrollToTop";
import ChatContactBox from "@/app/_components/ChatContactBox";

export default function AppShell({ children }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <div className="flex flex-col min-h-screen">
      {!isAdmin && <Header />}
      <main className="flex-grow">{children}</main>
      {!isAdmin && <Footer />}
      {!isAdmin && <ChatContactBox />}
      {!isAdmin && <ScrollToTop />}
    </div>
  );
}

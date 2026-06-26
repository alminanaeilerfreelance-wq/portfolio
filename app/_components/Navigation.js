"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  return (
    <nav>
      <div className="hidden lg:flex lg:items-center lg:gap-x-12">
        <Link href="#home" className="border-0 border-b-2 border-solid border-blue-400 pb-2 text-white no-underline">
          Home
        </Link>
        <Link href="#about" className="text-slate-200 no-underline hover:text-white">
          About
        </Link>
        <Link href="#process" className="text-slate-200 no-underline hover:text-white">
          Process
        </Link>
        <Link href="#portfolio" className="text-slate-200 no-underline hover:text-white">
          Portfolio
        </Link>
        <Link href="#skills" className="text-slate-200 no-underline hover:text-white">
          Skills
        </Link>
        <Link href="#blogs" className="text-slate-200 no-underline hover:text-white">
          Blogs
        </Link>
        <Link href="#services" className="text-slate-200 no-underline hover:text-white">
          Services
        </Link>
        <a
          href="/admin"
          className="rounded-lg border border-blue-400/70 px-7 py-3 text-white no-underline shadow-[0_0_25px_rgba(59,130,246,.35)] hover:bg-blue-500/15"
        >
          Login
        </a>
        <Link
          href="#contact"
          className="rounded-lg border border-blue-400 bg-blue-600 px-7 py-3 font-bold text-white no-underline shadow-[0_0_25px_rgba(59,130,246,.45)] hover:bg-blue-500"
        >
          Contact
        </Link>
      </div>
      <div onClick={toggleMenu} className="lg:hidden">
        <i
          className={`pi ${
            isOpen ? "pi-times" : "pi-bars"
          } text-2xl leading-none text-cyan-200`}
        ></i>
      </div>
      <div
        className={`absolute inset-x-4 top-full mt-4 flex origin-top flex-col rounded-2xl border border-blue-300/20 bg-[#061223] p-4 text-lg tracking-tight text-white shadow-xl ring-1 ring-blue-400/20 ${
          isOpen ? "flex" : "hidden"
        }`}
        onClick={closeMenu}
      >
        <Link href="/" className="p-2 text-white no-underline">
          Home
        </Link>
        <Link href="#about" className="p-2 text-slate-200 no-underline">
          About
        </Link>
        <Link href="#process" className="p-2 text-slate-200 no-underline">
          Process
        </Link>
        <Link href="#portfolio" className="p-2 text-slate-200 no-underline">
          Portfolio
        </Link>
        <Link href="#skills" className="p-2 text-slate-200 no-underline">
          Skills
        </Link>
        <Link href="#blogs" className="p-2 text-slate-200 no-underline">
          Blog
        </Link>
        <Link href="#services" className="p-2 text-slate-200 no-underline">
          Services
        </Link>
        <a href="/admin" className="p-2 text-slate-200 no-underline">
          Login
        </a>
        <Link href="#contact" className="p-2 text-slate-200 no-underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}

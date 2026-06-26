import Navigation from "@/app/_components/Navigation";
import PersonalLogo from "@/app/_components/PersonalLogo";
import Link from "next/link";

export default function Page() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061223]/95 py-4 shadow-[0_10px_45px_rgba(0,0,0,.30)] backdrop-blur">
      <div className="container mx-auto">
        <div className="flex items-center justify-between rounded-xl border border-blue-300/20 bg-white/[0.04] px-5 py-3">
          <Link href="/">
            <span className="sr-only">Alminana Eiler B.</span>
            <PersonalLogo variant="light" />
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}

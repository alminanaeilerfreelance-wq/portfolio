import Link from "next/link";
import PersonalLogo from "@/app/_components/PersonalLogo";

export default function Page() {
  return (
    <footer className="bg-gray-800 pt-28 pb-20 relative">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-0 justify-between items-center">
          <Link href="/">
            <span className="sr-only">Alminana Eiler B.</span>
            <PersonalLogo variant="light" />
          </Link>
          <div>
            <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-12">
              <Link href="#home" className="text-gray-50 no-underline">
                Home
              </Link>
              <Link href="#about" className="text-gray-50 no-underline">
                About
              </Link>
              <Link href="#process" className="text-gray-50 no-underline">
                Process
              </Link>
              <Link href="#portfolio" className="text-gray-50 no-underline">
                Portfolio
              </Link>
              <Link href="#services" className="text-gray-50 no-underline">
                Services
              </Link>
              <Link href="#contact" className="text-gray-50 no-underline">
                Contact
              </Link>
            </div>
          </div>
          <div className="text-white">
            Copyright (c) 2026{" "}
            <a
              href="mailto:alminanaeilerbutad20@gmail.com"
              className="text-white no-underline"
            >
              Alminana Eiler B.
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}

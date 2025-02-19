import { navbarData } from "@/data/v-data";
import Image from "next/image";
import Link from "next/link";
import { NavbarMobile } from "./navbar-mobile";

export function Navbar() {
  return (
    <nav className="max-w-[1240px] mx-auto p-8 lg:p-0 scroll-smooth mt-8 z-50 relative overflow-hidden">
      <div className="hidden lg:flex items-center justify-between" data-aos="fade-left">
        <div>
          <Image
            src="/Logo.svg"
            width={120}
            height={101}
            alt="Logo Rafael Perrone"
          />
        </div>
        <ul className="flex items-center gap-8">
          {navbarData.map((item, index) => {
            const sectionId = item.name.toLowerCase().replace(/\s+/g, "-");

            return (
              <li key={index}>
                <Link
                  href={`#${sectionId}`}
                  className="text-[#404040] text-[20px] transition-all duration-700 hover:text-[#0155B5] hover:scale-[1.2] cursor-pointer"
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex lg:hidden">
          <NavbarMobile />
      </div>
    </nav>
  );
}

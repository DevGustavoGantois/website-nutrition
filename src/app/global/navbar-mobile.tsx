import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { navbarData } from "@/data/v-data";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function NavbarMobile() {
    return (
        <nav className="bg-gradient-to-r from-[#1F63AA]/30 via-[#003D82]/30 to-[#1F63AA]/30 w-full p-4 rounded-3xl">
            <div className="flex justify-between items-center">
                <Image src="/Logo.svg" width={60} height={60} alt="Logo" />

                {/* Menu que abre de cima para baixo */}
                <Sheet>
                    <SheetTrigger>
                        <MenuIcon className="text-white cursor-pointer" size={40} />
                    </SheetTrigger>
                    <SheetContent side="top" className="flex flex-col items-center py-6 w-full">
                        {/* Logo dentro do menu */}
                        <Image src="/Logo.svg" width={120} height={40} alt="Logo" className="mb-4" />

                        {/* Lista de links */}
                        <SheetTitle className="w-full text-center flex flex-col gap-2">
                            {navbarData.map((item, index) => {
                                const sectionId = item.name.toLowerCase().replace(/\s+/g, "-");
                                return (
                                    <Link 
                                        key={index} 
                                        href={`#${sectionId}`} 
                                        className="text-[#1F63AA] text-lg font-semibold py-2 hover:text-[#003D82] transition-all"
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </SheetTitle>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    );
}

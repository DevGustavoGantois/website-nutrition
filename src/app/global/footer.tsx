import { footerData } from "@/data/v-data";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="max-w-[1440px] mx-auto p-8 bg-gradient-to-l from-[#1F63AA] to-[#00424F] rounded-t-[20px] rounded-l-[20px] mt-[60px] lg:mt-[120px]">
      <div className="flex flex-col lg:flex-row lg:justify-around items-center lg:items-start gap-8">
        {/* Logo */}
        <Image src="/Logo.svg" width={200} height={200} alt="Logo Rafael Perrone Footer" />
        
        {/* Links e Contato */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-8 text-white text-center lg:text-start">
          {footerData.map((item, index) => (
            <div key={index} className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-48">
              {/* Links */}
              <div>
                <h1 className="text-[24px] font-semibold">{item.titleLinks}</h1>
                <ul className="mt-2 flex flex-col gap-2">
                  {item.footerLinks.map((linkItem, i) => (
                    <li key={i}>
                      <Link
                        href={`#${linkItem.link.toLowerCase().replace(/\s+/g, "-")}`}
                        className="font-light text-base transition-all duration-700 ml-0 hover:scale-[1.1] hover:ml-1"
                      >
                        {linkItem.link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Contato */}
              <div>
                <h1 className="text-[24px] font-semibold">{item.titleTalk}</h1>
                <ul className="mt-2 flex flex-col gap-2">
                  {item.footerTalk.map((contactItem, i) => (
                    <li key={i} className="font-light text-base">{contactItem.contact}</li>
                  ))}
                </ul>
                
                {/* Redes Sociais */}
                <div className="flex gap-4 mt-4">
                  {[
                    { icon: Instagram, href: "https://www.instagram.com/prof.rafaelperrone/" },
                    { icon: MessageCircle, href: "https://wa.me/557196951555?text=Ol%C3%A1.%20Tudo%20bem%20Rafael?!%20Queria%20marcar%20uma%20consulta!%20Qual%20seria%20sua%20disponibilidade%3F" },
                    { icon: Mail, href: "mailto:p_perrone@hotmail.com" }
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      target="_blank"
                      className="bg-white p-2 rounded-[10px] transition-all text-[#1F63AA] duration-700 hover:scale-110 hover:bg-transparent hover:text-white"
                    >
                      <social.icon size={32} />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-white w-full mt-6 pt-4">
        <div className="flex flex-col gap-4 lg:flex-row justify-center lg:justify-between items-center">
          <p className="text-white font-light text-center lg:text-start">
            © 2025 Todos os Direitos Reservados. Nutricionista Rafael Perrone
          </p>
          <Link
            className="text-white transition-all duration-700 hover:scale-[1.1]"
            href="https://www.instagram.com/devgustavogantois_"
            target="_blank"
          >
            Desenvolvido por @devgustavogantois_
          </Link>
        </div>
      </div>
    </footer>
  );
}

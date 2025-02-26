import { Button } from "@/components/ui/button";
import { aboutData } from "@/data/v-data";
import { CheckCheckIcon, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeAbout() {
  return (
    <section className="max-w-[1240px] mx-auto mt-20 p-8 lg:p-0" id="sobre-mim">
      <div className="bg-gradient-to-b from-[#1F63AA] via-[#003D82] to-[#00424f] p-8 lg:px-10 lg:py-0 rounded-2xl lg:rounded-[40px]">
        {aboutData.map((item, index) => {
          return (
            <div
              key={index}
              className="flex flex-col-reverse items-center lg:flex-row justify-between"
            >
              <div className="flex flex-col justify-start items-start gap-5">
                <h1
                  className="text-2xl lg:text-[40px] font-bold text-white mt-4 mb-4 lg:mt-0 lg:mb-0"
                  data-aos="fade-down"
                >
                  {item.title}
                </h1>
                <p
                  className="text-white text-base font-light"
                  data-aos="fade-up"
                >
                  {item.description}
                </p>
                <div className="flex flex-col lg:flex-row items-center gap-2">
                  <Button variant="secondary">
                    <Link href="#contato">{item.btnText}</Link>
                    <CheckCheckIcon size={24} className="text-[#1F63AA]" />
                  </Button>
                  <Button
                    variant="tertiary"
                    className="flex items-center gap-2"
                  >
                    <Link
                      className="text-white"
                      href=" https://wa.me/557196951555?text=Ol%C3%A1.%20Tudo%20bem%20Rafael?!%20Queria%20marcar%20uma%20consulta!%20Qual%20seria%20sua%20disponibilidade%3F"
                      target="_blank"
                    >
                      Whatsapp
                    </Link>
                    <Globe className="text-white" />
                  </Button>
                </div>
              </div>
              <Image
                data-aos="flip-left"
                src="/PerroneAbout.svg"
                width={442}
                height={442}
                alt="Imagem About"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

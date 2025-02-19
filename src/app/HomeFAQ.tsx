import { Button } from "@/components/ui/button";
import { faqData } from "@/data/v-data";
import { Globe } from "lucide-react";
import Link from "next/link";

export function HomeFAQ() {
  return (
    <section className="max-w-[1240px] mx-auto px-6 lg:px-0 py-12 mt-20" id="faq">
      <div className="flex flex-col lg:flex-row items-center lg:items-center justify-around gap-12">
        <div className="flex flex-col gap-4 text-center lg:text-left max-w-[650px]" data-aos="flip-up">
          <h1 className="font-bold text-[#404040] text-3xl lg:text-[50px] leading-10">
            Perguntas <span className="text-[#1F63AA]">frequentes</span> feitas pelos meus <span className="text-[#1F63AA]">pacientes</span>
          </h1>
          <p className="text-[#404040] text-base">Mais perguntas? Me chama no WhatsApp!</p>
          <div className="flex items-center justify-center lg:justify-start">
          <Button variant="tertiary" className="flex items-center gap-2">
            <Link href=" https://wa.me/557196951555?text=Ol%C3%A1.%20Tudo%20bem%20Rafael?!%20Queria%20marcar%20uma%20consulta!%20Qual%20seria%20sua%20disponibilidade%3F" target="_blank">Whatsapp</Link>
            <Globe className="text-white" />
          </Button>
          </div>
        </div>
        <article className="w-full">
          {faqData.map((item, index) => {
            const isMiddle = index === Math.floor(faqData.length / 2);

            return (
              <div key={index} className="mt-6" data-aos="zoom-out-left">
                <div className={`${isMiddle ? "bg-gradient-to-b from-[#1F63AA] via-[#003D82] to-[#00424f] text-white" : "bg-white text-[#404040] border xl:ml-6 "} w-full py-2 px-4 rounded-[20px] border-black/30`}>
                  <div className="flex flex-col lg:flex-row items-start lg:items-center justify-around gap-[18px]">
                    <div className={`p-5 rounded-[10px] ${isMiddle ? "bg-white text-[#1F63AA]" : "bg-gradient-to-b from-[#1F63AA] via-[#003D82] to-[#00424f] text-white"}`}>
                      <h1 className="font-bold text-3xl lg:text-[40px]">{item.number}</h1>
                    </div>
                    <div className="flex flex-col gap-3 w-full">
                      <h1 className={`text-lg lg:whitespace-nowrap font-semibold ${isMiddle ? "text-white" : "text-[#404040]"}`}>{item.title}</h1>
                      <p className={`text-sm font-light ${isMiddle ? "text-gray-200" : "text-[#606060]"}`}>{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

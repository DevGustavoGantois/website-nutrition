import { Button } from "@/components/ui/button";
import { contactData } from "@/data/v-data";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function HomeContact() {
    return (
        <section className="max-w-[1240px] mx-auto p-4 lg:p-0 mt-20" id="contato">
            <div className="w-full p-8 lg:px-20 lg:py-40 bg-gradient-to-r from-[#1F63AA] via-[#003D82] to-[#1F63AA] rounded-2xl lg:rounded-[40px] relative overflow-hidden" data-aos="fade-up">
                <div className="absolute inset-0 z-0">
                    <Image 
                        src="/BgContact.svg" 
                        height={1240} 
                        width={1000} 
                        alt="Contato" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="relative z-10 flex flex-col justify-center items-center gap-[15px] text-center">
                    {contactData.map((item, index) => (
                        <div key={index}>
                            <h1 className="text-white text-2xl lg:text-[50px] font-bold" data-aos="fade-up">
                                {item.title}
                            </h1>
                            <p className="text-white text-base max-w-[475px] mt-8 mb-[26px]" data-aos="zoom-in">
                                {item.description}
                            </p>
                            <div className="flex items-center justify-center">
                            <Button className="flex items-center justify-center ml-0 transition-all duration-700 hover:ml-6 gap-4 font-semibold text-[#404040] text-xl xl:text-[24px]">
                                <Link href=" https://wa.me/557196951555?text=Ol%C3%A1.%20Tudo%20bem%20Rafael?!%20Queria%20marcar%20uma%20consulta!%20Qual%20seria%20sua%20disponibilidade%3F" target="_blank">
                                    {item.btnText}
                                </Link>
                                <div className="bg-[#1F63AA] px-6 py-2 rounded-[8px]">
                                    <MessageCircle size={32} className="text-white" />
                                </div>
                            </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

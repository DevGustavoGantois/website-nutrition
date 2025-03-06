"use client";
import { plansData } from "@/data/v-data";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { CheckCircle } from "lucide-react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

export function HomePlans() {
    return (
        <section className="max-w-[1240px] mx-auto p-8 lg:p-0 mt-20 lg:mt-24" id="planos">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-3xl lg:text-[40px] font-bold bg-gradient-to-r from-[#1F63AA] to-[#00424F] bg-clip-text text-transparent h-[50px]">Planos</h1>
                <p className="text-center text-base lg:text-[20px] text-[#404040] mb-12">Nutrição sob medida para você alcançar sua melhor versão!</p>
            </div>
            <Swiper 
                spaceBetween={20} 
                slidesPerView={1} 
                loop={true} 
                autoplay={{ delay: 10000, disableOnInteraction: false }}
                modules={[Autoplay, Pagination]}
                breakpoints={{ 768: {slidesPerView: 2}, 1024: { slidesPerView: 3 } }}
            >
                {plansData.map((item, index) => (
                    <SwiperSlide key={index} className="border border-blue-500 rounded-3xl shadow-lg flex flex-col justify-between bg-white transition-all duration-300 hover:shadow-xl">
                        <div>
                            <div className="bg-gradient-to-r from-[#1F63AA] to-[#00424F] p-4 rounded-t-3xl text-white text-center lg:text-start">
                                <h1 className="font-semibold text-center lg:text-start text-3xl">{item.number}</h1>
                            </div>
                            <div className="p-6">
                                <h2 className="text-black text-center lg:text-start font-semibold text-2xl mb-2">{item.title}</h2>
                                <p className="font-medium text-center lg:text-start max-w-[750px] mb-4 text-gray-700">{item.pretitle}</p>
                                <div className="flex flex-col gap-4 mb-6">
                                    {item.plan.map((benefit, i) => (
                                        <div key={i} className="flex items-center gap-3">
                                            <div className="w-6 h-6 flex items-center justify-center text-[#1F63AA] rounded-full">
                                                <CheckCircle size={20} />
                                            </div>
                                            <p className="text-black font-light text-sm">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-center group">
                                    <button className="w-full lg:w-[80%] p-4 bg-[#1F63AA] text-white text-center font-semibold rounded-3xl transition-all duration-700 hover:bg-transparent group-hover:text-[#1F63AA] group-hover:border border-blue-500 group-hover:-translate-y-2">
                                        <Link target="_blank" href="https://wa.me/557196951555?text=Ol%C3%A1.%20Tudo%20bem%20Rafael?!%20Queria%20marcar%20uma%20consulta!%20Qual%20seria%20sua%20disponibilidade%3F">{item.btnText}</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
}

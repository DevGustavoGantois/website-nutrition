"use client";
import { testimonialsData } from "@/data/v-data";
import { ArrowLeftCircle, ArrowRightCircle, Star, UserCircle } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export function HomeTestimonials() {
  return (
    <section className="max-w-[1240px] mx-auto p-8 lg:p-0 mt-20" id="depoimentos">
      {testimonialsData.map((item, index) => (
        <div key={index}>
          <div className="flex flex-col justify-center items-center gap-5 text-center">
            <h1 className="text-[#404040] text-3xl font-bold lg:text-[50px]" data-aos="flip-down">
              {item.title}
            </h1>
            <p className="text-base text-[#404040] mb-6 max-w-[700px]" data-aos="fade-up">
              {item.description}
            </p>
          </div>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{ nextEl: ".button-next", prevEl: ".button-prev" }}
            className="my-10"
          >
            {item.testimonials.map((testimonial, i) => (
              <SwiperSlide
                key={i}
                className={`p-6 lg:p-8 shadow-md rounded-2xl border border-black/50 ${
                  i % 2 === 0 ? "bg-gradient-to-r from-[#1F63AA] via-[#003D82] to-[#1F63AA] text-white" : "bg-white"
                }`}
              >
                <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <h2 className="font-semibold text-lg">{testimonial.condition}</h2>
                  <p className="mt-2">{testimonial.testimonial}</p>
                  <div className="mt-4 flex flex-col items-center lg:items-start w-full">
                    <div className="border-t w-full mt-5 pt-3">
                      <div className="flex items-center justify-center lg:justify-start gap-2">
                        <UserCircle className="text-current" size={24} />
                        <h3 className="font-semibold">{testimonial.name}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mt-2">
                      {Array(5)
                        .fill(0)
                        .map((_, index) => (
                          <Star key={index} className={`${i % 2 === 0 ? "text-white" : "text-yellow-500"}`} />
                        ))}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex justify-center lg:justify-start gap-4 mt-4">
            <button className="button-prev bg-gradient-to-r from-[#1F63AA] via-[#003D82] to-[#1F63AA] text-white p-2 rounded-lg hover:scale-[0.9] transition-all duration-700">
              <ArrowLeftCircle size={30} />
            </button>
            <button className="button-next bg-gradient-to-r from-[#1F63AA] via-[#003D82] to-[#1F63AA] text-white p-2 rounded-lg hover:scale-[0.9] transition-all duration-700">
              <ArrowRightCircle size={30} />
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

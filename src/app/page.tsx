"use client";
import { CarouselSlide } from "@/components/c-slide-carousel";
import { HomeAbout } from "./s-about";
import { HomeContact } from "./s-contact";
import { HomeHero } from "./s-hero";
import { HomeServices } from "./s-services";
import { HomeFAQ } from "./HomeFAQ";
import { HomeTestimonials } from "./s-testimonials";
import { HomeLocation } from "./s-location";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Navbar } from "./global/navbar";
import { Footer } from "./global/footer";
import { HomePlans } from "./s-plans";

export default function Page() {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });


    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main>
      {isLoading ? (
        <div className="flex items-center justify-center min-h-screen">
          <span className="loader"></span>
        </div>
      ) : (
        <>
          <Navbar />
          <HomeHero />
          <HomeServices />
          <HomePlans />
          <CarouselSlide />
          <HomeAbout />
          <HomeFAQ />
          <HomeTestimonials />
          <HomeLocation />
          <HomeContact />
          <Footer />
        </>
      )}
    </main>
  );
}

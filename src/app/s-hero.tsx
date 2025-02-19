import Image from "next/image";


export function HomeHero() {
    return (
        <section className="-z-10" id="home">
            <div className="hidden lg:flex">
            <div data-aos="zoom-in"
        className="absolute flex flex-col items-center justify-center w-full h-[950px] lg:h-[1170px] -z-50 -top-40 bg-[left-60%] lg:bg-[center]"
        style={{
          backgroundImage: "url(/PerroneBackground.svg)",
          backgroundSize: "cover",
          backgroundPosition: "calc(40%) center",
        }}
      />
            </div>
            <div className="flex lg:hidden items-center justify-center mt-20 p-12" data-aos="zoom-in">
              <Image src="/Logo.svg" width={500} height={400} alt="Logo Mobile" />
            </div>
        </section>
    )
}
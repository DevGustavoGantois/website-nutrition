import Image from "next/image";

export function HomeLocation() {
    return (
        <section className=" mt-40 overflow-hidden bg-white p-8" id="localização">
            <div className="flex flex-col justify-center items-center ">
                <h1 className="text-black text-3xl font-semibold text-center mb-4">Localização do <span className="text-[#1F63AA]">Consultório</span></h1>
                <p className="text-center text-black/80">Localizado em Rua Magno da Purificação / Lauro de Freitas / Lote 62 / Santo Antônio</p>
                <div className="mb-8">
                    <Image src="/map.svg" height={1400} width={1400} alt="" />
                </div>
            </div>
        </section>
    )
}
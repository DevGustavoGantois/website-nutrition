import Link from "next/link";

export function HomeLocation() {
  return (
    <section className="mt-40 overflow-hidden bg-white p-8" id="localização">
      <div className="flex flex-col items-center justify-center">
        <h1 className="mb-4 text-center text-3xl font-semibold text-black">
          Localização do <span className="text-[#1F63AA]">Consultório</span>
        </h1>

        <Link
          href="https://www.google.com/maps/place/Lauro+de+Freitas,+BA"
          target="_blank"
          className="text-center text-black/80 transition-all duration-700 hover:scale-[1.1] hover:text-[#1F63AA] hover:underline"
        >
          Localizado em Lauro de Freitas / Camaçari / Salvador
        </Link>

        <div className="mt-8 w-full max-w-8xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62235.864604476075!2d-38.36831681205328!3d-12.85996322244308!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7163e1a53f73969%3A0xdd9b017baf4d24c2!2sLauro%20de%20Freitas%2C%20BA!5e0!3m2!1spt-BR!2sbr!4v1740503369545!5m2!1spt-BR!2sbr"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full rounded-lg shadow-lg"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

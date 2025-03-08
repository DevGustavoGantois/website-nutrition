import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import { Skeleton } from "@/components/ui/skeleton";
import { servicesData } from "@/data/v-data";
import Image from "next/image";

export function HomeServices() {
  return (
    <section className="max-w-[1240px] mx-auto p-8 lg:p-0 relative mt-20 md:mt-[100px] lg:mt-[700px]" id="serviços">
      {servicesData.map((item, index) => (
        <div
          key={index}
          className="flex items-center lg:items-start justify-center lg:justify-start flex-col mb-8"
        >
          <div className="text-2xl text-center lg:text-start lg:text-[40px] font-bold bg-gradient-to-r from-[#1F63AA] to-[#00424F] bg-clip-text text-transparent max-w-[669px] lg:leading-10 h-[90px] mt-10">
            {item.title}
          </div>
          <p className="text-center text-base lg:text-[20px] lg:text-start text-[#404040] max-w-[539px]" data-aos="fade-up">
            {item.description}
          </p>  
        </div>
      ))}
      <BentoGrid className="max-w-full mx-auto mt-20 lg:mt-64">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.titleService}
            description={item.descriptionService}
            header={item.header}
            image={item.image}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </section>
  );
}

const items = [
    {
        titleService: "Obesidade pré-clinica e obesidade clínica",
        descriptionService:
          "Juntos, vamos elaborar um plano dietético que respeite suas necessidades nutricionais e seus gostos alimentares, proporcionando um tratamento equilibrado e sem sofrimento.",
        image: <Image width={400} height={400} src="/emagrecimentoImg.svg" alt="Emagrecimento" className="w-full h-auto" />,
        header: <Skeleton />,
      },
      {
        titleService: "Sarcopenia",
        descriptionService:
          "A perda de peso pode levar à sarcopenia, comprometendo a força e funcionalidade muscular. Para evitar isto, é essencial manter o treinamento físico e uma dieta rica em proteínas.",
        image: <Image width={300} height={400} src="/SarcopeniaImg.svg" alt="Saúde" className="w-full h-auto" />,
        header: <Skeleton />,
      },
      {
        titleService: "Performance",
        descriptionService:
          "Maximize seus resultados esportivos, a partir de um plano nutricional personalizado e que lhe oriente no consumo de alimentos estratégicos e quantidades adequadas ao seu desempenho físico e metabólico.",
        image: <Image width={400} height={400} src="/PerformaceImg.svg" alt="Performance" className="w-full h-auto" />,
        header: <Skeleton />,
      },
      {
        titleService: "Saúde",
        descriptionService:
          "Utilize a nutrição para favorecer seu bem-estar e prevenir doenças, com um plano alimentar voltado para melhoria de seus parâmetros de saúde.",
        image: <Image width={400} height={400} src="/saudeImg.svg" alt="Massa Muscular" className="w-full overflow-hidden h-1/2" />,
        header: <Skeleton />,
      },
      {
        titleService: "Massa Muscular",
        descriptionService:
          "Construa e fortaleça sua massa muscular. Um plano alimentar focado em seus objetivos como atleta no suporte de todas as etapas de treinamento, visando a otimização dos resultados.",
        image: <Image width={400} height={400} src="/bodybuildingImg.svg" alt="Bodybuilding" className="w-full h-auto" />,
        header: <Skeleton />,
      },
];

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
          <div className="text-2xl lg:text-[40px] font-bold bg-gradient-to-r from-[#1F63AA] to-[#00424F] bg-clip-text text-transparent h-[50px]" data-aos="fade-down">
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
        titleService: "Emagrecimento",
        descriptionService:
          "Juntos, vamos trabalhar em um plano que respeite suas necessidades nutricionais e ajude a perder peso de forma equilibrada e sem sofrimento.",
        image: <Image width={400} height={400} src="/emagrecimentoImg.svg" alt="Emagrecimento" className="w-full h-auto" />,
        header: <Skeleton />,
      },
      {
        titleService: "Saúde",
        descriptionService:
          "Alimente-se de maneira que favoreça seu bem-estar e previna doenças. Um plano nutricional focado na saúde garante que você esteja nutrido corretamente.",
        image: <Image width={400} height={400} src="/saudeImg.svg" alt="Saúde" className="w-full h-auto" />,
        header: <Skeleton />,
      },
      {
        titleService: "Performance",
        descriptionService:
          "Maximize seus resultados esportivos comigo. Com um plano alimentar personalizado, você atingirá novos níveis de desempenho.",
        image: <Image width={400} height={400} src="/PerformaceImg.svg" alt="Performance" className="w-full h-auto" />,
        header: <Skeleton />,
      },
      {
        titleService: "Massa Muscular",
        descriptionService:
          "Construa e fortaleça seus músculos com o plano alimentar ideal. Através de uma alimentação balanceada e focada, podemos otimizar a recuperação muscular e a força.",
        image: <Image width={400} height={400} src="/massa-muscularImg.svg" alt="Massa Muscular" className="w-full h-auto" />,
        header: <Skeleton />,
      },
      {
        titleService: "Bodybuilding",
        descriptionService:
          "Desenvolvemos planos detalhados que vão te ajudar a ganhar massa muscular de forma eficiente, melhorar a recuperação e alcançar o físico desejado para competições.",
        image: <Image width={400} height={400} src="/bodybuildingImg.svg" alt="Bodybuilding" className="w-full h-auto" />,
        header: <Skeleton />,
      },
];

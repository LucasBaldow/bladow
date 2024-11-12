interface SolutionCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  title,
  description,
  imageSrc,
}) => (
  <div className="relative overflow-hidden rounded-lg shadow-lg w-[245px] h-[293px]">
    <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
      <h3 className="text-white text-lg font-bold mb-1">{title}</h3>
      <p className="text-white text-sm">{description}</p>
    </div>
  </div>
);

export default function SolutionsPage() {
  const solutions = [
    {
      title: "ECG Life",
      description: "Laudos de eletrocardiograma (ECG) à distância",
      imageSrc: "/card1.png",
    },
    {
      title: "EYE Life",
      description:
        "Apoio diagnóstico em Tomografia de Coerência Óptica (OCT) e retinografia",
      imageSrc: "/card2.png",
    },
    {
      title: "DOC Life",
      description: "Prontuário eletrônico para profissionais de saúde",
      imageSrc: "/card3.png",
    },
  ];

  return (
    <div className="container mx-auto px-20 py-20">
      <h2 className="text-[16px] font-semibold mb-16 mt-8 ml-28">Soluções</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0.1 max-w-[1200px] mx-20">
        {solutions.map((solution, index) => (
          <div className="flex justify-center">
            <SolutionCard key={index} {...solution} />
          </div>
        ))}
      </div>
    </div>
  );
}

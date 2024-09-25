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
  <div className="relative overflow-hidden rounded-lg shadow-lg h-[400px]">
    {" "}
    {/* Ajustando a altura total do card */}
    <img
      src={imageSrc}
      alt={title}
      className="w-full h-[px] object-cover" // Diminuindo a altura da imagem
    />
    <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
      <h3 className="text-white text-lg font-bold mb-1">{title}</h3>{" "}
      {/* Diminuindo a fonte do título */}
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
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-8 text-left">Soluções</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((solution, index) => (
          <SolutionCard key={index} {...solution} />
        ))}
      </div>
    </div>
  );
}

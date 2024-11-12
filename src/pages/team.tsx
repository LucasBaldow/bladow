// Definindo a interface Executive
interface Executive {
  name: string;
  title: string;
  description: string;
  image: string;
}

// Definindo a constante executives
const executives: Executive[] = [
  {
    name: "João Pedro Cancellieri",
    title: "CEO",
    description: "Médico",
    image: "./6.png",
  },
  {
    name: "Fabricio Vassallo",
    title: "Cardiologista",
    description: "Eletrofisiologista",
    image: "./2.png",
  },
  {
    name: "Bruno Valbon",
    title: "Oftalmologista",
    description: "PhD",
    image: "./4.png",
  },
  {
    name: "Rosane Mageste",
    title: "Médica",
    description: "Gestora",
    image: "./1.png",
  },
  {
    name: "Gabriel Zago",
    title: "Engenharia Elétrica",
    description: "Deep Learning",
    image: "./5.png",
  },
  {
    name: "Rodolfo Dalvi",
    title: "Engenharia Elétrica",
    description: "Deep Learning",
    image: "./3.png",
  },
];

// Componente ExecutiveTeam
export default function ExecutiveTeam() {
  return (
    <div className="container mx-auto mt-20 px-20 py-2">
      <h1 className="text-[16px] font-semibold mb-10 ml-24">Equipe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {executives.map((exec: Executive, index: number) => (
          <div key={index} className="flex flex-col items-center text-center">
            <img
              src={exec.image}
              alt={exec.name}
              width={180}
              height={160}
              className="mb-0"
            />
            <h3 className="font-bold text-[15px]">{exec.name}</h3>
            <p className="text-blue-600">{exec.title}</p>
            <p className="text-gray-600">{exec.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function AwardsPage() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-8">Premiações</h1>

      <div className="space-y-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Programa Centelha ES - FINEP/FAPES 07/2019
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            https://programacentelha.com.br/es/#es
          </p>
          <p className="mb-4">
            Deep Learning em cardiologia: reconhecimento inteligente de
            isquemias
          </p>
          <div className="flex flex-wrap gap-4">
            <img
              src="/Frame 11.png" // Ajuste para o nome correto da imagem
              alt="Logo do Programa Centelha"
              width={750} // Aumenta a largura
              height={60} // Aumenta a altura
              className="object-contain"
            />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">
            Spin Off II - FAPES 16/2022
          </h2>
          <p className="text-sm text-gray-500 mb-4">https://fapes.es.gov.br</p>
          <p className="mb-4">
            Classificação de imagens de OCT utilizando Deep Learning
          </p>
          <div className="flex gap-4">
            <img
              src="/Frame 11(1).png" // Ajuste para o nome correto da imagem
              alt="Logo do Spin Off II"
              width={270} // Aumenta a largura
              height={60} // Aumenta a altura
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

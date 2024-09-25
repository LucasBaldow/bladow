export default function ECGLifeLanding2() {
  return (
    <div className="flex flex-col items-center mt-10">
      {/* Bloco branco */}
      <div className="relative w-full max-w-4xl bg-white rounded-lg shadow-md overflow-hidden flex flex-col items-center justify-center mx-auto">
        {/* Imagem dentro do bloco */}
        <img
          src="/MOCK UP SITE 1.png" // Substitua com o nome do arquivo da imagem
          alt="Imagem acima do bloco"
          className="w-full max-w-[380px] h-auto" // Diminuindo a largura máxima para 500px
        />

        <div className="absolute inset-0 opacity-20">
          <img
            src="/ecg-background.svg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Conteúdo dentro do bloco branco */}
        <div className="relative z-10 text-black text-center mt-6 px-6 pb-6 flex flex-col items-center">
          {/* Título e subtítulo na mesma linha */}
          <div className="flex justify-center items-center mb-4 space-x-4">
            <h1 className="text-2xl font-bold">ECG Life</h1>
            <p className="text-sm">
              Laudos de eletrocardiograma (ECG) à distância
            </p>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <div className="max-w-[180px]">
              <h2 className="text-lg font-semibold mb-1">
                Tire uma foto do ECG
              </h2>
              <p className="text-xs">
                Tire uma foto do eletrocardiograma (ECG) através de um
                smartphone
              </p>
            </div>
            <div className="max-w-[180px]">
              <h2 className="text-lg font-semibold mb-1">Laudo</h2>
              <p className="text-xs">
                Receba o laudo em até 15 minutos (tempo médio) ou 4 horas
                (exames eletivos)
              </p>
            </div>
            <div className="max-w-[180px]">
              <h2 className="text-lg font-semibold mb-1">Salve vidas</h2>
              <p className="text-xs">
                Tome as melhores decisões clínicas com base em laudos corretos
              </p>
            </div>
          </div>

          <button className="mt-6 bg-gray-200 text-black hover:bg-gray-300 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">
            Comece agora
          </button>
        </div>
      </div>
    </div>
  );
}

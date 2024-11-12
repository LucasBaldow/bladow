export default function ECGLifeLanding() {
  return (
    <div className="flex justify-center mt-32">
      <div className="relative w-full max-w-[808px] h-[415px] bg-white rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-[url('/ecg-background.svg')] opacity-20"></div>

        {/* Adicionando a imagem dentro do retângulo */}
        <div className="absolute inset-0 flex justify-center items-center">
          <img
            src="/exame.png"
            alt=""
            className="max-h-full max-w-full object-contain"
          />
        </div>

        <div className="relative z-10 p-6 text-white flex flex-col justify-between h-full">
          <div className="flex justify-left items-center">
            <h1 className="text-[28px] font-bold">ECG Life</h1>
            <p className="text-[18px] ml-6 mt-3">
              Laudos de eletrocardiograma (ECG) à distância
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-16">
            <div>
              <h2 className="text-[20px] font-semibold mb-2">
                Tire uma foto do ECG
              </h2>
              <p className="text-[13px]">
                Tire uma foto do eletrocardiograma (ECG) através de um
                smartphone
              </p>
            </div>
            <div>
              <h2 className="text-[20px] font-semibold mb-2">Laudo</h2>
              <p className="text-[13px]">
                Receba o laudo em até 15 minutos (tempo médio) ou 4 horas
                (exames eletivos)
              </p>
            </div>
            <div>
              <h2 className="text-[20px] font-semibold mb-2">Salve vidas</h2>
              <p className="text-[13px]">
                Tome as melhores decisões clínicas com base em laudos corretos
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-4">
            <button className="bg-white text-black font-bold hover:bg-gray-100 px-4 py-2 rounded-md text-sm transition-colors duration-200">
              Comece agora
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

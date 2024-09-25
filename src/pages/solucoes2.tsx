export default function SolutionsPage2() {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto grid grid-cols-2 gap-8 mt-8">
        {" "}
        {/* Adicionando mt-8 para mover os componentes para baixo */}
        <GridItem
          title="Health Care"
          description="Decisões clínicas assertivas e fundamentadas em evidências científicas"
        />
        <GridItem
          title="Software"
          description="Fluxo de dados relevantes em saúde"
        />
        <GridItem
          title="Science"
          description="Publicações científicas através de fluxo de dados contidos no software"
        />
        <GridItem
          title="Social"
          description="A ciência como instrumento de transformação social"
        />
      </div>
    </div>
  );
}

function GridItem({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}

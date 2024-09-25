import { useState } from "react";
import { Menu, ChevronDown } from "lucide-react"; // Importando o ícone da seta para baixo

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false); // Estado para o dropdown de idioma
  const [selectedLang, setSelectedLang] = useState<string>("PT"); // Estado para o idioma selecionado

  const menuItems = [
    { name: "Soluções", href: "/solucoes" },
    { name: "Equipe", href: "/equipe" },
    { name: "Premiações", href: "/premiacoes" },
    { name: "Contato", href: "/contato" },
  ];

  const languages: string[] = ["PT", "EN", "ES"]; // Lista de idiomas disponíveis

  const handleLangSelect = (lang: string) => {
    setSelectedLang(lang); // Atualiza o idioma selecionado
    setIsLangOpen(false); // Fecha o dropdown após selecionar
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {" "}
          {/* Mudança aqui */}
          {/* Logo ECG Life */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="/logo oficial 2.png"
                alt="ECG Life Logo"
                className="h-10 w-auto"
              />
            </a>
          </div>
          {/* Flexbox para centralizar menu e botão Login */}
          <div className="hidden md:flex items-center mx-auto space-x-4">
            {" "}
            {/* Usei mx-auto para centralizar */}
            <nav className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </a>
              ))}

              {/* Dropdown de idiomas */}
              <div className="relative">
                <button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className="flex items-center px-3 py-2 bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-md text-sm font-medium text-gray-600"
                >
                  {selectedLang}
                  <ChevronDown className="ml-2 h-4 w-4" />
                </button>
                {isLangOpen && (
                  <div className="absolute right-0 mt-2 w-28 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="options-menu"
                    >
                      {languages.map((lang) => (
                        <a
                          key={lang}
                          onClick={() => handleLangSelect(lang)} // Define o idioma selecionado
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                          role="menuitem"
                        >
                          {lang}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </nav>
            {/* Botão "Login" */}
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Login
            </button>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Abrir menu</span>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-600 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
              >
                {item.name}
              </a>
            ))}
            <button className="w-full mt-2 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

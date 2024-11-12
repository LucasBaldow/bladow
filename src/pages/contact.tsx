export default function ContactPage() {
  return (
    <div className="max-w-xl mx-auto p-4 mt-6 space-y-2">
      <h1 className="text-[16px] font-semibold mt-10 mb-3">Contato</h1>

      <div className="space-y-1 shadow-md rounded-md p-4">
        <h2 className="text-[15px] font-semibold">Telefone</h2>
        <p className="text-[14px]">+ 55 27 9647-6030</p>
      </div>

      <div className="space-y-1 shadow-md rounded-md p-4">
        <h2 className="text-[15px] font-semibold">Mídias Sociais</h2>
        <ul className="space-y-1 text-[14px]">
          <li>instagram.com/cubolife.science</li>
          <li>linkedin.com/company/cubo-life</li>
          <li>facebook.com/cubolife.science</li>
        </ul>
      </div>

      <div className="space-y-2 shadow-lg rounded-md p-4">
        <h2 className="text-[15px] font-semibold">Formulário</h2>
        <form className="space-y-1">
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-xs font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                id="name"
                className="mt-1 block w-full border-black rounded-md shadow-sm text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xs font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full border-black rounded-md shadow-sm text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="whatsapp"
                className="block text-xs font-medium text-gray-700"
              >
                WhatsApp
              </label>
              <input
                id="whatsapp"
                className="mt-1 block w-full border-black rounded-md shadow-sm text-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-xs font-medium text-gray-700"
            >
              Assunto
            </label>
            <input
              id="subject"
              className="mt-1 block w-full border-black rounded-md shadow-sm text-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-xs font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full border-black rounded-md shadow-sm text-sm"
              rows={3}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-white text-black py-2 px-4 rounded-md text-sm"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

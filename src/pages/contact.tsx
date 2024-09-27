export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto p-4 space-y-8">
      <h1 className="text-2xl font-semibold">Contato</h1>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Telefone</h2>
        <p>+ 55 27 9647-6030</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Mídias Sociais</h2>
        <ul className="space-y-2">
          <li>instagram.com/cubolife.science</li>
          <li>linkedin.com/company/cubo-life</li>
          <li>facebook.com/cubolife.science</li>
        </ul>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Formulário</h2>
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nome
              </label>
              <input
                id="name"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                E-mail
              </label>
              <input
                id="email"
                type="email"
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="whatsapp"
              className="block text-sm font-medium text-gray-700"
            >
              WhatsApp
            </label>
            <input
              id="whatsapp"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-gray-700"
            >
              Assunto
            </label>
            <input
              id="subject"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Mensagem
            </label>
            <textarea
              id="message"
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm"
              rows={4}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

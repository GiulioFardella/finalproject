

const Footer = () => {
  return (
    <footer className="fixed bottom-0 w-full bg-gray-900 text-white text-sm py-6 px-4 md:px-12">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {/* Informazioni Aziendali */}
        <div>
          <h3 className="text-lg font-semibold">ZooVersee</h3>
          <p>Via Po 25/c, 00198 Roma</p>
          <p>Telefono: 06844971</p>
          <p>P.IVA: IT 02121111005</p>
          <p>C.F: 80078430586</p>
        </div>

        {/* Link Utili */}
        <div>
          <h3 className="text-lg font-semibold">Chi siamo</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Cosa facciamo</a></li>
            <li><a href="#" className="hover:underline">Dove interveniamo</a></li>
            <li><a href="#" className="hover:underline">Specie e habitat</a></li>
            <li><a href="#" className="hover:underline">Cosa puoi fare tu</a></li>
            <li><a href="#" className="hover:underline">Pandanews</a></li>
          </ul>
        </div>

        {/* Documentazione e Legale */}
        <div>
          <h3 className="text-lg font-semibold">Supporto</h3>
          <ul className="space-y-1">
            <li><a href="#" className="hover:underline">Area stampa</a></li>
            <li><a href="#" className="hover:underline">Lavora con noi</a></li>
            <li><a href="#" className="hover:underline">Newsletter</a></li>
            <li><a href="#" className="hover:underline">Termini e condizioni</a></li>
            <li><a href="#" className="hover:underline">Privacy policy</a></li>
            <li><a href="#" className="hover:underline">Configurazione Cookies</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold">Seguici</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-500">Facebook </a>
            <a href="#" className="hover:text-blue-400">Twitter </a>
            <a href="#" className="hover:text-pink-500">Instagram </a>
            <a href="#" className="hover:text-blue-700">Linkedin </a>
            <a href="#" className="hover:text-red-600">Youtube</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-6 text-center text-xs border-t border-gray-700 pt-4">
        <p> ZooVersee 2025 - Costruiamo un mondo in cui le persone possano vivere in armonia con la natura</p>
        <p className="text-gray-400">Web design: Giulio Fardella</p>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-4">As2Tel</h3>
          <p className="text-gray-400">
            42 rue de Maubeuge
            <br />
            75009 Paris
          </p>
          <p className="mt-4">
            <a href="mailto:contact@as2tel.fr" className="text-gray-400 hover:text-white">
              contact@as2tel.fr
            </a>
          </p>
          <p>
            <a href="tel:0123456789" className="text-gray-400 hover:text-white">
              01 23 45 67 89
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Liens rapides</h3>
          <ul className="space-y-2">
            <li><Link href="/a-propos" className="text-gray-400 hover:text-white">À propos</Link></li>
            <li><Link href="/services" className="text-gray-400 hover:text-white">Services</Link></li>
            <li><Link href="/tarifs" className="text-gray-400 hover:text-white">Tarifs</Link></li>
            <li><Link href="/bureautique" className="text-gray-400 hover:text-white">Bureautique</Link></li>
            <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Recommander</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-400 hover:text-white">Recommander As2Tel</a></li>
            <li><a href="#" className="text-gray-400 hover:text-white">Newsletters</a></li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-bold mb-4">Newsletter</h3>
          <form>
            <div className="flex">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-700 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-brand-primary text-white px-6 py-2 rounded-r-md hover:bg-brand-primary/90"
              >
                Je m&apos;abonne
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} As2Tel. Tous droits réservés. <Link href="/mentions-legales" className="hover:text-white">Mentions légales</Link></p>
      </div>
    </footer>
  );
};

export default Footer;

import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "As2Tel",
  description: "Vos ambassadeurs au téléphone",
};

const Header = () => {
  return (
    <header className="sticky top-0 bg-white shadow-md z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-2xl font-bold text-primary font-poppins">As2Tel</div>
        <div>
          <Link href="/" className="px-4 text-text hover:text-primary">Accueil</Link>
          <Link href="/as2tel-telesecretariat" className="px-4 text-text hover:text-primary">A Propos</Link>
          <Link href="/telesecretariat-1" className="px-4 text-text hover:text-primary">Services</Link>
          <Link href="/tarifs-telesecretariat" className="px-4 text-text hover:text-primary">Tarifs</Link>
          <Link href="/bureautique" className="px-4 text-text hover:text-primary">Bureautique</Link>
          <Link href="/contact" className="px-4 text-text hover:text-primary">Contact</Link>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => {
  return (
    <footer className="bg-footer-background text-footer-text pt-10 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">As2Tel</h3>
            <p>Vos ambassadeurs au téléphone.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Services</h3>
            <ul>
              <li><Link href="/accueil-telephonique" className="hover:text-primary">Accueil téléphonique</Link></li>
              <li><Link href="/gestion-agenda" className="hover:text-primary">Gestion d&apos;agenda</Link></li>
              <li><Link href="/service-apres-vente" className="hover:text-primary">Service après-vente</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Contact</h3>
            <p>Adresse: 123 Rue de Paris, 75001 Paris</p>
            <p>Email: contact@as2tel.fr</p>
            <p>Téléphone: 01 23 45 67 89</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-4 font-poppins">Suivez-nous</h3>
            {/* Social media icons would go here */}
          </div>
        </div>
        <div className="text-center mt-8 border-t border-gray-700 pt-4">
          <p>&copy; 2024 As2Tel. Tous droits réservés. | <Link href="/politique-de-confidentilalite" className="hover:text-primary">Politique de confidentialité</Link></p>
        </div>
      </div>
    </footer>
  );
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="font-roboto antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            As2Tel
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-600 hover:text-brand-primary">Accueil</Link>
          <Link href="/a-propos" className="text-gray-600 hover:text-brand-primary">À propos</Link>
          <div className="relative group">
            <button className="text-gray-600 hover:text-brand-primary">Services</button>
            <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-md mt-2 py-2 w-48">
              <Link href="/telesecretariat-medical" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Télésecrétariat Médical</Link>
              <Link href="/secretariat-juridique" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Secrétariat Juridique</Link>
              <Link href="/secretariat-agence-immobilier" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Agence Immobilière</Link>
              <Link href="/tpe" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">TPE</Link>
            </div>
          </div>
          <Link href="/tarifs" className="text-gray-600 hover:text-brand-primary">Tarifs</Link>
          <Link href="/bureautique" className="text-gray-600 hover:text-brand-primary">Bureautique</Link>
          <Link href="/contact" className="text-gray-600 hover:text-brand-primary">Contact</Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <a href="tel:0123456789" className="text-gray-600">01 23 45 67 89</a>
          <a href="mailto:contact@as2tel.fr" className="text-gray-600">contact@as2tel.fr</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4">
          <nav className="flex flex-col items-center space-y-4">
            <Link href="/" className="text-gray-600 hover:text-brand-primary">Accueil</Link>
            <Link href="/a-propos" className="text-gray-600 hover:text-brand-primary">À propos</Link>
            <Link href="/telesecretariat-medical" className="text-gray-600 hover:text-brand-primary">Télésecrétariat Médical</Link>
            <Link href="/secretariat-juridique" className="text-gray-600 hover:text-brand-primary">Secrétariat Juridique</Link>
            <Link href="/secretariat-agence-immobilier" className="text-gray-600 hover:text-brand-primary">Agence Immobilière</Link>
            <Link href="/tpe" className="text-gray-600 hover:text-brand-primary">TPE</Link>
            <Link href="/tarifs" className="text-gray-600 hover:text-brand-primary">Tarifs</Link>
            <Link href="/bureautique" className="text-gray-600 hover:text-brand-primary">Bureautique</Link>
            <Link href="/contact" className="text-gray-600 hover:text-brand-primary">Contact</Link>
            <div className="flex flex-col items-center space-y-2 mt-4">
              <a href="tel:0123456789" className="text-gray-600">01 23 45 67 89</a>
              <a href="mailto:contact@as2tel.fr" className="text-gray-600">contact@as2tel.fr</a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;

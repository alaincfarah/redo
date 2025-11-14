"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function TpePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`Message envoyé:\nNom: ${name}\nEmail: ${email}\nMessage: ${message}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Télésecrétariat TPE
          </h1>
          <p className="text-xl">
            Le Télésecrétariat qui répond à vos besoins
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="md:col-span-2">
            <h2 className="text-3xl font-heading font-bold mb-6">Un service sur-mesure pour votre entreprise</h2>
            <p className="text-lg text-gray-600 mb-4">
              Nos secrétaires répondront aux appels de vos correspondants en votre nom et selon vos consignes et instructions.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Grâce à notre logiciel de remontée de fiches, vous pouvez visualiser en temps réel les consignes et votre agenda, garantissant un service personnalisé et efficace.
            </p>

            <h3 className="text-2xl font-heading font-bold mb-4">Vos avantages</h3>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-600">
              <li>30 jours d’essai gratuit</li>
              <li>Sans engagement</li>
              <li>Adaptation de nos secrétaires à vos instructions</li>
              <li>Monitoring en temps réel</li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-heading font-bold mb-6 text-center">Contactez-nous</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Nom</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border rounded-md"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border rounded-md"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 border rounded-md"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-brand-accent text-white px-6 py-3 rounded-md font-bold hover:bg-brand-accent/90"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Prêt à simplifier votre quotidien ?</h2>
          <p className="text-xl text-gray-600 mb-8">Profitez de notre essai gratuit de 30 jours.</p>
          <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
            Démarrer l&apos;essai gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

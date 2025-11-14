import Link from "next/link";

export default function RealEstatePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Permanence téléphonique pour les agences immobilières
          </h1>
          <p className="text-xl">
            Ne manquez plus aucune opportunité de vente ou de location.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Un service adapté à votre agence</h2>
              <p className="text-lg text-gray-600 mb-4">
                Nos secrétaires répondent comme si elles faisaient partie de votre agence, en respectant vos consignes, et relayent les messages immédiatement. Elles deviennent une extension commerciale de votre équipe.
              </p>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Accueil téléphonique personnalisé.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Service bilingue (anglais) inclus dans tous les forfaits.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Qualité de service et réduction des coûts.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Aucune contrainte contractuelle, résiliation libre et gratuite.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-80 w-full rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="text-center">1. Remplissez le formulaire</div>
            <div className="text-center">2. Contact sous 2h</div>
            <div className="text-center">3. Numéro dédié & transfert</div>
            <div className="text-center">4. Reprise des appels</div>
            <div className="text-center">5. Offre test 30 jours</div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-6">Tarification simple et transparente</h2>
          <p className="text-5xl font-bold text-brand-primary mb-4">49€/mois</p>
          <p className="text-xl text-gray-600 mb-8">Sans frais d’installation ni engagement.</p>
          <Link href="/tarifs" className="text-brand-primary font-bold">
            Voir tous les tarifs
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Ne perdez plus de prospects</h2>
          <p className="text-xl text-gray-600 mb-8">Testez notre service gratuitement pendant 30 jours.</p>
          <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
            Démarrer l&apos;essai gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

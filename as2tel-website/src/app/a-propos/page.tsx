import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Votre image commence au téléphone.
            </h1>
            <p className="text-xl text-gray-600">
              Chez As2Tel, nous transformons chaque appel en opportunité.
            </p>
            <div className="mt-8">
              <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
                Demandez votre essai gratuit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Commitments Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Nos engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-bold mb-4">Accueil humain et professionnel</h3>
              <p className="text-gray-600">Une maîtrise de la communication téléphonique pour une satisfaction client garantie.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Réponse personnalisée & rapide</h3>
              <p className="text-gray-600">Nous nous adaptons à vos consignes pour un service sur-mesure.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Suivi transparent et statistiques</h3>
              <p className="text-gray-600">Gardez le contrôle sur votre consommation et vos performances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Pourquoi nous choisir ?</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start"><span className="text-brand-primary mr-3">&#10003;</span>Sans engagement</li>
                <li className="flex items-start"><span className="text-brand-primary mr-3">&#10003;</span>30 jours d’essai gratuit</li>
                <li className="flex items-start"><span className="text-brand-primary mr-3">&#10003;</span>Remboursement si non satisfait</li>
                <li className="flex items-start"><span className="text-brand-primary mr-3">&#10003;</span>Services multilingues</li>
                <li className="flex items-start"><span className="text-brand-primary mr-3">&#10003;</span>Conformité RGPD</li>
              </ul>
            </div>
            <div className="bg-gray-200 h-80 w-full rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* Key Figures Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Nos chiffres clés</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl font-bold text-brand-primary">98%</p>
              <p className="text-gray-600">des appels pris en moins de 5 sonneries</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-primary">&lt; 2h</p>
              <p className="text-gray-600">pour activer votre compte</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-primary">350+</p>
              <p className="text-gray-600">clients actifs</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-brand-primary">100%</p>
              <p className="text-gray-600">de transparence sur la facturation</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Ce que disent nos clients</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">&quot;Nous avons réduit nos appels manqués de 80%.&quot;</p>
              <p className="mt-4 font-bold">- Cabinet médical</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 italic">&quot;Professionnels, disponibles, et flexibles.&quot;</p>
              <p className="mt-4 font-bold">- Agence immobilière</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">30 jours gratuits. Aucun engagement. Aucune surprise.</h2>
          <div className="mt-8 space-x-4">
            <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
              Demander mon essai gratuit
            </Link>
            <Link href="/contact" className="bg-white text-brand-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

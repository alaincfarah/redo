import Link from "next/link";

export default function LegalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Permanence téléphonique pour les professions juridiques
          </h1>
          <p className="text-xl">
            Un service d&apos;accueil professionnel pour avocats, notaires et professionnels du droit.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Nos fonctionnalités clés</h2>
              <ul className="space-y-4 text-lg text-gray-600">
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Accueil téléphonique personnalisé selon les consignes du cabinet.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Prise de RDV en ligne disponible 24/7 avec accès à l’agenda en temps réel.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Service bilingue (anglais) inclus sans surcoût.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-brand-primary mr-3">&#10003;</span>
                  <span>Transmission des messages en temps réel par SMS ou email.</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-200 h-80 w-full rounded-lg"></div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Mise en place simple et rapide</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-bold text-lg mb-2">Activation via formulaire</h3>
              <p>Remplissez le formulaire et un conseiller vous appelle sous deux heures.</p>
            </div>
            <div>
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-bold text-lg mb-2">Transfert d’appels</h3>
              <p>Nous vous attribuons un numéro dédié pour transférer votre ligne.</p>
            </div>
            <div>
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-bold text-lg mb-2">C&apos;est parti !</h3>
              <p>Vos appels sont pris en charge selon vos instructions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">30 jours gratuits, sans frais de dossier et sans engagement</h2>
          <p className="text-xl text-gray-600 mb-8">Testez notre service et découvrez la différence As2Tel.</p>
          <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
            Démarrer l&apos;essai gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

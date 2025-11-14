import Link from "next/link";

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            30 Jours d’essai gratuit
          </h1>
          <p className="text-xl text-gray-600">
            Sans engagement ni frais de dossier.
          </p>
        </div>
      </section>

      {/* Pricing Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Une tarification transparente et flexible</h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              Notre modèle est simple : vous prépayez les appels sans aucun engagement. Vous pouvez changer de plan à tout moment en fonction de vos besoins.
            </p>
            <p>
              Suivez votre consommation en ligne et consultez vos statistiques mensuelles (appels, SMS, transferts). Pas de mauvaise surprise, pas de frais cachés.
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Frais de dossier nuls</li>
              <li>Activation rapide de votre compte</li>
              <li>Paiement par CB sécurisé</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Activation Process Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Processus d’activation</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
            <div className="p-4">
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <p>Cliquez sur « Essai gratuit » et remplissez le formulaire.</p>
            </div>
            <div className="p-4">
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <p>Un conseiller vous contacte sous 2 heures.</p>
            </div>
            <div className="p-4">
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <p>Votre compte est prêt en moins d’une heure.</p>
            </div>
            <div className="p-4">
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <p>Transférez vos appels vers votre numéro dédié.</p>
            </div>
            <div className="p-4">
              <div className="bg-brand-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl font-bold mx-auto mb-4">5</div>
              <p>Profitez de 30 jours d&apos;essai, puis choisissez votre plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-xl text-gray-600 mb-8">Démarrez votre essai gratuit de 30 jours dès aujourd&apos;hui.</p>
          <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
            Commencer mon essai gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

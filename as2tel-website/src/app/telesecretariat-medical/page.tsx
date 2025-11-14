import Link from "next/link";

export default function MedicalPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Toujours disponible pour vos patients
          </h1>
          <p className="text-xl">
            Concentrez-vous sur vos consultations, nous gérons votre secrétariat téléphonique.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Feature Item */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Accueil téléphonique</h3>
              <p className="text-gray-600">Nos secrétaires médicales répondent en votre nom, en respectant vos directives.</p>
            </div>
            {/* Feature Item */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Agenda partagé</h3>
              <p className="text-gray-600">Visualisez et gérez vos RDV en temps réel depuis notre interface interactive.</p>
            </div>
            {/* Feature Item */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Consignes personnalisées</h3>
              <p className="text-gray-600">Adaptez l&apos;accueil de chaque appel grâce à notre fonction de &quot;remontée de fiches&quot;.</p>
            </div>
            {/* Feature Item */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Prise de rendez-vous en ligne</h3>
              <p className="text-gray-600">Permettez à vos patients de réserver un créneau 24/7, avec synchronisation instantanée.</p>
            </div>
            {/* Feature Item */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Rappel de RDV</h3>
              <p className="text-gray-600">Réduisez les absences grâce aux rappels automatiques par mail/SMS.</p>
            </div>
            {/* Feature Item */}
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Filtrage d’appels</h3>
              <p className="text-gray-600">Transférez uniquement les urgences et filtrez les appels selon votre disponibilité.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Guarantee Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Notre garantie de qualité</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-12">
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-primary">80%</p>
              <p className="text-lg text-gray-600">des appels pris en moins d’une minute</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-brand-primary">&lt; 5</p>
              <p className="text-lg text-gray-600">sonneries pour chaque appel</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Essayez notre service sans risque</h2>
          <p className="text-xl text-gray-600 mb-8">30 jours gratuits, sans engagement ni frais de dossier. Accès aux enregistrements et remboursement si insatisfaction.</p>
          <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
            J&apos;ESSAYE
          </Link>
        </div>
      </section>
    </>
  );
}

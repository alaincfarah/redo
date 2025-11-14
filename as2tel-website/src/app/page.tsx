import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-heading font-bold text-gray-800 mb-4">
            VOS AMBASSADEURS AU TELEPHONE
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            NE PERDEZ PLUS UN APPEL TOUT EN MAITRISANT VOTRE IMAGE
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Zéro engagement</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Zéro frais de dossier</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">55h/semaine</span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full">Satisfait ou remboursé</span>
          </div>
          <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
            30 jours d’essai gratuit
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-heading font-bold text-center mb-12">Nos solutions pour chaque métier</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service Item */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-gray-200 h-48 w-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Petite entreprise</h3>
              <p className="text-gray-600 mb-6">Gagnez en temps et en productivité avec un secrétariat externalisé.</p>
              <Link href="/tpe" className="text-brand-primary font-bold">En savoir +</Link>
            </div>
            {/* Service Item */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-gray-200 h-48 w-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Médical</h3>
              <p className="text-gray-600 mb-6">Restez concentré sur vos patients, nous gérons vos appels.</p>
              <Link href="/telesecretariat-medical" className="text-brand-primary font-bold">En savoir +</Link>
            </div>
            {/* Service Item */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-gray-200 h-48 w-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Profession libérale</h3>
              <p className="text-gray-600 mb-6">Une permanence téléphonique pour ne manquer aucune opportunité.</p>
              <Link href="/profession-liberale" className="text-brand-primary font-bold">En savoir +</Link>
            </div>
            {/* Service Item */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-gray-200 h-48 w-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Agence immobilière</h3>
              <p className="text-gray-600 mb-6">Ne laissez plus un prospect sans réponse.</p>
              <Link href="/secretariat-agence-immobilier" className="text-brand-primary font-bold">En savoir +</Link>
            </div>
            {/* Service Item */}
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="bg-gray-200 h-48 w-full mb-6"></div>
              <h3 className="text-xl font-bold mb-4">Professions juridiques</h3>
              <p className="text-gray-600 mb-6">Un accueil téléphonique professionnel pour vos clients.</p>
              <Link href="/secretariat-juridique" className="text-brand-primary font-bold">En savoir +</Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-12">Comment ça marche ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            <div>
              <h3 className="font-bold text-lg mb-2">1. Transfert d&apos;appels</h3>
              <p>Vous transférez votre ligne vers un numéro unique que nous vous attribuons.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">2. Nos secrétaires vous répondent</h3>
              <p>Nos secrétaires répondent à vos correspondants en votre nom, selon vos instructions.</p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">3. Recevez vos messages</h3>
              <p>Vous recevez instantanément vos messages par email ou SMS.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">Prêt à nous tester ?</h2>
          <p className="text-xl text-gray-600 mb-8">30 jours d&apos;essai gratuit, sans engagement.</p>
          <Link href="/essai-gratuit" className="bg-brand-accent text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-accent/90">
            Démarrer l&apos;essai gratuit
          </Link>
        </div>
      </section>
    </>
  );
}

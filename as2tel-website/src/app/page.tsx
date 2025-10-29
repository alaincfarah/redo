export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="text-center py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-6xl font-bold font-poppins text-primary">VOS AMBASSADEURS AU TELEPHONE</h1>
          <h2 className="text-4xl mt-4 font-semibold font-poppins text-text">NE PERDEZ PLUS UN APPEL TOUT EN MAITRISANT VOTRE IMAGE</h2>
          <button className="mt-8 bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-primary transition-colors duration-300">
            TEST GRATUIT
          </button>
        </div>
      </section>

      {/* Value Propositions Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-8 text-center">
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">Zero Engagement</h3>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">30 jours Essai Gratuit</h3>
            </div>
            {/* Add other value props here */}
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">Service 24/7</h3>
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">Qualité Française</h3>
            </div>
             <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">Agenda Partagé</h3>
            </div>
             <div className="p-4">
              <h3 className="text-xl font-semibold font-poppins">Appels illimités</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Services by Sector Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-semibold text-center mb-12 font-poppins text-text">Nos solutions de télésecrétariat par secteur</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h4 className="text-2xl font-semibold font-poppins text-text">Petite Entreprise</h4>
                <p className="mt-2 text-base">Ne laissez pas des clients potentiels sans réponses...</p>
                <button className="mt-4 bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-accent transition-colors duration-300">
                  En savoir +
                </button>
              </div>
            </div>
            {/* Card 2 */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h4 className="text-2xl font-semibold font-poppins text-text">Médical</h4>
                <p className="mt-2 text-base">Nos secrétaires médicales répondront à vos patients...</p>
                <button className="mt-4 bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-accent transition-colors duration-300">
                  En savoir +
                </button>
              </div>
            </div>
             {/* Card 3 */}
             <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h4 className="text-2xl font-semibold font-poppins text-text">Profession Libérale</h4>
                <p className="mt-2 text-base">Optimisez votre temps et restez concentré sur votre cœur de métier.</p>
                <button className="mt-4 bg-primary text-white font-bold py-2 px-6 rounded-md hover:bg-accent transition-colors duration-300">
                  En savoir +
                </button>
              </div>
            </div>
            {/* ... repeat for other cards */}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-semibold mb-12 font-poppins text-text">Comment ça marche?</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8">
              {/* Steps would go here */}
              <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">1.</div>
                  <p className="font-semibold">Contactez-nous</p>
              </div>
               <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">2.</div>
                  <p className="font-semibold">Personnalisez votre service</p>
              </div>
               <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">3.</div>
                  <p className="font-semibold">Profitez de votre tranquilité</p>
              </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA Section */}
      <section className="py-20 bg-primary text-white text-center">
          <div className="container mx-auto px-6">
               <h2 className="text-4xl font-semibold font-poppins">Prêt à démarrer?</h2>
               <p className="text-xl mt-4">Demandez votre devis gratuit ou commencez votre essai de 30 jours.</p>
               <button className="mt-8 bg-accent text-white font-bold py-3 px-8 rounded-md hover:bg-white hover:text-accent transition-colors duration-300">
                  Demander un devis
              </button>
          </div>
      </section>

    </main>
  );
}

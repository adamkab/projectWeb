import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 min-h-screen p-10 flex justify-center items-center">
      <div className="max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <header className="text-center mb-10">
          <h1 className="text-5xl font-bold text-gray-800">MON CV</h1>
          <h2 className="text-3xl font-semibold text-gray-600 mt-4">Adam Ghassane</h2>
          <img 
            src="path/to/your/photo.jpg" 
            alt="Photo de Adam Kabouri" 
            className="w-32 h-32 rounded-full mx-auto mt-6 border-4 border-gray-300 shadow-lg"
          />
        </header>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Informations Personnelles</h2>
          <p className="text-gray-600"><strong>Nom:</strong> Kabouri mhamdi alaoui</p>
          <p className="text-gray-600"><strong>Prénom:</strong> Adam ghassane</p>
          <p className="text-gray-600"><strong>Date de naissance:</strong> 24-11-2001</p>
          <p className="text-gray-600"><strong>Téléphone:</strong> 0666666666</p>
          <p className="text-gray-600"><strong>Email:</strong> adamkabouri@gmail.com</p>
          <p className="text-gray-600"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adamkabouri" target="_blank" rel="noopener noreferrer" className="text-blue-600">Adam Kabouri</a></p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Objectif Professionnel</h2>
          <p className="text-gray-600">Élève ingénieur officier de réserve en 2ème année génie réseaux et télécommunications, je suis passionné par les technologies de l'information et la communication. Je suis à la recherche d'un stage d'application de deux mois en Cybersécurité à partir de juillet 2024.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Formation et Diplôme</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Ecole MOHAMMADIA D'ingénieurs, RABAT, 2022 - Présent:</strong> 2ème année du cycle ingénieur, Réseaux et télécommunications
            </li>
            <li>
              <strong>Classes Préparatoires aux Grandes Écoles (CPGE), 2020 - 2022:</strong> Classes préparatoires scientifiques Mathématiques-Physique (MPSI-MP)
            </li>
          </ul>
        </section>

        <section className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Compétences Techniques</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Théorie de l’information et de codage</li>
              <li>Switching, Routing</li>
              <li>Cloud computing, Storage basics</li>
              <li>Conception de données et système d'information</li>
              <li>Traitement numérique du signal - DNS</li>
              <li>Administration de bases de données</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-gray-700 mb-4">Compétences Linguistiques</h2>
            <ul className="list-disc list-inside text-gray-600">
              <li>Arabe - Langue maternelle</li>
              <li>Français - Courant</li>
              <li>Anglais - Courant</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Expérience Professionnelle</h2>
          <ul className="list-disc list-inside text-gray-600">
            <li>
              <strong>Stage d'observation, ONEE - ERRACHDIA | Juillet-Août 2023:</strong> Découverte de l’activité de l’équipe ASP
            </li>
          </ul>
        </section>

        <footer className="mt-10 text-center">
          <p className="text-gray-600"><strong>Édité par:</strong> Adam Kabouri ghassane</p>
          <p className="text-gray-600"><strong>Dernière Mise à jour:</strong> {new Date().toLocaleDateString()}</p>
          <p className="text-gray-600">&copy; 2024 Adam Kabouri</p>
        </footer>
      </div>
    </div>
  );
};

export default App;

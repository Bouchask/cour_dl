import React from 'react';
import './App.css';

const hybridArchitectures = [
  {
    title: 'CNN-LSTM',
    principle: 'Un CNN extrait les caractéristiques spatiales d\'une image ou d\'une vidéo, et sa sortie est passée à un LSTM pour analyser les relations temporelles. Le CNN "voit" et le LSTM "comprend" la séquence.',
    dataType: 'Séquences d\'images (vidéos), texte avec des caractéristiques spatiales.',
    useCase: 'Description de vidéos, reconnaissance d\'activités humaines.',
  },
  {
    title: 'Transformers (BERT, GPT)',
    principle: 'Basée sur un mécanisme d\'auto-attention, cette architecture pèse l\'importance de chaque mot dans une séquence, capturant les dépendances à longue distance mieux que les RNNs.',
    dataType: 'Données séquentielles, principalement le texte (NLP).',
    useCase: 'Traduction automatique, génération de texte, chatbots.',
  },
  {
    title: 'ConvLSTM',
    principle: 'Une variante du LSTM où les multiplications matricielles sont remplacées par des convolutions. Il capture simultanément les dépendances spatiales et temporelles au sein des données.',
    dataType: 'Données spatio-temporelles.',
    useCase: 'Prévisions météo via images satellites, prédiction des précipitations.',
  },
];

const fundamentalConcepts = [
  {
    title: 'Fonctions d\'Activation',
    role: 'Introduisent la non-linéarité pour apprendre des relations complexes.',
    examples: [
      { name: 'Sigmoid', description: 'Comprime la sortie entre 0 et 1, idéal pour les probabilités.' },
      { name: 'ReLU', description: 'Très efficace et populaire, renvoie max(0, x).' },
      { name: 'Tanh', description: 'Comprime la sortie entre -1 et 1.' },
    ],
  },
  {
    title: 'Couche Dense (Fully Connected)',
    role: 'Chaque neurone est connecté à tous les neurones de la couche précédente. Souvent utilisée pour la classification finale.',
    examples: [],
  },
  {
    title: 'Padding',
    role: 'Ajout de pixels (souvent des zéros) autour d\'une image avant convolution.',
    examples: [
      { name: 'Valid', description: 'Pas de padding. La sortie est plus petite que l\'entrée.' },
      { name: 'Same', description: 'Le padding est calculé pour que la sortie ait la même dimension que l\'entrée.' },
    ],
  },
  {
    title: 'Stride (Pas de déplacement)',
    role: 'Définit de combien de pixels le filtre se déplace à chaque étape. Un stride plus grand réduit la dimension de la sortie.',
    examples: [],
  },
  {
    title: 'Pooling (Mise en commun)',
    role: 'Technique de sous-échantillonnage pour réduire la dimensionnalité et les calculs.',
    examples: [
      { name: 'Max Pooling', description: 'Prend la valeur maximale dans une fenêtre.' },
      { name: 'Average Pooling', description: 'Calcule la moyenne des valeurs dans une fenêtre.' },
    ],
  },
];

const App = () => {
  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      <header className="bg-slate-800 p-6 shadow-lg">
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-cyan-400">Les Réseaux de Neurones : De la Théorie à la Pratique</h1>
      </header>

      <main className="max-w-5xl mx-auto p-4 sm:px-6 lg:px-8">
        <section id="hybrid-architectures" className="my-8">
          <h2 className="text-2xl font-semibold text-cyan-400 border-b-2 border-cyan-500 pb-2 mb-6">Architectures Hybrides : Quand les Modèles Collaborent</h2>
          <p className="text-lg leading-relaxed mb-8">
            En intelligence artificielle, la complexité des problèmes nécessite souvent des solutions créatives. Plutôt que d\'utiliser un seul type de réseau de neurones, on peut combiner plusieurs architectures pour tirer parti de leurs forces respectives. Ces modèles hybrides excellent là où un modèle unique échouerait, en traitant des données multi-facettes (par exemple, visuelles et séquentielles).
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hybridArchitectures.map((arch, index) => (
              <div key={index} className="bg-slate-800 rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition-all duration-300 hover:border-cyan-500 border-2 border-transparent">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{arch.title}</h3>
                <p className="font-semibold text-slate-100 mb-2">Principe</p>
                <p className="leading-7 mb-4">{arch.principle}</p>
                <hr className="border-slate-700 my-4" />
                <p className="font-semibold text-slate-100 mb-2">Type de Données</p>
                <p className="leading-7 mb-4">{arch.dataType}</p>
                <hr className="border-slate-700 my-4" />
                <p className="font-semibold text-slate-100 mb-2">Cas d\'Usage</p>
                <p className="leading-7">{arch.useCase}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="fundamental-concepts" className="my-8">
          <h2 className="text-2xl font-semibold text-cyan-400 border-b-2 border-cyan-500 pb-2 mb-6">Anatomie d\'un Réseau de Neurones : Les Blocs de Construction</h2>
          <p className="text-lg leading-relaxed mb-8">
            Chaque réseau de neurones est un assemblage de couches et de fonctions qui transforment les données. Comprendre ces blocs de construction est essentiel pour maîtriser le deep learning.
          </p>
          <div className="space-y-6">
            {fundamentalConcepts.map((concept, index) => (
              <div key={index} className="bg-slate-800 rounded-lg shadow-md p-6 transform hover:-translate-y-1 transition-all duration-300 hover:border-cyan-500 border-2 border-transparent">
                <h3 className="text-xl font-bold text-cyan-400 mb-3">{concept.title}</h3>
                <p className="italic text-slate-400 mb-4">{concept.role}</p>
                {concept.examples.length > 0 && (
                  <>
                    <hr className="border-slate-700 my-4" />
                    <ul className="list-disc list-inside space-y-2">
                      {concept.examples.map((example, i) => (
                        <li key={i}><span className="font-semibold text-slate-100">{example.name} :</span> <span className="leading-7">{example.description}</span></li>
                      ))}
                    </ul>
                  </>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 p-4 text-center text-slate-500 mt-8">
        <p>© 2025 - Site Éducatif sur les Réseaux de Neurones</p>
      </footer>
    </div>
  );
};

export default App;
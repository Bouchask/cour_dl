import React, { useState } from 'react';
import { FaCode, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { Card, Button, Collapse, Row, Col } from 'react-bootstrap';

const cnnCode = `
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

# Création du modèle
model = Sequential([
    # 1. Couche de convolution
    Conv2D(32, (3, 3), activation='relu', input_shape=(64, 64, 3)),
    # 2. Couche de Pooling
    MaxPooling2D((2, 2)),
    # 3. Aplatir les données
    Flatten(),
    # 4. Couche Dense (entièrement connectée)
    Dense(10, activation='softmax')
])

# Afficher le résumé du modèle
model.summary()
`;

const cnnExplanation = `
- **Conv2D(32, (3, 3), ...)** : Applique 32 filtres de 3x3 pixels pour extraire des caractéristiques de l'image.
  - activation='relu' : Introduit la non-linéarité.
  - input_shape=(64, 64, 3) : Définit la taille de l'image d'entrée (64x64 pixels avec 3 canaux de couleur).
- **MaxPooling2D((2, 2))** : Réduit la taille de l'image de moitié, en gardant les informations les plus importantes.
- **Flatten()** : Transforme la matrice 2D de l'image en un vecteur 1D pour la couche suivante.
- **Dense(10, activation='softmax')** : Une couche de 10 neurones pour classifier l'image en 10 catégories. softmax est utilisé pour obtenir des probabilités.
`;

const lstmCode = `
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, LSTM, Dense

# Création du modèle
model = Sequential([
    # 1. Couche d'Embedding
    Embedding(input_dim=10000, output_dim=128),
    # 2. Couche LSTM
    LSTM(64),
    # 3. Couche de sortie
    Dense(1, activation='sigmoid')
])

# Afficher le résumé du modèle
model.summary()
`;

const lstmExplanation = `
- **Embedding(input_dim=10000, output_dim=128)** : Transforme les mots (représentés par des nombres entiers) en vecteurs denses de 128 dimensions. input_dim=10000 est la taille du vocabulaire.
- **LSTM(64)** : Une couche LSTM avec 64 unités de mémoire pour analyser les séquences de vecteurs.
- **Dense(1, activation='sigmoid')** : Une couche de sortie avec une seule neurone pour une classification binaire (par exemple, sentiment positif/négatif). sigmoid est utilisé pour obtenir une probabilité entre 0 et 1.
`;

const gpt3Code = `
from transformers import pipeline

# Initialiser le pipeline de génération de texte
generator = pipeline('text-generation', model='gpt2') # Using gpt2 as a stand-in for GPT-3

# Générer du texte
result = generator("L'intelligence artificielle est", max_length=50, num_return_sequences=1)

print(result)
`;

const gpt3Explanation = `
- **pipeline('text-generation', model='gpt2')** : Charge un modèle GPT-2 pré-entraîné pour la génération de texte. Le pipeline gère la tokenisation, l'inférence et le décodage.
- **generator(...)** : Génère du texte à partir d'un prompt.
  - max_length=50 : La longueur maximale du texte généré.
  - num_return_sequences=1 : Le nombre de séquences à générer.
`;

const robertaCode = `
from transformers import pipeline

# Initialiser le pipeline d'analyse de sentiments
classifier = pipeline('sentiment-analysis', model='nlptown/bert-base-multilingual-uncased-sentiment')

# Analyser un texte
result = classifier("J'ai adoré ce film, les acteurs étaient incroyables !")

print(result)
`;

const robertaExplanation = `
- **pipeline('sentiment-analysis', ...)** : Charge un modèle pré-entraîné pour l'analyse des sentiments. Ce modèle est multilingue.
- **classifier(...)** : Analyse le sentiment du texte fourni et renvoie un label (par exemple, '5 stars') et un score de confiance.
`;

const rnnCode = `
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, SimpleRNN, Dense

# Création du modèle
model = Sequential([
    # 1. Couche d'Embedding
    Embedding(input_dim=10000, output_dim=128),
    # 2. Couche RNN
    SimpleRNN(64),
    # 3. Couche de sortie
    Dense(1, activation='sigmoid')
])

# Afficher le résumé du modèle
model.summary()
`;

const rnnExplanation = `
- **Embedding(input_dim=10000, output_dim=128)** : Transforme les mots en vecteurs denses.
- **SimpleRNN(64)** : Une couche RNN de base avec 64 unités.
- **Dense(1, activation='sigmoid')** : Une couche de sortie pour la classification binaire.
`;

const ganCode = `
# GANs are more complex and require a custom training loop.
# This is a simplified generator model.
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Reshape, Conv2DTranspose

# Création du générateur
generator = Sequential([
    Dense(7 * 7 * 256, use_bias=False, input_shape=(100,)),
    Reshape((7, 7, 256)),
    Conv2DTranspose(128, (5, 5), strides=(1, 1), padding='same', use_bias=False),
    Conv2DTranspose(64, (5, 5), strides=(2, 2), padding='same', use_bias=False),
    Conv2DTranspose(1, (5, 5), strides=(2, 2), padding='same', use_bias=False, activation='tanh')
])

# Afficher le résumé du générateur
generator.summary()
`;

const ganExplanation = `
- **Dense(...)** : Couche dense pour prendre un vecteur de bruit en entrée.
- **Reshape(...)** : Remodeler le vecteur en une image 3D.
- **Conv2DTranspose(...)** : Couches de convolution transposée pour augmenter la résolution de l'image.
`;

const gruCode = `
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, GRU, Dense

# Création du modèle
model = Sequential([
    # 1. Couche d'Embedding
    Embedding(input_dim=10000, output_dim=128),
    # 2. Couche GRU
    GRU(64),
    # 3. Couche de sortie
    Dense(1, activation='sigmoid')
])

# Afficher le résumé du modèle
model.summary()
`;

const gruExplanation = `
- **Embedding(input_dim=10000, output_dim=128)** : Transforme les mots en vecteurs denses.
- **GRU(64)** : Une couche GRU, une alternative au LSTM, avec 64 unités.
- **Dense(1, activation='sigmoid')** : Une couche de sortie pour la classification binaire.
`;

const vanillaCode = `
import tensorflow as tf
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten

# Création du modèle
model = Sequential([
    Flatten(input_shape=(28, 28)),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])

# Afficher le résumé du modèle
model.summary()
`;

const vanillaExplanation = `
- **Flatten(input_shape=(28, 28))** : Aplatit l'image d'entrée de 28x28 pixels.
- **Dense(128, activation='relu')** : Une couche dense cachée avec 128 neurones.
- **Dense(10, activation='softmax')** : Une couche de sortie pour la classification en 10 classes.
`;

const architectures = [
  {
    title: 'CNN-LSTM',
    principle: 'Un CNN extrait les caractéristiques spatiales d\'une image ou d\'une vidéo, et sa sortie est passée à un LSTM pour analyser les relations temporelles. Le CNN \"voit\" et le LSTM \"comprend\" la séquence.',
    dataType: 'Séquences d\'images (vidéos), texte avec des caractéristiques spatiales.',
    useCase: 'Description de vidéos, reconnaissance d\'activités humaines.',
    code: cnnCode,
    explanation: cnnExplanation,
    language: 'Python (TensorFlow/Keras)',
    icon: <FaCode />
  },
  {
    title: 'Transformers (GPT, RoBERTa)',
    principle: 'Basée sur un mécanisme d\'auto-attention, cette architecture pèse l\'importance de chaque mot dans une séquence, capturant les dépendances à longue distance mieux que les RNNs.',
    dataType: 'Données séquentielles, principalement le texte (NLP).',
    useCase: 'Traduction automatique, génération de texte, chatbots.',
    code: gpt3Code,
    explanation: gpt3Explanation,
    language: 'Python (Hugging Face)',
    icon: <FaCode />
  },
  {
    title: 'ConvLSTM',
    principle: 'Une variante du LSTM où les multiplications matricielles sont remplacées par des convolutions. Il capture simultanément les dépendances spatiales et temporelles au sein des données.',
    dataType: 'Données spatio-temporelles.',
    useCase: 'Prévisions météo via images satellites, prédiction des précipitations.',
    code: lstmCode,
    explanation: lstmExplanation,
    language: 'Python (TensorFlow/Keras)',
    icon: <FaCode />
  },
  {
    title: 'RNN (Réseau de Neurones Récurrent)',
    principle: 'Un type de réseau de neurones avec des boucles, leur permettant de persister l\'information. Utile pour les données séquentielles.',
    dataType: 'Données séquentielles (texte, séries temporelles).',
    useCase: 'Modélisation du langage, analyse de sentiments.',
    code: rnnCode,
    explanation: rnnExplanation,
    language: 'Python (TensorFlow/Keras)',
    icon: <FaCode />
  },
  {
    title: 'GAN (Réseau Antagoniste Génératif)',
    principle: 'Composé de deux réseaux, un générateur et un discriminateur, qui s\'affrontent pour générer de nouvelles données.',
    dataType: 'Images, texte, audio.',
    useCase: 'Génération d\'images, augmentation de données.',
    code: ganCode,
    explanation: ganExplanation,
    language: 'Python (TensorFlow/Keras)',
    icon: <FaCode />
  },
  {
    title: 'GRU (Gated Recurrent Unit)',
    principle: 'Une version simplifiée du LSTM avec moins de portes, ce qui le rend plus rapide à entraîner.',
    dataType: 'Données séquentielles.',
    useCase: 'Analyse de sentiments, traduction automatique.',
    code: gruCode,
    explanation: gruExplanation,
    language: 'Python (TensorFlow/Keras)',
    icon: <FaCode />
  },
  {
    title: 'Vanilla Neural Network',
    principle: 'Le type le plus simple de réseau de neurones, où l\'information se déplace dans une seule direction.',
    dataType: 'Données tabulaires, images simples.',
    useCase: 'Classification simple, régression.',
    code: vanillaCode,
    explanation: vanillaExplanation,
    language: 'Python (TensorFlow/Keras)',
    icon: <FaCode />
  },
];

const CodeBlock = ({ language, code, explanation }) => {
  return (
    <div className="my-4">
      <SyntaxHighlighter language={language.split(' ')[0].toLowerCase()} style={atomOneDark} customStyle={{ borderRadius: '0.5rem', margin: 0 }}>
        {code}
      </SyntaxHighlighter>
      <div className="bg-dark p-4 rounded-bottom">
        <h4 className="text-white mb-2">Décryptage du Code</h4>
        <p className="text-light whitespace-pre-wrap">{explanation}</p>
      </div>
    </div>
  );
};

const Architectures = () => {
  const [openCodeId, setOpenCodeId] = useState(null);

  const toggleCode = (id) => {
    setOpenCodeId(openCodeId === id ? null : id);
  };

  return (
    <div className="container py-5">
      <h2 className="display-5 text-primary border-bottom border-primary pb-2 mb-4">Architectures</h2>
      <Row>
        {architectures.map((arch, index) => (
          <Col key={index} xs={12} md={6} lg={4} className="mb-4">
            <Card className="h-100">
              <Card.Header as="h5" className="d-flex align-items-center">
                {arch.icon}
                <span className="ms-2">{arch.title}</span>
              </Card.Header>
              <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Principe</Card.Subtitle>
                <Card.Text>{arch.principle}</Card.Text>
                <hr />
                <Card.Subtitle className="mb-2 text-muted">Type de Données</Card.Subtitle>
                <Card.Text>{arch.dataType}</Card.Text>
                <hr />
                <Card.Subtitle className="mb-2 text-muted">Cas d'Usage</Card.Subtitle>
                <Card.Text>{arch.useCase}</Card.Text>
                {arch.code && (
                  <>
                    <Button variant="primary" className="mt-3" onClick={() => toggleCode(`arch-${index}`)}>
                      <FaCode className="me-2" />
                      {openCodeId === `arch-${index}` ? 'Fermer le Code' : 'Voir l\'Exemple de Code'}
                      {openCodeId === `arch-${index}` ? <FaChevronUp className="ms-2" /> : <FaChevronDown className="ms-2" />}
                    </Button>
                    <Collapse in={openCodeId === `arch-${index}`}>
                      <div>
                        <CodeBlock language={arch.language} code={arch.code} explanation={arch.explanation} />
                      </div>
                    </Collapse>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Architectures;
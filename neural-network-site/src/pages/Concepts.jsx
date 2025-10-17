import React from 'react';
import { FaCode } from 'react-icons/fa';
import { Card, Col, Row } from 'react-bootstrap';

const fundamentalConcepts = [
  {
    title: 'Fonctions d\'Activation',
    role: 'Introduisent la non-linéarité pour apprendre des relations complexes.',
    examples: [
      { name: 'Sigmoid', description: 'Comprime la sortie entre 0 et 1, idéal pour les probabilités.' },
      { name: 'ReLU', description: 'Très efficace et populaire, renvoie max(0, x).' },
      { name: 'Tanh', description: 'Comprime la sortie entre -1 et 1.' },
    ],
    icon: <FaCode />
  },
  {
    title: 'Couche Dense (Fully Connected)',
    role: 'Chaque neurone est connecté à tous les neurones de la couche précédente. Souvent utilisée pour la classification finale.',
    examples: [],
    icon: <FaCode />
  },
  {
    title: 'Padding',
    role: 'Ajout de pixels (souvent des zéros) autour d\'une image avant convolution.',
    examples: [
      { name: 'Valid', description: 'Pas de padding. La sortie est plus petite que l\'entrée.' },
      { name: 'Same', description: 'Le padding est calculé pour que la sortie ait la même dimension que l\'entrée.' },
    ],
    icon: <FaCode />
  },
  {
    title: 'Stride (Pas de déplacement)',
    role: 'Définit de combien de pixels le filtre se déplace à chaque étape. Un stride plus grand réduit la dimension de la sortie.',
    examples: [],
    icon: <FaCode />
  },
  {
    title: 'Pooling (Mise en commun)',
    role: 'Technique de sous-échantillonnage pour réduire la dimensionnalité et les calculs.',
    examples: [
      { name: 'Max Pooling', description: 'Prend la valeur maximale dans une fenêtre.' },
      { name: 'Average Pooling', description: 'Calcule la moyenne des valeurs dans une fenêtre.' },
    ],
    icon: <FaCode />
  },
];

const Concepts = () => {
  return (
    <div className="container py-5">
      <h2 className="display-5 text-primary border-bottom border-primary pb-2 mb-4">Concepts Fondamentaux</h2>
      <Row>
        {fundamentalConcepts.map((concept, index) => (
          <Col key={index} xs={12} md={6} className="mb-4">
            <Card className="h-100">
              <Card.Header as="h5" className="d-flex align-items-center">
                {concept.icon}
                <span className="ms-2">{concept.title}</span>
              </Card.Header>
              <Card.Body>
                <Card.Text as="p" className="fst-italic">{concept.role}</Card.Text>
                {concept.examples.length > 0 && (
                  <>
                    <hr />
                    <ul className="list-group list-group-flush">
                      {concept.examples.map((example, i) => (
                        <li key={i} className="list-group-item bg-transparent text-light"><strong>{example.name}:</strong> {example.description}</li>
                      ))}
                    </ul>
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

export default Concepts;
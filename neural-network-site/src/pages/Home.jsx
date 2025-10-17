
import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div className="home-hero">
      <Container>
        <h1 className="display-3 fw-bold">Unlock the Power of AI</h1>
        <p className="lead my-4">
          Dive deep into the world of neural networks and discover the building blocks of modern Artificial Intelligence.
        </p>
        <Link to="/architectures">
          <Button variant="primary" size="lg">Explore Architectures</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Home;

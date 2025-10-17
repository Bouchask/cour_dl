import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNavbar from './components/Navbar';
import Home from './pages/Home';
import Architectures from './pages/Architectures';
import Concepts from './pages/Concepts';
import './App.css';

const App = () => {
  return (
    <Router>
      <div data-bs-theme="dark">
        <AppNavbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/architectures" element={<Architectures />} />
            <Route path="/concepts" element={<Concepts />} />
          </Routes>
        </main>
        <footer className="app-footer">
          <p>© 2025 - NeuralNet Academy</p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
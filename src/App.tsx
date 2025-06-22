import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppChat from './components/WhatsAppChat';
import Home from './pages/Home';
import About from './pages/About';
import Expertise from './pages/Expertise';
import Career from './pages/Career';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <main className="page-transition">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/a-propos" element={<About />} />
            <Route path="/expertises" element={<Expertise />} />
            <Route path="/carriere" element={<Career />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppChat />
      </div>
    </Router>
  );
}

export default App;
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './sections/Navigation';
import Hero from './sections/Hero';
import Curriculum from './sections/Curriculum';
import Methodology from './sections/Methodology';
import Certifications from './sections/Certifications';
import CinematicVision from './sections/CinematicVision';
import AlumniArchives from './sections/AlumniArchives';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import CapabilityDetail from './sections/CapabilityDetail';
import WhatsAppButton from './components/WhatsAppButton';

function HomePage() {
  const { hash } = useLocation();

  // Permite enlaces como /#contact desde otras páginas
  useEffect(() => {
    if (!hash) return;
    const id = window.setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 100);
    return () => window.clearTimeout(id);
  }, [hash]);

  return (
    <div className="min-h-screen overflow-x-hidden bg-zr-bg">
      <a
        href="#curriculum"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:px-4 focus:py-2 focus:text-black"
      >
        Saltar al contenido principal
      </a>
      <Navigation />

      <main id="main-content">
        <Hero />
        <Curriculum />
        <Methodology />
        <AlumniArchives />
        <Certifications />
        <CinematicVision />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/capability/:slug" element={<CapabilityDetail />} />
    </Routes>
  );
}

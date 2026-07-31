import { Routes, Route } from 'react-router-dom';
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

function HomePage() {
  return (
    <div
      style={{
        background: '#0a0a0a',
        minHeight: '100vh',
        overflowX: 'hidden',
      }}
    >
      <a
        href="#curriculum"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded"
        style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: 14,
        }}
      >
        Saltar al contenido principal
      </a>
      <Navigation />

      <main id="main-content">
        <Hero />
        <Curriculum />
        <Methodology />
        <Certifications />
        <CinematicVision />
        <AlumniArchives />
        <Contact />
        <Footer />
      </main>
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

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroPaths from './components/HeroPaths';
import Experience from './components/Experience';
import Projects from './components/Projects';
import SkillsMatrix from './components/SkillsMatrix';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';
import ResumePage from './components/ResumePage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');
  const [activeModalProject, setActiveModalProject] = useState(null);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#resume') {
        setCurrentPage('resume');
      } else {
        setCurrentPage('portfolio');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const navigateToResume = () => {
    window.location.hash = 'resume';
    setCurrentPage('resume');
  };

  const navigateToPortfolio = (anchor) => {
    if (anchor) {
      window.location.hash = anchor;
    } else {
      window.location.hash = '';
    }
    setCurrentPage('portfolio');
  };

  return (
    <div className="site-wrapper">
      <Header
        currentPage={currentPage}
        onNavigateToResume={navigateToResume}
        onNavigateToPortfolio={navigateToPortfolio}
      />

      <main id="main">
        {currentPage === 'resume' ? (
          <ResumePage onBack={() => navigateToPortfolio()} />
        ) : (
          <>
            <Hero onNavigateToResume={navigateToResume} />
            <HeroPaths />
            <Experience />
            <Projects onOpenCaseStudy={(proj) => setActiveModalProject(proj)} />
            <SkillsMatrix />
            <Contact />
          </>
        )}
      </main>

      <Footer />

      {activeModalProject && (
        <CaseStudyModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />
      )}
    </div>
  );
}

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HeroPaths from './components/HeroPaths';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import PublicCode from './components/PublicCode';
import SkillsMatrix from './components/SkillsMatrix';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CaseStudyModal from './components/CaseStudyModal';

export default function App() {
  const [activeModalProject, setActiveModalProject] = useState(null);

  return (
    <div className="site-wrapper">
      <Header />
      <main id="main">
        <Hero />
        <HeroPaths />
        <About />
        <Experience />
        <Projects onOpenCaseStudy={(proj) => setActiveModalProject(proj)} />
        <PublicCode />
        <SkillsMatrix />
        <Contact />
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

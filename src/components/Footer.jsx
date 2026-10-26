import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner container">
        <p>© {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>

        <div className="footer-links">
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href={`mailto:${personalInfo.email}`}>
            Email
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', color: 'inherit' }}
            aria-label="Scroll to top"
          >
            <span>Top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
}

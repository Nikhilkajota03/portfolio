import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header({ currentPage, onNavigateToResume, onNavigateToPortfolio }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (anchor) => {
    if (currentPage === 'resume') {
      onNavigateToPortfolio(anchor);
    }
  };

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner header-fluid-container">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              onNavigateToPortfolio();
            }}
            className="brand"
            aria-label="Nikhil Kajota home"
          >
            {personalInfo.name}
            <span className="accent">.</span>
          </a>

          <div className="header-actions">
            <nav className="header-nav" aria-label="Featured destinations">
              <a
                href="#experience"
                onClick={() => handleNavClick('experience')}
              >
                Experience
              </a>
              <a
                href="#work"
                onClick={() => handleNavClick('work')}
              >
                Work
              </a>
              <a
                href="#skills"
                onClick={() => handleNavClick('skills')}
              >
                Systems
              </a>
              <button
                type="button"
                onClick={onNavigateToResume}
                className={`header-nav-btn ${currentPage === 'resume' ? 'active' : ''}`}
              >
                Resume
              </button>
            </nav>

            <a
              href="#contact"
              onClick={() => handleNavClick('contact')}
              className="header-contact"
            >
              <span className="contact-dot" aria-hidden="true"></span>
              Contact
              <ArrowUpRight size={15} />
            </a>

            <button
              className="menu-toggle"
              aria-label="Toggle navigation menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <div className="mobile-menu-overlay" role="dialog" aria-modal="true">
          <div className="mobile-menu-top">
            <span className="brand">
              {personalInfo.name}
              <span className="accent">.</span>
            </span>
            <button
              className="icon-button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          <nav className="mobile-menu-links">
            <a
              href="#experience"
              className="mobile-menu-link"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('experience');
              }}
            >
              <span>01. Experience</span>
              <ArrowUpRight size={22} />
            </a>
            <a
              href="#work"
              className="mobile-menu-link"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('work');
              }}
            >
              <span>02. Selected Work</span>
              <ArrowUpRight size={22} />
            </a>
            <a
              href="#skills"
              className="mobile-menu-link"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('skills');
              }}
            >
              <span>03. Systems & Stack</span>
              <ArrowUpRight size={22} />
            </a>
            <button
              type="button"
              className="mobile-menu-link"
              style={{ width: '100%', textAlign: 'left' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onNavigateToResume();
              }}
            >
              <span>04. Résumé</span>
              <ArrowUpRight size={22} />
            </button>
            <a
              href="#contact"
              className="mobile-menu-link"
              onClick={() => {
                setMobileMenuOpen(false);
                handleNavClick('contact');
              }}
            >
              <span>05. Contact</span>
              <ArrowUpRight size={22} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

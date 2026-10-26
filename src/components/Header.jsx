import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner container">
          <a href="#top" className="brand" aria-label="Nikhil Kajota home">
            {personalInfo.name}
            <span className="accent">.</span>
          </a>

          <div className="header-actions">
            <nav className="header-nav" aria-label="Featured destinations">
              <a href="#experience">Experience</a>
              <a href="#work">Work</a>
              <a href="#skills">Systems</a>
            </nav>

            <a href="#contact" className="header-contact">
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
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>01. Experience</span>
              <ArrowUpRight size={22} />
            </a>
            <a
              href="#work"
              className="mobile-menu-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>02. Selected Work</span>
              <ArrowUpRight size={22} />
            </a>
            <a
              href="#skills"
              className="mobile-menu-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>03. Systems & Stack</span>
              <ArrowUpRight size={22} />
            </a>
            <a
              href="#contact"
              className="mobile-menu-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>04. Contact</span>
              <ArrowUpRight size={22} />
            </a>
          </nav>
        </div>
      )}
    </>
  );
}

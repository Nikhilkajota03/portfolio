import React from 'react';
import { ArrowDownRight, ArrowUpRight, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Hero() {
  return (
    <section id="top" className="hero-section">
      <div className="hero-portrait-lens" aria-hidden="true">
        <img
          src="/portrait.jpg"
          alt="Nikhil Kajota portrait"
          className="hero-portrait-img"
        />
        <div className="hero-portrait-shade"></div>
      </div>

      <div className="hero-content container">
        <div className="hero-role">
          <span className="hero-role-dot" aria-hidden="true"></span>
          {personalInfo.role}
        </div>

        <h1 className="hero-name">
          <span>Nikhil </span>
          <span>Kajota<span className="hero-period">.</span></span>
        </h1>

        <div className="hero-statement">
          <h2>{personalInfo.statementTitle}</h2>
          <p>{personalInfo.statementDesc}</p>
        </div>

        <div className="hero-bottom">
          <div className="hero-actions">
            <a href="#work" className="btn-primary">
              <span>Explore my work</span>
              <ArrowDownRight size={18} />
            </a>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <span>View résumé</span>
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="hero-personal">
            <div className="hero-socials">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon size={18} />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon size={18} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Email"
              >
                <Mail size={18} />
              </a>
            </div>
            <span>Based in {personalInfo.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

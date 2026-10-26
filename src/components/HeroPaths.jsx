import React from 'react';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import { heroPaths } from '../data/portfolioData';

export default function HeroPaths() {
  return (
    <nav className="hero-paths container" aria-label="Start exploring">
      <div className="hero-paths-intro">
        <span>A few places to start</span>
        <ArrowDownRight size={15} />
      </div>

      <div className="hero-paths-grid">
        {heroPaths.map((path) => (
          <a
            key={path.index}
            href={path.anchor}
            className="hero-path-card"
          >
            <span className="hero-path-number" aria-hidden="true">
              {path.index}
            </span>
            <div className="hero-path-copy">
              <span>{path.label}</span>
              <strong>{path.question}</strong>
            </div>
            <ArrowUpRight size={18} className="hero-path-arrow" />
          </a>
        ))}
      </div>
    </nav>
  );
}

import React from 'react';
import { ArrowUpRight, Workflow, Database, ShieldCheck } from 'lucide-react';
import { expertisePillars, personalInfo } from '../data/portfolioData';

const iconMap = {
  workflow: Workflow,
  database: Database,
  'shield-check': ShieldCheck
};

export default function About() {
  return (
    <section id="about" className="section container">
      <div className="section-heading">
        <div className="eyebrow">
          <span aria-hidden="true">02</span>
          <span className="eyebrow-line" aria-hidden="true"></span>
          About me
        </div>
        <div className="section-heading-row">
          <h2>Curiosity is the starting point.</h2>
        </div>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">
            I’ve always been curious about how complex distributed systems think, where AI agents fail, and how to engineer guardrails that make them bulletproof.
          </p>

          <p>
            That curiosity drew me to Applied AI Engineering: designing autonomous workflows that reason through multi-step decisions, remember across sessions with graph-grounded context, and execute within deterministic, zero-mutation sandboxes.
          </p>

          <p>
            I care deeply about what happens after a flashy demo: whether a model hallucinates under stress, whether a Text-to-SQL query drops production tables, and whether an agent can self-correct when an API fails. My engineering approach is anchored in a tight feedback loop:
          </p>

          <div className="process-list" aria-label="My engineering approach">
            <span className="process-item">1. Deconstruct</span>
            <span className="process-divider">→</span>
            <span className="process-item">2. Sandbox</span>
            <span className="process-divider">→</span>
            <span className="process-item">3. Evaluate</span>
            <span className="process-divider">→</span>
            <span className="process-item">4. Harden</span>
            <span className="process-divider">→</span>
            <span className="process-item">5. Scale</span>
          </div>

          <aside className="personal-note-box" aria-label="Beyond engineering">
            <span>Academic background</span>
            <p>
              <strong>{personalInfo.education.institution}</strong> ({personalInfo.education.period}). {personalInfo.education.note}
            </p>
          </aside>
        </div>

        <div className="expertise-stack">
          {expertisePillars.map((pillar, idx) => {
            const Icon = iconMap[pillar.icon] || Workflow;
            return (
              <article key={idx} className="expertise-card">
                <div className="expertise-icon-wrap" aria-hidden="true">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <div className="expertise-card-content">
                  <h3>{pillar.title}</h3>
                  <p>{pillar.description}</p>
                  <a href={pillar.anchor} className="expertise-link">
                    Explore architecture
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

import React from 'react';
import { skillsCategories } from '../data/portfolioData';

export default function SkillsMatrix() {
  return (
    <section id="skills" className="section container">
      <div className="section-heading">
        <div className="eyebrow">
          <span aria-hidden="true">06</span>
          <span className="eyebrow-line" aria-hidden="true"></span>
          Systems & Technologies
        </div>
        <div className="section-heading-row">
          <h2>Production tools & architectures.</h2>
          <p>Core engineering stacks across multi-agent systems, retrieval pipelines, databases, and cloud infrastructure.</p>
        </div>
      </div>

      <div className="skills-grid">
        {skillsCategories.map((group, idx) => (
          <div key={idx} className="skill-category-card">
            <h3 className="skill-category-title">{group.category}</h3>
            <div className="skills-pill-wrap">
              {group.skills.map((skill) => (
                <span key={skill} className="skill-badge">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

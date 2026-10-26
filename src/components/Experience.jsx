import React from 'react';
import { ChevronDown } from 'lucide-react';
import { workExperience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="section container">
      <div className="section-heading">
        <div className="eyebrow">
          <span aria-hidden="true">02</span>
          <span className="eyebrow-line" aria-hidden="true"></span>
          Experience
        </div>
        <div className="section-heading-row">
          <h2>Where I’ve been building.</h2>
          <p>From production multi-agent research and sandboxing to real-time voice pipelines.</p>
        </div>
      </div>

      <div className="experience-timeline">
        {workExperience.map((job, idx) => {
          const isLast = idx === workExperience.length - 1;
          return (
            <div key={idx} className="timeline-item">
              <div className="timeline-date-col">
                <span className="timeline-date">{job.period}</span>
                {job.isCurrent && (
                  <span className="role-badge-current">Current role</span>
                )}
              </div>

              <div className="timeline-spine" aria-hidden="true">
                <div className={`timeline-node ${job.isCurrent ? 'current' : ''}`}>
                  <div className="timeline-node-inner" />
                </div>
                {!isLast ? (
                  <div className="timeline-track-line" />
                ) : (
                  <div className="timeline-track-line-end" />
                )}
              </div>

              <article className="timeline-body">
                <div className="timeline-mobile-date">
                  <span className="timeline-date">{job.period}</span>
                  {job.isCurrent && (
                    <span className="role-badge-current">Current role</span>
                  )}
                </div>

                <h3>{job.role}</h3>
                <p className="timeline-organization">
                  <strong>{job.company}</strong>
                  <span>·</span>
                  <span>{job.location}</span>
                </p>

                <p className="timeline-summary">{job.summary}</p>

                <div className="tags-list" aria-label="Technologies used">
                  {job.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <details className="disclosure-block">
                  <summary className="disclosure-summary">
                    <span>Work & responsibilities</span>
                    <ChevronDown size={16} className="disclosure-chevron" />
                  </summary>
                  <ul className="disclosure-details">
                    {job.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>{resp}</li>
                    ))}
                  </ul>
                </details>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}

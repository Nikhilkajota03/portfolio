import React from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { selectedProjects, secondaryProjects } from '../data/portfolioData';
import { GithubIcon } from './Icons';

export default function Projects({ onOpenCaseStudy }) {
  return (
    <section id="work" className="section container">
      <div className="section-heading">
        <div className="eyebrow">
          <span aria-hidden="true">03</span>
          <span className="eyebrow-line" aria-hidden="true"></span>
          Selected projects
        </div>
        <div className="section-heading-row">
          <h2>A few things I’ve built.</h2>
          <p>Autonomous agent systems, graph retrieval pipelines, and infrastructure shaped by hard production constraints.</p>
        </div>
      </div>

      <div className="projects-features">
        {selectedProjects.map((project, idx) => {
          const isReverse = idx % 2 === 1;
          const posterClass =
            project.artwork.type === 'control'
              ? 'poster-control'
              : project.artwork.type === 'memory'
              ? 'poster-memory'
              : 'poster-voice';

          return (
            <article
              key={project.id}
              id={`work-${project.id}`}
              className={`project-feature ${isReverse ? 'reverse' : ''}`}
            >
              <div className="project-feature-copy">
                <p className="project-category">
                  <span aria-hidden="true">{project.categoryIndex}</span>
                  {project.categoryName}
                </p>

                <h3 className="project-title">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {project.title}
                    <ArrowUpRight size={22} />
                  </a>
                </h3>

                <p className="project-headline">{project.headline}</p>
                <p className="project-summary">{project.summary}</p>

                <div className="project-decision">
                  <span>Design choice</span>
                  <p>{project.designChoice}</p>
                </div>

                <div className="project-proof">
                  <span className="proof-value">{project.proof.value}</span>
                  <div className="proof-meta">
                    <p className="proof-label">{project.proof.label}</p>
                    <p className="proof-context">{project.proof.context}</p>
                  </div>
                </div>

                <div className="tags-list" aria-label="Technologies">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag-pill">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-actions">
                  <button
                    type="button"
                    className="action-btn-inspect"
                    onClick={() => onOpenCaseStudy(project)}
                  >
                    <Sparkles size={14} />
                    Inspect architecture
                  </button>

                  {project.repositories && project.repositories.length > 0 ? (
                    project.repositories.map((repo) => (
                      <a
                        key={repo.url}
                        href={repo.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="action-link"
                        title={`${repo.label} Repository on GitHub`}
                      >
                        <GithubIcon size={15} />
                        {repo.label}
                        <ArrowUpRight size={14} />
                      </a>
                    ))
                  ) : (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="action-link"
                    >
                      <GithubIcon size={15} />
                      GitHub
                      <ArrowUpRight size={14} />
                    </a>
                  )}
                </div>
              </div>

              <div className="project-feature-visual">
                <div
                  className={`project-poster-cover ${posterClass}`}
                  onClick={() => onOpenCaseStudy(project)}
                  role="button"
                  tabIndex={0}
                  aria-label={`Open ${project.title} case study`}
                >
                  <div className="poster-top">
                    <span>{project.artwork.topSub}</span>
                    <span>{project.artwork.topCategory}</span>
                  </div>

                  <p className="poster-words">
                    {project.artwork.words[0]}
                    <br />
                    <span>{project.artwork.words[1]}</span>
                  </p>

                  <div className="poster-bottom">
                    <span>{project.artwork.bottomLeft}</span>
                    <span>{project.artwork.bottomRight}</span>
                  </div>
                </div>
                <p className="project-feature-status">{project.statusText}</p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Secondary Workbench Grid */}
      <div className="workbench-section">
        <div className="workbench-heading">
          <h3>More from the workbench</h3>
          <p>Modular systems, sandboxes, and ongoing architectural explorations.</p>
        </div>

        <div className="workbench-grid">
          {secondaryProjects.map((item, idx) => (
            <article key={idx} className="workbench-card">
              <div>
                <p className="workbench-category">{item.category}</p>
                <h4>{item.title}</h4>
                <p>{item.summary}</p>
              </div>

              <div>
                <div className="workbench-proof">
                  <span className="workbench-proof-value">{item.proofValue}</span>
                  <span className="workbench-proof-label">{item.proofLabel}</span>
                </div>

                <div className="tags-list">
                  {item.technologies.map((t) => (
                    <span key={t} className="tag-pill">
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={item.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-link"
                >
                  <GithubIcon size={14} />
                  Source
                  <ArrowUpRight size={13} />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

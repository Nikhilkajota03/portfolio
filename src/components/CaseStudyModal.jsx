import React, { useEffect } from 'react';
import { X, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function CaseStudyModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          className="modal-close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <p className="modal-eyebrow">Architecture Inspection · {project.categoryName}</p>
        <h3 className="modal-title">{project.title}</h3>

        <div className="modal-section">
          <h4>The Problem & Failure Mode</h4>
          <p>{project.caseStudy.problem}</p>
        </div>

        <div className="modal-section">
          <h4>Key Design Choice</h4>
          <p>{project.designChoice}</p>
        </div>

        <div className="modal-section">
          <h4>Architectural Implementation</h4>
          <p>{project.caseStudy.solution}</p>
        </div>

        <div className="modal-section">
          <h4>Empirical Proof & Outcome</h4>
          <p>{project.caseStudy.impact}</p>
          <div className="project-proof" style={{ marginTop: '16px' }}>
            <span className="proof-value">{project.proof.value}</span>
            <div className="proof-meta">
              <span className="proof-label">{project.proof.label}</span>
              <span className="proof-context">{project.proof.context}</span>
            </div>
          </div>
        </div>

        <div className="tags-list" style={{ marginTop: '24px' }}>
          {project.technologies.map((t) => (
            <span key={t} className="tag-pill">
              {t}
            </span>
          ))}
        </div>

        <div style={{ marginTop: '32px', display: 'flex', gap: '16px', alignItems: 'center' }}>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ fontSize: '13px' }}
          >
            <GithubIcon size={15} />
            <span>View code on GitHub</span>
            <ArrowUpRight size={14} />
          </a>

          <button
            type="button"
            className="btn-secondary"
            onClick={onClose}
            style={{ fontSize: '13px' }}
          >
            Close inspection
          </button>
        </div>
      </div>
    </div>
  );
}

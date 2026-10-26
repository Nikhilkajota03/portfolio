import React, { useEffect } from 'react';
import { ArrowLeft, ArrowUpRight, Download } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function ResumePage({ onBack }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="resume-page-container container">
      <div className="resume-back-bar">
        <button
          type="button"
          onClick={onBack}
          className="resume-back-btn"
          aria-label="Back to portfolio"
        >
          <ArrowLeft size={16} />
          <span>Back to portfolio</span>
        </button>
      </div>

      <div className="resume-header-block">
        <p className="resume-eyebrow">Background / Experience / Systems</p>
        <h1 className="resume-title">
          A little more detail<span className="accent">.</span>
        </h1>
        <p className="resume-subtitle">
          {personalInfo.name} · {personalInfo.role}
        </p>

        <div className="resume-actions-row">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            <span>Open PDF</span>
            <ArrowUpRight size={15} />
          </a>

          <a
            href="/Nikhil_Kajota_Resume.pdf"
            download="Nikhil_Kajota_Resume.pdf"
            className="btn-secondary"
          >
            <Download size={15} />
            <span>Download résumé</span>
          </a>
        </div>

        <p className="resume-helper-note">
          If your browser doesn't display the document below, open or download the PDF directly.
        </p>
      </div>

      <div className="resume-viewer-frame">
        <iframe
          src="/resume.pdf#view=FitH"
          title={`${personalInfo.name} Résumé`}
          className="resume-iframe"
        />
      </div>
    </div>
  );
}

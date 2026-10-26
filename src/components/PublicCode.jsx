import React from 'react';
import { openSourceContributions } from '../data/portfolioData';

export default function PublicCode() {
  return (
    <section id="experiments" className="section container">
      <div className="section-heading">
        <div className="eyebrow">
          <span aria-hidden="true">05</span>
          <span className="eyebrow-line" aria-hidden="true"></span>
          Open source & telemetry
        </div>
        <div className="section-heading-row">
          <h2>Shared code, proven progress.</h2>
          <p>Public designs, AST validation patterns, and low-latency streaming benchmarks.</p>
        </div>
      </div>

      <div className="opensource-stats">
        <div className="stat-item">
          <span className="stat-num">35%</span>
          <span className="stat-label">Task completion uplift</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">380ms</span>
          <span className="stat-label">Measured voice latency</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">0</span>
          <span className="stat-label">Database mutation leaks</span>
        </div>
        <div className="stat-item">
          <span className="stat-num">&gt;0.85</span>
          <span className="stat-label">Automated eval benchmark</span>
        </div>
      </div>

      <div className="contributions-list">
        {openSourceContributions.map((item, idx) => (
          <article key={idx} className="contribution-card">
            <div className="contribution-left">
              <div className="contribution-meta">
                <span>{item.date}</span>
                <span>·</span>
                <span>{item.category}</span>
              </div>
              <h3 className="contribution-title">{item.title}</h3>
              <p className="contribution-summary">{item.summary}</p>
            </div>

            <div className="contribution-stat-box">
              <span className="contrib-stat-val">{item.stat}</span>
              <span className="contrib-stat-lbl">{item.statLabel}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

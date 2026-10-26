import React, { useState } from 'react';
import { Mail, Phone, MapPin, Copy, Check, Send } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <section id="contact" className="section container">
      <div className="section-heading">
        <div className="eyebrow">
          <span aria-hidden="true">05</span>
          <span className="eyebrow-line" aria-hidden="true"></span>
          Contact
        </div>
      </div>

      <div className="contact-layout">
        <div className="contact-info-col">
          <h3>Let’s build something meaningful.</h3>
          <p>
            Whether you’re scaling a production multi-agent system, optimizing low-latency multimodal pipelines, or exploring secure sandboxed LLM infrastructure — I'm open to interesting technical conversations and high-impact engineering opportunities.
          </p>

          <div className="contact-details-list">
            <div className="contact-detail-row">
              <Mail size={16} />
              <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="action-link"
                title="Copy email to clipboard"
                aria-label="Copy email address"
              >
                {copied ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
              </button>
              {copied && <span className="copy-toast">Copied to clipboard</span>}
            </div>

            <div className="contact-detail-row">
              <Phone size={16} />
              <span>{personalInfo.phone}</span>
            </div>

            <div className="contact-detail-row">
              <MapPin size={16} />
              <span>{personalInfo.location}</span>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#10b981' }}>
            <span className="contact-dot" aria-hidden="true"></span>
            <span>Open to AI Engineer & SDE roles</span>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {formSubmitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: '#10b981', marginBottom: '16px' }}>
                <Check size={28} />
              </div>
              <h4 style={{ fontSize: '18px', color: '#f2f2f2', marginBottom: '8px' }}>Message received!</h4>
              <p style={{ color: '#9a9a9a', fontSize: '14px' }}>
                Thanks for reaching out. I’ll get back to you directly at {formData.email || 'your email'} shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-input"
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  className="form-input"
                  placeholder="sconnor@enterprise.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Project or Inquiry</label>
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder="Tell me about what you're building..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <button type="submit" className="btn-primary" style={{ alignSelf: 'flex-start', marginTop: '8px' }}>
                <span>Send message</span>
                <Send size={15} />
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

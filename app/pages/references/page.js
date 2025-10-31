"use client";
import React from 'react';
import './references.css';

// Image data
const clientProjects = [
  {
    src: './paintemreference.png',
    alt: 'Paintem SoftaKoppi',
    name: 'Paintem Oy',
    url: 'https://paintem.fi/',
    description: 'Complete website redesign for a painting service company. Modernized the entire site with improved user experience, performance optimization, and responsive design.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
    year: '2024'
  },
  {
    src: './baskeri.png',
    alt: 'Baskeri Productions SoftaKoppi',
    name: 'Baskeri Productions',
    url: 'https://baskeriproductions.fi',
    description: 'Custom website development for a film production company. Implemented modern UI design and dynamic content to showcase their creative portfolio.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'SEO Optimization'],
    year: '2024'
  }, 
  {
    src: './petenpisnes.png',
    alt: 'Peten Pisnes SoftaKoppi',
    name: 'Peten Pisnes',
    url: 'https://petenpisnes.fi/',
    description: 'Professional business portfolio website with custom design. Focused on clean aesthetics, performance optimization, and user-friendly navigation.',
    tech: ['Next.js', 'TailwindCSS', 'Framer Motion', 'SEO Optimization'],
    year: '2024'
  }
];

const personalProjects = [
  {
    src: './porinanurkka.PNG',
    alt: 'Porinanurkka personal project',
    name: 'Porinanurkka',
    description: 'Community platform project with user interaction features',
    tech: ['Python', 'Flask', 'PostreSQL', 'Pytest']
  },
  {
    src: './sluuppishopetusivu.png',
    alt: 'SluuppiShop e-commerce',
    name: 'SluuppiShop',
    description: 'Full-featured e-commerce platform with shopping cart and checkout system',
    tech: ['Wordpress', 'WooCommerce', 'ELementor']
  },
  {
    src: './chesscom.png',
    alt: 'Chess.com API project',
    name: 'Chess.com Player Search',
    url: 'https://chess-yt2t.onrender.com/',
    description: 'Chess player statistics viewer using Chess.com API integration',
    tech: ['React', 'REST API', 'Chess.com API']
  },
    {
    src: './shoelando.png',
    alt: 'Shoelando Web Store',
    name: 'Shoelando Web Store',
    description: 'Shoe retail web store with product listings and shopping cart',
    tech: ['React', 'PHP', 'MySQL', 'Bootstrap', 'CSS']
  }
];

export default function References() {
  const handleClick = (url) => {
    if (url) window.open(url, '_blank');
  };


 return (
    <div id="references" className="projects-container">
      <div className="projects-wrapper bg-white p-4 p-md-5 rounded-3 shadow-lg">
        {/* Header */}
        <div className="projects-header">
          <h1 className="projects-main-title">My Projects</h1>
          <p className="projects-subtitle">
            A showcase of my client work and personal projects
          </p>
        </div>

        {/* Client Projects */}
        <div className="projects-section">
          <div className="projects-section-header">
            <div className="projects-section-title-wrapper">
              <span className="projects-icon">💼</span>
              <h2 className="projects-section-title">SoftaKoppi Client Projects</h2>
            </div>
            <p className="projects-section-desc">
              Professional web development projects delivered through my company SoftaKoppi in 2024.
            </p>
          </div>
          
          <div className="projects-grid">
            {clientProjects.map((project, index) => (
              <div
                key={index}
                className="project-card"
                onClick={() => handleClick(project.url)}
              >
                <div className="project-image-wrapper">
                  <img src={project.src} alt={project.alt} className="project-image" loading="lazy" />
                  <div className="project-year-badge">{project.year}</div>
                  <div className="project-overlay">
                    <span className="project-overlay-text">View Project →</span>
                  </div>
                </div>
                <div className="project-card-content">
                  <h3 className="project-title">{project.name}</h3>
                  <p className="project-desc">{project.description}</p>
                  <div className="project-tech-stack">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="project-tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects */}
        <div className="projects-section">
          <div className="projects-section-header">
            <div className="projects-section-title-wrapper">
              <span className="projects-icon">🚀</span>
              <h2 className="projects-section-title">Personal Projects</h2>
            </div>
            <p className="projects-section-desc">
              Side projects and experiments built during my studies at OAMK and University of Helsinki.
            </p>
          </div>
          
          <div className="personal-projects-grid">
            {personalProjects.map((project, index) => (
              <div
                key={index}
                className="personal-project-card"
                onClick={() => handleClick(project.url)}
              >
                <div className="personal-project-image-wrapper">
                  <img src={project.src} alt={project.alt} className="personal-project-image" loading="lazy" />
                </div>
                <div className="personal-project-content">
                  <h3 className="personal-project-title">{project.name}</h3>
                  <p className="personal-project-desc">{project.description}</p>
                  {project.tech && (
                    <div className="project-tech-stack">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="project-tech-badge-small">{tech}</span>
                      ))}
                    </div>
                  )}
                  {project.url && (
                    <div className="personal-project-view-link">View Project →</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GitHub CTA */}
        <div className="projects-cta">
          <div className="projects-cta-content">
            <h3 className="projects-cta-title">Want to see more?</h3>
            <p className="projects-cta-text">Check out my GitHub for more projects and code samples</p>
            <a 
              href="https://github.com/EetuHuttula" 
              target="_blank" 
              rel="noopener noreferrer"
              className="projects-cta-button"
            >
              <span className="projects-github-icon">⚡</span>
              View My GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
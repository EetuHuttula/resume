"use client";
import React from 'react';
import './footer.css';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {

  const date = new Date();
  const year = date.getFullYear();
  const pathname = usePathname();
  
  return (
    <div className="container-fluid shadow-xm">
      <footer className="d-flex flex-wrap justify-content-center align-items-evenly py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 text-body-secondary">&copy; {year} Eetu Huttula</span>
        </div>
  
        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="ms-3">
            <a className="text-body-secondary" href="https://www.linkedin.com/in/eetu-huttula-3a2714244/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
              <span className="ms-2">LinkedIn</span>
            </a>
          </li>
          <li className="ms-3">
            <a className="text-body-secondary" href="https://github.com/EetuHuttula" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} size="lg" />
              <span className="ms-2">GitHub</span>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

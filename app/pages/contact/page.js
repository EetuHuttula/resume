"use client";
import React from 'react';
import './ContactUs.css';
import { motion } from "framer-motion";

export default function ContactForm() {
  const email = "eetuhuttula99@gmail.com";
  const linkedIn = "https://www.linkedin.com/in/eetu-huttula-3a2714244/";
  const github = "https://github.com/EetuHuttula";

  return (
    <motion.div 
      id="contact"
      className="contact-wrapper"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="contact-content">
        <motion.div 
          className="text-center mb-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h1 className="contact-title">Let's Connect</h1>
          <p className="contact-subtitle">
            I'm always open to discussing new projects and opportunities
          </p>
        </motion.div>

        <motion.div 
          className="contact-links"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <a 
            href={`mailto:${email}`} 
            className="contact-button email-button"
            aria-label="Send email"
          >
            <i className="fas fa-envelope"></i>
            {email}
          </a>

          <a 
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-button linkedin-button"
          >
            <i className="fab fa-linkedin"></i>
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
}

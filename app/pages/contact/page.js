"use client";
import React from 'react';
import './ContactUs.css';
import { motion } from "framer-motion";

export default function ContactForm() {
  const email = "eetuhuttula99@gmail.com";

  return (
  <motion.div className="container"
  initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}>
    <div id="contact" className="d-flex flex-row justify-content-center mt-5 pt-5 contact-area section-padding">
      
        <div className="section-title text-center">
          <h1 className="">Contact</h1>
          <p className="text-secondary mb-1 p-3">Contact me via email</p>
        </div>
        
        <div className="text-center mt-3">
          <a 
            href={`mailto:${email}`} 
            className="btn btn-dark p-3"
            aria-label="Send email"
          >
             eetuhuttula99@gmail.com
          </a>
        </div>
      </div>
    </motion.div>
  );
}

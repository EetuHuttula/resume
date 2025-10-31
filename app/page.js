"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import "./styles.css";

export default function Home() {
  const roles = [
    "The Frontend Redemption",
    "Backend to the Future",
    "Fullstack Club",
    "The Bugfather",
    "Gone with the Git",
    "12 angry Tests",
    "The Debug Knight",
    "API Hard",
    "The Codefather",
    "Lord of the Stacks",
    "Jurassic JavaScript",
    "Back to the Python",
    "Guardians of the Galaxy.js",
    "Mission: Impossible – Bug Protocol",
    "Star Wars: The React Awakens",
    "The Silence of the Lambdas",
    "Harry Potter and the Chamber of Code",
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);

  // Role change
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => {
        let nextIndex;
        do {
          nextIndex = Math.floor(Math.random() * roles.length);
        } while (nextIndex === prevIndex);
        return nextIndex;
      });
    }, 2800);
    return () => clearInterval(intervalId);
  }, [roles.length]);

  // Show navbar on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="Home">
      {/* Navbar */}
      <motion.nav
        className={`navbar ${showNavbar ? "navbar-visible" : ""}`}
        initial={{ y: -100 }}
        animate={{ y: showNavbar ? 0 : -100 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        <Link href="#about">About</Link>
        <Link href="#references">References</Link>
        <Link href="#contact">Contact</Link>
      </motion.nav>

      {/* Background video */}
      <video
        src="/websitebg.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="video-background"
      />

      {/* Animated name */}
      <motion.h1
        className="text"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: 1,
          y: 0,
          textShadow: [
            "0 0 5px rgba(13, 110, 253, 0.4)",
            "0 0 10px rgba(13, 110, 253, 0.6)",
            "0 0 10px rgba(13, 110, 253, 0.9)",
          ],
        }}
        transition={{
          duration: 0.9,
          ease: "easeInOut",
        }}
        aria-label="Site Owner Name"
        style={{
          color: "white",
          fontSize: "4rem",
          fontWeight: "900",
          userSelect: "none",
          textAlign: "center",
          maxWidth: "75%",
          margin: "0 auto",
          zIndex: 2,
          position: "relative",
        }}
      >
        Eetu Huttula
      </motion.h1>

      {/* Hire me as dynamic text */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{
          opacity: 1,
          y: 0,
          textShadow: [
            "0 0 5px rgba(13, 110, 253, 0.4)",
            "0 0 10px rgba(13, 110, 253, 0.6)",
            "0 0 5px rgba(13, 110, 253, 0.9)",
          ],
        }}
        transition={{ duration: 0.9, delay: 0.4, ease: "easeOut" }}
        style={{
          color: "white",
          fontSize: "1.8rem",
          fontWeight: "600",
          textShadow: "0 0 6px rgba(0, 0, 0, 0.6)",
          marginTop: "10px",
          zIndex: 2,
          position: "relative",
          textAlign: "center",
        }}
        aria-live="polite"
      >
        <span
          style={{
            color: "#d8d8d8ff",
            textDecoration: "underline",
            fontWeight: "900",
          }}
        >
          {roles[currentRoleIndex]}
        </span>
      </motion.div>

      {/* Button container */}
      <motion.div
        className="button-container"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: "easeOut" }}
      >
        <Link href="#about" className="btn-home text-light">
          ABOUT
        </Link>
        <Link href="#references" className="btn-home text-light">
          References
        </Link>
        <Link href="#contact" className="btn-home text-light">
          Contact
        </Link>
      </motion.div>

            <motion.div
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6, delay: 1.2 }}
  whileHover={{ scale: 1.1 }}
  className="question-mark-tooltip"
>
  <span className="question-mark">?</span>
  <div className="tooltip-text">
    These are definitely not bug reports… probably.
  </div>
</motion.div>

</div>
  );
}

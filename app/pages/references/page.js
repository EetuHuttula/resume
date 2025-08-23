"use client";
import React from 'react';
import './references.css';
import { motion } from "framer-motion";

// Image data
const images = [
    {
        src: '/baskeri.png',
        alt: 'Baskeri Productions SoftaKoppi',
        name: 'Baskeri Productions',
        url: 'https://baskeriproductions.fi'
      }, 
      {
        src: '/paintemreference.png',
        alt: 'Paintem SoftaKoppi',
        name: 'Paintem',
        url: 'https://paintem.fi/'
      }, 
      {
        src: '/petenpisnes.png',
        alt: 'petenpisnes SoftaKoppi',
        name: 'Peten Pisnes',
        url: 'https://petenpisnes.fi/'
      },
    {
      src:'/porinanurkka.PNG',
      alt:'Porinanurkka oma projekti',
      name:'Porinanurkka'
    },
    {
      src:'/sluuppishopetusivu.png',
      alt:'SluuppiShop',
      name:'Sluuppishop'
    }
    ,
    {
      src:'/chesscom.png',
      alt:'Chess api projekti',
      name:'Chess.com player search',
      url:'https://chess-yt2t.onrender.com/'
    }
];

export default function References() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div id="references_box" className="container-fluid pt-5">
    <motion.div className="container reference-page"
      initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}>
      {images.map((image, index) => (
        <div
          key={index}
          className="image-box"
          onClick={() => handleClick(image.url)}
        >
          <img src={image.src} alt={image.alt} />
          <div className="image-name">{image.name}</div>
        </div>
      ))}
    </motion.div>
    </div>
  );
}

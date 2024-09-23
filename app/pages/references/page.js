"use client";
import React from 'react';
import './references.css';

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
  // Add more image objects as needed
];

export default function References() {
  const handleClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="container reference-page">
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
    </div>
  );
}

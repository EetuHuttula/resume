"use client";
import Link from "next/link";
import "./styles.css";
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="Home">
      
      <motion.img src="/Logovalkoinen.PNG" className="text"
       alt="softakoppilogo"
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.9 }} />
      <motion.div
       initial={{ opacity: 0, y: 50 }}
       animate={{ opacity: 1, y: 0 }}
       transition={{ duration: 0.9 }}
        className="button-container text-center">
        <Link href="/pages/services" className="btn btn-home pulse" >Tutustu Palveluihin</Link>
      </motion.div>
      <video
        src="/websitebg.mp4"
        autoPlay
        loop
        muted
        id="bg-video"
        className="video-background"
      />
    </div>
  );
}

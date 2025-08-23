"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import './navbar.css';

export default function MyNavbar() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <motion.nav
      className="container-fluid navbar navbar-expand-lg bg-dark navbar-dark shadow-lg"
      initial={{ y: 0, opacity: 1 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container">
        <Link href="/" className="nav-link text-white px-1 p-2 m-2">
          Eetu Huttula
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/" passHref className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pages/about" passHref className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pages/references" passHref className="nav-link">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pages/contact" passHref className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}

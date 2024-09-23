"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './navbar.css';

export default function MyNavbar() {
  const pathname = usePathname();

  if (pathname === '/') {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow-lg">
      <div className="container-fluid">
        <Link href="/"><img src="/Logovalkoinen.PNG" alt="SoftaKoppi Logo"  className="brand-logo"/></Link>
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
              <Link href="/pages/services" passHref className="nav-link">
                Palvelut
              </Link>
            </li>
          
        
            <li className="nav-item">
              <Link href="/pages/company" passHref className="nav-link">
                Yrityksestä
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/pages/references" passHref className="nav-link">
                Referenssit
              </Link>
            </li> 
             <li className="nav-item">
              <Link href="/pages/contact" passHref className="nav-link">
                Yhteystiedot
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

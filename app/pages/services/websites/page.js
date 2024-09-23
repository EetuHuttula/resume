import React from 'react';
import Link from 'next/link';
export default function Websites() {
  return (
    <div className="container">
      <h1 className="my-4 text-primary">Verkkosivut</h1>

      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid rounded shadow-xm  service-img" src="/websites-bg.webp" alt="Verkkosivut SoftaKoppi"/>
        </div>

        <div className="col-md-4">
          <h3 className="my-3">Verkkosivujen toteutus</h3>
          <p>Luomme upean ja toimivan verkkosivuston, joka heijastaa brändisi identiteettiä ja parantaa asiakaskokemusta. Tarjoamme kokonaisvaltaisia verkkosivuratkaisuja, jotka ovat responsiivisia, optimoituja ja täynnä moderneja ominaisuuksia.</p>
          <h3 className="my-3">Avainominaisuudet</h3>
          <ul>
            <li>Responsiivinen design - Verkkosivumme toimivat erinomaisesti kaikilla laitteilla, oli kyseessä sitten puhelin, tabletti tai tietokone.</li>
            <li>Hakukoneoptimointi - Sivustomme ovat optimoituja hakukoneita varten, jotta asiakkaasi löytävät sinut helposti.</li>
            <li>Integroitu analytiikka - Seuraa kävijöiden käyttäytymistä ja sivuston suorituskykyä reaaliaikaisella analytiikalla.</li>
          </ul>
          <div className="p-1">
          <Link href="/pages/contact" className="btn btn-primary shadow-xm">Ota yhteyttä</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

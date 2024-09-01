import React from 'react';
import Link from 'next/link';
import "../services.css"

export default function Maintenance() {
  return (
    <div className="container">
      <h1 className="my-4 text-primary">Ylläpito</h1>

      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid rounded shadow-xm service-img" src="/images/maintenance-bg.jpg" alt="Ylläpito SoftaKoppi"/>
        </div>

        <div className="col-md-4">
          <h3 className="my-3">Ylläpitopalvelua</h3>
          <p>Tarjoamme luotettavaa ja kattavaa ylläpitopalvelua varmistaaksemme verkkosivujen ja verkkokauppojen jatkuvan toimivuuden ja turvallisuuden. Meidän asiantuntijatiimimme varmistaa, että verkkosivusi ovat aina ajan tasalla ja suojattu.</p>
          <h3 className="my-3">Avainominaisuudet</h3>
          <ul>
            <li>Säännölliset päivitykset - Päivitämme sivustosi säännöllisesti uusilla ominaisuuksilla ja parannuksilla.</li>
            <li>Vianmääritys ja korjaukset - Korjaamme mahdolliset virheet ja tekniset ongelmat nopeasti ja tehokkaasti.</li>
            <li>Turvallisuusseuranta - Seuraamme sivustosi turvallisuutta jatkuvasti ja suojaamme sen mahdollisilta uhilta.</li>
          </ul>
          <div className="p-1">
          <Link href="/contact" className="btn btn-primary shadow-xm">Ota yhteyttä</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

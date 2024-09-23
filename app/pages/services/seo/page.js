import React from 'react';
import Link from 'next/link';
export default function SEO() {
  return (
    <div className="container">
      <h1 className="my-4 text-primary">Hakukoneoptimointi</h1>

      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid rounded shadow-xm  service-img" src="/Seo-bg.jpg" alt="SEO SoftaKoppi"/>
        </div>

        <div className="col-md-4">
          <h3 className="my-3">SEO</h3>
          <p>Teemme verkkosivustostasi löydettävän ja houkuttelevan hakukoneissa. Hyödynnämme moderneja SEO-strategioita, jotka parantavat näkyvyyttäsi ja auttavat sinua houkuttelemaan enemmän asiakkaita.</p>
          <h3 className="my-3">Avainominaisuudet</h3>
          <p>Sisällön optimointi on sydämemme asia. Luomme ja muokkaamme verkkosivustosi sisältöä niin, että se houkuttelee käyttäjiä ja täyttää hakukoneiden vaatimukset.</p>
          <ul>
            <li>Tehokas avainsanojen käyttö - Käytämme avainsanoja luonnollisesti ja tehokkaasti sisällössäsi, jotta se vastaa hakukoneiden vaatimuksia ja houkuttelee asiakkaita.</li>
            <li>Metatietojen optimointi - Optimoinnin avulla varmistamme, että sivustosi metatiedot, kuten otsikot ja kuvaukset, ovat hakukoneiden ystävällisiä ja houkuttelevat käyttäjiä klikkaamaan.</li>
            <li>Laadukas ja relevantti sisältö - Tuotamme sisältöä, joka on informatiivista, hyvin kirjoitettua ja vastaa käyttäjien kysymyksiin sekä tarpeisiin, mikä parantaa käyttäjäkokemusta ja hakukonesijoituksia.</li>
          </ul>
          <div className="p-1">
          <Link href="/pages/contact" className="btn btn-primary shadow-xm">Ota yhteyttä</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

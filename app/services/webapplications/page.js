import Link from 'next/link';
import React from 'react';

export default function WebApplications() {
  return (
    <div className="container">
      <h1 className="my-4 text-primary">Verkkoapplikaatiot</h1>

      <div className="row">
        <div className="col-md-8">
          <img className="img-fluid rounded shadow-xm  service-img" src="/images/webapps-bg.jpg" alt="Verkkoapplikaatiot SoftaKoppi"/>
        </div>

        <div className="col-md-4">
          <h3 className="my-3">Verkkoaplikaatioiden toteutus</h3>
          <p>Rakennamme räätälöityjä verkkoapplikaatioita liiketoimintasi tarpeisiin. Käytämme uusimpia teknologioita varmistaaksemme, että sovelluksesi on skaalautuva, turvallinen ja käyttäjäystävällinen.</p>
          <h3 className="my-3">Avainominaisuudet</h3>
          <ul>
            <li>Monipuolinen käyttäjähallinta - Hallitse käyttäjiä ja heidän oikeuksiaan vaivattomasti.</li>
            <li>Tietoturva-asetukset - Sovelluksemme ovat suojattu alan parhailla käytännöillä ja teknologioilla.</li>
            <li>API-integraatiot - Integroimme sovellukset saumattomasti muihin järjestelmiin ja palveluihin.</li>
          </ul>
          <div className="p-1">
          <Link href="/contact" className="btn btn-primary shadow-xm">Ota yhteyttä</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

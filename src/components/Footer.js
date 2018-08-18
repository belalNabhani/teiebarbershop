import React from "react";
import logoGold from "../assets/images/logo_gold.png";

const Footer = () => (
  <footer>
    <div className="container-fluid">
      <div className="voffset30" />
      <div className="row visible">
        <div className="col-md-4 col-sm-6">
          <div className="voffset30" />
          <img src={logoGold} alt="logo" width="210" />
          <div className="voffset20" />
          <p>Teie barbershop er en fantastisk frisør som går utover det tradisjonelle hvor menn møtes i den lokale Barber shop for å få en unik opplevelse som går utover det hårklipp og barbering.</p>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="voffset30" />
          <h5 className="title-small cp">Surf</h5>
          <div className="voffset20" />
          <ul className="list-menu">
            <li><a href="#home">Hjem</a></li>
            <li><a href="#introducing">Om oss</a></li>
            <li><a href="#key-features">Priser</a></li>
            {/* <li><a href="#portfolio">Galleri</a></li> */}
            <li><a href="#contact">Kontakt</a></li>
          </ul>
        </div>
        <div className="col-md-4 col-sm-6">
          <div className="voffset30" />
          <h5 className="title-small cp">Kontakt oss</h5>
          <div className="voffset20" />
          <div id="contact-us">
            <p className="contact-link fa fa-envelope-o">teie_barbershop@hotmail.com</p>
            <p className="contact-link fa fa-mobile">+47-412-62-843</p>
            <p className="contact-link fa fa-map-marker">Smidsrødveien, 9 <br/>3120, Nøtterøy</p>
          </div>
        </div>
      </div>
      <div className="voffset30" />
    </div>
    <div className="copyright">
      <div className="voffset40" />
      <p>copyright 2018 Teie Barber Shop AS. all rights reserved. Utviklet av WEBSTACK AS</p>
      <div className="voffset40" />
    </div>
  </footer>
);

export default Footer;

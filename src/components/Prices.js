import React from "react";
import cream from '../assets/images/cream.svg'
import kid from '../assets/images/kid-hair.svg'
import giftCard from '../assets/images/gift-card.svg'
const Prices = () => (
  <div>
    <div id="key-features" className="section dark-theme">
      <div className="container">
        <div className="row visible">
          <div className="col-md-8 col-md-offset-2">
            <div className="voffset70" />
            <h1 className="title invert">Tjenester &amp; Priser</h1>
            <p className="subtitle colored">Vi tilbyr et bredt av ulike tjenester. Få klassisk hårklipp og skjegg trim.</p>
            <div className="voffset90" />
          </div>
        </div>
      </div>
    </div>
    <div className="section features dark-theme">
      <div className="container">
        <div className="row visible">
            <div className="col-sm-4">
              <div className="horizontal-border fadeInUp">
                <div className="voffset40" />
                <i className="icon-barber-chair invert" />
                <div className="voffset40" />
                <h4 className="titlefeat invert">Herre Hårklipp</h4>
                <div className="voffset30" />
                <p className="textfeat">Velg den beste stilen for hodeformen, og vi vil gi deg den perfekte klipp til å bli lagt merke til.</p>
                <br/>
                <p>Hårklipp: 450 kr</p>
                <p>Maskinklip(Hele hodet uten form): 300 kr</p>
                <p>Hårklipp + Skjegg: 800 kr </p>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="horizontal-border fadeInUp">
                <div className="voffset40" />
                <i className="icon-electric-razor" />
                <div className="voffset40" />
                <h4 className="titlefeat">Skjegg Trim/Forming</h4>
                <div className="voffset30" />
                <p className="textfeat">Få et komplett skjegg trim og gi det en ren, naturlig stil.</p>
                <br/>
                <p>Hot towel shave: 400 kr</p>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col-sm-4">
            <div className="horizontal-border fadeInUp">
              <div className="voffset40" />
              <i className="icon-manual-razor" />
              <div className="voffset40" />
              <h4 className="titlefeat">Shave</h4>
              <div className="voffset30" />
              <p className="textfeat">For best resultat kombinerer vi moderne og tradisjonelle metoder.</p>
              <br/>
              <p>Hot towel shave</p>
              <p>Full barbering: 400 kr</p>
              <p>Hodet + Skjegg: 700 kr</p>
              <br/>
            </div>
          </div>
        </div>
        <div className="voffset80" />
        <div className="row visible">
            <div className="col-sm-4">
              <div className="horizontal-border fadeInUp">
                <div className="voffset40" />
                <img src={giftCard} />
                <div className="voffset40" />
                <h4 className="titlefeat">Gavekort</h4>
                <div className="voffset30" />
                <p className="textfeat">Du kan kjøpe Gavekort og velge behandlingen</p>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br />
                <br />
                <br />
                <br />
                <br />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="horizontal-border fadeInUp">
                <div className="voffset40" />
                <img src={cream} />
                <div className="voffset40" />
                <h4 className="titlefeat">Behandling</h4>
                <div className="voffset30" />
                <p className="textfeat">Vi kan fjerne hår som plager deg i ansiktet og øre med voks eller tråd.</p>
                <br />
                <p>Fjerne hår på ører: 100</p>
                <p>Fjerne hår i nese: 100</p>
                <p>Fjerne hår på ansikt: 150</p>
                <p>Øyenbryn med tråd: 75</p>
                <p>Full Pakke: 300</p>
              </div>
            </div>
            <div className="col-sm-4">
            <div className="horizontal-border fadeInUp">
              <div className="voffset40" />
              <img src={kid} />
              <div className="voffset40" />
              <h4 className="titlefeat">Barnklipp</h4>
              <div className="voffset30" />
              <p className="textfeat">Alder fra 5 år til 10 år: 300 kr</p>
              <p>Fra 11 til 15 år: 375 kr</p>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
        <div className="voffset110" />
      </div>
    </div>
  </div>
);

export default Prices;

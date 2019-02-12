import React from "react";
import cream from '../assets/images/cream.svg'
import kid from '../assets/images/kid-hair.svg'
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
              <p className="textfeat">Velg den beste stilen for hodeformen, og vi vil gi deg den perfekte klipp til å bli lagt merke til.<br/>350 kr</p>
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
              <p>Hot towel shave 350 kr</p>
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
              <p>Hot towel shave 350 kr</p>
            </div>
          </div>
        </div>
        <div className="voffset80" />
        <div className="row visible">
          <div className="col-sm-4">
            <div className="horizontal-border fadeInUp">
              <div className="voffset40" />
              <i className="icon-scissors" />
              <div className="voffset40" />
              <h4 className="titlefeat">Bart Trim</h4>
              <div className="voffset30" />
              <p className="textfeat">En perfekt bart trim for å holde utseendet rent og stilig.<br/>100 kr</p>
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
              <p>Pris fra 100 kr</p>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="horizontal-border fadeInUp">
              <div className="voffset40" />
              <img src={kid} />
              <div className="voffset40" />
              <h4 className="titlefeat">Barnklipp</h4>
              <div className="voffset30" />
              <p className="textfeat">Alder fra 5 år til 10 år<br/>250 kr</p>
              <p>Fra 11 til 15 år</p>
              <p>300 kr</p>
            </div>
          </div>
        </div>
        <div className="voffset110" />
      </div>
    </div>
  </div>
);

export default Prices;

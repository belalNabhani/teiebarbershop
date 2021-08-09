import React from "react";

const OpeningHours = () => (
  <div className="banner full my-parallax">
    <div className="container">
      <div className="row visible">
        <div className="col-md-4 col-md-offset-4">
          <div className="voffset110" />
          <h1 className="title colored invert">ÅPNINGSTIDER</h1>
          <div className="voffset10" />
          <div className="separator invert" />
          <table className="table center">
            <tbody>
              <tr>
                <td className="subtitle big invert left">Mandag</td>
                <td className="subtitle big invert left">:</td>
                <td className="subtitle big invert">10:00–18:00</td>
              </tr>
              <tr>
                <td className="subtitle big invert left">Tirsdag</td>
                <td className="subtitle big invert left">:</td>
                <td className="subtitle big invert">10:00–18:00</td>
              </tr>
              <tr>
                <td className="subtitle big invert left">Onsdag</td>
                <td className="subtitle big invert">:</td>
                <td className="subtitle big invert">10:00–18:00</td>
              </tr>
              <tr>
                <td className="subtitle big invert left">Torsdag</td>
                <td className="subtitle big invert left">:</td>
                <td className="subtitle big invert">10:00–18:00</td>
              </tr>
              <tr>
                <td className="subtitle big invert left">Fredag</td>
                <td className="subtitle big invert left">:</td>
                <td className="subtitle big invert">10:00–18:00</td>
              </tr>
              <tr>
                <td className="subtitle big invert left">Lørdag</td>
                <td className="subtitle big invert left">:</td>
                <td className="subtitle big invert">10:00–16:00</td>
              </tr>
              <tr>
                <td className="subtitle big invert left">Søndag</td>
                <td className="subtitle big invert left">:</td>
                <td className="subtitle big invert">Stengt</td>
              </tr>
            </tbody>
          </table>
          {/* <p className="subtitle big invert " style={{textAlign:'left'}}>Mandag : 10:00–18:00</p>
          <p className="subtitle big invert "style={{textAlign:'left'}}>Tirdag : 10:00–18:00</p>
          <p className="subtitle big invert">Onsdag : 10:00–18:00</p>
          <p className="subtitle big invert">Torsdag : 10:00–18:00</p>
          <p className="subtitle big invert">Fredag : 10:00–18:00</p>
          <p className="subtitle big invert">Lørdag : 10:00–16:30</p>
          <p className="subtitle big invert">Søndag : Stengt</p> */}
          <div className="voffset60" />
        </div>
      </div>
    </div>
  </div>
);

export default OpeningHours;

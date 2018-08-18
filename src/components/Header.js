import React from "react"

import logo from "../assets/images/logo_teie.png"

class Header extends React.Component {
  state = {

  }
  render() {
    return (
      <header id="jHeader" className="invert">
        <nav className="navbar navbar-default" role="navigation">
          <div className="navbar-header navbar-ex1-collapse in">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
              <span className="sr-only">Desplegar navegación</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand"><img src={logo} alt="logo" /></a>
          </div>
          <div id="navbar-murdock" className="collapse navbar-collapse navbar-ex1-collapse">
            <ul className="nav navbar-nav navbar-right invert">
              <li className="active"><a href="#home">hjem</a></li>
              <li><a href="#key-features">Priser</a></li>
              <li><a href="#introducing">Om oss</a></li>
              {/* <li><a href="#portfolio">Galleri</a></li> */}
              <li><a href="#contact">Kontakt</a></li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;

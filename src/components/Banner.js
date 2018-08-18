import React from "react";

import title from '../assets/images/title.png';

class Banner extends React.Component {
  // state = {
  //   loading: true
  // };
  // componentDidMount = () => {
  //   setTimeout(() => {
  //     this.setState({ loading: false });
  //   }, 1500);
  // }

  render() {
    return (
      <section className="intro full-width jIntro" id="home">
        <div id="mask">
          <div className="loader-minimal"></div>
        </div>
        <div className="container-full">
          <div className="row visible row-no-gutter">
            <div className="col-md-12">
              <div className="slider-intro">
                <div id="slides">
                  <div className="slides-container" id="banner-background">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="vcenter text-center text-overlay">
              <div className="item">
                <img id="teie-title" src={title}/>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;

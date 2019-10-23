import React from "react"
import {Spring} from "react-spring";
import title from '../assets/images/title.png'

class Banner extends React.Component {
  state = {
    loading: true
  };
  componentDidMount = () => {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1500);
  }

  render() {
    return (
      <section className="intro full-width jIntro" id="home">
        {this.state.loading ? <Spring delay={1000} from={{ opacity: 1, height: '100%', width: '100%' }} to={{ opacity: 0, height: 0, width: 0  }}>
          {styles => <div id ="mask" style={styles} />}
        </Spring>
        : null
        }

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
              <div className="item" id="">
                <img id="teie-title" src={title} width="60%"/>
              </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Banner;

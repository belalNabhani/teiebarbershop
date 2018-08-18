import React from "react";
import "../assets/css/main.css";
import "../assets/css/vendor.css";

import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Prices from "../components/Prices";
import Gallery from "../components/Gallery";
import OpeningHours from "../components/OpeningHours";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div className="loaded">
    <Header />
    <Banner />
    <About />
    <Prices />
    <OpeningHours />
    {/* <Gallery /> */}
    <Contact />
    <Footer />
  </div>
);

export default IndexPage;

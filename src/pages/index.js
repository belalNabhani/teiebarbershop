import * as React from "react"
import "../assets/css/main.css";
import "../assets/css/vendor.css";

import Header from "../components/Header";
import Banner from "../components/Banner";
import About from "../components/About";
import Prices from "../components/Prices";
// import Gallery from "../components/Gallery";
import OpeningHours from "../components/OpeningHours";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" lang="No-nb" />
    <div className="loaded">
      <Header />
      <Banner />
      <About />
      <Prices />
      <OpeningHours />
      <Contact />
      {/* <Gallery /> */}
      <Footer />
    </div>
  </Layout>
)

export default IndexPage

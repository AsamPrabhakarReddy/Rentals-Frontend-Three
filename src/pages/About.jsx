import React from "react";
import NavBar from "./../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Reviews from "../components/Reviews";
import Footer from "./../components/Footer";
import ScrollToTop from "./../components/ScrollToTop";
import MainLayout from "./../components/MainLayout";
import Navbar from "./../components/Navbar";
import AboutOne from "../components/AboutOne";
import AboutTwo from "../components/AboutTwo";
const About = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <Navbar />
      <AboutOne/>
      <AboutTwo/>
      {/* <ScrollToTop /> */}
      {/* <Hero /> */}
      {/* <Carousel /> */}
      {/* <Reviews /> */}
      <Footer />
    </div>
  );
};

export default About;

import React from "react";
import NavBar from "./../components/Navbar";
import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Reviews from "../components/Reviews";
import Footer from "./../components/Footer";
import ScrollToTop from "./../components/ScrollToTop";
import MainLayout from "./../components/MainLayout";

const Home = () => {
  return (
    <div>
      {/* <NavBar /> */}
      <MainLayout />
      <ScrollToTop />
      {/* <Hero /> */}
      <Carousel />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

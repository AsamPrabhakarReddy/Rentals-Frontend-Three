import React from "react";
import NavBar from "./Navbar";
import Hero from "./Hero";
import SecNavbar from './SecNavbar';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar */}
      <SecNavbar />
      {/* Hero */}
      <Hero />
    </div>
  );
};

export default MainLayout;

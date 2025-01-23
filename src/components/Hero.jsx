import React, { useState, useEffect } from "react";
import HeroImage from "../assets/HeroSix.jpg";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const slides = [
    {
      image: HeroImage,
      heading: "Streamline your rentals with us.",
      paragraph:
        "From seamless booking processes to personalized support, we make managing your rentals.",
      buttonText: "Join RMA Housing",
      buttonLink: "/login",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <section className="relative h-full w-full overflow-hidden select-none">
      {/* Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence>
          <motion.img
            key={slides[currentIndex].image}
            src={slides[currentIndex].image}
            alt={`Slide ${currentIndex + 1}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 object-cover w-full h-full"
          />
        </AnimatePresence>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-whiteShade lg:text-start text-center px-4 ">
        <div className="max-w-[1400px] mx-auto w-[100%] mt-20 lg:mt-24 lg:px-2 space-y-4">
          <p className="uppercase font-medium text-whiteShade">
            rent better and feel safe stronger.
          </p>
          <h1 className="md:text-5xl text-4xl font-semibold text-whiteShade">
            {slides[currentIndex].heading}
          </h1>
          <p className="pt-4 lg:text-lg text-whiteShade">
            {slides[currentIndex].paragraph}
          </p>
          <div className="pt-4">
            <a
              href={slides[currentIndex].buttonLink}
              className="inline-block px-[48px] py-3 border-[1px] bg-whiteShade border-whiteShade text-[#1a1a1a] rounded-full font-medium"
            >
              {slides[currentIndex].buttonText}
            </a>
          </div>
        </div>

        <div className="border-t-[2px] xl:block hidden mt-[90px] border-navColor max-w-[1400px] mx-auto w-[100%]">
          <div className="grid grid-cols-7 gap-4 mt-8">
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Tenant Screening</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Rental Listing</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Digital Leases</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Price Analysis</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Credit Boost</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Rental Profile</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Online Payment</span>
            </div>
          </div>

          <div className="grid grid-cols-6 gap-4 mt-4 mx-8">
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Find Next Place</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>RMA Credits</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Property Audit</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Track Maintenance</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Landlord Resource</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>RMA Screening</span>
            </div>
          </div>
        </div>

        <div className="block lg:hidden border-navColor max-w-[1400px] mx-auto w-[100%]">
          <div className="grid grid-cols-2 gap-4 mt-8">
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Credit Boost</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Rental Listing</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Digital Leases</span>
            </div>
            <div className="border-[1px] text-center relative  px-8 py-[10px] rounded text-sm border-navColor bg-navColor text-white font-medium ">
              <span>Price Analysis</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

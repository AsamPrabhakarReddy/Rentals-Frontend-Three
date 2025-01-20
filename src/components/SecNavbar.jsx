import { useState, useEffect } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
// import logo from "../assets/logo.png";
// import heroimg from "../assets/HeroLogo.png";
import { FaThreads } from "react-icons/fa6";

const SecNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight / 4) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-20 transition-all duration-300 ease-in-out select-none ${
        isScrolled ? "bg-white shadow-md py-6" : "bg-transparent py-6"
      }`}
    >
      <div
        className={`lg:rounded-full max-w-[1400px] mx-auto flex justify-between items-center px-4 lg:bg-navColor ${
          isScrolled ? "lg:py-0" : "lg:py-2"
        }`}
      >
        {/* <a href="/" className="flex flex-row items-center md:ml-0 ml-1  ">
          <img
            src={isScrolled ? logo : heroimg}
            className="lg:w-48 w-44 h-auto "
            alt="logo"
          />
        </a> */}
        <a href="/" className="flex items-center">
          <div
            className={`h-12 w-12 bg-mainColor rounded-full flex items-center justify-center text-white font-bold transition-all duration-300 ease-in-out ${
              isScrolled ? "w-12 h-12 rounded-full" : "w-10 h-10 rounded-full"
            }`}
          >
            RMA
          </div>

          <span
            className={`text-2xl font-semibold ml-1 transition-all duration-300 ease-in-out text-white ${
              isScrolled ? " text-black" : ""
            }`}
          >
            Housing.
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex flex-grow justify-center space-x-8 items-center">
          <li
            className={` group transition  duration-300  ${
              isScrolled
                ? "text-footerHeading font-normal hover:text-colorFour transition ease-in-out duration-500"
                : "text-white hover:text-colorFour transition ease-in-out duration-500"
            }`}
          >
            <a href="/">Home</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-white"
              }`}
            ></div>
          </li>

          <li
            className={` group transition font-normal duration-300 ${
              isScrolled
                ? "text-footerHeading hover:text-colorFour transition ease-in-out duration-500"
                : "text-white hover:text-colorFour transition ease-in-out duration-500"
            }`}
          >
            <a href="/why-alcheminds">About Us</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-white"
              }`}
            ></div>
          </li>

          <li
            className={` group transition font-normal duration-300 ${
              isScrolled
                ? "text-footerHeading hover:text-colorFour transition ease-in-out duration-500"
                : "text-white hover:text-colorFour transition ease-in-out duration-500"
            }`}
          >
            <a href="/our-services">Services</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-white"
              }`}
            ></div>
          </li>

          <li
            className={` group transition font-normal duration-300 ${
              isScrolled
                ? "text-footerHeading hover:text-colorFour transition ease-in-out duration-500"
                : "text-white hover:text-colorFour transition ease-in-out duration-500"
            }`}
          >
            <a href="/our-products">Products</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-white"
              }`}
            ></div>
          </li>

          <li
            className={` group transition font-normal duration-300 ${
              isScrolled
                ? "text-footerHeading hover:text-colorFour transition ease-in-out duration-500"
                : "text-white hover:text-colorFour transition ease-in-out duration-500"
            }`}
          >
            <a href="/careers">Careers</a>
            <div
              className={` h-[2px] w-0 group-hover:w-full transition-all duration-300 ${
                isScrolled ? "bg-mainColor" : "bg-white"
              }`}
            ></div>
          </li>
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/contact-alcheminds"
            // className="uppercase border-[1px] relative lg:px-6 md:px-4 py-2 rounded bg-colorFour text-sm border-colorFour hover:border-colorFour text-white font-medium overflow-hidden transition-all duration-500 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-auto before:w-0 before:bg-white before:duration-500 before:ease-out hover:text-colorFour hover:before:h-40 hover:before:w-48 "
            className={`border-[1px] relative  lg:px-6 md:px-4 py-2 rounded-full text-sm border-mainColor transition duration-500 bg-mainColor ${
              isScrolled
                ? "border-mainColor bg-mainColor text-white font-medium overflow-hidden transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-auto before:w-0  before:duration-300 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 "
                : "border-navGray font-medium text-white"
            }`}
          >
            <span className="relative z-10">Get Started</span>
          </a>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <AiOutlineClose
                className={`w-5 h-5 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              />
            )}
          </button>
        </div>

        <div
          className={
            !isMobileMenuOpen
              ? "lg:hidden fixed left-[-100%] h-[100%] ease-in-out duration-1000 "
              : "lg:hidden fixed left-0 top-0 w-[70%] h-[100%] bg-white ease-in-out duration-1000 rounded-b-lg z-10 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]"
          }
        >
          {/* <a href="/" className="flex ml-6 mt-6">
            <img src={logo} className="lg:w-48 w-44 h-auto" alt="logo" />
          </a> */}
          <a href="/">
            <h1 className="w-full text-2xl text-mainColor font-bold m-4 cursor-pointer">
              RMA <span className="text-black">Housing.</span>
            </h1>
          </a>

          <ul className="p-4">
            <li className="p-4 border-b border-gray-400">
              <a
                href="/"
                className="flex items-center justify-between cursor-pointer text-footerLinks "
              >
                Home
              </a>
            </li>

            <li className="p-4 border-b border-gray-400">
              <a
                href="/why-alcheminds"
                className="flex items-center justify-between cursor-pointer text-footerLinks "
              >
                About Us
              </a>
            </li>

            <li className="p-4 border-b border-gray-400">
              <a
                href="/our-services"
                className="flex items-center justify-between cursor-pointer text-footerLinks"
              >
                Services
              </a>
            </li>

            <li className="p-4 border-b border-gray-400">
              <a
                href="/our-products"
                className="flex items-center justify-between cursor-pointer text-footerLinks"
              >
                Products
              </a>
            </li>

            <li className="p-4 border-b border-gray-400">
              <a
                href="/careers"
                className="flex items-center justify-between cursor-pointer text-footerLinks"
              >
                Careers
              </a>
            </li>
            {/* <li className="p-4 border-b border-gray-400">
              <a
                href="/our-network"
                className="flex items-center justify-between cursor-pointer text-footerLinks"
              >
                Network
              </a>
            </li> */}

            <li className="p-4 border-b border-gray-400">
              <a
                href="/contact-alcheminds"
                className="flex items-center justify-between cursor-pointer text-footerLinks "
              >
                Contact Us
              </a>
            </li>
          </ul>

          <div className="px-4">
            <h5 className="p-4 text-xl text-footerLinks font-semibold">
              Follow us on
            </h5>
            <div className="p-4">
              <div className="grid grid-cols-4">
                <a href="https://www.linkedin.com/company/alchemindssolutions">
                  <FaLinkedinIn className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="https://x.com/alchemindsindia">
                  <FaXTwitter className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="https://www.instagram.com/alchemindssolutions/">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="https://www.threads.net/@alchemindssolutions">
                  {" "}
                  <FaThreads className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default SecNavbar;

import React, { useState, useEffect } from "react";
import { RiCriminalFill, RiGuideFill, RiMenu3Fill } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import {
  MdAccountBalanceWallet,
  MdArticle,
  MdCable,
  MdOutlineHomeRepairService,
  MdOutlineWorkHistory,
  MdPayment,
} from "react-icons/md";
import {
  FaCalculator,
  FaCreditCard,
  FaDollarSign,
  FaHouseCircleCheck,
  FaLocationArrow,
  FaNewspaper,
  FaUser,
  FaXTwitter,
} from "react-icons/fa6";
import { FaInstagram, FaUserAlt } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FiChevronDown, FiPaperclip, FiPieChart } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import { GrResources, GrTechnology } from "react-icons/gr";
import { IoTicketSharp } from "react-icons/io5";
import { VscLaw } from "react-icons/vsc";
import HomeImg from "../assets/Home.svg";

const Navbar = () => {
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
        isScrolled ? "bg-white shadow-md py-6" : "bg-white py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-4">
        <a href="/" className="flex items-center flex-row">
          <img src={HomeImg} alt="logo" className="md:w-8 md:h-8 h-6 w-6" />

          <span
            className={`lg:text-2xl text-xl ml-1 mt-[2px] transition-all duration-300 ease-in-out ${
              isScrolled ? "font-bold text-black" : "text-black font-bold"
            }`}
          >
            RMA Housing.
          </span>
        </a>

        <ul className="hidden lg:flex flex-grow justify-center space-x-8 items-center">
          <Tabs />
          <a href="/pricing" className="text-black">
            Pricing
          </a>
        </ul>

        {/* Login Button */}
        <div className="hidden lg:flex space-x-4">
          <a
            href="/login"
            className={`border-[1px] relative font-medium px-8 py-[10px] rounded-full text-sm  transition duration-500 ${
              isScrolled
                ? "border-mainColor bg-mainColor text-white font-medium overflow-hidden transition-all duration-200 before:absolute before:bottom-0 before:left-0 before:right-0 before:top-0 before:m-auto before:h-auto before:w-0  before:duration-300 before:ease-out hover:text-white hover:before:h-40 hover:before:w-48 "
                : "border-mainColor bg-mainColor text-white"
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
                  isScrolled ? "text-footerLinks" : "text-navGray"
                }`}
              />
            ) : (
              <RiMenu3Fill
                className={`w-5 h-5 ${
                  isScrolled ? "text-footerLinks" : "text-navGray"
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
                <a href="">
                  <FaLinkedinIn className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  <FaXTwitter className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaInstagram className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
                <a href="">
                  {" "}
                  <FaFacebookF className="w-6 h-6 text-footerLinks duration-1000 hover:text-mainColor ease-in-out" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

const Tabs = () => {
  const [selected, setSelected] = useState(null);
  const [dir, setDir] = useState(null);

  const handleSetSelected = (val) => {
    if (typeof selected === "number" && typeof val === "number") {
      setDir(selected > val ? "r" : "l");
    } else if (val === null) {
      setDir(null);
    }

    setSelected(val);
  };

  return (
    <div
      onMouseLeave={() => handleSetSelected(null)}
      className="relative flex h-fit gap-2 "
    >
      {TABS.map((t) => {
        return (
          <Tab
            key={t.id}
            selected={selected}
            handleSetSelected={handleSetSelected}
            tab={t.id}
          >
            {t.title}
          </Tab>
        );
      })}

      <AnimatePresence>
        {selected && <Content dir={dir} selected={selected} />}
      </AnimatePresence>
    </div>
  );
};

const Tab = ({ children, tab, handleSetSelected, selected }) => {
  return (
    <button
      id={`shift-tab-${tab}`}
      onMouseEnter={() => handleSetSelected(tab)}
      onClick={() => handleSetSelected(tab)}
      className={`flex items-center gap-1 rounded-full md:text-sm lg:text-base px-3 py-1.5 transition-colors ${
        selected === tab ? "  text-black" : "text-black"
      }`}
    >
      <span>{children}</span>
      <FiChevronDown
        className={`transition-transform ${
          selected === tab ? "rotate-180" : ""
        }`}
      />
    </button>
  );
};

const Content = ({ selected, dir }) => {
  return (
    <motion.div
      id="overlay-content"
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        y: 8,
      }}
      className="absolute left-0 top-[calc(100%_+_24px)] w-[100%] bg-white rounded-lg shadow p-4"
    >
      <Bridge />
      <Nub selected={selected} />

      {TABS.map((t) => {
        return (
          <div className="overflow-hidden " key={t.id}>
            {selected === t.id && (
              <motion.div
                initial={{
                  opacity: 0,
                  x: dir === "l" ? 100 : dir === "r" ? -100 : 0,
                }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.25, ease: "easeInOut" }}
              >
                <t.Component />
              </motion.div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
};

const Bridge = () => (
  <div className="absolute -top-[24px] left-0 right-0 h-[24px]" />
);

const Nub = ({ selected }) => {
  const [left, setLeft] = useState(0);

  useEffect(() => {
    moveNub();
  }, [selected]);

  const moveNub = () => {
    if (selected) {
      const hoveredTab = document.getElementById(`shift-tab-${selected}`);
      const overlayContent = document.getElementById("overlay-content");

      if (!hoveredTab || !overlayContent) return;

      const tabRect = hoveredTab.getBoundingClientRect();
      const { left: contentLeft } = overlayContent.getBoundingClientRect();

      const tabCenter = tabRect.left + tabRect.width / 2 - contentLeft;

      setLeft(tabCenter);
    }
  };

  return (
    <motion.span
      style={{
        clipPath: "polygon(0 0, 100% 0, 50% 50%, 0% 100%)",
      }}
      animate={{ left }}
      transition={{ duration: 0.25, ease: "easeInOut" }}
      className="absolute left-1/2 top-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-tl bg-white"
    />
  );
};

const Blog = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaUser className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Renter Profile
        </span>
      </a>
      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdCable className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Online Rent Payments
        </span>
      </a>
      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPaperclip className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Digital Lease
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <IoTicketSharp className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Maintenance Tickets
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaCreditCard className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Credit Boost
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaLocationArrow className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Find Next Place
        </span>
      </a>
    </div>
  );
};

const Homebar = () => {
  return (
    <div className="grid grid-cols-4 gap-4 ">
      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaHouseCircleCheck className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Rental Listings
        </span>
      </a>
      <a
        href="/rental-applications"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaDollarSign className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Rental Applications
        </span>
      </a>
      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaUserAlt className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Tenant Screening
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FiPieChart className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Digital Leases
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <GrTechnology className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Online Rent Collection
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdPayment className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Fastpay
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdOutlineHomeRepairService className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Maintenance Tracking
        </span>
      </a>
      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdOutlineWorkHistory className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Rent Price Analysis
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaCalculator className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Rent Property Calculator
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdAccountBalanceWallet className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Property Accounting
        </span>
      </a>

      <a
        href="/rental-listings"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <RiCriminalFill className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Credit, Criminal, Eviction Reports
        </span>
      </a>
    </div>
  );
};

const ContactBar = () => {
  return (
    <div className="grid grid-cols-3 gap-4 ">
      <a
        href="/about-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <FaNewspaper className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          About Us
        </span>
      </a>
      <a
        href="/contact-us"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdArticle className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Contact Us
        </span>
      </a>
      <a
        href="/testimonials"
        className="flex w-full flex-col items-center justify-center py-2 text-neutral-400 transition-colors hover:text-neutral-50"
      >
        <MdArticle className="mb-2 text-xl text-mainColor" />
        <span className="text-xs text-center font-semibold text-gray-700">
          Testimonials
        </span>
      </a>
    </div>
  );
};

const TABS = [
  { title: "Landlords", Component: Homebar },
  {
    title: "Tenants",
    Component: Blog,
  },
  {
    title: "Resources",
    Component: ContactBar,
  },
].map((n, idx) => ({ ...n, id: idx + 1 }));

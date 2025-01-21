// import { Autoplay, A11y } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/autoplay";
// import "swiper/css/controller";

// const Hero = () => {
//   const data = [
//     {
//       image:
//         "https://images.pexels.com/photos/10628470/pexels-photo-10628470.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       heading: "Streamline your rentals with us",
//       paragraph: "Feel good about the way you manage your rentals with us",
//       button: "Explore with us",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/20296315/pexels-photo-20296315/free-photo-of-houses-by-river.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       heading: "Become a professional landlord.",
//       paragraph: "List your rental property for free with us",
//       button: "Make a better future",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/4469146/pexels-photo-4469146.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       heading: "Request credit, criminal background reports",
//       paragraph:
//         "Get important information on interested tenants by requesting a background check, ",
//       button: "Collaborate with us",
//     },
//     {
//       image:
//         "https://images.pexels.com/photos/1608102/pexels-photo-1608102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
//       heading: "Access lawyer-reviewed lease agreement",
//       paragraph:
//         "Our lease agreement ensure your tenants are protected during the lease term.",
//       button: "Journey Starts here",
//     },
//   ];

//   return (
//     <div className="w-full bg-[#f8f9fa] lg:h-[75vh] h-auto mt-24">
//       <Swiper
//         modules={[Autoplay, A11y]}
//         spaceBetween={30}
//         slidesPerView={1}
//         autoplay
//       >
//         {data.map((img, index) => (
//           <SwiperSlide key={index}>
//             <div className="relative">
//               <img
//                 src={img.image}
//                 alt={`slide-${index + 1}`}
//                 // className="w-full lg:h-[550px] h-[450px] lg:object-cover object-center"
//                 className="w-full h-[500px] lg:object-cover object-center"
//               />
//               <div className="absolute inset-0 bg-gray-700 opacity-50 rounded-md"></div>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <h2 className="text-white text-center lg:text-6xl text-4xl font-bold">
//                   {img.heading}
//                 </h2>

//                 <p className="text-white text-center lg:text-2xl text-base mt-4 ">
//                   {img.paragraph}
//                 </p>

//                 {/* <div className="md:w-full w-[90%] md:hidden block">
//                   <form class="md:max-w-xl max-w-sm mx-auto mt-8">
//                     <label
//                       for="default-search"
//                       class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
//                     >
//                       Search
//                     </label>
//                     <div class="relative">
//                       <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
//                         <svg
//                           class="w-4 h-4 text-gray-500 dark:text-gray-400"
//                           aria-hidden="true"
//                           xmlns="http://www.w3.org/2000/svg"
//                           fill="none"
//                           viewBox="0 0 20 20"
//                         >
//                           <path
//                             stroke="currentColor"
//                             stroke-linecap="round"
//                             stroke-linejoin="round"
//                             stroke-width="2"
//                             d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
//                           />
//                         </svg>
//                       </div>
//                       <input
//                         type="search"
//                         id="default-search"
//                         class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 rounded-full"
//                         placeholder="Search for a home or rentals..."
//                         required
//                       />
//                       <button
//                         type="submit"
//                         class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//                       >
//                         Search
//                       </button>
//                     </div>
//                   </form>
//                 </div> */}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default Hero;

import React, { useState, useEffect } from "react";
import HeroImage from "../assets/HeroSix.jpg";
import { motion, AnimatePresence } from "framer-motion";
import { IoMdArrowDropright } from "react-icons/io";

const Hero = () => {
  const slides = [
    {
      image: HeroImage,
      heading: "Streamline your rentals with us.",
      paragraph:
        "Feel good about the way you manage your rentals with us.",
      buttonText: "Join RMA Housing",
      buttonLink: "/contact-alcheminds",
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full bg-black bg-opacity-50 text-white text-center px-4">
        <h1 className="text-4xl font-semibold sm:text-5xl md:text-6xl">
          {slides[currentIndex].heading}
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl font-light">
          {slides[currentIndex].paragraph}
        </p>
        <a
          href={slides[currentIndex].buttonLink}
          className="flex flex-row justify-center items-center mt-8 inline-block px-[40px] py-3 border-[1px] bg-white border-white text-[#1a1a1a] rounded-full text-lg transition "
        >

          {slides[currentIndex].buttonText}
          <IoMdArrowDropright className="w-4 h-4 ml-1" />

        </a>
      </div>
    </section>
  );
};

export default Hero;

import React from 'react';
import img1 from "../assets/landlord1.jpg"; 
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
const ContactOne = () => {
  return (
    <div className="bg-white">
        <div className="relative pt-28 pb-12 flex justify-center items-center" style={{ minHeight: 'calc(100vh - 90px)' }}>

            <div className="w-full px-4 mx-auto max-w-[1400px]">
                <div className="lg:grid grid-cols-2 gap-8 justify-center items-center text-center">
                    <div className="flex flex-col gap-6 justify-center">
                        <div className="pt-4 text-start">
                            <h1 className="mx-auto max-w-[1000px] text-start text-4xl md:text-5xl font-bold tracking-tight">
                                Contact RMA Housing
                            </h1>
                        </div>

                        <div className="text-start mt-4">
                            <p className="md:text-xl text-lg text-gray-600">
                                Effortlessly manage your rentals with support at every step. The RMA Housing team is here to assist you in getting up and running quickly — 7 days a week!
                            </p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="https://media.istockphoto.com/id/1762438197/video/call-center-customer-service-person-helping-customer-service-4k-animation.jpg?s=640x640&k=20&c=HHY4I1PnxdK7YO7jooxzBfRw4MiilxzkCD2jfv5Tt98=" alt="Contact Us" className="w-full max-w-[850px] h-[600px]" />
                    </div>
                </div>              
            </div>
        </div>

        <div>
              <div className="bg-[#f8f9fa]">
                <div className="relative pt-24 pb-12">
                  <div className="w-full">
                    <div className="w-full px-4 mx-auto max-w-[1400px]">
                      <div className="justify-center w-full ">
                        <div className="w-full max-w-[14000px] mx-auto space-y-4">
                          <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                            <a href="" class="flex md:justify-start justify-center">
                              <div class="w-full p-4 bg-white border border-gray-200 rounded-xl shadow-md sm:p-6 md:p-8 ">
                                <div class="space-y-6">
                                  <div class="flex justify-center items-center">
                                    <img
                                      src="https://media.istockphoto.com/id/947163532/vector/customer-support-icon.jpg?s=612x612&w=0&k=20&c=R0p60vhLNeOHwgegqGqqNIFl6feFEwF95iXjW-IlMtM="
                                      alt=""
                                      class="w-32 h-32"
                                    />
                                  </div>
                                  <div class="flex justify-center items-center">
                                    <h1 class="text-3xl text-colorTwo font-bold">
                                        Customer Care
                                    </h1>
                                  </div>
        
                                  <div class="flex justify-center items-center text-gray-600 text-center">
                                    <p>
                                        Speak with RMA Housing experts who are ready to assist you with anything related to our services.
                                    </p>
                                  </div>
        
                                  <div className="flex justify-center">
                                    <button class="border-[2px] border-mainColor hover:bg-mainColor hover:text-white transition duration-1000 font-bold text-colorFour py-3 px-5 rounded-lg uppercase">
                                        Send a request.
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
        
                            <a href="" class="flex md:justify-start justify-center">
                              <div class="w-full p-4 bg-white border border-gray-200 rounded-xl shadow-md sm:p-6 md:p-8 ">
                                <div class="space-y-6">
                                  <div class="flex justify-center items-center">
                                    <img
                                      src="https://www.grandtechintlonline.com/images/subbanner/help-center.png"
                                      alt=""
                                      class="w-32 h-32"
                                    />
                                  </div>
        
                                  <div class="flex justify-center items-center">
                                    <h1 class=" text-3xl text-colorTwo font-bold">
                                        Help Center
                                    </h1>
                                  </div>
        
                                  <div class="flex justify-center items-center text-gray-600 text-center">
                                    <p>
                                        Explore our comprehensive collection of guides, demos, and tutorials.
                                    </p>
                                  </div>
        
                                  <div className="flex justify-center">
                                    <button class="border-[2px] border-mainColor hover:bg-mainColor hover:text-white transition duration-1000 font-bold text-colorFour py-3 px-5 rounded-lg uppercase">
                                    Check out the Help Center.
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
        
                            <a href="" class="flex md:justify-start justify-center">
                              <div class="w-full p-4 bg-white border border-gray-200 rounded-xl shadow-md sm:p-6 md:p-8 ">
                                <div class="space-y-6">
                                  <div class="flex justify-center items-center">
                                    <img
                                      src="data:image/jpeg;base64,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"
                                      alt=""
                                      class="w-32 h-32"
                                    />
                                  </div>
        
                                  <div class="flex justify-center items-center">
                                    <h1 class=" text-3xl text-colorTwo font-bold">
                                        Community Forum
                                    </h1>
                                  </div>
        
                                  <div class="flex justify-center items-center text-gray-600 text-center">
                                    <p>
                                     Connect with landlords nationwide to receive valuable answers to your renting questions
                                    </p>
                                  </div>
        
                                  <div className="flex justify-center">
                                    <button class="border-[2px] border-mainColor hover:bg-mainColor hover:text-white transition duration-1000 font-bold text-colorFour py-3 px-5 rounded-lg uppercase">
                                        Engage with landlords.
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                      </div>
                    </div>
  
          

         {/* grid section */}
         <div className="w-full p-20 bg-[#f8f9fa]">
                <div className="pb-10 text-start">
                    <h1 className="mx-auto max-w-[1000px] text-center text-4xl md:text-5xl font-semibold tracking-tight">
                        Contact Information   
                    </h1>     
               </div>
                <div className="max-w-[1400px] lg:mx-auto mx-2">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 rounded-lg">
                    {/* Email Section */}
                    <div className="flex flex-col items-center justify-center space-y-8 shadow-xl p-4 rounded-lg bg-white">
                    <span className="text-[50px] text-mainColor">
                        <FaPhone />
                    </span>
                    <h1 className="text-gary-600 text-3xl font-bold">Email ID</h1>
                    <a href="mailto:info@Svamtech.com" className="text-mainColor font-semibold text-xl">
                        info@rmahousing.com
                    </a>
                    <a href="mailto:Svamtech@gmail.com" className="text-mainColor font-semibold text-xl">
                        rma@gmail.com
                    </a>
                    </div>

                    {/* Phone Section */}
                    <div className="flex flex-col items-center justify-center space-y-8 shadow-xl p-4 rounded-lg bg-white">
                    <span className="text-[50px] text-mainColor">
                        <MdEmail />
                    </span>
                    <h1 className="text-gary-600 text-3xl font-bold">Cell Phone No</h1>
                    <a href="tel:+918105605879" className="text-mainColor font-semibold text-xl">
                        +(404) 9876809876
                    </a>
                    <a href="tel:+919346504230" className="text-mainColor font-semibold text-xl">
                        +(91) 9346508411
                    </a>
                    </div>

                    {/* Location Section */}
                    <div className="flex flex-col items-center justify-center space-y-8 shadow-xl p-4 rounded-lg bg-white">
                    <span className="text-[50px] text-mainColor">
                        <FaLocationDot />
                    </span>
                    <h1 className="text-gary-600 text-3xl font-bold">Location</h1>
                    <p className="text-center font-semibold text-xl text-mainColor">
                        1st Floor, Norcross, Georgia, United State
                    </p>
                    <a
                        // href="https://www.google.com/maps/dir//First+Floor:+Karakambadi+Rd,+opp.+to+bommala+quarters,+Mangalam,+Chennayyagunta,+Tirupati,+Andhra+Pradesh+517507/@13.6559464,79.3917466,12z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3a4d4b3d10c2be65:0xec60100e3b7b4969:2m2!1d79.4741484:2d13.65596?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                        href='https://maps.app.goo.gl/YxmtdHTYQtxpqSXs8'
                        target="_blank"
                        className=" mt-2 font-bold p-4 bg-orange-600 text-white rounded-lg hover:bg-orange-900"
                    >
                        View on Google Maps
                    </a>
                    </div>
                </div>
                </div>
            </div>


    </div>
  );
}

export default ContactOne;

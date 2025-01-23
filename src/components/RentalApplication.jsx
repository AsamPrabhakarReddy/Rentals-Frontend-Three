import React from 'react'
import { Link } from 'react-router-dom'
import RL1 from "../assets/rentallisting1.jpg"
import RL2 from "../assets/RL2.jpg"
const RentalApplication = () => {
  return (
    <>
    <div className='w-full h-screen lg:mt-[30px] mt-[100px]'>
        <div className="max-w-[1400px] lg:mx-auto  mx-[10px] h-screen grid lg:grid-cols-2 pb-10">
            <div className=" p-8 flex flex-col justify-center ">
                <h1 className="lg:text-[45px] text-[35px] font-bold text-start font-semibold leading-tight text-mainColor">
                    Find your next tenant with a free online rental application.
                </h1>

                <p className="lg:text-[25px] text-[20px] text-start text-gray-500 leading-relaxed mt-8">
                    Our customizable online rental applications provide residence histories, employment and income verifications, 
                    and everything else you need to select the right tenant.
                </p>

                <div className="flex flex-col gap-4 items-center lg:items-start mt-[20px]">
                    <div className="relative w-full lg:w-3/4">
                        <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="border-2 border-mainColor bg-white rounded-lg px-4 py-4 md:py-8 pr-32 focus:outline-none focus:ring-2 focus:ring-blue-600 w-full"
                        />
                        <button 
                        className="absolute right-2 lg:right-[6px] top-1/2 transform -translate-y-1/2 bg-mainColor text-white py-2 md:py-5 px-4 lg:px-8 text-sm md:text-lg font-semibold hover:bg-blue-700 transition duration-300 rounded-lg"
                        >
                        <Link to="/register">Join Today</Link>
                        </button>
                    </div>
                    <div className="text-center text-[20px] lg:text-[20px] mt-2">
                        Already a member?{" "}
                        <Link to="/login" className="text-mainColor underline">
                        Sign in here.
                        </Link>
                    </div>
                </div>
            </div>
            <div className="w-full h-full flex items-center justify-center lg:col-span-1">
                <img
                    src={RL1}
                    alt="Hero"
                    className="w-full h-[60%] object-cover rounded-lg" // Use full width and height with rounded corners
                />
            </div>
        </div>
    </div>

    
          <div className="w-full h-screen lg:mt-[5px] mt-[100px] flex flex-col items-center lg:pb-0 pb-[10px]">
              <div className="max-w-[1400px] lg:mx-auto mx-[20px] text-center">
                <h1 className="lg:text-[47px] text-[35px] font-bold text-mainColor text-start leading-tight">
                  Quickly find renters by posting your listing on the top rental sites they’re using.
                </h1>
              </div>
    
              <div className="max-w-[1400px] lg:mx-auto mx-[20px] h-full grid lg:grid-cols-2 items-center lg:mt-0">
                <div className="flex justify-center">
                  <img src={RL2} className="w-full h-auto lg:w-[650px]" alt="Rental Listing" />
                </div>
                
                <div className="p-2 flex flex-col justify-center">
                  <h1 className="lg:text-[35px] text-[30px] font-semibold text-start text-mainColor leading-tight">
                    List your property for rent free of charge.
                  </h1>
                  <p className="lg:text-[20px] text-[18px] text-start text-gray-600 leading-relaxed mt-8">
                    Whether you're listing a single property or several, RMA Housing lets you post your rental for free without any hidden fees. You’ll also get recommended titles and descriptions to help streamline the process.
                  </p>
                </div>
              </div>
          </div>

          </>
  )
}

export default RentalApplication
import React from 'react'
import { FaBuilding, FaHandshake } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { TiTick } from "react-icons/ti";
import about from "../assets/about.jpg"
const AboutOne = () => {
  return (
    <div>
          <div className="bg-[#f8f9fa]">
            <div className="relative pt-24 pb-12">
              <div className="w-full">
                <div className="w-full px-4 mx-auto max-w-[1400px] ">
                  <div className="flex flex-col gap-[150px] justify-center w-full ">
                    <div className="w-full max-w-[14000px] mx-auto space-y-8 mt-[50px]">
                      {/* <div className="pt-4">
                        <h1 className="mx-auto max-w-[800px] text-center md:text-5xl text-4xl font-bold tracking-tight">
                        <div className="h-4 w-1 bg-mainColor"></div> About RMA Housing
                        </h1>
                      </div> */}
    
                      <div className="flex items-center text-center justify-center pt-4">
                        <div className="h-9 w-2 md:text-5xl text-4xl  bg-mainColor"></div>
                        <p className="ml-2 text-mainColor md:text-5xl text-4xl font-semibold tracking-tight">
                            About RMA Housing
                        </p>
                        </div>
                      <div className="text-center">
                        <p className="md:text-2xl text-lg text-gray-600">
                            RMA Housing was established with a dedicated mindset and a high-reaching goal: to offer DIY landlords and tenants the rental experience they truly deserve.
                        </p>
                      </div>          
                    </div>
                    
                    <div>      
                        <div className=''>
                            <img src={about}/>
                        </div>
                    </div>
                </div>
              </div>
                </div>
            </div>
          </div>
        </div>
  )
}

export default AboutOne;
import React from 'react'
import img1 from "../assets/landlord6.jpg"
import img2 from "../assets/landlord4.jpg"
import img3 from "../assets/landlord5.jpg"

const AboutTwo = () => {
  return (
    <div className="bg-white">
        <div className="relative pt-12 pb-12">
          <div className="w-full">
            <div className="w-full px-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full ">
                <div className="w-full max-w-[14000px] mx-auto space-y-4">
                  <div className="pt-4">
                    <h1 className="mx-auto max-w-[1000px] text-center md:text-5xl text-4xl font-bold tracking-tight">
                        We started RMA Housing to solve this problem.
                    </h1>
                  </div>

                  <div className="text-center">
                    <p className="md:text-xl text-lg text-gray-600">
                    Independent landlords, who own the majority of rental properties, lacked access to the comprehensive tools that simplify property management. This gap affected not only the landlords but also the tenants living in their rentals.
                    </p>
                  </div>
                
                  <div className="pt-14">
                    <h1 className="mx-auto max-w-[1000px] text-center md:text-5xl text-4xl font-bold tracking-tight">
                        How RMA Housing Works
                    </h1>
                  </div>

                  <div className="pt-8">
                    <div className="bg-[#f8f9fa]">
                      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
                        <div className="flex flex-col justify-center space-y-3 md:p-8 p-2">
                          <div className="font-light text-sideHeading">
                            <p className="md:text-xl text-lg text-gray-600">
                                We believe that DIY landlords should have a straightforward way to manage every aspect of the rental process without stress or risk. Landlords should feel assured that they have the right tenants, tools, and practices in place to ensure their rentals run smoothly.
                           </p>
                          </div>
                        </div>
                        <div className="w-[100%]">
                          <img
                            src={img1}
                            alt="images"
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
                        <div className="w-[100%] md:block hidden">
                          <img
                            src={img2}
                            alt="images"
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                       
                        <div className="md:flex hidden flex-col justify-center space-y-3 md:p-12 p-2">
                          
                          <div className="font-light text-sideHeading">
                            <p className="md:text-xl text-lg text-gray-600">
                            When we first started, we created an online platform to help landlords find and screen tenants, sign leases, and collect rent. We’re not just changing how DIY landlords manage their properties; we’re also enhancing the experience for their tenants.
                            </p>
                          </div>
                        </div>
                        
                       </div>
                       <div className="grid md:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
                        <div className="flex flex-col justify-center space-y-3 md:p-8 p-2">
                          <div className="font-light text-sideHeading">
                            <p className="md:text-xl text-lg text-gray-600">
                            Today, several years later, we offer the only all-in-one platform that helps landlords grow from beginners to professionals with the right tools, support, and education. As landlords and tenants work together, we ensure that our values of respect, transparency, and professionalism are always maintained. Whether it’s the investment banker managing her family’s properties or the recent college graduate finding a home, RMA Housing makes the rental experience better for all. Happy landlords, happy tenants — RMA Housing is here for everyone.                     </p>
                          </div>
                        </div>
                        <div className="w-[100%]">
                          <img
                            src={img3}
                            alt="images"
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                      </div>
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

export default AboutTwo
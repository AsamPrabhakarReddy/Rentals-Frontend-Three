import { FaBuilding, FaHandshake } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { MdHomeWork } from "react-icons/md";
import { TiTick } from "react-icons/ti";

const Carousel = () => {
  return (
    <div>
      <div className="bg-white">
        <div className="relative pt-12 pb-12">
          <div className="w-full">
            <div className="w-full p-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full ">
                <div className="w-full max-w-[1400px] mx-auto space-y-4">
                  <div className="pt-4">
                    <h3 className="mx-auto max-w-[800px] text-center text-2xl md:text-4xl font-bold tracking-tight">
                      Empowering landlords & tenants.
                    </h3>
                  </div>

                  <div className="text-center">
                    <p className=" text-gray-600">
                      We aim to make managing rental properties accessible and
                      efficient for individual landlords, especially those
                      without the resources of large property management
                      companies.
                      <a href="/pricing" className="text-blue-500">
                        {" "}
                        Compare plans
                      </a>
                    </p>
                  </div>

                  <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 pt-8">
                    <a href="" className="flex md:justify-start justify-center">
                      <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                        <div className="space-y-4">
                          <div className="flex justify-center items-center">
                            <img
                              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-agent-lg-1.webp"
                              alt="images"
                              className="w-32 h-32"
                            />
                          </div>
                          <div className="flex justify-center items-center">
                            <h4 className="text-2xl text-colorTwo font-bold">
                              Online Rent Collection
                            </h4>
                          </div>

                          <div className="flex justify-center items-center text-gray-600 text-center">
                            <p>
                              Securely collect rent and fees online, with
                              options for tenants to schedule payments and track
                              receipts
                            </p>
                          </div>

                          <div className="flex justify-center">
                            <button className="border-[1px] border-mainColor hover:bg-white text-white hover:text-mainColor bg-mainColor transition duration-1000 font-medium text-colorFour py-2 px-16 rounded-full">
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="" className="flex md:justify-start justify-center">
                      <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                        <div className="space-y-4">
                          <div className="flex justify-center items-center">
                            <img
                              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-sell-lg-1.webp"
                              alt="images"
                              className="w-32 h-32"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h4 className=" text-2xl text-colorTwo font-bold">
                              Maintenance Tracking
                            </h4>
                          </div>

                          <div className="flex justify-center items-center text-gray-600 text-center">
                            <p>
                              Manage maintenance requests with photos,
                              messaging, and tracking tools, all in one platform
                            </p>
                          </div>

                          <div className="flex justify-center">
                            <button className="border-[1px] border-mainColor hover:bg-white text-white hover:text-mainColor bg-mainColor transition duration-1000 font-medium text-colorFour py-2 px-16 rounded-full">
                              View More
                            </button>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="" className="flex md:justify-start justify-center">
                      <div className="w-full p-4 bg-white border border-gray-200 rounded shadow sm:p-6 md:p-8 ">
                        <div className="space-y-4">
                          <div className="flex justify-center items-center">
                            <img
                              src="https://www.zillowstatic.com/bedrock/app/uploads/sites/5/2024/04/homepage-spot-rent-lg-1.webp"
                              alt="images"
                              className="w-32 h-32"
                            />
                          </div>

                          <div className="flex justify-center items-center">
                            <h4 className=" text-2xl text-colorTwo font-bold">
                              Accounting Dashboard
                            </h4>
                          </div>

                          <div className="flex justify-center items-center text-gray-600 text-center">
                            <p>
                              Simplify financial tracking with automatic syncing
                              of rent payments for easier accounting​ .
                            </p>
                          </div>

                          <div className="flex justify-center">
                            <button className="border-[1px] border-mainColor hover:bg-white text-white hover:text-mainColor bg-mainColor transition duration-1000 font-medium text-colorFour py-2 px-16 rounded-full">
                              View More
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

      <div className="bg-white">
        <div className="relative pt-12 pb-12">
          <div className="w-full">
            <div className="w-full p-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full ">
                <div className="w-full max-w-[1400px] mx-auto space-y-4">
                  <div className="pt-4">
                    <h2 className="mx-auto max-w-[1000px] text-center text-2xl  md:text-4xl font-bold tracking-tight">
                      We manage rental properties effectively
                    </h2>
                  </div>

                  <div className="text-center">
                    <p className=" text-gray-600">
                      Detailed screening reports, including credit, background,
                      and eviction checks, to ensure quality tenant selection
                    </p>
                  </div>

                  <div className="pt-8">
                    <div className="bg-[#f8f9fa]">
                      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
                        <div className="flex flex-col justify-center space-y-3 md:p-8 p-2">
                          <div className="font-bold text-2xl lg:text-4xl text-headingColor w-[100%]">
                            <h3 className="md:text-start text-center">
                              Customizable Lease Agreements
                            </h3>
                          </div>
                          <div className="text-gray-600">
                            <p className="md:text-start text-center">
                              Landlords can add clauses and upload documents,
                              and tenants can sign digitally for seamless lease
                              processing​ that can be customized to meet
                              specific rental need.
                            </p>
                          </div>

                          <div className="text-blue-600 underline md:text-start text-center">
                            <a href="">List properties here</a>
                          </div>
                        </div>
                        <div className="w-[100%]">
                          <img
                            src="https://images.pexels.com/photos/4569340/pexels-photo-4569340.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="images"
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                      </div>
                      <div className="grid lg:grid-cols-2 grid-cols-1 md:gap-0 gap-4">
                        <div className="w-[100%] md:block hidden">
                          <img
                            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200"
                            alt="images"
                            className="h-[360px] w-[100%]"
                          />
                        </div>
                        <div className="md:hidden flex flex-col justify-center space-y-3 md:p-12 p-2">
                          <div className="font-bold text-2xl lg:text-4xl text-headingColor w-[100%]">
                            <h3 className="md:text-start text-center">
                              Maintenance Request Tracking
                            </h3>
                          </div>
                          <div className="text-gray-600">
                            <p className="md:text-start text-center">
                              Tenants can submit maintenance requests through
                              us, allowing landlords to manage and track repairs
                              from their dashboard. The platform supports in-app
                              messaging and photo attachments.
                            </p>
                          </div>

                          <div className="text-blue-600 underline md:text-start text-center">
                            <a href="">Manage your property</a>
                          </div>
                        </div>
                        <div className="md:flex hidden flex-col justify-center space-y-3 md:p-12 p-2">
                          <div className="font-bold text-2xl md:text-4xl text-headingColor w-[100%]">
                            <h3 className="md:text-start text-center">
                              Maintenance Request Tracking
                            </h3>
                          </div>
                          <div className="text-gray-600">
                            <p className="md:text-start text-center">
                              Tenants can submit maintenance requests through
                              us, allowing landlords to manage and track repairs
                              from their dashboard. The platform supports in-app
                              messaging and photo attachments.
                            </p>
                          </div>

                          <div className="text-blue-600 underline md:text-start text-center">
                            <a href="">Manage your property</a>
                          </div>
                        </div>
                        <div className="w-[100%] md:hidden block">
                          <img
                            src="https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200"
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

      <div className="bg-white">
        <div className="relative pt-16 pb-12">
          <div className="w-full">
            <div className="w-full p-4 mx-auto max-w-[1400px]">
              <div className="justify-center w-full ">
                <div className="w-full max-w-[1400px] mx-auto space-y-4">
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 lg:gap-4">
                    <div className="flex flex-col justify-center space-y-4">
                      <div className="font-bold text-2xl md:text-4xl text-headingColor w-[100%]">
                        <h2 className="md:text-start text-center">
                          Access lawyer-reviewed, state-specific lease agreement
                          templates
                        </h2>
                      </div>

                      <div className="text-gray-600 pt-2">
                        <p className="md:text-start text-center">
                          Access state-specific templates that can be customized
                          with Unlimited Plus. Our lease agreement and addendum
                          templates ensure both you and your tenants are
                          protected during the lease term.
                        </p>
                      </div>

                      <div className="flex flex-col space-y-2 pt-2">
                        <div className="flex flex-row items-center text-gray-600">
                          <TiTick size={20} />
                          <h5 className="ml-1">
                            Level up your landlording simply and confidently
                          </h5>
                        </div>
                        <div className="flex flex-row items-center text-gray-600">
                          <TiTick size={20} />
                          <h5 className="ml-1">
                            Take the guesswork out of managing your business
                          </h5>
                        </div>

                        <div className="flex flex-row items-center text-gray-600">
                          <TiTick size={20} />
                          <h5 className="ml-1">
                            Track your listing&apos;s performance and trends in
                            your market
                          </h5>
                        </div>

                        <div className="flex flex-row items-center text-gray-600">
                          <TiTick size={20} />
                          <h5 className="ml-1">
                            Save time and effort with prioritized responses to
                            your questions.
                          </h5>
                        </div>
                      </div>

                      <div className="pt-4 flex items-center lg:justify-start justify-center ">
                        <a
                          href="/login"
                          className="bg-mainColor border hover:bg-white border-mainColor hover:text-mainColor font-medium
                      rounded-full  transition duration-1000 ease-in-out md:text-base text-sm text-white px-16 py-3  text-center"
                        >
                          Let&apos;s get started
                        </a>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                      <a
                        href=""
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                          <div className="space-y-2">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <MdHomeWork
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div className="flex justify-center items-center">
                              <h3 className="text-2xl text-headingColor font-bold text-center">
                                Rent Analysis Reports
                              </h3>
                            </div>

                            <div className="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                We provide landlords with localized rental price
                                analysis
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href=""
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                          <div className="space-y-2">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <FaBuilding
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div className="flex justify-center items-center">
                              <h3 className="text-2xl text-headingColor font-bold text-center">
                                Tenant Portal
                              </h3>
                            </div>

                            <div className="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                A dedicated portal for tenants to manage
                                payments
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href=""
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                          <div className="space-y-2">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <FaHandshake
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div className="flex justify-center items-center">
                              <h3 className="text-2xl text-headingColor font-bold text-center">
                                Syndicated Listings
                              </h3>
                            </div>

                            <div className="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                Maximizing exposure and speeding up the tenant
                                search process​ .
                              </p>
                            </div>
                          </div>
                        </div>
                      </a>

                      <a
                        href=""
                        className="flex md:justify-start justify-center"
                      >
                        <div className="w-full p-6 bg-white border border-gray-200 rounded shadow ">
                          <div className="space-y-2 ">
                            <div className="flex justify-center items-center">
                              <div className="flex justify-center items-center w-16 h-16 border-2 border-violet-100 bg-violet-100 rounded-full">
                                <IoDocumentAttach
                                  size={28}
                                  className="text-mainColor"
                                />
                              </div>
                            </div>
                            <div className="flex justify-center items-center">
                              <h3 className="text-2xl text-headingColor font-bold text-center">
                                Late Fees Reminders
                              </h3>
                            </div>

                            <div className="flex justify-center items-center text-sideHeading text-center">
                              <p>
                                Automated late fees reminders for upcoming or
                                overdue payments.
                              </p>
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
    </div>
  );
};

export default Carousel;

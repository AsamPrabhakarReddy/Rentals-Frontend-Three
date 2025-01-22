import React from 'react'
import axios from 'axios';
import { useState } from 'react';
const ContactTwo = () => {

    const [formData, setFormData] = useState({
        fullname: "",
        jobtitle: "",
        email: "",
        phoneNumber: "",
        companyName: "",
        lookingFor: "",
        message: "",
        // termsAccepted: false,
      });
    
      // console.log("data : ", formData);
      const [captchaVerified, setCaptchaVerified] = useState(false);
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
          ...formData,
          [name]: type === "checkbox" ? checked : value,
        });
      };
    
      const handleCaptcha = (value) => {
        setCaptchaVerified(!!value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!captchaVerified) {
          alert("Please verify the reCAPTCHA.");
          return;
        }
    
        if (!formData.termsAccepted) {
          alert("Please accept the terms and conditions.");
          return;
        }
    
        // try {
          // https://axseva-backend.onrender.com
          // http://localhost:3010/api/register
        //   const response = await axios.post(
        //     "https://axseva-backend.onrender.com/api/register",
        //     formData
        //   );
          // Swal.fire({
          //   title: "Success",
          //   text: "Form submitted successfully!",
          // });
        //   setFormData({
        //     fullname: "",
        //     jobtitle: "",
        //     email: "",
        //     phoneNumber: "",
        //     companyName: "",
        //     lookingFor: "",
        //     message: "",
        //     termsAccepted: false,
        //   });
        //   setCaptchaVerified(false);
        // } catch (error) {
        //   console.error(
        //     "Error submitting form",
        //     error.response ? error.response.data : error
        //   );
        //   Swal.fire({
        //     title: "Error",
        //     text: error.response
        //       ? error.response.data.message
        //       : "Server error or internal error!",
        //   });
        // }
      };

  return (
    <div className="bg-white">
      <div className="relative pt-20 lg:pt-24 pb-12">
        <div className="w-full">
          <div className="w-full mx-auto max-w-[1400px]">
            <div className="p-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div>
                    <div className="flex flex-col space-y-4 mt-8">
                        <div className="flex items-center lg:justify-start justify-center ml-[3px]">
                        <div className="h-9 w-2 md:text-5xl text-4xl  bg-mainColor"></div>
                        <p className="ml-2 text-mainColor md:text-5xl text-4xl font-semibold tracking-tight">
                            contact us directly.
                        </p>
                        </div>
                        <div>
                        <h1 className="lg:text-4xl text-2xl font-bold tracking-normal md:leading-relaxed leading-normal text-footerLinks">
                            We’re here to help you with all your rental needs.
                        </h1>
                        </div>
                        <div className="space-y-1">
                        <h1 className="text-gray-600 dark:text-gray-800">
                            Whether you're a landlord or a tenant, our team at RMA Housing is committed to providing you with the best support. Reach out to us for assistance, advice, or to learn more about our platform and services.
                        </h1>
                        <h1 className="text-gray-600 dark:text-gray-800">
                            Connect with us directly to get personalized help and make your rental experience seamless and hassle-free.
                        </h1>
                        </div>

                        <div>
                        <ul className="space-y-4 text-gray-600 leading-relaxed flex flex-col list-disc md:mx-4 mx-8">
                            <li>
                            100% dedicated support for landlords and tenants through our platform.
                            </li>
                            <li>
                            Excellent customer satisfaction ratings from users of RMA Housing.
                            </li>
                            <li>
                            Thousands of successful rental transactions managed through our platform.
                            </li>
                            <li>
                            Services available to landlords and tenants nationwide.
                            </li>
                        </ul>
                        </div>
                    </div>
                </div>


                <div className="mx-2">
                  <form
                    // onSubmit={handleSubmit}
                    className="mt-8 lg:p-6 lg:shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] rounded"
                  >
                    <div className="w-full grid md:grid-cols-2 grid-cols-1 md:gap-4">
                      <div className="mb-3 w-full">
                        <label
                          htmlFor="fullname"
                          className="mb-3 block text-base font-medium text-[#07074D]"
                        >
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="fullname"
                          id="fullname"
                          value={formData.fullname}
                          onChange={handleChange}
                          placeholder="Your Full Name"
                          className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-footerLinks outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-footerLinks"
                        />
                      </div>

                      <div className="mb-3 w-full">
                        <label
                          htmlFor="jobtitle"
                          className="mb-3 block text-base font-medium text-footerLinks"
                        >
                          Landlord or Tenant
                        </label>
                        <input
                          type="text"
                          name="jobtitle"
                          id="jobtitle"
                          value={formData.jobtitle}
                          onChange={handleChange}
                          placeholder="Landlord or Tenant"
                          className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-footerLinks outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-footerLinks"
                        />
                      </div>
                    </div>

                    <div className="mb-5 w-full">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email"
                        className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-footerLinks outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-footerLinks"
                      />
                    </div>

                    <div className="mb-5 w-full">
                      <label
                        htmlFor="phoneNumber"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="Your Phone Number"
                        className="w-full rounded bg-[#f1f0f4] py-3 px-6 text-base text-footerLinks outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-footerLinks"
                      />
                    </div>

                    <div className="mb-3 w-full">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-base font-medium text-[#07074D]"
                      >
                        Message
                      </label>
                      <textarea
                        rows="4"
                        name="message"
                        id="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Explain why do you want connect with us!"
                        className="w-full resize-none rounded border bg-[#f1f0f4] py-3 px-6 text-base text-footerLinks outline-none focus:bg-white focus:border-[0.5px] ease-in-out transition duration-1000 focus:border-footerLinks"
                      ></textarea>
                    </div>
                    {/* 
                        <div className="w-[100%] flex py-4 text-start justify-center">
                          <ReCAPTCHA
                            sitekey="6LchMmUqAAAAANKg1dNzYDXJnCMf-L6TjRsUVAfG"
                            onChange={handleCaptcha}
                          />
                        </div> */}

                    <div className="flex items-center justify-center mb-5">
                      <input
                        type="checkbox"
                        id="termsAccepted"
                        name="termsAccepted"
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="w-4 h-4"
                      />
                      <label htmlFor="termsAccepted" className="ml-3 text-sm">
                        I accept the{" "}
                        <a
                          href="/"
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Terms and Conditions
                        </a>{" "}
                        &{" "}
                        <a
                          href="/"
                          className="font-medium text-primary-600 hover:underline"
                        >
                          Privacy Policy
                        </a>{" "}
                        of the company.
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="relative flex h-[50px] w-full items-center justify-center overflow-hidden bg-mainColor border border-colorFour text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:bg-white hover:text-mainColor hover:font-bold before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-full rounded"
                    >
                      <span className="relative z-10">Submit</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactTwo
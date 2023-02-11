import React from "react";
import Aos from "aos";
const Contact = () => {
  Aos.init({ duration: 1000 });

  return (
    <div className="contact-holder" data-aos="zoom-in-up">
      <div className="container mx-auto px-6 py-12 contact">
        <div className="contact-h1">
        <h1 className="text-3xl font-bold  text-blueDark mb-6 ss:text-[68px] ss:leading-[100.8px] leading-[75px] w-[100%]">
          Contact Us
        </h1>
        </div>
    
        <form className="bg-white contact-form shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
              id="message"
              placeholder="Enter your message here..."
            />
          </div>
          <div className="flex items-center justify-center">
            
            <button
              className="bg-blueDark hover:bg-blueLight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;


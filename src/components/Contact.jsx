import React from "react";
import Aos from "aos";
import { ToastContainer, toast } from 'react-toastify';




const Contact = () => {

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbxPYMT_Bn-eLgWzXmspFyn_B__revYIKjYTXFkl3iIEzOahtyNi1QzOhlNLBy-0cxxt_A/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success('Data submitted successfully!');

      })
      .catch((error) => {
        // console.log(error);
        toast.error('An error occurred while submitting data.');

      });
  }

  Aos.init({ duration: 1000 });

  return (
    <div className="contact-holder" data-aos="zoom-in-up">
      <div className="container mx-auto px-6 py-12 contact">
        <div className="contact-h1">
        <h1 className="text-3xl font-bold  text-blueDark mb-6 ss:text-[68px] ss:leading-[100.8px] leading-[75px] w-[100%]">
          Contact Us
        </h1>
        </div>
        <form className="form bg-white  contact-form shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={(e) => Submit(e)}>
        <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input placeholder="Your Name" name="Name" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
 />

            </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input placeholder="Your Email" name="Email" type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
              placeholder="Your Message" name="Message" type="text" />
          </div>
          <div className="flex items-center justify-center">

          <input className="bg-blueDark hover:bg-blueLight text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
 name="Name" type="submit" />
          </div>
        </form>

        <ToastContainer />

    
    
      </div>
    </div>
  );
};

export default Contact;


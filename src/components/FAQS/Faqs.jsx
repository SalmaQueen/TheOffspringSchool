import React from "react";
import Aos from "aos";
import { faqsData } from '../../constants'
import './faqs.css'

const Faqs = () => {
  Aos.init({ duration: 1000 });
  return (
    <div className='holder'>

      {faqsData.map((item, index) => (
        <div className="faqs" key={item.id} data-aos={index % 3 === 0 ? "fade-right" : "fade-left"}>

          <div className="faqs-quote text-center" >

            {item.title}
            <p className="text-lg font-medium text-gray-500 text-center  leading-relaxed mt-4 mb-7  2xl:mb-8">
              {item.answer}
            </p>
          </div>
        </div>

      ))}

    </div>
  );
};

export default Faqs;
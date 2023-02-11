import React from 'react'
import styles from "../../style";
import BookAppointment from "./BookAppointment";
import { student } from "../assets/FigmaDesigns";
import { discount, robot } from '../assets'
import Aos from "aos";


function Hero() {
  Aos.init({ duration: 1000 });

  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`} data-aos="zoom-in-up">
      <div className={`flex-1 ${styles.flexStart} flex-col xl:py-3 sm:px-16 px-6`}>
        <div className="flex flex-row items-center py-[6px] px-4 bg-blueLight rounded-[10px] mb-2">
          <img src={discount} alt="discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2 text-white`}>
            <span className="text-dark">20%</span> Discount For{" "}
            <span className="text-dark">1 Month</span> Fees
          </p>
        </div>

        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-dark ss:leading-[100.8px] leading-[75px]">
            The <br className="sm:block hidden" />{" "}
            <span className="text-gradient">Offspring school</span>{" "}
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <BookAppointment />
          </div>
        </div>

        <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-dark ss:leading-[100.8px] leading-[75px] w-full">
          Welcomes you all.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5 text-dark`}>
          {/* Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees. */}
     Please make a decision today by bringing your Kid to The Offspring School, You’ll Never regret.👐😄


        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={student} alt="billing" className="w-[100%] h-[100%] relative z-[5]" />

        {/* gradient start */}
        <div className="absolute z-[0] w-[40%] h-[35%] top-0 orange__gradient" />
        <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
        <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <BookAppointment />
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import styles, { layout } from "../../style";
import Button from "./Button";
import {graduates} from '../assets/FigmaDesigns'
import Aos from "aos";



function About() {
  Aos.init({ duration: 1000 });

  return (
    <section className={layout.section }  data-aos="zoom-in-up" >
          <div className={layout.sectionImgReverse}>
      <img src={graduates} alt="About the offspring school" className="w-[90%] h-[80%]" />
    </div>
    <div className={layout.sectionInfo}>
    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-dark ss:leading-[100.8px] leading-[75px] w-[50%] mt-4">
         About Us
        </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-1`}>
      Our school is meant to serve as integrated school, where we teach both secular and Islamic curriculum.
          The management of the school are involved not only with this school but also
          with other ten number of schools based within Parklands and Eastleight.
          we are so far the only integrated school in the area of Kilimani serving that sector. We are delighted to let you know that you will find everything you need here.
          We got qualified staffs, transportation, food and the tuition fees will be highly affordable and discounted. 

       </p>

      <Button styles={`mt-10`} />
    </div>

  
  </section>
  )
}

export default About
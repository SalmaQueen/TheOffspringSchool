import React from 'react'
import styles from "../../style";
import { arrowUp } from "../assets";

function BookAppointment() {
  return (
    <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-orange-gradient p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-orange w-[100%] h-[100%] rounded-full`}>
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
          <span className="text-dark ">Book</span>
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain" />
      </div>
      
      <p className="font-poppins font-medium text-[18px] leading-[23.4px]">
        <span className="text-dark">Appointment</span>
      </p>
    </div>
  </div> )
}

export default BookAppointment
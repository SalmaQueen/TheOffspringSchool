import React from "react";
import "./styles.css";
import Aos from "aos";
const data = [
  {
    id: 1,
    content: "We teach Islamic classes like fiqh,sirah, Tawheed, arabic etc",
    back: "#FA9B44"
  },
  {
    id: 2,
    content: "We teach CBC, KCPE and IGCSE Curriculumn",
    back: "#4DF0A7"
  },
  {
    id: 3,
    content: "Affordable prices with a good discount if there is need.",
    back: "#D554E3"
  },
  {
    id: 4,
    content: "We teach madarasa(Qur’an classes) on Weekends from 8am-4pm",
    back: "#507FFA"
  }
];

const Card = ({ content, back, id }) => (
  <div
    className="card"
    style={{
      backgroundColor: back,
      padding: "10px"
    }}
  >
    <div style={{ color: id % 2 === 0 ? "black" : "white" }}>{content}</div>
  </div>
);

// const CardList = () => (
  const CardList = () => {
    Aos.init({ duration: 1000 });
    return (
<div data-aos="zoom-in-up">
<h1  className="font-poppins font-semibold ss:text-[68px] text-center	flex flex-col justify-center items-center  text-[42px] text-dark ss:leading-[100.8px] leading-[45px] w-[100%]">
      Why should you choose us?
    </h1>
    <div className="container">
  


  {data.map((item) => (
    <Card key={item.id} content={item.content} back={item.back} ></Card>
  ))}
</div>
</div>
    )
  }



export default CardList;

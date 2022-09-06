import React, { useState, useContext } from "react";
import "./NewsHome.css";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import Context from "../../../Context";
const Swal = require("sweetalert2");

export default function NewsHome() {
  let [datas, setDatas] = useState([
    {
      id: 1,
      img: "./images/courses/Typescript.svg",
      h5: "دوره مقدماتی تا پیشرفته تایپ اسکریپت",
      p1: "۲۵ ساعت",
      span: "۱۵۰ نفر",
      p2: "",
      p3: "۱,۵۸۹,۰۰۰",
      p4: "",
      p5 : '1589000'
    },
    {
      id: 2,
      img: "./images/courses/NodeJS.svg",
      h5: "دوره جامع Node JS و Express JS",
      p1: "۵۰ ساعت",
      span: "۵۶۴ نفر",
      p2: "",
      p3: "۲,۳۹۸,۰۰۰",
      p4: "",
      p5 : '2398000'
    },
    {
      id: 3,
      img: "./images/courses/react.png",
      h5: "دوره جامع متخصص ریکت و ریداکس + ریکت ورژن ۱۸",
      p1: "۴۰ ساعت",
      span: "۲۰۰۱ نفر",
      p2: "",
      p3: "۲,۲۹۸,۰۰۰",
      p4: "",
      p5 : '2298000'
    },
    {
      id: 4,
      img: "./images/courses/javascriptpng.png",
      h5: "دوره مقدماتی تا پیشرفته جاوااسکریپت",
      p1: "۲۵ ساعت",
      span: "۲۵۴۰ نفر",
      p2: "",
      p3: "۱,۳۲۹,۰۰۰",
      p4: "",
      p5 : '1329000'
    },
    {
      id: 5,
      img: "./images/courses/html css.png",
      h5: "دوره جامع HTML و CSS",
      p1: "۱۷ ساعت",
      span: "۲۳۵۲ نفر",
      p2: "",
      p3: "۴۲۹,۰۰۰",
      p4: "",
      p : '429000'
    },
    {
      id: 6,
      img: "./images/courses/sass.png",
      h5: "آموزش SASS",
      p1: "۲/۴۵ ساعت",
      span: "۴۱۱۷ نفر",
      p2: "",
      p3: "رایگان",
      p4: "",
      p5 : 'free'
    },
    {
      id: 7,
      img: "./images/courses/github.svg",
      h5: "دوره آموزش گیت، گیت‌هاب و گیت‌لب",
      p1: "۲/۵ ساعت",
      span: "۱۹۸۳ نفر",
      p2: "",
      p3: "۲۱۹,۰۰۰",
      p4: "",
      p5 : '219000'
    },
    {
      id: 8,
      img: "./images/courses/mobilesvg.svg",
      h5: "آموزش Mobile First Design",
      p1: "۰/۵ ساعت",
      span: "۳۲۰۴ نفر",
      p2: "",
      p3: "رایگان",
      p4: "",
      p5 : 'free'
    },
  ]);

  let contextAll = useContext(Context);

  return (
    <section className="news__home width-lg">
      <div className="top__news__home">
        <h3>جدیدترین ها</h3>
        <Link to="/courses">بیشتر</Link>
      </div>
      <div className="courses__news__home">
        {datas.map((item) => (
          <div className="course__container">
            <img src={item.img} alt="" />
            <h5>{item.h5}</h5>
            <div className="time__course">
              <AiOutlineClockCircle />
              <p>{item.p1}</p>
            </div>
            <div className="number__price__course">
              <div className="number__course">
                <IoMdSchool />
                <span>{item.span}</span>
              </div>
              <div className="price__course">
                <p
                  className={
                    item.p2.length == 0 ? "hide" : "off__price__course"
                  }
                >
                  {item.p2}
                </p>
                <p className="last__price__course">{item.p3} تومان</p>
                <p className="new__price__course">{item.p4}</p>
              </div>
            </div>
            <hr />
            <div className="buttons__course">
              <button
                onClick={() => {
                  let newCourse = {
                    id: item.id,
                    img: item.img,
                    title: item.h5,
                    price: item.p5,
                  };
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "دوره مورد نظر به سبد خرید اضافه شد",
                    showConfirmButton: false,
                    timer: 1500,
                  });
                  contextAll.setShopDatas((prev) => [...prev, newCourse]);
                  contextAll.setShopPrice((prev) => prev + +item.p5)
                  contextAll.setIndexShop((prev) => prev + 1)
                }}
              >
                ثبت نام
              </button>
              <Link to={`/courses`}>مشاهده دوره</Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

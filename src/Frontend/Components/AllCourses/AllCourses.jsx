import React, { useRef, useState } from "react";
import "./AllCourses.css";
import { AiOutlineClockCircle } from "react-icons/ai";
import { IoMdSchool } from "react-icons/io";
import { Link } from "react-router-dom";

export default function AllCourses() {
  let ballContainerRef = useRef();

  function clickBallCoursesHandler(e) {
    e.target.classList.toggle("ball__on");
    ballContainerRef.current.classList.toggle("ball__on__container");
    setIsFilter(!isFilter);
  }

  let [datas, setDatas] = useState([
    {
      id: 1,
      img: "./images/courses/Typescript.svg",
      h5: "دوره مقدماتی تا پیشرفته تایپ اسکریپت",
      p1: "۲۵ ساعت",
      span: "۱۵۰ نفر",
      p2: "",
      p3: "۱,۵۸۹,۰۰۰ تومان",
      p4: "",
      free: false,
    },
    {
      id: 2,
      img: "./images/courses/NodeJS.svg",
      h5: "دوره جامع Node JS و Express JS",
      p1: "۵۰ ساعت",
      span: "۵۶۴ نفر",
      p2: "",
      p3: "۲,۳۹۸,۰۰۰ تومان",
      p4: "",
      free: false,
    },
    {
      id: 3,
      img: "./images/courses/react.png",
      h5: "دوره جامع متخصص ریکت و ریداکس + ریکت ورژن ۱۸",
      p1: "۴۰ ساعت",
      span: "۲۰۰۱ نفر",
      p2: "",
      p3: "۲,۲۹۸,۰۰۰ تومان",
      p4: "",
      free: false,
    },
    {
      id: 4,
      img: "./images/courses/javascriptpng.png",
      h5: "دوره مقدماتی تا پیشرفته جاوااسکریپت",
      p1: "۲۵ ساعت",
      span: "۲۵۴۰ نفر",
      p2: "",
      p3: "۱,۳۲۹,۰۰۰ تومان",
      p4: "",
      free: false,
    },
    {
      id: 5,
      img: "./images/courses/html css.png",
      h5: "دوره جامع HTML و CSS",
      p1: "۱۷ ساعت",
      span: "۲۳۵۲ نفر",
      p2: "",
      p3: "۴۲۹,۰۰۰ تومان",
      p4: "",
      free: false,
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
      free: true,
    },
    {
      id: 7,
      img: "./images/courses/github.svg",
      h5: "دوره آموزش گیت، گیت‌هاب و گیت‌لب",
      p1: "۲/۵ ساعت",
      span: "۱۹۸۳ نفر",
      p2: "",
      p3: "۲۱۹,۰۰۰ تومان",
      p4: "",
      free: false,
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
      free: true,
    },
  ]);

  let filterItem = datas.filter((item) => item.free == true);

  let [isFilter, setIsFilter] = useState(false);

  return (
    <section className="all__courses width-lg">
      <div className="courses__top__text__filter">
        <div className="courses__top__text">
          <p>دوره های آموزش برنامه نویسی</p>
        </div>
        <div className="courses__top__filter">
          <div
            className="courses__top__filter__container"
            ref={ballContainerRef}
          >
            <span
              className="courses__top__filter__ball"
              onClick={(e) => clickBallCoursesHandler(e)}
            ></span>
          </div>
          <p>دوره های رایگان</p>
        </div>
      </div>
      <div className="courses__datas__contaier">
        {isFilter == false
          ? datas.map((item) => (
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
                    <p className="last__price__course">{item.p3}</p>
                    <p className="new__price__course">{item.p4}</p>
                  </div>
                </div>
                <hr />
                <div className="buttons__course">
                  <button>ثبت نام</button>
                  <Link to={`/courses`}>مشاهده دوره</Link>
                </div>
              </div>
            ))
          : filterItem.map((item) => (
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
                    <p className="last__price__course">{item.p3}</p>
                    <p className="new__price__course">{item.p4}</p>
                  </div>
                </div>
                <hr />
                <div className="buttons__course">
                  <button>ثبت نام</button>
                  <Link to={`/courses`}>مشاهده دوره</Link>
                </div>
              </div>
            ))}
      </div>
    </section>
  );
}

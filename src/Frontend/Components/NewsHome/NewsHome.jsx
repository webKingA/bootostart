import React from 'react';
import './NewsHome.css';
import { Link } from 'react-router-dom';
import {AiOutlineClockCircle} from 'react-icons/ai'
import { IoMdSchool } from "react-icons/io";

export default function NewsHome() {
  return (
    <div className="news__home width-lg">
      <div className="top__news__home">
        <h3>جدیدترین ها</h3>
        <Link to="/courses">بیشتر</Link>
      </div>
      <div className="courses__news__home">
        <div className="course__container">
          <img src="./images/courses/Typescript.svg" alt="" />
          <h5>دوره مقدماتی تا پیشرفته تایپ اسکریپت</h5>
          <div className="time__course">
            <AiOutlineClockCircle />
            <p>۲۵ ساعت</p>
          </div>
          <div className="number__price__course">
            <div className="number__course">
              <IoMdSchool />
              <span>99 نفر</span>
            </div>
            <div className="price__course">
              <p className="off__price__course">%50</p>
              <p className="last__price__course">1,589,000 تومان</p>
              <p className="new__price__course">795,000 تومان</p>
            </div>
          </div>
          <hr />
          <div className="buttons__course">
            <button>ثبت نام</button>
            <Link to={`/courses`}>مشاهده دوره</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

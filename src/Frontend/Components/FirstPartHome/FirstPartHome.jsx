import React from 'react';
import './FirstPartHome.css';
import { Link } from 'react-router-dom';

export default function FirstPartHome() {
  return (
    <section className="first__part__home width-lg">
      <div className="one__first__part__home">
        <h1>آموزش برنامه نویسی با بوتواستارت</h1>
        <p>
          آموزش هدفمند، پروژه محور و جامع برنامه نویسی همراه با پشتیبانی دائمی
          جزو استاندارد های آموزشی بوتواستارت است که بدون شک باعث ورود شما به
          بازار کار خواهد شد.
        </p>
        <span>
          <Link to="/courses">مشاهده دوره ها</Link>
          <Link to="/comments">نظرات دانشجویان</Link>
        </span>
      </div>
      <div className="two__first__part__home">
        <img src="./images/banner.webp" alt="" />
      </div>
    </section >
  );
}

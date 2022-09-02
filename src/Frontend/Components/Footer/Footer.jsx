import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {GrMail} from 'react-icons/gr'
import { AiFillGithub } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="footer">
      <div className="width-lg footer__container">
        <div className="one__footer">
          <div className="top__one__footer">
            <img src="./images/logo.webp" alt="" />
            <div>
              <h4>آکادمی بوتواستارت</h4>
              <p>آموزش برنامه نویسی | پروژه محور | پشتیبانی دائمی | جامع</p>
            </div>
          </div>
          <div className="bottom__one__footer">
            <p>
              هدف بوتواستارت ارائه بهترین دوره های آموزش برنامه نویسی به
              دانشجویان برای ورود به بازار کار است و برای رسیدن به این هدف یک
              سری استانداردها تعیین شده و به صورت سختگیرانه روی دوره ها اعمال
              میشود. این استاندار ها شامل تدریس سلیس و روان برای انتقال مفاهیم
              در کنار کامل و جامع بودن دوره ها است به صورتی که با دیدن یک دوره
              به سطح مناسب و حرفه ای برسید. همچنین دوره ها پروژه محور هستند تا
              کاربرد مفاهیمی که یاد میگیرید را درک کنید و اگر احیانا ابهامی پیش
              آید میتوانید از پشتیبانی دائمی‌ بوتواستارت استفاده کنید و سوال
              هایتان را بپرسید. و در آخر به یکی از مهم ترین ویژگی دوره ها اشاره
              میکنم و آن هم آپدیت و بروز بودن آن ها مطالق آخرین تکنولوژی ها
              میباشد.
            </p>
          </div>
        </div>
        <div className="two__footer">
          <h4>بخش های سایت</h4>
          <ul>
            <li>
              <Link to="/courses">دوره ها</Link>
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
            </li>
            <li>
              <Link to="/comments">نظرات دانشجویان</Link>
            </li>
          </ul>
          <span>
            <GrMail />
            <AiFillGithub />
            <FaTelegramPlane />
            <BsInstagram />
          </span>
        </div>
        <div className="three__footer">
          <h4>پرداخت امن زرین پال</h4>
          <img src="./images/zarrin.png" alt="" />
        </div>
      </div>
      <p>ساخته شده با ❤️ در بوتواستارت</p>
    </div>
  );
}

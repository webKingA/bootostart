import React, { useState } from "react";
import "./CommentsHome.css";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

export default function CommentsHome() {
  let [dataCommentsHome, setDataCommentsHome] = useState([
    {
      id: 1,
      p1: "سمیرا فرخ نژاد(ساکن استرالیا)",
      small: "دانشجوی جاوااسکریپت و ریکت",
      p2: "من سه ماه پیش دوره های ریکت و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.",
      src: "./videos/Jellyfish - 110877.mp4",
    },
    {
      id: 2,
      p1: "امیر خسروشاهی",
      small: "دانشجوی جاوااسکریپت و ریکت",
      p2: "من بعد از مشاهده دوره ها و پشت سر گذاشتن یه سری مصاحبه های فنی تونستم استخدام بشم. تموم نکاتی رو که دوره گفتی تو مصاحبه پرسیدن و تونستم به خوبی قبول بشم.",
      src: "./videos/Seoul - 21985.mp4",
    },
    {
      id: 3,
      p1: "سورنا گنجی",
      small: "دانشجوی جاوااسکریپت و ریکت",
      p2: "این دوره، اولین انتخاب من نبود ولی وقتی بقیه دوره هارو رصد کردم دیدم مثل این دوره تو دوره های فارسی اصلا نیست. مباحث خیلی کامل و جامع گفته شده و پشتیبانی خیلی خوبی داره.یکی از خوبی ها استاد اینه که مباحث پیچیده رو خیلی ساده توضیح میدن و تو مراحل مصاحبه هم همراهم بودن.",
      src: "./videos/Skate - 110734.mp4",
    },
  ]);

  let [index , setIndex] = useState(1);
  let filterItem = dataCommentsHome.filter(item => item.id == index);

  function clickPlusHandler () {
    if (index >= 3) {
        setIndex(1)
    } else {
        setIndex(prev => prev + 1)
    }
  }

  function clickMinusHandler () {
    if (index <= 1) {
        setIndex(3)
    } else {
        setIndex(prev => prev - 1)
    }
  }

  return (
    <section className="comments__home width-lg">
      {filterItem.map((item) => (
        <>
          <div className="comments__home__text">
            <h4>نظرات دانشجویان</h4>
            <div className="comment__student__home">
              <div className="comment__student__home__top">
                <div className="comment__student__home__top__img">
                  <AiOutlineUser />
                </div>
                <div className="comment__student__home__top__text">
                  <p>{item.p1}</p>
                  <small>{item.small}</small>
                </div>
              </div>
              <div className="comment__student__home__mid">
                <p>{item.p2}</p>
              </div>
              <div className="comment__student__home__down">
                <div className="comment__student__home__down__right">
                  <Link to="/courses">مشاهده دوره ها</Link>
                </div>
                <div className="comment__student__home__down__left">
                  <TiArrowRightThick onClick={clickPlusHandler} />
                  <TiArrowLeftThick onClick={clickMinusHandler} />
                </div>
              </div>
            </div>
          </div>
          <div className="comments__home__vid">
            <div className="vid__student__home">
              <video controls src={item.src}></video>
            </div>
          </div>
        </>
      ))}
    </section>
  );
}

import React , {useState} from "react";
import "./Comments.css";
import { AiOutlineUser } from "react-icons/ai";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function Comments() {
  let [dataCommentsHome, setDataCommentsHome] = useState([
    {
      id: 1,
      p1: "سارا رحیمی",
      small: "دانشجوی HTML&CSS و جاوااسکریپت",
      p2: "من دوره HTML&CSS و جاوااسکریپت استاد عظمی رو تهیه کردم و به نظرم علاوه بر اینکه خیلی ساده و قابل فهم توضیح دادن، پشتیبانی خیلی خوب و قوی داره، ینی هر وقت که سوالی برامون پیش بیاد میتونیم بپرسیم و در کمترین زمان ممکن جواب رو میگیریم",
      src: "./videos/Jellyfish - 110877.mp4",
    },
    {
      id: 2,
      p1: "کیان بابان(ساکن کانادا)",
      small: "دانشجوی جاوااسکریپت و ریکت",
      p2: "من در دوره های HTML&CSS و جاوااسکریپت و ریکت سایت بوتواستارت شرکت کردم و تونستم تو کمتر از چهار ماه بدون هیچ پیشینه‌ای در زمینه فرانت اند به تسلط خوبی برسم.",
      src: "./videos/Seoul - 21985.mp4",
    },
    {
      id: 3,
      p1: "مهدی احسانی",
      small: "دانشجوی جاوااسکریپت و ریکت",
      p2: "این دوره قطعا یکی از بهترین دوره هایی بود که من تا الان دیده بودم و همه چی داخلش توضیح داده شده و یکی از امکانات خوبی که این دوره داره اینه که پشتیبانی آنلاین داره و میتونیم هر سوالی راجب هر مبحثی رو بپرسیم.",
      src: "./videos/Skate - 110734.mp4",
    },
    {
      id: 4,
      p1: "سمیرا فرخ نژاد(ساکن استرالیا)",
      small: "دانشجوی جاوااسکریپت و ریکت",
      p2: "من سه ماه پیش دوره های ریکت و جاوااسکریپت سایت بوتواستارت رو شرکت کردم، پشتیبانی دوره واقعا عالی بود. از لحظه به لحظه دوره لذت بردم و الانم منجر به کار پیدا کردن من شد.",
      src: "./videos/Jellyfish - 110877.mp4",
    },
    {
      id: 5,
      p1: "کسری اخوان",
      small: "دانشجوی ریکت و گیت",
      p2: "ریکت آقا میلاد حرف نداره، صفر تا صد کارو خیلی سلیس و روون توضیح داده. در مورد پشتیبانی هم اینکه هر وقت پیام بدین تو کوتاه ترین زمان ممکن جوابتون رو میده.",
      src: "./videos/Seoul - 21985.mp4",
    },
  ]);

  return (
    <div className="comments__page">
      <Header />
      {dataCommentsHome.map((item) => (
        <div className="comments__page__all width-lg">
          <div className="comments__page__text">
            <div className="comment__student__page">
              <div className="comment__student__page__top">
                <div className="comment__student__page__top__img">
                  <AiOutlineUser />
                </div>
                <div className="comment__student__page__top__text">
                  <p>{item.p1}</p>
                  <small>{item.small}</small>
                </div>
              </div>
              <div className="comment__student__page__mid">
                <p>{item.p2}</p>
              </div>
            </div>
          </div>
          <div className="comments__page__vid">
            <div className="vid__student__page">
              <video controls src={item.src}></video>
            </div>
          </div>
        </div>
      ))}
      <Footer />
    </div>
  );
}

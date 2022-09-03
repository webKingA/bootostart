import React, { useState } from "react";
import "./ThreePartHome.css";
import { TiArrowRightThick, TiArrowLeftThick } from "react-icons/ti";

export default function ThreePartHome() {
  let [slider, setSlider] = useState([
    {
      id: 1,
      h4: "چرا برنامه نویس شدم؟",
      p: "سلام، من میلادم. سال ۹۴ رشته نفت قبول شدم و به هوای اینکه قراره آینده شغلی و مالی خوبی داشته باشم رفتم دانشگاه ولی همون ترم اول متوجه شدم که همه چی دقیقا برعکس تصوراتم بوده و اصلا اون چیزی نیست که فکرشو میکردم و همین جرقه‌ای شد که دنبال یک مهارت دیگه باشم و بعد از کلی تحقیق به برنامه نویسی رسیدم.",
    },
    {
      id: 2,
      h4: "از برنامه نویسی راضی هستم؟",
      p: "هر کاری سختی و چالش های خودشو داره و برنامه نویسی هم از این قاعده مستثنی‌نیست اما در کل از انتخابم واقعا راضیم. برنامه نویسی من رو وارد مسیری کرد که خیلی از محدودیت هارو برداشت و تونستم کار های مفیدی انجام بدم، انجام دادن کار های مفید که به نفع مردم هست همیشه بهترین حس رو به آدم میده.",
    },
    {
      id: 3,
      h4: "چرا برنامه نویسی رو انتخاب کردم؟",
      p: "برای من برنامه نویسی خیلی ایده‌آل بود، شرایط کاری یکنواختی نداشت، باید با تکنولوژی های جدید خودمو آپدیت کنم، امکان کار به صورت ریموت (دورکاری) رو داره و برای منی‌ که شهرستان هستم عالی بود. و در نهایت واقعا از خلق کردن یک محصول و دیدن نتیجه نهایی لذت میبرم.",
    },
  ]);

  let [index, setIndex] = useState(1);

  function clickPlusHandler () {
    if (index < 3) {
        setIndex(prev => prev + 1)
    } else {
        setIndex(1)
    }
  }

  function clickMinusHandler () {
    if (index > 1) {
      setIndex((prev) => prev - 1);
    } else {
      setIndex(3);
    }
  }

  let filterItem = slider.filter((item) => {
    return item.id == index;
  });

  return (
    <section className="three__part__home width-lg">
      <div className="three__part__home__img">
        <img src="./images/milad.webp" alt="" />
      </div>
      <div className="three__part__home__slider">
        <div className="slider__container">
          {filterItem.map((item) => (
            <div key={item.id}>
              <h4>{item.h4}</h4>
              <p>{item.p}</p>
            </div>
          ))}
        </div>
        <div className="slider__icons">
          <TiArrowRightThick onClick={clickPlusHandler} />
          <TiArrowLeftThick onClick={clickMinusHandler} />
        </div>
      </div>
    </section>
  );
}

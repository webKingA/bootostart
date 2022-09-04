import React, { useState } from "react";
import "./FivePartHome.css";
import { Link } from "react-router-dom";

export default function FivePartHome() {
  return (
    <section className="part__five__home width-lg">
      <div className="part__five__container__img">
        <img src="./images/mockup.webp" alt="" />
      </div>
      <div className="part__five__container__text">
        <p>
          برای دیدن آموزش های رایگان ما در اینستاگرام،{" "}
          <Link to="/courses">اینجا</Link> کلیک کنید
        </p>
        <p>
            در <span>اینستاگرام</span> هم همراهمون باشید
        </p>
      </div>
    </section>
  );
}

import React, { useState, useContext } from "react";
import "./CartShop.css";
import { BsFillTrashFill } from "react-icons/bs";
import Context from "../../../Context";
import { Link } from "react-router-dom";
const Swal = require("sweetalert2");

export default function CartShop() {
  let contextAll = useContext(Context);

  return (
    <section className="cart__shop__container width-lg">
      {contextAll.shopDatas.length != 0 ? (
        <>
          <div className="cart__shop__container__courses">
            <h4>لیست دوره ها</h4>
            {contextAll.shopDatas.map((item) => (
              <div className="course__data" key={item.id}>
                <div className="course__data__right">
                  <div className="course__data__right__img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="course__data__right__data">
                    <h5>{item.title}</h5>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className="course__data__left">
                  <BsFillTrashFill onClick={() => {
                    let filterItem = contextAll.shopDatas.filter(course => (
                      course.title == item.title
                    ))
                    let filterShop = contextAll.shopDatas.filter(data => (
                      data.title !== filterItem[0].title
                    ))
                    contextAll.setShopDatas(filterShop)
                    contextAll.setShopPrice((prev) => prev - +filterItem[0].price);
                    contextAll.setIndexShop((prev) => prev - 1);
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "دوره مورد نظر از سبد خرید حذف شد",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }} />
                </div>
              </div>
            ))}
          </div>
          <div className="cart__shop__container__total">
            <h4>هزینه دوره ها</h4>
            <div className="course__total">
              <div className="course__total__one">
                <p>جمع کل:</p>
                <p>{contextAll.shopPrice} تومان</p>
              </div>
              <div className="course__total__two">
                <input type="text" placeholder="کد تخفیف :" />
                <button>اعمال</button>
              </div>
              <div className="course__total__three">
                <p>تخفیف:</p>
                <p>۰ تومان</p>
              </div>
              <div className="course__total__four">
                <p>قابل پرداخت:</p>
                <p>{contextAll.shopPrice} تومان</p>
              </div>
              <div className="course__total__five">
                <button>تکمیل</button>
              </div>
            </div>
          </div>
        </>
      ) : (
        <div className="cart__shop__container__empty">
          <h4>متاسفانه سبد خرید شما خالی است!</h4>
          <img src="./images/empty-basket.webp" alt="" />
          <Link to="/">ثبت نام و شروع برنامه نویسی</Link>
        </div>
      )}
    </section>
  );
}
import React, { useState, useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai";
import { FaBars, FaTimes, FaComments, FaUserCircle } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { IoMdSchool } from "react-icons/io";

import Context from "../../../Context";

export default function Header() {
  let contextAll = useContext(Context);

  function clickTimesHandler() {
    contextAll.setBarsState(false);
  }

  function clickBarsHandler() {
    contextAll.setBarsState(true);
  }

  return (
    <div className="header">
      <div className="width-lg header__container">
        <div className="header__image">
          <img src="./images/logo.webp" alt="" />
        </div>
        <ul className="header__list">
          <Link to={"/"}>صفحه اصلی</Link>
          <Link to={"/courses"}>دوره ها</Link>
          <Link to={"/comments"}>نظرات دانشجویان</Link>
          <Link to={"/about"}>درباره ما</Link>
        </ul>
        <div className="header__bars">
          <FaBars onClick={clickBarsHandler} />
        </div>
        <div className="header__icons">
          <Link to={"/cart"}>
            {contextAll.indexShop !== 0 && (
              <span>{contextAll.indexShop}</span>
            )}
            <AiOutlineShoppingCart />
          </Link>
          <Link to={"/dashboard"}>
            <AiOutlineUser />
          </Link>
        </div>
      </div>
      {contextAll.barsState == true && (
        <div className="sidemenu">
          <div className="data__sidemenu">
            <div className="times">
              <FaTimes onClick={clickTimesHandler} />
            </div>
            <hr />
            <ul>
              <li>
                <HiHome />
                <Link to={"/"}>صفحه اصلی</Link>
              </li>
              <li>
                <IoMdSchool />
                <Link to={"/courses"}>دوره ها</Link>
              </li>
              <li>
                <FaComments />
                <Link to={"/comments"}>نظرات دانشجویان</Link>
              </li>
              <li>
                <FaUserCircle />
                <Link to={"/about"}>درباره ما</Link>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

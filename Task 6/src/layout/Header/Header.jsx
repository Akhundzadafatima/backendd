import React from "react";
import { Link } from "react-router-dom";
import { HiDesktopComputer } from "react-icons/hi";
import { MdTabletMac } from "react-icons/md";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SlBasket } from "react-icons/sl";
import { ImCancelCircle } from "react-icons/im";
import { MdFavoriteBorder } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import "./Header.css";
import { useState, useEffect } from "react";

const Header = () => {

  const [color, setColor] = useState('black')

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > 100) {
        setColor('red');
      } else {
        setColor('black');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header>
      <div className="header">

        <div className="headerr">
          <div className="logo">
            <div className="colorlib">
              <img
                src="https://preview.colorlib.com/assets/img/logo.png"
                alt=""
              />
            </div>
            <div className="estore">+ ARAZONA </div>
          </div>
          <div className="icons_1">
            <div className="icon_1">
              <HiDesktopComputer />
            </div>
            <div className="icon_1">
              <MdTabletMac />
            </div>
            <div className="icon_1">
              <MdOutlinePhoneIphone />
            </div>
            <button className="icon_2">
              <SlBasket />
            </button>
            <div className="icon_1">
              <ImCancelCircle />
            </div>
          </div>
        </div>
      </div>
      <div className="secondSection">
        <div className="estorer">
          <img src="https://preview.colorlib.com/theme/aranoz/img/logo.png" alt="" />
        </div>
        <div>
          <ul>
            <li><Link to="/" style={{ color: color }}>Home</Link></li>
            <li><Link to="/Shop">Shop</Link></li>
            <li><Link to="/Pages">Pages</Link></li>
            <li><Link to="/Blog">Blog</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
        </div>
        <div className="iconss">
          <span className="favBasIcon"><IoSearch /></span>
          <span className="favBasIcon"><MdFavoriteBorder /></span>
          <span className="favBasIcon"><SlBasket /></span>

        </div>
      </div>
    </header>


  );
};

export default Header;
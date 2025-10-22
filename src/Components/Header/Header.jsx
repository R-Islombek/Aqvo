import React from 'react';
import { useTranslation } from "react-i18next";
import "./Header.css"; 
import back from "./images/back.png"; 

const Header = () => {
 
  const { t, i18n } = useTranslation(); 
  
  return (
    <div className='header'>
         <marquee behavior="scroll" direction="left" className="header__title" >{t("header.title")}</marquee>
      <div className='container'>
        <div className='header__container'>  
          <div className='header__box'>
            <p className='header__text' >{t("header.text")}</p>
            <a href="#"> <img className='header__img'  src={back} alt="Back" /></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
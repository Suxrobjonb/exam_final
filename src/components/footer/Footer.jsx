import React from 'react'
import './footer.css'
import { FaFacebookSquare } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { AiFillYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer__box'>
      <div className='footer__categoties-box'>
        <div className='question__text'>
          <strong className='question__text'>
          Savolingiz bormi? Qo'ng'iroq qiling
          </strong>
        </div>

          <h2>
            <a className='tell__number' href="tel:+998 71 209 99 44">+998 71 209 99 44</a>
          </h2>

          <ul className='brend__list-buttons'>
              <li className='brend__list-item'>
                <a className='footer__img-link' href="https://www.facebook.com/">
                <FaFacebookSquare className='face__bock-img brends__img'/>
                </a>
              </li>

              <li className='brend__list-item'>
                <a className='footer__img-link' href="https://t.me/texnomart_chat">
                <BsTelegram className='footer__telegram-img brends__img'/>
                </a>
              </li>

              <li className='brend__list-item'>
                <a className='footer__img-link' href="https://www.instagram.com/texnomart/">
                <BsInstagram className='instagram__img brends__img'/>
                </a>
              </li>

              <li className='brend__list-item'>
                <a className='footer__img-link' href="https://www.youtube.com/c/Texnomart">
                  <AiFillYoutube className='youtube__img brends__img'/>
                </a>
              </li>
          </ul>

          <div className='playmarket'>
            <a href="https://play.google.com/store/apps/details?id=com.texnomart.app">
              <img src="https://texnomart.uz/_nuxt/img/playmarket-logo-uz.793161d.svg" alt="site__logo" width={143} height={47}/>
            </a>
          </div>

        <div className='market__location'>
          <a className='link__id' href="#link">
          Do`konlar manzillari Toshkent
          </a>
        </div>
      
      </div>

      <div className='Company'>
        <strong className='title__company'>
          Kompaniya
        </strong>

        <ul className='company__list'>
          <li className='company__list-item'>
            <a className='company__link' href="#link">
            B2B savdosi
            </a>
          </li>

          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Biz haqimizda
            </a>
          </li>

          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Yangiliklar va sharhlar
            </a>
          </li>
          
          <li className='company__list-item'>
            <a className='company__link' href="#link">
            IMEI ni tekshirish
            </a>
          </li>
        </ul>
        </div>

        

        <div className='Company'>
        <strong className='title__company'>
          Malumot
        </strong>

        <ul className='company__list'>
          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Bepul yetkazib berish
            </a>
          </li>

          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Bonus tizimi
            </a>
          </li>

          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Texnomartda ishlash
            </a>
          </li>
          
          <li className='company__list-item'>
            <a className='company__link' href="#link">
             Shaxsiy kabinet
            </a>
          </li>

          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Aloqa raqamlari
            </a>
          </li>
        </ul>
        </div>



        <div className='Company'>
        <strong className='title__company'>
        Haridorga yordam
        </strong>

        <ul className='company__list'>
          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Muddatli to'lovga sotib olish
            </a>
          </li>

          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Maxsulotni qaytarish
            </a>
          </li>

          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Mahsulotlar uchun kafolat
            </a>
          </li>
          
          <li className='company__list-item'>
            <a className='company__link' href="#link">
            Ko'p so'raladigan savollar
            </a>
          </li>
        </ul>

          <div className='telegram__bot-father'>
            <a className='telegram__bot' href="#link">
            <FaTelegramPlane className='telegram__bot-img'/>
            Bonusingizni bilib oling
            </a>
          </div>
        </div>
    </div>
  )
}

export default Footer;
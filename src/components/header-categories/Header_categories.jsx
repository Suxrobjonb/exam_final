import React from 'react'
import  './header-categories.css';
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineGlobe } from "react-icons/hi"
// import { RiArrowDropDownLine } from "react-icons/ri"

const Header_categories = () => {
  return (
    <div className='categories'>
        <div className='location__select'>
            <CiLocationOn className='location__img' />
            <span className='laction__text'>Toshkent</span>
        </div>

        <div className='links__categories'>
            <a className='list__links' href="#link">
              Bizning do'konlarimiz
            </a>

            <a className='list__links backgraund' href="#link">
              B2B savdosi 
            </a>

            <a className='list__links' href="#link">
              Muddatli to'lovga sotib olish
            </a>

            <a className='list__links' href="#link">
              To'lov usullari
            </a>

            <a className='list__links' href="#link">
              Mahsulotlar uchun kafolat
            </a>
        </div>

        <div className='Header__contacts'>
          <span className='call__text'>
            Aloqa markazi :
          </span>

          <a className='call__center' href='tel:+99871 209 99 44'>
            +99871 209 99 44
          </a>
        </div>

        <div className='lang-box'>
                <i><HiOutlineGlobe className='lang-img' /></i>
                <select className='lang-select'>
                    <option className='lang-text' value="O'Z">O'Z</option>
                    <option className='lang-text' value="Ру">Ру</option>
                </select>
            </div>
    </div>
  )
}

export default Header_categories
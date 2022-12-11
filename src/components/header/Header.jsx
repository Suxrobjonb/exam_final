import "./header.css";
import Modal from "../Modal/Modal";
import { useState } from "react";
import { BiMicrophone } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { BsBoxSeam } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { GiScales } from "react-icons/gi";
import { AiOutlineHeart } from "react-icons/ai";  
import { SlBasket } from "react-icons/sl";


const Header = () => {
  const [openModal, setOpenModal] = useState(false);
  
 return (
    <div className='header__box' id="top">
      <img src="https://texnomart.uz/_nuxt/img/texnomart-logo.a75bf76.svg" alt="site-logo" width={230} height={32}/>
            <form className='header__form' action="post">
              <div className='left__serch'>
                  <select className='list__search'>
                        <option>Barcha kategoriyalar</option>
                        <option>Maishiy texnika</option>
                        <option>Ofis jihozlar</option>
                        <option>oshxona uchun texnika</option>
                        <option>uy uchun idshlar</option>
                        <option>avtomobil uchun mahsulot</option>
                        <option>iqlim texnikasi</option>
                        <option>televezorlar telekartalar</option>
                        <option>telefon gajtlari</option>
                        <option>kompyuter texnikasi</option>
                        <option>iqlim texnikasi</option>
                  </select>
                  <input className='search' type="text" />
              </div>

              <div className='right__search'>
                  <button className='voice__button'>
                      <BiMicrophone  className='voice__button-img'/>
                  </button>
              </div>
                  <button className='search__button'>
                    <AiOutlineSearch className='search__img'/>
                  </button>
            </form>

            <div className='header__center-lists'>
              <div className='header__center-customs'>
                <button className='box__custom'>
                 <i className='box__img'><BsBoxSeam /></i>
                 Buyurtma holati
                </button>
              </div>
  
              <div className='header__center-customs'>
                <button onClick={() => setOpenModal(true)} className='box__custom'>
                 <i className='box__img'><AiOutlineUser /></i>
                 Kirish
                </button>
                <Modal open={openModal} onClose={() => setOpenModal(false) }/>
              </div>


              <div className='header__center-customs'>
                <button className='box__custom'>
                 <i className='box__img'><GiScales /></i>
                  Taqqoslash
                </button>
              </div>

              <div className='header__center-customs'>
                <button className='box__custom'>
                 <i className='box__img'><AiOutlineHeart /></i>
                  Sevimlilar
                </button>
              </div>

              <div className='header__center-customs'>
                <button className='box__custom'>
                 <i className='box__img'><SlBasket /></i>
                  Savatcha
                </button>
              </div>
            </div>
    </div>
  )
} 

export default Header
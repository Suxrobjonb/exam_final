import React,{ useState } from 'react';
import ModalRegistor from '../Modal__registor/Modal_registor';
import './Modal.css';

const Modal = ({ open, onClose }) => {
  const [openModal, setOpenModal] = useState(false);
  if(!open) return null;
  

  

  return (
    <div className='modalContainer'>
      <div className='big-modal'>
        <div className='header__modal'>
        <div className='headar__bottom-modal'>
        <button className='login__button-top'>Kirish</button>
        <button onClick={() => setOpenModal(true)} className='sign__button'>
          Ro'yxatdan o'tish
          <ModalRegistor open={openModal} />
        </button>
        </div>
        <p onClick={onClose} className='colse__modal'>x</p>
        </div>
        <div className='login__modal'>
          <form className='login__form'>
            <label className='title__input'>Telefon <span className='star'>*</span></label>
            <input className='tel__number' type="tel:" />
            <button className='login__tel-button'>
              Telefon orqali kirish
            </button>
              <div>
               <button  className='login__button'>
                Login orqali kirish
               </button>
              </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Modal
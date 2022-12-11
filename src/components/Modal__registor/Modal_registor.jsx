import React from 'react' 

const ModalRegistor = ({open}) => {
  if(!open) return;
  return (
    <div className='registor__modal'>
      <div className='regisotr__item'>
        <div className='top__modal'>
          <div className='modal__left'>
            <button className='registor__login'>
              Kirish
            </button> 
            <button className='registor__title'>
              Ro'yxatdan o'tish
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalRegistor
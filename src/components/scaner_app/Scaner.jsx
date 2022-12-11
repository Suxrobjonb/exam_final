import React from 'react'
import './Scaner.css'

const Scaner = () => {
  return (
    <div className='box__app'>
      <div className='new__box'>
            <div className='img__app'>
                  <img src="https://texnomart.uz/_nuxt/img/phone-min.d3c6b0c.png" alt="site-imge" width={470} height={440}/>
            </div>

            <div className='texts__box'>
                  <h1 className='info__title'>
                        Ilovani yuklang
                  </h1>

                  <p className='text__box'>
                  Haridlarni uydan chiqmagan holda mobil ilova orqali amalga oshiring!
                  </p>

                  <div className='Qr__code'>
                        <img src="https://texnomart.uz/_nuxt/img/quar-code.e14205a.png" alt="site-qrcode" width={112} height={112}/>
                        
                        <p className='QR__text'>
                        Kamerani  yo`naltiring va Texnomart ilovasini bepul yuklang
                        </p>
                  </div>
            </div>
      </div>
    </div>
  )
}

export default Scaner
import React from 'react'
import  './Main_category.css'


const Main_category = () => {
  return (
    <div className='main__categoriy'>
      <h1 className='main__categorey-title'>
      Telefonlar va maishiy texnika muddatli to'lovga
      </h1>

      <div className='category__list'>
            <div className='term__payment'>
                  <a className='list__link' href="#link">
                        <div className='term__payment-img'>
                              <img src="https://texnomart.uz/_nuxt/img/installment-1.da8d77c.svg" alt="" />
                        </div>

                        <h3 className='text__buy'>
                        Muddatli to'lovga sotib olish
                        </h3>

                        <p className='others__text'>
                        Texnomartda maishiy texnika mahsulotlari uchun qulay onlayn to'lov
                        </p>
                  </a>
            </div>

            <div className='term__payment'>
                  <a className='list__link' href="#link">
                        <div className='term__payment-img'>
                              <img className='img__list' src="https://texnomart.uz/_nuxt/img/installment-2.de0c0ae.svg" alt="" />
                        </div>

                        <h3 className='text__buy'>
                        Muddatli to'lovga sotib olish
                        </h3>

                        <p className='others__text'>
                        Texnomartga tovarlarni yetkazib berish shartlari
                        </p>
                  </a>
            </div>

            <div className='term__payment'>
                  <a className='list__link' href="#link">
                        <div className='term__payment-img'>
                              <img className='img__list' src="https://texnomart.uz/_nuxt/img/installment-3.575d98a.svg" alt="" />
                        </div>

                        <h3 className='text__buy'>
                        Mahsulotlar uchun kafolat
                        </h3>

                        <p className='others__text'>
                        Texnomartda mahsulotning kafolati va qaytarilishi haqida hamma narsani bilib oling
                        </p>
                  </a>
            </div>

            <div className='term__payment'>
                  <a className='list__link' href="#link">
                        <div className='term__payment-img'>
                              <img className='img__list' src="	https://texnomart.uz/_nuxt/img/installment-4.4086694.svg" alt="" />
                        </div>

                        <h3 className='text__buy'>
                        Bonus tizimi
                        </h3>

                        <p className='others__text'>
                        Bonus tizimi
                        </p>
                  </a>
            </div>

            <div className='term__payment'>
                  <a className='list__link' href="#link">
                        <div className='term__payment-img'>
                              <img className='img__list' src="https://texnomart.uz/_nuxt/img/installment-4.4086694.svg" alt="" />
                        </div>

                        <h3 className='text__buy'>
                        Yordam
                        </h3>

                        <p className='others__text'>
                        Ko'p beriladigan savollar
                        </p>
                  </a>
            </div>
      </div>

      
    </div>
  )
}

export default Main_category
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation"
import "./Corusel_compain.css";
import '../../components/Popular-carusel/Pop_carusel.css';
import { Navigation } from "swiper"; 

function Pop_carusel() {
  return (
    <div className='Pop__carusel'>
      <h2 className='title__pop'>
            Ommabop kategoriyalar
      </h2>

      <div className="box__popular">
      <Swiper
                    slidesPerView={6}
                    spaceBetween={10}
                    pagination={{
                        clickable: true
                    }}
                    navigation={true}
                    modules={[Navigation]}
                    className="mySwiper">
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/pilesos.svg"} alt="cate-images" />
                        <p className='cate-text'>Chang yutgichlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/planshet.svg"} alt="cate-images" />
                        <p className='cate-text'>Planshetlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/xolodilnik.svg"} alt="cate-images" />
                        <p className='cate-text'>Muzlatgichlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/klimaticheskaya-texnika.svg"} alt="cate-images" />
                        <p className='cate-text'>Havo sovutgichlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/lg.svg"} alt="cate-images" />
                        <p className='cate-text'>Telvizorlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/feni.svg"} alt="cate-images" />
                        <p className='cate-text'>Fenlar</p>
                    </div></SwiperSlide>
                    <SwiperSlide><div className="categoriy-card">
                        <img className='cate-images' src={"https://backend.texnomart.uz/files/global/new-photo/img/special-slider/stiralnaya_mashina.svg"} alt="cate-images" />
                        <p className='cate-text'>Kir yuvish mashenalari</p>
                    </div></SwiperSlide>
                </Swiper>
    </div>
    </div>
  )
}

export default Pop_carusel
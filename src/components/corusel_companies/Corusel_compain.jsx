import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"
import "./Corusel_compain.css";
import { Navigation } from "swiper"; 



export default function App() {
  return (
    <div className="box__bren">
      <Swiper
        slidesPerView={8}
        spaceBetween={20}
        pagination={{
          clickable: true
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404154940058.webp"} alt="brend-images" />
          </div></SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404501355729.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404542676301.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404481916020.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101405315369098.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404183539183.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={ "https://backend.texnomart.uz//images/brands/2022101404450190315.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404474125545.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404461797247.webp"} alt="brend-images" /></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="company__box">
          <img className="compony__images" src={"https://backend.texnomart.uz//images/brands/2022101404240931733.webp"} alt="brend-images" /></div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
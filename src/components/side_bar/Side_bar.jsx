import React from "react";
import "./side_bar.css";
import { RiArrowDropRightLine } from 'react-icons/ri';


const SideBar = ({ open }) => {
  if (!open) return;
  return (
    <div className="Side_bar">
      <div className="left__catalog">
        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/texnika_dlya_doma.svg" alt="" width={24} height={24}  />
          Maishiy texnika
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>

        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/ofisnaya_texnika.svg" alt="" width={24} height={24}  />
          Ofis jihozlari
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>

        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/texnika_dlya_kuxni.svg" alt="" width={24} height={24}  />
          Oshxona uchun texnika
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>

        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/posuda_dlya_doma.svg" alt="" width={24} height={24}  />
          Uy uchun idishlar 
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>

        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/tovar_dlya_avto.svg" alt="" width={24} height={24}  />
          Avtomobil uchun mahsulot
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>

        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/klimaticheskaya_texnika.svg" alt="" width={24} height={24}  />
          Iqlim texnikasi
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>

        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/televizori_i_telekarti.svg" alt="" width={24} height={24}  />
            Televizorlar va telekonallar
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>

        <div className="side__bar-catalog">
          <img src="https://backend.texnomart.uz/files/global/new-photo/img/category_for_pc/televizori_i_telekarti.svg" alt="" width={24} height={24}  />
            Telefon va Gatjetlar
          <RiArrowDropRightLine className="catalog__drop"/>
        </div>
      </div>

      <div className="">

      </div>
    </div>
  );
};

export default SideBar;

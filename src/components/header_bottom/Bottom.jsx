import { useState } from 'react'
import './bottom.css'
import SideBar from '../side_bar/Side_bar';
import { BiCategory } from "react-icons/bi";
import { BsFillLightningFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa"

const Bottom = () => {
      const [navOpen, setNavOpen] = useState(false);
  return (
    <div className='header__selects'>
      <div className='select__list'>
            <button onClick={() => setNavOpen(!navOpen)} className='catolg'>
            <BiCategory className='category__img' />
                  Katalog
            <SideBar open={navOpen} />
            </button>
      </div>
            <ul className='list__nav'>
                  <li className='list__nav-list'>
                        <a className='nav__list-link yellow-week' href="#link">
                        <BsFillLightningFill className='electr__img'/>
                            Sariq Hafta  
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link action' href="#link">
                        <FaFire className='fire__img' />
                         Aksiyalar
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link' href="#link">
                        Smartfonlar
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link' href="#link">
                        Muzlatgichlar
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link' href="#link">
                        Сhangyutgichlar
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link' href="#link">
                        Xavo sovutgichlar
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link' href="#link">
                        Televizorlar
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link' href="#link">
                        Barcha kategoriyalar
                        </a>
                  </li>

                  <li className='list__nav-list'>
                        <a className='nav__list-link' href="#link">
                        Barcha kategoriyalar
                        </a>
                  </li>
            </ul>
    </div>
  )
}

export default Bottom
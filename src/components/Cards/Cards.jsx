import React from 'react'
import { SlBasket } from "react-icons/sl";
const Cards = () => {

fetch('https://api.escuelajs.co/api/v1/products')
.then(response => response.json())
.then(json => {
      json.forEach(Element)
})
  return (
    <div className='Card__box'>
      <div className='Cards'>
            <img src="" alt="" />

            <strong></strong>

            <button><SlBasket /></button>
      </div>
    </div>
  )
}

export default Cards
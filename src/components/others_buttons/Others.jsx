import  "./Others.css"
import { FaTelegramPlane } from "react-icons/fa";

const Others = () => {
  return (
    <div className='button'>
      <button className='telegram__button'>
            <a href="#link">
            <FaTelegramPlane className='button-img' width={24} height={24}/>
            </a>
      </button>

      <button className='telegram__button'>
      <FaTelegramPlane className='button-img' width={24} height={24}/>
      </button>
    </div>
  )
}

export default Others;
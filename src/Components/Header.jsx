import Elthor from '../assets/Images/ElthorLogo.svg'
import ElthorLogo_black from '../assets/Images/ElthorLogo_black.svg'
import menu_icon from '../assets/Images/menu_icon.svg'
import menu_icon_black from '../assets/Images/menu_icon_black.svg'
import {useNavigate} from 'react-router-dom'
const Header = (props) => {
  const navigate = useNavigate()
  return (
    <div className={`absolute top-0 px-4 lg:px-14 flex items-center transition-colors h-14 md:h-18 duration-300  w-full ${props.OnScroll>30 ?"bg-[#000000c5] ":'bg-transparent'}`}>
       <img src={props.current_number % 2 == 0 || props.current_number == 3  || props.OnScroll>30 ? Elthor : ElthorLogo_black} loading="lazy"  alt="Elthor" className="w-20 lg:w-26 cursor-pointer" onClick={()=>{navigate('/')}}/>
       <div className="flex-1 flex items-center justify-end">
            <img loading="lazy" onClick={props.handleToggle} src={props.current_number % 2 == 0 || props.current_number == 3 || props.OnScroll>30 ? menu_icon : menu_icon_black} alt="menu_icon" className="w-5 lg:w-8 cursor-pointer" />
       </div>
    </div>
  )
}

export default Header

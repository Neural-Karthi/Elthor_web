import React from 'react'
import Cancel_icon from '../assets/Images/Cancel_icon.svg'
import menu_bike_1 from '../assets/Images/menu_bike_1.svg'
import menu_bike_2 from '../assets/Images/menu_bike_2.svg'
import menu_bike_3 from '../assets/Images/menu_bike_3.svg'
import menu_bike_4 from '../assets/Images/menu_bike_4.svg'
import menu_bike_5 from '../assets/Images/menu_bike_5.svg'
import { useNavigate } from 'react-router-dom';
const Menu = (props) => {
    const navigate = useNavigate();
    const bikeData = [
        { src: menu_bike_1, name: 'Elthor Bravo B1' },
        { src: menu_bike_2, name: 'Elthor Bravo B2' },
        { src: menu_bike_3, name: 'Elthor Bravo B3' },
        { src: menu_bike_4, name: 'Elthor Bravo B4' },
        { src: menu_bike_5, name: 'Elthor Bravo B5' }
      ];
      
      const chunkedBikes = [bikeData.slice(0, 3), bikeData.slice(3)];

      const signpop_handler=()=>{
        props.handleToggle()
        props.Signinpop()
      }

  return (
    <>
    <div className="w-full flex items-center justify-end px-2 py-5 md:py-7">
                    <img src={Cancel_icon} alt="Cancel_icon" className=" w-6 md:w-8 cursor-pointer" onClick={props.handleToggle}/>
                </div>
                {chunkedBikes.map((group, i) => (
                  <div key={i} className="py-5 md:px-8 flex items-center gap-3">
                    {group.map((bike, j) => (
                      <div key={j} className="w-1/3 flex flex-col items-center justify-center" onClick={()=>{navigate("/Bikemodel/Elthor_Dynamo");window.scrollTo(0, 0);}}>
                        <img
                           src={`${bike.src}?v=1.0`}
                          loading="lazy"
                          alt={`bike-${i}-${j}`}
                          className="hover:scale-105 transition duration-100 cursor-pointer"
                        />
                        <span className="mt-2 text-sm md:text-[16px] text-center  font-SFDispaly py-3">{bike.name}</span>
                      </div>
                    ))}
                  </div>
                ))}
                 <div className="flex flex-row py-5 px-5 md:px-10 2xl:px-22 gap-5 mr-auto ml-auto">
                 <div className="w-1/2">
                       <div className=" h-full ">
                          <h1 className="text-[15px] md:text-[14px] 2xl:text-lg text-[#A1A8AF] py-2 ">Elthor</h1>
                          <div className="text-sm flex flex-col gap-1 md:text-[14px] 2xl:text-lg text-[#000000]">
                             <h1 className="hover:text-[#A1A8AF] cursor-pointer" onClick={()=>{navigate("/Bikemodel/Elthor_Dynamo");window.scrollTo(0, 0);}}>Elthor Bravo</h1>
                             <h1 className="hover:text-[#A1A8AF] cursor-pointer" onClick={()=>{navigate("/Bikemodel/Elthor_Dynamo");window.scrollTo(0, 0);}}>Elthor Coral</h1>
                             <h1 className="hover:text-[#A1A8AF] cursor-pointer" onClick={()=>{navigate("/Bikemodel/Elthor_Dynamo");window.scrollTo(0, 0);}}>Elthor H7</h1>
                             <h1 className="hover:text-[#A1A8AF] cursor-pointer" onClick={()=>{navigate("/Bikemodel/Elthor_Dynamo");window.scrollTo(0, 0);}}>Elthor Mini Cooper</h1>
                          </div>
                      </div>
                     </div>
                     <div className=" w-1/2">
                        <div className=" h-full">
                             <h1 className="text-[15px] md:text-[14px] 2xl:text-lg text-[#A1A8AF] py-2">Assistance</h1>
                             <div className="text-sm flex flex-col gap-1 md:text-[14px] 2xl:text-lg text-[#000000]">
                                <h1 className="hover:text-[#A1A8AF] cursor-pointer">Become A Dealer</h1>
                                <h1 className="hover:text-[#A1A8AF] cursor-pointer">Find A Dealer</h1>
                                <h1 className="hover:text-[#A1A8AF] cursor-pointer">Owner’s Manual</h1>
                                <h1 className="hover:text-[#A1A8AF] cursor-pointer">Service Points</h1>
                             </div>
                        </div>
                     </div>
                 </div>
                 <div className="flex flex-row py-2 px-5 pb-10 md:px-10 2xl:px-22 gap-5 mr-auto ml-auto">
                     <div className=" w-1/2">
                       <div className=" h-full ">
                          <h1 className="text-[15px] md:text-[14px] 2xl:text-lg text-[#A1A8AF] py-2">Account</h1>
                          <div className="text-sm flex flex-col gap-1 md:text-[14px] 2xl:text-lg text-[#000000]">
                             {/* <h1 className="hover:text-[#A1A8AF] cursor-pointer" onClick={signpop_handler}>Sign in</h1> */}
                             <h1 className="hover:text-[#A1A8AF] cursor-pointer">Support</h1>
                          </div>
                      </div>
                     </div>
                 </div>
    </>
  )
}

export default Menu

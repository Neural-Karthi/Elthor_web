import React from "react";
import Bike_background_studio from '../assets/Images/Bike_background_studio_new.svg'
import Bike_background_studio_1 from '../assets/Images/Bike_background_studio_1.svg'

import Bike_background_studio_2 from '../assets/Images/Bike_background_studio_3.svg'
import Bike_background_studio_3 from '../assets/Images/Bike_background_studio_4.svg'
import Bike_background_studio_4 from '../assets/Images/Bike_background_studio_5.svg'
import Bike_background_studio_6 from '../assets/Images/Bike_background_studio_7.svg'

import Swapping_banner from '../assets/Images/Banner_2.svg'
import Swapping_banner_mobile from '../assets/Images/Banner_2_mobile.svg'
import Bikes_banner from '../assets/Images/Banner_3.svg'
import Battery_swapping_img from '../assets/Images/Battery_swapping_img.svg'

export const Banner_1 = () => {
    return (
       <>
           <div className="absolute top-1/4 md:top-1/5  w-full left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 mt-3 text-white flex flex-col gap-2 items-center  text-4xl font-bold">
                <div className="px-8 py-2 rounded-full bg-[#ffffff2d]">
                   <h1 className="text-xs font-SFDispaly uppercase tracking-wider">Introducing</h1>
                </div>
                <h1 className='text-4xl md:text-4xl font-SFDispaly uppercase tracking-wide'>Elthor Bravo</h1>
                <h1 className={`text-[13px] md:text-[13px] lg:text-[15px] poppins-light text-center uppercase tracking-wider`}>Powering the Next Era of Motorcycles</h1>
           </div>
           <img src={Bike_background_studio} loading="lazy" alt="Bike_background_studio" className="w-full h-full object-cover -mt-8" draggable="false"/>
           <div className="absolute bottom-8 md:bottom-10 left-1/2 px-5 text-center  font-SFDispaly transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-5 w-full">
              <button className="w-full max-w-[300px] border uppercase border-white bg-[#ffffff8a]  text-white rounded-xl py-4 text-[14px] cursor-pointer">Book Now</button>
              <button className="w-full max-w-[300px] bg-white uppercase rounded-xl py-4 text-[14px] cursor-pointer">Explore Bravo</button>
           </div>
       </>
    );
};

export const Banner_2 = () => {
    return (
        <>
           <div className="absolute top-1/4 lg:top-1/2  w-full left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 mt-3 text-white flex flex-col gap-2 items-center  text-4xl font-bold">
                <div className="px-8 py-2 rounded-full bg-[#0000002d]">
                   <h1 className="text-xs font-SFDispaly uppercase tracking-wider">Introducing</h1>
                </div>
                <h1 className='text-4xl md:text-4xl font-SFDispaly uppercase tracking-wide text-black'>#SWAPFORWARD</h1>
                <h1 className={`text-[13px] md:text-[13px] lg:text-[15px] poppins-light text-center uppercase tracking-wider text-black`}>Locate. Swap. Go — All from the Elthor App.</h1>
           </div>
           <img src={Swapping_banner} loading="lazy" alt="Swapping_banner" className="w-full h-full hidden lg:flex object-cover -mt-8" draggable="false"/>
           <img src={Swapping_banner_mobile} loading="lazy" alt="Swapping_banner" className="w-full h-full lg:hidden object-cover -mt-8" draggable="false"/>
           
       </>
    );
};

export const Banner_3 = () => {
    return (
       <>
           <div className="absolute top-1/4 md:top-1/5  w-full left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 mt-3 text-white flex flex-col gap-2 items-center  text-4xl font-bold">
                <div className="px-8 py-2 rounded-full bg-[#ffffff2d]">
                   <h1 className="text-xs font-SFDispaly uppercase tracking-wider">Introducing</h1>
                </div>
                <h1 className='text-4xl md:text-4xl font-SFDispaly uppercase tracking-wide'>Elthor H7</h1>
                <h1 className={`text-[13px] md:text-[13px] lg:text-[15px] poppins-light text-center uppercase tracking-wider px-10`}>Powering the Next Generation of Electric Bikes</h1>
           </div>
           <img src={Bike_background_studio_2} loading="lazy" alt="Bike_background_studio" className="w-full h-full object-cover -mt-8" draggable="false"/>
           <div className="absolute bottom-8 md:bottom-10 left-1/2 px-5 text-center  font-SFDispaly transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-5 w-full">
              <button className="w-full max-w-[300px] border uppercase border-white bg-[#ffffff8a]  text-white rounded-xl py-4 text-[14px] cursor-pointer">Book Now</button>
              <button className="w-full max-w-[300px] bg-white uppercase rounded-xl py-4 text-[14px] cursor-pointer">Explore Bravo</button>
           </div>
       </>
    );
};


export const Banner_4 = () => {
   return (
      <>
          <div className="absolute top-1/4 md:top-1/5  w-full left-1/2 text-center transform -translate-x-1/2 -translate-y-1/2 mt-3 text-white flex flex-col gap-2 items-center  text-4xl font-bold">
               <div className="px-8 py-2 rounded-full bg-[#ffffff2d]">
                  <h1 className="text-xs font-SFDispaly uppercase tracking-wider">Introducing</h1>
               </div>
               <h1 className={`text-[13px] md:text-2xl poppins-light text-center uppercase tracking-wider`}>Elthor H7 Series</h1>
               <h1 className='text-3xl md:text-5xl .poppins-light font-light '>Made for every Indian,<br /> now with even more to love!</h1>
          </div>
          <img src={Bikes_banner} loading="lazy" alt="Bike_background_studio" className="w-full h-full object-cover -mt-8" draggable="false"/>
          <div className="absolute bottom-8 md:bottom-10 left-1/2 px-5 text-center  font-SFDispaly transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center gap-2 md:gap-5 w-full">
             <button className="w-full max-w-[300px] border uppercase border-white bg-[#ffffff8a]  text-white rounded-xl py-4 text-[14px] cursor-pointer">Book Now</button>
             <button className="w-full max-w-[300px] bg-white uppercase rounded-xl py-4 text-[14px] cursor-pointer">Explore Bravo</button>
          </div>
      </>
   );
};

export const Swapping_station_banner = () =>{
   return(
      <>
         <div className="border rounded-3xl bg-[#F4F9FD] border-[#E0E7ED] w-full h-full overflow-hidden flex flex-col-reverse items-center lg:flex-row lg:px-14 2xl:px-4">
            <div className="flex flex-1 flex-col items-center justify-center">
               <div className="text-center md:w-[100%] 2xl:w-[65%] lg:text-left py-4 px-4 md:px-4">
                  <h1 className="text-2xl md:text-5xl lg:text-4xl 2xl:text-4xl font-medium md:pb-2 font-SFDispaly">Pause. Exchange & Ride</h1>
                  <h1 className="text-[#606568] text-[16px] md:text-2xl lg:text-2xl 2xl:text-2xl px-1 pb-2 md:pb-4 .poppins-light">India’s first electric scooter driven by <br className="hidden md:flex lg:hidden"/> battery swap technology.</h1>
                  <div className="py-3">
                    <button className="py-3 px-22 bg-[#5CB3F1] rounded-xl text-white text-sm md:text-lg cursor-pointer font-semibold hover:scale-105">Demo</button>
                  </div>
               </div>
            </div>
            <div className="flex-1 flex items-center justify-center w-[85%] h-[85%] p-8 md:p-16">
                <img src={Battery_swapping_img} alt="Battery swapping" className="object-cover w-full h-full"/>
            </div>
        </div>
      </>
   )
}

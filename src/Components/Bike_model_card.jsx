import React from 'react'
import Bike_background_Studio_Plain from '../assets/Images/Bike_background_Studio_Plain.svg'

const Bike_model_card = (props) => {
  return (
     <div className="w-full max-w-[370px] h-[460px]  rounded-3xl bg-[#FAFCFC] border border-[#E0E7ED] overflow-hidden"> 
         <div className="w-full h-[50%] relative hover:scale-105 transition duration-100 cursor-pointer">
            <img src={Bike_background_Studio_Plain} loading="lazy" alt="Bike_background_Studio_Plain" className="w-full h-full object-cover"/>
            <img src={props.model_1} alt="model_1" loading="lazy" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%]"/>
         </div>
         <div className="p-4">
            <div className="py-2">
              <h1 className="text-2xl font-medium">{props.model_title}</h1>
              <h1 className="text-[#606568] text-sm">{props.Subtitle}</h1>
            </div>
           <h1 className="text-[#606568]">{props.price}</h1>
           <h1 className="text-[#606568]">{props.EmiPrice}</h1>
           <div className="w-full py-5">
              <button className="w-full py-3 bg-black rounded-xl text-white text-lg cursor-pointer">Know more</button>
           </div>
         </div>
     </div>
  )
}

export default Bike_model_card

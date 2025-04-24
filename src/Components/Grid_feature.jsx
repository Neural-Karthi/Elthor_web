import React from 'react'
import Arrow_ from '../assets/Images/Arrow_.svg'
import { useNavigate } from "react-router-dom";

const Grid_feature = ({ image, title, subtitle, overlayImage, link}) => {
  const navigate = useNavigate();
  return (
    <div className="h-[420px] w-full lg:max-w-[370px] rounded-3xl bg-[#F4F9FD] border border-[#E0E7ED] overflow-hidden" onClick={()=>{navigate(link); window.scrollTo(0, 0);}}>
    <div className="h-[70%] relative hover:scale-105 cursor-pointer transition duration-100">
      {overlayImage ? (
        <>
          <img src={image} alt="" className="w-full h-full object-cover" />
          <img src={overlayImage} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
        </>
      ) : (
        <img src={image} alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"/>
      )}
    </div>
    <div className="h-[30%] bg-white p-5 flex items-center">
      <div className="w-[95%]">
        <h1 className="text-2xl font-medium text-[#384255]">{title}</h1>
        <h2 className="text-sm text-[#606568] py-1">{subtitle}</h2>
      </div>
      <div className="px-5">
        <img src={Arrow_} alt="Arrow icon" className="w-8" />
      </div>
    </div>
  </div>
  )
}

export default Grid_feature

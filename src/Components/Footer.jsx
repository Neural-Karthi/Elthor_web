import React from 'react'
import logo from '../assets/Images/ElthorLogo.svg'

import Linkedin_logo from '../assets/Images/Linkedin_logo.svg'
import Twitter_logo from '../assets/Images/Twitter_logo.svg'
import youtube_logo from '../assets/Images/youtube.svg'
import Facebook from '../assets/Images/Facebook.svg'
import Instagram_logo from '../assets/Images/Instagram_logo.svg'

const Footer = () => {
  return (
    <div className="w-full cursor-default bg-[#0E151D]">
         <div className=" h-[60%]">
            <div className="grid grid-cols-2 lg:grid-cols-4  py-5 md:py-10 px-5 gap-4 h-full md:w-[80%] lg:w-[70%] 2xl:w-[55%] mr-auto ml-auto">
                 <div className=" h-full ">
                       <h1 className="text-[15px] md:text-xl text-[#A1A8AF] py-3">Elthor</h1>
                       <div className="text-sm flex flex-col gap-1 md:text-lg text-[#ffffff]">
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Elthor Bravo</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Elthor Coral</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Elthor H7</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Elthor Mini Cooper</h1>
                       </div>
                 </div>
                 <div className=" h-full">
                      <h1 className="text-[15px] md:text-xl text-[#A1A8AF] py-3">Assistance</h1>
                      <div className="text-sm flex flex-col gap-1 md:text-lg text-[#ffffff]">
                         <h1 className="hover:text-[#A1A8AF] cursor-pointer">Become A Dealer</h1>
                         <h1 className="hover:text-[#A1A8AF] cursor-pointer">Find A Dealer</h1>
                         <h1 className="hover:text-[#A1A8AF] cursor-pointer">Owner’s Manual</h1>
                         <h1 className="hover:text-[#A1A8AF] cursor-pointer">Service Points</h1>
                      </div>
                 </div>
                 <div className=" h-full">
                       <h1 className="text-[15px] md:text-xl text-[#A1A8AF] py-3">Assorted</h1>
                       <div className="text-sm flex flex-col gap-1 md:text-lg text-[#ffffff]">
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Products</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Accessories</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Gallery</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Videos</h1>
                       </div>
                 </div>
                 <div className=" h-full">
                       <h1 className="text-[15px] md:text-xl text-[#A1A8AF] py-3">Legal</h1>
                       <div className="text-sm flex flex-col gap-1 md:text-lg text-[#ffffff]">
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Disclaimer</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Terms</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">Privacy Policy</h1>
                          <h1 className="hover:text-[#A1A8AF] cursor-pointer">FAQ’s</h1>
                       </div>
                 </div>
            </div>
         </div>
         <div className="py-5 md:py-5 px-5 gap-4 md:w-[80%] lg:w-[90%] 2xl:w-[85%] mr-auto ml-auto">
              <div className="py-4 md:py-7 border-b border-[#e0e7ed71] w-full flex flex-row items-center">
                 <div className="flex-1">
                   <img src={logo} loading="lazy" alt="" className="w-28 md:w-32 lg:w-38"/>
                 </div>
                 <div className="flex gap-1.5 lg:gap-2 justify-end items-center">
                    <img src={Instagram_logo} loading="lazy" alt="" className="w-4 md:w-6 lg:w-8 hover:scale-103 cursor-pointer"/>
                    <img src={Facebook} loading="lazy" alt="" className="w-4 md:w-6 lg:w-8 hover:scale-103 cursor-pointer"/>
                    <img src={youtube_logo} loading="lazy" alt="" className="w-4 md:w-6 lg:w-8 hover:scale-103 cursor-pointer"/>
                    <img src={Twitter_logo} loading="lazy" alt="" className="w-4 md:w-6 lg:w-8 hover:scale-103 cursor-pointer"/>
                    <img src={Linkedin_logo} loading="lazy" alt="" className="w-4 md:w-6 lg:w-8 hover:scale-103 cursor-pointer"/>
                 </div>
              </div>
              <div className="w-full text-right py-3">
                  <p className="text-[#A1A8AF] text-xs">All information is subject to specific conditions.<br />© 2025 Elthor Energy. All rights reserved</p>
              </div>
         </div>
    </div>
  )
}

export default Footer

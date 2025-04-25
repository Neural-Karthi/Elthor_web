import { useParams } from "react-router-dom";
import React, { useEffect,useState } from 'react';
import {Banner_module}  from '../Components/BikeModelsComponents.jsx'

import Header from '../Components/Header'
import Menu from '../Components/Menu.jsx'
import LoginCard from  '../Components/LoginCard.jsx'
import Grid_feature from '../Components/Grid_feature.jsx'

import { useDispatch, useSelector } from 'react-redux';
import { setChangeToggle,selectMenuToggle  } from '../Redux/Slice/Menu_toggle.js';
import { setChangeSigninToggle,selectsignToggle  } from '../Redux/Slice/Login_toggle.js';

import Feature_img_1 from '../assets/Images/Model_Bravo/Feature_img_1.svg'
import Feature_img_2 from '../assets/Images/Model_Bravo/Feature_img_2.svg'
import Feature_img_3 from '../assets/Images/Model_Bravo/Feature_img_3.svg'
import Feature_img_4 from '../assets/Images/Model_Bravo/Feature_img_4.svg'
import Feature_img_5 from '../assets/Images/Model_Bravo/Feature_img_5.svg'
import Login_Banner from '../assets/Images/Login_Banner.svg'

import Ev_battery_Station from '../assets/Images/Ev_battery_Station.svg'
import Mobile_app_ from '../assets/Images/Mobile_app_.svg'
import Maintance_bike from '../assets/Images/Maintance_bike.svg'
import Bike_background_Studio_Plain from '../assets/Images/Bike_background_Studio_Plain.svg'

import Get_Touch_banner from '../assets/Images/Get_Touch_banner.svg'
import Get_Touch_banner_Mobile from '../assets/Images/Get_Touch_banner_Mobile.svg'

const BikeModel = () => {
  const { model } = useParams();
  const [Scrolling_position,set_Scrollingposition] = useState(0);
  useEffect(() => {
      const handleScroll = () => {
          set_Scrollingposition(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const [current_image,set_image] = useState(0)

    // Menu Toggle
    const dispatch = useDispatch();
    const isMenuOpen = useSelector(selectMenuToggle);
    const handleToggle = () => {
      dispatch(setChangeToggle());
    };

    const isSignInOpen = useSelector(selectsignToggle);
    const signintoggle_handler = () => {
      dispatch(setChangeSigninToggle());
    };

    useEffect(() => {
      if (isMenuOpen || isSignInOpen) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "auto";
      }
    }, [isMenuOpen,isSignInOpen]);
  return (
    <>
        <div className="w-full h-full select-none " >
          <div className={`sticky top-0 z-10`}>
            <Header OnScroll={Scrolling_position} current_number={current_image} handleToggle={handleToggle}/>
          </div>
          {/* Banner Section */}
          <div className="w-full h-[98vh] min-h-[98dvh] 2lx:h-[98vh] 2xl:min-h-[98dvh] relative transition-transform duration-300 ease-in-out ">
            <Banner_module />
          </div>
          {/* Feature Section */}
          <div className="mr-auto ml-auto flex flex-col md:w-[90%] lg:w-[75%] 2xl:w-[55%] px-5 md:mt-8 h-auto py-5 gap-3">
              <div className="w-full md:w-1/2 flex flex-col py-3 md:py-5 text-center md:text-left">
                 <h1 className="text-3xl lg:text-5xl font-semibold">Features</h1>
                 <p className="text-xl text-[#606568]">Move quick. Stay stylish</p>
              </div>
              <div className="w-full flex flex-col gap-3">
                 <div className="border border-[#9CB5CC]  relative h-[375px] rounded-4xl flex flex-col md:flex-row gap-2 overflow-hidden">
                     <div className="w-full h-full flex justify-center md:justify-start py-5 md:py-0 md:items-center">
                         <img src={Feature_img_1} loading="lazy" alt="Feature_img_1" className="h-[50%] md:h-[80%] rounded-4xl object-contain" draggable="false"/>
                     </div>
                     <div className="absolute bottom-10 md:top-1/2 md:right-14 lg:right-12 flex flex-col gap-3 w-full px-2.5 md:px-0 md:w-[45%] lg:w-[50%] 2xl:w-[45%] md:transform md:-translate-y-1/2 text-center">
                         <h1 className=" text-2xl lg:text-4xl font-semibold mr-auto ml-auto">Designed for Performance,<br /> Built for Style</h1>
                         <p className="text-[#606568] text-[12px] lg:text-[15px] mr-auto ml-auto -mt-2">Refined design, unmatched performance  crafted for style, safety, and the perfect ride</p>
                     </div>
                 </div>
                 <div className="flex flex-col md:flex-row gap-3">
                    <div className="border border-[#9CB5CC] w-full md:w-1/2 relative h-[350px] rounded-4xl flex flex-col md:flex-row gap-2 overflow-hidden">
                        <div className="w-full h-full flex items-center">
                           <img src={Feature_img_2} loading="lazy" alt="Feature_img_1" className="h-full rounded-4xl object-contain" draggable="false"/>
                        </div>
                        <div className="absolute top-1/2 right-6 lg:right-12 flex flex-col gap-3 w-[48%] transform -translate-y-1/2 text-right">
                             <h1 className="text-2xl lg:text-4xl font-semibold ">Grip.<br /> Control.<br />Confidence</h1>
                            <p className="text-[#606568] text-[12px] lg:text-[15px] -mt-2">High-grip tyres, precision braking, enhanced safety, stability, and smooth control.</p>
                         </div>
                    </div>
                    <div className="border border-[#9CB5CC] relative w-full md:w-1/2 h-[350px] rounded-4xl flex flex-col md:flex-row gap-2 overflow-hidden">
                        <div className="flex-1 flex items-end">
                          <img src={Feature_img_3} loading="lazy" alt="Feature_img_1" className="h-[75%] w-full object-cover" draggable="false"/>
                        </div>
                        <div className="absolute top-6 left-1/2 flex flex-col gap-3 w-[75%] lg:w-[70%]  transform -translate-x-1/2 text-center">
                             <h1 className="text-2xl lg:text-4xl font-semibold ">Striking Front Design</h1>
                            <p className="text-[#606568] text-[12px] lg:text-[15px] -mt-2">Sleek LED headlamp, aerodynamic design, high-visibility reflectors</p>
                         </div>
                    </div>
                 </div>
                 <div className="flex flex-col md:flex-row gap-3">
                    <div className="border border-[#9CB5CC] w-full relative md:w-1/2 h-[400px] rounded-4xl flex flex-col md:flex-row gap-2 overflow-hidden ">
                         <div className="w-full h-full flex items-end">
                             <img src={Feature_img_4} loading="lazy" alt="Feature_img_1" className="h-[70%] rounded-4xl object-contain" draggable="false"/>
                         </div>
                         <div className="absolute top-10 left-1/2 flex flex-col gap-3 transform -translate-x-1/2 w-[75%] text-center lg:text-left">
                             <h1 className="text-2xl lg:text-4xl font-semibold ">Revolutionized</h1>
                            <p className="text-[#606568] text-[13px] lg:text-[15px] -mt-2">Ergonomic seating, high-visibility  reflectors, stylish rims, bold graphics, and vibrant colors</p>
                         </div>
                    </div>
                    <div className="border border-[#9CB5CC] w-full h-[400px] rounded-4xl relative flex flex-col md:flex-row gap-2 overflow-hidden">
                        <div className="w-full h-full flex items-end justify-center md:justify-end">
                           <img src={Feature_img_5} loading="lazy" alt="Feature_img_1" className="h-[70%] rounded-4xl object-contain" draggable="false"/>
                        </div>
                        <div className="absolute top-4 md:top-12 md:left-8 flex flex-col gap-3 text-center md:text-left px-5 md:px-0 lg:w-[65%]">
                           <h1 className="text-2xl lg:text-4xl font-semibold ">Refined Design,<br /> Unmatched Performance</h1>
                           <p className="text-[#606568] text-[13px] lg:text-[15px] -mt-2 md:w-[50%] lg:w-[85%]">Refined design, unmatched performance crafted for style, safety, and the perfect ride</p>
                        </div>
                    </div>
                 </div>
              </div>
          </div>
          <div className="mr-auto ml-auto flex flex-col md:w-[92.5%] lg:w-[80%] 2xl:w-[65%] px-2.5 md:px-5 md:mt-8 h-auto py-5 gap-3">
             <div className="px-9 py-4 text-center">
                <h1 className="text-4xl md:text-5xl font-semibold">Elthor Grid</h1>
                <h1 className="text-lg md:text-xl py-1 text-[#606568]">Smart. Fast. Reliable.</h1>
             </div>
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-3 lg:gap-2 px-4">
                 <Grid_feature image={Ev_battery_Station} title="Swap. Charge. Go!" subtitle="Fast, eco-friendly battery swapping for your e-bike" link="/Swapping-station"/>
                 <Grid_feature image={Mobile_app_} title="Smart Bike" subtitle="Control, Track & Swap—All from Your Mobile!"/>
                 <Grid_feature image={Bike_background_Studio_Plain} overlayImage={Maintance_bike}  title="Fast Service!" subtitle="Bike Service—Get Back on the Road in Minutes!"/>
             </div>
          </div>
           <div className="flex flex-col py-5 md:py-10 px-5 gap-4 lg:w-[70%] 2xl:w-[55%] mr-auto ml-auto">
               <img src={Get_Touch_banner} alt="" className="cursor-pointer hidden md:block"/>
               <img src={Get_Touch_banner_Mobile} alt="" className="cursor-pointer block md:hidden rounded-3xl"/>
           </div>
        </div>
        {
          isMenuOpen && 
          <div className="fixed top-0 z-20 w-full h-full bg-[#000000c5] flex items-center justify-end select-none" onClick={handleToggle}>
             <div className="w-full lg:max-w-[45%] 2xl:max-w-[40%] bg-white h-full px-5 overflow-scroll hide-scrollbar md:px-10" onClick={(e) => e.stopPropagation()}>
                 <Menu handleToggle={handleToggle} Signinpop={signintoggle_handler}/>
             </div>
          </div>
        }
        {
          isSignInOpen && 
          <div className="fixed top-0 z-20 md:py-10 md:px-10 w-full h-full bg-[#000000c5] flex items-center justify-center select-none" onClick={signintoggle_handler}>
            <div className="w-full lg:max-w-[800px] h-[100dvh] md:h-[450px] bg-white flex flex-col md:flex-row overflow-scroll hide-scrollbar" onClick={(e) => e.stopPropagation()}>
                <div className="md:w-[48%] h-[50%] md:h-full ">
                     <img src={Login_Banner} alt="" className="w-full h-full object-cover"/>
                </div>
                <LoginCard signintoggle_handler={signintoggle_handler}/>
            </div>
          </div>
        }
    </>
  )
}

export default BikeModel

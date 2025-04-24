import React, { useEffect,useState } from 'react';
import Header from '../Components/Header'
import {Swapping_station_banner}  from '../Components/BannerComponents.jsx'
import Menu from '../Components/Menu.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { setChangeToggle,selectMenuToggle  } from '../Redux/Slice/Menu_toggle.js';
import { setChangeSigninToggle,selectsignToggle  } from '../Redux/Slice/Login_toggle.js';

import Login_Banner from '../assets/Images/Login_Banner.svg'
import Video_swapping_bike from '../assets/Images/Video_swapping_bike.svg'
import Mobile_view_1 from '../assets/Images/Mobile_view_1.svg'
import Mobile_view_2 from '../assets/Images/Mobile_view_2.svg'
import Mobile_view_3 from '../assets/Images/Mobile_view_3.svg'

import Google_Store_icon from '../assets/Images/Google_Store_icon.svg'
import Apple_store_icon from '../assets/Images/Apple_store_icon.svg'

import Play from '../assets/Images/Play.svg'


import LoginCard from  '../Components/LoginCard.jsx'
import SwappignStage from '../Components/SwappignStage.jsx'

import Get_Touch_banner from '../assets/Images/Get_Touch_banner.svg'
import Get_Touch_banner_Mobile from '../assets/Images/Get_Touch_banner_Mobile.svg'
import Question_component from '../Components/Question_component.jsx'
const SwappingData = () => {
    const [Scrolling_position,set_Scrollingposition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            set_Scrollingposition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

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
      <div className="w-full h-full select-none">
         <div className={`sticky top-0 z-10`}>
           <Header OnScroll={Scrolling_position} handleToggle={handleToggle}/>
         </div>
         <div className="w-full  pt-18 pb-5 md:pt-22 px-5 md:px-14  h-[93vh] min-h-[93dvh] 2xl:h-[100vh] 2xl:min-h-[100dvh]  relative transition-transform duration-300 ease-in-out ">
            <Swapping_station_banner />
         </div>
         {/* Quote-1 */}
         <div className="text-center py-6 px-4 font-SFDispaly">
             <div><h1 className="text-2xl md:text-3xl  text-[#5CB3F1] font-SFDispaly">Elthor Energy e.1</h1><h1 className="text-xl font-SFDispaly md:text-3xl">Ride Unlimited, Swap Instantly!</h1></div>
             <div className="py-3 md:py-3 md:w-[60%] lg:w-[55%] 2xl:w-[35%] text-justify md:text-center  mr-auto ml-auto text-[#606568] text-[14px] md:text-[18px] lg:text-lg"><p>The all-new Elthor Energy e.1 is India’s first electric scooter with on-the-go battery swapping. No more waiting at charging stations or searching for a charging point. With Elthor Energy, swapping is quick and seamless, keeping you on the move effortlessly.</p></div>
         </div>
         {/* Swapping video */}
         <div className="text-center py-6 px-6 font-SFDispaly">
             <div><h1 className="text-2xl md:text-3xl  text-[#000000] font-SFDispaly">How SwapUp Works</h1></div>
             <div className="py-1 md:py-3 w-[85%] md:w-[60%] lg:w-[55%] 2xl:w-[35%] mr-auto ml-auto text-[#606568] text-[14px] md:text-[18px] lg:text-lg"><p>Swap your drained battery for a fully charged one in just 10 seconds!</p></div>
         </div>
         <div className="w-full pb-12 h-[65vh] min-h-[65dvh] lg:h-[78vh] lg:min-h-[78dvh] px-5 md:px-14 relative transition-transform duration-300 ease-in-out ">
           <div className="border flex items-center justify-center rounded-3xl bg-[#F4F9FD] border-[#E0E7ED] w-full h-full relative">
             <img src={Video_swapping_bike} alt="" className="w-[90%] h-[90%] md:w-[70%] md:h-[70%]"/>
             <div className="w-[48px] h-[48px] bg-black rounded-full flex items-center justify-center absolute bottom-10 right-10">
                 <img src={Play} alt="" className="w-full h-full p-2"/> 
             </div>
           </div>
         </div>
         {/* Swapping Steps */}
          <div className="py-6"><SwappignStage /></div>
         {/* Quote - 2 */}
         <div className="text-center py-6 px-5  font-SFDispaly">
             <div><h1 className="text-2xl md:text-3xl  text-[#000000] font-SFDispaly">The Power to Swap is in <br className="block md:hidden"/> Your Hands!</h1></div>
             <div className="py-3 md:py-3 text-justify md:text-center md:w-[60%] lg:w-[55%] 2xl:w-[35%] mr-auto ml-auto text-[#606568] text-[14px] md:text-[18px] lg:text-lg"><p>All Elthor Energy swap stations are seamlessly integrated into the Elthor app, which continuously monitors your electric scooter’s battery status.
             When your battery runs low, the app alerts you—then simply follow three easy steps to swap and ride on!</p></div>
         </div>

         {/* App details */}
         <div className="flex px-5 pb-6 flex-col md:flex-row  gap-5 justify-center items-center"> 
            <div className="border rounded-3xl bg-[#F4F9FD] w-full max-w-[450px] gap-5 border-[#E0E7ED] overflow-hidden flex flex-col items-center py-8">
                <div className="text-center flex flex-col items-center">
                   <h1 className="text-2xl font-semibold">Track</h1>
                   <p className="w-[80%] py-1 text-center text-[#606568] text-[18px] md:text-lg">Open the Elthor app, find the nearest swap station, and ride on!</p>
                </div>
                <div className="flex-1 w-full flex items-end justify-center">
                  <img src={Mobile_view_1} alt="" className=" w-[90%] md:w-[70%] object-cover" />
                </div>
            </div>
            <div className="border rounded-3xl bg-[#F4F9FD] w-full max-w-[450px] gap-5 border-[#E0E7ED] overflow-hidden flex flex-col items-center py-8">
                <div className="text-center flex flex-col items-center">
                   <h1 className="text-2xl font-semibold">Stop</h1>
                   <p className="w-[80%] py-1 text-center text-[#606568] text-[18px] md:text-lg">Arrive, connect via the Elthor app, and unlock your fully charged battery!</p>
                </div>
                <div className="flex-1 w-full flex items-end justify-center">
                  <img src={Mobile_view_2} alt="" className=" w-[90%] md:w-[70%] object-cover" />
                </div>
            </div>
            <div className="border rounded-3xl bg-[#F4F9FD] w-full max-w-[450px] gap-5 border-[#E0E7ED] overflow-hidden flex flex-col items-center py-8">
                <div className="text-center flex flex-col items-center">
                   <h1 className="text-2xl font-semibold">Swap</h1>
                   <p className="w-[80%] py-1 text-center text-[#606568] text-[18px] md:text-lg">Swap in seconds, insert your charged battery, and ride on—it's that easy!</p>
                </div>
                <div className="flex-1 w-full flex items-end justify-center">
                  <img src={Mobile_view_3} alt="" className=" w-[90%] md:w-[70%] object-cover" />
                </div>
            </div>
         </div>
         <div className="flex items-center justify-center gap-3 py-2">
             <img src={Google_Store_icon} alt="" className="w-[120px] md:w-full md:max-w-[220px]"/>
             <img src={Apple_store_icon} alt="" className="w-[120px] md:w-full md:max-w-[220px]"/>
         </div>

         {/* questions */}

         <Question_component />

         {/* Getinto touch banner */}
         <div className="flex flex-col py-5 md:py-10 px-5 gap-4 lg:w-[70%] 2xl:w-[55%] mr-auto ml-auto">
             <img src={Get_Touch_banner} alt="" className="cursor-pointer hidden md:block"/>
             <img src={Get_Touch_banner_Mobile} alt="" className="cursor-pointer block md:hidden rounded-3xl"/>
         </div>
      </div>
      {
          isMenuOpen && 
          <div className="fixed top-0 z-20 w-full h-full bg-[#000000c5] flex items-center justify-end select-none" onClick={handleToggle}>
             <div className="w-full  lg:max-w-[45%] 2xl:max-w-[40%] bg-white h-full px-5 overflow-scroll hide-scrollbar md:px-10" onClick={(e) => e.stopPropagation()}>
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

export default SwappingData

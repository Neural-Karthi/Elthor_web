import React, { useEffect,useState } from 'react';
import {Banner_1,Banner_2,Banner_3,Banner_4}  from '../Components/BannerComponents.jsx'

import Header from '../Components/Header'
import left_arrow from '../assets/Images/Left_arrow.svg'
import Right_arrow from '../assets/Images/Right_arrow.svg'

import { useSwipeable } from 'react-swipeable';

import Bike_background_Studio_Plain from '../assets/Images/Bike_background_Studio_Plain.svg'
import model_1 from '../assets/Images/Model_1.svg'
import model_2 from '../assets/Images/Model_2.svg'
import model_3 from '../assets/Images/Model_3.svg'

import Bike_model_card from '../Components/Bike_model_card.jsx'
import Long_Banner from '../assets/Images/Long_Banner.svg'
import Group_of_bike from '../assets/Images/Group_of_bike.svg'

import Ev_battery_Station from '../assets/Images/Ev_battery_Station.svg'
import Mobile_app_ from '../assets/Images/Mobile_app_.svg'
import Maintance_bike from '../assets/Images/Maintance_bike.svg'

import Long_arrow from '../assets/Images/Long_arrow.svg'
import Success_Image_1 from '../assets/Images/Success_Image_1.png'
import Success_Image_2 from '../assets/Images/Success_Image_2.png'
import Success_Image_3 from '../assets/Images/Success_Image_3.png'
import Success_Image_4 from '../assets/Images/Success_Image_4.png'
import Get_Touch_banner from '../assets/Images/Get_Touch_banner.svg'
import Get_Touch_banner_Mobile from '../assets/Images/Get_Touch_banner_Mobile.svg'
import Login_Banner from '../assets/Images/Login_Banner.svg'
import Battery_swapping_info from '../assets/Images/Battery_swapping_info.svg'

import Menu from '../Components/Menu.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { setChangeToggle,selectMenuToggle  } from '../Redux/Slice/Menu_toggle.js';
import { setChangeSigninToggle,selectsignToggle  } from '../Redux/Slice/Login_toggle.js';

import Grid_feature from '../Components/Grid_feature.jsx'
import LoginCard from  '../Components/LoginCard.jsx'


import Standand_Bike_1 from '../assets/Images/Standand_Bike_1.svg'
import Standand_Bike_2 from '../assets/Images/Standand_Bike_2.svg'
import Standand_Bike_3 from '../assets/Images/Standand_Bike_3.svg'

import swappable_b1 from '../assets/Images/Swappable_b1.SVG'
import swappable_b2 from '../assets/Images/Swappable_b2.SVG'
import swappable_b3 from '../assets/Images/Swappable_b3.SVG'
const Home = () => {
   
    const [Scrolling_position,set_Scrollingposition] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            set_Scrollingposition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

      const [current_image,set_image] = useState(0)

      const [banner_data,set_banner] = useState([ <Banner_1 />, <Banner_2 />, <Banner_3 />,<Banner_4 />])
      
      const onPrevClick = () => {
        if (current_image > 0) {
          set_image(current_image - 1);
        } else {
          set_image(banner_data.length - 1); 
        }
      };
      
      const onNextClick = () => {
        if (current_image < banner_data.length - 1) {
          set_image(current_image + 1);
        } else {
          set_image(0);
        }
      };
      
      useEffect(() => {
        const interval = setInterval(() => {
          set_image((prev) => (prev + 1) % banner_data.length);
        }, 10000);
      
        return () => clearInterval(interval);
      }, [banner_data.length]);

      const swipeHandlers = useSwipeable({
        onSwipedLeft: () => onNextClick(),
        onSwipedRight: () => onPrevClick(),
        preventDefaultTouchmoveEvent: true,
        trackTouch: true,
      });

      const [startX, setStartX] = useState(null); 
      const [isDragging, setIsDragging] = useState(false);
      const handleMouseDown = (e) => {
        setStartX(e.clientX);
        setIsDragging(true); 
      };
      const handleMouseMove = (e) => {
        if (!isDragging) return;
    
        const diffX = e.clientX - startX; 
    
        
        if (Math.abs(diffX) > 50) {
          if (diffX > 0) {
            onPrevClick(); 
          } else {
            onNextClick(); 
          }
          setIsDragging(false); 
        }
      };
    
      const handleMouseUp = () => {
        setIsDragging(false); 
      };

      const Swapping_Bike_models = [
        {
          Model_name:"Elthor VoltX ",
          Model_description:"Energy that moves with you",
          Model_price:"Begins at ₹1,54,999",
          Model_price_2:"or Easy FlexiPay ₹5,185/month",
          Model_image:swappable_b2
        },
        {
          Model_name:"Elthor Pulse",
          Model_description:"FNext-gen power exchange",
          Model_price:"Begins at ₹1,54,999",
          Model_price_2:"or Easy FlexiPay ₹5,185/month",
          Model_image:swappable_b1
        },
        {
          Model_name:"Elthor Dynamo",
          Model_description:" Swap and surge.",
          Model_price:"Begins at ₹1,54,999",
          Model_price_2:"or Easy FlexiPay ₹5,185/month",
          Model_image:swappable_b3
        }
      ]

      const Bike_models = [
        {
          Model_name:"Elthor Core",
          Model_description:"Pure, solid performance.",
          Model_price:"Begins at ₹1,54,999",
          Model_price_2:"or Easy FlexiPay ₹5,185/month",
          Model_image:Standand_Bike_1
        },
        {
          Model_name:"Elthor Drift",
          Model_description:"Smooth rides, no stops.",
          Model_price:"Begins at ₹1,54,999",
          Model_price_2:"or Easy FlexiPay ₹5,185/month",
          Model_image:Standand_Bike_2
        },
        {
          Model_name:"Elthor Vibe ",
          Model_description:"Charged for everyday rides",
          Model_price:"Begins at ₹1,54,999",
          Model_price_2:"or Easy FlexiPay ₹5,185/month",
          Model_image:Standand_Bike_3
        }
      ]
      
      // Redux

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
            {/* Section 1 - bike image slider */}
            <div {...swipeHandlers} onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}  className="w-full h-[90vh] min-h-[90dvh] 2lx:h-[95vh] 2xl:min-h-[95dvh] relative transition-transform duration-300 ease-in-out ">
               
               {
                 current_image == 0 ?  <Banner_1 />: (current_image == 1 ? <Banner_2 /> : (current_image == 2 ? <Banner_3 /> : <Banner_4 />))
               }
               
               <div className="hidden md:block">
                 <img src={left_arrow} alt="left_arrow" className="absolute left-18 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={()=>{onPrevClick()}}/>
                 <img src={Right_arrow} alt="Right_arrow" className="absolute right-18 top-1/2 transform -translate-y-1/2 cursor-pointer" onClick={()=>{onNextClick()}}/>
               </div>
               <div className="absolute flex bottom-3.5 left-1/2 px-3.5 text-center bg-[#00000060] transform -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-1.5 py-1.5 rounded-full">
                 {banner_data.map((_, index) => (
                   <div
                     key={index}
                     onClick={() => set_image(index)}
                     className={`h-2 w-2 rounded-full cursor-pointer hover:scale-105 ${
                       index === current_image ? 'bg-white' : 'bg-[#cacaca]'
                     }`}
                   ></div>
                 ))}
               </div>
            </div>

            {/* Section 2 - Elthor Swapping Information */}
            <div className="text-center py-6 pt-16 md:pt-24 pb-5 px-4">
               <div><h1 className="text-xl md:text-3xl font-semibold">Swap. Snap. Go.</h1></div>
               <div className="py-2 md:py-3 md:w-[60%] lg:w-[45%] 2xl:w-[35%] text-center  mr-auto ml-auto text-[#606568] text-[14px] md:text-[18px] lg:text-lg"><h1>Elthor makes battery swapping effortless. Cleaner than fuel. Quicker than charging. Just swap and go — no lines, no delays, no emissions. Power that's ready when you are. Ride on without stopping.</h1></div>
            </div>
            <div className="flex items-center justify-center p-5 md:p-8 relative transition-transform duration-300 ease-in-out bg-gradient-to-b from-white to-[#DDEFFD]">
                <img src={Battery_swapping_info} alt="" className=""/>
            </div>
            {/* Section 3 - Show case Bikes */}
            <div className="mr-auto ml-auto flex flex-col md:flex-row items-center py-5 gap-3 justify-center">
                <div className="flex flex-col gap-4">
                   <div className="px-9 py-4 text-center lg:text-left">
                      <h1 className="text-2xl md:text-3xl font-semibold">Swappable Battery Models</h1>
                   </div>
                   <div className="flex flex-wrap justify-center gap-4 px-5 md:[&>*]:w-[48%] lg:[&>*]:w-auto">
                       {
                         Swapping_Bike_models.map((bike, index)=>(
                            <Bike_model_card index={index} model_1={bike.Model_image} model_title={bike.Model_name}
                                             Subtitle={bike.Model_description} price={bike.Model_price} EmiPrice={bike.Model_price_2}/>  
                         ))
                       }    
                   </div>
                   <div className="px-9 py-4 text-center lg:text-left">
                      <h1 className="text-2xl md:text-3xl font-semibold">Standard Charge Models</h1>
                   </div>
                   <div className="flex flex-wrap justify-center gap-4 px-5 md:[&>*]:w-[48%] lg:[&>*]:w-auto">
                       {
                         Bike_models.map((bike, index)=>(
                            <Bike_model_card index={index} model_1={bike.Model_image} model_title={bike.Model_name}
                                             Subtitle={bike.Model_description} price={bike.Model_price} EmiPrice={bike.Model_price_2}/>  
                         ))
                       }    
                   </div>
                   <div className="py-5 px-4">
                       <div className="h-[450px] border border-[#E0E7ED] rounded-3xl overflow-hidden relative">
                          <img src={Long_Banner} alt="Long_Banner" className="w-full h-full object-cover"/>
                          <img src={Group_of_bike} alt="Group_of_bike" className="absolute bottom-0 right-0 md:-right-14 md:w-[75%] md:h-[75%] lg:w-[85%] lg:h-[85%]" />
                          <div className="absolute w-full  top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-0 md:left-14 text-center md:text-left">
                            <h1 className="text-3xl md:text-6xl font-medium">Elthor Bravo</h1>
                            <h1 className="text-[#606568] text-sm md:text-lg px-1">Begins at ₹1,54,999</h1>
                            <h1 className="text-[#606568] text-sm md:text-lg px-1">or Easy FlexiPay ₹5,185/month</h1>
                            <div className="py-2 md:py-3 flex items-center justify-center px-1 md:justify-start gap-2">
                                {/* <button className="py-2 px-5 bg-black rounded-xl text-white text-sm cursor-pointer hover:scale-105">Book Now</button> */}
                                <button  className="py-2 px-5 bg-[#D7D7D7] rounded-xl cursor-pointer hover:scale-105">Explore</button>
                            </div>
                          </div>
                       </div>
                       <div className="py-5 w-full">
                           <button className="flex ml-auto items-center text-lg py-2 cursor-pointer justify-center text-[#606568] rounded-xl w-full md:w-auto px-6 bg-[#F7F8F6] ">More <img src={Long_arrow} alt="" className="w-26"/></button>
                       </div>
                   </div>
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
            </div>    
            {/* Success Section */}
            <div className="flex flex-col pt-5 md:pt-10 px-5 gap-4  lg:w-[70%] 2xl:w-[55%] mr-auto ml-auto">
                   <div className="py-4 text-center lg:text-left">
                      <h1 className="text-2xl md:text-3xl font-semibold">Our Network, Our Success</h1>
                   </div>
                   <div className="grid  grid-cols-3 gap-1 md:gap-3 lg:gap-2">
                        <div className="w-full max-w-[380px]  md:h-[530px]  rounded-2xl bg-[#FAFCFC] border border-[#E0E7ED] overflow-hidden">  
                            <img src={Success_Image_1} alt=""  className="opacity-70 object-cover w-full h-full hover:scale-105 cursor-pointer transition duration-100 hover:opacity-100" />
                        </div>
                        <div className="w-full max-w-[380px] md:h-[530px]  rounded-2xl bg-[#FAFCFC] border border-[#E0E7ED] overflow-hidden"> 
                          <img src={Success_Image_2} alt=""  className="opacity-70 object-cover w-full h-full hover:scale-105 cursor-pointer transition duration-100 hover:opacity-100" />  
                        </div>
                        <div className="w-full max-w-[380px] md:h-[530px] flex flex-col gap-2 md:gap-3 overflow-hidden">
                          <div className="bg-[#FAFCFC] flex-1 border border-[#E0E7ED] rounded-2xl overflow-hidden">
                            <img src={Success_Image_3} alt="" className="w-full h-full object-cover opacity-70 hover:scale-105 cursor-pointer transition duration-100 hover:opacity-100"/>
                          </div>
                          <div className="bg-[#FAFCFC] flex-1 border border-[#E0E7ED] rounded-2xl overflow-hidden">
                            <img src={Success_Image_4} alt="" className="w-full h-full object-cover opacity-70 hover:scale-105 cursor-pointer transition duration-100 hover:opacity-100"/>
                          </div>
                        </div>
                   </div>
                   <div className="py-5 w-full">
                           <button className="flex ml-auto items-center text-lg py-2 cursor-pointer justify-center text-[#606568] rounded-xl w-full md:w-auto px-6 bg-[#F7F8F6] ">More <img src={Long_arrow} alt="" className="w-26"/></button>
                   </div>
                </div>

                {/* Getinto touch banner */}
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

export default Home

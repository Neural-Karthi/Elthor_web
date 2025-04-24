import React from 'react'
import Elthor from '../assets/Images/ElthorLogo_black.svg'
import Cancel_circle_icon from '../assets/Images/Cancel_circle_icon.svg'
import Back_icon from '../assets/Images/Back_icon.svg'
import { useEffect, useRef,useState} from "react";
const LoginCard = (props) => {

  const [stage,setstage]=useState(true);

  const [PhoneOtp,setPhoneotp]=useState(new Array(6).fill(""))
  
  const inputRefs=useRef([])

  useEffect(()=>{
    return ()=>{
      if(inputRefs.current[0]){
        inputRefs.current[0].focus()
      }
    }
  },[])

  const handlechange=(e,index)=>{
    const value=e.target.value;
    if(isNaN(value)) return;
    const newotp=[...PhoneOtp];
    newotp[index]=value.substring(value.len-1);
    setPhoneotp(newotp)
    if(value && index < 5 && inputRefs.current[index+1])
    {
      inputRefs.current[index+1].focus()
    }
  }

  const backspace = (e, index) => {
    if (e.key === "Backspace" && !PhoneOtp[index] && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowLeft" && index > 0 && inputRefs.current[index - 1]) {
      inputRefs.current[index - 1].focus();
    }
    if (e.key === "ArrowRight" && index < 5 && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };
  
  const handleclick=(index)=>{
    inputRefs.current[index].setSelectionRange(0,1)
  }

  return (
    <div className="flex flex-col md:w-[65%]">
      
      {
          stage ? (
            <>
              <div className="px-7 pt-7 flex items-center">
                 <div className="flex-1"><img src={Elthor} alt="" className="w-20" /></div>
                 <div className=""><img src={Cancel_circle_icon} alt="" className="w-8 cursor-pointer" onClick={props.signintoggle_handler}/></div>
             </div>
             <div className="px-7 py-3">
                <h1 className="text-[#404041] text-[16px] pb-4">Enter your registered phone number or create a new account</h1>
                <div className="relative">
                  <div className="absolute left-3 border-r flex items-center justify-center top-1/2 transform -translate-y-1/2 py-2 h-full text-gray-500 pointer-events-none pr-2 border-[#E0E7ED]">
                    <span>+91</span>
                  </div>
                  <input type="text" placeholder="Phone number*" className="w-full border border-[#E0E7ED] bg-[#FAFCFC] rounded-lg py-4 pl-16 pr-3"  />
                </div> 
             </div>
             <div className="h-full flex items-center justify-end py-4 px-7">
               <button className="py-5 mt-auto w-full text-white rounded-lg bg-black font-semibold cursor-pointer" onClick={()=>{setstage(false)}}>Next</button>
             </div>
            
             </>
          ) : (
             <>
               <div className="px-7 pt-7 flex items-center">
                 <div className="flex-1"><img src={Back_icon} alt="" className="w-6 hover:scale-105 cursor-pointer" onClick={()=>{setstage(true)}} /></div>
                 <div className=""><img src={Cancel_circle_icon} alt="" className="w-8 cursor-pointer" onClick={props.signintoggle_handler}/></div>
               </div>
               <div className="px-7 py-3">
                 <h1 className="text-[#404041] text-[16px] pb-4">Enter the OTP sent to +91•••••••870</h1>
               <div className="w-full max-w-[500px] flex gap-1 laptop:gap-2 laptop:px-5">
                  {
                    PhoneOtp.map((value,index)=>{
                      return(
                        <input key={index} ref={(input)=>(inputRefs.current[index]=input)}  className={`border border-[#E0E7ED] bg-[#FAFCFC] text-[22px] w-full text-[#423C3C]  text-center h-[55px] rounded-md md:rounded-xl  font-light `} type="tel" value={value} maxLength={1}
                           onChange={(e)=>{handlechange(e,index)}}
                           onKeyDown={(e)=>{backspace(e,index)}}
                           onClick={()=>{handleclick(index)}}
                         />
                      )
                    })
                  }
               </div> 
            <div>
              <h1 className="py-4 text-[#B4B9BD] font-semibold">Didn’t get OTP ?  
                   <span className="text-[#00B52A]"> Resend</span>
              </h1>
            </div>
            </div>
            <div className="h-full flex items-center justify-end py-4 px-7">
              <button className="py-5 mt-auto w-full text-white rounded-lg bg-black font-semibold cursor-pointer">Continue</button>
            </div>
             </>
          )
      }
   </div>
  )
}

export default LoginCard

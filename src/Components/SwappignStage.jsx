import React from 'react'
import stage_1 from '../assets/Images/Stage_1.svg'
import stage_2 from '../assets/Images/Stage_2.svg'
import stage_3 from '../assets/Images/Stage_3.svg'
import stage_4 from '../assets/Images/Stage_4.svg'
import stage_5 from '../assets/Images/Stage_5.svg'
import counter_1 from '../assets/Images/Count_icon_1.svg'
import counter_2 from '../assets/Images/Count_icon_2.svg'
import counter_3 from '../assets/Images/Count_icon_3.svg'
import counter_4 from '../assets/Images/Count_icon_4.svg'
import counter_5 from '../assets/Images/Count_icon_5.svg'
const SwappignStage = () => {
  return (
     <>
       <div className="py-5 md:py-10 px-10">
          <div className="flex flex-col md:flex-row w-full md:w-[80%] lg:w-[60%] mr-auto ml-auto">
             <div className="flex-1 flex items-center justify-center md:justify-normal">
                <img src={stage_1} alt="" className="w-[75%]"/>
             </div>
             <div className="flex-1 flex flex-col justify-center py-7 md:py-5">
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                        <img src={counter_1} alt="" className="w-9 md:w-12" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-[#588CB7] text-lg md:text-2xl">Mobile Phone Search</h1>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                   
                    </div>
                    <div className="flex-1">
                       <p className="text-[15px] md:text-xl text-[#818181]">Locate and navigate to the nearest
                       swap station on the app. </p>
                    </div>
                 </div>
             </div>
          </div>
       </div>
       <div className="py-5 md:py-10 px-10 bg-[#F8F9F9]">
          <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%] lg:w-[60%] mr-auto ml-auto">
             <div className="flex-1 flex flex-col justify-center py-7 md:py-5">
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                        <img src={counter_2} alt="" className="w-9 md:w-12" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-[#588CB7] text-lg md:text-2xl">Scan The QR Code</h1>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                   
                    </div>
                    <div className="flex-1">
                       <p className="text-[15px] md:text-xl text-[#818181]">Scan the QR code displayed on the swap station.</p>
                    </div>
                 </div>
             </div>
             <div className="flex-1 flex items-center justify-center md:justify-normal">
                <img src={stage_2} alt="" className="w-[75%]"/>
             </div>
          </div>
       </div>
       <div className="py-5 md:py-10 px-10">
          <div className="flex flex-col md:flex-row w-full md:w-[80%] lg:w-[60%] mr-auto ml-auto">
             <div className="flex-1 flex items-center justify-center md:justify-normal">
                <img src={stage_3} alt="" className="w-[75%]"/>
             </div>
             <div className="flex-1 flex flex-col justify-center py-7 md:py-5">
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                        <img src={counter_3} alt="" className="w-9 md:w-12" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-[#588CB7] text-lg md:text-2xl">Insert The Depleted Battery</h1>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                   
                    </div>
                    <div className="flex-1">
                       <p className="text-[15px] md:text-xl text-[#818181]">The door will open automatically for you to inset your battery.</p>
                    </div>
                 </div>
             </div>
          </div>
       </div>
       <div className="py-5 md:py-10 px-10 bg-[#F8F9F9]">
          <div className="flex flex-col-reverse md:flex-row w-full md:w-[80%] lg:w-[60%] mr-auto ml-auto">
             <div className="flex-1 flex flex-col justify-center py-7 md:py-5">
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                        <img src={counter_4} alt="" className="w-9 md:w-12" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-[#588CB7] text-lg md:text-2xl">Take Out A New Battery</h1>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                   
                    </div>
                    <div className="flex-1">
                       <p className="text-[15px] md:text-xl text-[#818181]">Remove the fully charged battery and close the compartment door.</p>
                    </div>
                 </div>
             </div>
             <div className="flex-1 flex items-center justify-center md:justify-normal">
                <img src={stage_4} alt="" className="w-[75%]"/>
             </div>
          </div>
       </div>
       <div className="py-5 md:py-10 px-10">
          <div className="flex flex-col md:flex-row w-full md:w-[80%] lg:w-[60%] mr-auto ml-auto">
             <div className="flex-1 flex items-center justify-center md:justify-normal">
                <img src={stage_5} alt="" className="w-[75%]"/>
             </div>
             <div className="flex-1 flex flex-col justify-center py-7 md:py-5">
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                        <img src={counter_5} alt="" className="w-9 md:w-12" />
                    </div>
                    <div className="flex-1">
                        <h1 className="text-[#588CB7] text-lg md:text-2xl">Replace The Battery</h1>
                    </div>
                 </div>
                 <div className="flex items-center gap-2 md:gap-4">
                    <div className="w-[45px]">
                   
                    </div>
                    <div className="flex-1">
                       <p className="text-[15px] md:text-xl text-[#818181]">Replace the battery on your EV Bike. The battery swap is completed and repeat from Step 1 for the second battery.</p>
                    </div>
                 </div>
             </div>
          </div>
       </div>
     </>
  )
}

export default SwappignStage

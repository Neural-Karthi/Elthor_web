import Bike_background_studio from '../assets/Images/Model_Banners/Elthor_bravo_bg.svg'

export const Banner_module = () => {
    return (
       <>
           {/* Banner Section */}
           <div className="absolute top-1/4 md:top-1/4  w-full text-center left-1/2  transform -translate-x-1/2 -translate-y-1/2 mt-8 md:mt-4 text-white flex flex-col gap-2 items-center  text-4xl">
                <h1 className='text-2xl md:text-4xl font-SFDispaly uppercase tracking-wide font-semibold'>Elthor Bravo</h1>
                <h1 className={`text-[13px] md:text-[15px] lg:text-[18px] .poppins-light text-center uppercase tracking-wider`}>Powering the Next Era of Motorcycles</h1>
                <h1 className={`text-[13px] md:text-[13px] lg:text-[15px] .poppins-light text-center uppercase tracking-wider`}>Starting at $1,09,000</h1>
                <div className="w-full ">
                   <button className="w-full max-w-[200px] uppercase bg-[#00000085]  text-white py-3.5 text-[14px] font-semibold cursor-pointer">Book Now</button>
                </div>
           </div>
           <img src={Bike_background_studio} loading="lazy" alt="Bike_background_studio" className="w-full h-full object-cover -mt-8" draggable="false"/>
           <div className="absolute bottom-7 md:bottom-14 lg:bottom-8 left-1/2 px-5 transform -translate-x-1/2 -translate-y-1/2 flex items-center w-full md:w-[55%] lg:w-[40%] text-center text-white">
               <div className="flex flex-col items-center justify-center w-1/3 text-center">
                   <h1 className="text-lg md:text-2xl font-semibold">242km</h1>
                   <h1 className="text-[16px] md:text-lg">Range(IDC)</h1>
               </div>
               <div className="flex flex-col items-center justify-center w-1/3 text-center">
                   <h1 className="text-lg md:text-2xl font-semibold">11 kW</h1>
                   <h1 className="text-[16px] md:text-lg">Peak Power</h1>
               </div>
               <div className="flex flex-col items-center justify-center w-1/3 text-center">
                   <h1 className="text-lg md:text-2xl font-semibold">125 km/h</h1>
                   <h1 className="text-[16px] md:text-lg">Top Speed</h1>
               </div>
           </div>
       </>
    );
};
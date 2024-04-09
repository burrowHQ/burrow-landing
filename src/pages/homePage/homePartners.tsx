import React, { useEffect, useState } from 'react';
import { 
    PartnersIcon1, 
    PartnersIcon2, 
    PartnersIcon3, 
    PartnersIcon4, 
    PartnersIcon5, 
    PartnersIcon6, 
    PartnersIcon7, 
    PartnersIcon8, 
    PartnersIcon9 ,
    PartnersIcon10, 
    PartnersIcon11, 
    PartnersIcon12, 
    PartnersIcon13, 
} from '../../components/partnersIcon';

const HomePartners = () => {
  return (
    <div>
        <div className='t1a mb-8 md:mb-16 text-left'>PARTNERS</div>
        <div className='tablet-none mobile-none'>
          <div className="relative z-10 grid grid-cols-5 gap-y-16 w-full">
            <PartnersIcon1 className="" />
            <PartnersIcon2 className="justify-self-center self-center origin-center" />
            <PartnersIcon3 className="justify-self-center self-center origin-center" />
            <PartnersIcon4 className="justify-self-center self-center origin-center" />
            <PartnersIcon5 className="justify-self-end self-end origin-end" />
          </div>
          <div className="relative z-10 grid grid-cols-5 gap-x-24 gap-y-16 mt-16 w-full">
            <PartnersIcon6 className="" />
            <PartnersIcon7 className="justify-self-center self-center origin-center" />
            <PartnersIcon8 className="justify-self-center self-center origin-center" />
            <PartnersIcon9 className="justify-self-center self-center origin-center" />
            <PartnersIcon10 className="justify-self-end self-end origin-end" />
          </div>
          <div className="relative z-10 grid grid-cols-5 gap-x-24 gap-y-16 mt-16 w-full">
            <PartnersIcon11 className="" />
            <PartnersIcon12 className="justify-self-center self-center origin-center" />
            <PartnersIcon13 className="justify-self-center self-center origin-center" />
         </div>
        </div>
        <div className='mobile-none pc-none'>
         <div className="grid grid-cols-3 gap-x-20 gap-y-16">
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon1 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon2 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon3 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon4 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon5 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon6 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon7 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon8 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon9 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon10 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon11 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon12 /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersIcon13 /></div>
         </div>
        </div>
        <div className='pc-none tablet-none'>
        <div className="grid grid-cols-2 gap-x-4 gap-y-14 bg-gray-800 pl-8 pr-6 py-8 rounded-2xl">
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon1 className="transform scale-90 -ml-3" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon2 className="transform scale-110 " />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon3 className="transform scale-90 -ml-3" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon4 className="transform scale-90 -mr-3" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon6 className="transform scale-90 -ml-3 " />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon5 className="origin-center -mr-1" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon7 className="transform scale-90 -ml-3" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon8 className="transform scale-90 origin-center -mr-2.5" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon10 className="transform scale-90 -ml-3" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon11 className="transform scale-90 origin-center -mr-2" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon9 className="transform scale-90 -ml-3" />
            </div>
            <div className="max-w-xs w-full flex justify-end items-center">
              <PartnersIcon12 className="transform scale-90 -ml-3 origin-center  -mr-3" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersIcon13 className="transform scale-90 -ml-3" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePartners;

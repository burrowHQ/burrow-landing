import React, { useEffect, useState } from 'react';
import { 
    PartnersRef, 
    PartnersRainbow, 
    PartnersFrax, 
    PartnersImmunefi, 
    PartnersNEAR, 
    PartnersCedeStore, 
    PartnersOKEX, 
    PartnersPikespeak, 
    PartnersCoin ,
    PartnersSlowMist, 
    PartnersPythOracle, 
    PartnersBlocksec, 
    PartnersSweatEconomy, 
} from '../../components/partnersIcon';

const HomePartners = () => {
  return (
    <div>
        <div className='t1a mb-8 md:mb-16 text-left'>PARTNERS</div>
        <div className='tablet-none mobile-none'>
          <div className="relative z-10 grid grid-cols-5 gap-y-16 w-full">
            <PartnersNEAR className="" />
            <PartnersBlocksec className="justify-self-center self-center origin-center" />
            <PartnersSlowMist className="justify-self-center self-center origin-center" />
            <PartnersImmunefi className="justify-self-center self-center origin-center" />
            <PartnersPythOracle className="justify-self-end self-end origin-end" />
          </div>
          <div className="relative z-10 grid grid-cols-5 gap-x-24 gap-y-16 mt-16 w-full">
            <PartnersRef className="" />
            <PartnersOKEX className="justify-self-center self-center origin-center" />
            <PartnersFrax className="justify-self-center self-center origin-center" />
            <PartnersCoin className="justify-self-center self-center origin-center" />
            <PartnersSweatEconomy className="justify-self-end self-end origin-end" />
          </div>
          <div className="relative z-10 grid grid-cols-5 gap-x-24 gap-y-16 mt-16 w-full">
            <PartnersPikespeak className="" />
            <PartnersRainbow className="justify-self-center self-center origin-center" />
         </div>
        </div>
        <div className='mobile-none pc-none'>
         <div className="grid grid-cols-3 gap-x-20 gap-y-16">
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersNEAR /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersBlocksec /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersSlowMist /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersImmunefi /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersPythOracle /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersRef /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersOKEX /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersFrax /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersCoin /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersSweatEconomy /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersPikespeak /></div>
             <div className="max-w-xs w-full flex justify-center items-center"><PartnersRainbow /></div>
         </div>
        </div>
        <div className='pc-none tablet-none'>
        <div className="grid grid-cols-2 gap-x-4 gap-y-14 bg-gray-800 px-5 py-8 rounded-2xl">
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersNEAR className="transform scale-90 -ml-1.5" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersBlocksec className="transform scale-110 ml-2" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersSlowMist className="transform scale-90 -ml-2" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersImmunefi className="transform scale-90 -ml-1.5" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersPythOracle className="transform scale-90 -ml-1" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersRef className="origin-center -mr-1" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersOKEX className="transform scale-90 -ml-1" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersFrax className="transform scale-90 origin-center -ml-1" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersCoin className="transform scale-90 -ml-1" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersSweatEconomy className="transform scale-90 origin-center -ml-2" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersPikespeak className="transform scale-90 -ml-2" />
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersRainbow className="transform scale-90 -ml-3 origin-center  -ml-1" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePartners;

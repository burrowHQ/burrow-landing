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
            <PartnersNEAR className="justify-self-start self-center origin-center cursor-pointer" onClick={() => window.open('https://near.org/')}/>
            <PartnersBlocksec className="justify-self-start self-center origin-center -ml-4 cursor-pointer" onClick={() => window.open('https://blocksec.com/')}/>
            <PartnersSlowMist className="justify-self-center self-center origin-center cursor-pointer" onClick={() => window.open('https://slowmist.io/')}/>
            <PartnersImmunefi className="justify-self-end self-center origin-center mr-4 cursor-pointer" onClick={() => window.open('https://immunefi.com/')}/>
            <PartnersPythOracle className="justify-self-end self-end origin-end mr-7 cursor-pointer" onClick={() => window.open('https://pyth.network/')}/>
          </div>
          <div className="relative z-10 grid grid-cols-5 gap-x-24 gap-y-16 mt-16 w-full">
            <PartnersRef className="cursor-pointer" onClick={() => window.open('https://www.ref.finance/')}/>
            <PartnersOKEX className="justify-self-start self-center origin-center ml-3 cursor-pointer" onClick={() => window.open('https://www.okex.com/')}/>
            <PartnersFrax className="justify-self-center self-center origin-center cursor-pointer" onClick={() => window.open('https://frax.finance/')}/>
            <PartnersCoin className="justify-self-center self-center origin-center ml-5 cursor-pointer" onClick={() => window.open('https://coin98.com/')}/>
            <PartnersSweatEconomy className="justify-self-end self-center origin-center mr-7 cursor-pointer" onClick={() => window.open('https://sweateconomy.com/')}/>
          </div>
          <div className="relative z-10 grid grid-cols-5 gap-x-24 gap-y-16 mt-16 w-full">
            <PartnersPikespeak className="cursor-pointer" onClick={() => window.open('https://pikespeak.ai/')}/>
            <PartnersRainbow className="justify-self-center self-center origin-center ml-10 cursor-pointer" onClick={() => window.open('https://rainbowbridge.app/')}/>
         </div>
        </div>
        <div className='mobile-none pc-none'>
         <div className="grid grid-cols-3 gap-x-20 gap-y-16">
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersNEAR className="transform scale-90 cursor-pointer" onClick={() => window.open('https://near.org/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersBlocksec className="transform scale-90 cursor-pointer" onClick={() => window.open('https://blocksec.com/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersSlowMist className="transform scale-90 cursor-pointer" onClick={() => window.open('https://slowmist.io/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersImmunefi className="transform scale-90 cursor-pointer" onClick={() => window.open('https://immunefi.com/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersPythOracle className="transform scale-90 cursor-pointer" onClick={() => window.open('https://pyth.network/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersRef className="transform scale-90 cursor-pointer" onClick={() => window.open('https://www.ref.finance/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersOKEX className="transform scale-90 cursor-pointer" onClick={() => window.open('https://www.okex.com/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersFrax className="transform scale-90 cursor-pointer" onClick={() => window.open('https://frax.finance/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersCoin className="transform scale-90 cursor-pointer" onClick={() => window.open('https://coin98.com/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersSweatEconomy className="transform scale-90 cursor-pointer" onClick={() => window.open('https://sweateconomy.com/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersPikespeak className="transform scale-90 cursor-pointer" onClick={() => window.open('https://pikespeak.ai/')}/>
              </div>
             <div className="max-w-xs w-full flex justify-center items-center">
              <PartnersRainbow className="transform scale-90 cursor-pointer" onClick={() => window.open('https://rainbowbridge.app/')}/>
              </div>
         </div>
        </div>
        <div className='pc-none tablet-none'>
        <div className="grid grid-cols-2 gap-x-4 gap-y-10 bg-gray-800 px-7 py-8 rounded-2xl">
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersNEAR className="transform scale-75 -ml-3 cursor-pointer"  onClick={() => window.open('https://near.org/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersBlocksec className="transform scale-90 -ml-1.5 cursor-pointer" onClick={() => window.open('https://blocksec.com/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersSlowMist className="transform scale-75 -ml-5 cursor-pointer" onClick={() => window.open('https://slowmist.io/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersImmunefi className="transform scale-75 -ml-4 cursor-pointer" onClick={() => window.open('https://immunefi.com/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersPythOracle className="transform scale-75 -ml-3.5 cursor-pointer" onClick={() => window.open('https://pyth.network/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersRef className="origin-center transform scale-75 -ml-3.5 cursor-pointer" onClick={() => window.open('https://www.ref.finance/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersOKEX className="transform scale-75 -ml-2 cursor-pointer" onClick={() => window.open('https://www.okex.com/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersFrax className="transform scale-75 origin-center -ml-3 cursor-pointer" onClick={() => window.open('https://frax.finance/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersCoin className="transform scale-75 -ml-2 cursor-pointer" onClick={() => window.open('https://coin98.com/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersSweatEconomy className="transform scale-75 origin-center -ml-4 cursor-pointer" onClick={() => window.open('https://sweateconomy.com/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersPikespeak className="transform scale-75 -ml-6 cursor-pointer" onClick={() => window.open('https://pikespeak.ai/')}/>
            </div>
            <div className="max-w-xs w-full flex justify-start items-center">
              <PartnersRainbow className="transform scale-75 -ml-3 origin-center  -ml-5 cursor-pointer" onClick={() => window.open('https://rainbowbridge.app/')}/>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomePartners;

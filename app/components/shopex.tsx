import Image from 'next/image'

import React from 'react'

const Shopex = () => {
  return (
    <div className='container mx-auto '>
        <div className='flex justify-center items-center'>
            <h1 className='text-[42px] text-blue-900'>What ShopeX Offer!</h1>

        </div>

        <div className='flex flex-col sm:flex-row justify-evenly items-center my-7'>
            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/free-delivery 1.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/cashback 1.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/premium-quality 1.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

            <div className='flex flex-col w-[270px] h-[320px] shadow'>
                <div className='flex justify-center items-center my-8'>
                <Image src="/24-hours.svg" alt='img' width={65} height={65}/>
                </div>

               <div className='flex flex-col justify-center items-center'>
               <h1 className='text-blue-900 text-[22px]'>24/7 Support</h1>
               <p className='text-gray-300 text-[16px]'>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit. <br /> Massa purus gravida.</p>
               </div>

            </div>

        </div>
      
    </div>
  )
}

export default Shopex

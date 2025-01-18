import Image from 'next/image'


import React from 'react'

const Footer = () => {
  return (
    <div className='container mx-auto my-10 max-w-full'>
        <div className='flex flex-col md:flex-row justify-evenly my-20 bg-slate-200'>
            <div className='space-y-5 my-16'>
            <h1 className="text-[30px] text-blue-950 font-josifin font-bold ">BrandyShopX</h1>
            <div className='flex flex-col sm:flex-row md:space-x-3 '>
            <input type="text" placeholder='Enter Your Email' 
             className='border shadow py-3 px-5 rounded' 
             />
             <button className='bg-pink-500 py-4 px-9 text-white'> Signup</button>

            </div>

            <div className='flex flex-col'>
                <h1 className='text-gray-400'>Contact Info</h1>
                <p  className='text-gray-400'>17 Princess Road, London, Greater London NW1 8JR, UK</p>

            </div>



            </div>

            <div className='flex flex-col my-16 space-y-5'>
                <h1 className='text-[22px]'>Catagories</h1>
                <p className='text-[16px] text-gray-400'>Laptops & Computers</p>
                <p className='text-[16px] text-gray-400'>Cameras & Photography</p>
                <p className='text-[16px] text-gray-400'>Smart Phones & Tablets</p>
                <p className='text-[16px] text-gray-400'>Video Games & Consoles</p>
                <p className='text-[16px] text-gray-400'>Waterproof Headphones</p>

            </div>

            <div className='flex flex-col my-16 space-y-5'>
                <h1 className='text-[22px]'>Customer Care</h1>
                <p className='text-[16px] text-gray-400'>My Account</p>
                <p className='text-[16px] text-gray-400'>Discount</p>
                <p className='text-[16px] text-gray-400'>Returns</p>
                <p className='text-[16px] text-gray-400'>Orders History</p>
                <p className='text-[16px] text-gray-400'>Order Tracking</p>

            </div>

            <div className='flex flex-col my-16 space-y-5'>
                <h1 className='text-[22px]'>Pages</h1>
                <p className='text-[16px] text-gray-400'>Blog</p>
                <p className='text-[16px] text-gray-400'>Browse the Shop</p>
                <p className='text-[16px] text-gray-400'>Category</p>
                <p className='text-[16px] text-gray-400'>Pre-Built Pages</p>
                <p className='text-[16px] text-gray-400'>Visual Composer Elements</p>
                <p className='text-[16px] text-gray-400'>WooCommerce Pages</p>

            </div>



        </div>

        <div className='flex flex-col md:flex-row justify-evenly items-center '>
             <div className='flex'>
                <h1  className='text-[16px] text-gray-400'>©Webecy - All Rights Reserved</h1>
             </div>

             <div className='flex'>
                <Image src="/Group 205.svg" alt='img' width={80} height={19.42}/>

             </div>


        </div>
      
    </div>
  )
}

export default Footer

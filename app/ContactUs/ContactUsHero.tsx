import Image from 'next/image'

import React from 'react'

const ContactUsHero = () => {
  return (
    <div className='container mx-auto my-10'>
        <div className='flex flex-col md:flex-row justify-center md:space-x-40'>
            <div className='flex flex-col space-y-5'>
                <h1 className='text-[36px] text-blue-950 font-josifin font-bold'>Information About us</h1>
                <p className='text-[16px] font-josifin text-gray-300'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br /> mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae <br /> eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                <div className='flex space-x-5 py-4'>
                    <div className='w-[25px] h-[25px] rounded-full bg-purple-800'></div>
                    <div className='w-[25px] h-[25px] rounded-full bg-pink-600'></div>
                    <div className='w-[25px] h-[25px] rounded-full bg-green-400'></div>
                </div>
            </div>


            <div className='flex flex-col space-y-5'>
                <div>
                 <h1 className='text-[36px] text-blue-950 font-josifin font-bold'>Contact Way</h1>
                </div>

                <div className='flex flex-col md:flex-row items-center md:space-x-14'>
                    <div className='flex flex-col space-y-5'>
                        <div className='flex space-x-5 items-center'>
                            <div className='w-[45px] h-[45px] rounded-full bg-purple-800'></div>
                            <div className='flex flex-col'>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>Tel: 877-67-88-99</h1>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>E-Mail: shop@store.com</h1>
                            </div>
                        </div>

                        <div className='flex space-x-5 items-center'>
                            <div className='w-[45px] h-[45px] rounded-full bg-amber-400'></div>
                            <div className='flex flex-col '>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>20 Margaret st, London</h1>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>Great britain, 3NM98-LK</h1>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-col space-y-5'>
                        <div className='flex space-x-5 items-center'>
                            <div className='w-[45px] h-[45px] rounded-full bg-pink-600'></div>
                            <div className='flex flex-col '>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>Tel: 877-67-88-99</h1>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>E-Mail: shop@store.com</h1>
                            </div>
                        </div>

                        <div className='flex space-x-5 items-center'>
                            <div className='w-[45px] h-[45px] rounded-full bg-green-400'></div>
                            <div className='flex flex-col'>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>20 Margaret st, London</h1>
                                <h1 className='text-[16px] text-gray-300 font-josifin'>Great britain, 3NM98-LK</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

        <div className='flex flex-col md:flex-row md:justify-center md:items-center md:space-x-10 my-10'>
            <div className='flex flex-col space-y-5'>
                <div className='flex flex-col space-y-2'>
                    <h1 className='text-[36px] text-blue-950 font-josifin font-bold'>Get In Touch</h1>
                    <p className='text-[16px] text-gray-300 font-josifin font-bold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices <br />  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                </div>

                <div className='flex flex-col space-y-5'>
                    <div className='flex flex-col md:flex-row md:space-x-5'>
                        <input type="text" placeholder='Your Name' className='border border-gray-400 text-gray-400   md:w-[255px] md:h-[45px] p-2' />
                        <input type="text" placeholder='Your E-mail' className='border border-gray-400 text-gray-400 md:w-[255px] md:h-[45px] p-2' />
                    </div>

                    <div className='flex flex-col space-y-5'>
                     <input type="text" placeholder='Subject*' className='border border-gray-400 text-gray-400 md:w-[534px] md:h-[45px] p-2' />
                     <input type="text" placeholder='Type Your Messege*' className='border border-gray-400 text-gray-400 md:][w-[534px] h-[166px] pb-24 p-2' />
                    </div>

                    <button className='bg-pink-600 text-white w-[157px] h-[44px] rounded '>Send Email</button>

                </div>
            </div>




            <div className='flex '>
                <Image src="/Group 124.svg" alt='img' width={723} height={692}/>
            </div>

        </div>
    </div>
  )
}

export default ContactUsHero

import Image from "next/image";
import Link from "next/link";

import React from "react";

const Header = () => {
  return (
    <div className="h-16 max-w-full mx-auto">
      <div className="flex justify-evenly items-center">
        <div className="flex flex-col sm:flex-row sm:space-x-28 ">
          <div className="flex my-3 space-x-32">
            <h1 className="text-[30px] text-blue-950 font-josifin font-bold ">BrandyShopeX</h1>

            <div className="sm:hidden flex items-center">
          <div className="cursor-pointer">
            <div className="w-6 h-0.5 bg-blue-950 mb-1"></div>
            <div className="w-6 h-0.5 bg-blue-950 mb-1"></div>
            <div className="w-6 h-0.5 bg-blue-950"></div>
          </div>
        </div>
          </div>

          <ul className='sm:flex sm:space-x-3 mt-6 hidden'>
                <li className='text-red-500 flex'>
                    <Link href={"/"}>Home</Link>
                </li>
                
                <li>
                 <Link href="/products">Brands ShopeX Products</Link>
                 </li>
                <li>
                 <Link href="/cheakout">Check Out</Link>
                </li>

                <li>
                 <Link href="/ContactUs">Contact</Link>
                </li>
             </ul>
        </div>

        <div className="flex space-x-10">
        <div className="sm:block mt-2">
          <Link href="/cart">
            <Image src="/shopping-cart.png" alt="igm" width={30} height={30} />
            </Link>
          </div>

          <div className="bg-pink-500 w-auto h-auto px-3 py-2  rounded hidden sm:block ">
            <Image src="/search.svg" alt="igm" width={24} height={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

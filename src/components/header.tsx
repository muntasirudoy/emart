"use client"

import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';



const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart);
  return (
    <div className=" w-full h-20 bg-blue-800 px-10 py-1">
        <div className='w-[84%] mx-auto flex items-center justify-between'>
            <h1 className='text-[44px] font-bold text-white'><Link href="/"> eMart</Link></h1>
            <h1 className='text-[24px] text-white inline-block bg-indigo-300 py-1 px-3'><Link href="/pages/cart"> Cart {cartItems.length}</Link></h1>
        </div>
    </div>
  );
};

export default Header;

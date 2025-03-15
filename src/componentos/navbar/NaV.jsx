import { useState } from 'react'
import React from 'react'
import { FiHeart } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";

const NaV = () => {
  return (
    <>
       <nav className='w-[100%] flex justify-center py-[40px] border-[0.5px] border-solid border-[#B3B3B3] mb-[80px]'>
        <div className='w-[1170px] flex items-center justify-between'>
            <h2 className='font-bold text-[24px]'>Exclusive</h2>
            <ul className='w-[347px] flex justify-between items-center'>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Sign Up</li>
            </ul>
            <div className='flex gap-[24px]'>
            <input
                type='search'
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className='bg-[#F5F5F5] rounded-[4px] py-[10px] px-[20px]'
                placeholder='What are you looking for?'
              />
                <div className='flex gap-[16px]'>
                <FiHeart  className='w-[32px] h-[32px]'/>
                <SlBasket className='w-[32px] h-[32px]'/>
                </div>
            </div>
        </div>
       </nav>
    </>
  )
}

export default NaV

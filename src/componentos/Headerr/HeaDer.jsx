import { useState } from 'react'
import React from 'react'
import NaV from './../navbar/NaV.jsx';
import data from './../../tools.js';
import { SlBasket } from "react-icons/sl";

const HeaDer = () => {
  return (
    <>
    <header>
        <NaV />
        <div className='w-[1170px] mx-auto'>
            <div className='flex justify-between mb-[60px]'>
                <h2 className='text-[20px]'>Products</h2>
                <button className='border py-[16px] px-[48px] font-bold'>Move All to Bog</button>
            </div>
            <div className='flex flex-wrap gap-[30px] items-center'>
            {
                data.map((item, index) => (
                    <div className='w-[270px]'>
                        <div className='bg-[#F5F5F5] py-[10px] flex justify-center items-center'>
                            <div className='w-[190px] h-[180px] flex items-center'>
                             <img src={item.img} alt="" />
                            </div>
                        </div>
                            <button className='py-[8px] px-[83px] font-[Poppins] bg-[#000000] text-white flex items-center gap-[8px] text-[12px] rounded-b-[4px] mb-[16px]'><SlBasket className='w-[24px] h-[24px]' /> Add To Cart</button>
                    <div>
                        <h2>{item.name}</h2>
                        <h2 className='text-[#DB4444]'>${item.price} <span className='line-through text-[#7F7F7F]'>{item.aksiya}</span></h2>
                    </div>
                </div>
                ))
            }
            </div>  
        </div>
    </header>
    </>
  )
}

export default HeaDer

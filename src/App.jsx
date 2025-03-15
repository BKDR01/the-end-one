import { useState } from 'react';
import React from 'react';
import { FiHeart } from "react-icons/fi";
import { SlBasket } from "react-icons/sl";
import data from './tools.js';

function App() {
  const [search, setSearch] = useState('');
  const [LikeC, setLikeC] = useState(0)
  const [count, setCount] = useState(0)

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <header>
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
              <div>
              <div className='w-[24px] h-[24px] bg-red-500 text-white text-center rounded-full absolute mx-[-10px] mt-[-10px]'>{LikeC}</div>
                <FiHeart className='w-[32px] h-[32px]' />
              </div>
                <div>
                  <div className='w-[24px] h-[24px] bg-red-500 text-white text-center rounded-full absolute mt-[-10px]'>{count}</div>
                <SlBasket className='w-[32px] h-[32px]'/> 
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className='w-[1170px] mx-auto'>
          <div className='flex justify-between mb-[60px]'>
            <h2 className='text-[20px]'>Products</h2>
            <button className='border py-[16px] px-[48px] font-bold'>Move All to Bag</button>
          </div>

          <div className='flex flex-wrap gap-[30px] items-center'>
            {
            filteredData.map((item, index) => (
              <div key={index} className='w-[270px]'>
                <FiHeart onClick={() => setLikeC((LikeC) => LikeC + 1)}   className='w-[32px] h-[32px] absolute mx-[230px] mt-[10px]' />
                <div className='bg-[#F5F5F5] py-[10px] flex justify-center items-center'>
                  <div className='w-[190px] h-[180px] flex items-center'>
                    <img src={item.img} alt={item.name} />
                  </div>
                </div>
                <button onClick={() => setCount((count) => count + 1)} className='py-[8px] px-[83px] font-[Poppins] bg-[#000000] text-white flex items-center gap-[8px] text-[12px] rounded-b-[4px] mb-[16px]'>
                  <SlBasket className='w-[24px] h-[24px]' /> Add To Cart
                </button>
                <div>
                  <h2>{item.name}</h2>
                  <h2 className='text-[#DB4444]'>
                    ${item.price} <span className='line-through text-[#7F7F7F]'>${item.aksiya}</span>
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>
    </>
  );
}

export default App;

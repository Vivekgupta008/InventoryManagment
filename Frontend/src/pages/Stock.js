import React, { useState, useEffect } from 'react';
import StockItem from '../components/StockItem';
import Navbar from '../components/Navbar';
import { MdAdd } from "react-icons/md";
import axios from 'axios';
const Stock = () => {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    fetchStockData();
  }, []);

  const fetchStockData = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/stock/"); 
      if (!response.ok) {
        throw new Error('Failed to fetch stock data');
      }
      const data = await response.json();
      setStockData(data);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div className='w-[99vw-2px]'>
      <Navbar/>
      <div className='flex mx-4 mt-4'>
        <div className='text-[26px] font-bold ml-[1.5%]'>Product</div>
        <div className='text-[26px] font-bold ml-[32%]'>Quantity</div>
        <div className='text-[26px] font-bold ml-[19%]'>Price</div>
      </div>
      <div className='flex flex-col gap-3 mt-2 w-full'>
        {stockData.map((data)=>(<StockItem data={data}/>))}
      </div>
    </div>
  );
};

export default Stock;

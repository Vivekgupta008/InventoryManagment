import React from 'react'
import Stock from './Stock'
import Navbar from '../components/Navbar';
import { useState,useEffect } from 'react';
import Item from '../components/Item';

function Ordertrack() {
    const [data,setData] = useState([])
    const api ="http://localhost:4000/api/v1/orders";

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch(api);
                const orders = await response.json();
                setData(orders.body);
            }
            catch(error){
                console.error(error);
            }
        }
        getData();
    },[]);

  return (
    <div>
      <Navbar />
      <div className='flex justify-between mx-32 text-[20px] font-bold mt-4'>
        <div>Order details</div>
        <div>Status</div>
      </div>
      {data.length > 0 ? (
        data.map((dataitem) => (
          <Item key={dataitem._id} dataitem={dataitem}/>
        ))
      ) : (
        <p>No item pending</p>
      )}
      
    </div>

  
  )
}

export default Ordertrack
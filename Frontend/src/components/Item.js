import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function Item({ dataitem }) {
  const orderStatus = dataitem.status;
  const buttonOneEnable = (orderStatus == 'Ready to Deliver') ? true :false
  const buttonTwoEnable = (orderStatus == 'Delivery') ? true :false

  async function changeStatus(index){
    const api ="http://localhost:4000/api/v1/updateOrder";
      try{
          await axios.post(api,{
            id:dataitem._id,
            status:(index == 'one') ?'Delivery':'Ready to Deliver'
          })
          .then((response) => console.log(response))
      }
      catch(error){
          console.error(error);
      }
      window.location.reload(true);
  }
  

  return (
      <div className='flex justify-between mx-4 mt-3 border-[1px] h-[120px] px-6 py-4 items-center'>
      <div className='flex flex-col gap-2'>
          <div className='mb-2'>{dataitem._id}</div>

        <div className='flex w-80 justify-between'>
            <button className= {`rounded-md  px-4 py-2 + ${buttonOneEnable ? 'bg-green-500 hover:bg-green-700 text-white': 'bg-gray-300 cursor-not-allowed opacity-50'}`} onClick={()=>changeStatus('one')}>Send for delivery</button> 

            <button className= {`rounded-md  px-4 py-2 + ${buttonTwoEnable ? 'bg-green-500 hover:bg-green-700 text-white': 'bg-gray-300 cursor-not-allowed opacity-50'}`} onClick={()=>changeStatus('two')}>Undo delivery</button> 
        </div>
      </div>
      <NavLink className= 'text-[#6900ff]' to={`/details/${dataitem._id}`}>More details...</NavLink>
      <div className='w-[120px] mr-4'>{orderStatus} </div>
    </div>
  );
}

export default Item;

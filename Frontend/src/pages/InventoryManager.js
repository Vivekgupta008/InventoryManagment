import React from 'react'
import { useState,useEffect } from 'react'
import Navbar from '../components/Navbar';
import InvItem from '../components/InvItem';

function InventoryManager(){
    const [data,setData] = useState([])
    const api ="http://localhost:4000/api/v1/orders";

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch(api);
                const orders = await response.json();
                const res = orders.body;
                const data = res.filter(order => order.status === 'Inventory')
                
                setData(data);
                console.log(data);
            }
            catch(error){
                console.error(error);
            }
        }
        getData();
    },[]);

  return (
    <div>
        <Navbar/>
        {data.length > 0 ? (
        data.map((dataitem) => (
          <InvItem key={dataitem._id} dataitem={dataitem}/>
        ))
      ) : (
        <p>No item pending</p>
      )}
    </div>
  )
}

export default InventoryManager;
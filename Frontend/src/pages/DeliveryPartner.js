import React from 'react'
import { useState,useEffect } from 'react'
import Item from '../components/Item';
import Navbar from '../components/Navbar';
import DelItem from '../components/DelItem';

function DeliveryPartner(){
    const [data,setData] = useState([])
    const api ="http://localhost:4000/api/v1/orders";

    useEffect(()=>{
        async function getData(){
            try{
                const response = await fetch(api);
                const orders = await response.json();
                const res = orders.body;
                const data = res.filter(order => order.status === 'Delivery' || order.status === 'Delivered')
                
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
          <DelItem key={dataitem._id} dataitem={dataitem}/>
        ))
      ) : (
        <p>No item pending</p>
      )}
    </div>
  )
}

export default DeliveryPartner;
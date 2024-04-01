import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';

function Order() {
    const { id } = useParams();  
    const api = `http://localhost:4000/api/v1/order/${id}`;
    const [data, setData] = useState(null);

    useEffect(() => {
        async function getData() {
            try {
                const response = await fetch(api);
                const orders = await response.json();
                setData(orders.body);
            } catch (error) {
                console.log(error)
            }
        }
        getData();
    }, [api]);


    return (
        <div>
            {data ? (
                <div className='py-10 mx-96 flex justify-center gap-10 mt-48 border-black border-2 items-center'>
                    <div className='flex flex-col gap-2 mt-3'>
                        <div className='text-[20px] font-bold mb-8'>{data._id}</div>
                        <div>{data.customer.name}</div>
                        <div>{data.customer.address}</div>
                        <div>{data.customer.phone}</div>
                    </div>
                    <div>Status : {data.status}</div>
                </div>
            ) :
            (<Loading/>)}
        </div>
    );
}

export default Order;

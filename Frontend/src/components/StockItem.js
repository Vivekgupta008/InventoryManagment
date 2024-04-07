import React, { useState } from 'react';
import { MdOutlineModeEdit, MdDeleteOutline  } from "react-icons/md";
import { FaRegWindowClose } from "react-icons/fa";
import Modal from 'react-modal';
import axios from 'axios';

function StockItem({ data }) {
    const [open, setOpen] = useState(false);
    const [quantity, setQuantity] = useState(data.quantity);
    const [price, setPrice] = useState(data.price);

    const openModal = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    const deleteStockItem = async () => {
        try {
            const res = await axios.delete(`http://localhost:4000/api/v1/stock/${data._id}`);
            console.log(res);
        } catch (err) {
            console.error('Error deleting stock item:', err);
        }
    }
        const editStock = async(e) => {
          e.preventDefault();
          try {
            const response = await fetch(`http://localhost:4000/api/v1/stock/${data._id}`, {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({quantity, price }),
            });
            if (!response.ok) {
              throw new Error('Failed to update stock item');
            }
          } catch (error) {
            console.error('Error updating stock item:', error);
          }
          window.location.reload(true);
        }

    return (
        <div className='flex mx-6 w-[95%] justify-between border-[1px] py-2 px-4 pr-12 rounded-md h-[80px] items-center'>
            <div className='w-[20%]'>
                <div className='w-[20%] text-[12px] font-bold'>{data._id}</div>
                <div className='w-[100%] text-[18px]'>{data.product}</div>
            </div>
            <div className='w-[5%]'>{data.quantity}</div>
            <div className='w-[5%]'>{data.price}</div>
            <div className='flex gap-[20%]'>
                <button onClick={openModal}><MdOutlineModeEdit /></button>
                <button onClick={deleteStockItem}><MdDeleteOutline /></button>
            </div>
            <Modal
                isOpen={open}
                onRequestClose={closeModal}
                className={'fixed inset-40 ml-80 bg-gray-100 w-[30%] h-[40%] border-[1px] border-black rounded-lg'}
            >
                <div className='max-h-[90vh] w-[96%]'>
                    <button onClick={closeModal} className='ml-[97%] mt-[20px]'><FaRegWindowClose /></button>
                    <div className='ml-32 text-lg mb-4'>{data.product}</div>
                    <div>
                        <input
                            className='mt-2 ml-20 p-2 border border-gray-300 rounded-md w-64'
                            placeholder='Enter quantity'
                            onChange={(e) => setQuantity(e.target.value)}
                        />
                        <input
                            className='mt-2 ml-20 p-2 border border-gray-300 rounded-md w-64'
                            placeholder='Enter price'
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>
                    <button className='mt-2 ml-20 p-2 rounded-md w-64 bg-black text-white' onClick={editStock}>Update</button>
                </div>
            </Modal>
        </div>
    )
}

export default StockItem;

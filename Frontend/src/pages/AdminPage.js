import React from 'react'
import Ordertrack from './Ordertrack'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

function AdminPage() {
  return (
  <>
  <Navbar/>
    <div className='flex justify-center items-center flex-col w-[100vw] h-[100vh] gap-7'>
        <div className='w-[60%] mx-auto px-36 bg-gray-300 h-[60%] my-auto py-32 rounded-md hover:scale-105 duration-300'>
            <div className='flex justify-center items-center'>
                <div className='font-sans font-bold text-[38px]'>Admin Panel</div>
            </div>
            <div className='flex items-center justify-around flex-row w-[30%] min-w-[600px] gap-2'>
            <NavLink className='w-[20%] bg-black mt-4 py-2 px-12 rounded-md text-white min-w-[200px]' to="/orderTrack" >Order Tracking </NavLink>
            <NavLink className='w-[20%] bg-black mt-4 py-2 px-16 rounded-md text-white min-w-[200px]' to="/analytics"> Analytics </NavLink>
            </div>
        </div>
    </div>
    </>
    
  )
}

export default AdminPage
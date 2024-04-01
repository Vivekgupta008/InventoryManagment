import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoEye,IoEyeOff } from "react-icons/io5";

function Register(){
  const [show,setShow] = useState(false);
  function toggleShow(event){
    setShow(!show);
  }
  return (
    <div className='flex flex-col w-[100%] items-center mt-[5%] min-h-screen' >
     {/* <div className="bg-transparent bg-opacity-10"></div> */}

     <div className='flex flex-col w-[45%]  items-center  px-10 py-10 mt-2'>
      <div className='flex justify-center font-sans font-semibold text-6xl'>Join Us.</div>
      <div className='flex justify-center font-sans font-semibold text-xl mt-[10%]'>Create account</div>
      <div className='flex justify-center mt-[3%] w-[100%]'>
        <input className='border-black border-2 outline-0 min-w-[70%] px-4 py-1 rounded-md' placeholder='Enter your username'></input>
      </div>
      <div className='flex justify-center w-[100%] mt-[3%]'>             
        <input type="email" className='border-black border-2 outline-0 min-w-[70%] px-4 py-1 rounded-md' placeholder='Enter email'></input>
      </div>
      <div className='flex justify-center w-[100%] mt-[3%]'>
        <input  type={show ? "text" :"password"} className='border-black border-2 outline-0 min-w-[70%] px-4 py-1 rounded-md' placeholder='Enter password'>
        </input>
        <div onClick={(event)=>{toggleShow(event)}} className='absolute right-[37%] top-[58%]'>{show ?(<IoEye/>):(<IoEyeOff/>)}</div>
      </div>
      <div className='flex justify-center w-[100%] mt-[2%]'>
        <input type={show ? "text" :"password"} className='border-black border-2 outline-0 min-w-[70%] px-4 py-1 rounded-md' placeholder='Re-enter password'></input>
        <div onClick={(event)=>{toggleShow(event)}} className='absolute right-[37%] top-[65%]'>{show ?(<IoEye/>):(<IoEyeOff/>)}</div>
      </div>
      <div  className='w-[70%] mt-[2%]'><button className='w-[100%] bg-black text-white px-4 py-1 rounded-md'>Login</button></div>
      <NavLink to={'/login'}><span className='text-xs mt-[1%] text-opacity-100'>Already a User? </span><span className='text-xs mt-[1%] text-opacity-100 text-gray-400'>Login</span></NavLink>
     </div>
    </div>
  )
}

export default Register
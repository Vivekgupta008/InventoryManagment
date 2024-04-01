import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { IoEye, IoEyeOff } from "react-icons/io5";
import axios from 'axios';
function LoginPage(){
  const history=useNavigate();
  const [show,setShow] = useState(false);
  const [data,setData] = useState({
      email:"",
      password:""
  })

  function toggleShow(event){
    setShow(!show);
  }
  function handle(event){
    const newData = {...data};
    newData[event.target.id] = event.target.value;
    setData(newData);
  }

  async function authLogin(event){
    event.preventDefault();
    setData(data);
    try{
        await axios.post('http://localhost:4000/api/v1/login',
        {
          email: data.email,
          password: data.password
        })
        .then((response) => {
          if(response.data.success == true){
            if(response.data.confirmUser.role == "Delivery"){
              history('/del');
            }
            if(response.data.confirmUser.role == "Admin"){
              history('/admin');
            }
            if(response.data.confirmUser.role == "Inventory"){
              history('/inv');
            }
            console.log(response.data.confirmUser.role);
          }
          else{
            alert("User does not exist");
          }
        })
    }
    catch(err){
      console.log(err);
    }
  }
  
  return (
    <div className='flex flex-col w-[100%] items-center mt-[5%] min-h-screen' >
     {/* <div className="bg-transparent bg-opacity-10"></div> */}
     <div className='flex flex-col w-[45%]  items-center  px-10 py-10 mt-2'>
      <div className='flex justify-center font-sans font-semibold text-6xl'>Welcome back.</div>
      <div className='flex justify-center font-sans font-semibold text-xl mt-[10%]'>Log in to your account</div>
      <div className='flex justify-center mt-[3%] w-[100%]'>
        <input className='border-black border-2 outline-0 min-w-[70%] px-4 py-1 rounded-md' placeholder='Enter your email' value={data.email} id='email' onChange={(e)=>handle(e)}></input>
      </div>
      <div className='flex justify-center w-[100%] mt-[2%]'>
        <input  type={show ? "text" :"password"} className='border-black border-2 outline-0 min-w-[70%] px-4 py-1 rounded-md' placeholder='Enter password' value={data.password} id='password' onChange={(e)=>handle(e)}>
        </input>
        <div onClick={(event)=>{toggleShow(event)}} className='absolute right-[37%] top-[50%]'>{show ?(<IoEye/>):(<IoEyeOff/>)}</div>
      </div>
      <div  className='w-[70%] mt-[2%]'>
       <button className='w-[100%] bg-black text-white px-4 py-1 rounded-md' onClick={(e)=>{authLogin(e)}}>Login</button></div>
      <NavLink to={'/register'}><span className='text-xs mt-[1%] text-opacity-100'>New User? </span><span className='text-xs mt-[1%] text-opacity-100 text-gray-400'>Register</span></NavLink>
     </div>
    </div>
  )
}

export default LoginPage
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ userName, userId, onLogout }) => {
  const history = useNavigate();
  const handleLogout = (e) => {
    history('/login');
    onLogout();
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center text-white">
        <span className="mr-4">Welcome, Vivek</span>
        
      </div>
      <button className="text-white hover:text-gray-300" onClick={(e) => {handleLogout(e)}}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

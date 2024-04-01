import React from 'react';

const Navbar = ({ userName, userId, onLogout }) => {
  const handleLogout = () => {
    // Perform logout logic here
    onLogout();
  };

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4">
      <div className="flex items-center text-white">
        <span className="mr-4">Welcome, {userName}</span>
        <span>ID: {userId}</span>
      </div>
      <button className="text-white hover:text-gray-300" onClick={handleLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;

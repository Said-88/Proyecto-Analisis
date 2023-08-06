import  { useState } from 'react';
import logo from '../assets/Logo_usap.png';
import { Link } from 'react-router-dom';
import { useAuth } from "../context/AuthContext";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const {  logout } = useAuth();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <nav className='bg-blue shadow md:flex md:items-center md:justify-between'>
      <div className='flex items-center'>
        <Link to="/home">
          <img
            className='px-5 h-14 online'
            src={logo}
          />
        </Link>
        <div className="ml-auto">
          <button
            className='text-3xl cursor-pointer mx-2 md:hidden block'
            onClick={toggleMenu}
          >
            {menuOpen ? (
              <ion-icon name="close"></ion-icon>
            ) : (
              <ion-icon name="menu"></ion-icon>
            )}
          </button>
        </div>
      </div>
      <ul
        className={`${
          menuOpen ? 'opacity-100 top-15 z-10' : 'opacity-100 top-[-400px] z-0'
        } md:flex md:items-center md:static md:opacity-100 md:top-0 absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 `}
      >
        <li className='m-4 my-6 md:my-0'>
          <a href="#" className='text-xl hover:text-cyan-500 duration-500'></a>
        </li>
        <li className='m-4 my-6 md:my-0'>
          <a href="#" className='text-xl hover:text-cyan-500 duration-500'></a>
        </li>
        <li className='m-4 my-6 md:my-0'>
          <a href="#" className='text-xl hover:text-cyan-500 duration-500'></a>
        </li>
        <li className='m-4 my-6 md:my-0'>
          <Link to="/about" className='text-xl hover:text-cyan-500 duration-500'>
          About
          </Link>
        </li>
        <Link to="/create/event">
        <button className='bg-blue-500 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-blue-600 rounded'>
          Create Event
        </button>
        </Link>
        <button onClick={handleLogout} className='bg-blue-500 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-blue-600 rounded'>
          Logout
        </button>
      </ul>
    </nav>
  );
};



   
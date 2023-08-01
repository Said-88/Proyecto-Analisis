import { useState } from 'react';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className='bg-blue shadow md:flex md:items-center md:justify-between'>
      <div className='flex items-center'>
        <samp className='text-2xl font-[Poppins]'>
          <img
            className='px-5 h-14 online'
            src="src\assets\Logo_usap.png"
            alt=""
          />
        </samp>
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
          menuOpen ? 'opacity-100 top-15' : 'opacity-100 top-[-400px]'
        } md:flex md:items-center md:static md:opacity-100 md:top-0 absolute bg-white w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-7 `}
      >
        <li className='m-4 my-6 md:my-0'>
          <a href="#" className='text-xl hover:text-cyan-500 duration-500'>HOME</a>
        </li>
        <li className='m-4 my-6 md:my-0'>
          <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Temp</a>
        </li>
        <li className='m-4 my-6 md:my-0'>
          <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Temp</a>
        </li>
        <li className='m-4 my-6 md:my-0'>
          <a href="#" className='text-xl hover:text-cyan-500 duration-500'>Temp</a>
        </li>
        <button className='bg-cyan-400 text-white font-[Poppins] duration-500 px-6 py-2 mx-4 hover:bg-cyan-500 rounded'>
          Create an event
        </button>
      </ul>
    </nav>
  );
};



   
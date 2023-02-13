import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import '@fontsource/raleway';
const NavBar = () => {
  const [nav, setNav] = useState(false);
  // const [color, setColor] = useState("transparent");

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='backdrop fixed left-0 top-0 z-10 w-full bg-[#212121]/60 backdrop-brightness-50 duration-300  ease-in  '>
      <div className='m-auto flex max-w-[1240px] items-center justify-between text-white'>
        {/* Logo */}
        {/* <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='text-4xl font-bold'>
            Escuela <span style={{ color: `${Redpill}` }}> Red Pill </span>
          </h1>
        </Link> */}
        <div className='flex flex-1 flex-row items-center '>
          <Link href='/'>
            <div className='flex items-center text-2xl font-medium text-indigo-500 dark:text-gray-100'>
              <span>
                <img
                  src='/assets/pildora.png'
                  alt='N'
                  width='32'
                  height='32'
                  className='w-32'
                />
              </span>
            </div>
          </Link>
          <Link href='/'>
            <div className='flex flex-col  justify-center'>
              <span className=' text-lg'>
                Escuela{' '}
                <span className='font-bold text-[#c70039]'> Red Pill</span>
              </span>
              <span className='raleway text-xs italic'>by Juan López</span>
            </div>
          </Link>
        </div>

        <ul className='hidden text-lg font-semibold sm:flex'>
          <li className='p-4'>
            <Link href='/'>Quien es Juan Lopez?</Link>
          </li>
          <li className='p-4'>
            <Link href='#'>Contacto</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'absolute top-0 left-0 right-0 bottom-0 flex h-screen w-full items-center justify-center bg-[#212121]/90 text-center  backdrop-blur backdrop-brightness-50 duration-300 ease-in sm:hidden'
              : 'absolute top-0 left-[-100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-[#212121]/90 text-center backdrop-blur  backdrop-brightness-50 duration-300 ease-in sm:hidden'
          }
        >
          <ul className='text-lg font-semibold'>
            <li
              onClick={handleNav}
              className='p-4 text-3xl hover:text-gray-500 '
            >
              <Link href='#'>Quien es Juan Lopez?</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-3xl hover:text-gray-500'
            >
              <Link href='#'>Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

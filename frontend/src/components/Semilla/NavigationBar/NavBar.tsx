import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const NavBar = () => {
  const [nav, setNav] = useState(false);
  // const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState('white');
  const [Redpill, setRedpill] = useState('red');
  const navbarcolor = '#212121';

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        // setColor("#ffffff");
        setTextColor('#000000');
        setRedpill('#E73611');
      } else {
        // setColor("transparent");
        setTextColor('#ffffff');
        setRedpill('#E73611');
      }
    };
    window.addEventListener('scroll', changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navbarcolor}` }}
      className='fixed left-0 top-0 z-10 w-full duration-300 ease-in'
    >
      <div className='m-auto flex max-w-[1240px] items-center justify-between p-4 text-white'>
        <Link href='/'>
          <h1 style={{ color: `${textColor}` }} className='text-4xl font-bold'>
            Escuela <span style={{ color: `${Redpill}` }}> Red Pill </span>
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Opcion #1</Link>
          </li>
          <li className='p-4'>
            <Link href='#'>Opcion #2</Link>
          </li>
          <li className='p-4'>
            <Link href='#'>Opcion #3</Link>
          </li>
          <li className='p-4'>
            <Link href='#'>Opcion #4</Link>
          </li>
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className='z-10 block sm:hidden'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'absolute top-0 left-0 right-0 bottom-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden'
              : 'absolute top-0 left-[-100%] right-0 bottom-0 flex h-screen w-full items-center justify-center bg-black text-center duration-300 ease-in sm:hidden'
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='#'>Home</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='#'>Gallery</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='#'>My roads</Link>
            </li>
            <li
              onClick={handleNav}
              className='p-4 text-4xl hover:text-gray-500'
            >
              <Link href='#'>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

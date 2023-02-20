import Imagen from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@fontsource/raleway';

const Navbar = () => {
  return (
    <>
      <div className=' relative m-0 pb-32 leading-none md:pb-64 '>
        <div className='backdrop fixed left-0 top-0 z-10 w-full bg-[#212121]/60 backdrop-brightness-50 duration-300  ease-in  '>
          <div className='m-auto flex max-w-[1240px] items-center justify-between text-white'>
            <div className='flex flex-1 flex-row items-center '>
              <div className='flex items-center text-2xl font-medium text-indigo-500 dark:text-gray-100'>
                <Link href='/'>
                  <Imagen
                    src='/assets/pildora.png'
                    alt='N'
                    width='250'
                    height='250'
                    className='w-32'
                  />
                </Link>
              </div>
              <Link href='/'>
                <p className='flex flex-col  justify-center'>
                  <span className=' text-lg'>
                    Escuela{' '}
                    <span className='font-bold text-[#c70039]'> Red Pill</span>
                  </span>
                  <span className='raleway text-xs italic'>by Juan López</span>
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

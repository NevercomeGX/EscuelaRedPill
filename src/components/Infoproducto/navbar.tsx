import Image from 'next/image';
import React from 'react';
import '@fontsource/raleway';

export default function Navbar() {
  return (
    <div className='flex justify-center'>
      {' '}
      {/* new container div */}
      <nav className='backdrop left-0 top-0 z-10 w-full bg-[#212121]/90 backdrop-blur-md duration-300 ease-in'>
        <div className='flex flex-col items-center rounded-sm shadow-lg lg:flex-row'>
          <div className='flex w-[50%]  flex-col items-center p-2 lg:w-[25%] '>
            <Image
              src='/assets/pildora.png'
              alt='N'
              width='150'
              height='150'
              className=''
            />
            <div className='mt-[-30px] flex w-full flex-col items-center justify-center p-2 text-center'>
              <h1 className='text-sm font-bold text-white'>
                Escuela{' '}
                <span className='font-bold text-[#c70039]'>Red Pill</span>
              </h1>
              <p className='raleway text-xs italic text-white'>by Juan López</p>
            </div>
          </div>
          <div className='flex flex-grow flex-col items-center justify-center p-2'>
            <div className='flex justify-center text-center text-3xl md:text-2xl lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight'>
              <p className='flex-grow text-center font-bold text-[#FFf]'>
                ABC DE LA COMUNICACIÓN
              </p>
            </div>
          </div>
          <div className=' hidden w-[25%] flex-col items-center p-2 pl-6 lg:flex'></div>
        </div>
      </nav>
    </div>
  );
}

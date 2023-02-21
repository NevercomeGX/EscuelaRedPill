import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import '@fontsource/raleway';
export default function Navbar() {
  return (
    <nav className=' backdrop  left-0 top-0 z-10 w-full bg-[#212121]/90 backdrop-blur-md  duration-300  ease-in  '>
      <div className='flex flex-col items-center  justify-center gap-10   text-white'>
        <div className='flex flex-col   '>
          <Link href='/'>
            <Image
              src='/assets/pildora.png'
              alt='N'
              width='150'
              height='150'
              className='w-32'
            />
          </Link>
          <Link href='/'>
            <div className='flex flex-col items-center  justify-center '>
              <span className=' text-lg'>
                Escuela{' '}
                <span className='font-bold text-[#c70039]'> Red Pill</span>
              </span>
              <span className='raleway text-xs italic'>by Juan López</span>
            </div>
          </Link>
        </div>
        <div className='flex justify-center pb-10 text-center  text-3xl md:text-2xl lg:text-5xl lg:leading-tight xl:text-6xl xl:leading-tight'>
          <p className='stroke-black stroke-2 text-[#c70039]'>
            ABC DE LA COMUNICACIÓN
          </p>
        </div>
      </div>
    </nav>
  );
}

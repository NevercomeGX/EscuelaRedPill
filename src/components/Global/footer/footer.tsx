import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import Nevercomex from '@/components/Global/nevercomex/copyright';

export default function Footer() {
  return (
    <section className='relative mt-10 bg-[#212121] p-2'>
      <div className=' flex flex-1 flex-col items-center justify-center border-gray-100 md:justify-evenly lg:flex-row lg:items-stretch '>
        <div className='lg:col-span-2'>
          <div>
            {' '}
            <Link href='/'>
              <div className='flex items-center text-2xl font-medium text-black dark:text-gray-100 lg:p-2'>
                <span>
                  <Image
                    src='/assets/pildora.png'
                    alt='N'
                    width='300'
                    height='300'
                    className='w-24'
                  />
                </span>
                <span className='text-white'>
                  Escuela <span className='text-[#c70039]'> Red Pill</span>
                </span>
              </div>
            </Link>
          </div>

          <div className='max-w-md text-white lg:p-2'>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod maxime
            facilis qui delectus enim cupiditate provident iusto autem unde
            rerum libero asperiores cum numquam quia, tempora est assumenda
            animi doloribus! */}
          </div>
        </div>
        <div className='pt-4'>
          <div className='flex items-center justify-center  text-white '>
            Siguenos
          </div>
          <div className='mt-5 flex items-center gap-x-1 text-white lg:flex-row'>
            <a
              href='https://www.instagram.com/escuelaredpill/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='sr-only'>Instagram</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='30'
                height='30'
                viewBox='0,0,256,256'
              >
                <g
                  fill='#ffffff'
                  fillRule='nonzero'
                  stroke='none'
                  strokeWidth='1'
                  strokeLinecap='butt'
                  strokeLinejoin='miter'
                  strokeMiterlimit='10'
                  strokeDasharray=''
                  strokeDashoffset='0'
                  fontFamily='none'
                  fontWeight='none'
                  fontSize='none'
                  textAnchor='none'
                >
                  <g transform='scale(8.53333,8.53333)'>
                    <path d='M9.99805,3c-3.859,0 -6.99805,3.14195 -6.99805,7.00195v10c0,3.859 3.14195,6.99805 7.00195,6.99805h10c3.859,0 6.99805,-3.14195 6.99805,-7.00195v-10c0,-3.859 -3.14195,-6.99805 -7.00195,-6.99805zM22,7c0.552,0 1,0.448 1,1c0,0.552 -0.448,1 -1,1c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1zM15,9c3.309,0 6,2.691 6,6c0,3.309 -2.691,6 -6,6c-3.309,0 -6,-2.691 -6,-6c0,-3.309 2.691,-6 6,-6zM15,11c-2.20914,0 -4,1.79086 -4,4c0,2.20914 1.79086,4 4,4c2.20914,0 4,-1.79086 4,-4c0,-2.20914 -1.79086,-4 -4,-4z'></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href='https://www.ivoox.com/en/escuela-de-la-red-pill_bk_list_10432211_1.html'
              target='_blank'
              rel='noopener noreferrer'
            >
              <Image width={30} height={30} src='/iv.png' alt='..' />
            </a>
            <a
              href='https://www.tiktok.com/@escuelaredpill?lang=en'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='sr-only'>Tiktok</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='30'
                height='30'
                viewBox='0,0,256,256'
              >
                <g
                  fill='#ffffff'
                  fillRule='nonzero'
                  stroke='none'
                  strokeWidth='1'
                  strokeLinecap='butt'
                  strokeLinejoin='miter'
                  strokeMiterlimit='10'
                  strokeDasharray=''
                  strokeDashoffset='0'
                  fontFamily='none'
                  fontWeight='none'
                  fontSize='none'
                  textAnchor='none'
                >
                  <g transform='scale(8.53333,8.53333)'>
                    <path d='M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h18c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2zM22.689,13.474c-0.13,0.012 -0.261,0.02 -0.393,0.02c-1.495,0 -2.809,-0.768 -3.574,-1.931c0,3.049 0,6.519 0,6.577c0,2.685 -2.177,4.861 -4.861,4.861c-2.684,-0.001 -4.861,-2.178 -4.861,-4.862c0,-2.685 2.177,-4.861 4.861,-4.861c0.102,0 0.201,0.009 0.3,0.015v2.396c-0.1,-0.012 -0.197,-0.03 -0.3,-0.03c-1.37,0 -2.481,1.111 -2.481,2.481c0,1.37 1.11,2.481 2.481,2.481c1.371,0 2.581,-1.08 2.581,-2.45c0,-0.055 0.024,-11.17 0.024,-11.17h2.289c0.215,2.047 1.868,3.663 3.934,3.811z'></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href='https://www.youtube.com/@EscuelaRedPill'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='sr-only'>Youtube</span>

              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='30'
                height='30'
                viewBox='0,0,256,256'
              >
                <g
                  fill='#ffffff'
                  fillRule='nonzero'
                  stroke='none'
                  strokeWidth='1'
                  strokeLinecap='butt'
                  strokeLinejoin='miter'
                  strokeMiterlimit='10'
                  strokeDasharray=''
                  strokeDashoffset='0'
                  fontFamily='none'
                  fontWeight='none'
                  fontSize='none'
                  textAnchor='none'
                >
                  <g transform='scale(8.53333,8.53333)'>
                    <path d='M15,4c-4.186,0 -9.61914,1.04883 -9.61914,1.04883l-0.01367,0.01563c-1.90652,0.30491 -3.36719,1.94317 -3.36719,3.93555v6v0.00195v5.99805v0.00195c0.00384,1.96564 1.4353,3.63719 3.37695,3.94336l0.00391,0.00586c0,0 5.43314,1.05078 9.61914,1.05078c4.186,0 9.61914,-1.05078 9.61914,-1.05078l0.00195,-0.00195c1.94389,-0.30554 3.37683,-1.97951 3.37891,-3.94727v-0.00195v-5.99805v-0.00195v-6c-0.00288,-1.96638 -1.43457,-3.63903 -3.37695,-3.94531l-0.00391,-0.00586c0,0 -5.43314,-1.04883 -9.61914,-1.04883zM12,10.39844l8,4.60156l-8,4.60156z'></path>
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>

        <div className='flex flex-col justify-start pt-10'>
          <Nevercomex />
        </div>
        {/* <div>
            <div className='-mt-2 -ml-3 flex w-full flex-wrap lg:ml-0'>
              {navigation.map((item, index) => (
                <Link legacyBehavior key={index} href='/'>
                  <a className='w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'>
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <div className='-mt-2 -ml-3 flex w-full flex-wrap lg:ml-0'>
              {legal.map((item, index) => (
                <Link legacyBehavior key={index} href='/'>
                  <a className='w-full rounded-md px-4 py-2 text-gray-500 hover:text-indigo-500 focus:bg-indigo-100 focus:text-indigo-500 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700'>
                    {item}
                  </a>
                </Link>
              ))}
            </div>
          </div> */}
      </div>

      <div className='my-4  text-center text-sm text-white'>
        Copyright © {new Date().getFullYear()} Escuela RedPill.{' '}
        <br className='md:hidden' /> Todos los derechos reservados
        {/* <a
          href='https://web3templates.com/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-lg text-[#44bae8]'
        >
          Escuela Redpill.
        </a>{' '} */}
      </div>

      {/* Do not remove this */}
    </section>
  );
}

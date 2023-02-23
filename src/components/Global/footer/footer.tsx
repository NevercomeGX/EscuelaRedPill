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
              href='https://instagram.com/web3templates'
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
                  fill-rule='nonzero'
                  stroke='none'
                  stroke-width='1'
                  stroke-linecap='butt'
                  stroke-linejoin='miter'
                  stroke-miterlimit='10'
                  stroke-dasharray=''
                  stroke-dashoffset='0'
                  font-family='none'
                  font-weight='none'
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
              href='https://instagram.com/web3templates'
              target='_blank'
              rel='noopener noreferrer'
            >
              <span className='sr-only'>Facebook</span>
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
                  fill-rule='nonzero'
                  stroke='none'
                  stroke-width='1'
                  stroke-linecap='butt'
                  stroke-linejoin='miter'
                  stroke-miterlimit='10'
                  stroke-dasharray=''
                  stroke-dashoffset='0'
                  font-family='none'
                  font-weight='none'
                  fontSize='none'
                  textAnchor='none'
                >
                  <g transform='scale(8.53333,8.53333)'>
                    <path d='M15,3c-6.627,0 -12,5.373 -12,12c0,6.016 4.432,10.984 10.206,11.852v-8.672h-2.969v-3.154h2.969v-2.099c0,-3.475 1.693,-5 4.581,-5c1.383,0 2.115,0.103 2.461,0.149v2.753h-1.97c-1.226,0 -1.654,1.163 -1.654,2.473v1.724h3.593l-0.487,3.154h-3.106v8.697c5.857,-0.794 10.376,-5.802 10.376,-11.877c0,-6.627 -5.373,-12 -12,-12z'></path>
                  </g>
                </g>
              </svg>
            </a>
            <a
              href='https://instagram.com/web3templates'
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
                  fill-rule='nonzero'
                  stroke='none'
                  stroke-width='1'
                  stroke-linecap='butt'
                  stroke-linejoin='miter'
                  stroke-miterlimit='10'
                  stroke-dasharray=''
                  stroke-dashoffset='0'
                  font-family='none'
                  font-weight='none'
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
              href='https://instagram.com/web3templates'
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
                  fill-rule='nonzero'
                  stroke='none'
                  stroke-width='1'
                  stroke-linecap='butt'
                  stroke-linejoin='miter'
                  stroke-miterlimit='10'
                  stroke-dasharray=''
                  stroke-dashoffset='0'
                  font-family='none'
                  font-weight='none'
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

// const Twitter = ({ size = 24 }) => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     width={size}
//     height={size}
//     viewBox='0 0 24 24'
//     fill='currentColor'
//   >
//     <path d='M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z' />
//   </svg>
// );

// const Facebook = ({ size = 24 }) => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     width={size}
//     height={size}
//     viewBox='0 0 24 24'
//     fill='currentColor'
//   >
//     <path d='M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07' />
//   </svg>
// );
// const Instagram = ({ size = 24 }) => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     width={size}
//     height={size}
//     viewBox='0 0 24 24'
//     fill='currentColor'
//   >
//     <path d='M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z' />
//   </svg>
// );

// const Linkedin = ({ size = 24 }) => (
//   <svg
//     xmlns='http://www.w3.org/2000/svg'
//     width={size}
//     height={size}
//     viewBox='0 0 24 24'
//     fill='currentColor'
//   >
//     <path d='M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z' />
//   </svg>
// );

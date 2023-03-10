import React from 'react';

import Container from './container';

interface sectiontittle {
  pretitle?: string;
  title?: string;
  children?: string;
  align?: string;
  className?: string;
  Textcolor?: string;
  lista?: boolean;
  listado?: string[];
}

export default function SectionTitle(props: sectiontittle) {
  return (
    <Container
      className={`my-6 flex w-full flex-col ${props.className}  ${
        props.align === 'left' ? '' : 'items-center justify-center text-center '
      }`}
    >
      {props.title && (
        <h2
          className={`mt-3 max-w-2xl ${props.Textcolor} text-3xl  leading-snug tracking-tight text-gray-800 dark:text-white lg:text-4xl lg:leading-tight`}
        >
          {props.title}
        </h2>
      )}

      {props.listado && props.lista ? (
        <ul className='space-y-4  px-6 pt-8 text-sm  uppercase tracking-wider text-black'>
          {props.listado?.map((item, index) => (
            <li className='' key={index}>
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <div className='text-sm uppercase tracking-wider text-indigo-600'>
          {props.pretitle}
        </div>
      )}

      {props.children && (
        <p
          className={`max-w-4xl ${props.Textcolor} py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl`}
        >
          {props.children}
        </p>
      )}
      <a
        href='https://hotmart.com/es/marketplace/productos/el-abc-de-la-comunicacion/B79967778G'
        target='_blank'
        rel='noopener noreferrer'
        className='pt-10'
      >
        <button className=' w-80 rounded-md bg-green-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-green-800 transition-all hover:scale-105 md:w-96 '>
          ¬°INSCRIBETE AHORA!
        </button>
      </a>
    </Container>
  );
}

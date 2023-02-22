import Image from 'next/image';
import React from 'react';

import Card from './card';
import Container from './container';

export default function Testimonials() {
  return (
    <Container className='px-6'>
      <div className='flex min-h-[1px] w-full justify-center '>
        <div className='mb-8 content-start text-center'>
          <h1>TESTIMONIOS</h1>
        </div>
      </div>

      <div className=' grid grid-cols-1  gap-4 sm:grid-cols-2 lg:grid-cols-3  lg:px-24'>
        <Card
          src='https://www.youtube.com/embed/h2tdPryUtGo'
          nombre='Jose Campana - Colombia 	🇨🇴'
          testimonio='"El Doctor Juan me ayudo muchísimo! porque estaba a punto de entrar en una relación potencialmente muy toxica, el es un profesional único y acá en Colombia no se encuentra".'
        />
        <Card
          src='https://www.youtube.com/embed/8lugh-nX9pU'
          nombre='Rodrigo Cuevas - Chile'
          testimonio='"He Recibido Asesoría y mentoría de Juan y me ha sido muy preciso y orientado al resultado, es un servicio de calidad y lo recomiendo totalmente!".'
        />{' '}
        <Card
          src='https://www.youtube.com/embed/h2tdPryUtGo'
          nombre='Jose Campana'
          testimonio='"El Doctor Juan me ayudo muchísimo! porque estaba a punto de entrar en una relación potencialmente muy toxica, el es un profesional único y acá en Colombia no se encuentra".'
        />
      </div>

      <div className='flex flex-col items-center justify-center space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0'>
        <button className=' my-8 rounded-full bg-green-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-green-800 transition-all hover:scale-105 lg:w-[36rem] '>
          ¡NO ESPERES MAS E INSCRIBETE AHORA!
        </button>
      </div>
    </Container>
  );
}

function Avatar(props: any) {
  return (
    <div className='mt-8 flex items-center space-x-3'>
      <div className='h-14 w-14 flex-shrink-0 overflow-hidden rounded-full'>
        <Image
          src={props.image}
          width='40'
          height='40'
          alt='Avatar'
          layout='responsive'
          placeholder='blur'
        />
      </div>
      <div>
        <div className='text-lg font-medium'>{props.name}</div>
        <div className='text-gray-600 dark:text-gray-400'>{props.title}</div>
      </div>
    </div>
  );
}

function Mark(props: any) {
  return (
    <>
      {' '}
      <mark className='rounded-md bg-indigo-100 text-indigo-800 ring-4 ring-indigo-100 dark:bg-indigo-900 dark:text-indigo-200 dark:ring-indigo-900'>
        {props.children}
      </mark>{' '}
    </>
  );
}

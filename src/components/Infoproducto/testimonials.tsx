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
          nombre='Jose Campana - Colombia'
          testimonio='"El Doctor Juan me ayudo muchísimo! porque estaba a punto de entrar en una relación potencialmente muy toxica, el es un profesional único y acá en Colombia no se encuentra".'
        />
        <Card
          src='https://www.youtube.com/embed/8lugh-nX9pU'
          nombre='Rodrigo Cuevas - Chile'
          testimonio='"He Recibido Asesoría y mentoría de Juan y me ha sido muy preciso y orientado al resultado, es un servicio de calidad y lo recomiendo totalmente!".'
        />{' '}
        <Card
          src='https://www.youtube.com/embed/-4lL-cl7gvU'
          nombre='Bryan Acevedo - Colombia'
          testimonio='"Para mi fortuna conocí a este grandioso canal Escuela Redpill y Juan es un gran profesional! yo adquirí el plan de mejoramiento masculino y este ha sido muy positivo para mi y lo recomiendo totalmente!".
          '
        />
      </div>

      <div className='flex flex-col items-center justify-center space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0'>
        <a
          href='https://hotmart.com/es/marketplace/productos/el-abc-de-la-comunicacion/B79967778G'
          target='_blank'
          rel='noopener noreferrer'
        >
          <button className='m-8 rounded-full bg-green-600 py-4 px-8 text-center  text-lg font-bold text-white shadow-lg shadow-green-800 transition-all hover:scale-105  '>
            ¡NO ESPERES MAS E INSCRIBETE AHORA!
          </button>
        </a>
      </div>
    </Container>
  );
}

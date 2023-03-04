import Image from 'next/image';
import React from 'react';

import Container from './container';
import ReadMoreReadLess from './readmorereadless';

export default function About() {
  return (
    <>
      <Container className=' flex flex-col  bg-[#212121]  '>
        <section className='my-20 flex flex-col px-6 lg:flex-row lg:flex-nowrap lg:gap-10'>
          <div className='flex flex-col text-center lg:flex-row '>
            <div className='flex justify-center'>
              <h3 className='mt-3  max-w-xl text-[1.785rem] font-bold  leading-snug tracking-tight text-white md:lg:hidden lg:text-4xl lg:leading-tight'>
                ¿QUIEN ES JUAN LOPEZ?
              </h3>
            </div>

            <div className='flex w-full items-center justify-center rounded-full lg:w-1/2'>
              <figure className='m-0 flex w-full justify-center py-0 px-[10px] pt-10 text-center align-middle '>
                <Image
                  src='/assets/IMG_0410.jpg'
                  width='521'
                  height='482'
                  alt='Benefits'
                  className='box-content h-[350px] w-[350px] rounded-full border-[#f2f2f2] object-cover'
                />
              </figure>
            </div>

            <div
              className={`flex  w-full flex-wrap items-center px-8 lg:w-[100%] lg:pr-24  `}
            >
              <div className=' text-center'>
                <h3 className='mt-3 hidden max-w-xl text-3xl font-bold  leading-snug tracking-tight text-white md:lg:flex lg:text-4xl lg:leading-tight'>
                  ¿QUIEN ES JUAN LOPEZ?
                </h3>

                <div className='flex w-full flex-col text-left text-lg lg:flex-col '>
                  <div className='my-2 w-[90%] rounded-t-full border-b-2 border-[#fff] py-2'></div>

                  <ReadMoreReadLess
                    limit={0}
                    initialLimit={209}
                    color='text-white'
                    firstParagraph='Juan Lopez es un psicólogo profesional y consultor especializado en habilidades sociales, relaciones interpersonales y de pareja. Nació en Colombia y lleva más de 10 años estudiando y trabajando en este campo. Su interés por la psicología y las relaciones surgió después de una fuerte ruptura sentimental que lo llevó a investigar sobre la psicología y la dinámica de las relaciones de pareja. A pesar de los éxitos iniciales, también experimentó decepciones y desafíos en sus relaciones, lo que lo llevó a profundizar aún más en el campo de la inteligencia emocional, las habilidades sociales, relaciones de pareja y psicología evolucionista.'
                  >
                    {[
                      'Juan se ha especializado en ayudar a los hombres a desarrollar sus habilidades sociales, mejorar su autoconcepto y autoestima, y mejorar la calidad de sus relaciones a través de la combinación de su formación en psicología y su experiencia personal. Con su amplio conocimiento y experiencia, Juan ha atendido a cientos de casos y ha ayudado a muchos hombres a mejorar sus vidas y sus relaciones.',
                      'Hoy se especializa en apoyar procesos para desarrollo del autoestima, inteligencia emocional y resolución de conflictos en relaciones, mejora de la comunicación en pareja, superación de rupturas amorosas, definición de sentimientos y emociones, mejora de la atracción en una relación, entendimiento de las dinámicas en las relaciones de pareja, y desarrollo de habilidades sociales y de citas.',
                    ]}
                  </ReadMoreReadLess>

                  <ul className=' py-2  leading-normal text-white dark:text-gray-300 lg:text-xl xl:text-xl'>
                    <li>PSICOLOGO PROFESIONAL</li>
                    <li>ENTRENADOR DE HABILIDADES SOCIALES</li>
                    <li>CONSULTOR DE RELACIONES INTERPERSONALES</li>
                  </ul>
                </div>
              </div>
              <div className='mt-5 w-full'></div>
            </div>
          </div>
        </section>
        <Container className='-my-14 w-full'>
          <section className='bg-[#212121] px-6 text-white '>
            <div className='flex flex-col items-center justify-center '>
              <h1 className='mt-3 max-w-xl text-3xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight'>
                Precios
              </h1>

              <p className='mt-4 mb-8 text-center text-lg '>
                Taller valorado segun expertos
              </p>
              <p className='mb-8 text-center text-5xl text-red-600 line-through'>
                497 USD
              </p>
              <p className='mb-8 text-center text-lg '>
                Para ti por precio del primer lanzamiento{' '}
              </p>
              <p className='mb-4  text-center text-5xl text-green-500'>
                210 USD
              </p>

              <p className='bg max-w-xl pb-6 text-center text-2xl text-green-500 underline'>
                Inscribete con un 42% de descuento.
              </p>
              <div className='mb-8 '>
                <p className='bg max-w-xl text-center text-lg text-white'>
                  ¡Este valor solo estara para tiempo limitado y es especial
                  para la primera edición del ABC de la COMUNICACIÓN!
                </p>
              </div>
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
          </section>
        </Container>
      </Container>
    </>
  );
}

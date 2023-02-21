import Image from 'next/image';
import React from 'react';

import Container from './container';

export default function About() {
  return (
    <>
      <Container className=' flex flex-col  bg-[#212121]  '>
        <section className='my-20 flex flex-col px-6 lg:flex-row lg:flex-nowrap lg:gap-10'>
          <div className='flex flex-col text-center lg:flex-row '>
            <div className='flex justify-center'>
              <h3 className='mt-3  max-w-xl text-[1.785rem] font-bold  leading-snug tracking-tight text-white md:lg:hidden lg:text-4xl lg:leading-tight'>
                QUIEN ES JUAN LOPEZ ?
              </h3>
            </div>
            <div className='flex w-full items-center justify-center rounded-full lg:w-1/2'>
              <figure className='m-0 flex w-full justify-center py-0 px-[10px] pt-10 text-center align-middle '>
                <Image
                  src='/assets/162751374911.gif'
                  width='521'
                  height='482'
                  alt='Benefits'
                  className='box-content h-[250px] w-[250px] rounded-full border-2 border-[#f2f2f2] object-cover'
                />
              </figure>
            </div>

            <div
              className={`flex  w-full flex-wrap items-center px-8 lg:w-[100%] lg:pr-24  `}
            >
              <div className=' text-center'>
                <h3 className='mt-3 hidden max-w-xl text-3xl font-bold  leading-snug tracking-tight text-white md:lg:flex lg:text-4xl lg:leading-tight'>
                  QUIEN ES JUAN LOPEZ ?
                </h3>
                <div className='flex w-full flex-col text-left text-lg lg:flex-col '>
                  <div className='my-2 w-[90%] rounded-t-full border-b-4 border-[#212121] py-2'></div>

                  <p className='  py-2    leading-normal text-white dark:text-gray-300 lg:text-xl xl:text-xl'>
                    Juan Lopez es un psicólogo profesional y consultor
                    especializado en habilidades sociales, relaciones
                    interpersonales y de pareja. Nació en Colombia y lleva más
                    de 10 años estudiando y trabajando en este campo. Su interés
                    por la psicología y las relaciones surgió después de una
                    fuerte ruptura sentimental que lo llevó a investigar sobre
                    la psicología y la dinámica de las relaciones de pareja. A
                    pesar de los éxitos iniciales, también experimentó
                    decepciones y desafíos en sus relaciones, lo que lo llevó a
                    profundizar aún más en el campo de la inteligencia
                    emocional, las habilidades sociales, relaciones de pareja y
                    psicología evolucionista.
                  </p>

                  <p className=' py-2 leading-normal text-white dark:text-gray-300 lg:text-xl xl:text-xl'>
                    Juan se ha especializado en ayudar a los hombres a
                    desarrollar sus habilidades sociales, mejorar su
                    autoconcepto y autoestima, y mejorar la calidad de sus
                    relaciones a través de la combinación de su formación en
                    psicología y su experiencia personal. Con su amplio
                    conocimiento y experiencia, Juan ha atendido a cientos de
                    casos y ha ayudado a muchos hombres a mejorar sus vidas y
                    sus relaciones.
                  </p>

                  <p className=' py-2 leading-normal text-white dark:text-gray-300 lg:text-xl xl:text-xl'>
                    Hoy se especializa en apoyar procesos para desarrollo del
                    autoestima, inteligencia emocional y resolución de
                    conflictos en relaciones, mejora de la comunicación en
                    pareja, superación de rupturas amorosas, definición de
                    sentimientos y emociones, mejora de la atracción en una
                    relación, entendimiento de las dinámicas en las relaciones
                    de pareja, y desarrollo de habilidades sociales y de citas.
                  </p>

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
      </Container>
    </>
  );
}

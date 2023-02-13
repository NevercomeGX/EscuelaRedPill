import {
  faClock,
  faEnvelope,
  faFlag,
  faSignsPost,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';

import MasTexto from './MasTexto';
import Texto from './Texto';

const contenido = () => {
  return (
    <>
      <div className='relative mr-auto ml-auto flex max-w-7xl flex-col pt-12   '>
        <div className='flex min-h-[1px] w-full '>
          <div className='mb-8 content-start p-3'>
            <h1>¿QUE VAS A APRENDER EN ESTE CURSO?</h1>
          </div>
        </div>
      </div>
      <div className='relative mr-auto ml-auto flex max-w-[1240px] flex-col items-center  md:flex-row '>
        <div className='min-h-[1px] w-1/4'>
          <div className='relative flex w-full flex-wrap content-start p-3 '>
            <div className=' mb-4 mr-auto ml-auto text-center'>
              {' '}
              <FontAwesomeIcon icon={faClock} style={{ fontSize: 60 }} />
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-md text-[#212121] lg:text-lg'>
              5 horas de contenido exclusivo en vivo
            </h3>
          </div>
        </div>
        <div className='min-h-[1px] w-1/4'>
          <div className='relative flex w-full flex-wrap content-start p-3 '>
            <div className=' mb-4 mr-auto ml-auto text-center'>
              {' '}
              <FontAwesomeIcon icon={faSignsPost} style={{ fontSize: 60 }} />
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-md text-[#212121] lg:text-lg'>
              {' '}
              Información nunca vista en redes{' '}
            </h3>
          </div>
        </div>
        <div className='min-h-[1px] w-1/4'>
          <div className='relative flex w-full flex-wrap content-start p-3 '>
            <div className=' mb-4 mr-auto ml-auto text-center'>
              {' '}
              <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: 60 }} />
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-md text-[#212121] lg:text-lg'>
              {' '}
              Contenido anticipado por email{' '}
            </h3>
          </div>
        </div>
        <div className='min-h-[1px] w-1/4'>
          <div className='relative flex w-full flex-wrap content-start p-3 '>
            <div className=' mb-4 mr-auto ml-auto text-center'>
              {' '}
              <FontAwesomeIcon icon={faFlag} style={{ fontSize: 60 }} />
            </div>
          </div>
          <div className='text-center'>
            <h3 className='text-md text-[#212121] lg:text-lg'>
              {' '}
              Totalmente gratis{' '}
            </h3>
          </div>
        </div>
      </div>
      <Texto />
      <MasTexto />
    </>
  );
};

export default contenido;

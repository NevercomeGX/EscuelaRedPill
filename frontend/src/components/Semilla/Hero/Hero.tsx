import React from 'react';

import Video from './video';
import Form from '../form/Form';

const Hero = () => {
  return (
    <section className=' w-full'>
      <div className='  flex flex-col items-center justify-center bg-black/70 pt-[10rem] pb-[2rem]  text-center lg:flex-row '>
        <Video video='https://www.youtube.com/embed/2x_Ot2zwYJQ' />

        <div className='flex flex-col items-center justify-center text-white'>
          <Form heading='Taller gratuito ABC de la comunicación' message='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;

//

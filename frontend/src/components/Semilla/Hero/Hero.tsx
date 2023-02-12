import React from 'react';

import Form from '../form/Form';

interface Props {
  heading: string;
  message: string;
}

const Hero = ({ heading, message }: Props) => {
  return (
    <div className='mb-12 flex  h-screen items-center justify-center gap-32 bg-black/70 pt-16  text-center '>
      <div className=''>
        <video
          autoPlay
          loop
          muted
          playsInline
          className='pointer-events: none; h-[800px] w-[800px]'
        >
          {' '}
          <source
            src='https://walter-riso.com/wp-content/themes/Writer-Custom-Theme-master/assets/video/BannerWalterRiso.mp4'
            type='video/mp4'
          />
        </video>
      </div>

      <div className='item z-[2] mt-[-10rem] flex flex-col justify-center gap-6 p-5 pt-32 text-white'>
        <div className='text-center'>
          <h2 className='text-5xl font-bold'>{heading}</h2>
          <p className='py-5 text-xl'>{message}</p>
        </div>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Hero;

//

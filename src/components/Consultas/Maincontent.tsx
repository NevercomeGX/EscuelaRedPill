import React from 'react';
import '@fontsource/raleway';

import Aboutme from '@/components/Consultas/Aboutme/Aboutme';
import Services from '@/components/Consultas/Services/Services';
import Title from '@/components/Consultas/Title';

const Maincontent = () => {
  return (
    <>
      <aside className=' relative float-left min-h-[1px] w-full  px-[15px] md:w-3/4 lg:w-3/4'>
        <div className=' relative m-0 bg-[#fafafa] p-0'>
          {/*title*/}
          <Title />
          <Aboutme />
          <Services />

          <div className='absolute left-[-30px] top-0 h-full w-[30px] bg-[#fafafa] '></div>
        </div>
      </aside>
    </>
  );
};

export default Maincontent;

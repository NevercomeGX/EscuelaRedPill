import React from 'react';
import '@fontsource/raleway';

import Maincontent from '@/components/Consultas/Maincontent';
import Sidepanel from '@/components/Consultas/Sidepanel/Sidepanel';

const Content = () => {
  return (
    <>
      {' '}
      <div className=' container ml-auto mr-auto flex flex-col pr-[15px] pl-[15px] lg:w-[1170px] lg:flex-row'>
        <div className='row'>
          <Sidepanel />
          <Maincontent />
        </div>
      </div>
    </>
  );
};

export default Content;

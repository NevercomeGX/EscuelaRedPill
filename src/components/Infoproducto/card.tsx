import Image from 'next/image';
import React from 'react';

import userThreeImg from '../../../public/img/user3.jpg';

const Card = () => {
  return (
    <div className='flex justify-center'>
      <div className='max-w-sm rounded-lg bg-white shadow-lg'>
        .
        <video
          width={320}
          height={240}
          controls
          className='w-full rounded-t-lg'
        >
          <source src='https://www.youtube.com/embed/LHf2KqT3g4U' type='' />
        </video>
        <div className='p-6'>
          <h5 className='mb-2 text-xl font-medium text-gray-900'>Video Card</h5>
          <p className='mb-4 text-base text-gray-700'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>

          <div className=''>
            <Avatar
              image={userThreeImg}
              name='Gabrielle Winn'
              title='Co-founder of Acme Inc'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

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

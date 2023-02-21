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
        <Card />
        <Card />
        <Card />
      </div>

      {/* <div className='flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100   dark:bg-trueGray-800'>
            {' '}
            <iframe
              src='https://www.youtube.com/embed/LHf2KqT3g4U'
              title=''
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              className='h-full w-full rounded-2xl  '
            ></iframe>
          </div>
        </div>
        <div className='lg:col-span-2 xl:col-auto'>
          <div className='flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 dark:bg-trueGray-800'>
            {' '}
            <iframe
              src='https://www.youtube.com/embed/LHf2KqT3g4U'
              title=''
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              className='h-full w-full rounded-2xl'
            ></iframe>
          </div>
        </div>
        <div className='lg:col-span-2 xl:col-auto'>
          <div className='4 flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 dark:bg-trueGray-800'>
            {' '}
            <iframe
              src='https://www.youtube.com/embed/LHf2KqT3g4U'
              title=''
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
              className='h-full w-full rounded-2xl'
            ></iframe>
          </div>*/}
      {/* <div className=' mx-12 grid grid-cols-1 gap-4 object-center sm:grid-cols-2 lg:grid-cols-3'>
        <div className='flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800'>
          <p className='text-2xl leading-normal '>
            Share a real <Mark>testimonial</Mark>
            that hits some of your benefits from one of your popular customer.
          </p>

          <Avatar
            image={userOneImg}
            name='Sarah Steiner'
            title='VP Sales at Google'
          />
        </div>

        <div className=''>
          <div className='flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800'>
            <p className='text-2xl leading-normal '>
              Make sure you only pick the <Mark>right sentence</Mark>
              to keep it short and simple.
            </p>

            <Avatar
              image={userTwoImg}
              name='Dylan Ambrose'
              title='Lead marketer at Netflix'
            />
          </div>
        </div>
        <divs className=''>
          <div className='flex h-full w-full flex-col justify-between rounded-2xl bg-gray-100 px-14 py-14 dark:bg-trueGray-800'>
            <p className='text-2xl leading-normal '>
              This is an <Mark>awesome</Mark> landing page template I've seen. I
              would use this for anything.
            </p>

            <Avatar
              image={userThreeImg}
              name='Gabrielle Winn'
              title='Co-founder of Acme Inc'
            />
          </div>
        </divs>
      </div> */}
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

import Image from 'next/image';
import React from 'react';

import Container from './container';

export default function Benefits(props: any) {
  const { data } = props;

  return (
    <>
      <Container className='my-20 flex flex-wrap lg:flex-nowrap lg:gap-10 '>
        <div
          className={`flex w-full items-center justify-center lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:order-1' : ''
          }`}
        >
          <div>
            <Image
              src={data.image}
              width='521'
              height='482'
              alt='Benefits'
              layout='intrinsic'
              placeholder='blur'
            />
          </div>
        </div>

        <div
          className={`flex w-full flex-wrap items-center lg:w-1/2 ${
            props.imgPos === 'right' ? 'lg:justify-end' : ''
          }`}
        >
          <div>
            <div className='mt-4 flex w-full flex-col text-center'>
              <h3 className='mt-3 max-w-xl text-3xl font-bold leading-snug tracking-tight text-[#212121] dark:text-white lg:text-4xl lg:leading-tight'>
                {data.title}
              </h3>
              <div className='my-2 w-[90%] rounded-t-full border-b-4 border-[#212121] py-2'></div>

              <p className='max-w-xl py-4 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-xl'>
                {data.desc}
              </p>
            </div>

            <div className='mt-5 w-full'>
              {data.bullets.map((item: any, index: any) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

function Benefit(props: any) {
  return (
    <>
      <div className='mt-4 flex max-w-2xl items-center '>
        {/* <div className='mt-1 flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-md bg-indigo-500 '></div> */}

        <h4 className='text-xl font-medium text-gray-800 dark:text-gray-200'>
          {props.title}
        </h4>
      </div>
    </>
  );
}

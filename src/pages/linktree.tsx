import data from 'data.json';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';

import Nevercomex from '@/components/Global/nevercomex/copyright';
import Seo from '@/components/Global/Seo';
import LinkCard from '@/components/Linktree/LinkCard';
import Maincard from '@/components/Linktree/Maincard';
import Social from '@/components/Linktree/Social';

// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
<script
  async
  custom-element='amp-iframe'
  src='https://cdn.ampproject.org/v0/amp-iframe-0.1.js'
></script>;

export default function Linktree({
  className,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
  flechita?: boolean;
  className?: string;
}) {
  return (
    <>
      <Seo templateTitle='Linktree' />

      <div
        className={`${className} mx-auto flex w-full  flex-col items-center justify-center px-4 pt-12 text-center  `}
      >
        <figure className='   m-0 flex w-full justify-center py-0 px-[10px] text-center align-middle '>
          <Image
            className='box-content h-[150px] w-[150px] rounded-[150px] border-2 border-[#f2f2f2] object-cover   '
            src='/assets/IMG_8642.png'
            alt=''
            width={150}
            height={150}
          />
        </figure>

        <h1 className='mt-2 mb-2 text-3xl font-bold text-white'>{data.name}</h1>
        <div className=' text-bold mb-4 font-mono  text-xl text-green-600  shadow-lg shadow-green-800'>
          <Typewriter
            options={{
              strings: [
                '⠀Despierta, Elegido.',
                '⠀La Matrix te tiene.',
                '⠀Desliza hacia abajo.',
                '⠀*Toc Toc*',
                '⠀Abre Los Ojos.',
                '⠀Recupera tu masculinidad.',
                '⠀Vuelvete atractivo.',
                '⠀Supera a tu Ex.',
                '⠀Tomate la pildora roja.',
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
        {data.maincard.map((link) => (
          <Maincard key={link.href} {...link} />
        ))}
        <div
          className={` mb-3 flex  max-h-[0] w-full max-w-[100px]  items-center rounded-sm bg-gray-100 p-1 text-lg `}
        ></div>
        <h2 className='pb-2 text-white'>
          Empieza Aquí <br /> 👇
        </h2>
        {data.links.map((link) => (
          <LinkCard key={link.href} {...link} />
        ))}
        <div
          className={` mb-3 flex  max-h-[0] w-full max-w-[100px]  items-center rounded-sm bg-gray-100 p-1 text-lg `}
        ></div>
        {data.socials.map((link) => (
          <Social key={link.href} {...link} />
        ))}

        <div
          className={` mb-6  flex max-h-[0] w-full  max-w-[100px] items-center rounded-sm bg-gray-100 p-1 text-lg `}
        ></div>

        <Nevercomex classNames='py-8' divhidden={false} />
      </div>
    </>
  );
}

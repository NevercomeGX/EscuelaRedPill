import data from 'data.json';
import Image from 'next/image';
import Typewriter from 'typewriter-effect';
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
<script
  async
  custom-element='amp-iframe'
  src='https://cdn.ampproject.org/v0/amp-iframe-0.1.js'
></script>;
interface data {
  name: string;
  avatar: string;
  links: Link[];
  socials: Social[];
  flechita?: boolean;
}

interface Link {
  href: string;
  title: string;
  image?: string;
  message: string;
  space?: boolean;
  flechita?: boolean;
}

interface Social {
  href: string;
  title: string;
}

function Social({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className={`boxShadow flex  w-full items-center whitespace-normal rounded-sm p-1 transition-all hover:scale-105  ${
        title === 'Youtube'
          ? 'bg-[#DB4141]'
          : title === 'Tiktok'
          ? 'bg-[#fff]'
          : title === 'Instagram'
          ? 'bg-[#F55376]'
          : title === 'Telegram'
          ? 'bg-[#29B6F6]'
          : title === 'Tiktok'
          ? 'bg-slate-800'
          : 'bg-gray-100'
      }  mb-3 max-w-3xl`}
    >
      <div className='flex w-full items-center  justify-between text-center'>
        <div className=' relative flex h-12 flex-grow-0  items-center p-0 '>
          {image && (
            <Image
              className='inline-block w-[42px] min-w-[42px] rounded-md'
              alt={title}
              src={image}
              width={100}
              height={100}
            />
          )}
        </div>
        <div className='flex w-full flex-grow-[1] flex-col items-center justify-center '>
          <h1
            className={` font-bold   ${
              title === 'Tiktok' ? 'text-black' : 'text-white'
            }  text-lg `}
          >
            {title}
          </h1>
        </div>
        <div className=' relative flex h-12 flex-grow-0  items-center p-0 '>
          {image && (
            <Image
              className='inline-block w-[42px] min-w-[42px] rounded-md'
              alt={title}
              src={image}
              width={100}
              height={100}
            />
          )}
        </div>
      </div>
    </a>
  );
}

function Maincard({
  href,
  title,
  image,
  message,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
  flechita?: boolean;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='mb-3 flex  w-full max-w-3xl items-center rounded-sm bg-gray-100 shadow-lg shadow-green-800 transition-all hover:scale-105 '
    >
      <div className='flex w-full items-center  justify-between text-center'>
        <div className=' relative flex flex-grow-0  items-center p-2'>
          {image && (
            <Image
              className='rounded-md'
              alt={title}
              src={image}
              width={70}
              height={70}
            />
          )}
        </div>
        <div className='flex w-full flex-grow-[1] flex-col items-center justify-center p-2'>
          <h1 className=' text-lg  font-semibold text-gray-700 '>{title}</h1>
          <p className=' text-sm text-gray-700'>{message}</p>
        </div>
        <div className='relative flex h-10 flex-grow-0  items-center p-2'>
          {image && (
            <Image
              className='rounded-md'
              alt={title}
              src={image}
              width={70}
              height={70}
            />
          )}
        </div>
      </div>
    </a>
  );
}

function LinkCard({
  href,
  title,
  image,
  message,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
  flechita?: boolean;
}) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      className='mb-3 flex  w-full max-w-3xl items-center rounded-sm bg-gray-100 transition-all hover:scale-105   '
    >
      <div className='flex w-full items-center  justify-between text-center'>
        <div className=' relative flex flex-grow-0  items-center p-2'>
          {image && (
            <Image
              className='rounded-md'
              alt={title}
              src={image}
              width={70}
              height={70}
            />
          )}
        </div>
        <div className='flex w-full flex-grow-[1] flex-col items-center justify-center p-2'>
          <h1 className=' text-lg  font-semibold text-gray-700 '>{title}</h1>
          <p className=' text-sm text-gray-700'>{message}</p>
        </div>
        <div className='relative flex h-10 flex-grow-0  items-center p-2'>
          {image && (
            <Image
              className='rounded-md'
              alt={title}
              src={image}
              width={70}
              height={70}
            />
          )}
        </div>
      </div>
    </a>
  );
}

export default function Home({
  href,
  title,
  image,
}: {
  href: string;
  title: string;
  image?: string;
  message?: string;
  space?: boolean;
  flechita?: boolean;
}) {
  return (
    <>
      <body className='h-full bg-[#181818]'>
        <div className='mx-auto mt-12 flex w-full flex-col items-center justify-center px-4 text-center '>
          <Image
            priority
            className=' image-cropper border-4'
            alt={data.name}
            src={data.avatar}
            width={120}
            height={120}
          />
          <h1 className='mt-2 mb-2 text-3xl font-bold text-white'>
            {data.name}
          </h1>
          <p className=' text-bold mb-4 font-mono  text-xl text-green-600  shadow-lg shadow-green-800'>
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
          </p>
          {data.maincard.map((link) => (
            <Maincard key={link.href} {...link} />
          ))}
          <div
            className={` mb-3 flex  max-h-[0] w-full max-w-[100px]  items-center rounded-sm bg-gray-100 p-1 text-lg `}
          ></div>
          <h2 className='pb-2 text-white'>Empieza Aquí 👇</h2>
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
            className={` mb-3 flex  max-h-[0] w-full max-w-[100px]  items-center rounded-sm bg-gray-100 p-1 text-lg `}
          ></div>

          <a
            href={href}
            target='_blank'
            rel='noopener noreferrer'
            className='mb-3 flex  w-full max-w-3xl items-center rounded-sm bg-gray-100 transition-all hover:scale-105'
          >
            <div className='flex w-full items-center  justify-between text-center'>
              <div className=' relative flex flex-grow-0  items-center p-2'>
                {image && (
                  <Image
                    className='rounded-md'
                    alt={title}
                    src={image}
                    width={70}
                    height={70}
                  />
                )}
              </div>
              <div className='flex w-full flex-grow-[1] flex-col items-center justify-center p-2'>
                <h1 className=' text-lg  font-semibold text-gray-700 '>
                  MAS CURSOS COMPLETOS
                </h1>
                <p className=' text-sm text-gray-700'>RELACIONES DE PAREJA</p>
              </div>

              <div className='relative flex h-10 flex-grow-0  items-center p-2'>
                {image && (
                  <Image
                    className='rounded-md'
                    alt={title}
                    src={image}
                    width={70}
                    height={70}
                  />
                )}
              </div>
            </div>
          </a>
          <iframe
            id='embedPlayer'
            src='https://embed.podcasts.apple.com/us/podcast/la-verdad-sobre-las-mujeres-escuela-redpill/id1667721683?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto'
            height='450px'
          ></iframe>
        </div>
      </body>
    </>
  );
}

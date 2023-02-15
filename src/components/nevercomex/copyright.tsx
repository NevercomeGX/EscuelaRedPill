import Image from 'next/image';

const nevercomex = () => {
  return (
    <div className=''>
      <button className='flex flex-row items-center justify-center gap-2 rounded-md bg-black py-1 px-4 font-bold text-white hover:bg-gray-900 hover:text-white'>
        <div className='flex w-8 items-start justify-center '>
          {' '}
          <Image
            src='/nevercomex/android-chrome-384x384.png'
            layout='responsive'
            alt='Powered by Vercel'
            width='32'
            height='32'
          />
        </div>

        <div className='border-l pl-4 font-mono '>Powered by NX</div>
      </button>
      <a
        href='https://vercel.com/?utm_source=web3templates&utm_campaign=oss'
        target='_blank'
        rel='noopener noreferrer'
        className='relative block w-44'
      ></a>
    </div>
  );
};

export default nevercomex;

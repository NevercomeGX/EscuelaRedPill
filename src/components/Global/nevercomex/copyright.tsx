import Image from 'next/image';
import Link from 'next/link';

interface NevercomexProps {
  classNames?: string;
  divhidden?: boolean;
}

const Nevercomex = ({ classNames, divhidden }: NevercomexProps) => {
  return (
    <div hidden={divhidden} className={`${classNames}`}>
      <button className='flex flex-row items-center justify-center gap-2 rounded-md bg-black py-1 px-4 font-bold text-white hover:bg-red-800   hover:text-white hover:ease-in-out'>
        <Link
          href='https://nevercomex.com'
          className='flex items-center justify-center gap-3'
        >
          <span className=' w-8  '>
            <Image
              src='/nevercomex/android-chrome-384x384.png'
              layout='responsive'
              alt='Powered by Vercel'
              width='32'
              height='32'
            />
          </span>

          <p className='border-l pl-4 font-mono '>Powered by NX ©</p>
        </Link>
      </button>
    </div>
  );
};

export default Nevercomex;

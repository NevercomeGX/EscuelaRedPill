import Link from 'next/link';

import Footer from '../footer/footer';

const Agendar = () => {
  return (
    <>
      <div className='relative mr-auto  ml-auto flex max-w-7xl flex-col items-center justify-center lg:h-screen '>
        <div className='flex flex-col items-center justify-center gap-4 p-3 pt-10'>
          <h2 className='text-center'>
            {' '}
            SI TIENES UN PROBLEMA Y DESEAS ATENDERLO DE MANERA MAS PERSONALIZADA
            RESERVA UNA ASESORIA PERSONALIZADA CON JUAN
          </h2>
          <Link href='/consultas'>
            <button
              type='submit'
              className='my-4 rounded-md border border-[#212121] bg-[#c70039] px-8 py-2 font-bold lg:w-96'
            >
              AGENDA TU LLAMADA AHORA
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Agendar;

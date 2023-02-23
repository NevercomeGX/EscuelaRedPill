import Container from '@/components/Infoproducto/container';

const Precios = () => {
  return (
    <Container className='w-full'>
      <section className='bg-[#212121] px-6 text-white '>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='mt-3 max-w-xl text-3xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight'>
            Precios
          </h1>

          <p className='mt-4 mb-8 text-center text-lg '>
            Taller valorado segun expertos
          </p>
          <p className='mb-8 text-center text-5xl text-red-600 line-through'>
            497 USD
          </p>
          <p className='mb-8 text-center text-lg '>
            Para ti por precio del primer lanzamiento{' '}
          </p>
          <p className='mb-4  text-center text-5xl text-green-500'>159 USD</p>

          <p className='bg max-w-xl pb-6 text-center text-2xl text-green-500 underline'>
            Inscribete con un 32% de descuento.
          </p>
          <div className='mb-8 '>
            <p className='bg max-w-xl text-center text-lg text-white'>
              ¡Este valor solo estara para tiempo limitado y es especial para la
              primera edición del ABC de la COMUNICACIÓN!
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0'>
          <a
            href='https://hotmart.com/es/marketplace/productos/el-abc-de-la-comunicacion/B79967778G'
            target='_blank'
            rel='noopener noreferrer'
          >
            <button className=' mt-4 mb-12 rounded-full bg-green-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-green-800 transition-all hover:scale-105 lg:w-[36rem] '>
              ¡NO ESPERES MAS E INSCRIBETE AHORA!
            </button>
          </a>
        </div>
      </section>
    </Container>
  );
};

export default Precios;

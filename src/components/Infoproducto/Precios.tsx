import Container from '@/components/Infoproducto/container';

const Precios = () => {
  return (
    <Container>
      <section className='bg-[#212121] pt-10'>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='text-center text-3xl font-bold text-white'>Precios</h1>
          <div className='my-2 mb-8 w-[22%] rounded-t-full border-b-4 border-white '></div>
          <p className='mt-4 mb-8 text-center text-lg text-red-600'>
            Taller valorado segun expertos
          </p>
          <p className='mb-8 text-center text-5xl text-red-600'>497 USD</p>
          <p className='mb-8 text-center text-lg text-green-500'>
            Para ti por precio del primer lanzamiento{' '}
          </p>
          <p className='mb-8 text-center text-5xl text-green-500'>157 USD</p>
          <div className='mb-8 bg-red-600'>
            <p className='bg max-w-xl text-center text-lg text-white'>
              ¡Este valor solo estara para tiempo limitado y es especial para la
              primera edición del ABC de la COMUNICACIÓN
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Precios;

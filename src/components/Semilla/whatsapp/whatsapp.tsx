import Container from '../container';

export default function Video() {
  return (
    <Container>
      <div className=' mx-auto w-4/5  max-w-3xl overflow-hidden lg:mb-20'>
        <div className='aspect-w-16 aspect-h-9 relative cursor-pointer  '>
          <a className='flex items-center  justify-center p-2 text-2xl font-medium text-black dark:text-gray-100'>
            <span>
              <img
                src='/assets/whatsapp.png'
                alt='N'
                width='32'
                height='32'
                className='w-32'
              />
            </span>
          </a>
        </div>
        <button
          type='submit'
          className='my-4 rounded-md border border-[#212121] bg-[#c70039] px-8 py-2 font-bold lg:w-96'
        >
          UNETE AL GRUPO
        </button>
        <p className='text-white'>
          * Si desde el celular al hacer click no se descarga, deja presionado y
          dale abrir nueva ventana
        </p>
      </div>
    </Container>
  );
}

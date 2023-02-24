import Container from './container';

export default function Hero() {
  return (
    <>
      <Container className='flex  '>
        <div className='flex w-full items-center justify-center pt-10  '>
          <div className='mb-8 max-w-4xl justify-center text-center'>
            <p className='mx-8 py-2 text-lg leading-normal text-gray-500 dark:text-gray-300 lg:text-xl xl:text-2xl'>
              Convierte en un experto en habilidades sociales, desarrolla
              inteligencia emocional y mejora tu autoestima para que puedas
              expresarte con confianza en cualquier situación social y laboral.
            </p>

            <div className='flex flex-col items-center justify-center space-y-3 sm:flex-row sm:items-center sm:space-x-4 sm:space-y-0'>
              <a
                href='https://hotmart.com/es/marketplace/productos/el-abc-de-la-comunicacion/B79967778G'
                target='_blank'
                rel='noopener noreferrer'
              >
                <button className=' my-8 w-80 rounded-md bg-green-600 py-4 text-center text-lg font-bold text-white shadow-lg shadow-green-800 transition-all hover:scale-105 md:w-96 '>
                  ¡INSCRIBETE AHORA!
                </button>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

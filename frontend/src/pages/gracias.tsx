import Seo from '@/components/Global/Seo';
import NavBar from '@/components/Semilla/NavigationBar/NavBar';

import Agendar from '../components/Semilla/Contenido/Agendar';
import Video from '../components/Semilla/Hero/video';
import Whatsapp from '../components/Semilla/whatsapp/whatsapp';

const ContactForm = () => {
  return (
    <>
      <Seo templateTitle='Gracias por confirmar tu correo' />
      <NavBar />
      <section className='w-full'>
        <div className='flex  flex-col items-center justify-center bg-black/70 pt-[10rem] pb-[2rem]  text-center lg:flex-row '>
          <Video video='https://www.youtube.com/embed/2x_Ot2zwYJQ' />
          <Whatsapp />
        </div>
      </section>

      <Agendar />
    </>
  );
};

export default ContactForm;

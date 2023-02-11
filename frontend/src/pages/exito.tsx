import NavBar from '@/components/Consulting/NavigationBar/NavBar';

const ContactForm = () => {
  return (
    <main>
      <NavBar />
      <div className='mb-12 flex   h-screen items-center justify-center bg-black/70 pt-16  text-center '>
        <div className=''>
          <video
            autoPlay
            loop
            muted
            playsInline
            className='pointer-events: none; h-[800px] w-[800px]'
          >
            {' '}
            <source
              src='https://walter-riso.com/wp-content/themes/Writer-Custom-Theme-master/assets/video/BannerWalterRiso.mp4'
              type='video/mp4'
            />
          </video>
        </div>

        <div className='z-[2] mt-[-10rem] flex flex-col items-center justify-center gap-6 p-5 pt-32 text-white'>
          <div className='text-center'>
            <h2 className='text-5xl font-bold'>Lorem, ipsum.</h2>
            <p className='py-5 text-xl'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
              odio nisi voluptate recusandae magni vitae!
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </main>
  );
};

export default ContactForm;

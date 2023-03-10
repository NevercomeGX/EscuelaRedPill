import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

const Footer = dynamic(() => import('../components/Semilla/footer/footer'));
import Seo from '@/components/Global/Seo';
import Contenido from '@/components/Semilla/Contenido/Contenido';
import Hero from '@/components/Semilla/Hero/Hero';
import NavBar from '@/components/Semilla/NavigationBar/NavBar';

const Home: NextPage = () => {
  return (
    <>
      <Seo />

      <NavBar />
      <Hero />
      {/* <Slider slides={SliderData} /> */}
      <Contenido />
      <Footer />
    </>
  );
};

export default Home;

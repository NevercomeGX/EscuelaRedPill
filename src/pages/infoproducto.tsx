import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('@/components/Infoproducto/NavBar'));
const Footer = dynamic(() => import('../components/Global/footer/footer'));

import { benefitOne } from '../components/Infoproducto/data';
import Hero from '../components/Infoproducto/hero';
import SectionTitle from '../components/Infoproducto/sectionTitle';

const Video = dynamic(() => import('../components/Infoproducto/video'));
const Benefits = dynamic(() => import('../components/Infoproducto/benefits'));
const Testimonials = dynamic(
  () => import('../components/Infoproducto/testimonials')
);
const Cta = dynamic(() => import('../components/Infoproducto/cta'));
const Faq = dynamic(() => import('../components/Infoproducto/faq'));
const Garantia = dynamic(() => import('../components/Infoproducto/garantia'));
const Mainbenefits = dynamic(
  () => import('../components/Infoproducto/mainbenefits')
);
import Seo from '../components/Global/Seo';
const PopupWidget = dynamic(
  () => import('../components/Infoproducto/popupWidget')
);

const PopupWidgetTop = dynamic(
  () => import('../components/Infoproducto/popupWidgetTop')
);

import Precios from '../components/Infoproducto/Precios';

export default function Home() {
  return (
    <>
      <Seo templateTitle='ABC DE LA COMUNICACIÓN' />
      <Navbar />
      <Hero />
      <Video />
      <Precios />
      <Mainbenefits />
      <SectionTitle
        align=''
        title='Bonos!'
        lista={true}
        listado={[
          '⦁ Dos mentores expertos al precio de uno.',
          '⦁ Acceso al Ebook “Las 3 claves para mantener una relación a largo plazo”.',
          '⦁ Acceso a contenidos premium y contenidos anticipados de la Escuela Red Pill.',
          '⦁ Acceso al grupo de Whats App VIP donde responderemos todas tus dudas.',
          '⦁ Descuento por oferta única de primer lanzamiento de producto.',
        ]}
      ></SectionTitle>
      <Garantia />

      <Benefits data={benefitOne} />
      <Testimonials />
      {/* <SectionTitle align='' pretitle='FAQ' title='Frequently Asked Questions'>
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle> */}
      {/* <Faq /> */}
      {/* <Cta /> */}
      <Footer />
      <PopupWidget />
      <PopupWidgetTop />
    </>
  );
}

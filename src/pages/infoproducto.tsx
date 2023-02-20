import dynamic from 'next/dynamic';

import NavBar from '../components/Infoproducto/NavBar';
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
      <NavBar />
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
      {/* <SectionTitle
        className='bg-[#212121] '
        Textcolor='text-white'
        align=''
        pretitle=''
        title=' GARANTIA'
      >
        ¡No te preocupes! Si no estas a gusto recuerda que contamos con una
        garantía de 7 días para "ABC de la Comunicación", puedes hacerlo
        fácilmente enviando un correo electrónico al equipo de la Escuela Red
        Pill. En el correo electrónico, asegúrate de incluir tu nombre y
        dirección de correo electrónico asociada con la compra, la fecha de la
        compra, la razón por la que deseas una devolución y confirma que
        entiendes los términos y condiciones de la garantía de devolución de 7
        días. El equipo de soporte del curso procesará tu solicitud de
        devolución y te enviará una confirmación una vez que se haya realizado
        el reembolso. Por supuesto, es posible que debas proporcionar
        información adicional para completar el proceso de devolución.
      </SectionTitle> */}

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

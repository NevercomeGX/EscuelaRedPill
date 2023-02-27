import dynamic from 'next/dynamic';
import React from 'react';
import '@fontsource/raleway';
const PopupWidget = dynamic(
  () => import('../components/Infoproducto/popupWidget')
);

const Footer = dynamic(() => import('../components/Global/footer/footer'));

import Content from '@/components/Consultas/Content';
import Navbar from '@/components/Consultas/Navbar/Navbar';
import Seo from '@/components/Global/Seo';

export default function Consulting() {
  // useCalendlyEventListener({
  //   onProfilePageViewed: () => console.log('onProfilePageViewed'),
  //   onDateAndTimeSelected: () => console.log('onDateAndTimeSelected'),
  //   onEventTypeViewed: () => console.log('onEventTypeViewed'),
  //   onEventScheduled: (e) => console.log(e.data.payload),
  // });

  return (
    <>
      <Seo templateTitle='Consultas' />
      <Navbar />
      <Content />
      <Footer />
      <PopupWidget />
    </>
  );
}

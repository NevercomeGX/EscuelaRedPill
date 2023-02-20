import React from 'react';
import '@fontsource/raleway';

import Content from '@/components/Consultas/Content';
import Navbar from '@/components/Consultas/Navbar/Navbar';
import Seo from '@/components/Global/Seo';
import Footer from '@/components/Semilla/footer/footer';

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
    </>
  );
}

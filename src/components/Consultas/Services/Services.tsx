import { faClock, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { PopupButton } from 'react-calendly';
import '@fontsource/raleway';

const Services = () => {
  return (
    <>
      {' '}
      <section className='aboutme'>
        <div className='row'>
          <figure className=' relative float-left m-0 min-h-[1px] w-1/12 px-[15px] leading-[0px]'></figure>
          <article className=' relative float-left min-h-[1px] w-11/12 px-[15px] '>
            <h3 className='m-0 px-0 pt-0 pb-[15px] text-[16px] font-[700] leading-[18px] text-[#0c1827] '>
              SERVICIOS
            </h3>
            <div className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
              <div className='pb-[15px] text-[#33bfb3]'>
                <p>
                  <strong>
                    Asesoría y consultoría - SESIÓN INDIVIDUAL (1 persona)
                  </strong>
                </p>
              </div>
              <div className='pb-[15px] text-[#4d4c4c]'>
                <strong>
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    style={{ fontSize: 15, color: '#4d4c4c' }}
                  />{' '}
                  $59.99 USD{' '}
                </strong>
                <strong>
                  <FontAwesomeIcon
                    icon={faClock}
                    style={{ fontSize: 15, color: '#4d4c4c' }}
                  />{' '}
                  60 minutos
                </strong>
              </div>
              Esta es una sesión de asesoría individual por google meet, discord
              (o Whatsapp alternativamente) de 60 minutos con Juan Lopez, en la
              que se brindará asesoría y apoyo en temas relacionados con la
              salud emocional, habilidades sociales, análisis de relación
              sentimental y psicoterapia.
            </div>
            <br />
            <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
              ESPECIALIDADES: Desarrollo del autoestima, inteligencia emocional
              y resolución de conflictos en relaciones, mejora de la
              comunicación en pareja, superación de rupturas amorosas,
              definición de sentimientos y emociones, mejora de la atracción en
              una relación, entendimiento de las dinámicas en las relaciones de
              pareja, y desarrollo de habilidades sociales y de citas.
            </p>
            <br />
            <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
              Si estás enfrentando problemas en tus relaciones o en tu vida
              emocional, no dudes en reservar una sesión con Juan Lopez. Una vez
              realizada la reserva, recibirás un email con los detalles para
              acceder a la sesión. Al final de la sesión, Juan Lopez te brindará
              un plan de acción personalizado para ayudarte a superar tus
              problemas y mejorar en tus relaciones.
            </p>
            <br />
            <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
              *NOTA: Este servicio está mas orientado al counseling que a la
              psicoterapia. Las sesiones de asesoría de Juan Lopez están
              enfocadas en brindar apoyo y acompañamiento emocional y en mejorar
              tus relaciones interpersonales, no en tratar problemas de salud
              mental graves.
            </p>
            <br />

            <div className='App'>
              {typeof window !== 'undefined' && (
                <PopupButton
                  url='https://calendly.com/escuelaredpill/asesoria'
                  rootElement={document.getElementById('__next') as HTMLElement}
                  className='my-4 h-16 w-64 justify-center overflow-y-hidden rounded-md border border-[#212121] bg-[#33bfb3] px-8 py-2 text-center text-[22px] font-bold text-white hover:bg-[#33bfc9]'
                  text='RESERVA AHORA'
                />
              )}
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default Services;

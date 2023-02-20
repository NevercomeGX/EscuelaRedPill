import {
  faInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Imagen from 'next/image';
import React from 'react';
import '@fontsource/raleway';

const Sidepanel = () => {
  return (
    <>
      {' '}
      <aside className=' relative float-left  hidden min-h-[1px] w-1/4 pl-[15px] pr-[15px] md:block lg:block '>
        <div className=' relative z-[9] m-0 bg-[#f2f2f2] px-[10px] pt-[125px] pb-[10px] '>
          <figure className=' absolute left-0 top-[-105px] m-0 flex w-full justify-center py-0 px-[10px] text-center align-middle '>
            <Imagen
              className='box-content h-[200px] w-[200px] rounded-[150px] border-4 border-[#f2f2f2] object-cover   '
              src='/assets/IMG_8642.png'
              alt=''
              height={200}
              width={200}
            />
          </figure>

          <figure className='left-0 px-0 py-[12px] text-center'>
            <a
              href='https://www.youtube.com/@EscuelaRedPill'
              className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
            >
              <FontAwesomeIcon
                icon={faYoutube}
                style={{ fontSize: 30, color: '#22a3fe' }}
              />
            </a>
            <a
              href='https://www.tiktok.com/@escuelaredpill?lang=en'
              className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
            >
              <FontAwesomeIcon
                icon={faTiktok}
                style={{ fontSize: 30, color: '#22a3fe' }}
              />
            </a>
            <a
              href='https://www.instagram.com/escuelaredpill/'
              className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
            >
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: 30, color: '#22a3fe' }}
              />
            </a>

            <a
              href='https://alpha.drjuanlopez.com/consultas'
              className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
            >
              <FontAwesomeIcon
                icon={faGlobe}
                style={{ fontSize: 30, color: '#22a3fe' }}
              />
            </a>

            <div className='clearfix'></div>
          </figure>
          <figure>
            <br />
          </figure>
          <div className=' m-0 break-words py-0 pt-0 pr-0 pb-[25px] pl-[7px] text-[14px] text-[#0c1827] '>
            <p>
              Como consultor en relaciones interpersonales, habilidades sociales
              y psicólogo experimentado, te ofrezco una hora de sesión para
              ayudarte a alcanzar tus objetivos y superar tus desafíos.
              <br />
              <br />
              Obtén la guía experta que necesitas para crecer y prosperar.
              <br />
              <br />
              Realiza tu pago fácilmente a través de PayPal o tu cuenta
              bancaria, y accede a la sesión en línea a través de Google Meet.
              No esperes más, invierte en ti mismo y empieza a tomar el control
              de tu vida conmigo.
            </p>
            <br />
            <p>
              Link de reserva: <br />
              <a className=' underline' href='' target='' rel=''>
                <a href='https://www.paypal.com/paypalme/juxnsubs'>
                  https://www.paypal.com/paypalme/juxnsubs'
                </a>
              </a>
            </p>

            <div>
              <a className=' underline' href='' target='' rel=''></a>
            </div>
            <div>
              <br />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidepanel;

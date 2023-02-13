import {
  faInstagram,
  faTiktok,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faClock,
  faGlobe,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Seo from '@/components/Global/Seo';
import NavBar from '@/components/Semilla/NavigationBar/NavBar';

export default function Consulting() {
  return (
    <>
      <Seo />
      <section>
        <div className=' relative m-0 pb-32 leading-none md:pb-64 '>
          <NavBar />
        </div>

        {/* content */}
        <div className=' container ml-auto mr-auto flex flex-col pr-[15px] pl-[15px] lg:w-[1170px] lg:flex-row'>
          <div className='row'>
            <aside className=' relative float-left  hidden min-h-[1px] w-1/4 pl-[15px] pr-[15px] md:block lg:block '>
              {/* sidebar */}
              <div className=' relative z-[9] m-0 bg-[#f2f2f2] px-[10px] pt-[125px] pb-[10px] '>
                <figure className=' absolute left-0 top-[-105px] m-0 flex w-full justify-center py-0 px-[10px] text-center align-middle '>
                  <img
                    className='box-content h-[200px] w-[200px] rounded-[150px] border-4 border-[#f2f2f2] object-cover   '
                    src='/assets/IMG_8642.png'
                    alt=''
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
                {/*  T arriba | R derecha | B abajo |  L izquierda 
									padding: 5px 1em 0 2em; */}
                <h5 className=' m-0 break-words py-0 pt-0 pr-0 pb-[25px] pl-[7px] text-[14px] text-[#0c1827] '>
                  <div>
                    Como consultor en relaciones interpersonales, habilidades
                    sociales y psicólogo experimentado, te ofrezco una hora de
                    sesión para ayudarte a alcanzar tus objetivos y superar tus
                    desafíos.
                    <br />
                    <br />
                    Obtén la guía experta que necesitas para crecer y prosperar.
                    <br />
                    <br />
                    Realiza tu pago fácilmente a través de PayPal o tu cuenta
                    bancaria, y accede a la sesión en línea a través de Google
                    Meet. No esperes más, invierte en ti mismo y empieza a tomar
                    el control de tu vida conmigo.
                  </div>
                  <div>
                    <br />
                  </div>
                  <div>
                    Link de reserva: <br />
                    <a className=' underline' href='' target='' rel=''>
                      <span>
                        <a href='https://www.paypal.com/paypalme/juxnsubs'>
                          https://www.paypal.com/paypalme/juxnsubs'
                        </a>
                      </span>
                    </a>
                  </div>

                  <div>
                    <a className=' underline' href='' target='' rel=''></a>
                  </div>
                  <div>
                    <br />
                  </div>
                </h5>
              </div>
            </aside>

            <aside className=' relative float-left min-h-[1px] w-full  px-[15px] md:w-3/4 lg:w-3/4'>
              {/* main content */}
              <div className=' relative m-0 bg-[#fafafa] p-0'>
                {/*title*/}
                <div className='relative z-[9] mt-0 mr-0 mb-0 ml-[-30px] rounded-br-sm rounded-bl-sm p-4 px-[40px] shadow md:pt-[15px] md:pr-[15px] md:pb-[15px] md:pl-[30px]  lg:pt-[15px] lg:pr-[15px] lg:pb-[15px] lg:pl-[30px]'>
                  <div className=' row'>
                    <div className=' min-[1px] relative float-left contents w-full pl-[15px] pr-[15px] after:clear-both '>
                      <h2 className=' m-0 break-words px-0 pt-0 pb-[10px] text-[35px] font-[700] leading-[37px] tracking-normal text-[#0c1827] '>
                        Juan Lopez
                      </h2>
                      <p className=' m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
                        <div>
                          Consultor en relaciones interpersonales, habilidades
                          sociales y psicólogo.
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
                <div className='aboutme'>
                  <div className='row'>
                    <figure className=' relative float-left  m-0 min-h-[1px] w-1/12 leading-[0px] lg:px-[15px]'>
                      <svg></svg>
                    </figure>
                    <article className=' relative float-left min-h-[1px] w-11/12 px-[15px] '>
                      <h3 className='m-0 px-0 pt-0 pb-[6px] text-[16px] font-[700] leading-[18px] text-[#0c1827] '>
                        Acerca de mi
                      </h3>
                      <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
                        <div>
                          Juan Lopez es un psicólogo profesional y consultor
                          especializado en habilidades sociales, relaciones
                          interpersonales y de pareja. Nació en Colombia y lleva
                          más de 10 años estudiando y trabajando en este campo.
                        </div>
                        <br />
                        <div>
                          Su interés por la psicología y las relaciones surgió
                          después de una fuerte ruptura sentimental que lo llevó
                          a investigar sobre la psicología y la dinámica de las
                          relaciones de pareja. A pesar de los éxitos iniciales,
                          también experimentó decepciones y desafíos en sus
                          relaciones, lo que lo llevó a profundizar aún más en
                          el campo de la inteligencia emocional, las habilidades
                          sociales, relaciones de pareja y psicología
                          evolucionista.
                          {/* <strong>
                            eaque nihil porro. Consequuntur ullam nisi repellat
                          </strong> */}
                        </div>
                        <div>
                          <br />
                        </div>
                        {/* <strong>Lorem:</strong> ipsum dolor sit amet Como */}
                        psicólogo y consultor, Juan se ha especializado en
                        ayudar a los hombres a desarrollar sus habilidades
                        sociales, mejorar su autoconcepto y autoestima, y
                        mejorar la calidad de sus relaciones a través de la
                        combinación de su formación en psicología y su
                        experiencia personal. Con su amplio conocimiento y
                        experiencia, Juan ha atendido a cientos de casos y ha
                        ayudado a muchos hombres a mejorar sus vidas y sus
                        relaciones.
                        {/* <strong>cupiditate earum.</strong> */}
                      </p>
                    </article>
                  </div>
                </div>

                <div>
                  <div className='aboutme'>
                    <div className='row'>
                      <figure className=' relative float-left m-0 min-h-[1px] w-1/12 px-[15px] leading-[0px]'></figure>
                      <article className=' relative float-left min-h-[1px] w-11/12 px-[15px] '>
                        <a href='https://www.paypal.com/paypalme/juxnsubs'>
                          <button className='my-4 justify-center rounded-md border border-[#212121] bg-[#33bfb3] px-8 py-2 text-center font-bold text-white hover:bg-[#33bfc9]'>
                            Link de reserva
                          </button>
                        </a>
                        <h3 className='m-0 px-0 pt-0 pb-[15px] text-[16px] font-[700] leading-[18px] text-[#0c1827] '>
                          SERVICIOS
                        </h3>
                        <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
                          <div className='pb-[15px] text-[#33bfb3]'>
                            <strong>
                              Asesoría y consultoría - SESIÓN INDIVIDUAL (1
                              persona)
                            </strong>
                          </div>
                          <div className='pb-[15px] text-[#4d4c4c]'>
                            <strong>
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                style={{ fontSize: 15, color: '#4d4c4c' }}
                              />{' '}
                              $59.00 USD{' '}
                            </strong>
                            <strong>
                              <FontAwesomeIcon
                                icon={faClock}
                                style={{ fontSize: 15, color: '#4d4c4c' }}
                              />{' '}
                              60 minutos
                            </strong>
                          </div>
                          Esta es una sesión de asesoría individual por google
                          meet, discord (o Whatsapp alternativamente) de 60
                          minutos con Juan Lopez, en la que se brindará asesoría
                          y apoyo en temas relacionados con la salud emocional,
                          habilidades sociales, análisis de relación sentimental
                          y psicoterapia.
                          {/* <strong>cupiditate earum.</strong> */}
                        </p>
                        <br />
                        <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
                          ESPECIALIDADES: Desarrollo del autoestima,
                          inteligencia emocional y resolución de conflictos en
                          relaciones, mejora de la comunicación en pareja,
                          superación de rupturas amorosas, definición de
                          sentimientos y emociones, mejora de la atracción en
                          una relación, entendimiento de las dinámicas en las
                          relaciones de pareja, y desarrollo de habilidades
                          sociales y de citas.
                        </p>
                        <br />
                        <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
                          Si estás enfrentando problemas en tus relaciones o en
                          tu vida emocional, no dudes en reservar una sesión con
                          Juan Lopez. Una vez realizada la reserva, recibirás un
                          email con los detalles para acceder a la sesión. Al
                          final de la sesión, Juan Lopez te brindará un plan de
                          acción personalizado para ayudarte a superar tus
                          problemas y mejorar en tus relaciones.
                        </p>
                        <br />
                        <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
                          *NOTA: Este servicio está mas orientado al counseling
                          que a la psicoterapia. Las sesiones de asesoría de
                          Juan Lopez están enfocadas en brindar apoyo y
                          acompañamiento emocional y en mejorar tus relaciones
                          interpersonales, no en tratar problemas de salud
                          mental graves.
                        </p>
                        <br />

                        <button className='my-4 justify-center rounded-md border border-[#212121] bg-[#33bfb3] px-8 py-2 text-center font-bold text-white hover:bg-[#33bfc9]'>
                          Registrate
                        </button>
                      </article>
                    </div>
                  </div>
                </div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div className='absolute left-[-30px] top-0 h-full w-[30px] bg-[#fafafa] '></div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}

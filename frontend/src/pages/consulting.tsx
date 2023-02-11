import {
  faInstagram,
  faTiktok,
  faTwitch,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faClock,
  faGlobe,
  faShoppingCart,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';

export default function Consulting() {
  return (
    <>
      <section>
        <div className=' relative m-0 p-0 leading-none '>
          <Image
            className='align-middle '
            src='/assets/banner.jpg'
            alt=''
            height={300}
            width={1920}
            style={{ height: '300px', width: '100%', objectFit: 'none' }}
          />
        </div>

        {/* content */}
        <div className=' container ml-auto mr-auto pr-[15px] pl-[15px] lg:w-[1170px] '>
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
                    href='https://www.facebook.com/andresvernazza.social'
                    className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
                  >
                    <FontAwesomeIcon
                      icon={faYoutube}
                      style={{ fontSize: 30, color: '#22a3fe' }}
                    />
                  </a>
                  <a
                    href='https://twitter.com/Andres_vernazza'
                    className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
                  >
                    <FontAwesomeIcon
                      icon={faTiktok}
                      style={{ fontSize: 30, color: '#22a3fe' }}
                    />
                  </a>
                  <a
                    href='https://www.instagram.com/andresvernazza/'
                    className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      style={{ fontSize: 30, color: '#22a3fe' }}
                    />
                  </a>

                  <a
                    href='https://www.linkedin.com/in/andresvernazza/'
                    className=' float-none mx-[5px] mt-0 mb-[5px] inline-block '
                  >
                    <FontAwesomeIcon
                      icon={faTwitch}
                      style={{ fontSize: 30, color: '#22a3fe' }}
                    />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/andresvernazza/'
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique, veniam. Ad esse voluptate non voluptates ratione
                    ex similique, architecto pariatur libero impedit commodi
                    blanditiis et numquam. Optio deserunt provident voluptates!
                  </div>
                  <div>
                    <br />
                  </div>
                  <div>
                    WhatsApp:
                    <a className=' underline' href='' target='' rel=''>
                      <span>
                        <strong>+1 417 658 4414</strong>
                      </span>
                    </a>
                  </div>

                  <div>
                    <a className=' underline' href='' target='' rel=''></a>
                  </div>
                  <div>
                    <br />
                  </div>
                  <div>Si puedes soñarlo, puedes lograrlo</div>
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
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Delectus, repellat!
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
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Provident voluptatem aliquid commodi,
                          <strong>
                            eaque nihil porro. Consequuntur ullam nisi repellat
                          </strong>
                        </div>
                        <div>
                          <br />
                        </div>
                        <strong>Lorem:</strong> ipsum dolor sit amet
                        consectetur, adipisicing elit. Facilis similique,
                        distinctio quis pariatur nemo aut voluptatum consequatur
                        a, dignissimos rerum recusandae, eius exercitationem
                        modi nihil laborum alias eligendi cum sapiente? Nulla
                        minus quis praesentium iusto consequatur! Suscipit rerum
                        repellat exercitationem perspiciatis reprehenderit,
                        doloribus possimus harum vero repudiandae maxime
                        recusandae, eveniet, dolore beatae? Nobis quae porro,
                        adipisci reprehenderit voluptate expedita a. Facere qui
                        laudantium, consequatur delectus provident quibusdam
                        aliquam ipsa nostrum. Quos facilis, vitae sapiente
                        voluptatem voluptatibus maxime quae ea eveniet,
                        repellendus eaque repellat id quo ullam quod placeat,
                        quam asperiores. Modi expedita numquam voluptatum fugiat
                        perferendis eos quod beatae voluptas temporibus mollitia
                        ipsam dolores, veritatis fuga, fugit libero nam iste
                        ratione nemo similique? Possimus maiores incidunt harum
                        sequi blanditiis obcaecati. Reiciendis eum facere nihil
                        temporibus repellendus quas nostrum voluptatum ea eius
                        sequi beatae nemo, quae possimus, provident illo
                        veritatis assumenda officiis? Et cupiditate maxime ullam
                        laborum at. Error, atque molestias. Magni est suscipit
                        omnis sapiente quo illo harum alias laboriosam quae
                        atque, consectetur, eaque provident dicta impedit
                        exercitationem reprehenderit culpa dolore, consequuntur
                        ullam nulla veritatis autem? Modi ipsa
                        <strong>cupiditate earum.</strong>
                      </p>
                    </article>
                  </div>
                </div>

                <div>
                  <div className='aboutme'>
                    <div className='row'>
                      <figure className=' relative float-left m-0 min-h-[1px] w-1/12 px-[15px] leading-[0px]'>
                        <svg></svg>
                      </figure>
                      <article className=' relative float-left min-h-[1px] w-11/12 px-[15px] '>
                        <h3 className='m-0 px-0 pt-0 pb-[15px] text-[16px] font-[700] leading-[18px] text-[#0c1827] '>
                          SERVICIOS
                        </h3>
                        <p className='m-0 pt-0 text-[18px] font-[500] leading-[20px] text-[#0c1827] '>
                          <div className='pb-[15px] text-[#33bfb3]'>
                            <strong>
                              Asesoría Emocional y de Relaciones Humanas -
                              SESIÓN INDIVIDUAL (1 persona)
                            </strong>
                          </div>
                          <div className='pb-[15px] text-[#4d4c4c]'>
                            <strong>
                              <FontAwesomeIcon
                                icon={faShoppingCart}
                                style={{ fontSize: 15, color: '#4d4c4c' }}
                              />{' '}
                              $120.00 USD{' '}
                            </strong>
                            <strong>
                              <FontAwesomeIcon
                                icon={faClock}
                                style={{ fontSize: 15, color: '#4d4c4c' }}
                              />{' '}
                              50 minutos
                            </strong>
                          </div>
                          <strong>Lorem:</strong> ipsum dolor sit amet
                          consectetur, adipisicing elit. Facilis similique,
                          distinctio quis pariatur nemo aut voluptatum
                          consequatur a, dignissimos rerum recusandae, eius
                          exercitationem modi nihil laborum alias eligendi cum
                          sapiente? Nulla minus quis praesentium iusto
                          consequatur! Suscipit rerum repellat exercitationem
                          perspiciatis reprehenderit, doloribus possimus harum
                          vero repudiandae maxime recusandae, eveniet, dolore
                          beatae? Nobis quae porro, adipisci reprehenderit
                          voluptate expedita a. Facere qui laudantium,
                          consequatur delectus provident quibusdam aliquam ipsa
                          nostrum. Quos facilis, vitae sapiente voluptatem
                          voluptatibus maxime quae ea eveniet, repellendus eaque
                          repellat id quo ullam quod placeat, quam asperiores.
                          Modi expedita numquam voluptatum fugiat perferendis
                          eos quod beatae voluptas temporibus mollitia ipsam
                          dolores, veritatis fuga, fugit libero nam iste ratione
                          nemo similique? Possimus maiores incidunt harum sequi
                          blanditiis obcaecati. Reiciendis eum facere nihil
                          temporibus repellendus quas nostrum voluptatum ea eius
                          sequi beatae nemo, quae possimus, provident illo
                          veritatis assumenda officiis? Et cupiditate maxime
                          ullam laborum at. Error, atque molestias. Magni est
                          suscipit omnis sapiente quo illo harum alias
                          laboriosam quae atque, consectetur, eaque provident
                          dicta impedit exercitationem reprehenderit culpa
                          dolore, consequuntur ullam nulla veritatis autem? Modi
                          ipsa
                          <strong>cupiditate earum.</strong>
                        </p>
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

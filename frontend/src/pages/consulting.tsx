import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faInstagram,
	faYoutube,
	faTiktok,
	faTwitch,
} from "@fortawesome/free-brands-svg-icons";

import {
	faGlobe,
	faClock,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";

export default function Consulting() {
	return (
		<>
			<section>
				<div className=" m-0 p-0 relative leading-none ">
					<Image
						className="align-middle "
						src="/assets/banner.jpg"
						alt=""
						height={300}
						width={1920}
						style={{ height: "300px", width: "100%", objectFit: "none" }}
					/>
				</div>

				{/* content */}
				<div className=" lg:w-[1170px] ml-auto mr-auto pr-[15px] pl-[15px] container ">
					<div className="row">
						<aside className=" float-left w-1/4  min-h-[1px] pl-[15px] pr-[15px] relative lg:block md:block hidden ">
							{/* sidebar */}
							<div className=" bg-[#f2f2f2] m-0 relative z-[9] px-[10px] pt-[125px] pb-[10px] ">
								<figure className=" left-0 m-0 py-0 px-[10px] absolute text-center align-middle justify-center flex top-[-105px] w-full ">
									<img
										className="border-4 border-[#f2f2f2] rounded-[150px] w-[200px] h-[200px] object-cover box-content   "
										src="/assets/IMG_8642.png"
										alt=""
									/>
								</figure>

								<figure className="left-0 px-0 py-[12px] text-center">
									<a
										href="https://www.facebook.com/andresvernazza.social"
										className=" inline-block float-none mt-0 mx-[5px] mb-[5px] "
									>
										<FontAwesomeIcon
											icon={faYoutube}
											style={{ fontSize: 30, color: "#22a3fe" }}
										/>
									</a>
									<a
										href="https://twitter.com/Andres_vernazza"
										className=" inline-block float-none mt-0 mx-[5px] mb-[5px] "
									>
										<FontAwesomeIcon
											icon={faTiktok}
											style={{ fontSize: 30, color: "#22a3fe" }}
										/>
									</a>
									<a
										href="https://www.instagram.com/andresvernazza/"
										className=" inline-block float-none mt-0 mx-[5px] mb-[5px] "
									>
										<FontAwesomeIcon
											icon={faInstagram}
											style={{ fontSize: 30, color: "#22a3fe" }}
										/>
									</a>

									<a
										href="https://www.linkedin.com/in/andresvernazza/"
										className=" inline-block float-none mt-0 mx-[5px] mb-[5px] "
									>
										<FontAwesomeIcon
											icon={faTwitch}
											style={{ fontSize: 30, color: "#22a3fe" }}
										/>
									</a>
									<a
										href="https://www.linkedin.com/in/andresvernazza/"
										className=" inline-block float-none mt-0 mx-[5px] mb-[5px] "
									>
										<FontAwesomeIcon
											icon={faGlobe}
											style={{ fontSize: 30, color: "#22a3fe" }}
										/>
									</a>

									<div className="clearfix"></div>
								</figure>
								<figure>
									<br />
								</figure>
								{/*  T arriba | R derecha | B abajo |  L izquierda 
									padding: 5px 1em 0 2em; */}
								<h5 className=" break-words text-[#0c1827] text-[14px] m-0 py-0 pt-0 pr-0 pb-[25px] pl-[7px] ">
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
										<a className=" underline" href="" target="" rel="">
											<span>
												<strong>+1 417 658 4414</strong>
											</span>
										</a>
									</div>

									<div>
										<a className=" underline" href="" target="" rel=""></a>
									</div>
									<div>
										<br />
									</div>
									<div>Si puedes soñarlo, puedes lograrlo</div>
								</h5>
							</div>
						</aside>

						<aside className=" w-full md:w-3/4 lg:w-3/4 float-left  min-h-[1px] px-[15px] relative">
							{/* main content */}
							<div className=" bg-[#fafafa] m-0 p-0 relative">
								{/*title*/}
								<div className="shadow p-4 rounded-br-sm rounded-bl-sm relative z-[9] px-[40px] lg:pt-[15px] lg:pr-[15px] lg:pb-[15px] lg:pl-[30px] md:pt-[15px] md:pr-[15px] md:pb-[15px] md:pl-[30px]  mt-0 mr-0 mb-0 ml-[-30px]">
									<div className=" row">
										<div className=" w-full float-left min-[1px] pl-[15px] pr-[15px] relative contents after:clear-both ">
											<h2 className=" break-words text-[#0c1827] text-[35px] font-[700] tracking-normal leading-[37px] m-0 pt-0 px-0 pb-[10px] ">
												Juan Lopez
											</h2>
											<p className=" text-[#0c1827] text-[18px] font-[500] leading-[20px] m-0 pt-0 ">
												<div>
													Lorem ipsum dolor sit amet consectetur adipisicing
													elit. Delectus, repellat!
												</div>
											</p>
										</div>
									</div>
								</div>
								<div className="aboutme">
									<div className="row">
										<figure className=" leading-[0px] w-1/12  float-left min-h-[1px] lg:px-[15px] relative m-0">
											<svg></svg>
										</figure>
										<article className=" w-11/12 float-left min-h-[1px] px-[15px] relative ">
											<h3 className="text-[#0c1827] text-[16px] font-[700] leading-[18px] m-0 pt-0 px-0 pb-[6px] ">
												Acerca de mi
											</h3>
											<p className="text-[#0c1827] text-[18px] font-[500] leading-[20px] m-0 pt-0 ">
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
									<div className="aboutme">
										<div className="row">
											<figure className=" leading-[0px] w-1/12 float-left min-h-[1px] px-[15px] relative m-0">
												<svg></svg>
											</figure>
											<article className=" w-11/12 float-left min-h-[1px] px-[15px] relative ">
												<h3 className="text-[#0c1827] text-[16px] font-[700] leading-[18px] m-0 pt-0 px-0 pb-[15px] ">
													SERVICIOS
												</h3>
												<p className="text-[#0c1827] text-[18px] font-[500] leading-[20px] m-0 pt-0 ">
													<div className="text-[#33bfb3] pb-[15px]">
														<strong>
															Asesoría Emocional y de Relaciones Humanas -
															SESIÓN INDIVIDUAL (1 persona)
														</strong>
													</div>
													<div className="text-[#4d4c4c] pb-[15px]">
														<strong>
															<FontAwesomeIcon
																icon={faShoppingCart}
																style={{ fontSize: 15, color: "#4d4c4c" }}
															/>{" "}
															$120.00 USD{" "}
														</strong>
														<strong>
															<FontAwesomeIcon
																icon={faClock}
																style={{ fontSize: 15, color: "#4d4c4c" }}
															/>{" "}
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
								<div className="bg-[#fafafa] h-full left-[-30px] absolute top-0 w-[30px] "></div>
							</div>
						</aside>
					</div>
				</div>
			</section>
		</>
	);
}

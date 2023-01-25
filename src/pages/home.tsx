import Head from "next/head";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function Home() {
	return (
		<>
			<body className="overflow-x-hidden">
				<section className="">
					<Head>
						<title>Create Next App</title>
						<meta name="description" content="Generated by create next app" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1"
						/>
						<link rel="icon" href="/favicon.ico" />
					</Head>

					<section className="bg-slate-100 my-5">
						<div className=" ">
							<nav>
								<div>
									<a href="index.html"></a>
								</div>
								<label className="">
									<i className="fa-solid fa-bars"></i>
								</label>
								<ul className="nav-menu">
									<li>
										<a className="active" href="index.html">
											INICIO
										</a>
									</li>
									<li>
										<a href="aboutus.html">DESCUBREME</a>
									</li>

									<li>
										<a href="https://open.spotify.com/show/02uUmZEKDXD5L61AYFkohu?si=6371898db55043d0">
											PODCAST
										</a>
									</li>
									<li>
										<a href="mentorias.html">MENTORIAS</a>
									</li>
								</ul>
							</nav>
						</div>
					</section>

					<section className="bg-sky-600 my-5">
						<section id="">
							<h2>
								Escuela <span className="">Red Pill</span>
							</h2>
							<h3>by Juan lopez</h3>
							<div id="">
								<div className="text-bold text-green-500">
									<Typewriter
										options={{
											strings: [
												"Despierta, Elegido. ",
												"La Matrix te tiene. ",
												"Desliza hacia abajo. ",
												"*Toc Toc* ",
												"Abre Los Ojos. ",
												"Recupera tu masculinidad. ",
												"Vuelvete atractivo. ",
												"Supera a tu Ex. ",
												"Tomate la pildora roja. ",
											],
											autoStart: true,
											loop: true,
											delay: 75,
										}}
									/>
								</div>
							</div>
						</section>
					</section>

					<section className="bg-slate-600 my-5">
						<div>
							<div className="">
								<p>Psicólogo profesional y freelancer.</p>
								<p>Descubrelo</p>
								<div className=""></div>

								<ul className="">
									<a href="https://t.me/escuelaredpill">
										{" "}
										<li></li>
									</a>
									<a href="https://www.instagram.com/escuelaredpill/"> </a>
									<a href="https://www.tiktok.com/@escuelaredpill?lang=en">
										{" "}
										<li></li>
									</a>
								</ul>
							</div>
							<div className="">
								<ul id="">
									<li className="">
										<a href="mentorias.html">
											<span>
												<p>MENTORIAS Y CONSULTAS</p>
											</span>
										</a>
									</li>
									<li className="">
										<a href="https://www.youtube.com/channel/UCKsfHuc4kXMvUuiHRX3jdwA">
											<span>
												<p>YOUTUBE</p>
											</span>
										</a>
									</li>
									<li className="">
										<a href="">
											<span>
												<p>SPOTIFY</p>
											</span>
										</a>
									</li>
									<li className="">
										<a href="https://blog.drjuanlopez.com">
											<i className="fa-solid fa-newspaper"></i>
											<span>
												<p>ARTICULOS</p>
											</span>
										</a>
									</li>

									<li className="">
										<a href="aboutus.html">
											<span>
												<p>NOSOTROS</p>
											</span>
										</a>
									</li>
								</ul>
							</div>
						</div>
					</section>

					<section className="bg-slate-200 my-5">
						<article>
							<div>
								<h1>REINVINDICACION MASCULINA</h1>
								<p>
									Forja tu masculinidad y descubre tu potencial más atractivo.
								</p>
							</div>
						</article>
						<article>
							<div>
								<h1>Aprende a sostener una relacion</h1>
								<p>
									Entiende los conceptos fundamentales para mantener una
									relación estable.
								</p>
							</div>
						</article>
						<article>
							<div>
								<h1>Recuperate de tu ex</h1>
								<p>
									Si la relación termino y sientes que te perdiste a ti mismo o
									quieres intentar recuperar la relación.
								</p>
							</div>
						</article>
					</section>
					<div className=""></div>
					<section className="bg-purple-400 my-5">
						<form action="mentorias.html">
							<button type="submit">ADQUIERE TU MENTORIA</button>
						</form>
					</section>
				</section>

				<section className="bg-purple-400 my-5">
					<div className="">
						<div className="">
							<h1>Ultimos Podcast</h1>
							<div className=""></div>
						</div>
						<div className="">
							<div className="">
								<div className="">
									<div className=""></div>
								</div>

								<div className="">
									<div className=""></div>
								</div>

								<div className="">
									<div className=""></div>
								</div>
							</div>
						</div>
					</div>
				</section>

				<section className="bg-orange-500 my-5">
					<div className="">
						<h1>Ultimos Videos</h1>
						<div className=""></div>
					</div>
					<div className="">
						<div className="">
							<div className="">
								<div className=""></div>
							</div>

							<div className="">
								<div className=""></div>
							</div>

							<div className="">
								<div className=""></div>
							</div>
						</div>
					</div>
				</section>

				<div className="bg-cyan-400 my-5">
					<div className="">
						<h1>Ultimos Articulos</h1>
						<div className=""></div>
					</div>
					<div className="">
						<div className="">
							<div className="">
								<a href="https://blogredpill.jetpage.site/blog/el-porqu-te-dejan-las-mujeres-la-betaizacion">
									<div className="">
										<div className=""></div>
										<div className="">
											El porque TE DEJAN LAS MUJERES.. LA BETAIZACION.
										</div>

										<h4>6/5/2022</h4>
									</div>
								</a>
							</div>

							<div className="">
								<a href="https://blogredpill.jetpage.site/blog/pruebas-que-te-hacen-las-mujeres-shit-test">
									<div className="">
										<div className=""></div>
									</div>
									<div className="">
										PRUEBAS que te hacen las MUJERES ..SHIT TEST
									</div>

									<h4>6/3/2022</h4>
								</a>
							</div>

							<div className="">
								<a href="https://blogredpill.jetpage.site/blog/la-verdad-de-las-mujeres-hipergamia">
									<div className="">
										<div className=""></div>
										<div className="">
											LA VERDAD de las MUJERES.. HIPERGAMIA
										</div>

										<h4>6/1/2022</h4>
									</div>
								</a>
							</div>
						</div>
					</div>
				</div>

				<footer className="bg-green-400 my-5">
					<div className="">
						<h3>
							Escuela <span className="">Red Pill</span>
						</h3>
						<p>
							Este proyecto esta dirigido a aquellos hombres que no entienden
							como relacionarse adecuadamente con el sexo femenino, se realizará
							una serie de videos sobre las claves para una relación estable.
						</p>
						<ul className="">
							<li>
								<a href="https://www.instagram.com/escuelaredpill/">
									<i className="fa-brands fa-instagram"></i>
								</a>
							</li>
							<li>
								<a href="juanjoc3@hotmail.com">
									<i className="fa-light fa-at"></i>
								</a>
							</li>
							<li>
								<a href="https://www.tiktok.com/@escuelaredpill?lang=en">
									<i className="fa-brands fa-tiktok"></i>
								</a>
							</li>
							<li>
								<a href="twitch.tv/juanlpzz">
									<i className="fa-brands fa-twitch"></i>
								</a>
							</li>
						</ul>

						<div className="">
							<div className="">
								<p>
									Copyright ©{" "}
									<a href="https://github.com/NevercomeG">
										NevercomeG<i className="fa-brands fa-github"></i>
									</a>
								</p>
							</div>
							<nav className="">
								<ul className="">
									<li>
										<a href="">
											<i className="fa-solid fa-arrow-up"></i>
										</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</footer>
			</body>
		</>
	);
}
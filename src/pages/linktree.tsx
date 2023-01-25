import Image from "next/image";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faCamera } from "@fortawesome/free-solid-svg-icons";

import Typewriter from "typewriter-effect";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
<script
	async
	custom-element="amp-iframe"
	src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"
></script>;
interface data {
	name: string;
	avatar: string;
	links: Link[];
	socials: Social[];
	flechita?: boolean;
}

interface Link {
	href: string;
	title: string;
	image?: string;
	message: string;
	space?: boolean;
	flechita?: boolean;
}

interface Social {
	href: string;
	title: string;
}

function Social({
	href,
	title,
	image,
	message,
	space,
}: {
	href: string;
	title: string;
	image?: string;
	message?: string;
	space?: boolean;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center  p-1 w-full rounded-sm hover:scale-105 transition-all whitespace-normal boxShadow  ${
				title === "Youtube"
					? "bg-[#DB4141]"
					: title === "Tiktok"
					? "bg-[#fff]"
					: title === "Instagram"
					? "bg-[#F55376]"
					: title === "Telegram"
					? "bg-[#29B6F6]"
					: title === "Tiktok"
					? "bg-slate-800"
					: "bg-gray-100"
			}  mb-3 max-w-3xl`}
		>
			<div className="flex text-center items-center  justify-between w-full">
				<div className=" h-12 relative p-0 flex-grow-0  flex items-center ">
					{image && (
						<Image
							className="rounded-md inline-block w-[42px] min-w-[42px]"
							alt={title}
							src={image}
							width={100}
							height={100}
						/>
					)}
				</div>
				<div className="flex justify-center items-center flex-col w-full flex-grow-[1] ">
					<h1
						className={` font-bold   ${
							title === "Tiktok" ? "text-black" : "text-white"
						}  text-lg `}
					>
						{title}
					</h1>
				</div>
				<div className=" h-12 relative p-0 flex-grow-0  flex items-center ">
					{image && (
						<Image
							className="rounded-md inline-block w-[42px] min-w-[42px]"
							alt={title}
							src={image}
							width={100}
							height={100}
						/>
					)}
				</div>
			</div>
		</a>
	);
}

function Maincard({
	href,
	title,
	image,
	message,
	space,
	flechita,
}: {
	href: string;
	title: string;
	image?: string;
	message?: string;
	space?: boolean;
	flechita?: boolean;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center  w-full rounded-sm hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl shadow-green-800 shadow-lg "
		>
			<div className="flex text-center items-center  justify-between w-full">
				<div className=" relative p-2 flex-grow-0  flex items-center">
					{image && (
						<Image
							className="rounded-md"
							alt={title}
							src={image}
							width={70}
							height={70}
						/>
					)}
				</div>
				<div className="flex justify-center items-center flex-col w-full flex-grow-[1] p-2">
					<h1 className=" font-semibold  text-gray-700 text-lg ">{title}</h1>
					<p className=" text-gray-700 text-sm">{message}</p>
				</div>
				<div className="h-10 relative p-2 flex-grow-0  flex items-center">
					{image && (
						<Image
							className="rounded-md"
							alt={title}
							src={image}
							width={70}
							height={70}
						/>
					)}
				</div>
			</div>
		</a>
	);
}

function LinkCard({
	href,
	title,
	image,
	message,
	space,
	flechita,
}: {
	href: string;
	title: string;
	image?: string;
	message?: string;
	space?: boolean;
	flechita?: boolean;
}) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			className="flex items-center  w-full rounded-sm hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl   "
		>
			<div className="flex text-center items-center  justify-between w-full">
				<div className=" relative p-2 flex-grow-0  flex items-center">
					{image && (
						<Image
							className="rounded-md"
							alt={title}
							src={image}
							width={70}
							height={70}
						/>
					)}
				</div>
				<div className="flex justify-center items-center flex-col w-full flex-grow-[1] p-2">
					<h1 className=" font-semibold  text-gray-700 text-lg ">{title}</h1>
					<p className=" text-gray-700 text-sm">{message}</p>
				</div>
				<div className="h-10 relative p-2 flex-grow-0  flex items-center">
					{image && (
						<Image
							className="rounded-md"
							alt={title}
							src={image}
							width={70}
							height={70}
						/>
					)}
				</div>
			</div>
		</a>
	);
}

export default function Home({
	href,
	title,
	image,
	message,
	space,
	flechita,
}: {
	href: string;
	title: string;
	image?: string;
	message?: string;
	space?: boolean;
	flechita?: boolean;
}) {
	return (
		<>
			<body className="bg-[#181818] h-full">
				<div className="flex text-center items-center flex-col mx-auto w-full justify-center mt-12 px-4 ">
					<Image
						priority
						className=" border-4 image-cropper"
						alt={data.name}
						src={data.avatar}
						width={120}
						height={120}
					/>
					<h1 className="font-bold mt-2 mb-2 text-3xl text-white">
						{data.name}
					</h1>
					<p className=" text-xl font-mono text-green-600  text-bold mb-4  shadow-green-800 shadow-lg">
						<Typewriter
							options={{
								strings: [
									"⠀Despierta, Elegido.",
									"⠀La Matrix te tiene.",
									"⠀Desliza hacia abajo.",
									"⠀*Toc Toc*",
									"⠀Abre Los Ojos.",
									"⠀Recupera tu masculinidad.",
									"⠀Vuelvete atractivo.",
									"⠀Supera a tu Ex.",
									"⠀Tomate la pildora roja.",
								],
								autoStart: true,
								loop: true,
								delay: 75,
							}}
						/>
					</p>
					{data.maincard.map((link) => (
						<Maincard key={link.href} {...link} />
					))}
					<div
						className={` flex items-center  p-1 w-full rounded-sm  bg-gray-100 mb-3 max-w-[100px] max-h-[0] text-lg `}
					></div>
					<h2 className="text-white pb-2">Empieza Aquí 👇</h2>
					{data.links.map((link) => (
						<LinkCard key={link.href} {...link} />
					))}
					<div
						className={` flex items-center  p-1 w-full rounded-sm  bg-gray-100 mb-3 max-w-[100px] max-h-[0] text-lg `}
					></div>
					{data.socials.map((link) => (
						<Social key={link.href} {...link} />
					))}

					<div
						className={` flex items-center  p-1 w-full rounded-sm  bg-gray-100 mb-3 max-w-[100px] max-h-[0] text-lg `}
					></div>

					<a
						href={href}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center  w-full rounded-sm hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
					>
						<div className="flex text-center items-center  justify-between w-full">
							<div className=" relative p-2 flex-grow-0  flex items-center">
								{image && (
									<Image
										className="rounded-md"
										alt={title}
										src={image}
										width={70}
										height={70}
									/>
								)}
							</div>
							<div className="flex justify-center items-center flex-col w-full flex-grow-[1] p-2">
								<h1 className=" font-semibold  text-gray-700 text-lg ">
									MAS CURSOS COMPLETOS
								</h1>
								<p className=" text-gray-700 text-sm">RELACIONES DE PAREJA</p>
							</div>

							<div className="h-10 relative p-2 flex-grow-0  flex items-center">
								{image && (
									<Image
										className="rounded-md"
										alt={title}
										src={image}
										width={70}
										height={70}
									/>
								)}
							</div>
						</div>
					</a>
					<iframe
						id="embedPlayer"
						src="https://embed.podcasts.apple.com/us/podcast/la-verdad-sobre-las-mujeres-escuela-redpill/id1667721683?itsct=podcast_box_player&amp;itscg=30200&amp;ls=1&amp;theme=auto"
						height="450px"
						frameborder="0"
						sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-top-navigation-by-user-activation"
						allow="autoplay ; encrypted-media; clipboard-write"
						bis_size='{"x":310,"y":1756,"w":660,"h":450,"abs_x":310,"abs_y":1756}'
						bis_id="fr_t8h9ajtvrih7qlutv30msb"
						bis_depth="0"
						bis_chainid="1"
					></iframe>
				</div>
			</body>
		</>
	);
}
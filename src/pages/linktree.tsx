import Image from "next/image";
import data from "../../data.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	TiktokIcon,
	TwitterIcon,
	InstagramIcon,
	SpotifyIcon,
	YoutubeIcon,
	TelegramIcon,
} from "../components/social";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";

interface data {
	name: string;
	avatar: string;
	links: Link[];
	socials: Social[];
}

interface Link {
	href: string;
	title: string;
	image?: string;
	message: string;
	space?: boolean;
}

interface Social {
	href: string;
	title: string;
}

function LinkCard({
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
			className="flex items-center  p-1 w-full rounded-sm hover:scale-105 transition-all bg-gray-100 mb-3 max-w-3xl"
		>
			<div className="flex text-center items-center justify-center w-full">
				<div className="w-14 h-12  ">
					{image && (
						<Image
							className="rounded-md"
							alt={title}
							src={image}
							width={100}
							height={100}
						/>
					)}
				</div>
				<div className="flex justify-center items-center flex-col w-full">
					<h1 className=" font-semibold  text-gray-700 text-lg ">{title}</h1>
					<p className=" text-gray-700 text-sm">{message}</p>
				</div>
			</div>
			{space && (
				<div>
					Este div se mostrará si la respuesta del back es "space": "true"
				</div>
			)}
		</a>
	);
}

export default function Home() {
	return (
		<>
			<div className="flex  items-center flex-col mx-auto w-full justify-center mt-16 px-8 ">
				<Image
					priority
					className="rounded-full"
					alt={data.name}
					src={data.avatar}
					width={250}
					height={250}
				/>
				<h1 className="font-bold mt-4 mb-8 text-3xl text-white">{data.name}</h1>
				{data.links.map((link) => (
					<LinkCard key={link.href} {...link} />
				))}
				<div className="flex items-center gap-4 mt-8 text-white">
					{data.socials.map((social) => (
						<a
							aria-label={`${social.title} link`}
							key={social.href}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
						>
							{social.href.includes("twitter") ? (
								<TwitterIcon />
							) : social.href.includes("instagram") ? (
								<InstagramIcon />
							) : null}
							{social.href.includes("spotify") ? (
								<SpotifyIcon />
							) : social.href.includes("youtube") ? (
								<YoutubeIcon />
							) : null}
							{social.href.includes("telegram") ? (
								<TelegramIcon />
							) : social.href.includes("tiktok") ? (
								<TiktokIcon />
							) : null}
						</a>
					))}
				</div>
			</div>
		</>
	);
}

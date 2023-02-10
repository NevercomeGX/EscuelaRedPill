import React from "react";
import Link from "next/link";
import Form from "../form/Form";

interface Props {
	heading: string;
	message: string;
}

const Hero = ({ heading, message }: Props) => {
	return (
		<div className="flex pt-16  gap-32 items-center justify-center h-screen mb-12 bg-black/70  text-center ">
			<div className="">
				<video
					autoPlay
					loop
					muted
					playsInline
					className="w-[800px] h-[800px] pointer-events: none;"
				>
					{" "}
					<source
						src="https://walter-riso.com/wp-content/themes/Writer-Custom-Theme-master/assets/video/BannerWalterRiso.mp4"
						type="video/mp4"
					/>
				</video>
			</div>

			<div className="flex flex-col justify-center item gap-6 p-5 text-white z-[2] mt-[-10rem] pt-32">
				<div className="text-center">
					<h2 className="text-5xl font-bold">{heading}</h2>
					<p className="py-5 text-xl">{message}</p>
				</div>
				<div>
					<Form />
				</div>
			</div>
		</div>
	);
};

export default Hero;

//

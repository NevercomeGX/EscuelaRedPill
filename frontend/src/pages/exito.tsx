import NavBar from "components/Consulting/NavigationBar/NavBar";

const ContactForm = () => {
	return (
		<main>
			<NavBar />
			<div className="flex pt-16   items-center justify-center h-screen mb-12 bg-black/70  text-center ">
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

				<div className="flex flex-col justify-center items-center gap-6 p-5 text-white z-[2] mt-[-10rem] pt-32">
					<div className="text-center">
						<h2 className="text-5xl font-bold">Lorem, ipsum.</h2>
						<p className="py-5 text-xl">
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum
							odio nisi voluptate recusandae magni vitae!
						</p>
					</div>
					<div></div>
				</div>
			</div>
		</main>
	);
};

export default ContactForm;

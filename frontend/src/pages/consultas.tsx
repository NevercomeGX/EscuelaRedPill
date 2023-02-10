import type { NextPage } from "next";
import Head from "next/head";
import Hero from "components/Consulting/Hero/Hero";
import NavBar from "components/Consulting/NavigationBar/NavBar";

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Keep moving</title>
				<meta
					name="description"
					content="Created as template for future work"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<NavBar />
			<Hero
				heading="DESCARGA MI EBOOK GRATIS"
				message="15 RED FLAGS FEMENINAS QUE DEBES EVITAR A TODA COSTA"
			/>
			{/* <Slider slides={SliderData} /> */}
			{/* <Instagram />
			<Portfolio />
			<Contact /> */}
		</>
	);
};

export default Home;

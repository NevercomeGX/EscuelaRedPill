import React, { useState } from "react";
import { PhoneNumberUtil } from "google-libphonenumber";
import Link from "next/link";
import countrycode from "../../../../codecontry.json";
import PhoneInput from "react-phone-number-input";

const BASE_URL = process.env.NEXT_PUBLIC_CODE;

interface countrycode {
	name: string;
	dial_code: string;
	code: string;
}

const ContactForm = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [error, setError] = useState(null);
	const [acceptedTerms, setAcceptedTerms] = useState(false);

	const [selectedCountry, setSelectedCountry] = useState("");
	const [countryCodes, setCountryCodes] = useState([]);

	const [value, setValue] = useState("");

	const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setAcceptedTerms(e.target.checked);
	};
	const phoneUtil = PhoneNumberUtil.getInstance();

	const handleCountryChange = (event: any) => {
		setSelectedCountry(event.target.value);
	};

	// const handleSubmit = (event: any) => {
	// 	event.preventDefault();
	// 	try {
	// 		const phoneNumber = phoneUtil.parse(phone, "US");
	// 		if (!phoneUtil.isValidNumber(phoneNumber)) {
	// 			throw new Error("Invalid phone number");
	// 		}
	// 		// Submit the form data
	// 	} catch (err: any) {
	// 		setError(err.message);
	// 	}
	// };

	return (
		<form>
			<input
				className="bg-white w-2/3 max-w-full border-[1px] border-black align-middle flex-grow-[1] leading-normal text-lg min-h-[40px] py-2 px-4 my-2 rounded-md"
				placeholder="Nombre"
				type="text"
				id="first-name"
				value={firstName}
				onChange={(event) => setFirstName(event.target.value)}
			/>
			<br />

			<input
				className="bg-white w-2/3 max-w-full border-[1px] border-black align-middle flex-grow-[1] leading-normal text-lg min-h-[40px] py-2 px-4 my-2 rounded-md"
				placeholder="Apellido"
				type="text"
				id="last-name"
				value={lastName}
				onChange={(event) => setLastName(event.target.value)}
			/>
			<br />
			<input
				className="bg-white w-2/3 max-w-full border-[1px] border-black align-middle flex-grow-[1] leading-normal text-lg min-h-[40px] py-2 px-4 my-2 rounded-md"
				placeholder="Email"
				type="email"
				id="email"
				value={email}
				onChange={(event) => setEmail(event.target.value)}
			/>
			<br />

			<select
				placeholder="Selecciona Tu pais"
				className="form-control text-black bg-white w-2/3 max-w-full border-[1px] border-black align-middle flex-grow-[1] leading-normal text-lg min-h-[40px] py-2 px-4 my-2 rounded-md"
				id="countryCode"
			>
				<option value="">Selecciona tu Pais</option>
				{countrycode.map((code) => (
					<option key={code.name} value="">
						{code.name} ({code.dial_code})
					</option>
				))}
			</select>
			{/* <PhoneInput
					placeholder="Enter phone number"
					value={value}
					onChange={event:Event}
				/> */}

			<div className="form-group">
				<input
					type="text"
					className="bg-white w-2/3 max-w-full border-[1px] border-black align-middle flex-grow-[1] leading-normal text-lg min-h-[40px] py-2 px-4 my-2 rounded-md"
					id="phoneNumber"
					placeholder="Numero de telefono"
				/>
			</div>
			{/* {error && <p style={{ color: "red" }}>{error}</p>} */}
			<br />
			<div className="py-2">
				<input
					type="checkbox"
					id="terms"
					onChange={handleCheckboxChange}
					checked={acceptedTerms}
				/>
				<label htmlFor="terms" className="p-2">
					Acepto la{" "}
					<span className="text-red-500">
						{" "}
						<a href=""> Política de Privacidad y Protección de Datos </a>{" "}
					</span>
				</label>
			</div>
			{acceptedTerms && (
				<Link href="/exito" passHref>
					<button className="px-8 py-2 my-4 border rounded-md w-96">
						Here
					</button>
				</Link>
			)}
		</form>
	);
};

export default ContactForm;

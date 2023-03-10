import axios from "axios";
import { useEffect, useState } from "react";

import { ICountry } from "../models/countryData";

export const useContry = () => {
	const [code, setCode] = useState<ICountry[]>([]);
	const [error, setError] = useState(null);
	const params = new URLSearchParams();

	useEffect(() => {
		axios(`${process.env.NEXT_PUBLIC_HOST}?${params.toString()}`)
			.then((res) => {
				setCode(res.data.body.data);
			})
			.catch((err) => {
				setError(err);
			});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return { code, error };
};

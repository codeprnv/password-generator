import axios from "axios";
import { usePassword } from "@/context/PasswordContext";
import { useEffect } from "react";

export const useGeneratePassword = () => {
	const { length, upperCase, lowerCase, numbers, symbols, setPasswordText } =
		usePassword();
	const fetchPassword = async () => {
		try {
			// console.log("Sending: ", length, upperCase, lowerCase, numbers, symbols);
			const res = await axios.post(
				`${import.meta.env.VITE_APP_URL}/generatePassword`,
				{
					length,
					upperCase,
					lowerCase,
					numbers,
					symbols,
				}
			);
			setPasswordText(res.data.password);
		} catch (err) {
			console.error("Failed to generate password", err);
			setPasswordText("");
		}
	};
	useEffect(() => {
		fetchPassword();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [length, upperCase, lowerCase, numbers, symbols]);
	return fetchPassword;
};

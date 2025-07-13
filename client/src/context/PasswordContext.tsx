import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type PasswordContextType = {
	length: number;
	setLength: (len: number) => void;
	upperCase: boolean;
	setUpperCase: (val: boolean) => void;
	lowerCase: boolean;
	setLowerCase: (val: boolean) => void;
	numbers: boolean;
	setNumbers: (val: boolean) => void;
	symbols: boolean;
	setSymbols: (val: boolean) => void;
	passwordText: string;
	setPasswordText: (val: string) => void;
};

const PasswordContext = createContext<PasswordContextType | undefined>(
	undefined
);

// eslint-disable-next-line react-refresh/only-export-components
export const usePassword = () => {
	const ctx = useContext(PasswordContext);
	if (!ctx) throw new Error("usePassword must be use with PasswordProvider");
	return ctx;
};

export const PasswordProvider = ({ children }: { children: ReactNode }) => {
	const [length, setLength] = useState(0);
	const [upperCase, setUpperCase] = useState<boolean>(true);
	const [lowerCase, setLowerCase] = useState<boolean>(true);
	const [symbols, setSymbols] = useState<boolean>(false);
	const [numbers, setNumbers] = useState<boolean>(false);
	const [passwordText, setPasswordText] = useState<string>(" ");
	return (
		<PasswordContext.Provider
			value={{
				length,
				setLength,
				upperCase,
				setUpperCase,
				lowerCase,
				setLowerCase,
				symbols,
				setSymbols,
				numbers,
				setNumbers,
				passwordText,
				setPasswordText,
			}}
		>
			{children}
		</PasswordContext.Provider>
	);
};

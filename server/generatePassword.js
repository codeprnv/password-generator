import crypto from "crypto";

const CHAR_SETS = {
	upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
	lowerCase: "abcdefghijklmnopqrstuvwxyz",
	numbers: "0123456789",
	symbols: "~`!@#$%^&*()_-+={[}]|\\:;\"'<,>.?/",
};

const randomChar = (charSet) => {
	const randomIndex = crypto.randomInt(0, charSet.length);
	return charSet[randomIndex];
};

const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = crypto.randomInt(0, i + 1);
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

export const generatePassword = (length, options) => {
	let charSet = "";
	const guaranteed = [];

	if (options.upperCase) {
		charSet += CHAR_SETS.upperCase;
		guaranteed.push(randomChar(CHAR_SETS.upperCase));
	}

	if (options.lowerCase) {
		charSet += CHAR_SETS.lowerCase;
		guaranteed.push(randomChar(CHAR_SETS.lowerCase));
	}

	if (options.numbers) {
		charSet += CHAR_SETS.numbers;
		guaranteed.push(randomChar(CHAR_SETS.numbers));
	}

	if (options.symbols) {
		charSet += CHAR_SETS.symbols;
		guaranteed.push(randomChar(CHAR_SETS.symbols));
	}

	if (!charSet) return "";

	if (length < guaranteed.length) {
		throw new Error(`Password length should be at least ${guaranteed.length} or greater`);
	}

	const remainingLength = length - guaranteed.length;
	const passwordChars = [...guaranteed];

	for (let i = 0; i < remainingLength; i++) {
		passwordChars.push(randomChar(charSet));
	}

	return shuffle(passwordChars).join("");
};

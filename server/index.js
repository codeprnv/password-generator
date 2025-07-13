import express from "express";
import cors from "cors";
import { generatePassword } from "./generatePassword.js";

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.post("/api/generatePassword", (req, res) => {
	const { length, upperCase, lowerCase, numbers, symbols } = req.body;

	// console.log(length, upperCase, lowerCase, numbers, symbols);

	if (!upperCase && !lowerCase && !numbers && !symbols) {
		return res
			.status(400)
			.json({ error: "At least one character type must be selected" });
	}

	const password = generatePassword(length, {
		upperCase,
		lowerCase,
		numbers,
		symbols,
	});

	if (!password) {
		return res.status(400).json({ error: "Invalid options or length" });
	}

	return res.status(201).json({ password });
});

app.listen(PORT, () => {
	console.log(`Server running on ${PORT}`);
});

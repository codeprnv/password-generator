import React from "react";
import { useGeneratePassword } from "@/hooks/useGeneratePassword";
import { usePassword } from "@/context/PasswordContext";
import zxcvbn from "zxcvbn";

const PasswordSpace = () => {
	const { passwordText } = usePassword();
	const [copied, setCopied] = React.useState<boolean>(false);
	const analysis = zxcvbn(passwordText);
	const score = analysis.score;
	// const feedback = analysis.feedback;

	const strengthLevels = [
		{
			label: "Very Weak",
			bgcolor: "bg-red-600",
			color: "text-red-200",
			description: "Might as well be “password123” — easily cracked.",
		},
		{
			label: "Weak",
			bgcolor: "bg-orange-600",
			color: "text-orange-200",
			description: "Still shaky — a brute-force attacker would smile.",
		},
		{
			label: "Moderate",
			bgcolor: "bg-yellow-600",
			color: "text-yellow-200",
			description: "	Not bad, but not Fort Knox either.",
		},
		{
			label: "Strong",
			bgcolor: "bg-green-600",
			color: "text-green-200",
			description: "Pretty solid — would take effort to crack.",
		},
		{
			label: "Very Strong",
			bgcolor: "bg-emerald-700",
			color: "text-emerald-200",
			description: "	Excellent! Practically unbreakable.",
		},
	];

	const { label, color, bgcolor, description } = strengthLevels[score];

	const regenerate = useGeneratePassword();

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(passwordText);
			setCopied(true);
			document.body.classList.add("global-copy-cursor");
			setTimeout(() => {
				setCopied(false);
				document.body.classList.remove("global-copy-cursor");
			}, 3000);
		} catch (err) {
			console.error("Error copying text", err);
		}
	};
	return (
		<div className="w-full h-1/7 md:h-1/5 bg-[#e6e3e1] my-4 rounded-3xl flex flex-col md:gap-1">
			<div className="w-full h-full rounded-3xl bg-[#d4d1ce] flex items-center p-4 md:px-8 justify-between ">
				{/* password text */}
				<div className="max-w-[50%]">
					<input
						className="text-black text-lg md:text-2xl tracking-wider focus:outline-0 select-none cursor-default"
						value={passwordText}
						readOnly
					/>
				</div>
				<div className="flex gap-2 md:gap-4 text-white items-center">
					<button
						id="copy-btn"
						className="bg-[#282828] w-fit h-fit px-2 py-1 md:px-4 md:py-2 rounded-lg"
						onClick={handleCopy}
					>
						{copied ? "Copied" : "Copy"}
					</button>
					<button
						className="bg-[#282828] w-fit h-fit px-2 py-1 md:px-4 md:py-2 rounded-lg cursor-pointer"
						onClick={regenerate}
					>
						⭮
					</button>
				</div>
			</div>
			{/* Dynamically generated based on password strength */}
			<div
				className={`w-full items-center md:h-1/3 rounded-3xl ${color} ${bgcolor} flex justify-center text-[12px] md:text-sm p-1 `}
			>
				<b>{label}:</b>&nbsp;{description}.
			</div>
		</div>
	);
};

export default PasswordSpace;

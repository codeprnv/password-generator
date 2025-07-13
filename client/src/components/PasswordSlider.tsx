import { Slider } from "./ui/slider";
import { usePassword } from "@/context/PasswordContext";

const PasswordSlider = () => {
	const { length, setLength, upperCase, lowerCase, numbers, symbols } =
		usePassword();

	const selectedCount = [upperCase, lowerCase, numbers, symbols].filter(
		Boolean
	).length;
	const minLength = selectedCount > 0 ? selectedCount : 1;

	const safeLength = Math.max(length, minLength);

	return (
		<div className="w-full p-2 flex flex-col gap-3">
			<div className="w-full flex justify-between">
				<p>Password length</p>
				<p>{length}</p>
			</div>
			<Slider
				min={minLength}
				max={15}
				step={1}
				value={[safeLength]}
				onValueChange={([val]) => setLength(val)}
			/>
		</div>
	);
};

// Changes2

export default PasswordSlider;

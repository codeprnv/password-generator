import { Slider } from "./ui/slider";
import { usePassword } from "@/context/PasswordContext";

const PasswordSlider = () => {
	const { length, setLength } = usePassword();
	return (
		<div className="w-full p-2 flex flex-col gap-3">
			<div className="w-full flex justify-between">
				<p>Password length</p>
				<p>{length}</p>
			</div>
			<Slider
				max={15}
				step={1}
				value={[length]}
				onValueChange={([val]) => setLength(val)}
			/>
		</div>
	);
};

// Changes

export default PasswordSlider;

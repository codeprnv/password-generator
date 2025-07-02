import { Slider } from "./ui/slider";

const PasswordSlider = () => {
	return (
		<div className="w-full p-2 flex flex-col gap-3">
			<div className="w-full flex justify-between">
				<p>Password length</p>
				<p>Count</p>
			</div>
			<Slider max={15} step={1}/>
		</div>
	);
};

export default PasswordSlider;

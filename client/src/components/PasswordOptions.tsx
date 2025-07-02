import { Switch } from "./ui/switch";

const PasswordOptions = () => {
	function options(text: string) {
		return (
			<div className="w-full p-3 flex justify-between text-sm">
				<p className="text-sm md:text-[16px]">{text}</p>
				<Switch/>
			</div>
		);
	}
	return (
		<div className="w-full flex flex-col gap-4 my-4">
            {options("Include Uppercase Letters")}
            {options("Include Lowercase Letters")}
            {options("Include Numbers")}
            {options("Include Symbols")}
		</div>
	);
};

export default PasswordOptions;

import { usePassword } from "@/context/PasswordContext";
import { Switch } from "./ui/switch";

const PasswordOptions = () => {
	const {
		upperCase,
		setUpperCase,
		lowerCase,
		setLowerCase,
		numbers,
		setNumbers,
		symbols,
		setSymbols,
	} = usePassword();
	return (
		<div className="w-full flex flex-col gap-4 my-4">
			<div className="w-full p-3 flex justify-between text-sm">
				<p className="text-sm md:text-[16px]">Include Uppercase Letters</p>
				<Switch checked={upperCase} onCheckedChange={setUpperCase} />
			</div>
			<div className="w-full p-3 flex justify-between text-sm">
				<p className="text-sm md:text-[16px]">Include Lowercase Letters</p>
				<Switch checked={lowerCase} onCheckedChange={setLowerCase} />
			</div>
			<div className="w-full p-3 flex justify-between text-sm">
				<p className="text-sm md:text-[16px]">Include Numbers</p>
				<Switch checked={numbers} onCheckedChange={setNumbers} />
			</div>
			<div className="w-full p-3 flex justify-between text-sm">
				<p className="text-sm md:text-[16px]">Include Symbols</p>
				<Switch checked={symbols} onCheckedChange={setSymbols} />
			</div>
		</div>
	);
};

export default PasswordOptions;

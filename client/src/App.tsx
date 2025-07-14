import PasswordOptions from "./components/PasswordOptions";
import PasswordSlider from "./components/PasswordSlider";
import PasswordSpace from "./components/PasswordSpace";
const App = () => {
	return (
		<div className="flex w-screen h-screen justify-center items-center">
			<div className="min-w-[320px] w-full h-full sm:max-w-[80vw] sm:max-h-[85vh] md:max-w-[65vw] xl:max-w-[40vw]  bg-[#F6F6F4] justify-center flex rounded-xl p-3 md:p-10">
				{/* content */}
				<div className="flex items-center flex-col w-full h-full lg:p-5 gap-2 p-2 md:p-0">
					{/* title */}
					<h1 className="text-xl md:text-2xl xl:text-3xl font-bold tracking-wide">
						Password generator
					</h1>
					{/* sub-title */}
					<h3 className="text-gray-500 text-sm md:text-md">
						Generate strong unique passwords
					</h3>
					{/* password generator space */}
					<PasswordSpace />
					<PasswordSlider />
					<PasswordOptions/>
				</div>
			</div>
		</div>
	);
};

export default App;

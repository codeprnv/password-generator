const PasswordSpace = () => {
  return (
		<div className="w-full h-1/7 md:h-1/5 bg-[#e6e3e1] my-4 rounded-3xl flex flex-col md:gap-1">
			<div className="w-full h-full rounded-3xl bg-[#d4d1ce] flex items-center px-4 md:px-8 justify-between">
				{/* password text */}
				<div>
					<h1 className="text-black text-lg md:text-2xl tracking-wider">Pa$word</h1>
				</div>
				<div className="flex gap-2 md:gap-4 text-white">
					<button className="bg-[#282828] w-fit h-fit px-2 py-1 md:px-4 md:py-2 rounded-lg cursor-pointer">
						Copy
					</button>
					<button className="bg-[#282828] w-fit h-fit px-2 py-1 md:px-4 md:py-2 rounded-lg cursor-pointer">
						⭮
					</button>
				</div>
			</div>
			{/* Dynamically generated based on password strength */}
			<div className="w-full h-1/5 bg-[#F6EABD] rounded-3xl text-[#B09F62] flex justify-center text-[11px] md:text-sm">
				<b>Moderate:</b>&nbsp;Not bad, but not Fort Knox either.
			</div>
		</div>
	);
}

export default PasswordSpace
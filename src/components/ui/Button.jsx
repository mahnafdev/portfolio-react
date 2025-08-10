const Button = ({
	children: content,
	displayFlex = false,
	hoverEffect1,
	hoverEffect2,
	activeEffect1,
	activeEffect2,
}) => {
	return (
		<button
			type="button"
			className={`px-4 py-2 text-lg ${
				displayFlex && "flex items-center gap-2"
			} rounded-lg bg-zinc-800 ${
				hoverEffect1 &&
				"outline outline-transparent hover:bg-zinc-900 hover:outline-accent/40"
			} ${hoverEffect2 && "hover:bg-zinc-800/70 hover:text-accent/90"} ${
				activeEffect1 && "active:scale-95"
			} ${
				activeEffect2 && "active:-rotate-3"
			} transition-[background-color,color,outline,scale,rotate] duration-200 cursor-pointer`}
		>
			{content}
		</button>
	);
};

export default Button;

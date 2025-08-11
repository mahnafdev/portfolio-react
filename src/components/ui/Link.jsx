import { Link as ReactLink } from "react-router";

const Link = ({
	children,
	anchorLink = false,
	href = "/",
	openInNewTab = false,
	hoverEffect1,
	hoverEffect2,
	activeEffect1,
	activeEffect2,
}) => {
	return anchorLink ? (
		<a
			href={href}
			className={`${hoverEffect1 && "px-3 py-2 rounded-md hover:bg-zinc-800/50"} ${
				hoverEffect2 && "hover:text-accent/90"
			} ${activeEffect1 && "active:text-accent/90"} ${
				activeEffect2 && "active:underline active:underline-offset-3"
			} transition-[background-color,color,text-decoration-line] duration-200`}
			target={openInNewTab && "_blank"}
		>
			{children}
		</a>
	) : (
		<ReactLink
			to={href}
			className={`${hoverEffect1 && "px-3 py-2 rounded-md hover:bg-zinc-800/50"} ${
				hoverEffect2 && "hover:text-accent/90"
			} ${activeEffect1 && "active:text-accent/90"} ${
				activeEffect2 && "active:underline active:underline-offset-3"
			} transition-[background-color,color,text-decoration-line] duration-200`}
			target={openInNewTab && "_blank"}
		>
			{children}
		</ReactLink>
	);
};

export default Link;

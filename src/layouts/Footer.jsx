import { HeartIcon } from "lucide-react";

const Footer = () => {
	return (
		<footer className="py-4 bg-gradient-to-r from-dark via-zinc-900 to-dark backdrop-blur">
			<h5 className="text-xl font-jetbrains-mono text-center flex justify-center items-center gap-x-1.5">
				Made with{" "}
				<HeartIcon
					fill="var(--color-primary)"
					strokeWidth={0}
					className="animate-pulse"
				/>{" "}
				by <span className="font-medium">Ahnaf</span>
			</h5>
		</footer>
	);
};

export default Footer;

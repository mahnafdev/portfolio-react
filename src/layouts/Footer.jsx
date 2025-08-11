import { HeartIcon } from "lucide-react";

const Footer = () => {
	return (
		<footer className="py-4 bg-gradient-to-r from-dark via-zinc-900 to-dark backdrop-blur space-y-3">
			{/* Social Profiles */}
			<ul className="w-fit mx-auto flex gap-4">
				{/* LinkedIn */}
				<li>
					<a
						href="https://www.linkedin.com/in/mahnafdev"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/168/168771.png"
							alt="LinkedIn"
							className="size-8 grayscale-100 hover:grayscale-0 hover:scale-120 hover:-rotate-3 active:scale-110 transition-[scale,rotate,filter] duration-250"
						/>
					</a>
				</li>
				{/* GitHub */}
				<li>
					<a
						href="https://github.com/mahnafdev"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/16509/16509810.png"
							alt="GitHub"
							className="size-9 invert-50 grayscale-100 hover:grayscale-0 hover:invert-100 hover:scale-120 hover:-rotate-3 active:scale-110 transition-[scale,rotate,filter] duration-250"
						/>
					</a>
				</li>
				{/* Facebook */}
				<li>
					<a
						href="https://www.facebook.com/mahnafdev"
						target="_blank"
					>
						<img
							src="https://cdn-icons-png.flaticon.com/128/168/168754.png"
							alt="Facebook"
							className="size-9 grayscale-100 hover:grayscale-0 hover:scale-120 hover:-rotate-3 active:scale-110 transition-[scale,rotate,filter] duration-250"
						/>
					</a>
				</li>
			</ul>
			{/* Footer Text */}
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

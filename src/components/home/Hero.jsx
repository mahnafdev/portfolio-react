import { Typewriter } from "react-simple-typewriter";
import MyPic from "../../assets/me.png";
import Button from "../ui/Button";

const Hero = () => {
	return (
		<section
			id="hero"
			className="flex flex-col items-center justify-center text-center"
		>
			{/* Name */}
			<h1 className="text-6xl font-semibold bg-gradient-to-r from-accent from-40% via-light to-primary bg-clip-text text-transparent">
				Muhammad Ahnaf
			</h1>
			{/* Designation/Role with Typewriting Animation */}
			<h3 className="text-[2.5rem] font-bold mt-1 bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent before:content-['ㅤ'] after:content-['ㅤ'] font-jetbrains-mono">
				<Typewriter
					words={[
						"MERN Web Developer",
						"Next.js Web Developer",
						"Software Engineering Enthusiast",
					]}
					typeSpeed={40}
					deleteSpeed={100}
					delaySpeed={2300}
					loop={false}
				/>
			</h3>
			{/* Picture */}
			<img
				src={MyPic}
				alt="My Picture"
				className="-mt-6 rounded-full grayscale-20 brightness-120 transition-[filter] duration-200"
			/>
			<div className="mt-6 flex items-center gap-4">
				{/* Social Profiles Links */}
				<ul className="flex gap-x-2">
					{/* LinkedIn */}
					<li>
						<a
							href="https://www.linkedin.com/in/mahnafdev"
							target="_blank"
						>
							<img
								src="https://cdn-icons-png.flaticon.com/128/3992/3992606.png"
								alt="LinkedIn"
								className="size-9 grayscale-75 hover:scale-120 hover:-rotate-3 active:scale-110 transition-transform duration-250"
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
								src="https://cdn-icons-png.flaticon.com/128/3291/3291667.png"
								alt="GitHub"
								className="size-9 grayscale-75 hover:scale-120 hover:-rotate-3 active:scale-110 transition-transform duration-250"
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
								src="https://cdn-icons-png.flaticon.com/128/733/733547.png"
								alt="Facebook"
								className="size-9 grayscale-75 hover:scale-120 hover:-rotate-3 active:scale-110 transition-transform duration-250"
							/>
						</a>
					</li>
					{/* YouTube */}
					<li>
						<a
							href="https://www.youtube.com/@ninjaquasar"
							target="_blank"
						>
							<img
								src="https://cdn-icons-png.flaticon.com/128/3991/3991722.png"
								alt="YouTube"
								className="size-9 grayscale-75 hover:scale-120 hover:-rotate-3 active:scale-110 transition-transform duration-250"
							/>
						</a>
					</li>
				</ul>
				{/* Resume button */}
				<Button
					hoverEffect2
					activeEffect1
				>
					Resume
				</Button>
			</div>
		</section>
	);
};

export default Hero;

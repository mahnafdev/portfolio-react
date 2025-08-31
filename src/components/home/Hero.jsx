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
			<h1 className="text-4xl md:text-6xl font-semibold bg-gradient-to-r from-accent from-40% via-light to-primary bg-clip-text text-transparent">
				Muhammad Ahnaf
			</h1>
			{/* Designation/Role with Typewriting Animation */}
			<h3 className="text-xl md:text-3xl lg:text-[2.5rem] font-bold text-center mt-4 lg:mt-1 bg-gradient-to-r from-zinc-50 to-zinc-400 bg-clip-text text-transparent md:before:content-['ㅤ'] after:content-['ㅤ'] font-jetbrains-mono">
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
				className="lg:-mt-6 rounded-full grayscale-20 brightness-120 transition-[filter] duration-200"
			/>
			<div className="mt-8 lg:mt-6 flex items-center gap-4">
				{/* Social Profiles */}
				<ul className="w-fit mx-auto flex gap-3">
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
				{/* Resume button */}
				<a
					href="https://drive.google.com/file/d/1JtW_458BxYiF0I2M_EYVYWHxNLlqBglZ/view"
					target="_blank"
				>
					<Button
						hoverEffect2
						activeEffect1
					>
						Resume
					</Button>
				</a>
			</div>
		</section>
	);
};

export default Hero;

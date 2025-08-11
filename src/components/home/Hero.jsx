import { Typewriter } from "react-simple-typewriter";
import MyPic from "../../assets/me.png";

const Hero = () => {
	return (
		<section
			id="hero"
			className="flex flex-col items-center justify-center text-center"
		>
			{/* Name */}
			<h1 className="text-6xl font-semibold">
				<span className="text-accent">Muhammad</span>{" "}
				<span className="text-primary">Ahnaf</span>
			</h1>
			{/* Designation/Role with Typewriting Animation */}
			<h3 className="text-[2.5rem] font-bold mt-1 text-zinc-300 before:content-['ㅤ'] after:content-['ㅤ'] font-jetbrains-mono">
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
		</section>
	);
};

export default Hero;

import Image1 from "../../assets/about-me/image-1.jpg";
import Image2 from "../../assets/about-me/image-2.jpg";

const AboutMe = () => {
	return (
		<section
			id="about-me"
			className="grid grid-cols-2 items-center gap-8"
		>
			{/* About Me Card/Info */}
			<div className="space-y-2">
				{/* Section Header */}
				<h3 className="text-4xl font-semibold font-jetbrains-mono bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent uppercase">
					About Me
				</h3>
				{/* 'Personal & Professional' portion */}
				<div>
					<h6 className="text-lg font-medium font-jetbrains-mono text-zinc-400">
						Personal & Professional
					</h6>
					<p className="text-[17px] text-zinc-300 text-balance">
						My name is Muhammad Ahnaf (you already know). I'm a 13 years teenager
						who is studying in Class 6 and developing various applications. You may
						find me physically in Rajshahi, Bangladesh cause I live around there.
						And you can also find me at your organization/company programmatically!
						I love doing various things. One of them is to build web applications
						which is pretty, efficient, and clean. Researching about creative things
						and creating something nice by exploring & analyzing makes me unique.
					</p>
				</div>
				{/* 'Past-to-Present' portion */}
				<div>
					<h6 className="text-lg font-medium font-jetbrains-mono text-zinc-400">
						Past-to-Present
					</h6>
					<p className="text-[17px] text-zinc-300 text-balance">
						I started my programming journey at 2023 with some block-coding using
						Scratch Jr, Scratch. Then I explored building short of website using
						Wix. I just passed 2023 with block-coding and exploring. At 2024, I
						enhanced my block-coding with Scratch and then learned HTML, CSS, and
						Bootstrap. At 2025, I dived into the core part of Web Development. I
						learned Tailwind CSS, JavaScript (ES6), React.js, Express.js, MongoDB,
						and Next.js. And I built various easy-to-intermediate websites in 2025.
						Now I'm learning about Next.js advanced concepts and more optimization
						techniques of an application.
					</p>
				</div>
			</div>
			{/* About Me Images */}
			<div className="grid grid-cols-2 gap-2 h-full">
				<div className="p-[2px] bg-gradient-to-tr from-accent to-primary to-50% rounded-2xl hover:-rotate-2 hover:scale-103 transition-transform duration-400">
					<img
						src={Image1}
						alt="Image 1"
						className="h-full rounded-2xl object-cover"
					/>
				</div>
				<div className="p-[2px] bg-gradient-to-tr from-accent to-primary to-50% rounded-2xl hover:rotate-2 hover:scale-103 transition-transform duration-400">
					<img
						src={Image2}
						alt="Image 2"
						className="h-full rounded-2xl object-cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default AboutMe;

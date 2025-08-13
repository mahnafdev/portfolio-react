import TailwindCssLogo from "../../assets/skills/tailwindcss.png";
import DaisyUILogo from "../../assets/skills/daisyui.png";
import ReactLogo from "../../assets/skills/react.png";
import ExpressLogo from "../../assets/skills/express-js.png";
import MongoDbLogo from "../../assets/skills/mongodb.png";
import FirebaseLogo from "../../assets/skills/firebase.png";
import NetlifyLogo from "../../assets/skills/netlify.png";
import VercelLogo from "../../assets/skills/vercel.png";
import Project1Thumbnail from "../../assets/projects/tournext.png";
import Project2Thumbnail from "../../assets/projects/edusign.png";
import Project3Thumbnail from "../../assets/projects/gardeneon.png";
import ProjectCard from "../shared/ProjectCard";

const Projects = () => {
	const projects = [
		{
			thumbnail: Project1Thumbnail,
			title: "TourNext",
			slogan: "Next-Level Tourism Starts Here. Explore Smarter, Travel Nicer.",
			introduction: "A Tourism Management System",
			features: [
				"Secure authentication",
				"Scalable dashboard",
				"Role-based access control (RBAC)",
				"Efficient tracking system",
				"Community engagement with story sharing",
			],
			challengesFaced: [
				"Password reseting feature",
				"Scalable tour management",
				"Fully responsive pages",
				"Comprehensive tourism tracking flow",
			],
			futurePlans: [
				"Showing charts to enhance visual representation",
				"More flexible profile management",
				"Cleaner UI/UX",
				"Enhance tracking & analytics",
				"Optimize taskflow",
			],
			technologies: [
				{
					logo: ReactLogo,
					name: "React",
				},
				{
					logo: TailwindCssLogo,
					name: "Tailwind",
				},
				{
					logo: DaisyUILogo,
					name: "DaisyUI",
				},
				{
					logo: FirebaseLogo,
					name: "Firebase (Auth, Hosting)",
				},
				{
					logo: ExpressLogo,
					name: "Express",
				},
				{
					logo: MongoDbLogo,
					name: "MDB Atlas",
				},
				{
					logo: VercelLogo,
					name: "Vercel",
				},
			],
			website: "https://tournext-ada60.web.app",
			githubRepo: "https://github.com/mahnafdev/tournext-client",
		},
		{
			thumbnail: Project2Thumbnail,
			title: "EduSign",
			slogan: "The Smarter Way to Solve and Learn Together",
			introduction: "An Online Group-Study System",
			features: [
				"Secure token-based authentication",
				"Active learning through assignments",
				"Scalable assignment management",
				"Create or submit assignments",
				"View your assignment submission result",
			],
			challengesFaced: [
				"Securing authentication system through JWT",
				"Integrating filtering, sorting, searching assignments",
				"Assignment marks & result managing",
			],
			futurePlans: ["Profile management", "Basic dashboard", "Enhance study system"],
			technologies: [
				{
					logo: ReactLogo,
					name: "React.js",
				},
				{
					logo: TailwindCssLogo,
					name: "Tailwind",
				},
				{
					logo: FirebaseLogo,
					name: "Firebase (Auth, Hosting)",
				},
				{
					logo: ExpressLogo,
					name: "Express",
				},
				{
					logo: MongoDbLogo,
					name: "MDB Atlas",
				},
				{
					logo: VercelLogo,
					name: "Vercel",
				},
			],
			website: "https://edusign-e1494.web.app",
			githubRepo: "https://github.com/mahnafdev/edusign-client",
		},
		{
			thumbnail: Project3Thumbnail,
			title: "Gardeneon",
			slogan: "Your Gardening Guide, Powered by Community.",
			introduction: "A Gardening Guide Community",
			features: [
				"Gardening tips management",
				"Active gardening community through sharing gardening tips",
				"Gardening awareness with useful tips",
			],
			challengesFaced: [
				"Displaying tips responsively across all devices",
				"Securing routes (Private routes)",
				"Assignment marks & result managing",
			],
			futurePlans: [
				"Tips sorting & searching",
				"Community gardeners management",
				"Enhance garden gears",
			],
			technologies: [
				{
					logo: ReactLogo,
					name: "React.js",
				},
				{
					logo: TailwindCssLogo,
					name: "Tailwind",
				},
				{
					logo: FirebaseLogo,
					name: "Firebase (Auth, Hosting)",
				},
				{
					logo: ExpressLogo,
					name: "Express",
				},
				{
					logo: MongoDbLogo,
					name: "MDB Atlas",
				},
				{
					logo: NetlifyLogo,
					name: "Netlify",
				},
				{
					logo: VercelLogo,
					name: "Vercel",
				},
			],
			website: "https://a10-gardeneon.netlify.app",
			githubRepo: "https://github.com/mahnafdev/gardeneon-client",
		},
	];
	return (
		<section
			id="projects"
			className="pt-24 lg:pt-32 space-y-12"
		>
			{/* Section Header */}
			<h3 className="text-4xl font-semibold text-center font-jetbrains-mono bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent italic uppercase">
				Latest Projects
			</h3>
			{/* Projects Grid */}
			<div
				role="grid"
				className="grid xl:grid-cols-3 gap-4 md:gap-6 lg:gap-4"
			>
				{projects?.map((project) => (
					<ProjectCard
						key={project.title}
						project={project}
					/>
				))}
			</div>
		</section>
	);
};

export default Projects;

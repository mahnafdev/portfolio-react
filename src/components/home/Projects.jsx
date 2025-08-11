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
			technologies: [
				ReactLogo,
				TailwindCssLogo,
				DaisyUILogo,
				FirebaseLogo,
				ExpressLogo,
				MongoDbLogo,
				VercelLogo,
			],
			website: "https://tournext-ada60.web.app",
			githubRepo: "https://github.com/mahnafdev/tournext-client",
		},
		{
			thumbnail: Project2Thumbnail,
			title: "EduSign",
			slogan: "The Smarter Way to Solve and Learn Together",
			technologies: [
				ReactLogo,
				TailwindCssLogo,
				FirebaseLogo,
				ExpressLogo,
				MongoDbLogo,
				VercelLogo,
			],
			website: "https://edusign-e1494.web.app",
			githubRepo: "https://github.com/mahnafdev/edusign-client",
		},
		{
			thumbnail: Project3Thumbnail,
			title: "Gardeneon",
			slogan: "Your Gardening Guide, Powered by Community.",
			technologies: [
				ReactLogo,
				TailwindCssLogo,
				FirebaseLogo,
				ExpressLogo,
				MongoDbLogo,
				NetlifyLogo,
				VercelLogo,
			],
			website: "https://a10-gardeneon.netlify.app",
			githubRepo: "https://github.com/mahnafdev/gardeneon-client",
		},
	];
	return (
		<section
			id="projects"
			className="pt-32 space-y-12"
		>
			{/* Section Header */}
			<h3 className="text-4xl font-semibold text-center font-jetbrains-mono bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent italic uppercase">
				Latest Projects
			</h3>
			{/* Projects Grid */}
			<div
				role="grid"
				className="grid grid-cols-3 gap-4"
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

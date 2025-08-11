import HtmlLogo from "../../assets/skills/html.png";
import CssLogo from "../../assets/skills/css.png";
import TailwindCssLogo from "../../assets/skills/tailwindcss.png";
import DaisyUILogo from "../../assets/skills/daisyui.png";
import ReactLogo from "../../assets/skills/react.png";
import JavascriptLogo from "../../assets/skills/javascript.png";
import ExpressLogo from "../../assets/skills/express-js.png";
import CLogo from "../../assets/skills/c.png";
import CPlusPlusLogo from "../../assets/skills/c-plus-plus.png";
import PythonLogo from "../../assets/skills/python.png";
import MongoDbLogo from "../../assets/skills/mongodb.png";
import PostgresLogo from "../../assets/skills/postgresql.png";
import SupabaseLogo from "../../assets/skills/supabase.png";
import DjangoLogo from "../../assets/skills/django.png";
import FirebaseLogo from "../../assets/skills/firebase.png";
import GitLogo from "../../assets/skills/git.png";
import GithubLogo from "../../assets/skills/github.png";
import NetlifyLogo from "../../assets/skills/netlify.png";
import VercelLogo from "../../assets/skills/vercel.png";
import SkillBadge from "../ui/SkillBadge";

const Skills = () => {
	const skills = {
		frontend: [
			{
				logo: HtmlLogo,
				name: "HTML",
				borderColorClass: "border-amber-800",
			},
			{
				logo: CssLogo,
				name: "CSS",
				borderColorClass: "border-sky-700",
			},
			{
				logo: TailwindCssLogo,
				name: "Tailwind CSS",
				borderColorClass: "border-teal-700",
			},
			{
				logo: DaisyUILogo,
				name: "Daisy UI",
				borderColorClass: "border-yellow-700",
			},
			{
				logo: ReactLogo,
				name: "React",
				borderColorClass: "border-cyan-700",
			},
		],
		backend: [
			{
				logo: JavascriptLogo,
				name: "JavaScript",
				borderColorClass: "border-yellow-700",
			},
			{
				logo: ExpressLogo,
				name: "Express.js",
				borderColorClass: "border-yellow-700",
			},
			{
				logo: CLogo,
				name: "C",
				borderColorClass: "border-indigo-600",
			},
			{
				logo: CPlusPlusLogo,
				name: "C++",
				borderColorClass: "border-sky-700",
			},
			{
				logo: PythonLogo,
				name: "Python",
				borderColorClass: "border-sky-700",
			},
			{
				logo: DjangoLogo,
				name: "Django",
				borderColorClass: "border-green-700",
			},
			{
				logo: DjangoLogo,
				name: "REST Framework",
				borderColorClass: "border-rose-700",
			},
		],
		databases: [
			{
				logo: MongoDbLogo,
				name: "MongoDB",
				borderColorClass: "border-green-700",
			},
			{
				logo: PostgresLogo,
				name: "PostgreSQL",
				borderColorClass: "border-sky-700",
			},
			{
				logo: SupabaseLogo,
				name: "Supabase",
				borderColorClass: "border-emerald-700",
			},
		],
		firebase: [
			{
				logo: FirebaseLogo,
				name: "Authentication",
				borderColorClass: "border-amber-700",
			},
			{
				logo: FirebaseLogo,
				name: "Hosting",
				borderColorClass: "border-amber-700",
			},
		],
		vcs_and_deployment: [
			{
				logo: GitLogo,
				name: "Git",
				borderColorClass: "border-orange-700",
			},
			{
				logo: GithubLogo,
				name: "GitHub",
				borderColorClass: "border-zinc-500",
			},
			{
				logo: NetlifyLogo,
				name: "Netlify",
				borderColorClass: "border-teal-700",
			},
			{
				logo: VercelLogo,
				name: "Vercel",
				borderColorClass: "border-zinc-500",
			},
			{
				logo: FirebaseLogo,
				name: "Firebase",
				borderColorClass: "border-amber-700",
			},
		],
	};
	return (
		<section
			id="skills"
			className="flex flex-col gap-y-4"
		>
			{/* Section Header */}
			<h3 className="text-4xl font-semibold font-jetbrains-mono text-center bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent uppercase">
				Skills
			</h3>
			{/* Frontend */}
			<div className="space-y-2">
				{/* Category Title */}
				<h5 className="text-xl font-medium font-jetbrains-mono text-zinc-400">
					Frontend
				</h5>
				{/* Category Skills */}
				<div className="flex flex-wrap gap-2">
					{skills?.frontend?.map((skill) => (
						<SkillBadge
							key={skill.name}
							borderColorClass={skill.borderColorClass}
						>
							<img
								src={skill.logo}
								alt={`${skill.name} Logo`}
								className="w-5"
							/>
							{skill.name}
						</SkillBadge>
					))}
				</div>
			</div>
			{/* Backend */}
			<div className="self-end space-y-2">
				{/* Category Header */}
				<h5 className="text-xl font-medium font-jetbrains-mono text-zinc-400 text-end">
					Backend
				</h5>
				{/* Category Skills */}
				<div className="flex flex-wrap gap-2">
					{skills?.backend?.map((skill) => (
						<SkillBadge
							key={skill.name}
							borderColorClass={skill.borderColorClass}
						>
							<img
								src={skill.logo}
								alt={`${skill.name} Logo`}
								className="w-5"
							/>
							{skill.name}
						</SkillBadge>
					))}
				</div>
			</div>
			{/* Databases */}
			<div className="space-y-2">
				{/* Category Header */}
				<h5 className="text-xl font-medium font-jetbrains-mono text-zinc-400">
					Databases
				</h5>
				{/* Category Skills */}
				<div className="flex flex-wrap gap-2">
					{skills?.databases?.map((skill) => (
						<SkillBadge
							key={skill.name}
							borderColorClass={skill.borderColorClass}
						>
							<img
								src={skill.logo}
								alt={`${skill.name} Logo`}
								className="w-5"
							/>
							{skill.name}
						</SkillBadge>
					))}
				</div>
			</div>
			{/* Firebase */}
			<div className="self-end space-y-2">
				{/* Category Header */}
				<h5 className="text-xl font-medium font-jetbrains-mono text-zinc-400 text-end">
					Firebase
				</h5>
				{/* Category Skills */}
				<div className="flex flex-wrap gap-2">
					{skills?.firebase?.map((skill) => (
						<SkillBadge
							key={skill.name}
							borderColorClass={skill.borderColorClass}
						>
							<img
								src={skill.logo}
								alt={`${skill.name} Logo`}
								className="w-5"
							/>
							{skill.name}
						</SkillBadge>
					))}
				</div>
			</div>
			{/* VCS & Deployment */}
			<div className="space-y-2">
				<h5 className="text-xl font-medium font-jetbrains-mono text-zinc-400">
					VCS & Deployment
				</h5>
				{/* Category Skills */}
				<div className="flex flex-wrap gap-2">
					{skills?.vcs_and_deployment?.map((skill) => (
						<SkillBadge
							key={skill.name}
							borderColorClass={skill.borderColorClass}
						>
							<img
								src={skill.logo}
								alt={`${skill.name} Logo`}
								className="w-5"
							/>
							{skill.name}
						</SkillBadge>
					))}
				</div>
			</div>
		</section>
	);
};

export default Skills;

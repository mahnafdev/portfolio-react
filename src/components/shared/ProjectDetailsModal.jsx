import { XCircleIcon } from "lucide-react";
import SkillBadge from "../ui/SkillBadge";
import Link from "../ui/Link";
import Button from "../ui/Button";

const ProjectDetailsModal = ({ isOpen, closeModal, project }) => {
	const {
		thumbnail,
		title,
		slogan,
		introduction,
		features,
		challengesFaced,
		futurePlans,
		technologies,
		website,
		githubRepo,
	} = project;
	return (
		isOpen && (
			<div className="fixed inset-0 z-[999] flex items-center justify-center bg-dark/30 backdrop-blur-xs">
				{/* Modal Box */}
				<div className="w-full max-w-sm md:max-w-[38rem] lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl max-h-[90vh] bg-zinc-900 rounded-3xl pt-5 p-6 overflow-y-auto relative space-y-4">
					{/* Close Button */}
					<button
						type="button"
						className="absolute p-1 top-3 right-3 hover:text-accent transition-colors cursor-pointer"
						onClick={closeModal}
					>
						<XCircleIcon size={28} />
					</button>
					{/* Title */}
					<h2 className="text-4xl font-semibold text-center text-primary">{title}</h2>
					{/* Introduction */}
					<h6 className="text-center text-lg font-medium">{introduction}</h6>
					{/* Slogan */}
					<h6 className="text-center text-lg italic">
						<q>{slogan}</q>
					</h6>
					{/* Thumbnail */}
					<div>
						<img
							src={thumbnail}
							alt="Thumbnail Image"
							className="w-full h-96 object-cover rounded-2xl"
						/>
					</div>
					{/* Key Features */}
					<div className="space-y-1">
						<h6 className="text-lg font-medium">Key Features</h6>
						<ul className="pl-4 [list-style-type:circle] space-y-1">
							{features.map((feature) => (
								<li key={feature}>{feature}</li>
							))}
						</ul>
					</div>
					{/* Challenges Faced */}
					<div className="space-y-1">
						<h6 className="text-lg font-medium">
							Challenges Face while Developing
						</h6>
						<ul className="pl-4 [list-style-type:circle] space-y-1">
							{challengesFaced.map((challenge) => (
								<li key={challenge}>{challenge}</li>
							))}
						</ul>
					</div>
					{/* Future Plans */}
					<div className="space-y-1">
						<h6 className="text-lg font-medium">Future Plans & Improvements</h6>
						<ul className="pl-4 [list-style-type:circle] space-y-1">
							{futurePlans.map((task) => (
								<li key={task}>{task}</li>
							))}
						</ul>
					</div>
					{/* Technologies */}
					<div className="space-y-2">
						<h5 className="text-xl font-medium">Technologies</h5>
						<div className="flex gap-1">
							{technologies.map((technology) => (
								<SkillBadge borderColorClass="border-zinc-600">
									<img
										key={technology.name}
										src={technology.logo}
										alt={technology.name}
										className="w-5"
									/>
									<span className="text-sm">{technology.name}</span>
								</SkillBadge>
							))}
						</div>
					</div>
					{/* Action Buttons/Links */}
					<div className="mt-6 flex justify-center gap-2">
						{/* Website */}
						<Link
							anchorLink
							href={website}
							openInNewTab
						>
							<Button
								hoverEffect1
								activeEffect1
							>
								Website
							</Button>
						</Link>
						{/* Repo */}
						<Link
							anchorLink
							href={githubRepo}
							openInNewTab
						>
							<Button
								hoverEffect1
								activeEffect1
							>
								GitHub Repo
							</Button>
						</Link>
					</div>
					{/* Close Button */}
					<div className="flex justify-end">
						<button
							type="button"
							className="hover:text-accent transition-colors cursor-pointer"
							onClick={closeModal}
						>
							<XCircleIcon size={28} />
						</button>
					</div>
				</div>
			</div>
		)
	);
};

export default ProjectDetailsModal;

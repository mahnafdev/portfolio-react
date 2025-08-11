import Button from "../ui/Button";
import Link from "../ui/Link";

const ProjectCard = ({ project }) => {
	const { thumbnail, title, slogan, technologies, website, githubRepo } = project;
	return (
		<div className="pb-4 space-y-4 bg-zinc-900 rounded-3xl">
			{/* Thumbnail */}
			<div className="overflow-hidden rounded-t-3xl">
				<img
					src={thumbnail}
					alt="Thumbnail Image"
					className="w-full h-72 rounded-t-3xl object-cover hover:scale-110 transition-transform duration-350"
				/>
			</div>
			{/* Other Info */}
			<div className="mx-4">
				{/* Title */}
				<h3 className="text-3xl font-medium text-zinc-200 text-center">{title}</h3>
				{/* Slogan */}
				<p className="mt-2 text-center italic text-balance">{slogan}</p>
				{/* Technologies */}
				<div className="mt-6 flex flex-wrap justify-center gap-2">
					{technologies.map((technology) => (
						<img
							key={technology}
							src={technology}
							className="w-6"
						/>
					))}
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
							hoverEffect2
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
							hoverEffect2
							activeEffect1
						>
							Repo
						</Button>
					</Link>
					{/* Details */}
					<Button
						hoverEffect2
						activeEffect1
					>
						Details
					</Button>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;

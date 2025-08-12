import Button from "../ui/Button";
import Link from "../ui/Link";

const ProjectCard = ({ project }) => {
	const { thumbnail, title, slogan, introduction, technologies, website, githubRepo } =
		project;
	return (
		<div className="pb-4 space-y-4 bg-zinc-900 border border-primary/70 rounded-3xl shadow-lg shadow-zinc-900 relative">
			<div className="rounded-t-3xl absolute top-0 left-0 w-full h-72 bg-light/10 opacity-0 hover:opacity-100 hover:backdrop-blur transition-[opacity,backdrop-filter] duration-300 grid place-items-center">
				<p className="text-lg text-zinc-900 font-semibold text-center italic text-balance">
					{slogan}
				</p>
			</div>
			{/* Thumbnail */}
			<img
				src={thumbnail}
				alt="Thumbnail Image"
				className="w-full h-72 rounded-t-3xl object-cover"
			/>
			{/* Other Info */}
			<div className="mx-4">
				{/* Title */}
				<h3 className="text-3xl font-medium text-zinc-200 text-center">{title}</h3>
				{/* Slogan */}
				<p className="mt-2 text-center text-balance">{introduction}</p>
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

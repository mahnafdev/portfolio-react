const SkillBadge = ({ children: content = "Skill Badge", borderColorClass = "" }) => {
	return (
		<div
			className={`px-2 py-1.5 bg-gradient-to-r from-zinc-900 to-zinc-800 rounded-md flex items-center gap-x-2 text-zinc-200 border ${borderColorClass} cursor-default`}
		>
			{content}
		</div>
	);
};

export default SkillBadge;

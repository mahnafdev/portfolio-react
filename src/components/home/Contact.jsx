const Contact = () => {
	return (
		<section
			id="contact"
			className="pt-32 grid grid-cols-2 gap-8"
		>
			{/* Contact Form */}
			<div className="space-y-4">
				{/* Section Header 1 */}
				<h3 className="text-3xl font-semibold font-jetbrains-mono bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent italic uppercase">
					Contact Me Now
				</h3>
				<form className="space-y-3">
					{/* Row 1 */}
					<div className="grid grid-cols-2 gap-4">
						{/* Name */}
						<label className="flex flex-col gap-y-1">
							<span className="text-xl font-medium text-zinc-300">Name</span>
							<input
								type="text"
								name="name"
								className="px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
								placeholder="e.g: Steve Uchiha"
							/>
						</label>
						{/* Email */}
						<label className="flex flex-col gap-y-1">
							<span className="text-xl font-medium text-zinc-300">Email</span>
							<input
								type="email"
								name="email"
								className="px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
								placeholder="e.g: steve@example.com"
							/>
						</label>
					</div>
					{/* Topic */}
					<label className="flex flex-col gap-y-1">
						<span className="text-xl font-medium text-zinc-300">Topic</span>
						<input
							type="text"
							name="topic"
							className="px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
							placeholder="e.g: I want to collaborate with you in a project"
						/>
					</label>
					{/* Message */}
					<label className="flex flex-col gap-y-1">
						<span className="text-xl font-medium text-zinc-300">Message</span>
						<textarea
							name="message"
							rows={4}
							className="resize-none px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
							placeholder="Please briefly describe your reason to contact"
						/>
					</label>
				</form>
			</div>
			{/* Other Contact ways */}
			<div className="space-y-6">
				<div className="space-y-4">
					{/* Section Header 2 */}
					<h4 className="text-2xl font-semibold font-jetbrains-mono bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent italic uppercase">
						Other Ways to Connect with Me
					</h4>
					<p className="text-lg text-zinc-400">
						You can send me an email or a WhatsApp message, or even call me. You can
						also try finding me physically (good luck with it 😅). Or let's just get
						connected in a social platform.
					</p>
				</div>
				<div className="space-y-3">
					{/* Email */}
					<div className="pl-3 pr-2 py-2 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center gap-3">
						<h5 className="text-xl font-medium text-zinc-200">Email</h5>
						<p className="w-full px-4 py-2 bg-dark/90 rounded-md text-lg font-medium text-zinc-300 font-jetbrains-mono shadow-md shadow-dark/50">
							mahnafdev@gmail.com
						</p>
					</div>
					{/* WhatsApp Number */}
					<div className="pl-3 pr-2 py-2 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center gap-3">
						<h5 className="text-xl font-medium text-zinc-200">WhatsApp</h5>
						<p className="w-full px-4 py-2 bg-dark/90 rounded-md text-lg font-medium text-zinc-300 font-jetbrains-mono shadow-md shadow-dark/50">
							+8801710243940
						</p>
					</div>
					{/* Location */}
					<div className="pl-3 pr-2 py-2 bg-zinc-800 border border-zinc-600 rounded-lg flex items-center gap-3">
						<h5 className="text-xl font-medium text-zinc-200">Location</h5>
						<p className="w-full px-4 py-2 bg-dark/90 rounded-md text-lg font-medium text-zinc-300 font-jetbrains-mono shadow-md shadow-dark/50">
							Rajshahi, Bangladesh
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;

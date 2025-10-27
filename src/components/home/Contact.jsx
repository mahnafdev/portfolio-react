import { useState } from "react";
import Button from "../ui/Button";
import { toast } from "sonner";

const Contact = () => {
	// Form Data
	const [formData, setFormData] = useState({
		senderName: "",
		senderEmail: "",
		subject: "",
		body: "",
	});
	// Handle Input Value Change
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};
	// Handle Send Email
	const handleSendEmail = async (e) => {
		e.preventDefault();
		try {
			// Send Email through Server
			const res = await fetch("http://localhost:5100/email/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formData),
			});
			// If successful
			if (res.status === 201) {
				setFormData({ senderName: "", senderEmail: "", subject: "", body: "" });
				toast.success("Your message is sent to Ahnaf!", {
					duration: 3250,
					description: `${formData.senderEmail} – contact@mahnaf.com`,
				});
			}
			// eslint-disable-next-line no-unused-vars
		} catch (error) {
			toast.error("Your message couldn't be sent!", {
				description: "Please try another to reach me out, I'll fix it soon!",
			});
		}
	};
	return (
		<section
			id="contact"
			className="pt-24 lg:pt-32 grid lg:grid-cols-2 gap-12 lg:gap-8"
		>
			{/* Contact Form */}
			<div className="space-y-4">
				{/* Section Header 1 */}
				<h3 className="text-3xl font-semibold font-jetbrains-mono bg-gradient-to-b from-zinc-400 via-zinc-100 to-zinc-500 bg-clip-text text-transparent italic uppercase">
					Contact Me Now
				</h3>
				<form
					className="space-y-3"
					onSubmit={handleSendEmail}
				>
					{/* Row 1 */}
					<div className="grid grid-cols-2 gap-4">
						{/* Name */}
						<label className="flex flex-col gap-y-1">
							<span className="text-xl font-medium text-zinc-300">Name</span>
							<input
								type="text"
								name="senderName"
								className="px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
								value={formData.senderName}
								onChange={handleInputChange}
								placeholder="e.g., Jhankar Mahbub"
							/>
						</label>
						{/* Email */}
						<label className="flex flex-col gap-y-1">
							<span className="text-xl font-medium text-zinc-300">Email</span>
							<input
								type="email"
								name="senderEmail"
								className="px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
								value={formData.senderEmail}
								onChange={handleInputChange}
								placeholder="e.g., jhanku@example.com"
							/>
						</label>
					</div>
					{/* Subject */}
					<label className="flex flex-col gap-y-1">
						<span className="text-xl font-medium text-zinc-300">Subject</span>
						<input
							type="text"
							name="subject"
							className="px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
							value={formData.subject}
							onChange={handleInputChange}
							placeholder="e.g., I want to collaborate with you in a project"
						/>
					</label>
					{/* Message */}
					<label className="flex flex-col gap-y-1">
						<span className="text-xl font-medium text-zinc-300">Message</span>
						<textarea
							name="body"
							rows={4}
							className="resize-none px-3 py-2 bg-zinc-900 border border-primary/60 focus:outline-none focus:border-accent/60 rounded-md"
							value={formData.body}
							onChange={handleInputChange}
							placeholder="Please briefly describe your reason to contact"
						/>
					</label>
					<Button
						type="submit"
						hoverEffect1
						activeEffect2
					>
						Send Message
					</Button>
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
							contact@mahnaf.com
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

import { Link } from "react-router";
import Logo from "../assets/logo.png";

const NavBar = () => {
	return (
		<nav className="px-64 py-2 fixed top-0 left-0 right-0 flex items-center justify-between bg-dark/75 backdrop-blur-md">
			{/* Logo */}
			<Link to="/">
				<div>
					{/* Logo Image */}
					<img
						src={Logo}
						alt="Logo Image"
						className="size-12 hover:invert-100 transition-[filter] duration-500"
					/>
				</div>
			</Link>
			{/* Navigation Links */}
			<ul className="flex items-center gap-2 text-lg">
				{/* About Me */}
				<li>
					<a
						href="/#about-me"
						className="px-3 py-2 rounded-md hover:bg-zinc-800/50 active:text-accent/90 transition-colors duration-200"
					>
						About Me
					</a>
				</li>
				{/* Skills */}
				<li>
					<a
						href="/#skills"
						className="px-3 py-2 rounded-md hover:bg-zinc-800/50 active:text-accent/90 transition-colors duration-200"
					>
						Skills
					</a>
				</li>
				{/* Courses */}
				<li>
					<a
						href="/#courses"
						className="px-3 py-2 rounded-md hover:bg-zinc-800/50 active:text-accent/90 transition-colors duration-200"
					>
						Courses
					</a>
				</li>
				{/* Projects */}
				<li>
					<a
						href="/#projects"
						className="px-3 py-2 rounded-md hover:bg-zinc-800/50 active:text-accent/90 transition-colors duration-200"
					>
						Projects
					</a>
				</li>
			</ul>
			{/* Buttons */}
			<div>
				<button
					type="button"
					className="px-4.5 py-2.5 rounded-lg bg-zinc-800 hover:bg-zinc-900 outline outline-transparent hover:outline-accent/40 active:scale-95 transition-[background-colors,outline,scale] duration-250 cursor-pointer"
				>
					Resume
				</button>
			</div>
		</nav>
	);
};

export default NavBar;

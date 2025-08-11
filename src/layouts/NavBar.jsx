import { Link as ReactLink } from "react-router";
import Logo from "../assets/logo.png";
import Button from "../components/ui/Button";
import Link from "../components/ui/Link";

const NavBar = () => {
	return (
		<nav className="px-64 py-2 z-[999] fixed top-0 left-0 right-0 flex items-center justify-between bg-dark/75 backdrop-blur-md">
			{/* Logo */}
			<ReactLink to="/">
				<div>
					{/* Logo Image */}
					<img
						src={Logo}
						alt="Logo Image"
						className="size-12 hover:invert-100 transition-[filter] duration-500"
					/>
				</div>
			</ReactLink>
			{/* Navigation Links */}
			<ul className="flex items-center gap-2 text-lg">
				{/* About Me */}
				<li>
					<Link
						anchorLink
						href="/#about-me"
						hoverEffect1
						activeEffect1
					>
						About Me
					</Link>
				</li>
				{/* Skills */}
				<li>
					<Link
						anchorLink
						href="/#skills"
						hoverEffect1
						activeEffect1
					>
						Skills
					</Link>
				</li>
				{/* Projects */}
				<li>
					<Link
						anchorLink
						href="/#projects"
						hoverEffect1
						activeEffect1
					>
						Projects
					</Link>
				</li>
				{/* Contact */}
				<li>
					<Link
						anchorLink
						href="/#contact"
						hoverEffect1
						activeEffect1
					>
						Contact
					</Link>
				</li>
			</ul>
			{/* Buttons */}
			<div>
				<Button
					hoverEffect1
					activeEffect1
				>
					Resume
				</Button>
			</div>
		</nav>
	);
};

export default NavBar;

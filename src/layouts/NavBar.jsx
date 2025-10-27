import { Link as ReactLink } from "react-router";
import Logo from "../assets/logo.png";
import Button from "../components/ui/Button";
import Link from "../components/ui/Link";
import { useState } from "react";
import { MenuIcon } from "lucide-react";

const NavBar = () => {
	// Mobile Menu visibility state
	const [showMenu, setShowMenu] = useState(false);
	return (
		<nav className="px-4 md:px-24 xl:px-64 py-4 md:py-2 z-[999] fixed top-0 left-0 right-0 flex items-center justify-between bg-dark/75 backdrop-blur-md relative">
			{/* Mobile Menu */}
			<div
				id="mobile-menu"
				className="relative md:hidden"
			>
				{/* Toggle Menu */}
				<h3
					className="p-1 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
					onClick={() => setShowMenu(!showMenu)}
				>
					<MenuIcon size={32} />
				</h3>
				{/* Menu Content */}
				<ul
					className={`w-32 px-1 py-3 border border-primary bg-zinc-900 font-medium absolute top-10 left-0 ${
						showMenu ? "flex flex-col" : "hidden"
					} rounded-xl space-y-2`}
				>
					<li>
						<a
							href="/#about-me"
							className="pl-2 border-l-2 border-transparent hover:border-l-accent transition-colors"
						>
							About Me
						</a>
					</li>
					<li>
						<a
							href="/#skills"
							className="pl-2 border-l-2 border-transparent hover:border-l-accent transition-colors"
						>
							Skills
						</a>
					</li>
					<li>
						<a
							href="/#projects"
							className="pl-2 border-l-2 border-transparent hover:border-l-accent transition-colors"
						>
							Projects
						</a>
					</li>
					<li>
						<a
							href="/#contact"
							className="pl-2 border-l-2 border-transparent hover:border-l-accent transition-colors"
						>
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div>
				{/* Logo */}
				<ReactLink to="/">
					{/* Logo Image */}
					<img
						src={Logo}
						alt="Logo Image"
						className="size-10 md:size-12 hover:invert-100 transition-[filter] duration-500"
					/>
				</ReactLink>
				{/* Portfolio Version */}
				<span className="absolute top-[50%] -translate-y-[50%] left-10 text-zinc-400 font-medium cursor-default">
					v1.1
				</span>
			</div>
			{/* Navigation Links */}
			<ul className="hidden md:flex items-center gap-2 text-lg">
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
			<a
				href="https://drive.google.com/file/d/1JtW_458BxYiF0I2M_EYVYWHxNLlqBglZ/view"
				target="_blank"
			>
				<Button
					hoverEffect1
					activeEffect1
				>
					Resume
				</Button>
			</a>
		</nav>
	);
};

export default NavBar;

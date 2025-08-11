import AboutMe from "../components/home/AboutMe";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

const HomePage = () => {
	return (
		<main className="px-64 py-28">
			<p className="absolute top-20 left-5 text-zinc-400 font-medium animate-pulse">
				Howdy! 😉
			</p>
			<Hero />
			<AboutMe />
			<Skills />
			<Projects />
			<Contact />
		</main>
	);
};

export default HomePage;

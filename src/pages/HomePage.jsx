import AboutMe from "../components/home/AboutMe";
import Contact from "../components/home/Contact";
import Hero from "../components/home/Hero";
import Projects from "../components/home/Projects";
import Skills from "../components/home/Skills";

const HomePage = () => {
	return (
		<main className="px-4 md:px-24 2xl:px-64 py-28">
			<p className="absolute top-18 left-3 md:top-20 md:left-5 text-zinc-400 font-medium animate-pulse">
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

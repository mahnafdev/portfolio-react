import AboutMe from "../components/home/AboutMe";
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";

const HomePage = () => {
	return (
		<main className="px-64 py-28 space-y-32">
			<p className="absolute top-20 left-5 text-zinc-400 font-medium animate-pulse">
				Howdy! 😉
			</p>
			<Hero />
			<AboutMe />
			<Skills />
		</main>
	);
};

export default HomePage;

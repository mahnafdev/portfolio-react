import AboutMe from "../components/home/AboutMe";
import Hero from "../components/home/Hero";

const HomePage = () => {
	return (
		<main className="px-64 py-32 space-y-32">
			<Hero />
			<AboutMe />
		</main>
	);
};

export default HomePage;

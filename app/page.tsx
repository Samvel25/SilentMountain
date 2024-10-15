"use client";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/home-1/About";
import Banner from "@/components/home-1/Banner";
import CallToAction from "@/components/home-1/CallToAction";
import Contact from "@/components/home-1/Contact";
import Counter from "@/components/home-1/Counter";
import JobOpens from "@/components/home-1/JobOpens";
import LifeGameStorm from "@/components/home-1/LifeGameStorm";
import OurGames from "@/components/home-1/OurGames";
import Services from "@/components/home-1/Services";
import Team from "@/components/home-1/Team";
import Testimonials from "@/components/home-1/Testimonials";

export default function Home() {
	return (
		<>
			{/* <!-- Sidebar Menu end --> */}
			<Header />
			{/* <!-- Banner-section start --> */}
			<Banner />
			{/* <!-- Banner-section end --> */}

			{/* <!-- About block section start --> */}
			<About />

			{/* <!-- About block section end --> */}

			{/* <!-- Our Games section start --> */}
			<OurGames />
			{/* <!-- Our Games section end --> */}

			{/* <!-- Team Members start --> */}
			<Team />
			{/* <!-- Team Members end --> */}

			{/* <!-- Counter Section start --> */}
			<Counter />
			{/* <!-- Counter Section end --> */}

			{/* <!-- Our Services start --> */}
			<Services />
			{/* <!-- Our Services end --> */}

			{/* <!-- Life Gamestorm start --> */}
			<LifeGameStorm />
			{/* <!-- Life Gamestorm end --> */}

			{/* <!-- Job Opens start --> */}
			<JobOpens />
			{/* <!-- Job Opens end --> */}

			{/* <!-- testimonials start --> */}
			<Testimonials />
			{/* <!-- testimonials end --> */}

			{/* <!-- Call to Action start --> */}
			<CallToAction />
			{/* <!-- Call to Action end --> */}

			{/* <!-- Contact Us start --> */}
			<Contact />
			{/* <!-- Contact Us end --> */}

			{/* <!-- Footer Area Start --> */}
			<Footer />
		</>
	);
}

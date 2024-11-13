"use client";
import Footer from "@/components/home-2/Footer";
import Header from "@/components/Header";
import About from "@/components/home-2/About";
import Banner from "@/components/home-1/Banner";
import CallToAction from "@/components/home-1/CallToAction";
import Contact from "@/components/home-1/Contact";
import Counter from "@/components/home-2/Counter";
import JobOpens from "@/components/home-1/JobOpens";
import LifeGameStorm from "@/components/home-1/LifeGameStorm";
import OurGames from "@/components/home-1/OurGames";
import Services from "@/components/home-1/Services";
import Team from "@/components/home-1/Team";
import Testimonials from "@/components/home-3/Testimonial";
import Blog from "@/components/home-3/Blog";

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

			<Counter />

			<Services />

			<div className="pt-120">
				<Testimonials />
			</div>

			<Blog />
			<div className="pt-120">
				<Contact />
			</div>

			<Footer />
		</>
	);
}

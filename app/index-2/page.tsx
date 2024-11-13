"use client";
import Header from "@/components/Header";
import About from "@/components/home-2/About";
import Banner from "@/components/home-2/Banner";
import CallToAction from "@/components/home-2/CallToAction";
import Counter from "@/components/home-2/Counter";
import Faq from "@/components/home-2/Faq";
import Footer from "@/components/home-2/Footer";
import Gallery from "@/components/home-2/Gallery";
import Jobs from "@/components/home-2/Jobs";
import OurGames from "@/components/home-2/OurGames";
import Partner from "@/components/home-2/Partner";
import Service from "@/components/home-2/Service";
import Team from "@/components/home-2/Team";
import Recent from "@/components/home-2/Recent";

const page = () => {
	return (
		<>
			{/* Header section start */}
			<Header />
			{/* Banner Section Start */}
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
			<Service />
			{/* <!-- Our Services end --> */}

			{/* <!-- Recently Completed start --> */}
			<Recent />
			{/* <!-- Recently Completed end --> */}

			{/* <!-- our partners start --> */}
			<Partner />
			{/* <!-- our partners end --> */}

			{/* <!-- Gallery Studio start --> */}
			<Gallery />
			{/* <!-- Gallery Studio end --> */}

			{/* <!-- Faq Section start --> */}
			<Faq />
			{/* <!-- Faq Section end --> */}

			{/* <!-- Job Opens start --> */}
			<Jobs />
			{/* <!-- Job Opens end --> */}

			{/* <!-- Call to Action start --> */}
			<CallToAction />
			{/* <!-- Call to Action end --> */}

			{/* <!-- Footer Area Start --> */}
			<Footer />
		</>
	);
};

export default page;

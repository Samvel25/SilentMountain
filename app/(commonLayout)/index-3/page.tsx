"use client";
import Recent from "@/components/home-2/Recent";
import Service from "@/components/home-2/Service";
import About from "@/components/home-3/About";
import AllGames from "@/components/home-3/AllGames";
import Banner from "@/components/home-3/Banner";
import Blog from "@/components/home-3/Blog";
import Character from "@/components/home-3/Character";
import FeaturedGames from "@/components/home-3/FeaturedGames";
import Footer from "@/components/home-3/Footer";
import InstagramPost from "@/components/home-3/InstagramPost";
import Team from "@/components/home-3/Team";
import Testimonial from "@/components/home-3/Testimonial";

const page = () => {
	return (
		<>
			{/* <!-- Banner-section end --> */}
			<Banner />
			{/* <!-- About block section start --> */}
			<About />
			{/* <!-- About block section end --> */}

			{/* <!-- Features Games start --> */}
			<FeaturedGames />
			{/* <!-- Features Games end --> */}

			{/* <!-- Our Services start --> */}
			<Service />
			{/* <!-- Our Services end --> */}

			{/* <!-- All Games start --> */}
			<AllGames />
			{/* <!-- All Games end --> */}

			{/* <!-- Recently Completed start --> */}
			{/* <Recent /> */}
			{/* <!-- Recently Completed end --> */}

			{/* <!-- Gaming Character start --> */}
			<Character />
			{/* <!-- Gaming Character end --> */}

			{/* <!-- our Teams start --> */}
			<Team />
			{/* <!-- our Teams end --> */}

			{/* <!-- Testimonial start --> */}
			<Testimonial />
			{/* <!-- Testimonial end --> */}

			{/* <!-- Blogs start --> */}
			<Blog />
			{/* <!-- Blogs end --> */}

			{/* <!-- Instagram post start --> */}
			<InstagramPost />
			{/* <!-- Instagram post end --> */}
		</>
	);
};

export default page;

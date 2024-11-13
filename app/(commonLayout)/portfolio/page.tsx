"use client";
import Banner from "@/components/game/Banner";
import CallToAction from "@/components/game/CallToAction";
import Community from "@/components/game/Community";
import KeyComponent from "@/components/game/KeyComponent";
import AllGames from "@/components/home-3/AllGames";
import Blog from "@/components/home-3/Blog";
import InstagramPost from "@/components/home-3/InstagramPost";
import React from "react";

const page = () => {
	return (
		<>
			<Banner />
			{/* <!-- Banner-section end --> */}

			{/* <!-- Our Game features start --> */}
			{/* <KeyComponent /> */}
			{/* <!-- Our Game features end --> */}

			{/* <!-- Our Games section start --> */}
			<AllGames />
			{/* <!-- Our Games section end --> */}

			{/* <!-- our gaming community start --> */}
			{/* <Community /> */}
			{/* <!-- our gaming community end --> */}

			{/* <!-- Call to Action start --> */}
			{/* <CallToAction /> */}
			{/* Blog section */}
			{/* <Blog /> */}
			{/* <!-- Blogs end --> */}

			{/* <!-- Instagram post start --> */}
			{/* <InstagramPost /> */}
			{/* <!-- Instagram post end --> */}
		</>
	);
};

export default page;

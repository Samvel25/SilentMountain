"use client";
import Banner from "@/components/about/Banner";
import Focus from "@/components/about/Focus";
import Story from "@/components/about/Story";
import Values from "@/components/about/Values";
import CallToAction from "@/components/game/CallToAction";
import Jobs from "@/components/home-2/Jobs";
import Partner from "@/components/home-2/Partner";
import InstagramPost from "@/components/home-3/InstagramPost";
import About from "@/components/home-1/About";
import Counter from "@/components/home-1/Counter";
import Team from "@/components/home-1/Team";
import Testimonials from "@/components/home-1/Testimonials";
import React from "react";

const page = () => {
	return (
		<>
			{/* Banner */}
			<Banner />
			{/* About */}
			<About />
			{/* Values */}
			<Values />
			{/* Team */}
			<Team />
			{/* Counter */}
			<div className="pb-120">
				<Counter />
			</div>

			{/* Focus section */}
			<Focus />
			{/* Story */}
			<Story />
			{/* call to action */}
			<CallToAction />
			{/* jobs */}
			<Jobs />
			{/* Testimonial */}
			{/* <Testimonials /> */}
			{/* Partnar section */}
			<Partner />
			{/* Instagram */}
			<InstagramPost />
		</>
	);
};

export default page;

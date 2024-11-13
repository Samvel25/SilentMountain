"use client";
import Recent from "@/components/home-2/Recent";
import InstagramPost from "@/components/home-3/InstagramPost";
import Banner from "@/components/service-1/Banner";
import Benefits from "@/components/service-1/Benefits";
import Counter from "@/components/service-1/Counter";
import HowWork from "@/components/service-1/HowWork";
import Contact from "@/components/home-1/Contact";
import Services from "@/components/home-2/Service";
// import Testimonial from "@/components/home-1/Testimonials";
import Testimonial from "@/components/service-2/Testimonial";
import React from "react";
import Faq from "@/components/home-2/Faq";
import Partner from "@/components/home-2/Partner";

const page = () => {
	return (
		<>
			{/* <!-- Banner-section --> */}
			<Banner />

			{/* <!-- Services  --> */}
			<Services />

			{/* Benefit section */}
			<Benefits />

			{/* Recent  */}
			{/* <Recent /> */}

			{/* <!-- Counter section --> */}

			<Counter />

			{/* <!-- How it works --> */}
			{/* <HowWork /> */}

			{/* <!-- Testimonial --> */}

			<Testimonial />

			{/* Contact */}
			<div className="pt-120">
				<Contact />
			</div>
			{/* Faq section */}
			{/* <Faq /> */}
			{/* Partner */}
			{/* <Partner /> */}
			{/* Instagram post */}
			{/* <InstagramPost /> */}
		</>
	);
};

export default page;

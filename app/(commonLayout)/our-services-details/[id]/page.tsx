"use client";
import { useParams } from "next/navigation";
import Recent from "@/components/home-2/RecentDynamic";
import Counter from "@/components/service-1/Counter";
import Contact from "@/components/home-1/Contact";
import Testimonials from "@/components/home-1/Testimonials";
import React from "react";
import Banner from "@/components/service-details-1/Banner";
import Specialize from "@/components/service-details-1/Specialize";
import Keyplatform from "@/components/service-details-1/Keyplatform";
import Fundamental from "@/components/service-details-1/Fundamental";
import { services } from "@/public/data/servicesData"; // Import your data

const Page = () => {
	const { id } = useParams() as { id: string }; // Type assertion to specify 'id' is a string
	const serviceId = id; // Assign to serviceId

	// Fetch the service data based on the serviceId
	const serviceContent = services.find((service) => service.id === serviceId);

	if (!serviceContent) {
		return <div>Loading...</div>; // Or handle the case where the service is not found
	}

	// Ensure counters data is available
	const counters = serviceContent.details.benefits
		? serviceContent.details.benefits.map((benefit) => ({
				value: Math.floor(Math.random() * 1000), // Example value, replace with actual data if available
				label: benefit.title,
		  }))
		: []; // Default to an empty array if undefined

	console.log("Counters Data:", counters); // Debugging: Check the counters data

	// Convert StaticImageData to string URL if necessary
	const testimonials = serviceContent.details.testimonials.map(
		(testimonial) => ({
			...testimonial,
			image:
				typeof testimonial.image === "string"
					? testimonial.image
					: testimonial.image.src, // Access 'customer1.src' if 'image' is an object
		})
	);

	return (
		<>
			{/* <!-- Banner-section  --> */}
			<Banner
				title={serviceContent.title}
				description={serviceContent.description}
			/>

			{/* <!-- Specialize start --> */}
			<Specialize
				intro={serviceContent.details.intro}
				areas={serviceContent.details.areas}
			/>

			{/* <!-- Key platforms start --> */}
			<Keyplatform platforms={serviceContent.details.platforms} />

			{/* <!-- Fundamental Benefits start --> */}
			<Fundamental benefits={serviceContent.details.benefits} />

			{/* <!-- Counter section --> */}
			<Counter />

			{/* Recent Projects */}
			{/* <Recent
				title="Recent Projects"
				description="Check out our latest projects"
				projects={serviceContent.details.recentProjects}
			/> */}

			{/* <!-- Testimonials --> */}
			<Testimonials testimonials={testimonials} />

			{/* Contact */}
			<div className="pt-120">
				<Contact />
			</div>
		</>
	);
};

export default Page;

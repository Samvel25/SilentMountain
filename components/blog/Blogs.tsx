// import Image from "next/image";
// import Link from "next/link";
// import { useState } from "react";
// import { blogs } from "@/public/data/blogs"; // Ensure this path is correct

// const Blogs = () => {
// 	const [x, setX] = useState(0);
// 	const [y, setY] = useState(0);
// 	const [searchTerm, setSearchTerm] = useState("");
// 	const [activeCategory, setActiveCategory] = useState("All"); // Default to "All" to show all items initially

// 	const handleMouseMove = (e: any) => {
// 		setX(e.nativeEvent.offsetX);
// 		setY(e.nativeEvent.offsetY);
// 	};

// 	const style = {
// 		"--x": `${x}px`,
// 		"--y": `${y}px`,
// 	} as React.CSSProperties;

// 	const tags = [
// 		"All", // Adding "All" category at the top
// 		"App",
// 		"Game App",
// 		"Game Art",
// 		"Game Animation",
// 		"Game QA Testing",
// 		"Unity Development",
// 		"3D ART",
// 		"3D Game Modeling",
// 		"3D Animation",
// 		"Environment Design",
// 		"3D Characters",
// 	];

// 	// Filter the blogs based on active category and search term
// 	const filteredBlogs = blogs.filter((blog) => {
// 		const matchesCategory =
// 			activeCategory === "All" || blog.tags.includes(activeCategory); // If "All" is selected, show all blogs
// 		const matchesSearch =
// 			blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
// 			blog.description.toLowerCase().includes(searchTerm.toLowerCase());

// 		return matchesCategory && matchesSearch;
// 	});

// 	return (
// 		<section className="recently-completed blogs blog-section pb-120">
// 			<div className="container pt-120">
// 				<div className="row">
// 					<div className="col-xl-8 col-lg-7">
// 						{/* Display filtered blogs */}
// 						{filteredBlogs.length > 0 ? (
// 							filteredBlogs.map(({ id, title, img }) => (
// 								<div key={id} className="single-box">
// 									<div className="position-relative d-grid align-items-center">
// 										<div className="img-box">
// 											<Image src={img} className="w-100" alt={title} />
// 										</div>
// 										<div className="position-absolute cus-position bottom-0 start-0">
// 											<div className="content-box p-3 p-sm-6">
// 												<div className="top-bar d-flex align-items-center gap-3">
// 													<h5>News</h5>
// 													<span>25 January, 2023</span>
// 												</div>
// 												<Link href={`/blog/${id}`}>
// 													<h3 className="visible-slowly-bottom mt-3">
// 														{title}
// 													</h3>
// 												</Link>
// 												<Link
// 													href={`/blog/${id}`}
// 													className="end-area mt-8 d-center"
// 												>
// 													<i className="material-symbols-outlined">call_made</i>
// 												</Link>
// 											</div>
// 										</div>
// 									</div>
// 								</div>
// 							))
// 						) : (
// 							<p>No blogs found</p>
// 						)}
// 					</div>

// 					<div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
// 						<div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
// 							<div className="d-flex flex-column gap-6">
// 								{/* Search Section */}
// 								<div className="sidebar-area p-5">
// 									<h3 className="visible-slowly-bottom mb-6">Search</h3>
// 									<div className="input-area mt-6 p-1 d-flex align-items-center">
// 										<input
// 											type="text"
// 											className="ps-3"
// 											placeholder="Search"
// 											value={searchTerm}
// 											onChange={(e) => setSearchTerm(e.target.value)} // Handle search input
// 										/>
// 										<div className="btn-area">
// 											<button
// 												onMouseMove={handleMouseMove}
// 												style={style}
// 												className="box-style btn-box border-re p-2"
// 											>
// 												<i className="material-symbols-outlined">search</i>
// 											</button>
// 										</div>
// 									</div>
// 								</div>

// 								{/* Category Filter */}
// 								<div className="sidebar-area p-5">
// 									<h3 className="visible-slowly-bottom mb-6">Category</h3>
// 									<ul className="underwriters d-grid gap-3">
// 										{tags.map((tag) => (
// 											<li
// 												key={tag}
// 												className={activeCategory === tag ? "active" : ""}
// 											>
// 												<button
// 													onClick={() => setActiveCategory(tag)}
// 													className={`d-center justify-content-between ${
// 														activeCategory === tag ? "active" : ""
// 													}`}
// 													style={{ cursor: "pointer" }}
// 												>
// 													<div className="d-flex gap-1">
// 														<div className="icon-wrap">
// 															<i className="material-symbols-outlined mat-icon fs-five">
// 																double_arrow
// 															</i>
// 														</div>
// 														<span>{tag}</span>
// 													</div>
// 												</button>
// 											</li>
// 										))}
// 									</ul>
// 								</div>

// 								{/* Related Articles Section (Optional) */}
// 								<div className="sidebar-area p-5">
// 									<h3 className="visible-slowly-bottom mb-6">
// 										Related Articles
// 									</h3>
// 									<div className="cus-mar">
// 										{/* Add Related Articles Content Here */}
// 									</div>
// 								</div>

// 								{/* Popular Tags Section */}
// 								<div className="sidebar-area p-5">
// 									<h3 className="visible-slowly-bottom mb-6">Popular Tags</h3>
// 									<ul className="tags d-flex flex-wrap gap-2">
// 										{tags.map((item) => (
// 											<li
// 												key={item}
// 												onMouseMove={handleMouseMove}
// 												style={style}
// 												className="box-style btn-box"
// 											>
// 												<Link href="/#">{item}</Link>
// 											</li>
// 										))}
// 									</ul>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Blogs;

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchProjects } from "@/lib/api"; // Fetch projects from Strapi

// Define the interface for the project data
interface Project {
	id: number;
	title: string;
	description: string;
	image: { url: string } | null; // Allowing image to be either an object or null
	tags: string[];
	details: any; // Adjust this based on the structure of details
	projectType: string; // Adjust this based on your project type structure
}

const Blogs = () => {
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);
	const [projects, setProjects] = useState<Project[]>([]); // Use the Project[] type
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");

	const handleMouseMove = (e: any) => {
		setX(e.nativeEvent.offsetX);
		setY(e.nativeEvent.offsetY);
	};

	useEffect(() => {
		async function loadProjects() {
			const fetchedProjects = await fetchProjects();
			console.log(fetchedProjects); // Log the fetched data
			setProjects(fetchedProjects);
		}
		loadProjects();
	}, []);

	// Filter the projects based on active category and search term
	const filteredProjects = projects.filter((project) => {
		const matchesCategory =
			activeCategory === "All" ||
			(project.tags && project.tags.includes(activeCategory));
		const matchesSearch =
			project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			project.description.toLowerCase().includes(searchTerm.toLowerCase());

		return matchesCategory && matchesSearch;
	});

	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;

	const tags = [
		"All",
		"App",
		"Game App",
		"Game Art",
		"Game Animation",
		"Game QA Testing",
		"Unity Development",
		"3D ART",
		"3D Game Modeling",
		"3D Animation",
		"Environment Design",
		"3D Characters",
	];

	return (
		<section className="recently-completed blogs blog-section pb-120">
			<div className="container pt-120">
				<div className="row">
					<div className="col-xl-8 col-lg-7">
						{/* Display filtered projects */}
						{filteredProjects.length > 0 ? (
							filteredProjects.map(({ id, title, image, description }) => (
								<div key={id} className="single-box">
									<div className="position-relative d-grid align-items-center">
										<div className="img-box">
											{image ? (
												<Image
													src={image.url} // Ensure to access the correct image URL
													className="w-100"
													alt={title}
													width={600}
													height={400}
												/>
											) : (
												<p>No image available</p>
											)}
										</div>
										<div className="position-absolute cus-position bottom-0 start-0">
											<div className="content-box p-3 p-sm-6">
												<div className="top-bar d-flex align-items-center gap-3">
													<h5>News</h5>
													<span>25 January, 2023</span>
												</div>
												<Link href={`/blog/${id}`}>
													<h3 className="visible-slowly-bottom mt-3">
														{title}
													</h3>
												</Link>
												<p>{description}</p>
												<Link
													href={`/blog/${id}`}
													className="end-area mt-8 d-center"
												>
													<i className="material-symbols-outlined">call_made</i>
												</Link>
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							<p>No blogs found</p>
						)}
					</div>

					<div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
						<div className="d-grid gap-5 cus-overflow cus-scrollbar side-wrapper">
							<div className="d-flex flex-column gap-6">
								{/* Search Section */}
								<div className="sidebar-area p-5">
									<h3 className="visible-slowly-bottom mb-6">Search</h3>
									<div className="input-area mt-6 p-1 d-flex align-items-center">
										<input
											type="text"
											className="ps-3"
											placeholder="Search"
											value={searchTerm}
											onChange={(e) => setSearchTerm(e.target.value)}
										/>
										<div className="btn-area">
											<button
												onMouseMove={handleMouseMove}
												style={style}
												className="box-style btn-box border-re p-2"
											>
												<i className="material-symbols-outlined">search</i>
											</button>
										</div>
									</div>
								</div>

								{/* Category Filter */}
								<div className="sidebar-area p-5">
									<h3 className="visible-slowly-bottom mb-6">Category</h3>
									<ul className="underwriters d-grid gap-3">
										{tags.map((tag) => (
											<li
												key={tag}
												className={activeCategory === tag ? "active" : ""}
											>
												<button
													onClick={() => setActiveCategory(tag)}
													className={`d-center justify-content-between ${
														activeCategory === tag ? "active" : ""
													}`}
													style={{ cursor: "pointer" }}
												>
													<div className="d-flex gap-1">
														<div className="icon-wrap">
															<i className="material-symbols-outlined mat-icon fs-five">
																double_arrow
															</i>
														</div>
														<span>{tag}</span>
													</div>
												</button>
											</li>
										))}
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;

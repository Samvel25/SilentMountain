import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { blogs } from "@/public/data/blogs";
import BlogSidebar from "./BlogSidebar";
import { useSearchParams } from "next/navigation";

const Blogs = () => {
	const searchParams = useSearchParams();
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");

	// Update states based on URL parameters
	useEffect(() => {
		const search = searchParams?.get("search");
		const category = searchParams?.get("category");

		if (search) setSearchTerm(search);
		if (category) setActiveCategory(category);
	}, [searchParams]);

	// Filter the blogs based on active category and search term
	const filteredBlogs = blogs.filter((blog) => {
		const matchesCategory =
			activeCategory === "All" || blog.tags.includes(activeCategory);
		const matchesSearch =
			blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			blog.description.toLowerCase().includes(searchTerm.toLowerCase());

		return matchesCategory && matchesSearch;
	});

	return (
		<section className="recently-completed blogs blog-section pb-120">
			<div className="container pt-120">
				<div className="row">
					<div className="col-xl-8 col-lg-7">
						{/* Show active filters if any */}
						{(searchTerm || activeCategory !== "All") && (
							<div className="filter-info mb-4">
								{searchTerm && (
									<p>
										Search results for: <strong>{searchTerm}</strong>
									</p>
								)}
								{activeCategory !== "All" && (
									<p>
										Category: <strong>{activeCategory}</strong>
									</p>
								)}
							</div>
						)}

						{filteredBlogs.length > 0 ? (
							filteredBlogs.map(({ id, title, slug, details }) => (
								<div key={id} className="single-box">
									<div className="position-relative d-grid align-items-center">
										<div className="img-box">
											{details.useIframe ? (
												<iframe
													frameBorder="0"
													src={details.videoUrl}
													allowFullScreen
													width="975"
													height="670"
												></iframe>
											) : (
												<Image
													src={details.blogImage}
													className="w-100"
													alt={title}
												/>
											)}
										</div>
										<div className="position-absolute cus-position bottom-0 start-0">
											<div className="content-box p-3 p-sm-6">
												<div className="top-bar d-flex align-items-center gap-3">
													{/* <h5>News</h5>
													<span>25 January, 2023</span> */}
												</div>
												<Link href={`/blog/${slug}`}>
													<h3 className="visible-slowly-bottom mt-3">
														{title}
													</h3>
												</Link>
												<Link
													href={`/blog/${slug}`}
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
						<BlogSidebar
							onSearch={setSearchTerm}
							onCategoryChange={setActiveCategory}
							initialSearchTerm={searchTerm}
							initialCategory={activeCategory}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;

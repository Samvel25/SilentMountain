"use client";

import { useParams, useRouter } from "next/navigation";
import { blogs } from "@/public/data/blogs";
import Image from "next/image";
import { notFound } from "next/navigation";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { useState } from "react";
import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";

const BlogPost = () => {
	const router = useRouter();
	const params = useParams();
	const slug = params
		? Array.isArray(params.slug)
			? params.slug[0]
			: params.slug
		: null;
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");
	const [commentForm, setCommentForm] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	// Find the blog post by slug
	const blog = slug ? blogs.find((blog) => blog.slug === slug) : null;

	if (!blog) {
		return notFound();
	}

	const handleBackToBlogs = () => {
		if (searchTerm || activeCategory !== "All") {
			const params = new URLSearchParams();
			if (searchTerm) params.append("search", searchTerm);
			if (activeCategory !== "All") params.append("category", activeCategory);
			router.push(`/blog?${params.toString()}`);
		} else {
			router.push("/blog");
		}
	};

	const handleMouseMove = (e: React.MouseEvent) => {
		setX(e.nativeEvent.offsetX);
		setY(e.nativeEvent.offsetY);
	};

	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;

	const handleCommentSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Comment submitted:", commentForm);
		setCommentForm({ name: "", email: "", message: "" });
	};

	return (
		<>
			{/* Banner */}
			<section className="banner-section inner-banner position-relative store">
				<div className="shape-area">
					<Image src={bubble} className="shape-1" alt="icon" />
					<Image src={ellipse7} className="shape-2" alt="icon" />
				</div>
				<div className="container position-relative">
					<div className="banner-content row justify-content-between">
						<div className="col-lg-6 col-md-10">
							<div className="main-content">
								<h2 className="visible-slowly-bottom display-four mb-6 text-green">
									<span className="text-green">{blog.title}</span>
								</h2>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="recently-completed blogs blog-section pb-120">
				<div className="container pt-120">
					{/* Add back button if coming from search/category */}
					{(searchTerm || activeCategory !== "All") && (
						<button onClick={handleBackToBlogs} className="btn btn-link mb-4">
							← Back to search results
						</button>
					)}

					<div className="row">
						<div className="col-xl-8 col-lg-7 service-details">
							<div className="single-box">
								<div className="position-relative d-grid align-items-center">
									<div className="img-box">
										{blog.details.useIframe ? (
											<iframe
												frameBorder="0"
												src={blog.details.videoUrl}
												allowFullScreen
												width="975"
												height="670"
											></iframe>
										) : (
											<Image
												src={blog.details.blogImage}
												alt={blog.title}
												width={975}
												height={670}
											/>
										)}
									</div>
									<p>{blog.details.mainContent.intro}</p>
								</div>
							</div>
							<div className="single-content row align-items-center mb-5">
								<div className="col-lg-6">
									<h4 className="mb-6">Key Points:</h4>
									<ul className="ms-10 mb-8 d-grid gap-3 list fs-seven">
										{blog.details.points.map((point, index) => (
											<li key={index} className="d-flex align-items-center">
												{point}
											</li>
										))}
									</ul>
								</div>
								<div className="col-lg-6">
									<div className="img-area">
										<Image src={blog.img} alt={blog.title} />
									</div>
								</div>
							</div>
							<p>{blog.details.mainContent.conclusion}</p>
							<div className="single-box quote mt-5 p-5 p-sm-10 alt-bg">
								<div className="icon-box">
									<i className="material-symbols-outlined mat-icon display-one">
										format_quote
									</i>
								</div>
								<p className="fs-four fw-bold">{blog.details.quote}</p>
								<span className="d-center fw-bolder mt-4">
									{blog.details.author}
								</span>
							</div>

							<div className="single-box tag-area py-5 d-center flex-wrap gap-3 justify-content-between mt-5">
								<p>
									Tags:{" "}
									{blog.tags.map((tag, index) => (
										<span key={index} className="me-2">
											{tag}
											{index < blog.tags.length - 1 ? "," : ""}
										</span>
									))}
								</p>
							</div>
						</div>

						{/* Sidebar Column */}
						<div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
							<BlogSidebar
								onSearch={setSearchTerm}
								onCategoryChange={setActiveCategory}
								initialSearchTerm={searchTerm}
								initialCategory={activeCategory}
								currentBlogId={blog.id}
								showRelatedArticles={true}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPost;

"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { fetchBlogs } from "@/utils/api";
import BlogSidebar from "@/components/blog/BlogSidebar";

import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";

import Banner from "@/components/blog/Banner";
import { Blog } from "@/types/types";
import { useState, useEffect } from "react";

interface BlogPostProps {
	params: { slug: string };
}

const BlogPost = ({ params }: BlogPostProps) => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");
	const [blog, setBlog] = useState<Blog | null>(null);
	const [blogsData, setBlogsData] = useState<Blog[]>([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchBlogData = async () => {
			let slug = params?.slug;

			// Ensure slug is a string
			if (Array.isArray(slug)) {
				slug = slug[0];
			}

			console.log("Slug from URL:", slug);

			// Fetch the blogs data
			const data = await fetchBlogs();

			if (!Array.isArray(data)) {
				console.error("Fetched data is not an array:", data);
				setLoading(false);
				return;
			}

			// Find the blog with the matching slug
			const foundBlog = data.find(
				(b: Blog) => b.slug.toLowerCase() === slug?.toLowerCase()
			);

			if (!foundBlog) {
				console.log("Blog not found, redirecting to 404 page");
				router.push("/404"); // Redirect to custom 404 page
				return;
			} else {
				setBlog(foundBlog);
			}

			setBlogsData(data);
			setLoading(false);
		};

		fetchBlogData();
	}, [params, router]);

	if (loading) {
		return <div>Loading...</div>; // Display a loading indicator while fetching data
	}

	if (!blog) {
		return null; // Blog not found, return null to avoid rendering
	}

	// Handle back to blogs navigation
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

	return (
		<>
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

			<Banner />

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
										{blog.useIframe ? (
											<iframe
												frameBorder="0"
												src={blog.videoUrl}
												allowFullScreen
												width="975"
												height="670"
											></iframe>
										) : (
											blog.image.length > 0 && (
												<Image
													src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog.image[0].formats.large.url}`}
													alt={blog.title}
													width={975}
													height={670}
												/>
											)
										)}
									</div>
									<p>
										{blog.mainContent.intro
											.map((intro: { children: { text: string }[] }) =>
												intro.children.map((child) => child.text).join(" ")
											)
											.join(" ")}
									</p>
								</div>
							</div>
							<div className="single-content row align-items-center mb-5">
								<div className="col-lg-6">
									<h4 className="mb-6">Key Points:</h4>
									<ul className="ms-10 mb-8 d-grid gap-3 list fs-seven">
										{blog.points.map(
											(point: { point: string }, index: number) => (
												<li key={index} className="d-flex align-items-center">
													{point.point}
												</li>
											)
										)}
									</ul>
								</div>
								<div className="col-lg-6">
									<div className="img-area">
										{blog.image.length > 0 && (
											<Image
												src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${blog.image[0].formats.large.url}`}
												alt={blog.title}
												width={975}
												height={670}
											/>
										)}
									</div>
								</div>
							</div>
							<p>
								{blog.mainContent.conclusion
									.map((conclusion: { children: { text: string }[] }) =>
										conclusion.children.map((child) => child.text).join(" ")
									)
									.join(" ")}
							</p>
							<div className="single-box quote mt-5 p-5 p-sm-10 alt-bg">
								<div className="icon-box">
									<i className="material-symbols-outlined mat-icon display-one">
										format_quote
									</i>
								</div>
								<p className="fs-four fw-bold">{blog.quote}</p>
								<span className="d-center fw-bolder mt-4">{blog.author}</span>
							</div>

							<div className="single-box tag-area py-5 d-center flex-wrap gap-3 justify-content-between mt-5">
								<p>
									Tags:{" "}
									{blog.tags.map((tag: { tags: string }, index: number) => (
										<span key={index} className="me-2">
											{tag.tags}
											{index < blog.tags.length - 1 ? "," : ""}
										</span>
									))}
								</p>
							</div>
						</div>

						<div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
							<BlogSidebar
								onSearch={setSearchTerm}
								onCategoryChange={setActiveCategory}
								initialSearchTerm={searchTerm}
								initialCategory={activeCategory}
								currentBlogId={blog.id}
								showRelatedArticles={true}
								blogs={blogsData}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPost;

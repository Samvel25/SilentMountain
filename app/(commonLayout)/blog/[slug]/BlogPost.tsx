"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import BlogSidebar from "@/components/blog/BlogSidebar";
import { Blog } from "@/types/types";
import { useState } from "react";
import bubble from "@/public/images/abs-items/bubble.png";
import ellipse7 from "@/public/images/abs-items/ellipse-7.png";

interface BlogPostProps {
	blog: Blog;
}

const BlogPost = ({ blog }: BlogPostProps) => {
	const router = useRouter();
	const [searchTerm, setSearchTerm] = useState("");
	const [activeCategory, setActiveCategory] = useState("All");

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

			<section className="recently-completed blogs blog-section pb-120">
				<div className="container pt-120">
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
							{/* Render other blog content */}
						</div>

						<div className="col-xl-4 col-lg-5 mt-8 mt-lg-0 service-details">
							<BlogSidebar
								onSearch={setSearchTerm}
								onCategoryChange={setActiveCategory}
								initialSearchTerm={searchTerm}
								initialCategory={activeCategory}
								currentBlogId={blog.id}
								showRelatedArticles={true}
								blogs={[]}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default BlogPost;

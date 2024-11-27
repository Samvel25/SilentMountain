import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { fetchBlogs } from "@/utils/api";
import BlogSidebar from "./BlogSidebar";
import { useSearchParams } from "next/navigation";
import { Blog } from "@/types/types";

const Blogs = () => {
	const searchParams = useSearchParams();
	const initialSearchTerm = searchParams?.get("search") || "";
	const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
	const [activeCategory, setActiveCategory] = useState("All");
	const [blogs, setBlogs] = useState<Blog[]>([]);

	useEffect(() => {
		const getBlogs = async () => {
			const data = await fetchBlogs();
			console.log("Fetched Blogs:", data);
			setBlogs(data);
		};

		console.log("useEffect triggered");
		getBlogs();
	}, []);

	useEffect(() => {
		const search = searchParams?.get("search");
		const category = searchParams?.get("category");

		if (search !== null) setSearchTerm(search);
		if (category !== null) setActiveCategory(category);
	}, [searchParams]);

	const filteredBlogs = blogs.filter((blog) => {
		const { title, description, tags } = blog;

		const matchesCategory =
			activeCategory === "All" ||
			tags.some((tag) => tag.tags === activeCategory);
		const matchesSearch =
			title.toLowerCase().includes(searchTerm.toLowerCase()) ||
			description.some((desc) =>
				desc.children.some((child) =>
					child.text.toLowerCase().includes(searchTerm.toLowerCase())
				)
			);
		console.log("useIframe:", blog.useIframe);
		console.log("Image URL:", blog.image[0]?.formats.large.url);
		console.log("Blog Slug:", blog.slug);

		return matchesCategory && matchesSearch;
	});

	return (
		<section className="recently-completed blogs blog-section pb-120">
			<div className="container pt-120">
				<div className="row">
					<div className="col-xl-8 col-lg-7">
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
							filteredBlogs.map((blog) => (
								<div key={blog.id} className="single-box">
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
														className="w-100"
														alt={blog.title}
														width={1000}
														height={560}
													/>
												)
											)}
										</div>
										<div className="position-absolute cus-position bottom-0 start-0">
											<div className="content-box p-3 p-sm-6">
												<Link href={`/blog/${blog.slug}`}>
													<h3 className="visible-slowly-bottom mt-3">
														{blog.title}
													</h3>
												</Link>
												<Link
													href={`/blog/${blog.slug}`}
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
							blogs={blogs}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blogs;

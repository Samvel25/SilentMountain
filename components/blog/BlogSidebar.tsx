import { useState, useEffect } from "react";
import Link from "next/link";
import { blogs } from "@/public/data/blogs";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";

interface Category {
	name: string;
	count: number;
}

interface BlogSidebarProps {
	onSearch?: (term: string) => void;
	onCategoryChange?: (category: string) => void;
	initialSearchTerm?: string;
	initialCategory?: string;
	currentBlogId?: number;
	showRelatedArticles?: boolean;
}

const BlogSidebar = ({
	onSearch,
	onCategoryChange,
	initialSearchTerm = "",
	initialCategory = "All",
	currentBlogId,
	showRelatedArticles = false,
}: BlogSidebarProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const isDetailPage = pathname?.includes("/blog/");

	const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
	const [activeCategory, setActiveCategory] = useState(initialCategory);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	useEffect(() => {
		// Extract search term from URL query parameters on component mount
		const urlParams = new URLSearchParams(window.location.search);
		const searchParam = urlParams.get("search");
		if (searchParam) {
			setSearchTerm(searchParam);
		}
	}, []);

	// Generate categories from blogs data
	const categories: Category[] = [
		{ name: "All", count: blogs.length },
		{
			name: "App",
			count: blogs.filter((blog) => blog.tags.includes("App")).length,
		},
		{
			name: "Game App",
			count: blogs.filter((blog) => blog.tags.includes("Game App")).length,
		},
		{
			name: "Game Art",
			count: blogs.filter((blog) => blog.tags.includes("Game Art")).length,
		},
		{
			name: "Game Animation",
			count: blogs.filter((blog) => blog.tags.includes("Game Animation"))
				.length,
		},
		{
			name: "Game QA Testing",
			count: blogs.filter((blog) => blog.tags.includes("Game QA Testing"))
				.length,
		},
		{
			name: "Unity Development",
			count: blogs.filter((blog) => blog.tags.includes("Unity Development"))
				.length,
		},
		{
			name: "3D ART",
			count: blogs.filter((blog) => blog.tags.includes("3D ART")).length,
		},
		{
			name: "3D Game Modeling",
			count: blogs.filter((blog) => blog.tags.includes("3D Game Modeling"))
				.length,
		},
		{
			name: "3D Animation",
			count: blogs.filter((blog) => blog.tags.includes("3D Animation")).length,
		},
		{
			name: "Environment Design",
			count: blogs.filter((blog) => blog.tags.includes("Environment Design"))
				.length,
		},
		{
			name: "3D Characters",
			count: blogs.filter((blog) => blog.tags.includes("3D Characters")).length,
		},
	];

	const handleMouseMove = (e: React.MouseEvent) => {
		setX(e.nativeEvent.offsetX);
		setY(e.nativeEvent.offsetY);
	};

	const style = {
		"--x": `${x}px`,
		"--y": `${y}px`,
	} as React.CSSProperties;

	const handleSearch = (value: string) => {
		setSearchTerm(value);
		if (!isDetailPage) {
			// If we're on the blogs listing page, search immediately
			onSearch?.(value);
			router.push(`/blog?search=${encodeURIComponent(value)}`);
		}
	};

	const handleSearchClick = () => {
		if (searchTerm) {
			// Include search term in the URL query parameters
			router.push(`/blog?search=${encodeURIComponent(searchTerm)}`);
		}
	};

	const handleCategoryClick = (category: string) => {
		// Prevent default scroll behavior
		const currentScroll = window.scrollY;

		setActiveCategory(category);
		onCategoryChange?.(category);

		// Use replace instead of push to avoid adding to history stack
		router.replace(`/blog?category=${encodeURIComponent(category)}`, {
			scroll: false, // Prevent automatic scrolling
		});

		// Restore scroll position
		window.scrollTo(0, currentScroll);
	};

	// Get related articles based on current blog's tags
	const getRelatedArticles = () => {
		if (!currentBlogId) return [];
		const currentBlog = blogs.find((blog) => blog.id === currentBlogId);
		if (!currentBlog) return [];

		return blogs
			.filter(
				(blog) =>
					blog.id !== currentBlogId && // Exclude current blog
					blog.tags.some((tag) => currentBlog.tags.includes(tag)) // Match any tag
			)
			.slice(0, 3); // Limit to 3 related articles
	};

	return (
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
							onChange={(e) => handleSearch(e.target.value)}
							onKeyPress={(e) => {
								if (isDetailPage && e.key === "Enter") {
									handleSearchClick();
								}
							}}
						/>
						<div className="btn-area">
							<button
								onMouseMove={handleMouseMove}
								onClick={handleSearchClick}
								style={style}
								className="box-style btn-box border-re p-2"
							>
								<i className="material-symbols-outlined">search</i>
							</button>
						</div>
					</div>
				</div>

				{/* Categories Section */}
				<div className="sidebar-area p-5">
					<h3 className="visible-slowly-bottom mb-6">Category</h3>
					<ul className="underwriters d-grid gap-3">
						{categories.map((category) => (
							<li
								key={category.name}
								className={category.name === activeCategory ? "active" : ""}
							>
								<Link
									href="#"
									onClick={(e) => {
										e.preventDefault();
										handleCategoryClick(category.name);
									}}
									className="d-center justify-content-between"
								>
									<div className="d-flex gap-1">
										<div className="icon-wrap">
											<i className="material-symbols-outlined mat-icon fs-five">
												double_arrow
											</i>
										</div>
										<span>{category.name}</span>
									</div>
									<div className="right-area">
										<span>({category.count})</span>
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>

				{/* Related Articles - Only show in blog detail page */}
				{showRelatedArticles && currentBlogId && (
					<div className="sidebar-area p-5">
						<h3 className="visible-slowly-bottom mb-6">Related Articles</h3>
						<div className="cus-mar">
							{getRelatedArticles().map((article) => (
								<div
									key={article.id}
									className="single-box d-center justify-content-start gap-5"
								>
									<div className="img-area w-50">
										<Image src={article.img} alt={article.title} />
									</div>
									<div className="info-area">
										<Link href={`/blog/${article.id}`}>
											<h6>{article.title}</h6>
										</Link>
										{/* <div className="article-info pt-3 d-flex gap-5">
											<div className="d-flex gap-1 single">
												<div className="icon-wrap d-flex align-items-end">
													<i className="material-symbols-outlined mat-icon fs-six">
														schedule
													</i>
												</div>
												<span>15 Min</span>
											</div>
											<div className="d-flex gap-1 single ps-5">
												<div className="icon-wrap d-flex align-items-end">
													<i className="material-symbols-outlined mat-icon fs-six">
														visibility
													</i>
												</div>
												<span>55</span>
											</div>
										</div> */}
									</div>
								</div>
							))}
						</div>
					</div>
				)}

				{/* Follow Us Section */}
				<div className="sidebar-area p-5 mb-5">
					<h3 className="visible-slowly-bottom mb-6">Follow Us</h3>
					<ul className="d-flex gap-4 social-area">
						<li>
							<Link
								href="https://www.facebook.com"
								aria-label="Facebook"
								className="d-center"
							>
								<i className="fab fa-facebook-f"></i>
							</Link>
						</li>
						<li>
							<Link
								href="https://www.instagram.com"
								aria-label="Instagram"
								className="d-center"
							>
								<i className="fab fa-instagram"></i>
							</Link>
						</li>
						<li>
							<Link
								href="https://www.linkedin.com"
								aria-label="Linkedin"
								className="d-center"
							>
								<i className="fab fa-linkedin-in"></i>
							</Link>
						</li>
						<li>
							<Link
								href="https://assetstore.unity.com/"
								aria-label="Unity"
								className="d-center"
							>
								<i className="fab fa-unity"></i>
							</Link>
						</li>
					</ul>
				</div>

				{/* Contact Section */}
			</div>
		</div>
	);
};

export default BlogSidebar;

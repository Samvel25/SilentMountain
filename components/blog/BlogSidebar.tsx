import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { Blog } from "@/types/types";

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
	blogs: Blog[];
}

const BlogSidebar = ({
	onSearch,
	onCategoryChange,
	initialSearchTerm = "",
	initialCategory = "All",
	currentBlogId,
	showRelatedArticles = false,
	blogs,
}: BlogSidebarProps) => {
	const router = useRouter();
	const pathname = usePathname();
	const isDetailPage = pathname?.includes("/blog/");

	const [searchTerm, setSearchTerm] = useState(initialSearchTerm);
	const [activeCategory, setActiveCategory] = useState(initialCategory);
	const [x, setX] = useState(0);
	const [y, setY] = useState(0);

	// Generate categories from blogs data
	const categories: Category[] = [
		{ name: "All", count: blogs.length },
		...Array.from(
			blogs.reduce((acc, blog) => {
				blog.tags.forEach((tag) => {
					acc.set(tag.tags, (acc.get(tag.tags) || 0) + 1);
				});
				return acc;
			}, new Map<string, number>())
		).map(([name, count]) => ({ name, count })),
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
			onSearch?.(value);
			router.push(`/blog?search=${encodeURIComponent(value)}`);
		}
	};

	const handleSearchClick = () => {
		if (searchTerm) {
			router.push(`/blog?search=${encodeURIComponent(searchTerm)}`);
		}
	};

	const handleCategoryClick = (category: string) => {
		const currentScroll = window.scrollY;

		setActiveCategory(category);
		onCategoryChange?.(category);

		router.replace(`/blog?category=${encodeURIComponent(category)}`, {
			scroll: false,
		});

		window.scrollTo(0, currentScroll);
	};

	const getRelatedArticles = () => {
		if (!currentBlogId) return [];
		const currentBlog = blogs.find((blog) => blog.id === currentBlogId);
		if (!currentBlog) return [];

		return blogs
			.filter(
				(blog) =>
					blog.id !== currentBlogId &&
					blog.tags.some((tag) => currentBlog.tags.includes(tag))
			)
			.slice(0, 3);
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
										{/* <span>({category.count})</span> */}
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
										<Image
											src={article.image[0].formats.thumbnail.url}
											alt={article.title}
										/>
									</div>
									<div className="info-area">
										<Link href={`/blog/${article.slug}`}>
											<h6>{article.title}</h6>
										</Link>
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
			</div>
		</div>
	);
};

export default BlogSidebar;

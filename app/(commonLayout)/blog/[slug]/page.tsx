import { Metadata } from "next";
import { fetchBlogs } from "@/utils/api";
import BlogPost from "./BlogPost";
import { Blog } from "@/types/types";

interface BlogPostProps {
	params: { slug: string };
}

// Generate Metadata
export async function generateMetadata({
	params,
}: BlogPostProps): Promise<Metadata> {
	const blogs = await fetchBlogs();
	const blog = blogs.find((b: Blog) => b.slug === params.slug);

	if (!blog) {
		return {
			title: "404 - Blog Not Found",
			description: "The requested blog post could not be found.",
		};
	}

	return {
		title: blog.title,
		description: blog.description || blog.excerpt,
		openGraph: {
			title: blog.title,
			description: blog.description || blog.excerpt,
			url: `https://babycheese.com/blog/${params.slug}`,
			images: [
				{
					url: blog.image[0]?.formats.large?.url || "/default-og-image.jpg",
					width: 1200,
					height: 630,
					alt: blog.title,
				},
			],
		},
	};
}

// Server Component
const BlogPostPage = async ({ params }: BlogPostProps) => {
	const blogs = await fetchBlogs();
	const blog = blogs.find((b: Blog) => b.slug === params.slug);

	if (!blog) {
		return <div>Blog not found</div>;
	}

	return <BlogPost blog={blog} />;
};

export default BlogPostPage;

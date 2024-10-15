"use client"; // This marks the file as a Client Component

import { useParams } from "next/navigation"; // Correct import from next/navigation
import { blogs } from "@/public/data/blogs"; // Adjust the path if necessary
import Image from "next/image";
import { notFound } from "next/navigation";

const BlogPost = () => {
	const params = useParams();
	const id = params.id;

	// Find the blog post by id
	const blog = blogs.find((blog) => blog.id === parseInt(id));

	if (!blog) {
		return notFound(); // Return 404 if blog is not found
	}

	return (
		<section className="recently-completed blogs blog-section pb-120">
			<div className="container pt-120">
				<div className="row">
					<div className="col-xl-8 col-lg-7 service-details">
						<div className="single-box">
							<div className="position-relative d-grid align-items-center">
								<div className="img-box">
									<iframe
										frameBorder="0"
										src={blog.details.videoUrl}
										allowFullScreen
										width="975"
										height="670"
									></iframe>
								</div>
								<div className="article-info pt-6 pb-4 d-flex gap-5">
									<div className="d-flex gap-1 single">
										<span>15 Min</span>
									</div>
									<div className="d-flex gap-1 single ps-5">
										<span>55 Views</span>
									</div>
									<div className="d-flex gap-1 single ps-5">
										<span>By Admin</span>
									</div>
								</div>
								<p>{blog.description}</p>
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
									<span key={index}>
										{tag}
										{index < blog.tags.length - 1 ? ", " : ""}
									</span>
								))}
							</p>
						</div>
						<div className="comments-area mt-5">
							<div className="single-comment-area">
								<h3 className="visible-slowly-bottom mb-5">
									{blog.comments.length} Comments
								</h3>
								{blog.comments.map((comment, index) => (
									<div key={index} className="comment-box">
										<Image src={comment.img} alt={comment.name} />
										<h4>{comment.name}</h4>
										<p>{comment.comment}</p>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default BlogPost;

// "use client";
// import { useParams } from "next/navigation";
// import { fetchProjectById } from "@/lib/api"; // Your API call
// import ProjectDetailsComponent from "@/components/ProjectDetailsComponent"; // Import the new component
// import { useEffect, useState } from "react";
// import Image from "next/image";

// const ProjectDetailsPage = () => {
// 	const params = useParams();
// 	const id = params.id;

// 	const [project, setProject] = useState<any>(null);

// 	useEffect(() => {
// 		async function getData() {
// 			const data = await fetchProjectById(id); // Fetch by ID
// 			setProject(data);
// 		}
// 		getData();
// 	}, [id]);

// 	if (!project) {
// 		return <p>Loading...</p>;
// 	}

// 	// Extract the first detail object from the array
// 	const detail = project.details[0]; // Assuming you want the first item in the details array

// 	return (
// 		<section className="project-details-section">
// 			<div className="container">
// 				<h1>{project.title}</h1>
// 				{project.image && (
// 					<Image
// 						src={project.image.url}
// 						alt={project.title}
// 						width={800}
// 						height={450}
// 					/>
// 				)}
// 				{/* Pass the first detail object and the project type */}
// 				<ProjectDetailsComponent
// 					details={detail} // Pass the first item
// 					type={project.projectType}
// 				/>
// 			</div>
// 		</section>
// 	);
// };

// export default ProjectDetailsPage;

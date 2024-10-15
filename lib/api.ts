const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

// Function to fetch all projects from Strapi
export async function fetchProjects() {
	try {
		// For single types, use the API like this, without the plural form
		const res = await fetch(`${API_URL}/project?populate=*`);
		if (!res.ok) {
			throw new Error(`Failed to fetch data: ${res.status}`);
		}
		const response = await res.json();

		// Mapping the single project data
		const projects = response.data.map((project: any) => ({
			id: project.id,
			title: project.Title, // Adjust based on Strapi field names
			description: project.Description.map((d: any) =>
				d.children.map((c: any) => c.text).join(" ")
			).join(" "), // Extracting description text
			tags: project.Tags ? project.Tags.map((tag: any) => tag.tag) : [], // Mapping tags correctly
			image: project.Image ? { url: project.Image.url } : null, // Using image URL if available, otherwise null
			details: project.Details.map((detail: any) => ({
				videoUrl: detail.VideoURL,
				quote: detail.Quote,
				author: detail.Author,
				points: detail.Points ? detail.Points.map((p: any) => p.point) : [],
			})),
			projectType: project.ProjectType,
		}));

		return [project]; // Return the project as an array to be used in the frontend
	} catch (error) {
		console.error("Error fetching project:", error);
		return [];
	}
}

// Function to fetch a single project by ID
export async function fetchProjectById(id: string) {
	try {
		const res = await fetch(`${API_URL}/project/${id}?populate=*`); // Adjust to singular 'project'
		if (!res.ok) {
			throw new Error(`Failed to fetch data: ${res.status}`);
		}
		const data = await res.json();

		// Return the single project data
		return {
			id: data.id,
			title: data.Title, // Adjust based on Strapi field names
			description: data.Description.map((d: any) =>
				d.children.map((c: any) => c.text).join(" ")
			).join(" "), // Extracting description text
			tags: data.Tags ? data.Tags.map((tag: any) => tag.tag) : [], // Mapping tags correctly
			image: data.Image ? { url: data.Image.url } : null, // Using image URL if available
			details: data.Details.map((detail: any) => ({
				videoUrl: detail.VideoURL,
				quote: detail.Quote,
				author: detail.Author,
				points: detail.Points ? detail.Points.map((p: any) => p.point) : [],
			})),
			projectType: data.ProjectType,
		};
	} catch (error) {
		console.error("Error fetching project by ID:", error);
		return null;
	}
}

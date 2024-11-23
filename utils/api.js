import axios from "axios";

const api = axios.create({
	baseURL: process.env.NEXT_PUBLIC_STRAPI_API_URL,
});

export const fetchBlogs = async () => {
	console.log("fetchBlogs function is called");
	try {
		const response = await api.get("/api/blogs?populate=*");
		console.log("Fetched Blogs Data:", response.data.data);
		return response.data.data;
	} catch (error) {
		console.error("Error fetching blogs:", error);
		return [];
	}
};

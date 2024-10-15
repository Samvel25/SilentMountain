import blog1 from "@/public/images/blogs-img-1.png";
import blog2 from "@/public/images/blogs-img-2.png";
import blog3 from "@/public/images/blogs-img-3.png";
import blog4 from "@/public/images/blogs-img-4.png";
import comment1 from "@/public/images/comment-img-1.png";
import comment2 from "@/public/images/comment-img-2.png";

export const blogs = [
	{
		id: 1,
		title: "The Role Of Music And Sound Effects In Game Design",
		img: blog1,
		description:
			"Music and sound effects play a pivotal role in game design by setting the tone, building immersion, and creating memorable moments.",
		details: {
			videoUrl: "https://itch.io/embed-upload/10114240?color=222b2c",
			points: [
				"Setting the Tone",
				"Building Immersion",
				"Creating Memorable Moments",
				"Enhancing Gameplay",
			],
			quote:
				'"Good game design is not about graphics, story or sound; it\'s about how the player interacts with the game."',
			author: "Sid Meier",
		},
		tags: ["Game Art", "Game Sound", "3D Characters"],
		comments: [
			{
				img: comment1,
				name: "Cameron Williamson",
				comment:
					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
			},
			{
				img: comment2,
				name: "Theresa Webb",
				comment:
					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
			},
		],
	},
	{
		id: 2,
		title: "The Importance Of User Testing In Game Development",
		img: blog2,
		description:
			"User testing is crucial for ensuring that games meet players' expectations. This blog covers best practices for conducting effective user tests.",
		details: {
			videoUrl: "https://example.com/video2",
			points: ["Ensuring Quality", "Gathering Feedback", "Improving UX"],
			quote: '"Testing is the key to successful development."',
			author: "Jane Doe",
		},
		tags: ["Game Testing", "UX", "Quality Assurance"],
		comments: [
			{
				img: comment1,
				name: "Alex Johnson",
				comment: "User testing really helps shape the final product.",
			},
			{
				img: comment2,
				name: "Emily Clark",
				comment: "This article was very insightful.",
			},
		],
	},
	// Add similar data for other blogs
];

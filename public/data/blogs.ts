import blog1 from "@/public/images/blogs-img-1.png";
import blog2 from "@/public/images/blogs-img-2.png";
import blog3 from "@/public/images/blogs-img-3.png";
import blog4 from "@/public/images/blogs-img-4.png";
import comment1 from "@/public/images/comment-img-1.png";
import comment2 from "@/public/images/comment-img-2.png";

export const blogs = [
	{
		id: 1,
		title: "The Art of Game Level Design",
		slug: "the-art-of-game-level-design",
		img: blog1,
		description:
			"Exploring the principles and techniques behind creating engaging and memorable game levels.",
		details: {
			videoUrl: "https://itch.io/embed-upload/10114240?color=222b2c",
			blogImage: blog1,
			useIframe: true,
			points: [
				"Player Flow and Progression",
				"Environmental Storytelling",
				"Balanced Challenge Design",
				"Visual Landmarks",
			],
			quote:
				'"A well-designed level should teach without teaching, guide without pushing, and challenge without frustrating."',
			author: "John Romero",
			mainContent: {
				intro:
					"Level design is the backbone of any great game, combining artistic vision with technical expertise to create spaces that both challenge and delight players. Understanding how to craft meaningful player experiences through thoughtful level design is crucial for any game developer.",
				conclusion:
					"Successful level design is an iterative process that requires a deep understanding of player psychology, game mechanics, and visual storytelling. When these elements come together harmoniously, they create unforgettable gaming experiences.",
			},
		},
		tags: ["App", "Game Development", "Player Experience"],
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
		title: "Character Animation Fundamentals",
		slug: "character-animation-fundamentals",
		img: blog2,
		description:
			"Breaking down the essential principles of creating fluid and expressive character animations in games.",
		details: {
			videoUrl: "https://example.com/video2",
			blogImage: blog2,
			points: [
				"12 Animation Principles",
				"Motion Capture Integration",
				"Procedural Animation",
				"Performance Optimization",
			],
			quote:
				'"Animation is not the art of drawings that move but the art of movements that are drawn."',
			author: "Norman McLaren",
			mainContent: {
				intro:
					"Character animation breathes life into game worlds, transforming static models into believable entities that players can connect with emotionally. Understanding the fundamentals of animation is crucial for creating compelling game characters.",
				conclusion:
					"The art of animation in games continues to evolve with technology, but the core principles remain unchanged. Mastering these fundamentals while embracing new tools and techniques is key to creating memorable character animations.",
			},
		},
		tags: ["App", "Character Design", "Motion Graphics"],
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
	// 	{
	// 		id: 3,
	// 		title: "Game UI/UX Best Practices",
	// 		slug: "game-ui-ux-best-practices",
	// 		img: blog3,
	// 		description:
	// 			"Creating intuitive and immersive user interfaces that enhance rather than interrupt the gaming experience.",
	// 		details: {
	// 			videoUrl: "https://example.com/video3",
	// 			points: [
	// 				"Interface Accessibility",
	// 				"Visual Hierarchy",
	// 				"Player Feedback Systems",
	// 				"Menu Design Patterns",
	// 			],
	// 			quote: '"The best interface is no interface."',
	// 			author: "Golden Krishna",
	// 			mainContent: {
	// 				intro:
	// 					"User interface design in games requires a delicate balance between functionality and immersion. A well-designed UI should provide essential information while maintaining the player's engagement with the game world.",
	// 				conclusion:
	// 					"Effective game UI/UX design is invisible yet invaluable, enhancing the player's experience without drawing attention to itself. It's an art that requires constant iteration and player feedback.",
	// 			},
	// 		},
	// 		tags: ["App", "UX Design", "Game Interface"],
	// 		comments: [
	// 			{
	// 				img: comment1,
	// 				name: "Cameron Williamson",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 			{
	// 				img: comment2,
	// 				name: "Theresa Webb",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: 4,
	// 		title: "Game Audio Design Essentials",
	// 		slug: "game-audio-design-essentials",
	// 		img: blog4,
	// 		description:
	// 			"Understanding the impact of sound design and music in creating immersive game experiences.",
	// 		details: {
	// 			videoUrl: "https://example.com/video4",
	// 			points: [
	// 				"Adaptive Music Systems",
	// 				"Sound Effect Design",
	// 				"Audio Implementation",
	// 				"Spatial Audio",
	// 			],
	// 			quote: '"Sound is 50% of the entertainment in a movie."',
	// 			author: "George Lucas",
	// 			mainContent: {
	// 				intro:
	// 					"Game audio design encompasses everything from subtle environmental sounds to epic musical scores, creating a sonic landscape that enhances player immersion and emotional engagement.",
	// 				conclusion:
	// 					"The power of audio in games cannot be understated. When properly implemented, sound design and music become invisible yet essential components that elevate the entire gaming experience.",
	// 			},
	// 		},
	// 		tags: ["Audio Design", "Music", "Sound Effects"],
	// 		comments: [
	// 			{
	// 				img: comment1,
	// 				name: "Cameron Williamson",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 			{
	// 				img: comment2,
	// 				name: "Theresa Webb",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: 5,
	// 		title: "Game Optimization Techniques",
	// 		slug: "game-optimization-techniques",
	// 		img: blog1,
	// 		description:
	// 			"Essential strategies for optimizing game performance across different platforms and devices.",
	// 		details: {
	// 			videoUrl: "https://example.com/video5",
	// 			points: [
	// 				"Asset Management",
	// 				"Memory Optimization",
	// 				"Performance Profiling",
	// 				"Cross-platform Considerations",
	// 			],
	// 			quote: '"Premature optimization is the root of all evil."',
	// 			author: "Donald Knuth",
	// 			mainContent: {
	// 				intro:
	// 					"Game optimization is a crucial aspect of development that ensures players can enjoy smooth, responsive gameplay across various devices and platforms. Understanding key optimization techniques is essential for modern game developers.",
	// 				conclusion:
	// 					"Successful game optimization requires a balanced approach between performance and quality, ensuring the best possible player experience while maintaining the game's visual and gameplay integrity.",
	// 			},
	// 		},
	// 		tags: ["Performance", "Optimization", "Technical"],
	// 		comments: [
	// 			{
	// 				img: comment1,
	// 				name: "Cameron Williamson",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 			{
	// 				img: comment2,
	// 				name: "Theresa Webb",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: 6,
	// 		title: "Monetization Strategies in Games",
	// 		slug: "monetization-strategies-in-games",
	// 		img: blog2,
	// 		description:
	// 			"Exploring effective and player-friendly approaches to game monetization.",
	// 		details: {
	// 			videoUrl: "https://example.com/video6",
	// 			points: [
	// 				"Microtransaction Design",
	// 				"Player Value Creation",
	// 				"Retention Strategies",
	// 				"Pricing Models",
	// 			],
	// 			quote:
	// 				'"The best monetization is the one players don\'t mind paying for."',
	// 			author: "Will Wright",
	// 			mainContent: {
	// 				intro:
	// 					"Game monetization has evolved significantly, requiring developers to balance business needs with player satisfaction. Understanding how to implement fair and effective monetization strategies is crucial for game sustainability.",
	// 				conclusion:
	// 					"Successful monetization in games comes from creating genuine value for players while maintaining game integrity. It's about building a sustainable ecosystem that benefits both developers and players.",
	// 			},
	// 		},
	// 		tags: ["Monetization", "Business", "Player Retention"],
	// 		comments: [
	// 			{
	// 				img: comment1,
	// 				name: "Cameron Williamson",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 			{
	// 				img: comment2,
	// 				name: "Theresa Webb",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 		],
	// 	},
	// 	{
	// 		id: 7,
	// 		title: "Multiplayer Game Networking",
	// 		slug: "multiplayer-game-networking",
	// 		img: blog3,
	// 		description:
	// 			"Technical insights into building robust multiplayer game systems.",
	// 		details: {
	// 			videoUrl: "https://example.com/video7",
	// 			points: [
	// 				"Network Architecture",
	// 				"Latency Management",
	// 				"State Synchronization",
	// 				"Security Considerations",
	// 			],
	// 			quote:
	// 				'"The hardest part of multiplayer game development is making it feel like single player."',
	// 			author: "Glenn Fiedler",
	// 			mainContent: {
	// 				intro:
	// 					"Multiplayer networking is one of the most challenging aspects of game development, requiring careful consideration of latency, synchronization, and player experience.",
	// 				conclusion:
	// 					"Building robust multiplayer systems requires a deep understanding of networking principles and creative problem-solving to ensure smooth, responsive gameplay for all players.",
	// 			},
	// 		},
	// 		tags: ["Networking", "Multiplayer", "Technical"],
	// 		comments: [
	// 			{
	// 				img: comment1,
	// 				name: "Cameron Williamson",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 			{
	// 				img: comment2,
	// 				name: "Theresa Webb",
	// 				comment:
	// 					"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet.",
	// 			},
	// 		],
	// 	},
];

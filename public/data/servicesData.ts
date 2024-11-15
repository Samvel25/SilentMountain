import customer1 from "@/public/images/customer-img-1.png";
import customer2 from "@/public/images/customer-img-2.png";

export const services = [
	{
		id: "game-development",
		title: "Game Development",
		description:
			"Our team brings extensive experience with the Unity engine, crafting engaging and immersive 2D and 3D games. From initial concept to final deployment, we’re dedicated to bringing game ideas to life.",
		details: {
			intro:
				"We specialize in creating captivating games that engage players and bring your vision to life.",
			areas: [
				{
					number: "01",
					title: "Full Cycle Game Development",
					description:
						"We will lead your project through all stages from game design to post-release support. Using the extensive experience and creativity of our experts, make your gaming dream come true with our customized full-cycle development services.",
				},
				{
					number: "02",
					title: "Game Co-Development",
					description:
						"Empower your development opportunities and extend your team with competent level designers, senior programmers, and seasoned 2D and 3D artists. We understand the brand well, so our expertise can find the best application in any cooperation.",
				},
				{
					number: "03",
					title: "Game Porting",
					description:
						"Reach an even larger audience and add more functionality to the gameplay with our professional porting services, making it easy to port mobile, desktop, VR/AR games from one platform to another and meet your expectations in terms of quality and budget.",
				},
			],
			platforms: [
				{ name: "PC", description: "Game development on PC platforms." },
				{
					name: "Console",
					description:
						"Game development on consoles like Xbox, PlayStation, and Nintendo.",
				},
				{ name: "Mobile", description: "Game development for mobile devices." },
				{
					name: "AR/VR",
					description:
						"Game development for augmented and virtual reality platforms.",
				},
			],
			benefits: [
				{
					icon: "discover_tune",
					title: "Customized Game Development",
					description:
						"We make customized games to fit your budget and requirements, with a skilled team that tailors the development process to your goals and scope.",
				},
				{
					icon: "code_off",
					title: "Experienced Game Developers",
					description:
						"We have a dedicated team of developers specialized in game creation to help you design and implement your idea to stand out.",
				},
				{
					icon: "shield",
					title: "Top Level Security Practices",
					description:
						"We ensure the security of servers and player data in game development, providing full updating systems with the latest innovations.",
				},
				{
					icon: "signpost",
					title: "Flexible Scaling Capabilities",
					description:
						"We expand our team to meet deadlines & have 10,000+ specialized developers for successful project implementation.",
				},
			],
			faqs: [
				{
					question: "What services does GameStorm offer for game development?",
					answer:
						"GameStorm offers a full range of services for game development, including game art, design, programming, and project management.",
				},
				{
					question:
						"How does GameStorm handle project management during game development?",
					answer:
						"We use agile methodologies to ensure timely delivery and adaptability to changes in game development projects.",
				},
			],
			recentProjects: [
				{
					// image: {
					// 	src: "/images/project-1.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "Project Alpha",
					description: "An innovative 3D game with stunning graphics.",
					link: "/projects/alpha",
				},
				{
					// image: {
					// 	src: "/images/project-2.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "Project Beta",
					description: "A captivating 2D platformer with engaging gameplay.",
					link: "/projects/beta",
				},
			],
			testimonials: [
				{
					image: { customer1 },
					text: "When they started delivering on all your wildest requests, that’s when we decided to invest in building a long-term relationship with Silent Mountain. The developers I personally got to work with have a strong commitment to work. Everything they’ve promised, they delivered.",
					name: "Walter Hessert",
					location: "USA",
					date: "Mar 22, 2023",
				},
				// {
				// 	image: { customer1 },
				// 	text: "The graphics in their games are always top-notch and truly bring the world to life.",
				// 	name: "Kristin Watson",
				// 	location: "United Kingdom",
				// 	date: "Mar 22, 2023",
				// },
			],
		},
	},
	{
		id: "ar-vr-xr",
		title: "AR/VR/XR",
		description:
			"Augmented reality (AR), virtual reality (VR) and extended reality (XR) are transforming how we interact with the world. Our AR/VR/XR team has expertise to help you craft innovative, cutting-edge experiences in these fast-evolving technologies.",
		details: {
			intro:
				"We create immersive AR/VR/XR experiences that redefine user interaction and engagement.",
			areas: [
				{
					number: "01",
					title: "AR Experience Design",
					description:
						"Design and develop augmented reality experiences that enhance real-world environments with digital overlays.",
				},
				{
					number: "02",
					title: "VR Simulation Development",
					description:
						"Create virtual reality simulations that transport users to new worlds with realistic interactions.",
				},
				{
					number: "03",
					title: "XR Integration",
					description:
						"Integrate extended reality solutions into existing systems to enhance functionality and user experience.",
				},
			],
			platforms: [
				{
					name: "Mobile AR",
					description: "Augmented reality for mobile devices.",
				},
				{
					name: "VR Headsets",
					description: "Virtual reality for headsets like Oculus and HTC Vive.",
				},
				{
					name: "WebXR",
					description:
						"Extended reality experiences accessible via web browsers.",
				},
			],
			benefits: [
				{
					icon: "visibility",
					title: "Enhanced User Engagement",
					description:
						"Our AR/VR/XR solutions captivate users, increasing engagement and retention.",
				},
				{
					icon: "trending_up",
					title: "Innovative Technology",
					description:
						"Stay ahead of the curve with cutting-edge AR/VR/XR technologies that set your brand apart.",
				},
				{
					icon: "integration_instructions",
					title: "Seamless Integration",
					description:
						"Our solutions integrate seamlessly with existing systems, ensuring smooth operation and user experience.",
				},
			],
			faqs: [
				{
					question: "What industries can benefit from AR/VR/XR?",
					answer:
						"Industries such as gaming, education, healthcare, and retail can greatly benefit from AR/VR/XR technologies.",
				},
				{
					question: "How do you ensure the quality of AR/VR/XR experiences?",
					answer:
						"We use rigorous testing and user feedback to ensure high-quality, immersive experiences.",
				},
			],
			recentProjects: [
				{
					// image: {
					// 	src: "/images/ar-vr-project-1.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "Virtual Museum Tour",
					description: "An interactive VR tour of a historical museum.",
					link: "/projects/virtual-museum",
				},
				{
					// image: {
					// 	src: "/images/ar-vr-project-2.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "AR Shopping Experience",
					description: "An augmented reality app for virtual shopping.",
					link: "/projects/ar-shopping",
				},
			],
			testimonials: [
				// {
				// 	image: { customer1 },
				// 	text: "Their team is incredibly skilled and easy to work with.",
				// 	name: "Jordyn Septimus",
				// 	location: "United Kingdom",
				// 	date: "May 12, 2023",
				// },
				{
					image: { customer1 },
					text: "Silent Mountain’s leadership has deep experience in engineering management, which is part of the reason they’ve been so reliable in pairing our projects with exactly the right developers. They took the time to understand what we needed to hit the ground running fast (and on budget) and have made our outsourcing process remarkably easy and efficient.",
					name: "Scott Hoffer",
					location: "USA",
					date: "May 12, 2023",
				},
			],
		},
	},
	{
		id: "mobile-applications",
		title: "Mobile Applications",
		description:
			"We specialise in developing native iOS and Android apps that are fast, reliable and optimised for each platform. Whether you need a straightforward app or a complex, multi-feature, we have skills to deliver.",
		details: {
			intro:
				"Our mobile app development services deliver high-performance apps tailored to your business needs.",
			areas: [
				{
					number: "01",
					title: "iOS App Development",
					description:
						"Develop robust and scalable iOS applications that meet your business requirements.",
				},
				{
					number: "02",
					title: "Android App Development",
					description:
						"Create feature-rich Android apps that offer a seamless user experience.",
				},
				{
					number: "03",
					title: "Cross-Platform Solutions",
					description:
						"Build apps that work seamlessly across both iOS and Android platforms.",
				},
			],
			platforms: [
				{ name: "iOS", description: "App development for iOS devices." },
				{
					name: "Android",
					description: "App development for Android devices.",
				},
				{
					name: "React Native",
					description: "Cross-platform app development using React Native.",
				},
			],
			benefits: [
				{
					icon: "smartphone",
					title: "Optimized Performance",
					description:
						"Our apps are optimized for performance, ensuring fast load times and smooth operation.",
				},
				{
					icon: "security",
					title: "Secure and Reliable",
					description:
						"We prioritize security, ensuring your app is safe and reliable for users.",
				},
				{
					icon: "update",
					title: "Regular Updates",
					description:
						"We provide regular updates to keep your app current with the latest features and security patches.",
				},
			],
			faqs: [
				{
					question: "What platforms do you develop apps for?",
					answer:
						"We develop apps for both iOS and Android platforms, ensuring a wide reach.",
				},
				{
					question: "How do you ensure app security?",
					answer:
						"We implement industry-standard security practices to protect user data and app integrity.",
				},
			],
			recentProjects: [
				{
					// image: {
					// 	src: "/images/mobile-app-project-1.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "Fitness Tracker App",
					description:
						"A comprehensive app for tracking fitness activities and goals.",
					link: "/projects/fitness-tracker",
				},
				{
					// image: {
					// 	src: "/images/mobile-app-project-2.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "E-commerce App",
					description: "A user-friendly app for seamless online shopping.",
					link: "/projects/e-commerce",
				},
			],
			testimonials: [
				// {
				// 	image: { customer1 },
				// 	text: "Their mobile app development services exceeded our expectations.",
				// 	name: "Bessie Cooper",
				// 	location: "United States",
				// 	date: "Nov 25, 2023",
				// },

				{
					image: { customer1 },
					text: "Silent Mountain is very honest and realistic when scoping and scheduling the development which highly enhances our ability to plan. The team is not only responsive to changes in requirements, but only accessible. I’ve worked with Silent Mountain in the past, and I’m sure we’ll have another opportunity to cooperate.",
					name: "Mesrop Minasyan",
					location: "Armenia",
					date: "Apr 15, 2023",
				},
			],
		},
	},
	{
		id: "web-applications",
		title: "Web Applications",
		description:
			"We have the experience and expertise to build robust, scalable web applications tailored to client’s business needs. From custom web portals to e-commerce platforms, we create a solution designed to fit client’s specific requirements.",
		details: {
			intro:
				"Our web application development services deliver scalable and secure solutions tailored to your business.",
			areas: [
				{
					number: "01",
					title: "Custom Web Portals",
					description:
						"Develop custom web portals that streamline business processes and enhance user interaction.",
				},
				{
					number: "02",
					title: "E-commerce Platforms",
					description:
						"Build scalable e-commerce platforms that provide seamless shopping experiences.",
				},
				{
					number: "03",
					title: "Progressive Web Apps",
					description:
						"Create progressive web apps that offer native app-like experiences on the web.",
				},
			],
			platforms: [
				{
					name: "React",
					description: "Web application development using React.",
				},
				{
					name: "Angular",
					description: "Web application development using Angular.",
				},
				{
					name: "Vue.js",
					description: "Web application development using Vue.js.",
				},
			],
			benefits: [
				{
					icon: "web",
					title: "Scalable Solutions",
					description:
						"Our web applications are designed to scale with your business, ensuring long-term success.",
				},
				{
					icon: "security",
					title: "Secure and Reliable",
					description:
						"We prioritize security, ensuring your web application is safe and reliable for users.",
				},
				{
					icon: "speed",
					title: "Fast Performance",
					description:
						"Our web applications are optimized for speed, ensuring fast load times and smooth operation.",
				},
			],
			faqs: [
				{
					question: "What technologies do you use for web development?",
					answer:
						"We use a variety of technologies including React, Angular, and Vue.js to build robust web applications.",
				},
				{
					question: "How do you ensure web application security?",
					answer:
						"We implement industry-standard security practices to protect user data and application integrity.",
				},
			],
			recentProjects: [
				{
					// image: {
					// 	src: "/images/web-app-project-1.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "Online Learning Platform",
					description:
						"A scalable platform for delivering online courses and training.",
					link: "/projects/online-learning",
				},
				{
					// image: {
					// 	src: "/images/web-app-project-2.png",
					// 	width: 800,
					// 	height: 600,
					// },
					title: "Corporate Intranet",
					description:
						"A secure intranet solution for internal communication and collaboration.",
					link: "/projects/corporate-intranet",
				},
			],
			testimonials: [
				// {
				// 	image: { customer1 },
				// 	text: "The app they developed for us is fast, reliable, and user-friendly.",
				// 	name: "Chris Evans",
				// 	location: "Australia",
				// 	date: "Jan 18, 2023",
				// },
				{
					image: { customer1 },
					text: "When looking to outsource developers for some of our projects, I was fortunate to sign with Silent Mountain. The human resources are of the highest quality. The team provides an exceptional combination of enhanced technical skills and strong communication which is something you do not always get from an external team.",
					name: "Michael Reilly",
					location: "USA",
					date: "Feb 10, 2023",
				},
			],
		},
	},
];

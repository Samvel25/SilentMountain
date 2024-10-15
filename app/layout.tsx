"use client";
import { Chakra_Petch, Inter } from "next/font/google";
import "@/public/scss/style.scss";
import "react-toastify/dist/ReactToastify.css";
import "material-symbols";
import { useEffect } from "react";
import { Providers } from "@/redux/provider";
import AnimatedCursor from "react-animated-cursor";
// import dynamic from "next/dynamic";

// const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
//   ssr: false,
// });
const inter = Inter({ subsets: ["latin"], variable: "--body-font" });
const chakraPetch = Chakra_Petch({
	subsets: ["latin"],
	variable: "--head-font",
	weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	useEffect(() => {
		import("bootstrap/dist/js/bootstrap");
	}, []);
	return (
		<html lang="en">
			<head>
				<title>Gamestorm - Gaming Studio Nextjs Template </title>
			</head>
			<body className={`${chakraPetch.variable} ${inter.variable} `}>
				{/* <AnimatedCursor
					innerSize={6}
					outerSize={35}
					innerScale={1}
					outerScale={1.3}
					outerAlpha={0}
					showSystemCursor
					innerStyle={{
						backgroundColor: "#3FCA90",
						zIndex: 99999,
					}}
					outerStyle={{
						border: "2px solid #3FCA90",
						zIndex: 99999,
					}}
				/> */}
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}

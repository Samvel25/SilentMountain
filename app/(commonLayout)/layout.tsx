import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/home-2/Footer";

export const metadata: Metadata = {
	title: "BabyCheese - Unity Game Studio & Asset Creator",
	description:
		"BabyCheese is a leading studio specializing in developing games and crafting high-quality assets for Unity. Elevate your game development with our expertise.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}

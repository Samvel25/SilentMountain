import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/home-3/Footer";

export const metadata: Metadata = {
	title: "Gamestorm - Gaming studio nextjs template",
	description: "Nextjs template for gaming studio - bootstrap",
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

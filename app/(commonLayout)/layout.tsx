import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/home-2/Footer";

export const metadata: Metadata = {
	title: "BabyCheese - Unity Game Studio & Asset Creator",
	description:
		"We are a technical agency that builds digital products for businesses worldwide",
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

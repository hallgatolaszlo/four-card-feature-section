import "@/app/globals.css";
import { poppins } from "@/app/ui/fonts";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Four Card Feature Section",
	description:
		"A simple four card feature section built with Next.js and Tailwind CSS.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={`${poppins.className} antialiased`}>
			<body>{children}</body>
		</html>
	);
}

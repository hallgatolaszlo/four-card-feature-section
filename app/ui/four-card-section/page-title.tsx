"use client";

import { BREAKPOINTS } from "@/app/lib/constants";
import styles from "@/app/ui/four-card-section/styles/page-title.module.css";
import useBreakpoint from "use-breakpoint";

export default function PageTitle() {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	return (
		<header className={`${styles["page-title"]}`}>
			<div>
				<h2
					className={
						breakpoint === "mobile"
							? `text-preset-2-mobile`
							: `text-preset-2`
					}
				>
					Reliable, efficient delivery
				</h2>
				<h2
					className={
						breakpoint === "mobile"
							? `text-preset-1-mobile`
							: `text-preset-1`
					}
				>
					Powered by technology
				</h2>
			</div>
			<p
				className={
					breakpoint === "mobile"
						? `text-preset-4-mobile`
						: `text-preset-4`
				}
			>
				Our Artificial Intelligence powered tools use millions of
				project data points to ensure that your project is successful
			</p>
		</header>
	);
}

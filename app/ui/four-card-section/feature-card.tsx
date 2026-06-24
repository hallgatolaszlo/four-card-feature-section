"use client";

import { BREAKPOINTS } from "@/app/lib/constants";
import styles from "@/app/ui/four-card-section/styles/feature-card.module.css";
import Image from "next/image";
import { useBreakpoint } from "use-breakpoint";

function FeatureCard({
	title,
	description,
	borderColor,
	icon,
}: {
	title: string;
	description: string;
	borderColor: string;
	icon: string;
}) {
	return (
		<section
			className={`${styles["feature-card"]}`}
			style={{ borderTopColor: `var(--${borderColor})` }}
		>
			<div className={`${styles["feature-card-content"]}`}>
				<h3 className={`${styles["feature-title"]} text-preset-3`}>
					{title}
				</h3>
				<p className={`${styles["feature-description"]} text-preset-5`}>
					{description}
				</p>
			</div>
			<Image
				className={`${styles["feature-icon"]}`}
				width={64}
				height={64}
				src={icon}
				alt={`${title} icon`}
			/>
		</section>
	);
}

export default function FeatureCards() {
	const { breakpoint } = useBreakpoint(BREAKPOINTS, "desktop");

	const features = [
		{
			title: "Supervisor",
			description: "Monitors activity to identify project roadblocks",
			color: "cyan",
			icon: "/icon-supervisor.svg",
		},
		{
			title: "Team Builder",
			description:
				"Scans our talent network to create the optimal team for your project",
			color: "red",
			icon: "/icon-team-builder.svg",
		},
		{
			title: "Karma",
			description: "Regularly evaluates our talent to ensure quality",
			color: "orange",
			icon: "/icon-karma.svg",
		},
		{
			title: "Calculator",
			description:
				"Uses data from past projects to provide better delivery estimates",
			color: "blue",
			icon: "/icon-calculator.svg",
		},
	];

	if (breakpoint === "desktop") {
		return (
			<article className={`${styles["feature-cards-desktop"]}`}>
				<FeatureCard
					title={features[0].title}
					description={features[0].description}
					borderColor={features[0].color}
					icon={features[0].icon}
				/>
				<div className={`${styles["feature-cards-desktop-column-2"]}`}>
					<FeatureCard
						title={features[1].title}
						description={features[1].description}
						borderColor={features[1].color}
						icon={features[1].icon}
					/>
					<FeatureCard
						title={features[2].title}
						description={features[2].description}
						borderColor={features[2].color}
						icon={features[2].icon}
					/>
				</div>
				<FeatureCard
					title={features[3].title}
					description={features[3].description}
					borderColor={features[3].color}
					icon={features[3].icon}
				/>
			</article>
		);
	}

	if (breakpoint === "tablet") {
		return (
			<article className={`${styles["feature-cards-tablet"]}`}>
				<FeatureCard
					title={features[1].title}
					description={features[1].description}
					borderColor={features[1].color}
					icon={features[1].icon}
				/>
				<div className={`${styles["feature-cards-tablet-row-2"]}`}>
					<FeatureCard
						title={features[0].title}
						description={features[0].description}
						borderColor={features[0].color}
						icon={features[0].icon}
					/>
					<FeatureCard
						title={features[2].title}
						description={features[2].description}
						borderColor={features[2].color}
						icon={features[2].icon}
					/>
				</div>
				<FeatureCard
					title={features[3].title}
					description={features[3].description}
					borderColor={features[3].color}
					icon={features[3].icon}
				/>
			</article>
		);
	}

	return (
		<article className={`${styles["feature-cards-mobile"]}`}>
			{features.map((feature, index) => (
				<FeatureCard
					key={index}
					title={feature.title}
					description={feature.description}
					borderColor={feature.color}
					icon={feature.icon}
				/>
			))}
		</article>
	);
}

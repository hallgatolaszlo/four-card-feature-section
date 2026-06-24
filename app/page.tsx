import FeatureCards from "@/app/ui/four-card-section/feature-card";
import PageTitle from "@/app/ui/four-card-section/page-title";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<main className={styles.main}>
				<PageTitle />
				<FeatureCards />
			</main>
		</div>
	);
}

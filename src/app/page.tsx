import styles from "./page.module.scss";
import HomePage from "@/features/homepage";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomePage />
    </div>
  );
}

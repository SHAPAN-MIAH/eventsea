import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Navbar/Navbar";
import Showcase from "@/components/Showcase/Showcase";

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <Navbar />
        <Showcase />
        <div className={styles.container}>
          <Link href="/about">about</Link>
        </div>
      </div>
    </main>
  );
}

import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Showcase from "@/components/Showcase/Showcase";
import Footer from "@/components/Shared/Footer/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar />
        <Showcase />
        <Footer />
    </main>
  );
}

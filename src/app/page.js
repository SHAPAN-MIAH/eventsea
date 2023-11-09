import styles from "./page.module.css";
import Link from "next/link";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Showcase from "@/components/Showcase/Showcase";
import Footer from "@/components/Shared/Footer/Footer";
import AdvertisementSection from "@/components/sections/AdvertisementSection/AdvertisementSection";

export default function Home() {
  return (
    <main className={styles.main}>
        <Navbar />
        <Showcase />
        <AdvertisementSection/>
        <Footer />
    </main>
  );
}

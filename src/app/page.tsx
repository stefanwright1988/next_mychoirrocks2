import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div style={{ height: "100px" }}></div>
      <main className={styles.main}>
        <div className={styles.skullOverlay}></div>
      </main>
    </>
  );
}

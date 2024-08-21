import styles from "./page.module.scss";
import keepOnTruckin from "../../public/font/font";
import { classNames } from "./_utils/classnames";
export default function Home() {
  return (
    <>
      <div style={{ height: "20px", backgroundColor: "black" }}></div>
      <div className={styles.main}>
        <div className={styles.skullOverlay}></div>
        <div className={classNames(keepOnTruckin.className, styles.hero)}>
          <h1>My Choir Rocks</h1>
        </div>
      </div>
      <div style={{ height: "20px", backgroundColor: "black" }}></div>
    </>
  );
}
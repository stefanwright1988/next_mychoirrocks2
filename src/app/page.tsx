import styles from "./page.module.scss";
import { classNames } from "./_utils/classnames";
import keepOnTruckin from "../../public/font/font";
export default function Home() {
  return (
    <>
      <div className={classNames(keepOnTruckin.className, styles.main)}>
        <p style={{ textAlign: "center" }}>CALLING ALL CHILDREN IN SUFFOLK WHO LOVE TO SING!!! <br /> WE WANT YOU!</p>
      </div>
      <div className={classNames(keepOnTruckin.className, styles.main)} style={{ textAlign: "center", marginBlock: 10 }}>
        <h1 style={{ marginBlock: 10 }}>FACT: EVERY ROCK STAR WAS ONCE A CHILD WHO WAS INSPIRED BY MUSIC AND PERFORMANCE.</h1>
        <p>Hey you...Wanna be in a band? You'll have loads of fun, learn to sing fantastic songs and you'll also get the chance to perform at great venues and local festivals. We also sing at care homes from time to time and raise money for charity. We'll give you as many fantastic opportunities as possible. All you need to decide is which ones you want to take.</p>
        <p>If you're child loves to sing, send them along and we'll show them how to have fun with music, help them to build a bit of confidence and independence and we'll take them on an adventure they'll never forget. Your first session is free so you can see if you like what we do.</p>
        <p>Email today for more information.</p>
        <p>We have after school groups in Lowestoft and Mendham. We also have an increasing number of school choirs so if you think your school needs a show stopping choir, band or a ukulele group, ask your headteacher to get in touch to discuss.</p>
        <p>email: My Choir Rocks today or click here for more info.</p>
      </div >

    </>
  );
}
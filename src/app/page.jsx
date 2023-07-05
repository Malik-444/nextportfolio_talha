import Image from "next/image";
import styles from "./page.module.css";
import homme from "public/homme.png"
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital prducts
        </h1>
        <p className={styles.desc}>
          Turning your Idea into reality. we have a team of tech global experts.
        </p>
        <Button url="/" text="See our works" />
      </div>
      <div className={styles.item}>
        <Image src={homme} alt="Home" className={styles.img}></Image>
      </div>
    </div>
  );
}

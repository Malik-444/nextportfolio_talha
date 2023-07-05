import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgcontainer}>
        <Image
          src="https://images.pexels.com/photos/6147444/pexels-photo-6147444.jpeg?auto=compress&cs=tinysrgb&w=300"
          alt="pexels"
          fill={true}
          className={styles.img}
        ></Image>
        <div className={styles.imgtext}>
          <h1 className={styles.title}>Digital storyteller</h1>
          <h2 className={styles.desc}> Handcraft award winning experts</h2>
        </div>
      </div>
      <div className={styles.textcontainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who we are?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            quas inventore eum saepe commodi distinctio amet dolore minima
            similique temporibus alias sint corrupti voluptatibus laborum
            tempora cupiditate odio quis fuga quia aliquid eaque fugit
            doloremque! Delectus, reiciendis error?
            <br />
            <br /> Totam in impedit aspernatur odio beatae sed eveniet amet
            voluptates laudantium ab. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempore nisi neque praesentium quo facilis
            provident alias consequuntur voluptatibus sed ea.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Laudantium,quas similique temporibus alias sint corrupti
            voluptatibus laborum tempora.
            <br />
            <br />
            -Dynamic Website
            <br />
            <br />
            -Fast and Handy Website
            <br />
            <br />
            -mobile app
          </p>
          <Button url="/about" text="about" />
        </div>
      </div>
    </div>
  );
};

export default About;

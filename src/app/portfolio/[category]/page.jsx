import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data";
import { PageNotFoundError } from "next/dist/shared/lib/utils";

const getData = (cat) => {
  const data = items[cat];
  if (data) {
    return data;
  }
  return new PageNotFoundError();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {Object.keys(data).forEach((item) => {
        return (
          <div className={styles.items}>
            <div className={styles.content}>
              <h1 className={styles.title}>{data[item]}</h1>
              <p className={styles.desc}>desc</p>
              <Button text="see more" url="#"></Button>
            </div>
            <div className={styles.imgContainer}>
              <Image
                src=""
                alt="img"
                className={styles.img}
                fill={true}
              ></Image>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Category;

import React from "react";
import styles from "./darkToggle.module.css";
import { ThemeContext } from "@/Context/ThemeContext";
import  {useContext}  from "react";

const DarkToggle = () => {
  const {toggle, mode}=useContext(ThemeContext);
  return (
    <div className={styles.container} onClick={toggle}>
      <div className={styles.icon}>🌙 </div>
      <div className={styles.icon}>☀️ </div>
      <div
        className={styles.ball}
        style={mode === "dark" ? { left: "2px" } : { right: "2px" }}
      >
        {" "}
      </div>
    </div>
  );
};

export default DarkToggle;

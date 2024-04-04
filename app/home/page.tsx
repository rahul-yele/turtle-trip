/* eslint-disable react/jsx-key */
import Navbar from "@/component/Navbar/Navbar";
import Searchbar from "@/component/Searchbar/Searchbar";
import styles from "./page.module.css";
import Result from "@/component/Result/Result";
import Card from "@/component/Card/Card";
import { useEffect, useState } from "react";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className={styles.body}>
        <Searchbar />
        <Result />
      </div>
      <div className={styles.cardList}>
        {Array(3)
          .fill("")
          .map((item, idx) => (
            <Card className={idx !== 1 ? styles.sideCard : styles.card} />
          ))}
      </div>
    </>
  );
}

'use client'
import React, { useContext } from "react";
import styles from "./page.module.css";
import { BestMusic } from "@/app/components/main/BestMusic";
import { TabContext, TabProvider } from "@/app/components/chart/TabProvider";
import MusicTab from "@/app/components/chart/MusicTab";

const Music = () => {

  return (
    <div className={styles.container}>
      <TabProvider>
        <MusicTab />
        <div className={styles.play__option__container}>
          <a href="#">
            <button>전체 재생</button>
          </a>
          <a href="#">
            <button>선택 재생</button>
          </a>
        </div>

        <BestMusic />
      </TabProvider>
    </div>
  );
};

export default Music;

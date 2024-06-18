import React from "react";
import styles from "./page.module.css";
import { BestMusic } from "@/app/components/main/BestMusic";
import MusicTab from "@/app/components/chart/MusicTab";
import { MusicList } from "@/app/components/chart/MusicList";
import TabProvider from "@/app/components/chart/TabProvider";

const music = () => {
  return (
    <div className={styles.container}>
      <TabProvider>
        <MusicTab />
        <div className={styles.play__option__wrapper}>
          <div className={styles.play__option}>
            <a href="#">
              <button>전체 재생</button>
            </a>
            <a href="#">
              <button>선택 재생</button>
            </a>
          </div>
        </div>
           <MusicList/>

      </TabProvider>
    </div>
  );
};

export default music;

import React from "react";
import styles from "./page.module.css";
import MusicTab from "@/app/components/chart/MusicTab";
import TabProvider from "@/app/components/chart/TabProvider";
import MusicTableRow from "@/app/components/chart/MusicList";

const music = () => {
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

        <MusicList />
      </TabProvider>
    </div>
  );
};

export default music;

export const MusicList = () => {
  const rows = Array.from({ length: 10 }, (_, index) => (
    <MusicTableRow key={index} />
  ));

  return (
    <div className={styles.music__chart__container}>
      <table border={0}>
        <thead>
          <tr>
            <th>
              <span className={styles.blind}>선택</span>
            </th>
            <th>
              <span className={styles.blind}>앨범 썸네일</span>
            </th>
            <th>
              <span className={styles.blind}>랭킹</span>
            </th>
            <th>
              <span className={styles.blind}>타이틀</span>
            </th>
            <th>
              <span className={styles.blind}>가수</span>
            </th>
            <th>
              <span className={styles.blind}>재생</span>
            </th>
            <th>
              <span className={styles.blind}>옵션</span>
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__row}>{rows}</tbody>
      </table>
    </div>
  );
};

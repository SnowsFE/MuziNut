import React from "react";
import styles from "./page.module.css";
import TabProvider from "@/app/components/chart/TabProvider";
import ArtistTab from "@/app/components/chart/ArtistTab";
import ArtistTableRow from "@/app/components/chart/ArtistList";

const artist = () => {
  return (
    <div className={styles.container}>
      <TabProvider>
        <ArtistTab />
        <ArtistList />
      </TabProvider>
    </div>
  );
};
export default artist;

export const ArtistList = () => {
  const rows = Array.from({ length: 10 }, (_, index) => (
    <ArtistTableRow key={index} />
  ));

  return (
    <div className={styles.artist__chart__container}>
      <table border={0}>
        <thead>
          <tr>
            <th>
              <span className={styles.blind}>랭킹</span>
            </th>
            <th>
              <span className={styles.blind}>앨범 썸네일</span>
            </th>
            <th>
              <span className={styles.blind}>가수정보</span>
            </th>
            <th>
              <span className={styles.blind}>팔로잉버튼</span>
            </th>
          </tr>
        </thead>
        <tbody className={styles.table__row}>{rows}</tbody>
      </table>
    </div>
  );
};

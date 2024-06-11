import React from "react";
import styles from "./page.module.css";
import TabProvider from "@/app/components/chart/TabProvider";
import { ArtistList } from "@/app/components/chart/ArtistList";
import ArtistTab from "@/app/components/chart/ArtistTab";

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

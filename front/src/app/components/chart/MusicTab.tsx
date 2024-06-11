"use client";
import { useContext, useState } from "react";
import styles from "../chart/css/Tab.module.css";
import { TabContext } from "@/app/components/chart/TabProvider";

export default function Tab() {
  const { tab, setTab } = useContext(TabContext);

  const onClickFirst = () => {
    setTab("one");
  };
  const onClickSecond = () => {
    setTab("two");
  };
  const onClickThird = () => {
    setTab("three");
  };
  return (
    <div className={styles.homeFixed}>
      <div className={styles.homText}>뮤직 차트</div>
      <div className={styles.homeTab}>
        <div onClick={onClickFirst}>
          최신 음악
          <div className={styles.tabIndicator} hidden={tab !== "one"}></div>
        </div>

        <div onClick={onClickSecond}>
          주간 Top 100
          <div className={styles.tabIndicator} hidden={tab !== "two"}></div>
        </div>
        <div onClick={onClickThird}>
          장르별 음악
          <div className={styles.tabIndicator} hidden={tab !== "three"}></div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import styles from "./css/page.module.css";
import NewMusic from "./components/main/NewMusic";
import BestArtist from "./components/main/BestArtist";
import BestCommunity from "./components/main/BestCommunity";
import BasicCommunity from "./components/main/BasicCommunity";
import { BestMusic } from "./components/main/BestMusic";

const MainPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.divided__section}>
        <div className={styles.section__title}>
          <h1>최신 음악(추천 음악)</h1>
        </div>
        <div className={styles.new__section}>
          <div>←</div>
          <NewMusic />
          <div>→</div>

        </div>
      </div>

      {/* 중간부분 */}
      <div className={styles.divided__section}>
        <div className={styles.music__section}>
          <div className={styles.music__section__left}>
            <div className={styles.section__title}>
              <div>
                <h2>인기 차트 Top 10</h2>
                <h6>최근 1주일 조회수를 기준으로 순위가 매겨집니다.</h6>
              </div>
            </div>
            <BestMusic />
          </div>
          <div className={styles.music__section__right}>
            <div className={styles.section__title}>
              <div>
                <h2> 인기 아티스트</h2>
                <h2 > Top 5</h2>
              </div>
            </div>

            <BestArtist />
          </div>
        </div>
      </div>

      {/* 커뮤니티 부분 */}
      <div className={styles.divided__section}>
        <div className={styles.section__title}>
      <h1>커뮤니티 공간</h1>
        </div>
        <div className={styles.community__section}>
          <BestCommunity />
          <BasicCommunity />
        </div>
      </div>
    </div>
  );
};

export default MainPage;

import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const search = () => {
  return (
    <div className={styles.container}>
      검색했을 때 나오는 상세 페이지 입니다.
      <div className={styles.info__text}>
       <a href="#">아이유</a>에 대한 검색 결과 입니다.
      </div>
      <div className={styles.artist__wrapper}>
        <h2>아티스트</h2>
        <div className={styles.artist__list}>아이유</div>
      </div>
      <div className={styles.music__wrapper}>
        <h2>음악</h2>
        <div className={styles.music__list}></div>
      </div>
      <div className={styles.album__wrapper}>
        <h2>앨범</h2>
        <div className={styles.album__list}>
          <Image
            src="/images/addMusic.png"
            alt="Services"
            width={200}
            height={200}
          />{" "}
          <Image
            src="/images/addMusic.png"
            alt="Services"
            width={200}
            height={200}
          />{" "}
          <Image
            src="/images/addMusic.png"
            alt="Services"
            width={200}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};

export default search;

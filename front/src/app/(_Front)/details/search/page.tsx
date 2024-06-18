import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ArtistTableRow from "@/app/components/chart/ArtistList";
import MusicTableRow from "@/app/components/chart/MusicList";

const search = () => {
  return (
    <div className={styles.container}>
      <div className={styles.play__option__wrapper}>
        <div className={styles.play__option}>
          <a href="#">
            <button>모두</button>
          </a>
          <a href="#">
            <button>앨범</button>
          </a>
          <a href="#">
            <button>아티스트</button>
          </a>
        </div>
      </div>

      <div className={styles.info__text}>
        <a href="#">아이유</a>에 대한 검색 결과 입니다.
      </div>
      <div className={styles.artist__wrapper}>
        <h2>아티스트</h2>
        <ArtistList />
      </div>
      <div className={styles.music__wrapper}>
        <h2>음악</h2>
        <MusicList />
      </div>
      <div className={styles.album__wrapper}>
        <h2>앨범</h2>
        <div className={styles.album__list}>
          <div>←</div>
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
          <div>→</div>
        </div>
      </div>
    </div>
  );
};

export default search;

const ArtistList = () => {
  const rows = Array.from({ length: 2 }, (_, index) => (
    <ArtistTableRow key={index} />
  ));

  return (
    <div className={styles.artist__conatiner}>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

const MusicList = () => {
  const rows = Array.from({ length: 5 }, (_, index) => (
    <MusicTableRow key={index} />
  ));

  return (
    <div className={styles.music__container}>
      <div className={styles.play__option}>
        <a href="#">
          <button>전체 재생</button>
        </a>
        <a href="#">
          <button>선택 재생</button>
        </a>
      </div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ArtistTableRow from "@/app/components/chart/ArtistList";
import MusicTableRow from "@/app/components/chart/MusicList";

const Search = () => {
  // TAB 선택부분 - 전체/앨범/아티스트
  const [selectedTab, setSelectedTab] = useState("전체");

  return (
    <div className={styles.container}>
      <div className={styles.play__option__wrapper}>
        <div className={styles.play__option}>
          <button
            className={selectedTab === "전체" ? styles.selected : ""}
            onClick={() => setSelectedTab("전체")}
          >
            전체
          </button>
          <button
            className={selectedTab === "앨범" ? styles.selected : ""}
            onClick={() => setSelectedTab("앨범")}
          >
            앨범
          </button>
          <button
            className={selectedTab === "아티스트" ? styles.selected : ""}
            onClick={() => setSelectedTab("아티스트")}
          >
            아티스트
          </button>
        </div>
      </div>

      <div className={styles.info__text}>
        <a href="#">아이유</a> 에 대한 검색 결과 입니다.
      </div>

      {selectedTab === "전체" || selectedTab === "아티스트" ? (
        <div className={styles.artist__wrapper}>
          <h2>아티스트</h2>
          <ArtistList />
        </div>
      ) : null}

      {selectedTab === "전체" || selectedTab === "앨범" ? (
        <div className={styles.music__wrapper}>
          <h2>음악</h2>
          <MusicList />
        </div>
      ) : null}
    </div>
  );
};

export default Search;

// const ArtistList = () => {
//   const rows = Array.from({ length: 2 }, (_, index) => (
//     <ArtistTableRow key={index} />
//   ));

//   return (
//     <div className={styles.artist__conatiner}>
//       <table className={styles.table}>
//         <tbody>{rows}</tbody>
//       </table>
//     </div>
//   );
// };

// const MusicList = () => {
//   const rows = Array.from({ length: 5 }, (_, index) => (
//     <MusicTableRow key={index} />
//   ));

//   return (
//     <div className={styles.music__container}>
//       <div className={styles.play__option}>
//         <a href="#">
//           <button>전체 재생</button>
//         </a>
//         <a href="#">
//           <button>선택 재생</button>
//         </a>
//       </div>
//       <table className={styles.table}>
//         <tbody>{rows}</tbody>
//       </table>
//     </div>
//   );
// };

const ITEMS_PER_PAGE__ARTIST = 5;
const ITEMS_PER_PAGE__MUSIC = 10;
const ArtistList = () => {
  const allRows = Array.from({ length: 32 }, (_, index) => (
    <ArtistTableRow key={index} />
  ));
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allRows.length / ITEMS_PER_PAGE__ARTIST);

  const handlePageClick = (pageNum: React.SetStateAction<number>) => {
    setCurrentPage(pageNum);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE__ARTIST;
  const currentRows = allRows.slice(startIdx, startIdx + ITEMS_PER_PAGE__ARTIST);

  return (
    <div className={styles.artist__container}>
      <table className={styles.table}>
        <tbody>{currentRows}</tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};

const MusicList = () => {
  const allRows = Array.from({ length: 25 }, (_, index) => (
    <MusicTableRow key={index} />
  ));
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(allRows.length / ITEMS_PER_PAGE__MUSIC);

  const handlePageClick = (pageNum: React.SetStateAction<number>) => {
    setCurrentPage(pageNum);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE__MUSIC;
  const currentRows = allRows.slice(startIdx, startIdx + ITEMS_PER_PAGE__MUSIC);

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
      <table className={styles.table}>
        <tbody>{currentRows}</tbody>
      </table>
      <div className={styles.pagination}>
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          이전
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={currentPage === index + 1 ? styles.active : ""}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
        >
          다음
        </button>
      </div>
    </div>
  );
};
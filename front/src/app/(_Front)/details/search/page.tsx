"use client";
import React, { useContext, useEffect, useState } from "react";
import styles from "./page.module.css";
import Image from "next/image";
import ArtistTableRow, {
  ArtistDataItem,
} from "@/app/components/chart/ArtistList";
import MusicTableRow from "@/app/components/chart/MusicList";
import { TabContext } from "@/app/components/chart/TabProvider";
import {
  useArtistFetchData,
  useMusicFetchData,
  useSearchFetchData,
} from "@/app/components/useHook";

const Search = () => {
  // TAB 선택부분 - 전체/앨범/아티스트
  const [selectedTab, setSelectedTab] = useState("전체");

  console.log("search 페이지 접속");

  const [url, setUrl] = useState(
    "http://localhost:8080/muzinut/이이?artistpage=1&songpage=2"
  );
  const [key, setKey] = useState("searchArtistDtos");

  useEffect(() => {
    if (selectedTab === "전체") {
      setUrl("http://localhost:8080/muzinut/이이?artistpage=1&songpage=2");
      setKey("searchArtistDtos");
    } else if (selectedTab === "앨범") {
      setUrl("http://localhost:8080/muzinut/이이/song?page=1");
      setKey("totalData");
    } else if (selectedTab === "아티스트") {
      setUrl("http://localhost:8080/muzinut/아이/artist?page=1");
      setKey("totalData");
    }
  }, [selectedTab]);

  // const { contentData, contentNumData, loading, error } = useSearchFetchData({
  //   url: `http://localhost:8080/muzinut/이이?artistpage=1&songpage=2`, // 데이터 가져올 API 엔드포인트
  //   keys: {
  //     Content: "content",
  //     PageSize: "pageSize",
  //   }, // 응답 데이터의 키 });
  // });

  // console.log("서버로부터 온 데이터(freeBoardData),", contentData);
  // console.log("서버로부터 온 데이터(recruitBoardData),", contentNumData);

  // return (
    <div className={styles.container}>
      <h1>Search Results</h1>
      {/* {loading && <p>Loading...</p>}
      {error && <p>에러 발생!</p>} */}

      <div className={styles.play__option__wrapper}>
        {/* <div className={styles.container}>
          {contentData && contentData.length > 0 ? (
            <div className={styles.list__contents__wrap}>
              <ul>
                {contentData.map((item, index) => (
                  <li key={item.userId}>
                    <div className={styles.list__container}>
                      <div className={styles.contents__container}>
                        <div className={styles.ranking__Img}>
                          <h1 className={styles.ranking}>{index + 1}.</h1>
                          <Image
                            src={
                              item.profileImg
                                ? `data:image/png;base64,${item.profileImg}`
                                : ""
                            }
                            alt="album"
                            width={80}
                            height={80}
                          />
                        </div>

                        <h4>{item.nickname}</h4>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p>데이터를 불러올 수 없습니다.</p>
          )}
        </div> */}

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
  // );
};

export default Search;

const ITEMS_PER_PAGE__ARTIST = 5;
const ITEMS_PER_PAGE__MUSIC = 10;
const ArtistList = () => {
  // const allRows = Array.from({ length: 32 }, (_, index) => (
  //   <ArtistTableRow key={index} />
  // ));
  // const [currentPage, setCurrentPage] = useState(1);

  // const totalPages = Math.ceil(allRows.length / ITEMS_PER_PAGE__ARTIST);

  // const handlePageClick = (pageNum: React.SetStateAction<number>) => {
  //   setCurrentPage(pageNum);
  // };

  // const handleNextPage = () => {
  //   setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  // };

  // const handlePrevPage = () => {
  //   setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  // };

  // const startIdx = (currentPage - 1) * ITEMS_PER_PAGE__ARTIST;
  // const currentRows = allRows.slice(
  //   startIdx,
  //   startIdx + ITEMS_PER_PAGE__ARTIST
  // );

  return (
    <div className={styles.artist__container}>
      {/*  <table className={styles.table}>
        <tbody>
          {listItems && listItems.length > 0 ? (
            listItems.map((item, index) => (
              <ArtistList
                key={item.userId}
                index={index}
                artistChartData={item}
              />
            ))
          ) : (
            // 데이터가 없을 때
            <tr>
              <td colSpan={6}>데이터를 불러올 수 없습니다.</td>
            </tr>
          )}
        </tbody> 
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
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음
        </button>
      </div>*/}

      검색 페이지
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
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          다음
        </button>
      </div>
    </div>
  );
};
